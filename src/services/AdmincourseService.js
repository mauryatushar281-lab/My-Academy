import axios from "axios";
const API = "http://localhost:5000/api/courses";

// GET COURSES
export const fetchCourses = async () => {
    const res = await axios.get(API);
    return res.data;
};

// CREATE

export const addCourse = async (course) => {
    const res = await axios.post(
        `${API}/create`,
        course
    );
    return res.data;
};

// UPDATE
export const editCourseApi = async (id, course) => {
    const res = await axios.put(
        `${API}/update/${id}`,
        course
    );
    return res.data;
};

// DELETE
export const removeCourse = async (id) => {
    const res = await axios.delete(
        `${API}/delete/${id}`
    );
    return res.data;
};