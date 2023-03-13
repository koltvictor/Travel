import { useParams } from 'react-router-dom'
import { Examples } from '../data/Examples'
import Container from 'react-bootstrap/Container'

export default function ExampleDetails() {

    const { id } = useParams();
    console.log(id)

    const data = Examples.filter((example) => example.id == id)
    console.log(data)

  return (
    <div>
        <h1>{data.map(() => {
            return (
                <Container fluid className="centered">
                    <h2>{data[0].location}</h2>
                    <h5>{data[0].description}</h5>
                    <img src={data[0].image1} alt={data[0].location} className="detailsImg1" /><br/>
                    <img src={data[0].image2} alt={data[0].location} className="detailsImg2" /><br/>
                    <img src={data[0].image3} alt={data[0].location} className="detailsImg3" />
                </Container>
            )
        })}</h1>
    </div>
  )
}
