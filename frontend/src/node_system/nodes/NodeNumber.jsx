import 'reactflow/dist/style.css';
import './node.css';
import { useCallback } from "react";
import { Handle, Position } from "reactflow";

function NodeNumber({ text }) {
    const onChange = useCallback((e) => {
        console.log("Text changed to: ", e.target.value);
    }, []);
    
    return (
        <div className={"node node_number"}>
            <Handle type="target" position={Position.Top} />
            <div>
                <label htmlFor="text">Number Question:</label>
                <input id="text" type="text" value={text} onChange={onChange} className="nodrag" />
            </div>
            <Handle type="source" position={Position.Bottom} id="a" />
        </div>
    );
}

export default NodeNumber;