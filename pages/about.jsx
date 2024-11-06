const AboutPage = () => {
  return (
    <>
      <h3>
        I am a passionate web developer specializing in the MERN stack, dedicated to creating dynamic and modern websites and applications. My expertise lies primarily in frontend development, where I thrive on bringing intuitive and engaging user interfaces to life. I am enthusiastic about collaborating on projects and have a strong foundation in data structures and algorithms, with proficiency in Java.
      </h3>
      <br />
      <h3>
        My journey includes active participation in Hacktoberfest, where I contributed to open-source projects and further honed my skills. Currently, I am a contributor to the MERN stack at GSSoC Extended, continually expanding my knowledge and experience in web development.
      </h3>
      <br />
      <h3>
        A significant milestone in my career was participating in the Smart India Hackathon (SIH) internal round at Thapar University, where my team achieved a perfect score of 3/3. Despite a scheduling conflict that ultimately led to our rejection, the experience was invaluable and reinforced my commitment to learning and growth.
      </h3>
      <br />
      <h3>
        I am always eager to acquire new skills and explore emerging technologies, constantly striving to stay at the forefront of the web development field. My dedication to continuous learning and collaboration drives my passion for developing innovative solutions and contributing to impactful projects.
      </h3>
    </>
  );
  
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
