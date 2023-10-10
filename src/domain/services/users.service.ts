import { Injectable } from '@angular/core';
import { IUser } from 'src/domain/model/IUser';
import * as bcrypt from 'bcryptjs';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    private user: Subject<IUser | null> = new Subject();

    constructor() {}

    async login(email: string, password: string) {
        const user = this._getUser(email);

        if (user == null) return 'signup';

        return bcrypt
            .compare(password, user.password!)
            .then((res) => {
                if (res) {
                    delete user.password;
                    this.user.next(user);
                }
                return res;
            })
            .catch((err: unknown) => {
                console.log(err);
                return false;
            });
    }

    async signup(user: IUser) {
        const _user = this._getUser(user.email);

        if (_user != null) return 'login';

        const usersDB = this.getDB();

        return bcrypt
            .hash(user.password!, 10)
            .then((hash: string) => {
                user.password = hash;
                usersDB.push(user);
                this.setDB(usersDB);
                delete user.password;
                this.user.next(user);
            })
            .catch((err: unknown) => {
                console.log(err);
            });
    }

    logout() {
        this.user.next(null);
    }

    private _getUser(email: string) {
        const usersDB = this.getDB();
        const user = usersDB.find((val) => val.email == email);

        if (user == undefined) return null;

        return user;
    }

    getUser(): Subject<IUser | null> {
        return this.user;
    }

    private getDB(): IUser[] {
        const users = localStorage.getItem('star-wars-db');

        if (users == null) return [];

        return JSON.parse(users);
    }

    private setDB(db: IUser[]) {
        const users = JSON.stringify(db);

        localStorage.setItem('star-wars-db', users);
    }
}
