package com.doddi.meditree.node;

import java.net.URL;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Spliterator;
import java.util.Spliterators;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.stereotype.Service;

import com.doddi.meditree.node.access.Edge;
import com.doddi.meditree.node.access.Node;
import com.doddi.meditree.node.access.NodeSystem;
import com.doddi.meditree.node.dao.EdgeDao;
import com.doddi.meditree.node.dao.NodeDao;
import com.doddi.meditree.node.repository.EdgeRepository;
import com.doddi.meditree.node.repository.NodeRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class NodeService {

    private static final ObjectMapper objectMapper = new ObjectMapper();
    // private final NodeSystem nodeSystem;
    private final NodeRepository nodeRepository;
    private final EdgeRepository edgeRepository;

    public NodeService(final NodeRepository nodeRepository, final EdgeRepository edgeRepository) {
        this.nodeRepository = nodeRepository;
        this.edgeRepository = edgeRepository;
    }

    public NodeSystem getNodeSystem() {
        Iterator<NodeDao> nodes = nodeRepository.findAll().iterator();
        List<Node> publicNodes = StreamSupport.stream(Spliterators.spliteratorUnknownSize(nodes, Spliterator.ORDERED), false)
            .map(node -> Node.fromDao(node))
            .collect(Collectors.toList());

        Iterator<EdgeDao> edges = edgeRepository.findAll().iterator();
        List<Edge> publicEdges = StreamSupport.stream(Spliterators.spliteratorUnknownSize(edges, Spliterator.ORDERED), false)
            .map(edge -> Edge.fromDao(edge))
            .collect(Collectors.toList());
            
        return new NodeSystem(publicNodes, publicEdges);
    }
}
