import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostContext } from '~/contexts/PostProvider';
import { uploadImages } from '~/apiServices/uploadImagesService';
import { httpAddPost } from '~/apiServices/postService';
import Form from '~/components/Form/Form';
const AddPost = () => {
  const { post, handleClear } = useContext(PostContext);
  const [isPending, setPending] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (post.images.length > 0) {
      try {
        setPending(true);
        const imagesURLs = await uploadImages(post.category, post.images);
        const newPost = { ...post, images: imagesURLs };
        setTimeout(async () => {
          const response = await httpAddPost(newPost);
          handleClear();
          console.log(response.data);
          setPending(false);
          /* */
          navigate('/managePosts');
        }, 5000);
      } catch (error) {
        console.log(error.message);
      }
    } else console.log('Image is require');
  };
  return <Form handleSubmit={handleSubmit} isPending={isPending} />;
};

export default AddPost;
