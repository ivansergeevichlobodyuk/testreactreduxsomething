import React, {PropTypes as P}  from 'react';
import PropTypes from 'prop-types';
import {receivedData} from '../actions.jsx';
import { connect } from 'react-redux'

class List extends React.Component{

    static propTypes = {
        listOfTheTasks: PropTypes.func.isRequired,
        text: PropTypes.string.isRequired
    };

    componentDidMount(){
        const { dispatch } = this.props;
        console.log("this state propppppps", this.props);
        console.log("DISPATCH ", dispatch);
        dispatch(receivedData());
    }

    render(){
        return(
            <div>
                <ul>
                    <li>{this.props.text}</li>
                    {/*{*/}
                        {/*this.props.listOfTheTasks.map((task,i) => <li key={i}>*/}
                            {/*<label>{task.name}</label>*/}
                            {/*<input type="input" name="task-name" value={task.text} onChange={changeName} />*/}
                        {/*</li>)*/}
                    {/*}*/}
                </ul>
            </div>
        );
    }
}

/**
 * Maps state to props
 *
 * @param state
 */
const  mapStateToProps = state => {
    let text = "Zhopa";
    const {lists} = state
    console.log(" map state to props state >>>  ", state);
    console.log(" map state to props state >>>  ", state.lists);

    return {
       text: text,
       listOfTheTasks: state.lists

    }
}

export default connect(mapStateToProps)(List)