//Listas e chaves

const minhaLista = [
    {id: '1', value: 'Item 1'},
    {id: '2', value: 'Item 2'},
    {id: '3', value: 'Item 3'}
]
export default function MinhaLista() {

    return minhaLista.map((item) => {
        return (     
            <div key={item.id}>
                <h4>{item.value}</h4>
            </div>
        )
    })
}

//sempre usar chaves "Key"