import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header/Header";
import "./Home.css";
import Modal from "../../components/Modal/Modal";
import Task from "../../components/task/Task";
import { Task_Create, retrieve_tasks } from "./APIExchange";
const Home = () => {
	
  const [openDialogue, setOpenDialogue] = useState(false);
  const [tasks, setTasks] = useState([]);
  
  const taskTitleRef = useRef();
  const taskDescriptionRef = useRef();
  const taskColorRef = useRef();

  const submit_data = (event) => {
    event.preventDefault();
	Task_Create(taskTitleRef,taskDescriptionRef,taskColorRef, retrieve_tasks, setOpenDialogue, setTasks)
  };

  /* Init trigger */
  useEffect(() => {
    retrieve_tasks(setTasks);
  }, []);

  return (
    <>
      <Header setOpenDialogue={setOpenDialogue} />
      <Modal
        openModal={openDialogue}
        closeModal={() => setOpenDialogue(false)}
		    title={taskTitleRef}
        description={taskDescriptionRef}
        color={taskColorRef}
        submit_data={submit_data}
      />

      <div className="taskList">
        {tasks.map((task) => (
          <Task task={task} />
        ))}
      </div>
    </>
  );
};

export default Home;
