import Bolinhas from "../../components/Bolinhas";
import MultiCarrossel from "../../components/Carrossel2";
import img from "../../assets/image/modelo.jpeg"
import { imagem1 } from './style';
import Footer from "../../components/Footer";


function Home (){
    return(
        <main>
            <Bolinhas imagem={img} variante={imagem1} />
            <a href="/" nome="Aromatizantes" > Aromatizantes </a>

            <MultiCarrossel/>   
            <Footer />        
        </main>

    );

}

export default Home