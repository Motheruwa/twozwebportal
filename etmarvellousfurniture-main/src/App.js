import React, {useEffect, useState} from 'react';
import TopNavBar from './components/navbar/TopNavBar';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/Service';
import Contact from './pages/Contact';
import About from './pages/About';
import GoTop from './components/navbar/GoTop';
import DetailPage from './pages/DetailPage';
import GalleryDetail from './pages/GalleryDetail';
import NewsPage from './pages/NewsPage';
import TenderPage from './pages/TenderPage';
import VacancyPage from './pages/VacancyPage';
import AwardsPage from './pages/AwardsPage';
import FooterPage from './components/footer/Footer';
import {Spin} from 'antd';
import {LoadingOutlined, Loading3QuartersOutlined} from '@ant-design/icons';
import {SiQuantconnect} from 'react-icons/si';
import TopNavBarContact from './components/navbar/TopNavBarContact';
import Gallerys from './pages/Gallerys';
import Appointment from './pages/Apponitment';
import PageNotFound from './pages/PageNotFound';
import NewsDetail from './pages/NewsDetail';

const App = () => {
  const [loadingPage, setLoadingPage] = useState (true);

  useEffect (() => {
    const handleLoad = () => setLoadingPage (false);

    window.addEventListener ('load', handleLoad);

    return () => {
      // Cleanup event listener
      window.removeEventListener ('load', handleLoad);
    };
  }, []);


  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // When the tab is not visible (user switched tabs)
        document.title = 'Gafat Security'; // Change the title
      } else {
        // When the tab becomes visible again (user returns)
        document.title = "WELCOME To Gafat Security"; // Revert to the original title
      }
    };

    // Listen for visibility change event
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);


  return (
    <div>
      {loadingPage
        ? <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100vw',
              height: '100vh',
            }}
          >
            <Spin style={{color:'var(--fcolor)'}} indicator={<Loading3QuartersOutlined spin />} size="large">
              <Spin style={{color:'var(--fcolor)'}} indicator={<LoadingOutlined spin />} size="default">
                <Spin style={{color:'var(--fcolor)'}} indicator={<SiQuantconnect spin />} size="small" />
              </Spin>
            </Spin>
          </div>
        : <div>
            <TopNavBarContact />
            <TopNavBar />
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<Service />} path="/service" />
              <Route element={<About />} path="/about" />
              <Route element={<NewsPage />} path="/news" />
              <Route element={<TenderPage />} path="/tender" />
              <Route element={<VacancyPage />} path="/vacancy" />
              <Route element={<Gallerys />} path="/projects" />
              <Route element={<Appointment />} path="/appointment" />
              <Route element={<PageNotFound />} path="*" />
              <Route element={<AwardsPage />} path="/awards" />
              <Route element={<Contact />} path="/contact" />
              <Route element={<DetailPage />} path="/service/:id" />
              <Route element={<GalleryDetail />} path="/projects/:id" />
              <Route element={<NewsDetail />} path="/news/:id" />
            </Routes>
            <GoTop />
            <FooterPage />
          </div>}
    </div>
  );
};

export default App;
