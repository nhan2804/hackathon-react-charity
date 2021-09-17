// import useLogoutAction from "./useLogoutAction";

const useHandleErrors = (props) => {
  // const logout = useLogoutAction();
  const logout = () => {};
  // const history = useHistory();
  const handle = (error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error?.response?.status === 401) return logout();
      //
      //
      //
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      //
    } else {
      // Something happened in setting up the request that triggered an Error
      //
    }
  };
  return [handle];
};

export default useHandleErrors;
