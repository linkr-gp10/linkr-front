import axios from "axios";
import { Hashtag, List, Line, Container, Title } from "./style";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";	

async function getTrending() {
	const { data } = await axios.get("/trending");
	return data;
}

export default function Card() {
	const [trending, setTrending] = useState([]);

	useEffect(() => {
		setTrending(getTrending());
 	});

	return (
		<Container data-test="trending">
			<Title>trending</Title>
			<Line />
			<List>
				{trending.map((item) => (
					<Hashtag data-test="hashtag" key={item.id}>
						<Link to={`/hashtag/${item.hashtag}`}>
							#{item.hashtag}
						</Link>
					</Hashtag>
				))}
			</List>
		</Container>
	);
}