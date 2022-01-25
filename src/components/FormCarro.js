import React, {useState} from 'react';
import { Form, Button} from 'react-bootstrap';
import axios from 'axios';
import { url } from '../helpers/url';

function FormCarro() {

    const [vehiculo, setVehiculo] = useState({
        nombre: '',
        marca: '',
        modelo: '',
        color: '',
        transmision:'',
        precio:'',
        imagen:'',
    });

    const handleInputChange = ({target}) =>{
        console.log(target.name)
        setVehiculo({
            ...vehiculo,
            [target.name]: target.value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        
    }

    const postData = () => {
        axios.post(url,vehiculo)
       .then(response => console.log(response.data))
       .catch(error => console.log(error))
        
   }
console.log(vehiculo.nombre)
  return (
  <div>
      <h2>Formulario ingreso de vehiculo</h2>
        <Form>
                    <Form.Group className="mb-3" controlId="formNombre" onSubmit={handleSubmit}>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre del vehiculo" value={vehiculo.nombre} name="nombre" onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formMarca">
                        <Form.Label>Marca</Form.Label>
                        <Form.Control type="text" placeholder="Marca" value={vehiculo.marca} name="marca" onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formModelo">
                        <Form.Label>Modelo</Form.Label>
                        <Form.Control type="number" placeholder="Ingrese modelo" name="modelo" value={vehiculo.modelo} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formColor">
                        <Form.Label>Color</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese color" name="color" value={vehiculo.color} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formTransmision">
                        <Form.Label>Transmision</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese tipo de transmision" name="transmision" value={vehiculo.transmision} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formprecio">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control type="number" placeholder="Ingreso el precio de venta" name="precio" value={vehiculo.precio} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formTransmision">
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese URL de la imagen" name="imagen" value={vehiculo.imagen} onChange={handleInputChange} />
                    </Form.Group>
                    <Button variant="primary" id="btnaggVehiculo" type="button" onClick={() => postData()}> Enviar </Button>
    </Form>



  </div>
  );
}

export default FormCarro;
