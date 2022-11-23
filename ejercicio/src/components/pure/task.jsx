import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../model/task.class';

//La hoja de estilos
import '../../styles/task.scss';


function TaskComponent ({task}) {

    useEffect(() => {
        console.log('Created Task')
        return () => {
            console.log(`Task: ${task.name} is going to unmount`);
        }
    }, [task]);


    return (
        <div>
            <p className='task-name'>
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
