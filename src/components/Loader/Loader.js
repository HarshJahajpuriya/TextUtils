import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import React from 'react';
import './Loader.component.css'

const Loader = (props) => {

  const [loading, setLoading] = React.useState(true);

  const show = () => {
    setLoading(true);
  }

  const hide = () => {
    setLoading(false);
  }

  return <>
    <Modal show={loading}>
      <div className={`text-center align-middle h-100 text-light`}>
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </Modal>
  </>
}

Loader.propTypes = {
  loading: PropTypes.bool
}

Loader.defaultProps = {
  loading: false
}

export default Loader;