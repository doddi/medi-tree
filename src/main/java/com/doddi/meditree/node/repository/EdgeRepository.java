package com.doddi.meditree.node.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.doddi.meditree.node.dao.EdgeDao;

public interface EdgeRepository extends CrudRepository<EdgeDao, Long> {

    Optional<EdgeDao> findByIdentification(String identification);

}
