import axios from "axios";

export const sendEmail = async (data) => {
  try {
    const response = await axios.post("http://localhost:5000/mail", data);
    return response.status;
  } catch (error) {
    return error.response;
  }
};
