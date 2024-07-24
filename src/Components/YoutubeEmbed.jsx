import React, { useState } from 'react';

const YouTubeEmbed = ({ videoId }) => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  const handleClick = () => {
    setIsIframeLoaded(true);
  };

  return (
    <div className="relative h-[315px] w-full max-w-xl mx-auto cursor-pointer">
      {!isIframeLoaded ? (
        <div className="relative pt-[56.25%] h-full" onClick={handleClick}>
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt="Video Thumbnail"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-16 bg-gray-800 shadow-lg opacity-100 rounded-md bg-[url('https://4.bp.blogspot.com/-_xjZWFrKcd4/XCoI58FAHkI/AAAAAAAAASs/Xu-wr8sRDSA0tKPAq7DE04TovpOTXtGMwCPcBGAYYCw/s1600/icons8-play-button-480.png')] bg-no-repeat bg-contain bg-center"></div>
          </div>
        </div>
      ) : (
        <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}?si=cecuK8XZ-6KCgQ6v&autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      )}
    </div>
  );
};

export default YouTubeEmbed;
