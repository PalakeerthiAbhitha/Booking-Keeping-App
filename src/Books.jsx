import React, { useEffect, useState } from "react";
import "./App.css";
import Box from '@mui/material/Box';
// import img1 from './img.jpeg'
import library from './library.png'
function Book() {
  let [searchTerm, setState] = useState("");
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://openlibrary.org/search.json?q=the+lord+of+the+rings&page=4")
      .then((response) => response.json())

      .then((data) => {
        
        setData(data.docs);
        console.log(data.docs);
      });
  }, []);

 
  return (


    
    <div className="App">
      <input type="text" placeholder="search..." onChange={(event)=>{
        setState(event.target.value);
      }}/>

      {data
        .filter(
          (value)=> {
            if(searchTerm===""){
              return value
            }
            else if(value.title.toLowerCase().includes(searchTerm.toLowerCase())){
              return value
            }
          }
           
        )

        .map((value,key) => {
          return (
            <div className="imgproperty">
              <div className="row">
                <div className="col-6">
            <Box>
            <div  style={{ border: "2px solid black", margin: "10px" }} key={key}>
               <p>
                 <img src={library}/>
               </p>

              <p>Book Name : {value.title}</p>
              <p> Author Name:{value.author_name}</p>
              <p>Publisher : {value.publisher}</p>
              <p>Pages:{value.number_of_pages_median}</p>
         
              
            </div>
            </Box>
            </div>
            </div>
            </div>
          );

        })}
    </div>
  );
}

export default Book





