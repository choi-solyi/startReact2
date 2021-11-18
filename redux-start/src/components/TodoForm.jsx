import { useRef } from "react";
// import { connect } from "react-redux";
// import { addTodo } from "../redux/actions";
export default function TodoForm({ add }) {
  const inputRef = useRef();

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={click}>추가</button>
    </div>
  );
  function click() {
    add(inputRef.current.value);
  }
}

// 프레젠테이셔널 컴포넌트 // 멍청한 컴포넌트  : 디자인적 요소가 강함

// 스마트한 컴포넌트
// export default connect(
//   (state) => ({}),
//   (dispatch) => ({
//     add: (text) => {
//       dispatch(addTodo(text));
//     },
//   })
// )(TodoForm);
