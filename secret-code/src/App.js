import "./App.css";
import Container from "./container";

function App({ code }) {
  return (
    <div className="flex flex-col justify-start gap-10 items-center pt-10 w-screen h-screen">
      <h1 className="text-white text-5xl font-bold">Secret Code</h1>
      <Container code={code} />
    </div>
  );
}

export default App;
