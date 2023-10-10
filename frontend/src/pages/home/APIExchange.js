const endPoint = "http://127.0.0.1:8000/api/todo/";

export function Task_Create(taskTitleRef, taskDescriptionRef, taskColorRef, retrieve_tasks, setOpenDialogue, setTasks) {
  const title = taskTitleRef.current.value;
  const description = taskDescriptionRef.current.value;
  const color = taskColorRef.current.value;
  const task = { title, description, color };

  fetch(endPoint + "task/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  })
    .then((response) => {
      if (response.ok) {
        retrieve_tasks(setTasks);
        setOpenDialogue(false);
		console.log("Task POSTED !!! ", task);
      } else {
        throw new Error("Error, status = " + response.status);
      }
    })
    .catch((err) => {
      console.log(err.message);
	  console.log("Failed to POST Task ", task);
    });

}

export function retrieve_tasks (setTasks) {
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