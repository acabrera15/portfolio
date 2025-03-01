import EmailLink from "./component/email";
import Header from "./component/header";
import SocialLinks from "./component/social-links";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <SocialLinks />
      <EmailLink />
    </div>
  );
}
