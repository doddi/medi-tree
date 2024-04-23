package com.doddi.meditree.node.dao;

import com.doddi.meditree.node.access.Position;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("SLIDER")
public class NodeSliderDao extends NodeDao {
    private int min;
    private int max;
    private int step;

    public NodeSliderDao() {
    }
    
    public NodeSliderDao(final String identification, final Position position, final String question, final int min, final int max, final int step) {
        super(identification, position, question);
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

    public void setMin(int min) {
        this.min = min;
    }

    public void setMax(int max) {
        this.max = max;
    }

    public void setStep(int step) {
        this.step = step;
    }
}
