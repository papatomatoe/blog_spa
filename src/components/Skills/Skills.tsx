import { FC } from 'react';
import cn from 'classnames';
import styles from './Skills.module.css';
import { SkillsProps } from './types';

const Skills: FC<SkillsProps> = ({ skills }) => {
  return (
    <ul className={styles.skills}>
      {skills.map((skill) => (
        <li key={skill} className={cn(styles.default, styles[skill.toLowerCase()])}>
          {skill}
        </li>
      ))}
    </ul>
  );
};

export default Skills;
