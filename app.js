        /* <div class="sinFinalizar">
                <p>Tarea nueva</p>
                <img src="./icons/btnDelete.svg" alt="btnDelete">
        </div> */

        // SELECTORES:
        const addTaskBtn = document.querySelector('.btnAddTask');
        const taskList = document.querySelector('.taskListContainer');
        const task = document.querySelector('.sinFinalizar')

        //EVENTOS

        addTaskBtn.addEventListener('click', addTask);


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
            containerTask.addEventListener('click', cambiarEstado);
            function cambiarEstado() {
                const task = document.querySelector('.sinFinalizar');
                task.classList.toggle('finalizada');
            }
            const p = document.createElement('p')
            p.innerText = textNewTask.value;
            const img = document.createElement('img');
            img.setAttribute('src',"./icons/btnDelete.svg");
            containerTask.appendChild(p);
            containerTask.appendChild(img);
            taskList.appendChild(containerTask);
            textNewTask.value = "";

        }

        function cambiarEstado() {
            task.classList.toggle('finalizada');
        }