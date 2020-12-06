import { h } from 'preact';
import { Helmet } from 'react-helmet';
import { MDXProvider } from '@mdx-js/preact';
import { Logo } from './components/logo.js';

const components = {
  codeblock: (props) => (
    <div dangerouslySetInnerHTML={{ __html: props.children }} />
  ),
};
export default function PageWrapper(props) {
  return (
    <MDXProvider components={components}>
      <Helmet>
        <html lang="en" />

        <link rel="preconnect" href="https://res.cloudinary.com" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/styles.css" />
      </Helmet>
      <svg class="svg-defs">
        <defs>
          <linearGradient
            id="lwj-gradient"
            x1="0"
            x2="100%"
            y1="100%"
            y2="100%"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stop-color="#D459AB" />
            <stop offset=".5" stop-color="#FFDF37" />
            <stop offset="1" stop-color="#A6FFFA" />
            <stop offset="1" stop-color="#A6FFFA" />
            <stop offset="1" stop-color="#A6FFFA" />
          </linearGradient>
        </defs>
      </svg>
      <header class="header">
        <a href="/" rel="home">
          <Logo />
        </a>
        <nav>
          <a href="/">episodes</a>
          <a href="/">schedule</a>
          <a href="/">courses</a>
          <a href="/">store</a>
          <a href="/">blog</a>
          <a href="/">about</a>
          <a href="/">search</a>
        </nav>
      </header>
      <main>{props.children}</main>
    </MDXProvider>
  );
}
