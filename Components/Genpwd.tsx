"use client"
import React,{useState} from 'react'
import generatePassword from "password-generator";

const Genpwd = () => {
    const [password, setPassword] = useState<string>("");
    
    const spcialChar= ['!','@','#','$','%','^','&','*','(',')','_','+','{','}','[',']','|',';',':','<','>','?','/','.',','];
    
    const generateNewPassword = () => {
        const newPassword = generatePassword(
          8

        );
        
        setPassword(password+newPassword);
     
       
    }
    const handleChar = ()=>{
      setPassword(password + spcialChar[Math.floor(Math.random() * spcialChar.length)])
      console.log(password);
    }
    
  return (
    <div className='p-7' >
    <input type="text" value={password} readOnly  className='px-4 h-6 bg-gray-300 text-black ' />
    <br />
    <br />
    <button onClick={handleChar} className='btn btn-primary'>Add Special Character</button>
    <br />
    <br />
    
    <button onClick={generateNewPassword} className='btn btn-primary'>Generate Password</button>
    <br />

    <input type="range" value={password.length} onChange={
      (e)=>setPassword(password.slice(0,parseInt(e.target.value)))
    } min={0
    } max={32}
    
     />
     <br />
     <br />
     
     <span>{password.length}</span>
     <br />
     <br />


    <button className='btn btn-success' onClick={()=>{
      navigator.clipboard.writeText(password);
      alert('Password Copied')

    }} >copy password</button>



   
    </div>
  )
}

export default Genpwd
