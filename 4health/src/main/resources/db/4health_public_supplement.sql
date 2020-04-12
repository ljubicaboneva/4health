CREATE TABLE public.supplement
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
INSERT INTO public.supplement (name_supplement, desc_supplement, gr, pic_supplement, price, added_to_cart) VALUES ('L Carnitine Complex', 'Supports metabolism of lipids,increases energy production,contains high dose of liquid l-carnitine, 90caps.', 72, 'l-carnitine.png', 15, '0');