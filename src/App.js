import './App.css';
import axios from 'axios';
import {useState, createContext} from 'react';
function App() {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [text, setText] = useState('')
  const [log, setLog] = useState('')
  console.log(text)
  const sendEmail = async(e) =>{
    e.preventDefault()
    try{
      const res = await axios.post('https://email-sender-39av.onrender.com/send_email', {to: email, subject, message: text})
      console.log(res.data)
      setLog(res.data.msg)
    }catch(err){
      setLog(err.err)
      console.log(err)
    }
  }
  return (
    <div className='App'>
      <form onSubmit={sendEmail}>
        <h1>{log}</h1>
        <input
        placeholder ='Email'
        onChange ={(e) => setEmail(e.target.value)}
        value = {email}
        />
        <input
        placeholder='Subject'
        onChange={(e) => setSubject(e.target.value)}
        value={subject}
        />
        <textarea
        placeholder='Text'
        onChange={(e) => setText(e.target.value)}
        value={text}
        ></textarea>
        <button>Send</button>
      </form>
    </div>
  );
}

export default App;
