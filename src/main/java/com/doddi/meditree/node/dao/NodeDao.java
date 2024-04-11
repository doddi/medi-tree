package com.doddi.meditree.node.dao;

public class NodeDao {

    private int identification;
    private NodePosition position;
    private String question;

    public NodeDao(final int identification, final NodePosition position, final String question) {
        this.identification = identification;
        this.position = position;
        this.question = question;
    }

    public int getIdentification() {
        return identification;
    }

    public NodePosition getPosition() {
        return position;
    }

    public String getQuestion() {
        return question;
    }
}
