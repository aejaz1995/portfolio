import React from 'react'
import styled from "styled-components"
import { NewCard } from './NewCard'

const Div = styled.div`
display:flex;
flex-direction:row;
// margin:10px;
// border:1px solid red;
@media (max-width:360px){
    display:flex;
    flex-direction:column;
    margin:0px;
}
@media (max-width:640px){
    display:flex;
    flex-direction:column;
    margin:0px;
}
@media (max-width:900px)
{   display:flex;
    flex-wrap:wrap;
}   
.zoom{
    transition: transform .2s; /* Animation */
    width: 100%;
    height: 100%;
    margin:10px;
    &:hover{
        transform: scale(1.1);
      
        border-radius:5px;
        style-list:none;
    }
}
`

const Projects = () => {
    const arr=[{img:"animoto.png",title:"Animoto.com",github_link:"https://github.com/subodh5316/animoto-oxygen/tree/master/animaoto-oxygen"},{img:"new_york_times.png",title:"The New York Times",github_link:"https://github.com/aejaz1995/Pentane/tree/main/pentane-nytimes"},{img:"react_card.png",title:"E-commerce website",demo_link:"https://react-card-ii-aejaz1995.vercel.app/",github_link:"https://github.com/masai-course/ti_008-aejaz/tree/master/unit-3/sprint-3/day-2/assignments/react_card_ii"},{img:"stopwatch.png",title:"Stopwatch and Timer",demo_link:"https://stopwatch-ten.vercel.app/",github_link:"https://github.com/masai-course/ti_008-aejaz/tree/master/unit-3/sprint-2/day-1/assignments/timer_stopwatch"}]
    return (
        <>
        <div id="projects">
            <h1 style={{textAlign:"center"}}>Projects</h1>
           <Div>
          
            {arr.map((item, i) =><span className="zoom"><NewCard {...item} key={i}/></span>)}
           </Div>
        </div>
        <div style={{borderTop: '2px solid #fff', marginLeft:"100px",marginTop:"20px", marginRight:"80px"}}></div>
        </>
    )
}

export { Projects }
