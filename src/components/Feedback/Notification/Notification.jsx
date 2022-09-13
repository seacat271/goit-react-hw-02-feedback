import PropTypes from 'prop-types';
const Notification = (props) => {
    const {message} = props;
 return (<p>{message}</p>)
}
export default Notification;

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}