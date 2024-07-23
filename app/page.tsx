'use client';

import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

export default function Home() {
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");

  const [feet2, setFeet2] = useState("");
  const [inches2, setInches2] = useState("");


  const [calc, setCalc] = useState(0);
  

  const handleCalculation = () => {
    let f = 0;
    let i = 0;
    
    let f2 = 0;
    let i2 = 0;

    if (feet !== ""){
      try{
        f = Number(feet);
      }
      catch{
        console.log("Error. Feet must be a number.")
      }
    }

    if (inches !== ""){
      try{
        i = Number(inches);
      }
      catch{
        console.log("Error. Inches must be a number.")
      }
    }

    if (feet2 !== ""){
      try{
        f2 = Number(feet2);
      }
      catch{
        console.log("Error. Feet2 must be a number.")
      }
    }

    if (inches2 !== ""){
      try{
        i2 = Number(inches2);
      }
      catch{
        console.log("Error. Inches2 must be a number.")
      }
    }


    if (i !== 0){
      i = i/12;
    }

    if (i2 !== 0){
      i2 = i2/12
    }

    const val1 = f + i;
    const val2 = f2 + i2;

    setCalc(val1 * val2)
  }

  return (
    <main className="flex min-h-screen flex-row items-center justify-center gap-20">
      <div className="flex flex-col gap-10 justify-between items-center">
        <TextField placeholder="0" label="feet" onChange={(e) => {setFeet(e.target.value)}}/>
        <TextField placeholder="0" label="inches" onChange={(e) => {setInches(e.target.value)}}/>
      </div>
      <div className="flex flex-col gap-10 justify-between items-center">
        <TextField placeholder="0" label="feet" onChange={(e) => {setFeet2(e.target.value)}}/>
        <TextField placeholder="0" label="inches" onChange={(e) => {setInches2(e.target.value)}}/>
      </div>
      <div className="flex flex-col gap-10 justify-between items-center">
        <TextField disabled value={calc + " Square Feet"}/>
        <Button variant="outlined" className="text-3xl" onClick={handleCalculation}>Calculate</Button>
      </div>

    </main>
  );
}
