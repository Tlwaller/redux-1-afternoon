import React, { Component } from "react";
import store, {UPDATE_NAME, UPDATE_CATEGORY} from '../../store';
import { Link } from "react-router-dom";
import "./Name.css";

class Name extends Component {
  constructor(props) {
    super(props);
    const st8 = store.getState();
    this.state = {
      name: st8.name,
      category: st8.category
    }
  }
  handleNameChange(nameVal) {
    this.setState({
      name: nameVal
    });
  }

  handleCategoryChange(catVal) {
    this.setState({
      category: catVal
    });
  }
  saveChanges() {
    store.dispatch({
      type: UPDATE_NAME,
      payload: this.state.name
    });
    store.dispatch({
      type: UPDATE_CATEGORY,
      payload: this.state.category
    });
  }
  render() {
    return (
      <div className="Name forms">
        <div className="input_container">
          <h2>Recipe Name:</h2>
          <input
            value={this.state.name}
            onChange={e => this.handleNameChange(e.target.value)}
          />
        </div>
        <div className="input_container">
          <h2>Category:</h2>
          <select
            value={this.state.category}
            onChange={e => this.handleCategoryChange(e.target.value)}
          >
            <option value={""}>----</option>
            <option value={"Breakfast"}>Breakfast</option>
            <option value={"Second Breakfast"}>Second Breakfast</option>
            <option value={"Brunch"}>Brunch</option>
            <option value={"Lunch"}>Lunch</option>
            <option value={"Dinner"}>Dinner</option>
            <option value={"Drinks"}>Drinks</option>
            <option value={"Dessert"}>Dessert</option>
          </select>
        </div>
        <Link to="/add/author">
          <button onClick={() => this.saveChanges()} className="right_button">
            Next
          </button>
        </Link>
      </div>
    );
  }
}

export default Name;
