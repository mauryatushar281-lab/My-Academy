import { useState } from "react";
import axios from "axios";

export default function UploadLecture() {
  const [title, setTitle] = useState("");
  const [video, setVideo] = useState(null);

  const uploadLecture = async () => {
    const formData = new FormData();
    formData.append("video", video);

    const res = await axios.post(
      "http://localhost:5000/api/videos/upload-video",
      formData,
    );

    const videoUrl = res.data.url;

    await axios.post(
      "http://localhost:5000/api/courses/add-lecture/COURSE_ID",
      {
        title,
        videoUrl,
      },
    );

    alert("Lecture Uploaded");
  };

  return (
    <div>
      <h2>Upload Lecture</h2>

      <input
        type="text"
        placeholder="Lecture Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="file"
        accept="video/*"
        onChange={(e) => setVideo(e.target.files[0])}
      />

      <button onClick={uploadLecture}>Upload</button>
    </div>
  );
}
