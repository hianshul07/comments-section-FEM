import Comment from './components/Comment';

const data = {
	amyRobson: {
		profilePhoto: '/src/images/avatars/image-amyrobson.png',
		userName: 'amyrobson',
		commentTime: '1 month ago',
		comment:
			"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
	},
};

const App = () => {
	return (
		<div className='text-'>
			<Comment
				profilePhoto={data.amyRobson.profilePhoto}
				userName={data.amyRobson.userName}
        commentTime={data.amyRobson.commentTime}
        comment={data.amyRobson.comment}
			/>
		</div>
	);
};
export default App;

