import { useContext } from "react";
import { AiOutlineClose, AiOutlineSend } from "react-icons/ai";
import { ModalContext } from "../../contexts/modalContext";
import { useForm } from "react-hook-form";

const Modal = () => {
  const { openModal, setOpenModal } = useContext(ModalContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleForm = (data: any) => {
    console.log(data);
  };

  if (openModal) {
    return (
      <div className="modal-wraper">
        <div className="modal-card">
          <h2>Contact</h2>
          <form onSubmit={() => handleSubmit(handleForm)}>
            <div>
              <label htmlFor="name">Name</label>
              <input id="name" placeholder="Fill your name" type="text" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" placeholder="Fill a valid email" type="text" />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input id="phone" placeholder="Fill your phone" type="text" />
            </div>
            <div>
              <label htmlFor="content">Name</label>
              <textarea id="content" placeholder="Hello..." />
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
