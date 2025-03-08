import React, { useState } from "react";
import MainLayout from "../../components/MainLayout";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle post creation logic here
    console.log("Post Created", { title, description, image });
  };

  return (
   < MainLayout>
    <section>
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md w-full sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12"
    >
      <h2 className="text-2xl font-bold text-[--color-primery] mb-4 text-center">
        Create New Post
      </h2>

      <label htmlFor="imageUpload" className="block cursor-pointer mb-4">
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            alt="Selected"
            className="rounded-lg w-full max-h-64 object-cover"
          />
        ) : (
          <div className="w-full min-h-[200px] bg-gray-200 flex justify-center items-center text-[--color-primery] border-dashed border-2 border-[--color-primery]">
            Click to upload image
          </div>
        )}
      </label>
      <input
        type="file"
        id="imageUpload"
        className="hidden"
        onChange={handleFileChange}
      />

      <div className="mb-4">
        <label className="block text-[--color-soft-dark] font-medium mb-2">
          Title
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-primery]"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
        />
      </div>

      <div className="mb-4">
        <label className="block text-[--color-soft-dark] font-medium mb-2">
          Description
        </label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-primery]"
          rows="5"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full border-2 mt-5 lg:mt-0 border-[--color-hard-dark] font-semibold px-6 py-2 hover:bg-[--color-hard-dark] hover:text-blue-400 transition-all duration-300 rounded-full text-[--color-hard-dark]"
      >
        Submit
      </button>
    </form>
    </section>
    </MainLayout>
  );
};

export default CreatePost;
