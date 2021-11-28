import React, { useContext } from "react";
import { ChatContext } from "../../../context/ChatContext";
import styles from './footerPage.module.css';

function Footer() {
  const { options, setCurrentElection } = useContext(ChatContext)
  return (
    <div className={styles.footer}>
      <div className={styles.escritorio}>
        {
          options?.map((option, index) => {
            return (
            <button 
              className={styles.boton} 
              key={index} 
              onClick={()=> {
                if(option.handler){
                  option.handler(option)
                }
                setCurrentElection({
                  ...option
                })
              }}>
              {option.message}
            </button>
            )
          })
        }
      </div>
    </div>
  );
}

  export default Footer;
  