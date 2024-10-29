import axios from "axios";
import { LoginCredentials, Registration } from "../models/Credentials";


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


export async function getUserData(token: string | null)  {
    const res = await axios.get("/api/user",{
    headers: {Authorization: `Bearer ${token}`}
    });
    return res;
}

