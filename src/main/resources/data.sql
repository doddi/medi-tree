INSERT INTO node (identification, type, question, position_x, position_y) VALUES (1, 'TEXT', 'text question', 300, 125);
INSERT INTO node (identification, type, question, min, max, step, position_x, position_y) VALUES (2, 'SLIDER', 'slider question', 0, 100, 1, 300, 325);
INSERT INTO node (identification, type, question, position_x, position_y) VALUES (3, 'MULTIPLE_CHOICE', 'multi question', 300, 550);
INSERT INTO node (identification, type, question, position_x, position_y) VALUES (4, 'NUMBER', 'number question', 100, 650);
INSERT INTO node (identification, type, question, position_x, position_y) VALUES (5, 'NUMBER', 'other number question', 100, 1000);
INSERT INTO node (identification, type, question, position_x, position_y) VALUES (6, 'NUMBER', 'alternative number question', 400, 1000);

INSERT INTO NODE_CHOICES (node_id, choice) VALUES (3, 'choice 1');
INSERT INTO NODE_CHOICES (node_id, choice) VALUES (3, 'choice 2');

INSERT INTO edge (identification, source, target, label) VALUES ('e1-2', '1', '2', null);
INSERT INTO edge (identification, source, target, label) VALUES ('e2-4', '2', '4', '0-20');
INSERT INTO edge (identification, source, target, label) VALUES ('e2-3', '2', '3', null);
INSERT INTO edge (identification, source, target, label) VALUES ('e3-5', '3', '5', '0');
INSERT INTO edge (identification, source, target, label) VALUES ('e3-6', '3', '6', null);