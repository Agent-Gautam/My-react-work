import { useState } from "react";
import Box from "./Box";

export default function Container() {
  const [textflip, settextflip] = useState(true);
  const [boxArray, setboxArray] = useState(Array(9).fill(""));
  const [win, setwin] = useState("");
  const text = textflip ? "O" : "X";

  const boxes = boxArray.map((v, id) => {
    return <Box key={id} id={id} text={v} fun={settext} />;
  });
  function settext(id) {
    if (boxArray[id] === "" && !Win(boxArray)) {
      setboxArray((prev) => [
        ...prev.map((old, i) => {
          if (i === id) return text;
          else return old;
        }),
      ]);
    }
    settextflip((prev) => {
      return !prev;
    });
  }
  function Win(Array) {
    let comb = [
      [0, 1, 2],
      [0, 3, 6],
      [2, 5, 8],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [1, 4, 7],
      [3, 4, 5],
    ];
    for (let arr of comb) {
      if (arr.every((el) => Array[el] === "O") || arr.every((el) => Array[el] === "X")) {
        setwin(text);
        return true;
      }
    }
    return false;
  }

  return (
    <div className="Container">
      {boxes}
      {Win(boxArray) && <div className="win">{win} wins</div>}
    </div>
  );
}
