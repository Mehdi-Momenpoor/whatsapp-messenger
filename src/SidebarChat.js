import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import db from './firebase';
import './SidebarChats.css';

export default function SidebarChat({ addNewChat, id, name }) {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.random())
    }, [])

    const createChat = () => {
        const roomName = prompt('Please enter name for chat room');  
        if (roomName) {
            db.collection("Rooms").add({
                name: roomName
            })
        }
    }

    return !addNewChat ? (
        <div className='sidebarChats'>
            <Avatar src={`https://avatars.dicebear.com/4.5/api/avataaars/${seed}.svg`} />
            <div className="sidebarChats__info">
                <h2>{name}</h2>
                <p>last messaage...</p>
            </div>
        </div>
    ) :
        (
            <div
                onClick={createChat}
                className='sidebarChats'
            >
                <h2>Add new Chat</h2>
            </div>
        )
}
