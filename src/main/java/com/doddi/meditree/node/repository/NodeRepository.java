package com.doddi.meditree.node.repository;

import org.springframework.data.repository.CrudRepository;

import com.doddi.meditree.node.dao.NodeDao;

public interface NodeRepository extends CrudRepository<NodeDao, Long> {

}
