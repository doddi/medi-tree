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
    private String identification;
    private int position_x;
    private int position_y;
    private String question;

    public NodeDao() {
    }

    public NodeDao(final String identification, final Position position, final String question) {
        this.identification = identification;
        this.position_x = position.x();
        this.position_y = position.y();
        this.question = question;
    }

    public String getIdentification() {
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

    public void setId(Long id) {
        this.id = id;
    }

    public void setIdentification(String identification) {
        this.identification = identification;
    }

    public void setPosition_x(int position_x) {
        this.position_x = position_x;
    }

    public void setPosition_y(int position_y) {
        this.position_y = position_y;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

}
