/* Importando Estilos */
import '@pages/register/registerClient/registerClient.scss'

/* Importando Componentes */
import Header from '@layout/header/header'

export default function RegisterClient(){
  return (
    <>
      <Header/>
      <section className="register">
        <h1>Cadastre sua Conta</h1>
        <form>
          <input name="email" value="email" type="email" placeholder="seu email" />
          <input name="password" value="password" type="password" placeholder="sua senha" />
          <button type="submit">Cadastre</button>
        </form>
      </section>
    </>
  )
}