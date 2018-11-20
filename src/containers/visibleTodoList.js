import { connect } from 'react-redux'
import TodoList from '../components/todoList'

function mapState(state) {
  return {
    list: state.todo
  }
}

// function mapDispatchProps(dispatch) {

// }

export default connect(mapState)(TodoList)