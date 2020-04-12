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
INSERT INTO public.exercise (name_exercise, description, pic_url, is_favourite) VALUES ('Tricep Pushdowns', 'You must begin by facing the cable machine and situating the cable attachment at a height above your head. Attach the bar or rope and grasp it securely. Press the handles of the rope down in front of your chest, so that your elbows are aligned with the middle of your trunk, then extend the arms downward, pressing the rope or bar down toward the floor. Extend your arms fully, while maintaining the same position with the rest of the body.', 'Tricep pushdowns.png', '0');