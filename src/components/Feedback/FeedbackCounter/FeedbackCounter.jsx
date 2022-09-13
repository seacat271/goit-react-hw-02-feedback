import { Component } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Section from "../Section/Section";
import Notification from "../Notification/Notification"

class FeedbackCounter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  
  feedbackIncrement = (stateKind) => {
    this.setState(prevState => {
      return {
       [stateKind]: prevState[stateKind] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return (
      Math.round((this.state.good * 100) / this.countTotalFeedback()) + '%'
    );
  };

  render() {
    return (
      <>
    <Section title = "Please leave feedback" >
        <FeedbackOptions
            onLeaveFeedback = {this.feedbackIncrement}
            options = {Object.keys(this.state)}
        />
    </Section>
        <Section title = "Statistic" >
            {this.countTotalFeedback() === 0
            ? <Notification
            message="There is no feedback"/>
            : <Statistics 
            good={this.state.good} 
            neutral={this.state.neutral}
            bad = {this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage = {this.countPositiveFeedbackPercentage()}
            />}
        </Section>
      </>
    );
  }
}


export default FeedbackCounter;


