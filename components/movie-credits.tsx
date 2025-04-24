
import { API_URL } from "../app/constants";
import styles from "../styles/movie-credits.module.css";

export async function getMovieCredits(id: string){
    const response = await fetch(`${API_URL}/${id}/credits`, {cache: "force-cache"});
    return response.json();
}

export default async function MovieCredits({ id } : {id: string}){
    const movieCredits = await getMovieCredits(id);
    console.log(JSON.stringify(movieCredits));
    return (
        <div className={styles.container}>
          <ul>
          {movieCredits.map((credit) => (
            <li key={credit.id} className={styles.list}>
              <img
                src={credit.profile_path}
                className={styles.poster}
                alt={credit.name}
              />
              <div className={styles.info}>
                <h1 className={styles.name}>{credit.character}</h1>
                <h3 className={styles.name}>({credit.name}){credit.gender == 2 ? '♂️' : '♀️'}</h3>
                <h3>⭐️ {credit.popularity.toFixed(2)}</h3>
              </div>
            </li>
          ))}
          </ul>
        </div>
      );
}