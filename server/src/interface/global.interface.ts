export interface dateCreate {
    id?: number;
    name: string;
    age: string;
    email: string
    create_time?: Date
    update_time?: Date
}

export interface updateCreate  {
    name?: string;
    age?: string;
    email?: string
}

export interface promsCreate {
    readonly id?: number;
    readonly name: string;
    readonly age: string;
    readonly email: string
    readonly create_time?: Date
    readonly update_time?: Date
}