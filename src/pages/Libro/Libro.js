import { useEffect, useState } from "react";
import "./Libro.css";

export default  function Libro()  {
    const [estado, setEstado] = useState(false);
    

   //Con Comentarios Guardamos 
    var comentarios = JSON.parse(localStorage.getItem("comentarios")) ;
    
    

    //Si comentarios es null, lo inicializamos como array vacio y lo metemos en el localStorage
    if(comentarios === null || comentarios === undefined || comentarios.length === 0){
        comentarios = [];
        localStorage.setItem("comentarios", JSON.stringify(comentarios));
    }
    
    

    function guardar(){
        let nombre = document.getElementById("nombre-form").value;
        let email = document.getElementById("email-form").value;
        let comentario = document.getElementById("comentario-form").value;
    
       let form = {
            nombre: nombre,
            email: email,
            comentario: comentario
        };
    
       
        
        comentarios.push(form);

        
    
        localStorage.setItem("comentarios", JSON.stringify(comentarios));
    }
   
   
    


    function eliminar(comentario){
       
       
        comentarios.filter(item => {
            if(item.email === comentario.email){
                comentarios.splice(comentarios.indexOf(item), 1);
                localStorage.setItem("comentarios", JSON.stringify(comentarios));
                console.log(comentarios);
            }
                
                
        });
        setEstado(true);

        document.location.reload(estado);
      
       
    }

   useEffect(() => {
    setEstado(false);
    
   }, [comentarios]);
    

    

    //Con esta Obtenemos los datos y los listamos
    var comentario = JSON.parse(localStorage.getItem("comentarios")) ;
   
    const libro = JSON.parse(localStorage.getItem("libro"));

    

    return(
        <div className="libro-container">
        <div className="container-libro-unico">
            <div className="libro-unico">
                <img src={libro.url} alt={libro.titulo}/>
            </div>
           <div className="libro-descripcion">
                <h2>{libro.titulo}</h2>
                <p>Por: {libro.autor}</p>
                <p>{libro.descripcion}</p>

                <button type="button">LEER LIBRO</button>

                <div className="pelota pelota-uno">
                </div>

                <div className="pelota pelota-dos">
                </div>

                <div className="pelota pelota-tres">
                </div>

           
           </div>

           
           </div>
           <section className="section-comentario">
                <h2>Ingresar Comentario</h2>
                <form>
                    <label>Nombre:</label>
                    <input id="nombre-form" type="text" placeholder="Nombre"/>
                    <label>Email:</label>
                    <input id="email-form" type="text" placeholder="Email"/>
                    <label>Comentario:</label>
                    <textarea id="comentario-form" placeholder="Comentario"></textarea>
                    <button   type="submit" onClick={()=> {guardar()}}>Enviar</button>
                </form>    

           </section>
         
         <div className="container-comentarios">
            <h2>Comentarios</h2>
            {comentario.map(comentario => {

                return(
                    <div className="comentario-card">
                        <p id="name">{comentario.nombre}</p>
                        <p id="email">{comentario.email}</p>
                        <p id="comentario">{comentario.comentario}</p>
                        <button type="button" onClick={()=>{eliminar(comentario)}}>ELIMINAR</button>
                    </div> 
                )
            })}
            

         </div>
        </div>

    );
}