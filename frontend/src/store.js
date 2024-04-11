import { applyEdgeChanges, applyNodeChanges } from 'reactflow';
import { createWithEqualityFn } from 'zustand/traditional';
import { nanoid } from 'nanoid';

export const useStore = createWithEqualityFn((set, get) => ({
    nodes: [],
    edges: [],

    loading: true,
    setLoading(loading) {
        set({loading: loading});
    },
    isLoading() {
        return get().loading;
    },

    onNodeChange(changes) {
        set({
            nodes: applyNodeChanges(changes, get().nodes),
        })
    },

    setNodes(nodes) {
        set({nodes: nodes});
    },
    addNode(type) {
        const id = nanoid(6);
        const position = {x: 100, y: 100};
        
        switch (type) {
            case "text":
                set({nodes: [...get().nodes, {id, type: 'TEXT', data: {question: 'Enter question that requires a text response'}, position}]})
                break;
            case "number": 
                set({nodes: [...get().nodes, {id, type: 'NUMBER', data: {question: 'Enter a question that requires a number response'}, position}]})
                break;
            case "slider":
                set({nodes: [...get().nodes, {id, type: 'SLIDER', data: {question: 'Enter a question that requires a range response'}, position}]})
                break;
            case "multi":
                set({nodes: [...get().nodes, {id, type: 'MULTIPLE_CHOICE', data: {question: 'Enter question that requires selecting an option', choices: []}, position}]})
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

    setEdges(edges) {
        set({edges: edges});
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