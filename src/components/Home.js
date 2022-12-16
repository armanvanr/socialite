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
            firstName: "Pai",
            lastName: "Ijo",
            content: "What I highly recommended is creating hobbies together and exploring new things together. When life becomes dull and has become a stalemate routine then this affects communication. Take a trip to the theaters for example. After the movie people usually proceed to have a discussion about it afterwards. Couples need to have new experiences and constantly push themselves out of that same day to day routine, or else that routine will slowly kill the relationship one step at a time. When life becomes dull and has become a stalemate routine then this affects communication. Take a trip to the theaters for example. After the movie people usually proceed to have a discussion about it afterwards. Couples need to have new experiences and constantly push themselves out of that same day to day routine, or else that routine will slowly kill the relationship one step at a time.",
            image: "https://akcdn.detik.net.id/visual/2022/12/13/meme-kaesang-nikah_169.jpeg?w=700&q=90",
            likes: 1,
            comments: 5
        },
        {
            firstName: "Pai",
            lastName: "Ijo",
            content: "What I highly recommended is creating hobbies together and exploring new things together. When life becomes dull and has become a stalemate routine then this affects communication. Take a trip to the theaters for example. After the movie people usually proceed to have a",
            image: "https://akcdn.detik.net.id/visual/2022/12/13/meme-kaesang-nikah_169.jpeg?w=700&q=90",
            likes: 1,
            comments: 5
        },
        {
            firstName: "Pai",
            lastName: "Ijo",
            content: "Konten lorem ipsum dolor",
            image: "https://akcdn.detik.net.id/visual/2022/12/13/meme-kaesang-nikah_169.jpeg?w=700&q=90",
            likes: 1,
            comments: 5
        },
        {
            firstName: "Pai",
            lastName: "Ijo",
            content: "Konten lorem ipsum dolor",
            image: "https://akcdn.detik.net.id/visual/2022/12/13/meme-kaesang-nikah_169.jpeg?w=700&q=90",
            likes: 1,
            comments: 5
        },
        {
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
                    <div className='post-box'>
                        <div className='input-form-group'>
                            <Avatar name="Lewis Hardin" round={true} size="40px" className='avatar' />
                            <textarea className="form-control"
                                aria-label="With textarea"
                                placeholder="Write something"
                                onChange={onChangeHandler}
                            ></textarea>
                        </div>
                        <p style={{ color: charAllowed < 0 ? "red" : "dodgerblue", marginLeft: "15px", fontSize: "15px" }}>
                            Characters remaining: {charAllowed}/{charNum}
                        </p>
                        <div className='button-group'>
                            <UploadButton />
                            <button className="btn btn-primary"
                                onSubmit={onSubmitHandler}
                                disabled={charAllowed < 0 || charAllowed === charNum}
                            >Post</button>
                        </div>
                    </div>

                    {posts.map((post, index) => (
                        <div id="post-card" className="card" key={index} >
                            <div className="post-header">
                                <div className="user-info">
                                    <Avatar name={`${post.firstName}${' '}${post.lastName}`} round={true} size="40px" className='avatar'></Avatar>
                                    <h6 className="m-2 d-inline-block" >{`${post.firstName}${' '}${post.lastName}`}</h6>
                                </div>
                                {/* <ThreeDots type="button" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" id="post-more" /> */}
                                <DropdownButton size="sm" variant="secondary" title={<ThreeDots />}>
                                    <Dropdown.Item href="#/action-1">Follow</Dropdown.Item>
                                    <Dropdown.Item onClick={handleShow}>Delete</Dropdown.Item>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Do you want to delete this post? </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>This cannot be undone and it will be removed from your profile</Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="danger" onClick={handleClose}>
                                                Yes
                                            </Button>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Cancel
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </DropdownButton>
                            </div>
                            <ClampLines
                                text={post.content} id="custom" lines={2} moreText="show more"
                                lessText="show less" className="custom-class" ellipsis="..." />
                            <img src={post.image} className="card-img" alt="" />
                            <div className="buttons">
                                <Heart type="button" id="icon-heart" className="icon-buttons" />{post.likes}
                                <Chat type="button" id="icon-chat" className="icon-buttons" />{post.comments}
                                <Bookmark type="button" id="icon-save" className="icon-buttons" />
                            </div>
                        </div>
                    ))}


                </div>

                <div className='col-md-3 home-right'>
                    <FriendList />
                </div>
            </div>

        </div>

    );
};

export default Home;
