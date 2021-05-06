import React from 'react'
import  styled from "styled-components"

const Div = styled.div`
border:1px solid 5px;
// width:20rem;
@media (min-width:360px)
{
    display:none;
}
@media (min-width:640px)
{
    display:flex;
    img{
        width:600px;
        margin:15px;
    }
}
@media (min-width:900px)
{
    display:flex;
    justify-content:center;
    align-items:center;
    img{
        width:800px;
    }
}
`

const GitImg = () => {
    return (
        <>
          <Div>
                <img  src="git_commits.png" alt="Git Commits"/>
            </Div>  
        </>
    )
}

export default GitImg
