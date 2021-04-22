import React from 'react'
import styled from "styled-components"
import { Link} from "react-router-dom"

const Wrapper = styled.div`
     &:hover{border:1px solid ${props=>props.border};}
    display:flex;
    flex-direction:column;
    border-radius:10px;
    padding:5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width: 100%;
    margin:2%;

    @media (max-width:360px){
        margin: 0px;
    }


    text-align: center;
    font-family: arial;

    .description{
        display:flex;
        flex-direction: column;
        padding:10px
    }
    .img{
        width:100%;
        height:200px;
        img{
            width: 100%;
            height:100%;
        }
    }
    .gthub_n_demo button{
        background:blueviolet;
        width:auto;
        height:40px;
        border-radius:5px;
        font-weight:bold;
        outline:none;
        border:none;
        margin:2px;
        &:hover{
                background:white;
                color:black;
                border:1px solid black;
                border-radaius:5px;
                cursor:pointer;
        }
    }
    .techstack{}
.link{
    text-decoration:none;
    color:black;
}
`

const NewCard = ({img,title,demo_link,github_link}) => {
    const openInNewTab =(url) => {
        const newTab = window.open(url,"_blank","noopener","noreferrer")
        if(newTab)
        {
            newTab.open=null
        }
    }
    
    return (
        <Wrapper border="blueviolet">
                <div className="img">
                    <img src={img} alt="img"/>
                </div>
                <div className="description">
                    <h1>{title}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit dolorum odit quod! Tempora.</p>
                
                    <div className="gthub_n_demo">
                        <button><Link className="link"  onClick={()=>openInNewTab(github_link)}>Github</Link></button>
                       {demo_link&& <button><Link className="link" onClick={()=>openInNewTab(demo_link)}>Demo</Link></button>}
                    </div>
                    <div className="techstack">
                        {/* <img src/> */}
                    </div>
                </div>
        </Wrapper>
    )
}

export {NewCard}
