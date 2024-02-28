export default function AddProductPage() {
  return (
    <div>
      <h1 className="text-lg mb-3 font-bold ">Product Page</h1>
      <form>
        <input
          required
          name="name"
          type="text"
          placeholder="Name"
          className=" mb-3 input input-bordered w-full "
        />
        <textarea
          required
          name="discription"
          placeholder="Description"
          className="textarea-bordered textarea mb-3 w-full "
        />
        <input
          required
          name="imageUrl"
          type="url"
          placeholder="Image Url"
          className=" mb-3 input input-bordered w-full "
        />
        <input
          required
          name="price"
          type="number"
          placeholder="Price"
          className=" mb-3 input input-bordered w-full "
        />
        <button className="btn btn-primary btn-block" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
}
