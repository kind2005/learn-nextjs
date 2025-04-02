import { Suspense } from "react";
import MovieInfo from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";

export default async function MovieDetail({
    params
}:{
    params: Promise<{id: string}>
}){
    console.log("========================\nstart fetching");
    const id = (await params).id;
    // const movie = await getMovie(id);
    // const video = await getVideos(id);
    // const [movie, video] = await Promise.all([getMovie(id), getVideos(id)]);    //병렬 실행
    return (
        <div>
            <h3>Movie detail page</h3>
            <Suspense fallback={<h2>Loading movie info</h2>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h2>Loading movie video</h2>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    );
}