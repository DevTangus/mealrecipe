import CustomImage from "./CustomImage";
import React, { useEffect, useState } from "react";

export default function RecipeCard({ recipe }) {
  const [recipeItems, setRecipeItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/recipes")
      .then((res) => res.json())
      .then((data) => setRecipeItems(data));
  });

  const recipeContent = recipeItems.map((rcp, i) => (
    <>
      <div className="recipe-card" key={i} >
        <CustomImage imgSrc={rcp.image} pt="65%" />
        <div className="recipe-card-info">
          <img className="auther-img" src={rcp.authorImg} alt="" />
          <p className="recipe-title" key={i}>{rcp.name}</p>
          <p className="recipe-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <a className="view-btn" href="#!">
            VIEW RECIPE
          </a>
        </div>
      </div>
    </>
  ));

  return <>{recipeContent}</>;
}

// import CustomImage from "./CustomImage";

// import React, { useEffect, useState } from "react";

// function RecipeItems() {
//   const [recipeItems, setRecipeItems] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:9292/recipes")
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//     // console.log(data);
//   });

//   const recipeItemsList = recipeItems.map((recipe, index) => (
//     <>
//       <div className="recipe-card">
//         {/* <CustomImage imgSrc={recipe.image} pt="65%" /> */}
//         <div className="recipe-card-info">
//           {/* <img className="auther-img" src={recipe.authorImg} alt="" /> */}
//           <p className="recipe-title">{recipe.name}</p>
//           <p className="recipe-desc">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry.
//           </p>
//           <a className="view-btn" href="#!">
//             VIEW RECIPE
//           </a>
//         </div>
//       </div>
//     </>
//   ));
//   return { recipeItemsList };
// }
// export default RecipeItems;
