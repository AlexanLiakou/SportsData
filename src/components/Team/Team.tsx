import React from "react";
import {useParams} from 'react-router-dom';
import { useFetchTeamData } from "../../api/queries";


{/* <FontAwesomeIcon className="text-[2rem] md:text-[1rem]" style={{color: "#fff"}} icon={faUser}/> */}

const Team = () => {

    const { team } = useParams<{ team: string }>();
    const teamQuery = useFetchTeamData(team || '');

    console.log(teamQuery.data?.data.teams[0]);

    return (
        <div className="p-6 flex flex-col justify-center gap-y-[40px] md:flex-row md:justify-start md:items-start md:gap-x-[40px] h-[100%]">
            <div className="bg-customLightGreen text-white rounded-3xl p-4 flex flex-col gap-y-[20px] min-w-[280px] justify-center">
                <img className="h-[250px] w-[250px]" src={teamQuery.data?.data.teams[0].strBadge}/>
                <p className="font-bold text-[20px] text-center">{teamQuery.data?.data.teams[0].strTeam}</p>
            </div>
            <div className="bg-customLightGreen text-white rounded-3xl p-4 grow">
                <p className="font-bold text-[20px] text-left mb-[20px]">Description:</p>
                <p className="text-left leading-8">{teamQuery.data?.data.teams[0].strDescriptionEN}</p>
            </div>
        </div>
        
    )
}

export default Team;