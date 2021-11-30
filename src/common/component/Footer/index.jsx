import React, { useContext } from "react";
import { ChatContext } from "../../../context/ChatContext";
import styles from './footerPage.module.css';

function Footer() {
  const { options, setCurrentElection } = useContext(ChatContext)
  const { optionsStyles, footer } = styles
  return (
    <div className={footer}>
      {
        options?.map((option, index) => {
          return (
          <button 
            className={optionsStyles} 
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
  );
}

  export default Footer;
  