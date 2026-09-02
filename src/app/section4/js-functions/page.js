"use client";

/*
 * JS Functions — Section 4
 * Ref: https://www.w3schools.com/js/js_functions.asp
 *      https://www.w3schools.com/js/js_function_parameters.asp
 *      https://www.w3schools.com/js/js_function_invocation.asp
 *      https://www.w3schools.com/js/js_arrow_functions.asp
 *
 * Intent: practice the main ways to declare, call, and pass data to
 * functions in JS:
 *   1. Function declaration — a named function with parameters and a
 *      return value
 *   2. Default parameters   — a parameter that falls back to a default
 *      when no argument is passed
 *   3. Arrow function       — the same kind of logic written as an
 *      arrow function
 *
 * Instructions:
 *   - Fill in each TODO below with the matching JS feature.
 *   - Click each button to trigger it and check the output actually
 *     matches what you wrote (highlighted box for all three).
 *   - Leave the file structure (imports, component, buttons) as is —
 *     only fill in the TODOs.
 */

import { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

export default function JsFunctionsPage() {
  const [demoText, setDemoText] = useState("(nothing yet)");

  function handleDeclaration() {
    // TODO: define a named function (declaration or expression) that
    // takes at least one parameter and returns a value. Call it here
    // and setDemoText(...) with the returned value.
    function double(x) {
      return x * 2;
    }
    let result = double(10);
    setDemoText(result);
  }

  function handleDefaultParams() {
    // TODO: define a function with a parameter that has a default
    // value, then call it WITHOUT passing that argument. setDemoText(...)
    // with the result, showing the default was used.
    function order(drink = "Coffee") {
      return `One more ${drink}`;
    }
    let result = order();
    setDemoText(result);
  }

  function handleArrow() {
    // TODO: define an arrow function that takes at least one parameter
    // and returns a value. Call it here and setDemoText(...) with the
    // returned value.
    const double = (x) => {
      return x * 2;
    }; 
    let result = double(10);
    setDemoText(result);
  }

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        JS Functions
      </Typography>

      <Paper variant="outlined" sx={{ p: 2, mb: 3 }} id="demo">
        <Typography>{demoText}</Typography>
      </Paper>

      <Stack spacing={2} direction="column">
        <Button variant="contained" onClick={handleDeclaration}>
          Declaration
        </Button>
        <Button variant="contained" onClick={handleDefaultParams}>
          Default Params
        </Button>
        <Button variant="contained" onClick={handleArrow}>
          Arrow
        </Button>
      </Stack>
    </Container>
  );
}
