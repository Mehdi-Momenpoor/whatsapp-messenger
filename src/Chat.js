import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import './Chat.css';

export default function Chat() {
    const [seed, setSeed] = useState('');
    const [value, setValue] = useState('');

    useEffect(() => {
        setSeed(Math.random())
    }, [])

    const sendMessageHandler = (e) => {
        e.preventDefault();
        console.log(value);
        setValue("")
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/4.5/api/avataaars/${seed}.svg`} />

                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at ...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className={`chat__message  ${true && `chat__reciever`}`}>
                    hey guys
                    <span className="chat__name">
                        mehdi
                    </span>

                    <span className="chat__timestamp">
                        3:52 pm
                    </span>

                </p>

            </div>
            <div className="chat__footer">
                <InsertEmoticon />
                <form action="">
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button
                        onClick={sendMessageHandler}
                        type='submit'
                    >send a message</button>
                </form>
                <Mic />
            </div>
        </div>
    )
}
