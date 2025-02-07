import React,{useState} from "react";

function MyComponent(){
    const [name,setName]=useState();
    const[age,setAge]=useState(0);
    const [isEmployeed,setIsEmployeed]=useState(false);
    const updateName=()=>{
        setName("mordecai");
        console.log("rigby")
    }

    const incrementAge=()=>{
        setAge(age+1);
    }
    const toggleEmployedStatus=()=>{
        setIsEmployeed(!isEmployeed);
    }
    
    return(
        <div>
            <p>Name:{name}</p>
            <button onClick={updateName}>Set Name</button>
            
            <p>Age:{age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is Employeed:{isEmployeed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>
        </div>
    );
}
export default MyComponent