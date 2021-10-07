
import firebase from 'firebase';
import React , { useEffect, useState } from 'react';
import './Feed.css';
import InputOptions from './InputOptions';
import Post from './Post';

import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import { db } from './firebase';



function Feed() {
   
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);
   
    // Hook to fire off code when Feed runs
    // Pass empty [] as blank dependency to render only once
    useEffect(() => {
        db.collection("posts").onSnapShot((snapshot) => {
            setPosts(snapshot.docs.map(doc => (
                {
                    id:doc.id,
                    data: doc.data(),
                }
            )))
        })
    }, [])

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name:"James Jung",
            description:"This is a test of db",
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <form>
                    <CreateIcon />
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button type="submit">Send</button>
                    </form>
                </div>

                <div className="feed__inputOptions">
                    <InputOptions Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <InputOptions Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                    <InputOptions Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                    <InputOptions Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
                </div>
            </div>

            {/* Post */}

            {posts.map((post) => {
                <Post />
            })}

            <Post 
                name="James Jung"
                description="This is a test"
                message="This is working"
            />

        </div>
    )
}

export default Feed
