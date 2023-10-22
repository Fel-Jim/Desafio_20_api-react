import Buscador from "./Components/Buscador";
import MiApi from "./Components/MiApi";

function App() {
  return (
    <>
      <div className="bodyBox d-grid">
        <div className="buscadorBox"></div>
        <div>
          <MiApi />
        </div>
        <div>
          <Buscador />
        </div>
      </div>
    </>
  );
}

export default App;
