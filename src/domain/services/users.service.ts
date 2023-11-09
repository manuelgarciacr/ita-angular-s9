import { Injectable } from '@angular/core';
import { IUser } from 'src/domain/model/IUser';
import * as bcrypt from "bcryptjs";
// eslint-disable-next-line no-var, @typescript-eslint/no-var-requires

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    //private user = new BehaviorSubject<IUser | null>(null);
    private user: IUser | null = null;

    constructor() {
        console.log(bcrypt)
        // bcrypt.
        // require.config({
        //     paths: { bcrypt: "node_modules/bcryptjs/dist/bcrypt.min.js" },
        // });
        // require(["bcrypt"], function (bcrypt) {
        //     bcrypt.hash("perico")
        // });
    }

    async login(email: string, password: string) {
        const user = this._getUser(email);

        if (user == null) return 'signup';

        return bcrypt
            .compare(password, user.password!)
            .then(res => {
                if (res) {
                    // delete user.password;
                    // this.user.next(user);
                    user.password = "";
                    this.user = user;
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
                // delete user.password;
                // this.user.next(user);
                user.password = "";
                this.user = user
            })
            .catch((err: unknown) => {
                console.log(err);
            });
    }

    // logout() {
    //     this.user.next(null);
    // }
    logout = () => this.user = null;

    private _getUser(email: string) {
        const usersDB = this.getDB();
        const user = usersDB.find((val) => val.email == email);

        if (user == undefined) return null;

        return user;
    }

    // getUser(): Subject<IUser | null> {
    //     return this.user;
    // }
    getUser = () => this.user;

    // isLoggedIn() {
    //     return this.user.getValue() != null;
    // }
    isLoggedIn = () => this.user != null;

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
