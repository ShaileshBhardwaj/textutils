import React, { useState } from 'react';


export default function TextArea(props){
    const [text, setText] = useState('');
   
     const toUpperCase =()=> {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Text converted to Uppercase', 'success');
    }
    const toLowerCase =()=> {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Text converted to lowercase', 'success');
        }
    const handleOnChange =(e)=> {
        setText(e.target.value);
    }
    const copyText =()=> {
        let copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert('Text Copied', 'success');
    }
    const clearText =()=> {
        setText("");
        props.showAlert('Text Cleared', 'success');
    }
    const removeSpace =()=>{
        //let newText = text.split(/[  ]+/)
        setText(text.split(/[  ]+/).join(' '))
        props.showAlert('Extra Space Removed', 'success');
    }
        
    return (
        <>
            <div className="my-3 container" style={{color : props.mode ==='dark'?'white' : 'black'}}>    
                <h1>{props.heading}</h1>
                <textarea style={{backgroundColor: props.mode==='dark'? 'grey':'white', color : props.mode ==='dark'?'white' : 'black'}}  className='w-100 form-control' onChange={handleOnChange} value={text} id='myBox' rows='8'></textarea>
                <button className="btn btn-primary my-3" onClick={toUpperCase}>Convert to Uppercase</button>  
                <button className="btn btn-primary my-3 mx-2" onClick={toLowerCase}>Convert to LowerCase</button>    
                <button className="btn btn-primary my-3 mx-2" onClick={copyText}>Copy Text</button>    
                <button className="btn btn-primary my-3 mx-2" onClick={clearText}>Clear Text</button> 
                <button className="btn btn-primary my-3 mx-2" onClick={removeSpace}>Remove Space</button>       
            </div>

            <div className="container" style={{color : props.mode ==='dark'?'white' : 'black'}}>
                <h2>Text Overview</h2>
                <p>Total word is {text.split(" ").length} and Total character is {text.length}</p>
                <p>Reading time is {0.008 * text.split(" ").length}</p>
                <h2>Text Preview</h2>
                <p>{text.length>0?text:"enter your text in the above box to preview it"}</p>
            </div>
        </>

    );
}


