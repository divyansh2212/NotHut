import React from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from '@mui/icons-material/Delete';

const Note = (props) => {

    const inputEvent = () => {
        props.passNote(props.id);
    }

    return (
        <>
            <div className="notes">
                <p className="heading">{props.title}</p>
                <p>{props.content}</p>
                <Button className="btn" onClick={inputEvent}><DeleteIcon /></Button>
            </div>
        </>
    )
}

export default Note;