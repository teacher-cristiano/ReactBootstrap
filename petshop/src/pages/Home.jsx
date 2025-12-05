import Banner from "../components/Banner"
import ItemCard from "../components/ItemCard"
import card1 from '../assets/img/banho-tosa.jpg'
import card2 from '../assets/img/vacina-cachorro.jpg'

function Home(){
    return(
        <>
        <Banner />
        <div className="container py-5">
            <div className="row">
                <ItemCard imagem={card1} texto="Banho e Tosa" titulo="Banho e Tosa" />
            </div>
        </div>
        </>
    )
}

export default Home