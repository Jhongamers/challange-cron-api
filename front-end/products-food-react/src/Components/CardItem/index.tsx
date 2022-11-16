import { Container, ImageContainer, CardContent, CardTitle, CardBody } from './styles'
import imageDefault from '../../assets/fruits.png';
interface CardItemProps {
  card: {
    code:string,
    status:string,
    product_name:string,
    image_url:string,
    ingredients_text:string,
    quantity: string,
    url: string,
  }
}
const MAX_LENGTH = 50;
export function CardItem(props: CardItemProps) {
  return (
    <Container>
   
    <a href={props.card.url} target='_blank'>

      <ImageContainer>
        <img src={!props.card.image_url ? imageDefault : props.card.image_url } alt="" />
      </ImageContainer>
      <CardContent>

        <CardTitle>
          <h3>{props.card.product_name}</h3>
        </CardTitle>
        <CardBody>
          {props.card.ingredients_text.length > MAX_LENGTH ?
          (
          <p>{props.card.ingredients_text.substring(0,MAX_LENGTH)}...</p>
          ):
          <p>{props.card.ingredients_text}</p>
        }

          <p>{props.card.quantity}</p>
        </CardBody>

      </CardContent>

      
      </a> 
    </Container>


    )
  }