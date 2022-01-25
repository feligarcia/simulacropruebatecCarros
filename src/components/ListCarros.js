import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { url } from '../helpers/url';
import CardCarros from './CardCarros';

function ListCarros() {

    const [carro, setCarro] = useState([]);

    const getData = () => {
        axios.get(url)
        .then(response => {
            setCarro(response.data)
            console.log(response.data)
        })
        .catch(error => {
            console.log(error);
        })
}

const deleteData = (id) => {
    axios.delete(url+id)
    .then(response => {
        getData();
      
   })
   .catch(error => {
       console.log(error);
   })
}

useEffect(() => {
  getData()
}, []);


  return (<div>
      <h1>Lista de autos a la venta</h1>
        {
            carro.map((auto)=>{
                
                return (
                    <div>
                    <CardCarros carro={auto} key={auto.id}/>
                    <button onClick={() => deleteData(auto.id)}>Eliminar</button>
                    </div>
                    

                )

            })
        

        
        }
  </div>);
}

export default ListCarros;
