"use client";

/*
 * JS Strings — Section 3
 * Ref: https://www.w3schools.com/js/js_string_templates.asp
 *      https://www.w3schools.com/js/js_string_methods.asp
 *      https://www.w3schools.com/js/js_string_search.asp
 *
 * Intent: practice the main ways to build and inspect strings in JS:
 *   1. Template literals — build a string using backticks and ${} interpolation
 *   2. String methods     — transform a string (case, slicing, etc.)
 *   3. String search      — find out whether/where a substring occurs
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

export default function JsStringsPage() {
  const [demoText, setDemoText] = useState("(nothing yet)");

  function handleTemplates() {
    // TODO: use a template literal (backticks) to build a string
    // that interpolates at least one variable with ${}.
    // setDemoText(...) with the result.
    let name = "Vân";
    let text = `Hello` + ` ` + `${name}`;
    setDemoText(text);
  }

  function handleMethods() {
    // TODO: start from a string and use at least two string methods
    // on it (e.g. toUpperCase, toLowerCase, slice, trim, replace...).
    // setDemoText(...) with the result.
    let text = "Hello world!";
    let result = text.toUpperCase().slice(0,5);
    setDemoText(result);
  }

  function handleSearch() {
    // TODO: use a search method (e.g. includes, indexOf, startsWith)
    // to check for a substring, and setDemoText(...) with a message
    // describing what was found.
    let text = "Today is a good day";
    let found = text.includes("good day");
    if (found) {
      setDemoText("good day was found");
    } else {
      setDemoText("good day was not found");
    }
  }

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        JS Strings
      </Typography>

      <Paper variant="outlined" sx={{ p: 2, mb: 3 }} id="demo">
        <Typography>{demoText}</Typography>
      </Paper>

      <Stack spacing={2} direction="column">
        <Button variant="contained" onClick={handleTemplates}>
          Templates
        </Button>
        <Button variant="contained" onClick={handleMethods}>
          Methods
        </Button>
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Stack>
    </Container>
  );
}
