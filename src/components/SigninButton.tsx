import type React from "react";

export const SigninButton: React.FC = () =>{
    return(
        <>
            <div className="mt-15">
                <button className="w-[358px] h-[51px] bg-green-600 rounded hover:bg-green-700 cursor-pointer">Sign In</button>
            </div>
        </>
    )
}