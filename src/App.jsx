import Button from "./components/Button";
import ButtonGrandient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>
      <ButtonGrandient />
    </>
  );
}

export default App;
