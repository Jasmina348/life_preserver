import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContentPage from "./containers/ContentPage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import LayoutComponent from "./components/LayoutComponent";
import ModulePage from "./containers/ModulePage";
import QuizPage from './containers/QuizPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="/" element={<LayoutComponent />}>
          <Route index element={<ContentPage />} />
          <Route path="courses" element={<ContentPage />} />
          <Route path="module" element={<ModulePage />} />
          <Route path="quiz" element={<QuizPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
