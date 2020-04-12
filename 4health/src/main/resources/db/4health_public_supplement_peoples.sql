CREATE TABLE public.supplement_peoples
(
    supplements_name_supplement varchar(255) NOT NULL,
    peoples_user_id varchar(255) NOT NULL,
    CONSTRAINT fkd0cj4e4mud1s27yg70i5lbj94 FOREIGN KEY (supplements_name_supplement) REFERENCES supplement (name_supplement) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fkl3cfexv0q5yynlk1kaaboo89b FOREIGN KEY (peoples_user_id) REFERENCES person (user_id) ON DELETE CASCADE ON UPDATE CASCADE
);