import { useAppDispatch } from "@hooks/reduxHook";
import { useMutation } from "react-query";
import { useHistory } from "react-router";
import { register } from "../services/auth";
import { login as loginAction } from "../slices";

const useRegister = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  return useMutation(
    async (requestData) => {
      const { data } = await register(requestData);
      return data;
    },
    {
      onSuccess: (data) => {
        dispatch(loginAction(data));
        history.push("/project");
      },
    }
  );
};

export default useRegister;
