package com.doddi.meditree.node.dao;

import com.doddi.meditree.node.access.Position;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("NUMBER")
public class NodeNumberDao extends NodeDao {

    public NodeNumberDao() {
    }

    public NodeNumberDao(String identification, Position position, String question) {
        super(identification, position, question);
    }
}
