import { Head } from "../../../components/Head"
import { Title } from "../../../components/Title"
import { Card } from "../../../components/Card"
import { dataHistorias } from "../../../utils/historiasData";
import { useState } from "react";
import { dataContact } from "../../../utils/contactData";

export default function Contact(){

    const data = dataContact;

    return(
        <>
            <Head title="Contato" description="Contato" />
            <Title>Contato</Title>
            <Card data={data} />
        </>
    )
}