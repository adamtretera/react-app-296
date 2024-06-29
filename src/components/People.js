import { useEffect, useState } from "react"
import { apiGet } from "../utils/api";
import { Link } from "react-router-dom";

export function People() {
    const [people, setPeople] = useState(null);


    useEffect(() => {

        async function fetchPeople() {
            const data = await apiGet("/people");

            setPeople(data.results);

        }

        fetchPeople()
    }, [])


    if(people === null) {
        return <h1>Načítám data 🌀</h1>
    }



    return (
        <div>
            {people.map((person, index) => {
                return (
                    <Link key={person.url} to={"/people/" + (index + 1)}>
                    <div >
                        <h1 >{person.name}</h1>
                        <h2>{person.height} cm</h2>
                    </div>
                    </Link>

                )
            })}
        </div>
    )
}




