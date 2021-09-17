import { toast } from "react-toastify";
const useResponse = () => {
  return {
    onSuccess: (data) => {
      toast.success(data?.message || "Thành công");
    },
    onError: (e) => {
      toast.error(
        e?.response?.data?.message || "Có lỗi xảy ra, vui lòng thử lại"
      );
    },
  };
};
export default useResponse;
