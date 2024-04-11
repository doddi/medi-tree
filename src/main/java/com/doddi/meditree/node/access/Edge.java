package com.doddi.meditree.node.access;

import com.doddi.meditree.node.dao.EdgeDao;

public record Edge(String id, String source, String target, String label) {

    public EdgeDao toEdge() {
        return new EdgeDao(id, source, target, label);
    }

    public static Edge toPublicEdge(EdgeDao edge) {
        return new Edge(edge.identification(), edge.source(), edge.target(), edge.label());
    }

    public static EdgeDao toEdge(Edge publicEdge) {
        return new EdgeDao(publicEdge.id(), publicEdge.source(), publicEdge.target(), publicEdge.label());
    }
}
