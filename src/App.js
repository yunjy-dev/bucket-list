import React from 'react';
import logo from './logo.svg';
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from './components/BucketList';
// import './style.css';
import './scss/style.scss';
import styled from 'styled-components';
import LifecycleEx from './components/LifeCycle';
import Nemo from './components/Nemo';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Home from './components/router/Home';
import Cat from './components/router/Cat';
import Dog from './components/router/Dog';
import {withRouter} from'react-router'; //history기반의 함수로 페이지전환

import Detail from './components/Detail'
import NotFound from './components/NotFound'



import {connect} from 'react-redux';
import {loadBucket, createBucket, deleteBucket} from './redux/modules/bucket'
const mapStateToProps = (state) => {
  return {bucket_list: state.bucket.list};
}
const mapDispatchToProps = (dispatch) => {
  return {
    load: () => {
      dispatch(loadBucket());
    },
    create: (bucket) => {
      dispatch(createBucket(bucket));
    },
    // delete: (bucket) => {
    //   dispatch(deleteBucket(bucket));
    // }
  };
}

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {

  constructor(props){
    super(props);
    // App 컴포넌트의 state를 정의해줍니다.
    this.state = {
      list: ['영화관 가기', '매일 책읽기', '수영 배우기'],
      component_is_show: true,
    };
    this.text = React.createRef();  //input 값은 Ref에 저장
  }

  componentDidMount(){
    console.log("====componentDidMount(){====");
    console.log(this.text);
    console.log(this.text.current);
    console.log(this.props);

  }

  handleClick(e) {
    // alert()
    this.saySomething("element clicked");
  }
  saySomething(something) {
    // alert()
    console.log(something);
  }
  set_component_is_show(e){
    this.saySomething("asdfasdfsad")
    // alert();
    
    console.log('set_component_is_show');
    // this.state.component_is_show=false
    this.setState({component_is_show:false});
  }

  addBucketList = () => {
    // let list = this.state.list;//1차에서는 this.state에서 가져온다
    let list = this.props.bucket_list//2차에서는 아래와 같이 redux를 이용해서 가져온다.
    this.props.create(this.text.current.value);
    const new_item = this.text.current.value;
    //추가아이템 가져와서 setState()
    this.setState({list: [...list, new_item]});//배열에 추가하는 스프레드 문법
  }
  
  goToPage = (link) => {
    console.log("----link---");
    console.log(link);
    this.props.history.push(link);
  
  }
  goToBack = () => {
    this.props.history.goBack();
  }

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    // this 키워드를 통해 state에 접근할 수 있어요.
    console.log("render!!!!!!!!")
    console.log(this.state);

      return (
      <div className="App">
        <Nemo/>
        <div className="container">
            <h1 className="title">내 버킷리스트</h1>
            <hr className="line"/>
            {/* 컴포넌트를 넣어줍니다. */}
            {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
            {/* <BucketList list={this.state.list} bgColor={'red'}/> */}
            {/* {component_is_show? ():null} */}
            {this.state.component_is_show? (<LifecycleEx></LifecycleEx>):null}
            <button onClick={this.set_component_is_show.bind(this)}>없어져라 컴포넌트</button>
            <button onClick={this.handleClick.bind(this)} value="Click me">sdfasdf</button>


            <Switch>
              {/* <BucketList list={this.state.list} /> */}
              {/* 아래는 redux사용 , mapStateToProps*/}
              {/* <Route path='/' exact render={(props)=> <BucketList list={this.props.bucket_list} />}></Route> */}

              {/* history가 넘어간 BucketList  */}
              <Route path='/' exact render={(props)=> <BucketList history={this.props.history} list={this.props.bucket_list} />}></Route>
              {/* <Route path='/detail' component={Detail}/> */}

              {/* 아래와 같이 index넘겨주는거 app과 BucketList history, detail의 props 3군데에서 변경해야한다. */}
              <Route path='/detail/:index' component={Detail}/>

              {/* <Route component={NotFound}/> */}
              <Route render={(props) => (<NotFound history={this.props.history}/>)}></Route>
            </Switch>
            {/* 독립BucketList */}
            {/* <BucketList  history={this.props.history} list={this.props.bucket_list} /> */}
            <input type="text" ref={this.text}></input><button onClick={this.handleClick.bind(this)} value="Click me">추가</button>
            <Input>
              <input type="text" ref={this.text}></input>
              <button onClick={this.addBucketList} value="Click me">추가</button>
            </Input>
        </div>

        <StyleTest>
        </StyleTest>
        {/* 1/3. 주소로 페이지처리 */}
        {/* <Route path='/' component={Home}/> */}
        {/* 중복주소처리 */}
        <Route exact path='/' component={Home}/>
        <Route exact path='/cat' component={Cat}/>
        <Route path='/cat/:cat_name' component={Cat}/>
        <Route path='/dog' component={Dog}/>
        <button onClick={this.goToPage.bind(this,'/cat')} >/cat By button with history.push()</button>
        <button>/dog By button with history.push()</button>
        <button onClick={this.goToBack.bind()}>/goBack By button with history.push()</button>
        {/* <button onClick={()=>{this.props.history.goBack();}}>goBack</button> */}

        {/* 2/3. Link컴포넌트로 페이지처리 */}
        <div>
          <Link to='/'>Home으로 가기</Link>
          <Link to='/cat'>cat으로 가기</Link>
          <Link to='/cat/nabi'>cat/nabi으로 가기</Link>
          <Link to='/dog'>dog으로 가기</Link>
        </div>

        {/* 3/3. history기반의 함수로 페이지처리 */}


          

        <Router>
          <div className="router">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home1</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/">
                <Home1 />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}



function Home1() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

// export default App;
// export default withRouter(App);
// export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));

const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #eee;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;


const StyleTest = styled.div`
  width:100px;
  height:100px;
  // background-color:red;
  // background-color: ${(props) => props.bgColor};
  background-color: ${(props) => props.bgColor? "red":"purple"};
`