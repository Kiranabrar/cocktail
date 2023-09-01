import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../Components/Layout'
import { fetchcocktails } from '../Redux/features/cocktailSlice'
import { useEffect, useState } from 'react'
import Spinner from '../Components/Spinner'
import { Link } from 'react-router-dom'

const Home = () => {
  const [modifiedCocktails, setmodifiedCocktails] = useState([])
  const { loading, cocktails, error } = useSelector((state) => ({
    ...state.app,
  }))
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchcocktails());
  },[] );
  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map(item => {
        const { idDrink, strCategory, strAlcoholic, strGlass, strInstructions, strDrinkThumb, strDrink } = item;
        return {
          id: idDrink,
          name: strDrink,
          category: strCategory,
          img: strDrinkThumb,
          info: strAlcoholic,
          Desc: strInstructions,
          glass: strGlass
        }
      })
      setmodifiedCocktails(newCocktails);
    } else {
      setmodifiedCocktails([])
    }
  }, [cocktails]);
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <p>{error.message}</p>
  }
  return (
    <Layout>
      <>
      <div className='hero-img'>
      </div>
        <div className='container  mx-auto  '>
          <div className='row'>
            {modifiedCocktails.map(item => (
              <div className='col-md-4 mt-3  ' key={item.id}>

                <div className="card" style={{ width: '14rem' }}>
                  <img src={item.img} className="card-img-top" alt={item.name} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <h5 className="card-title">{item.glass}</h5>
                    <p className="card-text">{item.info}</p>
                    <p className="card-text">{item.category}</p>
                    <Link to={`/products/${item.id}`} className="btn btn-primary">
                      Details</Link>
                  </div>
                </div>

              </div>

            ))}
          </div>
        </div>
      </>
    </Layout>
  )
}

export default Home