import React, { ReactElement, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './PopupTabs.module.scss';
const cx = classNames.bind(styles);

type Props = { tabs: { header: string; tab: ReactElement }[] };

export const PopupTabs = ({ tabs }: Props) => {
  const headers = tabs.map((tab) => tab.header);
  const tabItems = tabs.map((tab) => tab.tab);
  const headerWidth = Math.round(100 / headers.length);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.tabs}>
      <div className={styles.headers}>
        {headers.map((header, index) => (
          <div
            key={index}
            className={cx('headers__item', {
              headers__item_active: activeTab === index,
            })}
            onClick={() => setActiveTab(index)}
          >
            {header}
          </div>
        ))}
        <div
          className={styles.headers__line}
          style={{
            width: `${headerWidth}%`,
            left: `${headerWidth * activeTab}%`,
          }}
        />
      </div>
      <div className={styles.tabs}>{tabItems[activeTab]}</div>
    </div>
  );
};
