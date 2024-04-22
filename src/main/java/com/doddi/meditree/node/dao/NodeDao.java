package com.doddi.meditree.node.dao;

import com.doddi.meditree.node.access.Position;

import jakarta.persistence.DiscriminatorColumn;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;

@Entity(name = "node")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "type", discriminatorType = jakarta.persistence.DiscriminatorType.STRING)
public class NodeDao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int identification;
    private int position_x;
    private int position_y;
    private String question;

    public NodeDao() {
    }

    public NodeDao(final int identification, final Position position, final String question) {
        this.identification = identification;
        this.position_x = position.x();
        this.position_y = position.y();
        this.question = question;
    }

    public int getIdentification() {
        return identification;
    }

    public String getQuestion() {
        return question;
    }

    public Long getId() {
        return id;
    }

    public int getPosition_x() {
        return position_x;
    }

    public int getPosition_y() {
        return position_y;
    }
}
