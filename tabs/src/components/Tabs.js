import React from 'react';
import styles from './Tabs.module.css'
function Tabs(props){
    const {tabsList, setCurrentContent} = props;
    return(
        <div className={styles.container}>
            <h1> Hello from Tabs assignment</h1>
            <div className={styles.tabs}>
                {tabsList.map( (tab,index) => 
                    <button 
                        className ={styles.tab} 
                        key={index}
                        onClick={ (e) => 
                            setCurrentContent(tab.content)
                            }
                    >{tab.label}</button>
                )}
            </div>
        </div>
    )
}
export default Tabs; 