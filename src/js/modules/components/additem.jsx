import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {receivedData} from '../actions.jsx';
import { connect } from 'react-redux';
import { addItemData } from '../actions.jsx';

class Additem extends React.Component{

    constructor(props){
        super(props);
    }

    state = {newValue: ''}

    componentDidMount( nextProps ){
        const { dispatch } = this.props;
    }

    /**
     * Handle change
     *
     * @param event
     */
    handleChange=(event) => {
        let state = {...this.state};
        state.newValue = event.target.value;
        this.setState(state);
    }

    /**
     * Add item
     *
     * @param event
     */
    addItem = ( event ) =>{
        const {newValue} = this.state;
        this.props.addItem({newValue});
    }

    render( ){
        return(
            <div>
                <label>Add task</label>
                <input type="text" name="TaskName" placeholder="put taskName HERe" onChange={this.handleChange}  value={this.state.newValue} />
                <input type="button" onClick={this.addItem} value="Add item" />
            </div>
        );
    }
}


export default connect((store)=> ({

}), dispatch => ({
    addItem: (data) => dispatch(addItemData(data))
}))(Additem);