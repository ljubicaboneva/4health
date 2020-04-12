CREATE TABLE public.person
(
    user_id varchar(255) PRIMARY KEY NOT NULL,
    age integer DEFAULT 0,
    gender varchar(255),
    first_name varchar(255),
    password varchar(255),
    last_name varchar(255),
    diet_name_diet varchar(255) DEFAULT NULL::character varying,
    CONSTRAINT fkd1o8937rgtq9jablaur7cmfj0 FOREIGN KEY (diet_name_diet) REFERENCES diet (name_diet) ON DELETE SET NULL ON UPDATE SET NULL
);
INSERT INTO public.person (user_id, age, gender, first_name, password, last_name, diet_name_diet) VALUES ('ljubica123', 22, 'F', 'ljubica', 'ljubica', 'boneva', null);