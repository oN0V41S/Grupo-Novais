/* Importando estilos */
import '@pages/register/registerProduct/registerProduct.scss'

/* Impprtando Componentes */
import Header from '@layout/header/header'

export default function RegisterProduct(){
  return (
    <>
      <Header />
      <main className="registerProduct">
        <h1>Registre um Produto</h1>
        <form>
            <input name="name" id="nome" type="text" placeholder="Nome do Produto"/>
            <input name="price" id="preco" type="number" placeholder="Preço"/>
            <input name="link" id="link" type="text" placeholder="Link do produto"/>
            <input name="imgLink" id="img" type="text" placeholder="Link da imagem"/>
            <div>
              <input name="isStorage" id="isStorage" type="checkbox" placeholder="Possui Estoque?"/>
              <label for="isStorage">Disponivel em estoque?</label>
              <input name="storageQuantity" className="storageQuantity" id='storageQuantity' type="number" placeholder="Quantidade em Estoque"/>
          </div>
          <button type="button">Cadastrar</button>
        </form>
      </main>
    </>
  )
}