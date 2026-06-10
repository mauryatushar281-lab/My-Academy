import axios from "axios";

const API =
    "http://localhost:5000/api/learning";

export const getCourse = (
    courseId
) => {
    return axios.get(
        `${API}/${courseId}`
    );
};

export const completeLesson = (
    data
) => {
    return axios.put(
        `${API}/complete`,
        data
    );
};