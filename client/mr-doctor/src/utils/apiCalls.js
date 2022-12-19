import axios from "axios";
import AppConstants from "../constants/AppConstants";

const registerUser = async (data) => {
  const result = await axios.post(AppConstants.LOCAL_BE_URL, data);
  return result;
};

const apiCalls = { registerUser };
export default apiCalls;
