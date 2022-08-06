import { useState, useEffect } from 'react';
import Header from './../../components/header/Header';
import "./Principal.css";
import Footer from '../../components/footer/Footer';
import { Link } from 'wouter';

export default function Principal() {

    const [categoria, setCategoria] = useState("Analisis");
  

  useEffect(() => {}, [categoria]);

  const libros = [
    {
      categoria: "Analisis",
      libros: [
        {
          titulo: "Analisis de Sistemas",
          autor: "Juan Perez",
          descripcion: "Fundamentos de analisis de sistemas",
          url: "https://imagessl1.casadellibro.com/a/l/t5/21/9786073210621.jpg",
          
        },
        {
          titulo: "Introduccion ciencia de datos",
          autor: "Rafael A.",
          descripcion: "Introduccion a la ciencia de datos",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5pmEUt0UwcPFmkO99yqJ31m7mAsX_KIqvUQ&usqp=CAU",
          
        },
        {
          titulo: "Analisis Tecnico",
          autor: "Francisco Linares",
          descripcion: "Aprende a operar con exito en acciones",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrj7BxJNJqANrUdS2nd2iYX7PwUGRPOCne4g&usqp=CAU",
          
        },
        {
          titulo: "Analisis quimicos",
          autor: "Frances Pujol",
          descripcion: "Aprende analisis quimico desde cero",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyGgz3VnUAYrZIOdcoy0TRVXocUowteusqXA&usqp=CAU",
          
        }
      ]

    },
    {
      categoria: "Programacion",
      libros: [
        {
          titulo: "Javascript",
          autor: "Carlos Azaustre",
          descripcion: "Javascript desde cero",
          url: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQMzvGzBVuA2TBOqh0_PNfR51yAqpi_HAHBg-3ZDoZ95DSMnSSfrcO9a90RIl2K1mr1HhwAuB6lQBtWe5xV2b-kiXjT9EVDg8nVnsMfWdHH&usqp=CAc",
          
        },
        {
          titulo: "Java",
          autor: "Jorge Martinez",
          descripcion: "Fundamentos de java",
          url:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTAs3QHTj_IuPMEWDph2PR-mb-IRGZ6kaiJ38XeYP102v3LIVLLOiGGZyyf_5WoMc_IGtk9Xk53_zYo4Vc3X-tcX5bUFbyIfXxz6LW0DvAA&usqp=CAc"

        },
        {
          titulo: "Git",
          autor: "Scott Chacon",
          descripcion: "Fundamentos de java",
          url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGmGQXozkdEpXusJJ4LZwK9pbAj37HancbAg&usqp=CAU"

        },
        {
          titulo: "HTML Y CSS",
          autor: "Jon Duckett",
          descripcion: "Diseña y construye paginas web",
          url: "https://images-na.ssl-images-amazon.com/images/I/31b4K-hFH-L._SX395_BO1,204,203,200_.jpg",
          
        }
      ]
    }
  ];
  return (
        <div>
        <Header setCategoria={setCategoria}  categoria={categoria}/>
          <main className='cover-white'>
                  <section className='container-zoom'>
                      <article>
                            <h2>{categoria}</h2>

                            <div className='container-libros'>
                            {libros.map(libro => {

                              if(libro.categoria === categoria){
                                return libro.libros.map(libro => {
                                 
                                  
                                  return(
                                    <Link to='/libro' onClick={()=>localStorage.setItem('libro', JSON.stringify(libro))}>
                                    
                                          <div className='libro'>

                                          <img src={libro.url} alt={libro.titulo}/>
                                          <h3>{libro.titulo}</h3>
                                          <p>{libro.autor}</p>
                                          
                                          
                                          </div>
                                    </Link>
                                   
                                  )
                                })
                              }
                            })
                            
                          }
                          </div>
                      </article>
                  </section>
          </main>
         <Footer/>
        </div>
  );
}