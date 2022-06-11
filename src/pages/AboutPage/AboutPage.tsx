import { FC } from 'react';
import Section from 'components/Section';
import styles from './AboutPage.module.css';
import { useSkills } from 'queries/useSkills';
import { useAuthorInfo } from 'queries/useAuthorInfo';
import AuthorInfo from 'components/AuthorInfo';
import Skills from 'components/Skills';

const AboutPage: FC = () => {
  const { data: skills, isError: isSkillsError, isLoading: isSkillsLoading } = useSkills();

  const { data: author, isError: isAuthorError, isLoading: isAuthorLoading } = useAuthorInfo();

  if (isSkillsError || isAuthorError) return <p>Error</p>;
  if (isSkillsLoading || isAuthorLoading) return <p>Loading...</p>;

  return (
    <>
      {author && (
        <Section title="About Me" className={styles.about}>
          <AuthorInfo
            title={author.title}
            desktopImage={author.desktopImage}
            mobileImage={author.mobileImage}
            description={author.fullDescription}
          />
        </Section>
      )}
      {skills && skills.length > 0 && (
        <Section title="My skills">
          <Skills skills={skills} />
        </Section>
      )}
    </>
  );
};

export default AboutPage;
