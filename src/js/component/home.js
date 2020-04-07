import React from "react";

//include images into your bundle
import { NavBar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";
import { Footer } from "./footer";

//create your first component
export function Home() {
	return (
		<div>
			<NavBar tittle="Start Bootstrap" />
			<div className="container">
				<Jumbotron
					tittle="A Warm Welcome!"
					text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
				ipsam, eligendi, in quo sunt possimus non incidunt odit vero
				aliquid similique quaerat nam nobis illo aspernatur vitae fugiat
				numquam repellat."
					btnLabel="Call to action!"
				/>
				<div className="row text-center">
					<Card
						imgsrc="https://picsum.photos/500/325?random=1"
						tittle="Card title 1"
						text="Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Sapiente esse necessitatibus neque."
						btnLabel="Find Out More!"
					/>
					<Card
						imgsrc="https://picsum.photos/500/325?random=2"
						tittle="Card title 2"
						text="Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Sapiente esse necessitatibus neque."
						btnLabel="Find Out More!"
					/>
					<Card
						imgsrc="https://picsum.photos/500/325?random=3"
						tittle="Card title 3"
						text="Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Sapiente esse necessitatibus neque."
						btnLabel="Find Out More!"
					/>
					<Card
						imgsrc="https://picsum.photos/500/325?random=4"
						tittle="Card title 4"
						text="Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Sapiente esse necessitatibus neque."
						btnLabel="Find Out More!"
					/>
				</div>
			</div>
			<Footer text="Copyright © Your Website 2019" />
		</div>
	);
}
