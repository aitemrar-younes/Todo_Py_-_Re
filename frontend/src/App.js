import './App.css';
/* import Modal from './components/Modal/Modal'; */
import { useState } from "react";
import { Dialog } from "@mui/material";
import Header from './components/Header/Header';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import EditIcon from '@mui/icons-material/Edit';

function App() {
  const [openDialogue, setOpenDialogue] = useState(false);

  return (
    <div className="App">

      <Header setOpenDialogue={setOpenDialogue} />

      <ul className="taskList">

        <div className="task">
          <div className="title">Title</div>
          <div className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora magni placeat architecto. Aperiam ipsum dolorum expedita, voluptatibus enim numquam nihil eius a voluptas.</div>
          <div className="task-footer">
            <div className="date">
              25-06-1997
            </div>
            <div className="actions">
              <button className="btn btn-edit">
                <EditIcon />
              </button>
              <button className="btn btn-delete">
                <DeleteOutlineIcon />
              </button>
            </div>
          </div>
        </div>

        <div className="task">
          <div className="title">Title</div>
          <div className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora magni placeat architecto. Aperiam ipsum dolorum expedita, voluptatibus enim numquam nihil eius a voluptas.</div>
          <div className="task-footer">
            <div className="date">
              25-06-1997
            </div>
            <div className="actions">
              <button className="btn btn-edit">
                <EditIcon />
              </button>
              <button className="btn btn-delete">
                <DeleteOutlineIcon />
              </button>
            </div>
          </div>
        </div>

      </ul>


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
