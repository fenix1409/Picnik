// import { useEffect } from 'react';
import './App.css'
import HeaderBottom from './components/ui/sections/HeaderBottom'
// import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/ui/sections/Footer';
import DashboardRoutes from './routes';
import Header from './components/ui/sections/Header';
// AOS.init();

function App() {
  // useEffect(() => {
  //   AOS.refresh();
  // }, []);

  return (
    <main>
      <Header />
      <HeaderBottom />
      <DashboardRoutes />
      <Footer />
    </main>
  )
}

export default App
