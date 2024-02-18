/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Flex } from '@chakra-ui/react';
import iconReply from '../images/icon-reply.svg';
import { useState } from 'react';

const Comment = ({
	userName,
	profilePhoto,
	commentTime,
	comment,
	intialLikes,
}) => {
	const [count, setCount] = useState(intialLikes);

	const toggleCountInc = () => {
		setCount((prevCount) => prevCount + 1);
	};

	const toggleCountDec = () => {
		setCount((prevCount) => prevCount - 1);
	};

	return (
		<div className=' p-8 shadow-md rounded-md '>
			<Flex className=' items-center' justify={'start'} gap={4}>
				<img src={profilePhoto} alt='' className='w-12' />
				<h1 className='text-2xl font-semibold'>{userName}</h1>
				<p className='text-gray-500 text-lg'>{commentTime}</p>
			</Flex>
			<p className='text-gray-500 text-lg mt-6'>{comment}</p>
			<div className='flex items-center justify-between mt-6'>
				<div className='flex gap-4 p-2 w-1/3 rounded-xl justify-evenly items-center bg-[#edf2f7] '>
					<button
						className='text-2xl font-bold text-[#d1d0ed] active:text-black'
						onClick={toggleCountInc}
					>
						+
					</button>
					<p className='flex text-[#5357b6] text-xl font-bold justify-center'>
						{count}
					</p>
					<button
						className='text-2xl font-bold text-[#d1d0ed] active:text-black'
						onClick={toggleCountDec}
					>
						-
					</button>
				</div>
				<div className='flex items-center gap-2 cursor-pointer'>
					<img src={iconReply} alt='' className='h-5' />
					<p className='font-bold text-[#5357b6] text-2xl'>Reply</p>
				</div>
			</div>
		</div>
	);
};
export default Comment;
