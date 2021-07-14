import React from 'react'
import Button from '../../shared-components/button/button'
import { TextField } from '../../shared-components/input/textField'
import Task from './task'
import css from './taskList.module.css'

class TaskList extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        this.props.fetchTasks()
    }

    renderList() {
        return (
            <ul className={css.listContainer}>
                {
                    this.props.list.map((task) =>
                        <Task key={task._id} id={task._id} description={task.description}/>
                    )
                }
            </ul>
        )
    }

    handleChange(e) {
        e.persist()
        this.setState({value: e.target.value})
    }

    render() {
        return (
            <div className={css.container}>
                <div className={css.inputContainer}>
                    <TextField value={this.state.value} onChange={this.handleChange} placeholder="Add a new task" />
                    <Button type="disabled" size="medium">ADD</Button>
                </div>
                {this.renderList()}
            </div>
        )
    }
}

export default TaskList