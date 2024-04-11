package com.doddi.meditree.node.access;

import java.util.ArrayList;
import java.util.Optional;

import com.doddi.meditree.node.dao.NodeDao;
import com.doddi.meditree.node.dao.NodeMultipleChoiceDao;
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

    // public static NodeDao toDao(NodeDao nodeDao, Node node) {
        // NodePosition position = new NodePosition(node.position.x(), node.position.y());

        // switch (node.type) {
        //     case MULTIPLE_CHOICE:
        //         ArrayList<String> choicesList = node.data.choices().orElseGet(ArrayList::new);
        //         return new NodeMultipleChoiceDao(identification, position, node.data.question(), choicesList);
        //     case NUMBER:
        //         return new NodeNumber(identification, position, node.data.question());
        //     case SLIDER:
        //         Slider dummySlider = new Slider(0, 0, 1);
        //         Slider slider = node.data.slider().orElse(dummySlider);
        //         return new NodeSliderDao(identification, position, node.data.question(), slider.min(), slider.max(), slider.step());
        //     case TEXT:
        //         return new NodeTextDao(identification, position, node.data.question());
        //     default:
        //         throw new IllegalArgumentException("Unknown type: " + node.type);
        // }
    // }

    // public static Node fromDao(NodeDao node) {
    //     String id = String.valueOf(node.getIdentification());
    //     NodeType type = NodeType.valueOf(node.getClass().getSimpleName());
    //     Data data = getData(node, type);

    //     Position position = new Position(node.getPosition().x(), node.getPosition().y());

    //     return new Node(id, type, data, position);
    // }

    // public static Data getData(NodeDao node, NodeType type) {
    //     switch (type) {
    //         case MULTIPLE_CHOICE:
    //             ArrayList<String> choices = ((NodeMultipleChoiceDao) node).getChoices();
    //             return new Data(node.getQuestion(), Optional.empty(), Optional.of(choices), Optional.empty(), Optional.empty());
    //         case SLIDER:
    //             NodeSliderDao nodeSlider = (NodeSliderDao) node;
    //             Optional<Slider> slider = Optional.of(new Slider(nodeSlider.getMin(), nodeSlider.getMax(), nodeSlider.getStep()));
    //             return new Data(node.getQuestion(), null, null, null, slider);
    //         default:
    //             return new Data(node.getQuestion(), Optional.empty(), Optional.empty(), Optional.empty(), Optional.empty());
    //     }
    // }
}
