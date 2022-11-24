import React, { useState} from 'react';
import { Task } from '../../model/task.class';
import Taskform from '../pure/form/taskForm';
import TaskComponent from '../pure/task';

const TaskListComponents = () => {

    const defaultTask1 = new Task('Nerea', 'Álvarez', 'example1@gmail.com', true);
    const defaultTask2 = new Task('Antonia', 'Suárez', 'example2@gmail.com', false);
    const defaultTask3 = new Task('Jose', 'Carrión', 'example3@gmail.com', false);
    const defaultTask4 = new Task('Alberto', 'Fernández', 'example4@gmail.com', true);

    //Estado de componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3, defaultTask4]);

    function modeTask(task){
        console.log('Complete this Task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].changeMode = !tempTasks[index].changeMode;
        setTasks(tempTasks);
    }

    function deleteTask(task){
        console.log('Detele this Task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index,1);
        setTasks(tempTasks);
    }

    function addTask(task){
        console.log('Detele this Task:', task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/* Titulo */}
                    <div className='card-header p-3'>
                        <h5 style={{ color:'black', fontWeight:'bold', fontSize:'35px'}}>
                            Information:
                        </h5>
                    </div>
                    {/* Cuerpo */}
                    <div className='card-body' data-mdb-perfect-crollbar='true' style={ {position: 'relative', height: '400px'} }>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'> Name </th>
                                    <th scope='col'> Last name </th>
                                    <th scope='col'> Email </th>
                                    <th scope='col'> State </th>
                                    <th scope='col'> Delete </th>
                                </tr>
                            </thead>
                            <tbody> 
                                { tasks.map((task, index) => {
                                    return(
                                            <TaskComponent 
                                                key={ index }
                                                task={ task }
                                                mode={modeTask}
                                                remove = {deleteTask}
                                            >
                                            </TaskComponent>
                                        )
                                    }
                                )}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='card' style={{marginTop:'25px', padding:'15px'}}>
                    <Taskform add={addTask}></Taskform>
                </div>
            </div>
        </div>
    );
}

export default TaskListComponents;
