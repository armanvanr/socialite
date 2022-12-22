import React, { useState, useRef } from "react";
import { CardImage } from "react-bootstrap-icons";

function UploadButton() {
    const [uploadedFileName, setUploadedFileName] = useState(null);
    const inputRef = useRef(null);

    const handleUpload = () => {
        inputRef.current?.click();
    };
    const handleDisplayFileDetails = () => {
        inputRef.current?.files &&
            setUploadedFileName(inputRef.current.files[0].name);
    };
    return (
        <div >
            <CardImage id="image-upload"
                onClick={handleUpload}
                type="button"
                style={uploadedFileName ? { color: "green" } : { color: "grey" }}
            />
            {/* {uploadedFileName ? "✅" : ""} */}
            <input
                ref={inputRef}
                onChange={handleDisplayFileDetails}
                className="d-none"
                type="file"
            />
        </div>
    );
}

export default UploadButton;