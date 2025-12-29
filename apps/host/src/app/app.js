import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../pages/Layout/Layout';

const CatalogMf = React.lazy(() => import('catalog/Module'));
const DashboardMf = React.lazy(() => import('store/Module'));
const HelpMf = React.lazy(() => import('help/Module'));
const OffersMf = React.lazy(() => import('offers/Module'));

export function App() {
  return (
    <React.Suspense fallback={<div>Cargando Microfrontend...</div>}>
      <Routes>
        {/* Sección “App” con chrome (Header + SideMenu) */}
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/catalog" replace />} />
          <Route path="/catalog" element={<CatalogMf />} />
          <Route path="/dashboard" element={<DashboardMf />} />
          <Route path="/help" element={<HelpMf />} />
          <Route path="/offers" element={<OffersMf />} />
        </Route>

        {/* Otras secciones podrían tener su propio Layout:
            /login, /error-access, /no-access, etc. */}
      </Routes>
    </React.Suspense>
  );
}

export default App;

/* 
import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const Catalog = React.lazy(() => import('catalog/Module'));
const Usermanagment = React.lazy(() => import('usermanagment/Module'));
const Store = React.lazy(() => import('store/Module'));
const Order = React.lazy(() => import('order/Module'));
const Offers = React.lazy(() => import('offers/Module'));
const Help = React.lazy(() => import('help/Module'));
const Dashboard = React.lazy(() => import('dashboard/Module'));
const Configuration = React.lazy(() => import('configuration/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/catalog">Catalog</Link>
        </li>
        <li>
          <Link to="/usermanagment">Usermanagment</Link>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
        <li>
          <Link to="/order">Order</Link>
        </li>
        <li>
          <Link to="/offers">Offers</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/configuration">Configuration</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="host" />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/usermanagment" element={<Usermanagment />} />
        <Route path="/store" element={<Store />} />
        <Route path="/order" element={<Order />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/help" element={<Help />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/configuration" element={<Configuration />} />
      </Routes>
    </React.Suspense>
  );
}

export default App; */
