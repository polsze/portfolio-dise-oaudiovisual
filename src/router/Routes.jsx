import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Home from '../pages/Home'
import VideosPage from '../pages/VideosPage'
import ImagesPage from '../pages/ImagePage'
import PortfolioDetail from '../pages/PortfolioDetail'
import NotFound from '../pages/NotFound'
import ScrollToTop from '../components/ScrollToTop'

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/imagenes" element={<ImagesPage />} />
          <Route path="/proyecto/:id" element={<PortfolioDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default AppRoutes