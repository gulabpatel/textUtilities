import { useState } from "react"

export default function TextForm(props) {
    const handleupclick = ()=>{
        // console.log("uppercase was clicked " + text)
        // let newText = text.charAt(0).toUpperCase() + text.slice(1);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handlelowerclick = ()=>{
        // console.log("uppercase was clicked " + text)
        // let newText = text.charAt(0).toUpperCase() + text.slice(1);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearclick = ()=>{
        // console.log("uppercase was clicked " + text)
        // let newText = text.charAt(0).toUpperCase() + text.slice(1);
        let newText = "";
        setText(newText)
    }
    const handleOnChange = (event)=>{
        // console.log("on change")
        setText(event.target.value)
    }
    const [text, setText] = useState('enter your text here')

    return (
        <>
        <div className="container">
            <h2>{props.messege}</h2>
            <div className="mb-3">
               <textarea className="form-control"  value={text} id="myBox" rows="3" onChange={handleOnChange} >Enter something here</textarea>
            
            </div>
            <button className="btn btn-primary" onClick={handleupclick}>Convert to Upper case</button>
            <button className="btn btn-primary mx-3" onClick={handlelowerclick}>Convert to lower case</button>
            <button className="btn btn-primary mx-3" onClick={handleClearclick}>Clear Text</button>
        </div>
        <div className="container my-3">
            <h2>{props.output}</h2>
            <p>No -of words : {text.split(" ").length} & No-of Characters: {text.length} </p>
            <p>Time to read the article : {0.008*text.split(" ").length} </p>

            <h3>Your summary is here</h3>
            
            <div>
            <textarea className="form-control" value={text} rows="3" onChange={handleOnChange}></textarea>
            
            {/* <p>{text}</p> */}
            </div>

        </div>
        </>
    )
}
