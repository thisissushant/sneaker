import prisma from "@/lib/db/prisma";
import { redirect } from "next/navigation";
export const metadata = {
  title: "Add Product - Sneaker",
};
async function addProduct(formData: FormData) {
  "use server";

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const price = Number(formData.get("price") || 0);
  const imageUrl = formData.get("imageUrl")?.toString();

  if (!name || !description || !price || !imageUrl) {
    throw Error("All the fields are required");
  }
  await prisma.product.create({
    data: { name, price, imageUrl, description },
  });
  redirect("/");
}
export default function AddProductPage() {
  return (
    <div>
      <h1 className="text-lg mb-3 font-bold ">Product Page</h1>
      <form action={addProduct}>
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
