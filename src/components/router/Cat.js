import React from 'react';

const Cat = (props) => {
    console.log(props.match);//라우터에서 주소로 넘겨준 파라미터를 확인
    return (
        <div>Cat.js for {props.match.params.cat_name }</div>
    )
}
export default Cat;