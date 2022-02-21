import PropTypes from 'prop-types'

const header = (props) => {
  return (
    <div className='header-app'>
        <h1>{props.title}</h1>
    </div>
  )
}

header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default header
