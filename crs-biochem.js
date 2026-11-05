// CRS Biochemistry — Dr. S. Shetty lecture slides. Reworked set: fewer, multi-concept, high-yield questions; lv = Easy/Hard; shetty = practice questions from the slides, word for word
window.CRS_BC_TOPICS = ["Overview & Activation", "Carnitine Shuttle", "Carnitine & CPT Deficiencies", "β-Oxidation Reactions", "Energetics & Regulation", "Unsaturated & Odd-Chain Fatty Acids", "Methylmalonic Aciduria", "Peroxisomal, α- & ω-Oxidation", "MCAD Deficiency & Jamaican Vomiting Sickness", "Zellweger, X-ALD & Refsum", "Synthesis vs β-Oxidation & Sites", "Citrate Shuttle: Acetyl-CoA to Cytosol", "Sources of NADPH", "Acetyl-CoA Carboxylase Reaction", "Regulation of Acetyl-CoA Carboxylase", "Fatty Acid Synthase Complex", "FAS Cycle & Palmitate Stoichiometry", "Elongation & Desaturation", "Triacylglycerol Synthesis", "TAG Fate & Lipolysis", "Practice Questions (from the slides)"];
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
"s": "Which pair correctly describes where β-oxidation happens?",
"c": [
"Mainly brain and red cells; in the cytosol",
"Liver and muscle; mitochondrial matrix",
"Mainly adipose tissue; in the endoplasmic reticulum",
"Mainly liver; in the cytosol",
"Mainly kidney; in lysosomes"
],
"a": 1,
"e": "β-oxidation, the major pathway, removes 2-carbon units as acetyl CoA from the carboxyl end. Main tissues: liver and skeletal muscle (and heart). Subcellular site: mitochondria. Fatty acids reach them from adipose lipolysis, carried in plasma on albumin.",
"w": [
"Red cells lack mitochondria, and the brain does not use fatty acids for fuel.",
"",
"Adipose stores fat; the ER is the site of ω-oxidation and elongation.",
"Fatty acid synthesis is cytosolic; oxidation is mitochondrial.",
"Lysosomes do not carry out β-oxidation."
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
"s": "A 20-year-old has muscle pain and dark urine after a long hike. Between episodes his strength is normal. Which enzyme is deficient and what dietary advice fits?",
"c": [
"CPT I; eat a high-fat, low-carbohydrate diet",
"CPT II; avoid fasting, high carb, use MCFA",
"MCAD; give long-chain fats and fast overnight",
"Myophosphorylase; eat sugar only before exercise",
"OCTN2; give carnitine and fast between meals"
],
"a": 1,
"e": "CPT II deficiency is the most common cause of recurrent myoglobinuria. It affects liver, heart and skeletal muscle and shows up in the teens/20s as pain and myoglobinuria after prolonged exercise (when muscle relies on fat), with normal strength between attacks. Treatment: avoid fasting, high carbohydrate, low fat, using medium-chain fatty acids, which bypass the carnitine shuttle.",
"w": [
"CPT I deficiency is mainly hepatic; a high-fat diet would worsen any FAO defect.",
"",
"MCAD presents in infants with fasting hypoglycemia; fasting is the trigger to avoid.",
"Glycogen storage disease is not part of this lecture; the pattern of prolonged exercise points to CPT II.",
"Primary carnitine deficiency presents in early childhood, and fasting must be avoided."
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
"s": "Complete oxidation of one palmitoyl CoA is followed. Which set of products and net ATP from free palmitate, using 3 ATP per NADH, 2 per FADH₂ and 12 per acetyl CoA, is correct?",
"c": [
"8 FADH₂, 8 NADH, 8 acetyl CoA; net 131 ATP",
"7 FADH₂, 7 NADH, 7 acetyl CoA; net 117 ATP",
"7 FADH₂, 7 NADH, 8 acetyl CoA; net 131 ATP",
"7 FADH₂, 7 NADH, 8 acetyl CoA; net 129 ATP",
"16 FADH₂, 16 NADH, 8 acetyl CoA; net 146 ATP"
],
"a": 3,
"e": "Palmitate C16: n/2 − 1 = 7 cycles → 7 FADH₂ (×2 = 14), 7 NADH (×3 = 21) and 8 acetyl CoA (×12 = 96). Gross 131; minus 2 ATP equivalents for activation = 129 ATP. Stearate C18 gives 146.",
"w": [
"A 16-carbon chain needs only 7 cycles; the last cycle releases 2 acetyl CoA.",
"Seven cycles release 8 acetyl CoA, not 7.",
"131 is the gross yield; 2 ATP equivalents are spent on activation.",
"",
"One FADH₂ and one NADH per cycle, not per carbon; 146 is the figure for stearate."
],
"src": "lec"
},
{
"t": "Energetics & Regulation",
"lv": "Hard",
"s": "In a well-fed liver, which combination of signals slows β-oxidation, and at which steps?",
"c": [
"Malonyl CoA blocks thiolase; NADH blocks CPT I; acetyl CoA blocks CPT II",
"Malonyl CoA ⊣ CPT I, NADH ⊣ 3-OH-acyl DH, acetyl CoA ⊣ thiolase",
"Insulin phosphorylates acyl CoA dehydrogenase; citrate blocks CACT",
"Glucagon activates CPT I; AMP blocks enoyl CoA hydratase",
"FADH₂ blocks thiolase; malonyl CoA blocks CPT II"
],
"a": 1,
"e": "Regulation of β-oxidation: the main control is indirect, malonyl CoA ⊣ CPT I (high when ACC is active in the fed state). Product inhibition also slows it: NADH ⊣ 3-hydroxyacyl CoA dehydrogenase and acetyl CoA ⊣ thiolase.",
"w": [
"Each inhibitor is matched to the wrong step.",
"",
"These are not the regulatory points taught for β-oxidation.",
"Glucagon promotes, not slows, fat oxidation.",
"Malonyl CoA acts on CPT I, and acetyl CoA, not FADH₂, inhibits thiolase."
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
"s": "Oxidation of a 17-carbon fatty acid ends with a 3-carbon fragment. Which sequence handles it, and which vitamins are needed?",
"c": [
"Propionyl → D- → L-methylmalonyl → succinyl CoA; biotin, B12",
"Propionyl CoA → acetyl CoA → citrate; thiamine, lipoate",
"Malonyl CoA → acetyl CoA → succinyl CoA; biotin, folate",
"Propionyl CoA → L- → D-methylmalonyl CoA → fumarate; B6, B12",
"Propionyl CoA → succinyl CoA directly; B12 only"
],
"a": 0,
"e": "Odd-chain fatty acids: the final thiolase step gives propionyl CoA + acetyl CoA (valine and isoleucine also feed propionyl CoA). Propionyl CoA carboxylase (biotin) → D-methylmalonyl CoA → racemase → L-methylmalonyl CoA → methylmalonyl CoA mutase (B12) → succinyl CoA → TCA. This is the only part of a fatty acid that can become glucose.",
"w": [
"",
"Propionyl CoA is carboxylated, not converted to acetyl CoA.",
"Malonyl CoA is a synthesis intermediate, and folate is not used here.",
"The racemase converts D to L, and the product is succinyl CoA.",
"Two steps come first: biotin-dependent carboxylation and racemization."
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
"s": "Adult Refsum disease is caused by a block in which pathway, and which key finding results?",
"c": [
"ω-oxidation; dicarboxylic acids build up in urine",
"Peroxisomal β-oxidation; VLCFA build up in adrenals",
"α-oxidation; phytanic acid builds up",
"Mitochondrial β-oxidation; hypoketotic hypoglycemia",
"Propionate metabolism; methylmalonic acid in urine"
],
"a": 2,
"e": "Adult Refsum: AR, PHYH or PEX7 → phytanoyl CoA hydroxylase deficiency → α-oxidation fails. Phytanic acid (a β-methyl branched FA from dairy and ruminant fat) accumulates, increasing membrane fluidity and slowing conduction. Features: weakness, polyneuropathy, cerebellar ataxia, ichthyosis, retinitis pigmentosa, anosmia.",
"w": [
"That fits MCAD deficiency and Jamaican vomiting sickness.",
"That fits X-ALD.",
"",
"That fits carnitine and MCAD defects.",
"That is methylmalonic aciduria."
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
"s": "A 7-year-old boy has worsening school performance, behavior change and skin darkening with low cortisol. VLCFA are high. Which set is correct?",
"c": [
"Autosomal recessive PEX defect; renal cysts and hepatomegaly",
"X-linked PHYH defect; retinitis pigmentosa and ichthyosis",
"Autosomal dominant ALDP excess; peripheral neuropathy",
"X-linked ABCD1; brain, adrenal and Leydig cells",
"X-linked MCAD defect; fasting hypoglycemia"
],
"a": 3,
"e": "X-linked adrenoleukodystrophy: mutation of ABCD1 → ALDP, the peroxisomal membrane transporter that brings VLCFA in. VLCFA accumulate in brain white matter (demyelination, cognitive decline), adrenal cortex (adrenal insufficiency, hyperpigmentation) and Leydig cells (sexual dysfunction).",
"w": [
"That is Zellweger syndrome in newborns.",
"PHYH is autosomal and causes Refsum disease.",
"ALDP is deficient, not excessive, and the gene is X-linked.",
"",
"MCAD is autosomal and does not raise VLCFA."
],
"src": "lec"
},
{
"t": "Synthesis vs β-Oxidation & Sites",
"lv": "Easy",
"s": "Which comparison between fatty acid synthesis and β-oxidation is correct?",
"c": [
"Synthesis: mitochondria, NADH, CoA; oxidation: cytosol, NADPH, ACP",
"Synthesis: cytosol, FADH₂, CoA; oxidation: mitochondria, NADPH, ACP",
"Synthesis: cytosol, NADPH, ACP; oxidation: matrix, NAD⁺, CoA",
"Both use separate enzymes and the same L-3-hydroxy intermediate",
"Both are stimulated by insulin and inhibited by glucagon"
],
"a": 2,
"e": "The table they test: Synthesis — cytoplasm of liver, lactating mammary gland, adipose; C₂ added as malonyl CoA; uses NADPH (niacin, B3); carrier ACP; one multi-enzyme complex; large ATP use; regulated directly at ACC; insulin ↑; D-3-hydroxy. Oxidation — mitochondria; C₂ removed as acetyl CoA; makes NADH/FADH₂; carrier CoA; separate enzymes; regulated indirectly (malonyl CoA ⊣ CPT I); glucagon/epinephrine ↑; L-3-hydroxy.",
"w": [
"Every pairing is reversed.",
"Synthesis uses NADPH and ACP; oxidation makes FADH₂ and uses CoA.",
"",
"Synthesis uses one multi-enzyme complex and a D-isomer.",
"Insulin stimulates synthesis; glucagon and epinephrine stimulate oxidation."
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
"s": "Acetyl CoA made in the mitochondria must reach the cytosol to make fatty acids. Which sequence is correct?",
"c": [
"Acetyl CoA crosses on carnitine; CPT I releases it in the cytosol",
"Malonyl CoA leaves; acetyl-CoA carboxylase reverses it in the cytosol",
"Citrate leaves; citrate synthase splits it in the cytosol",
"Acetyl CoA crosses freely; no carrier is needed",
"Citrate exits; ATP-citrate lyase frees acetyl CoA + OAA"
],
"a": 4,
"e": "Citrate shuttle: acetyl CoA (from PDH and FAO) cannot cross the inner membrane. Matrix: acetyl CoA + OAA → citrate synthase → citrate, which exits. Cytosol: citrate + CoA + ATP → ATP-citrate lyase → acetyl CoA + OAA. OAA → malate dehydrogenase (NADH) → malate → malic enzyme → pyruvate + CO₂ + NADPH. Pyruvate re-enters → pyruvate carboxylase (biotin, ATP) → OAA. Cost: 2 ATP per acetyl moved.",
"w": [
"Carnitine carries acyl groups into, not acetyl groups out of, mitochondria for synthesis.",
"Malonyl CoA is made in the cytosol, and ACC is irreversible.",
"ATP-citrate lyase, not citrate synthase, splits citrate in the cytosol.",
"Acetyl CoA cannot cross the inner mitochondrial membrane.",
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
"s": "Which statement about the acetyl-CoA carboxylase reaction is correct?",
"c": [
"Thiamine enzyme; acetyl CoA + CO₂ → malonyl CoA; reversible",
"Biotin enzyme; makes malonyl CoA; irreversible",
"Biotin enzyme; malonyl CoA → acetyl CoA + CO₂ in the FAS",
"B12 enzyme; propionyl CoA → methylmalonyl CoA",
"No cofactor; the rate-limiting step of β-oxidation"
],
"a": 1,
"e": "Acetyl-CoA carboxylase is the committed, regulated step of fatty acid synthesis: acetyl CoA + HCO₃⁻ + ATP → malonyl CoA, irreversible. Its prosthetic group is biotin; ATP forms a carboxybiotin intermediate. Remember the biotin carboxylases together: ACC and pyruvate carboxylase (and propionyl CoA carboxylase from lecture 1).",
"w": [
"ACC uses biotin and is irreversible.",
"",
"That decarboxylation happens on fatty acid synthase, not ACC.",
"That is propionyl CoA carboxylase and mutase chemistry.",
"ACC is the committed step of synthesis, not oxidation."
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
"s": "Fatty acid synthase completes its first full cycle. Which order of steps is correct, and what decides that the final product is palmitate?",
"c": [
"Condense, reduce, dehydrate, reduce; thioesterase at C16",
"Reduce, condense, reduce, dehydrate; ACP releases the C18 chain",
"Dehydrate, reduce, condense, reduce; malonyl transferase stops at C16",
"Condense, oxidize, hydrate, thiolyze; NADPH runs out at C16",
"Condense, reduce, dehydrate, reduce; ER elongase cuts at C16"
],
"a": 0,
"e": "Each FAS cycle: condensation (malonyl decarboxylation releases CO₂ and drives it) → reduction (NADPH) → dehydration → reduction (NADPH). Round 1: acetoacetyl → D-3-hydroxybutyryl → crotonyl → butyryl-ACP. After 7 rounds the chain is C16 and thioesterase, the ruler, releases palmitate 16:0.",
"w": [
"",
"Condensation comes first, and the product is C16.",
"Thioesterase, not the transferase, ends the chain.",
"These are oxidation steps, and thioesterase is the ruler.",
"The ER system lengthens chains; it does not release palmitate."
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
"s": "Where does elongation of palmitate to longer fatty acids occur, and what is the 2-carbon donor?",
"c": [
"Cytosolic face of the ER; malonyl CoA",
"Mitochondrial matrix; acetyl CoA only",
"Peroxisome; acetyl CoA",
"Fatty acid synthase in the cytosol; malonyl CoA",
"Golgi apparatus; propionyl CoA"
],
"a": 0,
"e": "Elongation beyond C16 happens on the cytosolic face of the ER; malonyl CoA donates 2 carbons to the carboxyl end, again with NADPH. Desaturation also happens in the ER.",
"w": [
"",
"Mitochondrial elongation is not the system taught here.",
"Peroxisomes shorten, not lengthen, chains.",
"FAS stops at C16; elongation past that is in the ER.",
"Not the site or donor."
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
"s": "Which enzymes break down stored triacylglycerol in adipose tissue, in order?",
"c": [
"HSL, TAG → DAG; then lipoprotein lipase, DAG → MAG",
"Pancreatic lipase, TAG → MAG; then HSL",
"ATGL, TAG → DAG; then HSL, DAG → MAG",
"Phosphatidic acid phosphatase, TAG → DAG",
"Thioesterase, TAG → free fatty acids"
],
"a": 2,
"e": "Lipolysis: adipose triglyceride lipase (ATGL), TAG → DAG (perilipins on the droplet regulate access) → hormone-sensitive lipase, DAG → MAG → MAG lipase. Glycerol goes to the liver (which has glycerol kinase); fatty acids travel on albumin to tissues to be activated and oxidized.",
"w": [
"ATGL starts lipolysis; lipoprotein lipase acts on circulating lipoproteins.",
"Pancreatic lipase digests dietary fat in the gut.",
"",
"This enzyme acts in TAG synthesis.",
"Thioesterase releases palmitate from FAS."
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
"s": "After a 16-hour fast, epinephrine and glucagon act on an adipocyte and a hepatocyte. Which pairing is correct?",
"c": [
"HSL dephosphorylated and ON; ACC dephosphorylated and ON",
"HSL phosphorylated and OFF; ACC phosphorylated and ON",
"HSL phosphorylated and ON; ACC phosphorylated and OFF",
"HSL dephosphorylated and OFF; ACC phosphorylated and OFF",
"HSL phosphorylated and ON; ACC dephosphorylated and ON"
],
"a": 2,
"e": "Same signal, opposite effect: fasting hormones → cAMP → PKA phosphorylates both. HSL becomes active → fat released; ACC becomes inactive → no malonyl CoA → CPT I free → fat burned. Insulin does the reverse through dephosphorylation. Classic NBME trap.",
"w": [
"Fasting hormones phosphorylate both enzymes.",
"Phosphorylation turns HSL on and ACC off.",
"",
"HSL is phosphorylated and active in fasting.",
"ACC is phosphorylated and inactive in fasting."
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
}
];
