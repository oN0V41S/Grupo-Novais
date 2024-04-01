/* Importando estilos */
import '@pages/login/login.scss'

/* Importando Componentes */
import Header from "@layout/header/header";
import { Link } from 'react-router-dom'

function Login(){
  return(
    <>
      <Header/>
      <section className="login">
        <h1>Faça login</h1>
        <form>
          <input name="user" type="text" placeholder="Email"/>
          <input name="password" type="text" placeholder="Senha"/>
          <button type="submit">Fazer Login</button>
        </form>
        <div className="infoLogin">
          <div className="remeberMe">
            <input type="checkbox" value="remeberMe" id="remeberMe" />
            <label for="remember">Lembrar Login</label>
          </div>
          <Link to="/register/registerclient">Registre-se</Link>
        </div>
      </section>
    </>
  )
}

export default Login;