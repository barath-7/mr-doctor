import axios from "axios";
import AppConstants from "../constants/AppConstants";

const registerUser = async (data) => {
  const result = await axios.post(
    AppConstants.BE_URL + AppConstants.REGISTER_USER,
    data
  );
  return result;
};
const loginUser = async (data) => {
  const result = await axios.post(
    AppConstants.BE_URL + AppConstants.LOCAL_BE_URL,
    data
  );
  return result;
};
const apiCalls = { registerUser, loginUser };
export default apiCalls;
