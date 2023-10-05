import "./App.css";
import Select from "react-select";
/* import Modal from './components/Modal/Modal'; */
import { useEffect, useRef, useState } from "react";
import { Dialog } from "@mui/material";
import Header from "./components/Header/Header";
import Task from "./components/task/Task";

function App() {
  const endPoint = "http://127.0.0.1:8000/api/todo/";
  const refColor = useRef();
  const [updateData, setUpdateData] = useState(false)
  const [colors, setColors] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({ title: "", description: "", color:null });
  const submit_data = (event) => {
    event.preventDefault();
    fetch(endPoint+'task/',{
      method : 'POST',
      headers : {"Content-Type":"application/json"},
      body : JSON.stringify(task)
    })
    .then(response=>{
      if (response.ok ){
        retrieve_data();
        setOpenDialogue(false);
      }
      else{
        throw new Error('Error, status = ' + response.status);
      }
    })
    .catch(err =>{ 
      console.log(err.message); 
    })
  };
  const retrieve_data = () => {
    fetch(endPoint + "task/")
      .then((response) => {
        if (response.ok) return response.json();
        else {
          throw Error(
            "Could not get the response , status = " + response.status
          );
        }
      })
      .then((data) => {
        setTasks(data);
      })
      .catch((err) => {
        setTasks([]);
        console.log(err);
      });
  };
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
  useEffect(() => {
    retrieve_data();
    retrieve_colors_data();
  }, [updateData]);

  const [openDialogue, setOpenDialogue] = useState(false);

  return (
    <div className="App">
      <>
        <Header setOpenDialogue={setOpenDialogue} />

        <div className="taskList">
          {tasks.map((task) => (
            <Task task={task} />
          ))}
        </div>

        <Dialog open={openDialogue} onClose={() => setOpenDialogue(false)}>
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
      </>
    </div>
  );
}

export default App;
