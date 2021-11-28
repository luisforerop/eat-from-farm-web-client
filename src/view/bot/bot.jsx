import React from "react";
import styles from './botPage.module.css';
import Numeros from "../../common/numerostel/numerostel";
import Chat from "../../common/component/Chat";

function Bot() {
    return (
      <div className={styles.conversaciones}>
          <div className={styles.bot}>
              <Chat/>
          </div>
      </div>
    );
  }
  
  export default Bot;