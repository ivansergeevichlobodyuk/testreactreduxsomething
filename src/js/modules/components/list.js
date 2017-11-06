import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {receivedData} from '../actions.jsx';
import { connect } from 'react-redux'

class List extends Component{
    static propTypes = {
        listOfTheTasks: PropTypes.array.isRequired,
        text: PropTypes.string.isRequired,
        isFetched:PropTypes.bool.isRequired,
        filter: PropTypes.string.isRequired,
        receivedTime: PropTypes.string.isRequired
    };

    componentDidMount( nextProps ){
        const { dispatch } = this.props;
        dispatch(receivedData());
    }

    render(){
        const { dispatch } = this.props;
        dispatch(receivedData());
        return(
            <div>
                <ul>
                    <li>{this.props.text}</li>
                    {this.props.isFetched ? (
                        this.props.listOfTheTasks.map((task,i) => <li key={i}>
                            <label>{task.taksName}</label>
                            <input type="input" name="task-name" value={task.taksName} />
                        </li>)):(<div>Loading</div>)
                    }
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
    const text = "Zhopa";
    const {lists, filter, isFetched, receivedTime} = state.getsData;
    console.log(" state ", state.getsData);
    console.log("LOG - LIST ", lists, filter, isFetched, receivedTime);

    return {
       text: text,
       receivedTime: receivedTime,
       filter: filter,
       isFetched: isFetched,
       listOfTheTasks: lists
    }
}

export default connect(mapStateToProps)(List)