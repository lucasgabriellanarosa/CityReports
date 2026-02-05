import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from './pages/Layout/Layout.jsx';
import Reports from './pages/Reports/Reports.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Feed from './pages/Feed/Feed.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import SearchResults from './pages/SearchResults/SearchResults.jsx';
import City from './pages/City/City.jsx';
import CityMap from './pages/CityMap/CityMap.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/city/:cityId" element={<City />} />
        <Route path="/map/:cityId" element={<CityMap />} />

      </Route>
      
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

    </Routes>
  </BrowserRouter>,
)
