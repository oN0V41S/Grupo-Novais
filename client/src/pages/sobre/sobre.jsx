/* Importando Estilos */
import "@pages/sobre/sobre.scss";

/* Importando Componentes de Layout */
import Header from "@layout/header/header";

export default function Sobre() {  
  return (
    <>
      <Header />
      <section className="aboutUs">
        <div className="about aboutOption">
          <h1 className="aboutTitle">Sobre Nós</h1>
          <p id="aboutUsText">
            Nós somos a Fabrica de Outfit ( Futuramente "Fabrica Grupo" ),
            buscamos trazer a melhor qualidade e custo-benefício possível, sem
            vender produtos que podem ou se desgastar rápido, ou causar
            problemas de saúde futuros. O melhor para nosso cliente sempre.
          </p>
        </div>
        <div className="source aboutOption">
          <h1 className="sourceTitle">Fonte dos produtos</h1>
          <p className="sourceText">
            Nossos produtos são importados diretamente das fabricantes chinesas,
            e outros países ásiatícos, todos com etiqueta e todos detalhes,
            trabalhamos com replicas ( muito semelhante ao original nao só em aparência mas também em qualidade produtos e Originais redirecionados diretamente da
            fábrica de Marcas Como Nike, Adidas, Oakley, e outras, tudo
            etiquetado e nos minímos detalhes.
          </p>
        </div>
        <div className="mvv aboutOption">
          <h1 className="mvvTitle aboutOption">Missão Visão e Valores</h1>
          <div classname="mvvContent">
            <h2>Missão</h2>
            <p>
              Preços bem a baixo da média dos produtos vendidos Brasil, e fácil
              acesso a moda, prorpocionando produtos de qualidade ( produtos que
              não desgastam rápido, e não vão causar problemas de saúde
              futuramente ao cliente ) e pelo melhor preço possível.
            </p>
            <h2>Visão</h2>
            <p>
              Buscar trazer uma grande variedade de produtos, não só de roupas,
              mas produtos variados, que geralmente são taxados em mais de 50%
              no Brasil, acabando se tornando inviáveis para pessoas de baixa
              renda, elitizando o acesso a tecnologia e produtos de boa
              qualidade, sobrando assim as margens da sociedade serem obrigados a
              se contentar com os produtos mais baratos, pelo custo, privando
              não só status sociais mas tecnologias atuais, saúde e outros
              fatores, do resto da sociedade, q acabam se tornando exclusivas
              para a elite, mantendo o resto da sociedade distante da qualidade
              de vida, informação, e outros.
            </p>
            <h2>Valores</h2>
            <p >*Trazer os melhores produtos para nossos clientes.</p>
            <p>*Melhor custo benefício do mercado.</p>
            <p>*Acesso barato a moda e produtos de boa qualidade .</p>
          </div>
        </div>
      </section>
    </>
  );
}
