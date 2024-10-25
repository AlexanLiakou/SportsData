import { useQuery } from '@tanstack/react-query'
import { getUserData, getFootballTeamData, logIn } from "./axios";

export const useFetchUserData = (userId: string) => {
    return useQuery({
        queryKey: ['user-data'],
        queryFn: () => getUserData(userId),
    });
}

export const useFetchTeamData = (team: string) => {
    return useQuery({
        queryKey: ['team'],
        queryFn: () => getFootballTeamData(team),
        enabled: !!team
    });
}

export const useLogIn = (email:any, password: any) => {
    return useQuery({
        queryKey: ['log-in'],
        queryFn: () => logIn(email, password),
    });
}