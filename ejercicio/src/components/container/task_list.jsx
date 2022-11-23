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
            <h1>
                Information:
            </h1>
            <TaskComponent task={ defaultTask }></TaskComponent>
        </div>
    );
}

export default TaskListComponents;
