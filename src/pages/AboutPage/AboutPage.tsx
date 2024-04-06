import { memo } from "react";

interface AboutPageProps {
  className?: string;
}

const AboutPage = memo((props: AboutPageProps) => {
  const { className } = props;

  return <h1>ABOUT</h1>;
});

export default AboutPage;
