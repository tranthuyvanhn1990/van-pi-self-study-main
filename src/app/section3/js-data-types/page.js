"use client";

/*
 * JS Data Types — Section 3
 * Ref: https://www.w3schools.com/js/js_datatypes.asp
 *      https://www.w3schools.com/js/js_type_conversion.asp
 *      https://www.w3schools.com/js/js_destructuring.asp
 *
 * Intent: practice recognizing and working with JS data types:
 *   1. typeof + primitives — check the type of a few different values
 *   2. Type coercion/conversion — force a value from one type to another
 *   3. Destructuring — pull values out of an array or object at once
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

export default function JsDataTypesPage() {
  const [demoText, setDemoText] = useState("(nothing yet)");

  function handleTypeof() {
    // TODO: pick at least two values of different types (e.g. a number,
    // a string, a boolean, an object, undefined) and use typeof on each.
    // setDemoText(...) with a message describing both types.
    let x = 29;
    let y = "Hôm nay là Quốc khánh 2/9"
    let typeX = typeof x;
    let typeY = typeof y;
    setDemoText(`x is ${typeX}, y is ${typeY}`);
  }

  function handleConversion() {
    // TODO: start from a value of one type and convert it to another
    // (e.g. String(123), Number("42"), Boolean(0)).
    // setDemoText(...) with the converted value and its typeof.
    let x = 292026;
    let result = String(x);
    setDemoText(`Value: ${x}, Type: ${typeof result}`);
  }

  function handleDestructuring() {
    // TODO: create an array or object with a few values, then use
    // destructuring assignment to pull out at least two of them into
    // separate variables. setDemoText(...) with a message showing
    // both destructured values.
    let mentors = ["Nam" , "Thomas" , "Daphne"];
    let [first, second] = mentors;
    setDemoText(`First: ${first} , Second: ${second}`);
  }

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        JS Data Types
      </Typography>

      <Paper variant="outlined" sx={{ p: 2, mb: 3 }} id="demo">
        <Typography>{demoText}</Typography>
      </Paper>

      <Stack spacing={2} direction="column">
        <Button variant="contained" onClick={handleTypeof}>
          Typeof
        </Button>
        <Button variant="contained" onClick={handleConversion}>
          Conversion
        </Button>
        <Button variant="contained" onClick={handleDestructuring}>
          Destructuring
        </Button>
      </Stack>
    </Container>
  );
}
