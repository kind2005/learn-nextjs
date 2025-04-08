import { API_URL } from '../app/(home)/page';
import styles from "../styles/movie-videos.module.css";

async function getVideos(id: string){
    console.log(`Fetching movie: ${Date.now()}`)
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    // throw new Error("something broke error");
    const response = await fetch(`${API_URL}/${id}/videos`, {cache: "force-cache"});
    return response.json();
}

export default async function MovieVideos({ id } : {id: string}){
    const videos = await getVideos(id);
    // return <h6>{JSON.stringify(videos)}</h6>
    return (
        <div className={styles.container}>
          {videos.map((video) => (
            <iframe
              key={video.id}
              src={`https://youtube.com/embed/${video.key}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={video.name}
            />
          ))}
        </div>
    );
}