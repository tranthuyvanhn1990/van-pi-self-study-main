"use client";

/*
 * JS Operators — Section 2
 * Ref: https://www.w3schools.com/js/js_operators.asp
 *      https://www.w3schools.com/js/js_assignment.asp
 *      https://www.w3schools.com/js/js_comparisons.asp
 *
 * Intent: practice the main categories of JS operators:
 *   1. Arithmetic  — +, -, *, /, % between numbers
 *   2. Assignment  — =, +=, -=, *=, /= on a variable
 *   3. Comparisons — ==, ===, !=, !==, <, > between values
 *   4. Conditional — the ternary operator (condition ? a : b)
 *
 * Instructions:
 *   - Fill in each TODO below with the matching JS operator feature.
 *   - Click each button to trigger it and check the output actually
 *     matches what you wrote (highlighted box for #1/#2/#4, browser
 *     console for #3).
 *   - Leave the file structure (imports, component, buttons) as is —
 *     only fill in the TODOs.
 */

import { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

export default function JsOperatorsPage() {
  const [demoText, setDemoText] = useState("(nothing yet)");

  function handleArithmetic() {
    // TODO: use at least two different arithmetic operators
    // (+, -, *, /, %) on some numbers, then setDemoText(...)
    // with the result(s).
    let a = 5
    let b = 3
    let sum = a + b
    let minus = a - b
    let multiply = a * b
    let divide = a / b
    let remainder = a % b
    setDemoText("Sum:" + sum + ", Minus:" + minus + ", Multiply:" + multiply + ", Divide:" + divide + ", Remainder:" + remainder);
  }

  function handleAssignment() {
    // TODO: declare a variable, then use one or more assignment
    // operators (+=, -=, *=, /=) to update it. setDemoText(...)
    // with the final value.
    let a = 10;
    let b = 5;
    let result1 = a += b;
    let result2 = a -= b;
    let result3 = a *= b;
    let result4 = a /=b;
    setDemoText(
      'This is result1:' + result1 + " " +
      'This is result2:' + result2 + " " +
      'This is result3:' + result3 + " " +
      'This is result4:' + result4
    );
  }

  function handleComparisons() {
    // TODO: compare a few values with ==, ===, !=, !==, <, or >
    // and console.log(...) each result. Check the Console (F12).
    let x = 5;
    let y = "5";
    console.log(x == y); //true
    console.log(x === y); //false
    console.log(x != y); //false
    console.log(x !== y); //true
    console.log (x < 10); //true
    console.log (x > 10); //false

  }

  function handleConditional() {
    // TODO: use the ternary operator (condition ? a : b) to pick
    // between two values based on a condition, then
    // setDemoText(...) with the chosen value.
    let age = 18
    let result = (age >=18) ? "You can drive" : "You cannot drive";
    setDemoText (result);
  }

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        JS Operators
      </Typography>

      <Paper variant="outlined" sx={{ p: 2, mb: 3 }} id="demo">
        <Typography>{demoText}</Typography>
      </Paper>

      <Stack spacing={2} direction="column">
        <Button variant="contained" onClick={handleArithmetic}>
          Arithmetic
        </Button>
        <Button variant="contained" onClick={handleAssignment}>
          Assignment
        </Button>
        <Button variant="contained" onClick={handleComparisons}>
          Comparisons
        </Button>
        <Button variant="contained" onClick={handleConditional}>
          Conditional (ternary)
        </Button>
      </Stack>
    </Container>
  );
}
