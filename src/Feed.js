
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
<<<<<<< HEAD
        db.collection("posts").onSnapShot((snapshot) => {
            setPosts(snapshot.docs.map(doc => (
=======
        db.collection("posts").onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) => (
>>>>>>> login using redux initiated
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
<<<<<<< HEAD
=======

        setInput("")
>>>>>>> login using redux initiated
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <form>
                    <CreateIcon />
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
<<<<<<< HEAD
                        <button type="submit">Send</button>
=======
                        <button onClick={sendPost} type="submit">Send</button>
>>>>>>> login using redux initiated
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

<<<<<<< HEAD
            {posts.map((post) => {
                <Post />
            })}

            <Post 
                name="James Jung"
                description="This is a test"
                message="This is working"
            />
=======
            {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                <Post 
                    // Passing in key allows re-render to only render new added items
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
>>>>>>> login using redux initiated

        </div>
    )
}

export default Feed
