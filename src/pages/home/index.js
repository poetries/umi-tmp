import React from 'react';
import { connect } from 'dva';
import styles from './index.scss';
import Link from 'umi/link';

class Home extends React.Component {
  render() {
    const { dispatch, count, poetry } = this.props;
    
    return (
      <div>
      <div> <Link to="/home">Go to Home page</Link></div>
      <div> <Link to="/users">Go to users page</Link></div>
       <div className={styles.normal}>
        <div className={styles.record}>
         Highest Record: {count.record} 
        </div>
        <div className={styles.current}>
         {count.current}
        </div>
        <div className={styles.button}>
          <button onClick={() => dispatch({ type: 'count/add' }) } >
                 +
          </button>
          <button onClick={() => dispatch({ type: 'count/minus' }) } >
                 -
          </button>
          <button onClick={() => dispatch({ type: 'count/addAsync' }) } >
              async
          </button>
          <button onClick={() => dispatch({ type: 'poetry/fetchPoetry' }) } >
            fetch
         </button>
        </div>
      </div>
      
      {poetry && poetry.poetryList && poetry.poetryList.length>0 &&
        poetry.poetryList.map(v=><div key={Math.random()}>{v.author}-{v.poetry_body}-{v.poetry_title}</div>)
      }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    count: state.count,
    poetry:state.poetry
  };
} // 获取state

export default connect(mapStateToProps)(Home);

