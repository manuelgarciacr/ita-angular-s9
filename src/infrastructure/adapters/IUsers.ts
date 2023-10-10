export interface IUsers {
    get: <T>(url: string) => Promise<{ status: number; data: T }>;
    put: <T>(url: string, data: T) => Promise<{ status: number; data: T }>;
}
