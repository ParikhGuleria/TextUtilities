import React, { useState } from 'react'

export default function TextForms(props) {
    //To change text to uppercase on click:
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("success","! coverted to uppercase")
    }
    //To change text to lowercase on click:
    const handleLwClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("success","! coverted to lowercase")
    }

    //To type in textfield:
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    //To clear the text from text-area:
    const clearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("success","! text is cleared")

    }

    //To copy the text:
    const copyText = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("success","! text copied")
    }

    //Remove extra spaces:
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("success","! extra space removed")
    }

    const [text, setText] = useState('write your text');
    // text conatains the intial value of useState
    // setText is used to change value of text

    return (
        <>
            <div className="container my-3" style={{color: props.mode=== "dark"?"white":"#042743"}}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor: props.mode=== "dark"?"#13466e":"white",color: props.mode=== "dark"?"white":"#042743"}} id="myBox" rows="8" ></textarea>
                </div>
                <div disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>UpperCase</div>
                <div className="btn btn-success mx-1 my-1" onClick={handleLwClick}>LowerCase</div>
                <div className="btn btn-danger mx-1 my-1" onClick={clearClick}>Clear Text</div>
                <div className="btn btn-warning mx-1 my-1" onClick={copyText}>Copy Text</div>
                <div className="btn btn-info mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</div>
            </div>
            <div className="container my-3" style={{color: props.mode=== "dark"?"white":"#042743"}}>
                <h4>Your Text Summary</h4>
                <p>{text.split(/ \s+ /).filter((element)=>{return element.length!==0}).length} Words and {text.length} characters</p>
            </div>
        </>
    )
}

