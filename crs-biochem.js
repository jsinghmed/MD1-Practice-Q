// CRS Biochemistry — Dr. S. Shetty lecture slides. Reworked set: fewer, multi-concept, high-yield questions; lv = Easy/Hard; shetty = practice questions from the slides, word for word
window.CRS_BC_TOPICS = ["Overview & Activation", "Carnitine Shuttle", "Carnitine & CPT Deficiencies", "β-Oxidation Reactions", "Energetics & Regulation", "Unsaturated & Odd-Chain Fatty Acids", "Methylmalonic Aciduria", "Peroxisomal, α- & ω-Oxidation", "MCAD Deficiency & Jamaican Vomiting Sickness", "Zellweger, X-ALD & Refsum", "Synthesis vs β-Oxidation & Sites", "Citrate Shuttle: Acetyl-CoA to Cytosol", "Sources of NADPH", "Acetyl-CoA Carboxylase Reaction", "Regulation of Acetyl-CoA Carboxylase", "Fatty Acid Synthase Complex", "FAS Cycle & Palmitate Stoichiometry", "Elongation & Desaturation", "Triacylglycerol Synthesis", "TAG Fate & Lipolysis", "Practice Questions (from the slides)", "Fuel Fate & Why the Liver Makes Ketones", "Ketogenesis: Pathway & HMG-CoA Synthase", "The Three Ketone Bodies", "Ketolysis: Thiophorase & Extrahepatic Use", "Brain Fuel During Fasting & Starvation", "Ketosis: Hormones, Levels & Causes", "Diabetic Ketoacidosis", "Practice Question · Ketone Bodies (from the slides)", "Phospholipid Structure & Synthesis", "DPPC, Surfactant & L/S Ratio", "Phosphatidylinositol & PIP2 Signaling", "GPI Anchors & PNH", "Cardiolipin & Phosphatidylglycerol", "Phospholipases & Degradation", "Plasmalogens & PAF", "Sphingolipids, Ceramide & Sphingomyelin", "Glycolipid Classes", "Lysosomal Storage Disorders Overview", "Niemann-Pick Disease", "Gaucher Disease", "Tay-Sachs & GM2 Gangliosidoses", "Fabry, Krabbe, MLD & Other Sphingolipidoses", "Practice Questions · Complex Lipids (from the slides)", "Eicosanoid Classes & Effects", "Arachidonic Acid Release & PLA2", "COX Pathway & Prostanoids", "NSAIDs, Aspirin & COX-2 Inhibitors", "Lipoxygenase Pathway & Leukotrienes", "Practice Questions · Eicosanoids (from the slides)"];
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
,
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
"e": "The eicosanoids are prostaglandins, thromboxanes and leukotrienes. Prostaglandins and thromboxanes, both made by the cyclooxygenase pathway, are together called prostanoids.",
"w": [
"",
"Leukotrienes come from the lipoxygenase pathway and are not prostanoids.",
"Leukotrienes are not prostanoids.",
"Leukotrienes are not prostanoids.",
"Thromboxanes are prostanoids too."
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
"e": "Eicosanoids are made on demand, act on cells close to where they are formed and are broken down quickly, so they are not carried to distant sites.",
"w": [
"They are synthesized on demand, not stored.",
"",
"They are not carried to distant organs.",
"Almost every cell except red cells makes them.",
"They act through G-protein coupled receptors."
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
"e": "Eicosanoids bind G-protein coupled receptors. Depending on the cell, the G-protein raises or lowers cAMP or activates the phosphatidylinositol pathway that releases intracellular Ca²⁺.",
"w": [
"That is the insulin receptor type.",
"That is the steroid hormone receptor type.",
"",
"Those mediate fast synaptic signals.",
"That is the receptor type for ANP."
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
"e": "Prostaglandins such as PGE₂ and PGI₂ have a cyclopentane ring. Thromboxanes are similar but have a six-membered ring instead.",
"w": [
"Prostaglandins have the cyclopentane ring.",
"Leukotrienes are linear and have no ring.",
"Prostacyclin is PGI₂, a prostaglandin.",
"",
"These are linear leukotrienes with amino acids."
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
"e": "The subscript gives the number of carbon-carbon double bonds in the side chains. The letter code reflects ring modifications such as hydroxyl or keto groups.",
"w": [
"Oxygen count is not shown by the subscript.",
"Ring size is not shown by the subscript.",
"Ring substitutions are shown by the letter.",
"The subscript is structural.",
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
"e": "Arachidonic acid sits at the C-2 position of membrane phospholipids and is released by phospholipase A2.",
"w": [
"",
"PLA1 acts at C-1, which does not carry arachidonate.",
"PLC cleaves the phosphate head group, releasing DAG and IP3.",
"PLD removes the head group, not the fatty acid.",
"Lipoprotein lipase acts on circulating triglycerides."
],
"src": "lec"
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
"e": "Arachidonate is made from the essential fatty acid linoleic acid. α-Linolenic acid gives eicosapentaenoic acid, the source of the minor eicosanoids.",
"w": [
"α-Linolenic acid leads to EPA, not arachidonate.",
"",
"EPA is the source of the minor eicosanoids.",
"Palmitate is saturated and not a precursor.",
"Oleate cannot be converted to arachidonate."
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
"e": "All mammalian cells except erythrocytes synthesize eicosanoids.",
"w": [
"Platelets make TXA₂.",
"Macrophages make prostaglandins through COX-2.",
"",
"Endothelium makes PGI₂.",
"Gastric mucosa uses COX-1."
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
"e": "Epinephrine, thrombin and bradykinin activate phospholipase A2, which frees arachidonic acid to start eicosanoid synthesis.",
"w": [
"Insulin is not a PLA2 activator.",
"Glucagon is not a PLA2 activator.",
"Aldosterone acts on nuclear receptors.",
"",
"Thyroxine acts on nuclear receptors."
],
"src": "lec"
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
"e": "Prednisone is a corticosteroid. Because both the prostaglandin and leukotriene branches fell, the block must be before they split. Corticosteroids inhibit phospholipase A2, so less arachidonic acid is released for either pathway.",
"w": [
"COX-1 blockade would spare leukotrienes.",
"COX-2 blockade would spare leukotrienes.",
"5-Lipoxygenase blockade would spare prostaglandins.",
"This would lower only thromboxane.",
""
],
"src": "lec"
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
"e": "PGH₂ synthase, also called prostaglandin endoperoxide synthase, is a heme-containing dioxygenase bound to ER membranes. A dioxygenase adds O₂ to its substrate.",
"w": [
"",
"It is a membrane-bound dioxygenase.",
"It is on the ER, not in mitochondria.",
"It is not a lysosomal enzyme.",
"It is not a carboxylase."
],
"src": "lec"
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
"e": "The cyclooxygenase activity adds 2 O₂ to arachidonate to form PGG₂. The peroxidase activity then reduces PGG₂ to PGH₂ using 2 GSH, which become GSSG.",
"w": [
"NADPH is not used in this step.",
"",
"FAD is not used in this step.",
"Biotin is for carboxylation.",
"TPP is for decarboxylation."
],
"src": "lec"
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
"e": "COX-1 is made all the time in gastric mucosa, kidney, platelets and endothelium. COX-2 is induced in macrophages and monocytes during inflammation. Both convert arachidonic acid to PGG₂ and then PGH₂.",
"w": [
"The reverse is true.",
"COX-1 is widespread in tissues.",
"",
"Platelets use COX-1.",
"Both isoforms make PGG₂."
],
"src": "lec"
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
"e": "COX-2 is induced in macrophages and monocytes in response to inflammation. Its main triggers are platelet-activating factor and interleukin-1.",
"w": [
"Insulin is not a COX-2 trigger.",
"EPO acts on marrow precursors.",
"Thyroxine is not a COX-2 trigger.",
"",
"Glucagon is not a COX-2 trigger."
],
"src": "lec"
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
"e": "COX converts arachidonic acid to PGG₂, and the peroxidase step makes PGH₂. PGH₂ is the branch point for every prostanoid.",
"w": [
"PGG₂ comes before PGH₂.",
"LTA₄ is the leukotriene branch point.",
"5-HPETE leads to leukotrienes.",
"TXB₂ is the stable product of TXA₂.",
""
],
"src": "lec"
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
"e": "In platelets, thromboxane synthase converts PGH₂ to TXA₂, which is then broken down to the stable TXB₂. Prostacyclin synthase in endothelium makes PGI₂ instead.",
"w": [
"",
"Prostacyclin synthase makes PGI₂.",
"5-Lipoxygenase starts the leukotriene branch.",
"PLA2 releases arachidonate upstream.",
"This is not a prostanoid-forming enzyme."
],
"src": "lec"
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
"e": "Aspirin acetylates the serine hydroxyl near the COX active site, which stops arachidonate binding. The block is irreversible.",
"w": [
"This is how ibuprofen works.",
"",
"Corticosteroids inhibit PLA2.",
"Montelukast blocks leukotriene receptors.",
"Aspirin does not act on the peroxidase cofactor."
],
"src": "lec"
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
"e": "Ibuprofen and related compounds block the hydrophobic channel by which arachidonate enters the COX active site. Unlike aspirin, this is reversible.",
"w": [
"That is aspirin.",
"That is corticosteroids.",
"",
"That is zileuton.",
"That is not how ibuprofen works."
],
"src": "lec"
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
"e": "Aspirin irreversibly acetylates COX. Most cells resynthesize the enzyme, but platelets have no nucleus, so they cannot. Their TXA₂ production stays low for the rest of their lifespan, which is why aspirin is used daily for its anticlotting effect.",
"w": [
"Aspirin is not stored in platelets.",
"Aspirin acts on COX, not the TXA₂ receptor.",
"Aspirin does not destroy megakaryocytes.",
"",
"Protein binding does not explain the long effect."
],
"src": "lec"
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
"e": "Naproxen is an NSAID that inhibits both COX-1 and COX-2. COX-1 is constitutive in gastric mucosa, and its loss is what links NSAIDs to ulceration.",
"w": [
"COX-2 inhibition gives the anti-inflammatory effect, not the ulcer.",
"NSAIDs do not inhibit PLA2.",
"NSAIDs do not inhibit 5-lipoxygenase.",
"NSAIDs act on COX, not thromboxane synthase.",
""
],
"src": "lec"
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
"e": "The ulcer history means avoiding COX-1 inhibition in the gut. The isoform induced in macrophages during inflammation is COX-2, and celecoxib is a selective COX-2 inhibitor.",
"w": [
"",
"Aspirin inhibits both COX-1 and COX-2.",
"Indomethacin inhibits both isoforms.",
"Naproxen inhibits both isoforms.",
"Ibuprofen inhibits both isoforms."
],
"src": "lec"
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
"e": "Leukotrienes are made by the linear, lipoxygenase pathway. 5-Lipoxygenase converts arachidonic acid to 5-HPETE, which then forms LTA₄ and the other leukotrienes.",
"w": [
"COX-1 starts the prostanoid branch.",
"",
"COX-2 starts the prostanoid branch.",
"This acts on PGH₂.",
"This acts on PGH₂."
],
"src": "lec"
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
"e": "LTC₄, LTD₄, LTE₄ and LTF₄ contain amino acids from glutathione and are called peptidoleukotrienes. LTB₄ is formed from LTA₄ without adding glutathione.",
"w": [
"LTC₄ carries glutathione.",
"LTD₄ is LTC₄ minus glutamate.",
"",
"LTE₄ is LTD₄ minus glycine.",
"LTF₄ is LTE₄ plus glutamate."
],
"src": "lec"
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
"e": "LTA₄ adds glutathione to form LTC₄. LTC₄ loses glutamate to form LTD₄, which loses glycine to form LTE₄. Adding glutamate back to LTE₄ gives LTF₄.",
"w": [
"That forms LTC₄ from LTA₄.",
"That forms LTE₄ from LTD₄.",
"That forms LTF₄ from LTE₄.",
"",
"5-Lipoxygenase acts at the first step."
],
"src": "lec"
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
"e": "The slow-reacting substance of anaphylaxis is a mixture of LTC₄, LTD₄ and LTE₄.",
"w": [
"LTA₄ is an intermediate and LTB₄ is not a peptidoleukotriene.",
"LTB₄ is not part of it.",
"These are prostanoids.",
"These are prostaglandins.",
""
],
"src": "lec"
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
"e": "An oral asthma drug that lowers every leukotriene and needs liver monitoring is zileuton, a 5-lipoxygenase inhibitor. 5-Lipoxygenase converts arachidonic acid to 5-HPETE, the first step of the leukotriene pathway.",
"w": [
"",
"This is the COX step.",
"Blocking this would spare LTB₄.",
"Blocking this would spare LTB₄ and LTC₄.",
"This is PLA2, blocked by corticosteroids."
],
"src": "lec"
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
"e": "Montelukast (Singulair) and zafirlukast (Accolate) block leukotrienes from binding their receptors on airway smooth muscle cells.",
"w": [
"That is zileuton.",
"",
"That is corticosteroids.",
"That is aspirin.",
"That is not their mechanism."
],
"src": "lec"
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
}
];
