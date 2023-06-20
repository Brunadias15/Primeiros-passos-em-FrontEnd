//quando cria um projeto Vite, ele já vem com alguns arquivos base, nesse arquivo só deixei a function mais limpa
//importanto o componente
import { useEffect, useState } from "react"
import MeuComponente from "./components/MeuComponete"
import MeuContador from "./components/MeuContador"
import MinhaLista from "./components/MinhaLista"

const efeitosColaterais = [
  {id: '4', value: 'Olá'},
  {id: '5', value: 'Tudo bem?'},
  {id: '6', value: 'Seja bem-vindo(a)'}
]

// função com um nome App, sempre iniciar com lera maiuscula
function App() {

  const [saudacao, setSaudacao] = useState(efeitosColaterais)
  const [pesquisa, setPesquisa] = useState('')

  useEffect(
    () => {
      if (pesquisa) {
        
      
      const novaLista = efeitosColaterais.filter((item) => {
        return item.value.toLowerCase().includes(pesquisa.toLowerCase())
      })
      setSaudacao(novaLista)
    } else {
      setSaudacao(efeitosColaterais)
    }
    }
    , [pesquisa])

  return (
    <div>
      <h1>Exemplo de componente</h1>
      <MeuComponente/>
      <MeuBotao conteudo='e por fim aqui'/>

      <h1>Exemplo deEstado, eventos e renderização de condição </h1>
      <MeuContador/>

      <h1>Exemplo de listas e chaves</h1>
      <MinhaLista/>

      <h1>Exemplo de efeitos colaterais</h1>
      <input
      value={pesquisa}
      onChange={(e) => setPesquisa(e.target.value)}
       placeholder="pesquise aqui"></input>
      {saudacao.map((item) => {
        return (     
            <div key={item.id}>
                <h4>{item.value}</h4>
            </div>
        )
    })}
    
    </div>
  
  )
}

//usando o props acima com nome "conteudo"
//todos componentes pode ser usado várias e várias vezes, reutilização.
function MeuBotao(props) {

  return(

    // eslint-disable-next-line react/prop-types
    <button>{props.conteudo}</button>
  )
}

export default App
