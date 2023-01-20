import { Head } from "../../../components/Head"
import { Title } from "../../../components/Title"
import { Card } from "../../../components/Card"
import { dataHistorias } from "../../../utils/historiasData";

export default function Historias(){

    const data = dataHistorias;

    return(
        <>
            <Head title="Historias" description="Melhores historias do batman" />
            <Title>Historias</Title>
            <Card data={data} />
        </>
    )
}