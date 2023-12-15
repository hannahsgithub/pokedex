import { AppRouter } from "./AppRouter";
import { PokemonProvider } from "./context/PokemonProvider";

function App() {
  const gradientStyle = {
    minHeight: "100vh",
    backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  };

  return (
    <div style={gradientStyle}>
      <PokemonProvider>
        <AppRouter />
      </PokemonProvider>
    </div>
  );
}

export default App;
