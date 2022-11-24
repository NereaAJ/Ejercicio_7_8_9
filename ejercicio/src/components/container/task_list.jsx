import React, { useState, useEffect } from 'react';
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
    const [loading, setLoading] = useState(true);

    //Control de ciclo de vida
    useEffect(() => {
        console.log('Modificacion');
        setLoading(false);
        return () => {
            console.log('Finaliza');
        };
    }, [tasks]);

    const changeCompleted = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
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
                                    <th scope='col-2'> State </th>
                                    <th scope='col'> Delete </th>
                                </tr>
                            </thead>
                            <tbody> 
                                { tasks.map((task, index) => {
                                    return(
                                            <TaskComponent 
                                                key={ index }
                                                task={ task }
                                            >
                                            </TaskComponent>
                                        )
                                    }
                                )}
                                
                            </tbody>
                        </table>
                    </div>
                    <Taskform></Taskform>
                </div>
            </div>
        </div>
    );
}

export default TaskListComponents;
