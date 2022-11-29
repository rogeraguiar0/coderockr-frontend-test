import { useContext } from "react";
import { AiOutlineClose, AiOutlineSend } from "react-icons/ai";
import { ModalContext } from "../../contexts/modalContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

interface iDataModal {
  name: string;
  email: string;
  phone: string;
  post: string;
}

const Modal = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Required field"),
    email: yup.string().required("Required field").email("Invalid email"),
    phone: yup
      .string()
      .required("Required field")
      .matches(
        /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/,
        "Invalid phone number. Example: 31 99999-9999"
      ),
    post: yup.string().required("Required field"),
  });

  const { openModal, setOpenModal } = useContext(ModalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iDataModal>({
    resolver: yupResolver(schema),
  });

  const handleForm = (data: iDataModal) => {
    console.log(data);
    toast.success("Sucess");
    reset();
    setOpenModal(false);
  };

  if (openModal) {
    return (
      <div className="modal-wraper">
        <div className="modal-card">
          <h2>Contact</h2>
          <form onSubmit={handleSubmit(handleForm)}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                {...register("name")}
                id="name"
                placeholder="Fill your name"
                type="text"
              />
              <span>{errors.name?.message}</span>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                {...register("email")}
                id="email"
                placeholder="Fill a valid email"
                type="text"
              />
              <span>{errors.email?.message}</span>
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                {...register("phone")}
                id="phone"
                placeholder="Fill your phone"
                type="text"
              />
              <span>{errors.phone?.message}</span>
            </div>
            <div>
              <label htmlFor="content">Post</label>
              <textarea
                {...register("post")}
                id="content"
                placeholder="Hello..."
              />
              <span>{errors.post?.message}</span>
            </div>
            <button type="submit">
              <AiOutlineSend />
              Submit
            </button>
          </form>
          <button className="close" onClick={() => setOpenModal(false)}>
            <AiOutlineClose />
          </button>
        </div>
      </div>
    );
  }

  return <></>;
};

export default Modal;
