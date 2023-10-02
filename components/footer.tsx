import { GithubSocialIcon, LinkedIn } from "@/components/social-links";

export const Footer = () => {
  return (
    <footer className="flex justify-between container mx-auto py-2 tracking-tight m-2">
      <p className="prose py-2 flex flex-wrap">
        <div>
          © 2023 &nbsp;
          <a className="hover:underline" href="/">
            Vladislav Nabatov
          </a>
          .
        </div>
        &nbsp;
        <div>
          The site is &nbsp;
          <a
            className="hover:underline"
            href="https://opensource.org/license/mit"
          >
            MIT Licensed
          </a>
          .
        </div>
      </p>
      {/*<ul className="flex items-center py-2 gap-2">*/}
      {/*  <li>*/}
      {/*    <LinkedIn />*/}
      {/*  </li>*/}
      {/*  <li>*/}
      {/*    <GithubSocialIcon />*/}
      {/*  </li>*/}
      {/*</ul>*/}
    </footer>
  );
};
