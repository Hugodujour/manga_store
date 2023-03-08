import React, { useEffect, useState } from "react";
import { auth, provider } from "../../firebase/config";
import { signInWithPopup } from "firebase/auth";
import Homepage from "../Homepage";
import Registration from "../Registration";

function SignIn(){
    const [value, setValue] = useState('')
    const handleClick =() =>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem('email',data.user.email)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })

    return (
        <div>
            {value?<Homepage/>:
            <button onClick={handleClick}>Signin with google</button>
            }
        </div>
    )
}

export default SignIn