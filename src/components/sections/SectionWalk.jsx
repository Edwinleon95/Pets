import { CardWalk } from "../cards/CardWalk"
import { Title } from "../titles/Title"
import image1 from '../graphics/images/pexels-blue-bird-7210754.jpg'
import image2 from '../graphics/images/pexels-lumn-237692.jpg'
import { bg_section } from "../../aux/style"


export const SectionWalk = () => {
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