import 'reactflow/dist/style.css';
import './node.css';
import { useCallback, useState } from "react";
import { Handle, Position } from "reactflow";
import { useStore } from "../../store";
import { shallow } from 'zustand/shallow';

const selector = (id) => (store) => ({
    setQuestion: (e) => store.updateNode(id, { question: e.target.value }),
    setChoices: (e) => store.updateNode(id, { choices: e }),
});

function NodeMultipleChoice({ id, data }) {
    const { setQuestion, setChoices } = useStore(selector(id), shallow);

    const onChangeChoice = useCallback((e) => setChoice(e.target.value), []);

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
                <textarea id="text" value={data.question} onChange={setQuestion} className="nodrag" />
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