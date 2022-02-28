INSERT INTO user (id, name, password) VALUES ('acf0acf1-ed78-490d-9bbe-cb8b71751a9d', 'admin', '$2a$10$gLznEh1/YBXzlseHzxrPBemG1Tc5fNuutEDTx25hAM4ePD7s2zsLa');
INSERT INTO user (id, name, password) VALUES ('6dc3d846-96b1-4e13-9213-c9295335914c', 'user', '$2a$10$72lQQ0VTWsc1b1W5pMhh2Ojax2oHqP1sxCwNuQx41X5rbWp8Navq2');

INSERT INTO user_role (user_id, role) VALUES ('acf0acf1-ed78-490d-9bbe-cb8b71751a9d', 'ADMIN');
INSERT INTO user_role (user_id, role) VALUES ('6dc3d846-96b1-4e13-9213-c9295335914c', 'USER');
