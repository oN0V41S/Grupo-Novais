import '@pages/registerProduct/registerProduct.scss'

export default function RegisterProduct(){
  
  
  return (
    <main className="registerProduct">
    <h1>Registre um Produto</h1>
    <form>
      <input name="name" id="nome" type="text" placeholder="Nome do Produto"/>
      <input name="price" id="preco" type="number" placeholder="Preço"/>
      <input name="imgLink" id="img" type="text" placeholder="Link da imagem"/>
      <select>
        <option>Tênis</option>
        <option>Roupa</option>
        <option>Tecnologia</option>
      </select>      
      <button type="button" onClick={cadastrarProduto}>Cadastrar</button>
    </form>
    </main>
  )
}

const cadastrarProduto = () => {
    let url = 'https://api.sheety.co/83adb88178c8983cdefdf18d642e9e55/fabricaDeOutfit/sneakers';
    let body = {
    sneaker: {
      
    }
  }
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(body)
  })
  .then((response) => response.json())
  .then(json => {
    // Do something with object
    console.log(json.sneaker);
  });
}