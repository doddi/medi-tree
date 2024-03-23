import 'reactflow/dist/style.css';
import ReactFlow, { Background, Controls } from 'reactflow';
import NodeText from './nodes/NodeText';
import NodeNumber from './nodes/NodeNumber';
import NodeSlider from './nodes/NodeSlider';
import NodeMultileChoice from './nodes/NodeMultipleChoice';
import { useMemo } from 'react';

const nodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Hello' },
    position: { x: 250, y: 25 }
  },
  {
    id: '2',
    data: { label: 'World' },
    position: { x: 100, y: 125 }
  },
  {
    id: '3',
    type: 'nodeText',
    data: { text: 'test' },
    position: { x: 300, y: 125 }
  },
  {
    id: '4',
    type: 'nodeSlider',
    data: { text: 'test' },
    position: { x: 200, y: 250 }
  },
  {
    id: '5',
    type: 'nodeMultipleChoice',
    data: { text: 'test' },
    position: { x: 300, y: 450 }
  },
  {
    id: '6',
    type: 'nodeNumber',
    data: { text: 'test' },
    position: { x: 100, y: 450 }
  }
];

const edges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' }
];


function NodeFlow() {
    const nodeTypes = useMemo(() => ({ 
        nodeText: NodeText, 
        nodeNumber: NodeNumber, 
        nodeSlider: NodeSlider,
        nodeMultipleChoice: NodeMultileChoice 
    }), []);

  return (
    <div className="App">
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes}>
        <Background />
        <Controls />
      </ReactFlow> 
    </div>
  );
}

export default NodeFlow;