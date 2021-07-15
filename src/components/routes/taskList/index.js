import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchTasks, editTask } from "../../../redux/thunks";
import TaskList from "./taskList";

const mapStateToProps = (state) => ({
    list: state.tasks.list
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchTasks,
    editTask
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);