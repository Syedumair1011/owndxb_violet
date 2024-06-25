"use client"


const DownloadButton = ({ fileName, fileUrl }) => {
    const handleDownload = () => {
      const anchor = document.createElement('a');
      anchor.href = fileUrl;
      anchor.download = fileName;
      anchor.click();
    };
  
    return (
      <button className="btn btn-primary btn-sm" onClick={handleDownload}>
       <span className="fas fa-print"></span> Download Brochure
      </button>
    );
  };
  
  export default DownloadButton;