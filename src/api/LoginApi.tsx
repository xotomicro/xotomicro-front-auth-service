import React, {useState} from "react"
import {globalEventDistributor} from "../App"
import {LoginModel, ApiSystem} from "@xotomicro/xotomicro-front-common-registry"
import {ValidationSystem} from "@xotomicro/xotomicro-front-common-registry"

async function Login(credentials: LoginModel) {
    return await ApiSystem.postRequest({
        url: `http://${process.env.SERVICE_URL}:8080/auth/login`,
        body: credentials,
    })
}

export function LoginApi({setToken}: any) {
    const [form, updateForm] = useState({username: "", password: ""})
    const [error, setError]: any = useState<any | null>(null)

    function submitResponce(response: {token: any}) {
        setToken(response.token)
    }

    const handleSubmit: any = async (e: any): Promise<void> => {
        e.preventDefault()
        if (ValidationSystem.validate(form, ["username", "password"])) {
            const response = await Login(form)
            if (response.token) {
                submitResponce(response)
                globalEventDistributor.globalStore.username = form.username
                alert("Login successful")
            } else {
                setError(response.error)
            }
        } else {
            alert("The form is not valid. Please try again.")
        }
    }

    return (
        <div className="login">
            {error && <p className="login-error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    <h2>Username</h2>
                    <br />
                    <input type="text" required={true} onChange={(e: any): any => updateForm({...form, username: e.target.value})} />
                </label>
                <br />
                <br />
                <label>
                    <h2>Password</h2>
                    <br />
                    <input type="password" required={true} onChange={(e: any): any => updateForm({...form, password: e.target.value})} />
                </label>
                <div style={{marginTop: 20}}>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
