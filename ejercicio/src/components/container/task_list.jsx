import React from 'react';
import { Task } from '../../model/task.class';
import TaskComponent from '../pure/task';

const TaskListComponents = () => {

    const defaultTask = new Task('Nerea', 'Álvarez', 'example@gmail.com', false);

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
