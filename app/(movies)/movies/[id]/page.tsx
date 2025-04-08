import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
    params: { id: string };
}

export async function generateMetadata( { params: { id } }: IParams ){
    const movie = await getMovie(id);
    return {
        title: movie.title,
    };
}

export default async function MovieDetailPage({ params: { id } }: IParams ){
    console.log("========================\nstart fetching");
    // const id = (await params).id;
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