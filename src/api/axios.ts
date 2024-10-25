import axios from "axios";
import { LoginCredentials, Registration } from "../models/Credentials";

// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8000',

});

export async function getUserData(userId: string) {
    const res = await axios.get(`http://localhost:8000/users/${userId}`);
    return res;
};

export async function getFootballTeamData(footballTeam: string) {
    const res = await axios.get(`https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${footballTeam}`);
    return res;
};

export async function logIn(credentials : LoginCredentials) {
    const res = axios.post('/api/login',credentials);
    return res;
};

export async function logOut(token: string | null) {
    axios.post('/api/logout', {}, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}

export async function registerUser(formData : Registration) {
    const res = axios.post('/api/register', formData);
    return res;
}
