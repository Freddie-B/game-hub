import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import theme from "./theme";
import "./App.css";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "main aside"`,
      }}
      templateRows="auto 1fr"
      templateColumns="auto 1fr"
    >
      <GridItem gridArea="nav">
        <NavBar />
      </GridItem>
      <GridItem gridArea="main">
        <GameGrid />
      </GridItem>
      <GridItem gridArea="aside">Aside</GridItem>
    </Grid>
  );
}

export default App;
