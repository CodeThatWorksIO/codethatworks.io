import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (

    <div className="container mx-auto text-center py-10 px-4">
      <section className="mb-12 mt-12">
        <h2 className="text-3xl font-semibold">Join the Movement</h2>
        <p className="mt-3 text-lg">Together, we can tackle the world's biggest problems through the power of code.</p>
        <div className="mt-6 flex justify-center gap-6">
          <a href="https://discord.gg/nrgs7p8Q" className="bg-blue-500 px-5 py-3 rounded-lg text-white hover:bg-blue-600">Join Discord</a>
          <a href="https://x.com/codethatworksio" className="bg-gray-700 px-5 py-3 rounded-lg text-white hover:bg-gray-800">Follow on Twitter</a>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold">Read the Blog</h2>
        <p className="mt-3 text-lg">Stay updated with the latest in software development and problem-solving strategies.</p>
        <a href="https://blog.codethatworks.io" className="mt-6 inline-block bg-green-500 px-5 py-3 rounded-lg text-white hover:bg-green-600">Visit Blog</a>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold">Our Vision</h2>
        <p className="mt-3 text-lg">We believe that if coders unite, there’s nothing we can’t accomplish. Whether it’s improving education, tackling climate change, or advancing technology, we can make a difference—together.</p>
      </section>
    </div>
  );
}
