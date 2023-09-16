import React from "react";
import axios from "axios";
import Loader from "../Loader/Loader";

import "./TextBox.component.css";



const TextBox = function (props) {

  const [text, setText] = React.useState("Enter text herea harsh@gmail.com pkj297@gmail.com");
  const [loading, setLoading] = React.useState(false);
  const [errorCounts, setErrorCounts] = React.useState(0);
  const [errors, setErrors] = React.useState([]);
  const [mailIds, setMailIds] = React.useState([]);
  const [wordsCount, setWordsCount] = React.useState(0);

  React.useEffect(() => {
    let words = text.split(" ");
    let count = 0;
    for(let word of words) {
      if(word.length !== 0) count++;
    }
    setWordsCount(count);
  }, [text])

  const options = {
    method: 'POST',
    url: 'https://jspell-checker.p.rapidapi.com/check',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '4dfb0fe566msh6ab11c26528987bp1fbd3djsn15aa2e2d0b68',
      'X-RapidAPI-Host': 'jspell-checker.p.rapidapi.com'
    },
    data: {
      language: 'enUS',
      fieldvalues: text,
      config: {
        forceUpperCase: false,
        ignoreIrregularCaps: false,
        ignoreFirstCaps: true,
        ignoreNumbers: true,
        ignoreUpper: false,
        ignoreDouble: false,
        ignoreWordsWithNumbers: true
      }
    }
  };

  const clearText = () => {
    setText('');
    props.showAlert("Text Cleared!", "success")
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(text);
    props.showAlert("Text is copied to clipboard!", "success")
  }

  const checkGrammar = async () => {
    setLoading(true);
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setErrorCounts(response.data.spellingErrorCount);
      if(response.data.elements)  setErrors(response.data.elements[0].errors)
      else setErrors([]);
      props.showAlert("Analyzed !!!", "success")
      setLoading(false);
    } catch (error) {
      console.error(error);
      props.showAlert(error, "danger")
      setLoading(false);
    }
  }

  const extractEmails = () => {
    let splits = text.split(" ");
    let result = splits.map(split => split.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")) 
    let mails = [];
    result.forEach(tmp => {
      if(tmp) mails.push(tmp)
    })
    setMailIds(mails);
    props.showAlert("Emails Extracted!", "success")
  }  

  const onTextChange = (ev) => {
    setText(ev.target.value);
  }

  const toUpperCase = () => {
    setText(text.trim().toUpperCase());
    props.showAlert("Transformed to Upper case!", "success")
  }

  const toLowerCase = () => {
    setText(text.trim().toLowerCase());
    props.showAlert("Transformed to Lower case!", "success")
  }

  const toSnakeCase = () => {
    setText(text.trim().replaceAll("-", "_").replaceAll(" ", "_"));
    props.showAlert("Transformed to Snake case!", "success")
  }

  const toKebabCase = () => {
    setText(text.trim().replaceAll(" ", "-").replaceAll("_", "-"));
    props.showAlert("Transformed to Kebab case!", "success")
  }

  const toPascalCase = () => {
    let newText = "";
    newText = text.charAt(0).toUpperCase();
    for (let i = 1; i < text.length; i++) {
      if (text.charAt(i) === " " || text.charAt(i) === "_" || text.charAt(i) === "-") {
        i++;
        newText += text.charAt(i)?.toUpperCase();
      } else {
        newText += text.charAt(i);
      }
    }
    setText(newText)
    props.showAlert("Transformed to Pascal case!", "success")
  }

  const toCamelCase = () => {
    let newText = "";
    newText = text.charAt(0).toLowerCase();
    for (let i = 1; i < text.length; i++) {
      if (text.charAt(i) === " " || text.charAt(i) === "_" || text.charAt(i) === "-") {
        i++;
        newText += text.charAt(i)?.toUpperCase();
      } else {
        newText += text.charAt(i);
      }
    }
    setText(newText)
    props.showAlert("Transformed to Camel case!", "success")
  }

  return <>

    {loading && <Loader />}

    <div className="form-group">
      <p className={`h2 my-4 text-${props.themeMode==='light'?'dark':'light'}`}>Enter text here</p>
      <textarea 
        id="textBox" 
        className="form-control" 
        value={text} 
        onChange={onTextChange} 
        rows="12" 
        style={{
          background: props.themeMode==='light'?'whitesmoke': props.themeColor+'50', 
          color: props.themeMode==='light'?'gray':'whitesmoke'
        }}
      ></textarea>
      <br />
      <fieldset className="d-flex justify-content-end text-secondary">
        <button className="btn btn-sm btn-dark mx-1 checkBtn" onClick={clearText}>Clear Text</button>
        <button className="btn btn-sm btn-dark mx-1 checkBtn" onClick={copyToClipboard}>Copy To Clipboard</button>
        <span className="py-2 mx-2" style={{color: props.themeMode==='light'?'gray':'whitesmoke'}}>
          {wordsCount} <i>&nbsp;WORDS&nbsp; & &nbsp;</i>{text.length} <i>&nbsp;Characters</i>
        </span>
      </fieldset>
      <fieldset className={`border border-${props.themeMode==='light'?'gray':'whitesmoke'} p-2 my-2 d-flex`}>
        <legend className="border-0 text-center" style={{color: props.themeMode==='light'?'gray':'whitesmoke'}}>SPELL-CHECKER</legend>
        <button className="btn btn-sm btn-dark mx-1 checkBtn" onClick={checkGrammar}>Check</button>
        <span className="mx-1 p-1 text-danger"><b>Errors: {errorCounts}</b></span>
        <span className="mx-1 p-2" style={{color: props.themeMode==='light'?'gray':'whitesmoke'}}>Suggestions: {errors.map(error => {
          return <div key={error.position}>
            <i className="text-danger">{error.word}&ensp;-&gt;&ensp;{error.suggestions.map(suggestion => {
              return <span key={suggestion} style={{color: props.themeMode==='light'?'gray':'whitesmoke'}}>{suggestion}&emsp;</span>
            })} </i>
          </div>
        })}</span>
      </fieldset>
      <fieldset className={`border border-${props.themeMode==='light'?'gray':'whitesmoke'} p-2 my-2 d-flex`}>
        <legend className="border-0 text-center" style={{color: props.themeMode==='light'?'gray':'whitesmoke'}}>EMAIL-EXTRACTOR</legend>
        <button className="btn btn-sm btn-dark mx-1 checkBtn flex-start" onClick={extractEmails}>Extract</button>
        <span className="mx-1 p-2" style={{color: props.themeMode==='light'?'gray':'whitesmoke'}}><b>E-mail IDs: &nbsp;</b>{mailIds.map(mailId => {
          if(mailIds) {
            return <span key={mailId?.input} style={{color: props.themeMode==='light'?'gray':'whitesmoke'}}>{mailId?.input}&emsp;</span>
          } return null;
        })}</span>
      </fieldset>
      <fieldset className={`border border-${props.themeMode==='light'?'gray':'whitesmoke'} p-2 my-2 d-flex justify-content-around`}>
        <legend className="border-0 text-center" style={{color: props.themeMode==='light'?'gray':'whitesmoke'}}>CASES</legend>
        <button className="btn btn-sm btn-dark mx-1" onClick={toUpperCase}>UPPER CASE</button>
        <button className="btn btn-sm btn-dark mx-1" onClick={toLowerCase}>lower case</button>
        <button className="btn btn-sm btn-dark mx-1" onClick={toSnakeCase}>Snake_Case</button>
        <button className="btn btn-sm btn-dark mx-1" onClick={toKebabCase}>Kebab-Case</button>
        <button className="btn btn-sm btn-dark mx-1" onClick={toPascalCase}>PascalCase</button>
        <button className="btn btn-sm btn-dark mx-1" onClick={toCamelCase}>camelCase</button>
      </fieldset>
    </div>
  </>
}

export default TextBox;