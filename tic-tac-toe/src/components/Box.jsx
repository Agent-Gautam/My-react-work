export default function Box(props){
    
    return (
        <button className="box" onClick={()=>props.fun(props.id)}>
            {props.text}
        </button>
    )
}