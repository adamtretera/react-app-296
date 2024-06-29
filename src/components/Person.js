import { useEffect, useState } from "react";
import { apiGet } from "../utils/api";
import { useParams , Link, useNavigate } from "react-router-dom";

export function Person() {

    const [person, setPerson] = useState(null);


    const [showMessage, setShowMessage] = useState(false)

    function handleClick() {
        // api call
        setShowMessage(true)


        setTimeout(() => {
            setShowMessage(false)
        }, 5000)

        console.log("Ahoj")

    }

    useEffect(() => {


        async function fetchPerson() {
           

            const data = await apiGet("/people/" + params.id);
            setPerson(data)

        }


        fetchPerson();
    }, [])


    if(person === null) {
        return <div>
            Načítám!!!
        </div>
    }




    return (
        <div>

            <Link to="/people">
                Zpět
            </Link>
            <h1>{person.name}</h1>
            <h2>{person.height} cm</h2>

            {showMessage ? <div>Povedlo se přidat</div>:null}

            
        </div>
    )
}
