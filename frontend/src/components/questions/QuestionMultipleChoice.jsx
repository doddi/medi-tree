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
        console.log("Getting next question from slider");

        var edges = getEdgesWithSourceId(getCurrentSourceId());
        // Only get the first element of the array if it exists
        if (edges.length == 0) {
            console.log("No more questions");
            return;
        }
        else if (edges.length == 1) {
            console.log("Next question is: ", edges[0].target);
            setCurrentSourceId(edges[0].target);
            return;
        }
        else {
          // Get selected option index
          var select = document.querySelector("select");
          var selectedOptionIndex = select.selectedIndex;

          // Only get edges with a label
          var edgesWithLabel = edges.filter((edge) => edge.label);
          for (var i = 0; i < edgesWithLabel.length; i++) {
            var edge = edgesWithLabel[i];
            var label = edge.label;
            var option = parseInt(label);
            if (selectedOptionIndex == option) {
              console.log("Next question is: ", edge.target);
              setCurrentSourceId(edge.target);
              return;
            }
          }

          // Get the edge without a label
          var edge = edges.filter((edge) => !edge.label)[0];
          setCurrentSourceId(edge.target);
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