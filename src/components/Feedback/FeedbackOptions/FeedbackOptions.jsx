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