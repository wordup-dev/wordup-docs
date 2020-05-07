import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>CLI</>,
    description: (
      <>
        Wordup has a CLI, which 
      </>
    ),
  },
  {
    title: <>Console</>,
    description: (
      <>
        Manage all your plugins and themes in a clean and easy to use 
      </>
    ),
  },
  {
    title: <>Powered by React</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The fully integrated development platform for WordPress.">
      <header className={classnames('hero', styles.heroBanner)}>
        <div className="container">
          <div className="row row--align-center">
            <div className="col col--6">
                <h1 className="hero__title">{siteConfig.title}</h1>

                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                  <Link
                    className={classnames(
                      'button button--secondary button--lg margin-right--md',
                      styles.getStarted,
                    )}
                    to={useBaseUrl('docs/setup/introduction')}>
                    Get Started
                  </Link>
                  <a
                    className={classnames(
                      'button button--outline button--secondary button--lg',
                      styles.getStarted,
                    )}
                    href="https://wordup.dev">
                      Visit wordup.dev
                  </a>
                </div>
            </div>
            <div className="col text--center">
              <img src={useBaseUrl('img/logo_header.svg')} alt={siteConfig.title} className={styles.logo} />
            </div>
          </div>
        </div>
      </header>
    </Layout>
  );
}

export default Home;
