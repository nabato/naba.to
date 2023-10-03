import { GithubSocialIcon, LinkedIn } from '@/components/social-links'

export const Footer = () => {
  return (
    <footer className="prose prose-stone dark:prose-invert flex justify-between container py-2 tracking-tight my-2">
      <p className="py-2 flex">
        <div>©&nbsp;</div>
        <div className="flex flex-wrap">
          <div>
            2023 &nbsp;
            <a className="hover:underline" href="/">
              Vladislav Nabatov
            </a>
            .
          </div>
          &nbsp;
          <div>
            Licensed under the &nbsp;
            <a className="hover:underline" href="https://github.com/nabato/naba.to/blob/main/LICENSE">
              MIT License
            </a>
            .
          </div>
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
  )
}
