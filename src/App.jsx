import Comment from './components/Comment';
import data from './data.json'

// const data = {
// 	amyRobson: {
// 		profilePhoto: '/src/images/avatars/image-amyrobson.png',
// 		userName: 'amyrobson',
// 		commentTime: '1 month ago',
// 		comment:
// 			"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
// 		likes: 4,
// 	},
// 	maxBlagun: {
// 		profilePhoto: '/src/images/avatars/image-maxblagun.png',
// 		userName: 'maxblagun',
// 		commentTime: '2 weeks ago',
// 		comment:
// 			"Woah, your project looks awesome! How long have you been coding for? I'm still new. but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React?",
// 		likes: 2,
// 	},
// };

const App = () => {
	return (
		<div className='p-4'>
			<Comment
				profilePhoto={data.comments[0].user.image.png}
        
				userName={data.comments[0].user.username}
				commentTime={data.comments[0].createdAt}
				// comment={data.amyRobson.comment}
				// intialLikes={data.amyRobson.likes}
			/>


			{/* <Comment
				profilePhoto={data.maxBlagun.profilePhoto}
				userName={data.maxBlagun.userName}
				commentTime={data.maxBlagun.commentTime}
				comment={data.maxBlagun.comment}
				intialLikes={data.maxBlagun.likes}
			/> */}
		</div>
	);
};
export default App;

