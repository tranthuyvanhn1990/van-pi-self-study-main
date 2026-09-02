"use client";

/*
 * JS Output — Section 1
 * Ref: https://www.w3schools.com/js/js_output.asp
 *
 * Intent: practice the four ways JavaScript can "display" data:
 *   1. innerHTML   — write into an existing HTML element
 *   2. document.write() — write directly into the HTML output
 *   3. window.alert() — pop up an alert box
 *   4. console.log() — write to the browser console
 *
 * Instructions:
 *   - Fill in each TODO below with the matching JS output method.
 *   - Click each button to trigger that method and check it actually
 *     produces output (browser console for #4, an alert dialog for #3,
 *     the highlighted box for #1).
 *   - Leave the file structure (imports, component, buttons) as is —
 *     only fill in the TODOs.
 */

import { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

export default function JsOutputPage() {
  const [demoText, setDemoText] = useState("(nothing yet)");

  function handleInnerHTML() {
    document.getElementById("demo").innerHTML = "<h2>What is it???</h2>";
    // TODO: set demoText to some output text using setState,
    // mimicking `document.getElementById("demo").innerHTML = "..."`.
  }

  function handleDocumentWrite() {
    document.write(5+6);
    // TODO: call document.write(...) with some output text.
    // Note: this replaces the whole page — that's expected w3schools behavior.
  }

  function handleAlert() {
    window.alert("This is my 1st!");
  }

  function handleConsoleLog() {
    console.log(100+101);
    // TODO: call console.log(...) with some output text.
  }

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        JS Output
      </Typography>

      <Paper variant="outlined" sx={{ p: 2, mb: 3 }} id="demo">
        <Typography>{demoText}</Typography>
      </Paper>

      <Stack spacing={2} direction="column">
        <Button variant="contained" onClick={handleInnerHTML}>
          innerHTML
        </Button>
        <Button variant="contained" onClick={handleDocumentWrite}>
          document.write()
        </Button>
        <Button variant="contained" onClick={handleAlert}>
          window.alert()
        </Button>
        <Button variant="contained" onClick={handleConsoleLog}>
          console.log()
        </Button>
      </Stack>
    </Container>
  );
}
