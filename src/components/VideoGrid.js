import React from 'react';
import VideoThumbnail from './VideoThumbnail';

function VideoGrid({ videos }) {
  return (
    <div className="flex flex-wrap justify-center">
      {videos.map((video, index) => (
        <VideoThumbnail key={index} video={video} />
      ))}
    </div>
  );
}

export default VideoGrid;