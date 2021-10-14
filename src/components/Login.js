import React, { useState } from 'react';
import { useAuthContext } from "./contexts/Auth";
import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap';

const Login = () => {
    const { login } = useAuthContext();
    const history = useHistory();

    const [ formData, setFormData ] = useState({ email: "", password: "" })
    const [ error, setError ] = useState();
    const [ loading, setLoading ] = useState(false);
    
    function handleInput(e) {
        e.persist();
        e.preventDefault();
        setFormData(function(prev){
            return {...prev, [e.target.name]: e.target.value}
            
        })}
    const formIncomplete = () => Object.values(formData).some(v => !v)

    const handleClick = (e) => {
        e.preventDefault();
        window.location.href= '/register'
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            await login(formData)
            history.push('/home')
        } catch (err) {
            setLoading(false)
            setError(err)
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit} aria-label="login">
            <input type="email" name="email" value={formData.email} onChange={handleInput} placeholder="Email" />
            <input type="password" name="password" value={formData.password} onChange={handleInput} placeholder="Password" />
            <input type="submit" className={formIncomplete() ? 'disabled' : 'enabled'} disabled={formIncomplete()} value="Login" />
        </form>
        { error && <div id="error">{error}</div> }
        { loading && <div id="loading">Logging in . . .</div> }
        <Button onClick={handleClick}>Register instead</Button>
        </>
    );
}

export default Login;