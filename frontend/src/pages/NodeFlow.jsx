import 'reactflow/dist/style.css';
import ReactFlow, { Background, Panel } from 'reactflow';
import NodeText from '../components/nodes/NodeText';
import NodeNumber from '../components/nodes/NodeNumber';
import NodeSlider from '../components/nodes/NodeSlider';
import NodeMultileChoice from '../components/nodes/NodeMultipleChoice';
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
        const response = await fetch('http://localhost:8080/api/nodes');
        const data = await response.json();
        // // TODO: need to validate the data
      // const nodes = [
      //     {
      //         id: '1',
      //         type: 'nodeText',
      //         data: { question: 'text question' },
      //         position: { x: 300, y: 125 }
      //     },
      //     {
      //         id: '2',
      //         type: 'nodeSlider',
      //         data: { question: 'slider question', min: 0, max: 100, step: 1 },
      //         position: { x: 200, y: 250 }
      //     },
      //     {
      //         id: '3',
      //         type: 'nodeMultipleChoice',
      //         data: { question: 'multiple choice question', choices: ["test1"] },
      //         position: { x: 300, y: 450 }
      //     },
      //     {
      //         id: '4',
      //         type: 'nodeNumber',
      //         data: { question: 'number question' },
      //         position: { x: 100, y: 450 }
      //     }
      // ];
      // const edges = [
      // { id: 'e1-2', source: '1', target: '2' },
      // { id: 'e2-4', source: '2', target: '4' },
      // { id: 'e1-3', source: '1', target: '3' }
      // ];
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

  const nodeTypes = useMemo(() => ({ 
      TEXT: NodeText, 
      NUMBER: NodeNumber, 
      SLIDER: NodeSlider,
      MULTIPLE_CHOICE: NodeMultileChoice 
  }), []);

  return (
    <div className="App">
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
          </Panel>
          <Background/>
        </ReactFlow> 
        )
      }
    </div>
  );
}

export default NodeFlow;