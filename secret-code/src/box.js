export default function Box({id,value,increment}) {
    return (
        <button 
            className="w-[50px] h-[50px] rounded border-4 border-gra bg-gray-300" 
            onClick={() => {increment(id)}}
        >
            {value}
        </button>
    )
}