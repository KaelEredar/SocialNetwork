import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);

    const [status, setStatus] = useState(props.status);
    
    const activateEditMode = () => {
      setEditMode(true);
    }

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
        // if (window.confirm(` You are going to change your status to "${this.state.status}"\n Are you sure?`)) {
        //     props.updateStatus(status);
        // } else {
        //     alert("Ok, operation canceled")
        // }
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode
            &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || "--------"}</span>
            </div>
            }
            {editMode
            &&
            <div>
                <input
                    onChange={onStatusChange}
                    onBlur={deactivateEditMode}
                    autoFocus={true}
                    value={status}
                ></input>
            </div>
            }
        </div>
    )
};

export default ProfileStatusWithHooks;