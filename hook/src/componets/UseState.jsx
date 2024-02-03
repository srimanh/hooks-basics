// import React,{useState,useEffect} from "react";

// // Uncomment this to view progression 1

// // function UseState(){
// //     const [currAge,setAge] = useState(19);
    
// //     const handleAge = ()=>{
// //       setAge(currAge+1);
// //     }
  
// //     return (
// //       <div>
// //         <h3>My Current Age is {currAge}</h3>
// //         <button onClick={handleAge}>Get Older</button>
// //       </div>
// //     );
// //   }
  
// //   export default UseState;

// //-------------------------------------
// //Uncomment this to view Progression 2

// // function UseState(){
// //     const [currAge,setAge] = useState(19);
// //     const [currSib, setSib] = useState(1);
    
// //     const handleAge = ()=>{
// //       setAge(currAge+1);
// //     }
  
// //     const handleSib = ()=>{
// //       setSib(currSib+1);
// //     }
  
  
// //     return (
// //       <div>
// //         <h3>My Current Age is {currAge}</h3>
// //         <h4>My siblings {currSib}</h4>
  
// //         <button onClick={handleAge}>Get Older</button>
// //         <button onClick={handleSib}>Get more Sib</button>
// //       </div>
// //     );
// //   }
  
// //   export default UseState;

// //--------------------------------------------------------------
// //Uncomment this to view progression 3

// // function UseState(){

// //     const [state, setState] = useState({age:19, siblings:3});
  
// //     const handleState = (val)=>{
    
// //       setState({
// //         ...state,[val]:state[val]+1
// //       })
// //     }
  
// //     const {age,siblings} = state;
  
// //     return(
// //       <div>
// //         <h3>My Current Age is {age}</h3>
// //         <h4>My siblings {siblings}</h4>
// //         <button onClick={()=>{handleState("age")}}>age</button>
// //         <button onClick={()=>{handleState("siblings")}}>sib</button>
// //       </div>
// //     )
  
// //   }
  
// //   export default UseState;

// //--------------------------------------------------------------
// //Uncomment this to view progression 4

// // function UseState(){

// //   const [currAge, setAge] = useState(19);
// //   const [currSib, setSib] = useState(3);

// //   return(
// //     <div>
// //       <h3>My Current Age is {currAge}</h3>
// //       <h4>My siblings {currSib}</h4>

// //       <button onClick={()=>setAge(currAge=>currAge+1)}>age</button>
// //       <button onClick={()=>setSib(currSib=>currSib+1)}>sib</button>
// //     </div>
// //   )

// // }

// // export default UseState;

// //------------------------------------------------------------------------
// //Uncommetn this to view progression 5

// // function UseState(){

// //     const [currAge, setAge] = useState(19);
// //     const [currSib, setSib] = useState(3);
  
// //     useEffect(()=>{
// //       alert(`something changed ${currAge}`)
// //     },[currAge])
  
// //     return(
// //       <div>
// //         <h3>My Current Age is {currAge}</h3>
// //         <h4>My siblings {currSib}</h4>
  
// //         <button onClick={()=>setAge(currAge=>currAge+1)}>age</button>
// //         <button onClick={()=>setSib(currSib=>currSib+1)}>sib</button>
// //       </div>
// //     )
  
// //   }
  
  
// //   export default UseState;
  