import 'reactflow/dist/style.css';
import './node.css';
import { useCallback } from "react";
import { Handle, Position } from "reactflow";

function NodeSlider({ text, min, max, step}) {
    const onChange = useCallback((e) => {
        console.log("Text changed to: ", e.target.value);
    }, []);
    
    return (
        <div className={"node node_slider"}>
            <Handle type="target" position={Position.Top} />
            <div>
                <label htmlFor="text">Ranged Question:</label>
                <input id="text" type="text" value={text} onChange={onChange} className="nodrag" />
                <div>
                    <label htmlFor="min">Min:</label>
                    <input id="min" type="number" value={min} onChange={onChange} className="nodrag" />
                    <label htmlFor="max">Max:</label>
                    <input id="max" type="number" value={max} onChange={onChange} className="nodrag" />
                    <label htmlFor="step">Step:</label>
                    <input id="step" type="number" value={step} onChange={onChange} className="nodrag" />
                </div>
            </div>
            <Handle type="source" position={Position.Bottom} id="a" />
        </div>
    );
}

export default NodeSlider;