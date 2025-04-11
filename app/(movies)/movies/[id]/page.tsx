import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

// interface IParams {
//     params: { id: string };
// }
type IParams = Promise<{id: string;}>;

export async function generateMetadata( props: {params : IParams} ){
    const params = await props.params;
    const movie = await getMovie(params.id);
    return {
        title: movie.title,
    };
}

export default async function MovieDetailPage( props: {params : IParams} ){
    console.log("========================\nstart fetching");
    const params = await props.params;
    const id = params.id;
    const movie = await getMovie(id);
    // const video = await getVideos(id);
    // const [movie, video] = await Promise.all([getMovie(id), getVideos(id)]);    //병렬 실행
    return (
        <div>
            {/* Movie detail page */}
            <Suspense fallback={<h2>Loading movie info</h2>}>
                <MovieInfo id={id} />
            </Suspense>
            {/* Movie Videos */}
            <Suspense fallback={<h2>Loading movie video</h2>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    );
}