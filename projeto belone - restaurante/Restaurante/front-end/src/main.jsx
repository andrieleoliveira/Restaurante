// Importando as dependências necessárias
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Cadastro from "./routes/Cadastro.jsx";
import Cadastro1 from "./routes/CadastroF.jsx";
import Login from "./routes/Login.jsx";
import Login1 from "./routes/LoginFC.jsx";
import TelaInicial from "./routes/escolha.jsx"
import TelaInicial2 from "./routes/escolhacadasF.jsx"
import TelaInicial3 from "./routes/escolhaL.jsx";
import Fazerpedido from "./routes/Fazerpedido.jsx";
import Pedidos from "./routes/PedidosCL.jsx";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TelaInicial />, 
  },
  {
    path: "contacts/1",
    element: <Cadastro />, 
  },
  {
    path: "contacts/2",
    element: <Pedidos />, 
  },
  {
    path: "contacts/3",
    element: <Login />, 
  },
  {
    path: "contacts/4",
    element: <TelaInicial2 />, 
  },
  {
    path: "contacts/5",
    element: <Fazerpedido />, 
  },
  {
    path: "contacts/6",
    element: <Cadastro1 />, 
  },
  {
    path: "contacts/7",
    element: <Login1 />, 
  },
  {
    path: "contacts/8",
    element: <TelaInicial3 />, 
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
