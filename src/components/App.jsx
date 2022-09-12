
import FeedbackCounter from "./Feedback/FeedbackCounter/FeedbackCounter";
import Buttons from "../components/Feedback/Buttons/Buttons";
import Statistics from "../components/Feedback/Statistics/Statistics";

export const App = () => {
  return (
    <div>
   <FeedbackCounter>
      <Buttons/>
      <Statistics/>
   </FeedbackCounter>
    </div>
  );
};
