package com.doddi.meditree.node.dao;


public class NodeSliderDao extends NodeDao {
    private int min;
    private int max;
    private int step;

    public NodeSliderDao(final int id, final NodePosition position, final String question, final int min, final int max, final int step) {
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
