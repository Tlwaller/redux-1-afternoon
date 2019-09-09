import React, { Component } from "react";
import { Link } from "react-router-dom";
import store from '../../store';
import RecipeCard from "./../RecipeCard/RecipeCard";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    const st8 = store.getState();
    this.state = {
      recipes: st8.recipes
    };
  }

  render() {
    const recipes = this.state.recipes.map((recipe, i) => {
      return (
        <RecipeCard
          key={i}
          name={recipe.name}
          category={recipe.category}
          authorFirst={recipe.firstName}
          authorLast={recipe.lastName}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
        />
      );
    });
    return (
      <div className="Home">
        <Link to="/add/name">
          <button>Create New Recipe</button>
        </Link>
        <div className="card_container">{recipes}</div>
      </div>
    );
  }
}

export default Home;
