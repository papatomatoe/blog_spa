import React from "react";
import Image from "../../components/Image";
import Section from "../../components/Section";
import authorMob from "../../images/author-mob.jpg";
import authorDesk from "../../images/author-desk.jpg";
import styles from "./AboutPage.module.css";
const AboutPage = () => {
	return (
		<>
			<Section title="About Me" className={styles.about}>
				<div className={styles.wrapper}>
					<Image
						className={styles.image}
						alt="Author"
						desktopImage={authorDesk}
						mobileImage={authorMob}
					/>
					<p className={styles.text}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
						esse accusantium recusandae amet consequuntur, ratione rem nesciunt
						nam in quasi id deserunt accusamus. Omnis qui harum nihil eum, vero
						numquam!
					</p>
					<p className={styles.text}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
						esse accusantium recusandae amet consequuntur, ratione rem nesciunt
						nam in quasi id deserunt accusamus. Omnis qui harum nihil eum, vero
						numquam!
					</p>
					<p className={styles.text}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
						esse accusantium recusandae amet consequuntur, ratione rem nesciunt
						nam in quasi id deserunt accusamus. Omnis qui harum nihil eum, vero
						numquam!
					</p>
					<p className={styles.text}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
						esse accusantium recusandae amet consequuntur, ratione rem nesciunt
						nam in quasi id deserunt accusamus. Omnis qui harum nihil eum, vero
						numquam!
					</p>
					<p className={styles.text}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
						esse accusantium recusandae amet consequuntur, ratione rem nesciunt
						nam in quasi id deserunt accusamus. Omnis qui harum nihil eum, vero
						numquam!
					</p>
				</div>
			</Section>
			<Section title="My skills">
				<ul className={styles.skills}>
					<li className={styles.html}>HTML</li>
					<li className={styles.css}>CSS</li>
					<li className={styles.js}>JavaScript</li>
					<li className={styles.react}>React</li>
				</ul>
			</Section>
		</>
	);
};

export default AboutPage;
