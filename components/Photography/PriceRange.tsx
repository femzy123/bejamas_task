import React, { useState } from "react";
import styled from "styled-components";
import { Checkbox, FormGroup, FormControlLabel } from "@material-ui/core";

interface Props {}

const PriceRange = ({priceFilter, reset}) => {
  const [range0to20, setRange0to20] = useState(false);
  const [range20to100, setRange20to100] = useState(false);
  const [range100to200, setRange100to200] = useState(false);
  const [range200, setRange200] = useState(false);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "range0to20":
        if (range0to20) {
          setRange0to20(false)
          reset();
        } else {
          setRange0to20(true);
          setRange20to100(false);
          setRange100to200(false);
          setRange200(false);
          priceFilter(0, 20);
        }       
        break;
      case "range20to100":
        if (range20to100) {
          setRange20to100(false);
          reset();
        } else {
          setRange0to20(false);
          setRange20to100(true);
          setRange100to200(false);
          setRange200(false);
          priceFilter(20, 100);
        }
        break;
      case "range100to200":
        if (range100to200) {
          setRange100to200(false);
          reset();
        } else {
          setRange0to20(false);
          setRange20to100(false);
          setRange100to200(true);
          setRange200(false);
          priceFilter(100, 200);
        }
        break;
      case "range200":
        if (range200) {
          setRange200(false);
          reset();
        } else {
          setRange0to20(false);
          setRange20to100(false);
          setRange100to200(false);
          setRange200(true);
          priceFilter(200);
        }    
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3 style={{ marginBottom: "20px" }}>Price Range</h3>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={range0to20} onChange={handleChange} />}
          label="Lower than $20"
          name="range0to20"
        />
        <FormControlLabel
          control={<Checkbox checked={range20to100} onChange={handleChange} />}
          label="$20 - $100"
          name="range20to100"
        />
        <FormControlLabel
          control={<Checkbox checked={range100to200} onChange={handleChange} />}
          label="$100 - $200"
          name="range100to200"
        />
        <FormControlLabel
          control={<Checkbox checked={range200} onChange={handleChange} />}
          label="More than $200"
          name="range200"
        />
      </FormGroup>
    </div>
  );
};

export default PriceRange;
