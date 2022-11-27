/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from 'react';
import useAuth from '~/hooks/useAuth';
export const PostContext = createContext({});

const PostProvider = ({ children }) => {
  const { auth } = useAuth();
  const initValue = {
    title: '',
    category: '',
    price: '',
    description: '',
    address: '',

    images: [],

    branchName: '',
    year: '',
    warranty: '',
    version: '',
    postedBy: '',
  };
  useEffect(() => {
    if (auth.user) {
      setPost({ ...post, postedBy: auth.user._id });
    }
  }, [auth]);
  const handleClear = () => {
    setPost(initValue);
  };
  const [post, setPost] = useState(initValue);
  return (
    <PostContext.Provider value={{ post, setPost, handleClear }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;

// const post = {
//   title: 'aa',
//   category: '63384335bd03e448c90600a0',
//   price: '2500',
//   description: 'aa',
//   address: 'aa',
//   images: [
//     'https://firebasestorage.googleapis.com/v0/b/chotot-3fb17.appspot.com/o/63384335bd03e448c90600a0%2Frm77ys1?alt=media&token=12371f68-af0e-4c44-bc31-ee9d3a1d9808',
//     'https://firebasestorage.googleapis.com/v0/b/chotot-3fb17.appspot.com/o/63384335bd03e448c90600a0%2Fm6dje7t?alt=media&token=7a9231ff-6666-424f-9341-d0f39db1d56b',
//   ],
//   branchName: 'aa',
//   year: '2022',
//   warranty: '3 thang',
//   version: '1.1',
//   postedBy: '633a9bd7169e0f178bfb859a',
// }
