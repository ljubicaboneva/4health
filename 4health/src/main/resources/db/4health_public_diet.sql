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