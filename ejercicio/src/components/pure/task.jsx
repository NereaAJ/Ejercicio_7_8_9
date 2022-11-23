import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../model/task.class'


function TaskComponent ({task}) {
    return (
        <div>
            <p>
                Name: { task.name}
            </p>
            <p>
                Last name: { task.lastname }
            </p>
            <p>
                Email: { task.email }
            </p>
            <p>
                State: { task.mode ? 'Conectado' : 'Desconectado' }
            </p>
        </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
