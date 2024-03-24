import { applyEdgeChanges, applyNodeChanges } from 'reactflow';
import { createWithEqualityFn } from 'zustand/traditional';
import { nanoid } from 'nanoid';

export const useStore = createWithEqualityFn((set, get) => ({
    nodes: [
    {
        id: '1',
        type: 'nodeText',
        data: { question: 'text question' },
        position: { x: 300, y: 125 }
    },
    {
        id: '2',
        type: 'nodeSlider',
        data: { question: 'slider question', min: 0, max: 100, step: 1 },
        position: { x: 200, y: 250 }
    },
    {
        id: '3',
        type: 'nodeMultipleChoice',
        data: { question: 'multiple choice question', choices: ["test1"] },
        position: { x: 300, y: 450 }
    },
    {
        id: '4',
        type: 'nodeNumber',
        data: { question: 'number question' },
        position: { x: 100, y: 450 }
    }
    ],
    edges: [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e2-4', source: '2', target: '4' },
    { id: 'e1-3', source: '1', target: '3' }
    ],

    onNodeChange(changes) {
        set({
            nodes: applyNodeChanges(changes, get().nodes),
        })
    },

    addNode(type) {
        const id = nanoid(6);
        const position = {x: 100, y: 100};
        
        switch (type) {
            case "text":
                set({nodes: [...get().nodes, {id, type: 'nodeText', data: {question: 'Enter question that requires a text response'}, position}]})
                break;
            case "number": 
                set({nodes: [...get().nodes, {id, type: 'nodeNumber', data: {question: 'Enter a question that requires a number response'}, position}]})
                break;
            case "slider":
                set({nodes: [...get().nodes, {id, type: 'nodeSlider', data: {question: 'Enter a question that requires a range response'}, position}]})
                break;
            case "multi":
                set({nodes: [...get().nodes, {id, type: 'nodeMultipleChoice', data: {question: 'Enter question that requires selecting an option', choices: []}, position}]})
                break;
            default:
                console.error("Invalid node type: ", type);
        }
    },

    updateNode(id, data) {
        set({
            nodes: get().nodes.map((node) => {
                if (node.id === id) {
                    return {...node, data: Object.assign(node.data, data)};
                }
                return node;
            })
        })
    },

    onNodeDelete(deleted) {
        // TODO: delete the node
        console.log("Node deleted: ", deleted);
    },

    addEdge(data) {
        const id = nanoid(6);
        const edge = {id, ...data};

        set({edges: [...get().edges, edge]});
    },

    onEdgeChange(changes) {
        set({
            edges: applyEdgeChanges(changes, get().edges),
        })
    },

    onEdgeDelete(deleted) {
        // TODO: delete the edge
    },
}));