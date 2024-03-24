import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Ocorreu um erro</h1>
      <p>Desculpe, mas acabou ocorrendo um erro.</p>
      <p>
        Erro: <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}