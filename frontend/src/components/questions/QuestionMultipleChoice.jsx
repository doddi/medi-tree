import React from "react";
import { useStore } from "../../store";
import { shallow } from "zustand/shallow";

const selector = (store) => ({ 
  nodes: store.nodes, 
  edges: store.edges,
  setCurrentSourceId: store.setCurrentSourceId,
  getCurrentSourceId: store.getCurrentSourceId,
});

function QuestionMultipleChoice({ node }) {
  const store = useStore(selector, shallow);
  const { getCurrentSourceId, setCurrentSourceId } = store;
 
  function getNextQuestion() {
    console.log("Getting next question from multiple choice");
    var edges = getEdgesWithSourceId(getCurrentSourceId());
    // Only get the first element of the array if it exists
    var edge = edges.length > 0 ? edges[0] : null;
    if (edge) {
        console.log("Next question is: ", edge.target);
        setCurrentSourceId(edge.target);
    } else {
        console.log("No more questions");
    }
  }

  function getEdgesWithSourceId(sourceId) {
    return store.edges.filter((edge) => edge.source === sourceId);
  }

  return (
    <div>
      <h1>{node.data.question}</h1>
      <select>
        {node.data.choices.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
      <button onClick={() => getNextQuestion()}>Next</button>
    </div>
  );
};

export default QuestionMultipleChoice;