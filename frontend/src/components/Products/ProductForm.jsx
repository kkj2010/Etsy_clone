import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProductForm.css";

export default function ProductForm() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [success, setSuccess] = useState();
  const [isUploading, setIsUploading] = useState();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //upload image where?
    setIsUploading(true);
    setSuccess("Successfully Updated");
    setTimeout(() => {
      setSuccess(null);
    }, 4000);
  };

  return (
    <>
      <div className="formContainer">
        <section className="formContainerSection">
          <div className="formTitle">
            Please Fill Out The Following Fields:{" "}
          </div>
          {success && <p className="updateMessage">{success}</p>}
          {file && (
            <img
              className="productRegisterImage"
              src={URL.createObjectURL(file)}
              alt="local file"
            />
          )}
          <form className="productRegisterForm" onSubmit={handleSubmit}>
            <input
              className="productFormInput"
              type="file"
              accept="image/*"
              name="file"
              required
              onChange={handleChange}
            />
            <input
              className="productFormInput"
              type="text"
              name="name"
              value={product.name ?? " "}
              placeholder="Product Name"
              required
              onChange={handleChange}
            />
            <input
              className="productFormInput"
              type="number"
              name="price"
              value={product.price ?? " "}
              placeholder="Price"
              required
              onChange={handleChange}
            />
            <input
              className="productFormInput"
              type="text"
              name="category"
              value={product.category ?? ""}
              placeholder="Category"
              required
              onChange={handleChange}
            />
            <input
              className="descriptionInput"
              type="text"
              name="description"
              value={product.description ?? ""}
              placeholder="Description"
              required
              onChange={handleChange}
            />
            <button
              className="productFormButton"
              type="submit"
              text={isUploading ? "Uploading..." : "Create Product"}
              disabled={isUploading}
            >
              Create Product
            </button>
          </form>
        </section>
      </div>
    </>
  );
}
