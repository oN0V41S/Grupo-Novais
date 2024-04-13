/* Importando estilos */
import '@pages/duvidas/duvidas.scss';

/* Importando Componentes */
import Header from "@layout/header/header";

export default function Duvidas(){
  const questions = [
    {
      title:"Produtos são de qualiade?",
      desc: "Trabalhamos com produtos RP e Originais. Produtos RP de qualidade superior ao que é vendido Hoje no Brasil. Produtos Originais com caixa e etiquetas de fábrica."
    },
    {
      title:"Entrega de Pedidos",
      desc: "Entregamos em todo o Brasil ( Com adicional para cidades fora de São Paulo ). Produtos encomendados tem prazo de 15 dias a 1 mês para entrega. Produtos a pronta entrega são entregues no mesmo dia ou até uma semana para fora de São Paulo."
    },
]
  
  function QuestionCard({title, desc}){
    return(
      <div className="questionCard">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    )
  }
  
  return(
    <>
      <Header/>
      <section className="questionsList">
        {questions.map(question => {
        return(
            <QuestionCard title={question.title} desc={question.desc} key={question.title}/>
        )
        })}
      </section>
    </>
  )
}

