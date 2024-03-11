import AppClima from "./components/AppClima";
import { ClimaProvider } from "./context/ClimaProvaider";
function App() {
  return (
    <ClimaProvider>
      <header>
        <h1>Buscador Climatologico</h1>
      </header>
      <AppClima />
    </ClimaProvider>
  );
}

export default App;
