import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const products= {
      name:"iphone",
      price: "$1200",
      desription: "A premuim smart phone with  advanced features."
    }
  
  // setProducts(()=>{})


  return (
    <>
      <div className="counter">
        coutner: {count}
      </div>
      <div >
        <div className="div">
        <button onClick={() => setCount((count) => count + 1)}>
         increase
        </button>
        </div>
        <button onClick={()=>{
         
          document.querySelector(".title").classList.toggle("hidden")
          
        }}>
         show product
        </button>
        </div>


          <div className="title">
            <h2>
            Product Details
            </h2>
            <h4>Name: {products.name} </h4>
            <h4>Price: {products.price}</h4>
            <h4>Description: {products.desription}</h4>
           
        </div>
    </>
  )
}

export default App
