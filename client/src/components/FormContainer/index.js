import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../LoginForm";
import "./style.css";
import BelieverSignUpForm from "../BelieverSignUpForm";
import ElfSignUpForm from "../ElfSignUpForm";

const FormContainer = (props) => {
  
  if(props.content==="login"){
    return (
      <div style={{border:"1px solid black", marginBottom:"10px", width: "18rem", backgroundColor:"bisque",display: "block", marginLeft: "auto", marginRight: "auto", borderRadius: "25px", border: "2px solid green", paddingBottom: "10px"}}>
        <div float="left">
          <img src="placeholder1.jpg" alt="Someone's face"></img>
        </div>
        <LoginForm />
      </div>
    );
  } else if(props.content==="believer"){
    return (
        <div style={{border:"1px solid black", marginBottom:"10px", width: "18rem", backgroundColor:"bisque", display:"inline-block",/*marginLeft: "auto",*/ marginRight: "20px", height: "450px",borderRadius: "25px", border: "2px solid green", paddingBottom: "10px",}}>
          <div>
            <img src="placeholder1.jpg" alt="Someone's face"></img>
          </div>

          <Link to="/childsignup" className="btn btn-link text-secondary">
            <span>Are You A Believer?</span>
          </Link>
        </div>
    );
  } else if(props.content==="elf"){
    return (
        <div style={{border:"1px solid black", marginBottom:"10px", width: "18rem", backgroundColor:"bisque",display:"inline-block",marginLeft: "20px",/* marginRight: "auto",*/ borderRadius: "25px", height: "450px",border: "2px solid green", paddingBottom: "10px"}}>
          <div>
            <img src="placeholder2.jpg" alt="Someone's face"></img>
          </div>
          <Link to="/elfsignup" className="btn btn-link text-secondary">
            <span>Are You An Elf?</span>
          </Link>
        </div>
    );
  } else if(props.content==="believerSignUp"){
    return(
      <div style={{border:"1px solid black", marginBottom:"10px", width: "18rem", backgroundColor:"bisque",display:"inline-block",marginLeft: "auto", marginRight: "auto", borderRadius: "25px", height: "450px",border: "2px solid green", paddingBottom: "10px"}}>
        <BelieverSignUpForm />
      </div>
    );
  } else if(props.content==="elfSignUp"){
    return(
      <div style={{border:"1px solid black", marginBottom:"10px", width: "18rem", backgroundColor:"bisque",display:"inline-block",marginLeft: "auto", marginRight: "auto", borderRadius: "25px", height: "450px",border: "2px solid green", paddingBottom: "10px"}}>
        <ElfSignUpForm />
      </div>
    );
  }


  
}

export default FormContainer;
