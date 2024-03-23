import 'reactflow/dist/style.css';
import './node.css';
import { useCallback, useState } from "react";
import { Handle, Position } from "reactflow";


function NodeMultipleChoice({ text }) {
    function addChoice(value) {
        console.log("Added choice");
        setChoices([...choices, value]);
        setChoice("");
    }

    const onChange = useCallback((e) => {
        console.log("Text changed to: ", e.target.value);
    }, []);

    const onChangeChoice = useCallback((e) => {
        console.log("Choice changed to: ", e.target.value);
        setChoice(e.target.value);
    }, []);

    const [choice, setChoice] = useState("");
    const [choices, setChoices] = useState([]);
    
    return (
        <div className={"node node_multiplechoice"}>
            <Handle type="target" position={Position.Top} />
            <div>
                <label htmlFor="text">Multiple Choice Question:</label>
                <input id="text" type="text" value={text} onChange={onChange} className="nodrag" />
                <div>
                    {choices.map((choice, index) => {
                        return (
                            <div key={index}>
                                <label htmlFor="choice">Options:</label>
                                <input id="choice" type="text" value={choice} onChange={onChange} className="nodrag" />
                            </div>
                        )
                    })}
                    <label htmlFor="item">New option:</label>
                    <input id="item" type="text" value={choice} onChange={onChangeChoice} className="nodrag" />
                    <button onClick={() => addChoice(choice)}>Add choice</button>
                </div>
            </div>
            <Handle type="source" position={Position.Bottom} id="a" />
        </div>
    );
}

export default NodeMultipleChoice;