
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class NewUser {
    first_name: string;
    last_name: string;
    email: string;
    nickname: string;
    password: string;
}

export class UpdateUser {
    first_name: string;
    last_name: string;
    email: string;
    nickname: string;
    password: string;
}

export class User {
    id: string;
    first_name: string;
    last_name: string;
    gender?: Nullable<string>;
    email: string;
    nickname: string;
    password: string;
}

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createUser(input: NewUser): User | Promise<User>;

    abstract updateUser(input: UpdateUser): Nullable<User> | Promise<Nullable<User>>;

    abstract deleteUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class ISubscription {
    abstract userCreated(): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
