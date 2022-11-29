import { Routes, Route } from "react-router-dom";
import Modal from "../components/Modal";
import HomePage from "../pages/HomePage";
import PostPage from "../pages/PostPage";
import ModalProvider from "../contexts/modalContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllRoutes = () => {
  return (
    <>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:id" element={<PostPage />} />
        </Routes>
        <Modal />
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          theme="colored"
        />
      </ModalProvider>
    </>
  );
};

export default AllRoutes;
