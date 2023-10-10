import { Observable } from "rxjs";

export type resp<T> = {
    status: number,
    message: string,
    data: T[]
}

export interface IDataAdapter {
    //get: <T>(url: string) => Promise<{ status: number; data: T }>;
    //put: <T>(url: string, data: T) => Promise<{ status: number; data: T }>;
    get: <T>(url: string, parm?: string) => Observable<resp<T>>;
    put: <T>(url: string, data: T) => Observable<resp<T>>;
    post: <T>(url: string, data: T) => Observable<resp<T>>;
}

