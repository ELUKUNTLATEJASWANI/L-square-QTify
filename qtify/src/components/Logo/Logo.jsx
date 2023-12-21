import React from "react";
import styles from "./Logo.module.css";
import LogoImage from '../../assests/logo.png'
export default function Logo(){
    return <img className={styles.img} src={LogoImage} alt="logo" width={67} />

}

