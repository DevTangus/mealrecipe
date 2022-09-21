import React, { useState } from "react";

function AddRecipe() {
  const [formData, setFormData] = useState({
    name: "",
    placeOfOrigin: "",
    image: "",
    authorImg: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:9292/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        placeOforigin: formData.placeOfOrigin,
        image: formData.image,
        authorImg: formData.authorImg,
      }),
    });
  }

  return (
    <section className="sectionBody">
      <h1>Add New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div className="loginRight">
          <div className="loginBox">
            <label>
              <span className="spanText">Recipe Name:</span>
              <input
                className="loginInput"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <label>
              <span className="spanText">Place of Origin:</span>
              <input
                className="loginInput"
                type="text"
                name="placeOfOrigin"
                value={formData.placeOfOrigin}
                onChange={handleChange}
              />
            </label>
            <label>
              <span className="spanText">Author Image:</span>
              <input
                className="loginInput"
                type="text"
                name="authorImg"
                value={formData.authorImg}
                onChange={handleChange}
              />
            </label>

            <button type="submit" className="loginRegisterButton">
              Add Recipe
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default AddRecipe;
