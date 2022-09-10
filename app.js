        /* <div class="sinFinalizar">
                <p>Tarea nueva</p>
                <img src="./icons/btnDelete.svg" alt="btnDelete">
        </div> */

        // SELECTORES:
        const addTaskBtn = document.querySelector('.btnAddTask');
        const taskList = document.querySelector('.taskListContainer');
        const modalDeleteTask = document.querySelector('.modalDeleteTask');
        const app = document.querySelector('.app');
        const body = document.getElementsByTagName('body');


        //EVENTOS

        addTaskBtn.addEventListener('click', addTask);
        
        document.addEventListener('keyup', addTaskKeyboard);

        
        


        //FUNCTIONES:

        let idCounter = 1;
        let idUltimoEvento = 0;

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
            img.addEventListener('click', renderModal);

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
            const taskDelete = document.getElementById(idUltimoEvento).parentNode;
            taskList.removeChild(taskDelete);
            
            const obtainsElementModal = document.querySelector('.background-modal');
            app.removeChild(obtainsElementModal);
        }

        function addTaskKeyboard() {
            if (event.keyCode === 13) {
                addTask();
            }
        };


        function renderModal() {

            idUltimoEvento = event.target.id;
            console.log(idUltimoEvento);

            const backgroundModal = document.createElement('div');
            backgroundModal.classList.add('background-modal');
            

            const modalDeleteTask = document.createElement('div');
            modalDeleteTask.classList.add('modalDeleteTask');
            backgroundModal.appendChild(modalDeleteTask);

            const textModalDeleteTask = document.createElement('p');
            textModalDeleteTask.classList.add('text-modalDeleteTask');
            textModalDeleteTask.innerText = "¿Desea eliminar ésta tarea?";
            modalDeleteTask.appendChild(textModalDeleteTask);

            const buttonsModalDeleteTask = document.createElement('div');
            buttonsModalDeleteTask.classList.add('buttons-modalDeleteTask');
            modalDeleteTask.appendChild(buttonsModalDeleteTask);

            const cancelModalDeleteTask = document.createElement('button');
            cancelModalDeleteTask.innerText = "Cancelar";
            cancelModalDeleteTask.classList.add('cancel-modalDeleteTask');
            cancelModalDeleteTask.addEventListener('click', closeModal);

            const acceptModalDeleteTask = document.createElement('button');
            acceptModalDeleteTask.innerText = "Sí, eliminar";
            acceptModalDeleteTask.classList.add('accept-modalDeleteTask');
            acceptModalDeleteTask.addEventListener('click', deleteTask);

            buttonsModalDeleteTask.appendChild(cancelModalDeleteTask);
            buttonsModalDeleteTask.appendChild(acceptModalDeleteTask);
            
            
            app.appendChild(backgroundModal);
        }

        function closeModal () {
            const obtainsElementModal = document.querySelector('.background-modal');
            app.removeChild(obtainsElementModal);
        }

        
