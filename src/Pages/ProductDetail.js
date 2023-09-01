import React, { useEffect, useState } from 'react'
import Layout from '../Components/Layout'
import { fetchSingleCocktails } from '../Redux/features/cocktailSlice'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../Components/Spinner'

const ProductDetail = () => {
  const [modifiedCocktails, setmodifiedCocktails] = useState([]);
  const { loading, cocktail } = useSelector((state) => ({ ...state.app }));
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchSingleCocktails({ id }));
  }, [dispatch, id]);

  useEffect(() => {
    if (cocktail.length > 0) {
      const {
        strDrink: name,
        strDrinkThumb: img,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = cocktail[0];
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      const newCocktail = {
        name,
        img,
        info,
        category,
        glass,
        ingredients,
      };
      setmodifiedCocktails(newCocktail);
    } else {
      setmodifiedCocktails(null);
    }
  }, [id, cocktail]);

  if (!modifiedCocktails) {
    return <h2>No Cocktail Details</h2>;
  } else {
    const { name, img, info, category, glass, ingredients } = modifiedCocktails;
    return (
      <>
        {loading ? (
          <Spinner />
        ) : (
          <Layout>
            <div className="container mt-4 pb-5 mb-4">
              <Link to="/" className="btn btn-info">
                GO BACK
              </Link>
              <div className="row mt-4">
                <div className="col-md-5">
                  <img src={img} alt={name} height={300} width={270} />
                </div>
                <div className="col-md-5 ms-4 ">
                  <h2>Name : {name}</h2>
                  <p className="mt-1">Category : {category}</p>
                  <p>Info : {info}</p>
                  <p>Glass : {glass}</p>
                  <p>Ingredients : {ingredients + " ,"}</p>
                </div>
              </div>
            </div>
          </Layout>
        )}
      </>
    );
  }
};

export default ProductDetail