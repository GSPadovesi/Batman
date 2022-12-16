import { Head } from "../../../components/Head"
import { Title } from "../../../components/Title"
import { Card } from "../../../components/Card"
import { dataPersonagens } from "../../../utils/personagensData"

export default function Personagens(){
    const data = dataPersonagens; 
    return(
        <>
            <Head title="Personagens" description="Página de personagens do Batman" />
            <Title>Personagens</Title>
            <Card data={data} />
        </>
    )
}