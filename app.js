        /* <div class="sinFinalizar">
                <p>Tarea nueva</p>
                <img src="./icons/btnDelete.svg" alt="btnDelete">
        </div> */

        // SELECTORES:
        const addTaskBtn = document.querySelector('.btnAddTask');
        const taskList = document.querySelector('.taskListContainer');

        //EVENTOS

        addTaskBtn.addEventListener('click', addTask);

        //FUNCTIONES:

        function addTask() {
            const textNewTask = document.querySelector('.textNewTask');
            /* if (!textNewTask) {
                prompt('Debe ingresar una nueva tarea');
            } */
            const containerTask = document.createElement('div');
            containerTask.classList.add('sinFinalizar');
            const p = document.createElement('p')
            p.innerText = textNewTask.value;
            const img = document.createElement('img');
            img.setAttribute('src',"./icons/btnDelete.svg");
            containerTask.appendChild(p);
            containerTask.appendChild(img);
            taskList.appendChild(containerTask);
            textNewTask.value = "";
        }
