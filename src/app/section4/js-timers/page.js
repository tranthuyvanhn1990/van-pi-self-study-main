"use client";

/*
 * JS Timers — Section 4
 * Ref: https://www.w3schools.com/js/js_timing.asp
 *
 * Intent: practice scheduling code to run later with JS timers:
 *   1. setTimeout  — run something once, after a delay
 *   2. clearTimeout — cancel a pending setTimeout before it fires
 *   3. setInterval  — run something repeatedly, and stop it with
 *      clearInterval
 *
 * Instructions:
 *   - Fill in each TODO below with the matching JS feature.
 *   - Click each button to trigger it and check the output actually
 *     matches what you wrote (highlighted box for all three).
 *   - Leave the file structure (imports, component, buttons) as is —
 *     only fill in the TODOs.
 */

import { useState, useRef } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

export default function JsTimersPage() {
  const [demoText, setDemoText] = useState("(nothing yet)");
  const timeoutIdRef = useRef(null);
  const intervalIdRef = useRef(null);

  function handleSetTimeout() {
    // TODO: use setTimeout to setDemoText(...) with a message after a
    // delay (e.g. 1000ms). Store the returned id in timeoutIdRef.current
    // so the Cancel button below can clear it.
  timeoutIdRef.current = setTimeout(() => {
    setDemoText("Good night after 2s");
  }, 2000);
  }

  function handleCancelTimeout() {
    // TODO: use clearTimeout with timeoutIdRef.current to cancel the
    // pending setTimeout above. setDemoText(...) to confirm it was
    // cancelled.
    clearTimeout(timeoutIdRef.current);
    setDemoText("Cancelled")
  }

  function handleSetInterval() {
    // TODO: use setInterval to setDemoText(...) with an updating value
    // (e.g. a counter) every second. Store the returned id in
    // intervalIdRef.current so the Stop button below can clear it.
    let count = 0;
    intervalIdRef.current = setInterval(() => {
      count++;
      setDemoText(`Count:${count}`);
    }, 2000);
  }

  function handleStopInterval() {
    // TODO: use clearInterval with intervalIdRef.current to stop the
    // repeating setInterval above.
    clearInterval(intervalIdRef.current);
    setDemoText("Count cancelled");
  }

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        JS Timers
      </Typography>

      <Paper variant="outlined" sx={{ p: 2, mb: 3 }} id="demo">
        <Typography>{demoText}</Typography>
      </Paper>

      <Stack spacing={2} direction="column">
        <Button variant="contained" onClick={handleSetTimeout}>
          Set Timeout
        </Button>
        <Button variant="outlined" onClick={handleCancelTimeout}>
          Cancel Timeout
        </Button>
        <Button variant="contained" onClick={handleSetInterval}>
          Set Interval
        </Button>
        <Button variant="outlined" onClick={handleStopInterval}>
          Stop Interval
        </Button>
      </Stack>
    </Container>
  );
}
