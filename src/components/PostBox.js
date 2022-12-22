import React, { useState } from "react";
import Avatar from "react-avatar";
import UploadButton from "./UploadButton";
import './PostBox.css'
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../redux/actions/post";
import { CardImage } from "react-bootstrap-icons";

const PostBox = () => {
    const { user: currentData } = useSelector(state => state.auth);
    const userId = currentData.user.userId;
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const dispatch = useDispatch();

    //character counter
    const charNum = 500;
    const [charAllowed, setCharAllowed] = useState(charNum);

    //text area input
    const onChangeContent = (event) => {
        const contentValue = event.target.value;
        setCharAllowed(charNum - contentValue.length);
        setContent(contentValue);
    };

    //file upload
    const getBase64 = file => {
        return new Promise(resolve => {
            let baseURL = "";
            let reader = new FileReader();

            reader.readAsDataURL(file);
            reader.onload = () => {
                baseURL = reader.result;
                resolve(baseURL);
            };
        });
    };

    const handleFileInputChange = e => {
        let file = e.target.files[0];
        getBase64(file).then(result => {
            setImage(result);
        }).catch(err => {
            console.error(err);
        });

    };

    //submit button handler
    const postHandler = () => {
        dispatch(addPost(content, image, userId));
        console.log('image in Handler : ', image)
        setCharAllowed(charNum);
        setContent('');
    };

    return (
        <div className='post-box'>
            <div className='input-form-group'>
                <Avatar name={`${currentData.user.firstName} ${currentData.user.lastName}`} round={true} size="40px" className='avatar' />
                <textarea className="form-control"
                    aria-label="With textarea"
                    placeholder="Write something"
                    onChange={onChangeContent}
                    value={content}
                ></textarea>
            </div>
            <p style={{ color: charAllowed < 0 ? "red" : "dodgerblue", marginLeft: "15px", fontSize: "15px" }}>
                Characters remaining: {charAllowed}/{charNum}
            </p>
            <div className='button-group'>
                {/* <UploadButton /> */}
                <div >
                    <input type="file" name="image" onChange={handleFileInputChange} />
                </div>
                <button className="btn btn-primary"
                    onClick={postHandler}
                    disabled={charAllowed < 0 || charAllowed === charNum}
                >Post</button>
            </div>
        </div>
    )
}

export default PostBox;