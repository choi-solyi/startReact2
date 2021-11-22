import logo from "./logo.svg";
import "./App.css";
// import { addTodo } from "./redux/actions";
// import useReduxState from "./hooks/useReduxState";
// import useReduxDispatch from "./hooks/useReduxDispatch";
// import TodoList from "./components/TodoList";
// import TodoForm from "./components/TodoForm";
import TodoListContainer from "./containers/TodoListContainer";
import TodoFormContainer from "./containers/TodoFormContainer";
import { GET_USERS_FAIL } from "./redux/actions";
import UserListContainer from "./containers/UserListContainer";

function App() {
  // const state = useReduxState();
  // const dispatch = useReduxDispatch();
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <UserListContainer />

        <TodoListContainer />
        <TodoFormContainer />
        {/* {JSON.stringify(state)} */}
        {/* <button onClick={click}>할일추가</button> */}
      </header>
    </div>
  );

  // function click() {
  //   dispatch(addTodo("todo~ "));
  // }
}

export default App;
