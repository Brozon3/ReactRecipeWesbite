import React, { useRef } from 'react';

export const FileUploader = ({onSelect}) => {
    const fileInput = useRef(null);

    const handleInput = (e) => {
        onSelect(e.target.files[0]);
    }

    return (
        <div>
            <input type="file" onChange={handleInput}/>
            <button onClick={e => fileInput.current && fileInput.current.click()}></button>
        </div>
    )
}

export default FileUploader;
