import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as counterActions from './modules/counter';
import * as postActions from './modules/post';
//import axios from 'axios';



class App extends Component {

  loadData = async () => {
    const { PostActions, number } = this.props;
    // PostActions.getPost(number);

    try {
      const response = await PostActions.getPost(number);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    // axios.get('https://jsonplaceholder.typicode.com/posts/1')
    // .then(response => console.log(response));
    //.then(json => console.log(json));

    this.loadData();
  }

  componentDidUpdate(prevProps, prevState) {
    //이전numver와 현재number가 다르면 요청을 시작합니다.
    if (this.props.number !== prevProps.number) {
      this.loadData();
    }
  }

  render() {
    const { CounterActions, number, posts, error, loading } = this.props;
    console.log(posts);


    return (
      <div>
        <h1>{number}</h1>
        {
          loading
            ? (<h2>로딩중...</h2>)
            : (
              error
                ? (<h2>오류발생!</h2>)
                : (
                  <div>
                    <h2>{posts.drwNoDate}</h2>
                    <p>{posts.totSellamnt}</p>
                    {/* <p>{post}</p> */}

                  </div>
                )
            )
        }
        <button onClick={CounterActions.increment}>+</button>
        <button onClick={CounterActions.decrement}>-</button>
      </div>
    );
  }
}


export default connect(
  (state) => ({
    number: state.counter,
    posts: state.post.data,
    loading: state.post.pending,
    error: state.post.error
  }),
  (dispatch) => ({
    CounterActions: bindActionCreators(counterActions, dispatch),
    PostActions: bindActionCreators(postActions, dispatch)
  })
)(App);