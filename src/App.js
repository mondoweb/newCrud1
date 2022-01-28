import React , { useState  , useEffect  }   from "react";
import './App.css';

import Axios from "axios" ;
// import UpdateDelete from "./container/UpdateDelete";
// import UseEffectOne from "./container/UseEffectOne";



function App() {


  // const [nome1, setNome1] = useState("");
  const [nome, setNome] = useState("");
  const [hobby, setHobby] = useState("");

   const [listaDati, setListaDati] = useState([]);

// aggiornamenti input update
   const [ updatInp, setUpdatInp] = useState("");
  

  


  useEffect(() => {
     
    Axios.get("http://localhost:3001/api/get" ).then((response) => {
     //   console.log(response.data)
     setListaDati(response.data)

    })
    
    
 }, [])

 

  
 //  Cancella 
 const deleteR = (hobbysss) => {
      Axios.delete( `http://localhost:3001/api/delete/${hobbysss}`, {
        /*
         Axios.delete(" http://localhost:3001/api/delete/id", {
      hobby: hobby,
      */
      } );

      
}




//  Aggiorna 
const UpdateR = (movie) => {
    Axios.put("http://localhost:3001/api/update" ,   { 
      nomeOne: movie ,
      hobbyOne : updatInp ,  
    },

    setUpdatInp("")  
)}  




/*
  const nomeP = (e)=>{
      setNome1(e.target.value)
  }

       console.log(nomeP())
  */



//   bottone submit invia   OGETTO USESTATE
const obj =  { 
   nomeOne: nome ,
   hobbyOne : hobby ,
  } ;


  const ButtonSubmit = () => {
    // Axios.post("http://localhost:3001/api/insert" , {
      //  nomeOne: nome ,
        // hobbyOne : hobby ,
      // } );

      Axios.post("http://localhost:3001/api/insert" , obj ,
      
       );
      // alert("success insert ")

      setListaDati([...listaDati  , {  nomeOne: nome ,    hobbyOne : hobby ,}  ] )
    
  }

  return (
    <div className="App">
  
      <h2>  Crud </h2>

      

      <div className='inserimento' >

        <label>  Nome </label>
        <input type="text"   placeholder="Nome..."   name='nameOne' onChange={(e) =>{
             setNome(e.target.value)
        }}  />

        {/* <input type="text"  onChange={()=>{ nomeP()}  }   placeholder=".....Secondo Nome "  /> */}

        <label> Hobby  </label>

        <input type="text"  name='hobby'   placeholder=" Hobby..."  onChange={(e)=>{
          setHobby(e.target.value)
        }}  />

        <button name='submit'  id="buttonBot"  onClick={ButtonSubmit}>  Invia </button>
    
   
     {listaDati.map((el ) => { 
       const {id, nome , hobby  } = el ;
      return (
      <div className="card" key={el.id} >
        <p>   Id:   <b>   {id}    </b>   </p>
        <p>  Nome:  <b>   {nome}  </b>  </p>
        <p> Hobby:  <b>   {hobby }  </b>     </p>

        
        <div className='upDelete'>

        {/*  DELETE   */}
        <button onClick={() => {deleteR(el.hobby) }}>  delete </button>
        
                  {/*  UPDATE     */}
            <input type="text"   placeholder="Scrivi qui..."  onChange={(e)=> {setUpdatInp(e.target.value)}}  />
        <button  onClick={()=> { UpdateR(el.nome) }}> update </button>



        </div>

      </div> 
       )

     })}
  

  {/* <UseEffectOne  /> */}


      </div>
  
    </div>
  );
}

export default App;
