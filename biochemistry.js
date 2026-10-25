// Biochemistry — question data
// src: "doc" = question from "BCHM tips & qs" (stem and choices word for word; broken "ti" letters
//       from the PDF restored), "new" = written for this site from the exam blueprint.
// given: true = answer key printed in the document; otherwise the answer is supplied here.
// e = explanation, w = one note per choice (same order as c).

window.BCHM_TOPICS = [
  "Glycolysis",
  "Glycogen Metabolism",
  "GAGs & Carbohydrates",
  "Collagen & Elastin",
  "Other Topics"
];

window.BCHM_QUESTIONS = [
// ---------- Document: glycogen questions with printed answers ----------
{
  src: "doc", given: true, t: "Glycogen Metabolism",
  s: `A 37-year-old woman presents with episodes of muscle cramping and weakness, especially after prolonged exercise. Blood tests reveal elevated levels of creatine kinase (CK) and lactate. A biopsy of her muscle shows an accumulation of glycogen. The patient is diagnosed with a glycogen storage disorder. Which of the following is the most likely abnormality in her muscle cells?`,
  c: ["Impaired conversion of glucose-6-phosphate to glucose", "Decreased function of the pyruvate dehydrogenase complex", "Decreased function of the TCA cycle", "Defective glycogen phosphorylase", "Impaired electron transport chain complex"],
  a: 3,
  e: `Exercise-induced cramps and weakness, high CK (muscle damage), and glycogen piling up in muscle point to McArdle disease (GSD V): deficiency of muscle glycogen phosphorylase. Muscle can't break down its glycogen for fuel during exercise, so it cramps and is damaged. (Classically, lactate fails to rise with ischemic exercise because glycolytic fuel is lacking; the "second wind" phenomenon is typical.)`,
  w: [
    "G6P → glucose (glucose-6-phosphatase) is a liver enzyme; its loss is von Gierke disease with hypoglycemia and hepatomegaly, not a muscle disorder.",
    "PDH deficiency causes lactic acidosis and neurologic problems, not glycogen accumulation.",
    "TCA cycle defects don't cause glycogen storage in muscle.",
    "Correct — muscle phosphorylase deficiency (McArdle).",
    "ETC defects are mitochondrial myopathies (ragged red fibers), not glycogen storage."
  ]
},
{
  src: "doc", given: true, t: "Glycogen Metabolism",
  s: `A 35-year-old man is diagnosed with a glycogen storage disease. He has impaired ability to mobilize glycogen in response to energy demands. Which of the following best explains the underlying defect in this patient?`,
  c: ["Inability to activate glycogen phosphorylase in response to AMP", "Inability to deactivate glycogen synthase in response to glucose-6-phosphate", "Inability to convert glucose-1-phosphate to glucose-6-phosphate", "Inability to convert glucose-6-phosphate to glucose in the liver", "Inability to activate glycogen synthase in response to glucose-6-phosphate"],
  a: 0,
  e: `"Mobilizing glycogen in response to energy demand" means glycogenolysis triggered by a low-energy signal. When ATP is used up, AMP rises and allosterically activates glycogen phosphorylase (especially in muscle), releasing glucose-1-phosphate for fuel. Failure of this step means glycogen can't be broken down when energy is needed.`,
  w: [
    "Correct — AMP is the energy-demand signal that switches on phosphorylase.",
    "G6P activates, not deactivates, glycogen synthase — and this concerns storage, not mobilization.",
    "Phosphoglucomutase acts after glycogen is already broken down; the stem points to activating breakdown.",
    "Glucose-6-phosphatase deficiency (von Gierke) blocks glucose release from liver, not the response to energy demand.",
    "This concerns glycogen synthesis, not mobilization."
  ]
},
{
  src: "doc", given: true, t: "Glycogen Metabolism",
  s: `Which of the following best explains the regulation of glycogen metabolism?`,
  c: ["Glucagon stimulates glycogen breakdown via activation of glycogen synthase", "Insulin stimulates glycogen synthesis by inhibiting glycogen phosphorylase", "AMP activates glycogen synthase to promote glucose storage", "Cortisol inhibits glycogen phosphorylase to prevent glycogen breakdown", "Glucose-6-phosphate activates glycogen phosphorylase to inhibit glycogen breakdown"],
  a: 1,
  e: `Insulin activates protein phosphatase 1, which dephosphorylates enzymes: glycogen synthase becomes active and glycogen phosphorylase becomes inactive. So insulin promotes glycogen synthesis and blocks breakdown at the same time.`,
  w: [
    "Glucagon stimulates breakdown by activating phosphorylase (via cAMP/PKA) and inactivating synthase.",
    "Correct — insulin → PP1 → synthase on, phosphorylase off.",
    "AMP activates phosphorylase (breakdown), not synthase.",
    "Cortisol doesn't directly inhibit phosphorylase; it promotes gluconeogenesis and supports hepatic glycogen stores.",
    "G6P activates synthase and inhibits phosphorylase."
  ]
},
{
  src: "doc", given: true, t: "Glycogen Metabolism",
  s: `A 2-year-old child presents with hepatomegaly, failure to thrive, and episodes of hypoglycemia. Laboratory tests show elevated lactate, uric acid, and lipid levels. The child has a history of frequent hypoglycemic episodes during fasting, which are relieved with glucose supplementation. A liver biopsy reveals an accumulation of glycogen. Which of the following enzymes is most likely deficient in this patient?`,
  c: ["Lysosomal acid α-glucosidase", "Glucose-6-phosphatase", "Phosphorylase", "Debranching enzyme", "Branching enzyme"],
  a: 1,
  e: `Von Gierke disease (GSD I): no glucose-6-phosphatase, so the liver can't release free glucose from either glycogen or gluconeogenesis → severe fasting hypoglycemia. Trapped G6P is shunted into glycolysis (↑lactate), the pentose pathway (↑purines → ↑uric acid) and fat synthesis (↑triglycerides), with glycogen building up in an enlarged liver.`,
  w: [
    "Acid α-glucosidase deficiency is Pompe disease — cardiomegaly and hypotonia, not fasting hypoglycemia.",
    "Correct — the classic triad of hypoglycemia, lactic acidosis, hyperuricemia/hyperlipidemia.",
    "Liver phosphorylase deficiency (Hers) is milder and lacks the lactic acidosis and hyperuricemia.",
    "Debranching deficiency (Cori) causes milder hypoglycemia with normal lactate and uric acid.",
    "Branching deficiency (Andersen) causes cirrhosis and liver failure."
  ]
},
{
  src: "doc", given: true, t: "Glycogen Metabolism",
  s: `A 3-month-old infant presents with feeding difficulties, and cardiomegaly. The parents report that the infant has had difficulty breathing, and respiratory failure occurs suddenly during a mild infection. A muscle biopsy reveals glycogen accumulation in lysosomes within the myocardium and skeletal muscles. The most likely diagnosis is:`,
  c: ["Pompe disease", "McArdle disease", "Cori disease", "Hers disease", "Glycogen storage disease type IV"],
  a: 0,
  e: `Pompe disease (GSD II) is a lysosomal storage disease due to deficiency of lysosomal acid α-glucosidase (acid maltase). Glycogen builds up inside lysosomes of heart and skeletal muscle, causing infant-onset cardiomegaly, hypotonia ("floppy baby"), feeding problems and respiratory failure. Blood glucose is normal because cytosolic glycogen breakdown is intact.`,
  w: [
    "Correct — lysosomal glycogen, cardiomegaly, infant onset.",
    "McArdle (GSD V) presents in adolescents/adults with exercise cramps; no cardiomegaly.",
    "Cori (GSD III) affects liver ± muscle with abnormal short-branched glycogen in the cytosol.",
    "Hers (GSD VI) is liver phosphorylase deficiency — mild hepatomegaly and hypoglycemia.",
    "GSD IV (Andersen) causes cirrhosis from abnormal long-chain glycogen."
  ]
},
{
  src: "doc", given: true, t: "Glycogen Metabolism",
  s: `A 6-month-old infant is evaluated for a progressive increase in the size of her abdomen. Physical examination reveals hepatomegaly. The infant's parents report that she has not been gaining weight as expected. Laboratory tests show fasting hypoglycemia and mildly elevated liver enzymes. A liver biopsy reveals glycogen accumulation. The most likely deficiency in this patient is:`,
  c: ["Lysosomal α-glucosidase", "Glucose-6-phosphatase", "Debranching enzyme", "Muscle phosphorylase", "Liver phosphorylase"],
  a: 4,
  e: `Hepatomegaly with glycogen accumulation, fasting hypoglycemia and only mild lab abnormalities (no lactic acidosis, hyperuricemia or hyperlipidemia described) fits Hers disease (GSD VI), liver glycogen phosphorylase deficiency. It is usually milder than von Gierke disease because gluconeogenesis can still release glucose.`,
  w: [
    "Pompe disease — heart and skeletal muscle, normal glucose.",
    "Von Gierke would add lactic acidosis, hyperuricemia and hyperlipidemia and is more severe.",
    "Cori disease is possible, but often also involves muscle (weakness, ↑CK) and has abnormal limit-dextrin glycogen; the key here lists liver phosphorylase.",
    "Muscle phosphorylase (McArdle) doesn't cause hepatomegaly or hypoglycemia.",
    "Correct (per key) — Hers disease."
  ]
},

// ---------- Document: practice questions (answers supplied) ----------
{
  src: "doc", t: "GAGs & Carbohydrates",
  s: `This heteropolysaccharide has multiple uses in Medicine that include its use in blood transfusions to prevent the blood from coagulating before administration, as anticoagulant therapy in prophylaxis and treatment of venous thrombosis and its extension, in pulmonary embolisms and in other similar situations: Select the heteropolysaccharide which is used for the above purpose.`,
  c: ["Hyaluronic acid", "Chondroitin- 4- Sulfate", "Chondroitin- 6- Sulfate", "Heparin", "Dermatan Sulfate"],
  a: 3,
  e: `Heparin is a highly sulfated GAG (the most negatively charged biomolecule) made by mast cells. It binds antithrombin III and greatly speeds its inactivation of thrombin and factor Xa, which is why it is used as an anticoagulant for DVT, PE and stored blood.`,
  w: [
    "Hyaluronic acid lubricates joints and fills the vitreous; it isn't an anticoagulant.",
    "Chondroitin sulfates are the main GAGs of cartilage, bone and tendon.",
    "Same — a structural GAG of cartilage.",
    "Correct — activates antithrombin III.",
    "Dermatan sulfate is in skin, vessels and heart valves; it has only weak anticoagulant activity."
  ]
},
{
  src: "doc", t: "GAGs & Carbohydrates",
  s: `Human beings don't have the enzymes necessary for the hydrolysis of the beta1,4-O-glycosidic linkages between molecules of glucose. That is why we can not digest this compound and it is part of some laxatives. Which of the following is among them?`,
  c: ["cellulose", "glycogen", "amylose", "amylopectin", "lactose", "sucrose"],
  a: 0,
  e: `Cellulose is a straight chain of glucose joined by β-1,4 bonds. Humans have no cellulase, so it passes undigested as dietary fiber, adding bulk and water to stool (bulk laxatives such as methylcellulose).`,
  w: [
    "Correct — glucose β(1→4) glucose.",
    "Glycogen is α-1,4 with α-1,6 branches — digestible.",
    "Amylose is α-1,4 linked — digested by amylase.",
    "Amylopectin is α-1,4 with α-1,6 branches — digestible.",
    "Lactose is galactose β-1,4 glucose — the bond is β-1,4 but between galactose and glucose, and lactase digests it.",
    "Sucrose is glucose α1→β2 fructose, digested by sucrase."
  ]
},
{
  src: "doc", t: "Other Topics",
  s: `A 45 year-old patient presents with severe pallor, peripheral neuropathy and psychosis. Lab tests show: severe anemia, MCV (Mean Corpuscular Volume) = 140 fl (Reference range: 80-100 fl), WBC and platelets low, and presence of antibodies to intrinsic factor, produced by parietal cells. This anemia is caused in this patient by a deficit of which of the following?`,
  c: ["Ascorbate", "Cobalamine", "Folate", "Iron", "Niacin"],
  a: 1,
  e: `Antibodies to intrinsic factor = pernicious anemia. Without intrinsic factor, vitamin B12 (cobalamin) can't be absorbed in the ileum. B12 deficiency gives a megaloblastic (high MCV) anemia with pancytopenia, and — unlike folate deficiency — neurologic damage (neuropathy, subacute combined degeneration, psychiatric changes) from impaired methylmalonyl-CoA metabolism.`,
  w: [
    "Vitamin C deficiency causes scurvy (bleeding gums, poor wound healing).",
    "Correct — pernicious anemia, megaloblastic with neurologic signs.",
    "Folate deficiency causes megaloblastic anemia but no neuropathy and no intrinsic factor antibodies.",
    "Iron deficiency gives a microcytic (low MCV) anemia.",
    "Niacin deficiency causes pellagra (dermatitis, diarrhea, dementia)."
  ]
},
{
  src: "doc", t: "GAGs & Carbohydrates",
  s: `A normal diet contains starch, composed of amylose and amylopectin, as a source of carbohydrate. In amylose, glucose residues are linked by which one of the following?`,
  c: ["α-1,4 glycosidic bonds", "α-1,6 glycosidic bonds", "β-1,4 glycosidic bonds", "α-1,1 glycosidic bonds", "α-1→ β-2 glycosidic bonds"],
  a: 0,
  e: `Amylose is an unbranched chain of glucose joined only by α-1,4 bonds. Amylopectin (and glycogen) add α-1,6 branch points.`,
  w: [
    "Correct — unbranched α-1,4 chain.",
    "α-1,6 bonds form the branches in amylopectin and glycogen.",
    "β-1,4 bonds are found in cellulose.",
    "α-1,1 links the two glucoses of trehalose.",
    "α1→β2 is the bond in sucrose."
  ]
},
{
  src: "doc", t: "Glycolysis",
  s: `A 5 year old boy who is nutritionally deprived, is suffering from hemolytic anemia. Which one of the following can act as an allosteric effector and helps in the unloading of oxygen from hemoglobin in this patient?`,
  c: ["3-phosphoglycerate", "2,3 bisphosphoglycerate", "1,3 bisphosphoglycerate", "Phosphoenolpyruvate", "2-phosphoglycerate"],
  a: 1,
  e: `In RBCs, bisphosphoglycerate mutase diverts 1,3-BPG to 2,3-BPG (the Rapoport–Luebering shunt). 2,3-BPG binds deoxyhemoglobin and stabilizes the T state, shifting the O₂ curve to the right so more O₂ is released to tissues. Levels rise in anemia and at high altitude as an adaptation.`,
  w: [
    "3-PG is a glycolytic intermediate, not an Hb effector.",
    "Correct — right-shifts the O₂ dissociation curve.",
    "1,3-BPG is its precursor and a high-energy intermediate, but it doesn't regulate Hb.",
    "PEP is the high-energy substrate for pyruvate kinase.",
    "2-PG is the substrate of enolase."
  ]
},
{
  src: "doc", t: "Other Topics",
  s: `Blood is drawn from a child with severe anemia and the hemoglobin protein is degraded for peptide and amino acid analysis. Of the results below, which change in the primary structure is most likely to correlate with the clinical phenotype of anemia?`,
  c: ["Ile-Leu-Val     to Ile-Ile-Val", "Leu-Glu-Ile to Leu-Val-Ile", "Gly-Ile-Gly     to Gly-Val-Gly", "Gly-Asp-Gly to Gly-Glu-Gly", "Val-Val-Val to Val-Leu-Val"],
  a: 1,
  e: `Swapping a charged, hydrophilic glutamate for a hydrophobic valine is the sickle cell mutation (Glu6Val in β-globin). The new hydrophobic patch lets deoxy-HbS molecules stick together and polymerize, sickling the RBCs and causing hemolytic anemia. The other changes are conservative (similar side chains) and unlikely to change function.`,
  w: [
    "Leu→Ile: both hydrophobic, conservative.",
    "Correct — Glu→Val (charged → hydrophobic), as in HbS.",
    "Ile→Val: both hydrophobic, conservative.",
    "Asp→Glu: both acidic, conservative.",
    "Val→Leu: both hydrophobic, conservative."
  ]
},
{
  src: "doc", t: "Other Topics",
  s: `In humans there are four levels of structural organization in proteins. Select the CORRECT statement regarding the protein structure.`,
  c: ["The α-helix is composed of more than one polypeptide chain", "Secondary structure determines the amino acid sequence in the peptide chain", "The presence of domains is characteristics of secondary structure", "α-helix and β sheets are the main secondary structures in proteins", "β sheet is stable during the heat treatment"],
  a: 3,
  e: `Secondary structure is the local folding of the backbone held by hydrogen bonds; the α-helix and β-pleated sheet are the two main types.`,
  w: [
    "An α-helix is formed by a single chain coiling on itself (a triple helix like collagen involves three chains).",
    "Reversed: the amino acid sequence (primary structure) determines secondary structure.",
    "Domains are part of tertiary structure.",
    "Correct.",
    "Heat breaks hydrogen bonds and denatures secondary structure, including β-sheets."
  ]
},
{
  src: "doc", t: "Collagen & Elastin",
  s: `A researcher discovered a mutation in the pro α-1 chain in type 1 collagen which causes decreased output of gene product of pro α-1 chain. This genetic disorder is known as`,
  c: ["Ehlers-Danlos syndrome", "Osteogenesis imperfecta", "Marfan's syndrome", "Emphysema", "Alpha thalassemia"],
  a: 1,
  e: `Osteogenesis imperfecta is caused by mutations in COL1A1 or COL1A2 (the pro-α1 and pro-α2 chains of type I collagen). A mutation that reduces production of normal pro-α1(I) chains (the mild type I form) leaves less type I collagen, giving brittle bones, blue sclerae and hearing loss.`,
  w: [
    "Ehlers–Danlos mostly involves type V or III collagen or processing enzymes (lysyl hydroxylase, procollagen peptidase).",
    "Correct — type I collagen defect.",
    "Marfan syndrome is a fibrillin-1 defect.",
    "Emphysema is linked to α1-antitrypsin deficiency and smoking.",
    "α-thalassemia is reduced α-globin synthesis — a hemoglobin disorder."
  ]
},
{
  src: "doc", t: "Collagen & Elastin",
  s: `A 30 year old officer visits to your clinic complaining that he sometimes has problem in breathing and thinks that he has bronchial asthma. Blood levels indicates that low levels of ά1-Antitrypsin and abnormal liver function tests. The physiological function of ά1-Antitrypsin is to:`,
  c: ["Inhibit action of pancreatic trypsinogen", "Initiate blood coagulation in the lung", "Inhibit tissue destruction by proteases", "Prevent oxidation of lung proteins", "Forms complexes with pancreatic zymogens"],
  a: 2,
  e: `α1-antitrypsin is a serine protease inhibitor (serpin) made in the liver. Its main job is to inhibit neutrophil elastase in the lungs. Without it, elastase destroys alveolar elastin → panacinar emphysema in young adults. The misfolded protein can also build up in hepatocytes, causing liver disease (hence the abnormal LFTs).`,
  w: [
    "Trypsinogen is an inactive zymogen; it isn't α1AT's physiological target.",
    "α1AT has no role in starting coagulation.",
    "Correct — inhibits elastase and other proteases.",
    "α1AT doesn't protect proteins from oxidation; in fact smoking oxidizes α1AT itself.",
    "It doesn't bind pancreatic zymogens."
  ]
},
{
  src: "doc", t: "Collagen & Elastin",
  s: `A 15 year old boy visited the physician with the complaints of joint pain, bleeding of the gums and loosening of the teeth. This is due to the defect in the post translational modification of collagen molecule. This problem is corrected by supplying which compound in the diet of the patient?`,
  c: ["Lysyl oxidase", "Copper", "Α-Ketoglutarate", "Glycine", "Ascorbic acid"],
  a: 4,
  e: `This is scurvy. Prolyl and lysyl hydroxylases (in the RER) need vitamin C (ascorbic acid) to keep their iron in the Fe²⁺ state. Without hydroxyproline, collagen triple helices are unstable, giving fragile vessels (bleeding gums, bruising), loose teeth and poor wound healing. Dietary vitamin C corrects it.`,
  w: [
    "Lysyl oxidase is an enzyme made by the body, not a dietary supplement.",
    "Copper is the cofactor for lysyl oxidase (cross-linking); deficiency is Menkes disease, not scurvy.",
    "α-ketoglutarate is a co-substrate of hydroxylation but is made endogenously from the TCA cycle.",
    "Glycine is a non-essential amino acid and not the missing factor.",
    "Correct — vitamin C."
  ]
},
{
  src: "doc", t: "Collagen & Elastin",
  s: `A 67-year-old man has a restricted diet that includes no fresh citrus fruits or leafy green vegetables. His teeth are loose and his gums bleed easily. This patient's disorder most likely results from a defect in collagen synthesis that involves the modification of which of the following amino acids?`,
  c: ["Arginine", "Cysteine", "Histidine", "Proline", "Leucine"],
  a: 3,
  e: `Scurvy from lack of vitamin C impairs hydroxylation of proline (and lysine) residues in procollagen. Hydroxyproline forms the hydrogen bonds that stabilize the collagen triple helix.`,
  w: [
    "Arginine is not hydroxylated in collagen.",
    "Cysteines in the propeptides form disulfide bonds, but this doesn't need vitamin C.",
    "Histidine isn't modified in collagen synthesis.",
    "Correct — prolyl hydroxylation needs vitamin C.",
    "Leucine isn't modified in collagen."
  ]
},
{
  src: "doc", t: "Collagen & Elastin",
  s: `The enzyme that catalyzes the cross-linking of the side chains of four lysine residues to form desmosine is which of the following?`,
  c: ["C-procollagen peptidase", "Lysyl oxidase", "Lysyl hydroxylase", "N-procollagen peptidase", "Prolyl hydroxylase"],
  a: 1,
  e: `Lysyl oxidase (copper-dependent) oxidatively deaminates lysine side chains to allysine aldehydes. In elastin, three allysines and one unmodified lysine condense to form desmosine, the cross-link that lets elastin stretch and recoil. The same enzyme makes collagen cross-links.`,
  w: [
    "C-procollagen peptidase removes C-terminal propeptides from procollagen outside the cell.",
    "Correct — forms allysine for desmosine cross-links.",
    "Lysyl hydroxylase makes hydroxylysine in collagen (in the RER).",
    "N-procollagen peptidase removes N-terminal propeptides.",
    "Prolyl hydroxylase makes hydroxyproline (vitamin C dependent)."
  ]
},
{
  src: "doc", t: "Glycolysis",
  s: `The glycolytic enzyme triose phosphate isomerase acts upon a phosphorylated triose carbohyrate. Which of the following is an example of an aldotriose?`,
  c: ["dihydroxyacetone", "erythrose", "glyceraldehyde", "ribose", "ribulose", "threose"],
  a: 2,
  e: `An aldotriose is a 3-carbon sugar with an aldehyde group: glyceraldehyde. Its ketone isomer, dihydroxyacetone, is a ketotriose. Triose phosphate isomerase interconverts DHAP and glyceraldehyde-3-phosphate.`,
  w: [
    "Dihydroxyacetone is a ketotriose.",
    "Erythrose is an aldotetrose (4 C).",
    "Correct — 3 carbons, aldehyde group.",
    "Ribose is an aldopentose.",
    "Ribulose is a ketopentose.",
    "Threose is an aldotetrose."
  ]
},
{
  src: "doc", t: "Glycolysis",
  s: `The GLUT-4 transporter found in some tissues is regulated by altering the number of transporters on the cell surface so that it only operates efficiently under certain metabolic conditions. The signal and circumstances are as follows – the GLUT-4 transporter is upregulated by which of the following?`,
  c: ["Fructose 2,6 bisphosphate in the fasting state", "Fructose 2,6 bisphosphate in the well fed state", "Glucagon in the fasting state", "Glucagon in the well-fed state", "Insulin in the fasting state", "Insulin in the well-fed state"],
  a: 5,
  e: `GLUT-4 is the insulin-responsive transporter of skeletal muscle and adipose tissue (and heart). After a meal, insulin signaling moves GLUT-4 from intracellular vesicles to the cell membrane, increasing glucose uptake. (Exercise can also move GLUT-4 to the surface without insulin.)`,
  w: [
    "F2,6BP regulates PFK-1/FBPase-1 inside the cell; it doesn't move GLUT-4.",
    "Same — not a transporter signal.",
    "Glucagon has no effect on GLUT-4 (and muscle lacks glucagon receptors).",
    "Glucagon is low in the fed state.",
    "Insulin is low when fasting.",
    "Correct — insulin, fed state."
  ]
},
{
  src: "doc", t: "Glycolysis",
  s: `A patient at your clinic has a rare genetic disorder which involves a gene implicated in monosaccharide malabsorption. On feeding with a test meal of sucrose, the concentration of glucose in the portal circulation increased, but the concentration of fructose did not. The affected gene is most likely associated with which of the following proteins?`,
  c: ["GLUT-2", "GLUT-5", "GLUT-7", "Glucagon Receptor", "Insulin Receptor"],
  a: 1,
  e: `Sucrase splits sucrose into glucose and fructose. Glucose is absorbed fine (apical SGLT1), but fructose enters enterocytes by facilitated diffusion through the apical GLUT-5 transporter. If fructose never reaches the portal blood while glucose does, GLUT-5 is defective.`,
  w: [
    "GLUT-2 on the basolateral side exports both glucose and fructose; its loss would block both.",
    "Correct — the fructose transporter.",
    "GLUT-7 is an ER/hepatic transporter, not the intestinal fructose carrier.",
    "The glucagon receptor doesn't affect sugar absorption.",
    "Intestinal absorption isn't insulin dependent."
  ]
},
{
  src: "doc", t: "Glycolysis",
  s: `A mycologist has been accidentally poisoned with koningic acid extracted from the fungus Trichoderma koningii. This poison blocks some enzymes that catalyze reactions that reduce NAD+ to NADH. Which enzyme of glycolysis requires this cofactor reduction and will therefore be unable to function in this patient?`,
  c: ["aldolase", "glyceraldeyde 3-phosphate dehydrogenase", "phosphoglycerate kinase", "pyruvate dehydrogenase", "triose isomerase"],
  a: 1,
  e: `Glyceraldehyde-3-phosphate dehydrogenase is the only glycolytic enzyme that reduces NAD⁺ to NADH: it oxidizes G3P and adds inorganic phosphate to make 1,3-bisphosphoglycerate. (Koningic acid is a specific GAPDH inhibitor.)`,
  w: [
    "Aldolase splits F-1,6-BP; no NAD⁺.",
    "Correct — the only NADH-producing glycolytic step.",
    "Phosphoglycerate kinase makes ATP; no NAD⁺.",
    "PDH does make NADH, but it links glycolysis to the TCA cycle and isn't a glycolytic enzyme.",
    "Triose phosphate isomerase interconverts DHAP and G3P; no NAD⁺."
  ]
},
{
  src: "doc", t: "Glycolysis",
  s: `Suppression of phosphofructokinase-2 causes a decrease in concentration of fructose-2,6-bisphosphate. In the same metabolic state that causes this, which of the following enzymes will also be inhibited?`,
  c: ["adenylyl cyclase", "aldolase", "fructose 1,6-phosphatase", "pyruvate carboxylase", "pyruvate kinase"],
  a: 4,
  e: `PFK-2 is suppressed in the fasting state: glucagon → cAMP → PKA phosphorylates the bifunctional enzyme, turning off PFK-2 and turning on FBPase-2, so F2,6BP falls. Glycolysis slows and gluconeogenesis speeds up. In the same state PKA also phosphorylates and inhibits liver pyruvate kinase, so PEP isn't wasted to pyruvate.`,
  w: [
    "Adenylyl cyclase is activated by glucagon in this state.",
    "Aldolase isn't a regulated step.",
    "Low F2,6BP relieves inhibition of FBPase-1, so it is activated.",
    "Pyruvate carboxylase is active in gluconeogenesis (activated by acetyl-CoA).",
    "Correct — liver PK is phosphorylated and inhibited when fasting."
  ]
},
{
  src: "doc", t: "Glycolysis",
  s: `Energy production in the mature erythrocyte results from which of the following conversions?`,
  c: ["Fatty acids to CO2 and H20", "Glucose to lactate", "Glucose to ribulose 5-phosphate", "Glycogen to lactate", "Ketone bodies to CO2"],
  a: 1,
  e: `Mature RBCs have no mitochondria, so they rely completely on anaerobic glycolysis: glucose → lactate, yielding a net 2 ATP. Lactate dehydrogenase regenerates the NAD⁺ needed to keep glycolysis going.`,
  w: [
    "Fatty acid oxidation needs mitochondria.",
    "Correct — anaerobic glycolysis.",
    "The pentose phosphate pathway makes NADPH (to protect against oxidants), not ATP.",
    "RBCs don't store glycogen.",
    "Ketone bodies are oxidized in mitochondria."
  ]
},
{
  src: "doc", t: "Glycolysis",
  s: `Glucose is phosphorylated by both hexokinase which has a km for glucose is lesser than glucokinase. The glucose concentration in the liver cell is approximately equal to the concentration in the blood (about 120mg/dl). When the glucose level is fall to 65mg/dl, the rate of phosphorylation in the liver`,
  c: ["Catalysed by glucokinase will increase but that of hexokinase will be little affected", "Catalysed by both the enzymes will not be affected significantly", "Catalysed by glucokinase will fall but hexokinase will be little affected", "Catalysed by hexokinase will fall but that of glucokinase will be little affected", "Catalysed by both the enzymes will substantially decrease"],
  a: 2,
  e: `Hexokinase has a very low Km (~0.1 mM), so it is saturated at any normal blood glucose and its rate barely changes. Glucokinase has a high Km (~10 mM, close to blood glucose), so its rate rises and falls in step with glucose. When glucose drops, glucokinase activity falls — the liver stops taking up glucose and leaves it for the brain.`,
  w: [
    "Glucokinase falls, not rises, with lower glucose.",
    "Glucokinase is very sensitive to glucose in this range.",
    "Correct — high-Km glucokinase falls, saturated hexokinase stays the same.",
    "Reversed.",
    "Hexokinase stays saturated."
  ]
},
{
  src: "doc", t: "Glycogen Metabolism",
  s: `A 30 excecutive had a party in the afternoon and he ate lots of sweet and icecream. He went back home for relaxing and fell a sleep. Which of the following would occur in the liver and muscle after 2 to 3 hours of his lunch?`,
  c: ["Decreased levels of cyclic AMP and increased liver glycogen synthesis", "Increased levels of cyclic AMP and increased liver glycogenolysis", "Decreased epinephrine levels and increased liver glycogenolysis", "Decreased AMP in muscle and decreased glycogenesis", "Decreased Ca++ in muscle and decreased glycogen synthesis"],
  a: 0,
  e: `Two to three hours after a sugary meal the person is in the fed (absorptive) state: insulin high, glucagon low. Low glucagon means low cAMP and PKA activity, and insulin activates PP1, so glycogen synthase is active and glycogen is being stored in liver and muscle.`,
  w: [
    "Correct — fed state: ↓cAMP, ↑glycogen synthesis.",
    "Increased cAMP and glycogenolysis describe fasting.",
    "Glycogenolysis isn't increased after a meal.",
    "At rest muscle AMP is low, but glycogenesis increases, not decreases.",
    "At rest muscle Ca²⁺ is low, but glycogen synthesis increases."
  ]
},
{
  src: "doc", t: "Glycogen Metabolism",
  s: `18 year old graduate student experiences easy fatigue and muscular weakness when he does short duration of exercise. He also develops muscle cramps if he continues his exercise. The boy is suffering from which of the following glycogen storage disorder?`,
  c: ["Cori's disease", "McArdle's disease", "Anderson,s disease", "Tauri,s disease", "Pompe's disease"],
  a: 1,
  e: `Exercise intolerance with early fatigue and painful cramps in a young adult is McArdle disease (GSD V, muscle glycogen phosphorylase deficiency). Muscle can't use its glycogen during short bursts of exercise; myoglobinuria may follow strenuous effort.`,
  w: [
    "Cori disease (debranching enzyme) causes hepatomegaly and hypoglycemia ± muscle weakness in childhood.",
    "Correct — muscle phosphorylase deficiency.",
    "Andersen disease (branching enzyme) causes cirrhosis in infancy.",
    "Tarui disease (muscle PFK-1 deficiency) also causes exercise cramps but adds hemolytic anemia; McArdle is the classic answer.",
    "Pompe disease causes cardiomegaly and hypotonia in infancy."
  ]
},
{
  src: "doc", t: "Glycogen Metabolism",
  s: `A 50 year old patient is suffering from diabetes mellitus. This condition affects the stimulation of which enzyme of the glycogenolysis regulation cascade:`,
  c: ["Adenylate cyclase", "cAMP dependent protein kinase", "Glycogen synthase a", "Active glycogen phosphorylase kinase a", "Protein phosphatase 1"],
  a: 4,
  e: `Insulin normally stimulates protein phosphatase 1, which dephosphorylates and switches off glycogen phosphorylase and phosphorylase kinase (and switches on glycogen synthase). In diabetes, insulin is missing or ineffective, so PP1 isn't stimulated — glycogenolysis continues unchecked and adds to hyperglycemia.`,
  w: [
    "Adenylate cyclase is stimulated by glucagon/epinephrine, not insulin.",
    "PKA is activated by cAMP, not insulin.",
    "Glycogen synthase a is a synthesis enzyme, not part of the glycogenolysis cascade.",
    "Phosphorylase kinase a is activated by PKA/Ca²⁺, not by insulin.",
    "Correct — the insulin-stimulated enzyme in the cascade."
  ]
},
{
  src: "doc", t: "Glycogen Metabolism",
  s: `Andersen's disease characterized by hepatoesplenomegaly, cirrhosis of the liver and hepatic failure. This is caused by the defect in the formation of which of the following?`,
  c: ["Alpha 1,4 -O-glycosidic linkages", "Alpha 1,6 -O-glycosidic linkages", "Alpha 1 ,Beta 2 -O-glycosidic linkages", "Beta1,4 -O-glycosidic linkages", "Beta1,6 -O-glycosidic linkages"],
  a: 1,
  e: `Andersen disease (GSD IV) is a deficiency of branching enzyme (amylo-α-1,4→α-1,6-transglucosidase), which forms α-1,6 branch points. The result is abnormal, poorly branched glycogen with long outer chains (amylopectin-like) that triggers an immune response and cirrhosis.`,
  w: [
    "α-1,4 bonds are made by glycogen synthase, which is normal.",
    "Correct — the branch bonds.",
    "α1→β2 is the sucrose bond.",
    "β-1,4 bonds are in cellulose.",
    "β-1,6 bonds aren't in glycogen."
  ]
},
{
  src: "doc", t: "Glycogen Metabolism",
  s: `Ca2+ is released during muscular exercise. It increases muscle glycogenolysis by binding to which of the following enzyme of glycogenolysis?`,
  c: ["Amylo- α(1,4 →α-1,6)-transglycosylase", "Glycogen phosphorylase a", "Glycogen phosphorylase kinase b", "Glycogen phosphorylase kinase a", "Protein kinase A"],
  a: 2,
  e: `During contraction, Ca²⁺ released from the SR binds the calmodulin (δ) subunit of phosphorylase kinase. This activates the unphosphorylated b form without needing hormones or cAMP, which then activates glycogen phosphorylase — matching glycogen breakdown to muscle contraction.`,
  w: [
    "This is the branching enzyme (glycogen synthesis).",
    "Ca²⁺ doesn't bind phosphorylase itself.",
    "Correct — Ca²⁺–calmodulin activates phosphorylase kinase b.",
    "The a form is already active (phosphorylated by PKA); Ca²⁺'s distinct role is activating the b form.",
    "PKA is activated by cAMP, not Ca²⁺."
  ]
},
{
  src: "doc", t: "Glycogen Metabolism",
  s: `A child presents with low blood glucose, high plasma uric level, hepatomegaly, and excess fat deposition in the cheeks. A liver biopsy reveals excess glycogen in hepatocytes. A deficiency of which of the following enzymes might explain this phenotype?`,
  c: ["α-1,6-glucosidase", "Glucose 6 phosphate dehydrogenase", "α-1,4 - α1,6 trans glucosidase", "Glucose 6-phosphatase", "α-1,4- α-1,4 glucan transferase"],
  a: 3,
  e: `Hypoglycemia, hyperuricemia, hepatomegaly and "doll-like" fat cheeks are classic von Gierke disease (GSD I), glucose-6-phosphatase deficiency. Trapped G6P drives lactate, uric acid and fat production.`,
  w: [
    "α-1,6-glucosidase is the debranching activity (Cori disease) — no hyperuricemia.",
    "G6PD deficiency causes hemolytic anemia, not glycogen storage.",
    "Branching enzyme deficiency is Andersen disease (cirrhosis).",
    "Correct — von Gierke disease.",
    "The 4:4 transferase is the other activity of the debranching enzyme (Cori)."
  ]
},
{
  src: "doc", t: "Glycogen Metabolism",
  s: `A 2-month-old child is brought to the pediatrician because of failure to gain weight, increasing weakness, insufficient strength to be breast fed, and lethargy. He is the second-born son of a healthy white couple; his mother's pregnancy and delivery were uneventful. The most significant finding of physical examination was generalized muscular flaccidity. Labs came back normal. Chest X-ray imaging revealed cardiomegaly and pathological examination showed extensive intracytoplasmic and lysosomal deposition of glycogen on myocardial fibers as well as in striated muscle fibers, kidney, and liver. The enzyme involved in this disorder is:`,
  c: ["Acid maltase", "Glycogen phosphorylase", "Glycogen synthase", "Glucosyl 4:4 glucatransferase", "Glucosyl α-4:6 transferase"],
  a: 0,
  e: `Infant with hypotonia, cardiomegaly, normal labs (normal glucose) and lysosomal glycogen = Pompe disease (GSD II), deficiency of lysosomal acid maltase (acid α-1,4-glucosidase).`,
  w: [
    "Correct — acid maltase / acid α-glucosidase.",
    "Phosphorylase deficiency (McArdle or Hers) doesn't store glycogen in lysosomes.",
    "Glycogen synthase deficiency (GSD 0) causes low glycogen, not storage.",
    "The 4:4 transferase is part of the debranching enzyme (Cori).",
    "The 4:6 transferase is the branching enzyme (Andersen)."
  ]
},
{
  src: "doc", t: "Glycogen Metabolism",
  s: `A liver biopsy sample is analyzed in a clinical biochemistry laboratory. A protein called glycogenin was detected in the sample. Which of the following is the biochemical function of the said protein?`,
  c: ["To promote de-branching of glycogen", "To activate specific enzyme in order to create new branch points", "To stimulate protein kinase A", "To initiate glycogen synthesis", "To act as protein cofactor for glycogen synthase"],
  a: 3,
  e: `Glycogen synthase can only extend an existing chain. Glycogenin is the primer: it attaches glucose from UDP-glucose to one of its own tyrosines and builds a short chain of about 8 residues, which glycogen synthase then lengthens. Glycogenin stays at the core of the glycogen particle.`,
  w: [
    "Debranching is done by the debranching enzyme.",
    "Branch points are made by the branching enzyme.",
    "PKA is activated by cAMP.",
    "Correct — the primer that starts synthesis.",
    "It provides a primer chain, not a cofactor."
  ]
},
{
  src: "doc", t: "GAGs & Carbohydrates",
  s: `Mucopolysaccharidoses are inherited storage diseases. They are caused by which of the following?`,
  c: ["An increased rate of synthesis of proteoglycans.", "The synthesis of polysaccharides with an altered structure.", "The synthesis of abnormally small amounts of protein cores.", "An insufficient amount of proteolytic enzymes.", "Defects in the degradation of proteoglycans"],
  a: 4,
  e: `Mucopolysaccharidoses are lysosomal storage diseases in which an enzyme that breaks down GAGs (e.g., α-L-iduronidase, iduronate sulfatase) is deficient. Partly degraded GAGs build up in lysosomes and appear in the urine, causing coarse facies, skeletal deformities and organomegaly. Synthesis is normal.`,
  w: [
    "Synthesis rate is normal.",
    "The structure made is normal; the problem is breakdown.",
    "Core proteins are made normally.",
    "The missing enzymes are glycosidases and sulfatases that degrade GAGs, not proteases.",
    "Correct — defective lysosomal degradation."
  ]
},
{
  src: "doc", t: "GAGs & Carbohydrates",
  s: `You have a case of mucopolysaccharidoses (accumulation of glycosaminoglycan). It is also an example for a lysosomal storage disorder. The prominent clinical features of this disorder are mental retardation and corneal clouding. Dermatan sulfate and keratan sulfate are accumulated as result of deficiency of enzyme iduronidase in lysosomes. This could possibly be an incidence of:`,
  c: ["Ehlers Danlos syndrome", "Rotor syndrome", "Hurler syndrome", "Sarcoidosis", "Paget's disease"],
  a: 2,
  e: `Hurler syndrome (MPS I) is autosomal recessive α-L-iduronidase deficiency, with intellectual disability, corneal clouding, coarse (gargoyle-like) facies, hepatosplenomegaly and skeletal deformities. (Textbooks list dermatan sulfate and heparan sulfate as the accumulating GAGs.)`,
  w: [
    "EDS is a collagen disorder, not a lysosomal storage disease.",
    "Rotor syndrome is a benign conjugated hyperbilirubinemia.",
    "Correct — α-L-iduronidase deficiency with corneal clouding.",
    "Sarcoidosis is granulomatous inflammation.",
    "Paget disease of bone is disordered remodeling."
  ]
},
{
  src: "doc", t: "GAGs & Carbohydrates",
  s: `A mother brings in a 2-year-old boy for examination. During the physical examination, you observe that the infant demonstrates limited joint movement, skeletal abnormalities and coarse facial features. A blood investigation reveals the presence of high levels of Lysosomal enzyme and lysosomal contents in plasma. Your diagnosis is`,
  c: ["Hurler's syndrome", "Hunter's disease", "Pompe's disease", "I-cell disease", "McArdle's disease"],
  a: 3,
  e: `In I-cell disease (mucolipidosis II), N-acetylglucosamine-1-phosphotransferase is defective, so lysosomal enzymes don't get the mannose-6-phosphate tag in the Golgi. Instead of going to lysosomes, they are secreted — so plasma lysosomal enzyme levels are high while lysosomes fill with undigested material (inclusion bodies). Features resemble Hurler: coarse facies, skeletal deformities, restricted joints.`,
  w: [
    "Hurler has similar features but plasma lysosomal enzymes are not elevated (one enzyme is low).",
    "Hunter is similar (X-linked, no corneal clouding) without high plasma enzymes.",
    "Pompe is lysosomal glycogen storage with cardiomegaly.",
    "Correct — enzymes are secreted instead of targeted to lysosomes.",
    "McArdle is a muscle glycogen disease of adults."
  ]
},
{
  src: "doc", t: "GAGs & Carbohydrates",
  s: `The human body contains numerous glycoproteins that exhibit diverse biological functions. In general glycoproteins are made up of proteins to which carbohydrates (as oligosaccharides) are linked by glycosidic bonds. Which of the following amino acids of proteins is required to form N-glycosidic type of bonds with oligosaccharides?`,
  c: ["Serine", "Threonine", "Asparagine", "Glutamate", "Valine"],
  a: 2,
  e: `N-linked oligosaccharides attach to the amide nitrogen of asparagine (in an Asn-X-Ser/Thr sequence), starting in the ER with a dolichol-linked precursor. O-linked sugars attach to the hydroxyl oxygen of serine or threonine (or hydroxylysine in collagen) in the Golgi.`,
  w: [
    "Serine forms O-glycosidic bonds.",
    "Threonine forms O-glycosidic bonds.",
    "Correct — N-glycosidic to the amide N of Asn.",
    "Glutamate isn't a glycosylation site.",
    "Valine has no reactive side-chain group."
  ]
},

// ---------- Written from the exam blueprint ----------
{
  src: "new", t: "Glycolysis",
  s: `A researcher measures the metabolism of one molecule of glucose in a mature red blood cell under normal conditions. What is the net yield of ATP and NADH from this molecule?`,
  c: ["2 ATP and 2 NADH", "2 ATP and 0 NADH", "4 ATP and 2 NADH", "36 ATP and 0 NADH", "0 ATP and 2 NADH"],
  a: 1,
  e: `Glycolysis uses 2 ATP (hexokinase, PFK-1) and makes 4 ATP (2 at phosphoglycerate kinase, 2 at pyruvate kinase) — net 2 ATP. GAPDH makes 2 NADH, but in the RBC lactate dehydrogenase uses them up converting pyruvate to lactate, so the net NADH is 0. That regenerated NAD⁺ is what lets glycolysis continue without mitochondria.`,
  w: [
    "2 NADH is the yield of aerobic glycolysis in a cell with mitochondria, not the net in an RBC.",
    "Correct — 2 ATP, NADH reoxidized by LDH.",
    "4 ATP is the gross yield, before subtracting the 2 ATP invested.",
    "Complete oxidation needs mitochondria, which RBCs lack.",
    "Glycolysis always produces net ATP."
  ]
},
{
  src: "new", t: "Glycolysis",
  s: `Which pair of glycolytic enzymes generates ATP by substrate-level phosphorylation?`,
  c: ["Hexokinase and phosphofructokinase-1", "Phosphoglycerate kinase and pyruvate kinase", "Glyceraldehyde-3-phosphate dehydrogenase and enolase", "Aldolase and triose phosphate isomerase", "Phosphoglycerate mutase and lactate dehydrogenase"],
  a: 1,
  e: `Substrate-level phosphorylation transfers a phosphate directly from a high-energy substrate to ADP. In glycolysis this happens at phosphoglycerate kinase (1,3-BPG → 3-PG) and pyruvate kinase (PEP → pyruvate).`,
  w: [
    "These consume ATP (the two priming steps).",
    "Correct.",
    "GAPDH makes NADH and the high-energy 1,3-BPG; enolase makes PEP — neither makes ATP.",
    "These split and interconvert trioses; no ATP.",
    "Neither makes ATP."
  ]
},
{
  src: "new", t: "Glycolysis",
  s: `In a well-fed liver cell, the rate of glycolysis slows when the TCA cycle is saturated with intermediates and the cell's energy charge is high. Which allosteric effector signals this state by inhibiting phosphofructokinase-1?`,
  c: ["AMP", "Fructose 2,6-bisphosphate", "Citrate", "Fructose 1,6-bisphosphate", "Glucose-6-phosphate"],
  a: 2,
  e: `PFK-1 is the rate-limiting, committed step of glycolysis. It is inhibited by ATP and citrate (signs of plentiful energy and full TCA cycle) and activated by AMP and fructose-2,6-bisphosphate, its most potent activator (made by PFK-2 when insulin is high).`,
  w: [
    "AMP activates PFK-1 (low energy).",
    "F2,6BP is the strongest activator, not an inhibitor.",
    "Correct — citrate signals TCA saturation.",
    "F-1,6-BP is PFK-1's product and feed-forward activator of pyruvate kinase.",
    "G6P inhibits hexokinase, not PFK-1."
  ]
},
{
  src: "new", t: "Glycolysis",
  s: `A 4-year-old boy has chronic hemolytic anemia with jaundice and splenomegaly. Peripheral smear shows echinocytes (burr cells) without Heinz bodies. RBC 2,3-bisphosphoglycerate is elevated and RBC ATP is low. Deficiency of which enzyme is most likely?`,
  c: ["Glucose-6-phosphate dehydrogenase", "Pyruvate kinase", "Hexokinase", "Spectrin", "Lactate dehydrogenase"],
  a: 1,
  e: `Pyruvate kinase deficiency is the most common glycolytic enzyme defect causing hemolytic anemia. RBCs depend only on glycolysis, so low PK means low ATP; without ATP, Na⁺/K⁺ pumps fail and cells become rigid and are destroyed in the spleen. Intermediates upstream of PK back up, so 2,3-BPG rises (shifting the O₂ curve right, which partly offsets the anemia).`,
  w: [
    "G6PD deficiency causes episodic hemolysis with Heinz and bite cells after oxidant stress.",
    "Correct — low ATP, high 2,3-BPG.",
    "Hexokinase deficiency would lower, not raise, 2,3-BPG (it's upstream).",
    "Spectrin defects cause hereditary spherocytosis (spherocytes, normal glycolytic enzymes).",
    "LDH deficiency is rare and mainly causes exercise intolerance."
  ]
},
{
  src: "new", t: "Glycolysis",
  s: `Blood samples for glucose measurement are collected in gray-top tubes containing sodium fluoride so that RBCs don't keep consuming glucose in the tube. Which glycolytic enzyme does fluoride inhibit?`,
  c: ["Hexokinase", "Glyceraldehyde-3-phosphate dehydrogenase", "Enolase", "Pyruvate kinase", "Phosphoglycerate kinase"],
  a: 2,
  e: `Fluoride inhibits enolase (2-phosphoglycerate → phosphoenolpyruvate) by forming a fluorophosphate complex with the enzyme's Mg²⁺. This stops glycolysis in the tube so the measured glucose reflects the patient's level.`,
  w: [
    "Hexokinase is inhibited by its product G6P, not fluoride.",
    "GAPDH is inhibited by iodoacetamide and arsenate effects.",
    "Correct.",
    "Pyruvate kinase is not the fluoride target.",
    "Phosphoglycerate kinase is bypassed by arsenate, not inhibited by fluoride."
  ]
},
{
  src: "new", t: "Glycolysis",
  s: `A patient with chronic arsenic exposure is studied. Arsenate substitutes for inorganic phosphate in glycolysis. What is the main consequence for glucose metabolism?`,
  c: ["Glycolysis stops completely at hexokinase", "Glycolysis continues but there is no net ATP production", "Lactate production stops while ATP production increases", "NADH production by GAPDH is blocked", "Pyruvate kinase is irreversibly inhibited"],
  a: 1,
  e: `GAPDH uses arsenate in place of phosphate, forming 1-arseno-3-phosphoglycerate, which spontaneously breaks down to 3-phosphoglycerate. This bypasses phosphoglycerate kinase, so the 2 ATP normally made there are lost. Glycolysis (and NADH production) carries on, but the net ATP yield falls to zero.`,
  w: [
    "Hexokinase is unaffected.",
    "Correct — the phosphoglycerate kinase ATP is bypassed.",
    "Lactate formation continues and ATP yield falls.",
    "GAPDH still makes NADH; it just uses arsenate.",
    "PK still works on PEP."
  ]
},
{
  src: "new", t: "Glycolysis",
  s: `Iodoacetamide is added to a red cell lysate and glycolysis stops. Intermediates before the triose stage accumulate. Iodoacetamide inhibits which enzyme?`,
  c: ["Aldolase", "Glyceraldehyde-3-phosphate dehydrogenase", "Enolase", "Pyruvate kinase", "Lactate dehydrogenase"],
  a: 1,
  e: `Iodoacetamide alkylates sulfhydryl (–SH) groups. GAPDH has an essential cysteine in its active site, so iodoacetamide inactivates it; G3P, DHAP and the hexose phosphates before it back up.`,
  w: [
    "Aldolase is upstream and doesn't depend on an active-site cysteine.",
    "Correct — active-site cysteine.",
    "Enolase is the fluoride target.",
    "PK is downstream.",
    "LDH isn't the classic iodoacetamide target."
  ]
},
{
  src: "new", t: "Glycolysis",
  s: `During a 200-meter sprint, the quadriceps rely heavily on anaerobic glycolysis. What is the main purpose of the lactate dehydrogenase reaction under these conditions?`,
  c: ["To produce additional ATP", "To regenerate NAD⁺ so glyceraldehyde-3-phosphate dehydrogenase can continue", "To convert lactate into glucose within the muscle", "To produce NADPH for fatty acid synthesis", "To transport pyruvate into mitochondria"],
  a: 1,
  e: `When O₂ is limited (or in RBCs), the NADH made by GAPDH can't be reoxidized by mitochondria. LDH reduces pyruvate to lactate using that NADH, regenerating NAD⁺ so glycolysis keeps making ATP. Lactate goes to the liver (Cori cycle). Clinically, LDH leaks from damaged cells, so serum LDH rises in hemolysis, MI, liver damage and some tumors.`,
  w: [
    "LDH itself makes no ATP.",
    "Correct — NAD⁺ regeneration.",
    "Muscle lacks gluconeogenesis; lactate is converted to glucose in the liver.",
    "NADPH comes from the pentose phosphate pathway.",
    "Pyruvate enters mitochondria via the pyruvate carrier, not LDH."
  ]
},
{
  src: "new", t: "Glycolysis",
  s: `A 19-year-old has mild fasting hyperglycemia since childhood with a strong family history in three generations. Testing shows a heterozygous mutation in the enzyme that acts as the glucose sensor of pancreatic β-cells. Which statement about this enzyme is correct?`,
  c: ["It has a low Km for glucose and is inhibited by glucose-6-phosphate", "It has a high Km for glucose and is not inhibited by glucose-6-phosphate", "It is found mainly in skeletal muscle and the brain", "It is activated by glucagon in the fasting state", "It phosphorylates fructose but not glucose"],
  a: 1,
  e: `Glucokinase (hexokinase IV) in liver and β-cells has a high Km (~10 mM) and high Vmax and is not inhibited by G6P (it's regulated by glucokinase regulatory protein in the liver). Its activity rises with blood glucose, so it lets β-cells sense glucose. Heterozygous loss raises the glucose set point (MODY2).`,
  w: [
    "Describes hexokinase I–III.",
    "Correct — glucokinase.",
    "Hexokinase is the form in muscle and brain.",
    "Glucokinase is induced by insulin; it is low in fasting.",
    "It phosphorylates glucose."
  ]
},
{
  src: "new", t: "Glycolysis",
  s: `Which glucose transporter is correctly matched with its main location and function?`,
  c: ["GLUT-1 — skeletal muscle; insulin-dependent uptake", "GLUT-2 — hepatocytes and pancreatic β-cells; high-capacity, bidirectional transport", "GLUT-3 — intestine; fructose absorption", "GLUT-4 — RBCs and blood–brain barrier; basal uptake", "GLUT-5 — neurons; high-affinity glucose uptake"],
  a: 1,
  e: `GLUT-1: RBCs, blood–brain barrier (basal, insulin-independent). GLUT-2: liver, β-cells, kidney, basolateral intestine (high Km, bidirectional — glucose sensing and release). GLUT-3: neurons, placenta (low Km, high affinity). GLUT-4: skeletal muscle, heart, adipose (insulin-responsive). GLUT-5: fructose transporter in intestine and sperm.`,
  w: [
    "GLUT-1 is basal and insulin-independent (RBCs, BBB).",
    "Correct.",
    "GLUT-3 is the neuronal transporter; GLUT-5 handles fructose.",
    "GLUT-4 is the insulin-dependent muscle/adipose transporter.",
    "GLUT-5 transports fructose."
  ]
},
{
  src: "new", t: "Glycolysis",
  s: `A 55-year-old man with type 2 diabetes starts a daily walking program and his post-meal glucose improves even before his insulin resistance changes. Which mechanism best explains this?`,
  c: ["Exercise increases glucagon release, which drives glucose into muscle", "Muscle contraction moves GLUT-4 to the cell membrane independently of insulin", "Exercise increases GLUT-2 in skeletal muscle", "Exercise inhibits hexokinase in muscle", "Exercise increases hepatic glucose-6-phosphatase activity"],
  a: 1,
  e: `Muscle contraction activates AMP-activated protein kinase (and Ca²⁺ signaling), which moves GLUT-4 vesicles to the sarcolemma through a pathway separate from insulin signaling. Muscle can take up glucose even when insulin action is impaired — one reason exercise is key in type 2 diabetes management.`,
  w: [
    "Glucagon doesn't move glucose into muscle (muscle lacks glucagon receptors).",
    "Correct — insulin-independent GLUT-4 translocation.",
    "Muscle doesn't use GLUT-2.",
    "Hexokinase activity rises as glucose is used.",
    "That would release more glucose into blood."
  ]
},
{
  src: "new", t: "Glycogen Metabolism",
  s: `A muscle biopsy and a liver biopsy are compared after a 12-hour fast. Which statement correctly explains why only the liver releases free glucose from its glycogen into the blood?`,
  c: ["Muscle lacks glycogen phosphorylase", "Muscle lacks glucose-6-phosphatase", "Muscle lacks phosphoglucomutase", "Liver glycogen is stored in lysosomes", "Muscle glycogen has no α-1,6 branches"],
  a: 1,
  e: `Both tissues break glycogen to glucose-1-phosphate (phosphorylase) and then glucose-6-phosphate (phosphoglucomutase) in the cytosol. Only the liver (and kidney) has glucose-6-phosphatase, in the ER membrane, to remove the phosphate so free glucose can leave the cell. Muscle keeps G6P for its own glycolysis.`,
  w: [
    "Muscle has phosphorylase (missing in McArdle disease).",
    "Correct.",
    "Muscle has phosphoglucomutase.",
    "Glycogen is a cytosolic store in both; only a small amount is broken down in lysosomes.",
    "Muscle glycogen is branched too."
  ]
},
{
  src: "new", t: "Glycogen Metabolism",
  s: `In the liver of a fasting patient, glucagon raises cAMP and activates protein kinase A. What is the phosphorylation state and activity of the two key glycogen enzymes?`,
  c: ["Glycogen synthase phosphorylated and active; phosphorylase phosphorylated and inactive", "Glycogen synthase phosphorylated and inactive; phosphorylase phosphorylated and active", "Glycogen synthase dephosphorylated and active; phosphorylase dephosphorylated and inactive", "Both enzymes dephosphorylated and active", "Both enzymes phosphorylated and inactive"],
  a: 1,
  e: `Phosphorylation has opposite effects on the two enzymes. PKA (directly and via phosphorylase kinase) phosphorylates glycogen synthase → inactive (synthase b) and glycogen phosphorylase → active (phosphorylase a). So glucagon turns off storage and turns on breakdown. Insulin, via PP1, reverses both.`,
  w: [
    "Phosphorylated synthase is inactive.",
    "Correct.",
    "That's the fed (insulin) state.",
    "Phosphorylase is active only when phosphorylated (a form).",
    "Phosphorylated phosphorylase is active."
  ]
},
{
  src: "new", t: "Glycogen Metabolism",
  s: `A 1-year-old has hepatomegaly, mild fasting hypoglycemia, and elevated CK with muscle weakness. Blood lactate and uric acid are normal. Liver glycogen has abnormally short outer branches. Which enzyme is deficient?`,
  c: ["Glucose-6-phosphatase", "Debranching enzyme", "Branching enzyme", "Muscle glycogen phosphorylase", "Lysosomal acid α-glucosidase"],
  a: 1,
  e: `Cori disease (GSD III): debranching enzyme deficiency. Phosphorylase shortens the outer chains until it stops near branch points, leaving limit dextrin. It affects liver and often muscle. Because gluconeogenesis still works, hypoglycemia is milder and lactate and uric acid are normal — the key difference from von Gierke.`,
  w: [
    "Von Gierke has lactic acidosis and hyperuricemia.",
    "Correct — limit dextrin, liver + muscle.",
    "Branching deficiency gives long unbranched chains and cirrhosis.",
    "McArdle doesn't cause hepatomegaly or hypoglycemia.",
    "Pompe causes lysosomal glycogen and cardiomegaly."
  ]
},
{
  src: "new", t: "Glycogen Metabolism",
  s: `During a sudden sprint, glycogen breakdown in skeletal muscle increases sharply. Which hormone does NOT directly contribute to stimulating muscle glycogenolysis?`,
  c: ["Epinephrine", "Glucagon", "Both hormones contribute equally", "Neither — only insulin acts on muscle glycogen", "Norepinephrine"],
  a: 1,
  e: `Skeletal muscle has no glucagon receptors, so glucagon acts on liver glycogen only. In muscle, glycogenolysis is driven by epinephrine (β-adrenergic → cAMP → PKA), by Ca²⁺ released during contraction (activates phosphorylase kinase), and by AMP (activates phosphorylase).`,
  w: [
    "Epinephrine acts on muscle via β-adrenergic receptors.",
    "Correct — muscle lacks glucagon receptors.",
    "Only epinephrine acts on muscle.",
    "Insulin promotes storage; adrenergic and Ca²⁺/AMP signals drive breakdown.",
    "Circulating catecholamines act via adrenergic receptors."
  ]
},
{
  src: "new", t: "GAGs & Carbohydrates",
  s: `A 6-year-old boy has coarse facial features, hepatosplenomegaly, joint stiffness and aggressive behavior. His eyes are clear on slit-lamp exam. His maternal uncle had a similar condition. Urine shows excess dermatan sulfate and heparan sulfate. Which enzyme is deficient?`,
  c: ["α-L-iduronidase", "Iduronate sulfatase", "Acid α-glucosidase", "β-glucocerebrosidase", "Hexosaminidase A"],
  a: 1,
  e: `Hunter syndrome (MPS II) is X-linked recessive (affected boy, maternal uncle) iduronate-2-sulfatase deficiency. It resembles Hurler syndrome but is milder, has no corneal clouding, and often shows aggressive behavior.`,
  w: [
    "α-L-iduronidase deficiency is Hurler (autosomal recessive, corneal clouding).",
    "Correct — Hunter syndrome.",
    "Pompe disease (glycogen).",
    "Gaucher disease (glucocerebroside).",
    "Tay–Sachs (GM2 ganglioside)."
  ]
},
{
  src: "new", t: "GAGs & Carbohydrates",
  s: `Which glycosaminoglycan is unique in being unsulfated and not covalently attached to a core protein, yet serves as the backbone of cartilage proteoglycan aggregates and lubricates synovial joints?`,
  c: ["Heparin", "Keratan sulfate", "Hyaluronic acid", "Chondroitin sulfate", "Dermatan sulfate"],
  a: 2,
  e: `GAGs are long unbranched chains of repeating disaccharides (an amino sugar plus a uronic acid, except keratan sulfate, which has galactose). Their negative charges attract water, making gels that resist compression. Hyaluronic acid is the exception: no sulfate and no core protein. Aggrecan monomers attach to it via link proteins, and it lubricates joints and fills the vitreous.`,
  w: [
    "Heparin is highly sulfated.",
    "Keratan sulfate is sulfated, lacks uronic acid, and is bound to a core protein.",
    "Correct.",
    "Chondroitin sulfate is sulfated and bound to the aggrecan core.",
    "Dermatan sulfate is sulfated."
  ]
},
{
  src: "new", t: "Collagen & Elastin",
  s: `Which step in the synthesis of mature collagen fibrils takes place outside the fibroblast?`,
  c: ["Hydroxylation of proline and lysine residues", "Glycosylation of hydroxylysine residues", "Formation of the procollagen triple helix", "Cleavage of N- and C-terminal propeptides by procollagen peptidases", "Formation of interchain disulfide bonds in the propeptides"],
  a: 3,
  e: `Inside the cell (RER/Golgi): pre-pro-α chains are made, proline and lysine are hydroxylated (vitamin C), hydroxylysine is glycosylated, propeptide disulfide bonds form, and three chains wind into the procollagen triple helix, which is secreted. Outside the cell: procollagen peptidases clip off the propeptides to make tropocollagen, which self-assembles into fibrils, and lysyl oxidase (copper) forms covalent cross-links.`,
  w: [
    "Hydroxylation occurs in the RER.",
    "Glycosylation occurs in the RER/Golgi.",
    "The triple helix forms in the RER.",
    "Correct — extracellular; deficient in some Ehlers–Danlos types (dermatosparaxis).",
    "Disulfide bonds form inside the cell."
  ]
},
{
  src: "new", t: "Collagen & Elastin",
  s: `A child with recurrent fractures and blue sclerae has a COL1A1 mutation that replaces a glycine in the Gly-X-Y repeat with a bulkier cysteine. Why is glycine required at every third position of the collagen chain?`,
  c: ["Its side chain forms hydrogen bonds that hold the helix together", "It is the only residue small enough to fit in the crowded center of the triple helix", "It is the site of hydroxylation by prolyl hydroxylase", "It forms cross-links with lysine in adjacent molecules", "It carries the carbohydrate attachments"],
  a: 1,
  e: `In the triple helix every third residue faces the crowded center where the three chains meet. Glycine, with only a hydrogen for a side chain, is the only amino acid that fits. Proline and hydroxyproline often fill the X and Y positions, adding rigidity; hydroxyproline forms stabilizing hydrogen bonds. Substituting glycine disrupts the helix (a dominant-negative effect), causing severe osteogenesis imperfecta.`,
  w: [
    "Stabilizing H-bonds come mainly from hydroxyproline; glycine has no side chain.",
    "Correct.",
    "Prolyl hydroxylase acts on proline in the Y position.",
    "Lysine/hydroxylysine forms cross-links.",
    "Sugars attach to hydroxylysine."
  ]
},
{
  src: "new", t: "Collagen & Elastin",
  s: `An infant boy has sparse, brittle, kinky hair, hypotonia, seizures and developmental regression. Serum copper and ceruloplasmin are low. Reduced activity of which enzyme explains his connective tissue fragility?`,
  c: ["Prolyl hydroxylase", "Lysyl hydroxylase", "Lysyl oxidase", "Procollagen N-peptidase", "Elastase"],
  a: 2,
  e: `Menkes disease is an X-linked defect in the ATP7A copper transporter, causing systemic copper deficiency. Lysyl oxidase needs copper to form cross-links in collagen and elastin, so connective tissue is weak (vessel tortuosity, bone changes). Copper-dependent enzymes in hair and brain also fail.`,
  w: [
    "Prolyl hydroxylase needs vitamin C and Fe²⁺, not copper.",
    "Lysyl hydroxylase is iron/vitamin C dependent.",
    "Correct — copper-dependent cross-linking.",
    "The peptidase isn't copper dependent.",
    "Elastase is a protease, not a synthesis enzyme."
  ]
},
{
  src: "new", t: "Collagen & Elastin",
  s: `Which feature distinguishes elastin from collagen?`,
  c: ["Elastin has a regular Gly-X-Y repeat and forms a triple helix", "Elastin is rich in hydroxylysine and is heavily glycosylated", "Elastin has little hydroxyproline, no hydroxylysine, and is cross-linked by desmosine", "Elastin is cross-linked by disulfide bonds made by lysyl hydroxylase", "Elastin is mainly found in bone and tendon"],
  a: 2,
  e: `Elastin (from tropoelastin) is rich in small nonpolar residues (glycine, alanine, valine, proline). It has only a little hydroxyproline, no hydroxylysine, no regular Gly-X-Y repeat, and no triple helix — it exists as a random coil. Lysyl oxidase forms desmosine (and isodesmosine) cross-links from four lysines, which let elastin stretch and snap back. It is laid down on a fibrillin microfibril scaffold in lungs, arteries, skin and ligaments.`,
  w: [
    "These are collagen features.",
    "Hydroxylysine and glycosylation are collagen features.",
    "Correct.",
    "Desmosine cross-links are made by lysyl oxidase, not disulfides.",
    "Elastin is in lungs, large arteries, skin and elastic ligaments; bone and tendon are mostly type I collagen."
  ]
},
{
  src: "new", t: "Collagen & Elastin",
  s: `A 45-year-old heavy smoker with normal α1-antitrypsin genes develops centriacinar emphysema. How does cigarette smoke reduce the protective activity of α1-antitrypsin?`,
  c: ["It reduces hepatic transcription of the α1-antitrypsin gene", "It oxidizes a methionine residue in the active site of α1-antitrypsin", "It activates α1-antitrypsin, increasing elastase inhibition", "It causes α1-antitrypsin to polymerize in hepatocytes", "It converts elastin to collagen"],
  a: 1,
  e: `α1-antitrypsin traps elastase using a methionine (Met358) in its reactive loop. Oxidants in smoke (and from activated neutrophils) oxidize this methionine to methionine sulfoxide, so it can no longer inhibit elastase. Smoking also recruits more neutrophils that release elastase. Unopposed elastase destroys alveolar elastin → emphysema. In inherited deficiency (PiZZ), smoking makes the disease much earlier and worse.`,
  w: [
    "Gene expression isn't the main effect.",
    "Correct — Met358 oxidation.",
    "It inactivates, not activates.",
    "Polymerization in the liver is the PiZZ mutation, not smoking.",
    "Elastin is destroyed, not converted."
  ]
},
{
  src: "new", t: "Collagen & Elastin",
  s: `A tall 22-year-old with long arms and fingers, lens subluxation and aortic root dilation is diagnosed with Marfan syndrome. The mutated protein normally serves which role in elastic fiber formation?`,
  c: ["It cross-links tropoelastin via desmosine", "It forms microfibrils that act as a scaffold for elastin deposition", "It inhibits neutrophil elastase", "It hydroxylates proline residues in elastin", "It is the core protein of aggrecan"],
  a: 1,
  e: `Marfan syndrome is an autosomal dominant mutation in FBN1 (fibrillin-1). Fibrillin forms microfibrils that act as a scaffold for elastin deposition, and it regulates TGF-β signaling. Defects weaken elastic tissue in the aorta (dilation, dissection), ciliary zonules (lens dislocation) and the skeleton.`,
  w: [
    "Desmosine cross-links are made by lysyl oxidase.",
    "Correct — fibrillin microfibrils.",
    "That's α1-antitrypsin.",
    "That's prolyl hydroxylase.",
    "Aggrecan is a cartilage proteoglycan."
  ]
}
];
