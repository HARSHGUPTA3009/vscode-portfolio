import styles from '../styles/ContactCode.module.css';

const contactItems = [
  
  {
    social: 'email',
    link: 'guptaharsh2023@gmail.com',
    href: 'mailto:guptaharsh2023@gmail.com',
  },
  {
    social: 'github',
    link: 'HARSHGUPTA3009',
    href: 'https://github.com/HARSHGUPTA3009',
  },
  {
    social: 'linkedin',
    link: 'harshguptaaa',
    href: 'https://www.linkedin.com/in/harshguptaaa/',
  },
  
  {
    social: 'instagram',
    link: '_harshhguptaa_',
    href: 'https://www.instagram.com/_harshhguptaa_/',
  },
  {
    social: 'Leetcode',
    link: 'hedgehoggg',
    href: 'https://leetcode.com/u/hedgehoggg/',
  }
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
