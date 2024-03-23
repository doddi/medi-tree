import { applyEdgeChanges, applyNodeChanges } from 'reactflow';
import { create } from 'zustand';

export const useStore = create((set, get) => ({
    nodes: [
    {
        id: '1',
        type: 'nodeText',
        data: { text: 'test' },
        position: { x: 300, y: 125 }
    },
    {
        id: '2',
        type: 'nodeSlider',
        data: { text: 'test' },
        position: { x: 200, y: 250 }
    },
    {
        id: '3',
        type: 'nodeMultipleChoice',
        data: { text: 'test' },
        position: { x: 300, y: 450 }
    },
    {
        id: '4',
        type: 'nodeNumber',
        data: { text: 'test' },
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
        // TODO: Is this random enough?
        const id = Math.random().toString();
        const position = {x: 100, y: 100};
        
        switch (type) {
            case "text":
                set({nodes: [...get().nodes, {id, type: 'nodeText', data: {text: 'test'}, position}]})
                break;
            case "number": 
                set({nodes: [...get().nodes, {id, type: 'nodeNumber', data: {text: 'test'}, position}]})
                break;
            case "slider":
                set({nodes: [...get().nodes, {id, type: 'nodeSlider', data: {text: 'test'}, position}]})
                break;
            case "multi":
                set({nodes: [...get().nodes, {id, type: 'nodeMultipleChoice', data: {text: 'test'}, position}]})
                break;
            default:
                console.error("Invalid node type: ", type);
        }
    },

    updateNode(id, data) {
        set({
            nodes: get().nodes.map((node) => {
                if (node.id === id) {
                    return {...node, data};
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
        const id = Math.random().toString();
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