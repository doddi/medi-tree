import React from "react";
import { useEffect } from "react";
import { useStore } from "../store";
import { shallow } from "zustand/shallow";

import QuestionMultipleChoice from "../components/questions/QuestionMultipleChoice";
import QuestionNumber from "../components/questions/QuestionNumber";
import QuestionSlider from "../components/questions/QuestionSlider";
import QuestionText from "../components/questions/QuestionText";

const selector = (store) => ({ 
  nodes: store.nodes, 
  edges: store.edges,
  onNodeChange: store.onNodeChange, 
  onNodeDelete: store.onNodeDelete,
  onEdgeChange: store.onEdgeChange, 
  onEdgeDelete: store.onEdgeDelete,
  addEdge: store.addEdge,
  addNode: store.addNode,
  setNodes: store.setNodes,
  setEdges: store.setEdges,
  loading: store.loading,
  setLoading: store.setLoading,
  setCurrentSourceId: store.setCurrentSourceId,
  getCurrentSourceId: store.getCurrentSourceId,
  currentSourceId: store.currentSourceId,
});

function Run() {
  const store = useStore(selector, shallow);
  const { setNodes, setEdges, setLoading, getCurrentSourceId, setCurrentSourceId } = store;

  useEffect(() => {
    const fetchNodes = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/nodes');
        const data = await response.json();
        setNodes(data.nodes);
        setEdges(data.edges);
        setCurrentSourceId(data.nodes[0].id);
      } catch (error) {
        console.error("Error fetching nodes:", error);
      } finally {
        // console.log(store.nodes);
        setLoading(false);
      }
    };
    fetchNodes();
  }, [setNodes, setEdges, setLoading, setCurrentSourceId]);

  function getNodeWithId(id) {
    return store.nodes.find((node) => node.id === id);
  }

  function displayNodeWithId(id) {
    var node = getNodeWithId(id);
    switch (node.type) {
      case "TEXT":
        console.log("Displaying text node");
        return <QuestionText node={node} />;
      case "NUMBER":
        console.log("Displaying number node");
        return <QuestionNumber node={node} />;
      case "SLIDER":
        console.log("Displaying slider node");
        return <QuestionSlider node={node} />;
      case "MULTIPLE_CHOICE":
        console.log("Displaying multiple choice node");
        return <QuestionMultipleChoice node={node} />;
      default:
        return <p>Invalid node type</p>;
    }
  }

  function displayNode() {
    if (getCurrentSourceId() === undefined) {
      return <p>Invalid source id</p>;
    }

    console.log("Current source id to display: ", getCurrentSourceId());
    return ( 
      <div>
        <div>{displayNodeWithId(getCurrentSourceId())}</div>
      </div>
    );
  };

  return (
      <div>
          { store.loading ? (
              <h1>Loading...</h1>
          ) : (
              <div>{displayNode()}</div>
          )
          }
      </div>
  );
}

export default Run;