import React, { useState } from "react";
import Modal from "react-modal";

// Stores
import itemStore from "../../stores/itemStore";

// styles
import { CreateButtonStyled, customStyles } from "../../styles";

const FabricModal = ({ isOpen, closeModal, oldItem }) => {
  const [fabric, setFabric] = useState(
    oldItem ?? {
      name: "",
      price: 0,
      description: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    const newFabric = { ...fabric, [event.target.name]: event.target.value };
    setFabric(newFabric);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    itemStore[oldItem ? "updateItem" : "createFabric"](fabric);
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
            type="text"
            className="form-control"
            name="image"
            value={fabric.image}
            onChange={handleChange}
            required
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
