import { Head } from "../../../components/Head"
import { Title } from "../../../components/Title"
import { Card } from "../../../components/Card"
import { dataViloes } from '../../../utils/viloesData';

export default function Viloes(){
    const data = dataViloes; 
    return(
        <>
            <Head title="Vilões" description="Página de vilões do Batman" />
            <Title>Vilões</Title>
            <Card data={data} />
        </>
    )
}