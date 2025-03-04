import { Button, theme } from "flowbite-react";
import EmailLink from "./component/email";
import Header from "./component/header";
import HomeSlide from "./component/slides/home";
import SocialLinks from "./component/social-links";

export default function Home() {
  return (
    <div className="text-black relative min-h-screen w-full">
      <Header />

      <Button theme={theme.button}>testing</Button>
      {/* slides */}
      <HomeSlide />
      {/* "Footer" */}
      <SocialLinks />
      <EmailLink />
    </div>
  );
}
