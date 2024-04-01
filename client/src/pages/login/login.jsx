import Header from "@layout/header/header";

function Login(){
  return(
    <>
      <Header/>
      <section>
        <form>
          <input name="user" type="text" placeholder="Email"/>
          <input name="password" type="text" placeholder="Senha"/>
        </form>
      </section>
    </>
  )
}

export default Login;