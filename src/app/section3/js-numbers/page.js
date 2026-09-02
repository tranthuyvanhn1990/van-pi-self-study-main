"use client";

/*
 * JS Numbers — Section 3
 * Ref: https://www.w3schools.com/js/js_numbers.asp
 *      https://www.w3schools.com/js/js_number_methods.asp
 *      https://www.w3schools.com/js/js_number_properties.asp
 *
 * Intent: practice working with numbers in JS:
 *   1. Number methods     — format/convert a number (toFixed, toString, etc.)
 *   2. Number properties  — use a built-in Number property (e.g. MAX_VALUE,
 *      EPSILON) or a check like Number.isInteger()
 *   3. Arithmetic + type  — do a calculation and inspect the result with typeof
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

export default function JsNumbersPage() {
  const [demoText, setDemoText] = useState("(nothing yet)");

  function handleMethods() {
    // TODO: start from a number and use at least one number method
    // on it (e.g. toFixed, toString, toPrecision).
    // setDemoText(...) with the result.
    let x = 123.456;
    let result = x.toFixed(2);
    setDemoText(result);
  }

  function handleProperties() {
    // TODO: use a Number property or check (e.g. Number.MAX_VALUE,
    // Number.EPSILON, Number.isInteger(...)).
    // setDemoText(...) with the result.
    let x = 123.45;
    let result = Number.isInteger(x);
    console.log(result);
    setDemoText(`${result}`);
  }

  function handleArithmetic() {
    // TODO: do a calculation with at least two numbers, then use
    // typeof on the result. setDemoText(...) with a message
    // describing the value and its type.
    let x = 10;
    let y = 20;
    let result = x + y;
    let type = typeof result;
    setDemoText(type);
  }

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        JS Numbers
      </Typography>

      <Paper variant="outlined" sx={{ p: 2, mb: 3 }} id="demo">
        <Typography>{demoText}</Typography>
      </Paper>

      <Stack spacing={2} direction="column">
        <Button variant="contained" onClick={handleMethods}>
          Methods
        </Button>
        <Button variant="contained" onClick={handleProperties}>
          Properties
        </Button>
        <Button variant="contained" onClick={handleArithmetic}>
          Arithmetic
        </Button>
      </Stack>
    </Container>
  );
}
