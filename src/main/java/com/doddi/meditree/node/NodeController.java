package com.doddi.meditree.node;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.doddi.meditree.node.access.NodeSystem;


@RestController
@RequestMapping("/api/nodes")
public class NodeController {

    @Autowired
    private NodeService nodeService;

    @GetMapping(produces = "application/json")
    public NodeSystem getNodeSystem() {
        return nodeService.getNodeSystem();
    }
}
