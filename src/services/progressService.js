import axios from "axios";

export const saveProgress = async (data) => {
    return await axios.post("http://localhost:5000/api/progress/save", data);
};