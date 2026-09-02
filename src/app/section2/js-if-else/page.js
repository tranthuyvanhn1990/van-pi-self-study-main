"use client";

/*
 * JS If Conditions — Section 2
 * Ref: https://www.w3schools.com/js/js_if_else.asp
 *      https://www.w3schools.com/js/js_switch.asp
 *      https://www.w3schools.com/js/js_booleans.asp
 *      https://www.w3schools.com/js/js_comparisons.asp (logical operators)
 *
 * Intent: practice the main forms of conditional branching in JS:
 *   1. If / Else / Else If — branch on a condition
 *   2. Switch            — branch on multiple possible values of one variable
 *   3. Booleans / Logical — combine conditions with &&, ||, ! and use a
 *                            "truthy"/"falsy" value directly as a condition
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

export default function JsIfElsePage() {
  const [demoText, setDemoText] = useState("(nothing yet)");

  function handleIfElse() {
    // TODO: write an if / else if / else chain that branches on some
    // number or string value, then setDemoText(...) with which
    // branch ran.
    let temperature = 30;
    if (temperature > 30) {
      setDemoText('It is hot outside.');
    }
      else if (temperature < 10) {
        setDemoText('It is cold outside.');
      }
    else {
      setDemoText('The weather is moderate.');
    }
  }

  function handleSwitch() {
    // TODO: write a switch statement with at least two case labels
    // and a default, branching on some value. Use setDemoText(...)
    // to show which case matched.
    switch (new Date().getDate()) {
      case 1:
        setDemoText('Today is Monday.');
        break;
      case 2:
        setDemoText('Today is Tuesday.');
        break;
      default:
        setDemoText('Today is not Monday or Tuesday.');
    }
  }

  function handleLogical() {
    // TODO: combine two or more conditions using &&, ||, and/or !,
    // then setDemoText(...) with the boolean result (or a message
    // chosen based on it).
    let age = 40
    let budget = "10 tỷ"
    if (age >= 30 && budget === "10 tỷ") {
      setDemoText('You can buy a house.');
    }
  }

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        JS If Conditions
      </Typography>

      <Paper variant="outlined" sx={{ p: 2, mb: 3 }} id="demo">
        <Typography>{demoText}</Typography>
      </Paper>

      <Stack spacing={2} direction="column">
        <Button variant="contained" onClick={handleIfElse}>
          If / Else
        </Button>
        <Button variant="contained" onClick={handleSwitch}>
          Switch
        </Button>
        <Button variant="contained" onClick={handleLogical}>
          Booleans / Logical
        </Button>
      </Stack>
    </Container>
  );
}
