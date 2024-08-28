import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About EchoVerse</h2>
        <p>
          Welcome to EchoVerse, your gateway to the world of blogging. At
          EchoVerse, we believe in the power of words to connect, inspire, and
          inform. Whether you're a seasoned writer or just getting started,
          EchoVerse provides a platform where your voice can be heard and your
          stories can be shared with a global audience.
        </p>
        <p>
          Our platform is designed to be user-friendly, making it easy for
          bloggers of all levels to create, publish, and manage their content.
          With a sleek interface and powerful tools, EchoVerse ensures that your
          ideas take center stage. We support a diverse range of topics, from
          technology and lifestyle to art and culture, empowering you to explore
          your passions and connect with like-minded individuals.
        </p>
        <p>
          At EchoVerse, we're committed to fostering a vibrant community of
          writers and readers. We provide you with the tools you need to engage
          your audience, track your progress, and grow your blog. With features
          like customizable themes, advanced analytics, and SEO optimization,
          EchoVerse helps you create a blog that stands out and resonates with
          your audience.
        </p>
        <p>
          We understand the importance of flexibility, which is why EchoVerse is
          designed to adapt to your needs. Whether you're blogging from your
          desktop, tablet, or smartphone, our platform ensures a seamless
          experience across all devices. Plus, with our integrated social media
          tools, sharing your content with the world has never been easier.
        </p>
        <p>
          Join the EchoVerse community today and start your journey as a
          blogger. Whether you're here to share your knowledge, express your
          creativity, or build your personal brand, EchoVerse is here to support
          you every step of the way. Let's create something amazing together.
        </p>
      </div>
    </article>
  );
};

export default About;