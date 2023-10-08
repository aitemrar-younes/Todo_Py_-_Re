import { useEffect, useRef, useState } from 'react';
import Header from '../../components/Header/Header';
import './Home.css'
import Modal from '../../components/Modal/Modal';
import Task from '../../components/task/Task';
const Home = () => {
	const endPoint = "http://127.0.0.1:8000/api/todo/";
	const [openDialogue, setOpenDialogue] = useState(false);
	const [updateData, setUpdateData] = useState(false)
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
	  
	  /* Init trigger */
	  useEffect(() => {
		retrieve_data();
	  }, []);


	return ( 
		<>
			<Header setOpenDialogue={setOpenDialogue} />
			<Modal openModal={openDialogue} closeModal={()=>setOpenDialogue(false)} task={task} setTask={setTask} submit_data={submit_data} />
		
			<div className="taskList">
				{tasks.map((task) => (
					<Task task={task} />
				))}
			</div>
		
		</>
	 );
}
 
export default Home;