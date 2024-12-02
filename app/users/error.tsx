'use client'

import { useEffect } from "react";

export default function Error({error,reset}:{error: Error; reset: ()=> void;}){
    useEffect(()=>{
        console.error(error);
    },[error]);
    
    
    return(
        <div>
            <h1>Error</h1>
            <p>Please contact with Adminsitrator!</p>
            <button onClick={()=>{reset()}}>Try again!</button>
        </div>
    )
}