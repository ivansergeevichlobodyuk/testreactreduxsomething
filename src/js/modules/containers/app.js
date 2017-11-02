import { connect } from 'react-redux';
import List from '../containers/app';

const taskList = (tasks, filter) => {
    switch (filter){
        case 'SHOW_ALL':
            return tasks
        break;

        case 'SHOW_DONE':
            return tasks.filter(t => t.completed);
        break;

        default:
            return tasks;
    }
}

const mapStateToProps = state => {
    return {
        listOfTheTasks: taskList(state.tasks, state.filter = 'SHOW_ALL')
    }
}
const mapDispatchToProps = dispatch => {
    return {
        changeName: id => {
            dispatch(changeName(id))
        },
        receivedData: () => {
            return fetch("http://boards-api.sys/app_dev.php/api/boards/")
                    .then(response => response.json())
                    .then(json => dispatch(receiveGet(json)));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List);