import React from "react"
import Button from "../../shared-components/button/button"
import { TextField } from "../../shared-components/input/textField"
import { Overlay } from "../../shared-components/overlay/overlay"
import Task from "./task"
import css from "./taskList.module.css"

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.resetForm = this.resetForm.bind(this)
    this.state = {
      value: "",
      editing: undefined
    };
  }

  componentDidMount() {
    const { fetchTasks } = this.props;
    fetchTasks();
  }

  handleEdit(id, value) {
    this.setState({ editing: id })
    this.setState({ value })
  }

  handleDelete(id) {
    console.log("handle delete")
  }
  renderList() {
    const { list } = this.props

    return (
      <ul className={css.listContainer}>
        {list.map((task) => {
          const { _id, description } = task
          return (
            <Task
              key={_id}
              id={_id}
              description={description}
              onDelete={this.handleDelete}
              onEdit={() => this.handleEdit(_id, description)}
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
    this.setState({ value: "", editing: undefined });
  }

  handleSubmit(e) {
    const { editing, value } = this.state;
    const { editTask } = this.props;
    e.persist();
    e.preventDefault();
    if (!!editing) {
      editTask(editing, value)
    } else {
      console.log("add");
    }
    this.resetForm();
  }

  render() {
    const { value, editing } = this.state
    const { isLoading, error } = this.props
    return (
      <div className={css.container}>
        {isLoading && <Overlay message="Loading" />}
        {!!error && <Overlay message={error} />}
        <form className={css.formContainer} onSubmit={this.handleSubmit}>
          <TextField
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Add a new task"
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
