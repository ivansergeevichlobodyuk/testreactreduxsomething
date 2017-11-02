import React, {PropTypes as P}  from 'react';
import PropTypes from 'prop-types';

export default class List extends React.Component{

    static propTypes = {
        taskList: PropTypes.array.isRequired,
        text: PropTypes.string.isRequired
    };

    render(){
        const {text,taskList} = this.props;
        return(
            <div>
                <ul>
                    <li>{text}</li>
                    {
                        listOfTheTasks.map((task,i) => <li key={i}>
                            <label>{task.name}</label>
                            <input type="input" name="task-name" value={task.text} onChange={changeName} />
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}