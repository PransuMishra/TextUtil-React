import React, {useState} from 'react';

export default function TextForms(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked." + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('convert to Upper case!', 'success')
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked." + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('convert to Lower case!', 'success')
    }

    const handleClear = ()=>{
        let newText = ('');
        setText(newText);
        props.showAlert('text cleared!', 'success')
    }
    const handleCopy = () => {
        var text = document.getElementById("MyBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('copied to clipboard!', 'success')
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('Remove all extra space!', 'success')
    }

   

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');

  return (
    <>
      <div className="container" style={{color : props.mode==='dark'?'white':'#053e64ff'}}>
        <h1>{props.Heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'gray':'white', color : props.mode==='dark'?'white':'#053e64ff'}} id="MyBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>clear</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className="container my-3" style={{color : props.mode==='dark'?'white':'#053e64ff'}}>
        <h2>your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} cheracters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter somthing in the textBox above to preview it hear."}</p>
    </div>
    </>
  );
}
