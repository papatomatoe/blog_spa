import React from "react";
import Section from "../../components/Section";
import { VKIcon, TwitterIcon, YoutubeIcon } from "../../components/Icons";
import styles from "./ContactsPage.module.css";
import { useContacts } from "../../queries/useContacts";
import { useSocial } from "../../queries/useSocial";
const SOCIAL = [
	{ id: 1, title: "vk", link: "/", Icon: VKIcon },
	{ id: 2, title: "youtube", link: "/", Icon: YoutubeIcon },
	{ id: 3, title: "twitter", link: "/", Icon: TwitterIcon },
];
const ContactsPage = () => {
	const {
		isLoading: isLoadingContacts,
		isError: isErrorContacts,
		data: contacts,
	} = useContacts();
	const {
		isLoading: isLoadingSocial,
		isError: isErrorSocial,
		data: social,
	} = useSocial();

	if (isLoadingContacts || isLoadingSocial) return <p>Loading...</p>;
	if (isErrorContacts || isErrorSocial) return <p>Error</p>;

	console.log(contacts, social);

	return (
		<Section title="Contacts">
			<div className={styles.wrapper}>
				<ul className={styles.list}>
					<li className={styles.item}>
						<span className={styles.label}>Phone: </span>
						<a className={styles.value} href={`tel:${contacts.phone}`}>
							{contacts.phone}
						</a>
					</li>
					<li className={styles.item}>
						<span className={styles.label}>Email: </span>
						<a className={styles.value} href={`mailto:${contacts.email}`}>
							{contacts.email}
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
