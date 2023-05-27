//Estado, eventos e renderização de condição

import { useState } from "react"

export default function MeuContador() {

    const [contador, setContador] = useState(0)
    

    function aumentar() {
        setContador(contador + 1)
    }

    function diminuir() {
        setContador(contador - 1)
    }

    //Usei o a condição if para quando o contador passar de 9 acrescenta a frase e o botão diminuir
    //abaixo do h3 estamos Renderizando uma condição. Que nesse caso se o contador que está na tela for maior que 9 ele mostrará o h1 que está dentro da condição, caso contrário não mostra nada "null"
    if (contador > 9) {
        return(
            <div>
            <h1>Meu Contador</h1>
            <h3>{contador}</h3>
            {contador > 9 ? <h1>você pode diminuir</h1> : null}
            <button onClick={aumentar}>aumentar</button>
            <button onClick={diminuir}>diminuir</button>
            </div>
        )
    }

    return (
        <div>
            <h1>Meu Contador</h1>
            <h3>{contador}</h3>
            <button onClick={aumentar}>aumentar</button>

        </div>
    )
}

//onClick é um evento e o useState usado para alterar o estado da apliacação dinamica.
