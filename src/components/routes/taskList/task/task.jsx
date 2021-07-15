import React from 'react'
import { DeleteIcon, EditIcon } from '../../../../assets/icons'
import Button from '../../../shared-components/button/button'
import css from './task.module.css'

class Task extends React.Component {
    render() {
        return (
            <li className={css.item}>
                <div className={css.description}>
                    {this.props.description}
                </div>
                <div className={css.options}>
                    <Button size="small" type="edit" icon={<EditIcon stroke="#fff"/>} onClick={this.props.onEdit}></Button>
                    <Button size="small" type="delete" icon={<DeleteIcon fill="#fff"/>} onClick={this.props.onDelete}></Button>
                </div>
            </li>
        )
    }
}

export default Task