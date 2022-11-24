import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../model/task.class';

//La hoja de estilos
import '../../styles/task.scss';


function TaskComponent ({task}) {

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
        if(task.mode){
            return (<i className='bi-toggle-on' style={{color: 'green'}}></i>)
        }else{
            return (<i className='bi-toggle-off' style={{color: 'grey'}}></i>)
        }
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{ task.name }</span>
            </th>
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
                <i className='bi-trash' style={{color: 'tomato'}}></i>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
