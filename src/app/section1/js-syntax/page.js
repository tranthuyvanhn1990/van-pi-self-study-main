"use client";

/*
 * JS Syntax — Section 1
 * Ref: https://www.w3schools.com/js/js_syntax.asp
 *
 * Intent: practice the basic building blocks of JS syntax:
 *   1. Statements — multiple statements separated by semicolons
 *   2. Comments — single-line (//) and multi-line (slash-star ... star-slash)
 *   3. Variables — declaring with let/const, and reassigning
 *   4. Types — using typeof to check a value's type
 *
 * Instructions:
 *   - Fill in each TODO below with the matching JS syntax feature.
 *   - Click each button to trigger it and check the output actually
 *     matches what you wrote (highlighted box for #1/#3/#4, browser
 *     console for #2).
 *   - Leave the file structure (imports, component, buttons) as is —
 *     only fill in the TODOs.
 */

import { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

export default function JsSyntaxPage() {
  const [demoText, setDemoText] = useState("(nothing yet)");

  function handleStatements() {
    // TODO: write two or more statements, separated by semicolons,
    // that together compute a value (e.g. two numbers added, then
    // multiplied). Store the final result with setDemoText(...).
    let a = 5;
    let b = 6;
    let result = (a+b) * 2;
    setDemoText(result);
  }

  function handleComments() {
    // TODO: write a single-line comment above a console.log(...) call,
    // and a multi-line comment above a second console.log(...) call.
    // Run this button and check the Console (F12) — comments themselves
    // produce no output, only the console.log() calls do.
    
    //This is the first comment
    console.log("Hello");
    //This is the second comment
    /*This is the multi-line comment
    this is the multi-line comment*/
    console.log("How are you?");
    
  }

  function handleVariables() {
    // TODO: declare one variable with `let` and reassign it to a new
    // value; declare a second variable with `const` and do not
    // reassign it. Then setDemoText(...) with both values shown
    // together (e.g. as a template string).

    let name = "Vân";
    name = "Meng";
    const age = 36;
    setDemoText(`My name is ${name} and I am ${age} years old.`);
  }

  function handleTypes() {
    // TODO: use the `typeof` operator on a few different values
    // (a number, a string, a boolean) and setDemoText(...) with
    // the results shown together.
    const number = typeof 42;
    const string = typeof "Hello";
    const boolean= typeof false;
    setDemoText(`The type of 42 is ${number}, the type of "Hello" is ${string}, and the type of false is ${boolean}.`);
  }

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        JS Syntax
      </Typography>

      <Paper variant="outlined" sx={{ p: 2, mb: 3 }} id="demo">
        <Typography>{demoText}</Typography>
      </Paper>

      <Stack spacing={2} direction="column">
        <Button variant="contained" onClick={handleStatements}>
          Statements
        </Button>
        <Button variant="contained" onClick={handleComments}>
          Comments
        </Button>
        <Button variant="contained" onClick={handleVariables}>
          let / const
        </Button>
        <Button variant="contained" onClick={handleTypes}>
          typeof
        </Button>
      </Stack>
    </Container>
  );
}
