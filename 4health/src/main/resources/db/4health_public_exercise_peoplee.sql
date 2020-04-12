CREATE TABLE public.exercise_peoplee
(
    exercises_name_exercise varchar(255) NOT NULL,
    peoplee_user_id varchar(255) NOT NULL,
    CONSTRAINT fkcp7gd959yqyjcyce73u27sbtm FOREIGN KEY (exercises_name_exercise) REFERENCES exercise (name_exercise) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fkpkjcogmv5q85qoynyf3w4809h FOREIGN KEY (peoplee_user_id) REFERENCES person (user_id) ON DELETE CASCADE ON UPDATE CASCADE
);