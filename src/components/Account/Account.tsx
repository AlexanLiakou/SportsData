import {useContext} from "react";
import {AuthContext } from '../../contexts/auth';
import { useFetchTeamData } from "../../api/queries";


const Account = () => {

    const {user} = useContext(AuthContext);
    const {data} = useFetchTeamData(user!.favourite_team);
   
    console.log(data);
    return(
        <div className="account-container pb-[100px] p-[30px] bg-transparent flex flex-col custom-1024:flex-row gap-[50px] custom-1024:items-start justify-start w-[100%]">
            <div className="bg-white p-5 flex flex-col gap-3 rounded-3xl custom-1024:min-w-[350px]">
                <div className=" bg-customLightGreen p-4 flex flex-col gap-3 rounded-3xl">
                    <p className="text-white text-[16px] font-bold text-center custom-1024:text-left"><span className="text-white mr-[5px]">User:</span><span className="mr-[5px] text-customDarkgreen">{user!.name}</span><span className="text-customDarkgreen">{user!.surname}</span></p>
                    <p className="text-white text-[16px] font-bold text-center custom-1024:text-left"><span className="text-white mr-[5px]">Country:</span><span className="text-customDarkgreen">{user!.country}</span></p> 
                </div>
                <div className="flex mt-[20px] justify-center bg-customDarkgreen p-3 rounded-3xl">
                    <img src={data?.data.teams[0].strBadge} className="custom-1024:w-[300px] w-[400px] custom-1024:h-[300px] h-[auto] " custom-1024:width={300} height={300}/>
                </div>
                <div className=" bg-customDarkgreen p-4 mt-[20px] flex flex-col gap-3 rounded-3xl">
                    <p className="text-white text-[14px] text-center custom-1024:text-left"><span className="text-white text-[16px] font-bold mr-[5px]">Favourite team:</span><span>{data?.data.teams[0].strTeamAlternate} - {data?.data.teams[0].strLeague}</span></p>
                    <p className="text-white text-[14px] text-center custom-1024:text-left"><span className="text-white text-[16px] font-bold mr-[5px]">Origin:</span><span>{data?.data.teams[0].strLocation}</span></p>
                    <p className="text-white text-[14px] text-center custom-1024:text-left"><span className="text-white text-[14px] font-bold mr-[5px]">Home Stadium:</span><span>{data?.data.teams[0].strStadium}</span></p>
                </div>
            </div>
            <div className="grow bg-customDarkgreen p-5 rounded-3xl">
                <h1 className="text-white text-[25px] font-bold mb-[20px]">{data?.data.teams[0].strTeamAlternate}'s short bio:</h1>
                <p className="text-white text-[16px]">{data?.data.teams[0].strDescriptionEN}</p>
            </div>
        </div>
    )
}

export default Account;