import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ProductForm() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();

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
  };

  return (
    <>
      <div className="formContainer">
        <section>
          <div>Please Fill Out The Following Fields: </div>
          {file && <img src={URL.createObjectURL(file)} alt="local file" />}
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              accept="image/*"
              name="file"
              required
              onChange={handleChange}
            />
            <input
              type="text"
              name="title"
              value={product.name ?? ""}
              placeholder="Product Name"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              name="price"
              value={product.price ?? " "}
              placeholder="Price"
              required
              onChange={handleChange}
            />
            <input
              type="text"
              name="category"
              value={product.category ?? ""}
              placeholder="Category"
              required
              onChange={handleChange}
            />
            <input
              type="text"
              name="description"
              value={product.description ?? ""}
              placeholder="Description"
              required
              onChange={handleChange}
            />
            <button type="submit">Create Product</button>
          </form>
        </section>
      </div>
    </>
  );
}
