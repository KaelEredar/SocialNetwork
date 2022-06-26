import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        // eslint-disable-next-line no-restricted-globals
        if (confirm(` You are going to change your status to "${this.state.status}"\n Are you sure?`)) {
            this.props.updateStatus(this.state.status);
        } else {
            alert("Ok, operation canceled")
        }
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({})
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "--------"}</span>
                </div>
                }
                {this.state.editMode
                &&
                <div>
                    <input
                        onChange={this.onStatusChange}
                        autoFocus={true}
                        onBlur={this.deactivateEditMode}
                        value={this.state.status}
                    ></input>
                </div>
                }
            </div>
        )
    }
};

export default ProfileStatus;