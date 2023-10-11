<<<<<<< HEAD
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContentPage from "./containers/ContentPage";
import LoginPage from "./containers/LoginPage";
import HomePage from "./containers/HomePage";
import LayoutComponent from "./components/LayoutComponent";
import ModulePage from "./containers/ModulePage";
=======
import LoginPage from './containers/LoginPage';
import LayoutComponent from './containers/LayoutComponent'
import RegisterPage from './containers/RegisterPage';
import NavBar from './components/NavBar';
import QuizPage from './components/QuizPage';
import './App.css';
import ModulePage from './containers/ModulePage';
import { Navbar } from 'react-bootstrap';
>>>>>>> cf45fb209349044e44c99ea91e97680311328d80

export default function App() {
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<LayoutComponent />}>
          <Route index element={<ContentPage />} />
          <Route path="courses" element={<ContentPage />} />
          <Route path="module" element={<ModulePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
=======
   <QuizPage/>
>>>>>>> cf45fb209349044e44c99ea91e97680311328d80
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
