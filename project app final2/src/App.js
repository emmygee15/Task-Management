import Navigation from "./Components/Navigation";
import RoutersTree from "./Components/RoutersTree";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navigation />
        <RoutersTree />
      </div>
    </ChakraProvider>
  );
}

export default App;
