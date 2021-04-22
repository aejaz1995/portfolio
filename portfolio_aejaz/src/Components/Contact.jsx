import React from 'react'
import styled from "styled-components"
import emailjs from "emailjs-com"

const Wrapper = styled.div`
// border:2px solid red;
margin-top:50px;
.form{
    display:flex;
    flex-direction:column;
    justify-contennt:center;
    align-items:center;
    padding:5px;    
textarea{
    width:100%;
    height:300px;
    font-size:21px;
    color:black;
    border:none;
    &:hover{
        border:1px solid black;
    }
}

}
input[type="text"]{
    width:300px;
    height:50px;
    margin-bottom:20px;
    text-indent:20px;
    border-radius:5px;
    outline:none;
    border:none;
    ::placeholder{
        font-size:21px;
    }    
    &:hover{
        border:1px solid black;
    }
}
input[type="submit"]{
    width:200px;
    height:50px;
    margin-top:20px;
    background-color:blueviolet;
    border-radius:5px;
    font-weight:bold;
    border:none;
    &:hover{
        background-color: white;
        border:1px solid black;
    }
    &:focus{
        opacity:0.5;
    }
}
`

const Contact = () => {

    const [ name, setName ] =React.useState("")
    const [ email, setEmail ] =React.useState("")
    const [ message, setMessage ] =React.useState("Write message here to Aejaz...")
    console.log(name,email,message)
    const sendEmail = (e)=> {
        e.preventDefault();
    
        emailjs.sendForm('service_8ihvpqq', 'template_rhqcl7d', e.target, 'user_65EA2g6SS1KLHbpaD3wJb')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    return (<>

            <Wrapper id="contact">
                <form className="form" onSubmit={ sendEmail }>
                    <h1>Contact Me:</h1>
                    <input type="text" name="name" placeholder="Full Name" value={ name } onChange={(e)=>setName(e.target.value)}/>
                    <input type="text" name="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <textarea name="message" value={ message } onChange={(e)=>setMessage(e.target.value)}>
                        Write message here
                    </textarea>
                    <input type="submit" value="SEND MESSAGE"/>
                </form>
            </Wrapper>
        
    </>)
}

export { Contact }

