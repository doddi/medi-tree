package com.doddi.meditree.node.access;

public class NodeMultipleChoice extends Node {
    private String[] choices;

	public NodeMultipleChoice(String id, Position position, String question, String[] choices) {
		super(id, position, question);
        this.choices = choices;
	}

    public String[] getChoices() {
        return choices;
    }
}