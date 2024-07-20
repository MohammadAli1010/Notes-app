import React, { useState } from 'react'
import Input from "../../../components/atoms/input";
import Button from '../../../components/atoms/button';
import styles from './partials.module.scss';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import props from 'prop-types';
import { useNavigate } from 'react-router-dom';
function Signup() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleSignup = () => {
        //logic for signup
        if(!email.length || !password.length || name.length) toast.error("Some required fields are empty!")
        fetch("http://localhost:3001/api/users/signup" , {
                body : JSON.stringify({
                    name,
                    email,
                    password,
                }),
                method : "POST"
            }).then((res) => res.json()).then((data) => {
                if(data?.success===201)

                
                {toast.success("User registered successfully!"); 
                props.handleSwitch();
                }else toast.error(data?.message);
            }).catch(error => {
                console.log({error});
                toast.error("Something went wrong! Try again later.")
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
                type="name"
                value={email} 
                placeholder={"Full Name"}
                onChange={(e) => setName(e.target.value)}></Input>
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
                handleClick={handleSignup}
            />
            </article>
            </div>
  );
}

export default Signup
