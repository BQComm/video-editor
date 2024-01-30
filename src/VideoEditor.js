import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import ReactPlayer from 'react-player';

const VideoEditor = () => {
  const [videoUrl, setVideoUrl] = useState('');

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const videoObjectURL = URL.createObjectURL(file);
    setVideoUrl(videoObjectURL);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'video/*' });

  return (
    <div>
      <div {...getRootProps()} style={dropzoneStyles}>
        <input {...getInputProps()} />
        <p>Drag & drop a video file here, or click to select one</p>
      </div>

      {videoUrl && (
        <div>
          <ReactPlayer url={videoUrl} controls width="100%" height="auto" />
        </div>
      )}
    </div>
  );
};

const dropzoneStyles = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

export default VideoEditor;
