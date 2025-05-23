import { ToastContainer, toast } from 'react-toastify';
import React from 'react'


import Left from "./sections/left";
import Form from "./sections/form";

import styles from "./login.module.scss";

function Login(){
    return(
        <>
            <ToastContainer />
            <main className={styles.container}>
            <Left />
            <Form />
        </main>
        </>
    );
}

export default Login