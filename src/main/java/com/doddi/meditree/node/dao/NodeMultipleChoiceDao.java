package com.doddi.meditree.node.dao;

import java.util.ArrayList;

public class NodeMultipleChoiceDao extends NodeDao {

    private ArrayList<String> choices;
    
    public ArrayList<String> getChoices() {
        return choices;
    }

    public NodeMultipleChoiceDao(int id, com.doddi.meditree.node.dao.NodePosition position, String question, ArrayList<String> choices) {
        super(id, position, question);
        this.choices = choices;
    }

    public NodeMultipleChoiceDao(int id, NodePosition position, String description) {
        super(id, position, description);
        this.choices = new ArrayList<>();
    }

}
