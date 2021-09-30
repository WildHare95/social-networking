import preloader from "../../../assets/imeges/preloader.svg";
import React from "react";
import styles from "./PreloaderStyle.module.css"


let Preloader = (props) => {
    return(
        <div className={styles.Pos}>
            <img src={preloader}/>
        </div>
    )
}

export default Preloader