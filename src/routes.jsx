import { Routes, Route } from 'react-router-dom'
import StoreProvider from './components/Store/Provider'
import Private from './components/Routes/Private/Private'
import DefaultPage from './components/DefaultPage'

import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import Login from './pages/Login/index'
import BrandCreate from './pages/Brands/Create'
import TransmissionCreate from './pages/Transmissions/Create'
import FuelCreate from './pages/Fuels/Create'
import CarmodelCreate from './pages/Carmodels/Create'
import Cars from './pages/Cars/index'
import CarCreate from './pages/Cars/Create'

export default function AppRoutes() {   
   return (
    <StoreProvider>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          
          {/* Rotas padrões  */}
          <Route index element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/about" element={<Home />} />
          <Route path="/favorites" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* Rotas do veículo  */}
          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/:id" element={<Home />} />
          <Route path="/cars/new" element={<CarCreate />} />
          <Route path="/cars/edit" element={<Home />} />
          <Route path="/cars/delete" element={<Home />} />

          {/* Rotas da marca  */}
          <Route path="/brands/new" element={
            <Private>
              <BrandCreate />
            </Private>
          } />
          <Route path="/brands/edit" element={
            <Private>
              <Home />
            </Private>
          } />
          <Route path="/brands/delete" element={
            <Private>
              <Home />
            </Private>
          } />

          {/* Rotas do modelo do veículo  */}
          <Route path="/carmodels/new" element={
            <Private>
              <CarmodelCreate />
            </Private>
          } />
          <Route path="/carmodels/edit" element={
            <Private>
              <Home />
            </Private>
          } />
          <Route path="/carmodels/delete" element={
            <Private>
              <Home />
            </Private>
          } />

          {/* Rotas da transissão  */}
          <Route path="/transmissions/new" element={
            <Private>
              <TransmissionCreate />
            </Private>
          } />
          <Route path="/transmissions/edit" element={
            <Private>
              <Home />
            </Private>
          } />
          <Route path="/transmissions/delete" element={
            <Private>
              <Home />
            </Private>
          } />

          {/* Rotas do combustível */}
          <Route path="/fuels/new" element={
            <Private>
              <FuelCreate />
            </Private>
          } />
          <Route path="/fuels/edit" element={
            <Private>
              <Home />
            </Private>
          } />
          <Route path="/fuels/delete" element={
            <Private>
              <Home />
            </Private>
          } />
        </Route>
      </Routes>
    </StoreProvider>
  )
}