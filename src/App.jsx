import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import Banner from './assets/components/Banner';
import SobreNosotros from './assets/components/SobreNosotros';
import Profesores  from './assets/components/Profesores';
import Noticias from './assets/components/Noticias';

function App() {
  return (
    <>
      <Header />
        <Banner />
        <SobreNosotros />
        <Profesores />
        <Noticias/>
      <Footer />
    </>
  )
}

export default App
