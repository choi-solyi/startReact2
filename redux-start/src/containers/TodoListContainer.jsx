import { useSelector } from "react-redux";
// import { connect } from "react-redux";
import TodoList from "../components/TodoList";

// const mapStateToProps = (state) => {
//   return {
//     todos: state.todos,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

// const TodoListContainer = connect(
//   //state 를 받아 어떤 props로?
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoList);

function TodoListContainer() {
  const todos = useSelector((state) => state.todos);

  return <TodoList todos={todos} />;
}

export default TodoListContainer;
