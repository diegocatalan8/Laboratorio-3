
import "./Header.css";

export default function Header({ setCategoria, categoria }) {
    return (
        <header className="App-header">
                <div className="container-cover">
                        
                                <h1>Biblioteca OpenSource</h1>
                                <form>
                                       
                                        <select id="libros" name="libros">
                                                <option value="Analisis">Analisis</option>
                                                <option value="Programacion">Programacion</option>
                                               
                                        </select>
                                        <input type="button" value="Buscar" onClick={()=>{
                                                setCategoria(document.getElementById("libros").value);
                                                console.log(categoria);
                                        }}/>
                                </form>
                                
                       
                </div>
        </header>
    );

}