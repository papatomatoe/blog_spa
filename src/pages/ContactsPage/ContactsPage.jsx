import React from "react";
import Section from "../../components/Section";
import { VKIcon, TwitterIcon, YoutubeIcon } from "../../components/Icons";
import styles from "./ContactsPage.module.css";

const SOCIAL = [
	{ id: 1, title: "vk", link: "/", Icon: VKIcon },
	{ id: 2, title: "youtube", link: "/", Icon: YoutubeIcon },
	{ id: 3, title: "twitter", link: "/", Icon: TwitterIcon },
];
const ContactsPage = () => {
	return (
		<Section title="Contacts">
			<div className={styles.wrapper}>
				<ul className={styles.list}>
					<li className={styles.item}>
						<span className={styles.label}>Phone: </span>
						<a className={styles.value} href="tel:89995324538434286">
							89995324538434286
						</a>
					</li>
					<li className={styles.item}>
						<span className={styles.label}>Email: </span>
						<a className={styles.value} href="mailto:net@net.net">
							net@net.net
						</a>
					</li>
				</ul>
				<ul className={styles.socialList}>
					{SOCIAL.map(({ id, title, link, Icon }) => (
						<li key={id} className={styles.socialItem}>
							<a
								className={styles.socialLink}
								href={link}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={title}
							>
								<Icon className={styles.icon} />
							</a>
						</li>
					))}
				</ul>
			</div>
		</Section>
	);
};

export default ContactsPage;
