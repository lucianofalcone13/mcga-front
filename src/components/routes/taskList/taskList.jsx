import React from "react";
import Button from "../../shared-components/button/button";
import { TextField } from "../../shared-components/input/textField";
import { Overlay } from "../../shared-components/overlay/overlay";
import Task from "./task";
import css from "./taskList.module.css";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTaskClick = this.handleTaskClick.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.inputRef = React.createRef(null)
    this.state = {
      value: "",
      editing: undefined,
      selectedTask: undefined,
    };
  }

  componentDidMount() {
    const { fetchTasks } = this.props;
    fetchTasks();
  }

  handleEdit(id, value) {
    if (this.inputRef.current) {
      this.inputRef.current.focus()
    }
    this.setState({ editing: id });
    this.setState({ value });
  }

  handleDelete(id) {
    const { deleteTask } = this.props;
    deleteTask(id);
  }

  handleTaskClick(id) {
    const { selectedTask } = this.state;
    if (selectedTask !== id) {
      this.setState({ selectedTask: id });
    }
  }

  renderList() {
    const { list } = this.props;
    const { selectedTask } = this.state;
    return (
      <ul className={css.listContainer}>
        {list.map((task) => {
          const { _id, description } = task;
          return (
            <Task
              onClick={() => this.handleTaskClick(_id)}
              key={_id}
              id={_id}
              description={description}
              onDelete={() => this.handleDelete(_id)}
              onEdit={() => this.handleEdit(_id, description)}
              isSelected={_id === selectedTask}
            />
          );
        })}
      </ul>
    );
  }

  handleChange(e) {
    e.persist();
    this.setState({ value: e.target.value });
  }

  resetForm() {
    this.setState({ value: "", editing: undefined, selectedTask: undefined });
  }

  handleSubmit(e) {
    const { editing, value } = this.state;
    const { addTask, editTask } = this.props;
    e.persist();
    e.preventDefault();
    if (!!editing) {
      editTask(editing, value)
    } else {
      addTask({ description: value })
    }
    this.resetForm();
  }

  render() {
    const { value, editing } = this.state;
    const { isLoading, error } = this.props;
    return (
      <div className={css.container}>
        {isLoading && <Overlay message="Loading" />}
        {!!error && <Overlay message={error} />}
        <form className={css.formContainer} onSubmit={this.handleSubmit}>
          <TextField
            inputRef={this.inputRef}
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Add a new task"
            required
          />
          <Button type="submit" size="medium" disabled={!!!value}>
            {editing ? "EDIT" : "ADD"}
          </Button>
        </form>
        {this.renderList()}
      </div>
    );
  }
}

export default TaskList;
