import { useState } from "react";
import Row from "./row";
export default function Container({ code }) {
  const [rowCount, setrowCount] = useState(1);

  function makeRow(e) {
    if (rowCount < 9 && e.target.innerText !== "O") {
      setrowCount((prev) => prev + 1);
    }
    e.target.innerText = "O";
  }

  const rows = Array.from({ length: rowCount }, (_, id) => (
    <Row key={id} handlerow={makeRow} code={code} />
  ));
  
  return (
    <div className="relative container w-[380px] md:w-[500px] flex flex-col gap-2">
      {rows}
    </div>
  );
}
