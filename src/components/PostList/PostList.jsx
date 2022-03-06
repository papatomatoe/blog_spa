import React from "react";

const POSTS = [
	{
		id: "1",
		title: "Title 1",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam porro quibusdam repellendus commodi recusandae vitae officia. Iste ad deserunt cum ducimus quibusdam eveniet natus deleniti exercitationem dignissimos reprehenderit? Voluptates, eum!",
		date: "12.01.21",
	},
	{
		id: "2",
		title: "Title 2",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam porro quibusdam repellendus commodi recusandae vitae officia. Iste ad deserunt cum ducimus quibusdam eveniet natus deleniti exercitationem dignissimos reprehenderit? Voluptates, eum!",
		date: "12.01.21",
	},
	{
		id: "3",
		title: "Title 3",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam porro quibusdam repellendus commodi recusandae vitae officia. Iste ad deserunt cum ducimus quibusdam eveniet natus deleniti exercitationem dignissimos reprehenderit? Voluptates, eum!",
		date: "12.01.21",
	},
];

const PostList = () => {
	return (
		<ul className="posts__list">
			{POSTS.map(({ id, title, content, date }) => (
				<li key={id} className="posts__item">
					<h3 className="posts__title">{title}</h3>
					<p className="posts__content">{content}</p>
					<time className="posts__date" dateTime={date}>
						{date}
					</time>
				</li>
			))}
		</ul>
	);
};

export default PostList;
