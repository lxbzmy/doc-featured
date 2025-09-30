import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '连接设置',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        学习如何配置网络连接、设置 DNS 和浏览器环境，确保 DevOps 环境的顺利搭建。
      </>
    ),
  },
  {
    title: '资源池管理',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        了解构建资源池和测试环境的配置，包括服务器分配和团队资源管理。
      </>
    ),
  },
  {
    title: '常见问题解答',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        解决常见的 SSL 错误、工具配置问题和其他 DevOps 实践中的疑难杂症。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
