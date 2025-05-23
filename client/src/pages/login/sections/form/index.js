import React, { useState } from 'react'

import BrandLogo from '../../../../components/shared/brand';
// import {Icon} from '@iconify/react';
import styles from './form.module.scss';
import { useNavigate } from 'react-router-dom';
import Signin from '../../partials/signin';
import Signup from '../../partials/signup';
function Form(){
    const [active, setActive] = useState('signin');
    return (
        <section className={styles["form-container"]}>
            <BrandLogo />
        {active === "signin" ? <Signin /> : <Signup />}
        {active ==="signin"? <p>Not a registered user? <span onClick={() => setActive("signup")}>Sign up Now</span></p> :
        <p>Already a registered user? <span onClick={() => setActive("signup")}>Sign in Now</span></p>}
        </section>
    );
}

export default Form;
    