import { applyMiddleware, createStore } from "redux";
import todoApp from "./reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

// function middleware1(store) {
//   console.log("미들웨어1의 ", 0);
//   return (next) => {
//     console.log("미들웨어1의 ", 1, next);
//     return (action) => {
//       console.log("미들웨어1의 ", 2);
//       const returnValue = next(action);
//       console.log("미들웨어1의", 3);
//       return returnValue;
//     };
//   };

//   // 실행 순서가 0 1 2 3 2 3
// }

// function middleware2(store) {
//   console.log("미들웨어2의 ", 0);
//   return (next) => {
//     console.log("미들웨어2의 ", 1, next);
//     return (action) => {
//       console.log("미들웨어2의 ", 2);
//       const returnValue = next(action);
//       console.log("미들웨어2의", 3);
//       return returnValue;
//     };
//   };

//   // 실행 순서가 m1의0, m2의 0 ~
// }

// const store = createStore(todoApp, applyMiddleware(middleware1, middleware2));
const store = createStore(todoApp, composeWithDevTools(applyMiddleware(thunk, promise)));

export default store;
