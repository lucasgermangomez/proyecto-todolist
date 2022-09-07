        /* <div class="sinFinalizar">
                <p>Tarea nueva</p>
                <img src="./icons/btnDelete.svg" alt="btnDelete">
        </div> */

        // SELECTORES:
        const addTaskBtn = document.querySelector('.btnAddTask');
        const taskList = document.querySelector('.taskListContainer');

        //EVENTOS

        addTaskBtn.addEventListener('click', addTask);
        
        document.addEventListener('keyup', addTaskKeyboard);

        
        


        //FUNCTIONES:

        let idCounter = 1;

        function addTask() {
            const textNewTask = document.querySelector('.textNewTask');
            if (!textNewTask.value) {
                alert("Debe ingresar una nueva tarea");
                return;
            }
            const containerTask = document.createElement('div');
            containerTask.classList.add('sinFinalizar');          
            


            const p = document.createElement('p')
            p.innerText = textNewTask.value;
            p.setAttribute('id', idCounter);
            p.addEventListener('click', cambiarEstado);

            const img = document.createElement('img');
            img.setAttribute('src',"./icons/btnDelete.svg");
            img.setAttribute('id', `img${idCounter}`);
            img.addEventListener('click', deleteTask);

            containerTask.appendChild(p);
            containerTask.appendChild(img);
            taskList.appendChild(containerTask);

            textNewTask.value = "";
            idCounter++;
        }

        function cambiarEstado() {
            const taskAtChange = document.getElementById(event.target.id).parentNode;
            taskAtChange.classList.toggle('finalizada');
        }

        function deleteTask() {
            const taskDelete = document.getElementById(event.target.id).parentNode;
            taskList.removeChild(taskDelete);
        }

        function addTaskKeyboard() {
            if (event.keyCode === 13) {
                addTask();
            }
        };