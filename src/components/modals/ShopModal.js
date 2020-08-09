import React, { useState } from "react";
import Modal from "react-modal";

// Stores
import shopStore from "../../stores/shopStore";

// styles
import { CreateButtonStyled } from "./styles";

const customStyles = {
  content: {
    top: "30%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%,50%)",
  },
};

const ShopModal = ({ isOpen, closeModal, oldShop }) => {
  const resetForm = { name: "", image: "" };
  const [shop, setShop] = useState(oldShop ?? resetForm);

  const handleChange = (event) => {
    const newShop = { ...shop, [event.target.name]: event.target.value };
    setShop(newShop);
  };

  const handleImage = (event) =>
    setShop({ ...shop, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    shopStore[oldShop ? "updateShop" : "createShop"](shop);
    setShop(resetForm);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Shop Modal"
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={shop.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Image</label>
            <input
              type="file"
              className="form-control"
              name="image"
              onChange={handleImage}
            />
          </div>
        </div>
        <CreateButtonStyled className="btn float-right">
          {oldShop ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default ShopModal;
