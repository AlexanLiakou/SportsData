import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'


const ErrorPage = () => {
    return(
        <div className="flex justify-center items-center h-[100%] px-3">
            <div className="flex flex-col gap-y-8 items-center bg-white rounded-md border-transparent p-10">
                <div className="">
                    <FontAwesomeIcon icon={faTriangleExclamation} className="text-[6rem]" style={{color: "#075052"}} />
                </div>
                <div className="">
                    <p className="text-customLightGreen font-bold text-lg">The page you requested does not exist. Please try again.</p>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage;