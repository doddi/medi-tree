import 'reactflow/dist/style.css';
import './node.css';
import { useCallback, useState } from "react";
import { Handle, Position } from "reactflow";
import { useStore } from "../../store";
import { shallow } from 'zustand/shallow';

const selector = (id) => (store) => ({
    setQuestion: (question) => store.updateNode([{ id, data: { ...question } }]),
    setChoices: (choices) => store.updateNode([{ id, data: { ...choices } }]),
});

function NodeMultipleChoice({ id, data }) {
    const { setQuestion, setChoices } = useStore(selector(id), shallow);

    const onChangeChoice = useCallback((e) => {
        console.log("Choice changed to: ", e.target.value);
        setChoice(e.target.value);
    }, []);

    const updateChoices = useCallback((choice) => {
        setChoices([...data.choices, choice]);
        setChoice("");
    }, [data.choices]);

    const [choice, setChoice] = useState("");
    
    return (
        <div className={"node node_multiplechoice"}>
            <Handle type="target" position={Position.Top} />
            <div>
                <label htmlFor="text">Multiple Choice Question:</label>
                <input id="text" type="text" value={data.question} onChange={setQuestion} className="nodrag" />
                <div>
                    <label>Options:</label>
                    <ul>
                    {data.choices.map((choice, index) => {
                        return <li key={index} id="choice" className="nodrag">{choice}</li>
                    })}
                    </ul>
                    <label htmlFor="item">New option:</label>
                    <input id="item" type="text" value={choice} onChange={onChangeChoice} className="nodrag" />
                    <button onClick={() => updateChoices(choice)}>Add choice</button>
                </div>
            </div>
            <Handle type="source" position={Position.Bottom} id="a" />
        </div>
    );
}

export default NodeMultipleChoice;