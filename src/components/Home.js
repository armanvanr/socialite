import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import './Home.css';
import UserProfileCard from './ProfileCard';
import FriendList from './FriendList';
import PostBox from './PostBox';
import PostList from './PostList';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import postService from '../services/post';

const Home = () => {
    const { user: currentUser } = useSelector(state => state.auth);
    const [posts, setPosts] = useState([]);
    
    const getAllPosts = async () => {
        const res = await postService.getPosts();
        setPosts(res.data.posts);
    }

    useEffect(() => {
        getAllPosts();
    })

    if (!currentUser) {
        return <Navigate to="/login" />
    }

    // const posts = [
    //     {
    //         firstName: "Hazel",
    //         lastName: "Nut",
    //         content: "What I highly recommended is creating hobbies together and exploring new things together. When life becomes dull and has become a stalemate routine then this affects communication. Take a trip to the theaters for example. After the movie people usually proceed to have a discussion about it afterwards. Couples need to have new experiences and constantly push themselves out of that same day to day routine, or else that routine will slowly kill the relationship one step at a time. When life becomes dull and has become a stalemate routine then this affects communication. Take a trip to the theaters for example. After the movie people usually proceed to have a discussion about it afterwards. Couples need to have new experiences and constantly push themselves out of that same day to day routine, or else that routine will slowly kill the relationship one step at a time.",
    //         image: "https://akcdn.detik.net.id/visual/2022/12/13/meme-kaesang-nikah_169.jpeg?w=700&q=90",
    //         likes: 1,
    //         comments: 5
    //     },
    //     {
    //         firstName: "Choco",
    //         lastName: "Melon",
    //         content: "What I highly recommended is creating hobbies together and exploring new things together. When life becomes dull and has become a stalemate routine then this affects communication. Take a trip to the theaters for example. After the movie people usually proceed to have a",
    //         image: "https://akcdn.detik.net.id/visual/2022/12/13/meme-kaesang-nikah_169.jpeg?w=700&q=90",
    //         likes: 1,
    //         comments: 5
    //     },
    //     {
    //         firstName: "Brown",
    //         lastName: "Sugar",
    //         content: "Konten lorem ipsum dolor",
    //         image: "https://akcdn.detik.net.id/visual/2022/12/13/meme-kaesang-nikah_169.jpeg?w=700&q=90",
    //         likes: 1,
    //         comments: 5
    //     },
    //     {
    //         firstName: "Red",
    //         lastName: "Velvet",
    //         content: "Konten lorem ipsum dolor",
    //         image: "https://akcdn.detik.net.id/visual/2022/12/13/meme-kaesang-nikah_169.jpeg?w=700&q=90",
    //         likes: 1,
    //         comments: 5
    //     },
    //     {
    //         firstName: "Moss",
    //         lastName: "Head",
    //         content: "Konten lorem ipsum dolor",
    //         image: "https://akcdn.detik.net.id/visual/2022/12/13/meme-kaesang-nikah_169.jpeg?w=700&q=90",
    //         likes: 1,
    //         comments: 5
    //     },
    // ];

    return (
        <div>
            <Navbar />
            <div className='home'>
                <div className='col-md-3 home-left'>
                    <UserProfileCard />
                </div>

                <div className='col-md-5 home-middle'>
                    <PostBox />

                    <PostList data={posts} />
                </div>

                <div className='col-md-3 home-right'>
                    <FriendList />
                </div>
            </div>
        </div>
    );
};

export default Home;
