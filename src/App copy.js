import React, {useState, useEffect} from 'react';
import './App.css';

const GIFS = ['https://media1.giphy.com/media/EPcvhM28ER9XW/giphy.gif','https://media0.giphy.com/media/lcySndwSDLxC4eOU86/giphy.gif'];

const DIFFERENT_GIFS = ['https://media3.giphy.com/media/jxODdkVOIGFgc/giphy.gif?cid=ecf05e47sv88jufk5p1ocr45rgzjd7fgc4n6g3ntw78vc7ue&rid=giphy.gif',
'https://media2.giphy.com/media/HDR31jsQUPqQo/giphy.gif?cid=ecf05e471147265af453314436a556ee5f155785eb5bda35&rid=giphy.gif'];


function App() {
  const [gifs, setGifs] = useState(GIFS)

  useEffect(function() {
    setGifs(DIFFERENT_GIFS)
  }, [])

  return (
    <div className="App">
      <section className="App-content">
        {
        gifs.map(gif => <img src={gif} />)
        }
        <button onClick={() => setGifs(DIFFERENT_GIFS)}>Cambiar gifs</button>
      </section>
    </div>
  );
}

export default App;
