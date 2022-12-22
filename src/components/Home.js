import React, { useState } from 'react';
import Navbar from './Navbar';
import './Home.css';
import { Bookmark, Chat, Heart, ThreeDots } from "react-bootstrap-icons";
import Avatar from 'react-avatar';
import UploadButton from './UploadButton';
import UserProfileCard from './ProfileCard';
import FriendList from './FriendList';
import ClampLines from 'react-clamp-lines';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Home = () => {

    const posts = [
        {
            postId:1,
            firstName: "Pai",
            lastName: "Ijo",
            content: "What I highly recommended is creating hobbies together and exploring new things together. When life becomes dull and has become a stalemate routine then this affects communication. Take a trip to the theaters for example. After the movie people usually proceed to have a discussion about it afterwards. Couples need to have new experiences and constantly push themselves out of that same day to day routine, or else that routine will slowly kill the relationship one step at a time. When life becomes dull and has become a stalemate routine then this affects communication. Take a trip to the theaters for example. After the movie people usually proceed to have a discussion about it afterwards. Couples need to have new experiences and constantly push themselves out of that same day to day routine, or else that routine will slowly kill the relationship one step at a time.",
            image: "https://akcdn.detik.net.id/visual/2022/12/13/meme-kaesang-nikah_169.jpeg?w=700&q=90",
            likes: 1,
            comments: 5
        },
        {
            postId:2,
            firstName: "Pai",
            lastName: "Ijo",
            content: "What I highly recommended is creating hobbies together and exploring new things together. When life becomes dull and has become a stalemate routine then this affects communication. Take a trip to the theaters for example. After the movie people usually proceed to have a",
            image: "https://akcdn.detik.net.id/visual/2022/12/13/meme-kaesang-nikah_169.jpeg?w=700&q=90",
            likes: 1,
            comments: 5
        },
        {
            postId:3,
            firstName: "Pai",
            lastName: "Ijo",
            content: "Konten lorem ipsum dolor",
            image: "https://akcdn.detik.net.id/visual/2022/12/13/meme-kaesang-nikah_169.jpeg?w=700&q=90",
            likes: 1,
            comments: 5
        },
        {
            postId:4,
            firstName: "Pai",
            lastName: "Ijo",
            content: "Konten lorem ipsum dolor",
            image: "https://akcdn.detik.net.id/visual/2022/12/13/meme-kaesang-nikah_169.jpeg?w=700&q=90",
            likes: 1,
            comments: 5
        },
        {
            postId:5,
            firstName: "Pai",
            lastName: "Ijo",
            content: "Konten lorem ipsum dolor",
            image: "https://akcdn.detik.net.id/visual/2022/12/13/meme-kaesang-nikah_169.jpeg?w=700&q=90",
            likes: 1,
            comments: 5
        },
    ];
    const charNum = 10;
    const [charAllowed, setCharAllowed] = useState(charNum);
    const onChangeHandler = (event) => {
        setCharAllowed(charNum - event.target.value.length);
    };
    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (posts.content.trim() === "") return;
        setCharAllowed(280);
    };

    //Delete alert
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Navbar />
            <div className='home'>
                <div className='col-md-3 home-left'>
                    <UserProfileCard />
                </div>

                <div className='col-md-5 home-middle'>
                    <PostBox />
                    <div className='scrollable'>
                        <PostList data={posts} />
                    </div>
                </div>

                <div className='col-md-3 home-right'>
                    <FriendList />
                </div>
            </div>

        </div>

    );
};

export default Home;
