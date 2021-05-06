import React from 'react'
// import { Navbar } from './Navbar';
import {ImLocation2,ImMobile2 } from "react-icons/im"
import { MdEmail } from "react-icons/md"
import styled from "styled-components"
import { Link } from "react-router-dom"

const  Wrapper = styled.div`
margin-bottom:30vh;
overflow:hidden;
display:flex;
flex-direction:column;
justify-content:center;
postion:relative;
// margin-top:230px;
.imgBox{
    margin-top: 30px;
    text-align: center;   
    width:100%;
}
.profile__img{
    width:250px;
    height:250px;
    border-radius: 50% !important;
    border:10px solid #833ab4;
    width:object-fit;
  
    }
    .info{
        
        h1{
            text-align: center;
            margin-bottom:-15px;
        }
        .intro{
            text-align: center;
            margin-bottom:-15px;
        }
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items:center;
        margin-left:25%;
        margin-right:25%;
    }
    .contacts{
            
        display:flex;
        text-align:center;
        flex-direction:row;
        p{margin-left:20px;}
    }
    .links{display:flex;flex-direction:row;}
    .links span{ margin:5px; align-self:center}
    .links span:nth-child(3){padding:5px;}
    .links img:hover{cursor:pointer; }
    @media (max-width:360px)
    {
        margin-top:30px;
        .contacts{
            
                display:flex;
                text-align:center;
                flex-direction:column;
        }
        .links {
            display:flex;
            justify-items:center;
            align-items:center;
           
        }
    }

    .btn{
        background:blueviolet;
        width:auto;
        height:40px;
        border-radius:5px;
        font-weight:bold;
        outline:none;
        border:none;
        &:hover{
                background:white;
                color:black;
                border:1px solid black;
                border-radaius:5px;
                cursor:pointer;
        }
    }
    
`

const Home = () => {
// https://drive.google.com/drive/folders/1X_bcKHYQA89wULLUHUeDVwL2auLOHxMw
    const openInNewTab =(url) =>{
        const newTab = window.open(url,"_blank","noopener,noreferrer");
        if(newTab)
        {
            newTab.opener=null
        }
    }
   
    return (
          <>        
        <Wrapper id="about">
            <div>
                
                <div className="imgBox">
                    
                        <img  className="profile__img" src="imgSnip.png" alt="Aejaz Ahmed"/>
                    
                </div>
            </div>

            <div className="info">
                <h1>Aejaz Ahmed</h1>
                <h3>Full Stack Developer</h3>
                <p className="intro">
                     An industrious and resourceful person with a problem-solving mindset who enjoys building apps
                </p>
                <br/>
                <div className="contacts">
                    <p> <ImLocation2 /> Aurangabad, Maharashtra, India</p>
                    <p> <ImMobile2 /> 9511216384</p>
                    <p> <MdEmail /> aejazahmedbnm@gmail.com</p>
                </div>
                <div className="links">
                    <span>
                       <Link style={{textDecoration:"none"}} onClick={()=>openInNewTab("https://www.linkedin.com/in/aejaz-ahmed95")}> <img  src="linkedin.svg" alt="Likedin.com" /></Link>
                    </span>
                    <span>
                        <Link style={{textDecoration:"none"}} onClick={()=>openInNewTab("https://github.com/aejaz1995")}> <img src="github.svg" alt="Github.com"/></Link>
                    </span>
                    <span>
                         <Link style={{textDecoration:"none"}} onClick={()=>openInNewTab("https://aejazahmedbnm.medium.com/")}><img width="170px"src="medium-svg.svg" alt="Medium.com"/></Link>
                    </span>
                    <br/>
                </div>
                <span style={{marginTop:"10px"}}>
                        <button className="btn"  onClick={()=>openInNewTab("https://drive.google.com/file/d/1rTKQDus82zsyArL9MhFjrTvVtueQN8EE/view?usp=sharing")}>Download Resume</button> 
                    </span>
                
            </div>
        </Wrapper>
        <div style={{borderTop: '2px solid #fff', marginLeft:"100px",marginTop:"20px", marginRight:"80px"}}></div>
        
        </>
    )
}

export { Home }
