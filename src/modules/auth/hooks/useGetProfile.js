import { useQuery } from "react-query";
import { getProfile } from "../services/auth";

const useGetProfile = () => {
  return useQuery(["userProfile"], async () => {
    const { data } = await getProfile();
    return data;
  });
};

export default useGetProfile;
