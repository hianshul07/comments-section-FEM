import Comment from './components/Comment';
import Reply from './components/Reply';
import data from './data.json';

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
				comment={data.comments[0].content}
				intialLikes={data.comments[0].score}
			/>
			<Comment
				profilePhoto={data.comments[1].user.image.png}
				userName={data.comments[1].user.username}
				commentTime={data.comments[1].createdAt}
				comment={data.comments[1].content}
				intialLikes={data.comments[1].score}
			/>
			<Reply
				profilePhoto={data.comments[1].replies[0].user.image.png}
				userName={data.comments[1].replies[0].user.username}
				commentTime={data.comments[1].replies[0].createdAt}
				comment={data.comments[1].replies[0].content}
				intialLikes={data.comments[1].replies[0].score}
			/>
		</div>
	);
};

export default App;
