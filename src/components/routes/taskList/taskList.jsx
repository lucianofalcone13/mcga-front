import React from 'react'
import Task from './task'

class TaskList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [{ id: '1', description: 'Descripcion_1' },
            { id: '2', description: 'Descripcion_1' },
            { id: '3', description: 'Descripcion_1' }]
        }
    }

    renderList() {
        return (
            <ul>
                {
                    this.state.list.map((task) =>
                        <Task id={task.id} description={task.description}/>
                    )
                }
            </ul>
        )
    }

    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }
}

export default TaskList