import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ProjectReadme from "../components/ReademeMD";
import styles from './index.module.css';
import MDXContent from '@theme/MDXContent';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <a 
            className="button button--secondary button--lg"
            href="https://jalzeidi.github.io/tradester-frontend/"
            target="_blank"
          >
            Tradester App 📈
          </a>
          <div>
            <em>
              NOTE: Our backend is a hosted on a free service that spins down after inactivity.
              Requests made for the first time after a period of inactivity will take about 30-60 seconds to return.
              Subsequent requests should be fast.
            </em>
          </div>
        </div>
      </div>
    </header>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />">
        <HomepageHeader/>
        <main>
            <MDXContent>
                <ProjectReadme/>
            </MDXContent>
        </main>
    </Layout>
  );
}
