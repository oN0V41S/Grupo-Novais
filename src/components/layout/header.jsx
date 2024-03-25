import logo from '../../../public/FBOutfit.png'

export default function Header(){
  return(
    <header>
      <div>
        <img src={logo}/>
        <h1>Fabrica de Outfit</h1>
      </div>
    </header>
  )
}