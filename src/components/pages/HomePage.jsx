import { CardWalk } from "../cards/CardWalk"
import { NavBar } from "../navBar/NavBar"
import { Title } from "../titles/Title"
import image1 from '../graphics/images/pexels-blue-bird-7210754.jpg'
import image2 from '../graphics/images/pexels-lumn-237692.jpg'
import { CardPlans } from "../cards/CardPlans"
import { contentCardPlans } from "../../aux/json"
import { Footer } from "../footer/Footer"
import { bg } from "../../aux/style"
import { Carrusel } from "../head/Carrusel"

export const HomePage = () => {
    const contentCardWalk = [{
        id: 1,
        text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        description: 'Paseo grupal',
        image: image1
    }, {
        id: 2,
        text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        description: 'Paseo personalizado',
        image: image2
    }
    ]
    return (
        <main className="container-fluid" style={bg}>
            <div className="row justify-content-center">
                <NavBar />
                <Carrusel/>
                <Title title={'Programa tu paseo'} />
                {contentCardWalk.map(e => <CardWalk id={e.id}
                    text={e.text}
                    description={e.description}
                    image={e.image}
                />)}
                <Title title={'Nuestros planes'} />
                {contentCardPlans.map(e => <CardPlans id={e.id}
                    text={e.text}
                    description={e.description}
                    title={e.title}
                />)}
                <Footer/>
            </div>
        </main>

    )
}