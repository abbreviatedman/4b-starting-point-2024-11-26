import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "./constants";

function OneDebut() {
    const params = useParams();
    const [debut, setDebut] = useState({
        characterName: '',
        film: '',
        year: '',
    })

    useEffect(() => {
        async function getDebut() {
            const response = await axios(`${API_URL}/debuts/${params.name}`);
            setDebut(response.data.payload);
        }

        getDebut();
    }, [])

    return (
        <>
            <h1>{debut.characterName}</h1>
            <p>Debuted in {debut.film}</p>
            <p>Year: {debut.year}</p>
        </>
    )
}

export default OneDebut;