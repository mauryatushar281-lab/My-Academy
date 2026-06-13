import { useEffect, useRef } from "react";

export default function VideoPlayer({ lecture }) {
  const videoRef = useRef();

  useEffect(() => {
    const savedTime = localStorage.getItem("progress");

    if (savedTime && videoRef.current) {
      videoRef.current.currentTime = savedTime;
    }
  }, []);

  return (
    <video
      ref={videoRef}
      controls
      width="100%"
      src={lecture.videoUrl}
      onTimeUpdate={(e) => {
        localStorage.setItem("progress", e.target.currentTime);
      }}
    />
  );
}
