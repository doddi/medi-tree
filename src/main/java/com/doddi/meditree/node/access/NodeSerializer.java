package com.doddi.meditree.node.access;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

public class NodeSerializer extends JsonSerializer<Node> {

	@Override
	public void serialize(Node node, JsonGenerator gen, SerializerProvider serializers) throws IOException {
        gen.writeStartObject();
        gen.writeStringField("id", node.getId());

        if (node instanceof NodeText) {
            gen.writeStringField("type", "TEXT");
        } else if (node instanceof NodeNumber) {
            gen.writeStringField("type", "NUMBER");
        } else if (node instanceof NodeMultipleChoice) {
            gen.writeStringField("type", "MULTIPLE_CHOICE");
        } else if (node instanceof NodeSlider) {
            gen.writeStringField("type", "SLIDER");
        }
        gen.writeObjectField("position", node.getPosition());

        gen.writeObjectFieldStart("data");
        gen.writeStringField("question", node.getQuestion());

        if (node instanceof NodeMultipleChoice) {
            NodeMultipleChoice multipleChoice = (NodeMultipleChoice) node;
            gen.writeArrayFieldStart("choices");
            for (String choice : multipleChoice.getChoices()) {
                gen.writeString(choice);
            }
            gen.writeEndArray();
        } else if (node instanceof NodeSlider) {
            NodeSlider slider = (NodeSlider) node;
            gen.writeNumberField("min", slider.getMin());
            gen.writeNumberField("max", slider.getMax());
            gen.writeNumberField("step", slider.getStep());
        }
        gen.writeEndObject();
        gen.writeEndObject();
	}

}
