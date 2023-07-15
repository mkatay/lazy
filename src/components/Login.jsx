import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import {Form,FormGroup,Input,Label,FormFeedback,Button} from "reactstrap"

export const Login = ({setIsLoggedIn,setLoggedInUser}) => {
  const [password,setPassword]=useState("")
  const [isValidP,setIsValidP] = useState(null)
  const [username,setUsername]=useState("")
  const [isValidU,setIsValidU] = useState(null)

 const navigate=useNavigate()

  console.log('env:',import.meta.env.VITE_USERNAME);

  const handleCheckUsername=() => {
    console.log(username)
    username==import.meta.env.VITE_USERNAME? setIsValidU(true):setIsValidU(false)
    console.log('isValidU:',isValidU)
  }

  const handleLogin=() => {
    if(password==import.meta.env.VITE_PW){
        setIsValidP(true)
         setIsLoggedIn(true)
         setLoggedInUser(username)
         navigate('/lazy/')
    }else
      setIsValidP(false)
   
  }
  return (
    <Form className="login border p-3 shadow mt-1 rounded">
        <h3>Login form</h3>
        <FormGroup>
        <Label for="username">Jelszó:</Label>
        <Input id="username"  autoFocus
            className={isValidU==null? "" : (isValidU ? "is-valid" : "is-invalid")}
            value={username} onChange={(e)=>setUsername(e.target.value)}   
            onBlur={handleCheckUsername}
        />
          <FormFeedback >Helytelen felhasználónév!</FormFeedback>
        
      </FormGroup>
      <FormGroup>
        <Label for="password">Jelszó:</Label>
        <Input id="password" type="password" 
            className={isValidP==null? "" : (isValidP ? "is-valid" : "is-invalid")}
            value={password} onChange={(e)=>setPassword(e.target.value)}
        />
          <FormFeedback >Helytelen jelszó!</FormFeedback>
        
      </FormGroup>
      <div>
        <Button id="login" type="button" disabled={!password || !isValidU} color="dark"
          onClick={handleLogin}
          >
            Login
        </Button>
      </div>
    </Form>
  );
};
