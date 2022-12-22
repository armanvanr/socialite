import React from 'react';
import Navbar from './Navbar';
import './Home.css';
import UserProfileCard from './ProfileCard';
import FriendList from './FriendList';
import PostBox from './PostBox';
import Post from './Post';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import CommentList from './CommentList';
import CommentBox from './CommentBox'

const PostDetail = () => {
    const { user: currentUser } = useSelector(state => state.auth);
    const { postId } = useParams();
    if (!currentUser) {
        return <Navigate to="/login" />
    }
    const post = {
        postId: 1,
        firstName: "Pai",
        lastName: "Ijo",
        content: "What I highly recommended is creating hobbies together and exploring new things together. When life becomes dull and has become a stalemate routine then this affects communication. Take a trip to the theaters for example. After the movie people usually proceed to have a discussion about it afterwards. Couples need to have new experiences and constantly push themselves out of that same day to day routine, or else that routine will slowly kill the relationship one step at a time. When life becomes dull and has become a stalemate routine then this affects communication. Take a trip to the theaters for example. After the movie people usually proceed to have a discussion about it afterwards. Couples need to have new experiences and constantly push themselves out of that same day to day routine, or else that routine will slowly kill the relationship one step at a time.",
        image: "https://akcdn.detik.net.id/visual/2022/12/13/meme-kaesang-nikah_169.jpeg?w=700&q=90",
        likes: 1,
        comments: 5
    }
    const comments = [
        {
            commentId: 1,
            firstName: "Pai",
            lastName: "Ijo",
            content: "What I highly recommended is creating hobbies together and exploring new things together. When life becomes dull and has become a stalemate routine then this affects communication. Take a trip to the theaters for example. After the movie people usually proceed to have a discussion about it afterwards. Couples need to have new experiences and constantly push themselves out of that same day to day routine, or else that routine will slowly kill the relationship one step at a time. When life becomes dull and has become a stalemate routine then this affects communication. Take a trip to the theaters for example. After the movie people usually proceed to have a discussion about it afterwards. Couples need to have new experiences and constantly push themselves out of that same day to day routine, or else that routine will slowly kill the relationship one step at a time.",
            upvotes: 1,
            downvotes: 5
        },
        {
            commentId: 2,
            firstName: "Pai",
            lastName: "Ijo",
            content: "What I highly recommended is creating hobbies together and exploring new things together. When life becomes dull and has become a stalemate routine then this affects communication. Take a trip to the theaters for example. After the movie people usually proceed to have a discussion about it afterwards. Couples need to have new experiences and constantly push themselves out of that same day to day routine, or else that routine will slowly kill the relationship one step at a time. When life becomes dull and has become a stalemate routine then this affects communication. Take a trip to the theaters for example. After the movie people usually proceed to have a discussion about it afterwards. Couples need to have new experiences and constantly push themselves out of that same day to day routine, or else that routine will slowly kill the relationship one step at a time.",
            upvotes: 1,
            downvotes: 5
        },
        {
            commentId: 3,
            firstName: "Pai",
            lastName: "Ijo",
            content: "What I highly recommended is creating hobbies together and exploring new things together. When life becomes dull and has become a stalemate routine then this affects communication. Take a trip to the theaters for example. After the movie people usually proceed to have a discussion about it afterwards. Couples need to have new experiences and constantly push themselves out of that same day to day routine, or else that routine will slowly kill the relationship one step at a time. When life becomes dull and has become a stalemate routine then this affects communication. Take a trip to the theaters for example. After the movie people usually proceed to have a discussion about it afterwards. Couples need to have new experiences and constantly push themselves out of that same day to day routine, or else that routine will slowly kill the relationship one step at a time.",
            upvotes: 1,
            downvotes: 5
        },
        {
            commentId: 4,
            firstName: "Pai",
            lastName: "Ijo",
            content: "What I highly recommended is creating hobbies together and exploring new things together. When life becomes dull and has become a stalemate routine then this affects communication. Take a trip to the theaters for example. After the movie people usually proceed to have a discussion about it afterwards. Couples need to have new experiences and constantly push themselves out of that same day to day routine, or else that routine will slowly kill the relationship one step at a time. When life becomes dull and has become a stalemate routine then this affects communication. Take a trip to the theaters for example. After the movie people usually proceed to have a discussion about it afterwards. Couples need to have new experiences and constantly push themselves out of that same day to day routine, or else that routine will slowly kill the relationship one step at a time.",
            upvotes: 1,
            downvotes: 5
        },
        {
            commentId: 5,
            firstName: "Pai",
            lastName: "Ijo",
            content: "Konten lorem ipsum dolor",
            content: "What I highly recommended is creating hobbies together and exploring new things together. When life becomes dull and has become a stalemate routine then this affects communication. Take a trip to the theaters for example. After the movie people usually proceed to have a discussion about it afterwards. Couples need to have new experiences and constantly push themselves out of that same day to day routine, or else that routine will slowly kill the relationship one step at a time. When life becomes dull and has become a stalemate routine then this affects communication. Take a trip to the theaters for example. After the movie people usually proceed to have a discussion about it afterwards. Couples need to have new experiences and constantly push themselves out of that same day to day routine, or else that routine will slowly kill the relationship one step at a time.",
            upvotes: 1,
            downvotes: 5
        },
    ];
    return (
        <div>
            <Navbar />
            <div className='home'>
                <div className='home-left'>
                    <UserProfileCard />
                </div>

                <div className='col-md-5 home-middle'>
                    <Post post={post} />
                    <CommentBox/>
                    <CommentList data={comments} />
                </div>

                <div className='col-md-3 home-right'>
                    <FriendList />
                </div>
                
            </div>
        </div>
    );
};

export default PostDetail;