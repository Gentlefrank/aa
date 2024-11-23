import React from 'react'


function Card() {
  return (
    <div className='card'>
      
      <div className='card-header'>
      
      </div>

      <div className='card-body'>
        <h1>Simple Omelette Recipe</h1>
        <p>  An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
  to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>

        <div className='preparation'>
       <h3> Preparation time</h3>
<ul>
    <li><b>Total:</b> Approximately 10 minutes </li>
    <li><b>Preparation:</b> 5 minutes </li>
    <li><b> Cooking:</b> 5 minutes </li>
</ul>



        </div>
    <h2> Ingredients</h2>
 
 <ul>
    <li>2-3 large eggs </li>
    <li>Salt, to taste </li>
    <li> Pepper, to taste</li>
    <li> 1 tablespoon of butter or oil</li>
    <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
 </ul>





<hr/>

<h2> Instructions</h2>
<ol>
    <li><b>Beat the eggs: </b>  In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. 
You can add a tablespoon of water or milk for a fluffier texture.</li>
    <li><b>Heat the pan: </b> Place a non-stick frying pan over medium heat and add butter or oil. </li>
    <li><b>Cook the omelette:  </b>Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure 
the eggs evenly coat the surface. </li>
    <li><b>Add fillings (optional): </b> When the eggs begin to set at the edges but are still slightly runny in the 
middle, sprinkle your chosen fillings over one half of the omelette. </li>
    <li><b>Fold and serve: </b> As the omelette continues to cook, carefully lift one edge and fold it over the 
fillings. Let it cook for another minute, then slide it onto a plate. </li>
    <li><b>Enjoy:  </b>Serve hot, with additional salt and pepper if needed. </li>
</ol>

<br/>

 <hr/>

<h2>Nutrition</h2>

<p>The table below shows nutritional values per serving without the additional fillings.</p>
 
 <table>
    <tr className='row-design'>
    <td>Calories </td>
    <td className='column-design'>277kcal</td>
    </tr>
    <tr className='row-design'>
    <td>Carbs </td>
    <td className='column-design'>Og</td>
    </tr>
    <tr className='row-design'>
    <td>Protein </td>
    <td className='column-design'>20g</td>
    </tr>
    <tr className='row-design'>
    <td>Fat </td>
    <td className='column-design'>22g</td>
    </tr>
    
 </table>

      </div>

    </div>
  )
}

export default Card
