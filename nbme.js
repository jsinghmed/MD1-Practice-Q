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
}
];
