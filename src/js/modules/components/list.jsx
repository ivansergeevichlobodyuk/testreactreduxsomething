import React, {PropTypes as P}  from 'react';
import PropTypes from 'prop-types';
import {receivedData} from '../actions.jsx';
import { connect } from 'react-redux'

class List extends React.Component{

    static propTypes = {
        listOfTheTasks: PropTypes.array.isRequired,
        text: PropTypes.string.isRequired
    };

    componentDidMount(){
        const { dispatch } = this.props;
        console.log("DISPATCH ", dispatch);
        dispatch(receivedData());
    }

    render(){
        return(
            <div>
                <ul>
                    <li>{this.props.text}</li>
                    {
                        this.props.listOfTheTasks.map((task,i) => <li key={i}>
                            <label>{task.name}</label>
                            <input type="input" name="task-name" value={task.text} onChange={changeName} />
                        </li>)
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
function mapStateToProps( state ){
   let text = "Zhopa";
   return {
       text: text,
        listOfTheTasks: (state)=>{
                switch (stata.filter){
                    case "SHOW_ALL":
                        return state;
                        break;
                    default:
                        return state;
                }
           }
   }
}

export default connect(mapStateToProps)(List)