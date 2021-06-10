//ESTILO Y RECUROS GRÁFICOS
import './App.css';


//MODULOS
import Cabecera from "./Cabecera"
import Footer from "./Footer"
import Peliculas from "./Peliculas"


//JS SERVICIO
import videoclub from "./videoclub"

function App() {
  return (
  <>
   <Cabecera />
   <Peliculas videoclubProps={videoclub}/>
   <Footer/>
  </>
  );
}

export default App;
