import { useState } from "react"

export default function TextForm(props) {
    const handleupclick = ()=>{
        // console.log("uppercase was clicked " + text)
        // let newText = text.charAt(0).toUpperCase() + text.slice(1);
        let newText = text.toUpperCase();
        // console.log(newText)
        setText(newText)
    }
    const handleOnChange = (event)=>{
        // console.log("on change")
        setText(event.target.value)
    }
    const [text, setText] = useState('enter your text here')
    // setText("New text is here")

    return (
        <div>
            <h2>Enter your text here</h2>
            <div className="mb-3">
               <textarea className="form-control" value={text} id="myBox" rows="3" onChange={handleOnChange}></textarea>
            
            </div>
            <button className="btn btn-primary" onClick={handleupclick}>Convert to Upper case</button>
        </div>
    )
}
