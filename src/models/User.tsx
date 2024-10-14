export interface User {
    userId: string;
	name: string;
	surname: string;
    email: string;
    country: string;
    userName: string;
    password: string;
    favouriteSport: string;
    favouriteFootballTeam: string;
    favouriteBasketballTeam: string;
}

export interface Credentials {
    userName: string;
    password: string;
}