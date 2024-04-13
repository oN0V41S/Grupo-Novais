export default function CardProduct({nome, img, preco, link}){
  return (
    <a className="cardProduct" href={link}>
      <img src={img} alt="nome"/>
      <div>
        <h1>{nome}</h1>
        <h2>R${preco}</h2>
      </div>
      <p>Estoque:</p>
      <p>clique para mais informações</p>
    </a>
  )
}