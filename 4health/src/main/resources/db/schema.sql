CREATE TABLE public.diet
(
    name_diet varchar(255) PRIMARY KEY NOT NULL,
    desc_diet varchar(500),
    added varchar(255)
);
INSERT INTO public.diet (name_diet, desc_diet, added) VALUES ('Low-carb', 'The low-carb, whole-food diet is perfect for people who need to lose weight, optimize health, and lower their risk of disease. This diet is high in vegetables, meat, fish, eggs, fruits, nuts, and fats but low in starches, sugars, and processed foods.', '0');
INSERT INTO public.diet (name_diet, desc_diet, added) VALUES ('Paleo', 'The paleo diet is a very popular diet that is effective for weight loss and general health improvement. It’s currently the world’s most popular diet.
It centers on unprocessed foods believed to resemble those available to some of humanity’s paleolithic ancestors.', '0');
INSERT INTO public.diet (name_diet, desc_diet, added) VALUES ('Mediterranean diet', 'The Mediterranean diet is an excellent diet that has been thoroughly studied. It’s particularly effective for heart disease prevention.As such, it includes plenty of vegetables, fruits, fish, poultry, whole grains, legumes, dairy products, and extra virgin olive oil.', '0');
INSERT INTO public.diet (name_diet, desc_diet, added) VALUES ('Vegan diet', 'The vegan diet has become increasingly popular in the past decade. It’s linked to a number of health benefits, including weight loss, improved heart health, and better blood sugar control.
The diet is based exclusively on plant foods and eliminates all animal products.', '0');
INSERT INTO public.diet (name_diet, desc_diet, added) VALUES ('Gluten-free diet', 'The gluten-free diet is essential for people who are intolerant to gluten, a protein that is found in wheat, rye, and barley.For optimal health, you should focus on whole foods that are naturally gluten-free. Gluten-free junk food is still junk food.', '0');
CREATE TABLE public.exercise
(
    name_exercise varchar(255) PRIMARY KEY NOT NULL,
    description varchar(500),
    pic_url varchar(255),
    is_favourite varchar(255)
);
INSERT INTO public.exercise (name_exercise, description, pic_url, is_favourite) VALUES ('Incline Push-up', 'Stand in front of your box or bench, then squat or bend down and place both hands on either side of it with your fingers pointing forward. Your hands should be about shoulder-width apart. Once your hands are in the right position, step your body back into a plank position, one leg at a time. Next, bend your arms to help you slowly lower your chest toward the box. Straighten your arms to bring yourself back up into a straight line.', 'incline-push-up.png', '0');
INSERT INTO public.exercise (name_exercise, description, pic_url, is_favourite) VALUES ('Push-up', 'Get down on all fours, placing your hands slightly wider than your shoulders.  Straighten your arms and legs.  Lower your body until your chest nearly touches the floor.  Pause, then push yourself back up.', 'pushups.png', '0');
INSERT INTO public.exercise (name_exercise, description, pic_url, is_favourite) VALUES ('Forearm Plank', 'Begin lying on the floor with your forearms flat on the floor, making sure that your elbows are aligned directly under your shoulders. Engage your core and raise your body up off the floor, keeping your forearms on the floor and your body in a straight line from head to feet. Keep your abdominals engaged and try not to let your hips rise or drop.', 'plank2.jpg', '0');
INSERT INTO public.exercise (name_exercise, description, pic_url, is_favourite) VALUES ('Walking Lunge', 'Stand upright, feet together, and take a controlled step forward with your right leg, lowering your hips toward the floor by bending both knees to 90-degree angles. The back knee should point toward but not touch the ground, and your front knee should be directly over the ankle.', 'WalkingLunge.jpg', '0');
INSERT INTO public.exercise (name_exercise, description, pic_url, is_favourite) VALUES ('Romanian Deadlift', 'To start the move, stand with the bar or weight in your hands as opposed to the floor. Slowly lower the weight with a slight bend in your knees, bending at the hips and keeping your back straight. Lower until you feel a slight stretch in your hamstrings – usually when the weight has just passed your knees – then drive your hips forwards and use your hamstrings to power back up to standing.', 'RomanianDeadlifts.jpg', '0');
INSERT INTO public.exercise (name_exercise, description, pic_url, is_favourite) VALUES ('Squat', 'Stand with feet a little more than shoulder-width apart, hands clasped in front of chest, elbows slightly bent.Push your hips back, bend your knees, and lower into a squat, as if you’re sitting back onto a chair.', 'squat.png', '0');
INSERT INTO public.exercise (name_exercise, description, pic_url, is_favourite) VALUES ('Reverse Plank', 'Press into your palms and lift your hips and torso toward the ceiling. Look up to the ceiling, point your toes, and keep your arms and legs straight. Keep your entire body strong and form a straight line from your head to your heels. Squeeze your core and try to pull your belly button back toward your spine.', 'plank3.png', '0');
INSERT INTO public.exercise (name_exercise, description, pic_url, is_favourite) VALUES ('Tricep Pushdowns', 'You must begin by facing the cable machine and situating the cable attachment at a height above your head. Attach the bar or rope and grasp it securely. Press the handles of the rope down in front of your chest, so that your elbows are aligned with the middle of your trunk, then extend the arms downward, pressing the rope or bar down toward the floor. Extend your arms fully, while maintaining the same position with the rest of the body.', 'Tricep pushdowns.png', '0');CREATE TABLE public.exercise_peoplee
(
    exercises_name_exercise varchar(255) NOT NULL,
    peoplee_user_id varchar(255) NOT NULL,
    CONSTRAINT fkcp7gd959yqyjcyce73u27sbtm FOREIGN KEY (exercises_name_exercise) REFERENCES exercise (name_exercise) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fkpkjcogmv5q85qoynyf3w4809h FOREIGN KEY (peoplee_user_id) REFERENCES person (user_id) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE public.food
(
    name_food varchar(255) PRIMARY KEY NOT NULL,
    kcal real NOT NULL,
    pic_food varchar(255)
);
INSERT INTO public.food (name_food, kcal, pic_food) VALUES ('Egg', 1.5, 'eggs.jpg');
INSERT INTO public.food (name_food, kcal, pic_food) VALUES ('Pork', 2.4, 'pork.jpg');
INSERT INTO public.food (name_food, kcal, pic_food) VALUES ('Chicken', 1.1, 'chicken.jpg');
INSERT INTO public.food (name_food, kcal, pic_food) VALUES ('Rice
', 1.3, 'rice1.jpg');
INSERT INTO public.food (name_food, kcal, pic_food) VALUES ('Mashed potatoes
', 0.9, 'mashed.jpg');
INSERT INTO public.food (name_food, kcal, pic_food) VALUES ('Green salad', 1.5, 'green.jpg');
INSERT INTO public.food (name_food, kcal, pic_food) VALUES ('Pasta', 1.3, 'pasta.jpg');
INSERT INTO public.food (name_food, kcal, pic_food) VALUES ('Oatmeal', 0.7, 'oat.jpg');
INSERT INTO public.food (name_food, kcal, pic_food) VALUES ('Mixed nuts', 6, 'apetisani.jpg');
INSERT INTO public.food (name_food, kcal, pic_food) VALUES ('Banana', 0.9, 'banana.jpg');CREATE TABLE public.person
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
INSERT INTO public.person (user_id, age, gender, first_name, password, last_name, diet_name_diet) VALUES ('ljubica123', 22, 'F', 'ljubica', 'ljubica', 'boneva', null);CREATE TABLE public.supplement
(
    name_supplement varchar(255) PRIMARY KEY NOT NULL,
    desc_supplement varchar(500),
    gr integer,
    pic_supplement varchar(255),
    price integer NOT NULL,
    added_to_cart varchar(255)
);
INSERT INTO public.supplement (name_supplement, desc_supplement, gr, pic_supplement, price, added_to_cart) VALUES ('Pure L-Glutamine', 'For a balanced glutamiic acid and protein metabolism.100% L-Glutamic acid, pure amino acid with no additives, very good solubility in water.', 400, 'Pure-L-Glutaminsaeure.png', 30, '0');
INSERT INTO public.supplement (name_supplement, desc_supplement, gr, pic_supplement, price, added_to_cart) VALUES ('OMEGA 3-6-9', 'Boost brain function, mental health and regulate mood, faster adaptation to exercise.', 46, 'omega.png', 6, '0');
INSERT INTO public.supplement (name_supplement, desc_supplement, gr, pic_supplement, price, added_to_cart) VALUES ('PUMP KICK', 'Supports rapid growth of muscle strength, no unnecessary fillers and additives, supports muscle growth, Pre Wokrout & Bcaa 2/1, contains natural nitric oxide from beets.', 450, 'PumpKick.png', 34, '0');
INSERT INTO public.supplement (name_supplement, desc_supplement, gr, pic_supplement, price, added_to_cart) VALUES ('Musclepharm Creatine', 'Strength and power amplifier, improves athletic performance, promotes increases in strength and lean body mass.', 300, 'MPE_Creatine.png', 16, '0');
INSERT INTO public.supplement (name_supplement, desc_supplement, gr, pic_supplement, price, added_to_cart) VALUES ('BCAA JUICE ENERGY', '6000mg BCAA per serving,2000mg L Glutamine per serving,1000mg Citrulline Malate,no added sugar,100% instantized for easy mixing,the best juicy flavor you ever tried.', 500, 'bcaa-juice-energy.png', 28, '0');
INSERT INTO public.supplement (name_supplement, desc_supplement, gr, pic_supplement, price, added_to_cart) VALUES ('GASPARI NUTRITION', 'MyoFusion - advanced protein, great taste, to build muscle masssupporting energy metabolism,supporting muscle healing.', 1814, 'myo_4lb.png', 56, '0');
INSERT INTO public.supplement (name_supplement, desc_supplement, gr, pic_supplement, price, added_to_cart) VALUES ('L Carnitine Complex', 'Supports metabolism of lipids,increases energy production,contains high dose of liquid l-carnitine, 90caps.', 72, 'l-carnitine.png', 15, '0');CREATE TABLE public.supplement_peoples
(
    supplements_name_supplement varchar(255) NOT NULL,
    peoples_user_id varchar(255) NOT NULL,
    CONSTRAINT fkd0cj4e4mud1s27yg70i5lbj94 FOREIGN KEY (supplements_name_supplement) REFERENCES supplement (name_supplement) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fkl3cfexv0q5yynlk1kaaboo89b FOREIGN KEY (peoples_user_id) REFERENCES person (user_id) ON DELETE CASCADE ON UPDATE CASCADE
);