// NBME-style quiz bank for JJ QBank (separate from the content questions). Built by nbme/build.py from NotebookLM exports.
window.NBME_QUIZZES = [
{
"course": "fbs",
"subject": "Physiology",
"name": "FBS Physiology · NBME Quiz 1",
"prefix": "nfp1",
"note": "NotebookLM quiz built from the FBS Physiology study guide",
"qs": [
{
"t": "FBS Physiology · NBME Quiz 1",
"s": "A physiological perturbation shifts a patient's mean arterial blood pressure upward by 60 mmHg. In response, the baroreceptor reflex acts to decrease vascular resistance and heart rate, bringing the final resting blood pressure to a level that remains 15 mmHg above the original baseline. What is the calculated gain of this negative feedback reflex system?",
"html": true,
"chtml": true,
"c": [
"−4.0",
"−3.0",
"+3.0",
"−0.25"
],
"a": 1,
"eh": "<p>Gain is defined as Correction divided by Remaining Error; here, the system corrected −45 mmHg of the +60 mmHg disturbance, leaving +15 mmHg of error, yielding a gain of −45/15 = −3.0.</p><p class=\"nbhint\"><b>Hint:</b> Recall the formula for feedback control efficiency, which compares the magnitude of the system's corrective response to the uncorrected residual deviation.</p>"
},
{
"t": "FBS Physiology · NBME Quiz 1",
"s": "A physician performs unilateral carotid sinus massage on a patient presenting with episodic paroxysmal supraventricular tachycardia. Which sequence of neural signaling events directly mediates the resulting slowing of heart rate?",
"html": true,
"chtml": true,
"c": [
"Increased carotid sinus stretch → increased Glossopharyngeal nerve (CN IX) firing → increased vagal efferent activity to the SA node",
"Decreased carotid sinus pressure → decreased Glossopharyngeal nerve (CN IX) firing → increased vagal efferent activity to the AV node",
"Increased aortic arch stretch → increased Vagus nerve (CN X) firing → decreased sympathetic efferent activity to peripheral arterioles",
"Increased carotid body sensory input → increased Vagus nerve (CN X) firing → increased sympathetic stimulation of cardiac beta-1 receptors"
],
"a": 0,
"eh": "<p>Carotid sinus massage increases stretch on baroreceptors, increasing afferent action potentials via the glossopharyngeal nerve (CN IX) to the brainstem, which enhances vagal efferent tone and inhibits sympathetic efferent tone.</p><p class=\"nbhint\"><b>Hint:</b> Identify the specific cranial nerve that carries afferent mechanoreceptor signals originating specifically from the carotid bifurcation.</p>"
},
{
"t": "FBS Physiology · NBME Quiz 1",
"s": "In a clinical physiology research trial, a subject undergoes body fluid compartment volume determination. The subject is administered deuterated water (D₂O), inulin, and radiolabeled serum albumin (¹²⁵I-albumin). Calculated dilution distribution volumes are 42 L for D₂O, 14 L for inulin, and 3.5 L for ¹²⁵I-albumin. What is the calculated volume of the patient's interstitial fluid compartment?",
"html": true,
"chtml": true,
"c": [
"7.0 L",
"10.5 L",
"28.0 L",
"38.5 L"
],
"a": 1,
"eh": "<p>Inulin measures extracellular fluid (ECF = 14 L) and ¹²⁵I-albumin measures plasma volume (3.5 L); interstitial fluid volume is determined by subtracting plasma volume from ECF volume (14 L - 3.5 L = 10.5 L).</p><p class=\"nbhint\"><b>Hint:</b> Determine which marker measures extracellular fluid as a whole and subtract the fraction contained strictly within the vascular space.</p>"
},
{
"t": "FBS Physiology · NBME Quiz 1",
"s": "A patient receives an intravenous infusion of a 290 mOsm/L urea solution. Given that the reflection coefficient (σ) of urea across cell membranes is 0, what shift in body fluid distribution and cell volume occurs once complete osmotic equilibrium is reached?",
"html": true,
"chtml": true,
"c": [
"Extracellular fluid (ECF) volume expands without any alteration in ICF volume or cell size.",
"Water moves into intracellular fluid (ICF), causing red blood cells and tissue cells to swell.",
"Intracellular solute concentration increases, creating an osmotic pull that contracts the ECF compartment.",
"Water moves out of the ICF into the ECF, causing cells to shrink (crenate)."
],
"a": 1,
"eh": "<p>Because urea freely permeates cell membranes (σ = 0), it acts as an ineffective osmole; the added fluid acts effectively as pure water relative to the cell interior, reducing total tonicity and driving water into cells.</p><p class=\"nbhint\"><b>Hint:</b> Consider the concept of effective osmolarity (tonicity) and how non-penetrating solutes differ from freely permeable solutes.</p>"
},
{
"t": "FBS Physiology · NBME Quiz 1",
"s": "A 32-year-old traveler develops acute cholera infection marked by profuse watery diarrhea. In the acute state before oral or intravenous rehydration, which combination of changes in body fluid parameters will be present?",
"html": true,
"chtml": true,
"c": [
"Decreased ECF volume, decreased ICF volume, increased serum osmolarity, and increased hematocrit.",
"Decreased ECF volume, increased ICF volume, decreased serum osmolarity, and unchanged plasma protein concentration.",
"Decreased ECF volume, unchanged ICF volume, increased plasma protein concentration, and increased hematocrit.",
"Increased ECF volume, decreased ICF volume, increased serum osmolarity, and decreased plasma protein concentration."
],
"a": 2,
"eh": "<p>Isosmotic contraction (diarrhea) involves the loss of isotonic fluid from the ECF; ICF volume and osmolarity remain unchanged, while concentration of non-filterable blood components (plasma proteins and RBCs) increases.</p><p class=\"nbhint\"><b>Hint:</b> Evaluate whether the fluid lost in acute secretory diarrhea is isotonic, hypotonic, or hypertonic relative to baseline plasma.</p>"
},
{
"t": "FBS Physiology · NBME Quiz 1",
"s": "A 48-year-old man with central diabetes insipidus secondary to a pituitary adenoma is unable to obtain water. Which set of fluid compartment shifts accurately characterizes his physiological state?",
"html": true,
"chtml": true,
"c": [
"Decreased ECF volume, increased ICF volume, and reduced serum osmolarity.",
"Increased ECF volume, increased ICF volume, and reduced serum osmolarity.",
"Decreased ECF volume, unchanged ICF volume, and normal serum osmolarity.",
"Decreased ECF volume, decreased ICF volume, and elevated serum osmolarity."
],
"a": 3,
"eh": "<p>Diabetes insipidus results in free water excretion leading to hyperosmotic contraction; loss of pure water elevates ECF osmolarity, drawing water out of the ICF until both compartments share an elevated osmolarity.</p><p class=\"nbhint\"><b>Hint:</b> Analyze the osmolarity of urine excreted without ADH stimulation and how losing dilute fluid alters serum tonicity.</p>"
},
{
"t": "FBS Physiology · NBME Quiz 1",
"s": "A 42-year-old woman with primary adrenal insufficiency (Addison disease) presents with postural hypotension and hyponatremia. What shift in body fluid compartments and hematocrit occurs in this patient?",
"html": true,
"chtml": true,
"c": [
"ECF volume decreases, ICF volume decreases, serum osmolarity increases, and hematocrit remains unchanged.",
"ECF volume decreases, ICF volume increases, serum osmolarity decreases, and hematocrit increases.",
"ECF volume increases, ICF volume increases, serum osmolarity decreases, and hematocrit decreases.",
"ECF volume increases, ICF volume decreases, serum osmolarity increases, and hematocrit decreases."
],
"a": 1,
"eh": "<p>Aldosterone deficiency causes renal Na⁺ wasting in excess of water loss (hyposmotic contraction); the resulting low ECF osmolarity drives water into cells (increasing ICF volume), while ECF contraction increases hematocrit.</p><p class=\"nbhint\"><b>Hint:</b> Deficiency of aldosterone leads to excessive renal loss of sodium relative to water, altering ECF relative to ICF osmolarity.</p>"
},
{
"t": "FBS Physiology · NBME Quiz 1",
"s": "A patient with small cell lung carcinoma develops Syndrome of Inappropriate Antidiuretic Hormone (SIADH). What changes in body fluid volumes and plasma protein concentration are expected?",
"html": true,
"chtml": true,
"c": [
"Unchanged ECF volume, increased ICF volume, decreased serum osmolarity, and normal plasma protein concentration.",
"Decreased ECF volume, increased ICF volume, decreased serum osmolarity, and increased plasma protein concentration.",
"Increased ECF volume, decreased ICF volume, increased serum osmolarity, and decreased plasma protein concentration.",
"Increased ECF volume, increased ICF volume, decreased serum osmolarity, and decreased plasma protein concentration."
],
"a": 3,
"eh": "<p>Excess ADH causes pure water retention (hyposmotic expansion), expanding both ECF and ICF volumes while diluting non-permeable vascular constituents, leading to lower plasma protein concentration.</p><p class=\"nbhint\"><b>Hint:</b> Consider how chronic water reabsorption driven by unregulated ADH affects total body water distribution and solute dilution.</p>"
},
{
"t": "FBS Physiology · NBME Quiz 1",
"s": "A 5-year-old boy with nephrotic syndrome presents with diffuse peripheral edema and ascites. Laboratory studies confirm heavy proteinuria and marked hypoalbuminemia. Which set of Starling forces best explains the pathophysiological mechanism driving fluid shift into his interstitium?",
"html": true,
"chtml": true,
"c": [
"Decreased capillary oncotic pressure (π<sub>c</sub>)",
"Increased capillary hydrostatic pressure (P<sub>c</sub>)",
"Increased interstitial fluid oncotic pressure (πᵢ)",
"Decreased capillary filtration coefficient (K<sub>f</sub>)"
],
"a": 0,
"eh": "<p>Massive urinary protein loss reduces plasma albumin concentration, decreasing capillary oncotic pressure (π<sub>c</sub>), which is the main inward-pulling force holding fluid within the capillary.</p><p class=\"nbhint\"><b>Hint:</b> Focus on the primary Starling force governed by plasma protein (albumin) concentration.</p>"
},
{
"t": "FBS Physiology · NBME Quiz 1",
"s": "A patient with chronic idiopathic pulmonary fibrosis experiences severe dyspnea. Functional testing demonstrates impaired pulmonary diffusing capacity for oxygen (O₂), while carbon dioxide (CO₂) elimination remains relatively unimpaired. Applying Fick's law of diffusion, which physical property of carbon dioxide accounts for this clinical discrepancy?",
"html": true,
"chtml": true,
"c": [
"Higher lipid solubility and diffusion permeability coefficient",
"Larger partial pressure gradient across the alveolar-capillary barrier",
"Saturable carrier-mediated transport mechanisms specific to carbon dioxide",
"Lower molecular weight causing rapid gas movement"
],
"a": 0,
"eh": "<p>Fick's law dictates that diffusion rate is proportional to permeability; CO₂ is significantly more lipid-soluble and has a much higher diffusion coefficient than O₂, allowing it to cross thick alveolar membranes more efficiently.</p><p class=\"nbhint\"><b>Hint:</b> Look for the physical parameter in Fick's diffusion equation that accounts for how easily a gas dissolves into lipid cell membranes.</p>"
},
{
"t": "FBS Physiology · NBME Quiz 1",
"s": "A patient with heart failure with reduced ejection fraction is initiated on oral digoxin. Which step-by-step cellular cascade mediates the positive inotropic effect of this drug?",
"html": true,
"chtml": true,
"c": [
"Direct stimulation of apical sarcoplasmic reticulum Ca²⁺-ATPase (SERCA) → enhanced uptake of cytosolic Ca²⁺ → rapid membrane depolarization",
"Activation of basolateral Na⁺/K⁺-ATPase → decreased intracellular Na⁺ → enhanced NCX activity → increased intracellular Ca²⁺ entry through L-type channels",
"Inhibition of apical Na⁺/H⁺ exchanger (NHE) → intracellular acidosis → sensitized troponin C binding to Ca²⁺",
"Inhibition of basolateral Na⁺/K⁺-ATPase → increased intracellular Na⁺ → decreased Na⁺/Ca²⁺ exchange (NCX) → increased intracellular Ca²⁺ → increased sarcoplasmic reticulum Ca²⁺ storage"
],
"a": 3,
"eh": "<p>Digoxin blocks the Na⁺/K⁺-ATPase, raising intracellular Na⁺; this reduces the sodium gradient required by NCX to pump Ca²⁺ out, leading to intracellular Ca²⁺ accumulation and increased SR storage for enhanced cardiac contraction.</p><p class=\"nbhint\"><b>Hint:</b> Trace how inhibiting primary active sodium transport indirectly impairs secondary active calcium efflux across cardiac sarcolemma.</p>"
},
{
"t": "FBS Physiology · NBME Quiz 1",
"s": "A patient receiving digoxin therapy for heart failure develops hypokalemia secondary to furosemide therapy. Shortly thereafter, the patient experiences severe digoxin toxicity, including visual disturbances and ventricular bigeminy. What molecular mechanism explains why low serum potassium potentiates digoxin toxicity?",
"html": true,
"chtml": true,
"c": [
"Hypokalemia causes structural denaturation of the Na⁺/K⁺-ATPase pump, preventing digoxin from dissociating.",
"Hypokalemia hyperpolarizes the cardiac resting membrane potential, opening voltage-gated calcium channels that increase digoxin uptake.",
"Low serum potassium directly inhibits renal tubular excretion of digoxin, causing dramatic rises in total drug blood concentration.",
"Potassium competes with digoxin for the extracellular binding site on the Na⁺/K⁺-ATPase pump; low K⁺ increases digoxin binding."
],
"a": 3,
"eh": "<p>Extracellular potassium and digoxin compete for the same binding domain on the alpha subunit of Na⁺/K⁺-ATPase; hypokalemia reduces this competition, allowing greater digoxin binding and enhanced pump inhibition.</p><p class=\"nbhint\"><b>Hint:</b> Consider how extracellular ions interact competitively with cardiac drug receptor sites on the primary sodium-potassium pump.</p>"
},
{
"t": "FBS Physiology · NBME Quiz 1",
"s": "In a patient with unmanaged diabetes mellitus and a blood glucose level of 380 mg/dL, glucose appears abundantly in the urine (glucosuria). What specific transport mechanism in the renal proximal tubule becomes rate-limiting when the transport maximum (Tₘ) is exceeded?",
"html": true,
"chtml": true,
"c": [
"Apical secondary active transport via Sodium-Glucose Cotransporters (SGLT2)",
"Basolateral passive simple diffusion through aquaporin channels",
"Basolateral primary active transport via the Na⁺/K⁺-ATPase pump",
"Apical facilitated diffusion via GLUT4 transporters"
],
"a": 0,
"eh": "<p>Glucose reabsorption at the apical membrane of the proximal tubule relies on secondary active symport via SGLT transporters; once plasma glucose exceeds threshold (≈ 200 mg/dL) and reaches Tₘ (≈ 375 mg/min), these carriers become fully saturated.</p><p class=\"nbhint\"><b>Hint:</b> Identify the carrier protein on the luminal brush border membrane that couples sodium influx down its gradient to glucose reabsorption against its gradient.</p>"
},
{
"t": "FBS Physiology · NBME Quiz 1",
"s": "A patient with type 2 diabetes mellitus is started on empagliflozin, an SGLT2 inhibitor. What underlying biophysical transport change occurs in the proximal tubule, and what predictable clinical effect results?",
"html": true,
"chtml": true,
"c": [
"Inhibition of apical secondary active symport → decreased glucose reabsorption → glucosuria and osmotic diuresis",
"Stimulation of apical Na⁺/H⁺ antiport → enhanced urinary acidification → severe metabolic alkalosis",
"Inhibition of basolateral facilitated diffusion → intracellular accumulation of glucose → cellular swelling and lysis",
"Inhibition of basolateral Na⁺/K⁺-ATPase → loss of intracellular potassium → systemic hyperkalemia"
],
"a": 0,
"eh": "<p>SGLT2 inhibitors selectively block apical Na⁺/glucose symport in the early proximal tubule, preventing glucose reabsorption, lowering plasma glucose, and causing glucosuria, osmotic diuresis, and volume depletion.</p><p class=\"nbhint\"><b>Hint:</b> Recall the exact apical transport mechanism blocked by gliflozins and the resulting fate of unabsorbed luminal solute.</p>"
},
{
"t": "FBS Physiology · NBME Quiz 1",
"s": "An experimental tissue preparation is subjected to severe hypoxia, leading to total intracellular ATP depletion. Which sequence of transport failures and physical changes will occur in these cells?",
"html": true,
"chtml": true,
"c": [
"Facilitated diffusion carriers stall → intracellular K⁺ increases exponentially → hyperosmotic ICF contracts ECF",
"Secondary active transport fails first → GLUT transporters reverse direction → primary active transport halts → cells shrink",
"Primary active Na⁺/K⁺-ATPase fails first → loss of Na⁺ gradient causes secondary active transport to fail → intracellular Na⁺ accumulates → cells swell",
"Simple diffusion stops → membrane lipid bilayer becomes impermeable to gases → intracellular pressure drops rapidly"
],
"a": 2,
"eh": "<p>ATP depletion directly halts primary active pumps (Na⁺/K⁺-ATPase); without the sodium gradient, secondary active transport stops, leading to intracellular solute accumulation, osmotic water entry, and cellular swelling.</p><p class=\"nbhint\"><b>Hint:</b> Determine which type of membrane transport relies directly on metabolic energy and what happens to intracellular sodium when that pump shuts down.</p>"
},
{
"t": "FBS Physiology · NBME Quiz 1",
"s": "A patient's intracellular potassium concentration [K⁺]ᵢₙ is 140 mM and extracellular potassium [K⁺]ₒᵤₜ is 4.5 mM. If acute renal failure increases [K⁺]ₒᵤₜ to 9.0 mM, what is the shift in the potassium equilibrium potential (Eₖ) calculated via the Nernst equation at 37 °C (E = 61.5/z log [out]/[in])?",
"html": true,
"chtml": true,
"c": [
"Shifts from approximately +65 mV to +35 mV (becomes less positive).",
"Shifts from approximately −92 mV to −73 mV (becomes more positive / depolarized).",
"Shifts from approximately −92 mV to −110 mV (becomes more negative / hyperpolarized).",
"Remains unchanged at −70 mV because the Na⁺/K⁺-ATPase pump immediately restores baseline gradients."
],
"a": 1,
"eh": "<p>Eₖ₁ = 61.5 log(4.5 / 140) ≈ −91.7 mV. Eₖ₂ = 61.5 log(9.0 / 140) ≈ −73.2 mV. Doubling extracellular potassium decreases the concentration gradient, making Eₖ less negative by about +18.5 mV.</p><p class=\"nbhint\"><b>Hint:</b> Apply the Nernst equation by evaluating how doubling the numerator inside the logarithmic term changes the calculated outcome.</p>"
},
{
"t": "FBS Physiology · NBME Quiz 1",
"s": "A 62-year-old man with chronic kidney disease presents with severe hyperkalemia (serum K⁺ = 7.5 mEq/L). On physical examination, he exhibits profound skeletal muscle weakness and diminished deep tendon reflexes. What biophysical mechanism accounts for this clinical paradox of muscle weakness despite a resting membrane potential that is closer to threshold?",
"html": true,
"chtml": true,
"c": [
"Excess potassium competitively blocks acetylcholine binding at the neuromuscular junction post-synaptic receptor.",
"Hyperkalemia enhances the baseline outward K⁺ leak current, causing hyperpolarization of skeletal muscle membranes.",
"Elevated extracellular potassium shifts the threshold potential away from resting potential toward +35 mV.",
"Sustained membrane depolarization leads to persistent inactivation of voltage-gated Na⁺ channel h gates (accommodation)."
],
"a": 3,
"eh": "<p>Hyperkalemia depolarizes the resting membrane potential; chronic partial depolarization keeps the voltage-dependent inactivation (h) gates of sodium channels closed, preventing them from resetting and rendering the tissue inexcitable.</p><p class=\"nbhint\"><b>Hint:</b> Consider what happens to the inactivation gates of voltage-gated sodium channels when membrane depolarization is sustained rather than transient.</p>"
},
{
"t": "FBS Physiology · NBME Quiz 1",
"s": "Following a total thyroidectomy, a patient accidentally suffers removal of all four parathyroid glands. Direct post-operative blood work demonstrates critical hypocalcemia. The patient soon develops carpopedal spasms and a positive Chvostek sign. What electrophysiological modification triggers this spontaneous muscular hyperactivity?",
"html": true,
"chtml": true,
"c": [
"Hypocalcemia hyperpolarizes the resting membrane potential, placing it further away from the activation threshold.",
"Low extracellular calcium shifts the threshold potential closer to the resting membrane potential, increasing membrane excitability.",
"Hypocalcemia elevates the intracellular sodium concentration, driving continuous active depolarization upstroke.",
"Low extracellular calcium directly blocks voltage-gated K⁺ channels, preventing action potential repolarization."
],
"a": 1,
"eh": "<p>Extracellular calcium stabilizes voltage-gated Na⁺ channels; hypocalcemia allows these channels to open at less depolarized potentials (lowers the threshold toward RMP), causing spontaneous repolarization-depolarization cycles and tetany.</p><p class=\"nbhint\"><b>Hint:</b> Focus on the role of extracellular divalent cations in stabilizing sodium channel gating and setting the threshold voltage.</p>"
},
{
"t": "FBS Physiology · NBME Quiz 1",
"s": "During the upstroke (Phase 0) of a nerve action potential, membrane potential rapidly moves toward +35 mV. Which gating state transition of voltage-gated Na⁺ channels initiates this rapid depolarization?",
"html": true,
"chtml": true,
"c": [
"Activation (m) gates open rapidly while inactivation (h) gates remain open.",
"Both activation (m) and inactivation (h) gates close simultaneously to prevent sodium efflux.",
"Inactivation (h) gates open rapidly while activation (m) gates close tightly.",
"Activation (m) gates close while delayed-rectifier potassium gates open instantaneously."
],
"a": 0,
"eh": "<p>At resting membrane potential, m gates are closed and h gates are open; reaching threshold triggers rapid opening of m gates, permitting massive Na⁺ influx until h gates close slowly at peak overshoot.</p><p class=\"nbhint\"><b>Hint:</b> Recall the dual-gate model for voltage-gated sodium channels and their respective positions at rest versus during the upstroke.</p>"
},
{
"t": "FBS Physiology · NBME Quiz 1",
"s": "A diner at a seafood restaurant ingests poorly prepared fugu (pufferfish) containing tetrodotoxin. Shortly thereafter, the patient experiences paresthesias, flaccid paralysis, and respiratory failure. Which specific event in nerve action potential conduction is directly blocked by this toxin?",
"html": true,
"chtml": true,
"c": [
"Persistent activation of voltage-gated Na⁺ channels, causing continuous membrane depolarization.",
"Intracellular blockade of voltage-gated K⁺ channels, preventing action potential repolarization.",
"Extracellular blockade of voltage-gated Na⁺ channels, preventing action potential upstroke.",
"Selective degradation of myelin sheaths, markedly reducing axon length constants."
],
"a": 2,
"eh": "<p>Tetrodotoxin (and saxitoxin) binds the extracellular side of voltage-gated Na⁺ channels, blocking Na⁺ influx and eliminating the action potential upstroke.</p><p class=\"nbhint\"><b>Hint:</b> Identify the ion channel and channel face targeted by pufferfish toxin during electrical signal initiation.</p>"
},
{
"t": "FBS Physiology · NBME Quiz 1",
"s": "An investigator applies tetraethylammonium (TEA) to an isolated axon preparation before delivering a threshold electrical stimulus. How will the shape of the resulting action potential waveform be altered?",
"html": true,
"chtml": true,
"c": [
"The resting membrane potential will instantly drop from −70 mV to −120 mV.",
"The threshold potential will shift to a positive value, requiring stronger stimuli to trigger an action potential.",
"Repolarization will be severely prolonged or impaired, eliminating the undershoot (after-hyperpolarization).",
"The rapid upstroke peak will be flattened and fail to overshoot above 0 mV."
],
"a": 2,
"eh": "<p>TEA selectively blocks voltage-gated K⁺ channels from the intracellular side; this blocks delayed outward K⁺ current, impairing repolarization and prolonging action potential duration.</p><p class=\"nbhint\"><b>Hint:</b> Consider which voltage-gated channel drives phase 3 repolarization and brings the membrane back down toward Eₖ.</p>"
},
{
"t": "FBS Physiology · NBME Quiz 1",
"s": "A patient diagnosed with Multiple Sclerosis exhibits marked visual and motor conduction deficits. Electrophysiological testing indicates significant demyelination of central axons. Which changes in axonal cable properties (length constant λ and time constant τ) account for the resulting conduction slowdown or block?",
"html": true,
"chtml": true,
"c": [
"Internal axon resistance (Rᵢ) increases exponentially, while membrane capacitance (Cₘ) drops to zero.",
"Axonal time constant (τ) decreases dramatically, accelerating saltatory depolarization across consecutive nodes of Ranvier.",
"Membrane resistance (Rₘ) increases and internal axon resistance (Rᵢ) decreases, causing an increased length constant (λ).",
"Membrane resistance (Rₘ) decreases and membrane capacitance (Cₘ) increases, causing a decreased length constant (λ)."
],
"a": 3,
"eh": "<p>Myelin normally increases Rₘ and decreases Cₘ; demyelination lowers Rₘ (allowing charge leakage) and increases Cₘ, which reduces the length constant (λ = √(Rₘ/Rᵢ)) so current dissipates before reaching the next node.</p><p class=\"nbhint\"><b>Hint:</b> Recall how myelin affects membrane electrical insulation (Rₘ) and charge storage capability (Cₘ).</p>"
},
{
"t": "FBS Physiology · NBME Quiz 1",
"s": "A clinician administers a local anesthetic (lidocaine) infiltration for a skin laceration repair. Which functional class of nerve fibers will lose signal conduction first?",
"html": true,
"chtml": true,
"c": [
"Unmyelinated postganglionic autonomic fibers only",
"Small, myelinated Aδ pain and temperature fibers",
"Large, heavily myelinated Aβ touch and pressure fibers",
"Large, heavily myelinated Aα motor fibers"
],
"a": 1,
"eh": "<p>Local anesthetics block small, myelinated fibers (such as Aδ pain/temperature fibers) and unmyelinated fibers (C fibers) first because distance between nodes is small and firing rates are high (use-dependent block).</p><p class=\"nbhint\"><b>Hint:</b> Consider how fiber diameter and myelination state influence vulnerability to use-dependent sodium channel blockade.</p>"
},
{
"t": "FBS Physiology · NBME Quiz 1",
"s": "An athlete stands at the starting line of a 100-meter race. Seconds before the starting pistol fires, her heart rate increases from 68 bpm to 115 bpm without any physical exertion. What physiological control mechanism mediates this anticipatory cardiac response?",
"html": true,
"chtml": true,
"c": [
"Feedforward control",
"Negative feedback control",
"Positive feedback loop",
"Long-term pressure natriuresis"
],
"a": 0,
"eh": "<p>Feedforward control produces an anticipatory physiological response before actual changes in regulated variables (like blood arterial O₂ or CO₂) occur.</p><p class=\"nbhint\"><b>Hint:</b> Distinguish between a system that reacts to an existing error versus one that prepares the body in advance of an upcoming disturbance.</p>"
},
{
"t": "FBS Physiology · NBME Quiz 1",
"s": "A patient presenting with acute confusion has laboratory results showing serum Na⁺ = 140 mEq/L, blood glucose = 180 mg/dL, and Blood Urea Nitrogen (BUN) = 56 mg/dL. What are the calculated total plasma osmolarity and effective plasma osmolality (tonicity)?",
"html": true,
"chtml": true,
"c": [
"Total osmolarity = 290 mOsm/kg; Effective osmolality = 310 mOsm/kg",
"Total osmolarity = 310 mOsm/kg; Effective osmolality = 290 mOsm/kg",
"Total osmolarity = 280 mOsm/kg; Effective osmolality = 280 mOsm/kg",
"Total osmolarity = 336 mOsm/kg; Effective osmolality = 280 mOsm/kg"
],
"a": 1,
"eh": "<p>Total plasma Osm ≈ 2[Na⁺] + Glucose/18 + BUN/2.8 = 280 + 10 + 20 = 310 mOsm/kg. Effective Osm excludes urea (since σ = 0), giving 280 + 10 = 290 mOsm/kg.</p><p class=\"nbhint\"><b>Hint:</b> Calculate total osmolarity using 2[Na⁺] + Glucose/18 + BUN/2.8 and subtract the ineffective osmole term.</p>"
},
{
"t": "FBS Physiology · NBME Quiz 1",
"s": "A group of vacationers consume tropical reef fish (barracuda) and subsequently develop ciguatera poisoning, characterized by paresthesias, nausea, and cold-allodynia (perceiving cold objects as burning hot). Ciguatoxin produces these manifestations by binding to voltage-gated Na⁺ channels. What direct electrophysiological alteration does this toxin cause?",
"html": true,
"chtml": true,
"c": [
"It keeps voltage-gated Na⁺ channels in a persistently open state, causing sustained membrane depolarization.",
"It blocks the outer pore of voltage-gated Na⁺ channels, preventing action potential upstroke.",
"It blocks voltage-gated K⁺ channels, preventing muscle repolarization.",
"It degrades acetylcholine at the presynaptic neuromuscular junction."
],
"a": 0,
"eh": "<p>Ciguatoxin (and batrachotoxin) prevents voltage-gated Na⁺ channels from closing, causing persistent channel opening and prolonged membrane depolarization.</p><p class=\"nbhint\"><b>Hint:</b> Differentiate between toxins that block the sodium pore versus those that lock the channel in an activated configuration.</p>"
}
]
},
{
"course": "fbs",
"subject": "Cell Biology",
"name": "FBS Cell Biology · NBME Quiz 1",
"prefix": "nfc1",
"note": "NotebookLM quiz built from the FBS Cell Biology study guide",
"qs": [
{
"t": "FBS Cell Biology · NBME Quiz 1",
"s": "A 3-year-old child presents with coarse facial features, severe joint stiffness, clouded corneas, and marked gingival hyperplasia. Laboratory evaluation reveals abnormally elevated serum levels of multiple lysosomal enzymes. Which Golgi processing step is defective in this patient's cells?",
"html": true,
"chtml": true,
"c": [
"Sulfation of glycosaminoglycans in the trans-Golgi network",
"SRP receptor recognition on the rough endoplasmic reticulum",
"Addition of mannose-6-phosphate tags in the cis-Golgi",
"Cleavage of C-peptide by prohormone convertases in secretory granules"
],
"a": 2,
"eh": "<p>I-cell disease (mucolipidosis II) is caused by a deficiency in N-acetylglucosamine-1-phosphotransferase, preventing the addition of mannose-6-phosphate (M6P) tags to acid hydrolases in the cis-Golgi, which causes them to be secreted extracellularly.</p><p class=\"nbhint\"><b>Hint:</b> Consider the key chemical tag added in the Golgi that acts as an address label for lysosomal targeting.</p>"
},
{
"t": "FBS Cell Biology · NBME Quiz 1",
"s": "An 8-month-old infant demonstrates neurodegeneration, developmental regression, hyperacusis, and a cherry-red macular spot upon retinal examination. Abdominal examination reveals no hepatosplenomegaly. Electron microscopy of tissue biopsy shows lysosomes with concentric 'onion-skin' lamellar bodies. Accumulation of which substrate is responsible for this condition?",
"html": true,
"chtml": true,
"c": [
"Sphingomyelin",
"Galactocerebroside",
"GM₂ ganglioside",
"Glucocerebroside"
],
"a": 2,
"eh": "<p>Tay-Sachs disease is an autosomal recessive disorder caused by Hexosaminidase A deficiency, leading to GM₂ ganglioside accumulation, progressive neurodegeneration, a cherry-red macula, onion-skin lysosomes, and absence of organomegaly.</p><p class=\"nbhint\"><b>Hint:</b> Focus on the classic lysosomal storage disease that features a cherry-red spot without abdominal organ enlarged.</p>"
},
{
"t": "FBS Cell Biology · NBME Quiz 1",
"s": "A 32-year-old man presents with recurrent severe bone pain and easy bruising. Physical examination reveals massive splenomegaly. A bone marrow aspirate demonstrates large macrophages with cytoplasm resembling 'wrinkled tissue paper.' Which enzyme is deficient in this patient?",
"html": true,
"chtml": true,
"c": [
"α-galactosidase A",
"Glucocerebrosidase",
"Hexosaminidase A",
"Sphingomyelinase"
],
"a": 1,
"eh": "<p>Gaucher disease, the most common lysosomal storage disease, is caused by a deficiency in glucocerebrosidase, leading to glucocerebroside accumulation inside macrophages ('Gaucher cells') and clinical bone crises with hepatosplenomegaly.</p><p class=\"nbhint\"><b>Hint:</b> Identify the deficient enzyme in the most common lysosomal storage disorder that specifically affects bone marrow macrophages.</p>"
},
{
"t": "FBS Cell Biology · NBME Quiz 1",
"s": "An 11-year-old boy experiences episodic severe, burning pain in his hands and feet triggered by exercise and warm weather. Physical examination reveals dark red punctate macules (angiokeratomas) around his umbilicus and groin. Urinalysis demonstrates proteinuria. Which inherited condition is most consistent with these findings?",
"html": true,
"chtml": true,
"c": [
"Niemann-Pick disease",
"Metachromatic leukodystrophy",
"Hunter syndrome",
"Fabry disease"
],
"a": 3,
"eh": "<p>Fabry disease is an X-linked recessive deficiency of α-galactosidase A causing globotriaosylceramide accumulation, leading to neuropathic pain, angiokeratomas, hypohidrosis, and progressive renal and cardiac complications.</p><p class=\"nbhint\"><b>Hint:</b> Recall the X-linked recessive lysosomal storage disease characteristically associated with skin angiokeratomas and peripheral neuropathy.</p>"
},
{
"t": "FBS Cell Biology · NBME Quiz 1",
"s": "A newborn infant presents with severe muscle weakness (hypotonia), dysmorphic facial features with a prominent forehead, and focal seizures. Laboratory studies demonstrate markedly elevated plasma levels of very-long-chain fatty acids (&gt;C22) and phytanic acid. This patient's condition is caused by a defect in which cellular organelle biogenesis process?",
"html": true,
"chtml": true,
"c": [
"Lysosomal enzyme trafficking via M6P receptors",
"Mitochondrial electron transport chain complex assembly",
"Peroxisomal biogenesis due to mutated PEX genes",
"Endoplasmic reticulum translocon protein transport"
],
"a": 2,
"eh": "<p>Zellweger syndrome is a lethal peroxisomal biogenesis disorder caused by mutations in PEX genes, preventing protein import via PTS1/peroxins and leading to accumulation of very-long-chain fatty acids and phytanic acid.</p><p class=\"nbhint\"><b>Hint:</b> Identify the single-membrane organelle responsible for the initial β-oxidation of very-long-chain fatty acids.</p>"
},
{
"t": "FBS Cell Biology · NBME Quiz 1",
"s": "A 24-year-old patient presents with progressive night blindness, difficulty balancing when walking, dry scaly skin (ichthyosis), and sensorineural hearing loss. Laboratory testing shows marked elevation of phytanic acid in plasma. Which metabolic process is primarily impaired in this condition?",
"html": true,
"chtml": true,
"c": [
"Mitochondrial β-oxidation",
"Lysosomal degradation of glycosaminoglycans",
"Peroxisomal α-oxidation",
"Peroxisomal ABCD1 transporter activity"
],
"a": 2,
"eh": "<p>Refsum disease is caused by an autosomal recessive defect in peroxisomal α-oxidation, leading to accumulation of phytanic acid, which presents with ataxia, retinitis pigmentosa, ichthyosis, and polyneuropathy.</p><p class=\"nbhint\"><b>Hint:</b> Recall the specific oxidative process required to clear branched-chain fatty acids derived from dietary plant chlorophyll.</p>"
},
{
"t": "FBS Cell Biology · NBME Quiz 1",
"s": "An 18-year-old man experiences sudden, painless loss of central vision in his right eye, followed two months later by similar vision loss in his left eye. A pedigree reveals that several maternal uncles experienced vision loss in early adulthood, while affected males in the family never transmitted the trait to their children. Muscle biopsy demonstrates ragged-red fibers on Gomori trichrome staining. What is the primary genetic mechanism governing the transmission of this disorder?",
"html": true,
"chtml": true,
"c": [
"Autosomal recessive inheritance with threshold heteroplasmy",
"X-linked recessive inheritance with variable expressivity",
"Autosomal dominant inheritance with genetic anticipation",
"Maternal inheritance of mitochondrial DNA mutations"
],
"a": 3,
"eh": "<p>Leber hereditary optic neuropathy (LHON) exhibits maternal inheritance via mitochondrial DNA mutations, causing sudden bilateral vision loss in young males without transmission from affected fathers.</p><p class=\"nbhint\"><b>Hint:</b> Consider the unique mode of inheritance where mitochondria are supplied exclusively by the oocyte.</p>"
},
{
"t": "FBS Cell Biology · NBME Quiz 1",
"s": "During the execution phase of apoptosis, a specific membrane phospholipid is flipped from the inner leaflet to the outer leaflet of the plasma membrane, providing a signal for macrophage clearance. Which laboratory reagent specifically binds this externalized phospholipid to identify apoptotic cells?",
"html": true,
"chtml": true,
"c": [
"Clathrin binding to phosphatidylcholine",
"Cholera toxin binding to ganglioside GM1",
"TUNEL staining binding to sphingomyelin",
"Annexin V binding to phosphatidylserine"
],
"a": 3,
"eh": "<p>Phosphatidylserine (PS) normally resides in the inner leaflet; during early apoptosis, PS flips to the outer leaflet as an 'eat-me' signal that is specifically detected by Annexin V.</p><p class=\"nbhint\"><b>Hint:</b> Identify the membrane component that functions as an 'eat me' signal when translocated to the cell surface.</p>"
},
{
"t": "FBS Cell Biology · NBME Quiz 1",
"s": "A patient undergoing combination chemotherapy for metastatic colon adenocarcinoma develops multi-drug resistance. Biopsy of the resistant tumor demonstrates significant upregulation of P-glycoprotein (MDR1). What is the mechanism by which this protein confers resistance?",
"html": true,
"chtml": true,
"c": [
"Retrograde COPI-mediated transport of drugs from the Golgi to the RER",
"Facilitated diffusion of drugs down their concentration gradient into endosomes",
"ATP-dependent active transport of chemotherapeutic drugs out of the cell",
"Proteasomal degradation of intracellular chemotherapeutic molecules"
],
"a": 2,
"eh": "<p>P-glycoprotein (MDR1) is an ATP-binding cassette (ABC) transporter that acts as an ATP-dependent efflux pump, extruding hydrophobic chemotherapeutic agents from tumor cells.</p><p class=\"nbhint\"><b>Hint:</b> Focus on the family of energy-requiring membrane pumps (ABC transporters) involved in drug efflux.</p>"
},
{
"t": "FBS Cell Biology · NBME Quiz 1",
"s": "A 16-year-old girl presents with fatigue, mild jaundice, and splenomegaly. Peripheral blood smear reveals microcytic erythrocytes lacking central pallor (spherocytes), and mean corpuscular hemoglobin concentration (MCHC) is elevated. Eosin-5-maleimide (EMA) binding testing confirms hereditary spherocytosis. A primary defect in which membrane skeleton network is responsible for this condition?",
"html": true,
"chtml": true,
"c": [
"Desmin intermediate filaments and myofilaments",
"Microtubule α/β-tubulin dimers",
"Spectrin, ankyrin, and band 3 complex",
"Nuclear lamins A, B, and C intermediate filaments"
],
"a": 2,
"eh": "<p>Hereditary spherocytosis is an autosomal dominant defect in erythrocyte membrane tethering proteins (spectrin, ankyrin, band 3, protein 4.1), leading to membrane blebbing, loss of surface area, spherocyte formation, and splenic sequestration.</p><p class=\"nbhint\"><b>Hint:</b> Think about the sub-membrane scaffold components that maintain erythrocyte biconcave shape and deformability.</p>"
},
{
"t": "FBS Cell Biology · NBME Quiz 1",
"s": "A 5-year-old boy presents with progressive proximal muscle weakness, calf pseudohypertrophy, and a positive Gowers sign. Serum creatine kinase is markedly elevated. Genetic testing reveals a frameshift deletion in a gene encoding a protein that anchors intracellular microfilaments to extracellular matrix proteins. What is the molecular pathophysiology of this patient's condition?",
"html": true,
"chtml": true,
"c": [
"Hyperphosphorylation of neurofilaments causing motor neuron axon failure",
"Complete absence of functional dystrophin protein",
"Expression of a truncated, partially functional dystrophin protein",
"Defective cleavage of preproinsulin in the rough endoplasmic reticulum"
],
"a": 1,
"eh": "<p>Duchenne muscular dystrophy is an X-linked recessive disorder caused by frameshift deletions leading to complete loss of dystrophin, which normally anchors actin microfilaments to the transmembrane dystroglycan complex.</p><p class=\"nbhint\"><b>Hint:</b> Distinguish between frameshift (total loss) and in-frame (truncated protein) mutations in muscular dystrophy.</p>"
},
{
"t": "FBS Cell Biology · NBME Quiz 1",
"s": "A 58-year-old woman undergoing treatment for metastatic breast carcinoma receives a chemotherapeutic agent that selectively binds β-tubulin subunits, preventing microtubule depolymerization and freezing the mitotic spindle during metaphase. Which medication exhibits this mechanism?",
"html": true,
"chtml": true,
"c": [
"Colchicine",
"Vincristine",
"Cytochalasin",
"Paclitaxel"
],
"a": 3,
"eh": "<p>Paclitaxel (taxane) binds β-tubulin and stabilizes microtubules, hyper-stabilizing the mitotic spindle to block depolymerization and arrest mitosis in metaphase.</p><p class=\"nbhint\"><b>Hint:</b> Recall the mnemonic that 'taxes' stabilize structure by preventing disassembly.</p>"
},
{
"t": "FBS Cell Biology · NBME Quiz 1",
"s": "A 45-year-old man develops severe autonomic instability, agitation, and hydrophobia three weeks after being bitten by a wild bat. The pathogen responsible for his symptoms entered peripheral nerve terminals and migrated to the central nervous system neuronal cell bodies. Which motor protein and transport direction mediated this axonal movement?",
"html": true,
"chtml": true,
"c": [
"Dynein moving anterograde toward the plus-end at the centrosome",
"Kinesin moving anterograde toward the plus-end at the axon terminal",
"Myosin II moving along actin microfilaments toward the barbed end",
"Dynein moving retrograde toward the minus-end at the centrosome"
],
"a": 3,
"eh": "<p>Retrograde axonal transport toward the neuron cell body (minus-end of microtubules) is mediated by dynein; neurotropic pathogens like rabies virus, HSV, polio, and tetanus toxin hijack this motor protein.</p><p class=\"nbhint\"><b>Hint:</b> Distinguish between the motor protein that moves toward the centrosome (minus-end) versus the cell periphery (plus-end).</p>"
},
{
"t": "FBS Cell Biology · NBME Quiz 1",
"s": "A 28-year-old man presents with a history of recurrent sinusitis, bronchiectasis, and primary infertility. Physical examination and imaging reveal dextrocardia and complete reversal of abdominal organs (situs inversus totalis). Semen analysis shows normal sperm count with non-motile spermatozoa. What structural defect causes this patient's condition?",
"html": true,
"chtml": true,
"c": [
"Mutations in cytokeratin intermediate filaments forming desmosomes",
"Defective γ-tubulin ring complexes in centrosome MTOCs",
"Absence of inner and/or outer dynein arms in 9+2 axonemes",
"Impaired clathrin coat assembly during endocytosis"
],
"a": 2,
"eh": "<p>Kartagener syndrome (primary ciliary dyskinesia) is caused by an autosomal recessive defect in axonemal dynein arms, rendering motile cilia (9+2 structure) and flagella immotile.</p><p class=\"nbhint\"><b>Hint:</b> Identify the ATP-dependent motor arm essential for generating force across the microtuble doublets of cilia.</p>"
},
{
"t": "FBS Cell Biology · NBME Quiz 1",
"s": "A 38-year-old woman undergoes a cervical biopsy that reveals invasive squamous cell carcinoma. Diagnostic testing confirms integration of high-risk Human Papillomavirus (HPV) type 16 into the host genome. Through what mechanism does the viral oncogene protein E7 drive aberrant cell cycle progression?",
"html": true,
"chtml": true,
"c": [
"Preventing APC/C activation during the spindle assembly checkpoint",
"Targeting p53 for ubiquitin-mediated proteasomal degradation",
"Inhibiting cyclin D-CDK4/6 complex assembly during G1 phase",
"Binding and hyper-inactivating the retinoblastoma (Rb) protein, releasing E2F"
],
"a": 3,
"eh": "<p>HPV E7 binds and inactivates the tumor suppressor Rb, causing the release of unbound E2F transcription factor and promoting unchecked cell cycle progression from G1 to S phase.</p><p class=\"nbhint\"><b>Hint:</b> Differentiate between the targets of HPV viral proteins E6 and E7 in G1/S regulation.</p>"
},
{
"t": "FBS Cell Biology · NBME Quiz 1",
"s": "A 62-year-old man presents with non-tender, generalized lymphadenopathy. A lymph node biopsy reveals follicular lymphoma, and cytogenetic analysis demonstrates a t(14;18) translocation. How does the overexpressed gene product resulting from this translocation inhibit apoptosis?",
"html": true,
"chtml": true,
"c": [
"It stabilizes the outer mitochondrial membrane to prevent cytochrome c release",
"It binds Apaf-1 and dATP to form the functional apoptosome",
"It directly activates caspase-8 via the Fas/FADD death receptor pathway",
"It degrades inhibitor of apoptosis proteins (IAPs) like survivin"
],
"a": 0,
"eh": "<p>The t(14;18) translocation moves the anti-apoptotic BCL-2 gene to the Ig heavy-chain promoter, causing BCL-2 overexpression, which keeps the outer mitochondrial membrane intact and prevents cytochrome c release.</p><p class=\"nbhint\"><b>Hint:</b> Recall how overexpressed BCL-2 affects mitochondrial membrane permeability during cell survival.</p>"
},
{
"t": "FBS Cell Biology · NBME Quiz 1",
"s": "An intracellular protein synthesized in the rough endoplasmic reticulum features a C-terminal Lys-Asp-Glu-Leu (KDEL) amino acid sequence. If this resident ER protein escapes into the cis-Golgi apparatus, which coat protein coats the transport vesicles that return it to the ER lumen?",
"html": true,
"chtml": true,
"c": [
"COPI",
"Clathrin",
"Caveolin",
"COPII"
],
"a": 0,
"eh": "<p>COPI coats vesicles mediating retrograde transport (Golgi → ER and intra-Golgi), retrieving escaped KDEL-tagged proteins back to the ER.</p><p class=\"nbhint\"><b>Hint:</b> Use the directional mnemonic distinguishing forward (ER to Golgi) vs backward (retrograde) vesicle transport coat proteins.</p>"
},
{
"t": "FBS Cell Biology · NBME Quiz 1",
"s": "A 42-year-old female healthcare worker is evaluated in the emergency department for severe hypoglycemia (blood glucose 30 mg/dL). Laboratory workup reveals markedly elevated serum insulin levels accompanied by undetectable serum C-peptide levels. What step in endogenous pancreatic β-cell hormone processing distinguishes this presentation from an insulinoma?",
"html": true,
"chtml": true,
"c": [
"Endogenous secretion involves 1:1 co-release of insulin and C-peptide following prohormone convertase cleavage in secretory granules",
"Sulfonylurea administration selectively elevates serum insulin without altering C-peptide concentration",
"Insulinomas selectively synthesize and secrete preproinsulin without cleaving its N-terminal signal sequence",
"Exogenous insulin administration increases proinsulin synthesis in the RER lumen"
],
"a": 0,
"eh": "<p>Endogenous insulin processing involves prohormone convertase cleavage of proinsulin into equal amounts of insulin and C-peptide; exogenously administered insulin lacks C-peptide, suppressing endogenous production.</p><p class=\"nbhint\"><b>Hint:</b> Consider how endogenous proinsulin is cleaved prior to exocytosis compared to pharmaceutical insulin preparations.</p>"
},
{
"t": "FBS Cell Biology · NBME Quiz 1",
"s": "A biopsy of a deep soft tissue retroperitoneal mass from a 50-year-old patient reveals malignant spindle-shaped cells. Diagnostic tissue immunohistochemistry demonstrates intense positive staining for desmin and actin, but negative staining for cytokeratin, GFAP, and vimentin. What is the cell lineage of origin for this neoplasm?",
"html": true,
"chtml": true,
"c": [
"Muscle tissue (rhabdomyosarcoma or leiomyosarcoma)",
"Epithelial tissue (carcinoma)",
"Astroglial tissue (glioma)",
"Mesenchymal connective tissue (fibrosarcoma)"
],
"a": 0,
"eh": "<p>Desmin is an intermediate filament specific to muscle cells, serving as a diagnostic immunohistochemical marker for myogenic tumors like rhabdomyosarcoma and leiomyosarcoma.</p><p class=\"nbhint\"><b>Hint:</b> Match the specific intermediate filament protein marker desmin to its corresponding tissue cell type.</p>"
},
{
"t": "FBS Cell Biology · NBME Quiz 1",
"s": "Human interphase nuclei contain structural domains with distinct transcriptional activities. Inactive, highly condensed chromosomal regions that replicate late in S phase (such as the Barr body in female somatic cells) are characterized as which form of chromatin?",
"html": true,
"chtml": true,
"c": [
"Euchromatin",
"Nucleolus",
"Heterochromatin",
"Centromere"
],
"a": 2,
"eh": "<p>Heterochromatin is dense, highly condensed, transcriptionally inactive chromatin (e.g., the inactivated X chromosome/Barr body) that resists transcription factor access.</p><p class=\"nbhint\"><b>Hint:</b> Differentiate between open active euchromatin and dense inactive chromatin.</p>"
},
{
"t": "FBS Cell Biology · NBME Quiz 1",
"s": "A cell biologist compares hepatic oxidation of fatty acids across cellular organelles. Unlike mitochondrial β-oxidation, peroxisomal oxidation of very-long-chain fatty acids (&gt;C22) exhibits which unique biochemical property?",
"html": true,
"chtml": true,
"c": [
"It utilizes circular peroxisomal DNA to transcribe its own metabolic enzymes",
"It requires the carnitine palmitoyltransferase shuttle for transport across its membrane",
"It fully oxidizes fatty acids into carbon dioxide and water within the organelle matrix",
"It produces H₂O₂ and heat without directly generating ATP"
],
"a": 3,
"eh": "<p>Peroxisomal β-oxidation transfers electrons directly to oxygen, yielding hydrogen peroxide (H₂O₂) and heat without ATP synthesis; shortened fatty acid chains are then sent to mitochondria to complete oxidation.</p><p class=\"nbhint\"><b>Hint:</b> Consider the electron acceptor in single-membrane peroxisomes vs the inner membrane respiratory chain in mitochondria.</p>"
},
{
"t": "FBS Cell Biology · NBME Quiz 1",
"s": "A 6-year-old child presents with micrognathia, thin skin, prominent scalp veins, severe growth retardation, and advanced joint stiffness resembling accelerated aging. Genetic testing reveals a dominant mutation in the LMNA gene causing Hutchinson-Gilford progeria syndrome. Which structural nuclear element is compromised by this mutation?",
"html": true,
"chtml": true,
"c": [
"Nuclear pore complexes regulating bidirectional nuclear transport",
"Microtubule organizing centers anchoring kinetochore fibers",
"Ribosomal RNA synthesis machinery within the nucleolus",
"Type V intermediate filaments maintaining the shape of the nuclear envelope"
],
"a": 3,
"eh": "<p>Lamins A, B, and C are type V intermediate filaments that form the nuclear lamina directly beneath the inner nuclear membrane; LMNA mutations alter Lamin A, causing nuclear envelope instability and progeria.</p><p class=\"nbhint\"><b>Hint:</b> Identify the type V intermediate filament structural scaffold lining the inner nuclear membrane.</p>"
},
{
"t": "FBS Cell Biology · NBME Quiz 1",
"s": "A cell biological experiment evaluates plasma membrane fluidity under varying physiological conditions. What structural change would decrease plasma membrane fluidity?",
"html": true,
"chtml": true,
"c": [
"Increasing the proportion of cis-unsaturated fatty acids with double bonds",
"Increasing the concentration of long, fully saturated fatty acid acyl chains",
"Incorporating short-chain fatty acids into phospholipid tails",
"Elevating environmental temperature in the presence of low cholesterol"
],
"a": 1,
"eh": "<p>Saturated fatty acid tails lack double bonds and pack tightly together; long, saturated chains decrease membrane fluidity.</p><p class=\"nbhint\"><b>Hint:</b> Think about how lipid packing density changes with saturation versus double-bond kinks.</p>"
},
{
"t": "FBS Cell Biology · NBME Quiz 1",
"s": "A blood sample is analyzed to determine the erythrocyte surface antigens of an individual with blood type A. Which terminal sugar residue is attached to the H antigen precursor by the specific glycosyltransferase encoded by the A allele?",
"html": true,
"chtml": true,
"c": [
"L-Fucose",
"N-acetylgalactosamine (GalNAc)",
"Sialic acid",
"D-Galactose"
],
"a": 1,
"eh": "<p>The A allele encodes a glycosyltransferase that adds N-acetylgalactosamine (GalNAc) to the H antigen; the B allele adds galactose, while the O allele lacks an active transferase.</p><p class=\"nbhint\"><b>Hint:</b> Recall the distinct sugar moiety added by the 'A' transferase versus the 'B' transferase enzyme.</p>"
},
{
"t": "FBS Cell Biology · NBME Quiz 1",
"s": "A 22-year-old traveler returning from an endemic region presents with profuse, painless, watery diarrhea described as 'rice-water stool.' The pathogen's enterotoxin binds specifically to a cell-surface glycolipid on intestinal enterocytes to gain entry. Which membrane target does cholera toxin bind?",
"html": true,
"chtml": true,
"c": [
"Phosphatidylserine",
"Sphingomyelin",
"Ganglioside GM1",
"Phosphatidylinositol 4,5-bisphosphate (PIP₂)"
],
"a": 2,
"eh": "<p>Cholera toxin subunit B binds specifically to ganglioside GM1 on the apical membrane of intestinal enterocytes, facilitating toxin entry, intracellular G<sub>sα</sub> ribosylation, and massive cAMP-driven secretory diarrhea.</p><p class=\"nbhint\"><b>Hint:</b> Identify the membrane ganglioside involved in bacterial enterotoxin docking on mucosal surfaces.</p>"
},
{
"t": "FBS Cell Biology · NBME Quiz 1",
"s": "A cell undergoes DNA damage beyond repair, triggering p53-dependent intrinsic apoptosis. Outer mitochondrial membrane permeabilization releases cytochrome c into the cytoplasm. Once in the cytosol, cytochrome c interacts directly with which protein component to assemble the functional apoptosome complex?",
"html": true,
"chtml": true,
"c": [
"Apaf-1",
"Bcl-xL",
"FADD adaptor protein",
"Caspase-3"
],
"a": 0,
"eh": "<p>In the intrinsic apoptotic pathway, released cytosolic cytochrome c binds to Apaf-1 (Apoptotic protease activating factor-1) in the presence of dATP, triggering heptamerization into the apoptosome, which recruits caspase-9.</p><p class=\"nbhint\"><b>Hint:</b> Identify the cytoplasmic scaffold protein that oligomerizes with cytochrome c to recruit caspase-9.</p>"
},
{
"t": "FBS Cell Biology · NBME Quiz 1",
"s": "A 7-month-old infant is brought to the clinic for progressive hypotonia, loss of motor milestones, and excessive startle response to sound. Ophthalmoscopy reveals a cherry-red spot on the macula. Abdominal examination demonstrates marked hepatosplenomegaly. Diagnostic bone marrow aspirate shows lipid-laden foamy macrophages. Which enzyme deficiency causes this disease?",
"html": true,
"chtml": true,
"c": [
"Hexosaminidase A",
"Glucocerebrosidase",
"Arylsulfatase A",
"Sphingomyelinase"
],
"a": 3,
"eh": "<p>Niemann-Pick disease is caused by sphingomyelinase deficiency, presenting with neurodegeneration, cherry-red macular spot, foamy histiocytes, and distinct hepatosplenomegaly (distinguishing it from Tay-Sachs).</p><p class=\"nbhint\"><b>Hint:</b> Contrast this condition with Tay-Sachs disease by noting the presence of hepatosplenomegaly.</p>"
},
{
"t": "FBS Cell Biology · NBME Quiz 1",
"s": "A 54-year-old man presenting with acute, excruciating pain and erythema in his left first metatarsophalangeal joint is treated with colchicine. By what cellular mechanism does colchicine reduce severe joint inflammation during an acute gout attack?",
"html": true,
"chtml": true,
"c": [
"Binding tubulin monomers to prevent microtubule polymerization, inhibiting neutrophil migration",
"Degrading vimentin intermediate filaments within vascular endothelial cells",
"Inhibiting actin microfilament treadmilling at the (+) barbed end",
"Hyper-stabilizing microtubule polymers to arrest inflammatory cells in metaphase"
],
"a": 0,
"eh": "<p>Colchicine binds tubulin subunits and prevents microtubule polymerization, impairing neutrophil motility, chemotaxis, and phagocytosis during acute crystal-induced inflammation.</p><p class=\"nbhint\"><b>Hint:</b> Consider how blocking microtubule assembly impairs the motility and chemotaxis of white blood cells.</p>"
}
]
},
{
"course": "fbs",
"subject": "Biochemistry",
"name": "FBS Biochemistry · NBME Quiz 1",
"prefix": "nfb1",
"note": "NotebookLM quiz built from the FBS Biochemistry study guide",
"qs": [
{
"t": "FBS Biochemistry · NBME Quiz 1",
"s": "A 45-year-old chronic alcoholic presents to the emergency department with acute confusion, ataxia, and horizontal nystagmus. Before laboratory results are returned, an intravenous infusion of dextrose solution is initiated without co-administration of vitamins. Shortly thereafter, the patient's neurologic status worsens dramatically. Which of the following enzymatic reactions directly depends on the coenzyme that was acutely depleted by the glucose load?",
"html": true,
"chtml": true,
"c": [
"Hydroxylation of proline residues during collagen synthesis",
"Conversion of α-ketoglutarate to succinyl-CoA",
"Transamination of alanine to pyruvate",
"Conversion of pyruvate to oxaloacetate"
],
"a": 1,
"eh": "<p>Glucose administration in thiamine-deficient patients accelerates glycolysis and aerobic metabolism, rapidly consuming remaining thiamine pyrophosphate (TPP), which is an essential cofactor for α-ketoglutarate dehydrogenase in the citric acid cycle.</p><p class=\"nbhint\"><b>Hint:</b> Think about key enzyme complexes in aerobic respiration that utilize thiamine pyrophosphate (TPP) as a cofactor.</p>"
},
{
"t": "FBS Biochemistry · NBME Quiz 1",
"s": "A 2-year-old child presents with severe global developmental delay, profound muscular hypotonia, abnormal fat distribution on the buttocks, and inverted nipples. Isoelectric focusing of serum transferrin shows abnormal glycosylation isoforms. A genetic defect in this patient impairs the initial step of protein modification. Which mechanism describes this disrupted initial process?",
"html": true,
"chtml": true,
"c": [
"Sequential step-by-step addition of single monosaccharides starting with GalNAc in the Golgi apparatus",
"En bloc transfer of a 14-sugar oligosaccharide from dolichol phosphate in the endoplasmic reticulum",
"Ubiquitin-independent cleavage of misfolded hydrophobic proteins inside lysosomes",
"Hydroxylation of specific lysine residues followed by attachment of glucose-galactose units"
],
"a": 1,
"eh": "<p>Congenital disorders of glycosylation (CDG) predominantly affect N-linked glycosylation, which begins co-translationally in the ER via en bloc transfer of a Glc₃Man₉GlcNAc₂ oligosaccharide preassembled on dolichol phosphate.</p><p class=\"nbhint\"><b>Hint:</b> Consider the cellular organelle and precursor molecule involved in starting N-linked glycosylation.</p>"
},
{
"t": "FBS Biochemistry · NBME Quiz 1",
"s": "An 8-month-old infant is brought to the clinic due to recurrent abdominal distension, explosive watery diarrhea, and excessive flatulence following feedings. A hydrogen breath test is positive. The enzyme deficient in this patient normally breaks down a carbohydrate linked by which specific glycosidic bond?",
"html": true,
"chtml": true,
"c": [
"β(1→4)",
"α(1→6)",
"α(1→4)",
"α1→β2"
],
"a": 0,
"eh": "<p>Lactose intolerance stems from lactase (β-galactosidase) deficiency; lactase cleaves the β(1→4) glycosidic linkage between galactose and glucose.</p><p class=\"nbhint\"><b>Hint:</b> Identify the disaccharide present in milk products and recall the stereochemistry of its linkage.</p>"
},
{
"t": "FBS Biochemistry · NBME Quiz 1",
"s": "A 38-year-old strict vegan presenting with severe fatigue, pale sclerae, and lower extremity paresthesias is found to have macrocytic anemia. Laboratory evaluation reveals markedly elevated serum levels of both homocysteine and methylmalonic acid (MMA). If this patient is misdiagnosed and treated with high-dose folate monotherapy alone, which of the following outcomes is most likely?",
"html": true,
"chtml": true,
"c": [
"Worsening of macrocytic anemia accompanied by severe lactic acidosis",
"Resolution of megaloblastic anemia with rapid progression of subacute combined degeneration",
"Immediate suppression of homocysteine accompanied by persistent hypersegmented neutrophils",
"Complete normalization of both serum methylmalonic acid levels and neurological symptoms"
],
"a": 1,
"eh": "<p>Folate supplementation bypasses the methyl-folate trap to correct hematologic abnormalities in B₁₂ deficiency, but fails to stop irreversible neurological injury (subacute combined degeneration) driven by B₁₂ depletion.</p><p class=\"nbhint\"><b>Hint:</b> Consider which clinical manifestation of cobalamin deficiency responds to folate and which requires B₁₂ for myelin maintenance.</p>"
},
{
"t": "FBS Biochemistry · NBME Quiz 1",
"s": "A researcher isolates a glycosaminoglycan (GAG) from synovial fluid and cartilage matrix aggregates. Biochemical analysis reveals that this specific GAG is entirely non-sulfated, exists freely in the matrix without covalent attachment to a core protein, and forms large viscous hydrated gels. Which GAG was isolated?",
"html": true,
"chtml": true,
"c": [
"Chondroitin sulfate",
"Heparin",
"Heparan sulfate",
"Hyaluronic acid"
],
"a": 3,
"eh": "<p>Hyaluronic acid is unique among glycosaminoglycans because it is non-sulfated, not attached to a core protein (not a proteoglycan), and forms massive aggregates in synovial fluid and cartilage.</p><p class=\"nbhint\"><b>Hint:</b> Recall which GAG lacks sulfate groups and stands apart from standard proteoglycan monomer structures.</p>"
},
{
"t": "FBS Biochemistry · NBME Quiz 1",
"s": "A 48-year-old non-smoker presents with progressive shortness of breath and elevated liver enzymes. Liver biopsy demonstrates PAS-positive, diastase-resistant intracellular globules within hepatocytes. Which of the following pathophysiologic mechanisms accounts for the hepatic damage observed in this patient?",
"html": true,
"chtml": true,
"c": [
"Conversion of monomeric PrP<sup>C</sup> α-helices into protease-resistant PrP<sup>Sc</sup> β-sheets",
"Intracellular accumulation of fibrillar cross-β sheets stained green under polarized light",
"Retention of misfolded PiZ mutant antiprotease within the endoplasmic reticulum of hepatocytes",
"Extracellular deposition of non-functional type I collagen fibrils due to impaired proline hydroxylation"
],
"a": 2,
"eh": "<p>In α₁-antitrypsin deficiency (PiZ mutation), the abnormal folding of the antiprotease prevents its secretion, leading to intracellular retention in hepatocyte ER and subsequent cirrhosis.</p><p class=\"nbhint\"><b>Hint:</b> Focus on the cellular fate of misfolded proteins in α₁-antitrypsin deficiency within liver tissue.</p>"
},
{
"t": "FBS Biochemistry · NBME Quiz 1",
"s": "A 54-year-old unhoused individual presents with fatigue, swollen bleeding gums, loss of teeth, and perifollicular hemorrhages with coiled corkscrew hairs. A deficiency in a required vitamin cofactor impairs an essential post-translational modification during structural protein synthesis. Which chemical conversion relies on this vitamin?",
"html": true,
"chtml": true,
"c": [
"Hydroxylation of specific proline and lysine residues in procollagen",
"Decarboxylation of glutamate to synthesis γ-aminobutyric acid (GABA)",
"Oxidative decarboxylation of branched-chain α-keto acids",
"Carboxylation of pyruvate to form oxaloacetate"
],
"a": 0,
"eh": "<p>Scurvy arises from vitamin C deficiency; ascorbate is required as a cofactor for prolyl and lysyl hydroxylases to stabilize the collagen triple helix.</p><p class=\"nbhint\"><b>Hint:</b> Identify the vitamin whose deficiency causes scurvy and recall its structural role in connective tissue assembly.</p>"
},
{
"t": "FBS Biochemistry · NBME Quiz 1",
"s": "A patient with a rare genetic disorder affecting pyruvate dehydrogenase (PDH) kinase is placed on a specialized medical dietary regimen designed to minimize lactic acidosis while supplying energy. Which pair of amino acids can be safely included because their catabolism yields substrates that cannot be used for net glucose synthesis?",
"html": true,
"chtml": true,
"c": [
"Phenylalanine and Tyrosine",
"Valine and Histidine",
"Leucine and Lysine",
"Isoleucine and Threonine"
],
"a": 2,
"eh": "<p>Leucine and Lysine are the only purely ketogenic amino acids; their breakdown produces acetyl-CoA or acetoacetate, which cannot yield net glucose due to the irreversible nature of the pyruvate dehydrogenase reaction.</p><p class=\"nbhint\"><b>Hint:</b> Recall the two exclusively ketogenic amino acids among the standard 20 amino acids.</p>"
},
{
"t": "FBS Biochemistry · NBME Quiz 1",
"s": "A infant presents with lethargy, persistent vomiting, and severe lactic acidosis. Serum biochemical analysis demonstrates marked elevation of pyruvate and alanine. A diagnosis of pyruvate carboxylase deficiency is confirmed. Pyruvate carboxylase requires a specific vitamin cofactor that participates in which fundamental type of chemical reaction?",
"html": true,
"chtml": true,
"c": [
"Acyl transfer",
"Transamination",
"One-carbon unit transfer",
"Carboxylation"
],
"a": 3,
"eh": "<p>Pyruvate carboxylase requires biotin (Vitamin B₇) as a coenzyme to transfer CO₂ groups (carboxylation reactions).</p><p class=\"nbhint\"><b>Hint:</b> Think about the general reaction class carried out by enzymes ending in 'carboxylase'.</p>"
},
{
"t": "FBS Biochemistry · NBME Quiz 1",
"s": "A biochemist analyzes the kinetic properties of an experimental small molecule inhibitor against an enzyme involved in cholesterol biosynthesis. Kinetic assays show that in the presence of the inhibitor, the calculated Kₘ increases, while the Vₘₐₓ remains unchanged. On a Lineweaver-Burk plot, how do the lines corresponding to the uninhibited and inhibited reactions compare?",
"html": true,
"chtml": true,
"c": [
"They cross directly on the x-axis",
"They cross directly on the y-axis",
"They form two parallel lines with different x- and y-intercepts",
"They display a downward shift in the y-intercept while the x-intercept moves leftward"
],
"a": 1,
"eh": "<p>Competitive inhibitors increase Kₘ (shifting the x-intercept −1/Kₘ closer to zero) while leaving Vₘₐₓ (y-intercept 1/Vₘₐₓ) unchanged, causing plot lines to intersect on the y-axis.</p><p class=\"nbhint\"><b>Hint:</b> Relate changes in Kₘ and Vₘₐₓ to the x-intercept (−1/Kₘ) and y-intercept (1/Vₘₐₓ) on double-reciprocal axes.</p>"
},
{
"t": "FBS Biochemistry · NBME Quiz 1",
"s": "A research laboratory isolates a purified sample of a novel serum protein. To quantify the protein concentration using ultraviolet spectrophotometry without destroying the sample, at which specific light wavelength should absorbance be measured?",
"html": true,
"chtml": true,
"c": [
"280 nm",
"260 nm",
"450 nm",
"340 nm"
],
"a": 0,
"eh": "<p>Aromatic amino acids (phenylalanine, tyrosine, and especially tryptophan) absorb ultraviolet light strongly at 280 nm, making it standard for protein quantification.</p><p class=\"nbhint\"><b>Hint:</b> Recall the characteristic UV absorption peak associated with aromatic amino acid side chains.</p>"
},
{
"t": "FBS Biochemistry · NBME Quiz 1",
"s": "A 7-year-old child with a history of recurrent vaso-occlusive bone crises is found to have a missense mutation in the β-globin gene resulting in a single amino acid substitution at position 6 (Glu6Val). Which biophysical mechanism directly causes red blood cells to deform into sickled shapes under deoxygenated conditions?",
"html": true,
"chtml": true,
"c": [
"Hydrophobic interactions involving the substituted valine residue drive polymerization of deoxygenated HbS molecules",
"Impaired binding of distal histidine to oxygen leads to spontaneous heme oxidation to Fe³⁺",
"Loss of a crucial disulfide bond between α and β chains destabilizes the quaternary structure",
"A positively charged lysine residue causes charge repulsion along the outer surface of oxygenated hemoglobin"
],
"a": 0,
"eh": "<p>Replacing hydrophilic glutamate with hydrophobic valine at position 6 creates a hydrophobic patch on deoxygenated HbS, causing polymer strand assembly and erythrocyte sickling.</p><p class=\"nbhint\"><b>Hint:</b> Focus on the chemical properties of valine compared to glutamate and how deoxygenation exposes this side chain.</p>"
},
{
"t": "FBS Biochemistry · NBME Quiz 1",
"s": "In a research model, cultured mammalian cells are treated with tunicamycin. Subsequent analysis demonstrates complete inhibition of N-linked protein glycosylation. Which molecular step is directly blocked by tunicamycin?",
"html": true,
"chtml": true,
"c": [
"Ubiquitination of misfolded proteins prior to degradation by ERAD",
"Removal of terminal glucose residues by calnexin during ER quality control",
"Synthesis of the dolichol-linked 14-sugar oligosaccharide precursor",
"Transfer of single N-acetylgalactosamine (GalNAc) sugars to serine or threonine residues"
],
"a": 2,
"eh": "<p>Tunicamycin specifically blocks the initial step of N-linked glycosylation precursor synthesis on dolichol phosphate in the endoplasmic reticulum.</p><p class=\"nbhint\"><b>Hint:</b> Consider the drug's target in lipid-linked oligosaccharide assembly within the endoplasmic reticulum.</p>"
},
{
"t": "FBS Biochemistry · NBME Quiz 1",
"s": "A 24-year-old patient undergoing treatment for active pulmonary tuberculosis presents with progressive numbness, tingling, and loss of vibration sense in a stocking-glove distribution. To prevent this adverse effect, the drug regimen should have included co-administration of a vitamin required for which critical enzymatic reaction?",
"html": true,
"chtml": true,
"c": [
"Transfer of one-carbon units during dTMP synthesis",
"Oxidative decarboxylation of pyruvate by pyruvate dehydrogenase",
"Conversion of succinate to fumarate by Complex II",
"Synthesis of δ-aminolevulinic acid (ALA) by ALA synthase"
],
"a": 3,
"eh": "<p>Isoniazid induces Vitamin B₆ (pyridoxine) deficiency; B₆ (as PLP) is an essential cofactor for ALA synthase in heme synthesis, transaminases, and neurotransmitter synthesis.</p><p class=\"nbhint\"><b>Hint:</b> Identify the vitamin depleted by isoniazid and link it to one of its key pathway cofactors.</p>"
},
{
"t": "FBS Biochemistry · NBME Quiz 1",
"s": "A 52-year-old patient with dyslipidemia is started on a lipid-lowering agent. Shortly after taking the first high-dose pill, the patient experiences intense facial warmth and red flushing. Which biochemical mediator is responsible for this side effect, and what pre-treatment minimizes it?",
"html": true,
"chtml": true,
"c": [
"Excess production of dihydrotestosterone; minimized by pretreatment with finasteride",
"Histamine release; minimized by pretreatment with diphenhydramine",
"Accumulation of thiamine pyrophosphate; minimized by thiamine restriction",
"Prostaglandin release; minimized by pretreatment with aspirin"
],
"a": 3,
"eh": "<p>Niacin (Vitamin B₃) causes cutaneous flushing mediated by prostaglandin synthesis; taking aspirin beforehand inhibits cyclooxygenase and blunts this side effect.</p><p class=\"nbhint\"><b>Hint:</b> Identify the lipid medication that causes flushing and the eicosanoid pathway involved.</p>"
},
{
"t": "FBS Biochemistry · NBME Quiz 1",
"s": "A patient undergoing an extended fast past 24 hours relies on hepatic gluconeogenesis to maintain blood glucose levels. Unlike skeletal muscle, the liver can release free glucose directly into the systemic bloodstream from glucose-6-phosphate. Which enzyme endows the liver with this capacity?",
"html": true,
"chtml": true,
"c": [
"Glucose-6-phosphatase",
"Glucokinase",
"Phosphofructokinase-1",
"Glycogen phosphorylase"
],
"a": 0,
"eh": "<p>Glucose-6-phosphatase dephosphorylates glucose-6-phosphate to yield free glucose that can exit hepatocytes via GLUT transporters into the bloodstream; muscle lacks this enzyme and traps its glucose.</p><p class=\"nbhint\"><b>Hint:</b> Identify the phosphatase required to remove the phosphate group from glucose-6-phosphate before transport out of the cell.</p>"
},
{
"t": "FBS Biochemistry · NBME Quiz 1",
"s": "A structural biologist is analyzing an acidic amino acid residue (such as aspartic acid) to calculate its isoelectric point (pI). At a pH below its pI, what is the net charge state of this amino acid, and how is its pI calculated?",
"html": true,
"chtml": true,
"c": [
"Net neutral charge; pI calculated as the average of all three pKₐ values",
"Net negative charge; pI calculated as the average of its two highest pKₐ values",
"Net positive charge; pI calculated as the average of its two lowest pKₐ values",
"Net positive charge; pI calculated as the average of its two highest pKₐ values"
],
"a": 2,
"eh": "<p>When pH &lt; pI, protonation dominates yielding a net positive charge; for acidic amino acids with two carboxylic groups, pI is the average of the two acidic (lowest) pKₐ values.</p><p class=\"nbhint\"><b>Hint:</b> Consider the effect of high [H⁺] on protonation and which pKₐ values define the neutral zwitterionic boundary for acidic side chains.</p>"
},
{
"t": "FBS Biochemistry · NBME Quiz 1",
"s": "A 40-year-old patient presents with a triad of diarrhea, dementia, and photosensitive dermatitis around the neck (Casal necklace). The patient's diet is severely limited, consisting exclusively of corn. A deficiency in which essential amino acid precursor contributes to this presentation by limiting endogenous vitamin synthesis?",
"html": true,
"chtml": true,
"c": [
"Tyrosine",
"Phenylalanine",
"Histidine",
"Tryptophan"
],
"a": 3,
"eh": "<p>Niacin (Vitamin B₃) can be synthesized endogenously from tryptophan (requiring B₂ and B₆ cofactors); corn-based diets lacking tryptophan lead to pellagra.</p><p class=\"nbhint\"><b>Hint:</b> Recall the essential amino acid that can be converted into niacin (B₃) in human metabolism.</p>"
},
{
"t": "FBS Biochemistry · NBME Quiz 1",
"s": "An enzyme kinetics experiment is performed with a fixed concentration of enzyme and increasing substrate concentration, both with and without a newly synthesized drug. Lineweaver-Burk analysis reveals that the drug lowers the Vₘₐₓ of the reaction without altering the Kₘ. Where do the plotted lines for the uninhibited and inhibited reactions intersect?",
"html": true,
"chtml": true,
"c": [
"On the positive y-axis",
"In the lower-right quadrant",
"They do not intersect because they form parallel lines",
"On the negative x-axis"
],
"a": 3,
"eh": "<p>Noncompetitive inhibitors decrease Vₘₐₓ (increasing 1/Vₘₐₓ) while leaving Kₘ unchanged, meaning −1/Kₘ remains fixed and lines cross on the negative x-axis.</p><p class=\"nbhint\"><b>Hint:</b> Determine which point on a double-reciprocal plot represents −1/Kₘ when Kₘ remains unchanged.</p>"
},
{
"t": "FBS Biochemistry · NBME Quiz 1",
"s": "A 68-year-old patient presents with rapidly progressive memory loss, involuntary myoclonic jerks, and ataxia, dying within four months of onset. Autopsy demonstrates spongiform changes in the cerebral cortex. What secondary structure alteration characteristically drives the transmissible pathogen in this condition?",
"html": true,
"chtml": true,
"c": [
"Hyperphosphorylation of microtubule-associated tau protein into neurofibrillary tangles",
"Loss of hydrophobic core interactions causing unraveling of quaternary subunits",
"Conformational transition of α-helices into β-pleated sheets in prion protein",
"Formation of intracellular α-synuclein inclusions within dopaminergic neurons"
],
"a": 2,
"eh": "<p>Prion diseases (such as Creutzfeldt-Jakob disease) involve the refolding of normal cellular prion protein (PrP<sup>C</sup>, rich in α-helices) into the infectious, protease-resistant scrapie form (PrP<sup>Sc</sup>, rich in β-pleated sheets).</p><p class=\"nbhint\"><b>Hint:</b> Focus on the secondary structure change that converts PrP<sup>C</sup> into the protease-resistant PrP<sup>Sc</sup> isoform.</p>"
},
{
"t": "FBS Biochemistry · NBME Quiz 1",
"s": "A 4-year-old child with a history of recurrent pulmonary infections and pancreatic insufficiency is diagnosed with cystic fibrosis due to a homozygous ΔF508 deletion in the CFTR gene. What is the ultimate cellular fate of the mutated CFTR protein?",
"html": true,
"chtml": true,
"c": [
"Retention in the endoplasmic reticulum and degradation via the ERAD ubiquitin-proteasome pathway",
"Incorporation into the cell membrane where it functions as an irreversibly open chloride channel",
"Normal transport to the Golgi apparatus followed by mistargeted secretion into extracellular fluid",
"Cleavage by extracellular matrix metalloproteinases into toxic amyloid aggregates"
],
"a": 0,
"eh": "<p>The ΔF508 mutation causes CFTR misfolding; ER quality control chaperones detect the defect and target the protein for ER-associated degradation (ERAD) via the proteasome before it reaches the cell surface.</p><p class=\"nbhint\"><b>Hint:</b> Identify the quality control mechanism that detects misfolded membrane proteins in the ER.</p>"
},
{
"t": "FBS Biochemistry · NBME Quiz 1",
"s": "During a metabolic study, two hexose sugars, D-glucose and D-galactose, are compared. Chemical analysis confirms that they share the exact same molecular formula (C₆H₁₂O₆) and differ in configuration only at the C4 position. What term best describes their stereoisomeric relationship?",
"html": true,
"chtml": true,
"c": [
"Constitutional isomers",
"Enantiomers",
"Epimers",
"Anomers"
],
"a": 2,
"eh": "<p>Stereoisomers that differ in absolute configuration at exactly one chiral center (such as glucose and galactose at C4) are defined as epimers.</p><p class=\"nbhint\"><b>Hint:</b> Recall the term for optical isomers that differ at only a single chiral carbon atom.</p>"
},
{
"t": "FBS Biochemistry · NBME Quiz 1",
"s": "During rigorous exercise, lactic acid buildup lowers skeletal muscle cytoplasmic pH. In response to elevated [H⁺], oxygen unloading from hemoglobin is enhanced (Bohr effect). Which amino acid residue on hemoglobin undergoes protonation near physiologic pH to stabilize the T (deoxygenated) state?",
"html": true,
"chtml": true,
"c": [
"Valine",
"Proline",
"Histidine",
"Glycine"
],
"a": 2,
"eh": "<p>Histidine has an imidazole side chain pKₐ ≈ 6.0, which allows it to readily accept a proton under acidic conditions, forming ion pairs that stabilize deoxygenated (T state) hemoglobin.</p><p class=\"nbhint\"><b>Hint:</b> Look for the amino acid whose side chain imidazole ring has a pKₐ close to physiologic pH.</p>"
},
{
"t": "FBS Biochemistry · NBME Quiz 1",
"s": "A woman in her first trimester of pregnancy presents for routine prenatal screening. She reports taking no nutritional supplements. Laboratory tests show elevated serum homocysteine levels with normal methylmalonic acid (MMA). Inadequate intake of this vitamin increases the risk for neural tube defects because it is directly required for which chemical process?",
"html": true,
"chtml": true,
"c": [
"Oxidative decarboxylation of pyruvate to acetyl-CoA",
"Hydroxylation of proline residues during extracellular collagen maturation",
"Transfer of one-carbon units in nucleotide synthesis",
"Acyl group transfer during fatty acid oxidation"
],
"a": 2,
"eh": "<p>Folate (Vitamin B₉) acts as a coenzyme in one-carbon unit transfers necessary for purine synthesis and thymidine (dTMP) production, critical for rapid cell division in neural tube closure.</p><p class=\"nbhint\"><b>Hint:</b> Identify the vitamin that prevents neural tube defects and recall its function in purine and dTMP synthesis.</p>"
},
{
"t": "FBS Biochemistry · NBME Quiz 1",
"s": "A laboratory standard containing various disaccharides is analyzed using Benedict's qualitative reagent. Which of the following disaccharides will test NEGATIVE for reducing sugar activity because both of its anomeric carbon atoms are tied up in a glycosidic bond?",
"html": true,
"chtml": true,
"c": [
"Lactose",
"Maltose",
"Sucrose",
"Cellobiose"
],
"a": 2,
"eh": "<p>Sucrose consists of glucose and fructose linked via an α1→β2 glycosidic bond involving both anomeric carbons (C1 of glucose and C2 of fructose), leaving no free hemiacetal group to reduce Benedict's reagent.</p><p class=\"nbhint\"><b>Hint:</b> Identify the disaccharide composed of glucose and fructose joined at both anomeric carbons.</p>"
},
{
"t": "FBS Biochemistry · NBME Quiz 1",
"s": "A 62-year-old male presents with bone pain, renal insufficiency, and fatigue. Serum immunofixation shows a monoclonal immunoglobulin spike. Tissue biopsy reveals extracellular proteinaceous material that displays apple-green birefringence under polarized light after staining with Congo red. Which structural arrangement defines these protein deposits?",
"html": true,
"chtml": true,
"c": [
"Anti-parallel cross-β-pleated sheet conformations",
"Unbranched GAG disaccharide chains linked to core glycosaminoglycans",
"Intracellular bundles composed exclusively of hydrophobic α-helical repeats",
"Right-handed triple-helical supercoils held together by interchain disulfide bonds"
],
"a": 0,
"eh": "<p>Amyloid aggregates in light-chain amyloidosis (AL) or other amyloid disorders adopt stable, insoluble cross-β-pleated sheet secondary structures, which bind Congo red and produce characteristic apple-green birefringence.</p><p class=\"nbhint\"><b>Hint:</b> Identify the secondary protein structure characteristic of amyloid fibril deposits.</p>"
},
{
"t": "FBS Biochemistry · NBME Quiz 1",
"s": "A 22-year-old patient with a restricted diet presents with painful cracking at the corners of the mouth (cheilosis), a swollen magenta-colored tongue, and hyperemic corneal vascularization. The vitamin cofactor missing in this patient is essential for the function of which mitochondrial electron transport chain enzyme?",
"html": true,
"chtml": true,
"c": [
"Succinate dehydrogenase (Complex II)",
"ATP synthase (Complex V)",
"NADH dehydrogenase (Complex I)",
"Cytochrome c oxidase (Complex IV)"
],
"a": 0,
"eh": "<p>Riboflavin (Vitamin B₂) forms FAD and FMN; FAD is a tightly bound prosthetic group for succinate dehydrogenase (Complex II) in the TCA cycle and electron transport chain.</p><p class=\"nbhint\"><b>Hint:</b> Match the clinical presentation of riboflavin (B₂) deficiency ('2 C's') with its metabolic role in FAD-dependent enzymes.</p>"
}
]
},
{
"course": "fbs",
"subject": "Embryology",
"name": "FBS Embryology · NBME Quiz 1",
"prefix": "nfe1",
"note": "NotebookLM quiz built from the FBS Embryology study guide",
"qs": [
{
"t": "FBS Embryology · NBME Quiz 1",
"s": "A genetic study is performed on a newborn diagnosed with severe ambiguous genitalia. Histological examination reveals complete absence of functional Sertoli cells during embryonic development, while Leydig cells are intact and fully functional. Which of the following internal anatomical findings would most likely be observed in this infant?",
"html": true,
"chtml": true,
"c": [
"Regression of Müllerian ducts and persistence of Wolffian ducts.",
"Persistence of Müllerian ducts and regression of Wolffian ducts.",
"Persistence of both Müllerian and Wolffian duct derivatives.",
"Absence of both Müllerian and Wolffian duct derivatives."
],
"a": 2,
"eh": "<p>Intact Leydig cells produce testosterone to maintain Wolffian ducts, while the absence of Sertoli cells leads to a lack of Anti-Müllerian Hormone (AMH/MIF), allowing Müllerian ducts to persist.</p><p class=\"nbhint\"><b>Hint:</b> Consider the distinct hormonal contributions of Sertoli and Leydig cells to internal duct development.</p>"
},
{
"t": "FBS Embryology · NBME Quiz 1",
"s": "An oocyte is retrieved from a female patient immediately following the mid-cycle luteinizing hormone (LH) surge, right before ovulation. What is the ploidy, DNA content, and meiotic arrest stage of this cell?",
"html": true,
"chtml": true,
"c": [
"2n, 4c, arrested in prophase I",
"2n, 2c, arrested in prophase II",
"1n, 1c, arrested in metaphase II",
"1n, 2c, arrested in metaphase II"
],
"a": 3,
"eh": "<p>The pre-ovulatory LH surge causes the primary oocyte to complete meiosis I, yielding a secondary oocyte (1n, 2c) that arrests in metaphase II until fertilization.</p><p class=\"nbhint\"><b>Hint:</b> Recall which meiotic division is completed by the pre-ovulatory hormone surge versus fertilization.</p>"
},
{
"t": "FBS Embryology · NBME Quiz 1",
"s": "A child is born with Down syndrome (47,XX,+21). Genetic analysis confirms that the extra chromosome arose from maternal meiotic nondisjunction during the first meiotic division. Prior to the mid-cycle LH surge of the ovulation cycle in which this conception occurred, in what specific meiotic phase had this germ cell been arrested since fetal development?",
"html": true,
"chtml": true,
"c": [
"Metaphase II",
"Anaphase I",
"Prophase I (diplotene stage)",
"Prophase II"
],
"a": 2,
"eh": "<p>Primary oocytes form before birth and remain arrested in prophase I (diplotene stage) until the LH surge triggers completion of meiosis I at ovulation.</p><p class=\"nbhint\"><b>Hint:</b> Think about the dormant state of female germ cells from late fetal life until puberty and subsequent menstrual cycles.</p>"
},
{
"t": "FBS Embryology · NBME Quiz 1",
"s": "A 28-year-old woman with an irregular 35-day menstrual cycle tracks her ovulation. Assuming her luteal phase duration is normal and constant, on approximately which day of her menstrual cycle did ovulation occur, and what driven change occurred in her cervical mucus during that period?",
"html": true,
"chtml": true,
"c": [
"Day 21; thin and stretchy cervical mucus induced by high estrogen",
"Day 17; thin and watery cervical mucus induced by high FSH",
"Day 21; thick and tacky cervical mucus induced by high progesterone",
"Day 14; thick and sticky cervical mucus induced by high progesterone"
],
"a": 0,
"eh": "<p>The luteal phase is fixed at ~14 days, so ovulation occurs on day 35 - 14 = 21. Pre-ovulatory estrogen peaks cause thin, stretchy cervical mucus.</p><p class=\"nbhint\"><b>Hint:</b> Calculate the day of ovulation by subtracting the fixed luteal phase length from the total cycle length.</p>"
},
{
"t": "FBS Embryology · NBME Quiz 1",
"s": "During in vitro fertilization, an egg is fertilized, but a mutation prevents intracellular calcium wave release within the oocyte upon sperm binding. Which physiological step will fail, and what chromosomal abnormality is most likely to result?",
"html": true,
"chtml": true,
"c": [
"Cortical reaction; polyspermy resulting in triploidy",
"Compaction; formation of a partial hydatidiform mole",
"Acrosome reaction; complete failure of sperm penetration",
"Capacitation; failure of sperm motility in the female tract"
],
"a": 0,
"eh": "<p>The intracellular Ca²⁺ wave triggers the cortical/zona reaction to block additional sperm; failure of this reaction allows polyspermy, causing triploidy.</p><p class=\"nbhint\"><b>Hint:</b> Identify the immediate oocyte mechanism that prevents multiple sperm from penetrating the zona pellucida.</p>"
},
{
"t": "FBS Embryology · NBME Quiz 1",
"s": "A woman has an embryo successfully implant into the posterior-superior wall of her uterus. Approximately 6 days post-fertilization, which specific embryonic layer penetrates the endometrial stroma, and what hormone does it begin producing to rescue the corpus luteum?",
"html": true,
"chtml": true,
"c": [
"Cytotrophoblast; progesterone",
"Hypoblast; estrogen",
"Epiblast; human placental lactogen (hPL)",
"Syncytiotrophoblast; human chorionic gonadotropin (hCG)"
],
"a": 3,
"eh": "<p>The outer invasive syncytiotrophoblast invades the endometrium starting around day 6 and secretes hCG to maintain the corpus luteum.</p><p class=\"nbhint\"><b>Hint:</b> Distinguish between the inner mitotic layer and the outer multinucleated invasive trophoblast layer.</p>"
},
{
"t": "FBS Embryology · NBME Quiz 1",
"s": "A 22-year-old woman presents with severe nausea and dark vaginal bleeding at 10 weeks gestation. Ultrasound displays a 'snowstorm' pattern with complete absence of fetal tissue. Karyotyping reveals 46,XX, and genomic testing shows all chromosomes are of paternal origin. What cellular mechanism produced this condition?",
"html": true,
"chtml": true,
"c": [
"Nondisjunction of maternal chromosome 21 during meiosis I",
"Fertilization of a normal ovum by two distinct sperm cells simultaneously",
"Failure of the blastocyst to hatch from the zona pellucida prior to implantation",
"Fertilization of an enucleated egg by one sperm followed by duplication of paternal chromosomes"
],
"a": 3,
"eh": "<p>A complete hydatidiform mole (46,XX) occurs when an empty (enucleated) egg is fertilized by a single haploid sperm that duplicates its genome.</p><p class=\"nbhint\"><b>Hint:</b> Recall the genetic difference between a complete mole (no fetal parts, pure paternal genome) and a partial mole.</p>"
},
{
"t": "FBS Embryology · NBME Quiz 1",
"s": "Histological analysis of placental tissue harvested at the end of week 3 reveals chorionic villi containing an inner core of extraembryonic mesoderm with fully formed fetal capillary loops, surrounded by cytotrophoblast and syncytiotrophoblast layers. What stage of villous development is present?",
"html": true,
"chtml": true,
"c": [
"Primary villi",
"Tertiary villi",
"Anchoring stem cells",
"Secondary villi"
],
"a": 1,
"eh": "<p>Tertiary villi are characterized by the presence of fetal blood vessels within the extraembryonic mesodermal core.</p><p class=\"nbhint\"><b>Hint:</b> Focus on the sequential additions to villi: primary (cells), secondary (mesoderm), tertiary (vessels).</p>"
},
{
"t": "FBS Embryology · NBME Quiz 1",
"s": "A 2-year-old boy presents with painless lower gastrointestinal bleeding. A Technetium-99m pertechnetate scan reveals ectopic gastric mucosa located in a blind pouch on the anti-mesenteric border of the ileum, approximately 2 feet from the ileocecal valve. What embryonic structure failed to obliterate?",
"html": true,
"chtml": true,
"c": [
"Notochord",
"Vitelline duct",
"Primitive streak",
"Allantois"
],
"a": 1,
"eh": "<p>Incomplete obliteration of the vitelline duct (omphalomesenteric duct) causes Meckel diverticulum, adhering to the 'rule of 2s'.</p><p class=\"nbhint\"><b>Hint:</b> Recall the connection between the yolk sac and primitive gut that usually closes early in development.</p>"
},
{
"t": "FBS Embryology · NBME Quiz 1",
"s": "A routine 20-week prenatal ultrasound identifies a single umbilical artery within the umbilical cord. Which set of organ systems should be thoroughly evaluated for associated congenital structural malformations?",
"html": true,
"chtml": true,
"c": [
"Pulmonary and hepatic systems",
"Gastrointestinal and integumentary systems",
"Renal and cardiac systems",
"Endocrine and reproductive systems"
],
"a": 2,
"eh": "<p>A single umbilical artery (instead of the normal two arteries and one vein) is clinically associated with fetal renal and congenital heart anomalies.</p><p class=\"nbhint\"><b>Hint:</b> Consider the two major organ systems most commonly screened when a two-vessel cord is detected.</p>"
},
{
"t": "FBS Embryology · NBME Quiz 1",
"s": "A newborn infant is observed to have constant clear fluid discharge from the umbilicus that increases during crying. Lab analysis confirms the fluid is urine. This clinical presentation is caused by persistent patency of a structure derived from which embryonic entity?",
"html": true,
"chtml": true,
"c": [
"Septum transversum",
"Allantois",
"Neural tube",
"Vitelline duct"
],
"a": 1,
"eh": "<p>The allantois forms the urachus (median umbilical ligament); persistence of the lumen causes a patent urachus connecting the bladder to the umbilicus.</p><p class=\"nbhint\"><b>Hint:</b> Connect the fetal urogenital tract remnant (urachus) to its precursor structure.</p>"
},
{
"t": "FBS Embryology · NBME Quiz 1",
"s": "A neonate is diagnosed with a neuroblastoma arising from chromaffin cells of the adrenal medulla. Which of the following tissues shares the exact same embryonic cell type of origin?",
"html": true,
"chtml": true,
"c": [
"Anterior pituitary gland and lens of the eye",
"Thyroid follicular cells and thymus",
"Microglia and cerebral cortex neurons",
"Schwann cells and melanocytes"
],
"a": 3,
"eh": "<p>Adrenal medulla chromaffin cells, Schwann cells, and melanocytes are all derivatives of neural crest cells.</p><p class=\"nbhint\"><b>Hint:</b> Recall the diverse derivatives summarized by the 'MOTEL PASS' mnemonic.</p>"
},
{
"t": "FBS Embryology · NBME Quiz 1",
"s": "A child is born with congenital absence of the anterior pituitary gland (adenohypophysis). Posterior pituitary tissue is present and normally located. Failure of invagination of which developmental layer accounts for this specific defect?",
"html": true,
"chtml": true,
"c": [
"Endoderm",
"Surface ectoderm",
"Neural crest",
"Neuroectoderm"
],
"a": 1,
"eh": "<p>The anterior pituitary arises from Rathke pouch, an invagination of oral surface ectoderm, while the posterior pituitary develops from neuroectoderm.</p><p class=\"nbhint\"><b>Hint:</b> Differentiate between the oral ectodermal origin of the adenohypophysis and the neural origin of the neurohypophysis.</p>"
},
{
"t": "FBS Embryology · NBME Quiz 1",
"s": "A newborn female is found to have a large sacrococcygeal tumor containing derivatives of all three germ layers, including hair, cartilage, and gut epithelium. What embryonic structure failed to properly undergo regression during the third week of development?",
"html": true,
"chtml": true,
"c": [
"Notochord",
"Primitive streak",
"Connecting stalk",
"Prochordal plate"
],
"a": 1,
"eh": "<p>Sacrococcygeal teratomas arise from remnants of the primitive streak, which normally regresses by the end of week 4.</p><p class=\"nbhint\"><b>Hint:</b> Identify the caudal structure responsible for gastrulation that normally disappears as development proceeds.</p>"
},
{
"t": "FBS Embryology · NBME Quiz 1",
"s": "An adult patient presents with lower back pain and sciatica. MRI reveals herniation of the gelatinous inner core of the L4–L5 intervertebral disc into the spinal canal. What embryonic structure is this inner gelatinous core directly derived from?",
"html": true,
"chtml": true,
"c": [
"Notochord",
"Lateral plate mesoderm",
"Neural tube",
"Sclerotome"
],
"a": 0,
"eh": "<p>The nucleus pulposus of the intervertebral disc is the adult vestigial remnant of the embryonic notochord.</p><p class=\"nbhint\"><b>Hint:</b> Think about the axial inductive structure formed during gastrulation that persists only as a soft disc center.</p>"
},
{
"t": "FBS Embryology · NBME Quiz 1",
"s": "Targeted disruption of the gene controlling sclerotome differentiation in paraxial mesoderm is induced in an experimental animal model. Which of the following anatomical structures will fail to develop in the resulting embryos?",
"html": true,
"chtml": true,
"c": [
"Kidneys and ureters",
"Visceral smooth muscle of the gut wall",
"Skeletal muscle of the limbs and body wall",
"Vertebral column and ribs"
],
"a": 3,
"eh": "<p>Paraxial mesoderm somites divide into sclerotome (forms vertebrae and ribs), myotome (skeletal muscle), and dermatome (dermis).</p><p class=\"nbhint\"><b>Hint:</b> Subdivide somites into their three primary lineages and match them to axial skeleton versus muscle.</p>"
},
{
"t": "FBS Embryology · NBME Quiz 1",
"s": "A 20-week pregnant woman is found to have elevated maternal serum α-fetoprotein (MSAFP). Amniocentesis is performed, revealing markedly elevated levels of both α-fetoprotein and acetylcholinesterase (AChE) in the amniotic fluid. Which congenital anomaly is confirmed by these findings?",
"html": true,
"chtml": true,
"c": [
"Myelomeningocele",
"Duodenal atresia",
"Bilateral renal agenesis",
"Down syndrome (Trisomy 21)"
],
"a": 0,
"eh": "<p>Open neural tube defects (such as myelomeningocele or anencephaly) allow CSF containing both AFP and AChE to leak directly into amniotic fluid.</p><p class=\"nbhint\"><b>Hint:</b> Acetylcholinesterase in amniotic fluid specifically confirms an open neural tissue exposure.</p>"
},
{
"t": "FBS Embryology · NBME Quiz 1",
"s": "A 34-year-old woman with two prior Cesarean deliveries undergoes a third-trimester ultrasound showing placenta previa. Following delivery of the infant, the placenta cannot be separated from the uterine wall, leading to massive postpartum hemorrhage. Hysterectomy specimen reveals placental villi attached directly to the myometrium without invading into it. What was the predisposing endometrial defect?",
"html": true,
"chtml": true,
"c": [
"Defective decidua basalis layer allowing direct villous attachment to myometrium",
"Premature separation of placenta due to spiral artery rupture",
"Invasion of trophoblastic tissue deep into the body of the myometrium",
"Invasion of trophoblastic tissue completely through the myometrium into the uterine serosa"
],
"a": 0,
"eh": "<p>Placenta accreta is caused by a defective decidua basalis (often due to prior surgical scars), allowing chorionic villi to attach directly to the myometrium.</p><p class=\"nbhint\"><b>Hint:</b> Distinguish between accreta (attaches to myometrium), increta (invades myometrium), and percreta (penetrates serosa).</p>"
},
{
"t": "FBS Embryology · NBME Quiz 1",
"s": "A 31-year-old pregnant woman at 34 weeks gestation presents to the emergency room with sudden, severe abdominal pain and dark vaginal bleeding. On physical exam, her uterus is firm, hypertonic, and tender to palpation. What is the underlying pathophysiological event?",
"html": true,
"chtml": true,
"c": [
"Defective decidua basalis causing placental villi to invade the myometrium",
"Premature separation of the placenta from the uterine wall",
"Rupture of fetal blood vessels running unprotected through the membranes",
"Implantation of the placenta directly over the internal cervical os"
],
"a": 1,
"eh": "<p>Placental abruption involves premature detachment of the placenta, presenting with painful bleeding and uterine tenderness.</p><p class=\"nbhint\"><b>Hint:</b> Contrast painful third-trimester bleeding (abruption) with painless bleeding (previa).</p>"
},
{
"t": "FBS Embryology · NBME Quiz 1",
"s": "A 22-week fetal ultrasound reveals bilateral renal agenesis and severe oligohydramnios (&lt;0.2 L). If this pregnancy continues to term, which secondary physical feature is most likely to be present in the newborn as part of Potter sequence?",
"html": true,
"chtml": true,
"c": [
"Sacrococcygeal teratoma",
"Pulmonary hypoplasia",
"Anencephaly",
"Esophageal atresia"
],
"a": 1,
"eh": "<p>Lack of amniotic fluid (oligohydramnios) prevents normal fetal lung aspiration and expansion, leading to fatal pulmonary hypoplasia.</p><p class=\"nbhint\"><b>Hint:</b> Consider the major cause of mortality in Potter sequence resulting from lack of amniotic fluid cushioning and fluid inhalation.</p>"
},
{
"t": "FBS Embryology · NBME Quiz 1",
"s": "A pregnant woman at 32 weeks gestation is diagnosed with polyhydramnios (amniotic fluid volume &gt;2.0 L). Fetal ultrasound reveals a central nervous system defect where the anterior neuropore failed to close. What mechanism directly causes the excess amniotic fluid volume?",
"html": true,
"chtml": true,
"c": [
"Inability of the fetus to swallow amniotic fluid due to lack of neural swallowing centers",
"Transudation of fluid across the exposed neural tissue into the amniotic cavity",
"Increased fetal urine output caused by lack of circulating antidiuretic hormone",
"Placental insufficiency causing reduced fluid absorption across chorionic villi"
],
"a": 0,
"eh": "<p>Failure of anterior neuropore closure causes anencephaly; without functional brain centers, the fetus cannot swallow amniotic fluid, causing fluid accumulation.</p><p class=\"nbhint\"><b>Hint:</b> Recall how the fetus normally recycles and removes amniotic fluid during late gestation.</p>"
},
{
"t": "FBS Embryology · NBME Quiz 1",
"s": "A 36-year-old pregnant woman undergoes maternal quad screening at 16 weeks gestation. The laboratory returns the following biomarker profile:\n- α-fetoprotein (AFP): Decreased\n- β-human chorionic gonadotropin (β-hCG): Increased\n- Unconjugated estriol (uE₃): Decreased\n- Inhibin A: Increased\n\nWhich chromosomal abnormality is strongly indicated by this screening pattern?",
"html": true,
"chtml": true,
"c": [
"Down syndrome (Trisomy 21)",
"Patau syndrome (Trisomy 13)",
"Neural tube defect",
"Edwards syndrome (Trisomy 18)"
],
"a": 0,
"eh": "<p>The characteristic quad screen for Down syndrome is 'HI': High hCG, High Inhibin A, Low AFP, Low estriol.</p><p class=\"nbhint\"><b>Hint:</b> Use the mnemonic 'HI' for the two elevated markers in this specific trisomy screen.</p>"
},
{
"t": "FBS Embryology · NBME Quiz 1",
"s": "According to the two-cell model of follicular steroidogenesis in the ovary, luteinizing hormone (LH) stimulates theca interna cells to synthesize androgens. Which hormone then acts on granulosa cells to stimulate the enzyme responsible for converting these androgens into estrogens?",
"html": true,
"chtml": true,
"c": [
"Follicle-stimulating hormone (FSH) upregulating aromatase",
"Human chorionic gonadotropin (hCG) upregulating 17α-hydroxylase",
"Luteinizing hormone (LH) upregulating 21-hydroxylase",
"Progesterone upregulating 11β-hydroxylase"
],
"a": 0,
"eh": "<p>LH stimulates theca cells to produce androgens, which diffuse to granulosa cells where FSH stimulates aromatase to convert them into estrogens.</p><p class=\"nbhint\"><b>Hint:</b> Remember: 'Theca = LH' and 'Granulosa = FSH'.</p>"
},
{
"t": "FBS Embryology · NBME Quiz 1",
"s": "A pregnant patient with Rh-negative blood is pregnant with an Rh-positive fetus. She is monitored for fetal hemolytic disease caused by maternal antibodies crossing the placental membrane. Which structural layer of the placenta forms the outermost fetal cell layer in direct contact with maternal blood within the intervillous spaces, and which immunoglobulin selectively crosses this barrier?",
"html": true,
"chtml": true,
"c": [
"Decidua basalis; IgA",
"Cytotrophoblast; IgM",
"Syncytiotrophoblast; IgG",
"Extraembryonic mesoderm; IgE"
],
"a": 2,
"eh": "<p>Syncytiotrophoblast bathed directly in maternal blood forms the outermost barrier layer, and IgG is the only immunoglobulin class that crosses the placenta.</p><p class=\"nbhint\"><b>Hint:</b> Recall which trophoblast layer forms a continuous syncytium in contact with blood, and which antibody class provides passive immunity.</p>"
},
{
"t": "FBS Embryology · NBME Quiz 1",
"s": "A infant is found to have a benign germ cell tumor in the retroperitoneum. Genetic analysis demonstrates that the tumor derived from aberrant primordial germ cells (PGCs). What was the original site of origin of these PGCs during week 3 before their migration toward the gonadal ridge?",
"html": true,
"chtml": true,
"c": [
"Hypoblast layer",
"Intermediate mesoderm",
"Neural crest cells",
"Yolk sac wall (epiblast origin)"
],
"a": 3,
"eh": "<p>Primordial germ cells arise from the epiblast, reside in the yolk sac wall during week 3, and migrate along the dorsal mesentery to the gonadal ridge by week 5–6.</p><p class=\"nbhint\"><b>Hint:</b> Trace the migratory pathway of germ cells from their extraembryonic holding location back to the developing gonads.</p>"
}
]
}
];
