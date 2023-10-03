import React, { useState} from 'react'

export default function TextForm(props) {
 
        const HandlingUpclick = ()=>{
            // console.log("upper case was clicked")
            //fucntiom to create lower case to upper case
            let newText = text.toUpperCase();
             setText(newText)
             if(text !== ' ' && text.replace(/\s/g, '').length){
                props.showAlert(": Converted to Uppercase","success")
             }else{
                props.showAlert(": Enter text first","danger")
             }
             
        }

        const Handlingloclick = ()=>{
            // console.log("lower case was clicked")
            //fucntiom to create upper case to lower case
            let newText = text.toLowerCase();
             setText(newText)
             if(text !== ' ' && text.replace(/\s/g, '').length){
                props.showAlert(": Converted to Lowercase","success")
             }else{
                props.showAlert(": Enter text first","danger")
             }
             
        }

        const Handlingclearclick = ()=>{
            // console.log("lower case was clicked")
            //fucntiom to create upper case to lower case
            let newText = " ";
             setText(newText)
             if(text !== ' ' && text.replace(/\s/g, '').length){
             props.showAlert(": Text cleared","success")
             }else{
                props.showAlert(": Enter text to clear","danger")
             }
        }

        const capitalize = ()=>{
           
            const arr = text.split(" ");
            for (var i = 0; i < arr.length; i++) {
               
                arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
                //2nd index word capital
                // arr[i] = arr[i].slice(0,2) + arr[i].charAt(2).toUpperCase() + arr[i].slice(3);
            
            }
            const newText = arr.join(" ");
            setText(newText);
            if(text !== ' ' && text.replace(/\s/g, '').length){
                props.showAlert(": Text has been capitalized","success")
            }else{
                props.showAlert(": Enter text to capitalized","danger") 
            }
            
        }

        const Handlingcptext = ()=>{
            navigator.clipboard.writeText(text);
            if(text !==' ' && text.replace(/\s/g, '').length){
                props.showAlert(": Text has been copied to clipboard","success")
            }else{
                props.showAlert(": Can't copy, Enter text first","danger")
            }
            
        }
         //control extra spaces
        const RemoveSpaces=()=>{
            let newText = text.replace(/\s+/g, ' ')
            setText(newText)
            props.showAlert(": Extra spaces removed","success")
           }
     
        const handlingOnchange = (event)=>{
            // console.log("on change")
            setText(event.target.value)
        }
        

        //use state
        const [text, setText] = useState('')
        
        
       
 return (
    <>
    <div  className=" container my-4" style={{color: props.mode==='dark'?'white':'#042743'}}  >
    <div>
            <h1>{props.heading}</h1>
            <div className="mb-3" >
                <textarea className="form-control" value={text} onChange={handlingOnchange} style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'#042743'}} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
                <button className={"btn btn-primary mx-1"} onClick={HandlingUpclick}>Click To UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={Handlingloclick}>Click To LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={Handlingclearclick}>Clear text</button>
                <button className="btn btn-primary mx-1" onClick={Handlingcptext}>Copy text</button>
                <button className="btn btn-primary mx-1" onClick={capitalize}>Capitalize</button>
                <button className="btn btn-primary mx-1" onClick={RemoveSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="conatiner my-3" style={{color: props.mode==='dark'?'white':'#042743'}} > 
        <h2>Your Text Summary</h2>
        <p>{text.trim() === '' ? 0 : text.split(" ").filter((word) => word.trim() !== '').length} <strong>Words and</strong> {text.replace(/\s/g, '').length} <strong>characters</strong></p>
        <p>{0.008 * text.replace(/\s/g, '').length} <strong>Minutes Read</strong></p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the text box above to preview it here"}</p>
    </div>

    </div>
    </>
  )
}
