/* eslint-disable react/no-unescaped-entities */
import { Box, Flex, Button } from '@chakra-ui/react';
import amyRobson from '../images/avatars/image-amyrobson.png';
import iconReply from '../images/icon-reply.svg';
import { useState } from 'react';

const Comment = () => {
  const [count, setCount] = useState(0);

  const toggleCountInc = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const toggleCountDec = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <Box className='m-4 p-8 shadow-xl rounded-md shadow-gray-300'>
      <Flex className=' items-center' justify={'start'} gap={4}>
        <img src={amyRobson} alt='' className='w-16' />
        <h1 className='text-2xl font-semibold'>amyrobson</h1>
        <p className='text-gray-500 text-lg'>1 month ago</p>
      </Flex>
      <p className='text-gray-500 text-lg mt-6'>
        Impressive! Though it seems the drag feature could be improved. But
        overall it looks incredible. You've nailed the design and the
        responsiveness at various breakpoints works really well.
      </p>
      <div className='flex items-center justify-between mt-6'>
        <div className='flex gap-4 p-2 w-1/5 rounded-xl justify-evenly items-center bg-[#edf2f7] '>
          <button
            className='text-2xl font-bold text-[#d1d0ed] active:text-black'
            onClick={toggleCountInc}
          >
            +
          </button>
          <p className='flex text-[#5151a2] text-xl font-bold justify-center'>
            {count}
          </p>
          <button
            className='text-2xl font-bold text-[#d1d0ed] active:text-black'
            onClick={toggleCountDec}
          >
            -
          </button>
        </div>
        <div className='flex items-center gap-2'>
          <img src={iconReply} alt='' className='h-5'/>
          <p className='font-bold text-[#5357b6] text-2xl'>Reply</p>
        </div>
      </div>
    </Box>
  );
};
export default Comment;
