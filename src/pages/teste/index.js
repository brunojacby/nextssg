import { useEffect, useState } from "react"

function Teste(){
  const [data,setData]= useState([])
  
  useEffect(() => {
    fetchApi()
  }, [])


  const fetchApi = async () => {
    try {      
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      const data = await response.json()
      console.log(data)
      setData(data)
    } catch (error) {
      console.log(error)
      
    }
  }

  if(data.length === 0){
    return <h1>Carregando...</h1>
  }

  
  return(
        <div>
            {data.map((t) => (<div key={t.id}>{t.title}</div>))}
        </div>
    )
}


export default Teste