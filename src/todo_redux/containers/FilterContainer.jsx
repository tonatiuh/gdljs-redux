import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Filter from '../components/Filter'

const mapStateToProps = (state) => ({
  visibilityFilter: state.visibilityFilter
})

const mapDispatchToProps = {
  setVisibilityFilter
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)
