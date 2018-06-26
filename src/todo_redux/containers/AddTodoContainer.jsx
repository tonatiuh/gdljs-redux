import { connect } from 'react-redux'
import { addTodo } from '../actions'
import AddTodo from '../components/AddTodo'

const mapStateToProps = null
const mapDispatchToProps = {
  addTodo
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)
