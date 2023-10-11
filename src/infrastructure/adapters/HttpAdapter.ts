import { Observable, catchError, map, of, retry, timer } from "rxjs";
import { IDataAdapter, resp } from "./IDataAdapter";
import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
} from '@angular/common/http';
import { Injectable } from "@angular/core";
// const get = async <T>(url: string) => {
//     return fakeFetch<T>(url);
// };

const httpOptions = {
    headers: new HttpHeaders({
        "Content-Type": "application/json",
        //Authorization: 'my-auth-token',
    }),
    observe: "body" as const, // 'body' | 'events' | 'response',
    params: {},
    reportProgress: false,
    responseType: "json" as const,
    withCredentials: false,
};

@Injectable({
    providedIn: "root",
})
export class HttpAdapter implements IDataAdapter {
    constructor(private http: HttpClient) {}

    get = <T>(url: string): Observable<resp<T>> => {
        return this.http.get<T>(url, httpOptions).pipe(
            //TODO: map(resp) runs only if no errors ?????
            map(res => {
                console.log("MAP", res)
                const res2: resp<T> = {
                    status: 3, //res.status,
                    message: "", data: []}
                return res2; // kind of useless
            }),
            //TODO: Only must retry on error!=404
            retry({ count: 2, delay: this.shouldRetry }),
            catchError(this.handleError<T>("http get"))
        );
    };

    handleError<T>(
        operation: string
    ) {
        return (error: HttpErrorResponse): Observable<resp<T>> => {
            const status = error.status
            const message = error instanceof HttpErrorResponse
                    ? error.message
                    : (error as Error).message;
            const data = [] as Array<T>;

            console.log(`${operation} failed: ${message}`);

            // Let the app keep running by returning a safe result.
            return of({status, message, data});
        };
    }

    // A custom method to check should retry a request or not
    private shouldRetry(error: HttpErrorResponse) {
        if (error.status != 404) {
            return timer(1000); // Adding a timer from RxJS to return observable<0> to delay param.
        }

        throw error;
    }
}
