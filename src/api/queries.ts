import { useQuery } from '@tanstack/react-query'
import { getFootballTeamData} from './axios';

export const useFetchTeamData = (team: string) => {
    return useQuery({
        queryKey: ['team'],
        queryFn: () => getFootballTeamData(team),
        enabled: !!team
    });
}