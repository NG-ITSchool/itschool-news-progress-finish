import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import { Layout } from "../components/Layout";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsList } from "../api/adapters";
import { NewsCardList } from "../components/NewsCardList";

export function Home() {
  // Generam endpoint-urile pentru categoriile de stiri.
  const technologyNewsEndpoint = getNewsCategoriesEndpoint("technology", 1, 6);
  const footballNewsEndpoint = getNewsCategoriesEndpoint("football", 1, 6);
  // Fetch-uim datele de la The Guardian.
  let technologyData = useFetch(technologyNewsEndpoint);
  let footballData = useFetch(footballNewsEndpoint);
  // Adaptam datele de la server la datele necesare componentelor de react.
  const adaptedTechnologyData = getNewsList(technologyData);
  const adaptedFootballData = getNewsList(footballData);

  return (
    <Layout>
      <section className='tech my-5'>
        <Container>
          <h1 className='mb-5 pt-3'>Tech</h1>
          {/* Afisam stirile despre technologie. */}
          <NewsCardList newsList={adaptedTechnologyData} />
          <p>
            Vezi toate știrile legate de tehnologie în secțiunea{" "}
            <Link to='/category/technology' className='text-success'>
              Tech
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className='football my-5'>
        <Container>
          <h1 className='mb-5 pt-3'>Fotbal</h1>
          {/* Afisam stirile despre fotbal. */}
          <NewsCardList newsList={adaptedFootballData} />
          <p>
            Vezi toate știrile legate de tehnologie în secțiunea{" "}
            <Link to='/category/football' className='text-success'>
              Fotbal
            </Link>
            .
          </p>
        </Container>
      </section>
      <section className='favorites my-5'>
        <Container>
          <h1 className='mb-5 pt-3'>Favorite</h1>
          <p>
            Vrei să îți salvezi știrile favorite pentru a le reciti mai încolo?
          </p>
          <p>
            În cadrul fiecărei știri găsești un buton prin care poți adăuga
            știrea la favorite.
          </p>
          <p className='pb-3'>
            Vizitează secțiunea{" "}
            <Link to='/favorites' className='text-success'>
              Favorite
            </Link>{" "}
            pentru a vedea știrile adăugate.
          </p>
        </Container>
      </section>
    </Layout>
  );
}
