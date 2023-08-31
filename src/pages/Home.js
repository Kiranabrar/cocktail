import React from 'react'
import Products from '../components/Products'

const Home = () => {
  return (
    <>
     <div>
      <h3 className="mt-2" >Welcome to E-Commerce Store</h3>
      <section>
        <h5 className="ms-3">Products</h5>
        <Products/>
      </section>
     </div>
    </>
  )
}

export default Home