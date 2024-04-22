package com.doddi.meditree.node.access;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.TreeNode;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.ObjectMapper;

public class NodeDeserializer extends JsonDeserializer<Node> {
    private static ObjectMapper mapper = new ObjectMapper();

    @Override
    public Node deserialize(JsonParser p, DeserializationContext ctx) throws IOException, JacksonException {

        TreeNode tree = p.getCodec().readTree(p);

        String id = mapper.convertValue(tree.get("id"), String.class);
        NodeType type = mapper.treeToValue(tree.get("type"), NodeType.class);
        Position position = mapper.treeToValue(tree.get("position"), Position.class);

        TreeNode dataNode = tree.get("data");
        String question = mapper.convertValue(dataNode.get("question"), String.class);

        switch (type) {
            case NUMBER:
                return new NodeNumber(id, position, question);
            case TEXT:
                return new NodeText(id, position, question);
            case MULTIPLE_CHOICE:
                String[] choicesArray = mapper.treeToValue(dataNode.get("choices"), String[].class);
                List<String> choices = Arrays.asList(choicesArray);
				return new NodeMultipleChoice(id, position, question, choices);
            case SLIDER:
                String minTree = dataNode.get("min").toString();
                int min = Integer.parseInt(minTree);
                String maxTree = dataNode.get("max").toString();
                int max = Integer.parseInt(maxTree);
                String stepTree = dataNode.get("step").toString();
                int step = Integer.parseInt(stepTree);
                return new NodeSlider(id, position, question, min, max, step);
            default:
                throw new IllegalArgumentException("Unknown type: " + type);
        }
    }

    
}