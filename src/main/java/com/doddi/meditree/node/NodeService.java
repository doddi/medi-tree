package com.doddi.meditree.node;

import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.doddi.meditree.node.access.Edge;
import com.doddi.meditree.node.access.Node;
import com.doddi.meditree.node.access.NodeSystem;
import com.doddi.meditree.node.dao.EdgeDao;
import com.doddi.meditree.node.dao.NodeDao;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class NodeService {

    private static final ObjectMapper objectMapper = new ObjectMapper();
    private final NodeSystem nodeSystem;

    @Autowired
    public NodeService() {
        URL resource = getClass().getResource("/example.json");
        if (resource != null) {
            try {
                this.nodeSystem = objectMapper.readValue(resource, NodeSystem.class);
            } catch (Exception e) {
                throw new RuntimeException("Failed to load example.json", e);
            }
        } else {
            this.nodeSystem = new NodeSystem(new ArrayList<>(), new ArrayList<>());
        }
    }

    public NodeSystem getNodeSystem() {
        return nodeSystem;
        // TODO: Get from store the current nodes and edges
        // List<Node> publicNodes = nodes.stream()
        //     .map(node -> Node.toPublicNode(node))
        //     .collect(Collectors.toList());

        // List<Edge> publicEdges = edges.stream()
        //     .map(edge -> Edge.toPublicEdge(edge))
        //     .collect(Collectors.toList());

        // return new NodeSystem(publicNodes, publicEdges);
    }
}
