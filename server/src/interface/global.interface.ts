import { httpsStatusCode } from "../utils/enum/https.enum";

export interface ServiceResponse<T> {
    statusCode: httpsStatusCode;
    body: {
        message: string;
        data?: T;
        details?: string;
    }
}
export interface dateCreate {
    id?: number;
    name: string;
    age: string;
    email: string
    create_time?: Date
    update_time?: Date
}

export interface updateCreate {
    name?: string;
    age?: string;
    email?: string
}
