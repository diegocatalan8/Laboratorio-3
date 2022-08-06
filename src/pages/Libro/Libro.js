import { useEffect, useState } from "react";
import "./Libro.css";

export default  function Libro()  {
    

   
    let comentarios = JSON.parse(localStorage.getItem("comentario")) ;
    

    if(comentarios === null || comentarios === undefined || comentarios.length === 0){
        comentarios = [];
        localStorage.setItem("comentario", JSON.stringify(comentarios));
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

        console.log(comentarios);
    
        
    
        localStorage.setItem("comentario", JSON.stringify(comentarios));
    }
   
    const libro = JSON.parse(localStorage.getItem("libro"));
    const comentario = JSON.parse(localStorage.getItem("comentario"));
    

    console.log(comentario);

    

    

    

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
                        <p>{comentario.nombre}</p>
                        <p>{comentario.email}</p>
                        <p>{comentario.comentario}</p>
                        <button type="button">ELIMINAR</button>
                    </div> 
                )
            })}
            

         </div>
        </div>

    );
}