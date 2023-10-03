import './App.css';
/* import Modal from './components/Modal/Modal'; */
import { useState } from "react";
import { Dialog } from "@mui/material";
import Header from './components/Header/Header';

function App() {
  const [openDialogue, setOpenDialogue] = useState(false);

  return (
    <div className="App">

      <Header setOpenDialogue={setOpenDialogue} />

      <Dialog open={openDialogue} onClose={() => setOpenDialogue(false)} >
				<div className="dialogue">
            <div className="dialogue_title">New Task</div>
            <input type="text" className="input" placeholder='Title' />
            <textarea name="" id="" cols="30" rows="10" className="textArea" placeholder='Description ...' aria-setsize={false} />
            <button className="btn">Valide</button>
        </div>
			</Dialog>

    </div>
  );
}

export default App;
