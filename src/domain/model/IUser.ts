export enum Rol {
    user = 1,
    admin = 10
}

export interface IUser {
    email: string,
    firstName: string,
    lastName: string,
    nick: string,
    password: string,
    mailing: boolean,
    rol: Rol
}
