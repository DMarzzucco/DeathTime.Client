import { httpsStatusCode } from "../utils/enum/https.enum";

export interface ServiceResponse<T> {
    statusCode: httpsStatusCode;
    body: {
        message: string;
        data?: T;
        details?: string;
    }
}
export interface Date {
    id: number;
    name: string;
    age: string;
    email: string
    create_time: Date
    update_time: Date
}
export interface dateCreate extends Omit<Date, 'id' | 'create_time' | 'update_time'> { }

export interface updateCreate extends Partial<dateCreate> { }
