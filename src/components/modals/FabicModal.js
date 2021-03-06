import React, { useState } from "react";
import Modal from "react-modal";

// Stores
import itemStore from "../../stores/itemStore";

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

const FabricModal = ({ shop, isOpen, closeModal, oldItem }) => {
  // if (!shopId) shopId = oldItem.shopId;
  const resetForm = { name: "", price: 0, description: "", image: "" };
  const [fabric, setFabric] = useState(oldItem ?? resetForm);

  const handleChange = (event) => {
    const newFabric = { ...fabric, [event.target.name]: event.target.value };
    setFabric(newFabric);
  };

  const handleImage = (event) =>
    setFabric({ ...fabric, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    itemStore[oldItem ? "updateItem" : "createFabric"](fabric, shop);
    // setFabric(resetForm);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
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
              value={fabric.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-6">
            <label>Price</label>
            <input
              type="number"
              min="1"
              className="form-control"
              name="price"
              value={fabric.price}
              onChange={handleChange}
              required
            ></input>
          </div>
        </div>

        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            name="description"
            value={fabric.description}
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

        <CreateButtonStyled className="btn float-right">
          {oldItem ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default FabricModal;
