export default function Box(props){
    props.settext(props.key);
    return (
        <button className="box">
            {props.text}
        </button>
    )
}