// CRS Biochemistry — Dr. S. Shetty lecture slides. Reworked set: fewer, multi-concept, high-yield questions; lv = Easy/Hard; shetty = practice questions from the slides, word for word
window.CRS_BC_TOPICS = ["Overview & Activation", "Carnitine Shuttle", "Carnitine & CPT Deficiencies", "β-Oxidation Reactions", "Energetics & Regulation", "Unsaturated & Odd-Chain Fatty Acids", "Methylmalonic Aciduria", "Peroxisomal, α- & ω-Oxidation", "MCAD Deficiency & Jamaican Vomiting Sickness", "Zellweger, X-ALD & Refsum", "Synthesis vs β-Oxidation & Sites", "Citrate Shuttle: Acetyl-CoA to Cytosol", "Sources of NADPH", "Acetyl-CoA Carboxylase Reaction", "Regulation of Acetyl-CoA Carboxylase", "Fatty Acid Synthase Complex", "FAS Cycle & Palmitate Stoichiometry", "Elongation & Desaturation", "Triacylglycerol Synthesis", "TAG Fate & Lipolysis", "Practice Questions (from the slides)", "Fuel Fate & Why the Liver Makes Ketones", "Ketogenesis: Pathway & HMG-CoA Synthase", "The Three Ketone Bodies", "Ketolysis: Thiophorase & Extrahepatic Use", "Brain Fuel During Fasting & Starvation", "Ketosis: Hormones, Levels & Causes", "Diabetic Ketoacidosis", "Practice Question · Ketone Bodies (from the slides)", "Phospholipid Structure & Synthesis", "DPPC, Surfactant & L/S Ratio", "Phosphatidylinositol & PIP2 Signaling", "GPI Anchors & PNH", "Cardiolipin & Phosphatidylglycerol", "Phospholipases & Degradation", "Plasmalogens & PAF", "Sphingolipids, Ceramide & Sphingomyelin", "Glycolipid Classes", "Lysosomal Storage Disorders Overview", "Niemann-Pick Disease", "Gaucher Disease", "Tay-Sachs & GM2 Gangliosidoses", "Fabry, Krabbe, MLD & Other Sphingolipidoses", "Practice Questions · Complex Lipids (from the slides)"];
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
}
];
