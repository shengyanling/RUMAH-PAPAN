import Layout from './components/Layout';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FloatingInfoBtn from './components/FloatingInfoBtn';

function App() {
  return (
    <Layout>
      <Navbar />
      <HeroSection />
      <FloatingInfoBtn />
    </Layout>
  );
}

export default App;
