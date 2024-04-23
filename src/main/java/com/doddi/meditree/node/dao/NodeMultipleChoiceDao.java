package com.doddi.meditree.node.dao;

import java.util.List;

import com.doddi.meditree.node.access.Position;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("MULTIPLE_CHOICE")
public class NodeMultipleChoiceDao extends NodeDao {

    @ElementCollection(targetClass = String.class, fetch = jakarta.persistence.FetchType.EAGER)
    @CollectionTable(name = "node_choices", joinColumns = @jakarta.persistence.JoinColumn(name = "node_id"))
    @Column(name = "choice", nullable = false)
    private List<String> choices;
   
    public NodeMultipleChoiceDao() {
    }

    public NodeMultipleChoiceDao(String identification, Position position, String question, List<String> choices) {
        super(identification, position, question);
        this.choices = choices;
    }

    public List<String> getChoices() {
        return choices;
    }

    public void setChoices(List<String> choices) {
        this.choices.clear();
        this.choices.addAll(choices);
    }
}
