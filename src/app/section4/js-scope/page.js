"use client";

/*
 * JS Scope — Section 4
 * Ref: https://www.w3schools.com/js/js_scope.asp
 *      https://www.w3schools.com/js/js_hoisting.asp
 *
 * Intent: practice how variable scope works in JS:
 *   1. Block scope     — a `let`/`const` declared inside a block (e.g. an
 *      if-block) is not accessible outside it
 *   2. var vs let       — `var` is function-scoped and leaks out of a
 *      block, unlike `let`/`const`
 *   3. Hoisting         — a `var` declaration is hoisted (accessible,
 *      but undefined, before its line), while `let`/`const` are not
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

export default function JsScopePage() {
  const [demoText, setDemoText] = useState("(nothing yet)");

  function handleBlockScope() {
    // TODO: declare a `let` (or `const`) inside an if-block, then try
    // to access it right after the block (outside the {}) and observe
    // what happens. setDemoText(...) with a message describing the
    // result (you can wrap the outside access in try/catch to read
    // the error message).
    if (true) {
      let text = "Hello";
    }
    try {
      setDemoText(text);
    }
    catch (error) {
      setDemoText(`Error:${error.message}`);
    }
  }

  function handleVarLeak() {
    // TODO: declare a `var` inside an if-block, then access it right
    // after the block (outside the {}) — this should work because
    // `var` is function-scoped, not block-scoped. setDemoText(...)
    // with the value read from outside the block.
    if (true) {
      var text = "Hello";
    }
    setDemoText(text);
  }

  function handleHoisting() {
    // TODO: try to read a `var` variable BEFORE the line where it's
    // declared with `var`, then setDemoText(...) with what that read
    // returns (should be undefined, not an error) to show hoisting.
    let result = text;
    var text = "Hello";
    setDemoText(result);
  }

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        JS Scope
      </Typography>

      <Paper variant="outlined" sx={{ p: 2, mb: 3 }} id="demo">
        <Typography>{demoText}</Typography>
      </Paper>

      <Stack spacing={2} direction="column">
        <Button variant="contained" onClick={handleBlockScope}>
          Block Scope
        </Button>
        <Button variant="contained" onClick={handleVarLeak}>
          Var Leak
        </Button>
        <Button variant="contained" onClick={handleHoisting}>
          Hoisting
        </Button>
      </Stack>
    </Container>
  );
}
