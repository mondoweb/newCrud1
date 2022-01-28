import { Axios } from 'axios'
import React , { useState  , useEffect } from 'react'



const UseEffectOne = () => {


    const [listaDati, setListaDati] = useState([]);

    

   useEffect(() => {
    
   Axios.get("http://localhost:3001/api/get" ).then((response) => {
    //   console.log(response.data)
    setListaDati(response.data)
   })
   
   
}, [])

 
 


  return (
        <div>
            <p>jjj</p>

             
 {
 listaDati.map((el) => {
   return (
   <div >
   <h3> Nome : {el.nome} </h3>
   <h3> hobby : {el.hobby} </h3>
   </div> 
   )
 })

 }


        </div>
    )
}

export default UseEffectOne  ;
