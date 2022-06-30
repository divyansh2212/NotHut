import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Button from "@material-ui/core/Button";

const CreateNote = (props) => {

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const [expand, setExpand] = useState(false)

    const func = (event) => {

        const { name, value } = event.target;

        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    const inputEvent = () => {
        if (note.title !== "" || note.content !== "") {
            props.passNote(note);
            setNote({
                title: "",
                content: ""
            })
        }

    }

    const resubmit = (event) => {
        event.preventDefault();
    }

    const expandIt = () => {
        setExpand(true)
    }

    return (
        <>
            <div className="add_note">
                <form onSubmit={resubmit}>

                    {expand ? <input type="text"
                        value={note.title}
                        placeholder="Add a title..."
                        autoComplete="off"
                        onChange={func}
                        onSubmit={resubmit}
                        name="title">
                    </input> : null}


                    <textarea placeholder="Write a note..."
                        value={note.content}
                        onChange={func}
                        onSubmit={resubmit}
                        onClick={expandIt}
                        name="content">
                    </textarea>

                    {expand ? <Button className="btn"
                        onClick={inputEvent}
                    ><AddIcon /></Button> : null}

                </form>
            </div>
        </>
    )
}

export default CreateNote;