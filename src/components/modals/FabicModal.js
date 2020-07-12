import React, { useState } from "react";
import Modal from "react-modal";

import { CreateButtonStyled } from "../../styles";

const FabricModal = ({ isOpen, closeModal, createFabric }) => {
  const [fabric, setFabric] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
  });

  const handleChange = (event) => {
    const newFabric = { ...fabric, [event.target.name]: event.target.value };
    setFabric(newFabric);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createFabric(fabric);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      //   style={modalStyle}
      contentLabel="Fabric Modal"
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input
              type="number"
              min="1"
              className="form-control"
              name="price"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input type="text" className="form-control" name="description" />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input type="text" className="form-control" name="image" />
        </div>
        <CreateButtonStyled className="btn float-right">
          Create
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default FabricModal;
