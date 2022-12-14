import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { httpSearchByName } from '~/apiServices/postService';
import { AiOutlineSearch, AiOutlineFileImage } from 'react-icons/ai';

const Search = () => {
  const navigate = useNavigate();
  const inputRef = useRef();
  const handleClick = async () => {
    const result = await httpSearchByName(inputRef.current.value);
    navigate('/search', { state: { result: result.data } });
    inputRef.current.value = '';
  };
  return (
    <div className='flex-1 flex items-center'>
      <div className='flex-1 flex items-center justify-between bg-white'>
        <input
          ref={inputRef}
          className='flex-1 last:border-white rounded px-5 h-10 boder-none outline-none focus:outline-none'
          placeholder=' Tìm kiếm sản phẩm'
        ></input>
        <button onClick={()=>navigate('/search/image')} className='w-10'>
          <AiOutlineFileImage className='text-2xl' />
        </button>
      </div>
      <button
        className='bg-orange-500 rounded px-5 ml-1 w-14 h-10 text-center align-middle'
        onClick={handleClick}
      >
        <AiOutlineSearch className='text-2xl text-white' />
      </button>
    </div>
  );
};

export default Search;
