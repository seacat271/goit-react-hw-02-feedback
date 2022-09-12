import {Component} from "react";


class FeedbackCounter extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

    feedbackGoodIncrement = () => {
       this.setState((prevState) => {
        return {
           good: prevState.good + 1,
        }
       })
    }

    feedbackNeutralIncrement = () => {
        this.setState((prevState) => {
            return {
              neutral: prevState.neutral + 1,
            }
           })
    }

    feedbackBadIncrement = () => {
        this.setState((prevState) => {
            return {
              bad: prevState.bad + 1,
            }
           })
    }

    countTotalFeedback = () => {
        return Object.values(this.state).reduce((acc, item) => acc + item, 0)
    }

    countPositiveFeedbackPercentage = () => {
        return (Math.round(this.state.good * 100 / this.countTotalFeedback()) + "%")
    }

    render() { 
        return (<>
            <h1>Please leave feedback</h1>
            <div>
        <button type="button" onClick={
            () => {
                this.feedbackGoodIncrement()
            }
        }>Good</button>

        <button type="button"
        onClick={
            () => {
                this.feedbackNeutralIncrement()
            }
        }>Neutral</button>

        <button type="button"
        onClick={
            () => {
                this.feedbackBadIncrement()
            }
        }>Bad</button>
    </div>
    <div>
            <h2>Statistic</h2>
            <p>Good: <span>{this.state.good}</span></p>
            <p>Neutral: <span>{this.state.neutral}</span></p>
            <p>Bad: <span>{this.state.bad}</span></p>
            <p>Total:<span>{this.countTotalFeedback()}</span></p>
            <p>Positive feedback:<span>{this.countPositiveFeedbackPercentage()}</span></p>
        </div>
            </>
        )
    }
}


export default FeedbackCounter;