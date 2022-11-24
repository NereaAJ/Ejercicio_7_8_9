import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../model/task.class';
//La hoja de estilos
import '../../styles/task.scss';

function TaskComponent ({task, mode, remove}) {

    useEffect(() => {
        console.log('Creada Task')
        return () => {
            console.log(`Task: ${task.name} se muestra`);
        }
    }, [task]);

    /**
     * Devuelve el estado
     */
     function taskModeIcon(){
        if(task.changeMode){
            return (<i onClick={() => mode(task)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>)
        }else{
            return (<i onClick={() => mode(task)} className='bi-toggle-off task-action' style={{color: 'grey'}}></i>)
        }
    }

    return (
        <tr className='fw-normal'>
            <td>
                <span className='ms-2'>{ task.name }</span>
            </td>
            <td>
                <span className='align-middle'>{ task.lastname }</span>
            </td>
            <td>
                <span className='align-middle'>{ task.email }</span>
            </td>
            <td>
                {/* <span className='align-middle'>{ task.mode ? 'Conectado' : 'Desconectado' }</span> */}
                {taskModeIcon()}
            </td>
            <td>
            <i className='bi-trash task-action' style={{color: 'tomato'}} onClick={() => remove(task)}></i>
            </td>
        </tr>
    );
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    mode: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};

export default TaskComponent;
