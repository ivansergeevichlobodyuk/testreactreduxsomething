import { connect } from 'react-redux';
import List from '../components/list.jsx';

const taskList = (tasks, filter) => {
    alert("Im in the taskList function ");
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
const text = "This is as art of ruin"
const mapStateToProps = state => {
    return {
        listOfTheTasks: taskList(state.tasks, state.filter = 'SHOW_ALL'),
        text: text
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeName: id => {
            dispatch(changeName(id))
        },
        receivedData: () => {
            return  dispatch => {
                fetch("http://boards-api.sys/app_dev.php/api/boards/")
                    .then(response => response.json())
                    .then(json => dispatch(receiveGet(json)));
            }
        }
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(List)

export default App;