
export function Result({result}) {

    if(result === null) {
        return <div>Zatím žádný výsledek!!</div>
    }


    return (
        <div>
            Výsledek: {result}
        </div>
    )
}