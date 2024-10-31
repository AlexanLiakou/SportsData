export interface LoginCredentials {
    email: string
    password: string
}

export interface Registration {
    name: string,
    surname: string;
    email: string,
    country: string;
    password: string,
    password_confirmation: string
}

export interface Errors {
    [key: string]: string[];
  }