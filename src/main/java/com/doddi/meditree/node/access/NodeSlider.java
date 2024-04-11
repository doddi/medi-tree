package com.doddi.meditree.node.access;

public class NodeSlider extends Node {
    private int min;
    private int max;
    private int step;

    public NodeSlider(final String id, final Position position, final String question, final int min, final int max, final int step) {
        super(id, position, question);
        this.min = min;
        this.max = max;
        this.step = step;
    }

    public int getMin() {
        return min;
    }

    public int getMax() {
        return max;
    }

    public int getStep() {
        return step;
    }
}
