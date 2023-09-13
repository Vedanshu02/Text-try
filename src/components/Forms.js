import React,{useState} from 'react'

export default function Forms(props) {
    const [text, setText] = useState("Enter something");
    const clickUp = ()=>{
      let newText=text.toUpperCase();
      setText(newText)
   
    }
    const clickdw = ()=>{
      let newText=text.toLowerCase();
      setText(newText)
    }
    const cleart = ()=>{
      let newText="";
      setText(newText)
    }
    const copyt = ()=>{
     var text = document.getElementById("mybox");
     text.select();
     navigator.clipboard.writeText(text.value);
     props.showAlert("Copied to Clipboard","Success")
    }

    const onChangev = (event)=>{
        setText(event.target.value)}

    return (
       
          <>
          
          <div classame="form-check" style={{color: props.mode==='dark'?'white':'black'}}>
          <h1>{props.title}</h1>
        
       <textarea className="area" id="mybox" rows='10'  onChange={onChangev} value={text} style={{backgroundColor: props.mode==='dark'?'white':'#e1dfdf'}}></textarea>
       <p> {text.split(" ").length===1?0:text.split(" ").length-1} words and {text.length} character</p>
      <button className="btn btn-dark mx-2" onClick={clickUp}>Convert into uppper case</button>
      <button className="btn btn-dark my-2" onClick={clickdw}>Convert into lower case</button>
      <button className="btn btn-dark my-2 mx-2 " onClick={cleart}>Clear</button>
      <button className="btn btn-dark mx-2 my-2" onClick={copyt}>Copy</button>
       </div>
       <div className="container  my-3 " style={{color: props.mode==='dark'?'white':'black'}}>
         
         <h4>Preview</h4>
         <p> {text}</p>     
       </div>
    
       </>
  )
}

