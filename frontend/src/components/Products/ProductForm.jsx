import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProductForm.css";
import Footer from "../Footer/Footer";
import { createNewProduct } from "../../store/reducers/productReducer";
import { useHistory } from "react-router-dom";

export default function ProductForm() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [files, setFiles] = useState([]);
  const [isUploading, setIsUploading] = useState();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFiles(Array.from(files));
    } else {
      setProduct((product) => ({ ...product, [name]: value }));
    }
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();


    const formData = new FormData();
    formData.set("name", product.name);
    formData.set("description", product.description);
    formData.set("price", parseInt(product.price));
    formData.set("category_id", parseInt(product.categoryId)); 
    formData.set("photos", files[0], files[0].name);

    setIsUploading(true);
    dispatch(createNewProduct(formData)).then(async (res) => {
      setIsUploading(false);
      history.push("/products/jewelry");
    });
  };

  return (
    <>
      <div className="formContainer">
        <section className="formContainerSection">
          <div className="formTitle">
            Please Fill Out The Following Fields:{" "}
          </div>

          {!!files.length &&
            files.map((file, index) => (
              <img
                className="productRegisterImage"
                src={URL.createObjectURL(file)}
                alt="local file"
                key={index}
                onLoad={() => URL.revokeObjectURL(file)}
              />
            ))}

          <form className="productRegisterForm" onSubmit={handleSubmit}>
            <input
              className="fileInput"
              type="file"
              accept="image/*"
              name="file"
              multiple={true}
              required
              onChange={handleChange}
              id="file"
            />

            <input
              className="productFormInput"
              type="text"
              name="name"
              value={product.name ?? ""}
              placeholder="Product name"
              required
              onChange={handleChange}
            />
            <input
              className="productFormInput"
              type="number"
              name="price"
              value={product.price ?? ""}
              placeholder="Price"
              required
              onChange={handleChange}
            />

            <select
              className="selectProductFormInput"
              name="categoryId"
              value={product.categoryId}
              onChange={handleChange}
            >
              <option value="">Please select category</option>
              <option value={2}>Jewelry & Accessories</option>
            </select>

            <textarea
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
              disabled={isUploading}
            >
              {isUploading ? "Uploading..." : "Create Product"}
            </button>
          </form>
        </section>
      </div>
      {/* <Footer /> */}
    </>
  );
}
