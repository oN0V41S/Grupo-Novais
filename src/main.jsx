import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Importando Componentes para criar roteador
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Importando Páginas localizadas na pasta ./pages
import Home from './pages/home';
import Login from './pages/login';

// Importando página de Erro
import ErrorPage from './error-page';

// Criando variável de rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <-- Iniciando o roteador com as configurações da rota -->
    <RouterProvider router={router} />
  </React.StrictMode>
);
    