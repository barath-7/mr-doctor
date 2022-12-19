import axios from "axios";
import AppConstants from "../constants/AppConstants";

const registerUser = async (data) => {
  const result = await axios.post(AppConstants.LOCAL_BE_URL, data);
  const final = await result.status;
  return final;
};

export const apiCalls = { registerUser };
