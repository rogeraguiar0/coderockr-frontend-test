import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Modal from "../components/Modal";
import HomePage from "../pages/HomePage";
import PostPage from "../pages/PostPage";
import ModalProvider from "../contexts/modalContext";

const AllRoutes = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:id" element={<PostPage />} />
        </Routes>
        <Modal />
      </ModalProvider>
    </>
  );
};

export default AllRoutes;
