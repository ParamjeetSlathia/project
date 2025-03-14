import React, {useState} from 'react'
import axios from 'axios'
import Markdown from 'react-markdown'


function App() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function generateAnswer() {
    setAnswer("loading...");


    const response  = await axios({

      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAVkmDek1YnuV8Ir4SWjxdhYZJyJP27UW4",

      method: "post",

      data:{
        "contents":[{
          "parts":[{"text": question }]
        }]
      }
    })

    setAnswer(response ["data"]["candidates"][0]["content"]["parts"][0]["text"]);
  }
  return (
    <>

    <div className="min-h-screen h-auto w-full bg-zinc-800 text-white p-10">

    <h1 className='text-4xl font-bold mb-10'>Welcome to param AI App</h1>

    <textarea rows={11} cols={60} value={question} onChange={(e) => setQuestion(e.target.value)}
      className='border border-zinc-600 outline-none p-10 w-full'></textarea> <br />

    <button className='bg-green-500 px-4 py-3 font-semibold rounded-lg' onClick={generateAnswer}>Generate</button>

    <div className="Container">
      <Markdown>{answer}</Markdown>
    </div>

    </div>
      
    </>
  )
}

export default App


