import s from './Dialogs.module.css'
import {Navigate, NavLink} from "react-router-dom";

const DialogItem = ({id, name}) => {
    let path = '/dialogs/' + id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    );
}

const Message = ({message}) => {
    return (
        <div className={s.message}>{message}</div>
    );
}

const Dialogs = ({updateNewMessageBody, sendMessage, dialogsPage, isAuth}) => {

    let dialogsElements = dialogsPage.dialogsData
        .map(d => <DialogItem id={d.id} key={d.id} name={d.name}/>)

    let messagesElements = dialogsPage.messages
        .map(m => <Message message={m.message} keu={m.id}/>)

    const onSendMessageClick = () => {
        sendMessage();
    }

    const onNewMessageChange = (e) => {
      let body = e.target.value;
      updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                        value={dialogsPage.newMessageBody}
                        placeholder="Enter your message"
                        onChange={onNewMessageChange}
                        >
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;