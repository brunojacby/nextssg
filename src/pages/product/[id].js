import { useEffect, useState } from "react"

function Product(){
  const [id, setId] = useState(null);
  const [data,setData]= useState({})

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlId = window.location.href.split('/').pop(); // Get ID from URL
      setId(urlId);
    }
  }, []);
  
  useEffect(() => {
    fetchApi()
  }, [id])


  const fetchApi = async () => {
    if (id) {
    try {          
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      const data = await response.json()
      console.log(data)
      setData(data)
    } catch (error) {
      console.log(error)
      
    }
  }
  }

  if(data.length === 0){
    return <h1>Carregando...</h1>
  }

  
  return(
        <div>
            {data.id} {data.title}
        </div>
    )
}


export default Product

