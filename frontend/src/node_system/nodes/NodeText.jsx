import 'reactflow/dist/style.css';
import './node.css';
import { Handle, Position } from "reactflow";
import { useStore } from "../../store";
import { shallow } from 'zustand/shallow';

const selector = (id) => (store) => ({
    setQuestion: (e) => store.updateNode(id, { question: e.target.value }),
});

function NodeText({ id, data }) {
    const { setQuestion } = useStore(selector(id), shallow);

    return (
        <div className={"node node_text"}>
            <Handle type="target" position={Position.Top} />
            <div>
                <label htmlFor="text">Text Question:</label>
                <textarea id="text" type="text" value={data.question} onChange={setQuestion} className="nodrag" />
            </div>
            <Handle type="source" position={Position.Bottom} id="a" />
        </div>
    );
}

export default NodeText;