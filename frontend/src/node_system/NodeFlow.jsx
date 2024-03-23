import 'reactflow/dist/style.css';
import ReactFlow, { Background, Panel } from 'reactflow';
import NodeText from './nodes/NodeText';
import NodeNumber from './nodes/NodeNumber';
import NodeSlider from './nodes/NodeSlider';
import NodeMultileChoice from './nodes/NodeMultipleChoice';
import { useMemo } from 'react';

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
  addNode: store.addNode 
});

function NodeFlow() {
  const store = useStore(selector, shallow);

    const nodeTypes = useMemo(() => ({ 
        nodeText: NodeText, 
        nodeNumber: NodeNumber, 
        nodeSlider: NodeSlider,
        nodeMultipleChoice: NodeMultileChoice 
    }), []);

  return (
    <div className="App">
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
    </div>
  );
}

export default NodeFlow;