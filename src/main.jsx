import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from './pages/Layout/Layout.jsx';
import Reports from './pages/Reports/Reports.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Feed from './pages/Feed/Feed.jsx';
import Login from './pages/Login/Login.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      
      <Route path="/login" element={<Login />} />

    </Routes>
  </BrowserRouter>,
)
