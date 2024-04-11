import 'reactflow/dist/style.css';
import './node.css';
import { Handle, Position } from "reactflow";
import { useStore } from '../../store';
import { shallow } from 'zustand/shallow';

const selector = (id) => (store) => ({
    setQuestion: (e) => store.updateNode(id, { question: e.target.value }),
    setMin: (e) => store.updateNode(id, { min: e.target.value }),
    setMax: (e) => store.updateNode(id, { max: e.target.value }),
    setStep: (e) => store.updateNode(id, { step: e.target.value }),
});

function NodeSlider({ id, data }) {
    const { setQuestion, setMin, setMax, setStep } = useStore(selector(id), shallow);
    
    return (
        <div className={"node node_slider"}>
            <Handle type="target" position={Position.Top} />
            <div>
                <label htmlFor="text">Ranged Question:</label>
                <textarea id="text" value={data.question} onChange={setQuestion} className="nodrag" />
                <div>
                    <label htmlFor="min">Min:</label>
                    <input id="min" type="number" value={data.min} onChange={setMin} className="nodrag" />
                    <label htmlFor="max">Max:</label>
                    <input id="max" type="number" value={data.max} onChange={setMax} className="nodrag" />
                    <label htmlFor="step">Step:</label>
                    <input id="step" type="number" value={data.step} onChange={setStep} className="nodrag" />
                </div>
            </div>
            <Handle type="source" position={Position.Bottom} id="a" />
        </div>
    );
}

export default NodeSlider;