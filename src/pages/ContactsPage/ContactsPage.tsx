import { FC } from 'react';
import Section from 'components/Section';
import styles from './ContactsPage.module.css';
import { useContacts } from 'queries/useContacts';
import { useSocial } from 'queries/useSocial';
import Contact from 'components/Contact';

const ContactsPage: FC = () => {
  const { isLoading: isLoadingContacts, isError: isErrorContacts, data: contacts } = useContacts();
  const { isLoading: isLoadingSocial, isError: isErrorSocial, data: social } = useSocial();

  if (isLoadingContacts || isLoadingSocial) return <p>Loading...</p>;
  if (isErrorContacts || isErrorSocial) return <p>Error</p>;

  return (
    <Section title="Contacts">
      <div className={styles.wrapper}>
        {contacts && Object.keys(contacts).length > 0 && (
          <ul className={styles.list}>
            <li className={styles.item}>
              <Contact label="Phone" link={contacts.phone} type="tel">
                {contacts.phone}
              </Contact>
            </li>
            <li className={styles.item}>
              <Contact label="Email" link={contacts.email} type="email">
                {contacts.email}
              </Contact>
            </li>
          </ul>
        )}
        {social && social.length > 0 && (
          <ul className={styles.socialList}>
            {social.map(({ id, title, link, icon }) => (
              <li key={id} className={styles.socialItem}>
                <a
                  className={styles.socialLink}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={title}
                >
                  <img src={icon} alt={title} />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Section>
  );
};

export default ContactsPage;
