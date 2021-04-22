import React from 'react'
import styled from 'styled-components'


const Wrapper= styled.div`

display:flex;
flex-wrap:wrap;
justify-content:space-between;
// border:1px solid black;
margin-left:15%;
margin-right:15%;
margin-top:200px;
.items{
    width:150px;
    height:150px;
    border:10px solid red;
    border-radius:50%;
    display:flex;
    justify-content:space-around;

    h1{
        text-align:center;
    }
}
.title{
    text-align:center;
}

//
`
const GitImg=styled.div`
display:flex;
flex-direction:column;
width:100%;
height:fit-content;
justify-content:center;
align-items:center;
margin-top:100px;
img{
    margin-top:-50px;
    padding:10%;
    border-radius:15px;
    width:100%;
}
`

const Summary = () => {

    const arr =[{
        nums:"1200+ hours",
        title:"Coding Sessions"
    },{
        nums:"100+ hours",
        title:"Soft Skill Sessions"
    },{nums:"200+", title:"Git commits"}]
    return (
       <>
         <Wrapper>
                {arr.map((item,indx) => 
                    <div key={indx} >
                        <div className="items">
                            <h1> {item.nums}</h1>
                        </div>
                        <h5 className="title">{item.title}</h5>
                    </div>
                )}
        </Wrapper>   
       
        <GitImg className="git_img">
            <h1 style={{alignTextAlign: 'center'}}> Git</h1>
            <img  src="git_commits.png" alt="Git Commits"/>
        </GitImg>
        <div style={{borderTop: '2px solid #fff', marginLeft:"100px",marginTop:"20px", marginRight:"80px"}}></div>
       </>     
    )
}

export {Summary}
