export interface User {
    readonly id: number;
    readonly name: string;
    readonly email: string,
    readonly age: string
}

export interface DateProps extends Omit<User, "id"> { }