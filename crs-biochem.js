// CRS Biochemistry — Dr. S. Shetty lecture slides. Reworked set: fewer, multi-concept, high-yield questions; lv = Easy/Hard; shetty = practice questions from the slides, word for word
window.CRS_BC_TOPICS = [
"Overview & Activation",
"Carnitine Shuttle",
"Carnitine & CPT Deficiencies",
"β-Oxidation Reactions",
"Energetics & Regulation",
"Unsaturated & Odd-Chain Fatty Acids",
"Methylmalonic Aciduria",
"Peroxisomal, α- & ω-Oxidation",
"MCAD Deficiency & Jamaican Vomiting Sickness",
"Zellweger, X-ALD & Refsum",
"Synthesis vs β-Oxidation & Sites",
"Citrate Shuttle: Acetyl-CoA to Cytosol",
"Sources of NADPH",
"Acetyl-CoA Carboxylase Reaction",
"Regulation of Acetyl-CoA Carboxylase",
"Fatty Acid Synthase Complex",
"FAS Cycle & Palmitate Stoichiometry",
"Elongation & Desaturation",
"Triacylglycerol Synthesis",
"TAG Fate & Lipolysis",
"Practice Questions (from the slides)",
"Fuel Fate & Why the Liver Makes Ketones",
"Ketogenesis: Pathway & HMG-CoA Synthase",
"The Three Ketone Bodies",
"Ketolysis: Thiophorase & Extrahepatic Use",
"Brain Fuel During Fasting & Starvation",
"Ketosis: Hormones, Levels & Causes",
"Diabetic Ketoacidosis",
"Practice Question · Ketone Bodies (from the slides)",
"Phospholipid Structure & Synthesis",
"DPPC, Surfactant & L/S Ratio",
"Phosphatidylinositol & PIP2 Signaling",
"GPI Anchors & PNH",
"Cardiolipin & Phosphatidylglycerol",
"Phospholipases & Degradation",
"Plasmalogens & PAF",
"Sphingolipids, Ceramide & Sphingomyelin",
"Glycolipid Classes",
"Lysosomal Storage Disorders Overview",
"Niemann-Pick Disease",
"Gaucher Disease",
"Tay-Sachs & GM2 Gangliosidoses",
"Fabry, Krabbe, MLD & Other Sphingolipidoses",
"Practice Questions · Complex Lipids (from the slides)",
"Eicosanoid Classes & Effects",
"Arachidonic Acid Release & PLA2",
"COX Pathway & Prostanoids",
"NSAIDs, Aspirin & COX-2 Inhibitors",
"Lipoxygenase Pathway & Leukotrienes",
"Practice Questions · Eicosanoids (from the slides)",
"Lipoprotein Structure & Classification",
"Chylomicron Metabolism & Lipoprotein Lipase",
"VLDL, IDL & LDL Metabolism",
"LDL Receptor, ACAT & Atherosclerosis",
"HDL & Reverse Cholesterol Transport",
"Hyperlipoproteinemias: Types I, IIa, III & IV",
"LCAT Deficiency, Fish-Eye, Tangier & Abetalipoproteinemia",
"Practice Questions · Lipoproteins (from the slides)",
"Cholesterol Structure & Functions",
"Cholesterol Synthesis: Pathway & Sites",
"Regulation of HMG-CoA Reductase",
"Practice Questions · Cholesterol (from the slides)",
"Heme & Myoglobin Structure",
"Hemoglobin Structure: T & R States",
"O₂ Binding Curves & Cooperativity",
"Bohr Effect, CO₂ & Curve Shifts",
"2,3-BPG & Fetal Hemoglobin",
"CO, Cyanide & Methemoglobin",
"Globin Genes & Hemoglobin Types",
"Sickle Cell Disease, HbC, HbSC & HbE",
"Thalassemias",
"Practice Questions · Hemoglobin (from the slides)",
"PDH Complex",
"TCA Cycle Reactions & Energetics",
"TCA Regulation, Inhibitors & Anaplerosis",
"Electron Transport Chain & Uncouplers",
"PDH Complex: Reaction & Regulation",
"PDH Deficiency, Arsenic & Thiamine",
"TCA Reactions, Site & Energetics",
"TCA Regulation & Inhibitors",
"Anaplerosis & Amphibolic Role",
"NADH Shuttles",
"Practice Questions · Citric Acid Cycle (from the slides)"
];
window.CRS_BC_QUESTIONS = [
{
"t": "Overview & Activation",
"lv": "Easy",
"s": "A long-chain fatty acid released from adipose tissue reaches a muscle cell. Before it can enter the mitochondrion, it is activated. Which statement about this activation is correct?",
"c": [
"Carnitine acyltransferase I uses 1 ATP, forming acyl-carnitine",
"Acyl CoA synthetase uses 2 ATP equivalents, ATP → AMP + PPi",
"Acyl CoA synthetase uses 1 ATP, ATP → ADP + Pi in the matrix",
"Thiolase uses 2 ATP to attach CoA in the mitochondrial matrix",
"No ATP is needed; albumin delivers fatty acyl CoA ready-made"
],
"a": 1,
"e": "Activation: FFA + CoA + ATP → acyl CoA + AMP + PPi, by acyl CoA synthetase (thiokinase) in the cytosol / outer mitochondrial membrane. PPi is split to 2 Pi, so the cost is 2 ATP equivalents. This is why the net yield of palmitate is 131 − 2 = 129 ATP.",
"w": [
"CPT I transfers an already activated acyl group to carnitine; it uses no ATP.",
"",
"Activation happens in the cytosol / outer membrane, and ATP goes to AMP, costing 2 ATP equivalents.",
"Thiolase is the last step of each β-oxidation cycle and uses no ATP.",
"Albumin carries free fatty acids; they must still be activated to acyl CoA."
],
"src": "lec"
},
{
"t": "Overview & Activation",
"lv": "Easy",
"s": "During a fast, fatty acids released from adipose tissue travel in plasma on albumin. Which cell type cannot oxidize them for energy at all?",
"c": [
"Hepatocytes",
"Red blood cells",
"Skeletal muscle fibers",
"Cardiac myocytes",
"Renal cortex cells"
],
"a": 1,
"e": "β-oxidation removes 2-carbon units as acetyl CoA in the mitochondrial matrix, mainly in liver, skeletal muscle and heart. Red blood cells have no mitochondria, so they can't oxidize fatty acids and depend entirely on glucose.",
"w": [
"The liver is a main site of β-oxidation.",
"",
"Muscle is a main site of β-oxidation.",
"The heart readily burns fatty acids.",
"These have mitochondria and can oxidize fatty acids."
],
"src": "lec"
},
{
"t": "Carnitine Shuttle",
"lv": "Easy",
"s": "Which pairing of carnitine-shuttle component and its location or job is correct?",
"c": [
"CACT: inner-membrane antiporter, carnitine out",
"CPT I: inner membrane, makes acyl CoA in the matrix",
"CPT II: outer membrane, inhibited by malonyl CoA",
"CACT: outer-membrane symporter moving acyl CoA inward",
"CPT I: matrix enzyme that is activated by malonyl CoA"
],
"a": 0,
"e": "Carnitine shuttle, outside → in: CPT I (outer membrane) acyl CoA → acyl-carnitine, inhibited by malonyl CoA; CACT (inner membrane) antiporter, acyl-carnitine in / free carnitine out; CPT II (inner membrane) acyl-carnitine → acyl CoA in the matrix. Only long-chain fatty acids need it; medium-chain fatty acids enter freely.",
"w": [
"",
"That is CPT II. CPT I is on the outer membrane and makes acyl-carnitine.",
"CPT I is the outer-membrane enzyme that malonyl CoA inhibits.",
"Acyl CoA itself never crosses; CACT is an inner-membrane antiporter.",
"CPT I is on the outer membrane and malonyl CoA inhibits it."
],
"src": "lec"
},
{
"t": "Carnitine Shuttle",
"lv": "Easy",
"s": "Which fatty acids can enter the mitochondrial matrix without the carnitine shuttle?",
"c": [
"Long-chain fatty acids such as palmitate",
"Very long chain fatty acids over 20 carbons",
"Phytanic acid",
"Stearic acid",
"Medium-chain fatty acids"
],
"a": 4,
"e": "Medium-chain fatty acids cross the inner membrane freely, so they bypass CPT I, CACT and CPT II. This is why MCFA are given in CPT II deficiency. Long-chain acyl CoA (palmitate 16C, stearate 18C) must use the carnitine shuttle.",
"w": [
"Long chains need carnitine to cross the inner membrane.",
"These go to peroxisomes first.",
"Phytanic acid is handled by peroxisomal α-oxidation.",
"Stearate, 18 carbons, is long-chain and needs carnitine.",
""
],
"src": "lec"
},
{
"t": "Carnitine Shuttle",
"lv": "Hard",
"s": "A patient on a sulfonylurea is given a meal rich in carbohydrate. Which pair of factors would both lower long-chain fatty acid entry into the mitochondria?",
"c": [
"High insulin activating CPT I and sulfonylurea activating CPT II",
"Low malonyl CoA and sulfonylurea inhibiting the CACT antiporter",
"Medium-chain fatty acids competing with carnitine for CPT I",
"Glucagon phosphorylating CPT I and NADH inhibiting CPT II",
"Malonyl CoA and the sulfonylurea, both blocking CPT"
],
"a": 4,
"e": "Two layers: (1) In the fed state insulin activates acetyl-CoA carboxylase, raising malonyl CoA, which inhibits CPT I, so the cell does not oxidize fat while it is making it. (2) Sulfonylureas inhibit both CPT I and CPT II. Together they shut down long-chain fatty acid entry into the matrix.",
"w": [
"Insulin raises malonyl CoA, which inhibits CPT I; sulfonylureas inhibit, not activate, the CPTs.",
"Malonyl CoA is high in the fed state, and sulfonylureas act on CPT I and II, not CACT.",
"MCFA bypass the shuttle and do not compete for CPT I.",
"Glucagon is low after a carbohydrate meal, and NADH inhibits 3-hydroxyacyl CoA DH, not CPT II.",
""
],
"src": "lec"
},
{
"t": "Carnitine & CPT Deficiencies",
"lv": "Easy",
"s": "Which patient is most likely to develop SECONDARY carnitine deficiency?",
"c": [
"An infant with an SLC22A5 mutation",
"A teen with exercise-induced myoglobinuria",
"A child who ate unripe ackee fruit",
"A man on dialysis taking valproate",
"A boy with an ABCD1 mutation"
],
"a": 3,
"e": "Secondary carnitine deficiency is acquired and milder. Causes: ↑ demand (pregnancy, trauma, burns, infection), ↓ synthesis (liver or kidney disease, since carnitine is made from lysine + methionine there), loss through dialysis, ↓ intake (malnutrition, strict vegetarians) and drugs such as valproate. This patient has two causes.",
"w": [
"That is primary, genetic carnitine deficiency.",
"That pattern fits CPT II deficiency.",
"Ackee causes Jamaican vomiting sickness by blocking acyl CoA dehydrogenases.",
"",
"That is X-linked adrenoleukodystrophy."
],
"src": "lec"
},
{
"t": "Carnitine & CPT Deficiencies",
"lv": "Easy",
"s": "Systemic carnitine deficiency causes hypoglycemia without ketones. Which statement links the two?",
"c": [
"Carnitine is a direct cofactor of glucose-6-phosphatase",
"Excess acylcarnitine in urine pulls glucose out with it",
"Insulin rises because carnitine normally inhibits its release",
"Ketone bodies are made from carnitine directly",
"Less FAO → less ATP and acetyl CoA for both"
],
"a": 4,
"e": "Without carnitine, long-chain fatty acids cannot enter mitochondria → ↓ β-oxidation → ↓ acetyl CoA (no ketogenesis) and ↓ ATP to power gluconeogenesis. Result: hypoketotic hypoglycemia, encephalopathy, triglyceride accumulation in muscle, hepatomegaly; heart → cardiomyopathy; skeletal muscle → myopathy and myoglobinuria. Note: no acylcarnitines in urine.",
"w": [
"Carnitine is not a cofactor of gluconeogenic enzymes.",
"There are no acylcarnitines in urine in systemic deficiency.",
"Hypoglycemia here is not due to insulin.",
"Ketones are made from acetyl CoA.",
""
],
"src": "lec"
},
{
"t": "Carnitine & CPT Deficiencies",
"lv": "Hard",
"s": "A 2-year-old has hypotonia, hepatomegaly and a dilated cardiomyopathy. After a fasting illness she is drowsy with low glucose and no urine ketones. Urine free carnitine is high but plasma carnitine is very low. Which defect best explains this?",
"c": [
"CPT II deficiency from prolonged exercise",
"Secondary carnitine deficiency from a vegan diet",
"MCAD deficiency with medium-chain acylcarnitines",
"OCTN2 carnitine transporter mutation, SLC22A5",
"Methylmalonyl CoA mutase deficiency"
],
"a": 3,
"e": "Primary systemic carnitine deficiency: AR mutation of SLC22A5 → OCTN2, the plasma-membrane carnitine transporter. The kidney cannot reabsorb carnitine, so urine free carnitine ↑ while plasma/tissue carnitine ↓. Without carnitine, long-chain fatty acids cannot enter mitochondria → ↓ FAO and ↓ gluconeogenesis → hypoketotic hypoglycemia and encephalopathy, worse with fasting. Muscle and heart rely on fat → myopathy and dilated cardiomyopathy.",
"w": [
"CPT II deficiency presents in teens with exercise-induced myoglobinuria, not infant cardiomyopathy with renal carnitine loss.",
"Secondary deficiency is milder and would not cause urinary carnitine wasting.",
"MCAD gives high urine acylcarnitines and normal free carnitine handling.",
"",
"This causes methylmalonic acidemia, not carnitine wasting or cardiomyopathy."
],
"src": "lec"
},
{
"t": "Carnitine & CPT Deficiencies",
"lv": "Hard",
"s": "A 20-year-old man has muscle pain and cola-colored urine after a 6-hour hike without eating. His CK is 40,000 U/L, and his blood glucose is normal. Between episodes he is healthy, with normal strength. Which dietary change best prevents another episode?",
"c": [
"A high-fat, low-carbohydrate diet before long exercise",
"Swapping some long-chain fat for medium-chain triglycerides",
"Carnitine supplements with an overnight fast before activity",
"Eating simple sugar only in the minutes before exercise",
"Extra protein during exercise to replace muscle breakdown"
],
"a": 1,
"e": "• Myoglobinuria after prolonged exercise while fasting → muscle can't burn fat when it depends on it.\n• Normal glucose, normal strength between attacks and onset in the teens or 20s → CPT II deficiency, the most common cause of recurrent myoglobinuria.\n• Medium-chain fatty acids enter mitochondria without the carnitine shuttle, so they bypass the block.\nTreatment: avoid fasting, high carbohydrate, low fat, and medium-chain fatty acids.",
"w": [
"More long-chain fat worsens the block; he needs carbohydrate.",
"",
"Carnitine isn't lacking, and fasting triggers attacks.",
"That's advice for a glycogen disorder, not a fat-oxidation defect.",
"Protein doesn't bypass the carnitine shuttle block."
],
"src": "lec"
},
{
"t": "β-Oxidation Reactions",
"lv": "Easy",
"s": "Which sequence of β-oxidation reactions is correct, with the coenzyme used at each oxidation?",
"c": [
"Dehydrogenation with NAD⁺, hydration, dehydrogenation with FAD, thiolysis",
"Hydration, dehydrogenation with FAD, thiolysis, dehydrogenation with NAD⁺",
"Condensation, reduction with NADPH, dehydration, reduction with NADPH",
"Dehydrogenation with FAD, hydration, dehydrogenation with NAD⁺, thiolysis",
"Dehydrogenation with FAD, thiolysis, hydration, dehydrogenation with NAD⁺"
],
"a": 3,
"e": "β-oxidation, 4 steps per cycle: (1) acyl CoA dehydrogenase, FAD → FADH₂, forms trans-Δ²-enoyl CoA; (2) enoyl CoA hydratase adds water → L-3-hydroxyacyl CoA; (3) 3-hydroxyacyl CoA dehydrogenase, NAD⁺ → NADH → β-ketoacyl CoA; (4) thiolase + CoA → acetyl CoA + an acyl CoA 2 carbons shorter. Synthesis runs the mirror image with NADPH.",
"w": [
"The first oxidation uses FAD and the second uses NAD⁺.",
"The cycle starts with acyl CoA dehydrogenase and ends with thiolase.",
"This is the fatty acid synthase cycle, the reverse process.",
"",
"Thiolysis is last; it cleaves off acetyl CoA after both oxidations."
],
"src": "lec"
},
{
"t": "β-Oxidation Reactions",
"lv": "Easy",
"s": "Which acyl CoA dehydrogenase handles fatty acyl chains from 14 down to 4 carbons?",
"c": [
"Long-chain acyl CoA dehydrogenase, LCAD",
"Short-chain acyl CoA dehydrogenase, SCAD",
"Medium-chain acyl CoA DH, MCAD",
"Very-long-chain acyl CoA oxidase",
"3-Hydroxyacyl CoA dehydrogenase"
],
"a": 2,
"e": "Acyl CoA dehydrogenases are chain-length specific: LCAD 12–18C, MCAD 14→4C, SCAD 4 and 6C. Because MCAD covers such a wide middle range, its deficiency, the most common FAO disorder, stalls oxidation of most of the chain.",
"w": [
"LCAD acts on 12 to 18 carbons.",
"SCAD acts only on 4- and 6-carbon chains.",
"",
"This peroxisomal enzyme handles chains over 20 carbons.",
"This is step 3 of β-oxidation, not chain-length specific in this way."
],
"src": "lec"
},
{
"t": "Energetics & Regulation",
"lv": "Easy",
"s": "Which fatty acids can β-oxidation degrade completely without any extra enzymes?",
"c": [
"Unsaturated fatty acids with an odd number of carbons",
"Saturated fatty acids with an even number of carbons",
"Branched fatty acids such as phytanic acid",
"Very long chain fatty acids of 26 carbons",
"Any fatty acid under 20 carbons"
],
"a": 1,
"e": "Complete degradation by the 4 standard steps works only for saturated, even-carbon fatty acids. Unsaturated → isomerase/reductase; odd-chain → propionyl CoA pathway (biotin, B12); VLCFA → peroxisomes; branched → α-oxidation.",
"w": [
"These need both an isomerase or reductase and the propionyl CoA pathway.",
"",
"Branched chains need α-oxidation first.",
"These must first be shortened in peroxisomes.",
"Unsaturation or an odd chain still needs extra enzymes."
],
"src": "lec"
},
{
"t": "Energetics & Regulation",
"lv": "Hard",
"s": "Using 3 ATP per NADH, 2 per FADH₂ and 12 per acetyl CoA, what is the net ATP yield from complete oxidation of one free palmitate molecule?",
"c": [
"131",
"146",
"117",
"129",
"106"
],
"a": 3,
"e": "Palmitate, C16:\n• n/2 − 1 = 7 cycles → 7 FADH₂ (× 2 = 14) and 7 NADH (× 3 = 21).\n• 8 acetyl CoA (× 12 = 96).\n• Gross = 131; minus 2 ATP equivalents for activation = 129 ATP.\nStearate, C18, gives 146.",
"w": [
"That's the gross yield before subtracting activation.",
"That's the net yield from stearate, C18.",
"This counts only 7 acetyl CoA; palmitate gives 8.",
"",
"This leaves out the FADH₂ and NADH from the cycles."
],
"src": "lec"
},
{
"t": "Energetics & Regulation",
"lv": "Hard",
"s": "A man eats a large carbohydrate meal, and his insulin rises. In his liver, which molecule most directly stops fatty acids from entering mitochondria for β-oxidation?",
"c": [
"Acetyl CoA",
"Malonyl CoA",
"Palmitoyl CoA",
"Citrate",
"Carnitine"
],
"a": 1,
"e": "• Fed state → insulin → ACC is dephosphorylated and active.\n• ACC makes malonyl CoA, the first intermediate of fatty acid synthesis.\n• Malonyl CoA inhibits CPT I, the gate into the mitochondria, so newly made fat isn't burned.\nProduct inhibition also slows β-oxidation: NADH ⊣ 3-hydroxyacyl CoA dehydrogenase and acetyl CoA ⊣ thiolase.",
"w": [
"Acetyl CoA slows thiolase, inside the mitochondria; it doesn't block entry.",
"",
"That's the substrate CPT I carries in, not the inhibitor.",
"Citrate activates ACC, which makes the inhibitor; it doesn't block CPT I itself.",
"Carnitine is the carrier that allows entry."
],
"src": "lec"
},
{
"t": "Unsaturated & Odd-Chain Fatty Acids",
"lv": "Easy",
"s": "Why does oxidation of an unsaturated fatty acid need extra enzymes compared with a saturated one?",
"c": [
"It cannot be activated by acyl CoA synthetase",
"Its cis double bonds need an isomerase or reductase",
"It needs peroxisomes because it is always over 20 carbons",
"It yields propionyl CoA in its final cycle",
"It cannot use the carnitine shuttle"
],
"a": 1,
"e": "Natural double bonds are cis and often in the wrong position for enoyl CoA hydratase. Odd-numbered double bonds need an isomerase; even-numbered ones need a reductase + isomerase. Complete degradation by the standard 4 steps works only for saturated, even-carbon chains.",
"w": [
"Unsaturated fatty acids are activated normally.",
"",
"Length, not unsaturation, sends chains to peroxisomes.",
"That is odd-chain fatty acids.",
"Long-chain unsaturated fatty acids use the shuttle like saturated ones."
],
"src": "lec"
},
{
"t": "Unsaturated & Odd-Chain Fatty Acids",
"lv": "Hard",
"s": "A woman who has been a strict vegan for 10 years has fatigue and numbness in her feet. Her urine methylmalonic acid is high. The metabolite that builds up partly comes from oxidizing which part of her dietary fat?",
"c": [
"The final 3 carbons of odd-chain fatty acids",
"Acetyl CoA from even-chain fatty acids",
"Glycerol released from triacylglycerol lipolysis",
"Malonyl CoA made in the cytosol",
"Phytanic acid from dairy fat"
],
"a": 0,
"e": "• A long-term vegan with neuropathy and high methylmalonic acid → B12 deficiency.\n• B12 is the cofactor for methylmalonyl CoA mutase (L-methylmalonyl CoA → succinyl CoA), so methylmalonyl CoA backs up.\n• Methylmalonyl CoA comes from propionyl CoA, the 3-carbon piece left at the end of odd-chain fatty acid oxidation (valine and isoleucine feed it too).\nThe pathway: propionyl CoA carboxylase (biotin) → D-methylmalonyl CoA → racemase → L-methylmalonyl CoA → mutase (B12) → succinyl CoA → TCA.",
"w": [
"",
"Acetyl CoA goes to the TCA cycle and doesn't pass through methylmalonyl CoA.",
"Glycerol goes to the liver for gluconeogenesis or glycolysis.",
"Malonyl CoA is a synthesis intermediate, not an oxidation product.",
"Phytanic acid is handled by α-oxidation; she's vegan anyway."
],
"src": "lec"
},
{
"t": "Methylmalonic Aciduria",
"lv": "Hard",
"s": "A 4-month-old has vomiting, poor feeding, hypotonia and metabolic acidosis. Urine methylmalonic acid is high. Which pair of causes could each produce this?",
"c": [
"Biotin deficiency or propionyl CoA carboxylase mutation",
"Folate deficiency or MCAD mutation",
"B12 deficiency or methylmalonyl CoA mutase mutation",
"Carnitine deficiency or CPT II mutation",
"Racemase excess or high succinyl CoA levels"
],
"a": 2,
"e": "Methylmalonic aciduria: L-methylmalonyl CoA cannot become succinyl CoA because of B12 deficiency or a mutase mutation. Precursors build up (methylmalonic acid → acidosis) and products are lacking. Presentation is a toxic encephalopathy: lethargy, failure to thrive, vomiting, dehydration, respiratory distress, hypotonia, delay, seizures, hepatomegaly.",
"w": [
"These block the step before methylmalonyl CoA, so it would not build up.",
"Neither blocks conversion of methylmalonyl CoA.",
"",
"These block fatty acid entry, not propionate metabolism.",
"Neither is a recognized cause of methylmalonic aciduria."
],
"src": "lec"
},
{
"t": "Peroxisomal, α- & ω-Oxidation",
"lv": "Easy",
"s": "Which statement about peroxisomal β-oxidation is correct?",
"c": [
"It oxidizes chains completely to acetyl CoA without mitochondria",
"Its first enzyme, acyl CoA dehydrogenase, feeds FADH₂ to the ETC",
"It is the main pathway for medium-chain fatty acids",
"It is inhibited by fat-rich diets",
"It shortens VLCFA and its oxidase makes H₂O₂"
],
"a": 4,
"e": "Very long chain fatty acids (>20C) are shortened in peroxisomes. The first enzyme, acyl CoA oxidase, hands electrons from FADH₂ to O₂ → H₂O₂ (no ATP). Oxidation stops at octanoyl CoA, which moves to mitochondria. Fat-rich diets up-regulate it.",
"w": [
"It stops at octanoyl CoA, which goes to mitochondria.",
"In peroxisomes, acyl CoA oxidase passes electrons straight to O₂, making H₂O₂.",
"Medium chains go straight into mitochondria.",
"Fat-rich diets up-regulate it, causing low-grade inflammation.",
""
],
"src": "lec"
},
{
"t": "Peroxisomal, α- & ω-Oxidation",
"lv": "Easy",
"s": "Which statement about α-oxidation is correct?",
"c": [
"In peroxisomes, it removes one carbon",
"It occurs in the ER and makes dicarboxylic acids",
"It is the main energy-producing pathway for fat",
"It shortens very long chains to octanoyl CoA",
"It needs vitamin B12 to form succinyl CoA"
],
"a": 0,
"e": "α-oxidation in liver peroxisomes clears branched fatty acids. Phytanic acid has a methyl on the β-carbon, which blocks β-oxidation; phytanoyl CoA hydroxylase hydroxylates the α-carbon, which is removed as CO₂. The product then enters β-oxidation. Energy-inefficient, but needed to clear branched FAs.",
"w": [
"",
"That describes ω-oxidation.",
"It is energy-inefficient; β-oxidation is the main pathway.",
"That is peroxisomal β-oxidation.",
"That is propionyl CoA metabolism."
],
"src": "lec"
},
{
"t": "Peroxisomal, α- & ω-Oxidation",
"lv": "Hard",
"s": "A patient's β-oxidation is blocked. Which pathway takes over for medium-chain fatty acids, where does it occur, and what appears in urine?",
"c": [
"α-oxidation in peroxisomes, producing phytanic acid",
"ω-oxidation in the ER, producing dicarboxylic acids",
"ω-oxidation in mitochondria, producing ketone bodies",
"Peroxisomal β-oxidation, producing octanoyl carnitine only",
"α-oxidation in the ER, producing propionyl CoA"
],
"a": 1,
"e": "ω-oxidation is a minor pathway in the ER that oxidizes the methyl (ω) end to a carboxyl group. It matters when β-oxidation fails, producing dicarboxylic acids that spill into urine. This is the dicarboxylic aciduria of MCAD deficiency and Jamaican vomiting sickness.",
"w": [
"α-oxidation clears branched phytanic acid; it does not produce it.",
"",
"ω-oxidation is in the ER, and blocked β-oxidation lowers ketones.",
"That pathway handles very long chains, not medium chains.",
"α-oxidation is peroxisomal and removes one carbon as CO₂."
],
"src": "lec"
},
{
"t": "MCAD Deficiency & Jamaican Vomiting Sickness",
"lv": "Hard",
"s": "A 9-month-old breastfed infant is found limp after sleeping through the night with a cold. Glucose is very low, urine ketones are absent, ammonia is high and urine shows dicarboxylic acids and medium-chain acylcarnitines. Why is ammonia high?",
"c": [
"Carnitine is lost in urine, blocking the urea cycle",
"Low acetyl CoA → less NAG → slower urea cycle",
"High ketones inhibit carbamoyl phosphate synthetase I",
"Excess acetyl CoA inhibits ornithine transcarbamylase",
"Dicarboxylic acids directly inactivate arginase"
],
"a": 1,
"e": "This is MCAD deficiency, the most common FAO inborn error, a cause of SIDS. Triggers: infection and overnight fasting; breast milk is rich in MCFA. Block → MCFA build up → ↑ urine acylcarnitines and dicarboxylic acids (via ω-oxidation; acidosis). ↓ ATP and acetyl CoA → ↓ gluconeogenesis (hypoglycemia), ↓ ketones, and ↓ N-acetylglutamate, the activator of CPS I → ↓ urea cycle → hyperammonemia.",
"w": [
"Carnitine loss does not directly control the urea cycle.",
"",
"Ketones are low, not high, in this disorder.",
"Acetyl CoA is low because β-oxidation is blocked.",
"This is not the mechanism taught."
],
"src": "lec"
},
{
"t": "MCAD Deficiency & Jamaican Vomiting Sickness",
"lv": "Hard",
"s": "A child in Jamaica eats unripe ackee fruit and develops vomiting and profound hypoglycemia. Which feature does this share with MCAD deficiency?",
"c": [
"An autosomal recessive PEX gene mutation",
"Accumulation of phytanic acid in tissues",
"Very high ketone bodies during the episode",
"Absent carnitine in plasma from renal wasting",
"Blocked acyl CoA DH and dicarboxylic aciduria"
],
"a": 4,
"e": "Unripe ackee contains hypoglycin, which inactivates medium- and short-chain acyl CoA dehydrogenases. Like MCAD deficiency, fat cannot be oxidized, so there is profound hypoglycemia, low ketones and dicarboxylic aciduria from ω-oxidation. Jamaican vomiting sickness adds vomiting, abdominal pain and lethargy.",
"w": [
"PEX mutations cause Zellweger; ackee poisoning is acquired.",
"That is Refsum disease, a defect of α-oxidation.",
"Both block β-oxidation, so ketones are low.",
"That is primary carnitine deficiency.",
""
],
"src": "lec"
},
{
"t": "Zellweger, X-ALD & Refsum",
"lv": "Easy",
"s": "A man has cerebellar ataxia, polyneuropathy, ichthyosis and night blindness. His plasma phytanic acid is very high. Which pathway is blocked?",
"c": [
"ω-oxidation",
"Mitochondrial β-oxidation",
"α-oxidation",
"Peroxisomal VLCFA import",
"Propionyl CoA carboxylation"
],
"a": 2,
"e": "Adult Refsum disease: PHYH or PEX7 mutation → phytanoyl CoA hydroxylase deficiency → α-oxidation fails. Phytanic acid, a β-methyl branched fatty acid from dairy and ruminant fat, can't enter β-oxidation and builds up. Features: weakness, polyneuropathy, cerebellar ataxia, ichthyosis, retinitis pigmentosa (night blindness), anosmia.",
"w": [
"ω-oxidation is a minor ER pathway that makes dicarboxylic acids.",
"A block here gives hypoketotic hypoglycemia, not phytanic acid buildup.",
"",
"That's X-ALD, with VLCFA buildup.",
"That gives propionic acidemia."
],
"src": "lec"
},
{
"t": "Zellweger, X-ALD & Refsum",
"lv": "Hard",
"s": "A newborn has a high forehead, flat midface, large fontanel, hypotonia, hepatomegaly and renal cysts. Plasma VLCFA and branched fatty acids are high and plasmalogens are low. What is the defect?",
"c": [
"ABCD1 mutation in the peroxisomal VLCFA transporter",
"PHYH mutation in phytanoyl CoA hydroxylase",
"PEX gene mutation preventing peroxisome formation",
"SLC22A5 mutation in the carnitine transporter",
"MCAD mutation in medium-chain dehydrogenase"
],
"a": 2,
"e": "Zellweger syndrome: AR mutations in PEX genes (12 known) → peroxisomes fail to form. Every peroxisomal job is lost: ↑ VLCFA (no peroxisomal β-oxidation), ↑ branched fatty acids (no α-oxidation), ↓ plasmalogens and PAF. Cerebrohepatorenal: CNS hypomyelination, hepatomegaly, renal cysts, dysmorphic face.",
"w": [
"X-ALD raises VLCFA but does not cause these newborn facial and renal features.",
"Adult Refsum raises phytanic acid only and presents later.",
"",
"This causes primary carnitine deficiency, not peroxisomal failure.",
"MCAD affects mitochondrial oxidation, not VLCFA or plasmalogens."
],
"src": "lec"
},
{
"t": "Zellweger, X-ALD & Refsum",
"lv": "Hard",
"s": "A 7-year-old boy's school performance and behavior have been getting worse for a year, and his skin is darkening. His morning cortisol is low, and MRI shows demyelination of the cerebral white matter. Which defective protein best explains all of this?",
"c": [
"Phytanoyl CoA hydroxylase PHYH",
"PEX proteins for peroxisome assembly",
"Medium-chain acyl-CoA dehydrogenase",
"Peroxisomal VLCFA transporter ABCD1",
"Carnitine palmitoyltransferase II"
],
"a": 3,
"e": "• Neurologic decline with white-matter demyelination + adrenal insufficiency (low cortisol, hyperpigmentation) in a boy → X-linked adrenoleukodystrophy.\n• Mutation of ABCD1 → ALDP, the peroxisomal membrane transporter that brings VLCFA in for oxidation.\n• VLCFA build up in brain white matter, the adrenal cortex and Leydig cells (sexual dysfunction).",
"w": [
"That's adult Refsum disease, without adrenal failure.",
"Zellweger presents in infancy with hypotonia and liver disease.",
"MCAD deficiency causes fasting hypoketotic hypoglycemia.",
"",
"CPT II causes exercise myoglobinuria."
],
"src": "lec"
},
{
"t": "Synthesis vs β-Oxidation & Sites",
"lv": "Easy",
"s": "A drug blocks the pentose phosphate pathway in hepatocytes, sharply lowering cytosolic NADPH. Which process slows the most?",
"c": [
"β-oxidation of fatty acids",
"Ketone body formation",
"Fatty acid synthesis",
"Lipolysis by HSL",
"Citrate export from mitochondria"
],
"a": 2,
"e": "Synthesis vs oxidation:\n• Synthesis: cytosol, 2-carbon units added as malonyl CoA, reductant NADPH (from the pentose phosphate pathway and malic enzyme), carrier ACP.\n• Oxidation: mitochondrial matrix, 2-carbon units removed as acetyl CoA, makes NADH and FADH₂, carrier CoA.\nCutting NADPH starves the two reduction steps of every FAS cycle.",
"w": [
"β-oxidation uses NAD⁺ and FAD in the matrix, not NADPH.",
"Ketogenesis runs in mitochondria and doesn't need NADPH.",
"",
"Lipolysis is hydrolysis and needs no NADPH.",
"Citrate export doesn't use NADPH; the shuttle actually makes some."
],
"src": "lec"
},
{
"t": "Synthesis vs β-Oxidation & Sites",
"lv": "Easy",
"s": "In which tissues does fatty acid synthesis mainly occur?",
"c": [
"Liver, lactating breast and adipose",
"Brain, kidney and red blood cells",
"Skeletal muscle, heart and kidney",
"Small intestine, pancreas and spleen",
"Adrenal cortex, gonads and skin only"
],
"a": 0,
"e": "Fatty acid synthesis takes place in the cytoplasm of the liver, lactating mammary gland and adipose tissue. Excess dietary carbohydrate and protein are converted to fatty acids there.",
"w": [
"",
"These are not sites of fatty acid synthesis.",
"Muscle and heart mainly oxidize fatty acids.",
"Not the sites listed.",
"These use lipids for steroids, but are not the main synthesis sites."
],
"src": "lec"
},
{
"t": "Citrate Shuttle: Acetyl-CoA to Cytosol",
"lv": "Easy",
"s": "Which enzyme in the citrate shuttle produces NADPH?",
"c": [
"Malate dehydrogenase, OAA → malate",
"ATP-citrate lyase, citrate → acetyl CoA + OAA",
"Malic enzyme, malate → pyruvate + CO₂",
"Pyruvate carboxylase, pyruvate → OAA",
"Citrate synthase, acetyl CoA + OAA → citrate"
],
"a": 2,
"e": "In the cytosol, OAA → malate dehydrogenase (uses NADH) → malate → malic enzyme → pyruvate + CO₂ + NADPH. One NADPH per acetyl CoA transported: 8 of the 14 needed for palmitate.",
"w": [
"This step uses NADH; it does not make NADPH.",
"This step uses ATP and makes no NADPH.",
"",
"This uses ATP and biotin.",
"This makes citrate in the matrix."
],
"src": "lec"
},
{
"t": "Citrate Shuttle: Acetyl-CoA to Cytosol",
"lv": "Hard",
"s": "After a high-carbohydrate meal, a researcher inhibits ATP-citrate lyase in hepatocytes. Which molecule builds up in the cytosol?",
"c": [
"Malonyl CoA",
"Acetyl CoA",
"Oxaloacetate",
"Palmitate",
"Citrate"
],
"a": 4,
"e": "Citrate shuttle: acetyl CoA (from PDH) can't cross the inner mitochondrial membrane.\n• Matrix: acetyl CoA + OAA → citrate synthase → citrate, which exits.\n• Cytosol: citrate + CoA + ATP → ATP-citrate lyase → acetyl CoA + OAA.\n• OAA → malate → malic enzyme → pyruvate + NADPH; pyruvate re-enters.\nBlock ATP-citrate lyase and citrate piles up in the cytosol, while acetyl CoA, malonyl CoA and palmitate fall.",
"w": [
"Malonyl CoA falls, because less acetyl CoA reaches ACC.",
"Cytosolic acetyl CoA falls, because citrate isn't cleaved.",
"OAA is a product of the blocked step, so it falls.",
"Synthesis slows, so palmitate falls.",
""
],
"src": "lec"
},
{
"t": "Citrate Shuttle: Acetyl-CoA to Cytosol",
"lv": "Hard",
"s": "After a large carbohydrate meal, mitochondrial citrate rises in a liver cell. Which two effects does citrate have that both favor fatty acid synthesis?",
"c": [
"It inhibits ATP-citrate lyase and activates CPT I",
"It carries acetyl groups into mitochondria and inhibits ACC",
"It activates HSL and inhibits fatty acid synthase",
"It carries acetyl groups out and activates ACC",
"It is reduced to malate, which directly supplies FAS with NADH"
],
"a": 3,
"e": "Citrate has a double role in the fed state: (1) it is the vehicle — it exits the mitochondrion and ATP-citrate lyase releases acetyl CoA in the cytosol (with malic enzyme then supplying NADPH); (2) it is a signal — it allosterically activates ACC, polymerizing the inactive dimer into an active polymer.",
"w": [
"Citrate is the substrate of ATP-citrate lyase, and CPT I opposes synthesis.",
"Citrate carries acetyl groups out of mitochondria and activates ACC.",
"Neither is a citrate effect.",
"",
"FAS uses NADPH, made by malic enzyme from malate."
],
"src": "lec"
},
{
"t": "Sources of NADPH",
"lv": "Hard",
"s": "A man with G6PD deficiency has normal malic enzyme. Making one palmitate needs 14 NADPH. Which share of that supply is reduced in him?",
"c": [
"The 8 NADPH from malic enzyme, not the 6 from the HMP",
"The 6 NADPH from the HMP pathway, not the 8 from malic enzyme",
"All 14 NADPH, since G6PD makes every NADPH",
"None, since NADPH for synthesis comes only from the citrate shuttle",
"The 7 NADPH used by ketoacyl reductase only"
],
"a": 1,
"e": "NADPH for one palmitate = 14: 8 from malic enzyme, one per acetyl CoA carried out by the citrate shuttle, and 6 from the HMP (pentose phosphate) pathway, whose first enzyme is G6PD. Exam twist: G6PD deficiency cuts the HMP share, not the malic enzyme share.",
"w": [
"Malic enzyme is unaffected by G6PD deficiency.",
"",
"Malic enzyme supplies most of the NADPH independently.",
"The HMP pathway supplies 6 of the 14.",
"The two reductases are not supplied by separate pathways."
],
"src": "lec"
},
{
"t": "Acetyl-CoA Carboxylase Reaction",
"lv": "Easy",
"s": "A patient with biotin deficiency has slowed fatty acid synthesis. Which reaction is directly impaired?",
"c": [
"Citrate to acetyl CoA plus OAA",
"Acetyl CoA to malonyl CoA",
"Malate to pyruvate plus NADPH",
"Palmitoyl-ACP to free palmitate",
"Pyruvate to acetyl CoA"
],
"a": 1,
"e": "Acetyl-CoA carboxylase is the committed, regulated step of fatty acid synthesis: acetyl CoA + HCO₃⁻ + ATP → malonyl CoA, irreversible. Its prosthetic group is biotin; ATP forms a carboxybiotin intermediate. The biotin carboxylases: ACC, pyruvate carboxylase and propionyl CoA carboxylase.",
"w": [
"ATP-citrate lyase doesn't use biotin.",
"",
"Malic enzyme doesn't use biotin.",
"Thioesterase doesn't use biotin.",
"PDH uses thiamine and lipoate, not biotin."
],
"src": "lec"
},
{
"t": "Acetyl-CoA Carboxylase Reaction",
"lv": "Hard",
"s": "A child with biotin deficiency is fasting and then fed. Which two reactions are directly impaired?",
"c": [
"Pyruvate carboxylase and ACC",
"ATP-citrate lyase and malic enzyme",
"Fatty acid synthase and thioesterase",
"Methylmalonyl CoA mutase and HSL",
"Citrate synthase and malate dehydrogenase"
],
"a": 0,
"e": "Biotin carboxylases to remember together: acetyl-CoA carboxylase (committed step of fatty acid synthesis) and pyruvate carboxylase (gluconeogenesis and the citrate shuttle's return of OAA). Propionyl CoA carboxylase also needs biotin.",
"w": [
"",
"Neither uses biotin.",
"FAS uses NADPH and pantetheine, not biotin.",
"The mutase uses B12; HSL has no vitamin cofactor.",
"Neither uses biotin."
],
"src": "lec"
},
{
"t": "Regulation of Acetyl-CoA Carboxylase",
"lv": "Hard",
"s": "Which set of conditions would all switch acetyl-CoA carboxylase ON?",
"c": [
"High AMP, glucagon, long-chain acyl CoA",
"Metformin, epinephrine, phosphorylation by AMPK",
"Citrate, insulin, a high-carb diet",
"Citrate, glucagon, cAMP-dependent kinase",
"Long-chain acyl CoA, insulin, SREBP-1c"
],
"a": 2,
"e": "ACC control: allosteric — citrate activates (inactive dimer → active polymer); long-chain fatty acyl CoA and AMP inhibit. Covalent — dephosphorylation (protein phosphatase, insulin) = ON; phosphorylation by AMPK (high AMP) or PKA (glucagon, epinephrine) = OFF. Transcriptional — high carbohydrate → ChREBP; insulin → SREBP-1c. Metformin activates AMPK → ACC off. Rule: dephosphorylated ACC = active (fed).",
"w": [
"All three inhibit ACC.",
"Phosphorylation and AMPK turn ACC off; metformin activates AMPK.",
"",
"Glucagon and PKA phosphorylate ACC, turning it off.",
"Long-chain acyl CoA inhibits ACC even though the others activate it."
],
"src": "lec"
},
{
"t": "Regulation of Acetyl-CoA Carboxylase",
"lv": "Hard",
"s": "A runner is mid-marathon. Which combination describes his acetyl-CoA carboxylase and fatty acid handling?",
"c": [
"Insulin dephosphorylates ACC → ↑ malonyl CoA → ↑ fatty acid synthesis",
"AMPK dephosphorylates ACC → ↑ malonyl CoA → CPT I blocked",
"AMPK phosphorylates ACC → ↓ malonyl CoA → CPT I disinhibited → ↑ FAO",
"Citrate polymerizes ACC → ↑ malonyl CoA → ↓ fatty acid oxidation",
"Glucagon dephosphorylates ACC → ↓ malonyl CoA → ↑ synthesis"
],
"a": 2,
"e": "Exercise → ATP used → AMP rises → AMPK phosphorylates ACC (inactive). Malonyl CoA falls, so its brake on CPT I is released and long-chain fatty acids enter mitochondria for β-oxidation. One molecule, malonyl CoA, links synthesis and oxidation so they never run at the same time.",
"w": [
"Insulin is low during prolonged exercise.",
"AMPK phosphorylates ACC, inactivating it.",
"",
"Citrate activation is a fed-state signal.",
"Glucagon causes phosphorylation, and synthesis falls."
],
"src": "lec"
},
{
"t": "Regulation of Acetyl-CoA Carboxylase",
"lv": "Hard",
"s": "A patient with type 2 diabetes starts metformin. Which chain explains its effect on hepatic fat metabolism?",
"c": [
"Metformin inhibits AMPK → ACC dephosphorylated → ↑ fatty acid synthesis",
"Metformin activates PKA → HSL dephosphorylated → ↓ lipolysis",
"Metformin binds citrate → ACC polymerizes → ↑ malonyl CoA",
"AMPK on → ACC phosphorylated → ↓ malonyl CoA → ↑ FAO",
"Metformin blocks CPT I directly → ↓ fat oxidation"
],
"a": 3,
"e": "Metformin activates AMPK. AMPK phosphorylates ACC, inactivating it → ↓ malonyl CoA → less fatty acid synthesis, and CPT I is no longer inhibited → more β-oxidation. Same direction as exercise or a high AMP state.",
"w": [
"Metformin activates AMPK.",
"Not the mechanism taught; PKA phosphorylates HSL.",
"Citrate activation would increase synthesis.",
"",
"Its effect via AMPK releases CPT I."
],
"src": "lec"
},
{
"t": "Fatty Acid Synthase Complex",
"lv": "Easy",
"s": "Which feature of human fatty acid synthase is correct?",
"c": [
"One polypeptide, a head-to-tail dimer, 7 sites",
"Seven separate enzymes floating free in the mitochondrial matrix",
"A single monomer with one active site that uses CoA as carrier",
"A membrane enzyme of the ER that elongates past C16",
"A peroxisomal complex that releases octanoyl CoA"
],
"a": 0,
"e": "Eukaryotic FAS: one large multifunctional polypeptide, functioning as a head-to-tail dimer in the cytosol, with 7 catalytic sites. Domain 1: acetyl and malonyl transferases, condensing enzyme (Cys–SH). Domain 2: ACP, ketoacyl reductase, dehydratase, enoyl reductase. Domain 3: thioesterase. The phosphopantetheine arm of ACP swings the chain between sites.",
"w": [
"",
"That describes bacteria and the wrong compartment.",
"It is a dimer with 7 sites, and its carrier is ACP.",
"Elongation beyond C16 is a separate ER system.",
"That is peroxisomal β-oxidation."
],
"src": "lec"
},
{
"t": "Fatty Acid Synthase Complex",
"lv": "Easy",
"s": "What is the role of the phosphopantetheine arm on fatty acid synthase?",
"c": [
"It is the cysteine that cuts the finished chain off",
"It binds biotin to carry CO₂",
"It reduces the keto group using NADPH",
"It swings the chain between active sites",
"It moves fatty acids into mitochondria"
],
"a": 3,
"e": "Acyl carrier protein (ACP) holds the growing chain on its long, flexible phosphopantetheine arm (derived from pantothenate, B5). The arm swings the chain between the 7 catalytic sites of FAS, so intermediates never leave the complex.",
"w": [
"Thioesterase releases the chain; the condensing enzyme has the Cys–SH.",
"That is the biotin of ACC.",
"That is ketoacyl reductase.",
"",
"That is the carnitine shuttle."
],
"src": "lec"
},
{
"t": "FAS Cycle & Palmitate Stoichiometry",
"lv": "Hard",
"s": "How many NADPH does fatty acid synthase use to build one palmitate from acetyl CoA and malonyl CoA?",
"c": [
"14",
"7",
"8",
"16",
"21"
],
"a": 0,
"e": "• Palmitate, C16 = 1 acetyl primer + 7 malonyl units → 7 FAS cycles.\n• Each cycle: condensation (malonyl decarboxylation releases CO₂) → reduction (NADPH) → dehydration → reduction (NADPH) = 2 NADPH.\n• 7 × 2 = 14 NADPH.\nAfter 7 rounds the chain is C16, and thioesterase, the ruler, releases palmitate 16:0.",
"w": [
"",
"Each cycle has two reductions, not one.",
"There are 7 cycles, each using 2 NADPH.",
"The acetyl primer doesn't need a cycle; there are 7, not 8.",
"There are 2 reductions per cycle, not 3."
],
"src": "lec"
},
{
"t": "FAS Cycle & Palmitate Stoichiometry",
"lv": "Hard",
"s": "Which is the correct overall equation for synthesis of one palmitate?",
"c": [
"Acetyl CoA + 7 malonyl CoA + 14 NADPH → palmitate",
"8 acetyl CoA + 7 NADPH → palmitate + 8 CoA",
"Acetyl CoA + 8 malonyl CoA + 16 NADPH → palmitate + 8 CO₂",
"Acetyl CoA + 7 malonyl CoA + 7 NADPH → palmitate + 7 CO₂",
"8 malonyl CoA + 14 NADH → palmitate + 8 CO₂ + 8 CoA"
],
"a": 0,
"e": "Acetyl CoA + 7 malonyl CoA + 14 NADPH + 20 H⁺ → palmitate + 7 CO₂ + 14 NADP⁺ + 8 CoA + 6 H₂O. One acetyl CoA primes; 7 rounds each add a malonyl (losing CO₂) and use 2 NADPH. Making 7 malonyl CoA also costs 7 ATP at ACC.",
"w": [
"",
"Malonyl CoA donates 7 of the 2-carbon units, and 14 NADPH are needed.",
"Only 7 malonyl CoA are added, using 2 NADPH each.",
"Each round uses 2 NADPH, so 14 in total.",
"Synthesis uses NADPH, and acetyl CoA primes the chain."
],
"src": "lec"
},
{
"t": "Elongation & Desaturation",
"lv": "Easy",
"s": "A liver cell converts palmitate, 16:0, to stearate, 18:0. Where does this happen?",
"c": [
"Cytosolic face of the ER",
"Mitochondrial matrix",
"Fatty acid synthase in the cytosol",
"Peroxisome",
"Golgi apparatus"
],
"a": 0,
"e": "Elongation beyond C16 happens on the cytosolic face of the ER. Malonyl CoA donates 2 carbons to the carboxyl end, again with NADPH. Desaturation also happens in the ER.",
"w": [
"",
"The matrix is where fatty acids are oxidized.",
"FAS stops at C16; it doesn't elongate further.",
"Peroxisomes shorten VLCFA; they don't elongate.",
"The Golgi doesn't elongate fatty acids."
],
"src": "lec"
},
{
"t": "Elongation & Desaturation",
"lv": "Hard",
"s": "A patient on long-term fat-free parenteral nutrition develops scaly dermatitis. Which explanation is correct?",
"c": [
"No desaturase acts beyond C9, so linoleate is essential",
"Humans cannot desaturate at C9, so oleate is essential",
"Humans cannot elongate past C16, so stearate is essential",
"Desaturases need ATP from oxidative phosphorylation, which fails without fat",
"Palmitate cannot be released without dietary fat activating thioesterase"
],
"a": 0,
"e": "ER desaturation uses NADH-cytochrome b5 reductase + cytochrome b5 + desaturase (O₂, NADH; non-heme iron; no ATP made). Human desaturases act only at C4, C5, C6 and C9, so we can make oleate 18:1 Δ9 but not linoleate 18:2 Δ9,12 or linolenate 18:3 Δ9,12,15. These essential fatty acids must come from the diet; deficiency (e.g. fat-free TPN) → scaly dermatitis.",
"w": [
"",
"Humans can make oleate 18:1 Δ9 themselves.",
"ER elongation makes stearate from palmitate.",
"Desaturation uses O₂ and NADH and makes no ATP; it is not the cause.",
"Thioesterase does not need dietary fat."
],
"src": "lec"
},
{
"t": "Triacylglycerol Synthesis",
"lv": "Easy",
"s": "Why is triacylglycerol called a neutral fat?",
"c": [
"It contains only saturated fatty acids",
"It is stored only in neutral pH lysosomes",
"It has a phosphate group that balances the charge",
"It carries an equal number of positive and negative charges",
"Its carboxyl groups are all esterified"
],
"a": 4,
"e": "In TAG the carboxyl groups of three fatty acids are esterified to glycerol, so there is no charge: a neutral fat. That makes it hydrophobic and ideal for compact storage.",
"w": [
"TAG can contain unsaturated fatty acids.",
"TAG is stored in lipid droplets.",
"That would be a phospholipid.",
"It carries no charges at all.",
""
],
"src": "lec"
},
{
"t": "Triacylglycerol Synthesis",
"lv": "Hard",
"s": "In adipose tissue after a carbohydrate meal, where does the glycerol backbone of new triacylglycerol come from, and why?",
"c": [
"Free glycerol → glycerol kinase → glycerol-3-P; adipose has plenty",
"Pyruvate → glycerol directly by pyruvate carboxylase",
"Acetyl CoA → glycerol-3-P by ATP-citrate lyase",
"Phosphatidic acid from the diet supplies it",
"Glucose → DHAP → glycerol-3-P; adipose has little glycerol kinase"
],
"a": 4,
"e": "Glycerol-3-phosphate is made from glucose: glycolysis → DHAP → glycerol-3-P dehydrogenase (NADH) → glycerol-3-P. Adipose relies on this because it has little glycerol kinase (the liver can use free glycerol). Then acyltransferase ×2 → phosphatidic acid → phosphatase → 1,2-DAG → acyltransferase → TAG. Insulin also brings glucose into adipocytes via GLUT4.",
"w": [
"Adipose has little glycerol kinase, so it relies on glucose.",
"Pyruvate carboxylase makes OAA.",
"ATP-citrate lyase makes acetyl CoA and OAA.",
"The backbone is made from glycolytic DHAP.",
""
],
"src": "lec"
},
{
"t": "Triacylglycerol Synthesis",
"lv": "Hard",
"s": "A man eats a very high-carbohydrate diet for weeks. Which chain of events leads to more triacylglycerol leaving his liver?",
"c": [
"Glucagon ↑ HSL → fatty acids → TAG exported in chylomicrons",
"Insulin ↑ CPT I → ↑ β-oxidation → TAG exported in LDL",
"AMPK ↑ ACC → ↑ malonyl CoA → TAG stored in liver only",
"ChREBP ↓ ACC → ↓ fatty acids → TAG exported in HDL",
"Insulin, ChREBP, SREBP-1c ↑ ACC → TAG out in VLDL"
],
"a": 4,
"e": "High carbohydrate → insulin plus transcription factors ChREBP and SREBP-1c → more and more active ACC → ↑ fatty acid synthesis → ↑ TAG, packaged and sent out of the liver as VLDL to muscle and adipose. This is how carbohydrate becomes body fat.",
"w": [
"Glucagon is low; chylomicrons carry dietary fat from the gut.",
"Insulin inhibits CPT I via malonyl CoA, and the liver exports VLDL.",
"AMPK inhibits ACC.",
"ChREBP increases ACC.",
""
],
"src": "lec"
},
{
"t": "TAG Fate & Lipolysis",
"lv": "Easy",
"s": "During a fast, which enzyme acts first on the triacylglycerol stored in an adipocyte's lipid droplet?",
"c": [
"HSL",
"MAG lipase",
"ATGL",
"Lipoprotein lipase",
"Pancreatic lipase"
],
"a": 2,
"e": "Lipolysis order: adipose triglyceride lipase (ATGL), TAG → DAG (perilipins on the droplet regulate access) → hormone-sensitive lipase, DAG → MAG → MAG lipase. Glycerol goes to the liver (which has glycerol kinase); fatty acids travel on albumin to tissues.",
"w": [
"HSL acts second, on DAG.",
"MAG lipase acts last.",
"",
"LPL acts on circulating lipoproteins at capillaries.",
"Pancreatic lipase digests dietary fat in the gut."
],
"src": "lec"
},
{
"t": "TAG Fate & Lipolysis",
"lv": "Easy",
"s": "After lipolysis in adipose tissue, what happens to the glycerol released?",
"c": [
"It is reused in the adipocyte by glycerol kinase",
"It is carried on albumin to muscle for oxidation",
"It is converted to malonyl CoA in adipose",
"Liver glycerol kinase phosphorylates it",
"It is excreted unchanged in urine"
],
"a": 3,
"e": "Lipolysis products: glycerol goes to the liver, which has glycerol kinase to phosphorylate it (for gluconeogenesis or TAG synthesis). Fatty acids travel on albumin to tissues, where they are activated and oxidized in mitochondria.",
"w": [
"Adipose has little glycerol kinase.",
"Fatty acids, not glycerol, are carried on albumin.",
"Not a fate of glycerol.",
"",
"It is used by the liver."
],
"src": "lec"
},
{
"t": "TAG Fate & Lipolysis",
"lv": "Hard",
"s": "After a 16-hour fast, glucagon and epinephrine raise cAMP in a hepatocyte. What happens to the activity of CPT I?",
"c": [
"It falls as malonyl CoA rises",
"It is phosphorylated and turned off",
"It rises as malonyl CoA falls",
"It stays the same, since only HSL responds",
"It rises because insulin is high"
],
"a": 2,
"e": "Same signal, opposite effect on two enzymes:\n• Fasting hormones → cAMP → PKA phosphorylates ACC → ACC off → malonyl CoA falls.\n• Less malonyl CoA → CPT I is released → fatty acids enter mitochondria and are burned.\n• PKA also phosphorylates HSL in adipose → HSL on → fat released.\nInsulin does the reverse through dephosphorylation. Classic NBME trap.",
"w": [
"PKA turns ACC off, so malonyl CoA falls.",
"CPT I is controlled by malonyl CoA, not PKA.",
"",
"PKA also hits ACC, which changes CPT I.",
"Insulin is low during a fast."
],
"src": "lec"
},
{
"t": "Practice Questions (from the slides)",
"s": "Biosynthesis of fatty acids takes place in the cytoplasmic region of certain organs/tissues. Acetyl CoA, which is generated in mitochondria, is the starting substance for fatty acid biosynthesis. However, acetyl CoA can never cross the inner mitochondrial membrane as such. Through which of the following compounds the acetyl CoA is transported from mitochondria to cytoplasm?",
"ns": true,
"shetty": 1,
"c": [
"Pyruvate",
"Malonyl CoA",
"Citrate",
"Oxaloacetate",
"Malate"
],
"a": 2,
"e": "Acetyl-CoA joins oxaloacetate to form citrate (citrate synthase), citrate crosses to the cytosol, and ATP-citrate lyase releases acetyl-CoA there. Citrate is the transporter from matrix to cytosol when acetyl-CoA is high.",
"w": [
"Pyruvate moves back into the mitochondria at the end of the shuttle.",
"Malonyl CoA is made in the cytosol, from acetyl-CoA, by ACC.",
"",
"Oxaloacetate does not cross; it is converted to malate in the cytosol.",
"Malate is converted to pyruvate by malic enzyme in the cytosol."
],
"src": "lec"
},
{
"t": "Practice Questions (from the slides)",
"s": "Hormonal imbalance between insulin and glucagon affects not only cardohydrate metabolism but also lipid metabolism. While insulin promotes the biosynthesis of fatty acid, glucagon exerts opposite effect. Both hormones are known to influence the major regulatory (key) enzyme of biosynthesis of fatty acid. Identify this regulatory enzyme from the following:",
"ns": true,
"shetty": 1,
"c": [
"Acetyl transacylase",
"Citrate synthase",
"Acetyl CoA carboxylase",
"Thiolase",
"Malonyl transacylase"
],
"a": 2,
"e": "Acetyl-CoA carboxylase catalyzes the irreversible, committed step and is the regulatory enzyme. Insulin activates it through protein phosphatase; glucagon inhibits it by phosphorylation.",
"w": [
"A fatty acid synthase activity, not the regulatory step.",
"Citrate synthase forms citrate in the TCA cycle.",
"",
"Thiolase acts in β-oxidation and ketone metabolism.",
"A fatty acid synthase activity, not the regulatory step."
],
"src": "lec"
},
{
"t": "Practice Questions (from the slides)",
"s": "A 45-year-old woman is fasting overnight. Her blood tests show low insulin levels and increased levels of glucagon and epinephrine. These hormonal changes would likely result in acetyl-CoA carboxylase (ACC) being:",
"ns": true,
"shetty": 1,
"c": [
"Activated by increased citrate",
"Inhibited by phosphorylation through AMP-activated protein kinase (AMPK)",
"Activated by dephosphorylation via protein phosphatase 2A",
"Activated by elevated levels of long-chain fatty acyl-CoA",
"Activated by increased glucose levels"
],
"a": 1,
"e": "During fasting or stress, glucagon and catecholamines activate AMPK, which phosphorylates and inhibits ACC.",
"w": [
"Citrate is high in the fed state, not during fasting.",
"",
"Dephosphorylation by phosphatase is the insulin, fed-state signal.",
"Long-chain fatty acyl-CoA inhibits ACC.",
"Glucose is low during fasting, and is not an ACC activator."
],
"src": "lec"
},
{
"t": "Practice Questions (from the slides)",
"s": "A researcher is studying the effects of high-fat diets on lipid metabolism. She observes that in hepatocytes exposed to elevated citrate concentrations, acetyl-CoA carboxylase (ACC) activity increases. Which of the following is the most likely effect of this increase in ACC activity?",
"ns": true,
"shetty": 1,
"c": [
"Decreased fatty acid synthesis",
"Increased fatty acid oxidation",
"Increased production of malonyl-CoA",
"Inhibition of fatty acid storage in adipocytes",
"Decreased levels of circulating glucose"
],
"a": 2,
"e": "Citrate allosterically activates ACC (inactive dimer → active polymer), so more acetyl-CoA is carboxylated to malonyl CoA, the committed step of fatty acid synthesis.",
"w": [
"More ACC activity increases fatty acid synthesis.",
"Malonyl CoA inhibits CPT I, so oxidation falls.",
"",
"More fatty acids are made for storage, not less.",
"ACC does not directly lower blood glucose."
],
"src": "lec"
},
{
"t": "Fuel Fate & Why the Liver Makes Ketones",
"lv": "Easy",
"s": "During a prolonged fast, fatty acids flood the liver and β-oxidation produces large amounts of acetyl-CoA. Why is much of this acetyl-CoA diverted into ketone body synthesis instead of the citric acid cycle?",
"c": [
"Glucagon activates acetyl-CoA carboxylase in the mitochondria",
"High acetyl-CoA stimulates pyruvate dehydrogenase",
"Insulin increases hepatic β-oxidation during fasting",
"Hepatocytes stop expressing citrate synthase when fasting",
"Oxaloacetate goes to gluconeogenesis, so less citrate forms"
],
"a": 4,
"e": "Reasons the fasting liver makes ketone bodies (from the lecture):\n• Fat mobilized from adipose floods the liver → acetyl-CoA rises → inhibits pyruvate dehydrogenase and activates pyruvate carboxylase → gluconeogenesis increases.\n• Oxaloacetate is being used for gluconeogenesis, so less is available to condense with acetyl-CoA to form citrate.\n• β-oxidation produces NADH and ATP, which inhibit the citric acid cycle at isocitrate dehydrogenase.\nResult: acetyl-CoA exceeds the liver's oxidative capacity and is shunted into ketogenesis. The ketones then feed the brain, which cannot use fatty acids.",
"w": [
"Glucagon inhibits acetyl-CoA carboxylase, and that enzyme is cytosolic.",
"Acetyl-CoA inhibits pyruvate dehydrogenase; it activates pyruvate carboxylase.",
"Insulin is low in fasting, and it suppresses β-oxidation.",
"Citrate synthase is present; its substrate oxaloacetate is what runs short.",
""
],
"src": "lec"
},
{
"t": "Ketogenesis: Pathway & HMG-CoA Synthase",
"lv": "Easy",
"s": "Which enzyme catalyzes the rate-limiting step of ketogenesis, and where is it located?",
"c": [
"HMG-CoA reductase in the liver cytosol",
"HMG-CoA synthase in liver mitochondria",
"HMG-CoA lyase in the liver cytosol",
"Thiolase in skeletal muscle mitochondria",
"HMG-CoA synthase in the liver cytosol"
],
"a": 1,
"e": "Ketogenesis occurs only in liver mitochondria:\n2 acetyl-CoA → (thiolase) → acetoacetyl-CoA → (HMG-CoA synthase, rate-limiting) → HMG-CoA → (HMG-CoA lyase) → acetoacetate + acetyl-CoA.\nAcetoacetate is then reduced to β-hydroxybutyrate (dehydrogenase, uses NADH) or spontaneously decarboxylated to acetone.",
"w": [
"HMG-CoA reductase is the rate-limiting enzyme of cholesterol synthesis.",
"",
"Lyase acts after the rate-limiting step, and ketogenesis is mitochondrial.",
"Thiolase starts the pathway but is not rate-limiting, and muscle uses ketones.",
"The cytosolic isoform supplies cholesterol synthesis, not ketogenesis."
],
"src": "lec"
},
{
"t": "Ketogenesis: Pathway & HMG-CoA Synthase",
"lv": "Easy",
"s": "Which sequence of enzymes converts acetyl-CoA into acetoacetate in the liver?",
"c": [
"HMG-CoA synthase, then thiolase, then HMG-CoA lyase",
"Thiolase, then HMG-CoA synthase, then HMG-CoA lyase",
"Thiolase, then HMG-CoA lyase, then HMG-CoA synthase",
"Thiolase, then HMG-CoA reductase, then HMG-CoA lyase",
"Thiophorase, then HMG-CoA synthase, then HMG-CoA lyase"
],
"a": 1,
"e": "• Thiolase: 2 acetyl-CoA → acetoacetyl-CoA.\n• HMG-CoA synthase (rate-limiting): acetoacetyl-CoA + acetyl-CoA → HMG-CoA.\n• HMG-CoA lyase: HMG-CoA → acetoacetate + acetyl-CoA.\nThen: acetoacetate ⇄ β-hydroxybutyrate (dehydrogenase, NADH → NAD⁺), or acetoacetate → acetone (spontaneous decarboxylation).",
"w": [
"Thiolase must first join two acetyl-CoA into acetoacetyl-CoA.",
"",
"HMG-CoA must be made by the synthase before the lyase can cleave it.",
"Reductase sends HMG-CoA toward cholesterol, not ketones.",
"Thiophorase is the ketolysis enzyme in extrahepatic tissues."
],
"src": "lec"
},
{
"t": "The Three Ketone Bodies",
"lv": "Easy",
"s": "A patient in DKA has a urine test strip that detects acetoacetate but not β-hydroxybutyrate. Why can this strip underestimate his ketone load?",
"c": [
"Acetone is the main ketone body",
"Acetoacetate is mostly exhaled",
"β-Hydroxybutyrate is not filtered by the kidney",
"Ketone bodies are not excreted in urine",
"β-Hydroxybutyrate is the main ketone body"
],
"a": 4,
"e": "The three ketone bodies:\n• Acetoacetate: gives 2 acetyl CoA in extrahepatic tissues.\n• β-Hydroxybutyrate: made by reducing acetoacetate; the predominant ketone body in blood and urine in ketosis, carrying the energy of an NADH.\n• Acetone: from decarboxylation of acetoacetate; volatile, not metabolized, exhaled.\nA test that misses β-hydroxybutyrate misses most of the ketones.",
"w": [
"Acetone is a minor, volatile product.",
"Acetone is exhaled, not acetoacetate.",
"β-hydroxybutyrate appears in urine in ketosis.",
"Ketonuria is a feature of ketosis.",
""
],
"src": "lec"
},
{
"t": "The Three Ketone Bodies",
"lv": "Easy",
"s": "Unlike free fatty acids, ketone bodies travel in plasma without albumin or lipoproteins. Which property explains this?",
"c": [
"Their low pKa makes them soluble in aqueous solution",
"They bind albumin in the same way as free fatty acids",
"They are packaged into VLDL particles by the liver",
"They are carried bound to carnitine in plasma",
"They are very lipophilic and dissolve in membranes"
],
"a": 0,
"e": "Ketone bodies are small, water-soluble organic acids. Their low pKa keeps them ionized and soluble in aqueous solution, so they do not require carriers (lipoproteins or albumin) for transport from the liver to peripheral tissues. Long-chain fatty acids, by contrast, travel bound to albumin.",
"w": [
"",
"Ketone bodies do not need albumin; fatty acids do.",
"VLDL carries triacylglycerol, not ketone bodies.",
"Carnitine shuttles acyl groups into mitochondria, not through plasma.",
"They are water-soluble small acids, which is why no carrier is needed."
],
"src": "lec"
},
{
"t": "Ketolysis: Thiophorase & Extrahepatic Use",
"lv": "Easy",
"s": "The liver makes ketone bodies but cannot use them for fuel. Which enzyme does the liver lack?",
"c": [
"HMG-CoA synthase, the rate-limiting enzyme of ketogenesis",
"Succinyl-CoA:acetoacetate CoA transferase, or thiophorase",
"β-Hydroxybutyrate dehydrogenase in the mitochondria",
"Thiolase, which splits acetoacetyl-CoA into acetyl-CoA",
"A plasma membrane transporter for ketone bodies"
],
"a": 1,
"e": "Only extrahepatic tissues can use acetoacetate, because only they have succinyl-CoA:acetoacetate CoA transferase (thiophorase).\nThiophorase transfers CoA from succinyl-CoA to acetoacetate → acetoacetyl-CoA + succinate. Thiolase then splits acetoacetyl-CoA into 2 acetyl-CoA, which enter the TCA cycle.\nThe liver lacks thiophorase, so it exports the ketone bodies it makes instead of burning them.",
"w": [
"The liver has HMG-CoA synthase; that is how it makes ketone bodies.",
"",
"The liver uses this enzyme to make β-hydroxybutyrate.",
"The liver has thiolase; it uses it in both β-oxidation and ketogenesis.",
"The block is enzymatic activation of acetoacetate, not uptake."
],
"src": "lec"
},
{
"t": "Ketolysis: Thiophorase & Extrahepatic Use",
"lv": "Easy",
"s": "Which cell type cannot use ketone bodies for energy even during prolonged starvation, and why?",
"c": [
"Red blood cells, because they lack mitochondria",
"Hepatocytes, because they lack mitochondria",
"Neurons, because ketone bodies cannot cross the blood–brain barrier",
"Cardiac myocytes, because they lack thiophorase",
"Skeletal muscle cells, because they rely only on glucose"
],
"a": 0,
"e": "Ketolysis (thiophorase, thiolase, TCA cycle) takes place in mitochondria. Red blood cells have no mitochondria, so they depend entirely on glucose (anaerobic glycolysis). The liver has mitochondria but lacks thiophorase.\nUsers of ketone bodies: muscle, heart, kidney and other tissues, and the brain in later stages of starvation.",
"w": [
"",
"Hepatocytes have mitochondria; they cannot use ketones because they lack thiophorase.",
"The brain adapts to ketone use in prolonged starvation.",
"Heart muscle readily oxidizes ketone bodies.",
"Muscle is a major user of ketone bodies."
],
"src": "lec"
},
{
"t": "Brain Fuel During Fasting & Starvation",
"lv": "Easy",
"s": "As a fast continues, the brain gets a growing share of its energy from ketone bodies. Which sequence matches the lecture?",
"c": [
"~25% by day 3, ~50% by day 7, ~2/3 by weeks 2–3",
"About 50% by day 3, 75% by day 7, all by weeks 2–3",
"About 10% by day 3, 25% by day 7, 50% by weeks 2–3",
"About two-thirds by day 1, the same through weeks 2–3",
"About 25% by day 3, 25% by day 7, 25% by weeks 2–3"
],
"a": 0,
"e": "Brain during fasting (lecture):\n• First days: glucose from glycogenolysis and gluconeogenesis; the brain has an obligatory requirement for glucose.\n• 3 days: ~25% of energy from ketone bodies.\n• 7 days: ~50%.\n• 2–3 weeks of prolonged starvation: ~2/3.\nKetone use by the brain spares muscle protein that would otherwise be broken down for gluconeogenesis.",
"w": [
"",
"The brain always needs some glucose; ketones never supply all of it.",
"These figures understate how much the brain adapts.",
"On the first days the brain still runs mainly on glucose.",
"The ketone share keeps rising as starvation continues."
],
"src": "lec"
},
{
"t": "Ketosis: Hormones, Levels & Causes",
"lv": "Easy",
"s": "A man with type 1 diabetes misses his insulin for 2 days, and his blood ketones climb. Which hormonal change drives the rise?",
"c": [
"High insulin with low glucagon",
"High insulin with high glucagon",
"Low glucagon with high malonyl CoA",
"Low insulin with high glucagon",
"Increased malonyl CoA in the liver"
],
"a": 3,
"e": "• Insulin inhibits ketogenesis: it suppresses HSL (less fatty acid reaches the liver) and keeps malonyl CoA high, which blocks CPT I and β-oxidation.\n• Glucagon stimulates ketogenesis: more lipolysis and β-oxidation.\nA low insulin:glucagon ratio, as in fasting or type 1 diabetes, drives ketogenesis.",
"w": [
"That's the fed pattern, which suppresses ketogenesis.",
"Insulin is low after missed doses.",
"High malonyl CoA blocks CPT I and ketogenesis.",
"",
"Malonyl CoA falls when insulin is low."
],
"src": "lec"
},
{
"t": "Ketosis: Hormones, Levels & Causes",
"lv": "Easy",
"s": "A woman on a strict ketogenic diet feels well. Her blood ketone level is 2.5 mM. How is this best classified?",
"c": [
"Normal, nonketotic state",
"Diabetic ketoacidosis",
"Severe ketoacidosis",
"Physiological ketosis",
"Ketone level below normal"
],
"a": 3,
"e": "Lecture values:\n• Normal: < 0.1 mM.\n• Physiological ketosis (fasting, high-fat or ketogenic diet): up to 2–3 mM.\n• Diabetic ketoacidosis: up to 20–25 mM.",
"w": [
"Normal is below 0.1 mM.",
"DKA reaches 20–25 mM.",
"2.5 mM is far below acidotic levels.",
"",
"2.5 mM is well above normal."
],
"src": "lec"
},
{
"t": "Diabetic Ketoacidosis",
"lv": "Easy",
"s": "Which laboratory pattern is typical of diabetic ketoacidosis?",
"c": [
"Glucose under 70 mg/dL, pH under 7.2, HCO₃⁻ under 15 mEq/L",
"Glucose over 300 mg/dL, pH over 7.45, HCO₃⁻ over 30 mEq/L",
"Glucose over 300 mg/dL, pH under 7.2, HCO₃⁻ under 15 mEq/L",
"Glucose over 300 mg/dL, pH under 7.2, normal anion gap",
"Glucose normal, pH normal, ketones over 20 mM"
],
"a": 2,
"e": "DKA (lecture):\n• Hyperglycemia > 300 mg/dL.\n• Dehydration: glucosuria and ketonuria (osmotic diuresis).\n• High anion gap metabolic acidosis, pH < 7.2, due to ketoacids.\n• Low bicarbonate < 15 mEq/L, used up buffering the ketoacids.\nMainly seen in type 1 diabetes.",
"w": [
"DKA is hyperglycemic, not hypoglycemic.",
"That is an alkalosis; DKA is a metabolic acidosis.",
"",
"Ketoacids are unmeasured anions, so the anion gap is high.",
"Ketones this high cause acidosis, and glucose is high in DKA."
],
"src": "lec"
},
{
"t": "Diabetic Ketoacidosis",
"lv": "Easy",
"s": "A 16-year-old boy in DKA is breathing deeply and rapidly. What is this breathing pattern accomplishing?",
"c": [
"Retaining CO₂ to offset alkalosis",
"Exhaling β-hydroxybutyrate",
"Blowing off CO₂ to offset acidosis",
"Causing the metabolic acidosis",
"Exhaling excess glucose through the lungs"
],
"a": 2,
"e": "• Kussmaul breathing: deep, rapid breaths that blow off CO₂ as respiratory compensation for the metabolic acidosis from ketoacids.\n• The fruity odor is acetone, from decarboxylation of acetoacetate, exhaled through the lungs.",
"w": [
"DKA is an acidosis, and deep breathing removes CO₂.",
"Acetone is the exhaled ketone, and it doesn't explain the breathing.",
"",
"Ketoacids cause the acidosis; the breathing compensates.",
"Glucose isn't volatile."
],
"src": "lec"
},
{
"t": "Fuel Fate & Why the Liver Makes Ketones",
"lv": "Hard",
"s": "A 40-year-old man has eaten nothing for 4 days. Which combination of changes in his hepatic mitochondria best explains the rise in ketone body production?",
"c": [
"PDH inhibited, pyruvate carboxylase on, TCA slowed by NADH",
"PDH active, pyruvate carboxylase off, TCA sped up by NAD⁺",
"PDH inhibited, pyruvate carboxylase off, TCA sped up by ADP",
"ACC activated, CPT-I inhibited, TCA slowed by NADH",
"PDH active, isocitrate dehydrogenase on, citrate export up"
],
"a": 0,
"e": "Fasting liver, step by step:\n• Lipolysis → fatty acids → β-oxidation → ↑ acetyl-CoA, ↑ NADH, ↑ ATP.\n• Acetyl-CoA inhibits PDH (pyruvate is spared) and activates pyruvate carboxylase → oxaloacetate is pulled into gluconeogenesis.\n• NADH and ATP inhibit isocitrate dehydrogenase → the TCA cycle slows.\n• With little oxaloacetate and a slowed cycle, acetyl-CoA exceeds the liver's oxidative capacity → HMG-CoA synthase pathway → ketone bodies.",
"w": [
"",
"This is closer to the fed pattern, which sends acetyl-CoA into the TCA cycle.",
"Acetyl-CoA activates pyruvate carboxylase, and NADH/ATP slow the TCA cycle.",
"ACC on and CPT-I off is the fed state, which suppresses β-oxidation.",
"Citrate export for fatty acid synthesis is a fed-state process."
],
"src": "lec"
},
{
"t": "Ketogenesis: Pathway & HMG-CoA Synthase",
"lv": "Hard",
"s": "HMG-CoA is an intermediate in both cholesterol synthesis and ketogenesis. In a fasting patient, hepatic HMG-CoA is directed toward ketone bodies rather than cholesterol. Which statement best explains the separation of the two pathways?",
"c": [
"Ketogenic HMG-CoA is cytosolic and is reduced by HMG-CoA reductase",
"Both pathways share one HMG-CoA pool, switched by insulin alone",
"Cholesterol synthesis happens in mitochondria during fasting",
"Ketone bodies are made from mevalonate in the cytosol",
"Ketogenic HMG-CoA is mitochondrial and is cleaved by HMG-CoA lyase"
],
"a": 4,
"e": "Fate of lipid metabolism (lecture slide):\n• Well-fed: acetyl-CoA accumulates in the cytosol → fatty acid synthesis and cholesterol synthesis (cytosolic HMG-CoA synthase → HMG-CoA reductase → mevalonate).\n• Fasting: acetyl-CoA accumulates in mitochondria → β-oxidation and ketogenesis (mitochondrial HMG-CoA synthase → HMG-CoA lyase → acetoacetate).\nSame intermediate, different compartments and enzymes.",
"w": [
"Reduction by HMG-CoA reductase in the cytosol leads to cholesterol.",
"They use separate compartments and separate HMG-CoA synthase isoforms.",
"Cholesterol synthesis is cytosolic and favored in the well-fed state.",
"Mevalonate is the cholesterol intermediate, made by HMG-CoA reductase.",
""
],
"src": "lec"
},
{
"t": "The Three Ketone Bodies",
"lv": "Hard",
"s": "A 19-year-old woman with type 1 diabetes is admitted in DKA. Serum β-hydroxybutyrate is markedly elevated, but her urine ketone dipstick is only weakly positive. Six hours after insulin and fluids, she is clinically better, yet the dipstick is more strongly positive. Which explanation best fits?",
"c": [
"Insulin briefly increases hepatic ketogenesis early in treatment",
"The kidney converts acetone into acetoacetate during recovery",
"The dipstick detects β-hydroxybutyrate, which rises with insulin",
"The dipstick sees acetoacetate, which rises as NADH/NAD⁺ falls",
"IV saline concentrates the urine and raises the reading"
],
"a": 3,
"e": "Two concepts combine:\n• The ratio of β-hydroxybutyrate to acetoacetate depends on the mitochondrial NADH/NAD⁺ ratio. In DKA, NADH is high, so most ketone bodies are β-hydroxybutyrate.\n• Urine dipsticks (nitroprusside) detect acetoacetate (and acetone) but not β-hydroxybutyrate.\nEarly on, the dipstick underestimates ketosis. As treatment restores NAD⁺, β-hydroxybutyrate is converted back to acetoacetate, so the dipstick can look worse while the patient is improving. Serum β-hydroxybutyrate is the better test to follow.",
"w": [
"Insulin suppresses ketogenesis from the start of treatment.",
"Acetone is not converted back; it is exhaled.",
"Nitroprusside dipsticks do not detect β-hydroxybutyrate.",
"",
"Fluids dilute the urine; they do not concentrate it."
],
"src": "lec"
},
{
"t": "Ketolysis: Thiophorase & Extrahepatic Use",
"lv": "Hard",
"s": "In cardiac muscle, β-hydroxybutyrate taken up from the blood is oxidized for ATP. Which description of this pathway is correct?",
"c": [
"NAD⁺ is reduced, succinyl-CoA gives CoA, thiolase makes 2 acetyl-CoA",
"NADH is oxidized, acetyl-CoA gives CoA, HMG-CoA lyase makes 2 acetyl-CoA",
"NAD⁺ is reduced, ATP activates acetoacetate, HMG-CoA synthase splits it",
"FAD is reduced, succinyl-CoA gives CoA, the products go to gluconeogenesis",
"NAD⁺ is reduced, succinyl-CoA gives CoA, pyruvate carboxylase acts next"
],
"a": 0,
"e": "Ketolysis in extrahepatic tissue:\n1. β-Hydroxybutyrate + NAD⁺ → acetoacetate + NADH (β-hydroxybutyrate dehydrogenase). This is why β-hydroxybutyrate 'stores' an NADH equivalent.\n2. Acetoacetate + succinyl-CoA → acetoacetyl-CoA + succinate (thiophorase, absent in liver). This bypasses a TCA substrate-level phosphorylation step.\n3. Acetoacetyl-CoA + CoA-SH → 2 acetyl-CoA (thiolase) → TCA cycle.\nAcetyl-CoA cannot be used for net glucose synthesis.",
"w": [
"",
"Oxidizing β-hydroxybutyrate reduces NAD⁺, and lyase is a ketogenesis enzyme.",
"Activation uses succinyl-CoA, not ATP, and synthase is a ketogenesis enzyme.",
"The dehydrogenase uses NAD⁺, and acetyl-CoA cannot make glucose.",
"Thiolase, not pyruvate carboxylase, splits acetoacetyl-CoA."
],
"src": "lec"
},
{
"t": "Brain Fuel During Fasting & Starvation",
"lv": "Hard",
"s": "A 35-year-old man on a 3-week hunger strike, taking only water, has falling urinary nitrogen excretion even though he is still not eating. Which adaptation best explains this?",
"c": [
"The brain switches to burning fatty acids taken up from albumin",
"Muscle stops all protein breakdown once glycogen runs out",
"Brain ketone use cuts glucose need, sparing muscle protein",
"The liver starts using ketone bodies, freeing amino acids",
"Red blood cells switch to ketones, lowering glucose demand"
],
"a": 2,
"e": "Early in a fast, the brain's obligatory glucose need is met partly by gluconeogenesis from amino acids released by muscle protein breakdown (urinary nitrogen ↑).\nThe brain cannot burn fatty acids, but with prolonged starvation it adapts to ketone bodies (~2/3 of its energy by 2–3 weeks). Its glucose requirement falls, so less amino acid is needed for gluconeogenesis → muscle protein is spared and urinary nitrogen falls.",
"w": [
"The brain cannot use fatty acids for energy, which is why it needs ketones.",
"Protein breakdown slows but does not stop; the brain's switch drives it.",
"",
"The liver lacks thiophorase and cannot use ketone bodies.",
"RBCs have no mitochondria and must use glucose."
],
"src": "lec"
},
{
"t": "Ketosis: Hormones, Levels & Causes",
"lv": "Hard",
"s": "A 6-month-old infant becomes lethargic after an overnight fast during a viral illness. Blood glucose is 35 mg/dL, and urine ketones are negative. Which pattern is this, and which group of causes fits it?",
"c": [
"Hyperketotic hypoglycemia, from von Gierke disease or alcoholism",
"Hyperketotic hyperglycemia, from type 1 diabetes",
"Hypoketotic hypoglycemia, from a block in fatty acid oxidation",
"Hypoketotic hypoglycemia, from pyruvate carboxylase deficiency",
"Normal fasting ketosis, from a high-fat diet"
],
"a": 2,
"e": "Glucose + ketone patterns (lecture slide):\n• Hypoglycemia + hypoketosis: carnitine deficiency, MCAD deficiency, CPT-I deficiency, carnitine translocase deficiency. β-oxidation is blocked, so the liver cannot make acetyl-CoA for ketones or the ATP for gluconeogenesis.\n• Hypoglycemia + hyperketosis: von Gierke disease, hereditary fructose intolerance, classical galactosemia, alcoholism, pyruvate carboxylase deficiency.\n• Hyperglycemia + hyperketosis: type 1 diabetes (DKA).\nFasting plus an infection in an infant with hypoketotic hypoglycemia is classic for MCAD deficiency.",
"w": [
"Those disorders cause hypoglycemia with high ketones.",
"Glucose is low here, and ketones are absent.",
"",
"The lecture places pyruvate carboxylase deficiency with hyperketosis.",
"Normal fasting raises ketones; here they are absent."
],
"src": "lec"
},
{
"t": "Ketosis: Hormones, Levels & Causes",
"lv": "Hard",
"s": "A 50-year-old man with alcohol use disorder has been drinking heavily and eating little for a week. Blood glucose is 48 mg/dL with marked ketonemia. Which mechanism best explains both findings?",
"c": [
"Ethanol directly activates HMG-CoA reductase in the liver",
"Low NADH speeds the TCA cycle and consumes all glucose",
"Insulin excess drives fatty acids into ketone bodies",
"High NADH shunts oxaloacetate to malate",
"Acetaldehyde converts glycogen directly into ketones"
],
"a": 3,
"e": "Ethanol metabolism (alcohol and acetaldehyde dehydrogenases) produces NADH → high NADH/NAD⁺ ratio:\n• Oxaloacetate is shunted to malate → too little oxaloacetate for gluconeogenesis → fasting hypoglycemia (worse when glycogen is depleted by poor intake).\n• Low oxaloacetate and high NADH slow the TCA cycle → acetyl-CoA from β-oxidation goes to ketogenesis, and high NADH favors β-hydroxybutyrate.\nThis is why chronic alcoholism appears in the 'hypoglycemia + hyperketosis' group.",
"w": [
"HMG-CoA reductase is the cholesterol enzyme, not ketogenic.",
"Ethanol raises, not lowers, the NADH/NAD⁺ ratio.",
"Insulin suppresses ketogenesis; fasting insulin is low.",
"",
"Ketones come from acetyl-CoA, not from glycogen."
],
"src": "lec"
},
{
"t": "Diabetic Ketoacidosis",
"lv": "Hard",
"s": "In a patient with untreated type 1 diabetes, hepatic β-oxidation accelerates sharply. Which change at the mitochondrial membrane best explains why fatty acids enter the mitochondria so readily?",
"c": [
"High malonyl-CoA from active ACC stimulates CPT-I",
"Low malonyl-CoA from inactive ACC releases CPT-I",
"Insulin activates the carnitine translocase directly",
"Low glucagon removes inhibition of CPT-II",
"Excess citrate activates CPT-I in the fasting liver"
],
"a": 1,
"e": "Pathogenesis of DKA (lecture): decreased insulin:glucagon ratio → increased fatty acid oxidation → acetyl-CoA exceeds the liver's oxidative capacity → increased ketone production.\nThe membrane step:\n• Without insulin, acetyl-CoA carboxylase is phosphorylated and inactive (glucagon/AMPK), so malonyl-CoA falls.\n• Malonyl-CoA normally inhibits CPT-I. With it gone, CPT-I is fully active and long-chain fatty acids flood into mitochondria.\n• At the same time hormone-sensitive lipase is uninhibited, so more fatty acids reach the liver.",
"w": [
"Malonyl-CoA inhibits CPT-I, and ACC is inactive without insulin.",
"",
"Insulin is absent in untreated type 1 diabetes.",
"Glucagon is high, and CPT-II is not the regulated step.",
"Citrate activates ACC, the opposite of what is happening here."
],
"src": "lec"
},
{
"t": "Diabetic Ketoacidosis",
"lv": "Hard",
"s": "A 22-year-old woman in DKA has severe abdominal pain, and her plasma is lipemic with very high triglycerides. Which mechanism best links her diabetes to the pain?",
"c": [
"Ketone bodies directly digest the pancreatic ducts",
"High insulin activates lipoprotein lipase and causes ileus",
"Chronic pancreatitis from years of hyperglycemia",
"Acetone irritates the gastric mucosa and causes ulcers",
"Low insulin cuts LPL activity; high TG cause pancreatitis"
],
"a": 4,
"e": "Clinical features of DKA (lecture): nausea and vomiting, and abdominal pain due to acute pancreatitis caused by hypertriglyceridemia.\nWhy triglycerides rise: insulin is needed for lipoprotein lipase activity. Without it, VLDL and chylomicron triglycerides are not cleared, while the liver keeps receiving and re-esterifying fatty acids from uncontrolled lipolysis. Very high triglycerides can trigger acute pancreatitis.",
"w": [
"Ketones do not cause pancreatic autodigestion.",
"Insulin is low in DKA, and LPL activity falls.",
"The lecture links the pain to acute pancreatitis from hypertriglyceridemia.",
"Acetone is exhaled; it does not explain the lipemic plasma.",
""
],
"src": "lec"
},
{
"t": "Diabetic Ketoacidosis",
"lv": "Hard",
"s": "A 14-year-old boy in DKA has serum K⁺ of 5.3 mEq/L. Two hours after IV fluids and regular insulin, his K⁺ is 3.1 mEq/L. Which statement best explains this?",
"c": [
"Insulin increases renal K⁺ excretion within two hours",
"Insulin shifts K⁺ into cells, unmasking a total-body deficit",
"IV saline contains no potassium and dilutes the first sample",
"Correction of acidosis moves K⁺ from cells into plasma",
"His initial K⁺ was high because of extra total-body K⁺"
],
"a": 1,
"e": "In DKA, insulin deficiency and acidosis shift K⁺ out of cells, while osmotic diuresis (glucosuria) wastes K⁺ in the urine. Serum K⁺ can look normal or high even though total-body K⁺ is low.\nTreatment with IV isotonic fluids and IV regular insulin drives K⁺ back into cells (insulin activates Na⁺/K⁺-ATPase) and correcting acidosis adds to the shift, so serum K⁺ falls. Potassium must be monitored and replaced during DKA management.",
"w": [
"The fall is mainly a shift into cells, not urinary loss.",
"",
"Dilution cannot explain a drop this large.",
"Correcting acidosis moves K⁺ into cells, not out.",
"Total-body K⁺ is depleted in DKA despite a normal or high serum level."
],
"src": "lec"
},
{
"t": "Practice Question · Ketone Bodies (from the slides)",
"s": "A 12-year-old boy presents with fatigue, polydipsia, polyuria, and polyphagia. A fingerstick glucose measurement shows a glucose level of 350mg/dL in his serum. He is diagnosed with type 1 diabetes mellitus, a disease characterized by a deficiency of insulin. Which one of the following is most likely occurring in this patient?",
"ns": true,
"shetty": 1,
"c": [
"Increased fatty acid synthesis from glucose in liver",
"Decreased conversion of fatty acids to ketone bodies",
"Increased stores of Triacylglycerol in adipose tissue",
"Increased production of acetone",
"Chronic pancreatitis"
],
"a": 3,
"e": "With insulin deficiency, the insulin:glucagon ratio is low → hormone-sensitive lipase is active → fatty acids flood the liver → β-oxidation produces acetyl-CoA faster than the liver can oxidize it → ketogenesis increases. Acetoacetate is partly decarboxylated to acetone, which is exhaled (fruity breath). So production of acetone, along with acetoacetate and β-hydroxybutyrate, increases.",
"w": [
"Without insulin, acetyl-CoA carboxylase is inactive, so hepatic fatty acid synthesis falls.",
"Fatty acid conversion to ketone bodies increases, not decreases, without insulin.",
"Low insulin activates lipolysis, so adipose TAG stores shrink.",
"",
"The lecture links DKA to acute pancreatitis from hypertriglyceridemia, not chronic pancreatitis."
],
"src": "lec"
},
{
"t": "Phospholipid Structure & Synthesis",
"lv": "Easy",
"s": "A biochemistry student compares two membrane lipids. Lipid X has two fatty acids, a glycerol backbone and a phosphate linked to serine. Lipid Y has one fatty acid, a phosphate and choline, all built on an 18-carbon amino alcohol. How are X and Y classified?",
"c": [
"X is a sphingophospholipid and Y is a glycerophospholipid",
"X is a glycerophospholipid and Y is a sphingophospholipid",
"Both are glycolipids because each carries a polar head group",
"X is a plasmalogen and Y is a ganglioside of nerve endings",
"Both are glycerophospholipids that differ only in head group"
],
"a": 1,
"e": "Fatty acid + glycerol + phosphoric acid gives a glycerophospholipid, here phosphatidylserine. Fatty acid + sphingosine (the long-chain amino alcohol) + phosphoric acid gives a sphingophospholipid, here sphingomyelin with its phosphocholine head.",
"w": [
"The backbones are swapped: glycerol makes X a glycerophospholipid.",
"",
"Glycolipids carry sugars, not phosphate, on their head group.",
"Plasmalogens are ether glycerophospholipids, and gangliosides contain sialic acid, not phosphate.",
"Y is built on sphingosine, not glycerol."
],
"src": "lec"
},
{
"t": "Phospholipid Structure & Synthesis",
"lv": "Easy",
"s": "Phosphatidic acid sits at the branch point of glycerophospholipid synthesis. Where in the cell is new phospholipid mainly made, and where does it go next?",
"c": [
"Made in rough ER ribosomes and sent straight to lysosomes",
"Made in the mitochondrial matrix and sent to the nucleus",
"Made in smooth ER, then moved via Golgi to plasma membranes",
"Made in peroxisomes, then moved to the inner mitochondrial membrane",
"Made in the cytosol on fatty acid synthase, then sent to the ER"
],
"a": 2,
"e": "Phospholipids are made by all cells except mature RBCs, on the smooth ER, then passed to the Golgi and on to the plasma membrane: SER → Golgi → plasma membrane. Phosphatidate is the key intermediate, activated as CDP-diacylglycerol or combined with a CDP-alcohol.",
"w": [
"Ribosomes on rough ER make proteins, not phospholipids.",
"The mitochondrial matrix runs β-oxidation, and phospholipids don't go to the nucleus.",
"",
"Peroxisomes handle very-long-chain fatty acids and start plasmalogen synthesis, not general phospholipid synthesis.",
"Fatty acid synthase makes palmitate only, not phospholipids."
],
"src": "lec"
},
{
"t": "DPPC, Surfactant & L/S Ratio",
"lv": "Hard",
"s": "A woman goes into labor at 29 weeks. Amniotic fluid analysis shows a ratio of the two major phospholipids of 1.2. Shortly after birth the infant has grunting, nasal flaring and diffuse alveolar collapse. Which molecule's deficiency best explains this?",
"c": [
"Sphingomyelin made by alveolar macrophages",
"Phosphatidylinositol 4,5-bisphosphate",
"Cardiolipin of the inner mitochondrial membrane",
"Dipalmitoyllecithin made by type II pneumocytes",
"Platelet-activating factor from mast cells"
],
"a": 3,
"e": "The ratio measured in amniotic fluid is lecithin/sphingomyelin (L/S). A ratio above 2 means the fetal lungs are mature; 1.2 means too little surfactant. The main surfactant phospholipid is dipalmitoyllecithin (DPPC), which lowers surface tension, cuts the effort needed to open alveoli and prevents atelectasis. Deficiency causes neonatal respiratory distress syndrome in premature infants.",
"w": [
"Sphingomyelin is the denominator of the L/S ratio, not the deficient surfactant lipid.",
"PIP2 is a signaling lipid, not surfactant.",
"Cardiolipin is a mitochondrial membrane lipid.",
"",
"PAF mediates anaphylaxis, not alveolar stability."
],
"src": "lec"
},
{
"t": "DPPC, Surfactant & L/S Ratio",
"lv": "Easy",
"s": "What happens to the alveoli when dipalmitoyllecithin is missing from the alveolar lining?",
"c": [
"Surface tension falls, so alveoli overexpand",
"Alveolar macrophages release more sphingomyelin",
"Alveolar walls thicken with excess collagen",
"Gas exchange speeds up across thinner walls",
"Surface tension rises, so alveoli collapse"
],
"a": 4,
"e": "DPPC is the key component of pulmonary surfactant. It lowers surface tension, which reduces the effort needed to open alveoli and prevents their collapse (atelectasis). Without it, surface tension rises and alveoli collapse: respiratory distress syndrome, in premature newborns or in adults when alveoli are destroyed.",
"w": [
"Losing surfactant raises surface tension, it doesn't lower it.",
"This has no role in alveolar stability.",
"Fibrosis is a separate process, not surfactant loss.",
"Collapsed alveoli worsen gas exchange.",
""
],
"src": "lec"
},
{
"t": "Phosphatidylinositol & PIP2 Signaling",
"lv": "Easy",
"s": "Phosphatidylinositol in membranes stores which fatty acid at carbon 2 for later release?",
"c": [
"Docosahexaenoic acid",
"Eicosapentaenoic acid",
"Arachidonic acid",
"Linoleic acid",
"Stearic acid"
],
"a": 2,
"e": "Phosphatidylinositol has stearic acid at C1 and arachidonic acid at C2, so PI is a membrane reservoir of arachidonic acid, the precursor of prostaglandins and leukotrienes.",
"w": [
"DHA is an omega-3 fatty acid, not the classic C2 acid of PI.",
"EPA is an omega-3 fatty acid, not the classic C2 acid of PI.",
"",
"Linoleate is a typical C2 fatty acid of lecithin.",
"Stearate is at C1 of PI, not C2."
],
"src": "lec"
},
{
"t": "Phosphatidylinositol & PIP2 Signaling",
"lv": "Hard",
"s": "A hormone binds a Gq-coupled receptor on a smooth muscle cell. Within seconds, intracellular calcium rises and protein kinase C is activated. Which enzyme acted on which membrane lipid to produce both second messengers?",
"c": [
"Phospholipase A2 acting on phosphatidylcholine",
"Phospholipase D acting on sphingomyelin",
"Phospholipase C acting on PIP2",
"Sphingomyelinase acting on ceramide",
"Phospholipase A1 acting on cardiolipin"
],
"a": 2,
"e": "Hormones and growth factors activate phospholipase C, which splits phosphatidylinositol 4,5-bisphosphate (PIP2) into two second messengers. IP3 releases calcium from the ER, and diacylglycerol activates protein kinase C. This is how PI transmits signals from outside the cell to inside.",
"w": [
"PLA2 releases arachidonic acid, not IP3 and DAG.",
"PLD removes the head group, and sphingomyelin is not the substrate here.",
"",
"Sphingomyelinase acts on sphingomyelin, not ceramide, and makes no IP3.",
"PLA1 removes the C1 fatty acid and makes no second messengers."
],
"src": "lec"
},
{
"t": "GPI Anchors & PNH",
"lv": "Easy",
"s": "Several enzymes are held on the outer surface of the plasma membrane by a carbohydrate bridge to membrane phosphatidylinositol. Which of these is one of them?",
"c": [
"Hexokinase on the outer mitochondrial membrane",
"Alkaline phosphatase in placenta",
"Na⁺/K⁺-ATPase of the basolateral membrane",
"Glucose-6-phosphatase of the ER lumen",
"Hormone-sensitive lipase in adipocytes"
],
"a": 1,
"e": "GPI-linked proteins are covalently attached through a carbohydrate bridge to membrane-bound PI, which gives them more lateral mobility. Phospholipase C can cut them free. Examples: lipoprotein lipase, acetylcholinesterase on RBCs, alkaline phosphatase in placenta, 5′-nucleotidase in lymphocytes, decay-accelerating factor on all blood cells, and amyloid Aβ in the CNS.",
"w": [
"Hexokinase binds porin; it is not GPI-anchored.",
"",
"The Na⁺/K⁺ pump is a transmembrane protein.",
"Glucose-6-phosphatase is an ER membrane enzyme.",
"HSL is a cytosolic enzyme."
],
"src": "lec"
},
{
"t": "GPI Anchors & PNH",
"lv": "Hard",
"s": "A 34-year-old man reports that his first urine each morning is dark red and clears during the day. He has anemia with a high LDH and recently had a hepatic vein thrombosis. Flow cytometry shows his red cells lack decay-accelerating factor. An acquired mutation in which gene is most likely?",
"c": [
"Spectrin, weakening the RBC cytoskeleton",
"Glucose-6-phosphate dehydrogenase in RBCs",
"Hexosaminidase A α-subunit on chromosome 15",
"Phosphatidylinositol glycan A in stem cells",
"Glucocerebrosidase in tissue macrophages"
],
"a": 3,
"e": "This is paroxysmal nocturnal hemoglobinuria. An acquired mutation in PIGA in hematopoietic cells blocks synthesis of the GPI anchor. GPI-anchored proteins such as decay-accelerating factor are lost from RBCs, platelets and WBCs. Those proteins normally prevent complement activation, so complement lyses RBCs: hemolytic anemia, red morning urine that lightens during the day, and venous thrombosis.",
"w": [
"Spectrin defects cause hereditary spherocytosis, which is inherited and has no complement-driven nocturnal hemoglobinuria.",
"G6PD deficiency causes oxidant-triggered hemolysis, and DAF is normal.",
"This causes Tay-Sachs disease, not hemolysis.",
"",
"This causes Gaucher disease, not hemolysis."
],
"src": "lec"
},
{
"t": "Cardiolipin & Phosphatidylglycerol",
"lv": "Easy",
"s": "A lipid made by condensing CDP-diacylglycerol with phosphatidylglycerol is concentrated in one membrane, where it lowers proton permeability. Which lipid and membrane are these?",
"c": [
"Cardiolipin in the inner mitochondrial membrane",
"Ethanolamine plasmalogen in the myelin sheath of axons",
"Sphingomyelin in the plasma membrane of nerve cells",
"Sulfatide in the tubular cell membranes of the kidney",
"Lactosyl ceramide in the plasma membrane of RBCs"
],
"a": 0,
"e": "Diphosphatidylglycerol, cardiolipin, is very acidic and found mainly in the inner mitochondrial membrane. It lowers the membrane's permeability to protons, so the proton-motive force of the electron transport chain can be built. It is made from CDP-diacylglycerol plus phosphatidylglycerol.",
"w": [
"",
"Ethanolamine plasmalogens are in myelin, but they are made from DHAP, not phosphatidylglycerol.",
"Sphingomyelin is made from ceramide and phosphocholine.",
"Sulfatides are made from galactocerebroside and PAPS.",
"Lactosyl ceramide is a globoside built from ceramide and sugars."
],
"src": "lec"
},
{
"t": "Phospholipases & Degradation",
"lv": "Easy",
"s": "A phospholipase cuts the ester bond at carbon 2 of phosphatidylcholine. Which fatty acid release makes this enzyme so important?",
"c": [
"Palmitic acid for β-oxidation in cardiac muscle cells",
"Oleic acid for triacylglycerol storage in adipocytes",
"Stearic acid for ceramide synthesis in the smooth ER",
"Butyric acid as an energy source for colonocytes",
"Arachidonic acid for prostaglandins and leukotrienes"
],
"a": 4,
"e": "Phospholipase A2 cuts the C2 fatty acid. Because C2 often carries arachidonic acid, PLA2 releases the substrate for prostaglandins and leukotrienes. PLA2 is also found in snake venom and pancreatic juice, and its products are lysophospholipids.",
"w": [
"Palmitate usually sits at C1 and is cut by PLA1.",
"Releasing oleate is not the key role of PLA2.",
"Stearate sits at C1, and ceramide uses sphingosine.",
"Butyrate is not a typical phospholipid fatty acid.",
""
],
"src": "lec"
},
{
"t": "Phospholipases & Degradation",
"lv": "Hard",
"s": "After a snakebite, a man develops RBC lysis around the wound. The venom enzyme turns membrane lecithin into a detergent-like product. Which enzyme and product best fit?",
"c": [
"Phospholipase A1 forming sphingosine",
"Sphingomyelinase forming ceramide",
"Phospholipase D forming phosphatidic acid",
"Phospholipase A2 forming lysolecithin",
"Phospholipase C forming inositol trisphosphate"
],
"a": 3,
"e": "Snake venom is rich in phospholipase A2. It removes the fatty acid at C2 of lecithin, leaving lysolecithin, a lysophospholipid that acts like a detergent and lyses membranes. Lysophospholipids can be re-acylated by acyltransferases or by LLAT in remodeling.",
"w": [
"PLA1 cuts at C1, and sphingosine is not made from lecithin.",
"Sphingomyelinase acts on sphingomyelin, not lecithin.",
"PLD removes the head group, which doesn't explain venom hemolysis.",
"",
"IP3 comes from PIP2, not lecithin."
],
"src": "lec"
},
{
"t": "Plasmalogens & PAF",
"lv": "Easy",
"s": "A lipid mediator has an alkyl ether at C1 and an acetyl group at C2 of glycerol. It causes platelet aggregation and serotonin release in anaphylaxis. What is this molecule?",
"c": [
"Phosphatidylinositol bisphosphate",
"Diphosphatidylglycerol",
"Platelet-activating factor",
"Dipalmitoyl phosphatidylcholine",
"Galactocerebroside"
],
"a": 2,
"e": "Plasmalogens are glycerol ether phospholipids, made from dihydroxyacetone phosphate. Platelet-activating factor is an alkyl ether plasmalogen with an acetyl group at C2. It mediates hypersensitivity reactions and anaphylactic shock, causing platelet aggregation and serotonin release from platelets.",
"w": [
"PIP2 is a signaling lipid with ester-linked fatty acids, not an ether bond.",
"Diphosphatidylglycerol, cardiolipin, has no ether bond.",
"",
"DPPC is surfactant with ester-linked palmitates.",
"It is a sphingolipid, not an ether glycerolipid."
],
"src": "lec"
},
{
"t": "Sphingolipids, Ceramide & Sphingomyelin",
"lv": "Easy",
"s": "Which reaction produces sphingomyelin from ceramide?",
"c": [
"Phosphocholine transfer by sphingomyelin synthase",
"Addition of UDP-galactose by a galactosyltransferase",
"Addition of sulfate from PAPS by a sulfotransferase",
"Addition of NANA by a sialyltransferase in the Golgi",
"Removal of the fatty acid from C2 by ceramidase"
],
"a": 0,
"e": "Ceramide is sphingosine with a fatty acid N-acylated at C2. Sphingomyelin synthase transfers phosphoryl choline onto ceramide. Sphingomyelin is a major structural lipid of nerve cell membranes and myelin, usually with palmitic or stearic acid.",
"w": [
"",
"This makes galactocerebroside.",
"This makes sulfatide, starting from galactocerebroside.",
"Sialic acid addition makes gangliosides.",
"This breaks ceramide down to sphingosine and a fatty acid."
],
"src": "lec"
},
{
"t": "Sphingolipids, Ceramide & Sphingomyelin",
"lv": "Hard",
"s": "A lysosomal enzyme removes phosphocholine from a myelin lipid. A second lysosomal enzyme then splits the product into sphingosine and a fatty acid. A child lacking the second enzyme accumulates which substance?",
"c": [
"Sphingomyelin, as in Niemann-Pick",
"Globoside, as in Sandhoff disease",
"Sulfatide, as in metachromatic leukodystrophy",
"Glucocerebroside, as in Gaucher",
"Ceramide, as in Farber disease"
],
"a": 4,
"e": "Sphingomyelinase removes phosphocholine from sphingomyelin, leaving ceramide. Ceramidase then splits ceramide into sphingosine and a fatty acid. Ceramidase deficiency is Farber disease, in which ceramide accumulates: painful, progressively deformed joints and skin nodules.",
"w": [
"That would be a sphingomyelinase deficiency, the first enzyme.",
"That is a hexosaminidase A and B deficiency.",
"Arylsulfatase A acts on sulfatide, not on ceramide.",
"That is a glucocerebrosidase deficiency.",
""
],
"src": "lec"
},
{
"t": "Glycolipid Classes",
"lv": "Easy",
"s": "Which glycosphingolipid is a sulfuric acid ester of galactocerebroside, negatively charged and abundant in nerve tissue and kidney?",
"c": [
"Ganglioside GM2",
"Lactosyl ceramide",
"Glucocerebroside",
"Sulfatide",
"Globotriaosylceramide"
],
"a": 3,
"e": "Sulfatides are sulfuric acid esters of galactocerebroside, made with PAPS as the sulfate donor. They are negatively charged at physiological pH and found mainly in nerve tissue and kidney. They accumulate in metachromatic leukodystrophy.",
"w": [
"Gangliosides carry sialic acid (NANA), not sulfate.",
"Lactosyl ceramide is a neutral globoside in the RBC membrane.",
"Glucocerebroside is a neutral cerebroside with one glucose.",
"",
"This neutral globoside builds up in Fabry disease."
],
"src": "lec"
},
{
"t": "Glycolipid Classes",
"lv": "Hard",
"s": "A child's glycolipid has ceramide, several sugars and two sialic acid residues. In the standard naming, which letter shows the sialic acid count, and where in the body is this lipid mainly found?",
"c": [
"T, in the RBC plasma membrane",
"M, in the myelin of peripheral nerves",
"D, in ganglion cells of the CNS",
"Q, in the renal tubules",
"G, in the liver sinusoids"
],
"a": 2,
"e": "Gangliosides are ceramide plus several sugars plus one or more sialic acids (NANA). In names like GM2, G means ganglioside, the letter M, D, T or Q gives the number of sialic acids (mono, di, tri, tetra), and the number gives the carbohydrate sequence. They are found mainly in ganglion cells of the CNS, at nerve endings. Two sialic acids is D.",
"w": [
"T means three sialic acids.",
"M means one sialic acid.",
"",
"Q means four sialic acids.",
"G just means ganglioside, not the sialic acid count."
],
"src": "lec"
},
{
"t": "Glycolipid Classes",
"lv": "Easy",
"s": "Which function belongs to membrane glycosphingolipids?",
"c": [
"Releasing arachidonic acid for prostaglandin synthesis",
"Lowering surface tension in the alveoli of the lung",
"Generating the proton-motive force across mitochondria",
"Anchoring alkaline phosphatase via a phosphatidylinositol bridge",
"Serving as receptors for cholera and tetanus toxins"
],
"a": 4,
"e": "Glycolipids are ceramide with sugars on carbon 1 of sphingosine. They are mainly in nerve-tissue membranes, act as blood group antigens, and act as cell surface receptors for cholera and tetanus toxins.",
"w": [
"That is phosphatidylinositol and PLA2.",
"That is DPPC in surfactant.",
"That is cardiolipin's role.",
"That is the GPI anchor.",
""
],
"src": "lec"
},
{
"t": "Lysosomal Storage Disorders Overview",
"lv": "Easy",
"s": "Which disease is a defect of glycogen breakdown inside the lysosome, rather than a sphingolipidosis?",
"c": [
"Krabbe disease",
"Gaucher disease",
"Fabry disease",
"Farber disease",
"Pompe disease"
],
"a": 4,
"e": "Lysosomal storage disorders fall into groups: mucopolysaccharidoses, mucolipidoses such as I-cell disease, sphingolipidoses, Pompe disease (a glycogen storage disease) and Wolman disease (a lipoprotein defect). The rest of the options are sphingolipidoses.",
"w": [
"Galactocerebrosidase deficiency is a sphingolipidosis.",
"Glucocerebrosidase deficiency is a sphingolipidosis.",
"α-galactosidase deficiency is a sphingolipidosis.",
"Ceramidase deficiency is a sphingolipidosis.",
""
],
"src": "lec"
},
{
"t": "Niemann-Pick Disease",
"lv": "Hard",
"s": "A 4-month-old Ashkenazi infant has a protuberant abdomen, failure to thrive and loss of milestones. Bone marrow shows foamy macrophages full of small uniform vacuoles, and electron microscopy shows zebra bodies. Which enzyme is deficient?",
"c": [
"Hexosaminidase A",
"Glucocerebrosidase",
"Arylsulfatase A",
"Sphingomyelinase",
"α-galactosidase A"
],
"a": 3,
"e": "Niemann-Pick disease type A: sphingomyelinase deficiency leads to lysosomal accumulation of sphingomyelin. Signs appear at birth or by 6 months: hepatosplenomegaly with a protuberant abdomen, failure to thrive, vomiting, lymphadenopathy and neurologic decline. Many small uniform vacuoles make cells look foamy, and EM shows zebra and concentric lamellar bodies. Death usually comes within 1–3 years. Type B has no CNS involvement.",
"w": [
"Tay-Sachs has a cherry-red spot but no hepatosplenomegaly or foam cells.",
"Gaucher cells look like crumpled tissue paper, not foamy.",
"MLD causes demyelination without hepatosplenomegaly.",
"",
"Fabry is X-linked, with painful extremities and renal failure."
],
"src": "lec"
},
{
"t": "Niemann-Pick Disease",
"lv": "Easy",
"s": "How do Niemann-Pick types A and B differ?",
"c": [
"Type B has no CNS involvement but still has visceral storage",
"Type A spares the brain and mainly affects the kidneys",
"Type B is X-linked while type A is autosomal recessive",
"Type A stores glucocerebroside while type B stores sphingomyelin",
"Type B is cured by giving dietary sphingomyelinase"
],
"a": 0,
"e": "Both are sphingomyelinase deficiencies that store sphingomyelin. Type A is the severe infantile form, with extensive neurologic involvement, marked visceral storage and death within the first 3 years. Type B has no CNS involvement but marked visceral (liver, kidney) accumulation.",
"w": [
"",
"Type A is the one with extensive neurologic involvement.",
"Both types are autosomal recessive.",
"Both types store sphingomyelin.",
"There is no dietary enzyme cure."
],
"src": "lec"
},
{
"t": "Gaucher Disease",
"lv": "Hard",
"s": "A 25-year-old woman has easy bruising, bone pain and a massively enlarged spleen. Marrow shows large macrophages whose cytoplasm looks like crumpled tissue paper. Which treatment targets the cause of her disease?",
"c": [
"Recombinant replacement of the missing enzyme",
"Splenectomy followed by lifelong penicillin prophylaxis",
"Restriction of dietary sphingomyelin and cholesterol",
"Hexosaminidase A gene therapy into CNS neurons",
"Plasma exchange to remove circulating sulfatides"
],
"a": 0,
"e": "This is Gaucher disease, the most common lysosomal storage disorder. It is autosomal recessive, with deficient glucocerebrosidase (β-glucosidase), so glucocerebroside accumulates in phagocytic cells of the liver, spleen and bone marrow: Gaucher cells with a crumpled-tissue-paper look, hepatosplenomegaly, bone damage and anemia. Treatment is recombinant enzyme replacement, which is effective but expensive, or bone marrow transplant or gene transfer. The adult form is compatible with longer survival.",
"w": [
"",
"Splenectomy treats a symptom, not the enzyme defect.",
"The stored lipid is glucocerebroside, mostly from cell turnover, so diet doesn't help.",
"Hexosaminidase A is the Tay-Sachs enzyme.",
"Sulfatides build up in MLD, not Gaucher."
],
"src": "lec"
},
{
"t": "Tay-Sachs & GM2 Gangliosidoses",
"lv": "Hard",
"s": "A 9-month-old has lost the ability to sit, startles strongly at sounds, and has a cherry-red spot at both maculae. The liver and spleen are normal. Which is the defect?",
"c": [
"β-subunit defect of hexosaminidase A and B",
"α-subunit defect of hexosaminidase A on chromosome 15",
"Sphingomyelinase deficiency with sphingomyelin storage",
"β-galactosidase deficiency with GM1 storage",
"Galactocerebrosidase deficiency with psychosine storage"
],
"a": 1,
"e": "Tay-Sachs disease is GM2 gangliosidosis from a mutation in the α-subunit of hexosaminidase A on chromosome 15. GM2 builds up in neurons of the CNS, the autonomic nervous system and the retina. Swollen ganglion cells around the macula make the normal choroid stand out as a cherry-red spot. There is no hepatosplenomegaly, which separates it from Niemann-Pick. It is common in Ashkenazi Jews, with a carrier rate of 1 in 30, and death comes at 2–3 years.",
"w": [
"This is Sandhoff disease, which can also store globosides and affect organs.",
"",
"Niemann-Pick has a cherry-red spot but also hepatosplenomegaly.",
"GM1 gangliosidosis usually has organ enlargement and skeletal involvement.",
"Krabbe causes demyelination with globoid cells, without a typical cherry-red spot."
],
"src": "lec"
},
{
"t": "Tay-Sachs & GM2 Gangliosidoses",
"lv": "Easy",
"s": "A child has a Tay-Sachs-like illness, but her hexosaminidase A and B enzymes are both normal in the test tube. What other form of GM2 gangliosidosis fits?",
"c": [
"Sandhoff disease, a β-subunit defect",
"GM2 activator protein deficiency",
"Fabry disease, an α-galactosidase defect",
"Farber disease, a ceramidase defect",
"Gaucher disease, a glucocerebrosidase defect"
],
"a": 1,
"e": "The slide lists two other forms of GM2 gangliosidosis: Sandhoff disease, a β-subunit defect, and GM2 activator deficiency. Both look clinically like Tay-Sachs. When the enzymes themselves are normal, the missing piece is the activator protein needed to present GM2 to hexosaminidase A.",
"w": [
"In Sandhoff disease hexosaminidase A and B are both low.",
"",
"Fabry is α-galactosidase A deficiency, not a GM2 storage disease.",
"Farber is ceramidase deficiency.",
"Gaucher is glucocerebrosidase deficiency."
],
"src": "lec"
},
{
"t": "Fabry, Krabbe, MLD & Other Sphingolipidoses",
"lv": "Hard",
"s": "A 15-year-old boy has burning pain in his hands and feet, small dark-red skin papules around the umbilicus, protein in the urine and a thickened septum on echo. His mother's brother died of kidney failure at 40. Which molecule accumulates?",
"c": [
"Galactocerebroside and psychosine",
"Sulfatide",
"Globotriaosylceramide",
"Ganglioside GM1",
"Glucocerebroside"
],
"a": 2,
"e": "Fabry disease is the only X-linked recessive sphingolipidosis, which fits the affected maternal uncle. α-galactosidase A deficiency causes globoside (globotriaosylceramide, or ceramide trihexoside) to accumulate, especially in the kidneys. Classic features: burning extremity pain, renal failure, cardiac failure with septal hypertrophy, and angiokeratomas.",
"w": [
"These build up in Krabbe disease, with CNS demyelination in infants.",
"This builds up in metachromatic leukodystrophy.",
"",
"This builds up in GM1 gangliosidosis, from β-galactosidase deficiency.",
"This builds up in Gaucher, which is autosomal recessive."
],
"src": "lec"
},
{
"t": "Fabry, Krabbe, MLD & Other Sphingolipidoses",
"lv": "Easy",
"s": "An infant with irritability, feeding trouble, muscle spasms and poor head control has multinucleate globoid cells in the CNS. Toxic levels of psychosine destroy oligodendrocytes. Which enzyme is deficient?",
"c": [
"Arylsulfatase A",
"Hexosaminidase A and B",
"Acid ceramidase",
"Glucocerebrosidase",
"Galactocerebrosidase"
],
"a": 4,
"e": "Krabbe disease is β-galactosidase deficiency, specifically galactocerebrosidase. Galactocerebrosides and psychosine accumulate, and the very high psychosine destroys oligodendrocytes and neurons, causing CNS demyelination. Multinucleate globoid cells in the CNS are pathognomonic. Death usually comes by age 2.",
"w": [
"Arylsulfatase A deficiency is MLD, with metachromatic sulfatide granules.",
"Hexosaminidase A and B deficiency is Sandhoff disease.",
"Ceramidase deficiency is Farber disease.",
"Glucocerebrosidase deficiency is Gaucher disease.",
""
],
"src": "lec"
},
{
"t": "Fabry, Krabbe, MLD & Other Sphingolipidoses",
"lv": "Easy",
"s": "Which sphingolipidosis has a deficiency of β-galactosidase that acts on gangliosides, leading to ganglioside accumulation?",
"c": [
"Sandhoff disease",
"GM1 gangliosidosis",
"Farber disease",
"Niemann-Pick disease",
"Fabry disease"
],
"a": 1,
"e": "GM1 gangliosidosis is a deficiency of β-galactosidase, causing GM1 ganglioside to accumulate. On the summary table: mental retardation, liver enlargement, skeletal involvement and death by age 2. All sphingolipidoses are autosomal recessive except Fabry, which is X-linked.",
"w": [
"Sandhoff is hexosaminidase A and B deficiency.",
"",
"Farber is ceramidase deficiency.",
"Niemann-Pick is sphingomyelinase deficiency.",
"Fabry is α-galactosidase A deficiency."
],
"src": "lec"
},
{
"t": "Practice Questions · Complex Lipids (from the slides)",
"s": "A 3-year-old child is brought to the clinic by his parents due to progressive difficulty with walking and frequent falls. The parents mention that he has been losing previously acquired motor skills and has had several episodes of regression in language skills. On examination, the child has spasticity, hyperreflexia, and decreased muscle tone in the lower extremities. Brain MRI shows symmetric, confluent white matter abnormalities. Urine sulfatide levels are elevated. Which of the following enzymes is deficient in this patient?",
"ns": true,
"shetty": 1,
"c": [
"Arylsulfatase A",
"Glucocerebrosidase",
"Hexosaminidase A",
"Iduronate-2-sulfatase",
"Sphingomyelinase"
],
"a": 0,
"e": "Elevated urine sulfatides, white matter disease and loss of motor and language milestones point to metachromatic leukodystrophy. Arylsulfatase A deficiency causes sulfatides to accumulate as metachromatic granules, with CNS and PNS demyelination: ataxia, trouble walking and speaking, and memory loss.",
"w": [
"",
"Glucocerebrosidase deficiency is Gaucher disease, with hepatosplenomegaly and bone disease.",
"Hexosaminidase A deficiency is Tay-Sachs, with a cherry-red spot and GM2 storage.",
"Iduronate-2-sulfatase deficiency is Hunter syndrome, a mucopolysaccharidosis.",
"Sphingomyelinase deficiency is Niemann-Pick, with hepatosplenomegaly and foam cells."
],
"src": "lec"
},
{
"t": "Practice Questions · Complex Lipids (from the slides)",
"s": "A 3-year-old boy is brought to the pediatrician because of progressive loss of developmental milestones, difficulty walking, and frequent respiratory infections. On physical examination, he has hepatosplenomegaly and a \"cherry-red\" spot is noted on fundoscopic examination. Laboratory testing reveals foam cells in his bone marrow aspirate. Which of the following is the most likely diagnosis?",
"ns": true,
"shetty": 1,
"c": [
"Tay-Sachs disease",
"Gaucher disease",
"Niemann-Pick disease",
"Fabry disease",
"Krabbe disease"
],
"a": 2,
"e": "A cherry-red spot plus hepatosplenomegaly plus foam cells is Niemann-Pick disease. Sphingomyelinase deficiency causes sphingomyelin to accumulate in macrophages, which look foamy, in the liver, spleen, lungs and bone marrow, with neurologic decline.",
"w": [
"Tay-Sachs has a cherry-red spot but no hepatosplenomegaly or foam cells.",
"Gaucher has hepatosplenomegaly but crumpled-tissue-paper cells and no cherry-red spot.",
"",
"Fabry is X-linked, with painful extremities, angiokeratomas and renal failure.",
"Krabbe has globoid cells and demyelination, without hepatosplenomegaly."
],
"src": "lec"
},
{
"t": "Practice Questions · Complex Lipids (from the slides)",
"s": "A 6 month old girl is brought to the physician by her parents because of seizures. The girl has also developed diminished responsiveness and progressive blindness over the past 4 months. Physical examination of the abdomen shows no abnormalities. Fundoscopic examination shows retinal pallor except in the macular area. Activity of which of the following enzymes is most likely decreased in both of the parents?",
"ns": true,
"shetty": 1,
"c": [
"Glucocerebrosidase",
"Alpha galactosidase",
"B-galactosidase",
"Hexosaminidase",
"Sphingomyelinase"
],
"a": 3,
"e": "Seizures, blindness and a cherry-red spot (pale retina except the macula) with a normal abdomen means Tay-Sachs disease. It is autosomal recessive, so both parents are carriers with about half-normal hexosaminidase A activity. That reduced activity is the basis of carrier screening.",
"w": [
"Glucocerebrosidase deficiency is Gaucher, with hepatosplenomegaly.",
"Alpha galactosidase deficiency is X-linked Fabry disease.",
"B-galactosidase deficiency causes GM1 gangliosidosis or Krabbe disease, usually with organ or white matter involvement.",
"",
"Sphingomyelinase deficiency is Niemann-Pick, which also has hepatosplenomegaly."
],
"src": "lec"
},
{
"t": "Eicosanoid Classes & Effects",
"lv": "Easy",
"s": "Which eicosanoids are grouped together as the prostanoids?",
"c": [
"Prostaglandins and thromboxanes",
"Prostaglandins and leukotrienes",
"Thromboxanes and leukotrienes",
"Leukotrienes only",
"Prostaglandins only"
],
"a": 0,
"e": "Eicosanoids are 20-carbon signaling lipids made from arachidonic acid. They fall into two pathways:\n• Cyclooxygenase (cyclic) pathway → prostaglandins (PGs), prostacyclin (PGI₂) and thromboxanes (TXs). Because all of these come from the cyclic endoperoxide PGH₂ and contain a ring, they are grouped as the prostanoids.\n• Lipoxygenase (linear) pathway → leukotrienes (LTs) and lipoxins, which have no ring.\n\nTakeaway: Prostanoids = prostaglandins + thromboxanes (COX pathway). Leukotrienes are a separate, linear (LOX) family.",
"w": [
"",
"Leukotrienes are linear molecules made by 5-lipoxygenase, not by COX, so they are not prostanoids.",
"Thromboxanes are prostanoids, but leukotrienes come from the lipoxygenase pathway and are not.",
"Leukotrienes are the non-prostanoid branch of the eicosanoids.",
"Thromboxanes are also made from PGH₂ by the COX pathway, so prostaglandins alone are incomplete."
],
"src": "lec"
},
{
"t": "Eicosanoid Classes & Effects",
"lv": "Easy",
"s": "Eicosanoids are often called local hormones. What is the reason?",
"c": [
"They are stored in granules and released on demand",
"They act locally and are rapidly degraded",
"They circulate bound to albumin to distant organs",
"They are made only by endocrine glands",
"They act on nuclear receptors in target cells"
],
"a": 1,
"e": "Eicosanoids behave like hormones in that they bind receptors and change cell function, but three features make them 'local':\n1. They are not stored. They are made on demand when phospholipase A2 releases arachidonic acid.\n2. They act in an autocrine or paracrine way, on the same cell or on cells close by.\n3. They are degraded within seconds to minutes (TXA₂ has a half-life of about 30 seconds), so they never reach useful levels in distant tissues.\n\nTakeaway: Made on demand, act nearby, destroyed fast. That is why they are 'local hormones'.",
"w": [
"Eicosanoids are synthesized from membrane phospholipids on demand. Histamine and serotonin are the granule-stored mediators.",
"",
"They are inactivated so quickly that they do not travel to distant organs the way true endocrine hormones do.",
"Almost every cell except the red blood cell makes eicosanoids, not just endocrine glands.",
"Eicosanoids act on cell-surface G-protein coupled receptors. Nuclear receptors bind steroid and thyroid hormones."
],
"src": "lec"
},
{
"t": "Eicosanoid Classes & Effects",
"lv": "Easy",
"s": "Through which type of receptor do eicosanoids act on their target cells?",
"c": [
"Receptor tyrosine kinases",
"Nuclear hormone receptors",
"G protein-linked receptors",
"Ligand-gated ion channels",
"Guanylyl cyclase receptors"
],
"a": 2,
"e": "Eicosanoids are lipid mediators that bind specific G-protein coupled receptors (GPCRs) on the cell surface, for example the EP receptors for PGE₂, IP for PGI₂, TP for TXA₂ and CysLT1 for LTD₄.\nThe G-protein that is coupled decides the response:\n• Gs → ↑ cAMP (e.g. PGI₂ on platelets → less aggregation).\n• Gi → ↓ cAMP.\n• Gq → phospholipase C → IP₃ and DAG → ↑ intracellular Ca²⁺ (e.g. TXA₂ → platelet aggregation and vasoconstriction).\n\nTakeaway: All eicosanoids act through GPCRs. The same molecule can cause opposite effects in different tissues depending on which receptor and G-protein is present.",
"w": [
"Receptor tyrosine kinases are used by insulin and growth factors, not by eicosanoids.",
"Nuclear receptors bind steroid hormones, thyroid hormone and vitamin D, which act on gene transcription.",
"",
"Ligand-gated ion channels such as the nicotinic receptor mediate fast synaptic transmission, not eicosanoid signaling.",
"Guanylyl cyclase receptors are used by ANP and BNP, which raise cGMP."
],
"src": "lec"
},
{
"t": "Eicosanoid Classes & Effects",
"lv": "Easy",
"s": "A prostanoid has a six-membered ring in place of the five-carbon cyclopentane ring. Which class does it belong to?",
"c": [
"Prostaglandins",
"Leukotrienes",
"Prostacyclins",
"Thromboxanes",
"Peptidoleukotrienes"
],
"a": 3,
"e": "Both prostaglandins and thromboxanes come from PGH₂, but their rings differ:\n• Prostaglandins (PGE₂, PGF₂α, PGD₂, PGI₂) keep a five-carbon cyclopentane ring.\n• Thromboxanes (TXA₂, TXB₂) have a six-membered ring that contains an oxygen atom (an oxane ring), made by thromboxane synthase in platelets.\n\nTakeaway: Five-membered ring = prostaglandin. Six-membered oxygen-containing ring = thromboxane. Leukotrienes have no ring at all.",
"w": [
"Prostaglandins keep the five-carbon cyclopentane ring.",
"Leukotrienes are linear molecules with no ring.",
"Prostacyclin (PGI₂) is a prostaglandin with a cyclopentane ring plus a second, fused ring.",
"",
"Peptidoleukotrienes are linear leukotrienes carrying glutathione-derived amino acids."
],
"src": "lec"
},
{
"t": "Eicosanoid Classes & Effects",
"lv": "Easy",
"s": "What does the subscript 2 in PGE₂ and TXA₂ indicate?",
"c": [
"The number of oxygen atoms added",
"The number of carbons in the ring",
"The position of the hydroxyl group",
"The order of discovery",
"The number of C=C double bonds"
],
"a": 4,
"e": "Eicosanoid names carry two pieces of information:\n• The letter (A, E, F, I…) tells you how the ring is substituted, for example with keto or hydroxyl groups.\n• The subscript number tells you how many carbon-carbon double bonds are in the side chains.\nArachidonic acid (20:4) gives the series-2 prostanoids (PGE₂, TXA₂) and the series-4 leukotrienes (LTB₄). Eicosapentaenoic acid (20:5, from fish oil) gives series-3 prostanoids, which have one more double bond.\n\nTakeaway: Subscript = number of C=C double bonds. Arachidonate → series 2 prostanoids and series 4 leukotrienes.",
"w": [
"The subscript does not count oxygen atoms. Ring oxygens and substituents are shown by the letter.",
"All prostaglandins share the same five-carbon ring, so ring size is not what the number shows.",
"The position and type of ring substituents are encoded by the letter, not the subscript.",
"The naming is structural. It does not reflect the order in which the compounds were discovered.",
""
],
"src": "lec"
},
{
"t": "Arachidonic Acid Release & PLA2",
"lv": "Easy",
"s": "The arachidonic acid used for eicosanoid synthesis is mainly released from which position of membrane phospholipids, and by which enzyme?",
"c": [
"C-2, by phospholipase A2",
"C-1, by phospholipase A1",
"C-3, by phospholipase C",
"C-2, by phospholipase D",
"C-3, by lipoprotein lipase"
],
"a": 0,
"e": "Membrane phospholipids carry a saturated fatty acid at C-1 and usually an unsaturated one, often arachidonic acid, at C-2. Phospholipase A2 (PLA2) cleaves the ester bond at C-2, releasing free arachidonic acid. This is the first and rate-limiting step for making every eicosanoid.\nPLA2 is activated by stimuli that raise intracellular Ca²⁺, such as epinephrine, thrombin, bradykinin and angiotensin II, and it is inhibited by corticosteroids.\n\nTakeaway: Arachidonate sits at C-2 and is released by PLA2. Blocking PLA2 (steroids) shuts down both the COX and LOX pathways.",
"w": [
"",
"PLA1 cleaves at C-1, which usually carries a saturated fatty acid such as palmitate, not arachidonate.",
"PLC cleaves the phosphate head group of PIP₂ to release DAG and IP₃. Arachidonate can later be freed from DAG, but this is not the main route.",
"PLD removes the polar head group to leave phosphatidic acid. It does not release fatty acids.",
"Lipoprotein lipase hydrolyzes triglycerides in chylomicrons and VLDL. It does not act on membrane phospholipids."
],
"src": "lec",
"fig": [
"figs/crs/ei-cox-pathway"
]
},
{
"t": "Arachidonic Acid Release & PLA2",
"lv": "Easy",
"s": "What is the immediate dietary precursor of arachidonic acid?",
"c": [
"α-Linolenic acid",
"Linoleic acid",
"Eicosapentaenoic acid",
"Palmitic acid",
"Oleic acid"
],
"a": 1,
"e": "Humans cannot make linoleic acid (ω-6, 18:2), so it is an essential fatty acid. The body elongates and desaturates it: linoleic acid → γ-linolenic acid → dihomo-γ-linolenic acid → arachidonic acid (20:4, ω-6).\nThe ω-3 essential fatty acid, α-linolenic acid (18:3), follows a parallel path to eicosapentaenoic acid (EPA, 20:5), which forms the less inflammatory series-3 prostanoids and series-5 leukotrienes.\n\nTakeaway: Linoleic acid (ω-6) → arachidonic acid → main eicosanoids. α-Linolenic acid (ω-3) → EPA → minor, less inflammatory eicosanoids.",
"w": [
"α-Linolenic acid is the ω-3 precursor of EPA, not of arachidonic acid.",
"",
"EPA is made from α-linolenic acid and gives the series-3 prostanoids. It is not converted to arachidonate.",
"Palmitic acid is a saturated 16-carbon fatty acid. Humans cannot add double bonds beyond C-9, so it cannot become arachidonate.",
"Oleic acid is an ω-9 monounsaturated fatty acid. It cannot be turned into the ω-6 arachidonic acid."
],
"src": "lec"
},
{
"t": "Arachidonic Acid Release & PLA2",
"lv": "Easy",
"s": "Which cells are unable to synthesize eicosanoids?",
"c": [
"Platelets",
"Macrophages",
"Erythrocytes",
"Endothelial cells",
"Gastric mucosal cells"
],
"a": 2,
"e": "Making eicosanoids needs membrane-bound enzymes such as PGH₂ synthase (COX) on the endoplasmic reticulum, plus the ability to make new enzyme protein.\nMature erythrocytes have no nucleus, no ER and no mitochondria, so they cannot make eicosanoids.\nPlatelets also lack a nucleus, but they keep COX-1 and thromboxane synthase from their megakaryocyte parent, so they do make TXA₂. They just cannot replace COX once aspirin destroys it.\n\nTakeaway: Every cell except the red blood cell makes eicosanoids. Platelets make TXA₂ but cannot resynthesize COX.",
"w": [
"Platelets make large amounts of TXA₂ through COX-1 and thromboxane synthase.",
"Activated macrophages make prostaglandins through inducible COX-2 and leukotrienes through 5-lipoxygenase.",
"",
"Endothelial cells make prostacyclin (PGI₂) through prostacyclin synthase.",
"Gastric mucosal cells use constitutive COX-1 to make protective PGE₂ and PGI₂."
],
"src": "lec"
},
{
"t": "Arachidonic Acid Release & PLA2",
"lv": "Easy",
"s": "Which of the following activates phospholipase A2 to release arachidonic acid from membrane phospholipids?",
"c": [
"Insulin",
"Glucagon",
"Aldosterone",
"Bradykinin",
"Thyroxine"
],
"a": 3,
"e": "Phospholipase A2 is activated when intracellular Ca²⁺ rises. Hormones and mediators that do this through their receptors include epinephrine, thrombin, bradykinin and angiotensin II. Once activated, PLA2 releases arachidonic acid from C-2 of membrane phospholipids, starting eicosanoid synthesis.\nBradykinin is a classic example: in inflammation it causes pain and vasodilation partly by triggering prostaglandin release, and it is also why ACE inhibitors, which raise bradykinin, can increase prostaglandin production.\n\nTakeaway: PLA2 activators are epinephrine, thrombin, bradykinin and angiotensin II. Its main inhibitors are corticosteroids.",
"w": [
"Insulin acts through a receptor tyrosine kinase and is not a classic activator of PLA2.",
"Glucagon raises cAMP in the liver and does not trigger arachidonate release.",
"Aldosterone binds an intracellular mineralocorticoid receptor and acts on gene expression, not on PLA2.",
"",
"Thyroxine binds nuclear thyroid hormone receptors and does not activate PLA2."
],
"src": "lec",
"fig": [
"figs/crs/ei-cox-pathway"
]
},
{
"t": "Arachidonic Acid Release & PLA2",
"lv": "Hard",
"s": "A 45-year-old woman with a flare of rheumatoid arthritis is started on oral prednisone. Over the next week, urinary metabolites of both prostaglandins and leukotrienes fall. Which enzyme is the drug inhibiting?",
"c": [
"Cyclooxygenase-1",
"Cyclooxygenase-2",
"5-Lipoxygenase",
"Thromboxane synthase",
"Phospholipase A2"
],
"a": 4,
"e": "Step 1: Both prostaglandin and leukotriene metabolites fell, so the block must be upstream of where the COX and lipoxygenase pathways split.\nStep 2: The only shared step is the release of arachidonic acid from membrane phospholipids by phospholipase A2.\nStep 3: Corticosteroids such as prednisone act on nuclear receptors to induce lipocortin (annexin A1), which inhibits PLA2, and they also reduce COX-2 expression. With less free arachidonate, both prostanoids and leukotrienes fall.\n\nTakeaway: Steroids block PLA2 → ↓ prostaglandins AND ↓ leukotrienes. NSAIDs block only COX, so leukotrienes are spared.",
"w": [
"COX-1 inhibition lowers prostanoids only. Arachidonate would still reach 5-lipoxygenase, so leukotrienes would not fall.",
"COX-2 inhibition would also spare the leukotriene pathway.",
"Blocking 5-lipoxygenase, as zileuton does, lowers leukotrienes but leaves prostaglandin production intact.",
"Thromboxane synthase inhibition lowers only TXA₂ and would not affect leukotrienes or other prostaglandins.",
""
],
"src": "lec",
"fig": [
"figs/crs/ei-cox-pathway"
]
},
{
"t": "COX Pathway & Prostanoids",
"lv": "Easy",
"s": "Prostaglandin H₂ synthase, which starts the cyclooxygenase pathway, is best described as which kind of enzyme?",
"c": [
"A heme dioxygenase on ER membranes",
"A cytosolic NADPH-dependent reductase",
"A mitochondrial flavoprotein oxidase",
"A lysosomal acid hydrolase",
"A biotin-dependent carboxylase"
],
"a": 0,
"e": "PGH₂ synthase, also called prostaglandin endoperoxide synthase or COX, is a heme-containing enzyme bound to the endoplasmic reticulum membrane. It has two active sites:\n1. Cyclooxygenase activity, a dioxygenase reaction that adds two O₂ molecules to arachidonic acid to form PGG₂.\n2. Peroxidase activity, which reduces PGG₂ to PGH₂ using glutathione.\nA dioxygenase incorporates both atoms of O₂ into its substrate, which is why it is called that.\n\nTakeaway: COX = a membrane-bound, heme-containing dioxygenase on the ER with both cyclooxygenase and peroxidase activities.",
"w": [
"",
"It does not use NADPH, and it sits on the ER membrane rather than free in the cytosol.",
"It is on the endoplasmic reticulum, not in mitochondria, and it is not a flavoprotein.",
"Lysosomal acid hydrolases break down macromolecules. COX is a biosynthetic ER enzyme.",
"Biotin-dependent carboxylases, such as acetyl-CoA carboxylase, add CO₂. COX adds O₂."
],
"src": "lec",
"fig": [
"figs/crs/ei-cox-steps"
]
},
{
"t": "COX Pathway & Prostanoids",
"lv": "Easy",
"s": "The peroxidase activity of PGH₂ synthase converts PGG₂ to PGH₂. Which cofactor does this step use?",
"c": [
"NADPH",
"Glutathione",
"FAD",
"Biotin",
"Thiamine pyrophosphate"
],
"a": 1,
"e": "PGH₂ synthase works in two steps:\n1. Its cyclooxygenase site adds 2 O₂ to arachidonic acid, forming the cyclic endoperoxide PGG₂, which carries a hydroperoxide group.\n2. Its peroxidase site reduces that hydroperoxide to a hydroxyl group, forming PGH₂. The reducing agent is glutathione: 2 GSH are oxidized to GSSG.\n\nTakeaway: COX site → PGG₂, then the peroxidase site uses glutathione (2 GSH → GSSG) → PGH₂, the branch point for all prostanoids.",
"w": [
"NADPH is used by reductases such as glutathione reductase, but not directly in the PGG₂ to PGH₂ step.",
"",
"FAD is a cofactor for dehydrogenases and oxidases, not for this peroxidase step.",
"Biotin is the cofactor for carboxylation reactions such as acetyl-CoA carboxylase.",
"Thiamine pyrophosphate is used in oxidative decarboxylations such as pyruvate dehydrogenase."
],
"src": "lec",
"fig": [
"figs/crs/ei-cox-steps"
]
},
{
"t": "COX Pathway & Prostanoids",
"lv": "Easy",
"s": "Which statement correctly contrasts COX-1 and COX-2?",
"c": [
"COX-1 is inducible and COX-2 is constitutive",
"Both are only found in macrophages",
"COX-1 is constitutive and COX-2 is inducible",
"Only COX-2 is present in platelets",
"Only COX-1 forms PGG₂ from arachidonate"
],
"a": 2,
"e": "There are two COX isoforms:\n• COX-1 is constitutive, always present, in gastric mucosa, kidney, platelets and vascular endothelium. It makes 'housekeeping' prostanoids: protective PGE₂ and PGI₂ in the stomach, TXA₂ in platelets, and PGs that maintain renal blood flow.\n• COX-2 is inducible. It is switched on in macrophages and monocytes by inflammatory signals such as IL-1 and platelet-activating factor, and it makes the prostaglandins that cause pain, fever and inflammation.\nBoth convert arachidonate to PGG₂ and then PGH₂.\n\nTakeaway: COX-1 = constitutive, protective (stomach, platelets, kidney). COX-2 = inducible, inflammatory. That split explains NSAID side effects and why celecoxib is gentler on the stomach.",
"w": [
"This reverses them: COX-1 is the constitutive form and COX-2 is induced during inflammation.",
"COX-1 is found in many tissues, including the stomach, platelets and kidney, not only in macrophages.",
"",
"Platelets use COX-1 to make TXA₂, which is why low-dose aspirin works as an antiplatelet drug.",
"Both isoforms carry out the same reaction, arachidonate → PGG₂ → PGH₂."
],
"src": "lec",
"fig": [
"figs/crs/ei-cox-pathway"
]
},
{
"t": "COX Pathway & Prostanoids",
"lv": "Easy",
"s": "In macrophages, COX-2 expression is triggered mainly by platelet-activating factor and which other mediator?",
"c": [
"Insulin",
"Erythropoietin",
"Thyroxine",
"Interleukin-1",
"Glucagon"
],
"a": 3,
"e": "COX-2 is the inducible isoform. In macrophages and monocytes, its gene is switched on by inflammatory mediators, chiefly interleukin-1 and platelet-activating factor (and TNF-α). The resulting surge of prostaglandins, especially PGE₂, causes the vasodilation, pain and fever of inflammation. PGE₂ acting on the hypothalamus raises the temperature set point.\nCorticosteroids suppress this induction, which adds to their anti-inflammatory effect.\n\nTakeaway: COX-2 is induced by IL-1 and PAF in macrophages. Its PGE₂ drives fever, pain and inflammation.",
"w": [
"Insulin regulates fuel metabolism and is not an inflammatory trigger for COX-2.",
"Erythropoietin stimulates red cell production in the marrow and does not induce COX-2.",
"Thyroxine raises metabolic rate through nuclear receptors and is not a COX-2 inducer.",
"",
"Glucagon acts on the liver to raise blood glucose and has no role in inducing COX-2."
],
"src": "lec",
"fig": [
"figs/crs/ei-cox-pathway"
]
},
{
"t": "COX Pathway & Prostanoids",
"lv": "Easy",
"s": "Which compound is the common precursor of PGI₂, PGE₂, PGD₂, PGF₂α and TXA₂?",
"c": [
"PGG₂",
"LTA₄",
"5-HPETE",
"TXB₂",
"PGH₂"
],
"a": 4,
"e": "The COX pathway runs:\narachidonic acid → (cyclooxygenase) PGG₂ → (peroxidase) PGH₂.\nPGH₂ is the branch point. Tissue-specific enzymes then convert it:\n• Prostacyclin synthase (endothelium) → PGI₂.\n• Thromboxane synthase (platelets) → TXA₂.\n• Isomerases and reductases → PGE₂, PGD₂ and PGF₂α.\nSo every prostanoid passes through PGH₂, and which product forms depends on the enzymes present in that cell.\n\nTakeaway: PGH₂ is the common precursor of all prostanoids. The cell type decides the final product.",
"w": [
"PGG₂ comes one step before PGH₂. It is reduced to PGH₂ first, so it is not the immediate common precursor.",
"LTA₄ is the branch point of the leukotriene (lipoxygenase) pathway, not the prostanoids.",
"5-HPETE is the first product of 5-lipoxygenase and leads to the leukotrienes.",
"TXB₂ is the inactive breakdown product of TXA₂ and is not a precursor of anything.",
""
],
"src": "lec",
"fig": [
"figs/crs/ei-cox-pathway"
]
},
{
"t": "COX Pathway & Prostanoids",
"lv": "Easy",
"s": "Which enzyme turns PGH₂ into TXA₂ in platelets?",
"c": [
"Thromboxane synthase",
"Prostacyclin synthase",
"5-Lipoxygenase",
"Phospholipase A2",
"Glutathione peroxidase"
],
"a": 0,
"e": "Platelets express thromboxane synthase, which converts PGH₂ into TXA₂. TXA₂ is a potent vasoconstrictor and platelet aggregator. It is very unstable, with a half-life of about 30 seconds, and is quickly hydrolyzed to inactive TXB₂.\nEndothelial cells instead express prostacyclin synthase, which turns PGH₂ into PGI₂. PGI₂ does the opposite: it dilates vessels and inhibits aggregation.\nThe balance between platelet TXA₂ and endothelial PGI₂ controls clotting at the vessel wall.\n\nTakeaway: Platelets → thromboxane synthase → TXA₂ (clot, constrict). Endothelium → prostacyclin synthase → PGI₂ (anti-clot, dilate).",
"w": [
"",
"Prostacyclin synthase is in endothelium and makes PGI₂, which opposes TXA₂.",
"5-Lipoxygenase acts on arachidonic acid to start the leukotriene pathway, not on PGH₂.",
"PLA2 acts upstream, releasing arachidonic acid from membrane phospholipids.",
"Glutathione peroxidase detoxifies peroxides and does not make prostanoids."
],
"src": "lec",
"fig": [
"figs/crs/ei-cox-pathway"
]
},
{
"t": "NSAIDs, Aspirin & COX-2 Inhibitors",
"lv": "Easy",
"s": "How does aspirin inhibit cyclooxygenase?",
"c": [
"It blocks the hydrophobic channel reversibly",
"It acetylates an active-site serine",
"It inhibits phospholipase A2",
"It blocks leukotriene receptors",
"It competes with glutathione"
],
"a": 1,
"e": "Aspirin (acetylsalicylic acid) transfers its acetyl group onto a serine hydroxyl near the cyclooxygenase active site of COX-1 and COX-2. The acetylated serine physically blocks arachidonic acid from entering, so the enzyme is permanently inactivated. The block is covalent, so it lasts until the cell makes new enzyme.\nThis is different from all other NSAIDs, which block the arachidonate channel reversibly.\n\nTakeaway: Aspirin = irreversible acetylation of COX. Other NSAIDs = reversible competitive blockade. That is why aspirin's effect on anucleate platelets lasts their whole lifespan.",
"w": [
"Reversible blockade of the hydrophobic channel is how ibuprofen and the other NSAIDs work, not aspirin.",
"",
"Corticosteroids, not aspirin, inhibit phospholipase A2.",
"Leukotriene receptor antagonists such as montelukast block CysLT1 receptors. Aspirin does not act on leukotriene receptors.",
"Aspirin does not target the glutathione-dependent peroxidase step. It blocks the cyclooxygenase site."
],
"src": "lec",
"fig": [
"figs/crs/ei-cox-pathway"
]
},
{
"t": "NSAIDs, Aspirin & COX-2 Inhibitors",
"lv": "Easy",
"s": "How does ibuprofen inhibit cyclooxygenase?",
"c": [
"It irreversibly acetylates a serine",
"It inhibits phospholipase A2",
"It blocks the arachidonate channel",
"It inhibits 5-lipoxygenase",
"It blocks thromboxane receptors"
],
"a": 2,
"e": "Ibuprofen, naproxen, indomethacin and the other traditional NSAIDs bind inside the long hydrophobic channel through which arachidonic acid reaches the cyclooxygenase active site. They compete with arachidonate, so the inhibition is reversible: when the drug leaves, the enzyme works again.\nAspirin is the exception. It irreversibly acetylates a serine in the active site.\n\nTakeaway: Ibuprofen = reversible block of the arachidonate channel on COX-1 and COX-2. Its antiplatelet effect wears off as the drug is cleared, unlike aspirin's.",
"w": [
"Irreversible serine acetylation is aspirin's mechanism, not ibuprofen's.",
"Phospholipase A2 is inhibited by corticosteroids, not by NSAIDs.",
"",
"5-Lipoxygenase is inhibited by zileuton, not ibuprofen.",
"Ibuprofen acts on COX itself. It does not block thromboxane receptors."
],
"src": "lec",
"fig": [
"figs/crs/ei-cox-pathway"
]
},
{
"t": "NSAIDs, Aspirin & COX-2 Inhibitors",
"lv": "Hard",
"s": "A 68-year-old man who takes 81 mg of aspirin daily is scheduled for elective knee surgery. His surgeon asks him to stop the aspirin 7 days before the operation, even though aspirin is cleared from the blood within hours. Why does the antiplatelet effect last so long?",
"c": [
"Aspirin is stored in platelet granules",
"Aspirin blocks the TXA₂ receptor for days",
"Aspirin destroys the bone marrow megakaryocytes",
"Platelets cannot make new COX enzyme",
"Aspirin binds plasma proteins for a week"
],
"a": 3,
"e": "Step 1: Low-dose aspirin irreversibly acetylates COX-1 in platelets, so they can no longer make TXA₂, which is needed for aggregation.\nStep 2: Most cells overcome this within hours by making new COX protein. Platelets cannot, because they have no nucleus and so cannot transcribe new mRNA.\nStep 3: The antiplatelet effect therefore lasts the platelet's whole lifespan, about 7 to 10 days, long after aspirin itself has left the blood. Function returns only as new platelets are released from the marrow, which is why aspirin is stopped about 7 days before elective surgery.\n\nTakeaway: Aspirin + anucleate platelets = antiplatelet effect lasting the platelet's lifespan (7 to 10 days).",
"w": [
"Aspirin is not stored in platelet granules. It acts once, covalently, on COX.",
"Aspirin does not block the TXA₂ receptor. It stops platelets from making TXA₂ in the first place.",
"Aspirin does not destroy megakaryocytes. New, normal platelets keep being released, which is how function recovers.",
"",
"Protein binding cannot explain the effect. Aspirin is cleared within hours, but the COX inactivation is permanent."
],
"src": "lec",
"fig": [
"figs/crs/ei-cox-pathway"
]
},
{
"t": "NSAIDs, Aspirin & COX-2 Inhibitors",
"lv": "Hard",
"s": "A 60-year-old woman with osteoarthritis has taken naproxen daily for months. She now has epigastric pain and black, tarry stools, and endoscopy shows a gastric ulcer. Inhibition of which enzyme most directly explains the ulcer?",
"c": [
"COX-2 in macrophages",
"Phospholipase A2 in mucosa",
"5-Lipoxygenase in neutrophils",
"Thromboxane synthase in platelets",
"COX-1 in gastric mucosa"
],
"a": 4,
"e": "Step 1: Naproxen is a non-selective NSAID that inhibits both COX-1 and COX-2.\nStep 2: In the stomach, constitutive COX-1 makes PGE₂ and PGI₂, which protect the mucosa. They increase mucus and bicarbonate secretion, maintain mucosal blood flow, and reduce acid secretion by parietal cells.\nStep 3: Blocking COX-1 removes this protection, so acid damages the mucosa, causing an ulcer that can bleed and produce black, tarry stools (melena).\nCOX-2 inhibition is what gives the anti-inflammatory benefit. That is why selective COX-2 inhibitors such as celecoxib cause fewer ulcers.\n\nTakeaway: NSAID ulcers come from loss of COX-1-derived protective prostaglandins in the gastric mucosa.",
"w": [
"COX-2 inhibition in macrophages produces the anti-inflammatory and analgesic effect, not the gastric injury.",
"NSAIDs do not inhibit phospholipase A2. Corticosteroids do.",
"NSAIDs do not inhibit 5-lipoxygenase. In fact, blocking COX can divert more arachidonate to leukotrienes.",
"NSAIDs act on COX upstream of thromboxane synthase. Lowering platelet TXA₂ worsens bleeding but does not cause the ulcer itself.",
""
],
"src": "lec",
"fig": [
"figs/crs/ei-cox-pathway"
]
},
{
"t": "NSAIDs, Aspirin & COX-2 Inhibitors",
"lv": "Hard",
"s": "A 66-year-old man with rheumatoid arthritis needs an anti-inflammatory drug, but he had a bleeding gastric ulcer last year. His physician wants a drug that targets only the isoform induced in inflammatory cells. Which drug fits?",
"c": [
"Celecoxib",
"Aspirin",
"Indomethacin",
"Naproxen",
"Ibuprofen"
],
"a": 0,
"e": "Step 1: A recent bleeding ulcer means the drug should spare COX-1, which protects the gastric mucosa.\nStep 2: The isoform induced in macrophages and other inflammatory cells is COX-2.\nStep 3: Celecoxib selectively inhibits COX-2. It fits into a side pocket that exists only in COX-2. It controls inflammation with less gastric injury.\nTrade-off: COX-2 inhibitors reduce endothelial PGI₂ but not platelet TXA₂, tipping the balance toward thrombosis, so they carry an increased risk of MI and stroke.\n\nTakeaway: Celecoxib = selective COX-2 inhibitor. Fewer ulcers, but more cardiovascular thrombotic risk.",
"w": [
"",
"Aspirin irreversibly inhibits both COX-1 and COX-2 and is especially ulcerogenic, so it is a poor choice after a bleeding ulcer.",
"Indomethacin is a potent non-selective COX inhibitor with a high risk of gastric injury.",
"Naproxen inhibits COX-1 as well as COX-2, so it removes gastric protection.",
"Ibuprofen is non-selective and inhibits gastric COX-1."
],
"src": "lec",
"fig": [
"figs/crs/ei-cox-pathway"
]
},
{
"t": "Lipoxygenase Pathway & Leukotrienes",
"lv": "Easy",
"s": "Which enzyme starts leukotriene synthesis by forming 5-HPETE from arachidonic acid?",
"c": [
"Cyclooxygenase-1",
"5-Lipoxygenase",
"Cyclooxygenase-2",
"Thromboxane synthase",
"Prostacyclin synthase"
],
"a": 1,
"e": "Arachidonic acid can go down two paths:\n• Cyclooxygenase (cyclic) → prostanoids.\n• Lipoxygenase (linear) → leukotrienes.\nIn neutrophils, mast cells and macrophages, 5-lipoxygenase, helped by 5-lipoxygenase-activating protein (FLAP), adds oxygen at C-5 of arachidonate to form 5-HPETE. 5-HPETE is converted to the unstable epoxide LTA₄, which becomes LTB₄ (by hydrolase) or LTC₄ (by adding glutathione).\nZileuton inhibits 5-lipoxygenase and is used in asthma.\n\nTakeaway: 5-Lipoxygenase → 5-HPETE → LTA₄ → leukotrienes. Zileuton blocks this step.",
"w": [
"COX-1 forms PGG₂ and starts the prostanoid branch, not the leukotrienes.",
"",
"COX-2 also forms PGG₂ for prostanoids.",
"Thromboxane synthase acts on PGH₂ in platelets to make TXA₂.",
"Prostacyclin synthase acts on PGH₂ in endothelium to make PGI₂."
],
"src": "lec",
"fig": [
"figs/crs/ei-lox-pathway"
]
},
{
"t": "Lipoxygenase Pathway & Leukotrienes",
"lv": "Easy",
"s": "Which leukotriene is not a peptidoleukotriene?",
"c": [
"LTC₄",
"LTD₄",
"LTB₄",
"LTE₄",
"LTF₄"
],
"a": 2,
"e": "LTA₄ splits two ways:\n• LTA₄ hydrolase → LTB₄, which contains no amino acids.\n• LTC₄ synthase adds glutathione → LTC₄. LTC₄ is then trimmed to LTD₄ and LTE₄ (and LTF₄).\nBecause LTC₄, LTD₄, LTE₄ and LTF₄ carry amino acids from glutathione, they are the peptidoleukotrienes (cysteinyl leukotrienes). They cause bronchoconstriction and vascular leak.\nLTB₄ instead acts on leukocytes. It is a powerful chemotactic agent for neutrophils.\n\nTakeaway: LTB₄ = no peptide, neutrophil chemotaxis. LTC₄/D₄/E₄ = peptidoleukotrienes, bronchoconstriction (asthma).",
"w": [
"LTC₄ is formed by adding glutathione to LTA₄, so it is a peptidoleukotriene.",
"LTD₄ is LTC₄ minus glutamate and still carries cysteine and glycine.",
"",
"LTE₄ is LTD₄ minus glycine and still carries cysteine.",
"LTF₄ is LTE₄ with glutamate added back, so it contains amino acids."
],
"src": "lec",
"fig": [
"figs/crs/ei-lox-pathway"
]
},
{
"t": "Lipoxygenase Pathway & Leukotrienes",
"lv": "Easy",
"s": "How is LTD₄ formed from LTC₄?",
"c": [
"Addition of glutathione",
"Removal of glycine",
"Addition of glutamate",
"Removal of glutamate",
"Oxidation by 5-lipoxygenase"
],
"a": 3,
"e": "Peptidoleukotrienes are built and trimmed step by step:\n1. LTA₄ + glutathione (γ-Glu-Cys-Gly) → LTC₄.\n2. LTC₄ − glutamate (by γ-glutamyl transferase) → LTD₄.\n3. LTD₄ − glycine (by a dipeptidase) → LTE₄.\n4. LTE₄ + glutamate → LTF₄.\nLTD₄ is the most potent bronchoconstrictor, and it is the main ligand for the CysLT1 receptor blocked by montelukast.\n\nTakeaway: LTC₄ → (lose Glu) LTD₄ → (lose Gly) LTE₄.",
"w": [
"Adding glutathione makes LTC₄ from LTA₄, the step before this one.",
"Removing glycine turns LTD₄ into LTE₄, the step after this one.",
"Adding glutamate turns LTE₄ into LTF₄.",
"",
"5-Lipoxygenase acts only at the first step, converting arachidonate to 5-HPETE."
],
"src": "lec",
"fig": [
"figs/crs/ei-lox-pathway"
]
},
{
"t": "Lipoxygenase Pathway & Leukotrienes",
"lv": "Easy",
"s": "Which leukotrienes make up the slow-reacting substance of anaphylaxis?",
"c": [
"LTA₄, LTB₄ and LTC₄",
"LTB₄, LTD₄ and LTE₄",
"TXA₂, TXB₂ and PGI₂",
"PGD₂, PGE₂ and PGF₂α",
"LTC₄, LTD₄ and LTE₄"
],
"a": 4,
"e": "The slow-reacting substance of anaphylaxis (SRS-A) was the name given to a mediator released from sensitized lung tissue during allergic reactions. Its effect developed more slowly than histamine's. It was later shown to be a mixture of the peptidoleukotrienes LTC₄, LTD₄ and LTE₄.\nThey cause intense, prolonged bronchoconstriction, increased vascular permeability and mucus secretion, which is why they are key in asthma and anaphylaxis, and why montelukast and zafirlukast, which block CysLT1, help in asthma.\n\nTakeaway: SRS-A = LTC₄ + LTD₄ + LTE₄. They cause slow, sustained bronchoconstriction in asthma and anaphylaxis.",
"w": [
"LTA₄ is an unstable intermediate, and LTB₄ is a neutrophil chemoattractant without a peptide group, so neither is part of SRS-A.",
"LTB₄ is not a peptidoleukotriene and is not part of SRS-A.",
"TXA₂, TXB₂ and PGI₂ are prostanoids from the COX pathway.",
"PGD₂, PGE₂ and PGF₂α are prostaglandins from the COX pathway.",
""
],
"src": "lec",
"fig": [
"figs/crs/ei-lox-pathway"
]
},
{
"t": "Lipoxygenase Pathway & Leukotrienes",
"lv": "Hard",
"s": "A 14-year-old boy with persistent asthma is started on an oral drug, and his physician orders periodic liver function tests because of the drug's risk of hepatotoxicity. The drug lowers production of every leukotriene. Which reaction does it block directly?",
"c": [
"Arachidonic acid to 5-HPETE",
"Arachidonic acid to PGG₂",
"LTA₄ to LTC₄",
"LTC₄ to LTD₄",
"Membrane phospholipid to arachidonate"
],
"a": 0,
"e": "Step 1: An oral asthma drug that requires liver function monitoring points to zileuton. Leukotriene receptor blockers such as montelukast do not need LFT monitoring.\nStep 2: The drug lowers every leukotriene, including LTB₄ and all the peptidoleukotrienes, so it must act at the very first step of the pathway, before LTA₄ branches.\nStep 3: That first step is 5-lipoxygenase converting arachidonic acid to 5-HPETE. Zileuton inhibits 5-lipoxygenase, which reduces bronchoconstriction (LTC₄/D₄/E₄) and neutrophil recruitment (LTB₄).\n\nTakeaway: Zileuton = 5-lipoxygenase inhibitor. It blocks arachidonate → 5-HPETE, lowers all leukotrienes, and can cause hepatotoxicity.",
"w": [
"",
"Arachidonic acid → PGG₂ is the cyclooxygenase step blocked by NSAIDs. It makes prostanoids, not leukotrienes.",
"LTA₄ → LTC₄ (adding glutathione) is downstream of the branch point. Blocking it would spare LTB₄.",
"LTC₄ → LTD₄ is even further downstream. Blocking it would spare LTB₄ and LTC₄.",
"Releasing arachidonate from phospholipids is the PLA2 step blocked by corticosteroids. That would lower prostaglandins too, and steroids are not monitored this way for hepatotoxicity."
],
"src": "lec",
"fig": [
"figs/crs/ei-lox-pathway"
]
},
{
"t": "Lipoxygenase Pathway & Leukotrienes",
"lv": "Easy",
"s": "How do montelukast and zafirlukast work in asthma?",
"c": [
"They inhibit 5-lipoxygenase",
"They block leukotriene receptors",
"They inhibit phospholipase A2",
"They acetylate cyclooxygenase",
"They inhibit thromboxane synthase"
],
"a": 1,
"e": "The peptidoleukotrienes LTC₄, LTD₄ and LTE₄ act on CysLT1 receptors, which are G-protein coupled receptors on bronchial smooth muscle. Binding causes bronchoconstriction, mucus secretion and airway edema.\nMontelukast and zafirlukast are competitive antagonists of the CysLT1 receptor. They leave leukotriene production unchanged but stop the leukotrienes from acting. They are oral controller drugs, useful in aspirin-exacerbated and exercise-induced asthma.\n\nTakeaway: '-lukast' drugs block the leukotriene receptor (CysLT1). Zileuton blocks leukotriene synthesis (5-lipoxygenase).",
"w": [
"Inhibiting 5-lipoxygenase is zileuton's mechanism, which lowers leukotriene production.",
"",
"Corticosteroids inhibit phospholipase A2 and lower both prostaglandins and leukotrienes.",
"Aspirin irreversibly acetylates cyclooxygenase. It can actually worsen asthma in susceptible patients by shunting arachidonate toward leukotrienes.",
"Thromboxane synthase inhibition would lower TXA₂, not block leukotriene effects in the airway."
],
"src": "lec",
"fig": [
"figs/crs/ei-lox-pathway"
]
},
{
"t": "Practice Questions · Eicosanoids (from the slides)",
"s": "Leukotriene synthesis is inhibited by antiasthmatic drugs. What is the mechanism of action of the drug to inhibit the synthesis?",
"ns": true,
"shetty": 1,
"c": [
"Acetylates serine hydroxyl group near the active site of the enzyme, preventing arachidonate binding",
"The drugs block the hydrophobic channel by which arachidonate enters the cyclooxygenase active site",
"The drugs inhibit Phospholipase A2",
"The drugs interfere with leukotriene-receptor interactions",
"The drugs inhibits prostaglandin endoperoxidase synthase"
],
"a": 3,
"e": "Of the anti-asthma drugs on the slides, the ones listed here act by interfering with leukotriene-receptor interactions (montelukast and zafirlukast block leukotrienes from binding receptors on airway smooth muscle). The other anti-asthma group, zileuton, inhibits 5-lipoxygenase, which is not offered.",
"w": [
"This is how aspirin inhibits COX.",
"This is how ibuprofen inhibits COX.",
"This is how corticosteroids work, and it lowers prostaglandins too.",
"",
"PGH synthase is the COX enzyme, not part of leukotriene synthesis."
],
"src": "lec"
},
{
"t": "Practice Questions · Eicosanoids (from the slides)",
"s": "Prostaglandins exhibit a wide spectrum of biological activity on various systems of human body. Some of the prostaglandins act as the mediators of inflammatory reactions. Anti-inflammatory drugs such as aspirin, indomethacin and ibuprofen prevent the synthesis. They do so by inhibiting an enzyme involved in the biosynthesis of prostaglandins. Identify that target enzyme from the following:",
"ns": true,
"shetty": 1,
"c": [
"Phospholipase C",
"Phospholipase A2",
"PG isomerase",
"5-Lipoxygenase",
"Cyclooxygenases"
],
"a": 4,
"e": "Aspirin, indomethacin and ibuprofen are NSAIDs. They inhibit both cyclooxygenases, COX-1 and COX-2, which convert arachidonic acid to PGG₂ and then PGH₂.",
"w": [
"PLC makes IP3 and DAG, not prostaglandins.",
"PLA2 is inhibited by corticosteroids, not NSAIDs.",
"NSAIDs act at the COX step.",
"5-Lipoxygenase makes leukotrienes and is not blocked by NSAIDs.",
""
],
"src": "lec"
},
{
"t": "Peroxisomal, α- & ω-Oxidation",
"s": "<p>A 2-year-old boy is brought to the emergency department because of extreme lethargy. His mother reports that he had a mild upper respiratory tract infection for the past two days, during which his oral intake was significantly reduced. Physical examination reveals a somnolent child who responds only to painful stimuli. Laboratory evaluation demonstrates severe hypoketotic hypoglycemia. Urinalysis reveals elevated levels of dicarboxylic acids. Analysis of cellular organelles shows an upregulation of a compensatory metabolic pathway that oxidizes fatty acids starting at the omega-carbon position. Where in the cell does the initial reaction of this compensatory pathway take place?</p>",
"html": true,
"c": [
"Mitochondrion",
"Peroxisome",
"Lysosome",
"Golgi apparatus",
"Endoplasmic reticulum"
],
"a": 4,
"eh": "<p>Omega-oxidation is an alternative pathway of fatty acid metabolism that becomes prominent when mitochondrial beta-oxidation is defective or overwhelmed (e.g., MCAD deficiency). The initial step of omega-oxidation involves hydroxylation of the terminal methyl group (omega-carbon) of a fatty acid to a hydroxyl group, catalyzed by a cytochrome P450 enzyme located in the smooth endoplasmic reticulum. The resulting omega-hydroxy fatty acid is subsequently converted to a dicarboxylic acid by cytosolic enzymes and enters peroxisomes/mitochondria for further breakdown.</p><p><b>Key takeaways</b></p><ul><li>Omega-oxidation is a minor pathway for fatty acid metabolism that oxidizes the omega (omega) carbon (the methyl end) of fatty acids when mitochondrial beta-oxidation is blocked (e.g., MCAD deficiency).</li><li>The initial step of omega-oxidation (hydroxylation by cytochrome P450) occurs in the endoplasmic reticulum.</li><li>Elevated urinary dicarboxylic acids are a hallmark of impaired mitochondrial beta-oxidation and increased omega-oxidation.</li></ul>",
"w": [
"Mitochondrial beta-oxidation is the primary pathway for fatty acid breakdown under fasting conditions. When mitochondrial beta-oxidation is impaired (e.g., MCAD deficiency), medium-chain fatty acids accumulate and are diverted to alternative oxidation pathways outside the mitochondrion.",
"Peroxisomes are responsible for alpha-oxidation (e.g., phytanic acid) and peroxisomal beta-oxidation of very-long-chain fatty acids (VLCFAs). While peroxisomes can further process the dicarboxylic acids generated by omega-oxidation, the initial hydroxylation reaction of omega-oxidation occurs in the endoplasmic reticulum.",
"Lysosomes are membrane-bound organelles involved in macromolecular degradation (glycoproteins, mucopolysaccharides, sphingolipids) via hydrolytic enzymes, not omega-oxidation of fatty acids.",
"The Golgi apparatus is involved in post-translational modification, sorting, and packaging of proteins and lipids, not fatty acid oxidation.",
""
],
"usmle": 1,
"src": "usm"
},
{
"t": "Energetics & Regulation",
"s": "<p>A 24-year-old man undergoes a prolonged endurance running test after skipping breakfast. During the run, his skeletal muscle tissues rapidly increase their rate of fatty acid oxidation to sustain ATP generation. At the molecular level, intracellular accumulation of AMP activates AMP-activated protein kinase (AMPK). AMPK subsequently phosphorylates and inactivates acetyl-CoA carboxylase (ACC). Which of the following best describes the immediate downstream effect of ACC inactivation that allows increased fatty acid entry into the mitochondria for oxidation?</p>",
"html": true,
"c": [
"Increased levels of citrate in the cytosol",
"Increased binding of carnitine to long-chain fatty acids by CPT I",
"Decreased concentration of malonyl-CoA, relieving inhibition of carnitine palmitoyltransferase I (CPT I)",
"Direct activation of carnitine acylcarnitine translocase (CACT) by AMP",
"Enhanced export of acetyl-CoA into the mitochondrial matrix via the citrate shuttle"
],
"a": 2,
"eh": "<p>Acetyl-CoA carboxylase (ACC) synthesizes malonyl-CoA from acetyl-CoA. Malonyl-CoA is an potent allosteric inhibitor of CPT I, the rate-limiting enzyme for long-chain fatty acid entry into the mitochondrial matrix via the carnitine shuttle. When AMPK phosphorylates and inactivates ACC, malonyl-CoA levels fall rapidly. Relief of CPT I inhibition permits efficient transport of long-chain fatty acyl-CoA into mitochondria for beta-oxidation.</p><p><b>Key takeaways</b></p><ul><li>Acetyl-CoA carboxylase (ACC) converts acetyl-CoA to malonyl-CoA.</li><li>Malonyl-CoA inhibits Carnitine Palmitoyltransferase I (CPT I), preventing reciprocal fatty acid synthesis and beta-oxidation (prevents futile cycling).</li><li>Fasting and exercise increase the AMP/ATP ratio -&gt; activates AMPK -&gt; phosphorylates/inactivates ACC -&gt; decreases malonyl-CoA -&gt; relieves CPT I inhibition -&gt; increases fatty acid beta-oxidation.</li></ul>",
"w": [
"Citrate accumulates in the cytosol during the fed state and serves as an allosteric activator of ACC. Accumulation of citrate does not directly promote fatty acid entry into mitochondria.",
"CPT I transfers the acyl group from acyl-CoA to carnitine. Increased binding occurs secondary to the removal of malonyl-CoA inhibition, but option C describes the direct, immediate regulatory mechanism.",
"",
"CACT is an inner mitochondrial membrane antiporter that exchanges acylcarnitine for free carnitine; it is not directly activated by AMP.",
"The citrate shuttle moves acetyl-CoA from mitochondria to the cytosol for fatty acid synthesis during the fed state, not during fasting/exercise."
],
"usmle": 1,
"src": "usm"
},
{
"t": "Zellweger, X-ALD & Refsum",
"s": "<p>An 8-year-old boy is brought to the clinic due to worsening school performance and progressive difficulty hearing over the past six months. Physical examination reveals generalized hyperpigmentation of the skin. Neurological examination reveals spastic gait, brisk deep tendon reflexes, and impaired vibratory sensation in both lower extremities. Laboratory evaluation shows:</p><table class=\"labt\"><tr><th>Serum Parameter</th><th>Measured Value</th><th>Reference Range</th></tr><tr><td>Sodium</td><td>131 mEq/L</td><td>136–145 mEq/L</td></tr><tr><td>Potassium</td><td>5.3 mEq/L</td><td>3.5–5.0 mEq/L</td></tr><tr><td>Morning Cortisol</td><td>3.2 mcg/dL</td><td>6.0–23.0 mcg/dL</td></tr><tr><td>ACTH</td><td>185 pg/mL</td><td>7.2–63.3 pg/mL</td></tr></table><p>Plasma metabolic profiling reveals significantly elevated levels of very-long-chain fatty acids (VLCFAs, e.g., C24:0 and C26:0). A mutation in the ABCD1 gene is confirmed. Which of the following cellular processes is primarily defective in this patient?</p>",
"html": true,
"c": [
"Mitochondrial beta-oxidation of medium-chain fatty acids",
"Cytosolic elongation of polyunsaturated fatty acids",
"Peroxisomal alpha-oxidation of branched-chain fatty acids",
"Peroxisomal transport of very-long-chain fatty acids for beta-oxidation",
"Endoplasmic reticulum omega-oxidation of long-chain fatty acids"
],
"a": 3,
"eh": "<p>X-linked adrenoleukodystrophy (X-ALD) is caused by mutations in the ABCD1 gene, which encodes the adrenoleukodystrophy protein (ALDP), an ATP-binding cassette transporter located in the peroxisomal membrane. ALDP transports very-long-chain fatty acids (VLCFAs, &gt;22 carbons) into peroxisomes for initial beta-oxidation. Defective transport leads to accumulation of VLCFAs in plasma, brain white matter, and the adrenal cortex, causing progressive neurodegeneration and adrenal insufficiency.</p><p><b>Key takeaways</b></p><ul><li>X-linked adrenoleukodystrophy (X-ALD) is an X-linked recessive peroxisomal disorder caused by ABCD1 gene mutations.</li><li>Impaired transport of VLCFAs into peroxisomes leads to accumulation of VLCFAs (C24, C26) in tissue and plasma.</li><li>Clinical presentation: Young boys (ages 4-10) with progressive neurodegeneration (behavioral issues, spasticity, hearing/vision loss) and primary adrenal insufficiency (hyperpigmentation, hyponatremia, hyperkalemia, low cortisol, high ACTH).</li></ul>",
"w": [
"Mitochondrial beta-oxidation metabolizes short-, medium-, and long-chain fatty acids (up to ~20 carbons). It does not initiate oxidation of VLCFAs (carbons > 22).",
"Fatty acid elongation occurs in the endoplasmic reticulum; this process is intact in X-linked adrenoleukodystrophy.",
"Peroxisomal alpha-oxidation is responsible for metabolizing branched-chain fatty acids such as phytanic acid, defective in Refsum disease.",
"",
"Endoplasmic reticulum omega-oxidation is a compensatory pathway for medium- and long-chain fatty acids when mitochondrial beta-oxidation is impaired; it is not the primary site of VLCFA breakdown."
],
"usmle": 1,
"src": "usm"
},
{
"t": "Ketogenesis: Pathway & HMG-CoA Synthase",
"s": "<p>A 12-year-old boy with type 1 diabetes mellitus is brought to the emergency department because of persistent vomiting, confusion, and deep, rapid breathing for the past 12 hours. His parents report that he missed several insulin injections over the weekend. Physical examination reveals a fruity odor on his breath and dry mucous membranes. Laboratory findings confirm diabetic ketoacidosis (DKA). Which of the following compounds serves as the direct substrate for hepatic ketogenesis in this patient?</p>",
"html": true,
"c": [
"Oxaloacetate derived from gluconeogenesis",
"Free fatty acids bound to albumin in plasma",
"Acetyl-CoA derived from mitochondrial beta-oxidation",
"Acetoacetyl-CoA synthesized in the cytosol",
"Pyruvate derived from glycolysis"
],
"a": 2,
"eh": "<p>In severe insulin deficiency, lipolysis in adipose tissue releases large amounts of free fatty acids, which undergo hepatic mitochondrial beta-oxidation. This process generates abundant mitochondrial acetyl-CoA. Because oxaloacetate is consumed by active gluconeogenesis, acetyl-CoA cannot enter the TCA cycle and is instead directed into the ketogenic pathway (HMG-CoA synthase pathway) to form acetoacetate, beta-hydroxybutyrate, and acetone.</p><p><b>Key takeaways</b></p><ul><li>Substrate for ketogenesis: Mitochondrial Acetyl-CoA generated from beta-oxidation of fatty acids in liver mitochondria.</li><li>Driver of DKA: Low insulin / high glucagon ratio -&gt; unrestrained lipolysis -&gt; high plasma FFA -&gt; hepatic mitochondrial beta-oxidation -&gt; massive acetyl-CoA production -&gt; ketogenesis.</li><li>Ketone bodies: Acetoacetate, 3-beta-hydroxybutyrate, and acetone (causes fruity breath odor).</li></ul>",
"w": [
"Oxaloacetate is depleted during DKA because it is heavily consumed by gluconeogenesis. Depletion of oxaloacetate limits the entry of acetyl-CoA into the TCA cycle, diverting acetyl-CoA toward ketogenesis.",
"Free fatty acids circulating in plasma are taken up by hepatocytes and transported into mitochondria via the carnitine shuttle to undergo beta-oxidation; they are not direct substrates for ketogenesis.",
"",
"Acetoacetyl-CoA is an intermediate in ketogenesis synthesized within the mitochondrial matrix, not the cytosol.",
"Glycolysis is inhibited in insulin-deficient states due to lack of insulin signaling and low fructose-2,6-bisphosphate levels."
],
"usmle": 1,
"src": "usm"
},
{
"t": "Zellweger, X-ALD & Refsum",
"s": "<p>A 24-year-old man presents to the neurology clinic due to worsening night vision, progressive unsteadiness when walking, and dry, scaling skin on his lower extremities. Physical examination reveals bilateral sensorineural hearing loss, cerebellar ataxia, absent deep tendon reflexes in the lower extremities, and ichthyosis. Laboratory analysis reveals markedly elevated serum levels of phytanic acid. Genetic testing confirms Refsum disease. Which of the following subcellular organelles and metabolic pathways is primarily affected in this patient?</p>",
"html": true,
"c": [
"Mitochondrial beta-oxidation",
"Endoplasmic reticulum omega-oxidation",
"Peroxisomal alpha-oxidation",
"Lysosomal degradation",
"Cytosolic fatty acid elongation"
],
"a": 2,
"eh": "<p>Refsum disease is an autosomal recessive peroxisomal disorder caused by a deficiency in phytanoyl-CoA hydroxylase (PhyH), the enzyme that catalyzes the initial step of peroxisomal alpha-oxidation. Phytanic acid is a 3-methyl-branched fatty acid derived from dietary dairy and chlorophyll products. Because of the methyl group at carbon 3 (beta-carbon), standard beta-oxidation is blocked. Alpha-oxidation removes carbon 1 as CO2, moving the methyl group to carbon 2 (alpha-position relative to new carboxyl group), which allows subsequent peroxisomal beta-oxidation.</p><p><b>Key takeaways</b></p><ul><li>Refsum disease: Autosomal recessive disorder caused by deficiency of peroxisomal phytanoyl-CoA hydroxylase.</li><li>Impaired peroxisomal alpha-oxidation leads to accumulation of phytanic acid.</li><li>Clinical presentation: Retinitis pigmentosa (night blindness), cerebellar ataxia, peripheral neuropathy, sensorineural hearing loss, and ichthyosis.</li><li>Treatment: Dietary restriction of phytanic acid (avoid ruminant meat, dairy, green vegetables).</li></ul>",
"w": [
"Mitochondrial beta-oxidation cannot process phytanic acid because the beta-methyl group blocks the action of acyl-CoA dehydrogenase. Phytanic acid requires prior alpha-oxidation.",
"Omega-oxidation oxidizes the terminal methyl group of unbranched fatty acids; it cannot bypass the steric hindrance of the 3-methyl group in phytanic acid.",
"",
"Lysosomes degrade complex lipids (e.g., gangliosides, sphingolipids) but are not involved in alpha-oxidation of branched-chain fatty acids.",
"Cytosolic fatty acid elongation synthesizes longer fatty acids; it is not responsible for phytanic acid breakdown."
],
"usmle": 1,
"src": "usm"
},
{
"t": "MCAD Deficiency & Jamaican Vomiting Sickness",
"s": "<p>A 7-month-old infant boy is brought to the emergency department because of severe lethargy and vomiting following a 14-hour period of poor feeding secondary to a viral gastroenteritis. Physical examination reveals a somnolent infant with mild hepatomegaly. Laboratory findings:</p><table class=\"labt\"><tr><th>Parameter</th><th>Measured Value</th><th>Reference Range</th></tr><tr><td>Serum Glucose</td><td>34 mg/dL</td><td>70–100 mg/dL</td></tr><tr><td>Arterial pH</td><td>7.27</td><td>7.35–7.45</td></tr><tr><td>Serum Bicarbonate</td><td>15 mEq/L</td><td>22–28 mEq/L</td></tr><tr><td>Serum Beta-hydroxybutyrate</td><td>0.2 mmol/L</td><td>0.5–3.0 mmol/L (during fasting)</td></tr></table><p>Urinalysis reveals elevated C6-C10 dicarboxylic acids without urinary ketones. Medium-chain acyl-CoA dehydrogenase (MCAD) deficiency is confirmed. Which of the following biochemical defects best explains the severe hypoglycemia observed in this patient during fasting?</p>",
"html": true,
"c": [
"Impaired hepatic glycogenolysis due to glycogen phosphorylase inhibition",
"Uncoupling of oxidative phosphorylation leading to accelerated glycolysis",
"Defective gluconeogenesis due to reduced hepatic pyruvate carboxylase activity secondary to low acetyl-CoA",
"Decreased substrate supply of glycerol from adipose tissue lipolysis",
"Primary defect in pancreatic glucagon secretion"
],
"a": 2,
"eh": "<p>Fatty acid oxidation provides acetyl-CoA, which acts as an essential obligate allosteric activator of pyruvate carboxylase, the first rate-limiting step of gluconeogenesis. In MCAD deficiency, breakdown of medium-chain fatty acids is blocked, resulting in decreased acetyl-CoA production during fasting. Consequently, pyruvate carboxylase activity is markedly reduced, severely impairing gluconeogenesis and leading to profound hypoketotic hypoglycemia.</p><p><b>Key takeaways</b></p><ul><li>MCAD deficiency is the most common inborn error of fatty acid oxidation (autosomal recessive).</li><li>Classic presentation: Hypoketotic hypoglycemia triggered by fasting or intercurrent viral illness in infants/young children.</li><li>Acetyl-CoA produced by fatty acid oxidation is an essential obligate activator of pyruvate carboxylase (gluconeogenesis) and the substrate for ketogenesis.</li><li>Lab findings: Low glucose, low/absent ketone bodies, elevated C6-C10 acylcarnitines and urinary dicarboxylic acids.</li></ul>",
"w": [
"Glycogenolysis is intact; however, glycogen stores become depleted after 12-18 hours of fasting, after which blood glucose maintenance depends entirely on gluconeogenesis.",
"MCAD deficiency does not cause uncoupling of oxidative phosphorylation; ATP levels drop due to lack of fatty acid oxidation, which actually reduces gluconeogenesis.",
"",
"Lipolysis in adipose tissue is normal in MCAD deficiency; fatty acids and glycerol are released normally into circulation.",
"Glucagon secretion from alpha cells is normal; the liver cannot respond appropriately to glucagon-stimulated gluconeogenesis due to lack of acetyl-CoA and ATP."
],
"usmle": 1,
"src": "usm"
},
{
"t": "FAS Cycle & Palmitate Stoichiometry",
"s": "<p>A 19-year-old healthy man consumes a high-carbohydrate, low-fat meal. Excess carbohydrate is converted to fatty acids in the liver. Synthesis of a 16-carbon saturated fatty acid (palmitate) occurs in the cytosol. Which of the following combinations of substrates and cofactors is directly required by the fatty acid synthase (FAS) complex to synthesize one molecule of palmitate from acetyl-CoA?</p>",
"html": true,
"c": [
"8 Acetyl-CoA, 14 NADH, 7 ATP",
"1 Acetyl-CoA, 7 Malonyl-CoA, 14 NADPH",
"8 Malonyl-CoA, 14 NADPH, 14 ATP",
"7 Acetyl-CoA, 1 Malonyl-CoA, 7 NADPH",
"8 Acetyl-CoA, 7 ATP, 14 NADP+"
],
"a": 1,
"eh": "<p>Synthesis of palmitate (16:0) requires 1 primer molecule of acetyl-CoA and 7 molecules of malonyl-CoA (which are added sequentially in 2-carbon increments). Each elongation cycle requires 2 reduction steps using NADPH, totaling 14 NADPH for the 7 cycles. Net equation: 1 Acetyl-CoA + 7 Malonyl-CoA + 14 NADPH + 14 H+ -&gt; Palmitate + 7 CO2 + 14 NADP+ + 8 CoA + 6 H2O.</p><p><b>Key takeaways</b></p><ul><li>De novo fatty acid synthesis occurs in the cytosol of liver and lactating mammary glands.</li><li>Substrates for Fatty Acid Synthase (FAS): 1 Acetyl-CoA (primer), 7 Malonyl-CoA (extenders), and 14 NADPH (reducing equivalent).</li><li>NADPH is supplied primarily by the Pentose Phosphate Pathway (HMP shunt) and Malic Enzyme.</li></ul>",
"w": [
"Fatty acid synthase does not directly use 8 free acetyl-CoA molecules; 7 acetyl-CoA must first be converted to malonyl-CoA by ACC. Additionally, FAS uses NADPH, not NADH.",
"",
"Malonyl-CoA provides 7 two-carbon units (the primer is acetyl-CoA, not malonyl-CoA). ATP is required for the ACC step (acetyl-CoA -> malonyl-CoA), but not directly by the FAS complex itself.",
"Incorrect stoichiometry of substrates and reductants.",
"NADP+ is the oxidized form; reduction of the keto and double bonds requires the reduced form, NADPH."
],
"usmle": 1,
"src": "usm"
},
{
"t": "Carnitine & CPT Deficiencies",
"s": "<p>A 19-year-old male military recruit experiences severe muscle cramping, weakness, and dark red-brown urine following an intensive 4-hour physical training exercise in hot weather. He reports no prior muscle symptoms with routine daily activities. Laboratory analysis reveals:</p><table class=\"labt\"><tr><th>Parameter</th><th>Measured Value</th><th>Reference Range</th></tr><tr><td>Serum Creatine Kinase (CK)</td><td>18,400 U/L</td><td>30–200 U/L</td></tr><tr><td>Serum Creatinine</td><td>1.1 mg/dL</td><td>0.7–1.3 mg/dL</td></tr><tr><td>Urine Dipstick</td><td>4+ Blood</td><td>Negative</td></tr><tr><td>Urine Microscopy</td><td>0–1 RBC/hpf</td><td>0–2 RBC/hpf</td></tr></table><p>A diagnosis of Carnitine Palmitoyltransferase II (CPT II) deficiency is suspected. Which of the following biochemical alterations is expected on serum acylcarnitine profiling in this patient?</p>",
"html": true,
"c": [
"Elevated long-chain acylcarnitines (C16, C18:1)",
"Elevated medium-chain acylcarnitines (C6, C8, C10)",
"Markedly reduced free carnitine with zero acylcarnitines",
"Elevated short-chain acylcarnitines (C3, C5)",
"Elevated urinary methylmalonic acid"
],
"a": 0,
"eh": "<p>Carnitine Palmitoyltransferase II (CPT II) is located on the inner mitochondrial membrane. It transfers long-chain fatty acyl groups from carnitine back to coenzyme A inside the mitochondrial matrix. In CPT II deficiency, long-chain acylcarnitines (e.g., C16, C18:1) accumulate in the mitochondrial intermembrane space and leak into the circulation, resulting in elevated long-chain acylcarnitine levels on plasma acylcarnitine profile.</p><p><b>Key takeaways</b></p><ul><li>CPT II deficiency (adult form) is the most common inherited disorder of lipid metabolism affecting skeletal muscle.</li><li>Classic triad: Exercise-induced muscle pain/stiffness, rhabdomyolysis (elevated CK), and myoglobinuria (dark urine) triggered by prolonged exercise, fasting, or cold exposure.</li><li>Diagnostic finding: Elevated long-chain acylcarnitines (C16, C18) on serum acylcarnitine profile.</li></ul>",
"w": [
"",
"Medium-chain acylcarnitines accumulate in MCAD deficiency, not CPT II deficiency.",
"Total depletion of free carnitine with absence of acylcarnitines is characteristic of primary carnitine deficiency (OCTN2 defect), where carnitine uptake is lost.",
"Short-chain acylcarnitines accumulate in short-chain acyl-CoA dehydrogenase (SCAD) deficiency or propionic acidemia.",
"Methylmalonic aciduria is caused by methylmalonyl-CoA mutase deficiency or vitamin B12 deficiency."
],
"usmle": 1,
"src": "usm"
},
{
"t": "β-Oxidation Reactions",
"s": "<p>A 19-year-old man has been fasting overnight for 12 hours. His liver undergoes active mitochondrial beta-oxidation of long-chain fatty acids. Consider the oxidation of one molecule of palmitoyl-CoA (a 16-carbon saturated fatty acyl-CoA). Which of the following products are generated in one single round of the mitochondrial beta-oxidation spiral?</p>",
"html": true,
"c": [
"1 Acetyl-CoA, 1 NADH, 1 FADH2, and 1 Acyl-CoA shortened by 2 carbons",
"2 Acetyl-CoA, 1 NADPH, 1 FAD",
"1 Malonyl-CoA, 1 NADH, 1 FADH2",
"1 Propionyl-CoA, 1 NADH, 1 FADH2",
"1 Acetyl-CoA, 2 ATP, 1 H2O"
],
"a": 0,
"eh": "<p>Each cycle of mitochondrial beta-oxidation involves 4 sequential enzymatic steps: (1) Oxidation by acyl-CoA dehydrogenase producing 1 FADH2, (2) Hydration by enoyl-CoA hydratase, (3) Oxidation by L-3-hydroxyacyl-CoA dehydrogenase producing 1 NADH, and (4) Thiolytic cleavage by beta-ketothiolase producing 1 Acetyl-CoA and a fatty acyl-CoA shortened by 2 carbons.</p><p><b>Key takeaways</b></p><ul><li>Each round of beta-oxidation shortens a fatty acyl-CoA by 2 carbons and yields: 1 Acetyl-CoA + 1 FADH2 + 1 NADH.</li><li>Complete oxidation of Palmitoyl-CoA (16:0) requires 7 rounds, producing: 8 Acetyl-CoA + 7 FADH2 + 7 NADH.</li></ul>",
"w": [
"",
"Only 1 acetyl-CoA is produced per cycle (except the final cycle of even-chain fatty acids, which yields 2 acetyl-CoA molecules from 4 carbons). Beta-oxidation uses FAD (reduced to FADH2) and NAD+ (reduced to NADH), not NADPH.",
"Malonyl-CoA is an intermediate in fatty acid synthesis, not beta-oxidation.",
"Propionyl-CoA is produced only in the final round of oxidation of odd-chain fatty acids.",
"Beta-oxidation produces reduced coenzymes (NADH, FADH2), which yield ATP downstream via oxidative phosphorylation, not direct ATP generation within the cycle."
],
"usmle": 1,
"src": "usm"
},
{
"t": "Peroxisomal, α- & ω-Oxidation",
"s": "<p>A 32-year-old man presents with progressive night blindness, loss of sense of smell (anosmia), and difficulty walking. Neurological examination reveals lower extremity ataxia, sensory loss, and absent tendon reflexes. Skin examination demonstrates marked scaling and dryness (ichthyosis). Laboratory testing shows high concentrations of phytanic acid in plasma. Diagnosis of adult Refsum disease is confirmed. Phytanic acid cannot undergo initial mitochondrial beta-oxidation because of which structural feature?</p>",
"html": true,
"c": [
"Double bond at the omega-3 position",
"Hydroxyl group at carbon 2",
"Absence of a terminal carboxyl group",
"Methyl group substitution at carbon 3 (beta-carbon)",
"Fatty acid chain length exceeding 30 carbons"
],
"a": 3,
"eh": "<p>Phytanic acid (3,7,11,15-tetramethylhexadecanoic acid) possesses a methyl group at carbon 3 (the beta-carbon). This methyl branch creates steric hindrance that prevents acyl-CoA dehydrogenase from catalyzing the formation of a double bond between carbon 2 (alpha) and carbon 3 (beta), completely blocking mitochondrial beta-oxidation. Peroxisomal alpha-oxidation removes carbon 1 as CO2, converting phytanic acid to pristanic acid (2-methyl-branched), which can then undergo normal beta-oxidation.</p><p><b>Key takeaways</b></p><ul><li>Beta-methyl branch in phytanic acid sterically blocks acyl-CoA dehydrogenase, preventing direct beta-oxidation.</li><li>Alpha-oxidation in peroxisomes cleaves the alpha-carbon (C-1) as CO2, converting phytanic acid to pristanic acid.</li><li>Pristanic acid has its methyl group at the alpha-position (C-2), allowing standard peroxisomal beta-oxidation to proceed.</li></ul>",
"w": [
"Omega-3 double bonds are present in polyunsaturated fatty acids; they require isomerases/reductases for beta-oxidation, but do not require alpha-oxidation.",
"Hydroxylation at carbon 2 is the product of the initial step of alpha-oxidation (phytanoyl-CoA hydroxylase reaction), not the structural feature blocking beta-oxidation.",
"Phytanic acid has a free carboxyl group once activated to phytanoyl-CoA.",
"",
"Phytanic acid has a 16-carbon backbone (total 20 carbons including methyl branches), not >30 carbons."
],
"usmle": 1,
"src": "usm"
},
{
"t": "Peroxisomal, α- & ω-Oxidation",
"s": "<p>A 7-year-old boy presents with progressive cognitive decline, behavioral changes, and impaired vision. Brain MRI shows symmetrical demyelination in the parieto-occipital white matter. Plasma analysis reveals elevated levels of very-long-chain fatty acids (VLCFAs, C24:0 and C26:0). Peroxisomal beta-oxidation of VLCFAs differs fundamentally from mitochondrial beta-oxidation. Which of the following characteristics uniquely distinguishes the first step of peroxisomal beta-oxidation from mitochondrial beta-oxidation?</p>",
"html": true,
"c": [
"Use of NAD+ as the initial electron acceptor with formation of NADH",
"Generation of ATP via substrate-level phosphorylation",
"Direct transfer of electrons from FADH2 to coenzyme Q in the electron transport chain",
"Transfer of electrons directly from FADH2 to molecular oxygen, producing hydrogen peroxide (H2O2)",
"Cleavage of acetyl-CoA by biotin-dependent acetyl-CoA carboxylase"
],
"a": 3,
"eh": "<p>In peroxisomes, the first oxidation step is catalyzed by acyl-CoA oxidase (not acyl-CoA dehydrogenase). Acyl-CoA oxidase transfers electrons directly from FADH2 to molecular oxygen (O2), producing hydrogen peroxide (H2O2). Catalase inside peroxisomes then degrades H2O2 into water and oxygen. This reaction releases energy as heat rather than coupling it to ATP synthesis.</p><p><b>Key takeaways</b></p><ul><li>Peroxisomal first step: Catalyzed by acyl-CoA oxidase, which transfers electrons from FADH2 directly to O2, producing H2O2 (degraded by catalase).</li><li>Mitochondrial first step: Catalyzed by acyl-CoA dehydrogenase, transferring electrons to ETF -&gt; CoQ -&gt; ETC (generates ~1.5 ATP per FADH2).</li><li>Peroxisomal beta-oxidation does not directly produce ATP; it shortens VLCFAs to short-/medium-chain fatty acids, which are then transferred to mitochondria for complete oxidation.</li></ul>",
"w": [
"The first step in both peroxisomal and mitochondrial beta-oxidation uses FAD, not NAD+. NAD+ is used in the third step (hydroxyl dehydrogenase) in both organelles.",
"Neither peroxisomal nor mitochondrial beta-oxidation produces ATP via substrate-level phosphorylation.",
"In mitochondria, acyl-CoA dehydrogenase transfers electrons from FADH2 to electron transfer flavoprotein (ETF), which delivers them to coenzyme Q in the ETC. Peroxisomes lack an electron transport chain.",
"",
"Biotin-dependent ACC is involved in fatty acid synthesis, not peroxisomal oxidation."
],
"usmle": 1,
"src": "usm"
},
{
"t": "Acetyl-CoA Carboxylase Reaction",
"s": "<p>A 27-year-old man who is a professional bodybuilder presents with a 2-month history of a scaly red rash around his mouth and nose, diffuse hair loss (alopecia), and numbness/tingling in his hands and feet. Detailed dietary inquiry reveals that he has been consuming 10 to 12 raw egg whites daily for the past 6 months to increase his protein intake. A nutritional deficiency of biotin (vitamin B7) is diagnosed. Which of the following enzymes involved in lipid metabolism is severely impaired in this patient as a direct result of biotin deficiency?</p>",
"html": true,
"c": [
"Carnitine palmitoyltransferase I",
"Acyl-CoA dehydrogenase",
"HMG-CoA reductase",
"Fatty acid synthase",
"Acetyl-CoA carboxylase"
],
"a": 4,
"eh": "<p>Biotin (vitamin B7) serves as an essential coenzyme for carboxylation reactions. Acetyl-CoA carboxylase (ACC) converts acetyl-CoA to malonyl-CoA (the first committed step in fatty acid synthesis) and requires biotin to carry CO2. Avidin, a protein found in raw egg whites, binds biotin with extremely high affinity and prevents its intestinal absorption. Other biotin-dependent enzymes include Pyruvate Carboxylase, Propionyl-CoA Carboxylase, and 3-Methylcrotonyl-CoA Carboxylase (\"ABC\" enzymes: ATP, Biotin, CO2).</p><p><b>Key takeaways</b></p><ul><li>Biotin (Vitamin B7) is an obligate cofactor for carboxylase enzymes: Acetyl-CoA carboxylase (fatty acid synthesis), Pyruvate carboxylase (gluconeogenesis), and Propionyl-CoA carboxylase (odd-chain fatty acid/amino acid catabolism).</li><li>Raw egg whites contain avidin, which tightly binds biotin and causes deficiency upon chronic heavy ingestion.</li><li>Biotin deficiency features: Alopecia, dermatitis (perioral/periorbital rash), paresthesias, and neurological deficits.</li></ul>",
"w": [
"CPT I does not require biotin; it is regulated by malonyl-CoA.",
"Acyl-CoA dehydrogenase uses FAD as a cofactor, not biotin.",
"HMG-CoA reductase requires NADPH for mevalonate synthesis, not biotin.",
"Fatty acid synthase requires NADPH and phosphopantetheine (derived from vitamin B5/pantothenate), not biotin.",
""
],
"usmle": 1,
"src": "usm"
},
{
"t": "Energetics & Regulation",
"s": "<p>A 19-year-old college student undergoes a metabolic study following consumption of a high-carbohydrate lunch. As blood glucose levels rise, insulin secretion stimulates hepatic glycogen synthesis and de novo lipolysis. Simultaneously, mitochondrial fatty acid oxidation is markedly suppressed. Which of the following molecules acts as the principal allosteric inhibitor of carnitine palmitoyltransferase I (CPT I), preventing fatty acid entry into the mitochondria during the fed state?</p>",
"html": true,
"c": [
"Citrate",
"Acetyl-CoA",
"Malonyl-CoA",
"Propionyl-CoA",
"Oxaloacetate"
],
"a": 2,
"eh": "<p>Malonyl-CoA is produced in the cytosol by acetyl-CoA carboxylase (ACC). It acts as a potent allosteric inhibitor of carnitine palmitoyltransferase I (CPT I). Elevated malonyl-CoA during the fed state (high insulin) ensures that newly synthesized fatty acids are not immediately transported into mitochondria for beta-oxidation, avoiding a wasteful reciprocal cycle (futile cycle).</p><p><b>Key takeaways</b></p><ul><li>Malonyl-CoA is the master regulator of mitochondrial fatty acid entry via allosteric inhibition of CPT I.</li><li>High insulin/fed state -&gt; ACC activated -&gt; Malonyl-CoA increases -&gt; CPT I inhibited -&gt; Fatty acid oxidation blocked, fatty acid synthesis promoted.</li><li>Low insulin/fasting state -&gt; ACC inactivated (via AMPK) -&gt; Malonyl-CoA drops -&gt; CPT I disinhibited -&gt; Fatty acid oxidation promoted.</li></ul>",
"w": [
"Citrate is a cytosolic signal of high energy state that allosterically activates acetyl-CoA carboxylase (ACC), promoting malonyl-CoA synthesis. It does not directly inhibit CPT I.",
"Acetyl-CoA is the substrate for ACC and ketogenesis/TCA cycle; it does not directly inhibit CPT I.",
"",
"Propionyl-CoA is an intermediate of odd-chain fatty acid and branched-chain amino acid catabolism; it does not regulate CPT I.",
"Oxaloacetate is a TCA cycle intermediate and substrate for gluconeogenesis; it does not inhibit CPT I."
],
"usmle": 1,
"src": "usm"
},
{
"t": "Citrate Shuttle: Acetyl-CoA to Cytosol",
"s": "<p>Hepatic fatty acid synthesis takes place predominantly in the cytosol. However, acetyl-CoA—the fundamental building block for fatty acid synthesis—is produced inside the mitochondrial matrix from pyruvate oxidation. Because the inner mitochondrial membrane is impermeable to acetyl-CoA, the cell utilizes a specialized transport mechanism to transfer acetyl-CoA into the cytosol. Which of the following mitochondrial enzymes converts citrate back into cytosolic acetyl-CoA and oxaloacetate?</p>",
"html": true,
"c": [
"Isocitrate dehydrogenase",
"Malate dehydrogenase",
"Pyruvate dehydrogenase",
"ATP-citrate lyase",
"Malic enzyme"
],
"a": 3,
"eh": "<p>When mitochondrial acetyl-CoA and ATP levels are high (fed state), citrate synthase combines acetyl-CoA and oxaloacetate to form citrate. Excess citrate leaves the mitochondria via the tricarboxylate transporter into the cytosol. In the cytosol, ATP-citrate lyase cleaves citrate into acetyl-CoA (used for fatty acid synthesis) and oxaloacetate, consuming 1 ATP molecule.</p><p><b>Key takeaways</b></p><ul><li>Citrate shuttle moves acetyl-CoA equivalents from the mitochondrial matrix to the cytosol for de novo fatty acid and cholesterol synthesis.</li><li>ATP-citrate lyase cleaves cytosolic citrate: Citrate + ATP + CoA -&gt; Acetyl-CoA + Oxaloacetate + ADP + Pi.</li><li>Cytosolic oxaloacetate is reduced to malate (malate dehydrogenase), and malate is converted to pyruvate by malic enzyme, generating NADPH.</li></ul>",
"w": [
"Isocitrate dehydrogenase is a TCA cycle enzyme that converts isocitrate to alpha-ketoglutarate inside the mitochondrial matrix.",
"Malate dehydrogenase interconverts malate and oxaloacetate in both cytosol and mitochondria.",
"Pyruvate dehydrogenase converts pyruvate to acetyl-CoA inside the mitochondrial matrix.",
"",
"Malic enzyme converts cytosolic malate to pyruvate, generating NADPH (which is used in fatty acid synthesis), but it does not generate acetyl-CoA."
],
"usmle": 1,
"src": "usm"
},
{
"t": "Zellweger, X-ALD & Refsum",
"s": "<p>A 2-week-old male infant is evaluated in the neonatal intensive care unit for dysmorphic facial features, severe hypotonia, and seizures. Physical examination reveals a high forehead, broad nasal bridge, wide-set eyes, large anterior fontanelle, and hepatomegaly. Renal ultrasonography shows multiple cortical cysts. Serum analysis shows markedly elevated levels of very-long-chain fatty acids (VLCFAs), phytanic acid, and bile acid intermediates. Genetic testing demonstrates a mutation in the PEX1 gene, confirming Zellweger syndrome. Which of the following cellular organelle defects is the underlying cause of this condition?</p>",
"html": true,
"c": [
"Defective lysosomal enzyme trafficking due to mannose-6-phosphate deficiency",
"Defective mitochondrial electron transport chain complex I assembly",
"Failure of peroxisomal biogenesis and protein import",
"Impaired endoplasmic reticulum protein folding and degradation",
"Defective nuclear membrane pore transport"
],
"a": 2,
"eh": "<p>Zellweger syndrome is an autosomal recessive disorder caused by mutations in PEX genes (most commonly PEX1), which encode peroxins—proteins required for peroxisomal biogenesis and import of peroxisomal matrix enzymes. Without functional peroxisomes, all peroxisomal functions fail (beta-oxidation of VLCFAs, alpha-oxidation of phytanic acid, plasmalogen/bile acid synthesis). This leads to severe neurodevelopmental delay, craniofacial abnormalities, hepatomegaly, renal cysts, and early infant mortality.</p><p><b>Key takeaways</b></p><ul><li>Zellweger syndrome: Autosomal recessive disorder of peroxisomal biogenesis caused by PEX gene mutations.</li><li>Absence of functional peroxisomes -&gt; accumulation of VLCFAs, phytanic acid, and pipecolic acid, and deficiency of plasmalogens (essential membrane phospholipids).</li><li>Clinical triad: Severe hypotonia, dysmorphic facial features (dysmorphism), and neonatal seizures + renal cysts and hepatomegaly.</li></ul><div class=\"tt\">Comparison of Peroxisomal vs. Mitochondrial Disorders</div><table class=\"labt\"><tr><th>Feature</th><th>Peroxisomal Disorders (e.g., Zellweger, X-ALD, Refsum)</th><th>Mitochondrial Oxidation Disorders (e.g., MCAD, CPT II)</th></tr><tr><td>Primary Substrates</td><td>VLCFAs (&gt;22 carbons), Phytanic acid, Branched-chain FAs</td><td>Short-, Medium-, Long-chain FAs (C4–C18)</td></tr><tr><td>Primary Organelle</td><td>Peroxisome</td><td>Mitochondria (Matrix / Membranes)</td></tr><tr><td>First Step Mechanism</td><td>Acyl-CoA Oxidase (produces H<sub>2</sub>O<sub>2</sub>)</td><td>Acyl-CoA Dehydrogenase (produces FADH<sub>2</sub> → ETF)</td></tr><tr><td>Key Clinical Features</td><td>Neurodegeneration, dysmorphism, adrenal failure, ataxia</td><td>Hypoketotic hypoglycemia, rhabdomyolysis, cardiomyopathy</td></tr><tr><td>Lab Hallmarks</td><td>Elevated VLCFAs (C24/C26), Phytanic acid</td><td>Elevated acylcarnitines (C8 for MCAD, C16/C18 for CPT II)</td></tr></table>",
"w": [
"Defective lysosomal enzyme targeting due to mannose-6-phosphate deficiency causes I-cell disease (mucolipidosis II).",
"Defective complex I assembly causes mitochondrial encephalomyopathies (e.g., Leigh syndrome, MELAS).",
"",
"Endoplasmic reticulum storage diseases (e.g., alpha-1-antitrypsin deficiency) involve ER protein folding defects, not VLCFA accumulation.",
"Nuclear pore transport defects do not cause peroxisomal metabolite accumulation."
],
"usmle": 1,
"src": "usm"
},
{
"t": "Carnitine Shuttle",
"s": "<p>A 19-year-old man presents with muscle cramps and dark urine following strenuous physical exercise. A diagnosis of Carnitine Palmitoyltransferase II (CPT II) deficiency is made. The carnitine shuttle system is necessary to transport long-chain fatty acids into the mitochondrial matrix for oxidation. Which of the following correctly matches the enzyme/transporter of the carnitine shuttle with its exact subcellular location and primary catalytic action?</p>",
"html": true,
"c": [
"Carnitine palmitoyltransferase I (CPT I) — Inner mitochondrial membrane — Converts acylcarnitine to acyl-CoA",
"Carnitine acylcarnitine translocase (CACT) — Outer mitochondrial membrane — Hydrolyzes ATP to transport free fatty acids",
"Carnitine palmitoyltransferase II (CPT II) — Inner mitochondrial membrane (matrix side) — Reconstructs fatty acyl-CoA from acylcarnitine and CoA",
"Fatty acyl-CoA synthetase — Mitochondrial matrix — Converts acyl-CoA to acylcarnitine",
"CPT I — Cytosol — Directly synthesizes free carnitine from lysine"
],
"a": 2,
"eh": "<p>CPT II is localized on the inner mitochondrial membrane facing the mitochondrial matrix. It catalyzes the transfer of the acyl group from long-chain acylcarnitine back onto mitochondrial matrix CoA-SH, regenerating fatty acyl-CoA (which enters beta-oxidation) and releasing free carnitine (which is transported back out by CACT).</p><p><b>Key takeaways</b></p><ul><li>Carnitine Shuttle Steps:</li></ul><p>a. Fatty Acyl-CoA Synthetase (Outer Membrane): FFA + CoA + ATP -&gt; Fatty Acyl-CoA + AMP + PPi.</p><p>b. CPT I (Outer Membrane): Fatty Acyl-CoA + Carnitine -&gt; Fatty Acylcarnitine + CoA. (Inhibited by Malonyl-CoA).</p><p>c. CACT (Inner Membrane): Antiporter exchanging Acylcarnitine (in) for Free Carnitine (out).</p><p>d. CPT II (Inner Membrane / Matrix face): Fatty Acylcarnitine + CoA -&gt; Fatty Acyl-CoA + Free Carnitine.</p><div class=\"tt\">Components of the Carnitine Shuttle</div><table class=\"labt\"><tr><th>Component</th><th>Location</th><th>Substrates</th><th>Products</th><th>Inhibitor / Regulator</th></tr><tr><td>Fatty Acyl-CoA Synthetase</td><td>Outer Mitochondrial Membrane</td><td>FFA + CoA + ATP</td><td>Fatty Acyl-CoA + AMP + PPi</td><td>—</td></tr><tr><td>CPT I</td><td>Outer Mitochondrial Membrane</td><td>Fatty Acyl-CoA + Carnitine</td><td>Fatty Acylcarnitine + CoA</td><td>Malonyl-CoA (-)</td></tr><tr><td>CACT</td><td>Inner Mitochondrial Membrane</td><td>Acylcarnitine (out) / Carnitine (in)</td><td>Acylcarnitine (in) / Carnitine (out)</td><td>—</td></tr><tr><td>CPT II</td><td>Inner Mitochondrial Membrane</td><td>Fatty Acylcarnitine + CoA</td><td>Fatty Acyl-CoA + Free Carnitine</td><td>—</td></tr></table>",
"w": [
"CPT I is located on the outer mitochondrial membrane (not inner) and converts fatty acyl-CoA + carnitine into fatty acylcarnitine + CoA.",
"CACT is located on the inner mitochondrial membrane (not outer) and operates as a passive antiporter (exchanges acylcarnitine for free carnitine without direct ATP hydrolysis).",
"",
"Fatty acyl-CoA synthetase (thiokinase) is located on the outer mitochondrial membrane/ER and attaches CoA to free fatty acids, consuming ATP.",
"CPT I is on the outer mitochondrial membrane, not free in the cytosol, and does not synthesize carnitine."
],
"usmle": 1,
"src": "usm"
},
{
"t": "Carnitine & CPT Deficiencies",
"s": "<p>A 9-month-old boy is evaluated for severe lethargy, hypoglycemia, and vomiting triggered by a viral throat infection and poor oral intake. Physical examination reveals mild hepatomegaly. Laboratory investigation:</p><table class=\"labt\"><tr><th>Parameter</th><th>Measured Value</th><th>Reference Range</th></tr><tr><td>Plasma Glucose</td><td>34 mg/dL</td><td>70–100 mg/dL</td></tr><tr><td>Plasma Beta-hydroxybutyrate</td><td>0.2 mmol/L</td><td>0.5–3.0 mmol/L (fasting)</td></tr><tr><td>Serum Creatine Kinase (CK)</td><td>92 U/L</td><td>30–200 U/L</td></tr><tr><td>Plasma Free Carnitine</td><td>Elevated</td><td>Normal</td></tr><tr><td>Plasma Long-chain Acylcarnitines</td><td>Markedly Decreased / Absent</td><td>Normal</td></tr></table><p>A diagnosis of Carnitine Palmitoyltransferase I (CPT I) deficiency (hepatic form) is established. Which of the following biochemical profiles best distinguishes CPT I deficiency from CPT II deficiency?</p>",
"html": true,
"c": [
"High serum CK levels during attacks in CPT I deficiency vs. normal CK in CPT II deficiency",
"High free carnitine with low long-chain acylcarnitines in CPT I deficiency vs. high long-chain acylcarnitines in CPT II deficiency",
"Severe hyperketosis in CPT I deficiency vs. hypoketosis in CPT II deficiency",
"Presence of dicarboxylic aciduria in CPT I deficiency vs. absent dicarboxylic aciduria in CPT II deficiency",
"Elevated medium-chain acylcarnitines (C8) in CPT I deficiency vs. CPT II deficiency"
],
"a": 1,
"eh": "<p>CPT I transfers the fatty acyl group from CoA to free carnitine. In CPT I deficiency, acylcarnitines cannot be formed; thus, free carnitine levels are elevated and long-chain acylcarnitines are markedly reduced or absent. In CPT II deficiency, acylcarnitines are formed normally by CPT I and imported into the intermembrane space, but cannot be reconverted to acyl-CoA inside the matrix, leading to accumulation of long-chain acylcarnitines (high C16/C18) with normal or reduced free carnitine.</p><p><b>Key takeaways</b></p><ul><li>CPT I Deficiency: Free carnitine elevated; Long-chain acylcarnitines low/absent. Presents with hepatic hypoketotic hypoglycemia.</li><li>CPT II Deficiency: Free carnitine low/normal; Long-chain acylcarnitines elevated (C16, C18). Presents with exercise-induced rhabdomyolysis and myoglobinuria.</li></ul>",
"w": [
"CPT I deficiency predominantly affects the liver (hepatic form) and typically presents with normal CK levels without muscle involvement, whereas CPT II deficiency (muscular form) causes muscle breakdown with markedly elevated CK.",
"",
"Both conditions cause hypoketotic hypoglycemia during fasting due to impaired hepatic beta-oxidation.",
"Both conditions can show dicarboxylic aciduria due to compensatory omega-oxidation.",
"Medium-chain acylcarnitine elevation is characteristic of MCAD deficiency."
],
"usmle": 1,
"src": "usm"
},
{
"t": "Carnitine & CPT Deficiencies",
"s": "<p>A 9-year-old boy with generalized epilepsy has been treated with valproic acid for 18 months. He is brought to the clinic because of worsening fatigue, muscle weakness, and recurrent episodes of post-exercise muscle pain. Laboratory evaluation reveals secondary carnitine deficiency induced by chronic valproic acid therapy. Which of the following mechanisms best explains how valproate causes secondary carnitine deficiency?</p>",
"html": true,
"c": [
"Direct inhibition of hepatic carnitine synthesis enzymes (gamma-butyrobetaine dioxygenase)",
"Destruction of intestinal carnitine transport receptors (OCTN2)",
"Formation of valproyl-carnitine conjugates that are excreted rapidly in urine, depleting carnitine pools",
"Blockade of peroxisomal alpha-oxidation causing competitive displacement of carnitine",
"Induction of renal tubular reabsorption inhibition of free fatty acids"
],
"a": 2,
"eh": "<p>Valproic acid (a branched short-chain fatty acid) is metabolized to valproyl-CoA. Valproyl-CoA binds to free carnitine to form valproyl-carnitine, which is rapidly excreted in the urine. Chronic valproate administration depletes systemic free carnitine stores through continuous urinary elimination of valproyl-carnitine conjugates, leading to secondary carnitine deficiency and impaired mitochondrial oxidation of endogenous fatty acids.</p><p><b>Key takeaways</b></p><ul><li>Valproic acid therapy is a classic cause of secondary carnitine deficiency.</li><li>Mechanism: Valproic acid binds carnitine -&gt; Valproyl-carnitine -&gt; rapid renal excretion -&gt; systemic carnitine depletion.</li><li>Clinical consequence: Impaired fatty acid oxidation, risk of hyperammonemia and encephalopathy; reversible with L-carnitine supplementation.</li></ul>",
"w": [
"Valproate does not directly inhibit the enzymes of endogenous carnitine biosynthesis.",
"Valproate does not destroy or downregulate OCTN2 intestinal transporters.",
"",
"Valproate does not affect peroxisomal alpha-oxidation.",
"Secondary carnitine deficiency is mediated by carnitine excretion, not fatty acid reabsorption inhibition."
],
"usmle": 1,
"src": "usm"
},
{
"t": "Carnitine & CPT Deficiencies",
"s": "<p>A 7-month-old boy is brought to the pediatric clinic because of progressive poor feeding, lethargy, and floppiness (hypotonia). Physical examination reveals hepatomegaly and a systolic heart murmur. Echocardiogram demonstrates severe dilated cardiomyopathy with an ejection fraction of 32%. Laboratory evaluation:</p><table class=\"labt\"><tr><th>Parameter</th><th>Measured Value</th><th>Reference Range</th></tr><tr><td>Serum Glucose</td><td>34 mg/dL</td><td>70–100 mg/dL</td></tr><tr><td>Serum Free Carnitine</td><td>3 mcmol/L</td><td>25–54 mcmol/L</td></tr><tr><td>Total Carnitine</td><td>5 mcmol/L</td><td>34–67 mcmol/L</td></tr><tr><td>Urine Free Carnitine Excretion</td><td>Markedly Increased</td><td>Normal</td></tr><tr><td>AST</td><td>186 U/L</td><td>15–40 U/L</td></tr><tr><td>ALT</td><td>142 U/L</td><td>10–35 U/L</td></tr></table><p>A diagnosis of Primary Systemic Carnitine Deficiency (PSCD) is made. PSCD is caused by an autosomal recessive mutation in the SLC22A5 gene, which encodes which of the following proteins?</p>",
"html": true,
"c": [
"Carnitine acylcarnitine translocase (CACT)",
"Carnitine palmitoyltransferase I (CPT I)",
"Carnitine palmitoyltransferase II (CPT II)",
"Medium-chain acyl-CoA dehydrogenase (MCAD)",
"Organic cation transporter 2 (OCTN2)"
],
"a": 4,
"eh": "<p>Primary Systemic Carnitine Deficiency (PSCD) is caused by loss-of-function mutations in the SLC22A5 gene, which encodes the OCTN2 (Organic Cation Transporter 2) high-affinity, sodium-dependent carnitine transporter. OCTN2 is responsible for active carnitine reabsorption in renal tubules and carnitine uptake into cardiac and skeletal muscle cells. Defective OCTN2 leads to massive urinary carnitine wasting, extremely low plasma/tissue carnitine levels, impaired fatty acid oxidation, and progressive dilated cardiomyopathy, hypotonia, and hypoketotic hypoglycemia.</p><p><b>Key takeaways</b></p><ul><li>Primary Systemic Carnitine Deficiency: Autosomal recessive defect in SLC22A5 (OCTN2 carnitine transporter).</li><li>Pathology: Failure of renal carnitine reabsorption -&gt; massive urinary carnitine loss -&gt; profound systemic carnitine depletion.</li><li>Key clinical presentation: Dilated cardiomyopathy, muscle weakness/hypotonia, and hypoketotic hypoglycemia in early childhood.</li><li>Extremely effective treatment: High-dose oral L-carnitine supplementation.</li></ul>",
"w": [
"CACT is encoded by the SLC25A20 gene and transports acylcarnitine across the inner mitochondrial membrane.",
"CPT I is encoded by the CPT1A gene (hepatic form) or CPT1B gene (muscle form).",
"CPT II is encoded by the CPT2 gene.",
"MCAD is encoded by the ACADM gene.",
""
],
"usmle": 1,
"src": "usm"
},
{
"t": "MCAD Deficiency & Jamaican Vomiting Sickness",
"s": "<p>A 10-month-old infant is admitted to the pediatric ward with severe lethargy and hypoglycemia following a 12-hour period of fasting associated with a mild viral respiratory illness. Serum chemistry results:</p><table class=\"labt\"><tr><th>Parameter</th><th>Measured Value</th><th>Reference Range</th></tr><tr><td>Serum Glucose</td><td>32 mg/dL</td><td>70–100 mg/dL</td></tr><tr><td>Serum Beta-hydroxybutyrate</td><td>0.2 mmol/L</td><td>0.5–3.0 mmol/L (fasting)</td></tr><tr><td>Serum Lactate</td><td>1.4 mmol/L</td><td>0.5–2.2 mmol/L</td></tr><tr><td>AST</td><td>112 U/L</td><td>15–40 U/L</td></tr></table><p>Plasma acylcarnitine profile demonstrates a prominent elevation of octanoylcarnitine (C8). Urine organic acid analysis shows elevated C6-C10 dicarboxylic acids. Molecular testing confirms Medium-Chain Acyl-CoA Dehydrogenase (MCAD) deficiency. Which of the following therapeutic strategies is the primary mainstay of long-term management to prevent life-threatening metabolic crises in this patient?</p>",
"html": true,
"c": [
"Strict restriction of dietary medium-chain triglycerides with high-dose medium-chain supplementation",
"High-protein, ketogenic diet with raw cornstarch at bedtime",
"Avoidance of prolonged fasting and consumption of frequent, carbohydrate-rich meals",
"Continuous administration of intravenous insulin and glucagon",
"Complete elimination of dietary essential fatty acids"
],
"a": 2,
"eh": "<p>The primary mainstay of management for MCAD deficiency is avoidance of prolonged fasting and ensuring frequent carbohydrate-rich feeding, especially during acute febrile illnesses. Carbohydrate intake maintains blood glucose via glycolysis and spares reliance on fatty acid oxidation and gluconeogenesis. Uncooked cornstarch may be given before sleep to maintain normoglycemia overnight in older infants/children.</p><p><b>Key takeaways</b></p><ul><li>Treatment of MCAD deficiency: Avoidance of prolonged fasting, high-carbohydrate diet, and prompt IV dextrose during intercurrent illnesses.</li><li>Dietary restriction: Avoid medium-chain fatty acids (MCT oil).</li><li>Prognosis is excellent with early diagnosis via newborn screening and proper compliance with fasting protocols.</li></ul>",
"w": [
"Medium-chain triglycerides (MCTs) are specifically contraindicated in MCAD deficiency because MCAD cannot metabolize medium-chain fatty acids (C6-C12).",
"Ketogenic diets (high fat, low carbohydrate) are dangerous and potentially lethal in patients with fatty acid oxidation defects like MCAD deficiency, as they rely heavily on fatty acid breakdown and ketone body generation.",
"",
"Exogenous insulin administration would suppress gluconeogenesis and worsen severe hypoglycemia.",
"Essential fatty acids (linoleic and alpha-linolenic acid) are required for cell membrane structural integrity and prostaglandin synthesis; eliminating them causes severe deficiency state."
],
"usmle": 1,
"src": "usm"
},
{
"t": "Methylmalonic Aciduria",
"s": "<p>A 4-month-old boy is brought to the clinic because of poor feeding, vomiting, lethargy, and failure to thrive. Laboratory evaluation reveals severe metabolic acidosis with an elevated anion gap. Urine organic acid profiling shows markedly elevated levels of methylmalonic acid and propionic acid. Serum cobalamin (vitamin B12) levels are normal. Genetic testing identifies a homozygous mutation in the MMUT gene, encoding methylmalonyl-CoA mutase. In healthy individuals, methylmalonyl-CoA mutase catalyzes the conversion of L-methylmalonyl-CoA into which of the following TCA cycle intermediates?</p>",
"html": true,
"c": [
"Alpha-ketoglutarate",
"Citrate",
"Succinyl-CoA",
"Fumarate",
"Malate"
],
"a": 2,
"eh": "<p>Oxidation of odd-chain fatty acids (and certain amino acids: Valine, Isoleucine, Methionine, Threonine) yields propionyl-CoA in the final round of beta-oxidation. Propionyl-CoA is converted to D-methylmalonyl-CoA by biotin-dependent propionyl-CoA carboxylase. D-methylmalonyl-CoA is racemized to L-methylmalonyl-CoA, which is then converted into succinyl-CoA by methylmalonyl-CoA mutase, an enzyme requiring vitamin B12 (adenosylcobalamin) as a cofactor. Succinyl-CoA then enters the TCA cycle.</p><p><b>Key takeaways</b></p><ul><li>Odd-chain fatty acid catabolism pathway: Odd-chain Fatty Acid -&gt; Propionyl-CoA -&gt; (Propionyl-CoA carboxylase + Biotin) -&gt; D-Methylmalonyl-CoA -&gt; L-Methylmalonyl-CoA -&gt; (Methylmalonyl-CoA mutase + Vitamin B12) -&gt; Succinyl-CoA -&gt; TCA Cycle.</li><li>Deficiency of methylmalonyl-CoA mutase or Vitamin B12 causes Methylmalonic Acidemia (elevated methylmalonic acid, severe metabolic acidosis, hyperammonemia, hypoglycemia).</li></ul>",
"w": [
"Alpha-ketoglutarate is formed from isocitrate or glutamate conversion; it is not the product of methylmalonyl-CoA mutase.",
"Citrate is formed from acetyl-CoA and oxaloacetate.",
"",
"Fumarate is formed from succinate by succinate dehydrogenase in the TCA cycle.",
"Malate is formed from fumarate by fumarase."
],
"usmle": 1,
"src": "usm"
},
{
"t": "MCAD Deficiency & Jamaican Vomiting Sickness",
"s": "<p>A 9-year-old boy living in a rural area of Jamaica is brought to the local hospital after suffering a sudden tonic-clonic seizure followed by coma. His parents report that he ate unripe ackee fruit from a backyard tree earlier in the morning. Physical examination shows an unresponsive child with diaphoresis and hypotonia. Laboratory results:</p><table class=\"labt\"><tr><th>Parameter</th><th>Measured Value</th><th>Reference Range</th></tr><tr><td>Plasma Glucose</td><td>29 mg/dL</td><td>70–100 mg/dL</td></tr><tr><td>Arterial pH</td><td>7.28</td><td>7.35–7.45</td></tr><tr><td>Urine Ketones</td><td>Negative</td><td>Negative</td></tr></table><p>The toxins hypoglycin A and hypoglycin B contained in unripe ackee fruit cause \"Jamaican Vomiting Sickness.\" Which of the following molecular mechanisms best accounts for the profound hypoketotic hypoglycemia seen in this condition?</p>",
"html": true,
"c": [
"Direct competitive inhibition of pancreatic insulin secretion",
"Irreversible inhibition of cytosolic glycogen phosphorylase",
"Inactivation of glucose-6-phosphatase in the endoplasmic reticulum",
"Inactivation of mitochondrial short- and medium-chain acyl-CoA dehydrogenases by MCPA-CoA",
"Stimulation of hepatic glucokinase activity causing massive intracellular glucose entrapment"
],
"a": 3,
"eh": "<p>Unripe ackee fruit contains hypoglycin A and B, which are metabolized in the human body to methylene-cyclopropyl-acetyl-CoA (MCPA-CoA). MCPA-CoA is a potent, suicide inhibitor of short- and medium-chain acyl-CoA dehydrogenases (SCAD and MCAD) in mitochondria. Inactivation of these enzymes blocks beta-oxidation of short- and medium-chain fatty acids, leading to severe depletion of acetyl-CoA, suppression of gluconeogenesis (due to lack of pyruvate carboxylase activation), and failure of ketogenesis. This presents clinically as Jamaican Vomiting Sickness (profound hypoketotic hypoglycemia, vomiting, seizures, coma).</p><p><b>Key takeaways</b></p><ul><li>Jamaican Vomiting Sickness is caused by ingestion of unripe ackee fruit.</li><li>Toxin: Hypoglycin A/B -&gt; metabolized to MCPA-CoA, which inhibits short- and medium-chain acyl-CoA dehydrogenases.</li><li>Clinical result: Blocked fatty acid oxidation -&gt; severe hypoketotic hypoglycemia, vomiting, CNS depression, seizures, and death.</li></ul>",
"w": [
"Hypoglycin toxins do not affect insulin secretion.",
"Glycogen phosphorylase is not the primary target of hypoglycin metabolites.",
"Glucose-6-phosphatase deficiency causes Von Gierke disease (GSD type I), not ackee fruit poisoning.",
"",
"Glucokinase is not stimulated by hypoglycin."
],
"usmle": 1,
"src": "usm"
},
{
"t": "Methylmalonic Aciduria",
"s": "<p>A 6-day-old infant boy born at full term develops progressive lethargy, poor feeding, hypothermia, and tachypnea. Laboratory evaluation demonstrates severe metabolic acidosis with elevated anion gap, hyperammonemia, and hypoglycemia. Plasma amino acid analysis reveals elevated glycine. Urine organic acid analysis reveals markedly elevated methylmalonic acid and propionic acid. The patient is diagnosed with Isolated Methylmalonic Acidemia. Which of the following enzymes requires cobalamin (vitamin B12) as an essential coenzyme for this reaction?</p>",
"html": true,
"c": [
"Propionyl-CoA carboxylase",
"Pyruvate carboxylase",
"Acetyl-CoA carboxylase",
"Methylmalonyl-CoA mutase",
"Acyl-CoA dehydrogenase"
],
"a": 3,
"eh": "<p>Methylmalonyl-CoA mutase catalyzes the conversion of L-methylmalonyl-CoA to succinyl-CoA. This enzyme uniquely requires adenosylcobalamin (an active coenzyme form of Vitamin B12) as an essential cofactor. Deficiency in either the methylmalonyl-CoA mutase apoenzyme (MMUT gene) or in cobalamin metabolic pathways (e.g., cblA, cblB) leads to accumulation of methylmalonic acid, causing Methylmalonic Acidemia.</p><p><b>Key takeaways</b></p><ul><li>Methylmalonyl-CoA mutase requires Adenosylcobalamin (Vitamin B12) to convert L-methylmalonyl-CoA into Succinyl-CoA.</li><li>Propionyl-CoA carboxylase requires Biotin (Vitamin B7) to convert Propionyl-CoA into D-methylmalonyl-CoA.</li><li>Key diagnostic clue: Elevated methylmalonic acid points directly to B12 deficiency or Methylmalonyl-CoA mutase defect (versus propionic acidemia, where methylmalonic acid is normal).</li></ul>",
"w": [
"Propionyl-CoA carboxylase requires biotin (vitamin B7), ATP, and CO2, not cobalamin.",
"Pyruvate carboxylase requires biotin (vitamin B7).",
"Acetyl-CoA carboxylase requires biotin (vitamin B7).",
"",
"Acyl-CoA dehydrogenases require FAD (vitamin B2 derivative) as a cofactor."
],
"usmle": 1,
"src": "usm"
},
{
"t": "Elongation & Desaturation",
"s": "<p>A 46-year-old woman with a history of extensive small bowel resection for Crohn disease (short-bowel syndrome) has been maintained on total parenteral nutrition (TPN) for the past 4 months. Due to a supply shortage, her TPN formulation was prepared without lipid emulsions. Over the past several weeks, she has developed dry, scaly skin, diffuse alopecia, poor wound healing, and impaired visual acuity. Laboratory testing confirms essential fatty acid deficiency (EFAD). Which of the following fatty acids is an essential dietary fatty acid that human cells cannot synthesize de novo due to the absence of specific desaturase enzymes?</p>",
"html": true,
"c": [
"Oleic acid (18:1, Δ⁹)",
"Palmitic acid (16:0)",
"Stearic acid (18:0)",
"Linoleic acid (18:2, Δ⁹,12)",
"Palmitoleic acid (16:1, Δ⁹)"
],
"a": 3,
"eh": "<p>Human enzymes (Δ⁵, Δ⁶, and Δ⁹ desaturases) can introduce double bonds only between carbon 1 (carboxyl end) and carbon 9 of a fatty acid chain. Humans lack Δ¹² and Δ¹⁵ desaturase enzymes and therefore cannot introduce double bonds beyond carbon 9 (toward the omega end). Consequently, Linoleic acid (18:2, Δ⁹,12, an omega-6 fatty acid) and Alpha-linolenic acid (18:3, Δ⁹,12,15, an omega-3 fatty acid) cannot be synthesized de novo and are strictly essential fatty acids that must be obtained from dietary sources.</p><p><b>Key takeaways</b></p><ul><li>Essential Fatty Acids: Linoleic acid (omega-6) and Alpha-linolenic acid (omega-3).</li><li>Human cells lack desaturase enzymes capable of introducing double bonds beyond carbon 9 (specifically Δ¹² and Δ¹⁵ positions).</li><li>Essential fatty acid deficiency causes: Dry scaly dermatitis, alopecia, impaired wound healing, thrombocytopenia, and growth failure in children.</li></ul>",
"w": [
"Oleic acid (18:1, Δ⁹) is a monounsaturated omega-9 fatty acid synthesized by human desaturase (Δ⁹-desaturase) from stearic acid.",
"Palmitic acid (16:0) is the primary product of de novo fatty acid synthesis by fatty acid synthase.",
"Stearic acid (18:0) is synthesized in human cells by elongation of palmitic acid.",
"",
"Palmitoleic acid (16:1, Δ⁹) is synthesized in human cells by desaturation of palmitate at carbon 9."
],
"usmle": 1,
"src": "usm"
},
{
"t": "Carnitine & CPT Deficiencies",
"s": "<p>A 7-month-old boy presents with progressive muscle weakness, floppiness, poor feeding, and hepatomegaly. Echocardiography demonstrates marked left ventricular hypertrophy and reduced systemic ejection fraction. Serum biochemistry shows:</p><table class=\"labt\"><tr><th>Parameter</th><th>Measured Value</th><th>Reference Range</th></tr><tr><td>Serum Free Carnitine</td><td>2.1 mcmol/L</td><td>25–54 mcmol/L</td></tr><tr><td>Urine Free Carnitine Excretion</td><td>340 mcmol/24h</td><td>&lt;20 mcmol/24h</td></tr><tr><td>Fasting Glucose</td><td>36 mg/dL</td><td>70–100 mg/dL</td></tr><tr><td>Serum Beta-hydroxybutyrate</td><td>0.1 mmol/L</td><td>0.5–3.0 mmol/L</td></tr></table><p>A diagnosis of Primary Systemic Carnitine Deficiency (OCTN2 defect) is made. In this disorder, reduced cellular uptake of free carnitine directly impairs the transport of long-chain fatty acids into which of the following cellular compartments?</p>",
"html": true,
"c": [
"Mitochondrial matrix",
"Cytosol",
"Peroxisome",
"Endoplasmic reticulum",
"Nucleus"
],
"a": 0,
"eh": "<p>Carnitine is required specifically for the carnitine shuttle system, which translocates long-chain fatty acyl groups across the inner mitochondrial membrane into the mitochondrial matrix. In primary carnitine deficiency, profound tissue depletion of free carnitine leaves long-chain fatty acyl-CoA molecules trapped outside the mitochondrial matrix. Consequently, mitochondrial beta-oxidation of long-chain fatty acids cannot occur, leading to failure of hepatic ATP production, loss of gluconeogenesis activation, impaired ketogenesis, and lipid accumulation in heart and skeletal muscle (causing cardiomyopathy and weakness).</p><p><b>Key takeaways</b></p><ul><li>Biological role of carnitine: Translocates long-chain fatty acids into the mitochondrial matrix for beta-oxidation.</li><li>Defective carnitine uptake (OCTN2 defect) -&gt; Carnitine depletion -&gt; Inability to transport long-chain fatty acids into mitochondrial matrix -&gt; Loss of beta-oxidation -&gt; Dilated/hypertrophic cardiomyopathy, muscle weakness, and hypoketotic hypoglycemia.</li></ul>",
"w": [
"",
"Activation of free fatty acids to acyl-CoA occurs in the cytosol/outer mitochondrial membrane and does not require carnitine.",
"Peroxisomal uptake of VLCFAs occurs independently of the carnitine shuttle (uses ALDP transporter).",
"Endoplasmic reticulum processes (omega-oxidation, elongation, desaturation) do not utilize the carnitine shuttle.",
"Fatty acid transport into the nucleus is not carnitine-dependent."
],
"usmle": 1,
"src": "usm"
},
{
"t": "Lipoprotein Structure & Classification",
"lv": "Easy",
"s": "Which lipids are found in the hydrophobic core of a lipoprotein particle?",
"c": [
"Triglycerides and cholesteryl esters",
"Phospholipids and free cholesterol",
"Apolipoproteins and phospholipids",
"Free fatty acids and glycerol",
"Free cholesterol and apolipoproteins"
],
"a": 0,
"e": "Lipids are insoluble in plasma, so they are packaged like a micelle:\n• Hydrophobic core: the completely nonpolar lipids, triacylglycerol (TAG) and cholesteryl esters.\n• Amphipathic surface shell: phospholipids and free (unesterified) cholesterol, with their polar groups facing the water, plus the apolipoproteins.\nThe apolipoproteins also act as enzyme activators (apo C-II for LPL, apo A-I for LCAT) and receptor ligands (apo B-100, apo E).\n\nTakeaway: Core = TAG + cholesteryl esters. Shell = phospholipids + free cholesterol + apoproteins.",
"w": [
"",
"Phospholipids and free cholesterol are amphipathic, so they sit in the surface shell facing the plasma.",
"Apolipoproteins and phospholipids both sit on the surface, where they interact with water and with enzymes and receptors.",
"Free fatty acids and glycerol are the products released when lipoprotein lipase hydrolyzes core TAG. They are not stored in the core.",
"Free cholesterol has a polar hydroxyl group and sits in the shell with the apolipoproteins."
],
"src": "lec",
"fig": [
"figs/crs/lp-structure"
]
},
{
"t": "Lipoprotein Structure & Classification",
"lv": "Easy",
"s": "On serum lipoprotein electrophoresis, which lipoprotein runs in the pre-beta band?",
"c": [
"LDL",
"VLDL",
"HDL",
"Chylomicrons",
"Lipoprotein X"
],
"a": 1,
"e": "Electrophoresis separates lipoproteins by charge and size. The bands are named after the plasma proteins they run with:\n• Alpha band (moves farthest) = HDL.\n• Pre-beta band = VLDL.\n• Beta band = LDL.\n• Origin (does not move, too large) = chylomicrons.\nSo a patient with high VLDL (type IV) has a heavy pre-beta band, and familial hypercholesterolemia (high LDL) gives a heavy beta band.\n\nTakeaway: HDL = alpha, VLDL = pre-beta, LDL = beta, chylomicrons = origin.",
"w": [
"LDL runs in the beta band, which is why the high-LDL disorder used to be called hyperbetalipoproteinemia.",
"",
"HDL runs farthest, in the alpha band, which is why it is called α-lipoprotein.",
"Chylomicrons are too large to migrate and stay at the origin.",
"Lipoprotein X is the abnormal particle seen in LCAT deficiency and cholestasis. It is not one of the four normal bands."
],
"src": "lec",
"fig": [
"figs/crs/lp-classes"
]
},
{
"t": "Lipoprotein Structure & Classification",
"lv": "Easy",
"s": "Which lipoprotein has the highest density and the highest protein content?",
"c": [
"LDL",
"VLDL",
"HDL",
"IDL",
"Chylomicron"
],
"a": 2,
"e": "Lipid is lighter than water and protein is denser, so a lipoprotein's density rises as its protein-to-lipid ratio rises:\n• Chylomicrons: about 1–2% protein, mostly TAG. Least dense and largest. They float to the top on ultracentrifugation.\n• VLDL → IDL → LDL: progressively less TAG and relatively more protein and cholesterol.\n• HDL: about 40% protein. Densest and smallest. It sinks lowest.\n\nTakeaway: Density order (low → high): chylomicron < VLDL < IDL < LDL < HDL. HDL has the most protein.",
"w": [
"LDL is mostly cholesteryl ester and has much less protein than HDL.",
"VLDL is about 60% TAG, which makes it light.",
"",
"IDL sits between VLDL and LDL in density, below HDL.",
"Chylomicrons are almost all TAG and are the least dense lipoproteins."
],
"src": "lec",
"fig": [
"figs/crs/lp-classes"
]
},
{
"t": "Lipoprotein Structure & Classification",
"lv": "Easy",
"s": "Which apolipoprotein is the main structural protein of HDL?",
"c": [
"Apo B-100",
"Apo B-48",
"Apo C-II",
"Apo A-I",
"Apo E"
],
"a": 3,
"e": "Each lipoprotein class has a main structural apolipoprotein:\n• Chylomicron = apo B-48.\n• VLDL, IDL, LDL = apo B-100.\n• HDL = apo A-I.\nApo A-I has two key jobs in reverse cholesterol transport: it accepts free cholesterol and phospholipid from cells through the ABCA1 transporter, forming nascent HDL, and it activates LCAT, which esterifies that cholesterol so HDL can mature.\n\nTakeaway: Apo A-I = HDL's main protein. It accepts cholesterol via ABCA1 and activates LCAT.",
"w": [
"Apo B-100 is the structural protein of VLDL, IDL and LDL and the ligand for the LDL receptor.",
"Apo B-48 is made in the intestine and is the structural protein of chylomicrons.",
"Apo C-II is carried on HDL and lent to chylomicrons and VLDL, but its role is to activate lipoprotein lipase.",
"",
"Apo E is a ligand that lets remnants bind hepatic receptors. It is not HDL's main structural protein."
],
"src": "lec",
"fig": [
"figs/crs/lp-apo-table",
"figs/crs/lp-hdl"
]
},
{
"t": "Lipoprotein Structure & Classification",
"lv": "Easy",
"s": "Which lipoprotein carries dietary triglyceride from the intestine to peripheral tissues?",
"c": [
"Very low-density lipoprotein",
"Low-density lipoprotein",
"High-density lipoprotein",
"Intermediate-density lipoprotein",
"Chylomicron"
],
"a": 4,
"e": "There are two routes for transporting TAG:\n• Exogenous (dietary) route: intestinal mucosal cells repackage absorbed dietary fat into chylomicrons, which travel through the lymphatics to the blood and deliver TAG to muscle and adipose tissue. They also carry dietary cholesterol and the fat-soluble vitamins A, D, E and K.\n• Endogenous route: the liver packages the TAG it makes into VLDL.\n\nTakeaway: Chylomicrons = dietary TAG from the gut. VLDL = liver-made TAG.",
"w": [
"VLDL carries TAG made in the liver (endogenous), not dietary TAG.",
"LDL carries mostly cholesterol to tissues and contains little TAG.",
"HDL collects excess cholesterol from tissues and returns it to the liver.",
"IDL is formed from VLDL in the circulation, so it carries liver-derived lipid.",
""
],
"src": "lec",
"fig": [
"figs/crs/lp-apo-table"
]
},
{
"t": "Chylomicron Metabolism & Lipoprotein Lipase",
"lv": "Easy",
"s": "Lipoprotein lipase needs which apolipoprotein as its activator?",
"c": [
"Apo C-II",
"Apo E",
"Apo B-48",
"Apo A-I",
"Apo B-100"
],
"a": 0,
"e": "Lipoprotein lipase (LPL) sits on the capillary walls of adipose tissue, heart and skeletal muscle. It hydrolyzes the TAG in chylomicrons and VLDL into free fatty acids and glycerol so tissues can take up the fatty acids.\nLPL needs apo C-II as its activator. Nascent chylomicrons and VLDL lack enough apo C-II, so they get it from HDL in the blood.\nDeficiency of either LPL or apo C-II causes type I hyperlipoproteinemia, in which chylomicrons cannot be cleared.\n\nTakeaway: Apo C-II activates LPL. No C-II → no TAG hydrolysis → type I hyperchylomicronemia.",
"w": [
"",
"Apo E is the ligand for hepatic remnant receptors. It does not activate LPL.",
"Apo B-48 is the structural protein of chylomicrons and has no enzyme-activating role.",
"Apo A-I activates LCAT, not LPL.",
"Apo B-100 is the ligand for the LDL receptor."
],
"src": "lec",
"fig": [
"figs/crs/lp-chylo"
]
},
{
"t": "Chylomicron Metabolism & Lipoprotein Lipase",
"lv": "Easy",
"s": "Lipoprotein lipase is anchored to the capillary endothelium by which molecule?",
"c": [
"Apo C-II",
"Heparan sulfate",
"Hyaluronic acid",
"Clathrin",
"Apo B-100"
],
"a": 1,
"e": "LPL is made by adipocytes and muscle cells and moved to the luminal surface of the capillary endothelium, where it is held by heparan sulfate proteoglycans. That location lets it act on passing chylomicrons and VLDL.\nIV heparin competes for the heparan sulfate binding sites and releases LPL into plasma. Measuring 'post-heparin lipase activity' is therefore the test for LPL deficiency.\n\nTakeaway: LPL is anchored by heparan sulfate. Heparin releases it, which is the basis of the post-heparin lipase test.",
"w": [
"Apo C-II activates LPL but does not hold it on the endothelium.",
"",
"Hyaluronic acid is a glycosaminoglycan in connective tissue matrix and does not anchor LPL.",
"Clathrin coats the pits used for receptor-mediated endocytosis, such as LDL uptake.",
"Apo B-100 is a structural protein of VLDL and LDL, not an anchor for LPL."
],
"src": "lec",
"fig": [
"figs/crs/lp-chylo"
]
},
{
"t": "Chylomicron Metabolism & Lipoprotein Lipase",
"lv": "Easy",
"s": "Which hormone increases synthesis of lipoprotein lipase in adipose tissue?",
"c": [
"Glucagon",
"Epinephrine",
"Insulin",
"Cortisol",
"Growth hormone"
],
"a": 2,
"e": "After a meal, insulin rises and promotes fuel storage. Among its effects, it increases LPL synthesis in adipose tissue, so TAG from chylomicrons is hydrolyzed there and the fatty acids are stored as fat.\nIn the fasting state, insulin falls and glucagon and epinephrine rise. They activate hormone-sensitive lipase inside adipocytes to release stored fat instead.\nIn uncontrolled diabetes, low insulin means low LPL, so chylomicrons and VLDL accumulate and TAG rises.\n\nTakeaway: Insulin ↑ adipose LPL → fat storage after meals. Low insulin (diabetes) → high TAG.",
"w": [
"Glucagon is a fasting hormone that favors fat breakdown, not LPL-driven storage.",
"Epinephrine activates hormone-sensitive lipase and lipolysis, the opposite of storage.",
"",
"Cortisol promotes fat mobilization in fasting and stress and is not the main stimulus for adipose LPL.",
"Growth hormone mobilizes fat for fuel rather than promoting fat storage."
],
"src": "lec"
},
{
"t": "Chylomicron Metabolism & Lipoprotein Lipase",
"lv": "Easy",
"s": "Which protein is required to assemble a chylomicron in the intestinal cell?",
"c": [
"Cholesteryl ester transfer protein",
"Lecithin-cholesterol acyltransferase",
"Hormone-sensitive lipase of adipose tissue",
"Microsomal triglyceride transfer protein",
"Acyl-CoA cholesterol acyltransferase"
],
"a": 3,
"e": "Microsomal triglyceride transfer protein (MTP) sits in the ER of enterocytes and hepatocytes. It loads TAG and other lipids onto the apo B proteins as they are made:\n• In the intestine, onto apo B-48 → chylomicrons.\n• In the liver, onto apo B-100 → VLDL.\nWithout MTP, no apo B-containing lipoproteins are released. That is abetalipoproteinemia: fat builds up in enterocytes, with steatorrhea, very low TAG and cholesterol, and malabsorption of vitamins A, D, E and K.\n\nTakeaway: MTP assembles chylomicrons and VLDL. MTP defect = abetalipoproteinemia.",
"w": [
"CETP swaps cholesteryl esters and TAG between lipoproteins already in plasma. It does not assemble them.",
"LCAT esterifies cholesterol on HDL in plasma.",
"Hormone-sensitive lipase breaks down stored TAG inside adipocytes during fasting.",
"",
"ACAT esterifies cholesterol for storage inside cells. It does not load lipid onto apo B."
],
"src": "lec"
},
{
"t": "Chylomicron Metabolism & Lipoprotein Lipase",
"lv": "Easy",
"s": "A nascent chylomicron becomes mature after it receives which apolipoproteins from HDL?",
"c": [
"Apo A-I and apo B-48",
"Apo B-100 and apo E",
"Apo A-I and apo C-II",
"Apo B-48 and apo B-100",
"Apo C-II and apo E"
],
"a": 4,
"e": "A nascent chylomicron leaves the enterocyte through the lymph with apo B-48 and a little apo A. In the blood it meets HDL, which donates:\n• Apo C-II, which lets it activate LPL so its TAG can be unloaded.\n• Apo E, which later lets the remnant bind hepatic receptors.\nWith these, it is a mature chylomicron. After LPL acts, apo C-II returns to HDL, and the apo E-bearing remnant is taken up by the liver.\n\nTakeaway: HDL lends apo C-II (for LPL) and apo E (for liver uptake) to make a mature chylomicron.",
"w": [
"Apo B-48 is already part of the chylomicron from its assembly, and apo A-I is not what HDL donates to mature it.",
"Apo B-100 is made in the liver and is never on chylomicrons.",
"Apo A-I is not transferred to mature the chylomicron. HDL gives apo C-II and apo E.",
"Apo B proteins are built into the particle at assembly. They are not transferred from HDL.",
""
],
"src": "lec",
"fig": [
"figs/crs/lp-chylo"
]
},
{
"t": "Chylomicron Metabolism & Lipoprotein Lipase",
"lv": "Easy",
"s": "How are chylomicron remnants cleared from the blood?",
"c": [
"Apo E binds liver receptors",
"Apo C-II binds liver receptors",
"Apo B-48 binds the LDL receptor",
"LCAT esterifies their cholesterol",
"CETP moves them into HDL"
],
"a": 0,
"e": "Step 1: LPL removes most of the TAG from the chylomicron, leaving a smaller, cholesterol-rich chylomicron remnant.\nStep 2: The remnant gives apo C-II back to HDL but keeps apo E.\nStep 3: Apo E binds hepatic receptors (the LDL receptor-related protein and the LDL receptor), and the remnant is taken into hepatocytes by endocytosis and degraded in lysosomes.\nIf apo E is abnormal (apo E2/E2), remnants build up: type III hyperlipoproteinemia.\n\nTakeaway: Chylomicron remnants are cleared by apo E binding liver receptors. Defective apo E = type III.",
"w": [
"",
"Apo C-II activates LPL and is returned to HDL before the remnant is cleared. It is not a receptor ligand.",
"Apo B-48 lacks the C-terminal region of apo B-100 that binds the LDL receptor.",
"LCAT esterifies cholesterol on HDL. It does not clear remnants.",
"CETP exchanges lipids between particles. It does not move whole remnants into HDL."
],
"src": "lec",
"fig": [
"figs/crs/lp-chylo"
]
},
{
"t": "Chylomicron Metabolism & Lipoprotein Lipase",
"lv": "Hard",
"s": "A 4-year-old boy has recurrent abdominal pain and episodes of pancreatitis. His fasting plasma looks milky, with a creamy layer on top after standing overnight. An IV heparin test shows no rise in plasma lipase activity. Which step of lipoprotein metabolism is defective?",
"c": [
"Uptake of LDL by hepatocytes",
"Hydrolysis of chylomicron TAG",
"Assembly of VLDL in the liver",
"Esterification of HDL cholesterol",
"Efflux of cholesterol to HDL"
],
"a": 1,
"e": "Step 1: milky plasma with a creamy top layer means chylomicrons persist after fasting.\nStep 2: heparin normally releases LPL into plasma, and no rise in lipase activity points to LPL deficiency, type I hyperlipoproteinemia.\nStep 3: LPL cannot hydrolyze chylomicron TAG, so very high TAG causes pancreatitis.",
"w": [
"That is familial hypercholesterolemia.",
"",
"VLDL assembly needs MTP.",
"That is LCAT deficiency.",
"That is Tangier disease."
],
"src": "lec",
"fig": [
"figs/crs/lp-chylo",
"figs/crs/lp-type1"
]
},
{
"t": "VLDL, IDL & LDL Metabolism",
"lv": "Easy",
"s": "VLDL is produced in which organ?",
"c": [
"Small intestine",
"Adipose tissue",
"Liver",
"Skeletal muscle",
"Spleen"
],
"a": 2,
"e": "The liver packages the TAG it makes, from excess carbohydrate and fatty acids, with cholesterol and apo B-100 into VLDL. MTP is needed for this step. VLDL is about 60% TAG.\nIn the circulation, VLDL picks up apo C-II and apo E from HDL, delivers TAG to tissues through LPL, and becomes IDL and then LDL.\nOverproduction of VLDL by the liver, for example with obesity, alcohol, diabetes or a high-carbohydrate diet, causes type IV hyperlipoproteinemia.\n\nTakeaway: VLDL = liver-made TAG carrier (apo B-100). Liver VLDL overproduction = type IV.",
"w": [
"The small intestine makes chylomicrons for dietary fat, not VLDL.",
"Adipose tissue stores TAG and releases free fatty acids. It does not make lipoproteins.",
"",
"Skeletal muscle takes up fatty acids from lipoproteins for fuel but does not make VLDL.",
"The spleen does not synthesize lipoproteins."
],
"src": "lec",
"fig": [
"figs/crs/lp-vldl-ldl"
]
},
{
"t": "VLDL, IDL & LDL Metabolism",
"lv": "Easy",
"s": "Which enzyme converts IDL into LDL?",
"c": [
"Lipoprotein lipase",
"Hormone-sensitive lipase",
"Pancreatic lipase",
"Hepatic lipase",
"Lysosomal acid lipase"
],
"a": 3,
"e": "The VLDL cascade:\n1. LPL on capillaries removes TAG from VLDL → IDL (VLDL remnant).\n2. Some IDL is taken up by the liver through apo E.\n3. The rest is processed by hepatic lipase, which removes more TAG (and phospholipid) → LDL. LDL is rich in cholesteryl ester and has only apo B-100.\nHepatic lipase deficiency leads to accumulation of IDL and TAG-rich HDL.\n\nTakeaway: LPL: VLDL → IDL. Hepatic lipase: IDL → LDL.",
"w": [
"LPL converts VLDL into IDL, the step before.",
"Hormone-sensitive lipase works inside adipocytes to release stored fat, not on circulating IDL.",
"Pancreatic lipase digests dietary TAG in the intestinal lumen.",
"",
"Lysosomal acid lipase hydrolyzes cholesteryl esters inside lysosomes after LDL is taken up."
],
"src": "lec",
"fig": [
"figs/crs/lp-vldl-ldl"
]
},
{
"t": "VLDL, IDL & LDL Metabolism",
"lv": "Easy",
"s": "Which protein moves cholesteryl esters from HDL to VLDL in exchange for triglyceride?",
"c": [
"LCAT",
"ACAT",
"MTP",
"LPL",
"CETP"
],
"a": 4,
"e": "Cholesteryl ester transfer protein (CETP) is a plasma protein that swaps lipids between lipoproteins:\n• HDL gives cholesteryl esters to VLDL (and LDL).\n• VLDL gives TAG to HDL.\nThis moves cholesterol collected by HDL onto apo B particles, which can deliver it to the liver. The TAG-enriched HDL is then trimmed by hepatic lipase. CETP inhibitors were developed to raise HDL cholesterol.\n\nTakeaway: CETP = cholesteryl esters from HDL → VLDL, in exchange for TAG.",
"w": [
"LCAT makes cholesteryl esters within HDL. It does not transfer them between particles.",
"ACAT esterifies cholesterol inside cells for storage.",
"MTP assembles chylomicrons and VLDL inside cells. It does not exchange lipids in plasma.",
"LPL hydrolyzes TAG in chylomicrons and VLDL. It does not transfer cholesteryl esters.",
""
],
"src": "lec",
"fig": [
"figs/crs/lp-cetp"
]
},
{
"t": "VLDL, IDL & LDL Metabolism",
"lv": "Easy",
"s": "Which apolipoprotein lets LDL bind the LDL receptor?",
"c": [
"Apo B-100",
"Apo B-48",
"Apo C-II",
"Apo A-I",
"Apo C-III"
],
"a": 0,
"e": "As VLDL becomes IDL and then LDL, it gives its apo C and apo E back to HDL. LDL is left with apo B-100 as its only apolipoprotein.\nThe C-terminal region of apo B-100 is the ligand that binds the LDL receptor on hepatocytes and extrahepatic tissues, triggering uptake through clathrin-coated pits.\nMutations in apo B-100 that weaken this binding cause familial defective apo B-100, which looks clinically like familial hypercholesterolemia.\n\nTakeaway: Apo B-100 is LDL's only apoprotein and its receptor ligand.",
"w": [
"",
"Apo B-48 lacks the C-terminal receptor-binding region of apo B-100, so it cannot bind the LDL receptor.",
"Apo C-II activates lipoprotein lipase and is not on LDL.",
"Apo A-I belongs to HDL and activates LCAT.",
"Apo C-III inhibits lipoprotein lipase and remnant clearance. It is not the LDL receptor ligand."
],
"src": "lec",
"fig": [
"figs/crs/lp-vldl-ldl"
]
},
{
"t": "VLDL, IDL & LDL Metabolism",
"lv": "Hard",
"s": "As a VLDL particle circulates, it loses apo C-II and apo E to HDL and much of its TAG to tissues, then is processed by hepatic lipase. What does it become, and where does it go?",
"c": [
"HDL, back to the liver only",
"LDL, to liver and other tissues",
"Chylomicron remnant, to the liver",
"IDL, to adipose tissue",
"VLDL remnant, to the intestine"
],
"a": 1,
"e": "Step 1: LPL removes TAG from VLDL, forming IDL.\nStep 2: IDL gives apo C and apo E back to HDL, and hepatic lipase removes more TAG.\nStep 3: The product is LDL: small, cholesteryl ester-rich, carrying only apo B-100. LDL delivers cholesterol to the liver and to extrahepatic tissues (adrenal, gonads, other cells) through LDL receptor-mediated endocytosis.\n\nTakeaway: VLDL → (LPL) → IDL → (hepatic lipase) → LDL, which delivers cholesterol to liver and other tissues.",
"w": [
"VLDL never becomes HDL. HDL is made separately as nascent HDL by the liver and intestine.",
"",
"Chylomicron remnants come from chylomicrons, the dietary pathway, not from VLDL.",
"IDL is the intermediate step before LDL, and adipose tissue is not where it is delivered.",
"Lipoproteins are not returned to the intestine. LDL delivers cholesterol to the liver and peripheral tissues."
],
"src": "lec",
"fig": [
"figs/crs/lp-vldl-ldl"
]
},
{
"t": "LDL Receptor, ACAT & Atherosclerosis",
"lv": "Easy",
"s": "LDL receptor complexes are taken into the cell through which structure?",
"c": [
"Caveolae of the membrane",
"Gap junctions",
"Clathrin-coated pits",
"Tight junctions",
"Phagocytic cups"
],
"a": 2,
"e": "LDL uptake is classic receptor-mediated endocytosis:\n1. Apo B-100 binds the LDL receptor, which clusters in clathrin-coated pits.\n2. The pit pinches off as a clathrin-coated vesicle, loses its coat and fuses with an endosome.\n3. The acidic endosome releases LDL from the receptor, and the receptor recycles to the cell surface.\n4. LDL goes to the lysosome, where cholesteryl esters are hydrolyzed to free cholesterol.\n\nTakeaway: LDL enters through clathrin-coated pits. The receptor recycles, and LDL is degraded in lysosomes.",
"w": [
"Caveolae are a different, clathrin-independent invagination and are not the main LDL entry route.",
"Gap junctions connect the cytoplasm of neighboring cells. They do not internalize particles.",
"",
"Tight junctions seal the spaces between epithelial cells.",
"Phagocytosis engulfs large particles such as bacteria. LDL uses receptor-mediated endocytosis."
],
"src": "lec",
"fig": [
"figs/crs/lp-ldl-uptake"
]
},
{
"t": "LDL Receptor, ACAT & Atherosclerosis",
"lv": "Easy",
"s": "Which enzyme stores excess free cholesterol inside cells as cholesteryl esters?",
"c": [
"Lecithin-cholesterol acyltransferase",
"Cholesteryl ester transfer protein",
"HMG-CoA reductase",
"Acyl-CoA cholesterol acyltransferase",
"Hormone-sensitive lipase"
],
"a": 3,
"e": "When a cell has more free cholesterol than it needs, it stores the excess as cholesteryl esters in cytoplasmic lipid droplets, because free cholesterol in excess damages membranes.\nThe enzyme is acyl-CoA:cholesterol acyltransferase (ACAT), in the ER. It moves a fatty acid from acyl-CoA onto the 3-OH of cholesterol. High cellular cholesterol activates ACAT.\nCompare LCAT, which does a similar reaction in plasma on HDL using lecithin as the fatty acid donor.\n\nTakeaway: ACAT = inside the cell, acyl-CoA donor, storage. LCAT = in plasma on HDL, lecithin donor.",
"w": [
"LCAT esterifies cholesterol in plasma on HDL, not inside cells.",
"CETP moves cholesteryl esters between lipoproteins in plasma. It does not make them.",
"HMG-CoA reductase is the rate-limiting enzyme of cholesterol synthesis. High cholesterol inhibits it.",
"",
"Hormone-sensitive lipase breaks down stored TAG in adipocytes."
],
"src": "lec",
"fig": [
"figs/crs/lp-ldl-uptake"
]
},
{
"t": "LDL Receptor, ACAT & Atherosclerosis",
"lv": "Easy",
"s": "When intracellular cholesterol is high, how does the cell change its LDL receptors?",
"c": [
"More receptors, as SREBP is activated",
"Fewer receptors, as SREBP is activated",
"More receptors, as SREBP is inhibited",
"No change, as receptors are constant",
"Fewer receptors, as SREBP is inhibited"
],
"a": 4,
"e": "SREBP (sterol regulatory element-binding protein) senses cholesterol in the ER:\n• Low cholesterol: SREBP moves to the Golgi, is cleaved and enters the nucleus, switching on the LDL receptor and HMG-CoA reductase genes. The cell makes more receptors and more cholesterol.\n• High cholesterol: SREBP is held in the ER and stays inactive, so fewer LDL receptors are made and LDL uptake falls.\nThis is how statins lower LDL. Less hepatic cholesterol activates SREBP, so more LDL receptors clear LDL from the blood.\n\nTakeaway: High cell cholesterol → SREBP off → ↓ LDL receptors. Statins do the reverse.",
"w": [
"SREBP is activated when cholesterol is low, not high, and it would raise receptor numbers.",
"An active SREBP increases receptor synthesis. It does not decrease it.",
"An inhibited SREBP lowers receptor synthesis. It cannot raise receptor numbers.",
"LDL receptor numbers are tightly regulated by cellular cholesterol through SREBP.",
""
],
"src": "lec",
"fig": [
"figs/crs/lp-ldl-uptake"
]
},
{
"t": "LDL Receptor, ACAT & Atherosclerosis",
"lv": "Easy",
"s": "Macrophages take up oxidized LDL to become foam cells through which receptors?",
"c": [
"Scavenger receptors",
"LDL receptors",
"SR-B1 receptors on hepatocytes",
"Apo E receptors on hepatocytes",
"Insulin receptors"
],
"a": 0,
"e": "LDL trapped in the arterial intima is oxidized by free radicals. Oxidized LDL is no longer recognized by the LDL receptor. Instead, macrophages take it up through scavenger receptors (such as SR-A and CD36).\nScavenger receptors are low-affinity and nonspecific, and crucially they are not downregulated when the cell fills with cholesterol. So macrophages keep ingesting oxidized LDL until they are lipid-laden foam cells, the basis of the fatty streak.\n\nTakeaway: Oxidized LDL → scavenger receptors (not downregulated) → foam cells.",
"w": [
"",
"LDL receptors recognize native, not oxidized, LDL, and they are downregulated when the cell's cholesterol rises, so they cannot cause unlimited uptake.",
"SR-B1 is on hepatocytes and takes up cholesteryl esters from HDL in reverse cholesterol transport.",
"Apo E receptors on hepatocytes clear chylomicron and VLDL remnants.",
"Insulin receptors are tyrosine kinases that regulate glucose metabolism and do not take up LDL."
],
"src": "lec",
"fig": [
"figs/crs/lp-oxldl"
]
},
{
"t": "LDL Receptor, ACAT & Atherosclerosis",
"lv": "Easy",
"s": "What is the earliest visible lesion of atherosclerosis?",
"c": [
"Fibrous cap",
"Fatty streak",
"Calcified plaque",
"Ruptured plaque",
"Occlusive thrombus"
],
"a": 1,
"e": "Atherosclerosis progresses in stages:\n1. Endothelial injury lets LDL enter the intima, where it is oxidized.\n2. Monocytes enter, become macrophages and take up oxidized LDL → foam cells.\n3. Collections of foam cells form the fatty streak, the earliest visible lesion. It can be seen even in children and adolescents.\n4. Cytokines draw smooth muscle cells into the intima, where they make collagen, forming a fibrous cap over a lipid core.\n5. Late changes: calcification, cap rupture and thrombosis.\n\nTakeaway: Fatty streak (foam cells) is first. Fibrous cap, calcification, rupture and thrombus come later.",
"w": [
"The fibrous cap forms later, when smooth muscle cells migrate in and lay down collagen.",
"",
"Calcification is a late change in advanced plaques.",
"Plaque rupture is a late complication that triggers acute events.",
"An occlusive thrombus forms after rupture and causes MI or stroke."
],
"src": "lec",
"fig": [
"figs/crs/lp-athero-1"
]
},
{
"t": "LDL Receptor, ACAT & Atherosclerosis",
"lv": "Easy",
"s": "A deficiency of a lysosomal enzyme leads to cholesterol from LDL building up in lysosomes. Which disorder fits?",
"c": [
"Tangier disease",
"Familial hypercholesterolemia",
"Niemann-Pick type C",
"Abetalipoproteinemia",
"Fish-eye disease"
],
"a": 2,
"e": "After receptor-mediated endocytosis, LDL is delivered to lysosomes. There:\n1. Lysosomal acid lipase hydrolyzes the cholesteryl esters to free cholesterol.\n2. The NPC1 and NPC2 proteins carry the free cholesterol out of the lysosome to the rest of the cell.\nDefects here trap lipid in lysosomes:\n• Niemann-Pick type C (NPC1/NPC2 defect): free cholesterol is stuck in lysosomes.\n• Wolman disease (acid lipase deficiency): cholesteryl esters and TAG accumulate.\n\nTakeaway: Niemann-Pick C and Wolman disease = lysosomal trapping of LDL-derived cholesterol.",
"w": [
"Tangier disease is a defect in ABCA1, which moves cholesterol out of cells to HDL. It is not a lysosomal enzyme defect.",
"Familial hypercholesterolemia is a defect in the LDL receptor, so LDL never reaches the lysosome.",
"",
"Abetalipoproteinemia is an MTP defect that stops chylomicron and VLDL assembly.",
"Fish-eye disease is a partial LCAT deficiency in plasma, not a lysosomal disorder."
],
"src": "lec",
"fig": [
"figs/crs/lp-ldl-uptake"
]
},
{
"t": "LDL Receptor, ACAT & Atherosclerosis",
"lv": "Hard",
"s": "A 60-year-old smoker has a plaque in his coronary artery. Biopsy of an early lesion shows lipid-laden cells in the intima that have engulfed modified LDL. Which step was necessary for these cells to form?",
"c": [
"Esterification of HDL cholesterol",
"Hydrolysis of VLDL by LPL",
"Transfer of apo C-II to LDL",
"Oxidation of LDL in the intima",
"Uptake of LDL by hepatocytes"
],
"a": 3,
"e": "Step 1: Smoking injures the endothelium, so LDL enters and is trapped in the intima.\nStep 2: Smoking also raises oxidative stress, and free radicals oxidize the trapped LDL. Oxidized LDL is the form that causes problems.\nStep 3: Monocytes migrate in and become macrophages. They take up the oxidized LDL through scavenger receptors, which are not downregulated, until they become lipid-laden foam cells, the cells seen in the biopsy.\n\nTakeaway: Foam cells need oxidized LDL. That is why oxidative stress (smoking, diabetes) drives atherosclerosis.",
"w": [
"LCAT esterifies HDL cholesterol in plasma, which is part of protective reverse cholesterol transport, not foam cell formation.",
"LPL hydrolyzes VLDL TAG on capillary walls. This does not directly create foam cells.",
"LDL does not carry apo C-II, and adding it would not cause macrophage uptake.",
"",
"Uptake of LDL by hepatocytes clears LDL from the blood and protects against atherosclerosis."
],
"src": "lec",
"fig": [
"figs/crs/lp-oxldl",
"figs/crs/lp-athero-1"
]
},
{
"t": "LDL Receptor, ACAT & Atherosclerosis",
"lv": "Hard",
"s": "A 55-year-old man has crushing chest pain. Angiography shows a thrombus at the site of a coronary plaque. Which event most directly triggered the thrombus?",
"c": [
"Formation of a fatty streak",
"Migration of smooth muscle cells",
"Uptake of LDL by hepatocytes",
"Release of apo E to HDL",
"Rupture of the fibrous cap"
],
"a": 4,
"e": "Step 1: An advanced atherosclerotic plaque has a lipid-rich, necrotic core covered by a fibrous cap of smooth muscle cells and collagen.\nStep 2: Macrophages in the plaque release metalloproteinases and inflammatory cytokines that digest collagen and thin the cap. An 'unstable' plaque has a thin cap and a large lipid core.\nStep 3: When the cap ruptures, the thrombogenic core (tissue factor, collagen, lipid) is exposed to blood. Platelets adhere and aggregate, the coagulation cascade fires, and a thrombus forms that can occlude the coronary artery, causing an MI.\n\nTakeaway: Acute coronary syndromes come from fibrous cap rupture → platelet aggregation → occlusive thrombus.",
"w": [
"Fatty streaks are the earliest, flat lesions and do not have a cap that can rupture.",
"Smooth muscle migration builds the fibrous cap over years. It stabilizes rather than triggers a thrombus.",
"Hepatic uptake of LDL lowers plasma LDL and protects against atherosclerosis.",
"Apo E moving back to HDL is part of normal lipoprotein metabolism, not a thrombotic event.",
""
],
"src": "lec",
"fig": [
"figs/crs/lp-athero-2"
]
},
{
"t": "HDL & Reverse Cholesterol Transport",
"lv": "Easy",
"s": "Free cholesterol leaves peripheral cells and moves onto nascent HDL through which transporter?",
"c": [
"ABCA1",
"SR-B1",
"LDL receptor",
"CETP",
"MTP"
],
"a": 0,
"e": "Reverse cholesterol transport starts at peripheral cells, such as macrophages in the arterial wall:\n1. ABCA1, an ATP-binding cassette transporter in the plasma membrane, uses ATP to pump free cholesterol and phospholipid out of the cell onto lipid-poor apo A-I, forming discoidal nascent HDL.\n2. LCAT then esterifies the cholesterol so HDL matures.\n3. SR-B1 on the liver takes up the esters.\nWithout ABCA1, HDL cannot form: that is Tangier disease, with near-zero HDL and cholesterol buildup in tissues (orange tonsils, neuropathy).\n\nTakeaway: ABCA1 = cholesterol efflux from cells onto apo A-I. ABCA1 defect = Tangier disease.",
"w": [
"",
"SR-B1 works at the other end of the process, taking HDL cholesteryl esters into hepatocytes.",
"The LDL receptor brings cholesterol into cells, the opposite direction.",
"CETP exchanges lipids between lipoproteins in plasma. It does not move cholesterol out of cells.",
"MTP assembles chylomicrons and VLDL inside enterocytes and hepatocytes."
],
"src": "lec",
"fig": [
"figs/crs/lp-hdl"
]
},
{
"t": "HDL & Reverse Cholesterol Transport",
"lv": "Easy",
"s": "Which enzyme esterifies free cholesterol in HDL, turning discoidal nascent HDL into a spherical particle?",
"c": [
"ACAT",
"LCAT",
"CETP",
"Hepatic lipase",
"HMG-CoA reductase"
],
"a": 1,
"e": "Nascent HDL is a flat disc of phospholipid, free cholesterol and apo A-I. To mature:\n1. Lecithin-cholesterol acyltransferase (LCAT), activated by apo A-I, moves a fatty acid from lecithin (phosphatidylcholine) onto free cholesterol.\n2. The resulting cholesteryl esters are fully nonpolar, so they move into the particle's core.\n3. As the core fills, HDL becomes spherical (HDL3 → HDL2). This also keeps the surface free to accept more cholesterol from cells, so efflux continues.\nLCAT deficiency leaves free cholesterol and immature HDL, forming lipoprotein X.\n\nTakeaway: LCAT (activated by apo A-I, lecithin donor) esterifies HDL cholesterol → spherical, mature HDL.",
"w": [
"ACAT esterifies cholesterol inside cells for storage, using acyl-CoA, not on HDL in plasma.",
"",
"CETP transfers already-formed cholesteryl esters from HDL to VLDL. It does not make them.",
"Hepatic lipase hydrolyzes TAG and phospholipid in IDL and HDL. It does not esterify cholesterol.",
"HMG-CoA reductase is the rate-limiting enzyme of cholesterol synthesis inside cells."
],
"src": "lec",
"fig": [
"figs/crs/lp-hdl"
]
},
{
"t": "HDL & Reverse Cholesterol Transport",
"lv": "Easy",
"s": "Mature HDL delivers its cholesteryl esters to the liver through which receptor?",
"c": [
"LDL receptor",
"Scavenger receptor A",
"SR-B1",
"ABCA1",
"Apo E receptor"
],
"a": 2,
"e": "The last step of reverse cholesterol transport is in the liver. Scavenger receptor class B type 1 (SR-B1) binds mature HDL and selectively takes up its cholesteryl esters without taking in the whole particle. The emptied HDL returns to the circulation to collect more cholesterol.\nThe liver then disposes of the cholesterol by secreting it into bile or converting it to bile acids, the main route for removing cholesterol from the body. Some HDL esters reach the liver indirectly through CETP, VLDL and LDL.\n\nTakeaway: SR-B1 on hepatocytes takes up HDL cholesteryl esters → bile. That completes reverse cholesterol transport.",
"w": [
"The LDL receptor binds apo B-100 and apo E. HDL's apo A-I does not use it.",
"Scavenger receptor A is on macrophages and takes up oxidized LDL, which forms foam cells.",
"",
"ABCA1 pumps cholesterol out of peripheral cells at the start of the pathway.",
"Apo E receptors on the liver clear chylomicron and VLDL remnants, not HDL esters."
],
"src": "lec",
"fig": [
"figs/crs/lp-hdl"
]
},
{
"t": "HDL & Reverse Cholesterol Transport",
"lv": "Easy",
"s": "Which change raises HDL cholesterol?",
"c": [
"Cigarette smoking",
"Abdominal obesity",
"Metabolic syndrome",
"Regular aerobic exercise",
"Poorly controlled diabetes"
],
"a": 3,
"e": "HDL levels respond to lifestyle:\n• Raise HDL: regular aerobic exercise, weight loss, a healthy diet, moderate alcohol, and stopping smoking.\n• Lower HDL: smoking, abdominal obesity, insulin resistance, physical inactivity.\nIn metabolic syndrome and poorly controlled diabetes, HDL is often low, and the HDL that remains can be dysfunctional (glycated or oxidized) and lose its antiatherogenic function.\n\nTakeaway: Exercise raises HDL. Smoking, obesity and insulin resistance lower it or make it dysfunctional.",
"w": [
"Smoking lowers HDL and also oxidizes lipoproteins, increasing atherosclerosis risk.",
"Abdominal obesity lowers HDL as part of the insulin-resistance pattern.",
"Metabolic syndrome includes low HDL as one of its diagnostic criteria.",
"",
"In poorly controlled diabetes, HDL is often low and becomes glycated and dysfunctional."
],
"src": "lec"
},
{
"t": "HDL & Reverse Cholesterol Transport",
"lv": "Hard",
"s": "A drug activates liver X receptors in macrophages in the arterial wall. Which effect would most likely protect against atherosclerosis?",
"c": [
"More scavenger receptors on macrophages",
"Less LCAT activity in plasma",
"More LDL oxidation in the intima",
"Less apo A-I production",
"More ABCA1-driven cholesterol efflux"
],
"a": 4,
"e": "Step 1: Liver X receptors (LXRs) and PPARs are nuclear receptors that sense cellular sterols. When activated in macrophages, they increase transcription of ABCA1 (and ABCG1).\nStep 2: More ABCA1 pumps more free cholesterol out of the macrophage onto apo A-I, forming nascent HDL.\nStep 3: Macrophages with less cholesterol are less likely to become foam cells, and the cholesterol enters reverse cholesterol transport to the liver. This slows plaque growth.\n\nTakeaway: LXR/PPAR activation → ↑ ABCA1 → ↑ cholesterol efflux to HDL → fewer foam cells.",
"w": [
"More scavenger receptors would increase oxidized LDL uptake and make more foam cells, promoting atherosclerosis.",
"LCAT is needed to esterify and trap cholesterol on HDL. Less LCAT would weaken reverse cholesterol transport.",
"LDL oxidation is what allows foam cell formation, so more oxidation would worsen plaques.",
"Apo A-I is the acceptor for ABCA1-driven efflux. Less apo A-I would reduce HDL formation.",
""
],
"src": "lec"
},
{
"t": "Hyperlipoproteinemias: Types I, IIa, III & IV",
"lv": "Easy",
"s": "Familial hypercholesterolemia, type IIa, is caused by a defect in which pathway?",
"c": [
"LDL receptor-mediated uptake",
"Lipoprotein lipase activity",
"Apo E binding to remnants",
"VLDL overproduction in liver",
"ABCA1 cholesterol efflux"
],
"a": 0,
"e": "Familial hypercholesterolemia (type IIa) is autosomal dominant. It is caused by mutations in the LDL receptor gene, or less often in apo B-100 or PCSK9, that impair receptor-mediated uptake of LDL.\nWithout functioning receptors:\n• LDL stays in the blood (heterozygotes: LDL about 2–3× normal; homozygotes: often over 600 mg/dL).\n• The liver also senses less cholesterol and keeps making it.\nThis leads to tendon xanthomas, xanthelasma, corneal arcus and premature coronary artery disease (MI in the 30s to 40s in heterozygotes, in childhood in homozygotes).\n\nTakeaway: Type IIa = LDL receptor defect (autosomal dominant) → ↑ LDL → early CAD and tendon xanthomas.",
"w": [
"",
"LPL deficiency prevents chylomicron TAG hydrolysis and causes type I hyperchylomicronemia.",
"Defective apo E (apo E2/E2) prevents remnant clearance and causes type III.",
"Hepatic VLDL overproduction raises TAG and causes type IV.",
"Defective ABCA1 blocks cholesterol efflux to HDL and causes Tangier disease."
],
"src": "lec",
"fig": [
"figs/crs/lp-type2a"
]
},
{
"t": "Hyperlipoproteinemias: Types I, IIa, III & IV",
"lv": "Easy",
"s": "Which physical finding is most suggestive of familial hypercholesterolemia?",
"c": [
"Eruptive xanthomas",
"Tendon xanthomas",
"Palmar xanthomas",
"Orange tonsils",
"Corneal opacity with kidney disease"
],
"a": 1,
"e": "Very high LDL deposits cholesterol in tissues, giving characteristic signs in familial hypercholesterolemia:\n• Tendon xanthomas: firm nodules in the Achilles tendon and the extensor tendons of the hands. These are the most specific sign of FH.\n• Xanthelasma: yellow plaques on the eyelids.\n• Corneal arcus at a young age.\nOther xanthomas point elsewhere: eruptive (high TAG, types I and IV), palmar crease and tuberous (type III).\n\nTakeaway: Tendon xanthomas (Achilles) = familial hypercholesterolemia. Palmar = type III. Eruptive = high TAG.",
"w": [
"Eruptive xanthomas, small itchy papules on the buttocks and trunk, come from very high TAG, as in types I and IV.",
"",
"Palmar crease xanthomas are characteristic of type III dysbetalipoproteinemia.",
"Orange-yellow tonsils are the hallmark of Tangier disease (ABCA1 defect).",
"Corneal opacity with kidney disease points to complete LCAT deficiency."
],
"src": "lec",
"fig": [
"figs/crs/lp-type2a"
]
},
{
"t": "Hyperlipoproteinemias: Types I, IIa, III & IV",
"lv": "Easy",
"s": "Dysbetalipoproteinemia, type III, results from a mutation in which gene?",
"c": [
"Apo B-100",
"Apo C-II",
"Apo E",
"LDL receptor",
"Lipoprotein lipase"
],
"a": 2,
"e": "Dysbetalipoproteinemia (type III, 'remnant disease') is caused by abnormal apo E, usually homozygous apo E2, which binds hepatic receptors poorly.\nChylomicron remnants and IDL (VLDL remnants) depend on apo E for liver uptake, so they accumulate. Because remnants carry both TAG and cholesterol, both rise roughly equally.\nIt causes palmar and tuberous xanthomas and premature coronary and peripheral vascular disease. Electrophoresis shows a broad beta band.\n\nTakeaway: Type III = apo E defect (E2/E2) → remnants accumulate → ↑ cholesterol and ↑ TAG, palmar xanthomas.",
"w": [
"Apo B-100 mutations reduce LDL receptor binding and cause a type IIa picture (familial defective apo B-100).",
"Apo C-II deficiency prevents LPL activation and causes type I.",
"",
"LDL receptor mutations cause familial hypercholesterolemia, type IIa.",
"LPL deficiency causes type I hyperchylomicronemia."
],
"src": "lec",
"fig": [
"figs/crs/lp-type3"
]
},
{
"t": "Hyperlipoproteinemias: Types I, IIa, III & IV",
"lv": "Easy",
"s": "Which disorder is caused by overproduction of VLDL by the liver?",
"c": [
"Type I hyperlipoproteinemia",
"Type IIa hyperlipoproteinemia",
"Type III hyperlipoproteinemia",
"Type IV hyperlipoproteinemia",
"Abetalipoproteinemia"
],
"a": 3,
"e": "Type IV, familial hypertriglyceridemia, is caused by the liver making too much VLDL. Plasma TAG rises (often 200–500 mg/dL) while LDL is near normal.\nIt is made worse by anything that increases hepatic TAG synthesis: obesity, insulin resistance and type 2 diabetes, alcohol, and a high-carbohydrate diet. It is common in metabolic syndrome.\nIf TAG climbs above about 1,000 mg/dL, it can cause acute pancreatitis and eruptive xanthomas.\n\nTakeaway: Type IV = hepatic VLDL overproduction → ↑ TAG. Associated with obesity, diabetes, alcohol and metabolic syndrome.",
"w": [
"Type I comes from LPL or apo C-II deficiency, which is a clearance problem, not overproduction.",
"Type IIa is a defect in LDL receptor-mediated clearance.",
"Type III is a defect in apo E-mediated remnant clearance.",
"",
"Abetalipoproteinemia is the opposite: no VLDL or chylomicrons can be made because MTP is defective."
],
"src": "lec",
"fig": [
"figs/crs/lp-type4-lcat"
]
},
{
"t": "Hyperlipoproteinemias: Types I, IIa, III & IV",
"lv": "Easy",
"s": "Which hyperlipoproteinemia does NOT increase the risk of atherosclerosis?",
"c": [
"Type IIa",
"Type III",
"Type IV",
"Lipoprotein X disease",
"Type I"
],
"a": 4,
"e": "Type I hyperlipoproteinemia (LPL or apo C-II deficiency) causes massive accumulation of chylomicrons, so TAG can exceed 1,000–2,000 mg/dL.\nChylomicrons are very large particles. They cannot cross the endothelium into the arterial intima, so they do not deposit cholesterol in the vessel wall, and atherosclerosis risk is not increased.\nThe danger instead is from the TAG itself: recurrent acute pancreatitis, eruptive xanthomas, lipemia retinalis and hepatosplenomegaly.\n\nTakeaway: Type I = pancreatitis, not atherosclerosis. Chylomicrons are too big to enter the artery wall.",
"w": [
"Type IIa raises LDL, which easily enters the intima, causing premature atherosclerosis.",
"Type III raises atherogenic remnants and causes premature coronary and peripheral vascular disease.",
"Type IV is associated with metabolic syndrome and increased cardiovascular risk.",
"LCAT deficiency with lipoprotein X damages the kidneys and is associated with vascular disease.",
""
],
"src": "lec",
"fig": [
"figs/crs/lp-type1"
]
},
{
"t": "Hyperlipoproteinemias: Types I, IIa, III & IV",
"lv": "Hard",
"s": "A 38-year-old man has yellowish nodules on his elbows and knees and orange-yellow creases in his palms. Total cholesterol and triglycerides are both elevated. Which defect best explains these findings?",
"c": [
"Abnormal apo E, poor remnant clearance",
"Absent LDL receptors with high LDL alone",
"Absent LPL with high chylomicrons only",
"Liver VLDL overproduction alone",
"Defective ABCA1 with low HDL"
],
"a": 0,
"e": "Step 1: The skin findings are specific. Orange-yellow palmar crease xanthomas plus tuberous (tuberoeruptive) xanthomas over the elbows and knees are characteristic of type III, dysbetalipoproteinemia.\nStep 2: Type III is caused by abnormal apo E (usually E2/E2), which cannot bind hepatic receptors, so chylomicron remnants and IDL are not cleared.\nStep 3: Remnants carry both cholesterol and TAG, so both are raised to a similar degree, matching his labs. He is also at risk of premature coronary and peripheral vascular disease.\n\nTakeaway: Palmar + tuberous xanthomas + ↑ cholesterol AND ↑ TAG = type III (apo E defect).",
"w": [
"",
"Absent LDL receptors (FH) raise mainly LDL cholesterol and cause tendon xanthomas, not palmar xanthomas.",
"Absent LPL (type I) causes eruptive xanthomas with mainly very high TAG.",
"Liver VLDL overproduction (type IV) raises mainly TAG and does not cause palmar xanthomas.",
"Defective ABCA1 (Tangier) causes very low HDL with orange tonsils, not raised cholesterol and TAG."
],
"src": "lec",
"fig": [
"figs/crs/lp-type3"
]
},
{
"t": "Hyperlipoproteinemias: Types I, IIa, III & IV",
"lv": "Hard",
"s": "A 45-year-old man with obesity, type 2 diabetes and heavy alcohol use has severe epigastric pain radiating to his back. His triglycerides are 1,400 mg/dL, and his LDL is near normal. Small yellow papules cover his trunk. Which lipoprotein abnormality best fits?",
"c": [
"Absence of LDL receptors",
"Overproduction of VLDL",
"Defective apo E",
"Loss of ABCA1",
"Absence of apo B-100"
],
"a": 1,
"e": "Step 1: Obesity, type 2 diabetes (insulin resistance) and heavy alcohol use all drive the liver to make more TAG and package it into VLDL.\nStep 2: A very high TAG with near-normal LDL and eruptive xanthomas (small yellow papules on the trunk) fits type IV, familial hypertriglyceridemia, from VLDL overproduction.\nStep 3: TAG above about 1,000 mg/dL causes acute pancreatitis. His epigastric pain radiating to the back is the classic presentation.\n\nTakeaway: Metabolic syndrome or alcohol + very high TAG + eruptive xanthomas → type IV (VLDL overproduction) → risk of pancreatitis.",
"w": [
"Absent LDL receptors raise LDL, but his LDL is near normal.",
"",
"Defective apo E raises remnants, giving high cholesterol and TAG with palmar xanthomas.",
"Loss of ABCA1 lowers HDL (Tangier disease) and does not cause very high TAG.",
"Absence of apo B-100 would lower VLDL and LDL, giving very low lipids."
],
"src": "lec",
"fig": [
"figs/crs/lp-type4-lcat"
]
},
{
"t": "LCAT Deficiency, Fish-Eye, Tangier & Abetalipoproteinemia",
"lv": "Easy",
"s": "Which abnormal lipoprotein is found in patients with LCAT deficiency?",
"c": [
"Lipoprotein a",
"Beta-VLDL",
"Lipoprotein X",
"Small dense LDL",
"Oxidized LDL"
],
"a": 2,
"e": "LCAT normally esterifies the free cholesterol on HDL. Without it:\n• Free cholesterol and phospholipid build up in plasma and form abnormal, non-functional vesicles called lipoprotein X.\n• HDL stays immature and low.\n• Free cholesterol deposits in tissues: the cornea (diffuse clouding), kidneys (proteinuria, renal failure) and red cells (target cells, anemia).\nLipoprotein X is also seen in cholestasis.\n\nTakeaway: LCAT deficiency → ↑ free cholesterol → lipoprotein X, corneal opacity, kidney disease.",
"w": [
"Lp(a) is an LDL-like particle with apo(a) attached, inherited independently and linked to atherosclerosis. It is not from LCAT deficiency.",
"Beta-VLDL is the cholesterol-rich remnant seen in type III.",
"",
"Small dense LDL is seen with high TAG and insulin resistance.",
"Oxidized LDL forms in the arterial intima and drives foam cell formation."
],
"src": "lec",
"fig": [
"figs/crs/lp-type4-lcat"
]
},
{
"t": "LCAT Deficiency, Fish-Eye, Tangier & Abetalipoproteinemia",
"lv": "Easy",
"s": "How does fish-eye disease differ from complete LCAT deficiency?",
"c": [
"It raises HDL levels",
"It causes no corneal change",
"It is an ABCA1 defect",
"It spares the kidneys",
"It causes acanthocytes"
],
"a": 3,
"e": "Both disorders come from LCAT mutations, but they differ in severity:\n• Complete (familial) LCAT deficiency: no LCAT activity on any lipoprotein. Corneal opacities, low HDL, anemia and progressive kidney disease (proteinuria leading to renal failure), with lipoprotein X.\n• Fish-eye disease: partial loss, mainly of LCAT activity on HDL. It causes dense corneal opacities (the 'fish eye') and low HDL but usually spares the kidneys and progresses slowly.\n\nTakeaway: Fish-eye = partial LCAT loss → cornea only. Complete LCAT deficiency = cornea + kidneys + anemia.",
"w": [
"HDL is low in fish-eye disease because cholesterol cannot be esterified to mature HDL.",
"Corneal opacity is its defining feature, which gives the disease its name.",
"ABCA1 defects cause Tangier disease, a different HDL disorder.",
"",
"Acanthocytes are seen in abetalipoproteinemia (MTP defect)."
],
"src": "lec",
"fig": [
"figs/crs/lp-fisheye"
]
},
{
"t": "LCAT Deficiency, Fish-Eye, Tangier & Abetalipoproteinemia",
"lv": "Easy",
"s": "Tangier disease is caused by mutations in which gene?",
"c": [
"LCAT",
"Apo E",
"MTTP",
"LDL receptor",
"ABCA1"
],
"a": 4,
"e": "Tangier disease is an autosomal recessive defect in ABCA1, the transporter that moves free cholesterol and phospholipid from cells onto apo A-I.\nWithout ABCA1:\n• Nascent HDL cannot form, so lipid-poor apo A-I is rapidly cleared and plasma HDL is nearly absent.\n• Cholesterol builds up in macrophages of the reticuloendothelial system: large orange-yellow tonsils, hepatosplenomegaly, peripheral neuropathy and premature atherosclerosis.\n\nTakeaway: Tangier = ABCA1 defect → near-zero HDL + orange tonsils + neuropathy.",
"w": [
"LCAT mutations cause complete LCAT deficiency or fish-eye disease.",
"Apo E mutations cause type III dysbetalipoproteinemia.",
"MTTP mutations cause abetalipoproteinemia.",
"LDL receptor mutations cause familial hypercholesterolemia.",
""
],
"src": "lec",
"fig": [
"figs/crs/lp-tangier"
]
},
{
"t": "LCAT Deficiency, Fish-Eye, Tangier & Abetalipoproteinemia",
"lv": "Easy",
"s": "Abetalipoproteinemia is caused by a defect in which protein?",
"c": [
"Microsomal TG transfer protein",
"Lipoprotein lipase",
"Lecithin-cholesterol acyltransferase",
"Cholesteryl ester transfer protein",
"Apolipoprotein E"
],
"a": 0,
"e": "Microsomal triglyceride transfer protein (MTTP) loads lipid onto apo B-48 in enterocytes and apo B-100 in hepatocytes. Without it, the cell cannot assemble or secrete chylomicrons or VLDL, and there is no LDL.\nConsequences:\n• Fat accumulates in enterocytes, causing steatorrhea and failure to thrive.\n• Plasma TAG and cholesterol are extremely low.\n• The fat-soluble vitamins A, D, E and K are malabsorbed. Vitamin E deficiency causes ataxia and retinitis pigmentosa.\n• Abnormal red cell membranes make acanthocytes.\n\nTakeaway: Abetalipoproteinemia = MTTP defect → no apo B lipoproteins → steatorrhea, acanthocytes, vitamin E deficiency.",
"w": [
"",
"LPL deficiency causes type I, with very high chylomicrons, the opposite lipid pattern.",
"LCAT deficiency causes lipoprotein X with corneal and kidney disease.",
"CETP deficiency raises HDL and does not stop chylomicron or VLDL assembly.",
"Apo E defects cause type III remnant accumulation."
],
"src": "lec",
"fig": [
"figs/crs/lp-abeta"
]
},
{
"t": "LCAT Deficiency, Fish-Eye, Tangier & Abetalipoproteinemia",
"lv": "Hard",
"s": "A 6-year-old boy has fatty, foul-smelling stools, an unsteady gait and poor night vision. His blood smear shows red cells with spiky projections, and his serum triglyceride and cholesterol are very low. Which finding is also expected?",
"c": [
"Orange tonsils on examination",
"Fat-filled enterocytes on biopsy",
"Tendon xanthomas on the Achilles",
"Milky plasma after an overnight fast",
"Very high plasma HDL levels"
],
"a": 1,
"e": "Step 1: steatorrhea, acanthocytes, ataxia and night blindness with very low TAG and cholesterol point to abetalipoproteinemia.\nStep 2: MTTP is defective, so no apo B lipoproteins are made.\nStep 3: chylomicrons cannot be released, so fat builds up in enterocytes, and vitamins A, D, E and K are malabsorbed.",
"w": [
"Orange tonsils suggest Tangier disease.",
"",
"Tendon xanthomas suggest FH.",
"Milky plasma suggests type I.",
"Lipids are very low overall."
],
"src": "lec",
"fig": [
"figs/crs/lp-abeta"
]
},
{
"t": "LCAT Deficiency, Fish-Eye, Tangier & Abetalipoproteinemia",
"lv": "Hard",
"s": "A 40-year-old man has corneal clouding, proteinuria and anemia. His plasma has high free cholesterol and very little esterified cholesterol, and an abnormal lipoprotein is present. Which reaction is defective?",
"c": [
"Cholesterol esterification inside cells",
"Cholesterol efflux through ABCA1",
"Cholesterol esterification in plasma",
"LDL uptake by its receptor",
"TAG hydrolysis by LPL"
],
"a": 2,
"e": "Step 1: high free cholesterol with little ester points to a failure to esterify cholesterol in plasma.\nStep 2: LCAT normally makes cholesteryl esters in HDL, so its deficiency leaves lipoprotein X.\nStep 3: free cholesterol deposits in the cornea, kidney and vessels, and kidney disease appears with complete deficiency.",
"w": [
"That is ACAT, which works inside cells.",
"ABCA1 loss causes Tangier disease.",
"",
"That causes FH.",
"That causes type I."
],
"src": "lec",
"fig": [
"figs/crs/lp-type4-lcat",
"figs/crs/lp-fisheye"
]
},
{
"t": "Practice Questions · Lipoproteins (from the slides)",
"s": "A 35-year-old man presents to his primary care physician for a routine check-up. His family history is significant for early-onset coronary artery disease; his father had a myocardial infarction at age 42, and his older brother had a heart attack at 39. On physical examination, the physician notes yellowish plaques on the Achilles tendon and around the eyelids. Laboratory results reveal an elevated total cholesterol of 380 mg/dL (normal <200 mg/dL) and an LDL cholesterol level of 300 mg/dL (normal <130 mg/dL).\nWhich of the following is the most likely diagnosis?",
"ns": true,
"shetty": 1,
"c": [
"Type I hyperlipoproteinemia (Familial hyperchylomicronemia)",
"Type IIa hyperlipoproteinemia (Familial hypercholesterolemia)",
"Type III hyperlipoproteinemia (Dysbetalipoproteinemia)",
"Type IV hyperlipoproteinemia (Familial hypertriglyceridemia)",
"Type V hyperlipoproteinemia (Mixed hyperlipoproteinemia)"
],
"a": 1,
"e": "Early coronary disease in the family, tendon xanthomas on the Achilles, xanthelasma around the eyelids and a very high LDL point to type IIa, familial hypercholesterolemia. It is autosomal dominant and caused by defects in the LDL receptor or apo B-100, so LDL is not cleared.",
"w": [
"Type I raises chylomicrons and TAG and does not raise atherosclerosis risk.",
"",
"Type III raises both cholesterol and TAG and gives palmar and tuberous xanthomas.",
"Type IV raises VLDL and TAG, not LDL.",
"Type V raises chylomicrons and VLDL, mainly TAG."
],
"src": "lec",
"fig": [
"figs/crs/lp-type2a"
]
},
{
"t": "Fabry, Krabbe, MLD & Other Sphingolipidoses",
"s": "<p>A 7-month-old boy is brought to the physician because he cries when his arms and legs are moved and has developed firm lumps beneath the skin over several joints. His parents report that his voice has become increasingly hoarse over the past 2 months. Examination shows limited range of motion and fixed flexion deformities of several fingers and knees, with multiple firm subcutaneous nodules. He has no hepatosplenomegaly. Which of the following enzyme deficiencies is most likely responsible for this patientʼs findings?</p>",
"html": true,
"c": [
"Glucocerebrosidase",
"Ceramidase",
"Sphingomyelinase",
"Arylsulfatase A",
"Hexosaminidase A"
],
"a": 1,
"eh": "<p>Pain with movement, firm subcutaneous nodules, and progressive joint contractures in an infant are the characteristic pattern of Farber disease (Farber lipogranulomatosis). The hoarse voice is another important clue, reflecting accumulation in the laryngeal tissues; absence of hepatosplenomegaly makes disorders classically marked by visceral enlargement, such as Gaucher or Niemann-Pick disease, less likely. Farber disease results from acid ceramidase deficiency, which prevents lysosomal breakdown of ceramide into sphingosine and fatty acid. Ceramide accumulation in tissues produces painful inflammation, subcutaneous nodules, and destructive joint involvement; laryngeal involvement causes hoarseness.</p><p><b>Key takeaways</b></p><p>Farber disease is an autosomal recessive lysosomal storage disorder caused by acid ceramidase deficiency, leading to ceramide accumulation. Its classic pattern is painful, progressively deformed joints, subcutaneous nodules, and hoarseness from laryngeal involvement; severe disease can cause respiratory compromise and is often fatal in early childhood. Ceramidase acts at the final step of sphingolipid degradation, breaking ceramide into sphingosine and a fatty acid. When distinguishing sphingolipidoses, pair the stored substrate and enzyme with the dominant clinical pattern: Gaucher disease causes glucocerebroside accumulation with hepatosplenomegaly, cytopenias, and bone disease; Niemann-Pick disease causes sphingomyelin accumulation with hepatosplenomegaly and often neurologic involvement; Tay-Sachs disease causes GM2 accumulation with progressive neurodegeneration and a cherry-red macula, usually without hepatosplenomegaly; metachromatic leukodystrophy causes sulfatide accumulation and central and peripheral demyelination.</p>",
"usmle": 1,
"src": "usm",
"w": [
"Glucocerebrosidase deficiency causes Gaucher disease, a lysosomal storage disorder with glucocerebroside accumulation. It does not best explain the combination of painful contractures, subcutaneous nodules, and hoarseness, and Gaucher disease commonly features hepatosplenomegaly, cytopenias, and bone pain. It would be favored by hepatosplenomegaly, anemia or thrombocytopenia, and bone crises or characteristic bone lesions. The trap is associating any infantile storage disorder with bone symptoms with Gaucher disease while overlooking the nodules and hoarse voice.",
"",
"Sphingomyelinase deficiency causes Niemann-Pick disease, in which sphingomyelin accumulates, especially in macrophages and the nervous system. The prominent joint contractures and subcutaneous nodules point instead to Farber disease, while the lack of hepatosplenomegaly weighs against the classic visceral presentation of Niemann-Pick disease. Niemann-Pick would be more likely with hepatosplenomegaly and, in severe infantile disease, progressive neurodevelopmental decline; type A may also have a cherry-red macula. The trap is recognizing a sphingolipidosis but failing to match the specific tissue pattern.",
"Arylsulfatase A deficiency causes metachromatic leukodystrophy, a disorder of sulfatide degradation that leads to central and peripheral demyelination. This patient's defining findings are painful joint disease, subcutaneous nodules, and hoarseness rather than progressive neurologic dysfunction such as gait disturbance, ataxia, or regression. Arylsulfatase A deficiency would be favored by progressive motor and cognitive decline with demyelinating features, often after an initially normal period of development. The trap is focusing on the patientʼs young age rather than the characteristic non-neurologic findings.",
"Hexosaminidase A deficiency causes Tay-Sachs disease, with GM2 ganglioside accumulation in neurons. It does not account for painful joint contractures, subcutaneous nodules, or hoarseness; classic infantile Tay-Sachs presents with developmental regression, exaggerated startle, and a cherry-red macula, typically without hepatosplenomegaly. It would be correct in an infant with progressive neurodegeneration and a cherry-red macula. The trap is selecting a familiar infantile sphingolipidosis without matching the clinical phenotype."
]
},
{
"t": "Fabry, Krabbe, MLD & Other Sphingolipidoses",
"s": "<p>A 3-year-old boy is brought to the clinic because of 8 months of progressive difficulty walking and frequent falls. He had previously met developmental milestones but has recently begun using fewer words and needs help with tasks he had performed independently. Examination shows a broad-based gait, increased muscle tone in the legs, and diminished ankle reflexes. Brain MRI shows symmetric abnormalities of cerebral white matter. Which of the following enzyme deficiencies is most likely responsible for this patient's condition?</p>",
"html": true,
"c": [
"β-Glucocerebrosidase deficiency",
"β-Galactocerebrosidase deficiency",
"Hexosaminidase A deficiency",
"Sphingomyelinase deficiency",
"Arylsulfatase A deficiency"
],
"a": 4,
"eh": "<p>Progressive loss of walking ability and language and dependence in previously mastered tasks indicate regression after initially normal development, while symmetric cerebral white-matter abnormalities point to a leukodystrophy with demyelination. The combination of childhood-onset regression, gait difficulty, and diminished ankle reflexes—a clue to peripheral nerve involvement alongside central white-matter disease—is characteristic of metachromatic leukodystrophy (MLD). MLD is caused by arylsulfatase A deficiency, which prevents lysosomal breakdown of sulfatides; their accumulation damages myelin in both the CNS and PNS. The resulting demyelination accounts for the MRI abnormalities and progressive motor and cognitive decline.</p><p><b>Key takeaways</b></p><p>Metachromatic leukodystrophy is an autosomal recessive lysosomal disorder caused by arylsulfatase A deficiency, leading to sulfatide accumulation and demyelination of both the central and peripheral nervous systems. A typical presentation is progressive loss of motor and cognitive abilities, gait impairment, and peripheral neuropathy; MRI shows symmetric white-matter abnormalities. Sulfatides may also accumulate in urine, and affected tissue can show metachromatic granules. Compare the major sphingolipid storage disorders by the accumulated substrate and distinguishing clinical pattern: MLD involves sulfatides and central plus peripheral demyelination; Krabbe disease involves galactocerebroside and psychosine, with toxic injury to oligodendrocytes and globoid cells; Tay-Sachs involves GM2 ganglioside and classically causes a cherry-red macula without hepatosplenomegaly; Niemann-Pick involves sphingomyelin and often causes hepatosplenomegaly, with neurologic involvement in type A. Gaucher disease involves glucocerebroside and commonly presents with macrophage accumulation, hepatosplenomegaly, cytopenias, and bone disease.</p>",
"usmle": 1,
"src": "usm",
"w": [
"β-Glucocerebrosidase deficiency causes Gaucher disease, a lysosomal storage disorder in which glucocerebroside accumulates, especially in macrophages. It does not typically produce this pattern of symmetric white-matter demyelination with progressive neurologic regression. It would be more likely with hepatosplenomegaly, cytopenias, bone pain or crises, and Gaucher cells; neuronopathic forms can cause neurologic symptoms but do not explain this characteristic leukodystrophy pattern. The trap is to associate any progressive neurologic disorder in a child with a sphingolipid storage disease without matching the specific substrate and phenotype.",
"β-Galactocerebrosidase deficiency causes Krabbe disease, in which galactocerebroside and psychosine accumulate and injure oligodendrocytes. Krabbe disease also causes CNS demyelination, so it is a close distractor, but it more often begins in infancy with irritability, feeding difficulty, developmental decline, and marked stiffness or spasms; globoid cells are characteristic. MLD is the better fit for this childhood-onset pattern with peripheral neuropathy suggested by diminished ankle reflexes. Krabbe disease would be supported by an earlier, more severe infantile course and evidence of globoid-cell disease.",
"Hexosaminidase A deficiency causes Tay-Sachs disease, a GM2 gangliosidosis with progressive neuronal dysfunction. Tay-Sachs typically presents in infancy with exaggerated startle, developmental regression, and a cherry-red macula, rather than a leukodystrophy pattern with peripheral neuropathy and symmetric cerebral white-matter abnormalities. It would be favored by a cherry-red spot without hepatosplenomegaly. The trap is focusing on developmental regression alone while overlooking the MRI evidence of white-matter disease.",
"Sphingomyelinase deficiency causes Niemann-Pick disease types A and B, with sphingomyelin accumulation in lysosomes. Type A can cause infantile neurodegeneration, but prominent hepatosplenomegaly and a cherry-red macula are typical clues, and the defining presentation is not this selective CNS-and-PNS demyelination pattern. Type B is predominantly visceral and generally lacks CNS involvement. It would be favored by hepatosplenomegaly, foam cells, or a cherry-red spot, depending on the type.",
""
]
},
{
"t": "Arachidonic Acid Release & PLA2",
"s": "<p>A 34-year-old woman with an inflammatory joint disorder begins glucocorticoid therapy. Her pain and swelling improve, and production of both prostaglandins and leukotrienes decreases. The drug increases the synthesis of a protein that inhibits an enzyme acting on membrane phospholipids upstream of both mediator pathways. Which enzyme is inhibited?</p>",
"html": true,
"c": [
"Cyclooxygenase-1",
"Cyclooxygenase-2",
"5-Lipoxygenase",
"Phospholipase C",
"Phospholipase A2"
],
"a": 4,
"eh": "<p>Glucocorticoid therapy decreases both prostaglandin and leukotriene production, indicating inhibition at a shared upstream step rather than inhibition of either pathway alone. Glucocorticoids induce annexin-1 (lipocortin), which inhibits phospholipase A₂ (PLA₂ ). PLA₂ cleaves membrane phospholipids to release arachidonic acid, the common precursor for cyclooxygenase-derived prostaglandins and lipoxygenase-derived leukotrienes. Blocking this step therefore reduces both classes of inflammatory mediators.</p><p><b>Key takeaways</b></p><p>Glucocorticoids reduce inflammatory prostaglandins and leukotrienes by inducing annexin-1 (lipocortin), which inhibits phospholipase A₂ and limits release of arachidonic acid from membrane phospholipids. Arachidonic acid is then metabolized by cyclooxygenase enzymes to prostaglandins and thromboxanes, or by lipoxygenases to leukotrienes. NSAIDs inhibit cyclooxygenase and therefore reduce prostaglandin synthesis but do not directly block leukotriene production; selective COX-2 inhibitors preferentially target inflammation-associated prostaglandin synthesis. Zileuton inhibits 5-lipoxygenase, whereas montelukast and zafirlukast block the cysteinyl-leukotriene receptor. Phospholipase C instead generates IP₃ and DAG from PIP₂ for intracellular signaling.</p>",
"usmle": 1,
"src": "usm",
"w": [
"Cyclooxygenase-1 is a constitutively expressed enzyme that converts arachidonic acid into prostaglandin precursors. It would not explain the decrease in leukotrienes, which are produced through the lipoxygenase pathway. COX-1 inhibition is associated with nonselective NSAIDs and reduced physiologic prostaglandin synthesis, including gastric mucosal protection and platelet thromboxane production.",
"Cyclooxygenase-2 is an inducible enzyme that generates prostaglandins during inflammation. Inhibiting COX-2 can reduce inflammatory pain and swelling, but it does not directly reduce leukotriene synthesis because leukotrienes arise through 5-lipoxygenase. This option is tempting because it explains reduced prostaglandins, but the shared upstream inhibition described in the question points to PLA₂ .",
"5-Lipoxygenase converts arachidonic acid into leukotriene intermediates. Its inhibition would decrease leukotrienes but would not account for reduced prostaglandins, which are synthesized through cyclooxygenase enzymes. It would be the relevant target for a leukotriene-synthesis inhibitor such as zileuton.",
"Phospholipase C hydrolyzes phosphatidylinositol 4,5-bisphosphate to form the second messengers diacylglycerol and inositol trisphosphate. Although this enzyme acts on membrane phospholipids, it is not the upstream source of arachidonic acid for both eicosanoid pathways in the mechanism described. The trap is selecting a phospholipase based only on the membrane-phospholipid clue rather than identifying the enzyme that releases arachidonic acid.",
""
]
},
{
"t": "Niemann-Pick Disease",
"s": "<p>A 9-month-old boy is brought to the clinic because of poor weight gain and loss of previously acquired motor skills. He was born at term and had normal development during early infancy. Examination shows a protuberant abdomen and an enlarged liver and spleen. He has decreased muscle tone and does not sit independently. Which of the following enzyme deficiencies most likely accounts for this patientʼs findings?</p>",
"html": true,
"c": [
"Arylsulfatase A",
"β-Hexosaminidase A",
"β-Glucocerebrosidase",
"Galactocerebrosidase",
"Sphingomyelinase"
],
"a": 4,
"eh": "<p>Onset in infancy after initially normal development, loss of previously acquired motor skills, hypotonia, and failure to thrive indicate a progressive neurovisceral storage disorder. The protuberant abdomen and hepatosplenomegaly show substantial visceral lipid accumulation; together with neurologic regression, this pattern points to infantile (type A) Niemann-Pick disease, rather than a predominantly neurologic sphingolipidosis without prominent organ enlargement. Niemann-Pick type A is caused by deficiency of lysosomal acid sphingomyelinase, so sphingomyelin accumulates in macrophages and other tissues, including the liver, spleen, and nervous system. Progressive visceral and CNS involvement leads to abdominal enlargement, poor growth, hypotonia, and developmental regression.</p><p><b>Key takeaways</b></p><p>Infantile Niemann-Pick disease (type A) is caused by acid sphingomyelinase deficiency, leading to lysosomal sphingomyelin accumulation and progressive neurovisceral disease. The combination of infantile developmental regression, failure to thrive, and hepatosplenomegaly is a key pattern; type A has severe CNS involvement, whereas type B has prominent visceral disease with little or no CNS involvement. Foam cells may be seen in affected tissues, and a cherry-red macula can occur but is not unique to Niemann-Pick disease. Distinguish sphingolipidoses by the stored substrate and clinical pattern: Tay-Sachs ( β-hexosaminidase A) causes predominantly neurologic disease without hepatosplenomegaly; Gaucher ( β-glucocerebrosidase) commonly causes hepatosplenomegaly, cytopenias, and bone disease; metachromatic leukodystrophy (arylsulfatase A) causes sulfatide accumulation and CNS/PNS demyelination; and Krabbe disease (galactocerebrosidase) causes psychosine-associated CNS demyelination and globoid cells.</p>",
"usmle": 1,
"src": "usm",
"w": [
"Arylsulfatase A deficiency causes metachromatic leukodystrophy, a disorder of sulfatide degradation. It typically produces progressive central and peripheral demyelination, with findings such as gait difficulty, ataxia, and later neurologic regression; marked hepatosplenomegaly is not its characteristic presentation. It would be favored by progressive motor decline with demyelinating white-matter abnormalities or elevated urinary sulfatides. The trap is focusing on the developmental regression while overlooking the prominent visceral enlargement.",
"β-Hexosaminidase A deficiency causes Tay-Sachs disease, a GM2 gangliosidosis. It causes progressive neurodegeneration in infancy, but classically does not cause hepatosplenomegaly because the disease is predominantly neuronal rather than a visceral storage disorder. It would be suggested by developmental regression with a cherry-red macula and an exaggerated startle response, especially without organomegaly. The neurologic decline is a shared feature, but the enlarged liver and spleen argue against Tay-Sachs.",
"β-Glucocerebrosidase deficiency causes Gaucher disease, in which glucocerebroside accumulates in macrophages. Gaucher disease can cause hepatosplenomegaly and poor growth, but infantile neuronopathic disease is also associated with severe neurologic findings; the enzyme named here is not the cause of the classic infantile neurovisceral syndrome tested by this combination. It would be favored by hepatosplenomegaly with anemia, thrombocytopenia, bone pain or bone crises, and Gaucher cells. A common trap is treating hepatosplenomegaly alone as specific for Gaucher disease rather than considering the associated neurologic pattern and storage material.",
"Galactocerebrosidase deficiency causes Krabbe disease, a lysosomal disorder associated with accumulation of psychosine and galactocerebroside. It produces early irritability, feeding difficulties, developmental decline, and progressive CNS demyelination, but prominent hepatosplenomegaly is not the defining feature. It would be favored by infantile neurologic deterioration with peripheral neuropathy, optic atrophy, or globoid cells on pathology. The trap is selecting a neurologic sphingolipidosis based on regression while giving insufficient weight to the marked visceral storage findings.",
""
]
},
{
"t": "Gaucher Disease",
"s": "<p>A 9-year-old boy is evaluated for fatigue and intermittent pain in his legs. His parents have noticed that his abdomen has gradually become larger over the past year. He was born to parents who are first cousins and has met developmental milestones. Examination shows pallor and enlargement of the liver and spleen. There is no lymphadenopathy or focal neurologic deficit. Radiographs of the femurs show areas of cortical thinning and widening near the distal metaphyses. Which of the following enzyme activities is most likely reduced in this patient?</p>",
"html": true,
"c": [
"Arylsulfatase A",
"Alpha-galactosidase A",
"Beta-hexosaminidase A",
"Sphingomyelinase",
"Glucocerebrosidase"
],
"a": 4,
"eh": "<p>Fatigue, pallor, and hepatosplenomegaly indicate anemia and enlargement of reticuloendothelial organs, while leg pain with cortical thinning and metaphyseal widening points to bone-marrow involvement and skeletal remodeling. The parentsʼ consanguinity supports an autosomal recessive inherited disorder. Together, these findings are characteristic of Gaucher disease, the most common lysosomal storage disorder; unlike the other listed sphingolipidoses, it commonly causes prominent hepatosplenomegaly, cytopenias, and bone crises or chronic bone disease. Gaucher disease results from reduced glucocerebrosidase ( β-glucosidase) activity, causing glucocerebroside to accumulate in macrophages, especially in the liver, spleen, and bone marrow. Lipid-laden macrophages, called Gaucher cells, disrupt marrow function and bone architecture, producing anemia, organ enlargement, and skeletal pain or deformity.</p><p><b>Key takeaways</b></p><p>Gaucher disease is an autosomal recessive lysosomal storage disorder caused by deficient glucocerebrosidase, leading to glucocerebroside accumulation in macrophages. The classic pattern is hepatosplenomegaly, cytopenias from marrow involvement, and skeletal complications such as bone pain, osteopenia, bone crises, and deformity; affected macrophages have fibrillary, “crumpled tissue paper” cytoplasm and are called Gaucher cells. Type 1, the most common form, does not involve the central nervous system; types 2 and 3 have neurologic involvement of increasing severity. Enzyme replacement or substrate reduction therapy can treat non-neuronopathic disease, whereas enzyme replacement does not effectively cross the blood-brain barrier.</p><table class=\"labt\"><tr><th>Disorder</th><th>Enzyme Deficiency</th><th>Distinguishing Pattern</th></tr><tr><td>Gaucher disease</td><td>Glucocerebrosidase</td><td>Hepatosplenomegaly, cytopenias, bone disease</td></tr><tr><td>Niemann-Pick disease</td><td>Sphingomyelinase</td><td>Hepatosplenomegaly; type A has neurodegeneration</td></tr><tr><td>Tay-Sachs disease</td><td>β-Hexosaminidase A</td><td>Neurodegeneration and cherry-red macula; no hepatosplenomegaly</td></tr><tr><td>Fabry disease</td><td>α-Galactosidase A</td><td>X-linked; extremity pain, angiokeratomas, renal and cardiac disease</td></tr><tr><td>Metachromatic leukodystrophy</td><td>Arylsulfatase A</td><td>Demyelination with progressive neurologic dysfunction</td></tr></table>",
"usmle": 1,
"src": "usm",
"w": [
"Arylsulfatase A is the lysosomal enzyme deficient in metachromatic leukodystrophy, an autosomal recessive disorder involving sulfatide accumulation and demyelination of the central and peripheral nervous systems. This child has no neurologic deficits, and the dominant findings are hepatosplenomegaly, anemia, and bone disease. Arylsulfatase A deficiency would be favored by progressive neurologic decline, ataxia, and peripheral neuropathy. The trap is to focus on the consanguinity, which supports recessive inheritance but does not identify the specific disorder.",
"Alpha-galactosidase A is deficient in Fabry disease, an X-linked lysosomal storage disorder. Fabry disease typically causes burning pain in the extremities, angiokeratomas, hypohidrosis, and later renal and cardiac disease; the boyʼs leg pain alone may suggest it, but his marked hepatosplenomegaly, pallor, and characteristic bone changes instead indicate Gaucher disease. Fabry disease would be supported by angiokeratomas and a compatible maternal family history, rather than consanguinity as the key inheritance clue.",
"Beta-hexosaminidase A deficiency causes Tay-Sachs disease, a GM2 gangliosidosis with progressive neurodegeneration. Tay-Sachs typically presents in infancy with developmental regression, exaggerated startle, and a cherry-red macula; hepatosplenomegaly is generally absent. It would be the correct enzyme deficiency in a child with progressive neurologic deterioration and a cherry-red spot, not this patientʼs prominent visceral and skeletal disease. A common trap is to associate any inherited lysosomal storage disorder with this enzyme without matching the organ involvement.",
"Sphingomyelinase deficiency causes Niemann-Pick disease types A and B, in which sphingomyelin accumulates in cells of the reticuloendothelial system. Hepatosplenomegaly can overlap with Gaucher disease, but type A is usually marked by severe neurodegeneration in infancy, and type B commonly features pulmonary involvement; the prominent bone disease and anemia in this vignette favor Gaucher disease. Sphingomyelinase deficiency would be supported by foamy macrophages and, in type A, a cherry-red macula with progressive neurologic decline. The trap is treating hepatosplenomegaly as sufficient to distinguish these storage disorders.",
""
]
},
{
"t": "Zellweger, X-ALD & Refsum",
"s": "<p>A 23-year-old man is evaluated for gradually worsening night vision and difficulty walking in the dark. Over several years, he has also developed numbness in his feet and an unsteady gait. Examination shows diminished distal sensation, impaired tandem walking, and dry, scaly skin on his arms and legs. He reports that he has been unable to smell coffee for as long as he can remember. Which of the following biochemical processes is most likely impaired?</p>",
"html": true,
"c": [
"Peroxisomal import of very-long-chain fatty acids for β-oxidation",
"Mitochondrial transport of long-chain fatty acids for β-oxidation",
"Peroxisomal shortening of very-long-chain fatty acids by β-oxidation",
"Synthesis of ketone bodies from acetyl-CoA in the liver",
"α-Hydroxylation of phytanoyl-CoA during branched-chain fatty acid oxidation"
],
"a": 4,
"eh": "<p>Progressive night-vision difficulty points to retinitis pigmentosa, while distal numbness and impaired tandem walking indicate peripheral neuropathy and cerebellar ataxia. Dry, scaly skin is ichthyosis, and lifelong anosmia is another characteristic clue. Together, this neurocutaneous pattern identifies adult Refsum disease, caused most often by deficient phytanoyl-CoA hydroxylase. Phytanic acid is a branched-chain fatty acid that cannot undergo ordinary β-oxidation until its methyl group is removed; the pathway therefore begins with peroxisomal α-hydroxylation of phytanoyl-CoA. Failure of this step leads to phytanic-acid accumulation, which disrupts neuronal function and produces the neurologic, retinal, and skin manifestations.</p><p><b>Key takeaways</b></p><p>Adult Refsum disease is an autosomal recessive defect in peroxisomal α-oxidation of phytanic acid, classically presenting with retinitis pigmentosa, peripheral neuropathy, cerebellar ataxia, ichthyosis, and anosmia. Phytanic acid is derived from dietary sources including dairy and ruminant products and from chlorophyll-containing foods; its branched structure prevents direct entry into β-oxidation, so α-oxidation is required to permit subsequent breakdown. Most cases involve PHYH, encoding phytanoyl-CoA hydroxylase; PEX7 variants can also impair peroxisomal enzyme import. Accumulated phytanic acid is managed with dietary restriction and, in severe cases, plasma exchange or lipid apheresis. Distinguish fatty-acid oxidation disorders by substrate and cellular location: Refsum disease affects α-oxidation of branched-chain phytanic acid; X-linked adrenoleukodystrophy impairs peroxisomal import of VLCFAs; and mitochondrial carnitine-shuttle disorders impair oxidation of long-chain fatty acids and may cause fasting intolerance, hypoketotic hypoglycemia, or cardiomyopathy.</p>",
"usmle": 1,
"src": "usm",
"w": [
"This describes impaired transport of very-long-chain fatty acids into peroxisomes, classically due to an ABCD1 transporter defect in X-linked adrenoleukodystrophy. That disorder is associated with VLCFA accumulation, cerebral demyelination, and adrenal insufficiency, rather than the characteristic combination of retinitis pigmentosa, ichthyosis, anosmia, and peripheral neuropathy here. It would fit a boy or man with progressive behavioral or neurologic decline, white-matter demyelination, and possibly adrenal failure. The trap is focusing on neurologic disease while overlooking the distinctive Refsum neurocutaneous pattern.",
"This refers to impaired carnitine-dependent transport of long-chain fatty acids into mitochondria for β-oxidation. Such defects impair energy production and can cause fasting-related hypoketotic hypoglycemia, muscle weakness, cardiomyopathy, or hepatic dysfunction, not the progressive sensory, retinal, olfactory, and skin findings described. It would be considered in a patient with metabolic decompensation during fasting or prolonged exercise. The trap is assuming that any fatty-acid oxidation disorder involves mitochondrial transport.",
"This describes defective peroxisomal β-oxidation, which shortens very-long-chain fatty acids. Defects in this process can cause VLCFA accumulation, as in peroxisomal disorders, but Refsum disease is specifically a defect in α-oxidation of branched-chain phytanic acid. It would be more appropriate when VLCFA accumulation accompanies a peroxisomal disorder such as Zellweger spectrum disease. The trap is conflating the peroxisomal location of both pathways with the distinct fatty-acid substrates and reactions they handle.",
"This is hepatic ketogenesis, the production of ketone bodies from acetyl-CoA during fasting. It does not explain phytanic-acid accumulation or the characteristic retinitis pigmentosa, neuropathy, ichthyosis, and anosmia of adult Refsum disease. A defect in ketogenesis would instead be considered in a patient with impaired ketone production and hypoglycemia during fasting. The trap is selecting a general lipid-metabolism process rather than the specific branched-chain fatty-acid pathway implicated by the clinical pattern.",
""
]
},
{
"t": "Fabry, Krabbe, MLD & Other Sphingolipidoses",
"s": "<p>A 5-month-old boy is brought to the physician because of increasing irritability, difficulty feeding, and loss of head control over the past 6 weeks. He was born at term and had met early developmental milestones. Examination shows increased muscle tone and brisk deep tendon reflexes. MRI of the brain shows symmetric abnormalities in cerebral white matter. Which of the following biochemical defects best accounts for this patient's findings?</p>",
"html": true,
"c": [
"Deficiency of arylsulfatase A with sulfatide accumulation",
"Deficiency of galactocerebrosidase with psychosine accumulation",
"Deficiency of beta-hexosaminidase A with GM2 accumulation",
"Deficiency of glucocerebrosidase with glucocerebroside accumulation",
"Deficiency of sphingomyelinase with sphingomyelin accumulation"
],
"a": 1,
"eh": "<p>The onset during infancy after early milestones, followed by irritability, feeding difficulty, and loss of head control, indicates a progressive neurodegenerative disorder. Increased tone and brisk reflexes point to central motor pathway involvement, while symmetric cerebral white-matter abnormalities indicate a leukodystrophy affecting myelin. Together, these findings are characteristic of infantile Krabbe disease, which is caused by deficiency of galactocerebrosidase (galactocerebroside β-galactosidase). The enzyme defect leads to accumulation of galactocerebroside and, especially, psychosine, a cytotoxic metabolite that damages oligodendrocytes and other neural cells, producing CNS demyelination and progressive neurologic decline.</p><p><b>Key takeaways</b></p><p>Krabbe disease is an autosomal-recessive leukodystrophy caused by galactocerebrosidase deficiency; buildup of psychosine injures oligodendrocytes and causes CNS demyelination. Infantile disease typically begins in the first months of life with irritability, feeding difficulty, increased tone, developmental regression, and progressive loss of motor skills. Multinucleated globoid cells in the CNS are characteristic. Metachromatic leukodystrophy also causes demyelination, but results from arylsulfatase A deficiency and sulfatide accumulation, often with prominent peripheral neuropathy.</p><table class=\"labt\"><tr><th>Disorder</th><th>Enzyme Deficiency</th><th>Accumulated Material</th><th>Helpful Distinguishing Clues</th></tr><tr><td>Krabbe disease</td><td>Galactocerebrosidase</td><td>Psychosine and galactocerebroside</td><td>Infantile irritability and CNS demyelination; globoid cells</td></tr><tr><td>Metachromatic leukodystrophy</td><td>Arylsulfatase A</td><td>Sulfatides</td><td>Demyelination often involving CNS and PNS; metachromatic granules</td></tr><tr><td>Tay-Sachs disease</td><td>Hexosaminidase A</td><td>GM2 ganglioside</td><td>Neuronal degeneration; cherry-red spot, typically no hepatosplenomegaly</td></tr><tr><td>Gaucher disease</td><td>Glucocerebrosidase</td><td>Glucocerebroside</td><td>Macrophage storage; hepatosplenomegaly, cytopenias, and bone disease</td></tr></table>",
"usmle": 1,
"src": "usm",
"w": [
"Arylsulfatase A deficiency causes metachromatic leukodystrophy, another lysosomal disorder that produces demyelination. It is not the best match for this infantile presentation, which classically points to Krabbe disease and psychosine toxicity; metachromatic leukodystrophy often presents later with gait impairment, ataxia, and peripheral neuropathy. It would be favored by evidence of sulfatide accumulation or a characteristic metachromatic staining pattern. The trap is that both disorders cause symmetric white-matter disease and progressive loss of function.",
"",
"Beta-hexosaminidase A deficiency causes Tay-Sachs disease, with GM2 ganglioside accumulation in neurons. Tay-Sachs can cause developmental regression in infancy, but the characteristic clues are neuronal involvement with a cherry-red macula and exaggerated startle, rather than a primarily symmetric white-matter demyelinating pattern. It would be favored by a cherry-red spot, progressive neurodegeneration, and absence of hepatosplenomegaly. The trap is focusing on infantile regression while overlooking the MRI localization to white matter.",
"Glucocerebrosidase deficiency causes Gaucher disease, with glucocerebroside accumulation in macrophages. The common non-neuronopathic form typically causes hepatosplenomegaly, cytopenias, and bone pain rather than an infantile leukodystrophy. It would be favored by Gaucher cells in marrow or tissue, with a crumpled-tissue-paper cytoplasm; neuronopathic forms can involve the CNS but do not fit this classic white-matter and psychosine-associated pattern. The trap is assuming that any sphingolipid storage disorder with neurologic findings is Gaucher disease.",
"Sphingomyelinase deficiency causes Niemann-Pick disease types A and B, with sphingomyelin accumulation in cells of the reticuloendothelial system and, in type A, neurons. It would be favored by hepatosplenomegaly and, in type A, developmental regression and a cherry-red spot; foam cells may be present. The symmetric white-matter demyelination and characteristic infantile loss of head control point more specifically to Krabbe disease. The trap is treating all infantile lysosomal storage disorders with neurologic decline as interchangeable."
]
},
{
"t": "Niemann-Pick Disease",
"s": "<p>An 18-month-old boy is brought to the clinic because he has become less interactive and has difficulty sitting without support. His parents report that he has had progressive abdominal enlargement over several months. Examination shows an enlarged liver and spleen. He has no history of serious illness and takes no medications. Which of the following lysosomal reactions is most likely impaired?</p>",
"html": true,
"c": [
"Transfer of phosphorylcholine to ceramide",
"Cleavage of ceramide into sphingosine and fatty acid",
"Cleavage of glucocerebroside into glucose and ceramide",
"Removal of terminal N-acetylgalactosamine from GM2 ganglioside",
"Removal of phosphorylcholine from sphingomyelin",
"Removal of sulfate from sulfatide"
],
"a": 4,
"eh": "<p>Progressive loss of interaction and difficulty sitting independently indicate neurodevelopmental regression, while progressive abdominal enlargement with hepatosplenomegaly indicates visceral storage. In an infant with both neurologic and visceral involvement, this pattern points to Niemann-Pick disease type A, caused by lysosomal acid sphingomyelinase deficiency. Sphingomyelinase normally removes the phosphorylcholine group from sphingomyelin, producing ceramide; its deficiency causes sphingomyelin accumulation in lysosomes, including those of neurons, liver, and spleen. The requested impaired reaction is therefore removal of phosphorylcholine from sphingomyelin. The combination of neurologic regression and organomegaly distinguishes the severe infantile form from Niemann-Pick type B, which typically has visceral involvement without prominent CNS disease.</p><p><b>Key takeaways</b></p><p>Niemann-Pick disease type A results from lysosomal acid sphingomyelinase deficiency, impairing removal of phosphorylcholine from sphingomyelin and causing sphingomyelin accumulation with infantile neurodegeneration and hepatosplenomegaly. Sphingolipids are degraded sequentially in lysosomes, and each step requires a specific enzyme; identifying the accumulated substrate helps distinguish the associated storage disease. Type B also involves sphingomyelinase deficiency and visceral storage, but usually lacks substantial CNS involvement.</p><table class=\"labt\"><tr><th>Disorder</th><th>Deficient Enzyme or Reaction</th><th>Typical Distinguishing Pattern</th></tr><tr><td>Niemann-Pick A</td><td>Acid sphingomyelinase; removal of phosphorylcholine from sphingomyelin</td><td>Infantile neurodegeneration and hepatosplenomegaly</td></tr><tr><td>Gaucher disease</td><td>Glucocerebrosidase; glucocerebroside cleavage</td><td>Hepatosplenomegaly, cytopenias, bone disease; neurologic involvement in some forms</td></tr><tr><td>Tay-Sachs disease</td><td>Hexosaminidase A; GM2 degradation</td><td>Neurodegeneration without hepatosplenomegaly</td></tr><tr><td>Metachromatic leukodystrophy</td><td>Arylsulfatase A; sulfatide desulfation</td><td>Progressive CNS and peripheral demyelination</td></tr></table>",
"usmle": 1,
"src": "usm",
"w": [
"This is the synthesis step catalyzed by sphingomyelin synthase, which transfers phosphorylcholine to ceramide to form sphingomyelin. It is not the lysosomal degradation step impaired in Niemann-Pick disease. It would be relevant to a question about sphingomyelin biosynthesis rather than the storage disorder suggested by neurologic regression and hepatosplenomegaly. The trap is focusing on the same phosphorylcholine group while overlooking whether the reaction is adding or removing it.",
"This is the ceramidase-catalyzed breakdown of ceramide into sphingosine and a fatty acid. It is downstream of sphingomyelinase in sphingolipid degradation, so it does not explain the characteristic sphingomyelin accumulation of Niemann-Pick disease. It would be correct if the question specifically described impaired ceramide catabolism. The shared pathway can make this tempting, but the substrate named in the clinical association is sphingomyelin, not ceramide.",
"This reaction is catalyzed by glucocerebrosidase, and its deficiency causes Gaucher disease. Gaucher disease can cause hepatosplenomegaly and, in some forms, neurologic disease, but its characteristic stored substrate is glucocerebroside; type 1 classically presents with visceral disease without primary CNS involvement. This option would be favored by findings such as bone pain or crises, cytopenias, and Gaucher cells. Organomegaly alone is a trap because it occurs in several lysosomal storage diseases.",
"Removal of terminal N-acetylgalactosamine from GM2 ganglioside is a step in ganglioside degradation, mediated by hexosaminidase A with GM2 activator protein. Deficiency causes Tay-Sachs disease, which produces progressive neurodegeneration but typically lacks hepatosplenomegaly because storage is predominantly neuronal rather than visceral. It would be favored by developmental regression, exaggerated startle, and a cherry-red macula without organomegaly. Neurologic decline alone can mislead students toward this option.",
"",
"Removal of sulfate from sulfatide is catalyzed by arylsulfatase A, deficiency of which causes metachromatic leukodystrophy. It causes progressive CNS and peripheral demyelination, with findings such as gait difficulty, ataxia, and peripheral neuropathy, rather than the prominent hepatosplenomegaly described here. It would be favored by a progressive leukodystrophy phenotype and metachromatic sulfatide accumulation. The trap is recognizing neurologic regression without accounting for the visceral storage findings."
]
},
{
"t": "Tay-Sachs & GM2 Gangliosidoses",
"s": "<p>A 7-month-old boy is brought to the physician because he has stopped rolling over and reaching for objects. He was born at term and met early developmental milestones, but over the past 2 months he has become less responsive to sounds and has had several brief episodes of stiffening. Examination shows decreased muscle tone and reduced visual tracking. Fundoscopy shows a pale retina with a contrasting red area at the macula. There is no enlargement of the liver or spleen. Which of the following enzyme-substrate abnormalities best explains this patient's findings?</p>",
"html": true,
"c": [
"Sphingomyelinase deficiency with sphingomyelin accumulation",
"β-Hexosaminidase A deficiency with GM2 ganglioside accumulation",
"Glucocerebrosidase deficiency with glucocerebroside accumulation",
"Arylsulfatase A deficiency with sulfatide accumulation",
"Galactocerebrosidase deficiency with psychosine accumulation"
],
"a": 1,
"eh": "<p>Loss of previously acquired skills after initially normal development, progressive hearing and visual impairment, seizure-like stiffening episodes, and a pale retina with a cherry-red macula indicate a progressive neurodegenerative lysosomal storage disorder. The absence of hepatosplenomegaly favors Tay-Sachs disease over disorders such as Niemann-Pick disease, which commonly causes visceral enlargement. Together, the neurologic regression and cherry-red spot point to GM2 gangliosidosis (Tay-Sachs disease), caused by β-hexosaminidase A deficiency. This enzyme normally degrades GM2 ganglioside; its deficiency causes GM2 accumulation in neurons, including retinal ganglion cells. Swollen, lipid-laden retinal ganglion cells make the surrounding retina appear pale, while the maculaʼs underlying choroidal color remains visible as the contrasting red spot.</p><p><b>Key takeaways</b></p><p>Tay-Sachs disease is an autosomal recessive GM2 gangliosidosis caused by β-hexosaminidase A deficiency, leading to GM2 ganglioside accumulation in neurons. Infants typically develop normally at first, then show progressive neurologic regression, exaggerated startle or seizures, and a cherry-red macula; hepatosplenomegaly is characteristically absent. The cherry-red spot results from pale, swollen retinal ganglion cells surrounding the macula, which leaves the normal red choroidal color visible at the macula. A cherry-red spot is not unique to Tay-Sachs: Niemann-Pick disease can also cause it, but is distinguished by sphingomyelinase deficiency and commonly by hepatosplenomegaly. Other high-yield sphingolipidoses include Gaucher disease (glucocerebrosidase deficiency; glucocerebroside accumulation), metachromatic leukodystrophy (arylsulfatase A deficiency; sulfatide accumulation and demyelination), and Krabbe disease (galactocerebrosidase deficiency; psychosine accumulation and oligodendrocyte injury).</p>",
"usmle": 1,
"src": "usm",
"w": [
"Sphingomyelinase deficiency causes Niemann-Pick disease types A and B, with sphingomyelin accumulation. It is less consistent here because the vignette specifically includes no hepatosplenomegaly; type A also commonly causes a cherry-red spot, so that finding alone can lead students to choose it. Niemann-Pick disease would be favored by a cherry-red spot accompanied by hepatosplenomegaly and, particularly in type A, progressive neurologic deterioration.",
"",
"Glucocerebrosidase deficiency causes Gaucher disease, in which glucocerebroside accumulates in macrophages. It does not best explain this infantʼs progressive neurologic decline and cherry-red spot; Gaucher disease more typically presents with hepatosplenomegaly, cytopenias, and bone pain, although severe neuronopathic forms can occur. This choice would be favored by enlarged liver and spleen, bone crises, or Gaucher cells with a crumpled-tissue-paper appearance. The trap is treating any lysosomal storage disorder with neurologic findings as interchangeable.",
"Arylsulfatase A deficiency causes metachromatic leukodystrophy, with sulfatide accumulation and demyelination in the central and peripheral nervous systems. It can cause regression and motor decline, but a cherry-red macula is not its characteristic clue. This choice would be favored by progressive gait difficulty, ataxia, peripheral neuropathy, and white-matter demyelination, often beginning after a period of normal development. The developmental regression is a shared feature, but the retinal finding points instead to GM2 gangliosidosis.",
"Galactocerebrosidase deficiency causes Krabbe disease, in which psychosine and galactocerebroside accumulate and damage oligodendrocytes. Krabbe disease can begin in infancy with irritability, feeding difficulty, spasticity, and poor head control, but it does not characteristically cause a cherry-red spot. It would be favored by early irritability and feeding problems, progressive spasticity, and globoid cells in the nervous system. The trap is focusing on infantile neurodegeneration without giving the distinctive funduscopic finding sufficient weight."
]
},
{
"t": "Niemann-Pick Disease",
"s": "<p>A 9-month-old boy is brought to the clinic because he has become less able to sit unsupported and no longer reaches for toys. He was born at term and met early developmental milestones. His parents have also noticed increasing abdominal size and poor weight gain over the past several months. Examination shows a distended abdomen with an enlarged liver and spleen. Funduscopic examination shows a pale area surrounding a sharply demarcated red region at the macula. Bone marrow aspirate contains macrophages with abundant, finely vacuolated cytoplasm. Which of the following is the most likely diagnosis?</p>",
"html": true,
"c": [
"Tay-Sachs disease",
"Gaucher disease",
"Niemann-Pick disease type A",
"Krabbe disease",
"Metachromatic leukodystrophy"
],
"a": 2,
"eh": "<p>Regression of previously acquired motor skills indicates progressive neurodegeneration, while hepatosplenomegaly, abdominal distention, and poor weight gain point to substantial visceral lipid storage. The cherry-red macula supports a sphingolipid storage disorder, but is not specific to one disease; the finding that distinguishes Niemann-Pick disease type A is the combination of neurologic deterioration with visceral enlargement and vacuolated, foamy macrophages in the marrow. Type A results from acid sphingomyelinase deficiency, causing sphingomyelin to accumulate in lysosomes of neurons and reticuloendothelial cells. This produces progressive neurodegeneration as well as hepatosplenomegaly and foam cells, matching the full pattern.</p><p><b>Key takeaways</b></p><p>Niemann-Pick disease type A is an infantile lysosomal storage disorder caused by acid sphingomyelinase deficiency, producing sphingomyelin accumulation in neurons and reticuloendothelial cells. The combination of progressive neurodegeneration, hepatosplenomegaly, foam cells, and a cherry-red macula is characteristic; the cherry-red spot also occurs in Tay-Sachs, so visceral involvement helps distinguish the two. Type A is severe and often fatal in early childhood, whereas type B causes prominent visceral disease without the severe CNS involvement typical of type A. Tay-Sachs results from β-hexosaminidase A deficiency and typically causes neurodegeneration and a cherry-red macula without hepatosplenomegaly. Gaucher disease results from glucocerebrosidase deficiency and features macrophages with crumpled tissue-paper cytoplasm, often with bone disease and cytopenias. Krabbe disease and metachromatic leukodystrophy primarily cause demyelination and progressive neurologic dysfunction rather than the prominent visceral storage pattern of Niemann-Pick type A.</p>",
"usmle": 1,
"src": "usm",
"w": [
"Tay-Sachs disease is a GM2 gangliosidosis caused by β-hexosaminidase A deficiency, with progressive neurodegeneration and a cherry-red macula. The retinal finding can suggest Tay-Sachs, but this patientʼs marked hepatosplenomegaly and foamy marrow macrophages favor Niemann-Pick disease; classic Tay-Sachs generally lacks visceral organ enlargement. Tay-Sachs would be more likely in an infant with developmental regression and a cherry-red spot but no hepatosplenomegaly. The trap is treating the cherry-red spot as unique to Tay-Sachs.",
"Gaucher disease is caused by glucocerebrosidase deficiency, leading to glucocerebroside accumulation in macrophages. It can cause hepatosplenomegaly and marrow involvement, but Gaucher cells have characteristic crumpled, tissue-paper-like cytoplasm, and a cherry-red macula with early neuroregression is not the defining pattern. Gaucher disease would be favored by hepatosplenomegaly with anemia, thrombocytopenia, bone pain or bone crises, and Gaucher cells on marrow examination. The trap is focusing on organ enlargement while overlooking the distinctive retinal and neurologic findings and the vacuolated foam cells.",
"",
"Krabbe disease is a leukodystrophy caused by galactocerebrosidase deficiency, with psychosine accumulation and progressive loss of myelin. It can cause infantile developmental regression, but hepatosplenomegaly, a cherry-red macula, and foamy visceral macrophages are not its characteristic combination. Krabbe disease would be suggested by irritability, spasticity, developmental regression, and peripheral neuropathy, often with globoid cells in the brain. The trap is recognizing infantile neurodegeneration without accounting for the visceral storage findings.",
"Metachromatic leukodystrophy is a demyelinating lysosomal disorder caused by arylsulfatase A deficiency and sulfatide accumulation. It causes progressive neurologic deterioration, but does not typically produce hepatosplenomegaly, a cherry-red macula, or foam cells in the marrow. It would be favored by progressive motor and cognitive decline with peripheral neuropathy and symmetric white-matter abnormalities on MRI; elevated urinary sulfatides can support the diagnosis. The trap is choosing a neurodegenerative storage disorder based on regression alone."
]
},
{
"t": "Fabry, Krabbe, MLD & Other Sphingolipidoses",
"s": "<p>A 16-year-old boy is evaluated for episodes of burning pain in his hands and feet that worsen with exercise and hot weather. He has noticed clusters of small, dark-red papules on his lower abdomen and thighs. Urinalysis shows protein, and echocardiography demonstrates thickening of the interventricular septum. His maternal uncle began dialysis in his 30s. Which of the following biochemical defects best accounts for this patient's findings?</p>",
"html": true,
"c": [
"Deficiency of glucocerebrosidase with glucocerebroside accumulation",
"Deficiency of hexosaminidase A with GM2 ganglioside accumulation",
"Deficiency of sphingomyelinase with sphingomyelin accumulation",
"Deficiency of α-galactosidase A with globotriaosylceramide accumulation",
"Deficiency of arylsulfatase A with sulfatide accumulation"
],
"a": 3,
"eh": "<p>Burning pain in the hands and feet triggered by exercise and heat indicates acroparesthesias from small-fiber and autonomic nerve involvement, while clusters of dark-red papules are angiokeratomas. Proteinuria and interventricular septal thickening point to renal and cardiac involvement, and the maternal uncle with early kidney failure supports an X-linked inheritance pattern. Together, these findings identify Fabry disease, an X-linked lysosomal storage disorder caused by deficient α-galactosidase A. The enzyme normally degrades globotriaosylceramide (Gb3, also called ceramide trihexoside); its deficiency causes Gb3 accumulation in vascular endothelial cells and other tissues, producing the characteristic skin, nerve, kidney, and cardiac findings.</p><p><b>Key takeaways</b></p><p>Fabry disease is an X-linked lysosomal storage disorder caused by α-galactosidase A deficiency, leading to globotriaosylceramide (Gb3) accumulation. The classic pattern includes angiokeratomas, heat- or exercise-triggered acroparesthesias, progressive proteinuric kidney disease, and cardiac hypertrophy; affected males may have severe disease, while heterozygous females have variable expression because of X-chromosome inactivation. Gb3 deposition in vascular endothelium, podocytes, cardiomyocytes, and neurons accounts for the multisystem manifestations. Enzyme replacement therapy and the pharmacologic chaperone migalastat (for eligible amenable variants) can reduce substrate burden; advanced renal disease may progress to kidney failure, and cardiac disease can cause arrhythmias and heart failure.</p><table class=\"labt\"><tr><th>Disorder</th><th>Enzyme Deficiency</th><th>Accumulated Substrate</th><th>Classic Clue</th></tr><tr><td>Fabry</td><td>α-Galactosidase A</td><td>Gb3 (globotriaosylceramide)</td><td>Angiokeratomas, acroparesthesias, renal and cardiac disease</td></tr><tr><td>Gaucher</td><td>Glucocerebrosidase</td><td>Glucocerebroside</td><td>Hepatosplenomegaly, cytopenias, bone disease</td></tr><tr><td>Tay-Sachs</td><td>Hexosaminidase A</td><td>GM2 ganglioside</td><td>Neurodegeneration and cherry-red macula</td></tr><tr><td>Niemann-Pick A/B</td><td>Sphingomyelinase</td><td>Sphingomyelin</td><td>Hepatosplenomegaly; type A has severe neurodegeneration</td></tr><tr><td>Metachromatic leukodystrophy</td><td>Arylsulfatase A</td><td>Sulfatides</td><td>Progressive demyelination</td></tr></table>",
"usmle": 1,
"src": "usm",
"w": [
"Glucocerebrosidase deficiency causes Gaucher disease, an autosomal recessive lysosomal storage disorder with glucocerebroside accumulation, especially in macrophages. It does not explain the combination of angiokeratomas, heat- or exercise-triggered distal burning pain, cardiac hypertrophy, and an X-linked family pattern. Gaucher disease would be more likely with hepatosplenomegaly, cytopenias, and bone pain or crises; the trap is recognizing a sphingolipid storage disease without matching its specific phenotype.",
"Hexosaminidase A deficiency causes Tay-Sachs disease through GM2 ganglioside accumulation, predominantly in neurons. This patientʼs renal, cardiac, cutaneous, and peripheral small-fiber findings are not the characteristic pattern of Tay-Sachs. Tay-Sachs would present in infancy with progressive neurodegeneration, developmental regression, and a cherry-red macula, typically without hepatosplenomegaly. The shared category of lysosomal sphingolipid disorders is not sufficient to distinguish the answer.",
"Sphingomyelinase deficiency causes Niemann-Pick disease types A and B, with sphingomyelin accumulation. It does not account for this patient's angiokeratomas, acroparesthesias, septal hypertrophy, and maternal-line history of early renal failure. Niemann-Pick disease would be suggested by hepatosplenomegaly; type A also causes severe neurodegeneration, and type B may cause pulmonary involvement. The trap is focusing on a lysosomal lipid enzyme deficiency while overlooking the distinctive Fabry findings.",
"",
"Arylsulfatase A deficiency causes metachromatic leukodystrophy, in which sulfatides accumulate in the nervous system and damage myelin. This patientʼs prominent skin lesions, painful distal episodes, proteinuria, and cardiac hypertrophy instead indicate a multisystem storage disorder. Metachromatic leukodystrophy would cause progressive central and peripheral demyelination, with motor and cognitive decline, rather than angiokeratomas and renal-cardiac disease. The trap is associating neuropathic symptoms alone with a leukodystrophy."
]
},
{
"t": "MCAD Deficiency & Jamaican Vomiting Sickness",
"s": "<p>A 9-month-old boy is brought to the emergency department after becoming lethargic and vomiting during a febrile illness. He had eaten poorly overnight. Examination shows hepatomegaly without jaundice. Laboratory studies show low plasma glucose, few circulating ketones, and elevated plasma ammonia. Urine testing shows increased dicarboxylic acids. Which of the following best explains the elevated plasma ammonia?</p>",
"html": true,
"c": [
"Increased degradation of purines to uric acid",
"Reduced N-acetylglutamate activation of carbamoyl phosphate synthetase I",
"Decreased conversion of methylmalonyl-CoA to succinyl-CoA",
"Impaired transport of ornithine into mitochondria",
"Increased conversion of glutamate to glutamine"
],
"a": 1,
"eh": "<p>Fever with poor intake and an overnight fast precipitates the episode, while hypoglycemia with few ketones, hepatomegaly, and increased urinary dicarboxylic acids point to impaired fatty acid β-oxidation, classically medium-chain acyl-CoA dehydrogenase deficiency. β-oxidation normally supplies acetyl-CoA during fasting; in this disorder, reduced acetyl-CoA limits both ketone production and synthesis of N-acetylglutamate (NAG). NAG is the required allosteric activator of carbamoyl phosphate synthetase I (CPS I), the rate-limiting enzyme of the hepatic urea cycle. Reduced CPS I activity decreases incorporation of ammonia into carbamoyl phosphate, explaining the hyperammonemia. Thus, the ammonia elevation is secondary to reduced NAG-mediated urea-cycle activity, not a primary defect in an ammonia-processing enzyme.</p><p><b>Key takeaways</b></p><p>Medium-chain acyl-CoA dehydrogenase deficiency classically causes fasting- or illness-triggered hypoketotic hypoglycemia, hepatomegaly, and dicarboxylic aciduria. Impaired β-oxidation reduces acetyl-CoA, limiting ketogenesis and N-acetylglutamate synthesis; because NAG activates CPS I, its reduction slows the first committed step of the urea cycle and can cause hyperammonemia. Infants with suspected fatty acid oxidation disorders should avoid prolonged fasting and receive prompt glucose during acute illness while diagnostic evaluation proceeds. Fatty acid oxidation defects are suggested when glucose is low but ketones are inappropriately low; in contrast, many organic acidemias cause metabolic acidosis with ketosis. MCAD deficiency is commonly detected by elevated octanoylcarnitine (C8) on newborn screening. Acute episodes may include encephalopathy, seizures, or coma, and severe illness can be life-threatening.</p>",
"usmle": 1,
"src": "usm",
"w": [
"Purine degradation produces uric acid, not the main route for detoxifying ammonia. The fasting-associated hypoketotic hypoglycemia and dicarboxylic aciduria indicate impaired fatty acid oxidation, which reduces NAG activation of CPS I. Increased purine breakdown would be relevant to hyperuricemia or gout, but it does not account for this characteristic metabolic pattern. The trap is to associate nitrogen-containing purines with ammonia without identifying the urea-cycle regulation involved.",
"",
"Reduced conversion of methylmalonyl-CoA to succinyl-CoA occurs in methylmalonic acidemia due to methylmalonyl-CoA mutase deficiency or impaired vitamin B12 metabolism. It can cause infantile vomiting, lethargy, and metabolic decompensation, but the vignetteʼs hypoketotic hypoglycemia and elevated urinary dicarboxylic acids specifically favor a fatty acid oxidation defect. Methylmalonic acidemia would be supported by increased methylmalonic acid, often with metabolic acidosis and ketosis. The shared findings of vomiting and lethargy are the likely distractors.",
"Impaired mitochondrial ornithine transport causes hyperornithinemia–hyperammonemia– homocitrullinuria syndrome, a urea-cycle disorder. It can produce hyperammonemia, but it does not explain the hypoketotic hypoglycemia and dicarboxylic aciduria that point to impaired fatty acid β-oxidation. This choice would be supported by elevated plasma ornithine and urinary homocitrulline, often with a history of episodic hyperammonemia. The trap is focusing on hyperammonemia alone instead of integrating the fasting-related metabolic findings.",
"Glutamine synthetase converts glutamate and ammonia into glutamine, so increased activity would generally help sequester ammonia rather than cause hyperammonemia. It does not explain the low ketones, low glucose, or increased urinary dicarboxylic acids. Increased conversion of glutamate to glutamine would be a mechanism of ammonia detoxification, although excessive glutamine accumulation can contribute to cerebral edema in hyperammonemic states. The relevant defect here is reduced urea-cycle activation due to low NAG, not increased glutamine synthesis."
]
},
{
"t": "Plasmalogens & PAF",
"s": "<p>A 19-year-old man develops diffuse pruritic skin lesions, wheezing, and hypotension within minutes of a wasp sting. During the reaction, platelets isolated from a blood sample show increased aggregation and release of serotonin. A lipid mediator is suspected to contribute to these findings. Which of the following best describes the structure of this mediator?</p>",
"html": true,
"c": [
"An arachidonic acid-derived eicosanoid with a five-membered ring",
"A sphingolipid containing a sphingosine backbone and ceramide",
"An acetylated alkyl-ether phospholipid derived from a plasmalogen",
"A phosphatidylinositol-derived molecule containing two fatty acyl chains",
"A cholesterol-derived steroid with four fused carbon rings"
],
"a": 2,
"eh": "<p>Diffuse pruritic skin lesions, wheezing, and hypotension within minutes of a wasp sting indicate acute anaphylaxis, and the increased platelet aggregation with serotonin release specifically points to platelet-activating factor (PAF). PAF is an unusual phospholipid mediator: it is an acetylated alkyl-ether glycerophospholipid derived from a plasmalogen, with a short acetyl group at the sn-2 position. PAF activates platelets and also contributes to bronchoconstriction, increased vascular permeability, and hypotension, explaining its role in severe hypersensitivity reactions.</p><p><b>Key takeaways</b></p><p>Platelet-activating factor (PAF) is an acetylated alkyl-ether glycerophospholipid derived from a plasmalogen and is a potent mediator of anaphylaxis. It promotes platelet aggregation and serotonin release, bronchoconstriction, increased vascular permeability, and hypotension. Its structure is distinguished from arachidonic acid-derived eicosanoids, sphingolipids, phosphatidylinositol, and cholesterol-derived steroids. PAF is produced by inflammatory cells, including platelets, leukocytes, and endothelial cells, and acts through a G-protein-coupled receptor. Do not confuse it with eicosanoids: prostaglandins, thromboxanes, and leukotrienes are synthesized from arachidonic acid, whereas PAF is a phospholipid mediator. Phosphatidylinositol signaling instead yields IP3 and DAG after PIP2 hydrolysis.</p>",
"usmle": 1,
"src": "usm",
"w": [
"This describes an eicosanoid such as a prostaglandin or leukotriene, which is synthesized from arachidonic acid. Eicosanoids can contribute to inflammation and bronchoconstriction, but the platelet aggregation and serotonin release highlighted here identify PAF, which is a phospholipid rather than a five-membered-ring eicosanoid. This option would fit a question asking about prostaglandins or leukotrienes, not the mediator with the characteristic acetylated ether-phospholipid structure.",
"This describes a sphingolipid, whose backbone is sphingosine and whose ceramide core consists of sphingosine linked to a fatty acid. Sphingolipids are important membrane components and signaling molecules, but this structure does not describe PAF. The trap is treating any lipid mediator as a sphingolipid; PAF is instead a glycerophospholipid with an ether linkage.",
"",
"This describes phosphatidylinositol, a glycerophospholipid with two fatty acyl chains and an inositol-containing head group. Phosphatidylinositol can serve as a membrane arachidonic acid reservoir and, when phosphorylated, generate IP3 and DAG through phospholipase C activity, but it is not the mediator implicated by platelet aggregation and serotonin release in anaphylaxis. This choice would fit a question about phosphoinositide signaling or the source of membrane arachidonic acid.",
"This describes a steroid structure, such as cortisol or a sex hormone, characterized by four fused carbon rings. Steroid mediators are synthesized from cholesterol and have different structures and functions from PAF. This would be appropriate for a question about adrenal or gonadal steroid hormones, not an acute platelet-activating phospholipid mediator."
]
},
{
"t": "Tay-Sachs & GM2 Gangliosidoses",
"s": "<p>A 7-month-old boy is brought to the physician because he has become less active and is no longer able to roll over, a skill he had acquired several weeks earlier. He was born at term and met developmental milestones during the first 4 months of life. His parents report that he startles markedly at sudden sounds and has difficulty tracking objects. He has no history of recurrent infections or feeding difficulties. Weight and length are near the 40th percentile. Examination shows generalized hypotonia and reduced visual attention. Funduscopic examination shows pale retinal tissue surrounding a prominent red area at the macula. The liver and spleen are not palpable. Which of the following is the most likely diagnosis?</p>",
"html": true,
"c": [
"Krabbe disease",
"Niemann-Pick disease",
"Tay-Sachs disease",
"Gaucher disease",
"Metachromatic leukodystrophy"
],
"a": 2,
"eh": "<p>Normal development during early infancy followed by regression beginning around 6 months indicates a progressive neurodegenerative disorder. Marked startle response, hypotonia, loss of motor milestones, impaired visual attention, and a cherry-red spot strongly point to Tay-Sachs disease. The cherry-red appearance results when lipid-laden, swollen retinal ganglion cells make the surrounding retina appear pale while the maculaʼs choroid remains visibly red. The absence of hepatosplenomegaly is an important discriminator from several other lysosomal storage diseases, particularly Niemann-Pick disease. Tay-Sachs is caused by β-hexosaminidase A deficiency, leading to GM2 ganglioside accumulation in neurons; progressive neuronal dysfunction explains the motor and visual decline and exaggerated startle response.</p><p><b>Key takeaways</b></p><p>Tay-Sachs disease is an autosomal recessive GM2 gangliosidosis caused by β-hexosaminidase A deficiency, producing GM2 ganglioside accumulation in neurons. Infants typically develop normally at birth, then develop progressive neurologic deterioration beginning in the first year of life, with exaggerated startle, hypotonia, loss of milestones, visual decline, and a cherry-red macula. Hepatosplenomegaly is generally absent, unlike in Niemann-Pick disease. A cherry-red spot reflects pale, swollen retinal tissue surrounding a relatively red macula; it is not unique to Tay-Sachs and also occurs in disorders such as Niemann-Pick disease. Distinguishing associated findings are therefore essential: Tay-Sachs usually lacks organomegaly, whereas Niemann-Pick type A commonly causes hepatosplenomegaly. Tay-Sachs is associated with HEXA mutations on chromosome 15; carrier screening and prenatal diagnosis can use enzyme assays or molecular testing. Severe infantile disease is progressive and commonly leads to death in early childhood.</p>",
"usmle": 1,
"src": "usm",
"w": [
"Krabbe disease is a lysosomal storage disorder caused by deficiency of galactocerebrosidase, with psychosine accumulation and damage to oligodendrocytes and Schwann cells. It can cause infantile developmental regression, hypotonia, and irritability, but the cherry-red spot is not its characteristic finding. Krabbe disease would be more likely with peripheral neuropathy, optic atrophy, or abnormal globoid cells on pathology. The progressive neurologic symptoms alone may tempt students to choose it, but the cherry-red spot specifically favors a GM2 gangliosidosis.",
"Niemann-Pick disease, particularly type A, is caused by acid sphingomyelinase deficiency and can produce neurologic regression and a cherry-red spot. However, hepatosplenomegaly is a prominent feature, and its absence here argues against it. Niemann-Pick disease would be favored by a protuberant abdomen from organ enlargement, often with failure to thrive and foam cells in tissues. The cherry-red spot is a shared clue; the absence of visceral enlargement and the classic Tay-Sachs neurologic pattern distinguish this case.",
"",
"Gaucher disease is caused by glucocerebrosidase deficiency, producing glucocerebroside accumulation in macrophages. It typically causes hepatosplenomegaly, cytopenias, and bone pain or skeletal crises; neurologic involvement occurs in some forms but a cherry-red spot is not the defining clue. Gaucher disease would be more likely with splenic enlargement, anemia or thrombocytopenia, and characteristic Gaucher cells. Students may choose it because it is a familiar sphingolipidosis, but the retinal finding and lack of organomegaly point elsewhere.",
"Metachromatic leukodystrophy is caused by arylsulfatase A deficiency, leading to sulfatide accumulation and progressive demyelination of the central and peripheral nervous systems. It typically presents with gait disturbance, weakness, and loss of motor or cognitive skills, often with white-matter abnormalities on MRI; it does not characteristically cause a cherry-red spot. It would be favored by progressive neurologic decline with demyelination and elevated urinary sulfatides. The general pattern of regression overlaps, but the retinal finding is not explained by this disorder."
]
},
{
"t": "Gaucher Disease",
"s": "<p>A 7-year-old boy is brought to the clinic because of progressive abdominal enlargement, easy bruising, and intermittent pain in his long bones. He has had no developmental regression or seizures. His parents are healthy and unrelated. Examination shows enlargement of the liver and spleen and scattered ecchymoses. He has no focal neurologic deficits. Bone imaging shows areas of reduced mineral density without fracture. Which of the following substances is most likely accumulating in this patient?</p>",
"html": true,
"c": [
"Galactocerebroside",
"GM2 ganglioside",
"Glucocerebroside",
"Sphingomyelin",
"Sulfatide"
],
"a": 2,
"eh": "<p>The combination of progressive hepatosplenomegaly, easy bruising, and long-bone pain points to a lysosomal storage disorder affecting macrophages and the bone marrow. Reduced bone mineral density supports skeletal involvement, while the absence of developmental regression, seizures, or focal neurologic deficits favors a non-neuronopathic presentation over a primary neurodegenerative sphingolipidosis. These findings are characteristic of Gaucher disease, an autosomal-recessive deficiency of lysosomal glucocerebrosidase ( β-glucosidase). The enzyme normally degrades glucocerebroside; its deficiency causes glucocerebroside to accumulate in macrophages, producing Gaucher cells in reticuloendothelial tissues and leading to organ enlargement, cytopenia-related bruising, and bone disease. The lack of neurologic findings is compatible with type 1 Gaucher disease, the common non-neuronopathic form.</p><p><b>Key takeaways</b></p><p>Gaucher disease is an autosomal-recessive lysosomal storage disorder caused by deficient glucocerebrosidase, leading to glucocerebroside accumulation in macrophages. The resulting Gaucher cells cause hepatosplenomegaly, cytopenias (including thrombocytopenia with bruising), bone pain, osteopenia, and sometimes bone crises or avascular necrosis. Type 1 disease is non-neuronopathic; types 2 and 3 have neurologic involvement, with type 2 typically severe and early-onset. Gaucher cells have a characteristic fibrillary, “crumpled tissue paper” appearance. Treatment depends on disease burden and may include enzyme replacement therapy or substrate-reduction therapy; these approaches reduce stored substrate and improve systemic manifestations, although established neurologic disease is difficult to treat because many therapies do not cross the blood-brain barrier. Distinguish Gaucher disease from other sphingolipidoses by pairing the stored material with its enzyme defect and clinical pattern: Tay-Sachs stores GM2 and causes neurodegeneration without hepatosplenomegaly; Niemann-Pick stores sphingomyelin and commonly causes hepatosplenomegaly; Krabbe disease stores galactocerebroside and psychosine with demyelination; metachromatic leukodystrophy stores sulfatide with demyelination.</p>",
"usmle": 1,
"src": "usm",
"w": [
"Galactocerebroside accumulates in Krabbe disease, which results from β-galactocerebrosidase deficiency. Krabbe disease is primarily a demyelinating neurologic disorder, often presenting in infancy with irritability, developmental decline, spasticity, and poor head control; the prominent visceral enlargement, bruising, and bone abnormalities here instead point to Gaucher disease. This choice would fit a patient with progressive neurologic dysfunction and CNS demyelination. The trap is choosing a related cerebroside without matching the characteristic clinical pattern.",
"GM2 ganglioside accumulates in Tay-Sachs disease, caused by hexosaminidase A deficiency. Tay-Sachs classically causes progressive neurodegeneration, exaggerated startle, and a cherry-red macula, typically without hepatosplenomegaly. The absence of neurologic regression and the presence of marked liver and spleen enlargement and bone disease argue against it. GM2 accumulation would be the better choice in a young child with progressive loss of motor and cognitive abilities and a cherry-red macula.",
"",
"Sphingomyelin accumulates in Niemann-Pick disease types A and B because of acid sphingomyelinase deficiency. Type A usually features early, progressive neurologic deterioration with hepatosplenomegaly; type B often has visceral disease without major neurologic involvement, but skeletal findings and the overall presentation here are more characteristic of Gaucher disease. Sphingomyelin would be expected in a patient with Niemann-Pick disease, especially one with a cherry-red macula or foam cells and, in type A, prominent neurologic decline. Hepatosplenomegaly alone can mislead toward this option.",
"Sulfatide accumulates in metachromatic leukodystrophy, caused by arylsulfatase A deficiency. This disorder causes progressive CNS and peripheral nerve demyelination, with findings such as developmental regression, gait difficulty, ataxia, and peripheral neuropathy. The lack of neurologic deficits and the presence of bone pain, reduced bone density, and hepatosplenomegaly favor Gaucher disease. Sulfatide accumulation would be a better fit for a child with progressive motor or cognitive decline and demyelinating features."
]
},
{
"t": "Zellweger, X-ALD & Refsum",
"s": "<p>A 3-month-old boy is brought to the clinic because of poor feeding, decreased spontaneous movement, and two episodes of seizure-like activity. He was born at term to healthy parents who are first cousins. Examination shows hypotonia, a prominent forehead, and an enlarged liver. Imaging reveals multiple small renal cysts. Biochemical testing shows increased very-long-chain fatty acids and reduced plasmalogen levels. Which of the following cellular defects best accounts for these findings?</p>",
"html": true,
"c": [
"Defective transport of fatty acids into mitochondria",
"Impaired formation of functional peroxisomes",
"Defective lysosomal degradation of membrane lipids",
"Impaired synthesis of mitochondrial respiratory complexes",
"Defective transport of cholesterol from lysosomes"
],
"a": 1,
"eh": "<p>The combination of infantile hypotonia, seizures, poor feeding, hepatomegaly, and renal cysts with increased very-long-chain fatty acids and reduced plasmalogens indicates Zellweger syndrome, a severe peroxisome biogenesis disorder. The parents being first cousins supports an autosomal recessive condition. Because functional peroxisomes are absent or severely impaired, cells cannot properly perform peroxisomal oxidation of very-long-chain and branched-chain fatty acids or synthesize plasmalogens. This causes VLCFA accumulation and impaired plasmalogen production, respectively; the multisystem neurologic, hepatic, and renal findings distinguish this global peroxisomal defect from an isolated fatty-acid transport or oxidation defect.</p><p><b>Key takeaways</b></p><p>Zellweger syndrome is a severe autosomal recessive peroxisome biogenesis disorder caused by mutations in PEX genes, producing impaired formation of functional peroxisomes. The characteristic pattern includes neurologic dysfunction and hypotonia, craniofacial abnormalities, hepatomegaly, renal cysts, increased VLCFAs, and decreased plasmalogens. Peroxisomes carry out oxidation of VLCFAs and branched-chain fatty acids and are required for synthesis of plasmalogens, important membrane phospholipids abundant in myelin and other tissues. Distinguish Zellweger syndrome from X-linked adrenoleukodystrophy: both can elevate VLCFAs, but adrenoleukodystrophy is due to an ABCD1 peroxisomal membrane transporter defect and typically features progressive demyelination and adrenal insufficiency rather than the broad congenital multisystem abnormalities and low plasmalogens of Zellweger syndrome. Inheritance and biochemical findings help localize the defect: a broad peroxisomal function failure suggests a biogenesis disorder, whereas an isolated transport defect affects a more specific peroxisomal pathway.</p>",
"usmle": 1,
"src": "usm",
"w": [
"Defective fatty-acid transport into mitochondria is classically associated with carnitine-shuttle disorders, which impair mitochondrial oxidation of long-chain fatty acids. It does not explain reduced plasmalogen levels or the characteristic combination of renal cysts and severe congenital neurologic and hepatic abnormalities. It would be considered with fasting-associated hypoketotic hypoglycemia, cardiomyopathy, or muscle weakness and abnormal carnitine measurements. The trap is to focus on fatty-acid accumulation without recognizing that plasmalogens specifically point to peroxisomal dysfunction.",
"",
"Defective lysosomal degradation of membrane lipids causes lysosomal storage diseases. Those disorders typically produce accumulation of specific sphingolipids or other substrates and may cause neurodegeneration or hepatosplenomegaly, but they do not characteristically cause increased VLCFAs together with reduced plasmalogens. It would be correct when a defined lysosomal enzyme or trafficking defect is associated with substrate accumulation, such as in a sphingolipidosis. The trap is to attribute neurologic decline and organ enlargement to lysosomal storage without accounting for the peroxisomal biochemical pattern.",
"Impaired synthesis of mitochondrial respiratory complexes causes mitochondrial respiratory-chain disease. Such disorders can produce hypotonia, seizures, and poor feeding, but they do not account for the paired findings of increased VLCFAs and reduced plasmalogens, which indicate defective peroxisomal function. It would be considered with evidence of impaired oxidative phosphorylation, such as lactic acidosis or characteristic multisystem energy-failure findings. The neurologic symptoms alone are nonspecific and should not outweigh the highly localizing biochemical results.",
"Defective cholesterol transport from lysosomes is characteristic of Niemann-Pick disease type C, which causes intracellular cholesterol and glycosphingolipid accumulation. It may cause progressive neurologic dysfunction and hepatosplenomegaly, but it does not produce the characteristic combination of elevated VLCFAs and decreased plasmalogens. It would be supported by findings such as vertical supranuclear gaze palsy, ataxia, or hepatosplenomegaly with evidence of abnormal intracellular cholesterol trafficking. The trap is to connect neurologic disease and organ enlargement to a storage disorder while overlooking the biochemical markers of peroxisomal dysfunction."
]
},
{
"t": "Carnitine & CPT Deficiencies",
"s": "<p>A 9-month-old boy is brought to the emergency department after becoming lethargic following a febrile illness and reduced food intake. He has had poor weight gain and decreased muscle tone. Examination shows an enlarged liver and a displaced apical impulse. Laboratory testing shows low blood glucose with no detectable urinary ketones; plasma free carnitine is markedly reduced. Echocardiography shows enlargement of both ventricles with reduced systolic function. Which of the following molecular defects most likely accounts for this patient's findings?</p>",
"html": true,
"c": [
"Deficiency of medium-chain acyl-CoA dehydrogenase",
"Deficiency of hepatic carnitine palmitoyltransferase I",
"Deficiency of muscle carnitine palmitoyltransferase II",
"Deficiency of long-chain 3-hydroxyacyl-CoA dehydrogenase",
"Defect in the SLC22A5 carnitine transporter"
],
"a": 4,
"eh": "<p>The febrile illness with reduced food intake creates a fasting stress, while hypoglycemia without urinary ketones indicates impaired fatty-acid oxidation and ketogenesis. Markedly reduced plasma free carnitine points to a systemic carnitine deficiency, and the hypotonia, hepatomegaly, and biventricular systolic dysfunction reflect inadequate energy supply to skeletal muscle, liver, and myocardium. Together, these findings identify primary systemic carnitine deficiency caused by an autosomal recessive defect in SLC22A5, which encodes the OCTN2 high-affinity carnitine transporter. Impaired cellular uptake and renal reabsorption deplete carnitine in plasma and tissues, limiting the carnitine shuttle that transports long-chain fatty acids into mitochondria for β-oxidation. Reduced ATP production during fasting impairs hepatic gluconeogenesis and ketone production, causing hypoketotic hypoglycemia, while myocardial energy deficiency can cause dilated cardiomyopathy.</p><p><b>Key takeaways</b></p><p>Primary systemic carnitine deficiency is caused by biallelic SLC22A5 variants affecting OCTN2, leading to low plasma and tissue carnitine, impaired mitochondrial entry of long-chain fatty acids, and fasting-related hypoketotic hypoglycemia with muscle and cardiac disease. Infants may develop hypotonia, hepatomegaly, encephalopathy, and dilated cardiomyopathy; illness or fasting can precipitate metabolic decompensation. Treatment is oral carnitine supplementation, avoidance of prolonged fasting, and prompt carbohydrate provision during illness; cardiac function and metabolic status require monitoring. The carnitine shuttle is required to move long-chain fatty acids into mitochondria: CPT I forms acylcarnitine, a translocase carries it across the inner membrane, and CPT II regenerates acyl-CoA in the matrix. Medium-chain fatty acids do not depend on this shuttle, which helps distinguish MCAD deficiency from carnitine-shuttle defects. Primary carnitine deficiency causes low free carnitine, whereas many fatty-acid oxidation enzyme defects instead produce characteristic accumulating acylcarnitines or other metabolites.</p>",
"usmle": 1,
"src": "usm",
"w": [
"Medium-chain acyl-CoA dehydrogenase deficiency is an autosomal recessive defect in mitochondrial oxidation of medium-chain fatty acids. It can cause fasting-triggered hypoketotic hypoglycemia, so the absent ketones may seem to fit; however, it does not explain the markedly reduced free carnitine or the characteristic combination of cardiomyopathy and systemic carnitine depletion as well as an SLC22A5 defect. It would be favored by fasting-associated hypoketotic hypoglycemia with elevated medium-chain acylcarnitines and dicarboxylic acids, often without prominent cardiomyopathy. The trap is treating hypoketotic hypoglycemia as specific to MCAD deficiency.",
"Hepatic carnitine palmitoyltransferase I deficiency impairs formation of long-chain acylcarnitines at the outer mitochondrial membrane in the liver. It can cause fasting hypoketotic hypoglycemia and reduced ketogenesis, but plasma free carnitine is generally not profoundly depleted, and the defect is principally hepatic rather than a systemic transport failure causing prominent cardiac and skeletal muscle involvement. It would be favored by a predominantly hepatic fasting-intolerance phenotype with impaired ketogenesis. The trap is associating any failure of long-chain fatty-acid oxidation with a carnitine transporter defect.",
"Muscle carnitine palmitoyltransferase II deficiency prevents long-chain fatty acids from being converted back to acyl-CoA inside mitochondria. It typically presents with recurrent exercise-or fasting-induced muscle pain, weakness, and myoglobinuria, rather than infantile hypoketotic hypoglycemia with markedly low plasma free carnitine and dilated cardiomyopathy. It would be favored by episodic rhabdomyolysis and dark urine after prolonged exercise or fasting, often with relatively little hepatic involvement. The trap is assuming that a muscle-associated fatty-acid oxidation defect accounts for systemic carnitine depletion.",
"Long-chain 3-hydroxyacyl-CoA dehydrogenase deficiency is a defect in mitochondrial β-oxidation of long-chain fatty acids, often associated with hypoketotic hypoglycemia and cardiomyopathy. Those overlaps make it a close distractor, but it does not explain the markedly reduced plasma free carnitine that points directly to impaired carnitine transport. It would be favored by accumulation of long-chain 3-hydroxyacyl metabolites and findings such as hepatopathy, cardiomyopathy, or retinal disease, without primary systemic carnitine depletion. The trap is prioritizing the cardiac phenotype while overlooking the highly discriminating carnitine result.",
""
]
},
{
"t": "Fabry, Krabbe, MLD & Other Sphingolipidoses",
"s": "<p>A 7-month-old boy is brought to the clinic because he has stopped reaching for objects and has become less able to hold his head upright. He was born at term and achieved early developmental milestones. Examination shows generalized hypotonia, a protruding abdomen, and an enlarged liver and spleen. Radiographs obtained for limited joint mobility show abnormal vertebral bodies and modeling of the long bones. Which of the following enzyme deficiencies most likely accounts for this patient's findings?</p>",
"html": true,
"c": [
"Arylsulfatase A",
"β-Hexosaminidase A",
"Glucocerebrosidase",
"Sphingomyelinase",
"β-Galactosidase"
],
"a": 4,
"eh": "<p>Early normal development followed by loss of motor abilities indicates a progressive neurodegenerative disorder, while hypotonia, hepatosplenomegaly, and abnormal vertebral and long-bone modeling point to a lysosomal storage disease affecting both the nervous system and other tissues. This combination is characteristic of GM1 gangliosidosis, caused by deficiency of lysosomal β-galactosidase; impaired degradation leads to GM1 ganglioside accumulation in neurons and storage in visceral tissues. The skeletal abnormalities and hepatosplenomegaly help distinguish this pattern from predominantly neurologic sphingolipidoses such as Tay-Sachs disease, which typically lacks hepatosplenomegaly and skeletal changes.</p><p><b>Key takeaways</b></p><p>GM1 gangliosidosis is an autosomal recessive lysosomal storage disease caused by β-galactosidase deficiency, leading to GM1 ganglioside accumulation. The infantile form typically presents after initially normal development with progressive neurologic decline, hypotonia, hepatosplenomegaly, and skeletal abnormalities. β-Galactosidase deficiency can also cause a distinct condition, Morquio B syndrome, whose predominant feature is skeletal dysplasia with comparatively little neurologic involvement. Lysosomal storage disorders are often distinguished by the substrate that accumulates and the combination of neurologic, visceral, and skeletal findings. Tay-Sachs ( β-hexosaminidase A deficiency) causes GM2 accumulation and classically has a cherry-red macula without hepatosplenomegaly; Gaucher disease (glucocerebrosidase deficiency) commonly causes hepatosplenomegaly, cytopenias, and bone disease; Niemann-Pick disease (sphingomyelinase deficiency) can cause neurologic decline and hepatosplenomegaly; and metachromatic leukodystrophy (arylsulfatase A deficiency) causes sulfatide accumulation with central and peripheral demyelination.</p>",
"usmle": 1,
"src": "usm",
"w": [
"Arylsulfatase A deficiency causes metachromatic leukodystrophy, a disorder in which sulfatides accumulate and demyelinate the central and peripheral nervous systems. It does not best explain the prominent hepatosplenomegaly and skeletal modeling abnormalities described here. It would be more likely with progressive gait and speech difficulties, ataxia, and peripheral neuropathy. The trap is focusing on developmental regression without accounting for the visceral and skeletal findings.",
"β-Hexosaminidase A deficiency causes Tay-Sachs disease, with GM2 ganglioside accumulation and progressive neurologic deterioration. Tay-Sachs can cause regression after initially normal development, but classically has a cherry-red macula and lacks hepatosplenomegaly; skeletal abnormalities are not the defining pattern. It would be favored by an infant with exaggerated startle, progressive loss of motor skills, and a cherry-red spot without visceral enlargement. Regression alone can make this choice tempting.",
"Glucocerebrosidase deficiency causes Gaucher disease, in which glucocerebroside accumulates, especially in macrophages. Hepatosplenomegaly and bone disease can occur in Gaucher disease, but the infant's prominent progressive neurologic regression and hypotonia point more strongly to a neuronopathic lysosomal storage disorder such as GM1 gangliosidosis. Gaucher disease would be supported by cytopenias, bone pain or crises, and Gaucher cells in a patient with visceral enlargement. The trap is treating hepatosplenomegaly and skeletal findings as specific to Gaucher disease while overlooking the neurologic pattern.",
"Sphingomyelinase deficiency causes Niemann-Pick disease types A or B, with sphingomyelin accumulation. Type A can cause infantile neurologic deterioration and hepatosplenomegaly, but the characteristic pattern does not include the prominent dysostosis and long-bone modeling abnormalities described here. It would be favored by an infant with developmental regression, hepatosplenomegaly, and a cherry-red macula, particularly when skeletal changes are absent. Visceral enlargement plus regression is the tempting overlap.",
""
]
},
{
"t": "Fabry, Krabbe, MLD & Other Sphingolipidoses",
"s": "<p>A 5-year-old boy who had met early developmental milestones is brought to the clinic because of 8 months of worsening clumsiness and difficulty speaking. He has increasingly frequent falls and needs help climbing stairs. Examination shows a broad-based gait, diminished deep-tendon reflexes, and mild weakness of the distal lower extremities. Nerve-conduction studies show slowed conduction velocities, and brain MRI shows bilateral symmetric abnormalities in cerebral white matter. A lysosomal enzyme defect is suspected. Which of the following molecules is most likely to accumulate in this patient?</p>",
"html": true,
"c": [
"Glucocerebroside",
"GM2 ganglioside",
"Sulfatide",
"Sphingomyelin",
"Galactocerebroside"
],
"a": 2,
"eh": "<p>The key findings are progressive clumsiness, falls, difficulty speaking, and a broad-based gait, indicating cerebellar or long-tract dysfunction, together with diminished reflexes and slowed nerve-conduction velocities, which point to peripheral demyelination. Bilateral symmetric cerebral white-matter abnormalities support a leukodystrophy, and the suspected lysosomal enzyme defect narrows the diagnosis to a lysosomal storage disorder affecting myelin. This pattern is characteristic of metachromatic leukodystrophy, caused most often by deficiency of arylsulfatase A; impaired lysosomal breakdown of sulfatides leads to their accumulation in the CNS and PNS, producing central and peripheral demyelination. Therefore, sulfatide is the accumulating molecule.</p><p><b>Key takeaways</b></p><p>Metachromatic leukodystrophy is a lysosomal storage disease caused most often by arylsulfatase A deficiency, leading to sulfatide accumulation and demyelination in both the CNS and PNS. Progressive gait and speech difficulties, symmetric cerebral white-matter abnormalities, and peripheral neuropathy with slowed nerve conduction are characteristic clues. Sulfatides are sulfate-containing derivatives of galactocerebroside that are abundant in myelin; their storage gives the disease its name because the accumulated granules show metachromasia with certain stains.</p><table class=\"labt\"><tr><th>Disorder</th><th>Deficient Enzyme</th><th>Accumulating Substrate</th><th>High-Yield Pattern</th></tr><tr><td>Metachromatic leukodystrophy</td><td>Arylsulfatase A</td><td>Sulfatide</td><td>CNS and PNS demyelination; ataxia and peripheral neuropathy</td></tr><tr><td>Krabbe disease</td><td>Galactocerebrosidase</td><td>Galactocerebroside and psychosine</td><td>Early-onset demyelination; globoid cells</td></tr><tr><td>Tay-Sachs disease</td><td>Hexosaminidase A</td><td>GM2 ganglioside</td><td>Neurodegeneration, cherry-red macula, no hepatosplenomegaly</td></tr><tr><td>Niemann-Pick disease types A/B</td><td>Acid sphingomyelinase</td><td>Sphingomyelin</td><td>Neurodegeneration and hepatosplenomegaly, especially type A</td></tr></table>",
"usmle": 1,
"src": "usm",
"w": [
"Glucocerebroside accumulates in Gaucher disease, which is usually caused by deficient glucocerebrosidase. It does not explain this questionʼs combined central white-matter disease and peripheral demyelinating neuropathy. It would be the correct choice in a patient with hepatosplenomegaly, cytopenias, and bone pain or crises from Gaucher disease. The trap is choosing a familiar lysosomal storage substrate without matching the neurologic pattern.",
"GM2 ganglioside accumulates in Tay-Sachs disease when hexosaminidase A is deficient. Tay-Sachs classically causes progressive neurodegeneration in infancy, often with exaggerated startle and a cherry-red macula, but without the prominent peripheral neuropathy and slowed nerve-conduction velocities described here. It would be a stronger choice in an infant with developmental regression, seizures, and a cherry-red macula. The trap is associating any childhood neurodegeneration with a ganglioside storage disorder.",
"",
"Sphingomyelin accumulates in Niemann-Pick disease types A and B due to acid sphingomyelinase deficiency. Type A typically presents in infancy with neurodegeneration, hepatosplenomegaly, and sometimes a cherry-red macula; that pattern does not fit the leukodystrophy with peripheral demyelination in this question. It would be correct in a child with hepatosplenomegaly and progressive neurologic decline due to sphingomyelin storage. The trap is focusing on the lysosomal storage clue while overlooking which substrate matches the myelin disease.",
"Galactocerebroside, along with psychosine, accumulates in Krabbe disease due to galactocerebrosidase deficiency. Krabbe disease causes demyelination, but it more often presents in infancy with irritability, feeding difficulty, spasticity, and developmental regression; globoid cells are a characteristic pathologic finding. It would be correct in an infant with early-onset neurodegeneration and evidence of globoid-cell leukodystrophy. The trap is that both Krabbe disease and metachromatic leukodystrophy cause demyelination, so the substrate must be distinguished by the specific enzyme defect and clinical pattern."
]
},
{
"t": "GPI Anchors & PNH",
"s": "<p>A laboratory studies a cell-surface enzyme that moves freely within the plane of the plasma membrane. The enzyme is exposed on the extracellular surface, has no membrane-spanning segment, and is released into the surrounding medium after treatment of intact cells with phospholipase C. Which of the following best describes how this enzyme is attached to the membrane?</p>",
"html": true,
"c": [
"A fatty acid chain inserted into the inner membrane leaflet",
"A transmembrane helix connecting extracellular and cytosolic domains",
"Noncovalent binding to a membrane-associated cytoskeletal protein",
"A carbohydrate bridge to a phosphatidylinositol anchor in the outer leaflet",
"Electrostatic binding to negatively charged membrane phospholipids"
],
"a": 3,
"eh": "<p>The key findings are that the enzyme is exposed on the extracellular surface, lacks a membrane-spanning segment, has lateral mobility, and is released by phospholipase C. Together, these indicate a glycosylphosphatidylinositol (GPI)-anchored protein: the protein is covalently linked through a carbohydrate bridge to a phosphatidylinositol-containing anchor embedded in the outer leaflet of the plasma membrane. Phospholipase C cleaves the phospholipid portion of the GPI anchor, releasing the attached protein. This distinguishes the enzyme from transmembrane proteins, which have membrane-spanning regions, and from peripheral proteins held by noncovalent interactions.</p><p><b>Key takeaways</b></p><p>GPI-anchored proteins are attached to the outer leaflet of the plasma membrane through a carbohydrate bridge to a phosphatidylinositol-containing lipid anchor; they can move laterally and may be released when phospholipase C cleaves the anchor. This arrangement allows a protein to be displayed extracellularly without a transmembrane segment. Examples include alkaline phosphatase, acetylcholinesterase, and decay-accelerating factor (CD55). Defective GPI-anchor synthesis due to an acquired PIGA mutation causes paroxysmal nocturnal hemoglobinuria. Blood cells then lack GPI-anchored complement-regulatory proteins, especially CD55 and CD59, making erythrocytes susceptible to complement-mediated intravascular hemolysis and increasing thrombosis risk.</p>",
"usmle": 1,
"src": "usm",
"w": [
"A fatty acyl chain can anchor certain proteins to the cytosolic face of the membrane. This does not fit an enzyme exposed on the extracellular surface and released by phospholipase C acting on a GPI anchor. It would be appropriate for a protein attached to the inner leaflet by lipid modification, such as myristoylation or palmitoylation. The trap is to associate any lipid-based membrane attachment with the correct answer, without accounting for which leaflet the protein faces or the specific enzyme that releases it.",
"A transmembrane helix anchors an integral membrane protein by spanning the lipid bilayer. The question explicitly states that the enzyme has no membrane-spanning segment, and cleavage of a GPI anchor—not a transmembrane helix—explains its release after phospholipase C treatment. This option would fit a protein with an extracellular domain connected through a hydrophobic membrane-spanning segment to an intracellular domain.",
"Noncovalent association with a membrane-associated protein describes an indirectly attached peripheral membrane protein. Such an association does not explain release by cleavage of a phosphatidylinositol-containing anchor. This choice could fit a surface protein tethered to a transmembrane partner or cytoskeletal component and released by disrupting their protein-protein interaction. The trap is to interpret lateral mobility alone as evidence of a peripheral protein; the phospholipase C result is more specific.",
"",
"Electrostatic interactions can reversibly associate peripheral proteins with charged phospholipid head groups. They do not create a carbohydrate-linked lipid anchor, so they do not account for the enzymeʼs release after phospholipase C treatment. This choice would fit a protein whose charged regions bind membrane lipids and whose association is disrupted by changes in ionic conditions. The extracellular orientation and enzyme-specific release point instead to a GPI anchor."
]
},
{
"t": "GPI Anchors & PNH",
"s": "<p>A 34-year-old man has a 6-month history of fatigue and episodes of dark urine that are most noticeable upon waking. He recently developed abdominal pain; imaging shows thrombosis of a hepatic vein. His hemoglobin concentration is low, and a direct antiglobulin test is negative. There is no family history of blood disorders. Which of the following molecular defects best accounts for this patientʼs findings?</p>",
"html": true,
"c": [
"Inherited deficiency of a red-cell membrane cytoskeletal protein",
"Acquired mutation disrupting globin-chain synthesis",
"Inherited defect in an enzyme protecting against oxidative stress",
"Acquired mutation impairing synthesis of a membrane glycolipid anchor",
"Acquired mutation increasing red-cell sensitivity to splenic sequestration"
],
"a": 3,
"eh": "<p>The key findings are episodic dark urine most noticeable on waking, hemolytic anemia, a negative direct antiglobulin test, and hepatic vein thrombosis. Together, these indicate paroxysmal nocturnal hemoglobinuria (PNH), an acquired, nonimmune intravascular hemolytic disorder with a strong tendency toward unusual-site venous thrombosis. The negative antiglobulin test argues against antibody-mediated hemolysis, while the absence of a family history fits an acquired rather than inherited defect. PNH results from an acquired somatic mutation in PIGA in a hematopoietic stem cell; impaired PIGA function disrupts synthesis of the glycosylphosphatidylinositol (GPI) anchor. Blood cells therefore lack GPI-anchored complement-regulatory proteins, especially CD55 and CD59. Without these regulators, complement damages red cells and promotes intravascular hemolysis; complement activation and other cellular effects also contribute to thrombosis. The molecular defect asked for is thus impaired synthesis of a membrane glycolipid anchor.</p><p><b>Key takeaways</b></p><p>Paroxysmal nocturnal hemoglobinuria is an acquired clonal hematopoietic stem-cell disorder caused by a somatic PIGA mutation that prevents formation of the GPI anchor. Blood cells consequently lack GPI-anchored complement regulators, especially CD55 (decay-accelerating factor) and CD59 (protectin), making erythrocytes susceptible to complement-mediated intravascular hemolysis. Classic features include Coombs-negative hemolytic anemia, hemoglobinuria, and thrombosis at unusual venous sites, including hepatic veins (Budd–Chiari syndrome); cytopenias may occur because the stem-cell clone affects multiple blood-cell lineages. The name refers to episodic hemoglobinuria that may be noticed in morning urine, not to hemolysis occurring only at night. Terminal complement inhibition with eculizumab or ravulizumab reduces intravascular hemolysis and thrombotic risk; patients need meningococcal vaccination because terminal complement blockade increases susceptibility to Neisseria infections. A C5 inhibitor may not prevent all C3-mediated extravascular hemolysis, and proximal complement inhibitors can be considered in selected cases. Allogeneic hematopoietic stem-cell transplantation can be curative but is generally reserved for severe marrow failure or other specific indications. PNH is also associated with aplastic anemia and myelodysplastic syndromes.</p>",
"usmle": 1,
"src": "usm",
"w": [
"An inherited red-cell membrane cytoskeletal protein defect is characteristic of hereditary spherocytosis or hereditary elliptocytosis. Those disorders cause chronic, usually extravascular hemolysis from splenic destruction of abnormally shaped erythrocytes, often with spherocytes or elliptocytes on the smear and a family history. They do not explain the acquired pattern of hemoglobinuria and hepatic vein thrombosis. This choice would be more plausible with spherocytes, splenomegaly, and a family history; the trap is to associate any chronic hemolytic anemia with a membrane defect.",
"An acquired defect in globin-chain synthesis points to a thalassemia, which is generally caused by inherited globin-gene abnormalities rather than an acquired mutation. Thalassemia produces microcytic, hypochromic anemia and may cause ineffective erythropoiesis, but it does not characteristically cause episodic hemoglobinuria or hepatic vein thrombosis. A thalassemia diagnosis would be supported by marked microcytosis, target cells, and appropriate hemoglobin electrophoresis findings.",
"An inherited defect in an enzyme that protects red cells from oxidative stress describes glucose-6-phosphate dehydrogenase deficiency. Oxidant stress can trigger episodic hemolysis, often with bite cells or Heinz bodies, but it does not account for the characteristic unusual-site thrombosis of PNH. This choice would fit hemolysis after an oxidant exposure, such as certain drugs, fava beans, or infection, particularly in a patient with a relevant inherited enzyme deficiency. Dark urine alone can tempt students toward G6PD deficiency, but the hepatic vein thrombosis and acquired pattern point to PNH.",
"",
"Increased red-cell sensitivity to splenic sequestration describes an acquired change that is not the defining molecular mechanism of PNH. Splenic sequestration causes pooling and often extravascular clearance, and would not explain complement-mediated intravascular hemolysis with hemoglobinuria and hepatic vein thrombosis. It would be considered in disorders with splenomegaly and evidence of hypersplenism, such as cytopenias from portal hypertension. The trap is focusing on the anemia while overlooking the highly discriminating unusual-site venous thrombosis."
]
},
{
"t": "Cardiolipin & Phosphatidylglycerol",
"s": "<p>A 4-year-old boy is evaluated for poor weight gain and increasing fatigue. He has had two hospitalizations for heart failure due to an enlarged, poorly contracting heart. His absolute neutrophil count has been low on several occasions, and examination shows mild proximal muscle weakness. His maternal uncle died in early childhood after developing similar cardiac problems. Which of the following reactions produces the mitochondrial phospholipid most likely affected in this patient?</p>",
"html": true,
"c": [
"Condensation of CDP-diacylglycerol with phosphatidylglycerol",
"Reaction of CDP-diacylglycerol with glycerol-3-phosphate",
"Reaction of CDP-choline with diacylglycerol",
"Reaction of CDP-ethanolamine with diacylglycerol",
"Exchange of serine for choline in phosphatidylcholine"
],
"a": 0,
"eh": "<p>A young boy with dilated cardiomyopathy, neutropenia, proximal muscle weakness, and a maternal uncle with similar childhood disease suggests Barth syndrome, an X-linked disorder caused by mutations in TAZ (tafazzin). Tafazzin is involved in remodeling cardiolipin, a phospholipid abundant in the inner mitochondrial membrane; the question asks how this affected phospholipid is produced. Cardiolipin, also called diphosphatidylglycerol, is synthesized by condensation of CDP-diacylglycerol with phosphatidylglycerol. Defective cardiolipin remodeling disrupts mitochondrial membrane organization and oxidative phosphorylation, contributing to cardiomyopathy and skeletal myopathy; neutropenia and poor growth are additional characteristic features.</p><p><b>Key takeaways</b></p><p>Barth syndrome is an X-linked disorder of tafazzin that impairs cardiolipin remodeling and is characterized by childhood-onset cardiomyopathy, skeletal myopathy, neutropenia, and poor growth. Cardiolipin (diphosphatidylglycerol) is concentrated in the inner mitochondrial membrane and is synthesized by condensation of CDP-diacylglycerol with phosphatidylglycerol; phosphatidylglycerol itself is produced from CDP-diacylglycerol and glycerol-3-phosphate. Impaired cardiolipin structure compromises mitochondrial function, especially in tissues with high energy requirements. Phospholipid synthesis questions often distinguish pathways by the activated intermediate and product: CDP-choline plus diacylglycerol forms phosphatidylcholine, and CDP-ethanolamine plus diacylglycerol forms phosphatidylethanolamine. Serine head-group exchange with phosphatidylcholine forms phosphatidylserine, whereas cardiolipin is assembled from CDP-diacylglycerol and phosphatidylglycerol.</p>",
"usmle": 1,
"src": "usm",
"w": [
"",
"This is a reaction in the pathway that forms phosphatidylglycerol, a precursor of cardiolipin. It is not the reaction that directly forms cardiolipin, which requires phosphatidylglycerol to condense with CDP-diacylglycerol. It would be relevant if the question asked for phosphatidylglycerol synthesis. The trap is choosing a step that is closely related to the correct pathway but produces the precursor rather than the affected phospholipid.",
"This is the CDP-choline pathway for synthesizing phosphatidylcholine. The clinical pattern instead points to Barth syndrome and the mitochondrial phospholipid cardiolipin, not phosphatidylcholine. This reaction would be the answer if the question asked how phosphatidylcholine is synthesized through the Kennedy pathway. The trap is recognizing a common CDP-activated phospholipid synthesis reaction without matching its product to the mitochondrial disorder.",
"This is the CDP-ethanolamine pathway for synthesizing phosphatidylethanolamine. It does not produce cardiolipin, the phospholipid associated with Barth syndrome. It would be correct if the question asked for the Kennedy-pathway synthesis of phosphatidylethanolamine. The shared use of a CDP-activated head-group intermediate can make this distractor seem plausible, but the reactants and product differ.",
"This describes a base-exchange reaction in which serine replaces choline in phosphatidylcholine to form phosphatidylserine. The patient's findings point to cardiolipin rather than phosphatidylserine. This reaction would fit a question about phosphatidylserine synthesis by head-group exchange. The trap is focusing on the word “exchange” rather than identifying the mitochondrial phospholipid implicated by the clinical pattern."
]
},
{
"t": "Phosphatidylinositol & PIP2 Signaling",
"s": "<p>A 56-year-old man receives an intravenous medication to increase his blood pressure during surgery. In vascular smooth muscle cells, the medication activates a G protein-coupled receptor, followed by an increase in intracellular inositol trisphosphate and diacylglycerol; cytosolic calcium also rises. Which membrane phospholipid is the precursor of the phosphorylated lipid cleaved to generate these messengers and can also serve as a reservoir for arachidonic acid?</p>",
"html": true,
"c": [
"Phosphatidylcholine",
"Phosphatidylethanolamine",
"Phosphatidylserine",
"Phosphatidylinositol",
"Sphingomyelin"
],
"a": 3,
"eh": "<p>The rise in inositol trisphosphate (IP₃ ), diacylglycerol (DAG), and cytosolic calcium identifies signaling through phospholipase C. A Gq-coupled receptor activates phospholipase C, which cleaves phosphatidylinositol 4,5-bisphosphate (PIP₂ ) in the membrane into IP₃ and DAG; IP₃ promotes calcium release from the endoplasmic reticulum, while DAG activates protein kinase C. PIP₂ is a phosphorylated derivative of phosphatidylinositol (PI), which is therefore the requested precursor. PI can also contain arachidonic acid at the sn-2 position, making it a membrane reservoir for this eicosanoid precursor.</p><p><b>Key takeaways</b></p><p>Phosphatidylinositol is the membrane lipid whose phosphorylated derivative, PIP₂ , is cleaved by phospholipase C to produce IP₃ and DAG. This pathway is activated by Gq-coupled receptors: IP₃ releases Ca²⁺ from the endoplasmic reticulum, and DAG activates protein kinase C. Phosphatidylinositol can also store arachidonic acid in its fatty-acyl chains; phospholipase-mediated release of arachidonic acid provides substrate for eicosanoid synthesis, including prostaglandins and leukotrienes.</p><table class=\"labt\"><tr><th>Lipid or Messenger</th><th>Key Role in the Pathway</th></tr><tr><td>Phosphatidylinositol</td><td>Parent lipid; can serve as an arachidonic acid reservoir</td></tr><tr><td>PIP₂</td><td>Phosphorylated substrate for phospholipase C</td></tr><tr><td>IP₃</td><td>Triggers Ca²⁺ release from the endoplasmic reticulum</td></tr><tr><td>DAG</td><td>Activates protein kinase C</td></tr></table>",
"usmle": 1,
"src": "usm",
"w": [
"Phosphatidylcholine is a major membrane glycerophospholipid and a precursor of signaling molecules such as DAG in some pathways. It is not the substrate cleaved by phospholipase C to generate IP₃ and DAG in the classic Gq–PIP₂ pathway. It would be relevant if the question focused on phosphatidylcholine-derived signaling or membrane composition; the trap is recognizing DAG without identifying that the paired IP₃ specifically points to PIP₂ .",
"Phosphatidylethanolamine is a common membrane glycerophospholipid, especially abundant in the inner leaflet of cell membranes. It is not the precursor of PIP₂ and does not yield the characteristic IP₃ -plus-DAG second-messenger pair in this pathway. It would be a plausible choice in a question about membrane phospholipid distribution or ethanolamine-containing lipids.",
"Phosphatidylserine is an anionic membrane phospholipid that helps recruit signaling proteins to the inner membrane leaflet. It is not the precursor cleaved to form IP₃ and DAG, nor is it the classic membrane reservoir tested here for arachidonic acid. It would be relevant to questions about membrane charge, apoptosis-associated externalization, or protein kinase C recruitment; the trap is associating it with intracellular signaling broadly.",
"",
"Sphingomyelin is a sphingophospholipid composed of ceramide and a phosphocholine head group, rather than a glycerophospholipid with an inositol head group. Its breakdown can produce ceramide-related signaling molecules, but it does not generate IP₃ and DAG through the PIP₂ –phospholipase C pathway. It would be relevant in questions about sphingolipid metabolism or ceramide signaling."
]
},
{
"t": "Glycolipid Classes",
"s": "<p>A 27-year-old man develops profuse watery diarrhea and vomiting 2 days after returning from a coastal region. He is afebrile, and stool examination shows no leukocytes or blood. A toxin isolated from the implicated water causes sustained activation of adenylate cyclase in intestinal epithelial cells after binding to their surface. Which of the following best describes the membrane molecule that serves as the toxinʼs binding site?</p>",
"html": true,
"c": [
"A phospholipid with an inositol-containing head group",
"A protein with an attached N-linked carbohydrate chain",
"A ceramide linked to a single glucose residue",
"A sterol esterified to a long-chain fatty acid",
"A ceramide linked to an oligosaccharide containing sialic acid"
],
"a": 4,
"eh": "<p>Profuse watery diarrhea and vomiting without fever, blood, or stool leukocytes indicate a noninvasive, toxin-mediated secretory diarrhea. The toxinʼs sustained activation of adenylate cyclase identifies cholera toxin: its A subunit ADP-ribosylates Gsα , preventing its inactivation and persistently increasing intracellular cAMP, which drives chloride and water secretion into the intestinal lumen. Cholera toxin binds the intestinal surface glycolipid GM1 ganglioside, a glycosphingolipid composed of ceramide linked to an oligosaccharide containing sialic acid (N-acetylneuraminic acid). Thus the binding molecule is a ceramide-based glycolipid with a sialic-acid-containing oligosaccharide.</p><p><b>Key takeaways</b></p><p>Cholera toxin binds the intestinal epithelial ganglioside GM1, a glycosphingolipid made of ceramide linked to an oligosaccharide containing sialic acid. The toxinʼs A subunit ADP-ribosylates Gsα , locking it in an active state; persistent adenylate cyclase activity raises cAMP and promotes intestinal chloride and water secretion, causing profuse watery diarrhea without inflammatory stool findings. Rehydration, especially oral rehydration solution when feasible, is central to treatment because sodium-glucose cotransport remains functional and supports water absorption. Glycosphingolipids are classified by their carbohydrate head groups: cerebrosides contain one sugar, whereas gangliosides contain one or more sialic acid residues. Gangliosides can act as cell-surface receptors for toxins; GM1 is the classic cholera toxin receptor. Distinguish glycolipids, whose sugars attach to ceramide, from glycoproteins, whose sugars attach to proteins.</p><table class=\"labt\"><tr><th>Molecule</th><th>Core Structure</th><th>Distinguishing Feature</th></tr><tr><td>Cerebroside</td><td>Ceramide + one sugar</td><td>Simple glycosphingolipid</td></tr><tr><td>Ganglioside (GM1)</td><td>Ceramide + oligosaccharide</td><td>Contains sialic acid; cholera toxin receptor</td></tr><tr><td>Glycoprotein</td><td>Protein + carbohydrate</td><td>Carbohydrate attached to protein</td></tr></table>",
"usmle": 1,
"src": "usm",
"w": [
"This describes a phosphoinositide, a membrane phospholipid with an inositol-containing head group. It is not the glycolipid receptor used by cholera toxin; the toxin binds GM1 ganglioside. This option would be relevant to questions about phosphatidylinositol signaling and its phosphorylated derivatives, such as PIP2 and IP3. The trap is to focus on intracellular signaling rather than identify the toxinʼs cell-surface binding molecule.",
"This describes a glycoprotein, a protein bearing a covalently attached carbohydrate chain. Cholera toxinʼs relevant receptor is instead a glycolipid, GM1, whose carbohydrate is attached to a ceramide backbone rather than to a protein. A glycoprotein would be the correct category if the question specified a protein-based cell-surface receptor. The trap is that both glycoproteins and glycolipids display carbohydrates at the cell surface.",
"This describes a cerebroside, a glycosphingolipid consisting of ceramide linked to a single sugar. It is not the cholera toxin receptor, which requires the more complex, sialic-acid-containing oligosaccharide of GM1 ganglioside. A single-sugar cerebroside would fit a question asking for a simple glycosphingolipid, such as glucocerebroside or galactocerebroside. The trap is recognizing the ceramide backbone but overlooking the required oligosaccharide and sialic acid.",
"This describes a cholesteryl ester, a storage or transport form of cholesterol rather than a cell-surface glycolipid receptor. It lacks the carbohydrate head group characteristic of GM1, and the toxinʼs binding site is not a sterol ester. Cholesteryl esters would be relevant to questions about lipid storage in cells or cholesterol transport in lipoproteins. The trap is choosing a membrane-associated lipid without matching its structure to the toxin-binding receptor.",
""
]
},
{
"t": "Sphingolipids, Ceramide & Sphingomyelin",
"s": "<p>A 7-year-old boy is evaluated for progressive gait instability and reduced vibration sensation in both feet. Analysis of nerve-cell membrane lipids identifies molecules with a long-chain amino alcohol backbone and either a phosphorylated or carbohydrate-containing head group. In this lipid family, attachment of a long-chain fatty acid to the amino group of the backbone produces which molecule?</p>",
"html": true,
"c": [
"Sphingosine",
"Ceramide",
"Sphingomyelin",
"Phosphatidylcholine",
"Ganglioside"
],
"a": 1,
"eh": "<p>The lipid description identifies sphingolipids, whose core backbone is the long-chain amino alcohol sphingosine. Attaching a long-chain fatty acid to sphingosineʼs amino group by an amide bond (N-acylation) produces ceramide. Ceramide is the central structural precursor: adding a phosphorylcholine head group forms sphingomyelin, whereas adding carbohydrate groups forms glycosphingolipids such as gangliosides. The boyʼs neurologic symptoms may suggest a disorder of myelin or sphingolipid metabolism, but the lead-in asks for the product of this specific structural modification.</p><p><b>Key takeaways</b></p><p>Sphingosine is the long-chain amino alcohol backbone of sphingolipids, and N-acylation with a long-chain fatty acid produces ceramide. Ceramide is the shared precursor for major sphingolipid classes: addition of phosphorylcholine produces sphingomyelin, while addition of sugars produces glycosphingolipids, including gangliosides. Sphingolipids are abundant in cell membranes and especially in myelin. Their lysosomal degradation proceeds stepwise, with specific enzyme deficiencies causing sphingolipidoses; for example, sphingomyelinase deficiency causes Niemann-Pick disease, and glucocerebrosidase deficiency causes Gaucher disease.</p>",
"usmle": 1,
"src": "usm",
"w": [
"Sphingosine is the long-chain amino alcohol backbone of sphingolipids. It is the substrate before a fatty acid is attached; N-acylation of sphingosine forms ceramide. Sphingosine would be the answer if the question asked for the underlying backbone rather than the product of fatty-acid attachment.",
"",
"Sphingomyelin is a sphingolipid formed by adding a phosphorylcholine head group to ceramide. It is not formed by fatty-acid attachment directly to sphingosine, which first yields ceramide. Sphingomyelin would be correct if the question asked for the major phosphocholine-containing sphingolipid of myelin.",
"Phosphatidylcholine is a glycerophospholipid built on a glycerol backbone, with fatty acids and a phosphocholine head group. The question describes a sphingosine backbone, not glycerol, and the addition of a fatty acid to sphingosine forms ceramide. Phosphatidylcholine would be appropriate if the described lipid had a glycerol-based rather than sphingosine-based structure.",
"A ganglioside is a glycosphingolipid consisting of ceramide linked to carbohydrate groups that include one or more sialic acid residues. It is a more complex derivative made after ceramide formation, not the immediate product of attaching a fatty acid to sphingosine. Ganglioside would be correct if the question asked for a ceramide-based lipid with sialic-acid-containing carbohydrate head groups."
]
},
{
"t": "Phospholipid Structure & Synthesis",
"s": "<p>A 43-year-old woman receiving long-term intravenous nutrition develops fatigue. The nutrition formulation contains little choline. Examination shows no jaundice or abdominal tenderness, and ultrasonography shows increased hepatic echogenicity. A liver sample has reduced phosphatidylcholine content. Which of the following biochemical sequences can produce phosphatidylcholine without using free choline as the head-group precursor?</p>",
"html": true,
"c": [
"Choline phosphorylation, CDP activation, and transfer to diacylglycerol",
"Phosphatidylserine decarboxylation, followed by three SAM-dependent methylations",
"Phosphatidic acid phosphorylation, followed by condensation with glycerol",
"Phosphatidylinositol decarboxylation, followed by CDP-dependent activation",
"Phosphatidylethanolamine decarboxylation, followed by transfer of serine"
],
"a": 1,
"eh": "<p>Long-term intravenous nutrition containing little choline and reduced hepatic phosphatidylcholine point to a pathway that can make phosphatidylcholine without directly using free choline. Phosphatidylserine is first decarboxylated to phosphatidylethanolamine; phosphatidylethanolamine then undergoes three sequential methylations, with S-adenosylmethionine (SAM) donating each methyl group, to form phosphatidylcholine. This route bypasses free choline as the head-group precursor. In the liver, reduced phosphatidylcholine can also impair assembly and secretion of VLDL, contributing to hepatic triglyceride accumulation and steatosis.</p><p><b>Key takeaways</b></p><p>Phosphatidylcholine can be synthesized by a choline-dependent CDP-choline pathway or, without free choline as the head-group precursor, by decarboxylating phosphatidylserine to phosphatidylethanolamine and then carrying out three SAM-dependent methylations. The Kennedy pathway uses choline phosphorylation, CDP activation, and transfer to diacylglycerol; the alternative methylation pathway is especially important in the liver. Phosphatidylcholine is a major membrane phospholipid and is needed for hepatic VLDL assembly and secretion. Inadequate choline can therefore reduce phosphatidylcholine availability, impair triglyceride export from hepatocytes, and promote hepatic steatosis. SAM is the methyl donor in the phosphatidylethanolamine-to-phosphatidylcholine conversion, while phosphatidylserine decarboxylation removes the serine carboxyl group to produce phosphatidylethanolamine.</p>",
"usmle": 1,
"src": "usm",
"w": [
"This is the choline-dependent CDP-choline pathway, also called the Kennedy pathway. It requires free choline to be phosphorylated and activated as CDP-choline before transfer to diacylglycerol, so it does not meet the questionʼs requirement to produce phosphatidylcholine without free choline as the precursor. It would be the relevant pathway when dietary or circulating choline is available for phosphatidylcholine synthesis. The trap is to recognize a valid route to phosphatidylcholine but overlook the explicit choline-independent condition.",
"",
"This describes neither the established choline-independent route to phosphatidylcholine nor a complete phosphatidylcholine synthesis pathway. Phosphatidic acid can be converted to diacylglycerol or activated as CDP-diacylglycerol, but phosphorylation followed by condensation with glycerol does not create phosphatidylcholine. It would be relevant to other glycerophospholipid pathways if the correct activated intermediates and head group were specified. The trap is to associate phosphatidic acid with phospholipid synthesis generally and assume it directly yields phosphatidylcholine.",
"This proposes phosphatidylinositol decarboxylation, which is not the pathway that generates phosphatidylcholine. The established choline-independent route begins with phosphatidylserine, not phosphatidylinositol: phosphatidylserine is decarboxylated to phosphatidylethanolamine, which is then methylated. Phosphatidylinositol is synthesized through CDP-diacylglycerol-dependent reactions, but its synthesis does not provide the stated route to phosphatidylcholine. The trap is confusing CDP-dependent phospholipid synthesis with a pathway that uses a different phospholipid as the precursor.",
"This reverses the relevant head-group conversion. Phosphatidylethanolamine is not decarboxylated and then given a serine group to form phosphatidylcholine; instead, phosphatidylserine is decarboxylated to phosphatidylethanolamine, followed by methylation to phosphatidylcholine. Serine exchange with phosphatidylethanolamine can form phosphatidylserine, but that is a different reaction and does not produce phosphatidylcholine. It would be correct to consider serine exchange when asked how phosphatidylserine can be synthesized from phosphatidylethanolamine."
]
},
{
"t": "DPPC, Surfactant & L/S Ratio",
"s": "<p>A male infant is delivered at 29 weeks of gestation after spontaneous preterm labor. Within minutes of birth, he develops rapid breathing, grunting, and intercostal retractions. He requires increasing supplemental oxygen. Chest radiography shows diffuse bilateral fine opacities with air bronchograms. Which of the following physiologic changes most directly contributes to this infantʼs respiratory impairment?</p>",
"html": true,
"c": [
"Increased alveolar surface tension promotes end-expiratory collapse",
"Failure of pulmonary vascular resistance to decrease increases right-to-left shunting",
"Increased airway mucus production obstructs the small bronchioles",
"Reduced pulmonary capillary permeability limits alveolar fluid clearance",
"Increased chest wall rigidity restricts thoracic expansion"
],
"a": 0,
"eh": "<p>Delivery at 29 weeks places the infant at high risk for inadequate pulmonary surfactant, while rapid breathing, grunting, retractions, and increasing oxygen requirement within minutes of birth indicate neonatal respiratory distress. Diffuse bilateral fine opacities with air bronchograms are characteristic of neonatal respiratory distress syndrome (hyaline membrane disease), rather than a focal airway obstruction. Surfactant, produced by type II pneumocytes and rich in dipalmitoylphosphatidylcholine, lowers alveolar surface tension; when it is deficient, surface tension rises, especially during expiration, causing alveolar instability and collapse (atelectasis). The resulting low lung compliance and ventilation-perfusion mismatch increase the work of breathing and impair oxygenation. Thus, increased surface tension causing end-expiratory alveolar collapse is the physiologic change most directly responsible.</p><p><b>Key takeaways</b></p><p>Neonatal respiratory distress syndrome is caused by inadequate surfactant in premature infants and is identified by early respiratory distress with diffuse bilateral reticulogranular opacities and air bronchograms. Surfactant, made by type II pneumocytes and composed mainly of phospholipids including dipalmitoylphosphatidylcholine, reduces alveolar surface tension, stabilizes alveoli at low lung volumes, and improves lung compliance. Deficiency causes end-expiratory atelectasis, increased work of breathing, and intrapulmonary shunting with hypoxemia; damaged alveolar epithelium and protein-rich exudate contribute to hyaline membrane formation. Antenatal corticosteroids accelerate fetal surfactant production when preterm delivery is anticipated, while postnatal management includes respiratory support and exogenous surfactant when indicated. The lecithin-to-sphingomyelin ratio in amniotic fluid is a traditional measure of fetal lung maturity: a ratio above 2 generally indicates maturity, although interpretation depends on gestational context and laboratory method. Distinguish this syndrome from transient tachypnea of the newborn, which results from delayed fetal lung-fluid clearance and more often shows perihilar streaking and fissural fluid, and from meconium aspiration, which typically produces patchy infiltrates and hyperinflation.</p>",
"usmle": 1,
"src": "usm",
"w": [
"",
"Failure of pulmonary vascular resistance to fall after birth can contribute to right-to-left shunting through fetal channels. It does not explain the surfactant-deficiency pattern in this premature infant, whose radiograph and immediate respiratory distress point to diffuse alveolar collapse. This mechanism would be relevant in persistent pulmonary hypertension of the newborn. The trap is confusing a cause of neonatal hypoxemia with the specific mechanism of respiratory distress syndrome.",
"This describes mucus plugging, which can obstruct airflow through small airways. The question instead presents diffuse bilateral lung opacities and air bronchograms in a very premature newborn, findings that indicate widespread alveolar disease rather than primary bronchiolar obstruction. Mucus obstruction would be more plausible with bronchiolitis or another airway-centered illness, often with wheezing, hyperinflation, or patchy atelectasis. The trap is attributing respiratory distress to airway narrowing without accounting for the characteristic prematurity-associated radiographic pattern.",
"Reduced pulmonary capillary permeability would limit movement of fluid into the alveoli, but it is not the mechanism responsible for this presentation. The infant's gestational age and diffuse radiographic findings point to surfactant deficiency and elevated alveolar surface tension, not impaired fluid clearance. Delayed clearance of fetal lung fluid can cause transient tachypnea of the newborn, typically with prominent perihilar streaking and fluid in fissures, especially after cesarean delivery; it is not caused by reduced capillary permeability. The trap is focusing on alveolar fluid as a general cause of neonatal respiratory symptoms.",
"This proposes that a rigid chest wall limits expansion, but it does not account for the diffuse alveolar opacities and air bronchograms or the strong association between very premature birth and surfactant deficiency. The neonatal chest wall is relatively compliant rather than rigid, and reduced compliance in respiratory distress syndrome primarily reflects stiff, unstable lungs with low surfactant. A mechanical restriction would be considered with a chest-wall deformity or another structural limitation to ventilation. The trap is interpreting retractions as evidence that chest-wall rigidity is the primary problem; retractions instead indicate increased work of breathing."
]
},
{
"t": "Gaucher Disease",
"s": "<p>A 12-year-old boy is brought to the clinic because of 8 months of fatigue, easy bruising, and intermittent aching in both thighs. He has had no fever, weight loss, recurrent infections, or changes in school performance. His height and weight are at the 40th percentile. The liver edge is palpable 3 cm below the right costal margin, and the spleen is palpable 8 cm below the left costal margin. There is no lymphadenopathy or focal neurologic deficit. A complete blood count shows anemia and thrombocytopenia; peripheral blood smear shows no abnormal circulating cells. Radiographs of the femurs show diffuse osteopenia and widening of the distal metaphyses without a focal destructive lesion. Which of the following is the most likely diagnosis?</p>",
"html": true,
"c": [
"Acute lymphoblastic leukemia",
"Niemann-Pick disease",
"Osteomyelitis with marrow involvement",
"Gaucher disease",
"Sickle cell disease"
],
"a": 3,
"eh": "<p>Chronic fatigue and easy bruising, anemia and thrombocytopenia, marked hepatosplenomegaly, and bilateral thigh aching point to a systemic process affecting the reticuloendothelial system, bone marrow, and skeleton. The absence of abnormal circulating cells makes leukemia less likely, while the chronic course without fever or focal bone destruction argues against infection. Diffuse osteopenia and metaphyseal widening further support a marrow-infiltrative storage disorder with skeletal involvement. Together, these findings are characteristic of Gaucher disease, an autosomal-recessive deficiency of lysosomal glucocerebrosidase that causes glucocerebroside to accumulate in macrophages, especially in the spleen, liver, and bone marrow. Infiltration of marrow impairs hematopoiesis, producing cytopenias; splenic sequestration can worsen them; and skeletal infiltration disrupts normal bone remodeling, causing bone pain, osteopenia, and metaphyseal deformity.</p><p><b>Key takeaways</b></p><p>Gaucher disease is an autosomal-recessive lysosomal storage disorder in which deficient glucocerebrosidase causes glucocerebroside accumulation in macrophages, particularly in the spleen, liver, and bone marrow. The resulting pattern can include hepatosplenomegaly, anemia and thrombocytopenia from marrow infiltration and splenic sequestration, and skeletal pain, osteopenia, and deformity from disrupted bone remodeling. Gaucher cells have a characteristic fibrillary, “crumpled tissue paper” cytoplasm. Type 1 is the most common form and lacks primary central nervous system involvement; types 2 and 3 have neurologic disease, with type 2 typically severe and early-onset. Diagnosis is supported by low glucocerebrosidase activity and/or pathogenic variants in GBA1. Enzyme replacement therapy and substrate reduction therapy are established treatments for appropriate non-neuronopathic disease; enzyme replacement does not cross the blood-brain barrier and therefore does not treat neurologic manifestations. Niemann-Pick disease is another sphingolipidosis associated with hepatosplenomegaly, but classic type A typically presents in infancy with neurodegeneration and may show a cherry-red macula, helping distinguish it from Gaucher disease.</p>",
"usmle": 1,
"src": "usm",
"w": [
"Acute lymphoblastic leukemia is a malignancy of lymphoid precursor cells that can cause cytopenias, bone pain, and organ enlargement. Those overlapping features may suggest leukemia, but the 8-month course, absence of constitutional symptoms or lymphadenopathy, and lack of abnormal circulating cells make it less compelling; the characteristic diffuse skeletal changes and prominent splenomegaly favor Gaucher disease. ALL would be more likely with circulating blasts or marrow evidence of lymphoblasts, often accompanied by fever, infections, lymphadenopathy, or rapidly progressive symptoms. Bone pain and cytopenias alone are the tempting but nonspecific clues.",
"Niemann-Pick disease is a lysosomal storage disorder caused, in the classic types A and B, by sphingomyelinase deficiency and sphingomyelin accumulation. It can cause hepatosplenomegaly and cytopenias, but classic type A usually presents in infancy with failure to thrive and progressive neurologic deterioration; type B is also usually recognized earlier and does not typically produce this characteristic Gaucher-like bone pattern. Niemann-Pick would be favored by an infant with developmental regression and a cherry-red macula, or by foam cells and reduced sphingomyelinase activity. The shared finding of hepatosplenomegaly is the likely trap.",
"Osteomyelitis is an infection of bone that typically causes localized pain and tenderness, often with fever and inflammatory findings. The chronic bilateral aching and diffuse osteopenia without a focal destructive lesion do not fit focal bone infection, and osteomyelitis would not readily explain marked hepatosplenomegaly with anemia and thrombocytopenia. It would be more likely with focal pain, fever, elevated inflammatory markers, and localized marrow or cortical abnormalities on imaging. The presence of bone pain alone can incorrectly steer attention toward infection.",
"",
"Sickle cell disease is an inherited hemoglobin disorder that causes chronic hemolytic anemia and vaso-occlusive pain. Although it can cause bone pain and anemia, it does not explain this combination of marked splenomegaly, thrombocytopenia, and characteristic diffuse metaphyseal widening; in older children with HbSS, the spleen often becomes small and fibrotic from repeated infarction. Sickle cell disease would be supported by a history of episodic pain crises, hemolysis, dactylitis in early childhood, and hemoglobin electrophoresis showing HbS. The nonspecific pairing of anemia and bone pain is the trap."
]
},
{
"t": "Phospholipid Structure & Synthesis",
"s": "<p>A 19-year-old man is evaluated for fatigue and pallor. A blood smear shows increased numbers of reticulocytes; laboratory studies show elevated indirect bilirubin and lactate dehydrogenase and decreased haptoglobin. In a laboratory study, erythroid precursors and reticulocytes incorporate a labeled phospholipid precursor into membrane lipids, whereas fully mature erythrocytes do not. Which cellular change best accounts for this difference?</p>",
"html": true,
"c": [
"Loss of the endoplasmic reticulum and Golgi apparatus",
"Loss of mitochondria and oxidative phosphorylation",
"Loss of the nucleus and DNA replication",
"Loss of ribosomes and cytosolic translation",
"Loss of lysosomes and intracellular digestion"
],
"a": 0,
"eh": "<p>Erythroid precursors and reticulocytes incorporate the labeled phospholipid precursor, but mature erythrocytes do not, indicating that the capacity for membrane phospholipid synthesis is lost during red-cell maturation. Phospholipids are synthesized primarily in the smooth endoplasmic reticulum and processed through the Golgi before reaching cellular membranes. Mature erythrocytes lack both organelles, so they cannot synthesize new phospholipids; this explains the difference in labeling. Reticulocytes are immature red cells and retain residual biosynthetic machinery that is lost as they mature.</p><p><b>Key takeaways</b></p><p>Mature erythrocytes cannot synthesize new membrane phospholipids because they lack the endoplasmic reticulum and Golgi apparatus, whereas erythroid precursors and reticulocytes retain biosynthetic capacity. Glycerophospholipid synthesis occurs in the smooth endoplasmic reticulum, with subsequent trafficking through the Golgi to cellular membranes. During maturation, reticulocytes lose residual organelles and become anucleate, biconcave cells specialized for gas transport. Mature red cells also lack mitochondria and therefore generate ATP through anaerobic glycolysis; they lack nuclei and ribosomes, so they cannot divide or synthesize new proteins. These losses are related features of erythrocyte maturation, but the organelle directly responsible for phospholipid synthesis is the endoplasmic reticulum.</p>",
"usmle": 1,
"src": "usm",
"w": [
"",
"Mitochondrial loss eliminates oxidative phosphorylation and is part of red-cell maturation. It does not directly account for loss of phospholipid synthesis, which occurs in the endoplasmic reticulum. This choice would be relevant if the question asked why mature erythrocytes rely on glycolysis for ATP or cannot perform oxidative phosphorylation. The trap is selecting a real feature of mature red cells that does not explain the measured membrane-lipid labeling.",
"Loss of the nucleus prevents DNA replication and nuclear gene transcription. Mature erythrocytes do lack a nucleus, but phospholipid synthesis is an enzymatic process associated with the endoplasmic reticulum and Golgi, so nuclear loss is not the best explanation for the specific difference in phospholipid incorporation. This choice would fit a question about why mature erythrocytes cannot divide or transcribe nuclear genes. The trap is confusing a broad loss of cellular function with the specific organelles required for the process being measured.",
"Loss of ribosomes prevents cytosolic translation of proteins. Mature erythrocytes lack ribosomes, but the key machinery for phospholipid synthesis is the smooth endoplasmic reticulum, not ribosomes. This choice would explain why mature red cells cannot synthesize new proteins. Reticulocytes may retain ribosomes transiently, but their presence is not what directly accounts for phospholipid precursor incorporation.",
"Loss of lysosomes would impair intracellular digestion and recycling of cellular material. Lysosomes are not the principal site of phospholipid synthesis, so their loss does not explain the absence of labeled phospholipid incorporation in mature erythrocytes. This choice would be relevant to a question about lysosomal degradation or autophagic processing, not membrane-lipid biosynthesis."
]
},
{
"t": "Carnitine & CPT Deficiencies",
"s": "<p>A 19-year-old man is evaluated after developing severe thigh pain and dark urine following a 3-hour hike. Similar episodes have occurred after long-distance runs and during an illness when he had eaten little. Each episode resolves over several days with rest and hydration. He has no symptoms during routine daily activities and reports no difficulty with brief, intense exercise. He takes no medications and has no history of chronic illness. Between episodes, muscle bulk and strength are normal. During the current episode, urine dipstick testing is positive for blood, but microscopy shows few red blood cells. Which of the following is the most likely diagnosis?</p>",
"html": true,
"c": [
"Myophosphorylase deficiency",
"Carnitine palmitoyltransferase II deficiency",
"Acid alpha-glucosidase deficiency",
"Dystrophin deficiency",
"Mitochondrial myopathy",
"Medium-chain acyl-CoA dehydrogenase deficiency"
],
"a": 1,
"eh": "<p>The episodes follow prolonged endurance exercise and reduced food intake during illness, while brief, intense exercise is tolerated and strength is normal between attacks. A urine dipstick positive for blood with few red blood cells indicates myoglobinuria, supporting exercise-associated muscle breakdown (rhabdomyolysis), rather than urinary tract bleeding. This pattern points to impaired fatty-acid oxidation: during prolonged exercise or fasting, skeletal muscle increasingly relies on fatty acids for energy, whereas brief intense activity can be fueled by stored glycogen. Carnitine palmitoyltransferase II (CPT II) deficiency is a classic cause of recurrent myoglobinuria in adolescents and young adults, with normal baseline muscle strength. CPT II participates in mitochondrial transport of long-chain fatty acids for β-oxidation; deficiency limits this fuel source when demand is sustained, leading to muscle injury and release of myoglobin. Avoiding fasting and prolonged strenuous exercise and maintaining carbohydrate intake help prevent episodes.</p><p><b>Key takeaways</b></p><p>CPT II deficiency is a fatty-acid oxidation disorder that classically causes recurrent myalgia and myoglobinuria after prolonged exercise, fasting, or illness, with normal strength between attacks. Long-chain fatty acids require the carnitine shuttle to enter mitochondria for β-oxidation; impaired CPT II function limits ATP production when muscle depends on fat, especially during sustained activity or reduced carbohydrate availability. A urine dipstick detects heme pigment, so a positive result with few red blood cells suggests myoglobinuria and rhabdomyolysis. Distinguish metabolic myopathies by the activity that provokes symptoms: McArdle disease causes early intolerance to brief, intense exercise and may show a second wind, whereas CPT II deficiency tends to emerge after prolonged exertion or fasting. Management includes avoiding fasting, maintaining adequate carbohydrate intake, and limiting prolonged strenuous exercise; acute rhabdomyolysis requires hydration and monitoring for kidney injury and electrolyte abnormalities. CPT II deficiency is a common cause of recurrent myoglobinuria in adolescents and young adults, and muscle strength is typically preserved between episodes.</p>",
"usmle": 1,
"src": "usm",
"w": [
"Myophosphorylase deficiency, or McArdle disease, impairs glycogen breakdown in skeletal muscle. It typically causes cramps and exercise intolerance during brief, intense or isometric activity, often with a “second-wind” phenomenon as muscle shifts toward alternative fuels; this patient instead tolerates brief intense exercise and develops episodes after prolonged exertion or fasting. It would be favored by early symptoms during sprinting or weightlifting and an absent rise in lactate after exercise. The trap is focusing on exercise-induced pain and myoglobinuria without distinguishing the duration and intensity of the trigger.",
"",
"Acid alpha-glucosidase deficiency causes Pompe disease, a lysosomal glycogen-storage disorder. It more often causes progressive proximal and axial weakness, hypotonia, and sometimes cardiomyopathy, rather than isolated recurrent rhabdomyolysis after endurance exercise with normal strength between episodes. It would be favored by persistent weakness, respiratory muscle involvement, or infantile cardiomegaly. Muscle symptoms alone can suggest a metabolic myopathy, but the episodic fuel-dependent pattern here favors a fatty-acid oxidation defect.",
"Dystrophin deficiency causes Duchenne or Becker muscular dystrophy, progressive muscle degeneration due to impaired muscle membrane stability. These disorders cause steadily progressive weakness and elevated creatine kinase rather than discrete attacks of myoglobinuria with normal strength between episodes. They would be favored by childhood-onset proximal weakness, calf pseudohypertrophy, and—in Duchenne muscular dystrophy— loss of ambulation during adolescence. The patient's episodic course and normal interictal examination argue against a structural muscular dystrophy.",
"Mitochondrial myopathy results from impaired oxidative phosphorylation and can cause exercise intolerance, often with multisystem features. It is less specifically associated with recurrent myoglobinuria triggered by prolonged exercise and fasting than CPT II deficiency; mitochondrial disorders may instead feature persistent exercise intolerance, lactic acidosis, ptosis or ophthalmoplegia, hearing loss, or neurologic involvement. It would be more likely with such multisystem findings or a maternal inheritance pattern. The shared clue of exercise intolerance is not as discriminating as the prolonged-exercise and fasting-triggered rhabdomyolysis pattern.",
"Medium-chain acyl-CoA dehydrogenase deficiency impairs oxidation of medium-chain fatty acids and classically causes fasting- or illness-associated hypoketotic hypoglycemia, particularly in infants and young children. It is not the characteristic cause of isolated recurrent myoglobinuria after prolonged exercise in an adolescent with normal strength between episodes. It would be favored by episodes of hypoglycemia, lethargy, seizures, or liver dysfunction during fasting or illness."
]
},
{
"t": "Glycolipid Classes",
"s": "<p>A 9-month-old boy is brought to the physician because he has stopped reaching for toys and has become less able to sit without support. He was born at term and had previously met developmental milestones. Examination shows generalized hypotonia and an exaggerated startle response. The liver and spleen are not enlarged. Funduscopic examination shows a pale area surrounding the central macula. In the name of the glycolipid that accumulates in this condition, what does the designation GM2 signify?</p>",
"html": true,
"c": [
"One sialic acid residue and the first carbohydrate sequence attached to ceramide",
"Two sialic acid residues and the first carbohydrate sequence attached to ceramide",
"Three sialic acid residues and the second carbohydrate sequence attached to ceramide",
"One sialic acid residue and the third carbohydrate sequence attached to ceramide",
"One sialic acid residue and the second carbohydrate sequence attached to ceramide"
],
"a": 4,
"eh": "<p>Developmental regression, hypotonia, an exaggerated startle response, and a pale retina surrounding a cherry-red macula point to Tay-Sachs disease, a GM2 gangliosidosis caused by β-hexosaminidase A deficiency. The absence of hepatosplenomegaly supports Tay-Sachs over Niemann-Pick disease, another disorder that can cause a cherry-red spot but commonly causes organ enlargement. In ganglioside nomenclature, G denotes ganglioside, the letter M means one sialic acid (N-acetylneuraminic acid) residue, and the numerical subscript 2 denotes the second carbohydrate sequence attached to ceramide. Thus GM2 contains one sialic acid residue and the second carbohydrate sequence attached to ceramide.</p><p><b>Key takeaways</b></p><p>Ganglioside names encode the number of sialic acid residues with a letter and the carbohydrate sequence attached to ceramide with a number: M, D, T, and Q mean mono-, di-, tri-, and tetrasialo, while 1, 2, and 3 designate carbohydrate sequences. Thus GM2 has one sialic acid residue and the second carbohydrate sequence attached to ceramide. Tay-Sachs disease is caused by β-hexosaminidase A deficiency, leading to GM2 accumulation in neurons and progressive neurodegeneration, exaggerated startle, and a cherry-red macula without hepatosplenomegaly. Niemann-Pick disease type A also causes a cherry-red spot, but sphingomyelinase deficiency leads to sphingomyelin accumulation and hepatosplenomegaly. The pallid retina reflects swollen ganglion cells, while the central macula appears red by contrast with the surrounding pale retina.</p>",
"usmle": 1,
"src": "usm",
"w": [
"This describes a ganglioside with one sialic acid residue and the first carbohydrate sequence attached to ceramide. The letter M correctly indicates one sialic acid, but the numeral 1 indicates the first carbohydrate sequence, not the second sequence specified by GM2. This would match GM1. The trap is treating the number as the number of sialic acid residues; that information is encoded by the letter.",
"This describes a ganglioside with two sialic acid residues and the first carbohydrate sequence attached to ceramide. Two sialic acid residues are designated by D, for disialo, rather than M, and the numeral 1 indicates the first carbohydrate sequence. This would match GD1. The trap is confusing the numeral with the count of sialic acid residues.",
"This describes a ganglioside with three sialic acid residues and the second carbohydrate sequence attached to ceramide. Three sialic acid residues are designated by T, for trisialo, rather than M, which means one. This would match GT2. The numeral correctly indicates the second carbohydrate sequence, but the letter does not describe GM2.",
"This describes a ganglioside with one sialic acid residue and the third carbohydrate sequence attached to ceramide. The letter M correctly indicates one sialic acid, but the numeral 3 indicates the third carbohydrate sequence rather than the second. This would match GM3. The trap is overlooking that the numerical subscript distinguishes carbohydrate sequences attached to ceramide.",
""
]
},
{
"t": "Fabry, Krabbe, MLD & Other Sphingolipidoses",
"s": "<p>A 6-month-old boy is brought to the clinic because of increasing irritability, feeding difficulty, and loss of previously acquired motor skills. He was born at term and developed normally for the first several months of life. Examination shows increased muscle tone and poor head control. Nerve conduction studies show slowed conduction velocities, and brain MRI shows symmetric abnormalities in cerebral white matter. Which of the following biochemical defects most likely accounts for this patient's findings?</p>",
"html": true,
"c": [
"Arylsulfatase A deficiency with sulfatide accumulation",
"Glucocerebrosidase deficiency with glucocerebroside accumulation",
"Galactocerebrosidase deficiency with psychosine accumulation",
"Hexosaminidase A deficiency with GM2 ganglioside accumulation",
"Sphingomyelinase deficiency with sphingomyelin accumulation"
],
"a": 2,
"eh": "<p>The onset at 6 months after initially normal development, followed by irritability, feeding difficulty, and loss of motor skills, indicates a rapidly progressive neurodegenerative process. Increased muscle tone and poor head control, slowed nerve conduction velocities, and symmetric cerebral white-matter abnormalities point to widespread demyelination involving the central and peripheral nervous systems. This pattern is characteristic of infantile Krabbe disease, caused by deficiency of galactocerebrosidase (galactocerebroside β-galactosidase). The enzyme defect leads to accumulation of galactocerebroside and, especially, psychosine, which is toxic to oligodendrocytes and other neural cells. Psychosine-mediated injury causes myelin loss and accounts for the progressive neurologic dysfunction and abnormal conduction.</p><p><b>Key takeaways</b></p><p>Krabbe disease is an autosomal recessive lysosomal disorder caused by galactocerebrosidase deficiency, leading to accumulation of galactocerebroside and the toxic metabolite psychosine. Psychosine damages oligodendrocytes and neurons, producing central and peripheral demyelination; infantile disease classically causes irritability, feeding problems, developmental regression, increased tone, and poor head control. Globoid cells— multinucleated macrophages in the CNS—are a characteristic pathologic finding. Several sphingolipidoses can cause neurologic decline, so match the enzyme and stored substrate to the pattern: metachromatic leukodystrophy is due to arylsulfatase A deficiency with sulfatide accumulation and demyelination; Tay-Sachs is due to hexosaminidase A deficiency with GM2 accumulation and classically a cherry-red macula without hepatosplenomegaly; Gaucher disease is due to glucocerebrosidase deficiency with glucocerebroside accumulation, often causing hepatosplenomegaly and bone disease; and Niemann-Pick disease is due to sphingomyelinase deficiency with sphingomyelin accumulation, often causing hepatosplenomegaly.</p>",
"usmle": 1,
"src": "usm",
"w": [
"Arylsulfatase A deficiency causes metachromatic leukodystrophy, another lysosomal disorder that produces CNS and peripheral demyelination. It is less likely here because the questionʼs infantile pattern of irritability, feeding difficulty, and poor head control specifically points to Krabbe disease, whose distinguishing biochemical feature is psychosine accumulation. Metachromatic leukodystrophy would be more likely with later-onset progressive gait difficulty, ataxia, or cognitive decline and sulfatide accumulation. Slowed nerve conduction and white-matter disease are shared clues that can lead students to this close competitor.",
"Glucocerebrosidase deficiency causes Gaucher disease, with glucocerebroside accumulation in macrophages. It does not typically cause this characteristic early, progressive demyelinating presentation. Gaucher disease more commonly presents with hepatosplenomegaly, cytopenias, and bone pain or bone crises; neuronopathic forms can involve the CNS. This choice would fit a patient with enlarged liver and spleen, bone disease, and Gaucher cells, rather than a predominantly white-matter and peripheral nerve disorder.",
"",
"Hexosaminidase A deficiency causes Tay-Sachs disease, in which GM2 ganglioside accumulates in neurons. Tay-Sachs typically causes progressive neurodegeneration with exaggerated startle and a cherry-red macula, but it is not characterized by the prominent demyelination and slowed nerve conduction described here. It would be favored by a cherry-red macula, developmental regression, and absence of hepatosplenomegaly. The trap is associating any infantile neurodegenerative disorder with a sphingolipid storage disease without matching the specific substrate and tissue injury.",
"Sphingomyelinase deficiency causes Niemann-Pick disease, with sphingomyelin accumulation. The classic presentation includes hepatosplenomegaly and, in some forms, neurodegeneration; it does not explain the specific demyelinating pattern emphasized by slowed nerve conduction and symmetric white-matter abnormalities. It would be more likely with hepatosplenomegaly, developmental delay, and possibly a cherry-red macula. The neurologic regression is a shared feature, but the myelin findings favor Krabbe disease."
]
},
{
"t": "Plasmalogens & PAF",
"s": "<p>A 6-month-old infant is evaluated for developmental delay and poor head control. Examination shows bilateral cataracts and shortening of the upper arms and thighs. Brain MRI demonstrates reduced myelin formation. Studies of cellular metabolism show impaired peroxisomal function. Which of the following best describes a phospholipid whose synthesis may be reduced in this patient?</p>",
"html": true,
"c": [
"An ester-linked lipid enriched in myelin with a choline head group in cardiac tissue",
"An ether-linked lipid enriched in myelin with an ethanolamine head group and in cardiac tissue with a choline head group",
"A sphingolipid enriched in myelin with an ethanolamine head group and in cardiac tissue with a choline head group",
"An ester-linked lipid enriched in cardiac tissue with an ethanolamine head group and in myelin with a choline head group",
"A glycerolipid lacking a phosphate group, enriched in myelin and cardiac tissue"
],
"a": 1,
"eh": "<p>The combination of developmental delay and poor head control, bilateral cataracts, shortening of the upper arms and thighs, and reduced myelin formation is consistent with rhizomelic chondrodysplasia punctata, a disorder associated with impaired peroxisomal plasmalogen biosynthesis. Impaired peroxisomal function reduces synthesis of plasmalogens, a class of ether phospholipids whose formation begins in peroxisomes. Plasmalogens include ethanolamine plasmalogens, enriched in myelin, and choline plasmalogens, enriched in cardiac tissue; therefore, the described lipid is an ether-linked phospholipid with those tissue distributions.</p><p><b>Key takeaways</b></p><p>Plasmalogens are ether-linked glycerophospholipids whose synthesis depends in part on peroxisomes; ethanolamine plasmalogens are abundant in myelin, while choline plasmalogens are enriched in cardiac tissue. Peroxisomal disorders that impair plasmalogen synthesis can cause neurologic abnormalities, including impaired myelination. Peroxisomes also perform very-long-chain fatty acid β-oxidation and contribute to bile acid and plasmalogen synthesis. Rhizomelic chondrodysplasia punctata is associated with impaired plasmalogen biosynthesis and can feature rhizomelia, cataracts, and neurologic abnormalities. Distinguish plasmalogens from ordinary glycerophospholipids by their ether linkage, and from sphingolipids by their glycerol backbone.</p>",
"usmle": 1,
"src": "usm",
"w": [
"This describes a conventional ester-linked glycerophospholipid with a choline head group. It does not identify the peroxisome-dependent ether linkage characteristic of plasmalogens, whose reduced synthesis accounts for impaired myelin formation in this question. It could fit a phosphatidylcholine-type lipid, which has ester-linked fatty acids and a choline head group, but not the plasmalogen pattern being tested. The trap is focusing on the choline head group while overlooking the key ether linkage and the ethanolamine plasmalogen's association with myelin.",
"",
"This describes a sphingolipid, a lipid built on a sphingosine backbone rather than a glycerol backbone. The clinical pattern here points to reduced plasmalogen synthesis, and plasmalogens are glycerol ether phospholipids, not sphingolipids. A sphingolipid would be considered in questions about myelin components such as sphingomyelin, but it does not match the characteristic peroxisomal lipid synthesis defect described here. The trap is associating any myelin-related lipid with a sphingolipid.",
"This reverses the tissue distribution of the major plasmalogen subclasses and also describes an ester linkage. Ethanolamine plasmalogens are enriched in myelin, whereas choline plasmalogens are enriched in cardiac tissue; both are ether phospholipids. This choice would be tempting if the tissue associations were recalled in reverse or if plasmalogens were mistaken for ordinary ester-linked glycerophospholipids.",
"This describes a lipid without a phosphate group, rather than a phospholipid. The question asks about a phospholipid whose synthesis is impaired by peroxisomal dysfunction; plasmalogens contain a phosphate-containing polar head group and an ether linkage. A phosphate-free glycerolipid may be relevant to energy storage or membrane composition, but it does not describe the peroxisome-dependent plasmalogen implicated by the findings."
]
},
{
"t": "Carnitine & CPT Deficiencies",
"s": "<p>A 7-month-old boy is brought to the emergency department after becoming lethargic during a febrile illness with poor oral intake. His parents report a similar episode after he slept through a prolonged overnight fast. Examination shows an enlarged liver and decreased responsiveness but no muscle tenderness or weakness. Laboratory testing shows low blood glucose and low serum ketone concentrations. Plasma acylcarnitine analysis shows increased free carnitine with markedly decreased long-chain acylcarnitines. Which of the following biochemical processes is most likely impaired?</p>",
"html": true,
"c": [
"Uptake of free carnitine into hepatocytes",
"Transfer of acylcarnitine across the inner mitochondrial membrane",
"Transfer of long-chain fatty acyl groups to carnitine",
"Regeneration of fatty acyl-CoA within the mitochondrial matrix",
"Dehydrogenation of medium-chain fatty acyl-CoA"
],
"a": 2,
"eh": "<p>Recurrent episodes during fasting or febrile illness, hepatomegaly, hypoglycemia with low ketones, and increased free carnitine with decreased long-chain acylcarnitines indicate CPT I deficiency. CPT I transfers long-chain fatty acyl groups from fatty acyl-CoA to carnitine at the outer mitochondrial membrane, forming acylcarnitine so the fatty acid can enter mitochondria for β-oxidation. Without this step, hepatic long-chain fatty acid oxidation and ketogenesis fall, causing fasting hypoketotic hypoglycemia and fatty accumulation in the liver. The acylcarnitine profile helps distinguish this defect from disorders such as primary carnitine deficiency, which lowers free carnitine, and MCAD deficiency, which raises medium-chain acylcarnitines.</p><p><b>Key takeaways</b></p><p>CPT I deficiency impairs transfer of long-chain fatty acyl groups to carnitine, preventing their entry into mitochondria for hepatic β-oxidation. Fatty acid oxidation defects classically cause fasting- or illness-triggered hypoketotic hypoglycemia because the liver cannot generate sufficient ATP and acetyl-CoA to support gluconeogenesis and ketogenesis. Acylcarnitine profiles help localize the defect: CPT I deficiency is associated with increased free carnitine and decreased long-chain acylcarnitines, while MCAD deficiency causes accumulation of medium-chain acylcarnitines. The carnitine shuttle moves long-chain fatty acids into the mitochondrial matrix in three steps: CPT I forms acylcarnitine at the outer mitochondrial membrane, the carnitine-acylcarnitine translocase carries it across the inner membrane, and CPT II regenerates fatty acyl-CoA in the matrix. Medium-chain fatty acids do not require the carnitine shuttle. During suspected fatty acid oxidation disorders, avoid prolonged fasting and provide glucose during acute illness; confirmatory testing commonly includes plasma acylcarnitine profiling and genetic or enzyme studies.</p>",
"usmle": 1,
"src": "usm",
"w": [
"This describes impaired cellular uptake of free carnitine, as in primary systemic carnitine deficiency due to an OCTN2 transporter defect. It can cause fasting hypoketotic hypoglycemia and hepatomegaly, so the clinical pattern can overlap with CPT I deficiency. However, primary carnitine deficiency is associated with decreased plasma free carnitine, whereas this patient has increased free carnitine. This option would be more likely with low plasma free carnitine and may also involve cardiomyopathy or skeletal muscle abnormalities. The trap is treating all carnitine-related disorders as the same biochemical defect.",
"This describes impaired translocation of acylcarnitine across the inner mitochondrial membrane by carnitine-acylcarnitine translocase. It blocks long-chain fatty acid entry into the mitochondrial matrix and can produce hypoketotic hypoglycemia, but the laboratory profile here points to impaired formation of long-chain acylcarnitines at the earlier CPT I step. This option would be correct if the question specified a translocase defect or asked about moving acylcarnitine through the inner membrane. The trap is confusing formation of acylcarnitine with its subsequent transport.",
"",
"This describes CPT II activity, which transfers the long-chain fatty acyl group from carnitine back to CoA in the mitochondrial matrix. A CPT II defect disrupts the final step of the carnitine shuttle and may cause fasting intolerance; the classic muscle-predominant form presents with exercise-induced myalgia, rhabdomyolysis, and myoglobinuria, findings absent here. It would be more likely in an adolescent or adult with recurrent muscle pain and dark urine after prolonged exercise. The trap is recognizing a carnitine-shuttle disorder but selecting a later step rather than the CPT I reaction asked about.",
"This describes medium-chain acyl-CoA dehydrogenase (MCAD), which catalyzes the first dehydrogenation step of β-oxidation for medium-chain fatty acids. MCAD deficiency also causes fasting-related hypoketotic hypoglycemia, but it does not block transfer of long-chain fatty acyl groups to carnitine; it is associated with elevated medium-chain acylcarnitines, particularly octanoylcarnitine. This option would be correct if the profile showed accumulation of medium-chain acylcarnitines. The trap is choosing a familiar cause of hypoketotic hypoglycemia without matching the specific laboratory pattern."
]
},
{
"t": "Phosphatidylinositol & PIP2 Signaling",
"s": "<p>A 63-year-old man develops a blood pressure of 78/46 mm Hg during a procedure under general anesthesia. Intravenous phenylephrine is administered, after which his blood pressure rises and his extremities become cool. The drug binds receptors on vascular smooth muscle, increasing arteriolar tone. Which of the following intracellular events mediates this response?</p>",
"html": true,
"c": [
"Activation of adenylyl cyclase and increased cAMP",
"Activation of guanylyl cyclase and increased cGMP",
"Inhibition of phospholipase C and reduced intracellular calcium",
"Cleavage of membrane phosphatidylinositol bisphosphate into IP3 and DAG",
"Activation of receptor tyrosine kinase and increased Ras signaling"
],
"a": 3,
"eh": "<p>Phenylephrine raises blood pressure and makes the extremities cool, indicating peripheral arteriolar vasoconstriction. Phenylephrine selectively activates α₁ -adrenergic receptors on vascular smooth muscle; these are Gq-coupled receptors that activate phospholipase C. Phospholipase C cleaves membrane PIP₂ into IP₃ and DAG. IP₃ increases cytosolic calcium by stimulating calcium release from the sarcoplasmic reticulum, promoting smooth-muscle contraction and increased vascular resistance; DAG activates protein kinase C and supports the contractile response. This receptor-signaling pathway mediates the increased arteriolar tone responsible for the blood-pressure rise.</p><p><b>Key takeaways</b></p><p>α₁ -adrenergic receptors on vascular smooth muscle couple to Gq, activating phospholipase C to split PIP₂ into IP₃ and DAG. IP₃ raises intracellular calcium and promotes contraction, increasing arteriolar resistance and blood pressure; phenylephrine is an α₁ -selective agonist used to treat hypotension. Common receptor pathways are worth distinguishing: Gs increases cAMP, as with β₁ and β₂ receptors; Gi decreases cAMP, as with α₂ receptors; Gq activates PLC and generates IP₃ /DAG, as with α₁ receptors. Nitric oxide activates soluble guanylyl cyclase to increase cGMP and relax vascular smooth muscle. PIP₂ hydrolysis by PLC is a general signaling mechanism that produces IP₃ and DAG.</p>",
"usmle": 1,
"src": "usm",
"w": [
"Adenylyl cyclase converts ATP to cAMP, a second-messenger pathway commonly activated by β-adrenergic receptors. It does not mediate phenylephrineʼs α₁ -receptor-driven vasoconstriction; increased cAMP in vascular smooth muscle generally promotes relaxation. This pathway would be relevant to β₂ -receptor-mediated vasodilation, such as the effect of epinephrine in some vascular beds. The trap is associating all adrenergic receptors with the same intracellular signaling pathway.",
"Guanylyl cyclase produces cGMP, which promotes vascular smooth-muscle relaxation. This is not the mechanism of phenylephrine-induced vasoconstriction. The pathway would be relevant to nitric oxide signaling: nitric oxide activates soluble guanylyl cyclase, raising cGMP and causing vasodilation. The trap is recognizing a vascular second messenger without distinguishing its effect from the α₁ -mediated increase in tone.",
"Inhibiting phospholipase C would reduce IP₃ formation and the associated rise in intracellular calcium, opposing smooth-muscle contraction. It therefore runs counter to the vasoconstriction and increased blood pressure caused by phenylephrine. Reduced PLC activity would be relevant if the goal were to blunt α₁ -receptor signaling and lower vascular tone. The trap is focusing on calcium as a mediator of contraction but overlooking that this option decreases, rather than increases, the calcium signal.",
"",
"Receptor tyrosine kinases commonly signal through pathways such as Ras–MAPK and are involved in growth and differentiation. They are not the receptor class through which phenylephrine acutely increases vascular smooth-muscle tone. This pathway would be expected in signaling by growth factors such as epidermal growth factor. The trap is choosing a familiar receptor-signaling cascade without matching it to the adrenergic receptor involved."
]
},
{
"t": "Phospholipid Structure & Synthesis",
"s": "<p>A premature newborn develops rapid breathing and grunting shortly after birth. Chest radiography shows diffuse bilateral opacities with reduced lung volumes. A major surface-active component produced by alveolar type II cells contains a lipid that contributes to lowering alveolar surface tension. Which of the following best describes the structure and orientation of this lipid in a cell membrane?</p>",
"html": true,
"c": [
"A sphingosine backbone with one fatty acid and a sugar head group facing the aqueous phase",
"A glycerol backbone with three fatty acids and no polar group at the membrane surface",
"A glycerol backbone with two phosphate groups and hydrocarbon chains facing the aqueous phase",
"A sphingosine backbone with two fatty acids and a phosphate head group facing the membrane interior",
"A glycerol backbone with two fatty acids and a phosphate-linked polar head group facing the aqueous phase"
],
"a": 4,
"eh": "<p>Prematurity, grunting, and diffuse bilateral opacities with reduced lung volumes indicate neonatal respiratory distress syndrome from insufficient pulmonary surfactant, which normally lowers alveolar surface tension and helps prevent end-expiratory collapse. The major surfactant phospholipid dipalmitoylphosphatidylcholine (DPPC, or dipalmitoyllecithin) is a glycerophospholipid: it has a glycerol backbone, two fatty-acid chains, and a phosphate-linked polar head group. Like other membrane phospholipids, it is amphipathic: its polar head faces the aqueous environment, while its hydrophobic fatty-acid tails point away from water. Thus, the correct description is a glycerol backbone with two fatty acids and a phosphate-linked polar head facing the aqueous phase.</p><p><b>Key takeaways</b></p><p>Glycerophospholipids have a glycerol backbone, two fatty-acid chains, and a phosphate-linked polar head group; they are amphipathic, with hydrophilic heads facing aqueous environments and hydrophobic tails oriented away from water. DPPC is a major pulmonary surfactant phospholipid produced by type II pneumocytes. By reducing alveolar surface tension, it increases lung compliance and helps prevent atelectasis, particularly at end expiration; deficiency in premature infants causes neonatal respiratory distress syndrome. Surfactant also contains proteins, including SP-B and SP-C, which promote spreading and function of the lipid layer. Antenatal corticosteroids accelerate fetal lung maturation when preterm delivery is anticipated, and exogenous surfactant is used to treat neonatal respiratory distress. In classic fetal lung maturity testing, an amniotic-fluid lecithin-to-sphingomyelin ratio greater than 2 was traditionally considered reassuring, although modern clinical decisions rely on broader obstetric and neonatal assessment.</p>",
"usmle": 1,
"src": "usm",
"w": [
"This describes a glycosphingolipid, such as a cerebroside, with a sphingosine-based lipid and a sugar head group. It is not the glycerophospholipid structure of DPPC, the principal surface-tension-lowering surfactant phospholipid. It would fit a question asking about a glycolipid in a membrane, where the carbohydrate head group faces the extracellular or other aqueous surface. The trap is recognizing that a polar head faces water but overlooking that this surfactant lipid has a glycerol backbone and phosphate-linked head group.",
"This describes a triacylglycerol, a neutral storage lipid made of glycerol esterified to three fatty acids. It lacks a polar phosphate-containing head group, so it is not amphipathic and does not form the bilayer structure characteristic of membrane phospholipids. It would be correct for the basic structure of a major energy-storage lipid in adipose tissue, not a surfactant phospholipid or membrane lipid. The trap is associating glycerol and fatty acids with all lipid structures without distinguishing the number of fatty acids and presence of a polar head.",
"This describes a glycerol-based lipid with two phosphate groups and hydrophobic chains, but it places the hydrocarbon chains in the aqueous phase. Fatty-acid tails are nonpolar and avoid water; in a membrane they orient toward the hydrophobic interior, while polar phosphate-containing heads face aqueous compartments. It would be correct only if the orientation of the tails were reversed to face the membrane interior and the polar head groups faced water. The trap is recalling that phospholipids contain phosphate while misapplying their amphipathic orientation.",
"This option does not accurately describe sphingomyelin: sphingomyelin has a sphingosine backbone, one additional fatty acid, and a phosphate-containing polar head group. That head group faces the aqueous phase rather than the membrane interior. DPPC, by contrast, has a glycerol backbone and two fatty acids. This option is therefore incorrect both in the number of fatty acids stated and in the orientation of the polar head group.",
""
]
},
{
"t": "Carnitine Shuttle",
"s": "<p>A 10-month-old boy is brought to the emergency department after becoming lethargic during a febrile illness with poor oral intake. He has had two similar episodes after prolonged periods without feeding. Examination shows generalized hypotonia, an enlarged liver, and a weak cardiac impulse. Laboratory studies show low blood glucose and few ketones in the urine. Imaging shows enlargement of the heart and increased liver echogenicity. Which of the following processes is most likely impaired in this patient?</p>",
"html": true,
"c": [
"Transport of medium-chain fatty acids into mitochondria",
"Conversion of pyruvate to acetyl-CoA in mitochondria",
"Oxidation of branched-chain amino acids in mitochondria",
"Transfer of electrons from NADH to oxygen",
"Transport of long-chain fatty acyl groups into mitochondria",
"Conversion of acetyl-CoA to ketone bodies in the liver"
],
"a": 4,
"eh": "<p>Recurrent episodes after fasting or poor intake, hypoglycemia with few urinary ketones, and hepatomegaly, hypotonia, and cardiomegaly indicate impaired fatty-acid oxidation: during fasting, the body cannot effectively use fatty acids to generate ATP or acetyl-CoA for ketone production. The combination of hepatic and cardiac involvement points to a defect affecting long-chain fatty-acid use in multiple tissues, such as systemic carnitine deficiency or a carnitine-shuttle defect. Long-chain fatty acids require the carnitine shuttle to cross the inner mitochondrial membrane; blocking their transport reduces β-oxidation, ATP production, and hepatic ketogenesis, producing hypoketotic hypoglycemia and lipid accumulation in the liver and heart. Medium-chain fatty acids can enter mitochondria without this shuttle, distinguishing this process from a defect specific to medium-chain fatty-acid oxidation.</p><p><b>Key takeaways</b></p><p>Defects in long-chain fatty-acid transport or oxidation cause fasting intolerance with hypoketotic hypoglycemia; systemic forms can also cause hepatomegaly, hypotonia, and cardiomyopathy. During fasting, fatty-acid β-oxidation supplies ATP for hepatic gluconeogenesis and acetyl-CoA for ketogenesis, so impaired oxidation limits both glucose maintenance and ketone production. Long-chain fatty acids depend on the carnitine shuttle, whereas medium-chain fatty acids enter mitochondria without it. Primary systemic carnitine deficiency is commonly due to impaired OCTN2-mediated carnitine uptake and can cause low plasma and tissue carnitine, cardiomyopathy, myopathy, and hepatic steatosis; management includes avoiding fasting and providing carnitine. MCAD deficiency instead impairs medium-chain fatty-acid β-oxidation and classically causes fasting-triggered hypoketotic hypoglycemia, sometimes with dicarboxylic aciduria and hyperammonemia. In any child with suspected fatty-acid oxidation disease, prevent catabolism during acute illness by providing glucose and avoiding prolonged fasting.</p>",
"usmle": 1,
"src": "usm",
"w": [
"Medium-chain fatty acids do not require the carnitine shuttle to enter mitochondria, so a transport defect specific to these fatty acids would not explain this presentation. Medium-chain acyl-CoA dehydrogenase deficiency impairs their oxidation, not their mitochondrial transport, and can cause fasting-triggered hypoketotic hypoglycemia. However, the prominent cardiomyopathy and hepatomegaly here favor impaired long-chain fatty-acid use. A medium-chain oxidation defect would be more likely with fasting-related hypoglycemia and low ketones without this prominent cardiac phenotype.",
"This is a defect in pyruvate dehydrogenase, which prevents conversion of pyruvate to acetyl-CoA. It typically causes lactic acidosis and neurologic findings such as developmental delay or seizures, rather than the characteristic fasting-related hypoketotic hypoglycemia and cardiomyopathy of impaired long-chain fatty-acid oxidation. It would be favored by persistent lactic acidosis, neurologic dysfunction, and worsening after carbohydrate intake. The fasting-triggered episodes and low ketones point instead to failure to mobilize fatty-acid-derived energy.",
"This describes impaired branched-chain amino-acid catabolism, as in maple syrup urine disease. MSUD usually presents with poor feeding, vomiting, encephalopathy, and a characteristic sweet odor to the urine; it does not explain the combination of fasting-related hypoketotic hypoglycemia, hepatomegaly, and cardiomyopathy. It would be favored by elevated leucine, isoleucine, and valine with branched-chain ketoacids, often after protein feeding or during neonatal illness. The trap is focusing on lethargy during illness without accounting for the metabolic pattern.",
"This describes impairment of the electron transport chain, which limits oxidative phosphorylation and ATP generation. Mitochondrial respiratory-chain disorders can cause multisystem disease, hypotonia, and cardiomyopathy, but they more often produce lactic acidosis and do not specifically cause the fasting-associated hypoketotic hypoglycemia pattern that identifies defective fatty-acid use. It would be considered with persistent lactic acidosis, exercise intolerance, neurologic or muscle abnormalities, and evidence of impaired oxidative phosphorylation. The trap is using cardiomyopathy and hypotonia alone while overlooking the distinctive low-ketone response to fasting.",
"",
"This describes impaired hepatic ketogenesis from acetyl-CoA, such as a defect in a ketone-body synthesis enzyme. It can cause hypoketotic hypoglycemia, but it does not itself explain impaired fatty-acid transport and the resulting energy deficiency and lipid accumulation in the heart, skeletal muscle, and liver. It would be more likely if ketone production were selectively impaired while fatty-acid oxidation and long-chain fatty-acid transport were otherwise intact. The trap is interpreting low ketones as proof of a primary ketogenesis defect; low ketones also result when fatty-acid oxidation fails to supply acetyl-CoA."
]
},
{
"t": "Glycolipid Classes",
"s": "<p>A 9-year-old boy is evaluated for easy bruising, fatigue, and progressive pain in his legs. His parents are first cousins, and a maternal uncle had similar symptoms. Examination shows an enlarged liver and spleen. Blood testing shows anemia and thrombocytopenia. Bone marrow examination reveals numerous enlarged macrophages. The accumulated lipid in these cells is a glycosphingolipid. Which of the following best describes its carbohydrate content?</p>",
"html": true,
"c": [
"One monosaccharide attached to ceramide",
"One sulfate group attached to a galactocerebroside",
"Several neutral sugars attached to ceramide",
"One or more sialic acids attached to ceramide",
"A phosphate group attached to a sphingosine backbone"
],
"a": 0,
"eh": "<p>The combination of bone pain, hepatosplenomegaly, cytopenias, and enlarged marrow macrophages in a child with a family history suggestive of autosomal-recessive inheritance points to Gaucher disease. It is caused by deficient lysosomal glucocerebrosidase, leading to accumulation of glucocerebroside (glucosylceramide). Glucocerebroside is a cerebroside, which consists of one monosaccharide attached to ceramide; specifically, it contains glucose. This distinguishes it from glycosphingolipids with multiple sugars, sulfate, or sialic acid.</p><p><b>Key takeaways</b></p><p>Cerebrosides are glycosphingolipids composed of ceramide plus one monosaccharide; Gaucher disease accumulates glucocerebroside, specifically glucose linked to ceramide. Gaucher disease results from autosomal-recessive deficiency of lysosomal glucocerebrosidase, producing lipid-laden macrophages and commonly causing hepatosplenomegaly, cytopenias, bone pain, and bone crises. Treatment may include enzyme replacement therapy or substrate-reduction therapy, depending on the clinical setting. Glycosphingolipids are classified by their carbohydrate additions: cerebrosides contain one sugar, globosides contain several neutral sugars, sulfatides are sulfated cerebrosides, and gangliosides contain sialic acid. These structural distinctions help identify substrates in lysosomal storage disorders: glucocerebroside in Gaucher disease, GM2 ganglioside in Tay-Sachs disease, and sphingomyelin in Niemann-Pick types A and B.</p>",
"usmle": 1,
"src": "usm",
"w": [
"",
"This describes a sulfatide, a sulfated galactocerebroside. Gaucher disease accumulates glucocerebroside, which has a single glucose residue and no sulfate group. This choice would fit sulfatide accumulation in metachromatic leukodystrophy, typically associated with progressive neurologic deterioration and demyelination. The trap is to focus on the lipid storage disease context while overlooking the specific stored substrate.",
"This describes a globoside, which has several neutral sugar residues attached to ceramide. Gaucher disease involves glucocerebroside, a cerebroside with only one sugar, rather than a neutral oligosaccharide. This option would be appropriate for a glycosphingolipid such as a globoside; Fabry disease, for example, involves accumulation of globotriaosylceramide. The trap is assuming that all complex stored glycosphingolipids contain multiple sugars.",
"This describes a ganglioside, which contains one or more sialic acid residues in addition to carbohydrate groups attached to ceramide. The accumulated lipid in Gaucher disease is glucocerebroside and contains no sialic acid. This choice would fit ganglioside storage disorders such as Tay-Sachs disease, in which GM2 ganglioside accumulates because of hexosaminidase A deficiency. The trap is associating any lysosomal lipid-storage disorder with ganglioside accumulation.",
"This describes a phospholipid-type structure rather than the carbohydrate composition of a glycosphingolipid. Glycosphingolipids have a ceramide backbone with one or more carbohydrate groups, whereas Gaucher disease accumulates glucocerebroside. A phosphate-containing sphingolipid such as sphingomyelin would be relevant to Niemann-Pick disease types A or B, not Gaucher disease. The trap is confusing lysosomal sphingolipid disorders that affect different substrate classes."
]
},
{
"t": "Tay-Sachs & GM2 Gangliosidoses",
"s": "<p>A 9-month-old boy is brought to the clinic because he has stopped sitting without support and no longer reaches for toys. He had been meeting developmental milestones until 6 months of age. His parents report that he startles markedly to sudden sounds. Examination shows decreased muscle tone and an enlarged liver and spleen. Funduscopic examination shows a pale macula with a central red area. Which of the following enzyme defects best explains this patientʼs findings?</p>",
"html": true,
"c": [
"Deficiency of β-hexosaminidase A",
"Deficiency of β-galactocerebrosidase",
"Deficiency of arylsulfatase A",
"Deficiency of β-hexosaminidases A and B",
"Deficiency of glucocerebrosidase"
],
"a": 3,
"eh": "<p>Normal development until 6 months followed by loss of milestones, exaggerated startle to sudden sounds, and a cherry-red macula indicate an infantile GM2 gangliosidosis. The hepatosplenomegaly helps distinguish Sandhoff disease from Tay-Sachs disease, which classically causes neurologic deterioration and a cherry-red spot without organomegaly. Sandhoff disease results from deficiency of the β subunit shared by β-hexosaminidases A and B, so both enzymes are impaired; GM2 ganglioside and globosides accumulate in tissues. This accumulation damages neurons and produces progressive neurodegeneration, hypotonia, exaggerated startle, and retinal changes.</p><p><b>Key takeaways</b></p><p>Sandhoff disease is a GM2 gangliosidosis caused by deficiency of both β-hexosaminidases A and B; progressive neurodegeneration with hepatosplenomegaly distinguishes it from classic Tay-Sachs disease, which usually lacks organomegaly. In both disorders, impaired lysosomal breakdown causes GM2 ganglioside accumulation in neurons; a cherry-red macula results when pale, swollen retinal ganglion cells contrast with the relatively unaffected choroid.</p><table class=\"labt\"><tr><th>Disorder</th><th>Enzyme Deficiency</th><th>Distinguishing Pattern</th></tr><tr><td>Sandhoff disease</td><td>β-Hexosaminidases A and B</td><td>Neurodegeneration with hepatosplenomegaly; GM2 and globoside accumulation</td></tr><tr><td>Tay-Sachs disease</td><td>β-Hexosaminidase A</td><td>Neurodegeneration, exaggerated startle, cherry-red macula; typically no hepatosplenomegaly</td></tr><tr><td>Niemann-Pick disease</td><td>Sphingomyelinase</td><td>Neurodegeneration and hepatosplenomegaly; may have a cherry-red macula</td></tr><tr><td>Gaucher disease</td><td>Glucocerebrosidase</td><td>Hepatosplenomegaly, cytopenias, and bone disease; macrophage storage</td></tr></table>",
"usmle": 1,
"src": "usm",
"w": [
"β-hexosaminidase A deficiency causes Tay-Sachs disease, another GM2 gangliosidosis. It can cause developmental regression, exaggerated startle, and a cherry-red macula, but hepatosplenomegaly is not typical; the organ enlargement in this vignette favors Sandhoff disease. Tay-Sachs would be the better answer with the neurologic and retinal findings but no hepatosplenomegaly. The trap is focusing on the classic cherry-red spot and startle response while overlooking the visceral involvement.",
"β-galactocerebrosidase deficiency causes Krabbe disease, a leukodystrophy with psychosine and galactocerebroside accumulation. Krabbe disease can cause infantile developmental regression, irritability, and neurologic deterioration, but a cherry-red macula and hepatosplenomegaly are not its characteristic combination. It would be favored by findings such as marked irritability, feeding difficulty, spasticity, and globoid cells in the nervous system. The trap is treating infantile neurodegeneration as specific to a single lysosomal storage disorder.",
"Arylsulfatase A deficiency causes metachromatic leukodystrophy, which leads to sulfatide accumulation and demyelination in the central and peripheral nervous systems. It can cause progressive neurologic deterioration, but the cherry-red macula and hepatosplenomegaly in this vignette favor a different lysosomal storage disorder. Metachromatic leukodystrophy would be supported by findings such as peripheral neuropathy, ataxia, and elevated urinary sulfatides.",
"",
"Glucocerebrosidase deficiency causes Gaucher disease, in which glucocerebroside accumulates in macrophages. Gaucher disease commonly causes hepatosplenomegaly, cytopenias, and bone pain or bone crises; it does not typically cause the cherry-red macula, exaggerated startle, and infantile neurodegeneration described here. It would be favored by enlarged spleen, anemia or thrombocytopenia, and characteristic lipid-laden macrophages, with neurologic involvement in some forms. The trap is focusing on hepatosplenomegaly without accounting for the prominent neurologic and retinal features."
]
},
{
"t": "MCAD Deficiency & Jamaican Vomiting Sickness",
"s": "<p>A 9-month-old boy is brought to the emergency department after becoming difficult to arouse during a febrile illness with vomiting. He had eaten poorly the previous evening and slept for 12 hours. His parents report normal growth and development and no prior episodes. He is lethargic but withdraws from painful stimuli. His temperature is 38.2°C (100.8°F), pulse is 148/min, and blood pressure is 82/50 mm Hg. The liver edge is palpable 2 cm below the right costal margin. Laboratory studies show:</p><table class=\"labt\"><tr><th>Test</th><th>Result</th><th>Reference Range</th></tr><tr><td>Plasma glucose</td><td>32 mg/dL</td><td>(70–100 mg/dL)</td></tr><tr><td>β-hydroxybutyrate</td><td>0.2 mmol/L</td><td>(0.4–2.4 mmol/L)</td></tr><tr><td>Free fatty acids</td><td>1.8 mmol/L</td><td>(0.1–0.6 mmol/L)</td></tr><tr><td>Arterial pH</td><td>7.29</td><td>(7.35–7.45)</td></tr></table><p>Plasma acylcarnitine analysis shows a marked elevation in octanoylcarnitine (C8). Which of the following is the most likely underlying mechanism?</p>",
"html": true,
"c": [
"Impaired mitochondrial oxidation of medium-chain fatty acids",
"Impaired transport of long-chain fatty acids into mitochondria",
"Impaired breakdown of glycogen in hepatocytes",
"Impaired conversion of pyruvate to acetyl-CoA",
"Impaired synthesis of ketone bodies from acetyl-CoA"
],
"a": 0,
"eh": "<p>Severe hypoglycemia after poor intake and a prolonged fast during an infection indicates impaired ability to maintain energy and glucose when dietary fuel is unavailable. Elevated free fatty acids with markedly low β-hydroxybutyrate indicate hypoketotic hypoglycemia. The marked elevation in C8 acylcarnitine specifically supports medium-chain acyl-CoA dehydrogenase (MCAD) deficiency, which impairs mitochondrial β-oxidation of medium-chain fatty acids. Reduced β-oxidation limits ATP and acetyl-CoA availability, compromising gluconeogenesis and ketogenesis; the resulting energy deficit causes hypoglycemia and can contribute to metabolic acidosis and encephalopathy. The palpable liver edge is consistent with hepatic involvement.</p><p><b>Key takeaways</b></p><p>Medium-chain acyl-CoA dehydrogenase deficiency is an autosomal recessive fatty-acid oxidation disorder that classically causes fasting- or illness-triggered hypoketotic hypoglycemia in infants and young children. Elevated free fatty acids during hypoglycemia show that stored triglycerides are being mobilized; inappropriately low ketones indicate inadequate fatty-acid oxidation to supply acetyl-CoA for ketogenesis. Reduced ATP and acetyl-CoA also impair hepatic gluconeogenesis. Diagnosis is supported by plasma acylcarnitine analysis showing elevated C8 acylcarnitine and confirmed with molecular or enzyme testing. Acute management is prompt glucose administration to reverse catabolism, with ongoing carbohydrate intake and avoidance of prolonged fasting, especially during illness. Fatty-acid oxidation disorders can cause hypoketotic hypoglycemia; glycogenolysis defects often have other characteristic findings, such as lactic acidosis or substantial hepatomegaly. Long-chain fatty-acid transport and oxidation defects may also cause hypoketotic hypoglycemia and can involve cardiac or skeletal muscle.</p>",
"usmle": 1,
"src": "usm",
"w": [
"",
"Impaired transport of long-chain fatty acids into mitochondria describes defects in the carnitine shuttle, such as carnitine transporter or carnitine palmitoyltransferase deficiencies. These can also cause fasting-related hypoketotic hypoglycemia and hepatomegaly. However, the marked elevation in C8 acylcarnitine supports MCAD deficiency rather than a long-chain fatty-acid transport defect, which would be associated with abnormalities involving long-chain acylcarnitines. Long-chain transport defects may also involve cardiomyopathy or skeletal myopathy.",
"Impaired hepatic glycogen breakdown describes a glycogenolysis defect, such as glucose-6-phosphatase deficiency in von Gierke disease. It can cause fasting hypoglycemia and hepatomegaly, but it does not explain the distinctive combination of elevated free fatty acids, profoundly reduced ketones, and elevated C8 acylcarnitine. Von Gierke disease typically causes lactic acidosis, hyperuricemia, and hypertriglyceridemia, often with marked hepatomegaly. It would be favored by recurrent fasting hypoglycemia with those associated metabolic findings.",
"Impaired conversion of pyruvate to acetyl-CoA describes pyruvate dehydrogenase complex deficiency. This primarily impairs carbohydrate oxidation and commonly causes lactic acidosis, neurologic abnormalities, or developmental problems. The infantʼs fasting-triggered hypoketotic hypoglycemia and elevated C8 acylcarnitine instead indicate impaired fatty-acid oxidation. Pyruvate dehydrogenase deficiency would be more likely with persistent lactic acidosis and neurologic findings.",
"Impaired synthesis of ketone bodies from acetyl-CoA describes a primary ketogenesis defect. It can produce hypoketotic hypoglycemia, but the marked elevation in C8 acylcarnitine supports impaired medium-chain fatty-acid oxidation in this case. A primary ketogenesis defect would be considered when hypoketosis occurs without a biochemical pattern indicating a fatty-acid oxidation disorder."
]
},
{
"t": "Cholesterol Structure & Functions",
"lv": "Easy",
"s": "A student draws cholesterol and labels its key features. Which feature is correct?",
"c": [
"A hydroxyl group at C-17",
"A side chain of 27 carbons on ring A",
"Three fused rings in the steroid nucleus",
"A carboxyl group at C-3",
"A double bond between C-5 and C-6"
],
"a": 4,
"e": "Cholesterol is a 27-carbon sterol built on the cyclopentanoperhydrophenanthrene (steroid) nucleus:\n1. Four fused rings, A to D.\n2. A single hydroxyl group at C-3. This is the group that gets esterified to a fatty acid to make cholesteryl ester, which is more hydrophobic.\n3. A double bond between C-5 and C-6.\n4. An 8-carbon hydrocarbon side chain on ring D at C-17, plus two methyl groups.\n\nTakeaway: 4 rings, 3-OH, Δ5 double bond, 8-carbon side chain at C-17.",
"w": [
"The hydroxyl group is at C-3. C-17 carries the side chain.",
"The side chain has 8 carbons and sits on ring D at C-17. The whole molecule has 27 carbons.",
"The steroid nucleus has four fused rings, A to D.",
"C-3 carries a hydroxyl group, not a carboxyl. Cholesterol is a sterol, an alcohol.",
""
],
"src": "lec",
"fig": [
"figs/crs/ch-structure"
]
},
{
"t": "Cholesterol Structure & Functions",
"lv": "Easy",
"s": "A man on a diet rich in plant sterols such as β-sitosterol has a fall in his serum cholesterol. What happens to plant sterols in the gut that explains this?",
"c": [
"They are pumped back into the lumen with cholesterol",
"They are converted into bile acids by the liver",
"They inhibit HMG-CoA reductase in the hepatocytes",
"They are esterified by ACAT and stored inside enterocytes",
"They are packed into chylomicrons in place of cholesterol"
],
"a": 0,
"e": "Plant sterols such as β-sitosterol are poorly absorbed. The small amount that enters enterocytes is actively transported back into the gut lumen, and cholesterol is pumped out with it. Less cholesterol therefore reaches the blood, which is why plant sterols are part of the dietary treatment of hypercholesterolemia.\n\nTakeaway: β-sitosterol is not absorbed and drags cholesterol back into the lumen, lowering serum cholesterol.",
"w": [
"",
"Plant sterols are not absorbed enough to be turned into bile acids.",
"Statins inhibit HMG-CoA reductase. Plant sterols act in the gut lumen.",
"Plant sterols are not esterified and stored. They are sent back out of the enterocyte.",
"Plant sterols are not packed into chylomicrons. Little of them is absorbed."
],
"src": "lec"
},
{
"t": "Cholesterol Synthesis: Pathway & Sites",
"lv": "Easy",
"s": "Where in the hepatocyte does cholesterol synthesis take place?",
"c": [
"In the mitochondrial matrix only",
"In the nucleus and Golgi",
"In the peroxisomes only",
"In the lysosomes and endosomes",
"In the cytoplasm and the ER"
],
"a": 4,
"e": "Cholesterol is made in nearly every tissue, with the liver, intestine, adrenal cortex and reproductive tissues contributing most. The enzymes sit in the cytoplasm and in the ER membrane:\n1. Acetyl-CoA is made in the mitochondria, leaves as citrate, and citrate lyase releases it in the cytosol.\n2. HMG-CoA reductase, the rate-limiting enzyme, is an integral ER membrane protein.\n3. NADPH supplies the reducing power.\n\nTakeaway: cholesterol synthesis = cytoplasm + ER, from acetyl-CoA, using NADPH.",
"w": [
"Acetyl-CoA starts in the mitochondria, but it must leave as citrate before cholesterol synthesis begins.",
"The nucleus controls the HMG-CoA reductase gene, and the Golgi cleaves SREBP. Neither makes cholesterol.",
"Peroxisomes help with some steps, but synthesis is not confined to them.",
"Lysosomes break down LDL to release cholesterol. They do not make it.",
""
],
"src": "lec",
"fig": [
"figs/crs/ch-pathway"
]
},
{
"t": "Cholesterol Synthesis: Pathway & Sites",
"lv": "Easy",
"s": "All 27 carbon atoms of cholesterol come from one precursor. Which molecule supplies the carbons, and which molecule supplies the reducing power?",
"c": [
"Malonyl-CoA and NADH",
"Acetyl-CoA and NADPH",
"Acetoacetate and FADH₂",
"Glycerol 3-phosphate and NADPH",
"Succinyl-CoA and NADH"
],
"a": 1,
"e": "All carbons of cholesterol come from acetyl-CoA. The mitochondrial acetyl-CoA is carried to the cytosol as citrate and released by citrate lyase. The reductions in the pathway, such as HMG-CoA to mevalonate, use NADPH, mainly from the pentose phosphate pathway.\n\nTakeaway: cholesterol = acetyl-CoA carbons + NADPH reducing power.",
"w": [
"Malonyl-CoA is the 2-carbon donor for fatty acid synthesis. Anabolic reductions use NADPH, not NADH.",
"",
"Acetoacetate is a ketone body, and FADH₂ is not used in this pathway.",
"Glycerol 3-phosphate is the backbone of TAG and phospholipids.",
"Succinyl-CoA is used to make heme, not cholesterol."
],
"src": "lec"
},
{
"t": "Cholesterol Synthesis: Pathway & Sites",
"lv": "Hard",
"s": "A newborn has microcephaly, cleft palate, polydactyly and syndactyly of the second and third toes. Serum cholesterol is low, and 7-dehydrocholesterol is very high. Synthesis of which other group of products would continue normally because it branches off before the block?",
"c": [
"Dolichol and ubiquinone",
"Primary bile acids",
"Lanosterol-derived sterols",
"Steroid hormones made from cholesterol",
"Vitamin D₃ made in the skin"
],
"a": 0,
"e": "The findings point to Smith-Lemli-Opitz syndrome, a deficiency of 7-dehydrocholesterol 7-reductase, the last enzyme before cholesterol:\n1. Cholesterol cannot be made, so 7-dehydrocholesterol builds up.\n2. Look at the slide pathway: dolichol, ubiquinone, heme a and prenylated proteins branch off much earlier, at farnesyl pyrophosphate.\n3. Products upstream of the block keep forming. Products made from cholesterol, such as bile acids and steroid hormones, fall.\n\nTakeaway: SLOS blocks the last step (7-DHC → cholesterol). Farnesyl-PP branches (dolichol, ubiquinone, prenylation) are spared.",
"w": [
"",
"Bile acids are made from cholesterol in the liver, so they fall too.",
"Lanosterol is upstream, but its sterol products lead to 7-DHC and cannot finish as cholesterol.",
"Steroid hormones are made from cholesterol, which is downstream of the block.",
"Vitamin D₃ forms from 7-DHC, but the question asks about products of the cholesterol pathway itself. The farnesyl-PP branch is the clear upstream group."
],
"src": "lec",
"fig": [
"figs/crs/ch-pathway"
]
},
{
"t": "Regulation of HMG-CoA Reductase",
"lv": "Easy",
"s": "A patient's hepatocytes have a high cholesterol content. What keeps SREBP from turning on transcription of the HMG-CoA reductase gene?",
"c": [
"SREBP is phosphorylated by AMPK",
"SCAP cleaves SREBP in the Golgi",
"SREBP binds the LDL receptor on the cell surface",
"Insig holds the SREBP–SCAP complex in the ER",
"Insulin degrades SREBP in the nucleus"
],
"a": 3,
"e": "SREBP (sterol regulatory element–binding protein) is an ER membrane protein bound to SCAP:\n1. High sterol: SCAP senses cholesterol and binds Insig, which keeps SREBP–SCAP in the ER, so there is no activation.\n2. Low sterol: SREBP–SCAP moves to the Golgi. Proteases release the soluble part of SREBP.\n3. That piece enters the nucleus, binds the SRE and turns on the HMG-CoA reductase gene, and the LDL receptor gene too.\n\nTakeaway: high sterol → Insig traps SREBP–SCAP in the ER. Low sterol → Golgi cleavage → nucleus → more reductase.",
"w": [
"AMPK phosphorylates HMG-CoA reductase itself, not SREBP.",
"SCAP escorts SREBP. Golgi proteases do the cleaving, and only when sterol is low.",
"SREBP is a transcription factor. It does not bind the LDL receptor.",
"",
"Insulin increases expression of the reductase gene. It does not degrade SREBP."
],
"src": "lec",
"fig": [
"figs/crs/ch-regulation"
]
},
{
"t": "Regulation of HMG-CoA Reductase",
"lv": "Hard",
"s": "During a long fast, a man's liver has high AMP and high glucagon. His serum cholesterol is high, so his hepatocytes also contain plenty of sterol. Which change in HMG-CoA reductase best describes all three signals together?",
"c": [
"Dephosphorylated and more enzyme made",
"Phosphorylated, less made, more degraded",
"Phosphorylated, with more SREBP cleavage",
"Dephosphorylation with Insig-mediated breakdown",
"No change, since only statins affect the enzyme"
],
"a": 1,
"e": "Put the three slide mechanisms together:\n1. High AMP activates AMPK, which phosphorylates HMG-CoA reductase. The phosphorylated enzyme is inactive.\n2. Glucagon favors phosphorylation and lowers expression of the reductase gene. Insulin does the opposite.\n3. High sterol makes the enzyme bind Insig, which leads to ubiquitination and breakdown (sterol-accelerated degradation). High sterol also keeps SREBP in the ER, so less new enzyme is made.\n\nTakeaway: fasting and high sterol all switch the reductase off: phosphorylated, less made, more destroyed.",
"w": [
"Dephosphorylation is what insulin causes in the fed state.",
"",
"High sterol blocks SREBP cleavage. It does not increase it.",
"Fasting phosphorylates the enzyme. It does not dephosphorylate it.",
"Statins are only one control. AMPK, hormones and sterol levels all regulate the enzyme."
],
"src": "lec",
"fig": [
"figs/crs/ch-regulation"
]
},
{
"t": "Regulation of HMG-CoA Reductase",
"lv": "Hard",
"s": "A 50-year-old woman starts atorvastatin. Four weeks later her LDL has fallen by 40%. Which change in her hepatocytes explains most of the fall in plasma LDL?",
"c": [
"Less SREBP release, so fewer LDL receptors",
"More SREBP cleavage, so more LDL receptors",
"More Insig binding to SREBP–SCAP",
"More AMPK phosphorylation of the enzyme",
"Less bile acid made from cholesterol"
],
"a": 1,
"e": "Walk through the feedback loop:\n1. Statins competitively inhibit HMG-CoA reductase, so the cell makes less cholesterol and its sterol level falls.\n2. Low sterol frees SREBP–SCAP from Insig. They travel to the Golgi, where SREBP is cleaved.\n3. Soluble SREBP enters the nucleus and switches on the genes with an SRE, including the LDL receptor gene.\n4. More LDL receptors on hepatocytes pull LDL out of the blood, and that is the main reason plasma LDL falls.\n\nTakeaway: statin → low cell sterol → SREBP activated → more LDL receptors → lower plasma LDL.",
"w": [
"Low sterol increases SREBP release. Fewer receptors would raise plasma LDL.",
"",
"Insig binding increases when sterol is high, the opposite of a statin's effect.",
"AMPK responds to AMP, not statins. Statins inhibit the enzyme competitively.",
"Statins do not mainly act through bile acids, and less bile acid would not lower LDL."
],
"src": "lec",
"fig": [
"figs/crs/ch-regulation"
]
},
{
"t": "Practice Questions · Cholesterol (from the slides)",
"s": "A 45-year-old man with hypercholesterolemia is started on atorvastatin. This medication lowers cholesterol levels by inhibiting which of the following steps in cholesterol biosynthesis?",
"ns": true,
"shetty": 1,
"c": [
"Conversion of mevalonate to isopentenyl pyrophosphate",
"Conversion of lanosterol to cholesterol",
"Esterification of cholesterol to cholesteryl esters",
"Conversion of HMG-CoA to mevalonate",
"Cleavage of squalene into lanosterol"
],
"a": 3,
"e": "Atorvastatin is a statin, a competitive inhibitor of HMG-CoA reductase. This enzyme reduces HMG-CoA to mevalonate using 2 NADPH, and it is the rate-limiting step of cholesterol synthesis.",
"w": [
"Mevalonate → isopentenyl pyrophosphate uses ATP and releases CO₂. It comes after the statin-blocked step.",
"Lanosterol → cholesterol is the last stretch of the pathway, not the statin target.",
"Esterification is done by ACAT (in cells) and LCAT (in plasma), not HMG-CoA reductase.",
"",
"Squalene is cyclized to lanosterol. Statins do not act there."
],
"fig": [
"figs/crs/ch-pathway"
]
},
{
"t": "Practice Questions · Cholesterol (from the slides)",
"s": "A 62-year-old man has prolonged fasting due to severe gastroenteritis. His hepatocytes have increased AMP levels, leading to activation of AMP-activated protein kinase (AMPK). Which of the following is the immediate effect of AMPK activation on cholesterol synthesis?",
"ns": true,
"shetty": 1,
"c": [
"Activation of HMG-CoA reductase by dephosphorylation",
"Increased SREBP-mediated transcription of HMG-CoA reductase",
"Phosphorylation and inactivation of HMG-CoA reductase",
"Increased conversion of lanosterol to cholesterol",
"Increased activity of cholesterol 7α-hydroxylase"
],
"a": 2,
"e": "AMPK senses a low energy state (high AMP). It phosphorylates HMG-CoA reductase, and the phosphorylated enzyme is inactive, so the cell stops spending ATP and NADPH on cholesterol. Phosphoprotein phosphatase reverses this when energy is plentiful.",
"w": [
"Dephosphorylation activates the enzyme. That is the fed, insulin state, the opposite of AMPK.",
"SREBP transcription is a slower, sterol-driven control. It is not the immediate effect of AMPK.",
"",
"With HMG-CoA reductase inhibited, less flow reaches lanosterol.",
"7α-hydroxylase makes bile acids. AMPK does not act on it here."
],
"fig": [
"figs/crs/ch-regulation"
]
},
{
"t": "Heme & Myoglobin Structure",
"lv": "Easy",
"s": "In myoglobin, which residue binds directly to the iron of heme?",
"c": [
"Distal histidine E7, His-64",
"Valine in the heme crevice",
"Proline at the end of helix F",
"Proximal histidine F8, His-93",
"Glutamate at position 6"
],
"a": 3,
"e": "Myoglobin is a single 153-amino-acid chain, about 80% α-helix in 8 helices (A to H). The heme sits in a crevice lined with nonpolar residues, except for two histidines:\n1. Proximal histidine, F8 (His-93), binds the heme iron directly.\n2. Distal histidine, E7 (His-64), does not touch the iron. It sits on the oxygen side and stabilizes O₂ binding to Fe²⁺.\n\nTakeaway: proximal His F8 binds Fe. Distal His E7 stabilizes bound O₂.",
"w": [
"The distal histidine does not bind the iron. It stabilizes O₂ on the other side of the heme.",
"Valine is one of the nonpolar residues lining the crevice. It does not coordinate iron.",
"Proline ends α-helices. It does not bind the iron.",
"",
"Glutamate 6 is the β-globin residue changed in HbS. It has nothing to do with myoglobin's heme."
],
"src": "lec",
"fig": [
"figs/crs/hb-mb-structure"
]
},
{
"t": "Heme & Myoglobin Structure",
"lv": "Easy",
"s": "Heme is a complex of protoporphyrin IX with iron. In which state must the iron be for heme to bind oxygen?",
"c": [
"Ferric, Fe³⁺",
"Free iron outside the porphyrin ring",
"Either state, equally",
"Zinc replaces iron to bind O₂",
"Ferrous, Fe²⁺"
],
"a": 4,
"e": "Heme is protoporphyrin IX (4 pyrrole rings joined by methenyl bridges) with ferrous iron (Fe²⁺) held by 4 bonds to the ring nitrogens. Only Fe²⁺ binds O₂. If it is oxidized to Fe³⁺, the result is methemoglobin, which cannot carry O₂. Zn²⁺ in the ring is nonfunctional.\n\nTakeaway: functional heme iron = Fe²⁺. Fe³⁺ = methemoglobin.",
"w": [
"Fe³⁺ (ferric) heme is methemoglobin and does not bind O₂.",
"The iron must sit in the center of the porphyrin ring, held by the 4 nitrogens.",
"Only the ferrous state binds O₂.",
"Zinc protoporphyrin is nonfunctional.",
""
],
"src": "lec"
},
{
"t": "Hemoglobin Structure: T & R States",
"lv": "Easy",
"s": "When hemoglobin releases oxygen in the tissues, how do its two αβ dimers change?",
"c": [
"They separate into free monomers",
"They bind more loosely together, the R form",
"They bind more tightly together, the T form",
"They form a new covalent disulfide bond",
"They lose their heme groups"
],
"a": 2,
"e": "HbA is a tetramer of two αβ dimers held by noncovalent bonds:\n1. T (tense, taut) form: the dimers are held tightly by ionic and hydrogen bonds. This is deoxyhemoglobin, and it has low O₂ affinity, so it releases O₂ to the tissues.\n2. R (relaxed) form: some of those bonds break, the dimers move more freely, and affinity is high. This is oxyhemoglobin, which binds O₂ in the lungs.\n\nTakeaway: T = tight dimers, low affinity, unloads O₂. R = relaxed, high affinity, loads O₂.",
"w": [
"The tetramer stays intact. It changes shape between T and R.",
"The R form is the high-affinity oxyhemoglobin that loads O₂ in the lungs.",
"",
"The chains are held by noncovalent bonds, not disulfides.",
"The hemes stay bound in both forms."
],
"src": "lec",
"fig": [
"figs/crs/hb-t-r"
]
},
{
"t": "O₂ Binding Curves & Cooperativity",
"lv": "Easy",
"s": "On a plot of saturation against pO₂, myoglobin gives a hyperbolic curve and hemoglobin gives a sigmoid curve. What explains the sigmoid shape?",
"c": [
"Hemoglobin has a higher P₅₀ because it has more iron",
"Hemoglobin binds one O₂ while myoglobin binds four",
"Each heme in hemoglobin binds O₂ fully independently",
"O₂ binding at one heme raises the others' affinity",
"2,3-BPG binds myoglobin but not deoxyhemoglobin"
],
"a": 3,
"e": "Myoglobin has one heme and binds one O₂, so its curve is hyperbolic with P₅₀ ≈ 1 mm Hg. Hemoglobin has four subunits that cooperate:\n1. O₂ binding at one heme raises the affinity of the remaining hemes (heme-heme interaction, positive cooperativity).\n2. The affinity for the last O₂ is about 300 times the affinity for the first.\n3. The curve is steepest at tissue pO₂, so a small fall in pO₂ releases a lot of O₂. P₅₀ ≈ 26 mm Hg.\n\nTakeaway: sigmoid curve = cooperativity (heme-heme interaction). Mb hyperbolic, P₅₀ 1. Hb sigmoid, P₅₀ 26.",
"w": [
"P₅₀ reflects affinity, not iron content. The question is about the curve's shape.",
"It is the other way round: Hb binds four O₂ and Mb binds one.",
"Independent binding would give a hyperbolic curve, like myoglobin.",
"",
"2,3-BPG binds deoxyhemoglobin, not myoglobin."
],
"src": "lec",
"fig": [
"figs/crs/hb-mb-hb-curves",
"figs/crs/hb-coop"
]
},
{
"t": "O₂ Binding Curves & Cooperativity",
"lv": "Hard",
"s": "During intense exercise, the pO₂ in a runner's leg muscle capillaries falls from 40 to 20 mm Hg. His muscle myoglobin stays almost fully saturated, while his hemoglobin releases much more O₂. Which property of the two proteins best explains this?",
"c": [
"Low Mb P₅₀ and a steep Hb curve at tissue pO₂",
"Myoglobin's higher P₅₀ than hemoglobin",
"Myoglobin binding 2,3-BPG more strongly than Hb",
"Hemoglobin's hyperbolic curve at low pO₂",
"Myoglobin's cooperativity between its four subunits"
],
"a": 0,
"e": "Compare the two curves on the slide:\n1. Myoglobin's P₅₀ is about 1 mm Hg. At 20 mm Hg it is still nearly saturated, so it acts as an O₂ reservoir in muscle and gives up O₂ only when pO₂ falls very low.\n2. Hemoglobin's P₅₀ is about 26 mm Hg, and its sigmoid curve is steepest between roughly 20 and 40 mm Hg. A fall from 40 to 20 therefore unloads a large amount of O₂.\n3. The O₂ released from hemoglobin moves down its gradient onto myoglobin and into the mitochondria.\n\nTakeaway: Mb = high affinity reservoir (P₅₀ 1). Hb = delivery protein whose steep curve unloads O₂ at tissue pO₂.",
"w": [
"",
"Myoglobin's P₅₀ is much lower (about 1 mm Hg), meaning higher affinity.",
"2,3-BPG binds deoxyhemoglobin. It does not bind myoglobin.",
"Hemoglobin's curve is sigmoid. Myoglobin's is hyperbolic.",
"Myoglobin is a single chain with no subunits, so it shows no cooperativity."
],
"src": "lec",
"fig": [
"figs/crs/hb-mb-hb-curves"
]
},
{
"t": "Bohr Effect, CO₂ & Curve Shifts",
"lv": "Easy",
"s": "Which change shifts the hemoglobin–oxygen curve to the left?",
"c": [
"Fever",
"Rise in pCO₂",
"Fall in blood pH",
"Fall in 2,3-BPG",
"Rise in 2,3-BPG"
],
"a": 3,
"e": "Right shift means lower affinity, higher P₅₀ and more O₂ released: rising CO₂, H⁺ (lower pH), 2,3-BPG and temperature. Left shift means higher affinity and less O₂ released: the opposite of each, so falling 2,3-BPG, CO₂, H⁺ or temperature.\n\nTakeaway: CADET, face right (CO₂, Acid, 2,3-DPG/BPG, Exercise, Temperature). Lowering any of them shifts the curve left.",
"w": [
"A higher temperature shifts the curve right.",
"A rise in CO₂ shifts the curve right (Bohr effect).",
"Acid (low pH) shifts the curve right.",
"",
"More 2,3-BPG shifts the curve right."
],
"src": "lec",
"fig": [
"figs/crs/hb-shifts"
]
},
{
"t": "Bohr Effect, CO₂ & Curve Shifts",
"lv": "Hard",
"s": "In a working muscle, CO₂ enters the red cell and is converted to carbonic acid, which dissociates. Which event most directly causes the red cell's hemoglobin to release more O₂?",
"c": [
"H⁺ binds His and N-termini, stabilizing the T form",
"HCO₃⁻ binds the heme iron in place of bound O₂",
"CO₂ oxidizes the heme iron to the Fe³⁺ state",
"H⁺ binds the 2,3-BPG pocket and expels it",
"CO₂ binds the proximal histidine and breaks the Fe bond"
],
"a": 0,
"e": "This is the Bohr effect:\n1. CO₂ + H₂O → H₂CO₃ → HCO₃⁻ + H⁺.\n2. The H⁺ protonates ionizable groups on hemoglobin: the N-terminal α-amino groups and specific histidine side chains, such as His-146 of the β chain.\n3. These protonated groups form ionic bonds between the dimers. The bonds stabilize the T (deoxy) form, so HbO₂ + H⁺ ⇌ HbH⁺ + O₂ moves to the right and O₂ is unloaded in the tissues.\n4. CO₂ itself also binds the amino-terminal ends of the globins, as carbamino-Hb.\n\nTakeaway: more CO₂ and H⁺ → protonated His and N-termini → ionic bonds stabilize T → O₂ released (right shift).",
"w": [
"",
"Bicarbonate does not bind the heme iron. It leaves the cell in exchange for Cl⁻.",
"CO₂ does not oxidize iron. Oxidizing agents such as nitrates make methemoglobin.",
"H⁺ does not displace 2,3-BPG. Both stabilize the T form.",
"CO₂ binds the amino-terminal ends of the globin chains, not the proximal histidine."
],
"src": "lec",
"fig": [
"figs/crs/hb-bohr"
]
},
{
"t": "2,3-BPG & Fetal Hemoglobin",
"lv": "Easy",
"s": "Where on hemoglobin does 2,3-BPG bind?",
"c": [
"To the heme iron of each β subunit",
"In a positive pocket between the β chains",
"To the N-terminal amino groups of α chains",
"To His-146 on each of the α chains",
"In the central cavity between the two α chains"
],
"a": 1,
"e": "2,3-BPG binds in the central crevice of the T form of hemoglobin, between the two β-globin chains. The pocket is lined with positively charged amino acids that bind the negative phosphate and carboxyl groups of 2,3-BPG. One 2,3-BPG binds per tetramer, and it stabilizes the T form, lowering O₂ affinity.\n\nOther binding sites on the slide: O₂ and CO bind Fe²⁺. CO₂ binds the amino-terminal ends. H⁺ binds His-146 of the β subunit.\n\nTakeaway: 2,3-BPG binds the positive pocket between the β chains of deoxy (T) Hb.",
"w": [
"The heme iron binds O₂ and CO, not 2,3-BPG.",
"",
"Amino-terminal groups bind CO₂ (carbamino-Hb).",
"The H⁺ site His-146 is on the β chain, and it binds protons, not 2,3-BPG.",
"The pocket is between the β chains, not the α chains."
],
"src": "lec",
"fig": [
"figs/crs/hb-t-r"
]
},
{
"t": "2,3-BPG & Fetal Hemoglobin",
"lv": "Easy",
"s": "Why does fetal hemoglobin (HbF) take O₂ from the mother's blood across the placenta?",
"c": [
"HbF binds 2,3-BPG more strongly than HbA",
"HbF has a sigmoid curve while HbA's is hyperbolic",
"HbF has four α chains",
"HbF lacks heme in its γ chains",
"HbF binds 2,3-BPG more weakly than HbA"
],
"a": 4,
"e": "HbF is α₂γ₂. The γ chain has fewer positively charged residues in the 2,3-BPG pocket than the β chain, so HbF binds 2,3-BPG weakly:\n1. Less 2,3-BPG bound means less T-form stabilization.\n2. HbF therefore has a higher O₂ affinity (left-shifted curve) than maternal HbA at the same pO₂.\n3. O₂ moves from maternal HbA to fetal HbF across the placenta.\n\nTakeaway: γ chains bind 2,3-BPG weakly → HbF has higher O₂ affinity → O₂ moves from mother to fetus.",
"w": [
"Binding 2,3-BPG more strongly would lower HbF's affinity, the opposite of what happens.",
"Both HbF and HbA give sigmoid curves. HbF's is shifted left.",
"HbF has two α and two γ chains. Four-chain tetramers like γ₄ (Hb Bart's) are abnormal.",
"Every globin chain carries a heme.",
""
],
"src": "lec",
"fig": [
"figs/crs/hb-bpg-curve",
"figs/crs/hb-types"
]
},
{
"t": "2,3-BPG & Fetal Hemoglobin",
"lv": "Hard",
"s": "A 70-year-old man with severe emphysema lives at sea level with an arterial pO₂ of 55 mm Hg. Over months his red cells adapt so that his tissues still get enough O₂. Which change in his red cells best explains this?",
"c": [
"Lower 2,3-BPG, raising hemoglobin's O₂ affinity",
"Conversion of most HbA back into HbF",
"Higher 2,3-BPG, shifting the curve right",
"More methemoglobin to carry extra oxygen",
"A higher pH inside the red blood cell"
],
"a": 2,
"e": "The slide marks this as high yield. In chronic hypoxia (COPD, high altitude) or chronic anemia, red cells make more 2,3-BPG:\n1. 2,3-BPG binds the β-chain pocket of deoxy Hb and stabilizes the T form.\n2. The curve shifts right (P₅₀ rises from about 26 toward 30 mm Hg), so hemoglobin gives up more O₂ in the tissues.\n3. In the slide graph, blood from someone adapted to high altitude (2,3-BPG 8 mmol/L) lies to the right of normal blood (5 mmol/L).\n\nTakeaway: chronic hypoxia or anemia → more 2,3-BPG → right shift → better O₂ unloading.",
"w": [
"Lower 2,3-BPG would make hemoglobin hold on to O₂, worsening tissue hypoxia.",
"Adults do not switch back to HbF in response to hypoxia.",
"",
"Methemoglobin (Fe³⁺) cannot carry O₂ at all.",
"A higher pH would shift the curve left and reduce O₂ release."
],
"src": "lec",
"fig": [
"figs/crs/hb-bpg-curve"
]
},
{
"t": "2,3-BPG & Fetal Hemoglobin",
"lv": "Hard",
"s": "A critically ill patient receives several units of red cells that were stored for weeks in acid-citrate-dextrose. Right after the transfusion his Hb has risen, yet his tissue oxygenation barely improves. Which additive in the storage medium would have prevented this?",
"c": [
"Methylene blue",
"Inosine",
"Sodium thiosulfate",
"Hydroxyurea",
"Amyl nitrite"
],
"a": 1,
"e": "Work through it step by step:\n1. Red cells stored in acid-citrate-dextrose lose 2,3-BPG.\n2. Without 2,3-BPG, hemoglobin has an abnormally high O₂ affinity. It loads O₂ in the lungs but does not release it in the tissues, acting as an O₂ trap rather than an O₂ carrier.\n3. Transfused cells take 4 to 24 hours to rebuild 2,3-BPG, which is long enough to harm a severely ill patient.\n4. Adding inosine (hypoxanthine-ribose) to the storage medium helps. Its ribose enters the cell, is phosphorylated, and passes through the HMP pathway to glycolysis, regenerating 2,3-BPG.\n\nTakeaway: stored blood loses 2,3-BPG → Hb traps O₂. Inosine in the storage medium maintains 2,3-BPG.",
"w": [
"Methylene blue treats methemoglobinemia by reducing Fe³⁺ back to Fe²⁺.",
"",
"Sodium thiosulfate is part of cyanide treatment.",
"Hydroxyurea raises HbF in sickle cell disease.",
"Amyl nitrite makes methemoglobin to trap cyanide."
],
"src": "lec",
"fig": [
"figs/crs/hb-bpg-curve"
]
},
{
"t": "CO, Cyanide & Methemoglobin",
"lv": "Easy",
"s": "A family is found unconscious in a closed garage with a running car. Which statement about carbon monoxide's effect on hemoglobin is correct?",
"c": [
"CO binds Hb's iron weakly and irreversibly",
"CO binds the 2,3-BPG pocket and shifts the curve right",
"CO oxidizes the heme iron to Fe³⁺",
"CO stabilizes the R form and stops O₂ release",
"CO binds the amino-terminal groups like CO₂"
],
"a": 3,
"e": "CO binds the heme Fe²⁺ tightly but reversibly, with an affinity 200 to 250 times that of O₂, forming carboxyhemoglobin:\n1. It takes up O₂ binding sites, lowering O₂ content.\n2. It stabilizes the R (relaxed) form, so the remaining O₂ is held more tightly. The curve shifts left and becomes more hyperbolic, as the slide's 50% CO-Hb curve shows.\n3. It also inhibits complex IV of the electron transport chain directly.\n\nTakeaway: CO → binds Fe²⁺ about 200 times more tightly than O₂ + stabilizes R (left shift) + blocks complex IV.",
"w": [
"CO binds very tightly, but the binding is reversible.",
"CO binds the heme iron, and it shifts the curve left, not right.",
"CO does not change iron's oxidation state. Oxidants make methemoglobin.",
"",
"CO₂, not CO, binds the amino-terminal groups."
],
"src": "lec",
"fig": [
"figs/crs/hb-co"
]
},
{
"t": "CO, Cyanide & Methemoglobin",
"lv": "Hard",
"s": "A worker from an electroplating plant is brought in semiconscious with severe metabolic acidosis, a bitter-almond odor and cherry-red skin. Doctors give amyl nitrite and sodium nitrite first. Why do they help?",
"c": [
"They reduce Fe³⁺ to Fe²⁺ so hemoglobin carries more O₂",
"They displace CO from carboxyhemoglobin fast",
"They make MetHb, which pulls cyanide off complex IV",
"They raise 2,3-BPG to shift the curve right",
"They convert cyanide directly into thiocyanate"
],
"a": 2,
"e": "The picture is cyanide poisoning (HCN from electroplating, plastics or fires):\n1. Cyanide inhibits cytochrome c oxidase (complex IV), so ATP production fails and lactic acidosis follows.\n2. Nitrites oxidize some hemoglobin Fe²⁺ to Fe³⁺, making methemoglobin.\n3. Cyanide has a higher affinity for methemoglobin than for complex IV, so it forms cyanmethemoglobin and releases the enzyme.\n4. Sodium thiosulfate then turns the cyanide into sodium thiocyanate, which is water soluble and excreted in urine.\n5. Methylene blue finally reduces the methemoglobin back to hemoglobin.\n\nTakeaway: cyanide → nitrites (make MetHb to trap CN⁻) → thiosulfate (thiocyanate) → methylene blue (reverse MetHb).",
"w": [
"Nitrites do the opposite: they oxidize Fe²⁺ to Fe³⁺. Methylene blue reduces it.",
"CO poisoning is treated with oxygen. Nitrites do not remove CO.",
"",
"Nitrites do not act through 2,3-BPG.",
"Thiosulfate, not nitrite, makes thiocyanate."
],
"src": "lec"
},
{
"t": "CO, Cyanide & Methemoglobin",
"lv": "Easy",
"s": "Blood drawn from a cyanotic infant is chocolate brown, and her arterial pO₂ is normal. Which enzyme normally prevents this by reducing Fe³⁺ heme back to Fe²⁺?",
"c": [
"Glucose-6-phosphate dehydrogenase",
"Cytochrome c oxidase",
"NADH-cytochrome b₅ reductase",
"Superoxide dismutase",
"Carbonic anhydrase"
],
"a": 2,
"e": "Methemoglobin has Fe³⁺ (ferric) heme. It cannot bind O₂, so it causes cyanosis with chocolate-brown blood even though pO₂ is normal. About 1 to 2% of Hb is normally methemoglobin. NADH-cytochrome b₅ reductase (called NADPH-methemoglobin reductase on the slide) reduces it back to Fe²⁺. A congenital deficiency of this reductase, globin mutations (HbM), or oxidant drugs such as nitrates cause methemoglobinemia. Treatment is methylene blue.\n\nTakeaway: MetHb (Fe³⁺) → chocolate cyanosis with normal pO₂ → cytochrome b₅ reductase deficiency or oxidants → methylene blue.",
"w": [
"G6PD supplies NADPH, which methylene blue needs, but it is not the enzyme that reduces methemoglobin.",
"Cytochrome c oxidase is complex IV, the cyanide target.",
"",
"Superoxide dismutase removes superoxide radicals.",
"Carbonic anhydrase makes carbonic acid from CO₂ and water."
],
"src": "lec",
"fig": [
"figs/crs/hb-methb"
]
},
{
"t": "Globin Genes & Hemoglobin Types",
"lv": "Easy",
"s": "On which chromosome is the β-globin gene cluster, which includes the γ and δ genes, found?",
"c": [
"Chromosome 16",
"Chromosome 15",
"Chromosome 6",
"Chromosome 7",
"Chromosome 11"
],
"a": 4,
"e": "The two globin gene families sit on different chromosomes:\n1. α-family on chromosome 16: two α genes (α1 and α2, so 4 α genes per cell) and one ζ gene.\n2. β-family on chromosome 11: one ε gene, two γ genes (Gγ and Aγ), one δ gene and one β gene.\nHemoglobins form by pairing one chain from each family: HbF α₂γ₂, HbA α₂β₂, HbA₂ α₂δ₂.\n\nTakeaway: α (and ζ) on 16. β, γ, δ, ε on 11.",
"w": [
"Chromosome 16 carries the α and ζ genes.",
"Chromosome 15 carries the fibrillin gene.",
"Chromosome 6 carries the HLA genes.",
"Chromosome 7 carries CFTR.",
""
],
"src": "lec",
"fig": [
"figs/crs/hb-genes-map"
]
},
{
"t": "Globin Genes & Hemoglobin Types",
"lv": "Hard",
"s": "A healthy adult's hemoglobin electrophoresis shows a minor hemoglobin made of α₂δ₂ chains. What fraction of normal adult hemoglobin is this, and when does it appear?",
"c": [
"About 90%, from the 8th month of gestation",
"Under 2%, from 10 to 12 weeks of gestation",
"About 2 to 5%, from about 12 weeks after birth",
"About 60%, in the first weeks after conception",
"3 to 9%, made by glycation of HbA"
],
"a": 2,
"e": "Use the slide table and timeline:\n• Embryonic Hb (first weeks after conception): Gower 1 (ζ₂ε₂), Gower 2 (α₂ε₂), Portland (ζ₂γ₂).\n• HbF (α₂γ₂): from 10 to 12 weeks of gestation, about 60% of Hb in late fetal life, under 2% in adults.\n• HbA (α₂β₂): from the 8th month of gestation, about 90% of adult Hb.\n• HbA₂ (α₂δ₂): from about 12 weeks after birth, 2 to 5% of adult Hb.\n• HbA₁c (α₂β₂-glucose): 3 to 9%, made by glycation.\n\nTakeaway: α₂δ₂ = HbA₂, a minor 2 to 5% adult Hb. It rises in β-thalassemia.",
"w": [
"About 90%, from the 8th month, describes HbA (α₂β₂).",
"Under 2% in adults, starting at 10 to 12 weeks of gestation, describes HbF (α₂γ₂).",
"",
"About 60% describes HbF late in fetal life. The first weeks after conception are the embryonic hemoglobins.",
"3 to 9% by glycation describes HbA₁c."
],
"src": "lec",
"fig": [
"figs/crs/hb-types",
"figs/crs/hb-genes-switch"
]
},
{
"t": "Sickle Cell Disease, HbC, HbSC & HbE",
"lv": "Easy",
"s": "What is the molecular change in sickle cell hemoglobin?",
"c": [
"Lysine replaces glutamate at position 6 of β",
"Deletion of both α genes on one chromosome",
"Glutamate replaces valine at position 6 of α",
"Lysine replaces glutamate at position 26 of β",
"Valine replaces glutamate at position 6 of β"
],
"a": 4,
"e": "HbS comes from a missense point mutation in the β-globin gene: valine replaces glutamate at position 6. Valine is hydrophobic, so deoxy-HbS sticks to a hydrophobic patch (Ala 70, Phe 85, Leu 88) on a neighboring β chain. The molecules polymerize into rigid strands that distort the red cell into a sickle.\n\nTakeaway: HbS = β6 Glu → Val (hydrophobic). HbC = β6 Glu → Lys. HbE = β26 Glu → Lys.",
"w": [
"Lysine for glutamate at β6 is HbC.",
"Deleting α genes causes α-thalassemia.",
"The mutation is in the β chain, and glutamate is the normal residue.",
"Lysine for glutamate at β26 is HbE.",
""
],
"src": "lec",
"fig": [
"figs/crs/hb-sickle-cycle"
]
},
{
"t": "Sickle Cell Disease, HbC, HbSC & HbE",
"lv": "Hard",
"s": "A 19-year-old with sickle cell anemia takes an unpressurized flight and develops severe bone pain. Which combination of conditions would most strongly promote sickling during the flight?",
"c": [
"High pO₂, low pCO₂, alkalosis",
"Low 2,3-BPG and a low body temperature",
"High HbF levels from hydroxyurea",
"Low pO₂, dehydration and fever",
"Increased O₂ affinity of HbS"
],
"a": 3,
"e": "HbS polymerizes only in the deoxygenated (T) form. Anything that favors the T form or concentrates HbS precipitates a crisis:\n1. Low pO₂ (high altitude, unpressurized plane).\n2. High pCO₂ and low pH.\n3. More 2,3-BPG.\n4. Fever (higher temperature).\n5. Dehydration, which raises HbS concentration. Sickled cells also lose K⁺ and water through the Gardos channel, which makes them more dehydrated.\nHbF, by contrast, does not join HbS polymers. That is why hydroxyurea, which raises HbF, is protective.\n\nTakeaway: whatever favors deoxy (T) Hb or dehydrates the cell → sickling. HbF protects.",
"w": [
"Each of these favors the oxygenated R form and would reduce sickling.",
"Less 2,3-BPG and cold both favor the R form and reduce sickling.",
"HbF protects against polymerization. That is the purpose of hydroxyurea.",
"",
"Higher O₂ affinity would favor oxy-Hb, which does not polymerize."
],
"src": "lec",
"fig": [
"figs/crs/hb-sickle-path"
]
},
{
"t": "Sickle Cell Disease, HbC, HbSC & HbE",
"lv": "Hard",
"s": "A 4-month-old with sickle cell anemia (HbSS) has had no symptoms so far. At about 6 months he develops painful swelling of the hands and feet. Why did symptoms wait until now?",
"c": [
"HbS is not made until 6 months of age",
"The spleen did not filter red cells before 6 months",
"Maternal antibodies protected the red cells",
"HbF declined while HbS took its place",
"2,3-BPG is absent in infants"
],
"a": 3,
"e": "Before birth and for the first months after, most hemoglobin is HbF (α₂γ₂). HbF does not take part in HbS polymers and dilutes the HbS. As γ-chain production falls and β-chain (here βS) production rises, HbS replaces HbF. Around 5 to 6 months there is enough HbS to sickle, and dactylitis (painful swelling of the hands and feet) is often the first sign. The same logic explains why hydroxyurea, which raises HbF, helps.\n\nTakeaway: symptoms of sickle cell disease begin at about 5 to 6 months, when HbF falls and HbS takes over.",
"w": [
"βS chains are made from late fetal life onward. The issue is how much HbF remains.",
"The spleen filters red cells from birth.",
"Maternal antibodies do not prevent HbS polymerization.",
"",
"Infants have 2,3-BPG. HbF simply binds it weakly."
],
"src": "lec",
"fig": [
"figs/crs/hb-genes-switch"
]
},
{
"t": "Sickle Cell Disease, HbC, HbSC & HbE",
"lv": "Easy",
"s": "Why do people with sickle cell trait (HbAS) have a survival advantage where Plasmodium falciparum malaria is common?",
"c": [
"Their red cells contain no hemoglobin for the parasite",
"Infected cells sickle and are removed by macrophages",
"HbS kills the parasite directly",
"They make antibodies against the parasite at birth",
"Their red cells lack the Duffy antigen"
],
"a": 1,
"e": "Red cells in sickle cell trait contain about 40% HbS and 60% HbA, and the trait is usually silent. When P. falciparum infects one of these cells, the cell sickles preferentially and splenic macrophages remove it, so fewer parasitized cells circulate. That explains why the HbS gene is common in malaria regions. People with sickle cell anemia (HbSS), by contrast, fare badly with malaria because extra sickling and hemolysis worsen their anemia.\n\nTakeaway: HbAS → infected cells sickle → cleared by macrophages → protection from falciparum malaria.",
"w": [
"The cells contain normal amounts of hemoglobin, about 60% HbA.",
"",
"HbS does not kill the parasite. The host clears the sickled infected cells.",
"There is no inborn antibody against the parasite.",
"Lacking the Duffy antigen protects against P. vivax, not P. falciparum."
],
"src": "lec"
},
{
"t": "Sickle Cell Disease, HbC, HbSC & HbE",
"lv": "Hard",
"s": "A 28-year-old woman of African descent, with Hb near the low end of normal and no previous crises, has a severe infarctive crisis the day after a cesarean delivery. Her electrophoresis shows HbS and HbC but no HbA. Which statement best fits her condition?",
"c": [
"She has one βS and one βC gene, HbSC disease",
"She has sickle cell trait, which rarely causes crises",
"She has HbE disease, a benign hemoglobin variant",
"She has α-thalassemia trait plus sickle trait",
"She has HbSS, with crises usually from childhood"
],
"a": 0,
"e": "HbS and HbC with no HbA means both β genes are abnormal, but different (βS/βC). That is HbSC disease, a compound heterozygous state:\n1. Hb is higher than in HbSS and may be at the low end of normal.\n2. Patients can stay well and undiagnosed until an infarctive crisis, often after childbirth or surgery, which can be fatal.\n3. In HbSS, painful crises usually begin in childhood.\nOn electrophoresis, HbC moves more slowly toward the anode than HbS or HbA because lysine adds positive charge.\n\nTakeaway: HbS + HbC, no HbA = HbSC compound heterozygote: milder anemia, but infarctive crises after childbirth or surgery.",
"w": [
"",
"Sickle cell trait would show HbA alongside HbS.",
"HbE is β26 Glu → Lys, seen in Southeast Asians, and it would not show HbS and HbC.",
"α-thalassemia does not produce HbC.",
"HbSS shows only HbS, and crises usually begin in childhood."
],
"src": "lec",
"fig": [
"figs/crs/hb-electro"
]
},
{
"t": "Sickle Cell Disease, HbC, HbSC & HbE",
"lv": "Easy",
"s": "A blood smear shows many target cells and a few rectangular, deep-red crystals inside red cells. The patient has mild chronic anemia and has never had a painful crisis. Which substitution is most likely?",
"c": [
"Glu → Val at β6",
"Glu → Lys at β26",
"Glu → Lys at β6",
"Loss of 3 α-globin genes",
"Point mutation reducing β-chain synthesis"
],
"a": 2,
"e": "Target cells with rod-shaped HbC crystals point to HbC disease, in which lysine replaces glutamate at position 6 of β-globin. Homozygotes have mild to moderate chronic hemolytic anemia, no infarctive crises, and need no specific therapy. Because lysine is positive, HbC moves more slowly toward the anode on electrophoresis than HbA or HbS.\n\nTakeaway: target cells + HbC crystals = HbC disease (β6 Glu → Lys): mild anemia, no crises.",
"w": [
"Glu → Val at β6 is HbS, which gives sickled cells and painful crises.",
"Glu → Lys at β26 is HbE: small cells, common in Southeast Asia.",
"",
"Loss of 3 α genes is HbH disease.",
"Reduced β-chain synthesis is β⁺-thalassemia."
],
"src": "lec",
"fig": [
"figs/crs/hb-smear"
]
},
{
"t": "Thalassemias",
"lv": "Easy",
"s": "A fetus has deletions of all four α-globin genes. Which tetramer accumulates, and why is it useless for delivering O₂?",
"c": [
"HbH, β₄, which polymerizes when deoxygenated",
"Hb Bart's, γ₄, with no heme-heme interaction",
"HbF, α₂γ₂, which binds 2,3-BPG too strongly",
"HbA₂, α₂δ₂, which is unstable and precipitates",
"Hb Gower 1, ζ₂ε₂, which lacks heme"
],
"a": 1,
"e": "Without any α chains, the fetus cannot make HbF (α₂γ₂). The extra γ chains pair up as γ₄, Hb Bart's:\n1. These tetramers show no heme-heme interaction, so their O₂ curve is nearly hyperbolic.\n2. Their O₂ affinity is very high, so they do not release O₂ to tissues.\n3. The result is hydrops fetalis: severe fetal hypoxia, edema of the subcutaneous tissue, heart failure and death in utero.\n\nTakeaway: 4 α genes deleted → γ₄ (Hb Bart's), no cooperativity → hydrops fetalis.",
"w": [
"HbH (β₄) forms with 3 deleted genes, after birth when β chains are made. It does not polymerize like HbS.",
"",
"HbF needs α chains, which this fetus cannot make.",
"HbA₂ also needs α chains.",
"Gower 1 is a normal early embryonic hemoglobin and contains heme."
],
"src": "lec",
"fig": [
"figs/crs/hb-alpha-thal"
]
},
{
"t": "Thalassemias",
"lv": "Hard",
"s": "A 32-year-old Greek man has mild microcytic hypochromic anemia with normal iron studies. Electrophoresis shows HbA₂ of 6% and slightly raised HbF. Why is HbA₂ raised?",
"c": [
"Fewer β chains, so spare α chains pair with δ",
"δ-globin is made in place of the missing α chains",
"His δ-globin gene has been duplicated",
"Excess γ chains form γ₄ tetramers instead",
"Iron deficiency raises δ-globin synthesis"
],
"a": 0,
"e": "The picture is β-thalassemia minor (trait):\n1. A point mutation lowers β-chain synthesis, so less HbA (α₂β₂) is made and the cells are small and pale. Iron studies are normal, which rules out iron deficiency.\n2. The δ gene is intact, so the spare α chains pair with δ (HbA₂, α₂δ₂) and with γ (HbF, α₂γ₂).\n3. Raised HbA₂ (and HbF) is diagnostic of β-thalassemia. HbH and Hb Bart's are found only in α-thalassemia.\n\nTakeaway: β-thal → excess α pairs with δ and γ → raised HbA₂ (above 3.5%) and HbF.",
"w": [
"",
"δ chains belong to the β family and cannot replace α chains. Here the α chains are normal.",
"The δ gene is not duplicated. Its normal output simply has more α chains to pair with.",
"γ₄ (Hb Bart's) is seen in α-thalassemia, not β.",
"Iron studies are normal. Iron deficiency actually tends to lower HbA₂."
],
"src": "lec",
"fig": [
"figs/crs/hb-beta-thal"
]
},
{
"t": "Thalassemias",
"lv": "Hard",
"s": "A 2-year-old from Cyprus needs transfusions every month. He has frontal bossing, a 'hair-on-end' skull X-ray and hepatosplenomegaly. What is the main cause of his ineffective erythropoiesis?",
"c": [
"Free β chains forming HbH inclusion bodies",
"A failure of renal erythropoietin production",
"Iron deficiency from chronic blood loss",
"Antibodies against red-cell precursors in marrow",
"Unpaired α chains killing erythroblasts"
],
"a": 4,
"e": "This is β-thalassemia major (Cooley's anemia, β⁰/β⁰):\n1. Little or no β chain is made, so excess α chains have no partner.\n2. Unpaired α chains precipitate as inclusion bodies and kill proerythroblasts in the marrow, causing ineffective erythropoiesis.\n3. The red cells that survive are recognized as abnormal in the spleen and hemolyzed, so the anemia is severe and EPO rises.\n4. The marrow expands: chipmunk face, frontal bossing and a hair-on-end skull. Extramedullary erythropoiesis enlarges the liver and spleen.\nThis is also why β-thalassemia is usually more severe than α-thalassemia: unpaired α chains are toxic.\n\nTakeaway: β-thal major → toxic unpaired α chains → precursor death + hemolysis → marrow expansion (hair-on-end) and hepatosplenomegaly.",
"w": [
"Free β chains form HbH (β₄) in α-thalassemia, not β.",
"EPO is high, not low, because the anemia is severe.",
"Thalassemia is microcytic but is not caused by iron deficiency. Transfusions actually cause iron overload.",
"This is not an immune process.",
""
],
"src": "lec",
"fig": [
"figs/crs/hb-beta-thal"
]
},
{
"t": "Practice Questions · Hemoglobin (from the slides)",
"s": "A 28 year old pregnant woman undergoes an ultrasound at 28 weeks, revealing fetal ascites, skin edema, and cardiomegaly. Genetic testing of the fetus shows deletion of all four alpha-globin genes. Which of the following types of hemoglobin is most likely present in high amounts in the fetus?",
"ns": true,
"shetty": 1,
"c": [
"Hemoglobin A",
"Hemoglobin F",
"Hemoglobin S",
"Hemoglobin H",
"Hemoglobin Bart's"
],
"a": 4,
"e": "With all four α genes deleted, no α chains are made, so the fetus cannot make HbF (α₂γ₂) or HbA (α₂β₂). The γ chains form γ₄ tetramers, Hb Bart's. These have no heme-heme interaction and very high O₂ affinity, so tissues get no O₂, and the result is hydrops fetalis (ascites, skin edema, heart failure).",
"w": [
"HbA (α₂β₂) needs α chains.",
"HbF (α₂γ₂) needs α chains.",
"HbS is a β-chain variant, unrelated to α deletions.",
"HbH (β₄) forms with 3 deleted α genes, mostly after birth when β chains are made.",
""
],
"fig": [
"figs/crs/hb-alpha-thal"
]
},
{
"t": "Practice Questions · Hemoglobin (from the slides)",
"s": "A 8-month-old infant is brought to the clinic with failure to thrive, hepatosplenomegaly, and severe anemia (Hb = 6 g/dL, MCV = 65 fL). Peripheral smear shows target cells and nucleated RBCs. Hemoglobin electrophoresis reveals 98% HbF and no HbA. Which of the following is the most likely diagnosis?",
"ns": true,
"shetty": 1,
"c": [
"Sickle cell anemia",
"Iron deficiency anemia",
"Beta thalassemia major",
"Hereditary spherocytosis",
"G6PD deficiency"
],
"a": 2,
"e": "No HbA with almost all HbF means no β chains are made (β⁰/β⁰), which is β-thalassemia major. It appears after about 6 months as HbF declines, with severe microcytic anemia, target cells, nucleated RBCs, failure to thrive and hepatosplenomegaly from extramedullary erythropoiesis.",
"w": [
"Sickle cell anemia would show HbS on electrophoresis.",
"Iron deficiency does not remove HbA or raise HbF to 98%.",
"",
"Hereditary spherocytosis is a membrane defect with normal hemoglobin types.",
"G6PD deficiency causes episodic hemolysis with Heinz bodies and bite cells, and normal hemoglobin types."
],
"fig": [
"figs/crs/hb-beta-thal"
]
},
{
"t": "Practice Questions · Hemoglobin (from the slides)",
"s": "A 5-year-old African-American boy is brought to the emergency department with severe bone pain and fever. He has a history of recurrent infections and anemia. A blood smear shows sickled RBCs and Howell-Jolly bodies. Which of the following best explains the underlying pathophysiology?",
"ns": true,
"shetty": 1,
"c": [
"Hemoglobin polymerization under low oxygen conditions",
"Defective spectrin in the RBC membrane",
"Decreased production of beta-globin chains",
"Decreased synthesis of alpha-globin chains",
"Iron overload due to chronic transfusions"
],
"a": 0,
"e": "Sickled cells, bone pain from vaso-occlusion, recurrent infections and Howell-Jolly bodies (from autosplenectomy) point to sickle cell anemia. The β6 Glu → Val mutation makes deoxy-HbS polymerize into rigid strands at low O₂, distorting the cell into a sickle.",
"w": [
"",
"Defective spectrin causes hereditary spherocytosis, not sickled cells.",
"Reduced β-chain production is β-thalassemia, a quantity defect rather than a structural one.",
"Reduced α-chain synthesis is α-thalassemia.",
"Iron overload is a complication of transfusion, not the cause of sickling."
],
"fig": [
"figs/crs/hb-sickle-path"
]
},
{
"t": "Practice Questions · Hemoglobin (from the slides)",
"s": "A pregnant woman is advised that her fetus has a different type of hemoglobin than she does. Which of the following best explains why fetal hemoglobin (HbF) has a higher oxygen affinity than adult hemoglobin (HbA)?",
"ns": true,
"shetty": 1,
"c": [
"HbF has a higher binding affinity for 2,3-BPG",
"HbF has a lower binding affinity for 2,3-BPG",
"HbF has a higher affinity for carbon dioxide",
"HbF has fewer globin chains than HbA.",
"HbF has lower oxygen saturation than HbA at any given partial pressure"
],
"a": 1,
"e": "HbF (α₂γ₂) binds 2,3-BPG weakly because the γ chains have fewer positively charged residues in the binding pocket. Less 2,3-BPG means the T form is less stabilized, so O₂ affinity is higher and O₂ moves from maternal HbA to fetal HbF across the placenta.",
"w": [
"Stronger 2,3-BPG binding would lower HbF's O₂ affinity.",
"",
"CO₂ affinity does not explain HbF's higher O₂ affinity.",
"HbF and HbA are both tetramers with 4 chains.",
"HbF has higher saturation than HbA at a given pO₂, because its curve is shifted left."
],
"fig": [
"figs/crs/hb-bpg-curve"
]
},
{
"t": "Practice Questions · Hemoglobin (from the slides)",
"s": "A 3-month-old infant presents with cyanosis but has a normal PaO2 on arterial blood gas. The blood sample appears chocolate-brown. Administration of methylene blue resolves the symptoms. Which of the following is the most likely cause of this condition?",
"ns": true,
"shetty": 1,
"c": [
"Carbon monoxide poisoning",
"Oxygen toxicity",
"Hemoglobin polymerization",
"Iron oxidation to Fe3+ state",
"Decreased production of alpha-globin chains"
],
"a": 3,
"e": "Cyanosis with a normal PaO₂, chocolate-brown blood and a response to methylene blue mean methemoglobinemia: the heme iron is oxidized to Fe³⁺, which cannot bind O₂. Methylene blue, using NADPH, reduces Fe³⁺ back to Fe²⁺.",
"w": [
"CO poisoning gives cherry-red skin, not chocolate-brown blood, and is treated with O₂.",
"Oxygen toxicity does not cause cyanosis or brown blood.",
"Hemoglobin polymerization is sickle cell disease.",
"",
"α-thalassemia causes microcytic anemia and is not reversed by methylene blue."
],
"fig": [
"figs/crs/hb-methb"
]
},
{
"t": "Regulation of HMG-CoA Reductase",
"s": "A 55-year-old man with hypercholesterolemia begins treatment with atorvastatin. After several weeks, his hepatocytes increase transcription of HMG-CoA reductase despite continued drug therapy. Which transcription factor is primarily responsible for this compensatory response?",
"ns": true,
"shetty": 1,
"c": [
"NF-κB",
"CREB",
"SREBP-2",
"PPAR-α",
"FOXO1"
],
"a": 2,
"e": "Statins decrease intracellular cholesterol concentration. Low intracellular cholesterol activates Sterol Regulatory Element Binding Protein (SREBP-2), which enters the nucleus and increases transcription of HMG-CoA reductase and LDL receptor genes.\n\nTakeaway: low cell sterol → SREBP-2 → more HMG-CoA reductase and more LDL receptors.",
"w": [
"NF-κB drives inflammatory genes, not sterol genes.",
"CREB responds to cAMP. It is not the sterol sensor.",
"",
"PPAR-α turns on fatty acid oxidation genes; fibrates act on it.",
"FOXO1 controls gluconeogenic genes in fasting."
],
"fig": [
"figs/crs/ch-regulation"
]
},
{
"t": "Regulation of HMG-CoA Reductase",
"s": "A patient with poorly controlled type 1 diabetes mellitus has markedly reduced insulin levels. Which of the following changes is most likely to occur in hepatic cholesterol synthesis?",
"ns": true,
"shetty": 1,
"c": [
"Increased HMG-CoA reductase activity due to dephosphorylation",
"Increased SREBP activation by insulin",
"Decreased HMG-CoA reductase gene expression",
"Increased cholesterol synthesis despite glucagon excess",
"Increased activation of phosphoprotein phosphatase"
],
"a": 2,
"e": "Insulin stimulates cholesterol synthesis by increasing HMG-CoA reductase expression and activity, whereas glucagon inhibits cholesterol synthesis by promoting phosphorylation and decreasing gene expression.\n\nTakeaway: low insulin and high glucagon → less reductase made and more of it phosphorylated (inactive).",
"w": [
"Dephosphorylation is insulin's effect; insulin is low here.",
"Insulin is low, so it cannot activate SREBP.",
"",
"Glucagon excess lowers cholesterol synthesis.",
"Insulin activates the phosphatase; with low insulin it is less active."
],
"fig": [
"figs/crs/ch-regulation"
]
},
{
"t": "Cholesterol Structure & Functions",
"s": "A 46-year-old obese woman presents with recurrent right upper quadrant pain after fatty meals. Ultrasonography reveals cholesterol gallstones. Which alteration most likely contributed to their formation?",
"ns": true,
"shetty": 1,
"c": [
"Increased bile salt concentration",
"Increased phospholipid secretion",
"Increased cholesterol secretion relative to bile salts",
"Increased conversion of cholesterol into bile acids",
"Increased enterohepatic recycling of bile salts"
],
"a": 2,
"e": "Cholesterol gallstones develop when cholesterol secretion exceeds the solubilizing capacity of bile salts and phospholipids, causing cholesterol precipitation.\n\nTakeaway: too much cholesterol or too little bile salt/phospholipid → cholesterol stones.",
"w": [
"More bile salt keeps cholesterol dissolved, so it protects.",
"Phospholipid (lecithin) also keeps cholesterol in solution.",
"",
"Turning cholesterol into bile acids lowers biliary cholesterol.",
"More recycling keeps the bile salt pool large, which protects."
]
},
{
"t": "Cholesterol Structure & Functions",
"s": "A patient undergoes surgical resection of the terminal ileum for Crohn disease. Several months later he develops cholesterol gallstones. Reduced activity of which metabolic pathway most directly contributed to this complication?",
"ns": true,
"shetty": 1,
"c": [
"Cholesterol esterification",
"Enterohepatic circulation of bile acids",
"LDL receptor-mediated endocytosis",
"Cholesterol biosynthesis",
"Reverse cholesterol transport"
],
"a": 1,
"e": "The terminal ileum reabsorbs approximately 98–99% of bile acids. Ileal disease or resection reduces bile acid recycling, decreasing bile salt concentration and increasing the risk of cholesterol gallstone formation.\n\nTakeaway: terminal ileum loss → bile salts lost in stool → cholesterol precipitates in bile.",
"w": [
"ACAT esterification happens inside cells and is unrelated to the ileum.",
"",
"LDL uptake by the liver is not handled by the ileum.",
"Less cholesterol synthesis would protect, not cause stones.",
"Reverse transport by HDL is not an ileal process."
]
},
{
"t": "Cholesterol Synthesis: Pathway & Sites",
"s": "A newborn has microcephaly, syndactyly, developmental delay, and multiple congenital anomalies. Laboratory studies reveal markedly reduced cholesterol levels with accumulation of 7-dehydrocholesterol. Which enzyme is deficient?",
"ns": true,
"shetty": 1,
"c": [
"HMG-CoA reductase",
"Squalene synthase",
"Lanosterol synthase",
"7-Dehydrocholesterol reductase",
"Cholesterol 7α-hydroxylase"
],
"a": 3,
"e": "Smith–Lemli–Opitz syndrome is caused by deficiency of 7-dehydrocholesterol reductase, preventing the final step of cholesterol synthesis.\n\nTakeaway: high 7-DHC + low cholesterol + syndactyly = SLOS.",
"w": [
"A block here would not let 7-DHC build up; it is far upstream.",
"Squalene synthase is upstream; 7-DHC would not accumulate.",
"Lanosterol synthase (cyclase) is upstream of 7-DHC.",
"",
"7α-hydroxylase turns cholesterol into bile acids; cholesterol would rise, not fall."
],
"fig": [
"figs/crs/ch-pathway"
]
},
{
"t": "Regulation of HMG-CoA Reductase",
"s": "A 58-year-old man is treated with cholestyramine for hypercholesterolemia. Which of the following best explains how this drug lowers plasma LDL cholesterol?",
"ns": true,
"shetty": 1,
"c": [
"Direct inhibition of HMG-CoA reductase",
"Inhibition of intestinal cholesterol absorption",
"Increased hepatic LDL receptor expression secondary to increased bile acid synthesis",
"Activation of lipoprotein lipase",
"Increased HDL synthesis"
],
"a": 2,
"e": "Cholestyramine binds bile acids in the intestine, preventing their reabsorption. The liver uses more cholesterol to synthesize new bile acids, lowering hepatic cholesterol and increasing LDL receptor expression, which removes LDL from the circulation.\n\nTakeaway: bile acid resins → liver uses its cholesterol for bile acids → more LDL receptors.",
"w": [
"That is how statins work.",
"That is ezetimibe (NPC1L1).",
"",
"Fibrates raise LPL activity.",
"Niacin raises HDL; resins do not act this way."
]
},
{
"t": "Cholesterol Synthesis: Pathway & Sites",
"s": "A researcher is studying cholesterol biosynthesis in cultured hepatocytes. The cells are incubated with radiolabeled acetate, and the label is subsequently detected in newly synthesized cholesterol. Which of the following best explains why acetate serves as the precursor for cholesterol synthesis?",
"ns": true,
"shetty": 1,
"c": [
"Acetate is directly converted into lanosterol.",
"All 27 carbon atoms of cholesterol are derived from acetyl-CoA.",
"Acetate is first converted into bile acids before cholesterol synthesis.",
"Acetate enters cholesterol synthesis only after conversion into pyruvate.",
"Acetate contributes only the steroid ring structure, while the side chain is derived from amino acids."
],
"a": 1,
"e": "Cholesterol is synthesized from acetyl-CoA, with all 27 carbon atoms originating from acetyl-CoA. Cytosolic acetyl-CoA is generated from mitochondrial citrate by ATP-citrate lyase, and NADPH provides the reducing equivalents required for synthesis.\n\nTakeaway: cholesterol = 27 carbons, all from acetyl-CoA, reduced by NADPH.",
"w": [
"Acetate passes through HMG-CoA, mevalonate and squalene before lanosterol.",
"",
"Bile acids are made from cholesterol, not the other way round.",
"Acetate becomes acetyl-CoA directly; it does not go through pyruvate.",
"The side chain also comes from acetyl-CoA."
],
"fig": [
"figs/crs/ch-pathway"
]
},
{
"t": "Regulation of HMG-CoA Reductase",
"s": "A molecular biologist experimentally depletes intracellular cholesterol in cultured liver cells. Which of the following events occurs first to increase cholesterol biosynthesis?",
"ns": true,
"shetty": 1,
"c": [
"Ubiquitination and degradation of HMG-CoA reductase",
"Binding of SCAP-SREBP complex to INSIG in the endoplasmic reticulum",
"Migration of the SCAP-SREBP complex from the endoplasmic reticulum to the Golgi apparatus",
"Phosphorylation of HMG-CoA reductase by AMPK",
"Increased degradation of SREBP in the Golgi apparatus"
],
"a": 2,
"e": "When intracellular cholesterol levels fall, INSIG dissociates from the SCAP-SREBP complex, allowing the complex to migrate from the endoplasmic reticulum to the Golgi, where SREBP is cleaved. The active SREBP then enters the nucleus and increases transcription of HMG-CoA reductase and LDL receptor genes, enhancing cholesterol synthesis and uptake.\n\nTakeaway: low sterol → SCAP-SREBP leaves INSIG → Golgi cleavage → nucleus.",
"w": [
"Degradation happens when sterol is high.",
"INSIG binding happens when sterol is high and keeps SREBP in the ER.",
"",
"AMPK phosphorylation inactivates the enzyme in low-energy states.",
"SREBP is cleaved (activated) in the Golgi, not degraded."
],
"fig": [
"figs/crs/ch-regulation"
]
},
{
"t": "VLDL, IDL & LDL Metabolism",
"s": "A researcher labels newly synthesized cholesterol in the liver with a radioactive tracer and follows its transport to peripheral tissues. Which lipoprotein is primarily responsible for delivering endogenous cholesterol from the liver to extrahepatic tissues?",
"ns": true,
"shetty": 1,
"c": [
"HDL",
"Chylomicrons",
"Chylomicron remnants",
"LDL",
"VLDL remnants"
],
"a": 3,
"e": "LDL is the major carrier of cholesterol from the liver to peripheral tissues. HDL participates in reverse cholesterol transport by carrying excess cholesterol from tissues back to the liver.\n\nTakeaway: liver → VLDL → IDL → LDL delivers cholesterol out; HDL brings it back.",
"w": [
"HDL carries cholesterol back to the liver.",
"Chylomicrons carry dietary (exogenous) lipid from the gut.",
"Remnants carry dietary lipid to the liver.",
"",
"VLDL remnants (IDL) are an intermediate; most become LDL, which does the delivering."
]
},
{
"t": "HDL & Reverse Cholesterol Transport",
"s": "A 28-year-old man has fasting lipid levels measured during a routine examination. His LDL cholesterol is 160 mg/dL, and HDL is 35 mg/dL. Which enzyme is primarily responsible for the esterification of cholesterol within HDL particles?",
"ns": true,
"shetty": 1,
"c": [
"Lecithin-cholesterol acyltransferase (LCAT)",
"Lipoprotein lipase",
"Acyl-CoA cholesterol acyltransferase (ACAT)",
"HMG-CoA reductase",
"Cholesterol ester transfer protein (CETP)"
],
"a": 0,
"e": "LCAT, activated by apoA-I, moves a fatty acid from lecithin onto free cholesterol in plasma HDL. The cholesteryl ester moves into the core, turning discoidal (nascent) HDL into spherical mature HDL.\n\nTakeaway: esterification in plasma/HDL = LCAT (apoA-I); inside cells = ACAT.",
"w": [
"",
"LPL hydrolyzes TAG in chylomicrons and VLDL.",
"ACAT esterifies cholesterol inside cells, not in HDL.",
"HMG-CoA reductase makes cholesterol; it does not esterify it.",
"CETP transfers esters already made by LCAT to VLDL/LDL."
]
},
{
"t": "LDL Receptor, ACAT & Atherosclerosis",
"s": "A patient is diagnosed with familial hypercholesterolemia, characterized by elevated LDL cholesterol levels. This condition is most commonly caused by a mutation affecting which receptor?",
"ns": true,
"shetty": 1,
"c": [
"Insulin receptor",
"LDL receptor",
"Scavenger receptor B1",
"VLDL receptor",
"ABCA1 transporter"
],
"a": 1,
"e": "Familial hypercholesterolemia (type IIa) is most often a defect in the LDL receptor (less often apoB-100 or PCSK9). LDL cannot be cleared by the liver, so plasma LDL rises, with tendon xanthomas and early MI.\n\nTakeaway: FH = LDL receptor defect → very high LDL.",
"w": [
"Insulin receptor defects cause insulin resistance.",
"",
"SR-B1 takes up HDL cholesteryl ester in the liver.",
"VLDL receptor defects do not cause FH.",
"ABCA1 defect is Tangier disease, with very low HDL."
]
},
{
"t": "Chylomicron Metabolism & Lipoprotein Lipase",
"s": "A patient with a lipid disorder has a mutation in the ApoC-II gene. Which of the following processes will be directly affected?",
"ns": true,
"shetty": 1,
"c": [
"Uptake of LDL by the liver",
"Activation of LCAT",
"Hydrolysis of triglycerides in chylomicrons and VLDL",
"Cholesterol transport to the liver via HDL",
"Conversion of VLDL to LDL"
],
"a": 2,
"e": "ApoC-II is the activator of lipoprotein lipase. Without it, LPL cannot hydrolyze the TAG in chylomicrons and VLDL, giving type I hyperchylomicronemia with pancreatitis risk.\n\nTakeaway: apoC-II activates LPL; apoA-I activates LCAT.",
"w": [
"LDL uptake uses apoB-100 and the LDL receptor.",
"LCAT is activated by apoA-I.",
"",
"HDL transport depends on apoA-I, LCAT and SR-B1.",
"This conversion follows LPL action, so it is only indirectly affected."
]
},
{
"t": "Arachidonic Acid Release & PLA2",
"s": "Eicosanoids are compounds of biochemical, physiological and therapeutic importance. Prostaglandins are the best examples for eicosanoids. Apart from their wide spectrum of actions, these eicosanoids also mediate inflammatory reactions in the human body. Which among the following acts as the predominant precursor of eicosanoids?",
"ns": true,
"shetty": 1,
"c": [
"Margaric acid",
"Cholesterol",
"Linolenic acid",
"Arachidonic acid",
"Oleic acid"
],
"a": 3,
"e": "Eicosanoids are 20-carbon compounds made mainly from arachidonic acid (20:4, ω-6), released from membrane phospholipids by phospholipase A2.\n\nTakeaway: PLA2 → arachidonic acid → COX (prostanoids) or LOX (leukotrienes).",
"w": [
"Margaric acid is a 17-carbon saturated fatty acid.",
"Cholesterol is the precursor of steroids and bile acids.",
"Linolenic acid gives minor ω-3 eicosanoids; arachidonate is the main precursor.",
"",
"Oleic acid (18:1) is not an eicosanoid precursor."
]
},
{
"t": "COX Pathway & Prostanoids",
"s": "Which of the following statements regarding the synthesis and functions of PGE₂ is true? The compound is",
"ns": true,
"shetty": 1,
"c": [
"Synthesized by the action of 5’-lipoxygenases",
"A powerful vasoconstrictor",
"Useful in inducing labour",
"Useful in mobilizing calcium",
"Synthesized mainly in leukocytes"
],
"a": 2,
"e": "PGE₂ is made by the COX pathway. It contracts the uterus and ripens the cervix, so PGE₂ analogs (dinoprostone) are used to induce labour. It is a vasodilator and causes fever and pain.\n\nTakeaway: PGE₂/PGF₂α → uterine contraction, labour induction and abortion.",
"w": [
"5-lipoxygenase makes leukotrienes, not prostaglandins.",
"PGE₂ is a vasodilator; TXA₂ is the vasoconstrictor.",
"",
"Calcium mobilization is IP₃'s role.",
"Leukocytes mainly make leukotrienes."
]
},
{
"t": "Zellweger, X-ALD & Refsum",
"s": "Patients with Refsum's disease present with neurologic damage, cerebellar degeneration and peripheral neuropathy. Symptoms also include night blindness, ataxia, scaly skin and eye problems including cataracts. This is caused by a defect in the oxidation of",
"ns": true,
"shetty": 1,
"c": [
"Phytanic acid",
"Propionic acid",
"Palmitic acid",
"Nervonic acid",
"Arachidonic acid"
],
"a": 0,
"e": "Refsum disease is a defect in peroxisomal α-oxidation (phytanoyl-CoA hydroxylase), so phytanic acid from dairy and ruminant fat builds up.\n\nTakeaway: Refsum = phytanic acid, α-oxidation, retinitis pigmentosa, neuropathy, ichthyosis.",
"w": [
"",
"Propionic acid is handled by propionyl-CoA carboxylase.",
"Palmitic acid uses ordinary mitochondrial β-oxidation.",
"Very long-chain fatty acids like nervonic acid build up in X-ALD/Zellweger.",
"Arachidonic acid feeds eicosanoid synthesis."
]
},
{
"t": "Carnitine & CPT Deficiencies",
"s": "A 5-year-old boy is brought to the emergency department with vomiting and lethargy after a prolonged fast. Laboratory tests reveal hypoglycemia and low ketone bodies. Further workup suggests an issue with mitochondrial fatty acid oxidation. Which enzyme is most likely deficient?",
"ns": true,
"shetty": 1,
"c": [
"Acetyl-CoA carboxylase",
"Carnitine acyltransferase I",
"Hormone-sensitive lipase",
"ATP citrate lyase",
"Fatty acyl-CoA synthetase"
],
"a": 1,
"e": "Fasting hypoketotic hypoglycemia means long-chain fatty acids cannot enter the mitochondria for β-oxidation. CPT-I (carnitine acyltransferase I) on the outer membrane is the gate, so its deficiency stops ketone production and gluconeogenesis support.\n\nTakeaway: fasting + low glucose + low ketones = fatty acid oxidation defect (CPT-I, carnitine, MCAD).",
"w": [
"ACC makes malonyl-CoA for fatty acid synthesis.",
"",
"HSL releases fatty acids from adipose; it is not mitochondrial.",
"ATP citrate lyase serves fatty acid synthesis in the cytosol.",
"Acyl-CoA synthetase activates fatty acids in the cytosol; it is not the mitochondrial step asked."
]
},
{
"t": "β-Oxidation Reactions",
"s": "A 40-year-old man begins a ketogenic diet. During fat metabolism, what are the main products of one cycle of mitochondrial β-oxidation?",
"ns": true,
"shetty": 1,
"c": [
"NADH, FADH2, and glucose",
"Acetyl-CoA, NADPH, and CO2",
"Acetyl-CoA, NADH, and FADH2",
"GTP, CO2, and ATP",
"Pyruvate, NADH, and acetyl-CoA"
],
"a": 2,
"e": "Each turn of β-oxidation (oxidation, hydration, oxidation, thiolysis) gives 1 FADH₂, 1 NADH and 1 acetyl-CoA, and shortens the acyl-CoA by 2 carbons.\n\nTakeaway: one β-oxidation cycle = FADH₂ + NADH + acetyl-CoA.",
"w": [
"Glucose is never made from even-chain fatty acids.",
"NADPH is used in synthesis, not made in β-oxidation.",
"",
"GTP and CO₂ come from the TCA cycle.",
"Pyruvate is not a β-oxidation product."
]
},
{
"t": "Energetics & Regulation",
"s": "A 28-year-old man begins fasting for religious reasons. After 24 hours, his metabolism shifts. Which of the following hormonal changes is responsible for the increase in β-oxidation?",
"ns": true,
"shetty": 1,
"c": [
"High insulin levels",
"Malonyl-CoA accumulation",
"High NADH levels",
"Increased glucagon",
"Increased citrate levels"
],
"a": 3,
"e": "In fasting, glucagon rises and insulin falls. Glucagon activates hormone-sensitive lipase and inactivates acetyl-CoA carboxylase, so malonyl-CoA falls and CPT-I is released from inhibition.\n\nTakeaway: glucagon ↑ → malonyl-CoA ↓ → CPT-I open → β-oxidation ↑.",
"w": [
"Insulin promotes fat storage and suppresses β-oxidation.",
"Malonyl-CoA inhibits CPT-I and blocks β-oxidation.",
"High NADH slows β-oxidation dehydrogenases.",
"",
"Citrate activates ACC, favoring synthesis."
]
},
{
"t": "Fuel Fate & Why the Liver Makes Ketones",
"s": "A biochemistry student skips supper, studies through the night and comes to the examination without breakfast. Under these conditions, the acetyl CoA from fatty acid oxidation will be channeled into the production of",
"ns": true,
"shetty": 1,
"c": [
"3-Hydroxybutyrate",
"citrate",
"glucose",
"malonyl CoA",
"pyruvate"
],
"a": 0,
"e": "After an overnight fast, the liver oxidizes fatty acids while its oxaloacetate is used for gluconeogenesis. Acetyl-CoA cannot enter the TCA cycle fast enough, so it is turned into ketone bodies, mainly 3-hydroxybutyrate.\n\nTakeaway: fasting liver acetyl-CoA → ketone bodies (3-hydroxybutyrate, acetoacetate).",
"w": [
"",
"Citrate needs oxaloacetate, which is diverted to gluconeogenesis.",
"Acetyl-CoA cannot be converted to glucose.",
"Malonyl-CoA is made in the fed state.",
"Pyruvate dehydrogenase is irreversible; acetyl-CoA cannot form pyruvate."
]
},
{
"t": "Ketolysis: Thiophorase & Extrahepatic Use",
"s": "A 22-year-old medical student is fasting for 48 hours. Which of the following tissues is unable to utilize ketone bodies as an energy source during this state?",
"ns": true,
"shetty": 1,
"c": [
"Brain",
"Skeletal muscle",
"Cardiac muscle",
"Liver",
"Renal cortex"
],
"a": 3,
"e": "The liver makes ketone bodies but lacks thiophorase (succinyl-CoA:acetoacetate CoA transferase), so it cannot use them. Brain (after a few days), muscle, heart and renal cortex can.\n\nTakeaway: liver makes ketones but cannot use them (no thiophorase); RBCs cannot use them either (no mitochondria).",
"w": [
"The brain switches to ketones in prolonged fasting.",
"Skeletal muscle uses ketones.",
"Heart muscle readily uses ketones.",
"",
"Renal cortex uses ketones."
]
},
{
"t": "Fuel Fate & Why the Liver Makes Ketones",
"s": "A 36-year-old man is undergoing a prolonged fast. His liver is breaking down fatty acids to meet energy needs. What is the primary fate of acetyl-CoA produced during β-oxidation in the liver under these conditions?",
"ns": true,
"shetty": 1,
"c": [
"Enter the TCA cycle",
"Converted to glucose",
"Used in fatty acid synthesis",
"Used to produce ketone bodies",
"Excreted in the urine"
],
"a": 3,
"e": "In prolonged fasting, hepatic oxaloacetate is pulled into gluconeogenesis, so acetyl-CoA from β-oxidation goes to ketogenesis (HMG-CoA synthase) and the ketones are exported to other tissues.\n\nTakeaway: fasting liver = ketone factory.",
"w": [
"TCA entry is limited because oxaloacetate is low.",
"Acetyl-CoA cannot be converted to glucose.",
"Fatty acid synthesis is off in fasting.",
"",
"Acetyl-CoA is not excreted."
]
},
{
"t": "Ketosis: Hormones, Levels & Causes",
"s": "A 20-year-old man in starvation state is generating high levels of ketone bodies. Which metabolic process is inhibited under these conditions?",
"ns": true,
"shetty": 1,
"c": [
"Glycolysis",
"Fatty acid synthesis",
"Gluconeogenesis",
"Protein degradation",
"Glycogenolysis"
],
"a": 1,
"e": "Starvation means low insulin and high glucagon. Glucagon phosphorylates and inactivates acetyl-CoA carboxylase, so fatty acid synthesis stops while lipolysis, β-oxidation and ketogenesis run.\n\nTakeaway: ketosis state = fatty acid synthesis off, β-oxidation and gluconeogenesis on.",
"w": [
"Glycolysis is reduced but the clearest blocked anabolic pathway is fatty acid synthesis.",
"",
"Gluconeogenesis is increased in starvation.",
"Protein breakdown supplies gluconeogenic amino acids.",
"Glycogenolysis is stimulated early in fasting."
]
},
{
"t": "Phospholipid Structure & Synthesis",
"s": "Phospholipids are the components of plasma membranes. Which one of the combinations is true for phospholipids?",
"ns": true,
"shetty": 1,
"c": [
"Fatty acids + glucose + phosphoric acid",
"Fatty acids + Amino acids + phosphoric acid",
"Fatty acids + Glycerol + Phosphoric acid",
"Fatty acids + proteins + Phosphate group",
"Fatty acids + phosphoric acid"
],
"a": 2,
"e": "A glycerophospholipid is glycerol with two fatty acids on C1 and C2 and phosphoric acid on C3, usually linked to a head group such as choline or ethanolamine.\n\nTakeaway: phospholipid = glycerol + 2 fatty acids + phosphate (+ head group).",
"w": [
"Fatty acid + sugar describes a glycolipid.",
"Amino acids are not part of the backbone.",
"",
"Proteins are not part of phospholipids.",
"It lacks the backbone alcohol (glycerol or sphingosine)."
]
},
{
"t": "2,3-BPG & Fetal Hemoglobin",
"s": "The fetus gets oxygen from the maternal circulation across the placenta. The HbF, the major Hb present in the fetus, cannot function like HbA due to which one of the following reasons?",
"ns": true,
"shetty": 1,
"c": [
"HbF has 2 α and 2 β globin chains",
"HbF contains less heme than HbA",
"Hb F has high Fe3+ iron",
"HbF has 2α and 2ϒ globin chains",
"HbF contains 2α globinchains"
],
"a": 3,
"e": "HbF is α₂γ₂. The γ chains bind 2,3-BPG poorly, so HbF has a higher O₂ affinity than HbA and pulls oxygen across the placenta.\n\nTakeaway: HbF = α₂γ₂ → weak 2,3-BPG binding → left-shifted curve.",
"w": [
"α₂β₂ is HbA.",
"Each globin chain carries one heme in both.",
"Fe³⁺ is methemoglobin, which cannot carry O₂.",
"",
"Both HbA and HbF have 2 α chains; the γ chains are the difference."
],
"fig": [
"figs/crs/hb-bpg-curve"
]
},
{
"t": "2,3-BPG & Fetal Hemoglobin",
"s": "A 5 year old boy who is nutritionally deprived, suffering from hemolytic anemia. Which one of the following allostearic effector which can be produced from glycolytic pathway helps in the unloading of oxygen from hemoglobin in this patient?",
"ns": true,
"shetty": 1,
"c": [
"3-phosphoglycerate",
"2,3 bisphosphoglycerate",
"1,3 bisphosphoglycerate",
"Phosphoenolpyruvate",
"2-phosphoglycerate"
],
"a": 1,
"e": "In red cells, 1,3-BPG from glycolysis is turned into 2,3-BPG (Rapoport-Luebering shunt). 2,3-BPG binds deoxy (T-state) Hb in the central cavity, lowers O₂ affinity and shifts the curve right, helping unloading in anemia and hypoxia.\n\nTakeaway: anemia/hypoxia/altitude → 2,3-BPG ↑ → right shift.",
"w": [
"3-PG is a glycolytic intermediate without this effect.",
"",
"1,3-BPG is the precursor, not the effector.",
"PEP does not bind hemoglobin.",
"2-PG does not regulate Hb."
],
"fig": [
"figs/crs/hb-bpg-curve"
]
},
{
"t": "O₂ Binding Curves & Cooperativity",
"s": "A research team is studying the properties of oxygen-binding proteins. They isolate a monomeric protein from skeletal muscle that demonstrates a hyperbolic oxygen-dissociation curve. Which of the following best explains why this protein's oxygen-binding curve is hyperbolic rather than sigmoidal?",
"ns": true,
"shetty": 1,
"c": [
"it lacks a heme prosthetic group",
"it is composed of a single polypeptide chain",
"it binds 2,3-BPG with very high affinity",
"it contains ferric (Fe³⁺) iron instead of ferrous (Fe²⁺) iron",
"its oxygen affinity is primarily regulated by pH"
],
"a": 1,
"e": "Myoglobin is one chain with one heme, so there is no subunit interaction and no cooperativity: its curve is hyperbolic. Hemoglobin's four subunits bind O₂ cooperatively, giving a sigmoidal curve.\n\nTakeaway: one chain = no cooperativity = hyperbolic (myoglobin).",
"w": [
"Myoglobin has a heme; without it, it could not bind O₂.",
"",
"Myoglobin does not bind 2,3-BPG.",
"Fe³⁺ (metmyoglobin) cannot bind O₂ at all.",
"Myoglobin shows little Bohr effect; pH is not why it is hyperbolic."
],
"fig": [
"figs/crs/hb-mb-hb-curves"
]
},
{
"t": "PDH Complex",
"s": "A 6-month-old infant is brought to the emergency department with poor feeding, lethargy, and rapid breathing. Laboratory studies reveal severe metabolic acidosis with a markedly elevated plasma lactate level. A muscle biopsy shows deficient activity of a mitochondrial enzyme complex. This deficiency leads to an inability to convert pyruvate into acetyl-CoA. Which of the following cofactors is essential for the specific subunit of the deficient enzyme complex that is most commonly mutated in this condition?",
"ns": true,
"shetty": 1,
"c": [
"lipoic acid",
"coenzyme A",
"flavin adenine dinucleotide (FAD)",
"thiamine pyrophosphate (TPP)",
"nicotinamide adenine dinucleotide (NAD+)"
],
"a": 3,
"e": "The patient presents with classic signs of Pyruvate Dehydrogenase Complex (PDHc) deficiency, leading to lactic acidosis. The question asks for the cofactor for the most commonly mutated subunit. Slide 46 states that the most common mutation is in the E1 subunit (X-linked dominant). Slide 41 lists the coenzymes for each subunit, showing that E1 (Pyruvate Decarboxylase) requires Thiamine pyrophosphate (TPP), also known as Vitamin B1. Lipoic acid and Coenzyme A are associated with E2, while FAD and NAD+ are associated with E3.\n\nTakeaway: PDH deficiency is usually E1 (X-linked), and E1 needs TPP (B1).",
"w": [
"Lipoic acid is the E2 cofactor.",
"CoA is used by E2.",
"FAD is the E3 cofactor.",
"",
"NAD⁺ is used by E3."
]
},
{
"t": "PDH Complex",
"s": "A research team is studying the conversion of pyruvate to acetyl-CoA. They isolate the multienzyme complex responsible for this reaction. This complex is composed of multiple copies of three separate enzymes. Which of the following is the E2 component of this complex?",
"ns": true,
"shetty": 1,
"c": [
"Pyruvate carboxylase",
"Dihydrolipoyl transacetylase",
"Isocitrate dehydrogenase",
"Dihydrolipoyl dehydrogenase",
"Pyruvate decarboxylase"
],
"a": 1,
"e": "The pyruvate dehydrogenase (PDH) complex catalyzes the conversion of pyruvate to acetyl-CoA. According to slide 5, it is a multienzyme complex comprised of three enzymes: Pyruvate decarboxylase (E1), Dihydrolipoyl transacetylase (E2), and Dihydrolipoyl dehydrogenase (E3).\n\nTakeaway: E1 decarboxylase (TPP), E2 transacetylase (lipoate, CoA), E3 dehydrogenase (FAD, NAD⁺).",
"w": [
"Pyruvate carboxylase makes oxaloacetate; it is not part of PDH.",
"",
"Isocitrate dehydrogenase is a TCA enzyme.",
"Dihydrolipoyl dehydrogenase is E3.",
"Pyruvate decarboxylase is E1."
]
},
{
"t": "PDH Complex",
"s": "The pyruvate dehydrogenase (PDH) complex requires five different coenzymes to function. Some of these are tightly bound to the complex, while others act as carriers for the reaction's products. Which of the following pairs of coenzymes act as carriers of the products of PDH complex activity?",
"ns": true,
"shetty": 1,
"c": [
"TPP and Lipoic acid",
"FAD+ and NAD+",
"Lipoic acid and Coenzyme A",
"Coenzyme A and NAD+",
"TPP and FAD+"
],
"a": 3,
"e": "As stated on slide 5, the PDH complex requires five coenzymes. TPP, lipoic acid, and FAD+ are tightly bound to the enzymes of the complex. Coenzyme A (which carries the acetyl group as acetyl-CoA) and NAD+ (which carries the high-energy electrons as NADH) are employed as carriers of the products.\n\nTakeaway: bound = TPP, lipoate, FAD; carriers = CoA and NAD⁺.",
"w": [
"Both are tightly bound.",
"FAD is bound.",
"Lipoic acid is bound.",
"",
"Both are bound."
]
},
{
"t": "PDH Complex",
"s": "In a well-fed state, a cell has high energy levels and an abundance of biosynthetic intermediates. The activity of the pyruvate dehydrogenase (PDH) complex is downregulated to prevent the excessive production of acetyl-CoA. Which of the following products directly inhibits the dihydrolipoyl dehydrogenase (E3) component of the complex?",
"ns": true,
"shetty": 1,
"c": [
"ATP",
"Acetyl CoA",
"Pyruvate",
"NADH",
"Citrate"
],
"a": 3,
"e": "Slide 7 outlines the regulation of the PDH complex. High concentrations of reaction products inhibit the complex. Specifically, acetyl-CoA inhibits the transacetylase component (E2), and NADH inhibits the dihydrolipoyl dehydrogenase component (E3).\n\nTakeaway: acetyl-CoA inhibits E2; NADH inhibits E3.",
"w": [
"ATP acts through activating PDH kinase.",
"Acetyl-CoA inhibits E2.",
"Pyruvate activates PDH by inhibiting the kinase.",
"",
"Citrate does not directly inhibit E3."
]
},
{
"t": "PDH Complex",
"s": "A 6-month-old infant presents with developmental delay, poor muscle tone, and intermittent ataxia. Lab studies reveal elevated lactate levels. A deficiency in pyruvate dehydrogenase (PDH) is suspected. The activity of the PDH complex is tightly regulated by covalent modification. Which of the following events leads to the activation of the PDH complex?",
"ns": true,
"shetty": 1,
"c": [
"Phosphorylation by PDH kinase",
"Dephosphorylation by PDH phosphatase",
"Inhibition of PDH phosphatase by Ca2+",
"Activation of PDH kinase by ADP",
"Binding of acetyl-CoA to the kinase"
],
"a": 1,
"e": "According to slide 7, the PDH complex is inactivated by phosphorylation via PDH kinase and activated by dephosphorylation via PDH phosphatase. An active phosphatase leads to an active PDH complex. Insulin and elevated mitochondrial Ca2+ levels stimulate the phosphatase, thereby activating the complex (Slide 8).\n\nTakeaway: PDH is on when dephosphorylated (phosphatase, insulin, Ca²⁺).",
"w": [
"Phosphorylation inactivates PDH.",
"",
"Ca²⁺ stimulates, not inhibits, the phosphatase.",
"ADP inhibits the kinase.",
"Acetyl-CoA activates the kinase, which turns PDH off."
]
},
{
"t": "PDH Complex",
"s": "A 50-year-old farm worker presents with vomiting, abdominal pain, and garlic-like odor on his breath after accidental exposure to a pesticide. He is diagnosed with arsenic poisoning. The trivalent form of arsenic (arsenite) is known to inhibit enzymes by binding to thiol groups. Which coenzyme of the pyruvate dehydrogenase and α-ketoglutarate dehydrogenase complexes is the primary target of arsenite?",
"ns": true,
"shetty": 1,
"c": [
"Thiamine pyrophosphate (TPP)",
"FAD",
"NAD+",
"Lipoic acid",
"Coenzyme A"
],
"a": 3,
"e": "Arsenite binds the two –SH groups of reduced lipoic acid (on E2 of PDH and α-KGDH), blocking both complexes. Pyruvate and lactate build up.\n\nTakeaway: arsenite → lipoic acid → PDH and α-KGDH blocked; garlic breath, rice-water stools.",
"w": [
"TPP has no dithiol for arsenite.",
"FAD is not the thiol target.",
"NAD⁺ is not the thiol target.",
"",
"CoA has one –SH; arsenite needs the lipoate dithiol."
]
},
{
"t": "PDH Complex",
"s": "A medical student is reviewing the regulation of the pyruvate dehydrogenase (PDH) complex. She notes that in addition to regulation by reaction products and covalent modification, the complex is also activated by signals of low energy charge. Which of the following sets of molecules activates the PDH complex by inhibiting the PDH kinase?",
"ns": true,
"shetty": 1,
"c": [
"ATP, NADH, Acetyl CoA",
"Pyruvate, NAD+, ADP",
"Citrate, Succinyl CoA, GTP",
"Ca2+, Insulin, Glucose",
"NADH, FADH2, ATP"
],
"a": 1,
"e": "PDH kinase phosphorylates and turns off PDH. Pyruvate, NAD⁺ and ADP signal low energy and substrate available, so they inhibit the kinase and keep PDH on.\n\nTakeaway: kinase activated by ATP, NADH, acetyl-CoA; kinase inhibited by pyruvate, NAD⁺, ADP.",
"w": [
"These activate the kinase and turn PDH off.",
"",
"These are high-energy signals, not kinase inhibitors.",
"Ca²⁺ and insulin act on the phosphatase; glucose is not a direct effector.",
"These are high-energy signals."
]
},
{
"t": "PDH Complex",
"s": "An infant is diagnosed with congenital lactic acidosis due to a severe deficiency of the pyruvate dehydrogenase (PDH) complex. This deficiency limits the cell's ability to produce citrate from pyruvate. This impairment directly deprives the cell of energy because the subsequent steps of the TCA cycle cannot proceed. Which clinical feature is a direct consequence of this underlying biochemical defect?",
"ns": true,
"shetty": 1,
"c": [
"Hypoglycemia",
"Abnormal ↑ lactate levels",
"Decreased porphyrin synthesis",
"Ketoacidosis",
"Hyperammonemia"
],
"a": 1,
"e": "When PDH is deficient, pyruvate cannot be converted to acetyl-CoA. The excess pyruvate is shunted to an alternative pathway, its reduction to lactate by lactate dehydrogenase, causing a buildup of lactate in the blood.\n\nTakeaway: PDH deficiency → pyruvate → lactate (and alanine); treat with a ketogenic diet.",
"w": [
"Glucose can still be made; hypoglycemia is not the direct result.",
"",
"Porphyrin synthesis uses succinyl-CoA, not directly affected.",
"The acidosis is lactic, not ketotic.",
"Ammonia is unaffected."
]
},
{
"t": "TCA Cycle Reactions & Energetics",
"s": "A biochemist calculates the total energy yield from one turn of the citric acid cycle. Assuming that each NADH molecule yields 3 ATP and each FADH2 molecule yields 2 ATP, what is the total number of ATP molecules generated from the complete oxidation of one molecule of acetyl-CoA in the TCA cycle?",
"ns": true,
"shetty": 1,
"c": [
"10",
"12",
"15",
"24",
"32"
],
"a": 1,
"e": "Slide 12 provides a table summarizing the energy produced by the TCA cycle per acetyl-CoA. The cycle generates 3 NADH (3 x 3 ATP = 9 ATP), 1 FADH2 (1 x 2 ATP = 2 ATP), and 1 GTP (equivalent to 1 ATP). The total is 9 + 2 + 1 = 12 ATP per acetyl-CoA.\n\nTakeaway: 3 NADH + 1 FADH₂ + 1 GTP = 12 ATP (old values) or 10 ATP (new values 2.5/1.5).",
"w": [
"10 uses the newer 2.5/1.5 values, not the ones given.",
"",
"15 is per pyruvate (PDH NADH + one turn).",
"24 is two turns of the cycle.",
"32 is roughly per glucose."
]
},
{
"t": "TCA Cycle Reactions & Energetics",
"s": "The citric acid cycle involves a series of oxidation-reduction reactions that harvest high-energy electrons. These electrons are captured by the coenzymes NAD+ and FAD. Which specific enzymatic reaction in the TCA cycle directly results in the formation of FADH2?",
"ns": true,
"shetty": 1,
"c": [
"Isocitrate dehydrogenase",
"Malate dehydrogenase",
"Succinate dehydrogenase",
"α-ketoglutarate dehydrogenase",
"Succinate thiokinase"
],
"a": 2,
"e": "The diagram on slide 11 clearly shows the reaction steps of the TCA cycle. The conversion of succinate to fumarate, catalyzed by succinate dehydrogenase, is the only step where FAD is reduced to FADH2. The table on slide 12 confirms that the succinate dehydrogenase reaction produces FADH2, yielding 2 ATP.\n\nTakeaway: succinate dehydrogenase = FADH₂ and is also Complex II of the ETC.",
"w": [
"Isocitrate dehydrogenase makes NADH and CO₂.",
"Malate dehydrogenase makes NADH.",
"",
"α-KGDH makes NADH and CO₂.",
"Succinate thiokinase makes GTP."
]
},
{
"t": "TCA Cycle Reactions & Energetics",
"s": "A research student is reviewing the stoichiometry of the TCA cycle as presented in a lecture. According to the overall balanced equation for one turn of the cycle, the entry of one molecule of acetyl-CoA results in the production of which combination of molecules?",
"ns": true,
"shetty": 1,
"c": [
"2 CO2, 3 NADH, 1 FADH2, 1 GTP",
"1 CO2, 2 NADH, 2 FADH2, 1 ATP",
"2 CO2, 2 NADH, 1 FADH2, 2 GTP",
"3 CO2, 3 NADH, 1 FADH2, 1 GTP",
"2 CO2, 3 NAD+, 1 FAD, 1 GDP"
],
"a": 0,
"e": "One turn: isocitrate DH (NADH, CO₂), α-KGDH (NADH, CO₂), succinate thiokinase (GTP), succinate DH (FADH₂), malate DH (NADH). Total 2 CO₂, 3 NADH, 1 FADH₂, 1 GTP.\n\nTakeaway: 2 CO₂ released at isocitrate DH and α-KGDH.",
"w": [
"",
"Only 1 FADH₂ and 2 CO₂ are made.",
"There are 3 NADH and 1 GTP.",
"3 CO₂ is per pyruvate, counting PDH.",
"These are the oxidized inputs, not products."
]
},
{
"t": "TCA Cycle Reactions & Energetics",
"s": "The citric acid cycle is described as amphibolic because it participates in both catabolism (breaking down molecules for energy) and anabolism (building up complex molecules). Which intermediate of the TCA cycle can be transported out of the mitochondria to serve as the primary precursor for fatty acid and cholesterol synthesis in the cytosol?",
"ns": true,
"shetty": 1,
"c": [
"Succinyl CoA",
"α-Ketoglutarate",
"Oxaloacetate",
"Citrate",
"Fumarate"
],
"a": 3,
"e": "Acetyl-CoA cannot cross the inner membrane, so it leaves as citrate. In the cytosol ATP-citrate lyase splits citrate back into acetyl-CoA (for fatty acids and cholesterol) and oxaloacetate.\n\nTakeaway: citrate shuttle carries acetyl-CoA to the cytosol.",
"w": [
"Succinyl-CoA is used for heme synthesis.",
"α-KG feeds amino acids like glutamate.",
"Oxaloacetate cannot cross the membrane directly.",
"",
"Fumarate is not the carbon carrier for lipid synthesis."
]
},
{
"t": "TCA Cycle Reactions & Energetics",
"s": "A patient is diagnosed with a congenital erythropoietic porphyria, a genetic disorder affecting heme synthesis. This condition is caused by a deficiency in an enzyme involved in the pathway that synthesizes porphyrins. The synthesis of porphyrins, the core structure of heme, begins with a specific intermediate from the TCA cycle. Which TCA cycle intermediate is the direct precursor for porphyrin synthesis?",
"ns": true,
"shetty": 1,
"c": [
"Citrate",
"Acetyl-CoA",
"Succinyl-CoA",
"α-Ketoglutarate",
"Oxaloacetate"
],
"a": 2,
"e": "Heme synthesis starts with succinyl-CoA + glycine → δ-aminolevulinate (ALA synthase, needs B6) in the mitochondria.\n\nTakeaway: heme = succinyl-CoA + glycine.",
"w": [
"Citrate feeds lipid synthesis.",
"Acetyl-CoA feeds lipids and ketones.",
"",
"α-KG feeds glutamate.",
"Oxaloacetate feeds gluconeogenesis and aspartate."
]
},
{
"t": "TCA Regulation, Inhibitors & Anaplerosis",
"s": "The rate of the citric acid cycle is precisely adjusted to meet the cell's demand for ATP. Several enzymes serve as primary control points. Which of the following enzymes is considered the rate-limiting step and is allosterically stimulated by ADP and Ca2+?",
"ns": true,
"shetty": 1,
"c": [
"Aconitase",
"Citrate synthase",
"Succinate dehydrogenase",
"Malate dehydrogenase",
"Isocitrate dehydrogenase"
],
"a": 4,
"e": "Isocitrate dehydrogenase is the \"rate-limiting step\" and is \"Stimulated by ADP, Ca2+\". High levels of ADP signal a low energy state, thus activating the cycle to produce more ATP.\n\nTakeaway: isocitrate DH = rate-limiting; + ADP, Ca²⁺; − ATP, NADH.",
"w": [
"Aconitase is not a control point.",
"Citrate synthase is regulated but not the rate-limiting step.",
"Succinate DH is not the main control point.",
"Malate DH is not rate-limiting.",
""
]
},
{
"t": "TCA Regulation, Inhibitors & Anaplerosis",
"s": "The activity of α-ketoglutarate dehydrogenase, a key regulatory enzyme in the TCA cycle, is tightly controlled by the energy status of the cell. Which of the following conditions would lead to the inhibition of this enzyme complex?",
"ns": true,
"shetty": 1,
"c": [
"High levels of ADP",
"High levels of succinyl CoA and NADH",
"High levels of Ca2+",
"Low ATP/ADP ratio",
"High levels of α-ketoglutarate"
],
"a": 1,
"e": "α-ketoglutarate dehydrogenase complex is inhibited by its products, succinyl CoA and NADH. It is also inhibited by a high energy charge, indicated by high levels of ATP and GTP. High levels of succinyl CoA and NADH signal that the cycle is producing intermediates and reducing equivalents at a sufficient rate.\n\nTakeaway: α-KGDH is product-inhibited (succinyl-CoA, NADH) and uses the same cofactors as PDH.",
"w": [
"ADP signals low energy and does not inhibit.",
"",
"Ca²⁺ activates α-KGDH.",
"A low ATP/ADP ratio activates the cycle.",
"Substrate does not inhibit."
]
},
{
"t": "TCA Regulation, Inhibitors & Anaplerosis",
"s": "A laboratory is investigating a potent poison known as fluoroacetate. This compound itself is not toxic, but it is metabolically converted into a \"lethal\" inhibitor of the TCA cycle. Fluoroacetate is first converted to fluoroacetyl CoA, which then condenses with oxaloacetate to form fluorocitrate. Which enzyme of the TCA cycle is potently inhibited by fluorocitrate?",
"ns": true,
"shetty": 1,
"c": [
"Citrate synthase",
"Aconitase",
"Isocitrate dehydrogenase",
"Succinate dehydrogenase",
"Fumarase"
],
"a": 1,
"e": "Fluorocitrate is a suicide inhibitor of aconitase, so citrate builds up and the cycle stops (\"lethal synthesis\").\n\nTakeaway: fluoroacetate → fluorocitrate → aconitase blocked.",
"w": [
"Citrate synthase actually makes fluorocitrate.",
"",
"Isocitrate DH is downstream of the block.",
"Malonate inhibits succinate DH.",
"Fumarase is not affected."
]
},
{
"t": "TCA Regulation, Inhibitors & Anaplerosis",
"s": "To study the cyclic nature of the TCA cycle, a researcher adds a substance that is a structural analog of succinate to a mitochondrial preparation. This substance competitively inhibits the enzyme that acts on succinate. Which of the following compounds was likely used by the researcher?",
"ns": true,
"shetty": 1,
"c": [
"Fluoroacetate",
"Arsenite",
"Malate",
"Malonate",
"Fumarate"
],
"a": 3,
"e": "Malonate looks like succinate and competitively inhibits succinate dehydrogenase (Complex II).\n\nTakeaway: malonate = competitive inhibitor of succinate dehydrogenase.",
"w": [
"Fluoroacetate blocks aconitase via fluorocitrate.",
"Arsenite blocks lipoate in PDH and α-KGDH.",
"Malate is a normal intermediate.",
"",
"Fumarate is the product, not an inhibitor."
]
},
{
"t": "TCA Regulation, Inhibitors & Anaplerosis",
"s": "During prolonged exercise or fasting, intermediates of the TCA cycle may be depleted for gluconeogenesis. To maintain the cycle's function, these intermediates must be replenished through anaplerotic reactions. Which of the following is described as the most important anaplerotic reaction, directly forming oxaloacetate?",
"ns": true,
"shetty": 1,
"c": [
"The conversion of glutamate to α-ketoglutarate",
"The conversion of pyruvate to acetyl-CoA",
"The carboxylation of pyruvate to oxaloacetate",
"The oxidation of odd-chain fatty acids to succinyl-CoA",
"The conversion of aspartate to fumarate"
],
"a": 2,
"e": "Pyruvate carboxylase (biotin, activated by acetyl-CoA) makes oxaloacetate directly from pyruvate. It is the main anaplerotic reaction.\n\nTakeaway: pyruvate carboxylase = biotin, acetyl-CoA activated, refills oxaloacetate.",
"w": [
"This refills α-KG, not oxaloacetate directly.",
"PDH makes acetyl-CoA, which does not add net intermediates.",
"",
"Odd-chain oxidation refills succinyl-CoA.",
"This refills fumarate, not oxaloacetate directly."
]
},
{
"t": "Electron Transport Chain & Uncouplers",
"s": "50 year old woman with a history of psychiatric problems has been brought to the emergency room with high fever, sweating and tremours after ingesting approximately 100 aspirin tablets in a suicide attempt. High fever associated with salicylate overdose is explained by",
"ns": true,
"shetty": 1,
"c": [
"Excessive ADP phosphorylation",
"Excessive increase in proton concentration gradient",
"Rupture of mitochondrial membranes",
"Stimulation of thermogenin",
"Uncoupling of electron transport from ATP synthesis"
],
"a": 4,
"e": "High-dose salicylate is a weak acid that carries protons across the inner mitochondrial membrane, uncoupling oxidation from phosphorylation. The energy of the gradient is lost as heat, causing hyperthermia.\n\nTakeaway: aspirin overdose, DNP and thermogenin → uncoupling → heat, ↓ ATP, ↑ O₂ use.",
"w": [
"Uncoupling lowers ATP synthesis.",
"The gradient collapses rather than rises.",
"The membranes stay intact.",
"Thermogenin (UCP-1) is a natural uncoupler in brown fat, not activated by aspirin.",
""
]
},
{
"t": "Electron Transport Chain & Uncouplers",
"s": "The electron transport chain (ETC) of the inner mitochondrial membrane comprises four complexes and two mobile carriers. Identify the two mobile carriers from the following:",
"ns": true,
"shetty": 1,
"c": [
"Cytochrome c and coenzyme Q (Ubiquinone)",
"Coenzyme Q (Ubiquinone) and cytochrome b",
"Cytochrome c and Fe S (Iron sulfur) complex",
"Cytochrome a and Fe S (Iron sulfur) complex",
"Coenzyme Q (Ubiquinone) and cytochrome a"
],
"a": 0,
"e": "Coenzyme Q is lipid-soluble and moves within the membrane from Complex I/II to III; cytochrome c is a small protein on the outer face of the inner membrane carrying electrons from III to IV.\n\nTakeaway: mobile carriers = CoQ and cytochrome c.",
"w": [
"",
"Cytochrome b is fixed in Complex III.",
"Fe-S centers are fixed in the complexes.",
"Cytochrome a is fixed in Complex IV.",
"Cytochrome a is fixed in Complex IV."
]
},
{
"t": "Electron Transport Chain & Uncouplers",
"s": "A 28-year-old woman presents to her physician with a one-month history of significant weight loss despite a normal appetite, excessive sweating, and a persistently elevated body temperature. She admits to taking an unregulated \"diet pill\" she purchased online, which is later found to contain 2,4-dinitrophenol (DNP). What is the primary mechanism by which DNP causes these symptoms?",
"ns": true,
"shetty": 1,
"c": [
"It inhibits the ATP-ADP translocase, trapping ATP within the mitochondrial matrix.",
"It directly inhibits Complex IV, preventing the final reduction of oxygen.",
"It allows protons to leak across the inner mitochondrial membrane, dissipating the proton-motive force.",
"It blocks the F0 subunit of ATP synthase, preventing both proton flow and ATP synthesis.",
"It stimulates the synthesis of uncoupling protein-1 (UCP-1) in white adipose tissue."
],
"a": 2,
"e": "DNP is a lipid-soluble proton carrier. Protons return to the matrix without passing through ATP synthase, so electron transport speeds up, fuel is burned, and energy is released as heat.\n\nTakeaway: uncouplers → ↑ O₂ consumption, ↓ ATP, ↑ heat.",
"w": [
"That is atractyloside.",
"That is cyanide, CO or azide.",
"",
"That is oligomycin.",
"DNP does not act through UCP-1."
]
},
{
"t": "Electron Transport Chain & Uncouplers",
"s": "A researcher is studying the electron transport chain in isolated mitochondria. She adds succinate as a substrate, which provides electrons to Complex II. She observes that electrons are successfully transferred to Complex III. This transfer is mediated by a mobile, lipid-soluble carrier derived from isoprenoid units. Which of the following is this carrier?",
"ns": true,
"shetty": 1,
"c": [
"Cytochrome c",
"NADH",
"Coenzyme Q (Ubiquinone)",
"Flavin mononucleotide (FMN)",
"Iron-sulfur protein"
],
"a": 2,
"e": "Coenzyme Q (ubiquinone) has an isoprenoid tail that keeps it in the membrane. It collects electrons from Complexes I and II and passes them to Complex III.\n\nTakeaway: CoQ = isoprenoid (shares the mevalonate pathway with cholesterol; statins lower CoQ).",
"w": [
"Cytochrome c carries electrons from III to IV and is a protein.",
"NADH donates to Complex I.",
"",
"FMN is fixed in Complex I.",
"Fe-S proteins are fixed within complexes."
]
},
{
"t": "PDH Complex: Reaction & Regulation",
"lv": "Easy",
"s": "Two hours after a large carbohydrate meal, insulin is high. What happens to the pyruvate dehydrogenase (PDH) complex in the liver?",
"c": [
"It is phosphorylated and becomes active",
"It is converted into pyruvate carboxylase",
"It is phosphorylated and becomes inactive",
"It is allosterically inhibited by insulin",
"It is dephosphorylated and becomes active"
],
"a": 4,
"e": "Step 1: PDH is controlled by covalent modification. PDH kinase phosphorylates the complex, which inactivates it; PDH phosphatase removes the phosphate, which activates it.\nStep 2: Insulin stimulates dephosphorylation of the complex, so after a meal PDH is switched on.\nStep 3: Active PDH turns the abundant pyruvate into acetyl CoA, which can enter the TCA cycle or be used for fatty acid synthesis.\n\nTakeaway: Phosphorylated PDH = inactive; dephosphorylated PDH = active. Insulin activates PDH.",
"w": [
"Phosphorylation by PDH kinase inactivates PDH, it does not activate it.",
"PDH and pyruvate carboxylase are separate enzymes.",
"This happens when energy charge is high, not after insulin release.",
"Insulin acts through dephosphorylation, not by binding PDH directly.",
""
],
"src": "lec",
"fig": [
"figs/crs/tca-pdh-regulation"
]
},
{
"t": "PDH Complex: Reaction & Regulation",
"lv": "Easy",
"s": "The PDH reaction converts pyruvate to acetyl CoA, and ΔG°′ is about −33 kJ/mol. What is the most important consequence of this reaction being irreversible?",
"c": [
"Acetyl CoA can never become pyruvate again",
"Pyruvate can then never be turned into lactate",
"Pyruvate can then never be turned into alanine",
"Acetyl CoA can then never enter the TCA cycle",
"Oxaloacetate can then never be regenerated"
],
"a": 0,
"e": "Step 1: Pyruvate + CoA + NAD⁺ → acetyl CoA + CO₂ + NADH. One carbon is lost as CO₂ and the large negative ΔG makes the step irreversible.\nStep 2: Because it is irreversible, acetyl CoA from any source (including fatty acids) cannot be converted back to pyruvate.\nStep 3: This is why PDH is the committed link between glycolysis and the TCA cycle, and why it is tightly regulated at this branch point.\n\nTakeaway: PDH is the irreversible link between glycolysis and the TCA cycle; acetyl CoA cannot go back to pyruvate.",
"w": [
"",
"Lactate dehydrogenase is reversible and separate from PDH.",
"Pyruvate is transaminated to alanine by a separate enzyme.",
"Acetyl CoA is exactly what enters the TCA cycle.",
"Oxaloacetate is regenerated in the last step of every turn."
],
"src": "lec",
"fig": [
"figs/crs/tca-pdh-reaction"
]
},
{
"t": "PDH Complex: Reaction & Regulation",
"lv": "Hard",
"s": "During a sprint, nerve impulses release Ca²⁺ in skeletal muscle and mitochondrial Ca²⁺ rises. At the same time ADP rises as ATP is used. How do these changes affect the PDH complex?",
"c": [
"Phosphatase is stimulated, kinase is inhibited",
"NADH builds up and inhibits E3",
"Acetyl CoA builds up and inhibits E2",
"Both enzymes are stimulated equally",
"Kinase is stimulated and phosphatase is inhibited"
],
"a": 0,
"e": "Step 1: A rise in mitochondrial Ca²⁺ stimulates PDH phosphatase, which removes the inactivating phosphate.\nStep 2: ADP, pyruvate and NAD⁺ (signals of low energy charge) inhibit PDH kinase, so less phosphate is added.\nStep 3: With the phosphatase on and the kinase off, the complex stays dephosphorylated and active, supplying acetyl CoA to make more ATP.\n\nTakeaway: Ca²⁺ stimulates PDH phosphatase; ADP, pyruvate and NAD⁺ inhibit PDH kinase, so exercise activates PDH.",
"w": [
"",
"NADH is falling, not rising, as ATP is used up.",
"Acetyl CoA is consumed rapidly during exercise.",
"The two signals push in the same direction, toward activation.",
"This is the pattern of a high energy charge, which switches PDH off."
],
"src": "lec",
"fig": [
"figs/crs/tca-pdh-regulation"
]
},
{
"t": "PDH Complex: Reaction & Regulation",
"lv": "Easy",
"s": "When the NADH/NAD⁺ ratio in the mitochondrial matrix is very high, which component of the PDH complex is directly inhibited by the product NADH?",
"c": [
"Pyruvate dehydrogenase phosphatase",
"Dihydrolipoyl dehydrogenase, E3",
"Pyruvate carboxylase",
"Dihydrolipoyl transacetylase, E2",
"Pyruvate decarboxylase, E1"
],
"a": 1,
"e": "Step 1: The PDH complex is made of E1 (pyruvate decarboxylase), E2 (dihydrolipoyl transacetylase) and E3 (dihydrolipoyl dehydrogenase).\nStep 2: High concentrations of its products inhibit the complex: acetyl CoA inhibits E2, and NADH inhibits E3, which normally reduces NAD⁺ to NADH.\nStep 3: High NADH also activates PDH kinase, so the complex is phosphorylated and switched off when energy charge is high.\n\nTakeaway: Acetyl CoA inhibits E2; NADH inhibits E3.",
"w": [
"The phosphatase is not the direct product-inhibition target.",
"",
"Pyruvate carboxylase is not part of the PDH complex.",
"E2 is the component inhibited by acetyl CoA.",
"E1 is regulated by phosphorylation, not direct NADH inhibition here."
],
"src": "lec",
"fig": [
"figs/crs/tca-pdh-complex"
]
},
{
"t": "PDH Deficiency, Arsenic & Thiamine",
"lv": "Hard",
"s": "A 2-year-old boy has developmental delay, intermittent ataxia and poor muscle tone. Blood lactate and pyruvate are high, and episodes worsen after high-carbohydrate meals. Enzyme assays in fibroblasts show very low pyruvate dehydrogenase activity. Which dietary change is most appropriate?",
"c": [
"Supplemental fructose in place of glucose",
"A high-carbohydrate diet with frequent meals",
"A diet high in lactose",
"A high-protein diet rich in alanine",
"A ketogenic, carbohydrate-restricted diet"
],
"a": 4,
"e": "Step 1: PDH deficiency is the most common biochemical cause of congenital lactic acidosis. Pyruvate cannot become acetyl CoA, so it is diverted to lactate.\nStep 2: Carbohydrate makes it worse, because glycolysis produces more pyruvate that cannot be oxidized.\nStep 3: A ketogenic diet supplies acetyl CoA from fat and ketone bodies, bypassing PDH, so the TCA cycle and brain energy supply can continue. Thiamine and lipoic acid supplements and dichloroacetate are also used.\n\nTakeaway: PDH deficiency is treated with a ketogenic, carbohydrate-restricted diet plus thiamine and lipoic acid.",
"w": [
"Fructose also enters glycolysis and produces pyruvate.",
"More carbohydrate means more pyruvate and more lactic acidosis.",
"Lactose yields glucose and galactose, both of which make pyruvate.",
"Alanine is converted to pyruvate, which still needs PDH.",
""
],
"src": "lec",
"fig": [
"figs/crs/tca-pdh-regulation"
]
},
{
"t": "PDH Deficiency, Arsenic & Thiamine",
"lv": "Hard",
"s": "A malnourished 52-year-old man with chronic alcohol use is given an intravenous glucose infusion in the emergency department. Hours later his serum lactate rises sharply and he becomes confused. Deficiency of which cofactor best explains this?",
"c": [
"Thiamine pyrophosphate",
"Biotin, vitamin B7",
"Pyridoxal phosphate",
"Lipoic acid alone",
"Cobalamin, vitamin B12"
],
"a": 0,
"e": "Step 1: Thiamine pyrophosphate (TPP) is the cofactor for E1 of the PDH complex. Nutritionally deprived alcoholics are often thiamine deficient.\nStep 2: The glucose load produces a surge of pyruvate. Without TPP, PDH cannot convert it to acetyl CoA, so pyruvate accumulates and is reduced to lactate.\nStep 3: The result is lactic acidosis, and the brain, which depends on glucose oxidation, is starved of energy. This is why thiamine is given before glucose in these patients.\n\nTakeaway: Thiamine (TPP) deficiency inhibits PDH → pyruvate accumulates → lactic acidosis.",
"w": [
"",
"Biotin is the cofactor for pyruvate carboxylase, not PDH.",
"Pyridoxal phosphate is used by transaminases.",
"Lipoic acid is the target of arsenite, not of alcoholic malnutrition here.",
"Cobalamin is needed by methylmalonyl CoA mutase."
],
"src": "lec",
"fig": [
"figs/crs/tca-pdh-reaction"
]
},
{
"t": "PDH Deficiency, Arsenic & Thiamine",
"lv": "Easy",
"s": "Dichloroacetate is used in some children with PDH deficiency. How does it increase PDH activity?",
"c": [
"It replaces thiamine as the E1 cofactor",
"It activates PDH kinase, increasing phosphorylation",
"It converts lactate back into glucose",
"It binds lipoic acid to protect it",
"It inhibits PDH kinase, reducing phosphorylation"
],
"a": 4,
"e": "Step 1: PDH is inactivated when PDH kinase phosphorylates it.\nStep 2: Dichloroacetate inhibits PDH kinase, so less inhibitory phosphorylation occurs and more of the remaining enzyme stays active.\nStep 3: This lets more pyruvate be oxidized to acetyl CoA, lowering lactate. Cofactor supplements (thiamine, lipoic acid) and a ketogenic diet are the other treatments.\n\nTakeaway: Dichloroacetate reduces the inhibitory phosphorylation of PDH.",
"w": [
"Dichloroacetate is not a vitamin cofactor.",
"More phosphorylation would switch PDH off further.",
"It does not work by turning lactate into glucose.",
"It does not bind or protect lipoic acid in the complex.",
""
],
"src": "lec",
"fig": [
"figs/crs/tca-pdh-regulation"
]
},
{
"t": "PDH Deficiency, Arsenic & Thiamine",
"lv": "Easy",
"s": "An infant has lactic acidosis with high blood lactate and pyruvate, suggesting PDH deficiency. How is the definitive diagnosis made?",
"c": [
"A single blood lactate measurement",
"Chest radiograph of the infant",
"Enzyme assay on fibroblasts",
"A serum thiamine level alone",
"A urine ketone dipstick test"
],
"a": 2,
"e": "Step 1: High blood lactate and pyruvate suggest PDH deficiency but are not specific, because many conditions raise lactate.\nStep 2: The definitive diagnosis is made by showing abnormal enzyme function.\nStep 3: Functional assays are done on leukocytes, cultured fibroblasts or properly preserved tissue samples.\n\nTakeaway: PDH deficiency is confirmed by enzyme assays on leukocytes, fibroblasts or tissue.",
"w": [
"Lactate is high in many disorders, so it cannot confirm the diagnosis.",
"Imaging does not assess enzyme activity.",
"",
"A thiamine level does not measure the enzyme itself.",
"Urine ketones say nothing about PDH enzyme activity."
],
"src": "lec",
"fig": [
"figs/crs/tca-pdh-regulation"
]
},
{
"t": "TCA Reactions, Site & Energetics",
"lv": "Easy",
"s": "Which TCA cycle enzyme is also a component of the electron transport chain?",
"c": [
"Isocitrate dehydrogenase",
"Malate dehydrogenase",
"Succinate thiokinase",
"Succinate dehydrogenase",
"Citrate synthase"
],
"a": 3,
"e": "Step 1: Most TCA enzymes are in the mitochondrial matrix.\nStep 2: Succinate dehydrogenase oxidizes succinate to fumarate and reduces FAD to FADH₂. It is bound to the inner mitochondrial membrane and is Complex II of the ETC.\nStep 3: Its electrons pass directly to coenzyme Q, which is why FADH₂ yields fewer ATP (2) than NADH (3) on the slide.\n\nTakeaway: Succinate dehydrogenase = TCA enzyme and ETC Complex II; it makes FADH₂.",
"w": [
"Isocitrate dehydrogenase is a matrix enzyme that makes NADH.",
"Malate dehydrogenase is a matrix enzyme that makes NADH.",
"Succinate thiokinase makes GTP in the matrix.",
"",
"Citrate synthase makes citrate and produces no reduced coenzyme."
],
"src": "lec",
"fig": [
"figs/crs/tca-amphibolic"
]
},
{
"t": "TCA Reactions, Site & Energetics",
"lv": "Easy",
"s": "Only one step of the TCA cycle makes a high-energy phosphate directly, by substrate-level phosphorylation. Which enzyme catalyzes it?",
"c": [
"α-Ketoglutarate dehydrogenase",
"Isocitrate dehydrogenase",
"Fumarase",
"Succinate thiokinase",
"Succinate dehydrogenase"
],
"a": 3,
"e": "Step 1: Most TCA energy is captured as NADH and FADH₂, which make ATP later by oxidative phosphorylation.\nStep 2: Succinate thiokinase (succinyl CoA synthetase) converts succinyl CoA to succinate and uses the energy of the thioester bond to make GTP from GDP + Pi.\nStep 3: This is substrate-level phosphorylation and gives 1 high-energy phosphate per turn.\n\nTakeaway: Succinate thiokinase makes GTP by substrate-level phosphorylation.",
"w": [
"α-KGDH makes NADH and CO₂, not a phosphate bond.",
"Isocitrate dehydrogenase makes NADH and CO₂.",
"Fumarase adds water and makes no high-energy phosphate.",
"",
"Succinate dehydrogenase makes FADH₂, not GTP."
],
"src": "lec",
"fig": [
"figs/crs/tca-cycle"
]
},
{
"t": "TCA Reactions, Site & Energetics",
"lv": "Hard",
"s": "Using the values on the slide (3 ATP per NADH, 2 per FADH₂), how many ATP are made when the 2 pyruvate from one glucose are fully oxidized by the PDH complex and the TCA cycle?",
"c": [
"36 ATP",
"15 ATP",
"24 ATP",
"30 ATP",
"38 ATP"
],
"a": 3,
"e": "Step 1: Each pyruvate passes through PDH, which makes 1 NADH = 3 ATP.\nStep 2: Each acetyl CoA then goes around the TCA cycle once: 3 NADH (9) + 1 FADH₂ (2) + 1 GTP (1) = 12 ATP.\nStep 3: Per pyruvate = 3 + 12 = 15. One glucose gives 2 pyruvate, so 2 × 15 = 30 ATP. (Glycolysis adds its own ATP and NADH on top.)\n\nTakeaway: 12 ATP per acetyl CoA in the TCA cycle, 15 per pyruvate including PDH.",
"w": [
"36 adds 6 ATP from glycolysis, which the question excludes.",
"15 is the yield from one pyruvate, not two.",
"24 counts the TCA cycle for 2 acetyl CoA but leaves out the PDH NADH.",
"",
"38 is the classic total for a whole glucose, including glycolysis."
],
"src": "lec",
"fig": [
"figs/crs/tca-energy"
]
},
{
"t": "TCA Reactions, Site & Energetics",
"lv": "Easy",
"s": "Two carbons leave the TCA cycle as CO₂ in each turn. Which two enzymes release them?",
"c": [
"Isocitrate and α-KG dehydrogenase",
"Aconitase and fumarase",
"Succinate and malate dehydrogenase",
"Citrate synthase and aconitase",
"Fumarase and succinate thiokinase"
],
"a": 0,
"e": "Step 1: Isocitrate dehydrogenase oxidatively decarboxylates isocitrate to α-ketoglutarate, releasing CO₂ and making NADH.\nStep 2: α-Ketoglutarate dehydrogenase oxidatively decarboxylates α-ketoglutarate to succinyl CoA, releasing the second CO₂ and making NADH.\nStep 3: The overall stoichiometry is acetyl CoA + 3 NAD⁺ + FAD + GDP + Pi + 2 H₂O → 2 CO₂ + 3 NADH + FADH₂ + GTP + CoA.\n\nTakeaway: The 2 CO₂ per turn come from isocitrate dehydrogenase and α-KGDH.",
"w": [
"",
"These are hydration and isomerization steps.",
"These are oxidations without decarboxylation.",
"Neither citrate synthase nor aconitase releases CO₂.",
"Fumarase and succinate thiokinase release no CO₂."
],
"src": "lec",
"fig": [
"figs/crs/tca-cycle"
]
},
{
"t": "TCA Regulation & Inhibitors",
"lv": "Easy",
"s": "During exercise, ADP and Ca²⁺ rise in muscle mitochondria. Which TCA enzyme, the rate-limiting step, do they stimulate?",
"c": [
"Malate dehydrogenase",
"Succinate dehydrogenase",
"α-Ketoglutarate dehydrogenase",
"Isocitrate dehydrogenase",
"Citrate synthase"
],
"a": 3,
"e": "Step 1: The TCA cycle rate is adjusted to meet the cell's need for ATP.\nStep 2: Isocitrate dehydrogenase is the rate-limiting step. It is stimulated by ADP and Ca²⁺ and inhibited by ATP and NADH.\nStep 3: Citrate synthase is inhibited by citrate, NADH and succinyl CoA, and α-KGDH is inhibited by succinyl CoA, NADH and a high energy charge.\n\nTakeaway: Isocitrate dehydrogenase is rate limiting: ↑ ADP, Ca²⁺; ↓ ATP, NADH.",
"w": [
"Malate dehydrogenase is not a primary control point.",
"Succinate dehydrogenase is not a primary control point.",
"α-KGDH is regulated mainly by product inhibition, not ADP.",
"",
"Citrate synthase is inhibited by citrate, NADH and succinyl CoA."
],
"src": "lec",
"fig": [
"figs/crs/tca-regulation"
]
},
{
"t": "TCA Regulation & Inhibitors",
"lv": "Hard",
"s": "A child accidentally swallows a rodenticide containing fluoroacetate. Fluoroacetate is converted to fluoroacetyl CoA, which condenses with oxaloacetate. Which TCA intermediate builds up in the child's tissues?",
"c": [
"Isocitrate",
"Fumarate",
"Citrate",
"Oxaloacetate",
"Succinate"
],
"a": 2,
"e": "Step 1: Fluoroacetyl CoA condenses with oxaloacetate (via citrate synthase) to form fluorocitrate.\nStep 2: Fluorocitrate is a potent inhibitor of aconitase, the enzyme that converts citrate to isocitrate.\nStep 3: The block is just after citrate, so citrate accumulates and the cycle stops, cutting ATP production.\n\nTakeaway: Fluoroacetate → fluorocitrate → inhibits aconitase → citrate accumulates.",
"w": [
"Isocitrate is the product of aconitase, so it falls.",
"Fumarate lies downstream of the block, so it falls.",
"",
"Oxaloacetate is consumed forming fluorocitrate and citrate.",
"Succinate builds up with malonate, which blocks succinate dehydrogenase."
],
"src": "lec",
"fig": [
"figs/crs/tca-inhibitors"
]
},
{
"t": "TCA Regulation & Inhibitors",
"lv": "Hard",
"s": "Malonate is added to isolated mitochondria oxidizing pyruvate, and succinate begins to accumulate. The researcher then adds a large excess of succinate. What happens to the inhibition, and why?",
"c": [
"It is unchanged, because malonate binds irreversibly",
"It is reduced, because succinate inhibits aconitase",
"It falls, because malonate competes with succinate",
"It is unchanged, because the block is at aconitase",
"It increases, because succinate activates malonate"
],
"a": 2,
"e": "Step 1: Malonate has a very close structural similarity to succinate.\nStep 2: It inhibits succinate dehydrogenase competitively with respect to succinate, binding the active site without reacting.\nStep 3: Because the inhibition is competitive, a large excess of substrate (succinate) outcompetes malonate and restores activity. Krebs used malonate inhibition as evidence that the pathway is a cycle.\n\nTakeaway: Malonate is a competitive inhibitor of succinate dehydrogenase; more succinate overcomes it.",
"w": [
"Malonate is competitive, not irreversible.",
"Succinate does not inhibit aconitase in this setting.",
"",
"Aconitase is the target of fluoroacetate, not malonate.",
"Succinate does not activate malonate in any way."
],
"src": "lec",
"fig": [
"figs/crs/tca-inhibitors"
]
},
{
"t": "Anaplerosis & Amphibolic Role",
"lv": "Easy",
"s": "Which amino acid is metabolized to succinyl CoA and so feeds into the TCA cycle at that point?",
"c": [
"Glutamate",
"Aspartate",
"Valine",
"Alanine",
"Phenylalanine"
],
"a": 2,
"e": "Step 1: Anaplerotic reactions replenish TCA intermediates that are drained off for biosynthesis.\nStep 2: Odd-chain fatty acids, isoleucine, methionine and valine provide succinyl CoA.\nStep 3: Glutamate provides α-ketoglutarate, aspartate provides oxaloacetate, and aspartate, phenylalanine and tyrosine provide fumarate.\n\nTakeaway: Succinyl CoA comes from odd-chain FAs, isoleucine, methionine and valine.",
"w": [
"Glutamate enters the cycle as α-ketoglutarate.",
"Aspartate enters as oxaloacetate or fumarate.",
"",
"Alanine is converted to pyruvate, not succinyl CoA.",
"Phenylalanine enters the cycle as fumarate."
],
"src": "lec",
"fig": [
"figs/crs/tca-anaplerotic"
]
},
{
"t": "Anaplerosis & Amphibolic Role",
"lv": "Hard",
"s": "During a 24-hour fast, the liver withdraws oxaloacetate from the TCA cycle to make glucose. Which reaction is the most important one for replenishing oxaloacetate so the cycle can continue?",
"c": [
"Succinyl CoA → succinate + GTP",
"Pyruvate + CO₂ + ATP → oxaloacetate",
"Acetyl CoA + oxaloacetate → citrate",
"Glutamate → α-ketoglutarate",
"Malate → oxaloacetate in the cytosol"
],
"a": 1,
"e": "Step 1: Intermediates drained from the cycle for biosynthesis must be replenished, or the cycle slows. These replenishing reactions are anaplerotic.\nStep 2: The most important anaplerotic reaction is pyruvate carboxylase: pyruvate + CO₂ + ATP + H₂O → oxaloacetate + ADP + Pi.\nStep 3: This supplies oxaloacetate, which is needed both to keep the cycle turning (it accepts acetyl CoA) and for gluconeogenesis.\n\nTakeaway: Pyruvate carboxylase is the main anaplerotic reaction, making oxaloacetate.",
"w": [
"This is a normal cycle step that adds no new carbon.",
"",
"Citrate synthase consumes, not replenishes, oxaloacetate.",
"This replenishes α-ketoglutarate, not oxaloacetate directly.",
"This is part of the shuttle, not a net source of carbon."
],
"src": "lec",
"fig": [
"figs/crs/tca-anaplerotic"
]
},
{
"t": "NADH Shuttles",
"lv": "Easy",
"s": "Cytosolic NADH from glycolysis is oxidized in skeletal muscle by the glycerophosphate shuttle. How many ATP does each cytosolic NADH yield by this route, according to the slide?",
"c": [
"3 ATP",
"2 ATP",
"1 ATP",
"4 ATP",
"None"
],
"a": 1,
"e": "Step 1: NADH cannot cross the inner mitochondrial membrane, so its electrons are carried in by a shuttle.\nStep 2: In the glycerophosphate shuttle, cytosolic glycerol-3-phosphate dehydrogenase reduces DHAP to glycerol-3-phosphate. The mitochondrial enzyme then reoxidizes it, passing the electrons to FAD → FADH₂.\nStep 3: Because the electrons enter as FADH₂, each cytosolic NADH yields 2 ATP. The malate-aspartate shuttle keeps them as NADH and yields 3.\n\nTakeaway: Glycerophosphate shuttle = 2 ATP; malate-aspartate shuttle = 3 ATP per cytosolic NADH.",
"w": [
"3 ATP is the yield of the malate-aspartate shuttle.",
"",
"1 ATP is too low for electrons entering as FADH₂.",
"4 ATP is more than any single NADH yields.",
"The electrons do produce ATP through the ETC."
],
"src": "lec",
"fig": [
"figs/crs/tca-gp-shuttle"
]
},
{
"t": "NADH Shuttles",
"lv": "Hard",
"s": "In heart muscle, cytosolic NADH is reoxidized and the reducing equivalents end up as mitochondrial NADH, yielding 3 ATP each. Why is a shuttle needed, and which molecule crosses the inner membrane carrying the electrons?",
"c": [
"The membrane blocks NADH, so aspartate carries them",
"The membrane blocks NADH, so malate carries them",
"NADH crosses freely but needs an escort to stay reduced",
"The membrane blocks NADH, so FADH₂ carries them",
"NADH crosses freely through the porin channel"
],
"a": 1,
"e": "Step 1: The inner mitochondrial membrane is impermeable to NADH.\nStep 2: In the malate-aspartate shuttle, cytosolic NADH reduces oxaloacetate to malate. Malate crosses the inner membrane and is reoxidized to oxaloacetate in the matrix, regenerating NADH.\nStep 3: Oxaloacetate is transaminated to aspartate, which returns to the cytosol. Because the electrons stay as NADH, each yields 3 ATP.\n\nTakeaway: Malate carries the reducing equivalents in; aspartate goes back out. Malate-aspartate shuttle = 3 ATP.",
"w": [
"Aspartate returns carbon to the cytosol; it carries no electrons in.",
"",
"NADH cannot cross the inner mitochondrial membrane.",
"FADH₂ is the route of the glycerophosphate shuttle, giving 2 ATP.",
"Porins are in the outer membrane; the inner membrane blocks NADH."
],
"src": "lec",
"fig": [
"figs/crs/tca-mas-shuttle"
]
},
{
"t": "Practice Questions · Citric Acid Cycle (from the slides)",
"s": "A 3-month-old infant is brought to the pediatrician for evaluation of poor feeding, lethargy, and muscle weakness. The infant was born at term, but has had difficulty gaining weight. The parents report that the baby often has episodes of vomiting and abnormal, fruity-smelling breath. On physical examination, the baby has hypotonia and slight hepatomegaly. Laboratory studies show an elevated blood lactate level, and a urine organic acid test reveals increased levels of lactic acid and pyruvate. Further metabolic testing confirms a deficiency in the pyruvate dehydrogenase (PDH) complex.<br><br>Which of the following biochemical abnormalities is most likely responsible for the clinical findings in this infant?",
"html": true,
"c": [
"Increased pyruvate conversion to lactate",
"Decreased pyruvate conversion to acetyl-CoA",
"Decreased ketone body synthesis",
"Increased glucose production via gluconeogenesis",
"Decreased production of NADH from the citric acid cycle"
],
"a": 1,
"e": "Ans: B. PDH deficiency blocks the conversion of pyruvate to acetyl-CoA, so pyruvate builds up and is diverted to lactate, and the citric acid cycle is starved of acetyl-CoA.",
"w": [
"Increased lactate is a consequence of the block, not the primary abnormality.",
"",
"Ketone synthesis is not the primary defect.",
"Gluconeogenesis is not the cause.",
"Reduced NADH is downstream of the primary block."
],
"ns": true,
"shetty": 1,
"fig": [
"figs/crs/tca-pdh-regulation"
]
},
{
"t": "Practice Questions · Citric Acid Cycle (from the slides)",
"s": "Arsenite (trivalent form of arsenic) forms a stable complex with the thiol group of lipoic acid and inactivates it.<br><br>Q1: Which of the following cofactors is most directly affected by arsenite poisoning in the pyruvate dehydrogenase complex?",
"html": true,
"c": [
"Thiamine pyrophosphate (TPP)",
"NAD+",
"FAD",
"Lipoic acid",
"Coenzyme A"
],
"a": 3,
"e": "Answer: D. Lipoic acid. Arsenite binds the thiol groups of lipoic acid (dihydrolipoamide of the transacetylase) and inactivates it.",
"w": [
"TPP is the E1 cofactor, not arsenite's target.",
"NAD+ is not bound by arsenite.",
"FAD is not bound by arsenite.",
"",
"CoA is not the target."
],
"ns": true,
"shetty": 1,
"fig": [
"figs/crs/tca-pdh-complex"
]
},
{
"t": "Practice Questions · Citric Acid Cycle (from the slides)",
"s": "Q2: A 45-year-old man with a deficiency in α-ketoglutarate dehydrogenase exhibits neurological symptoms. Which cofactors are required by this enzyme to function?",
"c": [
"NAD+, FAD, and Biotin",
"Thiamine pyrophosphate (TPP), NAD+, and FAD",
"Lipoic acid, Biotin, and FAD",
"Pyridoxal phosphate, FAD, and NAD+",
"Coenzyme A, Pyridoxal phosphate, and NAD+"
],
"a": 1,
"e": "Answer: B. α-Ketoglutarate dehydrogenase is built like the PDH complex and uses the same cofactors: TPP, lipoic acid, CoA, FAD and NAD+. Biotin and pyridoxal phosphate are not used.",
"w": [
"Biotin is not a cofactor of α-KGDH.",
"",
"Biotin is not a cofactor of α-KGDH.",
"Pyridoxal phosphate is not a cofactor of α-KGDH.",
"Pyridoxal phosphate is not a cofactor of α-KGDH."
],
"ns": true,
"shetty": 1,
"fig": [
"figs/crs/tca-cycle"
]
},
{
"t": "Practice Questions · Citric Acid Cycle (from the slides)",
"s": "Q3: A 12-year-old boy presents with seizures and a history of exposure to contaminated water. His blood gas analysis shows metabolic acidosis. Which enzyme complex besides pyruvate dehydrogenase is likely affected by arsenite?",
"c": [
"Isocitrate dehydrogenase",
"Alpha-ketoglutarate dehydrogenase",
"Succinate dehydrogenase",
"Citrate synthase",
"Glucose-6-phosphate dehydrogenase"
],
"a": 1,
"e": "Answer: B. α-Ketoglutarate dehydrogenase also uses lipoic acid, so arsenite inactivates it along with the PDH complex.",
"w": [
"Isocitrate dehydrogenase does not use lipoic acid.",
"",
"Succinate dehydrogenase uses FAD, not lipoic acid.",
"Citrate synthase does not use lipoic acid.",
"G6PD does not use lipoic acid."
],
"ns": true,
"shetty": 1,
"fig": [
"figs/crs/tca-cycle"
]
}
];
