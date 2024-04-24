import 'reactflow/dist/style.css';
import './NodeFlow.css';
import ReactFlow, { Background, Panel } from 'reactflow';
import NodeText from './nodes/NodeText';
import NodeNumber from './nodes/NodeNumber';
import NodeSlider from './nodes/NodeSlider';
import NodeMultileChoice from './nodes/NodeMultipleChoice';
import { useMemo, useEffect } from 'react';

import { useStore } from '../store';
import { shallow } from 'zustand/shallow';

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
});

function NodeFlow() {
  const store = useStore(selector, shallow);
  const { setNodes, setEdges, setLoading } = store;

  useEffect(() => {
    const fetchNodes = async () => {
      try {
        // const response = await fetch('http://localhost:8080/api/nodes');
        const response = await fetch('http://medi-tree-latest.onrender.com/api/nodes');
        const data = await response.json();
        setNodes(data.nodes);
        setEdges(data.edges);
      } catch (error) {
        console.error("Error fetching nodes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNodes();
  }, [setNodes, setEdges, setLoading]);

  function saveNodeSystem(nodes, edges) {
    // fetch('http://localhost:8080/api/nodes', {
    fetch('http://medi-tree-latest.onrender.com/api/nodes', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nodes, edges }),
    })
      .then(response => response.json())
      .then(data => console.log('Success:', data))
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const nodeTypes = useMemo(() => ({ 
      TEXT: NodeText, 
      NUMBER: NodeNumber, 
      SLIDER: NodeSlider,
      MULTIPLE_CHOICE: NodeMultileChoice 
  }), []);

  return (
    <div className="NodeFLow">
      { store.loading ? (
         <h1>Loading...</h1>
        ) : (
        <ReactFlow 
          nodes={store.nodes} 
          edges={store.edges}
          nodeTypes={nodeTypes}
          onNodesChange={store.onNodeChange}
          onNodesDelete={store.onNodeDelete}
          onEdgesChange={store.onEdgeChange}
          onEdgesDelete={store.onEdgeDelete}
          onConnect={store.addEdge}
        >
          <Panel position="top-right">
            <button className='panel-button' onClick={() => store.addNode("text")}>Add Text</button>
            <button className='panel-button' onClick={() => store.addNode("number")}>Add Number</button>
            <button className='panel-button' onClick={() => store.addNode("slider")}>Add Slider</button>
            <button className='panel-button' onClick={() => store.addNode("multi")}>Add MultiChoice</button>
            <button className='panel-button' onClick={() => saveNodeSystem(store.nodes, store.edges)}>Save</button>
          </Panel>
          <Background/>
        </ReactFlow> 
        )
      }
    </div>
  );
}

export default NodeFlow;