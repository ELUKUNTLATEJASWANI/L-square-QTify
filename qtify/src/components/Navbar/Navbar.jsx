import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

function Navbar(){

    return(
        <div>
        <nav className={styles.navbar}>
           <a href="/">
            <Logo/>
            </a>
            <Search />
            <Button>
                Give Feedback
            </Button>
        </nav>  
     </div>
    )
}

export default Navbar;