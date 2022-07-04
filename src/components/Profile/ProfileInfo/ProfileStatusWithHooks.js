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
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode
            &&
            <div>
                <b>Status: </b><span onDoubleClick={activateEditMode}>{props.status || "--------"}</span>
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
                />
            </div>
            }
        </div>
    )
};

export default ProfileStatusWithHooks;