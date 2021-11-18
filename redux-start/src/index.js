import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { addTodo, completeTodo, showComplete } from "./redux/actions";
import ReduxContext from "./contexts/ReduxContext";
import { Provider } from "react-redux";
// // 변경사항이 생기는것을 구독
// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// });

// // console.log(store);
// // console.log(store.getState());
// store.dispatch(addTodo("coding"));
// store.dispatch(addTodo("read book"));
// store.dispatch(addTodo("eat"));
// // console.log(store.getState());

// unsubscribe();
// store.dispatch(addTodo("coding"));
// store.dispatch(addTodo("read book"));
// store.dispatch(addTodo("eat"));

// 위 store 개념

// 아래 컴바인리듀서즈
// store.subscribe(() => {
//   console.log(store.getState());
// });
// store.dispatch(addTodo("할일"));
// store.dispatch(completeTodo(0));

// store.dispatch(showComplete());

// 06. 리덕스를 리액트에 연결하기
ReactDOM.render(
  <React.StrictMode>
    {/* <ReduxContext.Provider value={store}>
      <App />
    </ReduxContext.Provider> */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
