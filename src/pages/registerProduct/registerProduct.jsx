import '@pages/registerProduct/registerProduct.scss'

export default function RegisterProduct(){
  return (
    <main class="registerProduct">
    <h1>Registre um Produto</h1>
    <form>
      <input name="name" type="text" placeholder="Nome do Produto"/>
      <input name="price" type="number" placeholder="Preço"/>
      <input name="imgLink" type="text" placeholder="Link da imagem"/>
    </form>
    </main>
  )
}