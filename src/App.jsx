import Scene01Arrival from "./scenes/01Arrival";
import Scene02Decision from "./scenes/02Decision";
import Scene03Reality from "./scenes/03Reality";
import Scene04Possibility from "./scenes/04Possibility";
import Scene05Invitation from "./scenes/05Invitation";

function App() {
  return (
     <main className="bg-black text-white">
      <Scene01Arrival />
      <Scene02Decision />
      <Scene03Reality />
      <Scene04Possibility />
      <Scene05Invitation />
    </main>
  );
}

export default App;