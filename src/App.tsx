// import { useEffect } from 'react';
import './App.css'
import Header from './components/ui/sections/Header'
import HeaderBottom from './components/ui/sections/HeaderBottom'
import Hero from './components/ui/sections/Hero'
// import AOS from 'aos';
import 'aos/dist/aos.css';
import Categories from './components/ui/sections/Categories';
import Faq from './components/ui/sections/Faq';
import Clients from './components/ui/sections/Clients';
// AOS.init();

function App() {
  // useEffect(() => {
  //   AOS.refresh();
  // }, []);

  return (
    <main>
      <Header />
      <HeaderBottom />
      <Hero />
      <Categories />
      <Faq />
      <Clients />
    </main>
  )
}

export default App
