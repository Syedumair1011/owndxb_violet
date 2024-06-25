"use client";
import React, { useRef } from 'react';

const DownloadButton = ({ fileName, fileUrl }) => {
    const anchorRef = useRef(null);

    const handleDownload = () => {
        if (anchorRef.current) {
            anchorRef.current.href = fileUrl;
            anchorRef.current.download = fileName;
            anchorRef.current.click();
        }
    };

    return (
        <>
            <button className="btn btn-primary btn-sm" onClick={handleDownload}>
                <span className="fas fa-print"></span> Download Brochure
            </button>
            <a ref={anchorRef} style={{ display: 'none' }}>Download</a>
        </>
    );
};

export default DownloadButton;
