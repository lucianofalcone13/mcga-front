import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  addTask,
  fetchTasks,
  editTask,
  deleteTask,
} from "../../../redux/tasks/thunks";
import TaskList from "./taskList";

const mapStateToProps = (state) => ({
  list: state.tasks.list,
  error: state.tasks.error,
  isLoading: state.tasks.isLoading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchTasks,
      editTask,
      deleteTask,
      addTask,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
