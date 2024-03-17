import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import { GetRequest } from './components/GetRequest/GetRequest';
import { PostRequest } from './components/PostRequest/PostRequest';

function App() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <GetRequest />
        <PostRequest />
      </main>
    </>
  );
}

export default App;
