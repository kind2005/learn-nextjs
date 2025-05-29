
import Link from "next/link";
import { API_URL } from "../app/constants";
import styles from "../styles/movie-provider.module.css";

export async function getMovieProviderKR(id: string){
    const response = await fetch(`${API_URL}/${id}/providers`, {cache: "force-cache"});
    const providerKR = response.json().then((provider) => 
      provider.KR
    );
    return providerKR;
}

function getProviderDiv(providerObj : [{logo_path : string, provider_id : number, provider_name : string, display_priority : number}]){
  return <ul>
    {providerObj.map((provider) => (
      <li key={provider.provider_id} className={styles.list}>
        <img
          src={provider.logo_path.startsWith("/") ? `https://media.themoviedb.org/t/p/original${provider.logo_path}` : provider.logo_path}
          className={styles.poster}
          alt={provider.provider_name}
        />
        {/* <div className={styles.info}>
          <h1 className={styles.name}>{provider.provider_name}</h1>
          <h3>{provider.display_priority}</h3>
        </div> */}
      </li>
    ))}
    </ul>
}

export default async function MovieProvider({ id } : {id: string}){
    const movieProvider = await getMovieProviderKR(id);
    console.log("@@@ provider : " +JSON.stringify(movieProvider));
    const buy = movieProvider?.buy;
    const flatrate = movieProvider?.flatrate;
    const rent = movieProvider?.rent;
    return (
        movieProvider && <div>
          <div><Link href={movieProvider?.link}>The movie Database</Link></div>
          {flatrate && <><h3>스트리밍</h3>{getProviderDiv(flatrate)}</>}
          {buy && <><h3>구매</h3>{getProviderDiv(buy)}</>}
          {rent && <><h3>대여</h3>{getProviderDiv(rent)}</>}
        </div>
      );
}