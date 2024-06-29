export async function apiGet(endpoint) {

    const response = await fetch( 
        "https://swapi.dev/api/" + endpoint);
    // (`https://swapi.dev//${endpoint}`)

    if(response.ok) {
        const data = await response.json();
        return data
    }

    return "Chyba!!!!"

}