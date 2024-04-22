package com.doddi.meditree.node.access;

import com.doddi.meditree.node.dao.NodeDao;
import com.doddi.meditree.node.dao.NodeMultipleChoiceDao;
import com.doddi.meditree.node.dao.NodeNumberDao;
import com.doddi.meditree.node.dao.NodeSliderDao;
import com.doddi.meditree.node.dao.NodeTextDao;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@JsonDeserialize(using = NodeDeserializer.class)
@JsonSerialize(using = NodeSerializer.class)
public class Node {
    private final String id;
    private final Position position;
    private final String question;

    public Node(String id, Position position, String question) {
        this.id = id;
        this.position = position;
        this.question = question;
    }

    public String getId() {
        return id;
    }

    public Position getPosition() {
        return position;
    }

    public String getQuestion() {
        return question;
    }

    public static Node fromDao(NodeDao node) {
        if (node instanceof NodeMultipleChoiceDao) {
            NodeMultipleChoiceDao nodeMultipleChoice = (NodeMultipleChoiceDao) node;
            return new NodeMultipleChoice(String.valueOf(node.getIdentification()), new Position(node.getPosition_x(), node.getPosition_y()), node.getQuestion(), nodeMultipleChoice.getChoices());
        } else if (node instanceof NodeSliderDao) {
            NodeSliderDao nodeSlider = (NodeSliderDao) node;
            return new NodeSlider(String.valueOf(node.getIdentification()), new Position(node.getPosition_x(), node.getPosition_y()), node.getQuestion(), nodeSlider.getMin(), nodeSlider.getMax(), nodeSlider.getStep());
        } else if (node instanceof NodeTextDao) {
            return new NodeText(String.valueOf(node.getIdentification()), new Position(node.getPosition_x(), node.getPosition_y()), node.getQuestion());
        } else if (node instanceof NodeNumberDao) {
            return new NodeNumber(String.valueOf(node.getIdentification()), new Position(node.getPosition_x(), node.getPosition_y()), node.getQuestion());
        }

        throw new IllegalArgumentException("Unknown type: " + node.getClass());
    }
}
