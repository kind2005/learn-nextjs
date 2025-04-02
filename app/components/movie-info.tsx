import { API_URL } from '../(home)/page';

async function getMovie(id: string){
    console.log(`Fetching movie: ${Date.now()}`)
    await new Promise((resolve) => setTimeout(resolve, 2500));
    const response = await fetch(`${API_URL}/${id}`, {cache: "force-cache"});
    return response.json();
}

export default async function MovieInfo({ id } : {id: string}){
    const movie = await getMovie(id);
    return <h6>{JSON.stringify(movie)}</h6>
}