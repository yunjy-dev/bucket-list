import React from 'react'

const NotFound = (props) => {
    console.log('NotFound props--------')
    console.log(props)
    return (
        <div>
            <h1>올바르지 않은 주소</h1>
            {/* 아래와 같이 하면 바로 실행되어버린다. */}
            {/* <button onClick={props.history.goBack()}></button> */}
            <button onClick={()=>{props.history.goBack();}}>뒤로 가기</button>
        
        </div>
        
        );
}

export default NotFound;