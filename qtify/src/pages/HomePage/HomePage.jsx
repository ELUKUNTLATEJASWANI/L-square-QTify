import React from "react";
import styles from "./HomePage.module.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import Section from "../../components/Section/Section";
import { useOutletContext } from "react-router-dom";
function HomePage(){
  const {data}=useOutletContext();
  const {newAlbums,topAlbums,songs}=data;
return <>
  <HeroSection/>
  <div className={styles.wrapper}>
                <Section title="Top Albums" data={topAlbums} type="albums"/>
                <Section title="New Albums" data={newAlbums} type="albums"/>
                <Section title="songs" data={songs} type="albums"/>
            </div>
</>
}
export default HomePage;