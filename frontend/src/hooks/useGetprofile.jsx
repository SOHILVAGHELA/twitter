import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import { useEffect } from "react";
const useGetprofile = async (id) => {
  useEffect(() => {
    try {
      const res = axios.get(`${USER_API_END_POINT}/profile/${id}`, {
        withCredentials: true,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
};
export default useGetprofile;
