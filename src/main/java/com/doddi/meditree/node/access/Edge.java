package com.doddi.meditree.node.access;

import com.doddi.meditree.node.dao.EdgeDao;

public record Edge(String id, String source, String target, String label) {

    public EdgeDao toEdge() {
        return new EdgeDao(id, source, target, label);
    }

    public static Edge fromDao(EdgeDao edge) {
        return new Edge(edge.getIdentification(), edge.getSource(), edge.getTarget(), edge.getLabel());
    }

    public static EdgeDao toDao(Edge publicEdge) {
        return new EdgeDao(publicEdge.id(), publicEdge.source(), publicEdge.target(), publicEdge.label());
    }

    public static void updateDao(Edge edge, EdgeDao edgeDao) {
        edgeDao.setSource(edge.source());
        edgeDao.setTarget(edge.target());
        edgeDao.setLabel(edge.label());
    }
}
