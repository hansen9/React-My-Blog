import { useState } from "react";

const Login = () => {
    const {email, setEmail} = useState('')
    const {password, setPassword} = useState('')
    const [isLoading, setIsLoadding] = useState(false)

    const handleLogin = ()=>{
        console.log('logged in')
    }
    return ( 
        <div className="login">
            <form  onSubmit={handleLogin}>
                <label>Email</label>
                <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <label>Password</label>
                <input
                type="text"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ></input>

                { !isLoading && <button>Login</button>}
                { isLoading && <button disabled>Logging in...</button>}
            </form>
        </div>
     );
}
 
export default Login;