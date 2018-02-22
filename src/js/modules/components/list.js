import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {receivedData,toggleEdit} from '../actions.jsx';
import { connect } from 'react-redux'
import Additem from './additem.jsx';


class List extends Component{
    static propTypes = {
        listOfTheTasks: PropTypes.array.isRequired,
        text: PropTypes.string.isRequired,
        isFetched:PropTypes.bool.isRequired,
        filter: PropTypes.string.isRequired,
        receivedTime: PropTypes.number.isRequired,
        isEdit: PropTypes.bool.isRequired
    };

    constructor(props){
        super(props);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.changeInput = this.changeInput.bind(this);
    }

    /**
     *
     * @param nextProps
     */
    componentDidMount( nextProps ){
        this.props.receive( );
    }

    changeInput = (event) =>{
        const {element} = this.state;

    };

    /**
     * Enable/disable edit
     *
     * @param event
     */
    toggleEdit = (event) => {
        this.props.toggle( );
    };

    render( ){
        return(
            <div>
                <div>{this.props.isEdit?"Edit mode":"Display mode"}</div>
                <ul>
                    <li>Date received: { this.props.receivedTime }</li>

                    <li>{this.props.text}</li>
                    {this.props.isFetched ? (
                        this.props.listOfTheTasks.map((task,i) => <li key={i}>
                            {
                                this.props.isEdit?
                                    (<input type="input" onChange={this.changeInput} name="task-name" value={task.taskName} />)
                                    :
                                    (<div onClick={this.toggleEdit}>
                                        {task.taskName}
                                    </div>)
                            }

                        </li>)):(<div>Loading</div>)
                    }
                </ul>
                <Additem />
            </div>
        );
    }
}

/**
 * Maps state to props
 *
 * @param state
 */
const  mapStateToProps = (state) => {
    const text = "Zhopa";
    const {lists, isEdit, filter, isFetched, receivedTime} = state.getsData;
    console.log(" state ", state.getsData);
    console.log("LOG - LIST ", lists, filter, isFetched, receivedTime);
    console.log( "is edit ", isEdit );
    return {
       text: text,
       receivedTime: receivedTime,
       filter: filter,
       isFetched: isFetched,
       listOfTheTasks: lists,
       isEdit: isEdit
    }
}

/**
 * Map actions to properties
 *
 * @param dispatch
 * @returns {{toggle: (function()), receive: (function())}}
 */
const mapDispatchToProps = (dispatch) => {
    return {
        toggle:( ) => {
            dispatch(toggleEdit());
        },
        receive: ( ) => {
            dispatch( receivedData( ))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(List)