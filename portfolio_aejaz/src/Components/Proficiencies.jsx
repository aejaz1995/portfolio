import React from 'react'
import styled from "styled-components"

const Wrapper = styled.div`

display:flex;
flex-direction: column;
// border:1px solid red;

.heading{
    text-align:center;
}

.technologies{
    display:flex;
    flex-wrap:wrap;
    div{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        // background:red;
        margin:2.5%;
        width:20%;

        span img{
            // border:1px solid green;
            height:200px;
        }
    }
}
@media (max-width:360px){
    .technologies{
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
}
// @media (max-width:900px){
//     .technologies{
//         flex-wrap:wrap;
//         justify-content:center;
//         align-items:center;
//     }
// }
@media (max-width:640px){
    .technologies{
        
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
}
`


const Proficiencies = () => {
    return (
        <>
        <div>
            <Wrapper>
                    <h1 className="heading"> 
                        Proficiencies
                    </h1>

                    <div className="technologies">
                        <div>
                            <span>
                                <img src="react1.svg" alt="React"/>    
                            </span>
                            <span><h1>React</h1></span>
                        </div>
                        <div>
                            <span>
                                <img src="database-solid.svg" alt="Database"/>     
                            </span>   
                            <h1>Backend</h1>
                        </div>
                        <div>
                            <span><img  src="css3-alt-brands.svg" alt="css3"/></span>
                                <h1>Frontend</h1>
                        </div>
                        <div>
                        <span><img  src="data-structure.svg" alt="Data Structure"/></span>
                                <span><h1>Data Structure</h1></span>
                            </div>
                    </div>
            </Wrapper>
        </div>
          <div style={{borderTop: '2px solid #fff', marginLeft:"100px", marginRight:"80px"}}></div>
        </>
    )
}

export {Proficiencies}
