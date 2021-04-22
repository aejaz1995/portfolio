import React from 'react'
import styles from "./Css/TechStack.module.css"

export const TechStack = () => {

    const arr=[{img:"html-5.svg",title:"HTML"},{img:"css-3.svg",title:"CSS"},{img:"javascript.svg",title:"JavaScript"},{img:"react.svg",title:"React"}
    ,{img:"redux.svg",title:"Redux"},{img:"mongodb.svg",title:"MongoDb"},{img:"nodejs-icon.svg",title:"NodeJS"},
    {img:"material-ui-1.svg",title:"material UI"}]
    return (
        <>
        <div className={styles.teckStack_root}>
            <h1 style={{textAlign:"center"}}>Tech Stack</h1>

           <div className={styles.techstack}>
            {arr?.map((item, i) => <div className={styles.techstack__items}>

                <img  src={item.img} alt="img"/>                
                <h4>{item.title}</h4>
            </div> )}            
           </div>
        </div>
        <div style={{borderTop: '2px solid #fff', marginLeft:"100px", marginRight:"80px"}}></div>
        </>
    )
}
