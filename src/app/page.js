import fs from "node:fs";
import path from "node:path";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";

function findLessonRoutes() {
  const appDir = path.join(process.cwd(), "src", "app");
  const routes = [];

  function walk(dir, segments) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const nextSegments = [...segments, entry.name];
      const subDir = path.join(dir, entry.name);
      if (fs.existsSync(path.join(subDir, "page.js"))) {
        routes.push("/" + nextSegments.join("/"));
      }
      walk(subDir, nextSegments);
    }
  }

  for (const entry of fs.readdirSync(appDir, { withFileTypes: true })) {
    if (entry.isDirectory() && entry.name.startsWith("section")) {
      walk(path.join(appDir, entry.name), [entry.name]);
    }
  }

  return routes.sort();
}

export default function Home() {
  const routes = findLessonRoutes();

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        PI Self-Study
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Lessons
      </Typography>
      {routes.length === 0 ? (
        <Typography color="text.secondary">
          No exercises yet. Run <code>/practice</code> to generate one.
        </Typography>
      ) : (
        <Paper variant="outlined">
          <List disablePadding>
            {routes.map((route, i) => (
              <ListItem
                key={route}
                disablePadding
                divider={i < routes.length - 1}
              >
                <ListItemButton component="a" href={route}>
                  <ListItemText primary={route} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Container>
  );
}
