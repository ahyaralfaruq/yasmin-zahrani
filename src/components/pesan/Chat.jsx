import React from 'react'

const Chat = ({ userChat }) => {

    return (
        <div className="it-pesan-chat">
            <div className="it-pesan-chat-fill">
                <div className="it-pesan-chat-fill-chat">
                    <div className="line-end">

                        {
                            userChat.map((chat) => (

                                <div key={chat.id} className="it-pesan-chat-fill-wrapper">
                                    <div className="it-pesan-chat-users">
                                        <div className="it-pesan-chat-users-content">
                                            <div className="it-pesan-chat-users-identity">
                                                <div className="it-pesan-profile-user">
                                                    <div className="it-pesan-blank-profile"></div>
                                                </div>
                                                <h4 className="it-pesan-chat-name">{chat.nama}</h4>
                                            </div>
                                            <p className="it-pesan-chat-text">{chat.pesan}</p>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }
                        
                        

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat