export default function CardProduct({props}){
  return (
    <div className="cardProduct">
      <img src={props.imagem}/>
      <h1>{props.nome}</h1>
      <p>{props.preco}</p>
    </div>
  )
}