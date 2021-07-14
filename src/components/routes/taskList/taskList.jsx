import React from 'react'
import Button from '../../shared-components/button/button'
import { TextField } from '../../shared-components/input/textField'
import Task from './task'
import css from './taskList.module.css'

class TaskList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [{ id: '1', description: 'Descripcion_1' },
            { id: '2', description: 'Descripcion_1' },
            { id: '3', description: 'Descripcion_1' }],
            value: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    renderList() {
        return (
            <ul className={css.listContainer}>
                {
                    this.state.list.map((task) =>
                        <Task key={task.id} id={task.id} description={task.description}/>
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
                    <TextField value={this.state.value} onChange={this.handleChange} />
                    <Button type="disabled" size="medium">ADD</Button>
                </div>
                {this.renderList()}
            </div>
        )
    }
}

export default TaskList