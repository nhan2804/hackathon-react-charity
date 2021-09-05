import { useAppDispatch } from "@hooks/reduxHook";
import { useMutation } from "react-query";
import { useHistory } from "react-router";
import { login as loginAction } from "../slices";
import { login } from "../services/auth";

const useLogin = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  return useMutation(
    async (requestData) => {
      const { data } = await login(requestData);
      return data;
    },
    {
      onSuccess: (data) => {
        console.log(data);
        dispatch(loginAction(data));
        history.push("/project");
      },
    }
  );
};

export default useLogin;
