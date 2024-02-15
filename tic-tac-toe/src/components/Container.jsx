import { useState } from "react"
import Box from "./Box"

export default function Container(){
    function settext(id){
        settextflip(prev => !prev);
        setboxArray(prev=>
            [...prev.map((old,i) => {if(i === id) return text; else return old})]); 
    }
    const [win, setWin] = useState(false);
    const [textflip, settextflip] = useState(true);
    const [boxArray, setboxArray] = useState(Array(9).fill(""));
    const text = textflip ? "O" : "X";
    let i = 0;
    const boxes = boxArray.map(() => {
        return <Box key={i} text={text} fun={settext}/>
    })
    return (
        <div className="Container">
            {boxes}
        </div>
    )
}