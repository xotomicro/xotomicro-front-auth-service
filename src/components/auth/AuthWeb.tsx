import React from "react"
import {LoginApi} from "@api/LoginApi"
import {getUsername, setToken} from "@services/AuthService"

function handleLogout() {
    sessionStorage.clear();
    window.location.href = "/"
}

export const AuthWeb: any = (props: any): JSX.Element => {
    if (!getUsername()) {
        return (
            <div className="section-app__item">
               <LoginApi setToken={setToken} />
            </div>
            )
    } else {
        return (
            <div className="section-app__item">
                <p>{getUsername()}</p>
                <button onClick={handleLogout}>Logout</button>
            </div>
        )
    }
}