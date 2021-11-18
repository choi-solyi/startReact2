import { SHOW_ALL, SHOW_COMPLETE } from "../actions";
// prevState가 undefined일때 initialState로 지정

const initialState = "ALL";
export default function filter(prevState = initialState, action) {
  //초기값 설정
  // if (prevState === undefined) {
  //   return [];
  // }

  if (action.type === SHOW_COMPLETE) {
    return "COMPLETE";
  }
  if (action.type === SHOW_ALL) {
    return "ALL";
  }
  return prevState;
}
