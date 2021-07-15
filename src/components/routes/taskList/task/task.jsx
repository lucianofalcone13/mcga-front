import React from "react";
import { DeleteIcon, EditIcon } from "../../../../assets/icons";
import Button from "../../../shared-components/button/button";
import css from "./task.module.css";

class Task extends React.Component {
  render() {
    const { isSelected, description, onClick, onEdit, onDelete } = this.props;
    return (
      <li className={isSelected ? css.selected : css.item} onClick={onClick}>
        <div className={css.description}>{description}</div>
        {isSelected && (
          <div className={css.options}>
            <Button
              size="small"
              type="edit"
              icon={<EditIcon stroke="#fff" />}
              onClick={onEdit}
            />
            <Button
              size="small"
              type="delete"
              icon={<DeleteIcon fill="#fff" />}
              onClick={onDelete}
            />
          </div>
        )}
      </li>
    );
  }
}

export default Task;
