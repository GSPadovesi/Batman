import { Container } from './styles'
import { AiFillLike } from 'react-icons/ai'
interface CardProps{
   data: any[];
}


export function Card({data}: CardProps){
    console.log(data)
    return(
        <>
            <Container>
                {data.map((item) => (
                    <div key={item.id} className='data'>
                        <img src={item.image} />
                        <h2>Nome: {item.name}</h2>
                        <p>Primeira aparição: {item.First_Appearance}</p>
                        <p>Criado em: {item.Date}</p>
                        <p>Criado por: {item.Created}</p>
                        <div>
                            <strong>Descrição: {item.Description}</strong>
                        </div>
                        <br />
                        <button type='button'><AiFillLike /></button>
                    </div>
                ))}
            </Container>
        </>
    )
}