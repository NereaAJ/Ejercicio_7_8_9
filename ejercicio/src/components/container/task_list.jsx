import React, { useState, useEffect } from 'react';
import { Task } from '../../model/task.class';
import TaskComponent from '../pure/task';

const TaskListComponents = () => {

    const defaultTask = new Task('Nerea', 'Álvarez', 'example@gmail.com', false);

    //Estado de componente
    const [tasks, setTasks] = useState(defaultTask);
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
                        <h5>
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
                                </tr>
                            </thead>
                            <tbody>
                                {/* Liata de tareas */}
                                <TaskComponent task={ defaultTask }></TaskComponent>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* <TaskComponent task={ defaultTask }></TaskComponent> */}
        </div>
    );
}

export default TaskListComponents;
