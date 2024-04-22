package com.doddi.meditree.node;

import java.util.ArrayList;

import org.springframework.stereotype.Component;

import com.doddi.meditree.node.dao.EdgeDao;
import com.doddi.meditree.node.dao.NodeDao;

@Component
public class NodeManager {

    private ArrayList<NodeDao> nodes;
    private ArrayList<EdgeDao> edges;

    public NodeManager() {
        nodes = new ArrayList<>();
        edges = new ArrayList<>();
    }

    public NodeManager(final ArrayList<NodeDao> nodes, final ArrayList<EdgeDao> edges) {
        this.nodes = nodes;
        this.edges = edges;
    }

    public void addNode(final NodeDao node) {
        nodes.add(node);
    }

    public void addEdge(final EdgeDao edge) {
        edges.add(edge);
    }

    public static class NodeManagerBuilder {
        private ArrayList<NodeDao> nodes;
        private ArrayList<EdgeDao> edges;

        public NodeManagerBuilder() {
            nodes = new ArrayList<>();
            edges = new ArrayList<>();
        }

        public NodeManagerBuilder addNode(final NodeDao node) {
            nodes.add(node);
            return this;
        }

        public NodeManagerBuilder addEdge(final EdgeDao edge) {
            edges.add(edge);
            return this;
        }

        public NodeManager build() {
            return new NodeManager(nodes, edges);
        }
    }
}
