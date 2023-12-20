import React from "react";
import styles from "./Search.module.css";
import {ReactComponent as SearchIcon} from "../../assests/searchicon.svg"; 
// import Navbar from "../Navbar/Navbar.jsx"
function Search(placeholder){
    const onSubmit=(e)=>{
        e.preventDefault();
        //write submission logic here
    }
    return(
        <form className={styles.wrapper} onSubmit={onSubmit} >
           <input className={styles.search}  placeholder="Search a album of your choice" required/>
           <button className={styles.searchButton} type="submit">
              <SearchIcon/>
            </button> 
        </form>
    );
}

export default Search;