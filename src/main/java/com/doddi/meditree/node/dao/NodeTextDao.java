package com.doddi.meditree.node.dao;

import com.doddi.meditree.node.access.Position;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("TEXT")
public class NodeTextDao extends NodeDao {

    public NodeTextDao() {
    }

    public NodeTextDao(String identification, Position position, String question) {
        super(identification, position, question);
    }
}
