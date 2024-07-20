import React, { useState } from 'react'
import Input from "../../../components/atoms/input";
import Button from '../../../components/atoms/button';
import styles from './partials.module.scss';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import props from 'prop-types';
import { useNavigate } from 'react-router-dom';
import utils from "../../../utils/localstorage";

function Signin() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        //logic for signup
        if(!email.length || !password.length) toast.error("Some required fields are empty!")
        fetch("http://localhost:3001/api/users/signin" , {
                body : JSON.stringify({
                    
                    email,
                    password,
                }),
                method : "POST"
            }).then((res) => res.json()).then((data) => {
                if(data?.success===201)

                
                {toast.success("User logged in successfully!");
                    
                    utils.addToLocalStorage('auth key', data.token);
                    navigate("/notes");
                
                }else toast.error(data?.message);
            }).catch(error => {
                console.log({error});
                toast.error("User login failed!")
            });
        
    };
  return (
    <div className={styles.form}>
            <Button 
                text="Join with google"
                icon="bi:google"
                className={styles.google}
            />
            <div className={styles.option}>
                <span>or join with email address</span>
            </div>
            <article className={styles.details}>
                <Input
                type="email"
                value={email} 
                placeholder={"Type your Email"}
                onChange={(e) => setEmail(e.target.value)}></Input>
                <Input
                type="password"
                value={password} 
                placeholder={"Type your password"}
                onChange={(e) => setPassword(e.target.value)}></Input>
            <Button 
                text="Join with email"
                icon="material-symbols:login"
                className={styles.emailBtn}
                handleClick={handleLogin}
            />
            </article>
            </div>
  );
}

export default Signin
