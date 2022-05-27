import { NavBar } from "../navBar/NavBar"
import { Title } from "../titles/Title"
import { CardPlans } from "../cards/CardPlans"
import { contentCardPlans } from "../../aux/json"
import { Footer } from "../footer/Footer"
import { bg } from "../../aux/style"
import { Carrusel } from "../head/Carrusel"
import { Head } from "../head/Head"
import { SectionWalk } from "../sections/SectionWalk"

export const HomePage = () => {
    return (
        <main className="container-fluid" style={bg}>
            <div className="row justify-content-center">
                <NavBar />
                <Head/>
                <Carrusel/>
                <SectionWalk/>
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