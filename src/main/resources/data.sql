INSERT INTO node (identification, type, question, position_x, position_y) VALUES ('1', 'MULTIPLE_CHOICE', 'sore throat', 300, 0);
INSERT INTO NODE_CHOICES (node_id, choice) VALUES (1, 'None');
INSERT INTO NODE_CHOICES (node_id, choice) VALUES (1, 'Mild');
INSERT INTO NODE_CHOICES (node_id, choice) VALUES (1, 'Moderate');
INSERT INTO NODE_CHOICES (node_id, choice) VALUES (1, 'Severe');

INSERT INTO node (identification, type, question, position_x, position_y) VALUES ('2', 'MULTIPLE_CHOICE', 'cough / cold symptoms', 300, 300);
INSERT INTO NODE_CHOICES (node_id, choice) VALUES (2, 'None');
INSERT INTO NODE_CHOICES (node_id, choice) VALUES (2, 'Mild');
INSERT INTO NODE_CHOICES (node_id, choice) VALUES (2, 'Moderate');
INSERT INTO NODE_CHOICES (node_id, choice) VALUES (2, 'Severe');

INSERT INTO node (identification, type, question, position_x, position_y) VALUES ('3', 'MULTIPLE_CHOICE', 'muscle aches', 300, 600);
INSERT INTO NODE_CHOICES (node_id, choice) VALUES (3, 'None');
INSERT INTO NODE_CHOICES (node_id, choice) VALUES (3, 'Mild');
INSERT INTO NODE_CHOICES (node_id, choice) VALUES (3, 'Moderate');
INSERT INTO NODE_CHOICES (node_id, choice) VALUES (3, 'Severe');


INSERT INTO node (identification, type, question, position_x, position_y) VALUES ('4', 'MULTIPLE_CHOICE', 'history of fever on the last 24hrs', 300, 900);
INSERT INTO NODE_CHOICES (node_id, choice) VALUES (4, 'Yes');
INSERT INTO NODE_CHOICES (node_id, choice) VALUES (4, 'No');

INSERT INTO node (identification, type, question, position_x, position_y) VALUES ('5', 'MULTIPLE_CHOICE', 'onset of illness', 300, 1200);
INSERT INTO NODE_CHOICES (node_id, choice) VALUES (5, '0-3 days');
INSERT INTO NODE_CHOICES (node_id, choice) VALUES (5, '4-7 days');
INSERT INTO NODE_CHOICES (node_id, choice) VALUES (5, '7+ days');

INSERT INTO node (identification, type, question, position_x, position_y) VALUES ('6', 'MULTIPLE_CHOICE', 'do you know your blood pressure?', 300, 1500);
INSERT INTO NODE_CHOICES (node_id, choice) VALUES (6, 'Yes');
INSERT INTO NODE_CHOICES (node_id, choice) VALUES (6, 'No');

INSERT INTO node (identification, type, question, position_x, position_y) VALUES ('7', 'TEXT', 'enter your blood pressure', 100, 1800);

INSERT INTO node (identification, type, question, min, max, step, position_x, position_y) VALUES ('8', 'SLIDER', 'feeling overall healthy on a scale of 0 to 10 (10 healthy)', 0, 10, 1, 300, 2100);


INSERT INTO edge (identification, source, target, label) VALUES ('e1-2', '1', '2', null);
INSERT INTO edge (identification, source, target, label) VALUES ('e2-3', '2', '3', null);
INSERT INTO edge (identification, source, target, label) VALUES ('e3-4', '3', '4', null);
INSERT INTO edge (identification, source, target, label) VALUES ('e4-5', '4', '5', null);
INSERT INTO edge (identification, source, target, label) VALUES ('e5-6', '5', '6', null);
INSERT INTO edge (identification, source, target, label) VALUES ('e6-7', '6', '7', 0);
INSERT INTO edge (identification, source, target, label) VALUES ('e7-8', '7', '8', null);
INSERT INTO edge (identification, source, target, label) VALUES ('e6-8', '6', '8', null);
