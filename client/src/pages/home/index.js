import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

const recipes = [
  {
    id: 1,
    title: 'Procuto Funghi Pizza',
    tag: 'pizza',
    description: 'A shorst description about the recepi',
    dificulty: 'low',
    time: '30min',
    ingredients: ['flower', 'tomatoes', 'mushrooms', 'mozzarella', 'oregano', 'ham'],
    preparation: 'This will create a box shadow that appears only on the left and right sides of the element, with a 10 pixel horizontal offset, 0 pixel vertical offset, 10 pixel blur radius, and an opacity of 0.25. You can adjust the values as needed to achieve the desired effect.'
  },
  
  {
    id: 2,
    title: 'Cezar Salad',
    tag: 'salad',
    description: 'A shorst description about the recepi',
    dificulty: 'low',
    time: '10min',
    ingredients: ['salad', 'bread', 'onion', 'chicken', 'salt', 'peper'],
    preparation: 'This will create a box shadow that appears only on the left and right sides of the element, with a 10 pixel horizontal offset, 0 pixel vertical offset, 10 pixel blur radius, and an opacity of 0.25. You can adjust the values as needed to achieve the desired effect.'
  },
  {
    id: 3,
    title: 'Steak',
    tag: 'steak',
    description: 'A shorst description about the recepi',
    dificulty: 'medium',
    time: '30min',
    ingredients: ['rib','eye', 'oil', 'salt'],
    preparation: 'This will create a box shadow that appears only on the left and right sides of the element, with a 10 pixel horizontal offset, 0 pixel vertical offset, 10 pixel blur radius, and an opacity of 0.25. You can adjust the values as needed to achieve the desired effect.'
  },
  
  {
    id: 4,
    title: 'Eclers',
    tag: 'dessert',
    description: 'A shorst description about the recepi',
    dificulty: 'high',
    time: '60min',
    ingredients: ['sugar', 'eggss', 'milk', 'butter', 'vanila'],
    preparation: 'This will create a box shadow that appears only on the left and right sides of the element, with a 10 pixel horizontal offset, 0 pixel vertical offset, 10 pixel blur radius, and an opacity of 0.25. You can adjust the values as needed to achieve the desired effect.'
  },
  {
    id: 5,
    title: 'Eclers',
    tag: 'dessert',
    description: 'A shorst description about the recepi',
    dificulty: 'high',
    time: '60min',
    ingredients: ['sugar', 'eggss', 'milk', 'butter', 'vanila'],
    preparation: 'This will create a box shadow that appears only on the left and right sides of the element, with a 10 pixel horizontal offset, 0 pixel vertical offset, 10 pixel blur radius, and an opacity of 0.25. You can adjust the values as needed to achieve the desired effect.'
  },
  {
    id: 6,
    title: 'Eclers',
    tag: 'dessert',
    description: 'A shorst description about the recepi',
    dificulty: 'high',
    time: '60min',
    ingredients: ['sugar', 'eggss', 'milk', 'butter', 'vanila'],
    preparation: 'This will create a box shadow that appears only on the left and right sides of the element, with a 10 pixel horizontal offset, 0 pixel vertical offset, 10 pixel blur radius, and an opacity of 0.25. You can adjust the values as needed to achieve the desired effect.'
  },

]

const Home = () => {
  return (
    <div className='home'>
      <div className='content'>
        {recipes.map(recipe => (

          <div className='recepie' key={recipe.id}>

            <div className='recepie-left'>
              <h1>{recipe.title}</h1>
              <p>Dificulty: <span className='dificulty'>{recipe.dificulty}</span></p>
              <h3>Introduction:</h3>
              <p>{recipe.description}</p>
              {/* <h3>Ingredients:</h3> */}
              {/* <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <h3>Instructions:</h3> */}
              <p>
                {recipe.preparation.substring(0, 50)} . . .
                <Link 
                  to={`/recepie/${recipe.id}`} 
                  style={{fontStyle:'italic', textDecoration:'underline', color:'green'}}
                >
                     Read More
                </Link>
              </p>
            </div>


            <div className='recepie-right'>
                  pic here
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
