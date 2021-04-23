import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Checkbox, FormGroup, FormControlLabel } from "@material-ui/core";

interface Props {}

const Categories = ({photos, categoryFilter}) => {
  const [categoryArray, setCategoryArray] = useState([]);
  const [state, setState] = useState({
    people: false,
    premium: false,
    pets: false,
    food: false,
    landmarks: false,
    cities: false,
    nature: false,
  });

  useEffect(() => {
      let newArray = []
      photos.map((item) => {
        newArray.push(item.category)
      });
      setCategoryArray([...new Set(newArray)]);
    
  }, [])

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });

  };

  return (
    <div style={{ borderBottom: "4px solid #e4e4e4", paddingBottom: "30px" }}>
      <h3 style={{ marginBottom: "20px" }}>Categories</h3>
      <FormGroup>
        {categoryArray.map((category, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                checked={state.people}
                onChange={handleChange}
                name={category.toLowerCase()}
              />
            }
            label={category}
          />
        ))}
      </FormGroup>
    </div>
  );
};

export default Categories;
