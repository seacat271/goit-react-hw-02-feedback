import PropTypes from 'prop-types';
const FeedbackOptions = (props) => {
  const {options, onLeaveFeedback} = props;

    return (<div>
{options.map((option) => (
  <button key = {option}
          type="button"
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </button>
))}
      </div>)
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
}