import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import theme from "./theme";
import "./App.css";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "main aside"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg"></Show>
      <GridItem area="aside">Aside</GridItem>
      <GridItem area="main">M</GridItem>
    </Grid>
  );
}

export default App;
