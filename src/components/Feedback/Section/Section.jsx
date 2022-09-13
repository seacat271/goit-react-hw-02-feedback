import PropTypes from 'prop-types';
const Section = (props) => {
const {title, children} = props;
    return (<>
    <h1>{title}</h1>
    {children}</>
    )
}

export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}
