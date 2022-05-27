import { CardWalk } from "../cards/CardWalk"
import { Title } from "../titles/Title"
import image1 from '../graphics/images/pexels-blue-bird-7210754.jpg'
import image2 from '../graphics/images/pexels-lumn-237692.jpg'
import { bg_section } from "../../aux/style"


export const SectionWalk = () => {
    const contentCardWalk = [{
        id: 1,
        text: 'En este paseo tu amigo tendrá la oportunidad de hacer nuevos amigos en un grupo máximo de 5 mascotas.',
        description: 'Programar paseo',
        image: image1
    }, {
        id: 2,
        text: 'En este paseo tu amigo estará solo con su paseador, este es recomendable para mascotas mayores y para mascotas con conducta agresiva.',
        description: 'Programar paseo',
        image: image2
    }
    ]
    return (
        <section className="row  pb-5 mt-5 shadow-sm d-flex justify-content-center" style={bg_section}>
                <Title title={'Programa tu paseo'} />
                {contentCardWalk.map(e => <CardWalk id={e.id}
                    text={e.text}
                    description={e.description}
                    image={e.image}
                />)}
        </section>
    )
}