import MovieCredits, { getMovieCredits } from "../../../../../components/movie-credits";


type IParams = Promise<{id: string;}>;

export default async function MovieCreditsPage( props: {params : IParams} ){
    console.log("========================\nstart fetching");
    const params = await props.params;
    const id = params.id;
    const movieCredits = await getMovieCredits(id);
    return (
        <div>
            <MovieCredits id={id} />
        </div>
    );
}