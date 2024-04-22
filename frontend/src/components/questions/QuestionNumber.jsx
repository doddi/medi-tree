import React from "react";
import { useStore } from "../../store";
import { shallow } from "zustand/shallow";

export const selector = (store) => ({ 
  nodes: store.nodes, 
  edges: store.edges,
  setCurrentSourceId: store.setCurrentSourceId,
  getCurrentSourceId: store.getCurrentSourceId,
});

function QuestionNumber({ node }) {
    const store = useStore(selector, shallow);
    const { getCurrentSourceId, setCurrentSourceId } = store;

    function getNextQuestion() {
        console.log("Getting next question");

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
      <input type="number" />
      <button onClick={() => getNextQuestion()}>Next</button>
    </div>
  );
};

export default QuestionNumber;