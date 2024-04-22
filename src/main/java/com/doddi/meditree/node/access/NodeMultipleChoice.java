package com.doddi.meditree.node.access;

import java.util.List;

public class NodeMultipleChoice extends Node {
    private List<String> choices;

	public NodeMultipleChoice(String id, Position position, String question, List<String> choices) {
		super(id, position, question);
        this.choices = choices;
	}

    public List<String> getChoices() {
        return choices;
    }
}