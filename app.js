        /* <div class="sinFinalizar">
                <p>Tarea nueva</p>
                <img src="./icons/btnDelete.svg" alt="btnDelete">
        </div> */

        // SELECTORES:
        const addTaskBtn = document.querySelector('.btnAddTask');
        const taskList = document.querySelector('.taskListContainer');

        //EVENTOS

        addTaskBtn.addEventListener('click', addTask);
        /* taskList.addEventListener('click', cambiarEstado); */
        


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