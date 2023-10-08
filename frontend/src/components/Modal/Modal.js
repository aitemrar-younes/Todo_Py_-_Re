import { useEffect, useRef, useState } from "react";
import './Modal.css'
import { Dialog } from "@mui/material";
import Select from "react-select";


const Modal = ({openModal, closeModal, task, setTask, submit_data, children}) => {

	const endPoint = "http://127.0.0.1:8000/api/todo/";
	const [colors, setColors] = useState([]);
	const refColor = useRef();
    const retrieve_colors_data = () => {
		fetch(endPoint + "color/")
		  .then((response) => {
			if (response.ok) return response.json();
			else {
			  throw Error(
				"Could not get the response , status = " + response.status
			  );
			}
		  })
		  .then((data) => {
			setColors(data);
		  })
		  .catch((err) => {
			setColors([]);
			console.log(err);
		  });
    };
    
    /* Init trigger */
    useEffect(() => {
        retrieve_colors_data();
    }, []);
    return (
        <Dialog open={openModal} onClose={closeModal}>
          <div className="dialogue">
            <div className="dialogue_title">New Task</div>
            <input
              type="text"
              className="input"
              placeholder="Title"
              value={task.title}
              onChange={(value) =>
                setTask({ ...task, title: value.target.value })
              }
            />
            <Select
              ref={refColor}
              onChange={choice => setTask({...task, color:choice.value})}
              options={colors.map((color) => ({
                value: color.id,
                label: color.name,
                obj:color 
              }))}
            />
            <textarea
              value={task.description}
              onChange={(value) =>
                setTask({ ...task, description: value.target.value })
              }
              name=""
              id=""
              cols="30"
              rows="10"
              className="textarea"
              placeholder="Description ..."
            />
            <button className="btn" onClick={submit_data}>
              Valide
            </button>
          </div>
        </Dialog>
    );
}
 
export default Modal;