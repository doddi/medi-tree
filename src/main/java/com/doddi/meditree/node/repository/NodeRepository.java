package com.doddi.meditree.node.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.doddi.meditree.node.dao.NodeDao;

public interface NodeRepository extends CrudRepository<NodeDao, Long> {

    Optional<NodeDao> findByIdentification(String identification);
}
