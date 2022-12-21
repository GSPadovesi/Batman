// import { Container, SearchContainer, divTotal } from './styles'
import * as S from './styles';
import { AiFillLike } from 'react-icons/ai'
import { FiSearch   } from 'react-icons/fi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';

interface CardProps{
   data: any[];
   
}

export function Card({data}: CardProps){ 

    const [like, setLike] = useState('')
    const[search, setSearch] = useState('')

    const handleLike = (e: any, name: string) => {
        e.preventDefault();
        setLike(name);
        toast.success(`Você curtiu ${name}`)
    }

    const filter = data.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase())
    })
    
    return(
        <>
            <S.SearchContainer>
                <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} />
                <p><FiSearch /></p>
            </S.SearchContainer>
            <S.Container>
                {filter.map((item) => (
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
                        <button type='button' value={like} onClick={(e) => handleLike(e, item.name)} ><AiFillLike /></button>
                        <ToastContainer />
                    </div>
                ))}
            </S.Container>
        </>
    )
}