import { Box } from '@chakra-ui/react';
import amyRobson from '../images/avatars/image-amyrobson.png';

const Comment = () => {
  return (
    <Box w='100%' m={12} bg={'green'}>
      <img src={amyRobson} alt='' />
      <h1 className='text-4xl text-green-400'>amyrobson</h1>
      <p>1 month ago</p>
    </Box>
  );
};
export default Comment;
