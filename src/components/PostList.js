import React, { useState } from "react";
import './PostList.css';
import ClampLines from 'react-clamp-lines';
import { Bookmark, Chat, Heart, ThreeDots } from "react-bootstrap-icons";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Avatar from "react-avatar";
import { useSelector } from "react-redux";

const PostList = ({ data }) => {
    const { user: currentUser } = useSelector(state => state.auth);
    //Delete alert
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            {data.map((post, index) => (
                <div id="post-card" className="card" key={index} >
                    <div className="post-header">
                        <div className="user-info">
                            <Avatar name={`${post.firstName}${' '}${post.lastName}`} round={true} size="40px" className='avatar'></Avatar>
                            <h6 className="m-2 d-inline-block" >{`${post.firstName}${' '}${post.lastName}`}</h6>
                        </div>
                        <DropdownButton id="dropdown-toggle" className="btn" size="sm" variant="secondary" title={<ThreeDots />}>
                            {(currentUser.user.userId === post.userId) ?
                                (<>
                                    <Dropdown.Item href="#/action-1">Follow</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                    <Dropdown.Item onClick={handleShow}>Delete</Dropdown.Item>
                                </>)
                                : (
                                    <Dropdown.Item href="#/action-1">Follow</Dropdown.Item>
                                )}

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
                        <div type="button" id="icon-heart">
                            <Heart className="icon-buttons" />{post.likes}
                        </div>
                        <div type="button" id="icon-chat">
                            <Chat className="icon-buttons" />{post.comments}
                        </div>
                        <div type="button" id="icon-save">
                            <Bookmark className="icon-buttons" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostList;