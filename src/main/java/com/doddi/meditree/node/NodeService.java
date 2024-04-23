package com.doddi.meditree.node;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;
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

@Service
public class NodeService {

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

    public String putNodeSystem(NodeSystem nodeSystem) {
        List<NodeDao> nodes = new ArrayList<>();
        for (Node node : nodeSystem.nodes()) {
            Optional<NodeDao> byIdentification = nodeRepository.findByIdentification(node.getId());
            if (byIdentification.isPresent()) {
                NodeDao nodeDao = byIdentification.get();
                Node.updateDao(node, nodeDao);
                nodes.add(nodeDao);
            } else {
                nodes.add(Node.toDao(node));
            }
        }
        nodeRepository.saveAll(nodes);

        List<EdgeDao> edges = new ArrayList<>();
        for (Edge edge : nodeSystem.edges()) {
            Optional<EdgeDao> byIdentification = edgeRepository.findByIdentification(edge.id());
            if (byIdentification.isPresent()) {
                EdgeDao edgeDao = byIdentification.get();
                Edge.updateDao(edge, edgeDao);
                edges.add(edgeDao);
            } else {
                edges.add(Edge.toDao(edge));
            }
        }
        edgeRepository.saveAll(edges);

        return "OK";
    }
}
