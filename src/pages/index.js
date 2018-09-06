import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
import Home from './home'


function IndexPage() {
  return (
    <div className={styles.normal}>
        <Home />
    </div>
  );
}

IndexPage.propTypes = {

};

export default connect()(IndexPage);