import { useCallback, useEffect, useState } from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import { GetRequest } from './components/GetRequest/GetRequest';
import { PostRequest } from './components/PostRequest/PostRequest';
import { getFirstUsers } from './api/api';

function App() {
  const [usersList, setUsersList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPage, setNextPage] = useState(null);

  const fetchFirstPage = useCallback(async () => {
    setIsLoading(true);
    try {
      const { users: newUsers, links } = await getFirstUsers();
      setUsersList(newUsers);
      setNextPage(links.next_url);
    } catch (error) {
      console.log('error:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFirstPage();
  }, [fetchFirstPage]);

  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <GetRequest
          usersList={usersList}
          isLoading={isLoading}
          setUsersList={setUsersList}
          nextPage={nextPage}
          setNextPage={setNextPage}
        />
        <PostRequest fetchFirstPage={fetchFirstPage} />
      </main>
    </>
  );
}

export default App;
