import {LoginData} from "@/api/dtos/auth.dto";
import {api} from "../../client/axios";
import {API_PATHS} from "@/constants/paths";

export const loginUser = async (data: LoginData) => {
  const res = await api.post(API_PATHS.auth.login, data);
  return res.data;
};
