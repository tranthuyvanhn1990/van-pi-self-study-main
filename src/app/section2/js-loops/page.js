"use client";

/*
 * JS Loops — Section 2
 * Ref: https://www.w3schools.com/js/js_loop_for.asp
 *      https://www.w3schools.com/js/js_loop_while.asp
 *      https://www.w3schools.com/js/js_break.asp
 *
 * Intent: practice the main forms of looping in JS:
 *   1. For loop      — repeat a fixed number of times, collecting output
 *   2. While loop     — repeat while a condition holds
 *   3. Break / Continue — exit a loop early, or skip an iteration
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

export default function JsLoopsPage() {
  const [demoText, setDemoText] = useState("(nothing yet)");

  function handleFor() {
    // TODO: write a for loop that runs a fixed number of times,
    // building up a result (e.g. a running sum, or a list of
    // values joined into a string). setDemoText(...) with the result.
    const numbers = [1,2,3,4,5];
    let sum = 0;
    for (let i=0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    setDemoText("Sum: " + sum);
  }

  function handleWhile() {
    // TODO: write a while loop that runs while some condition
    // holds, building up a result the same way. setDemoText(...)
    // with the result.
    let text = "";
    let i = 0;
    while (i < 10) {
      text += "This is number" + i + "<br/>"; 
      i++;
    }
    setDemoText(text);
  }

  function handleBreakContinue() {
    // TODO: write a loop that uses `break` to stop early once some
    // condition is met, and/or `continue` to skip certain
    // iterations. setDemoText(...) with the result.
    let text ="";
    for (let i=0; i<10 ; i++) {
      if (i===2){continue;}
      if (i===5){break;}
      text += "This is number" + i + "<br/>";
    }
    setDemoText(text);
  }

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        JS Loops
      </Typography>

      <Paper variant="outlined" sx={{ p: 2, mb: 3 }} id="demo">
        <Typography>{demoText}</Typography>
      </Paper>

      <Stack spacing={2} direction="column">
        <Button variant="contained" onClick={handleFor}>
          For
        </Button>
        <Button variant="contained" onClick={handleWhile}>
          While
        </Button>
        <Button variant="contained" onClick={handleBreakContinue}>
          Break / Continue
        </Button>
      </Stack>
    </Container>
  );
}
