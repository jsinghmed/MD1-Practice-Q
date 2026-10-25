// FBS Physiology — FBS Review 1 (src r1), Class Review Qs (src cls), RMP & AP Questions (src rmp)
window.FBS_PHYS_TOPICS = ["Homeostasis & Control Systems", "Membrane Transport", "Body Fluids & Edema", "Resting Membrane Potential", "Action Potentials & Conduction"];
window.FBS_PHYS_QUESTIONS = [
{
"t": "Homeostasis & Control Systems",
"s": "A 23-year-old man is brought to the emergency department after sustaining a large blood loss from a motorcycle accident. His blood pressure is 82/48 mm Hg, heart rate is 128/min, and skin is cool and clammy. Baroreceptors in the carotid sinus and aortic arch detect the decrease in arterial pressure and increase signaling to cardiovascular control centers, resulting in increased sympathetic activity. Which characteristic of this response best describes the principle of homeostasis?",
"html": true,
"c": [
"The response amplifies the initial disturbance",
"The response opposes the initial disturbance",
"The response eliminates all physiologic variation",
"The response establishes a permanently altered set point",
"The response functions independently of sensory information"
],
"a": 1,
"se": "• The correct answer is B. The response opposes the initial disturbance. Homeostasis refers to the active maintenance of relatively stable conditions within the body's internal environment despite continuous environmental and metabolic perturbations. The physiological variables are maintained within a range rather than at an absolutely fixed value.\n• In this patient, blood loss decreases circulating volume and arterial pressure. Baroreceptor-mediated sympathetic activation increases heart rate, myocardial contractility, and vascular tone, which act in the direction of restoring arterial pressure toward its normal range. This is a classic negative-feedback response because the response opposes the initiating disturbance.\n• Negative feedback maintains homeostasis by producing a response that counteracts the initial deviation.",
"w": [
"Amplifying the disturbance is positive feedback — the opposite of homeostasis.",
"Correct — negative feedback opposes the deviation and pushes pressure back toward normal.",
"Homeostasis keeps variables within a range; it never removes all variation.",
"The set point isn't permanently changed; the reflex restores pressure toward the existing set point.",
"The reflex depends on sensory input from the baroreceptors."
],
"fig": [
"fp-p004",
"fp-p005"
],
"src": "r1"
},
{
"t": "Homeostasis & Control Systems",
"s": "A 72-year-old woman with chronic kidney disease develops progressive hypertension. Despite elevated arterial pressure, renal sodium and water excretion remain impaired. Over several years, persistent hypertension contributes to additional renal vascular injury, further reducing renal function. Which concept best describes the relationship between the original disturbance and the subsequent deterioration?",
"html": true,
"c": [
"Physiologic negative feedback",
"Feed-forward motor control",
"Adaptive learning",
"Pathologic positive feedback",
"Steady-state regulation"
],
"a": 3,
"se": "• The correct answer is D. Pathologic positive feedback. Positive feedback occurs when the response to an initial disturbance amplifies rather than opposes the disturbance. The textbook describes uncontrolled positive feedback as a potentially destructive \"vicious cycle.\"\n• In this case, renal dysfunction contributes to impaired regulation of sodium and water balance, promoting hypertension. Persistent hypertension then causes additional renal vascular injury, worsening renal function and further impairing blood pressure regulation. Thus, each stage reinforces the preceding disturbance.\n• Positive feedback is uncommon as a primary homeostatic mechanism because uncontrolled amplification can produce instability, organ damage, and potentially death.",
"w": [
"Negative feedback would oppose the disturbance; here each step worsens it.",
"Feed-forward control anticipates a disturbance (e.g., rapid movement), not a worsening cycle.",
"Adaptive learning refines future responses (cerebellum); it isn't a vicious cycle.",
"Correct — hypertension damages the kidney, which worsens hypertension: a self-reinforcing cycle.",
"Steady state implies stability, but this condition progressively deteriorates."
],
"fig": [
"fp-p008",
"fp-p009"
],
"src": "r1"
},
{
"t": "Homeostasis & Control Systems",
"s": "A 45-year-old man receives a large-volume intravenous fluid infusion during surgery. His mean arterial pressure increases from 100 mm Hg to 175 mm Hg when no regulatory response is present. With an intact baroreceptor reflex, his pressure increases only to 125 mm Hg. Using the control-system equation presented in the physiology lecture, what is the gain of the baroreceptor feedback system?",
"html": true,
"c": [
"+0.33",
"+2.00",
"−2.00",
"−25.00",
"−50.00"
],
"a": 2,
"se": "• The correct answer is C. −2.00.\n• The textbook defines control-system gain as: Gain = Correction / Error\n• The initial pressure is 100 mm Hg. Without feedback, the pressure would increase to 175 mm Hg, representing an uncorrected deviation of +75 mm Hg. With the baroreceptor response, pressure reaches 125 mm Hg. Therefore, the actual persistent error is:\n• 125 − 100 = +25 mm Hg\n• The correction produced by the feedback system is:\n• 125 − 175 = −50 mm Hg\n• Therefore:\n• Gain = −50 / +25 = −2\n• The negative sign reflects the fact that the feedback response opposes the original disturbance.\n• A greater magnitude of negative gain indicates more effective correction of a disturbance. The negative sign reflects opposition to the initial error.",
"w": [
"Wrong sign and value — a positive gain would mean the response adds to the error.",
"Right magnitude but wrong sign; negative feedback has a negative gain.",
"Correct — correction (−50) ÷ remaining error (+25) = −2.",
"−25 confuses the remaining error (25 mm Hg) with the gain.",
"−50 is the correction alone, not correction ÷ error."
],
"fig": [
"fp-p012",
"fp-p013"
],
"src": "r1"
},
{
"t": "Homeostasis & Control Systems",
"s": "A 19-year-old man develops severe hyperventilation after being exposed to an environmental stimulus that markedly increases his arterial carbon dioxide concentration. Increased CO₂ stimulates respiratory centers, causing deeper and faster breathing. Which type of feedback mechanism is illustrated?",
"html": true,
"c": [
"Positive feedback because ventilation increases",
"Negative feedback because ventilation reduces the initiating disturbance",
"Feed-forward control because ventilation precedes the CO₂ increase",
"Adaptive control because the response is learned",
"Open-loop control because no sensor is involved"
],
"a": 1,
"se": "• The correct answer is B. Negative feedback because ventilation reduces the initiating disturbance. Increased extracellular CO₂ stimulates the respiratory centers, increasing the rate and depth of ventilation. Increased alveolar ventilation subsequently increases CO₂ elimination, lowering the extracellular CO₂ concentration toward its normal range.\n• This is a classic negative-feedback loop because the physiological response opposes the initial disturbance.\n• The textbook specifically uses CO₂ regulation as an example: increased extracellular CO₂ stimulates the respiratory center, which produces rapid, deep breathing and increased CO₂ expiration.\n• Negative feedback does not mean that the response itself decreases; it means that the response counteracts the original disturbance.",
"w": [
"Ventilation rises, but it lowers CO₂ — the response opposes the stimulus, so it isn't positive feedback.",
"Correct — increased ventilation removes CO₂, opposing the original rise.",
"The response follows the CO₂ rise; feed-forward acts before a disturbance occurs.",
"This is a built-in reflex, not a learned response.",
"Chemoreceptors sense CO₂, so this is a closed loop with a sensor."
],
"fig": [
"fp-p016"
],
"src": "r1"
},
{
"t": "Homeostasis & Control Systems",
"s": "A 32-year-old woman experiences a sudden increase in core body temperature after exercising in a hot environment. She begins sweating, and evaporation of sweat increases heat loss. Which component of this response functions as the primary effector that directly produces the corrective response?",
"html": true,
"c": [
"Hypothalamic temperature sensor",
"Cerebral cortex",
"Sweat glands",
"Cutaneous thermoreceptors",
"Peripheral sensory nerves"
],
"a": 2,
"se": "• The correct answer is C. Sweat glands. A homeostatic control system consists of a regulated variable, sensors that detect deviations, a control center that interprets the information, and effectors that produce the corrective response.\n• In thermoregulation, increased body temperature is detected by temperature-sensitive mechanisms, and central regulatory centers coordinate responses designed to dissipate heat. Sweat glands function as effectors by producing sweat, whose evaporation removes heat from the body.\n• The important distinction is between a sensor, which detects the disturbance, and an effector, which executes the corrective response.\n• High-yield point: In a homeostatic loop, the effector produces the physiological response that changes the regulated variable.",
"w": [
"The hypothalamus integrates temperature information (sensor/control center), but doesn't produce the corrective response itself.",
"The cerebral cortex isn't the effector in thermoregulation.",
"Correct — sweat glands are the effectors that carry out heat loss.",
"Thermoreceptors are sensors; they detect temperature.",
"Sensory nerves carry information to the control center (afferent limb)."
],
"fig": [
"fp-p009"
],
"src": "r1"
},
{
"t": "Membrane Transport",
"s": "A 40-year-old man develops acute renal failure after prolonged hypotension. Laboratory testing shows progressive accumulation of potassium in the extracellular fluid. Despite the elevated extracellular potassium concentration, intracellular potassium remains substantially higher than extracellular potassium. Which mechanism normally maintains this concentration gradient?",
"html": true,
"c": [
"Simple diffusion through the lipid bilayer",
"Facilitated diffusion through potassium channels",
"ATP-dependent active transport",
"Osmosis through aquaporins",
"Vesicular transport through the plasma membrane"
],
"a": 2,
"se": "• The correct answer is C. ATP-dependent active transport. The textbook emphasizes that substantial concentration differences exist between the extracellular and intracellular compartments. Sodium, chloride, calcium, and bicarbonate are present at higher concentrations in the ECF, whereas potassium, magnesium, and phosphate are concentrated intracellularly.\n• These concentration gradients cannot be maintained by passive transport because passive transport moves substances down their electrochemical gradients. The Na⁺/K⁺-ATPase, an ATP-dependent active transport mechanism, uses metabolic energy to maintain high intracellular potassium and high extracellular sodium.\n• ATP-dependent active transport is essential for maintaining the distinct ECF and ICF ionic compositions required for normal cellular function.",
"w": [
"K⁺ is charged and can't cross the lipid bilayer by simple diffusion.",
"K⁺ channels let K⁺ move down its gradient — they dissipate, not maintain, the gradient.",
"Correct — the Na⁺/K⁺-ATPase uses ATP to keep K⁺ high inside the cell.",
"Aquaporins move water, not K⁺.",
"Vesicular transport moves large molecules, not ion gradients."
],
"fig": [
"fp-p022"
],
"src": "r1"
},
{
"t": "Membrane Transport",
"s": "A 28-year-old man is hospitalized after ingesting a toxin that inhibits cellular ATP production. Shortly afterward, neurons develop membrane depolarization and lose their ability to maintain normal intracellular and extracellular ion concentrations. Which physiological consequence most directly results from failure of ATP-dependent membrane transport?",
"html": true,
"c": [
"Increased maintenance of intracellular potassium",
"Increased maintenance of extracellular sodium",
"Dissipation of transmembrane ion concentration gradients",
"Increased osmotic equilibrium without cellular swelling",
"Enhanced transport of ions against their gradients"
],
"a": 2,
"se": "• The correct answer is C. Dissipation of transmembrane ion concentration gradients. The cell membrane separates the intracellular and extracellular compartments and maintains distinct electrochemical environments. The textbook emphasizes that active transmembrane transport is necessary to maintain these gradients.\n• ATP depletion impairs energy-dependent transport mechanisms such as the Na⁺/K⁺-ATPase. Sodium begins to accumulate intracellularly while potassium leaves the cell down its electrochemical gradient. The resulting loss of ionic gradients disrupts membrane potential, cellular volume regulation, and ultimately cellular viability.\n• ATP depletion causes failure of active transport and progressive collapse of transmembrane electrochemical gradients, threatening cell survival.",
"w": [
"Without ATP the cell loses intracellular K⁺; it can't maintain it.",
"Extracellular Na⁺ can't be maintained — Na⁺ leaks into the cell.",
"Correct — passive leaks continue while active transport stops, so gradients run down.",
"Na⁺ entry with water causes swelling; osmotic balance isn't preserved.",
"Uphill transport is exactly what fails when ATP runs out."
],
"fig": [
"fp-p025"
],
"src": "r1"
},
{
"t": "Homeostasis & Control Systems",
"s": "A 67-year-old man suffers a large myocardial infarction and develops severe reduction in cardiac output. Coronary blood flow decreases, causing myocardial hypoxia and further weakening of cardiac contraction. The resulting reduction in cardiac output further decreases coronary perfusion. Which feature identifies this process as positive feedback?",
"html": true,
"c": [
"The response reduces the original disturbance",
"The response restores cardiac output toward baseline",
"The response amplifies the initial reduction in cardiac function",
"The response eliminates all variation in cardiac output",
"The response depends primarily on hormonal signaling"
],
"a": 2,
"se": "• The correct answer is C. The response amplifies the initial reduction in cardiac function. The textbook describes severe blood loss and circulatory failure as examples of pathological positive feedback, in which deterioration becomes self-reinforcing.\n• A marked decrease in cardiac output reduces arterial pressure and coronary blood flow. Reduced coronary perfusion causes myocardial hypoxia, which weakens the heart and further decreases its pumping ability. The worsening cardiac output then further reduces coronary perfusion, creating a vicious cycle that can progress to irreversible shock.\n• Pathological positive feedback can create a self-amplifying vicious cycle, particularly when deterioration of one physiological variable worsens the mechanism causing that deterioration.",
"w": [
"That describes negative feedback.",
"That describes a corrective (negative feedback) response.",
"Correct — low output → less coronary flow → weaker heart → even lower output.",
"No feedback system eliminates all variation.",
"The cycle here is hemodynamic, not hormonal."
],
"fig": [
"fp-p028",
"fp-p008"
],
"src": "r1"
},
{
"t": "Homeostasis & Control Systems",
"s": "A 25-year-old pianist rapidly performs a complex sequence of movements. The movements are initiated before sensory feedback from the hands could reach the brain and return to the muscles. After the performance, sensory information is used to evaluate the accuracy of the movements, and subsequent performances become more precise. Which control strategy best explains this process?",
"html": true,
"c": [
"Pure negative feedback",
"Positive feedback",
"Feed-forward control with adaptive feedback",
"Hormonal feedback control",
"Steady-state regulation"
],
"a": 2,
"se": "• The correct answer is C. Feed-forward control with adaptive feedback. Rapid motor actions occur too quickly for conventional sensory feedback to reach the central nervous system and correct each movement in real time. The textbook describes feed-forward control as an anticipatory mechanism in which the brain sends preprogrammed motor commands before the movement occurs.\n• After the movement, sensory information provides information about whether the intended movement was performed accurately. The cerebellum compares the sensory outcome with the intended action and modifies future motor commands. This represents delayed negative feedback or adaptive learning.\n• Feed-forward control anticipates rapid movements, while subsequent sensory feedback allows the nervous system to improve future performance.",
"w": [
"Pure negative feedback is too slow for rapid movements — sensory signals arrive after the movement.",
"Positive feedback amplifies a disturbance; it doesn't plan movements.",
"Correct — preprogrammed commands (feed-forward) plus delayed sensory evaluation that improves later performances (adaptive control).",
"Hormones are far too slow for rapid motor control.",
"Steady-state regulation keeps a variable stable; it doesn't coordinate rapid movements."
],
"fig": [
"fp-p032",
"fp-p033"
],
"src": "r1"
},
{
"t": "Homeostasis & Control Systems",
"s": "A 74-year-old woman and her 22-year-old granddaughter are evaluated before receiving medication that is primarily distributed in total body water. The older woman has a substantially higher percentage of body fat and lower muscle mass than the younger woman. Which physiologic difference is most relevant when considering their total body water?",
"html": true,
"c": [
"Aging increases total body water because fat contains abundant intracellular water",
"Aging increases total body water because extracellular fluid expands progressively",
"Aging decreases total body water because fat replaces water-rich lean tissue",
"Aging leaves total body water unchanged because homeostasis prevents body- composition changes",
"Aging decreases total body water because plasma volume becomes negligible"
],
"a": 2,
"se": "• The correct answer is C. Aging decreases total body water because fat replaces water-rich lean tissue. The textbook emphasizes that total body water is approximately 60% of body weight in younger individuals but decreases with aging because of declining muscle mass and increasing body fat.\n• Lean tissues, particularly muscle, contain substantially more water than adipose tissue. Therefore, changes in body composition alter the physiological baseline for total body water. This is important clinically because body composition can influence the distribution and concentration of substances that distribute within body water.\n• Physiologic \"normal\" values are dynamic and influenced by age, sex, body composition, genetics, and environment; total body water generally decreases with aging.",
"w": [
"Adipose tissue contains little water, so more fat lowers total body water.",
"ECF doesn't progressively expand with age.",
"Correct — water-rich muscle is replaced by water-poor fat, so TBW falls with age.",
"Body composition clearly changes with age; homeostasis doesn't prevent that.",
"Plasma volume remains a meaningful compartment in older adults."
],
"fig": [
"fp-p036"
],
"src": "r1"
},
{
"t": "Membrane Transport",
"s": "A 24-year-old man is undergoing pulmonary function testing after several months of progressive dyspnea. Imaging demonstrates diffuse thickening of the alveolar-capillary membrane due to interstitial fibrosis. Despite a normal alveolar surface area, his arterial oxygen tension is reduced. Which of the following changes most directly explains the impaired transfer of oxygen across the alveolar-capillary membrane?",
"html": true,
"c": [
"Decreased oxygen concentration gradient",
"Decreased diffusion coefficient of oxygen",
"Increased membrane surface area",
"Increased membrane thickness",
"Increased oxygen solubility in the membrane"
],
"a": 3,
"se": "• The rate of simple diffusion across a membrane is described by Fick’s law: J = −D × A × (ΔC/ΔX). Diffusion increases with the diffusion coefficient, surface area, and concentration gradient, but decreases as membrane thickness increases. In this patient, interstitial fibrosis thickens the alveolar-capillary barrier, increasing ΔX and therefore reducing oxygen flux. This mechanism is particularly important for gases because O₂ crosses the lipid-containing membrane primarily by simple diffusion.\n• Diffusion across a biological membrane is directly proportional to surface area and concentration gradient and inversely proportional to membrane thickness. Thus, pulmonary fibrosis impairs gas exchange primarily by increasing diffusion distance.",
"w": [
"The alveolar–capillary O₂ gradient isn't the primary problem described.",
"O₂'s diffusion coefficient is a physical property and isn't changed by fibrosis.",
"Surface area is stated to be normal, and an increase would improve diffusion.",
"Correct — Fick's law: flux falls as membrane thickness (ΔX) rises.",
"Increased solubility would improve, not impair, diffusion."
],
"fig": [
"fp-p039",
"fp-p040"
],
"src": "r1"
},
{
"t": "Membrane Transport",
"s": "A 19-year-old woman participates in a research study evaluating glucose transport into skeletal muscle. At progressively higher extracellular glucose concentrations, the rate of glucose uptake initially increases but eventually reaches a plateau despite further increases in glucose concentration. Which property of the membrane transporter best explains this finding?",
"html": true,
"c": [
"Direct ATP hydrolysis by the transporter",
"Movement of glucose against its concentration gradient",
"Absence of specific binding sites",
"Finite number of available binding sites",
"Dependence exclusively on membrane lipid solubility"
],
"a": 3,
"se": "• Facilitated diffusion through carrier proteins is saturable because transporters have a finite number of binding sites. At low substrate concentrations, increasing glucose concentration increases the frequency of transporter-substrate interactions and therefore increases transport velocity. As glucose concentration rises further, progressively more transporters become occupied. Eventually, essentially all available transporters are engaged, producing a maximal transport rate (Vmax/Tm). Additional increases in extracellular glucose cannot substantially increase the transport rate.\n• This distinction is important for Step 1: simple diffusion is generally linear with concentration, whereas carrier-mediated transport demonstrates saturation.",
"w": [
"Glucose carriers in skeletal muscle (GLUTs) don't hydrolyze ATP — that's primary active transport.",
"Facilitated diffusion moves glucose down its gradient.",
"Carriers do have specific binding sites; that's why they saturate.",
"Correct — with a finite number of carriers, transport plateaus at Vmax (Tm).",
"Lipid solubility governs simple diffusion, which doesn't saturate."
],
"fig": [
"fp-p043",
"fp-p044"
],
"src": "r1"
},
{
"t": "Membrane Transport",
"s": "A 7-year-old boy with a rare metabolic disorder is found to have a transporter that binds D-glucose normally but has virtually no affinity for L-glucose. Both molecules have the same molecular formula but differ in their three-dimensional configuration. Which property of membrane transport is demonstrated by this finding?",
"html": true,
"c": [
"Competitive inhibition",
"Electrochemical coupling",
"Membrane electrogenicity",
"Stereospecificity",
"Transport saturation"
],
"a": 3,
"se": "• Stereospecificity refers to the ability of a carrier protein to recognize one stereochemical form of a molecule while rejecting another structurally similar form. The slide specifically identifies GLUT transporters as selectively recognizing D-glucose while rejecting its mirror isomer, L-glucose. This occurs because the substrate-binding site has a specific three-dimensional configuration.\n• A useful Step 1 distinction is that carrier proteins exhibit three major kinetic characteristics emphasized in the resource: saturation, stereospecificity, and competition. Therefore, selective recognition of D-glucose over L-glucose is best explained by stereospecificity.",
"w": [
"Competition is two similar substrates competing for one carrier (e.g., galactose vs glucose).",
"Electrochemical coupling links transport to an ion gradient (e.g., SGLT).",
"Electrogenic transport moves net charge across the membrane.",
"Correct — the carrier recognizes D-glucose but not its mirror image, L-glucose.",
"Saturation is the plateau at high concentrations, not isomer selectivity."
],
"fig": [
"fp-p043",
"fp-p044"
],
"src": "r1"
},
{
"t": "Membrane Transport",
"s": "A 32-year-old woman with severe gastroenteritis develops profound diarrhea and hypotension. Laboratory studies demonstrate markedly elevated intestinal secretion of chloride and water. She is treated with an oral solution containing both sodium and glucose. Despite continued stimulation of intestinal chloride secretion, her diarrhea improves and intravascular volume begins to recover. Which of the following mechanisms most directly accounts for the effectiveness of this treatment?",
"html": true,
"c": [
"Passive diffusion of glucose through the lipid bilayer",
"Primary active transport of glucose using ATP",
"Sodium movement down its gradient through a chloride channel",
"Receptor-mediated endocytosis of sodium and glucose",
"Sodium-glucose cotransport into intestinal epithelial cells"
],
"a": 4,
"se": "• Oral rehydration therapy exploits secondary active transport through SGLT1, a sodium-glucose symporter located in intestinal epithelial cells. Sodium moves into the enterocyte down its electrochemical gradient, and this movement provides the energy needed to transport glucose into the cell. The resulting accumulation of sodium and glucose promotes osmotic movement of water from the intestinal lumen into the circulation. In cholera, elevated cAMP produces massive chloride and water secretion, but the sodium-glucose cotransporter remains functional.\n• The key principle is that secondary active transport does not directly hydrolyze ATP but depends on an ion gradient generated by primary active transport.",
"w": [
"Glucose is polar and doesn't cross the lipid bilayer by simple diffusion.",
"Intestinal glucose uptake isn't directly ATP-powered; it uses the Na⁺ gradient.",
"Na⁺ doesn't travel through chloride channels.",
"Endocytosis isn't how Na⁺ and glucose are absorbed.",
"Correct — SGLT1 cotransport brings Na⁺ and glucose in, and water follows; it still works in secretory diarrhea."
],
"fig": [
"fp-p051",
"fp-p052"
],
"src": "r1"
},
{
"t": "Membrane Transport",
"s": "A 68-year-old man is admitted with severe hypoxia caused by acute myocardial infarction. Several hours later, cardiomyocytes become swollen and intracellular sodium concentration increases. ATP levels are markedly reduced. Which of the following changes in membrane transport most directly initiates this cellular swelling?",
"html": true,
"c": [
"Failure of ATP-dependent Na⁺ extrusion",
"Increased activity of sodium-glucose cotransport",
"Increased potassium influx through voltage-gated channels",
"Failure of ATP-dependent Na⁺ extrusion",
"Increased receptor-mediated endocytosis"
],
"a": 0,
"se": "• The Na⁺/K⁺-ATPase is a primary active transporter that directly hydrolyzes ATP to extrude 3 Na⁺ ions while bringing 2 K⁺ ions into the cell. Its continuous activity is essential for maintaining low intracellular sodium concentration and therefore cellular osmotic stability. During severe hypoxia or ischemia, ATP production falls. As the Na⁺/K⁺-ATPase becomes unable to maintain its normal activity, intracellular Na⁺ accumulates. Water follows Na⁺ osmotically, producing cellular swelling and potentially membrane rupture.\n• ATP depletion → Na⁺/K⁺-ATPase failure → intracellular Na⁺ accumulation → osmotic water entry → cellular swelling.",
"w": [
"Correct — ATP loss stops the Na⁺/K⁺-ATPase, Na⁺ builds up inside, and water follows.",
"SGLT activity doesn't increase in hypoxia, and it isn't the trigger for swelling.",
"K⁺ normally leaves cells; K⁺ influx isn't the mechanism.",
"Identical to choice A in the source document — A is the keyed answer.",
"Endocytosis doesn't cause ischemic cell swelling."
],
"fig": [
"fp-p055",
"fp-p056"
],
"key": "In the source PDF, choices A and D are worded identically. The key is A.",
"src": "r1"
},
{
"t": "Membrane Transport",
"s": "A 27-year-old man is exposed to a toxin that selectively inhibits the Na⁺/K⁺-ATPase in neurons. Which of the following changes in ion movement occurs directly as a result of inhibition of this transporter?",
"html": true,
"c": [
"Increased intracellular Na⁺ and increased intracellular K⁺",
"Decreased intracellular Na⁺ and decreased intracellular K⁺",
"Increased intracellular Na⁺ and decreased intracellular K⁺",
"Decreased intracellular Na⁺ and increased intracellular K⁺",
"No change in intracellular Na⁺ or K⁺ concentrations"
],
"a": 2,
"se": "• The Na⁺/K⁺-ATPase normally transports 3 Na⁺ out of the cell and 2 K⁺ into the cell per ATP hydrolyzed. Therefore, inhibition of the pump directly causes progressive accumulation of Na⁺ inside the cell and loss of K⁺ from the intracellular compartment. C is therefore the expected result.\n• The pump is also electrogenic because each cycle produces a net movement of one positive charge out of the cell. More importantly, its activity establishes the ion gradients that contribute substantially to the resting membrane potential and provide the driving force for secondary active transport. Thus, Na⁺/K⁺-ATPase inhibition affects not only ion concentrations but also membrane electrical properties and cell volume",
"w": [
"K⁺ is no longer pumped in, so intracellular K⁺ falls rather than rises.",
"Na⁺ is no longer pumped out, so intracellular Na⁺ rises.",
"Correct — the pump normally moves 3 Na⁺ out and 2 K⁺ in; blocking it reverses both.",
"This is the opposite of what happens.",
"Ion concentrations change progressively once the pump stops."
],
"fig": [
"fp-p059",
"fp-p060"
],
"src": "r1"
},
{
"t": "Membrane Transport",
"s": "A 45-year-old man with chronic kidney disease has impaired regulation of intracellular calcium in cardiac myocytes. A laboratory investigation demonstrates reduced activity of the Na⁺/Ca²⁺ exchanger. Which of the following best describes the normal transport mechanism of this exchanger?",
"html": true,
"c": [
"Primary active transport of Ca²⁺ using ATP",
"Facilitated diffusion of Ca²⁺ through a lipid-soluble pathway",
"Symport of Na⁺ and Ca²⁺ in the same direction",
"Antiport in which Na⁺ moves inward while Ca²⁺ moves outward",
"Simple diffusion of Ca²⁺ down its concentration gradient"
],
"a": 3,
"se": "• The Na⁺/Ca²⁺ exchanger (NCX) is a secondary active antiporter. According to the resource, it moves 3 Na⁺ ions into the cell down their electrochemical gradient while extruding 1 Ca²⁺ ion from the cell against its gradient. The energy stored in the Na⁺ gradient, which is maintained by the Na⁺/K⁺-ATPase, drives Ca²⁺ extrusion. D correctly describes this opposite-direction movement.\n• This illustrates the distinction between primary and secondary active transport: primary active transport directly uses ATP, whereas secondary active transport uses the potential energy stored in an ion gradient created by a primary pump.",
"w": [
"Primary active Ca²⁺ transport is PMCA/SERCA, not the Na⁺/Ca²⁺ exchanger.",
"Ca²⁺ doesn't pass through the lipid bilayer.",
"NCX is an antiporter — the ions move in opposite directions.",
"Correct — 3 Na⁺ in, 1 Ca²⁺ out, powered by the Na⁺ gradient (secondary active).",
"Ca²⁺ is pumped out against its gradient, not diffusing down it."
],
"fig": [
"fp-p051",
"fp-p052"
],
"src": "r1"
},
{
"t": "Membrane Transport",
"s": "A 6-year-old boy has recurrent respiratory infections, chronic productive cough, pancreatic insufficiency, and poor weight gain. Sweat testing reveals a chloride concentration of 85 mmol/L. A mutation causes defective CFTR protein trafficking to epithelial cell membranes. Which of the following cellular abnormalities most directly contributes to the patient's thick airway secretions?",
"html": true,
"c": [
"Increased chloride secretion into the airway lumen",
"Decreased chloride secretion with increased sodium and water absorption",
"Increased water secretion into the airway lumen",
"Decreased sodium absorption from airway epithelial cells",
"Increased receptor-mediated endocytosis of chloride"
],
"a": 1,
"se": "• Cystic fibrosis results from mutations affecting CFTR, a chloride channel. The resource describes defective CFTR as causing impaired chloride secretion into the airway and gastrointestinal lumens. Because chloride remains within epithelial cells, sodium and water absorption becomes relatively increased, producing a dehydrated, viscous mucus layer. This thick mucus obstructs respiratory bronchioles and predisposes patients to chronic bacterial infection and bronchiectasis. B therefore best describes the mechanism.\n• The elevated sweat chloride concentration results from defective chloride handling in sweat ducts and is an important diagnostic finding. The high-yield concept is that a membrane-channel defect can produce multisystem disease by altering epithelial ion and water transport.",
"w": [
"CFTR defects decrease, not increase, Cl⁻ secretion.",
"Correct — less Cl⁻ secretion plus more Na⁺ and water absorption dehydrates the mucus.",
"Less water reaches the lumen, which is why secretions thicken.",
"Na⁺ absorption increases in CF airways.",
"Chloride isn't moved by endocytosis."
],
"fig": [
"fp-p067",
"fp-p068"
],
"key": "The source's explanation text says “D”, but B is the bolded answer and matches the explanation's content, so B is used here.",
"src": "r1"
},
{
"t": "Membrane Transport",
"s": "A 34-year-old woman presents with tendon xanthomas and a markedly elevated plasma LDL concentration. Genetic testing reveals a mutation in the LDL receptor that prevents the receptor from participating normally in clathrin-coated pits. Which of the following cellular processes is primarily impaired?",
"html": true,
"c": [
"Simple diffusion of LDL across the lipid bilayer",
"Facilitated diffusion of LDL through a membrane carrier",
"Receptor-mediated endocytosis of LDL",
"Primary active transport of LDL using ATP",
"Pinocytosis of extracellular fluid"
],
"a": 2,
"se": "• LDL is internalized by hepatocytes through receptor-mediated endocytosis. LDL binds to its specific LDL receptor, and the receptor-ligand complex becomes concentrated in clathrin-coated pits. The membrane then invaginates and forms an intracellular vesicle. Mutations affecting the LDL receptor or its ability to cluster in clathrin-coated pits impair LDL uptake by hepatocytes, resulting in markedly increased plasma LDL levels.\n• The clinical consequences include tendon xanthomas, corneal arcus, and accelerated atherosclerosis. Thus, the findings directly illustrate how a defect in receptor-mediated endocytosis can produce systemic disease.",
"w": [
"LDL is far too large to diffuse across the membrane.",
"LDL has no carrier protein for facilitated diffusion.",
"Correct — LDL receptors cluster in clathrin-coated pits for receptor-mediated endocytosis.",
"LDL isn't moved by an ATP pump.",
"Pinocytosis is nonspecific fluid uptake, not LDL-receptor dependent."
],
"fig": [
"fp-p071",
"fp-p072"
],
"src": "r1"
},
{
"t": "Membrane Transport",
"s": "A 58-year-old man is undergoing electrophysiologic testing after developing recurrent episodes of muscle weakness. A drug administered experimentally causes rapid opening of a population of membrane channels when the membrane potential changes from −70 mV toward −55 mV. Which type of channel is being activated?",
"html": true,
"c": [
"Ligand-gated channel",
"Mechanically gated channel",
"Aquaporin water channel",
"Receptor-mediated endocytic channel",
"Voltage-gated channel"
],
"a": 4,
"se": "• Voltage-gated channels undergo conformational changes in response to changes in membrane electrical potential. The resource describes voltage-gated Na⁺ channels as opening rapidly when the membrane depolarizes from approximately −70 mV toward −55 mV, initiating the depolarization phase of an action potential. E is therefore correct.\n• A useful Step 1 distinction is to identify the stimulus controlling the channel: voltage → voltage-gated; chemical ligand → ligand-gated; mechanical deformation → mechanically gated.",
"w": [
"Ligand-gated channels open when a chemical binds (e.g., ACh at the NMJ).",
"Mechanically gated channels open with stretch or deformation.",
"Aquaporins conduct water and aren't voltage-gated.",
"Endocytosis isn't a channel.",
"Correct — opening in response to depolarization (−70 → −55 mV) defines voltage gating."
],
"fig": [
"fp-p075",
"fp-p076"
],
"src": "r1"
},
{
"t": "Body Fluids & Edema",
"s": "A 54-year-old woman is evaluated after several days of severe watery diarrhea. She has dry mucous membranes, orthostatic dizziness, and a blood pressure of 98/62 mm Hg. Her serum sodium concentration is 140 mEq/L. Compared with her baseline laboratory studies, her hematocrit and plasma protein concentration are increased. Assume that the diarrheal fluid lost was approximately isotonic with plasma. Which of the following best describes the expected changes in her body-fluid compartments?",
"html": true,
"c": [
"Decreased ECF volume, unchanged ICF volume, unchanged ECF osmolarity",
"Decreased ECF volume, increased ICF volume, decreased ECF osmolarity",
"Decreased ECF volume, decreased ICF volume, increased ECF osmolarity",
"Increased ECF volume, unchanged ICF volume, unchanged ECF osmolarity",
"Increased ECF volume, increased ICF volume, decreased ECF osmolarity"
],
"a": 0,
"se": "• This patient has isosmotic volume contraction caused by loss of isotonic fluid from the gastrointestinal tract.\n• The key sequence is:\n• Isotonic fluid loss → ECF volume decreases → ECF osmolarity remains unchanged → no osmotic gradient develops → no significant water movement between ECF and ICF.\n• Therefore: ECF ↓ ICF unchanged ECF osmolarity unchanged Hematocrit ↑ Plasma protein concentration ↑\n• The textbook specifically identifies diarrhea as an example of isosmotic contraction and notes that no water shifts across the cell membrane because no osmotic gradient develops.\n• This is an important distinction from water deprivation, in which water is lost disproportionately and both compartments contract.\n• Loss of isotonic fluid from the ECF decreases ECF volume without changing osmolarity; therefore, no water shifts between ECF and ICF.",
"w": [
"Correct — isotonic loss shrinks only the ECF; with no osmotic gradient, the ICF is unchanged.",
"That pattern (ICF ↑, osmolarity ↓) is hyposmotic contraction, e.g., adrenal insufficiency.",
"That pattern (both ↓, osmolarity ↑) is hyperosmotic contraction, e.g., water deprivation or sweating.",
"Diarrhea decreases ECF volume.",
"That is hyposmotic expansion, e.g., SIADH."
],
"fig": [
"fp-p079",
"fp-p080"
],
"src": "r1"
},
{
"t": "Body Fluids & Edema",
"s": "A 27-year-old man participates in a 4-hour endurance race on a hot afternoon. He has consumed little water during the race and has lost a large volume of sweat. Laboratory testing shows a serum sodium concentration of 153 mEq/L and increased plasma protein concentration. His urine volume is markedly reduced. Which of the following best explains the change in his intracellular fluid volume?",
"html": true,
"c": [
"It increases because hypotonic ECF draws water into cells",
"It increases because intracellular osmolarity initially decreases",
"It decreases because hyperosmotic ECF draws water out of cells",
"It remains unchanged because cell membranes are impermeable to water",
"It remains unchanged because sodium is restricted to the ECF"
],
"a": 2,
"se": "• C. It decreases because hyperosmotic ECF draws water out of cells\n• The patient has lost more water relative to solute, producing hyperosmotic volume contraction.\n• The sequence is:\n• Water loss > solute loss → ECF osmolarity ↑ → ECF becomes hypertonic → water moves from ICF → ECF → ICF volume decreases.\n• At equilibrium, both compartments have a higher osmolarity than baseline.\n• The textbook identifies sweating and water deprivation as examples of hyperosmotic contraction and specifically states that increased ECF osmolarity draws water from the cells.\n• This also explains the elevated serum sodium concentration.\n• Free-water loss raises ECF tonicity and causes water to shift from ICF to ECF, decreasing intracellular volume.",
"w": [
"ECF is hypertonic here, not hypotonic.",
"ECF osmolarity rises first; ICF osmolarity doesn't fall.",
"Correct — losing more water than salt makes the ECF hyperosmotic, which pulls water out of cells.",
"Cell membranes are highly permeable to water.",
"Na⁺ stays in the ECF, which is exactly why water shifts out of cells."
],
"fig": [
"fp-p083",
"fp-p080"
],
"src": "r1"
},
{
"t": "Body Fluids & Edema",
"s": "A 46-year-old man with severe dehydration is unable to drink water for several days. His serum sodium is 158 mEq/L, and his serum osmolality is markedly elevated. Compared with his baseline state, both ECF and ICF volumes are decreased. Which mechanism best explains the decrease in intracellular volume?",
"html": true,
"c": [
"Movement of NaCl from ECF into ICF",
"Movement of water from ICF into ECF",
"Movement of water from ECF into ICF",
"Movement of potassium from ICF into ECF",
"Movement of protein from ICF into ECF"
],
"a": 1,
"se": "• B. Movement of water from ICF into ECF\n• Water deprivation produces hyperosmotic volume contraction.\n• The initial disturbance occurs in the ECF:\n• Water loss → ECF volume ↓ → ECF osmolarity ↑.\n• Because the cell membrane is highly permeable to water, water moves from the ICF toward the hypertonic ECF:\n• ICF → ECF\n• This partially restores osmotic equilibrium but causes the ICF to contract.\n• The textbook emphasizes the three-step framework: identify the disturbance, determine the immediate ECF change, and then predict the osmotic movement of water.\n• When ECF becomes hypertonic, water leaves cells until ECF and ICF osmolarities become equal.",
"w": [
"NaCl stays extracellular; it doesn't enter cells.",
"Correct — hypertonic ECF draws water out of the cells.",
"Water moves the other way, out of the cells.",
"K⁺ movement isn't what shrinks the ICF.",
"Proteins don't leave cells to cause this."
],
"fig": [
"fp-p083",
"fp-p080"
],
"src": "r1"
},
{
"t": "Body Fluids & Edema",
"s": "A 63-year-old woman is admitted with severe weakness, hypotension, weight loss, and hyperpigmentation. Laboratory studies show:<ul><li>Na⁺ = 124 mEq/L</li><li>Serum osmolarity = decreased</li><li>Hematocrit = increased</li><li>Plasma protein concentration = increased</li></ul>She is diagnosed with primary adrenal insufficiency. Which combination of changes in body-fluid compartments is most likely?",
"html": true,
"c": [
"ECF ↑, ICF ↑, osmolarity ↓",
"ECF ↓, ICF ↑, osmolarity ↓",
"ECF ↓, ICF ↓, osmolarity ↑",
"ECF ↑, ICF unchanged, osmolarity unchanged",
"ECF ↓, ICF unchanged, osmolarity unchanged"
],
"a": 1,
"se": "• B. ECF ↓, ICF ↑, osmolarity ↓\n• Adrenal insufficiency causes loss of sodium from the ECF because of reduced aldosterone effect.\n• The initial disturbance is: Na⁺ loss from ECF → ECF osmolarity ↓ → ECF becomes hypotonic.\n• Water then moves: ECF → ICF\n• This causes: ECF volume ↓, ICF volume ↑, Osmolarity ↓ in both compartments after equilibrium, Cellular swelling, Increased hematocrit and Increased plasma protein concentration\n• The textbook specifically describes adrenal insufficiency as hyposmotic volume contraction, with decreased ECF volume, increased ICF volume, decreased osmolarity, and cellular swelling.\n• Loss of ECF sodium produces hypoosmotic contraction: ECF decreases while water shifts into cells, increasing ICF volume.",
"w": [
"ECF volume falls with Na⁺ loss; it doesn't rise.",
"Correct — Na⁺ loss makes the ECF hypotonic, so water moves into cells: hyposmotic contraction.",
"Rising osmolarity fits water loss, not salt loss.",
"This doesn't fit — ECF falls and osmolarity drops.",
"That is isosmotic contraction (e.g., diarrhea); here osmolarity is decreased."
],
"fig": [
"fp-p091",
"fp-p080"
],
"key": "The source PDF didn't bold an answer for this one; the answer here is taken from the source's own explanation.",
"src": "r1"
},
{
"t": "Body Fluids & Edema",
"s": "A 38-year-old woman develops persistent hyponatremia after a neurosurgical procedure. Her serum sodium is 116 mEq/L, serum osmolarity is decreased, and urine is inappropriately concentrated. She is diagnosed with SIADH. Which combination of changes is most likely after the retained water reaches osmotic equilibrium?",
"html": true,
"c": [
"ECF ↓, ICF ↓, osmolarity ↑",
"ECF ↓, ICF ↑, osmolarity ↓",
"ECF ↑, ICF unchanged, osmolarity unchanged",
"ECF ↑, ICF ↑, osmolarity ↓",
"ECF ↑, ICF ↓, osmolarity ↑"
],
"a": 3,
"se": "• D. ECF ↑, ICF ↑, osmolarity ↓\n• SIADH causes inappropriate retention of free water.\n• The sequence is:\n• Water retention → ECF volume ↑ → ECF osmolarity ↓ → water moves into cells → ICF volume ↑.\n• After osmotic equilibration: ECF ↑, ICF ↑, Osmolarity ↓\n• Because the added water dilutes the extracellular compartment, plasma proteins and hematocrit also decrease.\n• The textbook explicitly identifies SIADH as hyposmotic volume expansion, with increased ECF and ICF volumes and decreased osmolarity.\n• Retention of free water produces hyposmotic expansion: both ECF and ICF increase while osmolarity decreases.",
"w": [
"That is hyperosmotic contraction.",
"SIADH expands, rather than contracts, the ECF.",
"Retained free water lowers osmolarity, so it isn't unchanged.",
"Correct — retained water expands both compartments and dilutes them: hyposmotic expansion.",
"Osmolarity falls in SIADH, it doesn't rise."
],
"fig": [
"fp-p095",
"fp-p080"
],
"key": "The source PDF didn't bold an answer for this one; the answer here is taken from the source's own explanation.",
"src": "r1"
},
{
"t": "Body Fluids & Edema",
"s": "A 70-kg man receives 2 L of 3% NaCl intravenously for severe symptomatic hyponatremia. Before treatment, his body-fluid compartments are approximately:<ul><li>TBW = 44 L</li><li>ECF = 16 L</li><li>ICF = 28 L</li><li>Osmolarity = 280 mOsm/L</li></ul>The administered solution adds approximately 1,491 mOsm of solute to the ECF. Which change is most likely after osmotic equilibrium is established?",
"html": true,
"c": [
"ICF expands because NaCl enters cells",
"ICF contracts because water moves into the ECF",
"ECF contracts because water moves into the ICF",
"ICF remains unchanged because NaCl is extracellular",
"ECF and ICF both contract because NaCl is lost in urine"
],
"a": 1,
"se": "• B. ICF contracts because water moves into the ECF\n• This is a classic hyperosmotic volume expansion caused by hypertonic NaCl administration.\n• Immediately after infusion, the additional NaCl remains in the ECF: ECF volume ↑ + ECF osmolarity ↑\n• The hypertonic ECF then draws water out of cells: ICF → ECF\n• The textbook provides a quantitative example in which administration of hypertonic saline produces an approximately 3-L decrease in ICF volume while ECF expands substantially. The important conceptual point is that adding 2 L to the ECF does not necessarily mean the final ECF expansion is only 2 L. Additional water is recruited from the ICF.\n• Hypertonic saline expands ECF while drawing water from ICF, so ECF expansion can exceed the infused volume.",
"w": [
"NaCl stays in the ECF and doesn't enter cells.",
"Correct — hypertonic ECF pulls water from the cells, shrinking the ICF.",
"Water moves out of the ICF, not into it.",
"The ICF changes because water moves osmotically.",
"Urinary loss isn't the immediate effect."
],
"fig": [
"fp-p099",
"fp-p080"
],
"src": "r1"
},
{
"t": "Body Fluids & Edema",
"s": "A 25-year-old woman weighing 50 kg is evaluated for body-fluid compartment measurements. A tracer that distributes throughout total body water is administered, and the final plasma concentration is measured. The tracer has a known amount of 2.0 g, and the final concentration is 0.05 g/L. Which is the patient's estimated total body water?",
"html": true,
"c": [
"10 L",
"20 L",
"25 L",
"40 L",
"50 L"
],
"a": 3,
"se": "• D. 40 L\n• The indicator-dilution principle is based on conservation of mass:\n• Volume = Amount of indicator / Final concentration\n• Therefore:\n• TBW = 2.0 g / 0.05 g/L = 40 L\n• The important concept is that the marker must distribute throughout the compartment being measured.\n• The textbook describes the relationship as:\n• Mass = V × C, and therefore: V = Mass of indicator / Final concentration\n• It also identifies deuterium oxide, tritium, and antipyrine as TBW markers.",
"w": [
"10 L doesn't fit — 2.0 ÷ 0.05 = 40.",
"20 L doesn't fit — it would require a final concentration of 0.1 g/L.",
"25 L doesn't fit the arithmetic.",
"Correct — volume = amount ÷ concentration = 2.0 g ÷ 0.05 g/L = 40 L.",
"50 L equals her body weight in kg, not her total body water."
],
"fig": [
"fp-p103"
],
"src": "r1"
},
{
"t": "Body Fluids & Edema",
"s": "A 68-year-old man with generalized edema has severe proteinuria. Laboratory studies show markedly reduced serum albumin concentration. His edema is most pronounced in the lower extremities and around the eyes. Which change in Starling forces most directly promotes movement of fluid from the capillaries into the interstitial space?",
"html": true,
"c": [
"Increased plasma colloid osmotic pressure",
"Decreased interstitial hydrostatic pressure",
"Decreased plasma colloid osmotic pressure",
"Increased interstitial colloid osmotic pressure",
"Decreased capillary hydrostatic pressure"
],
"a": 2,
"se": "• C. Decreased plasma colloid osmotic pressure\n• The Starling relationship presented in the textbook is:\n• Filtration=Kf(Pc−Pif−πc+πif)\n• The patient's nephrotic syndrome causes massive urinary protein loss, particularly albumin.\n• Therefore: Proteinuria → plasma albumin ↓ → plasma colloid osmotic pressure (πc) ↓ → inward force retaining water in capillaries decreases → net filtration increases → edema.\n• The textbook specifically identifies nephrotic syndrome as an example of decreased plasma colloid osmotic pressure producing generalized edema.\n• Loss of plasma albumin decreases plasma colloid osmotic pressure, increasing net capillary filtration and promoting edema.",
"w": [
"Higher plasma oncotic pressure would hold fluid in the capillaries.",
"Lower interstitial pressure favors filtration somewhat, but it isn't the main change in nephrotic syndrome.",
"Correct — albumin loss lowers πc, so less fluid is held in the capillaries and edema forms.",
"Increased interstitial oncotic pressure isn't the main mechanism here.",
"Lower capillary pressure would reduce filtration."
],
"fig": [
"fp-p106"
],
"src": "r1"
},
{
"t": "Body Fluids & Edema",
"s": "A 59-year-old man with advanced liver cirrhosis develops progressive abdominal distension. Examination reveals ascites and peripheral edema. His serum albumin concentration is markedly reduced, and portal venous pressure is elevated. Which combination of Starling-force changes best explains his ascites?",
"html": true,
"c": [
"Increased Pc and decreased πc",
"Decreased Pc and increased πc",
"Increased Pc and increased πc",
"Decreased Pc and decreased πif",
"Decreased Pc and decreased πc"
],
"a": 0,
"se": "• A. Increased Pc and decreased πc\n• Cirrhosis produces two major changes relevant to Starling forces:\n   1. Portal hypertension increases capillary hydrostatic pressure (Pc)\n   2. Impaired hepatic albumin synthesis decreases plasma colloid osmotic pressure (πc)\n• Using:\n• Filtration=Kf(Pc−Pif−πc+πif)\n• both abnormalities increase net filtration.\n• Thus: Portal hypertension → Pc↑ and Reduced albumin synthesis → πc↓\n• Together they promote movement of fluid into the peritoneal cavity, producing ascites.\n• The textbook specifically identifies cirrhosis as a mixed mechanism involving increased hydrostatic pressure and decreased plasma colloid osmotic pressure.\n• Cirrhotic ascites is produced by the combined effects of increased hydrostatic pressure and decreased plasma colloid osmotic pressure.",
"w": [
"Correct — portal hypertension raises Pc and low albumin lowers πc; both increase filtration.",
"Both of these changes would reduce filtration.",
"Raised πc would oppose ascites.",
"Portal pressure is increased, not decreased.",
"Pc is increased in cirrhosis, not decreased."
],
"fig": [
"fp-p106"
],
"src": "r1"
},
{
"t": "Body Fluids & Edema",
"s": "A 72-year-old man develops an acute ischemic stroke involving a branch of the middle cerebral artery. Several hours later, the affected region of the brain becomes swollen. At the cellular level, ischemia causes ATP depletion and failure of the Na⁺/K⁺-ATPase. Which sequence best explains the resulting cellular edema?",
"html": true,
"c": [
"ATP depletion → decreased intracellular Na⁺ → water leaves cells → cellular shrinkage",
"ATP depletion → increased intracellular Na⁺ → increased intracellular osmotic pressure → water enters cells",
"ATP depletion → increased extracellular K⁺ uptake → decreased intracellular osmotic pressure → water leaves cells",
"ATP depletion → decreased intracellular osmolarity → water enters cells",
"ATP depletion → increased plasma oncotic pressure → water enters cells"
],
"a": 1,
"se": "• B. ATP depletion → increased intracellular Na⁺ → increased intracellular osmotic pressure → water enters cells\n• Rationale\n• This question integrates cellular energetics with fluid physiology.\n• Ischemia reduces oxygen delivery and oxidative phosphorylation: Ischemia → ATP depletion → Na⁺/K⁺-ATPase failure\n• Normally, the Na⁺/K⁺ pump actively moves Na⁺ out of the cell and K⁺ into the cell.\n• When the pump fails: Na⁺ accumulates intracellularly → intracellular osmotic load increases → water enters the cell → cellular swelling.\n• The textbook describes this sequence explicitly and identifies the brain cortex and myocardium as particularly vulnerable to this form of intracellular edema.\n• This is distinct from extracellular edema, which results primarily from excessive capillary filtration relative to lymphatic drainage.\n• Ischemic cellular edema results from ATP depletion and Na⁺/K⁺-ATPase failure, causing intracellular Na⁺ accumulation and osmotic water entry.",
"w": [
"Na⁺ rises inside cells when the pump fails; it doesn't fall.",
"Correct — pump failure → Na⁺ builds up inside → osmotic water entry → cytotoxic edema.",
"K⁺ isn't taken up when the pump fails; it leaks out.",
"Intracellular osmolarity rises, not falls.",
"Plasma oncotic pressure isn't involved in cellular edema."
],
"fig": [
"fp-p112"
],
"key": "The source PDF didn't bold an answer for this one; the answer here is taken from the source's own explanation.",
"src": "r1"
},
{
"t": "Resting Membrane Potential",
"s": "A 24-year-old man is undergoing an electrophysiologic study of a large peripheral nerve fiber. The intracellular K⁺ concentration is 140 mEq/L, whereas the extracellular K⁺ concentration is 4 mEq/L. At rest, the membrane has a very high permeability to K⁺ because numerous K⁺ leak channels are open. The membrane potential is initially measured at −94 mV. Which physiological mechanism most directly explains why the membrane potential approaches −94 mV under these conditions?",
"html": true,
"c": [
"Inward diffusion of Na⁺ through voltage-gated channels",
"Outward diffusion of K⁺ through resting leak channels",
"Inward diffusion of Cl⁻ through ligand-gated channels",
"Active transport of K⁺ into the cell by Na⁺/K⁺-ATPase",
"Outward diffusion of Na⁺ through voltage-gated channels"
],
"a": 1,
"se": "• B. Outward diffusion of K⁺ through resting leak channels\n• At rest, the intracellular K⁺ concentration is much greater than the extracellular concentration:\n• [K⁺]in=140 mEq/L\n• [K⁺]out=4 mEq/L\n• Therefore, K⁺ has a strong chemical gradient favoring outward movement. Because the resting membrane is highly permeable to K⁺, K⁺ diffuses outward through K⁺ leak channels. As positive charge leaves the cell, impermeant intracellular anions remain behind, producing intracellular negativity.\n• The K⁺ equilibrium potential is: EK = 61 log(140/4)≈−94 mV\n• Thus, if K⁺ were the only permeable ion, the membrane potential would approach EK. The textbook identifies K⁺ diffusion through leak channels as the first major step in generating the RMP.\n• The resting membrane potential is dominated by K⁺ because resting membranes are much more permeable to K⁺ than to Na⁺.",
"w": [
"Voltage-gated Na⁺ channels are closed at rest.",
"Correct — K⁺ leaking out through leak channels drives Vm toward EK (−94 mV).",
"Cl⁻ isn't the main determinant here.",
"The pump keeps the gradient, but K⁺ leak current generates the voltage.",
"Na⁺ moves inward, not outward, and these channels are closed at rest."
],
"fig": [
"fp-p115",
"fp-p116"
],
"src": "r1"
},
{
"t": "Resting Membrane Potential",
"s": "A 35-year-old woman is being evaluated for an electrolyte abnormality. Her serum potassium concentration is found to be 2.5 mEq/L. Assume intracellular K⁺ concentration remains approximately 140 mEq/L. Compared with normal conditions, the equilibrium potential for K⁺ becomes more negative. Which mechanism best explains this change?",
"html": true,
"c": [
"The K⁺ chemical gradient becomes smaller, reducing K⁺ efflux",
"The K⁺ chemical gradient becomes larger, increasing the tendency for K⁺ efflux",
"The Na⁺ chemical gradient reverses, increasing Na⁺ efflux",
"The intracellular K⁺ concentration falls to equal extracellular K⁺",
"The Na⁺/K⁺-ATPase stops contributing to membrane potential"
],
"a": 1,
"se": "• B. The K⁺ chemical gradient becomes larger, increasing the tendency for K⁺ efflux\n• The Nernst equation for K⁺ is: EK = 61 log([K⁺]in / [K⁺]out)\n• When extracellular K⁺ decreases: [K⁺]in/[K⁺]out becomes smaller.\n• The logarithm therefore becomes more negative, causing EK to become more negative.\n• For example:\n• Normal: EK≈−94 mV\n• With severe hypokalemia, EK can shift toward approximately −105 mV.\n• The textbook specifically describes hypokalemia as increasing the outward K⁺ gradient and making EK more negative.\n• Hypokalemia makes EK more negative because decreasing extracellular K⁺ increases the K⁺ concentration gradient.",
"w": [
"Lower extracellular K⁺ makes the gradient larger, not smaller.",
"Correct — a steeper out-to-in gradient makes EK more negative.",
"The Na⁺ gradient doesn't reverse in hypokalemia.",
"Intracellular K⁺ stays around 140 mEq/L.",
"The pump still operates."
],
"fig": [
"fp-p119"
],
"src": "r1"
},
{
"t": "Resting Membrane Potential",
"s": "A 48-year-old man with chronic kidney disease develops a serum potassium concentration of 7.0 mEq/L. His intracellular K⁺ concentration remains approximately 140 mEq/L. His electrocardiogram initially shows peaked T waves. As hyperkalemia becomes more severe, he develops generalized muscle weakness. Which sequence best explains the progression from hyperkalemia to impaired neuromuscular function?",
"html": true,
"c": [
"Increased extracellular K⁺ → less negative EK → depolarization → persistent Na⁺ channel inactivation",
"Increased extracellular K⁺ → more negative EK → hyperpolarization → increased Na⁺ channel availability",
"Increased extracellular K⁺ → unchanged EK → hyperpolarization → reduced K⁺ efflux",
"Increased extracellular K⁺ → more positive EK → hyperpolarization → increased Na⁺ channel activation",
"Increased extracellular K⁺ → decreased intracellular K⁺ → increased Na⁺ permeability → membrane repolarization"
],
"a": 0,
"se": "• A. Increased extracellular K⁺ → less negative EK → depolarization → persistent Na⁺ channel inactivation\n• Hyperkalemia increases [K⁺]out.\n• From the Nernst equation: EK=61log([K⁺]in/[K⁺]out)\n• Increasing extracellular K⁺ makes the ratio larger and therefore makes EK less negative.\n• The resting membrane potential consequently becomes less negative: Hyperkalemia → depolarization\n• Initially, this brings the membrane closer to threshold and may increase excitability. However, sustained depolarization keeps many voltage-gated Na⁺ channels in the inactivated state.\n• Therefore: Persistent depolarization → Na⁺ channel inactivation → impaired action-potential generation → weakness/paralysis.\n• The textbook explicitly describes this clinical paradox.\n• Hyperkalemia depolarizes the membrane; severe persistent depolarization inactivates voltage-gated Na⁺ channels and can cause weakness or paralysis.",
"w": [
"Correct — higher [K⁺]out makes EK less negative, the membrane depolarizes, and Na⁺ channels stay inactivated.",
"Hyperkalemia makes EK less negative, not more.",
"EK does change when extracellular K⁺ changes.",
"EK becomes less negative, but the membrane depolarizes rather than hyperpolarizes.",
"Intracellular K⁺ stays about the same, and the membrane depolarizes rather than repolarizing."
],
"fig": [
"fp-p122"
],
"src": "r1"
},
{
"t": "Resting Membrane Potential",
"s": "A researcher measures the membrane potential of a skeletal muscle fiber under three experimental conditions.<ul><li>Condition 1: Only K⁺ leak channels are permeable.</li><li>Condition 2: K⁺ and a small amount of Na⁺ are permeable.</li><li>Condition 3: K⁺ and Na⁺ are permeable, and the Na⁺/K⁺-ATPase is functioning normally.</li></ul>The measured membrane potentials are approximately −94 mV, −86 mV, and −90 mV, respectively. Which sequence best explains these changes?",
"html": true,
"c": [
"K⁺ influx → Na⁺ efflux → pump-mediated K⁺ efflux",
"K⁺ influx → Na⁺ influx → pump-mediated K⁺ extrusion",
"Na⁺ efflux → K⁺ influx → electrogenic Na⁺ influx",
"Cl⁻ influx → K⁺ efflux → Na⁺ extrusion",
"K⁺ efflux → Na⁺ influx → electrogenic Na⁺ extrusion"
],
"a": 4,
"se": "• E. K⁺ efflux → Na⁺ influx → electrogenic Na⁺ extrusion\n• The textbook describes RMP development in three steps.\n• Step 1: K⁺ leak\n• K⁺ leaves the cell through abundant leak channels: Vm→EK≈−94 mV\n• Step 2: Na⁺ leak\n• A small amount of Na⁺ enters the cell because of both its chemical and electrical gradients. This adds positive charge intracellularly and shifts the membrane potential toward approximately −86 mV.\n• Step 3: Na⁺/K⁺-ATPase\n• The pump moves: 3 Na⁺ out / 2 K⁺ in\n• This produces a net outward movement of one positive charge, making the interior slightly more negative and shifting the potential toward approximately −90 mV.\n• RMP results from dominant K⁺ efflux, smaller Na⁺ influx, and a modest additional negative contribution from the electrogenic Na⁺/K⁺ pump.",
"w": [
"K⁺ leaves the cell (efflux); it doesn't enter.",
"The first step is K⁺ efflux, and the pump extrudes Na⁺.",
"This reverses the real directions.",
"Cl⁻ influx isn't the first step.",
"Correct — K⁺ efflux (−94), then small Na⁺ influx (−86), then the electrogenic pump (−90)."
],
"fig": [
"fp-p116",
"fp-p126",
"fp-p127",
"fp-p128",
"fp-p129",
"fp-p130"
],
"src": "r1"
},
{
"t": "Resting Membrane Potential",
"s": "A 42-year-old researcher studies two otherwise identical neurons.<ul><li>Neuron A has a resting membrane permeability ratio: P<sub>K</sub> : P<sub>Na</sub> : P<sub>Cl</sub> = 1 : 0.04 : 0.45</li><li>Neuron B undergoes an experimental increase in Na⁺ permeability while K⁺ permeability remains unchanged.</li></ul>Which change in membrane potential is most likely to occur in neuron B?",
"html": true,
"c": [
"Vm moves toward EK and becomes more negative",
"Vm moves toward ENa and becomes less negative",
"Vm moves toward ECl and becomes more negative",
"Vm becomes independent of all ion concentration gradients",
"Vm becomes equal to zero because Na⁺ permeability dominates all electrical forces"
],
"a": 1,
"se": "• B. Vm moves toward ENa and becomes less negative\n• The GHK equation determines the membrane potential based on:\n   1. Ion concentration gradients\n   2. Relative membrane permeabilities\n• The textbook emphasizes that the ion with the greatest permeability has the strongest influence on Vm. At rest: PK:PNa:PCl=1:0.04:0.45\n• K⁺ therefore dominates.\n• However, increasing Na⁺ permeability increases the contribution of Na⁺ to the GHK calculation. Because: ENa≈+61 mV\n• increased Na⁺ permeability pulls Vm toward a more positive value.\n• Thus the membrane becomes less negative.\n• The textbook explicitly distinguishes the Nernst equation, which describes a single ion, from GHK, which incorporates multiple ions and their relative permeabilities.\n• The GHK equation predicts that increasing permeability to an ion pulls the membrane potential toward that ion's equilibrium potential.",
"w": [
"More Na⁺ permeability pulls Vm toward ENa, not EK.",
"Correct — raising Na⁺ permeability shifts Vm toward ENa (less negative).",
"Cl⁻ permeability is unchanged.",
"Vm depends on both gradients and permeabilities.",
"Na⁺ doesn't become dominant, and Vm doesn't go to zero."
],
"fig": [
"fp-p133",
"fp-p134"
],
"src": "r1"
},
{
"t": "Resting Membrane Potential",
"s": "A 31-year-old woman is undergoing experimental measurement of ion equilibrium potentials. Her intracellular and extracellular K⁺ concentrations are 140 mEq/L and 4 mEq/L, respectively. A toxin selectively increases the number of K⁺ leak channels but does not change intracellular or extracellular K⁺ concentrations. Which change is expected?",
"html": true,
"c": [
"EK becomes more negative",
"EK becomes more positive",
"EK remains unchanged, but K⁺ current can increase",
"EK becomes equal to ENa",
"EK becomes zero because permeability has increased"
],
"a": 2,
"se": "• C. EK remains unchanged, but K⁺ current can increase\n• The Nernst equation is: EK=61 log([K⁺]in / [K⁺]out)\n• Because the K⁺ concentrations have not changed, EK does not change.\n• Increasing the number of open K⁺ channels increases membrane permeability/conductance and therefore can increase the rate of K⁺ movement, but it does not alter the equilibrium potential itself.\n• The textbook explicitly states that the Nernst potential depends on the concentration ratio and temperature, not on the magnitude of permeability.\n• Changing ion permeability changes ion flux/current and the influence of that ion on Vm, but it does not change that ion's Nernst equilibrium potential unless its concentration gradient changes.",
"w": [
"EK depends only on the concentration ratio, which hasn't changed.",
"Same — EK doesn't move.",
"Correct — more channels mean more K⁺ current, but EK is unchanged.",
"EK and ENa depend on different ions' gradients.",
"Permeability doesn't set the equilibrium potential."
],
"fig": [
"fp-p115",
"fp-p138",
"fp-p139"
],
"src": "r1"
},
{
"t": "Resting Membrane Potential",
"s": "A 66-year-old man with severe heart failure is accidentally administered a drug that strongly inhibits the Na⁺/K⁺-ATPase in skeletal muscle cells. Initially, the cell's resting membrane potential becomes slightly less negative. Which mechanism best explains the direct electrical contribution of the inhibited pump?",
"html": true,
"c": [
"Reduced outward movement of K⁺ through leak channels",
"Loss of the pump's net outward movement of positive charge",
"Increased outward movement of Na⁺ through voltage-gated channels",
"Increased inward movement of Cl⁻ through ligand-gated channels",
"Increased active transport of Na⁺ out of the cell"
],
"a": 1,
"se": "• B. Loss of the pump's net outward movement of positive charge\n• The Na⁺/K⁺-ATPase normally transports: 3 Na⁺ → outside and 2 K⁺ → inside\n• Therefore, each cycle produces a net outward movement of one positive charge.\n• This is electrogenic and contributes directly to intracellular negativity.\n• The textbook estimates that this pump contribution shifts the membrane potential by approximately 4 mV, from approximately −86 mV to −90 mV.\n• When the pump is inhibited, this direct outward positive current is lost, causing the membrane potential to become somewhat less negative.\n• The Na⁺/K⁺-ATPase is electrogenic because it exports three Na⁺ for every two K⁺ imported, producing a net outward positive current.",
"w": [
"K⁺ leak continues; it isn't what the pump contributes.",
"Correct — the pump's 3 Na⁺ out / 2 K⁺ in moves one net positive charge out; losing it depolarizes slightly.",
"Na⁺ doesn't flow outward through channels.",
"Cl⁻ isn't involved.",
"Pump inhibition reduces active Na⁺ transport."
],
"fig": [
"fp-p142"
],
"src": "r1"
},
{
"t": "Body Fluids & Edema",
"s": "A 29-year-old man develops acute cellular swelling after prolonged ischemia of a limb. Laboratory analysis of affected skeletal muscle cells shows accumulation of intracellular Na⁺ and loss of normal ionic gradients. The cell membrane remains structurally intact. Which mechanism best explains the cellular swelling?",
"html": true,
"c": [
"Increased extracellular osmolarity causes water to leave the cell",
"Intracellular Na⁺ accumulation increases intracellular osmotic pressure and draws water inward",
"Increased intracellular K⁺ concentration decreases intracellular osmolarity",
"Increased plasma colloid osmotic pressure forces water into the cell",
"Reduced intracellular osmolarity causes water to enter the cell"
],
"a": 1,
"se": "• B. Intracellular Na⁺ accumulation increases intracellular osmotic pressure and draws water inward\n• Ischemia reduces ATP production.\n• Because the Na⁺/K⁺-ATPase requires ATP, ischemia causes pump failure: Ischemia → ATP depletion → Na⁺/K⁺-ATPase failure → intracellular Na⁺ accumulation\n• The increased intracellular concentration of osmotically active particles raises intracellular osmotic pressure.\n• Water consequently moves: ECF→ICF producing cellular swelling.\n• The textbook describes this sequence and emphasizes that intracellular swelling is an early manifestation of cell injury, particularly important in highly metabolically active tissues.\n• Na⁺/K⁺-ATPase failure causes intracellular Na⁺ accumulation, increasing intracellular osmotic pressure and producing cellular swelling.",
"w": [
"Water moves into, not out of, the swelling cells.",
"Correct — trapped Na⁺ raises intracellular osmolarity and water follows.",
"Intracellular K⁺ falls, not rises.",
"Plasma oncotic pressure doesn't push water into cells.",
"Intracellular osmolarity rises, not falls."
],
"fig": [
"fp-p145"
],
"src": "r1"
},
{
"t": "Membrane Transport",
"s": "A 58-year-old woman is treated with a drug that inhibits the Na⁺/K⁺-ATPase in cardiac myocytes. Several hours later, intracellular Na⁺ concentration increases. The patient subsequently develops increased intracellular Ca²⁺ concentration and enhanced cardiac contractility. Which mechanism best explains this effect?",
"html": true,
"c": [
"Increased Na⁺ gradient enhances Na⁺/Ca²⁺ exchange",
"Decreased Na⁺ gradient reduces the driving force for Na⁺/Ca²⁺ exchange",
"Increased K⁺ gradient reverses Ca²⁺ diffusion",
"Increased Na⁺/K⁺-ATPase activity increases intracellular Na⁺",
"Decreased intracellular Na⁺ increases Ca²⁺ entry through voltage-gated channels"
],
"a": 1,
"se": "• B. Decreased Na⁺ gradient reduces the driving force for Na⁺/Ca²⁺ exchange\n• Inhibition of the Na⁺/K⁺-ATPase causes intracellular Na⁺ to accumulate.\n• Normally, the Na⁺ gradient provides energy for the Na⁺/Ca²⁺ exchanger to remove Ca²⁺ from the cell.\n• Therefore: Na⁺/K⁺-ATPase inhibition → intracellular Na⁺ ↑ → transmembrane Na⁺ gradient ↓ → Na⁺/Ca²⁺ exchanger becomes less effective → intracellular Ca²⁺ ↑\n• In cardiac myocytes, increased intracellular Ca²⁺ availability can increase contractility.\n• The textbook specifically identifies this sequence in its discussion of digitalis/ouabain toxicity.\n• Na⁺/K⁺-ATPase inhibition raises intracellular Na⁺, reducing the Na⁺ gradient that drives Na⁺/Ca²⁺ exchange and thereby increasing intracellular Ca²⁺.",
"w": [
"The Na⁺ gradient is reduced, not increased.",
"Correct — a smaller Na⁺ gradient slows Ca²⁺ removal by NCX, so Ca²⁺ rises (the digoxin mechanism).",
"K⁺ doesn't reverse Ca²⁺ diffusion.",
"Pump activity is inhibited, not increased.",
"Intracellular Na⁺ rises, not falls."
],
"fig": [
"fp-p148"
],
"src": "r1"
},
{
"t": "Resting Membrane Potential",
"s": "A 44-year-old man undergoes an experimental procedure in which the intracellular concentration of Na⁺ is increased substantially while extracellular Na⁺ and K⁺ concentrations remain unchanged. Resting K⁺ and Na⁺ permeabilities are unchanged. The investigator wants to determine whether the resting membrane potential will remain near its normal value. Which principle most appropriately predicts the effect of the experimental manipulation?",
"html": true,
"c": [
"The Nernst potential for Na⁺ will become more positive because intracellular Na⁺ increased",
"The Nernst potential for K⁺ will become more positive because intracellular Na⁺ increased",
"The Nernst potential for Na⁺ will become less positive because the Na⁺ concentration gradient decreased",
"The resting membrane potential will necessarily become equal to EK",
"The resting membrane potential is independent of ion concentration gradients"
],
"a": 2,
"se": "• C. The Nernst potential for Na⁺ will become less positive because the Na⁺ concentration gradient decreased\n• Rationale\n• For Na⁺: ENa=61 log([Na⁺]out / [Na⁺]in)\n• If intracellular Na⁺ increases while extracellular Na⁺ remains constant, the ratio: [Na⁺]in[Na⁺]out decreases.\n• Therefore, ENa becomes less positive.\n• The textbook emphasizes that the Nernst potential depends on the concentration ratio across the membrane.\n• The actual resting membrane potential, however, is determined by multiple ions and their relative permeabilities through the GHK relationship. Therefore, changing intracellular Na⁺ will affect the Na⁺ equilibrium potential, but the overall change in Vm depends on Na⁺'s relatively small resting permeability compared with K⁺.\n• The Nernst potential depends on an individual ion's concentration ratio, whereas the actual resting membrane potential reflects the combined effects of multiple ions weighted by their membrane permeabilities.",
"w": [
"A smaller Na⁺ gradient makes ENa less positive.",
"Intracellular Na⁺ doesn't change EK.",
"Correct — ENa = 61 log([Na⁺]out/[Na⁺]in); a smaller ratio means a less positive ENa.",
"Vm reflects several ions weighted by permeability; it isn't forced to EK.",
"Vm depends on concentration gradients."
],
"fig": [
"fp-p115",
"fp-p138",
"fp-p139"
],
"src": "r1"
},
{
"t": "Resting Membrane Potential",
"s": "A 27-year-old man is participating in an electrophysiology study of a large peripheral motor axon. At rest, the intracellular concentration of K⁺ is 140 mEq/L and the extracellular concentration is 4 mEq/L. The membrane is approximately 100 times more permeable to K⁺ than to Na⁺. The resting membrane potential is approximately −90 mV. A researcher experimentally increases the membrane permeability to Na⁺ while leaving the K⁺ and Na⁺ concentration gradients unchanged. Which change in membrane potential is most likely to occur immediately after the increase in Na⁺ permeability?",
"html": true,
"c": [
"The membrane potential becomes more negative and approaches the K⁺ equilibrium potential",
"The membrane potential becomes less negative and shifts toward the Na⁺ equilibrium potential",
"The membrane potential remains unchanged because ion concentration gradients determine membrane voltage exclusively",
"The membrane potential becomes more negative because increased Na⁺ permeability increases Na⁺ efflux",
"The membrane potential becomes exactly 0 mV because Na⁺ and K⁺ concentrations become equal"
],
"a": 1,
"se": "• The resting membrane potential is determined by the relative permeability of multiple ions, not simply by their concentration gradients. At rest, the membrane is much more permeable to K⁺ than Na⁺, so Vm is close to the K⁺ equilibrium potential.\n• GHK equation incorporates both ion concentration and relative membrane permeability, with K⁺ dominating at rest because its permeability is approximately 100-fold greater than Na⁺.\n• When Na⁺ permeability increases:\n   1. Na⁺ has a strong inward electrochemical gradient.\n   2. More Na⁺ enters the cell.\n   3. Positive charge enters the cell.\n   4. Vm becomes less negative.\n   5. Vm shifts toward the Na⁺ equilibrium potential, approximately +65 mV.",
"w": [
"More Na⁺ permeability moves Vm away from EK.",
"Correct — Na⁺ enters and Vm shifts toward ENa (less negative).",
"Permeability, not just concentration, determines Vm.",
"Na⁺ moves inward and depolarizes; it doesn't flow outward.",
"The concentrations don't change, and Vm doesn't go to 0 mV."
],
"fig": [
"fp-p156"
],
"src": "r1"
},
{
"t": "Resting Membrane Potential",
"s": "A 34-year-old woman undergoes an experimental nerve conduction study. The membrane potential of an axon is −70 mV. The equilibrium potential for Na⁺ is +65 mV, and voltage-gated Na⁺ channels are open. The investigator calculates the electrochemical driving force using:<div style=\"text-align:center;margin:10px 0;font-size:1.05em\">I<sub>Na</sub> = g<sub>Na</sub>(V<sub>m</sub> − E<sub>Na</sub>)</div>Which of the following best describes the direction of Na⁺ movement and its effect on membrane potential?",
"html": true,
"c": [
"Na⁺ moves outward and hyperpolarizes the membrane",
"Na⁺ moves outward and depolarizes the membrane",
"Na⁺ moves inward and depolarizes the membrane",
"Na⁺ moves inward and hyperpolarizes the membrane",
"Na⁺ has no net movement because Vm is below ENa"
],
"a": 2,
"se": "• The driving force is:\n• Vm−ENa=(−70)−(+65)= −135 mV.\n• The large negative driving force indicates that Na⁺ is strongly driven into the cell.\n• When Vm < Eeq, cations such as Na⁺ enter the cell and drive membrane voltage toward their equilibrium potential.\n• Thus: Vm − ENa = negative → inward Na⁺ current → membrane depolarization.\n• The important distinction is that the magnitude of current depends on both driving force and conductance.",
"w": [
"Vm − ENa is negative, so the Na⁺ current is inward.",
"Na⁺ moves inward, not outward.",
"Correct — a negative driving force (−135 mV) means inward Na⁺ current and depolarization.",
"An inward cation current depolarizes the membrane.",
"Vm below ENa is exactly why Na⁺ moves inward."
],
"fig": [
"fp-p159",
"fp-p160"
],
"src": "r1"
},
{
"t": "Action Potentials & Conduction",
"s": "A 22-year-old man is undergoing experimental nerve stimulation. An action potential begins when the membrane reaches approximately −55 mV. Shortly afterward, the membrane potential rapidly rises to approximately +35 mV. A mutation selectively prevents rapid opening of voltage-gated Na⁺ activation gates while leaving K⁺ channels intact. Which change in the action potential is most likely to occur?",
"html": true,
"c": [
"Loss of the rapid depolarizing upstroke",
"Prolongation of the hyperpolarizing undershoot",
"Faster repolarization caused by increased Na⁺ entry",
"Normal depolarization followed by prolonged repolarization",
"Increased overshoot caused by enhanced K⁺ permeability"
],
"a": 0,
"se": "• The rapid upstroke of the neuronal action potential depends on voltage-gated Na⁺ channel activation.\n• Normally:\n   1. A stimulus depolarizes the membrane toward threshold.\n   2. Na⁺ activation gates open rapidly.\n   3. Na⁺ enters the cell.\n   4. Depolarization causes additional Na⁺ channels to open.\n   5. This creates positive feedback and the rapid upstroke.\n• The textbook identifies the rapid inward Na⁺ current as the mechanism responsible for the depolarizing upstroke. If Na⁺ activation gates cannot open, this regenerative cycle cannot occur.",
"w": [
"Correct — without rapid Na⁺ activation there's no regenerative Na⁺ influx, so no upstroke.",
"The undershoot is K⁺ dependent and isn't affected.",
"Na⁺ entry is decreased, not increased.",
"Depolarization itself is impaired.",
"Overshoot depends on Na⁺, not K⁺."
],
"fig": [
"fp-p163"
],
"src": "r1"
},
{
"t": "Action Potentials & Conduction",
"s": "A 29-year-old woman receives an experimental drug that prevents inactivation of voltage-gated Na⁺ channels. During an action potential, Na⁺ activation gates open normally, but the inactivation gates fail to close. Which change would most directly result from this drug?",
"html": true,
"c": [
"Premature termination of the depolarizing phase",
"Persistent Na⁺ conductance with delayed repolarization",
"Immediate hyperpolarization caused by excessive K⁺ entry",
"Complete loss of Na⁺ conductance during the action potential",
"Shortening of the absolute refractory period due to rapid Na⁺ recovery"
],
"a": 1,
"se": "• Voltage-gated Na⁺ channels have two functionally important gates. During depolarization, the activation gate opens rapidly, whereas the inactivation gate closes more slowly.\n• The textbook identifies Na⁺ channel inactivation as an essential mechanism that terminates the inward Na⁺ current and allows repolarization to proceed.\n• If the inactivation gate fails to close:\n   1. Na⁺ channels remain available for inward current.\n   2. Inward positive charge continues entering.\n   3. The membrane remains depolarized.\n   4. K⁺-mediated repolarization becomes less effective.\n   5. The action potential is prolonged",
"w": [
"Depolarization lasts longer, not shorter.",
"Correct — Na⁺ current persists, so repolarization is delayed.",
"K⁺ moves outward and this drug doesn't affect it.",
"Na⁺ conductance continues rather than being lost.",
"Without inactivation, the refractory period is prolonged, not shortened."
],
"fig": [
"fp-p166"
],
"src": "r1"
},
{
"t": "Action Potentials & Conduction",
"s": "A 41-year-old man receives an experimental drug that selectively blocks voltage-gated K⁺ channels in peripheral motor axons. Sodium channels activate and inactivate normally. Following stimulation, the membrane rapidly depolarizes but remains near a positive membrane potential for substantially longer than normal. Which change best explains this patient's prolonged action potential?",
"html": true,
"c": [
"Persistent inward Na⁺ current caused by failure of Na⁺ activation",
"Reduced outward K⁺ current during repolarization",
"Increased outward Na⁺ current during the overshoot",
"Increased K⁺ conductance during the resting state",
"Premature closure of Na⁺ activation gates"
],
"a": 1,
"se": "• Voltage-gated K⁺ channels are activated with a delay following depolarization. Their opening produces outward K⁺ current, which is a major mechanism of repolarization.\n• The textbook describes K⁺ channel activation as delayed and emphasizes that outward K⁺ current restores the membrane potential toward its resting level.\n• Blocking these channels therefore causes:\n• ↓ K⁺ conductance → ↓ outward K⁺ current → delayed repolarization → prolonged action potential.",
"w": [
"Na⁺ activation is normal; the problem is repolarization.",
"Correct — less outward K⁺ current slows repolarization and prolongs the AP.",
"Na⁺ moves inward, not outward.",
"K⁺ conductance is blocked, not increased.",
"Na⁺ gates behave normally."
],
"fig": [
"fp-p169"
],
"src": "r1"
},
{
"t": "Action Potentials & Conduction",
"s": "A 36-year-old woman undergoes a nerve conduction experiment in which two identical suprathreshold stimuli are delivered to the same axon. The second stimulus is delivered during the peak of the first action potential. Even though the second stimulus is several times stronger than the first, it fails to produce another action potential. Which mechanism best explains this observation?",
"html": true,
"c": [
"Persistent elevation of K⁺ conductance during the undershoot",
"Failure of the Na⁺ concentration gradient to exist",
"Inactivation of voltage-gated Na⁺ channels",
"Increased membrane resistance preventing current spread",
"Closure of all K⁺ leak channels"
],
"a": 2,
"se": "• The stimulus is delivered during the absolute refractory period, when no second action potential can be generated regardless of stimulus strength. The key mechanism is voltage-gated Na⁺ channel inactivation. During this state, the inactivation gate is closed and the channel cannot reopen until adequate repolarization occurs. Depolarization → Na⁺ channel inactivation → channels unavailable → second AP impossible. This mechanism also contributes to the unidirectional propagation of action potentials.",
"w": [
"The undershoot comes later, and that would be the relative, not absolute, refractory period.",
"The Na⁺ gradient is still present.",
"Correct — in the absolute refractory period Na⁺ channels are inactivated, so no stimulus can fire another AP.",
"Membrane resistance isn't what blocks a second AP.",
"K⁺ leak channels don't close."
],
"fig": [
"fp-p172"
],
"src": "r1"
},
{
"t": "Action Potentials & Conduction",
"s": "A 55-year-old man develops progressive numbness and weakness due to a demyelinating disorder affecting peripheral axons. Electrophysiologic testing shows markedly reduced conduction velocity. Compared with a normal myelinated axon, the affected region has reduced membrane resistance and increased membrane capacitance. Which change most directly explains the slowing of conduction?",
"html": true,
"c": [
"Increased local current leakage and reduced distance constant",
"Reduced current leakage and increased distance constant",
"Increased membrane resistance and reduced capacitance",
"Reduced internal resistance caused by loss of myelin",
"Increased saltatory conduction between adjacent nodes"
],
"a": 0,
"se": "• Myelin normally functions as an electrical insulator. It increases membrane resistance and decreases membrane capacitance.\n• Therefore, reducing Rm decreases λ. Current leaks through the demyelinated membrane rather than traveling efficiently down the axon.\n• The textbook specifically describes demyelination as causing decreased Rm, increased Cm, reduced local-current spread, and failure to reach threshold at the next node.",
"w": [
"Correct — lower Rm lets current leak out, shortening λ and slowing conduction.",
"Demyelination increases leakage and decreases λ.",
"Resistance falls and capacitance rises with demyelination.",
"Internal resistance isn't the main change.",
"Saltatory conduction fails rather than increasing."
],
"fig": [
"fp-p175",
"fp-p176"
],
"src": "r1"
},
{
"t": "Resting Membrane Potential",
"s": "A 48-year-old man with renal dysfunction develops severe generalized muscle weakness. Laboratory testing reveals a serum K⁺ concentration of 6.8 mEq/L. His skeletal muscle membrane potential is less negative than normal. Despite the depolarization, action- potential generation becomes impaired. Which mechanism best explains the patient's muscle weakness?",
"html": true,
"c": [
"Hyperkalemia increases K⁺ efflux and produces membrane hyperpolarization",
"Hyperkalemia increases Na⁺ entry and keeps Na⁺ channels continuously available",
"Hyperkalemia reduces the K⁺ concentration gradient and causes sustained depolarization with Na⁺ channel inactivation",
"Hyperkalemia increases extracellular Ca²⁺ and shifts Na⁺ threshold to more positive values",
"Hyperkalemia directly blocks voltage-gated K⁺ channels and prevents repolarizatio"
],
"a": 2,
"se": "• The intracellular K⁺ concentration is normally much greater than extracellular K⁺. This concentration gradient promotes K⁺ efflux and contributes substantially to the negative resting membrane potential. When extracellular K⁺ increases:\n   1. The K⁺ concentration gradient decreases.\n   2. The equilibrium potential for K⁺ becomes less negative.\n   3. The resting membrane potential becomes less negative.\n   4. Persistent depolarization keeps voltage-gated Na⁺ channels in an inactivated state.\n   5. Fewer Na⁺ channels are available to generate action potentials.\n   6. Muscle contraction becomes impaired, producing weakness.",
"w": [
"Hyperkalemia depolarizes rather than hyperpolarizes the membrane.",
"Na⁺ channels become inactivated, not more available.",
"Correct — a smaller K⁺ gradient means sustained depolarization, inactivated Na⁺ channels and weakness.",
"Hyperkalemia doesn't raise extracellular Ca²⁺.",
"K⁺ doesn't block K⁺ channels."
],
"fig": [
"fp-p179"
],
"src": "r1"
},
{
"t": "Action Potentials & Conduction",
"s": "A 19-year-old woman presents with perioral tingling, painful muscle spasms, and carpopedal tetany after developing severe hypocalcemia. Her serum calcium concentration is markedly decreased. Nerve conduction studies demonstrate spontaneous repetitive firing of peripheral nerves. Which change in neuronal membrane excitability best explains her symptoms?",
"html": true,
"c": [
"The threshold for Na⁺ channel activation becomes more negative",
"The threshold for Na⁺ channel activation becomes more positive",
"The K⁺ equilibrium potential becomes markedly more positive",
"Voltage-gated Na⁺ channels remain permanently inactivated",
"Increased membrane capacitance prevents neuronal depolarization"
],
"a": 0,
"se": "• Extracellular Ca²⁺ contributes to stabilization of excitable membranes.\n• When extracellular Ca²⁺ decreases, voltage-gated Na⁺ channels become easier to activate. Thus, a smaller depolarizing stimulus is sufficient to reach threshold.\n• The sequence is:\n• ↓ extracellular Ca²⁺ → Na⁺ channel activation threshold shifts negatively → increased neuronal excitability → spontaneous/repetitive firing → tetany.\n• The textbook describes hypocalcemia as shifting Na⁺ channel activation toward smaller depolarizations and causing neuromuscular hyperexcitability.",
"w": [
"Correct — low Ca²⁺ lowers the activation threshold, causing hyperexcitability and tetany.",
"That fits hypercalcemia (membrane stabilization).",
"EK isn't markedly changed by Ca²⁺.",
"Channels fire excessively rather than staying inactivated.",
"Capacitance isn't the issue."
],
"fig": [
"fp-p182"
],
"src": "r1"
},
{
"t": "Action Potentials & Conduction",
"s": "A 62-year-old man with a demyelinating disorder undergoes nerve conduction testing. An experimental measurement shows that membrane resistance of an affected axonal segment has decreased substantially. The investigator compares two otherwise identical axons and injects the same amount of current into each. Which change in the demyelinated axon is most likely to occur?",
"html": true,
"c": [
"Increased length constant with less decay of local potential",
"Decreased length constant with greater decay of local potential",
"Increased time constant caused by increased membrane resistance",
"Increased conduction velocity because current crosses the membrane more easily",
"Increased saltatory conduction because more membrane is exposed"
],
"a": 1,
"se": "• The length constant is approximately: λ = √(rm / ri), where rm is membrane resistance and ri is internal (axial) resistance.\n• A lower length constant means that local electrical current decays more rapidly as it travels along the axon.\n• In myelinated axons, high membrane resistance prevents current from leaking through the membrane, allowing depolarizing current to spread to the next node. The textbook describes demyelination as decreasing membrane resistance — increasing current leakage, decreasing λ, and potentially causing failure to reach threshold at the next node.",
"w": [
"Lower Rm decreases λ, not increases it.",
"Correct — λ = √(rm/ri); lower rm means a shorter λ and faster decay of local current.",
"Lower Rm shortens the time constant (τ = Rm·Cm).",
"Conduction slows when current leaks out.",
"Saltatory conduction requires myelin."
],
"fig": [],
"src": "r1"
},
{
"t": "Body Fluids & Edema",
"s": "<b>Body Fluid Compartments</b><br>A 70-kg adult man is evaluated. Which of the following best represents the approximate total body water (TBW) content in this individual?",
"html": true,
"c": [
"21 liters",
"35 liters",
"42 liters",
"50 liters",
"60 liters"
],
"a": 2,
"e": "Total body water is about 60% of body weight in an average adult man. 70 kg × 0.60 = 42 kg of water, and since 1 kg of water is about 1 liter, that is about 42 liters. The classic split is two-thirds inside cells (intracellular fluid, about 28 L) and one-third outside cells (extracellular fluid, about 14 L). Of the extracellular third, roughly three-quarters is interstitial fluid (around the cells) and one-quarter is plasma (about 3 L).",
"w": [
"21 L is only 30% of body weight — far too low for any healthy adult. (Don't confuse it with the extracellular volume, which is about 14 L.)",
"35 L is 50% of body weight — closer to an adult woman or an elderly person, who carry relatively more fat and less water.",
"Correct — Total body water ≈ 60% of body weight → 70-kg man ≈ 42 L (≈ 28 L inside cells, ≈ 14 L outside cells).",
"50 L is about 71% of body weight — too high for an adult; percentages that high are seen in newborns.",
"60 L would be about 86% of body weight — not physiologically possible."
],
"src": "cls"
},
{
"t": "Body Fluids & Edema",
"s": "<b>Fluid Compartment Composition</b><br>Which of the following statements accurately describes the major ionic composition of intracellular fluid (ICF) compared to extracellular fluid (ECF)?",
"html": true,
"c": [
"ICF has high sodium and chloride concentrations, similar to ECF.",
"ICF has high potassium, magnesium, protein, and organic phosphate concentrations.",
"ICF is less acidic and has a higher pH than ECF.",
"ICF has a fourfold higher calcium concentration than ECF.",
"ICF and ECF have identical ionic compositions due to rapid exchange across cell membranes."
],
"a": 1,
"e": "The fluid inside cells is dominated by potassium (about 140 mEq/L), magnesium, proteins, and organic phosphates (such as ATP). The fluid outside cells is dominated by sodium, chloride, and bicarbonate. The sodium–potassium pump keeps this separation going: it pushes 3 sodium out and brings 2 potassium in with every cycle, and cell membranes are only slightly leaky to these ions.",
"w": [
"High sodium and chloride describes the fluid outside cells, not inside.",
"Correct — Inside cells: potassium, magnesium, phosphates, proteins. Outside cells: sodium, chloride, bicarbonate.",
"The inside of a cell is slightly more acidic (pH about 7.0–7.2) than the fluid outside (pH about 7.4), because cell metabolism constantly produces acid.",
"Free calcium inside cells is kept roughly 10,000 times lower than outside, not higher. That steep gradient is what lets small calcium entries act as signals.",
"Only water crosses cell membranes freely. Ions are held in very different concentrations by pumps and by selective membrane permeability."
],
"src": "cls"
},
{
"t": "Body Fluids & Edema",
"s": "<b>Measurement of Fluid Volumes</b><br>A researcher wants to measure the volume of the extracellular fluid (ECF) compartment. Which of the following substances would be most appropriate for this measurement using the indicator dilution method?",
"html": true,
"c": [
"Radioactive water (tritium)",
"Evans blue dye (T-1824)",
"Antipyrine",
"Inulin",
"Radioactive chromium (51Cr)-labeled red blood cells"
],
"a": 3,
"e": "To measure a compartment, you need a marker that spreads evenly through that compartment and nowhere else. Inulin (a plant sugar polymer) passes through capillary walls into the fluid around cells, but it cannot cross cell membranes → it spreads through plasma plus interstitial fluid = the whole extracellular fluid. Other extracellular markers include radioactive sodium, radioactive chloride, iothalamate, and thiosulfate.",
"w": [
"Tritiated (radioactive) water behaves like water, so it spreads into every compartment → it measures total body water.",
"Evans blue binds tightly to plasma albumin, which stays inside blood vessels → it measures plasma volume only.",
"Antipyrine is fat-soluble, crosses cell membranes easily → total body water.",
"Correct — Inulin → extracellular fluid. Tritiated water / antipyrine → total body water. Evans blue / labeled albumin → plasma. Chromium-labeled red cells → red cell volume.",
"Labeled red blood cells stay in the circulation → they measure red cell volume (and let you calculate blood volume)."
],
"src": "cls"
},
{
"t": "Body Fluids & Edema",
"s": "<b>Osmolarity Definition</b><br>A solution is found to have a concentration of 310 mOsm/L. This value specifically refers to the solution's:",
"html": true,
"c": [
"Tonicity",
"Osmotic pressure",
"Reflection coefficient",
"Osmolarity",
"Hydration index"
],
"a": 3,
"e": "Osmolarity is the number of osmotically active particles (osmoles) per liter of solution, so its unit is milliosmoles per liter (mOsm/L). The unit in the question gives it away. Osmolality, by contrast, is per kilogram of water (mOsm/kg H₂O). In body fluids the two are nearly the same number.",
"w": [
"Tonicity describes how a solution compares to a cell (hypotonic, isotonic, hypertonic) based on solutes that cannot cross the membrane — it is a comparison, not a value with a unit.",
"Osmotic pressure is a pressure, measured in mm Hg. Each 1 mOsm/L produces about 19.3 mm Hg at body temperature.",
"The reflection coefficient is a unitless number from 0 to 1 describing how well a membrane blocks a solute.",
"Correct — mOsm/L = osmolarity (per liter of solution). mOsm/kg water = osmolality.",
"\"Hydration index\" is not a standard physiology term."
],
"src": "cls"
},
{
"t": "Body Fluids & Edema",
"s": "<b>Tonicity and Water Flow</b><br>A patient receives an intravenous solution that is hypotonic relative to their plasma. What is the immediate physiological consequence of this infusion regarding fluid shifts?",
"html": true,
"c": [
"Water will flow from the patient's cells into the extracellular fluid.",
"Water will flow from the extracellular fluid into the patient's cells.",
"There will be no net movement of water because the solutions are isotonic.",
"The patient's extracellular fluid volume will decrease, and osmolarity will increase.",
"The patient's red blood cells will shrink due to water loss."
],
"a": 1,
"e": "Hypotonic fluid enters the blood → the fluid outside cells becomes more dilute → the inside of the cells is now relatively more concentrated → water moves into the cells (water always moves toward the higher solute concentration) → cells swell until the concentrations inside and outside are equal again. End result: both compartments gain volume and both end up a bit more dilute.",
"w": [
"Water moving out of cells happens with a hypertonic infusion, not a hypotonic one.",
"Correct — Hypotonic outside → water moves into cells → cells swell.",
"The question says the solution is hypotonic, not isotonic, so there is a concentration difference to drive water movement.",
"This is backwards: extracellular volume increases and its osmolarity decreases.",
"Red cells swell (and can even burst) in hypotonic fluid; they shrink in hypertonic fluid."
],
"src": "cls"
},
{
"t": "Body Fluids & Edema",
"s": "<b>Clinical Abnormality - Hyponatremia</b><br>A patient presents with symptoms of headache, nausea, and lethargy. Laboratory tests reveal a plasma sodium concentration of 118 mEq/L (normal ~142 mEq/L). This condition is most likely to cause:",
"html": true,
"c": [
"Cell shrinkage due to water movement out of cells.",
"Increased plasma colloid osmotic pressure.",
"Intracellular edema, particularly in brain cells.",
"Decreased total body water with no change in osmolarity.",
"Increased interstitial fluid hydrostatic pressure."
],
"a": 2,
"e": "Sodium is the main solute outside cells, so low plasma sodium = dilute extracellular fluid → water moves into cells → cells swell (intracellular edema). The brain is trapped in a rigid skull, so brain-cell swelling raises pressure inside the head → headache, nausea, lethargy, and at worse levels seizures, coma, and death. Correcting it too fast is also dangerous: it can damage the insulation around brain nerve fibers (osmotic demyelination).",
"w": [
"Cells shrink when the outside fluid is too concentrated (high sodium), not too dilute.",
"Colloid osmotic pressure comes from plasma proteins, not sodium. If anything, diluted plasma slightly lowers it.",
"Correct — Low sodium → dilute outside fluid → water into cells → brain swelling → headache, nausea, confusion, seizures.",
"Osmolarity is clearly low here — sodium is the main determinant of plasma osmolarity. Total body water is often normal or increased.",
"The problem is water moving into cells, not a buildup of pressure in the fluid around cells."
],
"src": "cls"
},
{
"t": "Body Fluids & Edema",
"s": "<b>Edema Classification</b><br>A patient with severe liver cirrhosis develops swelling in their abdominal cavity, identified as ascites. This condition represents an accumulation of excess fluid primarily within which compartment?",
"html": true,
"c": [
"Intracellular fluid",
"Plasma volume",
"Transcellular fluid (a potential space within ECF)",
"Blood volume",
"Solid tissue matrix"
],
"a": 2,
"e": "Ascites is fluid in the peritoneal cavity. The peritoneal cavity is a \"potential space\" — normally just a thin film of fluid between two membrane layers. Fluid in these spaces is called transcellular fluid and counts as a small, specialized part of the extracellular fluid (others: pleural, pericardial, joint, eye, and cerebrospinal fluid). In cirrhosis, high pressure in the portal vein + low albumin (the scarred liver makes less of it) + salt retention by the kidneys → fluid leaks into the abdomen. Fluid collecting in a potential space is called an effusion.",
"w": [
"The fluid is outside cells, in a body cavity.",
"The fluid has left the blood vessels; plasma volume is often actually reduced in these patients.",
"Correct — Ascites, pleural effusion, pericardial effusion = fluid in potential spaces = transcellular fluid (part of extracellular fluid).",
"Blood volume = plasma + blood cells, which stay inside vessels.",
"This is not a fluid compartment."
],
"src": "cls"
},
{
"t": "Body Fluids & Edema",
"s": "<b>Safety Factors Against Edema</b><br>Which of the following represents a significant safety factor that normally prevents the development of marked edema?",
"html": true,
"c": [
"Increased compliance of the interstitium at negative interstitial fluid pressures.",
"Decreased lymph flow from the interstitial spaces.",
"Increased interstitial fluid protein concentration.",
"A combined safety factor of approximately 17 mm Hg against capillary pressure increases.",
"Cell membranes becoming impermeable to water during fluid shifts."
],
"a": 3,
"e": "Three built-in protections stop small increases in capillary pressure from causing edema, and together they add up to about 17 mm Hg: (1) low compliance (stiffness) of the tissue space while its pressure is negative — about 3 mm Hg; (2) lymph flow can increase 10- to 50-fold to carry away extra fluid — about 7 mm Hg; (3) protein \"washdown\": extra fluid entering the tissue dilutes and flushes out tissue proteins, lowering their pull on water — about 7 mm Hg. So capillary pressure can rise roughly 17 mm Hg before obvious edema appears.",
"w": [
"The protection comes from low compliance (the tissue is stiff while its pressure is negative, so pressure rises quickly and resists more filtration). Once pressure turns positive, compliance rises sharply and edema develops.",
"Lymph flow increases, not decreases, as a safety factor.",
"Tissue protein concentration decreases (washdown), which reduces the pull on water into the tissue.",
"Correct — Safety factors against edema ≈ 17 mm Hg total: stiff tissue at negative pressure (3) + more lymph flow (7) + protein washdown (7).",
"Cell membranes stay freely permeable to water."
],
"src": "cls"
},
{
"t": "Body Fluids & Edema",
"s": "<b>Fluid Shift Scenario - Isotonic Saline Infusion</b><br>A patient receives an intravenous infusion of isotonic 0.9% sodium chloride solution. According to the principles of body fluid shifts, what is the expected outcome immediately after infusion and osmotic equilibrium?",
"html": true,
"c": [
"ECF volume decreases, and ICF volume increases due to water shift.",
"ECF volume increases, and both plasma protein concentration and hematocrit decrease.",
"ECF and ICF osmolarities both increase.",
"ICF volume decreases, while ECF volume increases, with no change in osmolarity.",
"Both plasma protein concentration and hematocrit increase due to concentration."
],
"a": 1,
"e": "Isotonic saline has the same concentration as body fluid, and its sodium is kept out of cells by the pump → it stays entirely outside cells → extracellular volume goes up, osmolarity does not change → no reason for water to move → cell volume unchanged. The added fluid dilutes the blood, so plasma protein concentration and hematocrit (percent red cells) both fall. This is isosmotic volume expansion. About one-quarter of the saline stays in the plasma and three-quarters moves into the tissue spaces.",
"w": [
"Extracellular volume goes up, not down, and there is no water shift into cells.",
"Correct — Isotonic saline → stays outside cells → extracellular volume up, no osmolarity change, no shift; protein and hematocrit diluted down.",
"Isotonic fluid doesn't change osmolarity.",
"No osmolarity change → no water leaves cells → cell volume is unchanged.",
"Dilution lowers both, it doesn't concentrate them."
],
"src": "cls"
},
{
"t": "Body Fluids & Edema",
"s": "<b>Total Body Water Variation</b><br>Which of the following factors is inversely proportional to total body water (TBW) content?",
"html": true,
"c": [
"Age",
"Sex (female)",
"Body fat content",
"Lean muscle mass",
"Hydration status"
],
"a": 2,
"e": "Fat tissue holds very little water (roughly 10–20%), while muscle is about 75% water. So the more of your weight that is fat, the lower your percent body water. This is also why women (more body fat on average) and elderly people (less muscle, more fat) have lower percent body water, and why a lean athlete has more.",
"w": [
"Percent body water does fall with age, so this is tempting — but that fall is mostly caused by the shift from muscle to fat. Body fat is the direct, classic inverse determinant.",
"Women do have lower percent body water, but that is explained by higher average body fat; sex is also a category, not a quantity that can be \"inversely proportional.\"",
"Correct — More fat → less body water (%). Women and the elderly have lower percent body water because they carry relatively more fat.",
"Muscle is water-rich, so more muscle means more body water (direct relationship).",
"Better hydration means more body water (direct relationship)."
],
"src": "cls"
},
{
"t": "Body Fluids & Edema",
"s": "<b>Indicator Dilution Method - Principle</b><br>In the indicator dilution method for measuring body fluid compartment volumes, which of the following is a crucial characteristic required for the indicator substance?",
"html": true,
"c": [
"It must rapidly attach to red blood cells.",
"It must be freely metabolized by the body.",
"It must not penetrate the cellular membrane of the target compartment.",
"It must selectively remain within the intracellular fluid.",
"It must only permeate into interstitial fluid, not plasma."
],
"a": 2,
"e": "Principle: Volume = amount of indicator injected ÷ concentration after it has mixed (minus any excreted or metabolized). For that to work, the indicator must spread evenly throughout the compartment being measured and must stay within it. Choice C expresses this: an extracellular marker like inulin must not get into cells, or it would \"see\" more volume than the extracellular space actually has. It must also not be metabolized and should be non-toxic.",
"w": [
"Attaching to red cells is only what you want if you're specifically measuring red cell volume (for example, chromium-51).",
"The indicator must NOT be metabolized — if the body broke it down, the concentration would drop and the volume would be overestimated.",
"Correct — Volume = amount injected ÷ concentration after mixing. The indicator must stay in (and spread evenly through) only the compartment being measured, and must not be metabolized.",
"No indicator stays only inside cells. Intracellular volume can't be measured directly; it is calculated as total body water minus extracellular fluid.",
"The indicator is injected into the blood, so it must spread through the plasma; an extracellular marker spreads into both plasma and interstitial fluid."
],
"src": "cls"
},
{
"t": "Body Fluids & Edema",
"s": "<b>Osmotic Coefficient and Osmotic Pressure</b><br>In calculating the osmotic pressure of a physiological solution using the van't Hoff equation, a correction factor known as the osmotic coefficient is sometimes used. What is the approximate osmotic coefficient for sodium chloride (NaCl) in physiological solutions, as mentioned in the sources?",
"html": true,
"c": [
"0.5",
"0.75",
"0.93",
"1.0",
"1.25"
],
"a": 2,
"e": "In theory each NaCl dissociates fully into 2 independent particles. In reality, the sodium and chloride ions attract each other slightly, so they don't behave as fully independent particles. The osmotic coefficient corrects for this: about 0.93 for NaCl. That means 1 mmol/L of NaCl acts like about 1.86 mOsm/L instead of 2. Using the van't Hoff relationship (π = CRT), each 1 mOsm/L produces about 19.3 mm Hg at body temperature, so plasma's total osmotic pressure is roughly 5,400–5,500 mm Hg after correction.",
"w": [
"Far too low — this would mean the ions barely act independently at all.",
"Too low for NaCl in physiological solutions.",
"Correct — Osmotic coefficient of NaCl ≈ 0.93; 1 mOsm/L ≈ 19.3 mm Hg of osmotic pressure.",
"1.0 is the ideal value, assuming no ion–ion attraction; real solutions fall a little short.",
"The coefficient for NaCl doesn't exceed 1."
],
"src": "cls"
},
{
"t": "Body Fluids & Edema",
"s": "<b>Fluid Balance - Insensible Water Loss</b><br>Which of the following represents a significant component of \"insensible water loss\" under normal conditions?",
"html": true,
"c": [
"Water loss through sweat during heavy exercise.",
"Water loss in feces due to severe diarrhea.",
"Water evaporation from the respiratory tract and diffusion through the skin.",
"Water loss via urination as regulated by the kidneys.",
"Water synthesis through carbohydrate oxidation."
],
"a": 2,
"e": "\"Insensible\" means you can't feel it or consciously control it. It totals about 700 mL per day: about 300–400 mL evaporates from the airways (air you breathe out is saturated with water vapor) and about 300–400 mL diffuses through the skin — this is not sweat. Breathing cold, dry air increases respiratory loss; burns remove the skin's barrier and can increase skin loss up to tenfold.",
"w": [
"Sweat is a sensible loss — you can see and feel it. Normally about 100 mL per day, but heavy exercise can push it to 1–2 L per hour.",
"Feces normally carry only about 100 mL per day; diarrhea is an abnormal, sensible loss.",
"Correct — Insensible loss ≈ 700 mL/day = breathing out water vapor + water diffusing through skin (not sweat).",
"Urine is the main regulated route of water loss — the opposite of insensible.",
"Burning carbohydrates makes water (about 200 mL per day of \"metabolic water\") — that is a gain, not a loss."
],
"src": "cls"
},
{
"t": "Body Fluids & Edema",
"s": "<b>Hypernatremia Pathophysiology</b><br>A patient with diabetes insipidus, characterized by the inability of the kidneys to secrete ADH, is at risk for developing hypernatremia. The primary mechanism leading to hypernatremia in this condition is:",
"html": true,
"c": [
"Excessive sodium retention by the kidneys.",
"Primary loss of water from the extracellular fluid.",
"Increased plasma colloid osmotic pressure.",
"Water shift from ECF to ICF.",
"Intracellular edema"
],
"a": 1,
"e": "Antidiuretic hormone (ADH) makes the kidney's collecting ducts permeable to water so water can be reabsorbed. Without ADH effect → collecting ducts stay watertight → large volumes of very dilute urine → the body loses pure water → the remaining sodium becomes more concentrated (high sodium) → water is pulled out of cells → cells shrink. Patients are very thirsty, and as long as they can drink enough they often keep sodium near normal.",
"w": [
"The sodium goes up because water is lost, not because extra sodium is kept. (Sodium-retention hypernatremia is seen with excess aldosterone, and it is usually mild.)",
"Correct — Diabetes insipidus → no ADH effect → pure water lost in urine → high sodium → cells shrink.",
"Colloid osmotic pressure is from plasma proteins and isn't the mechanism here.",
"Water shifts the other way — from inside cells to outside — because the outside becomes more concentrated.",
"Cells shrink in high-sodium states; they swell in low-sodium states."
],
"src": "cls",
"key": "Note: the stem says the kidneys can't secrete ADH. ADH is actually made in the hypothalamus and released from the posterior pituitary — central DI is a lack of ADH, nephrogenic DI is kidneys not responding to it. The stem is kept word for word; the answer is the same either way."
},
{
"t": "Body Fluids & Edema",
"s": "<b>Pitting Edema</b><br>A patient's leg swelling is described as \"pitting edema.\" This clinical finding indicates:",
"html": true,
"c": [
"The edema is caused primarily by intracellular fluid accumulation.",
"The tissue fluid is clotted with fibrinogen, preventing displacement.",
"There is significant accumulation of free fluid in the interstitial spaces.",
"Lymphatic drainage is completely intact and functioning normally.",
"The interstitial fluid hydrostatic pressure is still in the negative range."
],
"a": 2,
"e": "Normally, fluid around cells is trapped in a gel. Once pressure in the tissue space turns positive, excess free (unbound) fluid collects. Pressing a finger into the skin pushes that free fluid away into nearby tissue → a dent (pit) that stays for several seconds until the fluid flows back. So a pit means there's free fluid in the tissue spaces. Edema that doesn't pit happens when cells themselves are swollen, or when the tissue fluid is clotted with fibrinogen and can't be pushed aside.",
"w": [
"Swollen cells don't pit — the water is locked inside cells.",
"Clotted, fibrinogen-rich fluid causes non-pitting edema.",
"Correct — Pitting = free fluid in the tissue spaces (tissue pressure has turned positive). Non-pitting = swollen cells or clotted fluid.",
"Pitting says nothing reassuring about lymph drainage; lymph blockage can itself cause edema that pits early on.",
"Pitting only appears once the tissue pressure has risen into the positive range."
],
"src": "cls"
},
{
"t": "Body Fluids & Edema",
"s": "<b>Blood Volume Components</b><br>In an adult, blood is described as a separate fluid compartment. Which of the following statements about blood volume components is correct?",
"html": true,
"c": [
"Blood volume averages 10% of body weight.",
"Approximately 80% of blood is plasma, and 20% is red blood cells.",
"Hematocrit represents the percentage of red blood cells in blood.",
"Plasma and interstitial fluid have identical protein concentrations.",
"Blood volume can be directly measured by subtracting interstitial fluid volume from extracellular fluid volume."
],
"a": 2,
"e": "Hematocrit is the fraction of blood made up of red cells, measured by spinning blood in a tube. Normal values are about 40% in men and 36% in women. Blood volume is about 7% of body weight (about 5 L in a 70-kg adult), made up of roughly 60% plasma and 40% red cells.",
"w": [
"Blood is about 7% of body weight, not 10%.",
"The split is about 60% plasma and 40% red cells.",
"Correct — Blood ≈ 7% of body weight (≈ 5 L); ≈ 60% plasma / 40% red cells; hematocrit = % red cells.",
"Plasma has much more protein (about 7 g/dL) than interstitial fluid (about 2 g/dL), because capillary walls hold most proteins back. That protein difference is what creates plasma colloid osmotic pressure.",
"Extracellular fluid minus interstitial fluid would equal plasma, not blood — and interstitial fluid can't be measured directly anyway; it is calculated as extracellular fluid minus plasma. Blood volume is calculated as plasma volume ÷ (1 − hematocrit)."
],
"src": "cls"
},
{
"t": "Homeostasis & Control Systems",
"s": "Which of the following statements best defines the science of physiology?",
"html": true,
"c": [
"The study of the gross and microscopic structures of living organisms.",
"The scientific discipline focused on the physical and chemical mechanisms responsible for the origin, development, and progression of life.",
"The field of medicine dedicated to diagnosing and treating diseases based on anatomical changes.",
"The branch of biology that classifies organisms based on evolutionary relationships.",
"The study of how genetic information is inherited and expressed."
],
"a": 1,
"e": "Physiology asks how living things work — the physical and chemical mechanisms behind life, from how cells make energy to how the whole body keeps blood pressure steady. Human physiology focuses on how the human body's organs and systems work together to keep us alive.",
"w": [
"That is anatomy (gross structures) and histology (microscopic structures) — structure, not function.",
"Correct — Anatomy = structure. Physiology = function (the physical and chemical mechanisms of life).",
"That describes clinical pathology / medicine.",
"That is taxonomy / phylogenetics.",
"That is genetics."
],
"src": "cls"
},
{
"t": "Homeostasis & Control Systems",
"s": "The concept of the \"internal environment,\" or milieu intérieur, introduced by Claude Bernard, primarily refers to which body fluid compartment?",
"html": true,
"c": [
"Intracellular fluid",
"Blood plasma",
"Interstitial fluid",
"Cerebrospinal fluid",
"Extracellular fluid"
],
"a": 4,
"e": "Claude Bernard, a 19th-century French physiologist, pointed out that the body's cells don't live in the outside world — they live bathed in the fluid outside cells. That extracellular fluid, constantly mixed by the circulation between plasma and tissue fluid, supplies every cell with oxygen, nutrients, and ions and carries away waste. Keeping it stable is the whole point of homeostasis.",
"w": [
"Intracellular fluid is inside cells — it isn't the environment surrounding them.",
"Plasma is only one part of the extracellular fluid.",
"Interstitial fluid is also only one part of the extracellular fluid; the internal environment includes both it and plasma.",
"Cerebrospinal fluid is a small, specialized transcellular fluid.",
"Correct — Internal environment (milieu intérieur) = extracellular fluid."
],
"src": "cls"
},
{
"t": "Homeostasis & Control Systems",
"s": "A patient's core body temperature rises significantly due to an infection, triggering a cascade of responses such as sweating and vasodilation to cool the body down. This process of maintaining relatively constant conditions in the internal environment, despite internal or external changes, is known as:",
"html": true,
"c": [
"Metabolism",
"Reproduction",
"Pathophysiology",
"Homeostasis",
"Growth"
],
"a": 3,
"e": "Homeostasis is keeping the internal environment (temperature, blood pressure, pH, glucose, oxygen, ions) relatively constant despite disturbances. Sweating and widening of skin blood vessels release heat to bring temperature back toward its set point — a textbook homeostatic, negative-feedback response.",
"w": [
"Metabolism is all the chemical reactions in the body.",
"Reproduction is producing offspring.",
"Pathophysiology is the study of how normal function goes wrong in disease.",
"Correct — Homeostasis = keeping the internal environment relatively constant despite changes.",
"Growth is an increase in size or cell number."
],
"src": "cls"
},
{
"t": "Homeostasis & Control Systems",
"s": "A novel physiological control system is being studied. When a specific disturbance is applied without the control system active, the measured variable changes by +100 units from its normal value. When the same disturbance is applied with the control system active, the variable changes by only +20 units from its normal value. What is the gain of this control system?",
"html": true,
"c": [
"-0.25",
"-1",
"-4",
"-5",
"-10"
],
"a": 2,
"e": "Gain = correction ÷ remaining error.\n• Without control the change is +100; with control it's only +20, so the system corrected 100 − 20 = 80 units in the opposite direction → correction = −80.\n• Remaining error = +20.\n• Gain = −80 ÷ 20 = −4.\nThe negative sign means negative feedback. For comparison, the baroreceptor system has a gain of about −2, and temperature control about −33 (very powerful).",
"w": [
"−0.25 is the ratio flipped upside down (20 ÷ 80).",
"−1 doesn't fit the numbers.",
"Correct — Gain = correction ÷ error. Here: −80 ÷ +20 = −4.",
"−5 comes from dividing the uncorrected change (100) by the error (20) — you have to use the correction (80), not the full disturbance.",
"−10 doesn't fit the numbers."
],
"src": "cls"
},
{
"t": "Homeostasis & Control Systems",
"s": "Although most body control systems employ negative feedback, certain vital physiological processes rely on positive feedback mechanisms to amplify a response until a specific outcome is achieved. Which of the following is a beneficial example of positive feedback in the human body?",
"html": true,
"c": [
"Regulation of blood glucose by insulin.",
"Maintenance of body pH by the respiratory and renal systems.",
"The process of blood clotting after a vessel rupture.",
"Control of body temperature through shivering.",
"Regulation of oxygen concentration by hemoglobin."
],
"a": 2,
"e": "When a vessel tears, clotting factors are activated → thrombin forms → thrombin activates more clotting factors (including the ones that make more thrombin) → more and more clot forms until the hole is sealed, then the process stops. Other useful positive feedback loops: childbirth (stretch of the cervix → more oxytocin → stronger contractions), the upstroke of a nerve impulse (sodium entry opens more sodium channels), and the hormone surge (luteinizing hormone) that triggers ovulation.",
"w": [
"High glucose → insulin → glucose falls: negative feedback.",
"The lungs and kidneys correct pH toward normal: negative feedback.",
"Correct — Helpful positive feedback: clotting, childbirth, nerve impulse upstroke, ovulation hormone surge.",
"Cold → shivering → heat produced → temperature returns: negative feedback.",
"Hemoglobin acts as an oxygen buffer that keeps tissue oxygen stable: a stabilizing (negative feedback–type) system."
],
"src": "cls"
},
{
"t": "Homeostasis & Control Systems",
"s": "In contributing to homeostasis, the body's functional systems work together. Which organ system is primarily responsible for the absorption of dissolved nutrients such as carbohydrates, fatty acids, and amino acids from ingested food into the extracellular fluid of the blood?",
"html": true,
"c": [
"Respiratory system",
"Renal system",
"Musculoskeletal system",
"Gastrointestinal tract",
"Immune system"
],
"a": 3,
"e": "The digestive tract breaks food down into small molecules (sugars, fatty acids, amino acids) and absorbs them across the gut lining into the blood, which carries them to every cell. The liver then processes and stores many of these nutrients.",
"w": [
"The lungs supply oxygen and remove carbon dioxide.",
"The kidneys remove wastes and regulate water, ions, and pH.",
"Muscles and bones provide movement and support (which lets us get food, but they don't absorb it).",
"Correct — Gastrointestinal tract → absorbs nutrients into the blood.",
"The immune system defends against infection."
],
"src": "cls"
},
{
"t": "Body Fluids & Edema",
"s": "A laboratory technician is preparing a solution and needs to express the concentration of osmotically active particles per kilogram of water. Which of the following terms accurately describes this measurement?",
"html": true,
"c": [
"Osmolarity",
"Tonicity",
"Osmolality",
"Osmotic pressure",
"Reflection coefficient"
],
"a": 2,
"e": "Osmolality = osmoles per kilogram of water. Osmolarity = osmoles per liter of solution. Memory trick: osmolaLity goes with kiLograms... of water. In dilute body fluids the two numbers are nearly identical, and they're often used interchangeably clinically (about 285–295).",
"w": [
"Osmolarity is per liter of solution.",
"Tonicity compares a solution to a cell based on non-penetrating solutes.",
"Correct — Per kg water = osmolality; per liter solution = osmolarity.",
"Osmotic pressure is expressed as a pressure (mm Hg).",
"The reflection coefficient is a 0–1 number describing membrane permeability to a solute."
],
"src": "cls"
},
{
"t": "Body Fluids & Edema",
"s": "Osmosis is defined as the flow of water across a semipermeable membrane due to a difference in solute concentration. Which of the following best describes the driving force for this water flow and the pressure required to stop it?",
"html": true,
"c": [
"Reflection coefficient; Osmolality",
"Osmotic pressure difference; Osmotic pressure",
"Tonicity; Osmolarity",
"Concentration gradient; Hydrostatic pressure",
"Solute concentration; Diffusion"
],
"a": 1,
"e": "Water flows because of a difference in osmotic pressure between the two sides (caused by a difference in the concentration of solutes that can't cross). The osmotic pressure of a solution is defined as exactly the pressure you would need to apply to stop that water from flowing in. So: driving force = osmotic pressure difference; pressure needed to stop it = osmotic pressure.",
"w": [
"The reflection coefficient describes how well a membrane blocks a solute, and osmolality is a concentration — neither is a force or a stopping pressure.",
"Correct — Osmotic pressure = the pressure needed to stop osmosis; water moves because of an osmotic pressure difference.",
"Tonicity and osmolarity describe solutions; they aren't a driving force or a pressure.",
"Tempting, because the pressure you'd physically apply is hydrostatic — but the term the question wants for \"the pressure required to stop osmosis\" is osmotic pressure, and \"concentration gradient\" is vaguer than the osmotic pressure difference.",
"Diffusion is movement of solute, not a pressure."
],
"src": "cls"
},
{
"t": "Body Fluids & Edema",
"s": "A solute has a reflection coefficient (σ) of 1 when separated by a membrane. Which of the following statements regarding this solute and membrane is most accurate?",
"html": true,
"c": [
"The membrane is freely permeable to the solute, and no effective osmotic pressure is exerted.",
"The solute will diffuse across the membrane down its concentration gradient.",
"The membrane is impermeable to the solute, and the solute will exert its full osmotic effect.",
"The effective osmotic pressure lies between its maximal possible value and zero.",
"Water will flow until solute concentrations are equal on both sides of the membrane."
],
"a": 2,
"e": "The reflection coefficient (σ) runs from 0 to 1. σ = 1 → the membrane completely blocks (\"reflects\") the solute → the solute stays on its side and pulls water with its full osmotic force (example: albumin at the capillary wall is close to 1). σ = 0 → the solute crosses freely → it creates no effective osmotic pressure (example: urea across most cell membranes). Effective osmotic pressure = σ × calculated osmotic pressure.",
"w": [
"That describes σ = 0.",
"If σ = 1, the solute can't cross.",
"Correct — σ = 1: impermeable, full osmotic effect. σ = 0: freely permeable, no osmotic effect.",
"That describes a σ between 0 and 1.",
"The solute can't cross, and water movement alone won't necessarily make the concentrations equal — water moves until the osmotic pressures (or pressures overall) balance."
],
"src": "cls"
},
{
"t": "Body Fluids & Edema",
"s": "Two solutions, Solution A and Solution B, are separated by a semipermeable membrane. Solution A has a lower effective osmotic pressure compared to Solution B. Based on these conditions, which of the following will occur?",
"html": true,
"c": [
"Solution A is hypertonic relative to Solution B.",
"Water will flow from Solution B into Solution A.",
"Solution B is hypotonic relative to Solution A.",
"Water will flow from Solution A into Solution B.",
"There will be no net water flow between the solutions."
],
"a": 3,
"e": "Lower effective osmotic pressure = more dilute = hypotonic. So A is hypotonic and B is hypertonic. Water moves from the dilute side toward the concentrated side → from A into B.",
"w": [
"A is hypotonic, not hypertonic.",
"Backwards — water moves toward the higher osmotic pressure (B).",
"B is hypertonic relative to A.",
"Correct — Water moves from lower osmotic pressure (hypotonic) to higher osmotic pressure (hypertonic).",
"A difference in effective osmotic pressure always drives net water flow."
],
"src": "cls"
},
{
"t": "Body Fluids & Edema",
"s": "Which of the following is the primary determinant of the volume of the extracellular fluid (ECF) compartment?",
"html": true,
"c": [
"The total amount of intracellular protein.",
"The total amount of water in the body.",
"The total amount of solute it contains, primarily NaCl and NaHCO3.",
"The activity of the sodium-potassium pump.",
"The concentration of glucose in the plasma."
],
"a": 2,
"e": "Sodium salts (sodium chloride and sodium bicarbonate) are effectively trapped outside cells. Because water moves to keep concentrations equal, the amount of sodium outside cells decides how much water stays there. This is why the kidneys control extracellular (and blood) volume by adjusting how much sodium they keep or excrete. Key distinction: the amount of sodium in the body → volume; the concentration of sodium in plasma → water balance.",
"w": [
"Intracellular protein and potassium salts determine the volume inside cells, not outside.",
"Total body water is split between compartments according to where the solutes are; the amount of water alone doesn't decide the extracellular share.",
"Correct — Total body sodium (amount) determines extracellular volume; water follows sodium.",
"The pump is what keeps sodium outside cells, but the total amount of sodium is what sets the volume.",
"Glucose is a minor solute that normally enters cells."
],
"src": "cls"
},
{
"t": "Body Fluids & Edema",
"s": "In the steady state, what is the relationship between intracellular osmolarity and extracellular osmolarity, and what mechanism primarily maintains this relationship?",
"html": true,
"c": [
"Intracellular osmolarity is always higher; active transport of water.",
"Extracellular osmolarity is always higher; passive diffusion of solutes.",
"They are equal; water shifts freely across cell membranes.",
"They are equal; active transport of solutes across membranes.",
"Intracellular osmolarity varies independently of extracellular osmolarity; no specific mechanism."
],
"a": 2,
"e": "Cell membranes are highly permeable to water (through water channels called aquaporins and through the membrane itself). Any concentration difference makes water move within seconds to minutes until the two sides are equal. So at steady state, osmolarity inside = outside, and it's water movement — not solute movement — that makes it so.",
"w": [
"They're equal, and water is never actively pumped — it always moves passively.",
"They're equal.",
"Correct — Inside = outside osmolarity at steady state, because water moves freely.",
"They are equal, but it's water movement that equalizes them. Solute pumps set up where solutes are, not the equalizing itself.",
"Water movement tightly links them."
],
"src": "cls"
},
{
"t": "Body Fluids & Edema",
"s": "What percentage of total body water (TBW) is typically found within the intracellular fluid (ICF) compartment in adults?",
"html": true,
"c": [
"1/3",
"¼",
"2/3",
"¾"
],
"a": 2,
"e": "The 60-40-20 rule: TBW ≈ 60% of body weight, ICF ≈ 40% (2/3 of TBW), ECF ≈ 20% (1/3 of TBW). Within the ECF, about 3/4 is interstitial fluid and 1/4 is plasma.",
"w": [
"1/3 of TBW is the ECF.",
"1/4 is the plasma fraction of the ECF.",
"Correct — about 2/3 of TBW is intracellular.",
"3/4 is the interstitial fraction of the ECF."
],
"src": "rmp"
},
{
"t": "Body Fluids & Edema",
"s": "Which of the following is a key requirement for an indicator substance used to measure the extracellular fluid (ECF) volume?",
"html": true,
"c": [
"It should freely permeate the cell membrane and enter the cells",
"It should not attach to red blood cells (RBC) or plasma proteins",
"It should be metabolized quickly within the body",
"It should remain confined to the plasma compartment after injection"
],
"a": 1,
"e": "An ECF indicator must leave the plasma, spread evenly through the interstitium and stay out of cells. If it bound to RBCs or plasma proteins it would be held in the vessels and measure plasma (or blood) volume instead. Inulin, mannitol, sucrose and radioactive Na⁺ are examples.",
"w": [
"Entering cells would make it a TBW marker.",
"Correct — it must not be bound to RBCs or plasma proteins, so it can spread through the whole ECF.",
"It must NOT be metabolized during mixing.",
"Staying confined to plasma describes a plasma-volume marker (Evans blue, ¹²⁵I-albumin)."
],
"src": "rmp"
},
{
"t": "Body Fluids & Edema",
"s": "Which of the following ions is the major cation found in the extracellular fluid (ECF)?",
"html": true,
"c": [
"Potassium (K⁺)",
"Magnesium (Mg²⁺)",
"Sodium (Na⁺)",
"Calcium (Ca²⁺)"
],
"a": 2,
"e": "Na⁺ (~142 mEq/L) is the main ECF cation, balanced mainly by Cl⁻ and HCO₃⁻. K⁺ (~140 mEq/L) is the main ICF cation.",
"w": [
"K⁺ is the main intracellular cation.",
"Mg²⁺ is mainly intracellular.",
"Correct — Na⁺ is the main ECF cation.",
"Ca²⁺ in the ECF is only ~2.4 mEq/L (5 mEq/L total)."
],
"src": "rmp"
},
{
"t": "Body Fluids & Edema",
"s": "When two solutions separated by a semipermeable membrane have the same effective osmotic pressure, they are described as being:",
"html": true,
"c": [
"Hypertonic",
"Hypotonic",
"Isotonic",
"Isosmotic"
],
"a": 2,
"e": "Tonicity depends on EFFECTIVE osmotic pressure (non-permeant solutes only). Same effective osmotic pressure = isotonic, so no net water flow. Isosmotic only means the same total osmolarity — two isosmotic solutions can differ in tonicity if one contains a permeant solute such as urea.",
"w": [
"Hypertonic means higher effective osmotic pressure.",
"Hypotonic means lower effective osmotic pressure.",
"Correct — equal effective osmotic pressure is isotonic.",
"Isosmotic refers to total osmolarity, which includes permeant solutes that exert no effective pressure."
],
"src": "rmp"
},
{
"t": "Membrane Transport",
"s": "A researcher is studying the transport of various substances across an artificial lipid bilayer lacking any protein components. Which characteristic of the cell membrane is primarily responsible for restricting the movement of polar molecules like glucose and amino acids across this bilayer?",
"html": true,
"c": [
"The presence of cholesterol",
"The hydrophilic heads of phospholipids facing the aqueous solutions",
"The hydrophobic fatty acid tails of phospholipids forming the interior of the bilayer",
"The integral membrane proteins embedded within the bilayer",
"The peripheral membrane proteins attached to the surface"
],
"a": 2,
"e": "The middle of the bilayer is made of hydrophobic fatty acid tails. Lipid-soluble substances (O₂, CO₂, N₂, alcohols) dissolve in it and cross easily, but polar and charged substances (ions, glucose, amino acids, urea) are blocked. That's why they need channel or carrier proteins.",
"w": [
"Cholesterol modulates fluidity and permeability, but the hydrophobic core is the main barrier.",
"The polar heads face the water; the barrier is the hydrophobic interior.",
"Correct — the hydrophobic core blocks polar molecules.",
"This bilayer has no proteins, and proteins help transport rather than restrict it.",
"There are no proteins here, and peripheral proteins don't form the barrier."
],
"src": "rmp"
},
{
"t": "Membrane Transport",
"s": "Which type of substance is noted as having particularly high rates of diffusion across cell membranes, largely attributable to the membrane's lipid component providing a large surface area for this process?",
"html": true,
"c": [
"Ions",
"Glucose",
"Amino acids",
"Lipid-soluble gases like oxygen and carbon dioxide",
"Water-soluble vitamins"
],
"a": 3,
"e": "O₂, CO₂, N₂ and alcohols are highly lipid-soluble, so they dissolve in the bilayer and diffuse directly through it. The huge lipid surface area makes their diffusion very fast. Diffusion rate through the lipid is proportional to lipid solubility.",
"w": [
"Ions are charged and need channels.",
"Glucose is polar and needs carriers (GLUTs).",
"Amino acids are polar and need carriers.",
"Correct — lipid-soluble gases diffuse directly through the bilayer.",
"Water-soluble vitamins need transporters."
],
"src": "rmp"
},
{
"t": "Membrane Transport",
"s": "Which type of protein channel is described as the main route for water movement into and out of the cell and is widely distributed throughout the body, and being regulated by antidiuretic hormone in the kidneys?",
"html": true,
"c": [
"Ion channels",
"Voltage-gated channels",
"Aquaporins",
"Ligand-binding receptors",
"Solute carriers"
],
"a": 2,
"e": "Aquaporins are selective water channels. ADH (vasopressin) acts on V₂ receptors in the collecting duct and inserts aquaporin-2 into the luminal membrane, increasing water reabsorption.",
"w": [
"Ion channels carry ions, not bulk water.",
"Voltage-gated channels carry ions.",
"Correct — aquaporins (AQP2 is regulated by ADH).",
"Ligand-binding receptors bind signals; they aren't water pores.",
"Solute carriers move solutes, not water."
],
"src": "rmp"
},
{
"t": "Membrane Transport",
"s": "Ion channels are found in all cells and are crucial for excitable cells. What process describes the fluctuation of ion channels between an open and closed state, which can be influenced by factors such as membrane voltage and extracellular agonists?",
"html": true,
"c": [
"Selectivity",
"Conductance",
"Saturation",
"Gating",
"Stereospecificity"
],
"a": 3,
"e": "Gating is the opening and closing of channel \"gates\". Voltage gating responds to membrane potential (e.g., Na⁺ and K⁺ channels), and ligand gating responds to chemicals (e.g., ACh at the nicotinic receptor). Other gates respond to second messengers or mechanical stretch.",
"w": [
"Selectivity is which ions a channel lets through.",
"Conductance is how easily ions flow through an open channel.",
"Saturation is a carrier property, not a channel one.",
"Correct — moving between open and closed states is gating.",
"Stereospecificity is a carrier property."
],
"src": "rmp"
},
{
"t": "Membrane Transport",
"s": "A membrane protein is observed to transport both Na+ ions and glucose molecules across the cell membrane in the same direction, utilizing the electrochemical gradient of Na+. This transporter would be classified as a:",
"html": true,
"c": [
"Uniporter",
"Antiporter",
"Symporter",
"ATPase ion transporter",
"Peripheral protein"
],
"a": 2,
"e": "Transporters that move two solutes in the SAME direction are symporters (cotransporters), e.g., SGLT1 in the intestine and SGLT2 in the proximal tubule. Antiporters (exchangers) move them in OPPOSITE directions, and uniporters move a single solute.",
"w": [
"A uniporter moves one solute only (e.g., GLUT).",
"An antiporter moves solutes in opposite directions (e.g., Na⁺/Ca²⁺ exchanger).",
"Correct — same direction means symport.",
"ATPases hydrolyze ATP directly; SGLT uses the Na⁺ gradient instead.",
"Peripheral proteins don't span the membrane and don't transport solutes."
],
"src": "rmp"
},
{
"t": "Membrane Transport",
"s": "Transport processes that directly utilize the energy obtained from the hydrolysis of ATP to move substances against their concentration gradient are known as:",
"html": true,
"c": [
"Simple diffusion",
"Facilitated diffusion",
"Primary active transport",
"Secondary active transport",
"Vesicular transport"
],
"a": 2,
"e": "Primary active transport uses energy directly from ATP hydrolysis: Na⁺/K⁺-ATPase, Ca²⁺-ATPase (PMCA, SERCA) and H⁺/K⁺-ATPase. Secondary active transport uses an ion gradient that a primary pump created.",
"w": [
"Simple diffusion is passive and moves downhill.",
"Facilitated diffusion is passive and carrier-mediated.",
"Correct — directly ATP-powered and uphill.",
"Secondary active transport uses an ion gradient, not ATP directly.",
"Vesicular transport uses ATP but isn't classed as primary active transport."
],
"src": "rmp"
},
{
"t": "Membrane Transport",
"s": "Which of the following statements accurately describes a key difference between active transport and passive transport according to the provided sources?",
"html": true,
"c": [
"Active transport occurs down a concentration gradient, while passive transport occurs against it",
"Active transport requires an external source of energy, while passive transport does not",
"Active transport does not use carrier proteins, while passive transport always does",
"Passive transport is slower than active transport",
"Passive transport moves substances uphill, while active transport moves them downhill"
],
"a": 1,
"e": "Passive transport (simple and facilitated diffusion) moves substances down their electrochemical gradient using only their own kinetic energy. Active transport moves substances against their gradient and needs an energy source — ATP directly (primary) or an ion gradient (secondary).",
"w": [
"Reversed — active transport goes uphill.",
"Correct — energy is the key difference.",
"Active transport always uses carrier proteins; simple diffusion needs none.",
"Speed isn't the defining difference.",
"Reversed."
],
"src": "rmp"
},
{
"t": "Membrane Transport",
"s": "Simple diffusion is characterized by which of the following?",
"html": true,
"c": [
"It requires a carrier protein",
"It requires metabolic energy",
"It occurs down an electrochemical gradient",
"It exhibits saturation kinetics",
"It transports water-soluble substances more easily than lipid-soluble ones"
],
"a": 2,
"e": "Simple diffusion is passive movement down an electrochemical gradient, through the lipid bilayer or open channels. It needs no carrier or energy, and its rate rises linearly with the concentration difference (no saturation).",
"w": [
"No carrier is needed (that's facilitated diffusion).",
"It's passive.",
"Correct — downhill movement.",
"Saturation is a carrier-mediated feature; simple diffusion is linear.",
"Lipid-soluble substances cross the bilayer more easily."
],
"src": "rmp"
},
{
"t": "Resting Membrane Potential",
"s": "The diffusion of an ion or electrolyte across a membrane can generate a potential difference across the membrane if it moves down a concentration gradient. This generated potential difference is called a:",
"html": true,
"c": [
"Membrane potential",
"Action potential",
"Diffusion potential",
"Equilibrium potential",
"Resting potential"
],
"a": 2,
"e": "When a permeant ion diffuses down its concentration gradient, it carries charge across the membrane and creates a diffusion potential. When that potential becomes just large enough to stop further net diffusion, it equals the ion's equilibrium (Nernst) potential.",
"w": [
"Membrane potential is a general term for the voltage across any membrane.",
"An action potential is a rapid, regenerative change in Vm.",
"Correct — the potential created by an ion diffusing.",
"The equilibrium potential is the specific diffusion potential at which net flux stops.",
"The resting potential is the steady Vm made of several ions' contributions."
],
"src": "rmp"
},
{
"t": "Membrane Transport",
"s": "Facilitated diffusion shares which characteristic with simple diffusion?",
"html": true,
"c": [
"It does not use a membrane carrier",
"It occurs down an electrochemical potential gradient",
"It does not require metabolic energy",
"Both B and C",
"All of the above"
],
"a": 3,
"e": "Both are passive: they move substances down an electrochemical gradient and need no metabolic energy. Facilitated diffusion, however, uses a carrier protein, so it shows saturation, stereospecificity and competition.",
"w": [
"Facilitated diffusion DOES use a carrier.",
"True but incomplete — C is also true.",
"True but incomplete — B is also true.",
"Correct — both B and C are shared.",
"A is false, so \"all of the above\" is wrong."
],
"src": "rmp",
"ns": true
},
{
"t": "Membrane Transport",
"s": "Structurally similar molecules can bind to the same carrier protein used in facilitated diffusion, thereby reducing the transport rate of the intended molecule when present at high concentrations. This property of carrier-mediated transport is called:",
"html": true,
"c": [
"Saturation",
"Stereospecificity",
"Competition",
"Conductance",
"Unidirectional transport"
],
"a": 2,
"e": "Competition: similar molecules compete for the same binding site and slow each other's transport (e.g., galactose competes with glucose for SGLT1). Saturation is the plateau at Tm, and stereospecificity is selecting D- over L-isomers.",
"w": [
"Saturation is a plateau from limited carriers, not inhibition by a similar molecule.",
"Stereospecificity is selecting a particular isomer.",
"Correct — similar molecules compete for the carrier.",
"Conductance applies to channels.",
"Not a carrier property."
],
"src": "rmp"
},
{
"t": "Membrane Transport",
"s": "A patient presents with symptoms consistent with cystic fibrosis. The sources indicate this condition is caused by a defect in the CFTR gene, which regulates a specific channel crucial for ion and fluid transport in tissues like the lungs and pancreas. The CFTR protein functions primarily as a channel for which ion?",
"html": true,
"c": [
"Na+",
"K+",
"Cl−",
"HCO3−",
"Ca2+"
],
"a": 2,
"e": "CFTR is a cAMP-regulated Cl⁻ channel (an ABC-transporter family member). When it's defective, epithelial Cl⁻ secretion falls, Na⁺ and water absorption rise, and secretions become thick in the lungs, pancreas and intestine. In sweat ducts, poor Cl⁻ reabsorption raises sweat Cl⁻ (the sweat test).",
"w": [
"CFTR inhibits ENaC; it isn't a Na⁺ channel.",
"CFTR isn't a K⁺ channel.",
"Correct — CFTR is a Cl⁻ channel.",
"CFTR can conduct some HCO₃⁻, but its primary role is as a Cl⁻ channel.",
"Not a Ca²⁺ channel."
],
"src": "rmp"
},
{
"t": "Membrane Transport",
"s": "The Na+-K+ ATPase pump is a critical primary active transporter in cell membranes. For each molecule of ATP hydrolyzed, this pump moves:",
"html": true,
"c": [
"3 Na+ into the cell and 2 K+ out of the cell",
"2 Na+ into the cell and 3 K+ out of the cell",
"3 Na+ out of the cell and 2 K+ into the cell",
"2 Na+ out of the cell and 3 K+ into the cell",
"1 Na+ out of the cell and 1 K+ into the cell"
],
"a": 2,
"e": "For each ATP, the pump moves 3 Na⁺ out and 2 K⁺ in. This keeps ICF Na⁺ low and K⁺ high, and because one net positive charge leaves per cycle, the pump is electrogenic (adds a few mV of negativity). Cardiac glycosides (ouabain, digoxin) inhibit it.",
"w": [
"Both directions are reversed.",
"Directions and numbers are both wrong.",
"Correct — 3 Na⁺ out, 2 K⁺ in.",
"The numbers are reversed.",
"The pump isn't 1:1; it's 3:2 (electrogenic)."
],
"src": "rmp"
},
{
"t": "Membrane Transport",
"s": "Secondary active transport systems typically utilize the energy stored in the electrochemical gradient of one solute, usually Na+, to move a second solute against its electrochemical gradient. This process is considered \"secondary\" active transport because:",
"html": true,
"c": [
"It does not use carrier proteins",
"It directly hydrolyzes ATP",
"The energy source is indirectly derived from ATP hydrolysis, which maintains the driving ion gradient",
"It moves solutes downhill",
"It only transports large molecules"
],
"a": 2,
"e": "The Na⁺/K⁺-ATPase (primary) spends ATP to build the Na⁺ gradient. Secondary active transporters (SGLT, NCX, NHE) then use that stored gradient energy. If the pump stops, the gradient runs down and secondary transport fails too.",
"w": [
"It always uses carrier proteins.",
"Direct ATP use is primary active transport.",
"Correct — ATP is used indirectly, through the Na⁺ gradient.",
"The second solute moves uphill.",
"It carries small solutes (glucose, amino acids, ions)."
],
"src": "rmp"
},
{
"t": "Resting Membrane Potential",
"s": "A 65-year-old male is being evaluated for a neurological condition. Understanding the electrical properties of nerve cells is crucial. Which of the following statements accurately describes the electrical state of a typical cell at rest?",
"html": true,
"c": [
"The overall body is positively charged due to an excess of cations in the ECF.",
"The intracellular fluid (ICF) has a net negative charge because it contains anions without matching cations.",
"The extracellular fluid (ECF) and ICF are in electrical equilibrium.",
"The cell membrane is equally permeable to all ions at rest, leading to electrical neutrality across the membrane.",
"For every cation in the ICF, there is a matching anion, resulting in ICF electroneutrality."
],
"a": 4,
"e": "Bulk solutions are electroneutral: in both the ICF and ECF, total cation charge equals total anion charge. Only a tiny number of excess charges, lined up right along the membrane (like a capacitor), create the resting potential — far too few to measurably change bulk concentrations.",
"w": [
"The body as a whole is electrically neutral.",
"The bulk ICF is neutral; only a thin layer at the membrane carries the excess negative charge.",
"A potential difference exists across the membrane, so it isn't at electrical equilibrium.",
"At rest the membrane is far more permeable to K⁺ than to other ions.",
"Correct — bulk ICF electroneutrality."
],
"src": "rmp",
"key": "In the PDF, choices A and B were run together on one line under \"a)\". They're split here into A and B, so the original b–d are now C–E."
},
{
"t": "Resting Membrane Potential",
"s": "The resting membrane potential (RMP) is a fundamental property of all living cells. Which principle best describes the electrical disequilibrium that creates the membrane potential difference (Vm) in living cells?",
"html": true,
"c": [
"The law of conservation of electrical charge states that charges cannot be separated across a membrane.",
"Separating positive and negative charges across an insulator requires energy.",
"Like charges attract, and opposite charges repel, leading to an even distribution across the membrane.",
"The phospholipid bilayer of the cell membrane acts as a conductor, allowing free movement of charges.",
"The membrane potential results from the uneven distribution of electrical charge (ions) between the ECF and ICF."
],
"a": 4,
"e": "The membrane potential exists because ions (charges) are distributed unevenly across the membrane. A slight excess of negative charge on the inner surface and positive charge on the outer surface is held apart by the insulating lipid bilayer. Energy (the Na⁺/K⁺-ATPase) is needed to create and maintain this separation.",
"w": [
"Charges are conserved but CAN be separated across a membrane — that's what creates Vm.",
"True, but it's a supporting principle; the disequilibrium itself is the uneven distribution of charge.",
"Reversed — opposite charges attract and like charges repel.",
"The bilayer is an insulator, not a conductor.",
"Correct — uneven distribution of ions creates Vm."
],
"src": "rmp"
},
{
"t": "Resting Membrane Potential",
"s": "A researcher is studying a hypothetical cell membrane permeable only to potassium ions (K⁺). If the K⁺ concentration is significantly higher inside the cell than outside, as depicted in the source, what would be the expected diffusion potential and its polarity?",
"html": true,
"c": [
"Approximately +61 mV, positive inside",
"Approximately -94 mV, negative inside",
"Approximately +61 mV, negative inside",
"Approximately -94 mV, positive inside",
"0 mV, as the membrane is selectively permeable"
],
"a": 1,
"e": "K⁺ diffuses out, down its gradient, leaving unbalanced anions inside, so the inside becomes negative. With [K⁺]in ≈ 140 and [K⁺]out ≈ 4 mEq/L, EK = −61 log(140/4) ≈ −94 mV (inside negative).",
"w": [
"+61 mV is ENa, and K⁺ efflux makes the inside negative, not positive.",
"Correct — about −94 mV, inside negative.",
"+61 mV is ENa's value.",
"Right magnitude, wrong polarity.",
"Selective permeability is exactly what creates a diffusion potential."
],
"src": "rmp"
},
{
"t": "Resting Membrane Potential",
"s": "Electrochemical equilibrium for an ion is reached when the chemical gradient is precisely balanced by the electrical force in the opposite direction. The membrane potential at which this occurs for a single ion can be calculated using which equation, according to the source?",
"html": true,
"c": [
"Goldman-Hodgkin-Katz equation",
"Gibbs-Donnan equation",
"Nernst equation",
"Resting membrane potential equation",
"Diffusion potential equation"
],
"a": 2,
"e": "The Nernst equation gives the equilibrium potential for ONE ion: E = ±61/z × log(Cout/Cin) at body temperature. The Goldman-Hodgkin-Katz equation combines several ions weighted by permeability to give the actual membrane potential.",
"w": [
"GHK handles multiple ions at once.",
"Gibbs-Donnan describes how non-diffusible ions shift the distribution of diffusible ones.",
"Correct — single-ion equilibrium potential.",
"Not a named equation.",
"Not a named equation."
],
"src": "rmp"
},
{
"t": "Resting Membrane Potential",
"s": "According to calculations presented in the source using typical ion concentrations, what are the approximate equilibrium potentials (Eion) for Potassium (K⁺) and Sodium (Na⁺)?",
"html": true,
"c": [
"EK⁺ ~ +61 mV, ENa⁺ ~ -90 mV",
"EK⁺ ~ -90 mV, ENa⁺ ~ +61 mV",
"EK⁺ ~ -70 mV, ENa⁺ ~ +70 mV",
"EK⁺ ~ -95 mV, ENa⁺ ~ +70 mV",
"EK⁺ ~ -95 mV, ENa⁺ ~ +125 mV"
],
"a": 1,
"e": "With [Na⁺]out ≈ 142 / [Na⁺]in ≈ 14 mEq/L, ENa ≈ +61 mV. With [K⁺]in ≈ 140 / [K⁺]out ≈ 4 mEq/L, EK ≈ −90 to −94 mV. EK is negative (K⁺ leaves), and ENa is positive (Na⁺ enters).",
"w": [
"The signs are reversed.",
"Correct — EK about −90 mV, ENa about +61 mV.",
"−70 mV is the typical RMP, not EK.",
"The ENa value is wrong for these concentrations.",
"+125 mV is too high for ENa (that's in the range of ECa)."
],
"src": "rmp",
"key": "The PDF doesn't give an answer key. B matches the standard textbook values (ENa ≈ +61 mV, EK ≈ −90 to −94 mV). If your lecture slides used different numbers, go with the slides."
},
{
"t": "Resting Membrane Potential",
"s": "The Resting Membrane Potential (RMP) in most cells is approximately -70 mV. While K⁺ permeability is the major factor, other factors contribute. Which of the following contributes to the RMP being less negative (more positive) than the Nernst potential for K⁺?",
"html": true,
"c": [
"Greater permeability of the membrane to K⁺ than other ions",
"The electrogenic nature of the Na⁺/K⁺ pump transporting 3 Na⁺ out for 2 K⁺ in",
"The presence of non-diffusible protein anions inside the cell",
"Leaking of Na⁺ into the cell through Na⁺ channels",
"The Gibbs-Donnan effect caused by impermeant anions"
],
"a": 3,
"e": "Na⁺ leaks into the cell through leak channels (PNa is about 1/100 of PK in nerve). This small inward cation current pulls Vm away from EK (−94) toward ENa (+61), giving a less negative RMP (−86 mV from diffusion, −90 mV with the pump in large nerve fibers; −70 mV in many neurons).",
"w": [
"High K⁺ permeability pulls Vm TOWARD EK, not away from it.",
"The pump's electrogenic effect makes Vm MORE negative (about −4 mV).",
"Intracellular protein anions don't push Vm above EK.",
"Correct — Na⁺ leak makes the RMP less negative than EK.",
"The Gibbs-Donnan effect helps set the K⁺ distribution but doesn't make Vm less negative than EK."
],
"src": "rmp"
},
{
"t": "Resting Membrane Potential",
"s": "The Gibbs-Donnan effect describes the uneven distribution of permeant charged ions across a semipermeable barrier due to the presence of impermeant charged ions. What is a consequence of high concentration of anionic proteins inside cells related to this effect?",
"html": true,
"c": [
"Cations are repelled from the intracellular space.",
"Plasma protein concentration becomes equal to interstitial fluid protein concentration.",
"Chloride ions are prevented from crossing the membrane.",
"Cations (like K⁺ and Na⁺) are pulled into the intracellular space from the interstitium.",
"Electroneutrality is violated in both compartments."
],
"a": 3,
"e": "Negatively charged proteins can't leave the cell. They attract permeant cations (K⁺, Na⁺) into the cell and repel permeant anions (Cl⁻). As a result, the side with the impermeant anions has more total diffusible ions — more osmotically active particles — which is why cells need the Na⁺/K⁺ pump to avoid swelling. The same effect at capillaries raises plasma oncotic pressure.",
"w": [
"Cations are attracted, not repelled.",
"Plasma protein stays much higher than interstitial protein.",
"Cl⁻ can still cross; it's partly repelled, giving lower intracellular Cl⁻.",
"Correct — impermeant anions pull permeant cations inward.",
"Each compartment stays electroneutral."
],
"src": "rmp"
},
{
"t": "Resting Membrane Potential",
"s": "The membrane potential is essential for various cellular functions beyond signal transmission. Which of the following is a listed use of the membrane potential related to energy production?",
"html": true,
"c": [
"Facilitating ligand-gated channel activity",
"Providing the driving force for primary active transport pumps",
"Storing energy via oxidative phosphorylation",
"Causing the opening of voltage-gated channels during depolarization",
"Maintaining overall electrical neutrality of the body"
],
"a": 2,
"e": "Membrane potentials also store energy. The inner mitochondrial membrane potential (the proton-motive force) drives ATP synthase during oxidative phosphorylation. Other uses include signaling (action potentials) and driving secondary transport.",
"w": [
"Ligand-gated channels respond to chemicals; this isn't energy production.",
"Primary active pumps are powered by ATP, not by Vm.",
"Correct — energy storage and ATP production via oxidative phosphorylation.",
"That's signaling, not energy production.",
"The body is already electroneutral; Vm doesn't serve this purpose."
],
"src": "rmp"
},
{
"t": "Action Potentials & Conduction",
"s": "Which of the following best describes the process of summation of graded potentials?",
"html": true,
"c": [
"It occurs only when two stimuli of different strengths arrive simultaneously.",
"It prevents action potentials from being generated.",
"It involves graded potentials adding together.",
"It requires a suprathreshold stimulus to initiate.",
"It is an all-or-none phenomenon."
],
"a": 2,
"e": "Graded potentials are local, decrease with distance, and can add up. Temporal summation is repeated inputs at one site close together in time; spatial summation is inputs at different sites at the same time. If the summed depolarization reaches threshold at the axon hillock, an action potential fires.",
"w": [
"Summation also occurs with stimuli of equal strength, and over time (temporal summation), not only simultaneously.",
"Summation is how subthreshold inputs REACH threshold.",
"Correct — graded potentials add together.",
"Summation works with subthreshold stimuli.",
"All-or-none describes the action potential, not graded potentials."
],
"src": "rmp"
},
{
"t": "Action Potentials & Conduction",
"s": "During which period of an action potential can a second action potential be elicited only by a suprathreshold stimulus?",
"html": true,
"c": [
"Resting membrane potential",
"Depolarization phase",
"Absolute refractory period",
"Relative refractory period",
"Repolarization phase"
],
"a": 3,
"e": "During the relative refractory period, some Na⁺ channels have recovered from inactivation and K⁺ conductance is still elevated (the cell may be hyperpolarized), so a stronger-than-normal (suprathreshold) stimulus can fire a second AP. During the absolute refractory period, no stimulus works because Na⁺ inactivation gates are closed.",
"w": [
"At rest, a normal threshold stimulus is enough.",
"During depolarization the cell is already firing; it's absolutely refractory.",
"No stimulus can fire an AP in the absolute refractory period.",
"Correct — a suprathreshold stimulus is required.",
"Most of repolarization falls in the absolute refractory period; the relative period is the named answer."
],
"src": "rmp"
},
{
"t": "Resting Membrane Potential",
"s": "Acute hyperkalemia has which of the following effects on cellular excitability?",
"html": true,
"c": [
"Decreased cellular excitability due to hyperpolarization.",
"Decreased cellular excitability due to accommodation and inactivation gate closure.",
"Increased cellular excitability due to depolarization.",
"No significant effect on resting membrane potential.",
"Increased cellular excitability due to hyperpolarization."
],
"a": 2,
"e": "Raising [K⁺]out makes EK less negative, so the RMP depolarizes and moves closer to threshold — ACUTELY, excitability increases. If the depolarization is sustained (chronic or severe hyperkalemia), Na⁺ inactivation gates close (accommodation) and excitability DECREASES, causing weakness and paralysis.",
"w": [
"Hyperkalemia depolarizes; it doesn't hyperpolarize.",
"That describes chronic or sustained hyperkalemia.",
"Correct — acutely, depolarization brings Vm closer to threshold.",
"RMP changes significantly with [K⁺]out.",
"Hyperpolarization would decrease excitability, and hyperkalemia doesn't cause it."
],
"src": "rmp"
},
{
"t": "Resting Membrane Potential",
"s": "Hypokalemia has which of the following effects on neuronal excitability?",
"html": true,
"c": [
"Increased excitability due to depolarization.",
"Increased excitability due to hyperpolarization.",
"Decreased excitability due to hyperpolarization.",
"Decreased excitability due to depolarization.",
"No significant effect on membrane potential."
],
"a": 2,
"e": "Low [K⁺]out widens the K⁺ gradient, so EK becomes more negative and the RMP hyperpolarizes. The membrane moves further from threshold and excitability falls, causing muscle weakness and, in the heart, arrhythmias.",
"w": [
"Hypokalemia hyperpolarizes; it doesn't depolarize.",
"Hyperpolarization decreases excitability, not increases it.",
"Correct — hyperpolarization moves Vm further from threshold.",
"Hypokalemia doesn't depolarize.",
"Vm changes with [K⁺]out."
],
"src": "rmp"
},
{
"t": "Action Potentials & Conduction",
"s": "Which factor significantly increases the conduction velocity of an action potential along an axon?",
"html": true,
"c": [
"Decreased fiber diameter.",
"Increased internal resistance.",
"Demyelination.",
"Myelination.",
"Decreased membrane resistance in myelinated areas."
],
"a": 3,
"e": "Myelin raises membrane resistance and lowers capacitance, so current flows down the axon instead of leaking out, and the AP \"jumps\" from node to node (saltatory conduction). Larger diameter (lower internal resistance) also increases velocity.",
"w": [
"Smaller diameter raises internal resistance and slows conduction.",
"Higher internal resistance slows conduction.",
"Demyelination slows or blocks conduction.",
"Correct — myelination makes conduction saltatory and fast.",
"Lower membrane resistance lets current leak out and slows conduction."
],
"src": "rmp"
}
];
