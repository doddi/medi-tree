import React from "react";
import { useStore } from "../../store";
import { shallow } from "zustand/shallow";

const selector = (store) => ({ 
  nodes: store.nodes, 
  edges: store.edges,
  setCurrentSourceId: store.setCurrentSourceId,
  getCurrentSourceId: store.getCurrentSourceId,
});

function QuestionSlider({ node }) {
    const store = useStore(selector, shallow);
    const { getCurrentSourceId, setCurrentSourceId } = store;

    function getNextQuestion() {
        console.log("Getting next question from slider");

        var edges = getEdgesWithSourceId(getCurrentSourceId());
        // Only get the first element of the array if it exists
        var edge = edges.length > 0 ? edges[0] : null;
        if (edge.length == 0) {
            console.log("No more questions");
        }
        else if (edge.length == 1) {
            console.log("Next question is: ", edge.target);
            setCurrentSourceId(edge.target);
        }
        else {
          // Check if any edge labels are within the value of the slider
          var value = document.querySelector("input[type=range]").value;
          // Only get edges with a label
          var edgesWithLabel = edges.filter((edge) => edge.label);
          for (var i = 0; i < edgesWithLabel.length; i++) {
            var edge = edgesWithLabel[i];
            var label = edge.label;
            var range = label.split("-");
            if (range.length == 2) {
              var min = parseInt(range[0]);
              var max = parseInt(range[1]);
              if (value >= min && value <= max) {
                console.log("Next question is: ", edge.target);
                setCurrentSourceId(edge.target);
                return;
              }
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
      <input type="range" min={node.data.min} max={node.data.max} step={node.data.step}/>
        <button onClick={() => getNextQuestion()}>Next</button>
    </div>
  );
};

export default QuestionSlider;