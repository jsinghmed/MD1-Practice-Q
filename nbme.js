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
"s": "A patient's intracellular potassium concentration [K⁺]ᵢₙ is 140 mM and extracellular potassium [K⁺]ₒᵤₜ is 4.5 mM. If acute renal failure increases [K⁺]ₒᵤₜ to 9.0 mM, what is the shift in the potassium equilibrium potential (E<sub>K</sub>) calculated via the Nernst equation at 37 °C (E = 61.5/z log [out]/[in])?",
"html": true,
"chtml": true,
"c": [
"Shifts from approximately +65 mV to +35 mV (becomes less positive).",
"Shifts from approximately −92 mV to −73 mV (becomes more positive / depolarized).",
"Shifts from approximately −92 mV to −110 mV (becomes more negative / hyperpolarized).",
"Remains unchanged at −70 mV because the Na⁺/K⁺-ATPase pump immediately restores baseline gradients."
],
"a": 1,
"eh": "<p>E<sub>K1</sub> = 61.5 log(4.5 / 140) ≈ −91.7 mV. E<sub>K2</sub> = 61.5 log(9.0 / 140) ≈ −73.2 mV. Doubling extracellular potassium decreases the concentration gradient, making E<sub>K</sub> less negative by about +18.5 mV.</p><p class=\"nbhint\"><b>Hint:</b> Apply the Nernst equation by evaluating how doubling the numerator inside the logarithmic term changes the calculated outcome.</p>"
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
"eh": "<p>TEA selectively blocks voltage-gated K⁺ channels from the intracellular side; this blocks delayed outward K⁺ current, impairing repolarization and prolonging action potential duration.</p><p class=\"nbhint\"><b>Hint:</b> Consider which voltage-gated channel drives phase 3 repolarization and brings the membrane back down toward E<sub>K</sub>.</p>"
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
},
{
"course": "msk",
"subject": "Histology",
"name": "MSK Histology · NBME Quiz 1",
"prefix": "nmh1",
"note": "NotebookLM quiz built from the MSK Histology study guide",
"qs": [
{
"t": "MSK Histology · NBME Quiz 1",
"s": "A 24-year-old athlete undergoes a muscle biopsy study examining structural dynamics during contraction. Histological examination reveals that during myofibril shortening, the A band remains constant in length while the I band and H zone shrink. Which structural protein spans from the Z-disc to the M-line, functioning to anchor and center myosin filaments while providing passive elasticity?",
"html": true,
"chtml": true,
"c": [
"Nebulin",
"Desmin",
"Titin",
"Dystrophin"
],
"a": 2,
"eh": "<p>Titin is the largest known human protein, spanning from the Z-disc to the M-line to keep thick myosin filaments centered within the sarcomere and provide passive elastic recoil.</p><p class=\"nbhint\"><b>Hint:</b> Consider the giant accessory protein responsible for sarcomere elasticity and thick filament positioning.</p>"
},
{
"t": "MSK Histology · NBME Quiz 1",
"s": "A patient with essential hypertension is treated with a drug that inhibits calcium influx into vascular smooth muscle cells. In smooth muscle, calcium influx triggers contraction via a distinct biochemical pathway compared to striated muscle. Following calcium entry into the cytosol, calcium binds to a regulatory protein that subsequently activates which downstream enzyme?",
"html": true,
"chtml": true,
"c": [
"Alkaline phosphatase",
"Myosin light chain kinase (MLCK)",
"Carbonic anhydrase II",
"Troponin C"
],
"a": 1,
"eh": "<p>In smooth muscle, cytosolic calcium binds calmodulin, and this complex directly activates myosin light chain kinase (MLCK) to phosphorylate myosin and initiate cross-bridge cycling.</p><p class=\"nbhint\"><b>Hint:</b> Recall the non-striated muscle cascade involving calmodulin and myosin phosphorylation.</p>"
},
{
"t": "MSK Histology · NBME Quiz 1",
"s": "A biopsy of the soleus muscle from a competitive marathon runner reveals a high predominance of muscle fibers characterized by rich myoglobin content, abundant mitochondria, and high oxidative capacity. What characteristic best describes these specific muscle fibers?",
"html": true,
"chtml": true,
"c": [
"Intrafusal fibers innervated exclusively by alpha motor neurons",
"Type IIa fast oxidative-glycolytic fibers relying purely on anaerobic metabolism",
"Type IIb/x fast glycolytic white fibers adapted for rapid sprinting",
"Type I slow oxidative fibers adapted for posture and endurance"
],
"a": 3,
"eh": "<p>Type I muscle fibers (“one slow red ox”) possess abundant myoglobin and mitochondria, relying on oxidative phosphorylation for sustained low-tension fatigue-resistant activity.</p><p class=\"nbhint\"><b>Hint:</b> Think of the mnemonic linking red pigment, slow twitch rate, and aerobic oxidation.</p>"
},
{
"t": "MSK Histology · NBME Quiz 1",
"s": "A 4-year-old boy presents with progressive proximal muscle weakness and calf pseudohypertrophy. Genetic testing reveals a frame-shift mutation in the gene encoding dystrophin. Dystrophin plays a critical role in stabilizing the muscle fiber sarcolemma by forming a link between which intracellular structure and which extracellular matrix protein?",
"html": true,
"chtml": true,
"c": [
"Intracellular desmin to extracellular fibronectin",
"Intracellular actin to extracellular laminin",
"Intracellular myosin to extracellular type II collagen",
"Intracellular titin to extracellular heparan sulfate"
],
"a": 1,
"eh": "<p>Dystrophin anchors intracellular actin filaments to the dystroglycan complex in the sarcolemma, which subsequently binds to extracellular laminin in the basal lamina.</p><p class=\"nbhint\"><b>Hint:</b> Identify the pathway bridging the internal contractile apparatus across dystroglycan to the surrounding basal lamina.</p>"
},
{
"t": "MSK Histology · NBME Quiz 1",
"s": "A 48-year-old woman presents with flaccid bullae on her trunk and oral mucosal erosions. A positive Nikolsky sign is present. Direct immunofluorescence demonstrates autoantibodies targeting desmogleins 1 and 3. Which cytoskeletal filament system is directly anchored by the cell-cell junctions affected in this patient?",
"html": true,
"chtml": true,
"c": [
"Vimentin filaments",
"Microtubules",
"Keratin intermediate filaments",
"Actin microfilaments"
],
"a": 2,
"eh": "<p>Desmosomes (macula adherens) utilize cadherins like desmogleins to join adjacent epithelial cells, directly anchoring keratin intermediate filaments to form structural spot welds.</p><p class=\"nbhint\"><b>Hint:</b> Recall the junctional structure involved in pemphigus vulgaris and its associated cytoskeletal element.</p>"
},
{
"t": "MSK Histology · NBME Quiz 1",
"s": "An elderly man presents with severe generalized pruritus and numerous firm, tense cutaneous bullae. Biopsy confirms subepidermal blistering with autoantibodies directed against hemidesmosomes. Which combination of transmembrane and cytosolic molecules is targeted in this disorder?",
"html": true,
"chtml": true,
"c": [
"Claudins and occludins",
"Integrins (α₆β₄) and BP180/BP230",
"Connexins and connexons",
"E-cadherin and catenins"
],
"a": 1,
"eh": "<p>Bullous pemphigoid involves autoantibodies against hemidesmosomal components, specifically transmembrane integrins (α₆β₄) and dystonin/collagen XVII variants BP180 and BP230.</p><p class=\"nbhint\"><b>Hint:</b> Focus on the junction responsible for cell-to-basement membrane attachment.</p>"
},
{
"t": "MSK Histology · NBME Quiz 1",
"s": "A patient presents with acute watery diarrhea after ingesting contaminated food. Stool cultures identify *Clostridium perfringens*. The pathology is mediated by an enterotoxin that selectively degrades transmembrane proteins forming tight junctions (zonula occludens). Disruption of which protein directly leads to loss of the paracellular seal and basolateral polarity?",
"html": true,
"chtml": true,
"c": [
"Fibronectin",
"Integrins",
"Claudins",
"Desmogleins"
],
"a": 2,
"eh": "<p>*Clostridium perfringens* enterotoxin targets claudins (along with occludin) in tight junctions, breaking down the apical paracellular barrier.</p><p class=\"nbhint\"><b>Hint:</b> Identify the tight junction protein explicitly targeted by *C. perfringens* toxin.</p>"
},
{
"t": "MSK Histology · NBME Quiz 1",
"s": "Tissue biopsy from a retroperitoneal tumor in a 55-year-old patient is submitted for diagnostic immunohistochemistry. The neoplastic cells display strong cytoplasmic staining for desmin, while remaining completely negative for cytokeratin, vimentin, GFAP, and neurofilaments. This biomarker profile confirms that the tumor originates from which cell lineage?",
"html": true,
"chtml": true,
"c": [
"Glial cells",
"Muscle tissue",
"Neuronal tissue",
"Epithelial tissue"
],
"a": 1,
"eh": "<p>Desmin is the specific intermediate filament protein characteristic of muscle tissue (skeletal, cardiac, and smooth muscle).</p><p class=\"nbhint\"><b>Hint:</b> Match the specific intermediate filament tumor marker to its cell type of origin.</p>"
},
{
"t": "MSK Histology · NBME Quiz 1",
"s": "Histological examination of a tissue biopsy taken from the pubic symphysis reveals chondrocytes arranged in parallel rows flanked by dense bundles of matrix fibers. The tissue lacks a surrounding perichondrium. Which type of collagen dominates this connective tissue matrix?",
"html": true,
"chtml": true,
"c": [
"Type II collagen exclusively",
"Type I collagen",
"Type IV collagen",
"Type III collagen"
],
"a": 1,
"eh": "<p>Fibrocartilage (found in pubic symphysis, menisci, and intervertebral discs) uniquely contains dense type I collagen alongside type II collagen and lacks a perichondrium.</p><p class=\"nbhint\"><b>Hint:</b> Determine which collagen type provides high tensile strength in fibrocartilage.</p>"
},
{
"t": "MSK Histology · NBME Quiz 1",
"s": "To resist massive compressive forces in weight-bearing hyaline cartilage, the extracellular matrix relies on hydrated proteoglycan complexes named aggrecan. Which glycosaminoglycans are covalently bound to the core protein attached to hyaluronan in these aggregates?",
"html": true,
"chtml": true,
"c": [
"Hyaluronan and heparin",
"Heparan sulfate and dermatan sulfate",
"Chondroitin sulfate and keratan sulfate",
"Nidogen and chondroitin sulfate"
],
"a": 2,
"eh": "<p>Aggrecan consists of chondroitin sulfate and keratan sulfate glycosaminoglycan chains bound to a core protein, which attaches to hyaluronan to draw water into cartilage matrix.</p><p class=\"nbhint\"><b>Hint:</b> Recall the two abundant sulfated GAGs present on the aggrecan core protein.</p>"
},
{
"t": "MSK Histology · NBME Quiz 1",
"s": "An infant diagnosed with osteopetrosis is found to have a homozygous loss-of-function mutation in carbonic anhydrase II. Histological evaluation of bone tissue shows persistent unabsorbed calcified matrix. Which cell type is functionally defective, and what characteristic microenvironment do these cells create during normal bone remodeling?",
"html": true,
"chtml": true,
"c": [
"Cuboidal osteoblasts failing to deposit osteoid onto bone surfaces",
"Multinucleated osteoclasts failing to secrete H⁺ into Howship lacunae",
"Osteoprogenitor cells failing to express RUNX2",
"Osteocytes failing to extend process canaliculi through lacunae"
],
"a": 1,
"eh": "<p>Osteoclasts derived from monocyte/macrophage lineage use carbonic anhydrase II to generate H⁺ and acidify Howship lacunae; loss of this enzyme leads to osteopetrosis.</p><p class=\"nbhint\"><b>Hint:</b> Consider the cell responsible for bone resorption and the enzymatic mechanism required to dissolve mineralized matrix.</p>"
},
{
"t": "MSK Histology · NBME Quiz 1",
"s": "An elderly patient with postmenopausal osteoporosis is prescribed teriparatide, a recombinant human parathyroid hormone (PTH) analog given intermittently. Through which cellular target and paracrine signaling mechanism does PTH indirectly activate osteoclast-mediated bone resorption?",
"html": true,
"chtml": true,
"c": [
"Inhibiting sclerostin production directly within multinucleated monocytes",
"Binding PTH receptors directly on osteoclasts, releasing cathepsin K",
"Stimulating osteocyte apoptosis through osteoprotegerin (OPG) upregulation",
"Binding PTH receptors on osteoblasts, increasing RANKL expression"
],
"a": 3,
"eh": "<p>PTH receptors are located on osteoblasts; activation induces osteoblasts to express RANKL (and decrease OPG), which binds RANK on osteoclast precursors to stimulate osteoclastogenesis.</p><p class=\"nbhint\"><b>Hint:</b> Remember which bone cell actually expresses the cell-surface PTH receptor.</p>"
},
{
"t": "MSK Histology · NBME Quiz 1",
"s": "Histological sectioning of compact cortical bone reveals structural units called osteons (Haversian systems). Which anatomical channels run perpendicular to the longitudinal Haversian canals to connect adjacent central canals with each other and with the periosteum?",
"html": true,
"chtml": true,
"c": [
"Sharpey fibers",
"Volkmann canals",
"Canaliculi",
"Howship lacunae"
],
"a": 1,
"eh": "<p>Volkmann canals run perpendicularly to Haversian canals, carrying blood vessels and nerves between adjacent osteons, the periosteum, and the endosteum.</p><p class=\"nbhint\"><b>Hint:</b> Identify the transverse neurovascular channels that cross perpendicular to osteon long axes.</p>"
},
{
"t": "MSK Histology · NBME Quiz 1",
"s": "An infant presents with disproportionate dwarfism, broad forehead, and short proximal limbs. Genetic testing confirms achondroplasia caused by an activating mutation in FGFR3. Which microscopic zone of the epiphyseal growth plate is primarily suppressed by this signaling defect?",
"html": true,
"chtml": true,
"c": [
"Reserve (resting) zone",
"Zone of hypertrophy",
"Zone of ossification",
"Zone of proliferation"
],
"a": 3,
"eh": "<p>FGFR3 gain-of-function mutations constitutively inhibit chondrocyte proliferation within the zone of proliferation (stacked coin appearance), severely retarding endochondral ossification.</p><p class=\"nbhint\"><b>Hint:</b> Focus on the growth plate zone where chondrocytes actively divide in columns.</p>"
},
{
"t": "MSK Histology · NBME Quiz 1",
"s": "A 65-year-old male presents with deep bone pain, sensorineural hearing loss, and an increased hat size. Serum bone profile reveals an isolated marked elevation of alkaline phosphatase (ALP), with normal calcium, phosphate, and PTH. Bone histology demonstrates a mosaic pattern of lamellar bone with prominent woven bone lines. What initial cellular dysfunction triggers this pathology?",
"html": true,
"chtml": true,
"c": [
"Failure of osteoclasts to produce carbonic anhydrase II",
"Failure of osteoblasts to synthesize type I collagen",
"Uncontrolled initial osteoclast overactivity followed by disorganized osteoblast bone formation",
"Vitamin D deficiency leading to impaired mineralization of osteoid"
],
"a": 2,
"eh": "<p>Paget disease of bone begins with an osteolytic phase of rampant, localized osteoclastic resorption, followed by a hectic osteoblastic phase producing disorganized mosaic woven bone.</p><p class=\"nbhint\"><b>Hint:</b> Recall the two-phase bone remodeling sequence (resorption then hectic deposition) underlying Paget disease.</p>"
},
{
"t": "MSK Histology · NBME Quiz 1",
"s": "A 22-year-old woman with hypermobile joints and fragile skin suffers a life-threatening spontaneous rupture of her sigmoid colon. A genetic diagnosis of vascular Ehlers-Danlos syndrome is established. What major structural constituent of blood vessel walls and connective tissue is mutated in this patient?",
"html": true,
"chtml": true,
"c": [
"Type III collagen (reticulin)",
"Type II collagen",
"Type I collagen",
"Type IV collagen"
],
"a": 0,
"eh": "<p>Vascular Ehlers-Danlos syndrome is caused by mutations in COL3A1, encoding type III collagen (reticulin), which provides structural support to blood vessels, gravid uterus, and hollow viscera.</p><p class=\"nbhint\"><b>Hint:</b> Associate the vascular variant of Ehlers-Danlos syndrome with the specific collagen type forming reticular fibers.</p>"
},
{
"t": "MSK Histology · NBME Quiz 1",
"s": "A 17-year-old male with tall stature, pectus excavatum, arachnodactyly, and upward lens subluxation is evaluated for an asymptomatic early diastolic murmur. Echocardiography demonstrates aortic root dilation. Defective synthesis of which structural scaffold protein underlies this condition?",
"html": true,
"chtml": true,
"c": [
"Desmin",
"Dystrophin",
"Alpha-1 antitrypsin",
"Fibrillin-1"
],
"a": 3,
"eh": "<p>Marfan syndrome is caused by autosomal dominant mutations in FBN1, encoding fibrillin-1, which forms the glycoprotein microfibrillar scaffold required for elastin deposition.</p><p class=\"nbhint\"><b>Hint:</b> Identify the microfibrillar scaffold protein mutated in Marfan syndrome.</p>"
},
{
"t": "MSK Histology · NBME Quiz 1",
"s": "Examination of a histological section from glabrous skin (palms/soles) reveals five distinct epidermal strata. Which clear, translucent epidermal layer is present exclusively in thick skin, situated directly between the stratum granulosum and stratum corneum?",
"html": true,
"chtml": true,
"c": [
"Stratum spinosum",
"Stratum basale",
"Stratum papillare",
"Stratum lucidum"
],
"a": 3,
"eh": "<p>Stratum lucidum is a thin, clear translucent layer of flattened dead keratinocytes found only in thick skin (palms and soles), residing deep to the stratum corneum.</p><p class=\"nbhint\"><b>Hint:</b> Recall the mnemonic for skin layers and identify the single layer restricted to thick skin.</p>"
},
{
"t": "MSK Histology · NBME Quiz 1",
"s": "A skin biopsy demonstrates dendritic antigen-presenting cells residing within the stratum spinosum. Electron microscopy reveals intracytoplasmic, rod- or tennis-racket-shaped structures called Birbeck granules. These cells originate from which tissue?",
"html": true,
"chtml": true,
"c": [
"Neural crest",
"Local superficial ectoderm",
"Bone marrow",
"Mesodermal pericytes"
],
"a": 2,
"eh": "<p>Langerhans cells are specialized epidermal antigen-presenting dendritic cells derived from bone marrow monocyte precursors, expressing CD1a and S-100.</p><p class=\"nbhint\"><b>Hint:</b> Identify the embryonic lineage of Langerhans cells containing tennis-racket Birbeck granules.</p>"
},
{
"t": "MSK Histology · NBME Quiz 1",
"s": "A neurologist evaluates a patient's touch sensation using a 128 Hz tuning fork placed over the distal phalanx. The patient senses low-frequency vibration and light touch via encapsulated receptors located within the dermal papillae of glabrous skin. Which receptor transduces this signal?",
"html": true,
"chtml": true,
"c": [
"Pacinian corpuscle",
"Merkel disc",
"Ruffini corpuscle",
"Meissner corpuscle"
],
"a": 3,
"eh": "<p>Meissner corpuscles are rapidly adapting encapsulated mechanoreceptors located in the papillary dermis of hairless (glabrous) skin, sensing light touch and low-frequency vibration.</p><p class=\"nbhint\"><b>Hint:</b> Distinguish between light touch receptors in dermal papillae and deep high-frequency vibration receptors.</p>"
},
{
"t": "MSK Histology · NBME Quiz 1",
"s": "A patient suffering from severe inflammatory acne is treated by a dermatologist. The acne involves sebaceous glands whose secretion mechanism relies on complete rupture and lysis of the secretory cell. What is this mode of exocrine gland secretion?",
"html": true,
"chtml": true,
"c": [
"Merocrine secretion",
"Endocrine secretion",
"Holocrine secretion",
"Apocrine secretion"
],
"a": 2,
"eh": "<p>Holocrine secretion involves total cell lysis and rupture to release secretory products (sebum) along with cellular debris, characteristic of sebaceous glands.</p><p class=\"nbhint\"><b>Hint:</b> Choose the term describing whole-cell destruction during exocrine release.</p>"
},
{
"t": "MSK Histology · NBME Quiz 1",
"s": "Mechanosensory osteocytes embedded within lacunae monitor mechanical strain on bone tissue. They communicate with neighboring osteocytes and surface osteoblasts via cellular processes that traverse canaliculi. Which intercellular junction facilitates direct metabolic and electrical coupling between these processes?",
"html": true,
"chtml": true,
"c": [
"Adherens junctions",
"Gap junctions",
"Tight junctions",
"Hemidesmosomes"
],
"a": 1,
"eh": "<p>Osteocyte processes travel inside canaliculi and form gap junctions (composed of connexons) at their tips to allow direct intercellular transport of ions and nutrients.</p><p class=\"nbhint\"><b>Hint:</b> Identify the junction made of connexins that connects osteocytes in canaliculi.</p>"
},
{
"t": "MSK Histology · NBME Quiz 1",
"s": "A muscle biopsy specimen shows branching fibers with central nuclei, intercalated discs, and structural dyads. At which specific anatomical landmark within the sarcomere are these dyads situated?",
"html": true,
"chtml": true,
"c": [
"M-line",
"Z-line",
"A-I junction",
"H-zone"
],
"a": 1,
"eh": "<p>In cardiac muscle, dyads consist of a single T-tubule paired with one terminal cisterna of sarcoplasmic reticulum, located specifically at the Z-line.</p><p class=\"nbhint\"><b>Hint:</b> Differentiate the sarcomeric location of cardiac dyads from skeletal triads.</p>"
},
{
"t": "MSK Histology · NBME Quiz 1",
"s": "A 10-year-old boy presents with hematuria, progressive renal impairment, and high-frequency sensorineural hearing loss. His maternal uncle required a renal transplant at age 25. Biopsy demonstrates irregular thinning and basket-weave splitting of the glomerular basement membrane. Which collagen type is structurally abnormal in this patient?",
"html": true,
"chtml": true,
"c": [
"Type III collagen",
"Type IV collagen",
"Type II collagen",
"Type I collagen"
],
"a": 1,
"eh": "<p>Alport syndrome is an X-linked defect in type IV collagen (specifically α3, α4, or α5 chains), impairing basement membrane formation in the kidney, ear, and eye.</p><p class=\"nbhint\"><b>Hint:</b> Recall the collagen type that builds the basal lamina of basement membranes.</p>"
},
{
"t": "MSK Histology · NBME Quiz 1",
"s": "A 34-year-old male presents with well-demarcated erythematous plaques covered by silvery scales on his extensor surfaces. Biopsy of a plaque demonstrates acanthosis, parakeratosis, and focal neutrophilic accumulations within the stratum corneum. What are these characteristic neutrophilic aggregates termed?",
"html": true,
"chtml": true,
"c": [
"Munro microabscesses",
"Isogenous groups",
"Birbeck granules",
"Howship lacunae"
],
"a": 0,
"eh": "<p>Munro microabscesses are diagnostic collections of neutrophils within the hyperkeratotic stratum corneum seen in psoriasis.</p><p class=\"nbhint\"><b>Hint:</b> Identify the microscopic collection of inflammatory white blood cells in the outer epidermal stratum in psoriasis.</p>"
},
{
"t": "MSK Histology · NBME Quiz 1",
"s": "A toddler presenting with bowing of the legs, delayed dentition, and a rachitic rosary is diagnosed with severe nutritional rickets due to vitamin D deficiency. Pathologically, failure of osteoid matrix mineralization leads to accumulation of uncalcified matrix in the epiphyseal plate. In which zone of the growth plate are these histological alterations most pronounced?",
"html": true,
"chtml": true,
"c": [
"Reserve zone",
"Zone of calcification",
"Zone of hypertrophy",
"Zone of proliferation"
],
"a": 2,
"eh": "<p>In vitamin D deficiency (rickets), chondrocytes in the zone of hypertrophy swell normally but fail to calcify their surrounding matrix, causing structural distortion and expansion of this zone.</p><p class=\"nbhint\"><b>Hint:</b> Recall the epiphyseal zone where swollen chondrocytes accumulate due to lack of calcium mineralization.</p>"
},
{
"t": "MSK Histology · NBME Quiz 1",
"s": "Histological examination of a tissue sample from the anterior trachea reveals cells situated inside lacunae surrounded by a smooth matrix composed predominantly of type II collagen and aggrecan, enclosed by a distinct perichondrium. During development, what mechanism enables inner chondrocytes within this tissue model to expand the tissue from inside?",
"html": true,
"chtml": true,
"c": [
"Endochondral remodeling",
"Intramembranous ossification",
"Appositional growth",
"Interstitial growth"
],
"a": 3,
"eh": "<p>Interstitial growth occurs from within the cartilage as chondrocytes undergo mitosis and deposit new matrix from inner lacunae (e.g., at epiphyseal growth plates).</p><p class=\"nbhint\"><b>Hint:</b> Contrast cartilage growth arising from internal chondrocyte division versus growth from outer perichondrium surface accretion.</p>"
}
]
},
{
"course": "msk",
"subject": "Physiology",
"name": "MSK Physiology · NBME Quiz 1",
"prefix": "nmp1",
"note": "NotebookLM quiz built from the MSK Physiology study guide",
"qs": [
{
"t": "MSK Physiology · NBME Quiz 1",
"s": "A 62-year-old man with a 30-pack-year smoking history presents with progressive proximal lower extremity weakness and dry mouth. Physical examination reveals diminished deep tendon reflexes. However, when the patient performs repeated brief isometric muscle contractions, his muscle strength significantly improves, and tendon reflexes temporarily return. Which of the following mechanisms best explains the primary pathophysiology of this patient's condition?",
"html": true,
"chtml": true,
"c": [
"Autoantibodies directed against presynaptic voltage-gated Ca²⁺ channels",
"Irreversible inhibition of synaptic acetylcholinesterase at motor end plates",
"Cleavage of presynaptic SNARE complex proteins by bacterial endopeptidases",
"Autoantibodies directed against postsynaptic nicotinic acetylcholine receptors"
],
"a": 0,
"eh": "<p>Autoantibodies targeting P/Q-type presynaptic calcium channels impair calcium influx and ACh exocytosis, but repeated stimulation allows calcium buildup that transiently restores neurotransmitter release.</p><p class=\"nbhint\"><b>Hint:</b> Consider how repetitive stimulation affects presynaptic calcium accumulation and neurotransmitter release in presynaptic voltage disorders.</p>"
},
{
"t": "MSK Physiology · NBME Quiz 1",
"s": "A 7-month-old infant is brought to the emergency department due to a 2-day history of constipation, weak crying, and poor feeding. Physical examination reveals diffuse hypotonia, ptosis, and a sluggish pupillary light reflex. Further history reveals that the parents recently fed the infant raw honey. Which of the following cellular events is directly blocked by the toxin responsible for this presentation?",
"html": true,
"chtml": true,
"c": [
"Opening of ligand-gated cation channels on junctional folds",
"Voltage-gated Na⁺ channel activation along the muscle sarcolemma",
"Choline reuptake into the presynaptic motor terminal",
"SNARE-mediated exocytosis of acetylcholine vesicles"
],
"a": 3,
"eh": "<p>Botulinum toxin cleaves SNARE proteins (such as synaptobrevin, syntaxin, and SNAP-25), preventing acetylcholine vesicle release into the synaptic cleft.</p><p class=\"nbhint\"><b>Hint:</b> Think about the structural proteins required for synaptic vesicle fusion with the presynaptic terminal membrane.</p>"
},
{
"t": "MSK Physiology · NBME Quiz 1",
"s": "A 24-year-old man undergoes emergency surgery. Minutes after induction of anesthesia with succinylcholine and isoflurane, he develops generalized muscle rigidity, hypercarbia (ET<sub>CO₂</sub> &gt; 65 mmHg), sinus tachycardia, and a rapid rise in body temperature to 40.5°C (104.9°F). Laboratory testing demonstrates severe hyperkalemia and elevated serum creatine kinase. Which of the following pharmacologic interventions is most appropriate, and what is its target?",
"html": true,
"chtml": true,
"c": [
"Atropine; competitively antagonizes muscarinic acetylcholine receptors",
"Pyridostigmine; inhibits acetylcholinesterase in the synaptic cleft",
"Dantrolene; blocks RyR1 channels on the sarcoplasmic reticulum",
"Sugammadex; chelates non-depolarizing neuromuscular blockers in plasma"
],
"a": 2,
"eh": "<p>Malignant hyperthermia is caused by an autosomal dominant RyR1 mutation leading to unchecked Ca2+ release, which dantrolene directly inhibits to restore intracellular calcium control.</p><p class=\"nbhint\"><b>Hint:</b> Focus on the drug that directly blocks uncontrolled calcium release from the sarcoplasmic reticulum.</p>"
},
{
"t": "MSK Physiology · NBME Quiz 1",
"s": "An experimental physiology preparation isolates skeletal muscle fibers and completely depletes intracellular ATP stores while keeping intracellular Ca²⁺ concentration elevated. At which specific stage of the cross-bridge cycle will the actin and myosin filaments remain fixed?",
"html": true,
"chtml": true,
"c": [
"Inorganic phosphate is prevented from releasing from the myosin head",
"Tropomyosin permanently covers the myosin-binding sites on actin",
"Myosin head remains tightly attached to the actin filament (rigor state)",
"Myosin head remains detached and cocked in a high-energy conformation"
],
"a": 2,
"eh": "<p>ATP binding to the myosin head is required for myosin to detach from actin; in its absence, cross-bridges remain locked in the rigor state.</p><p class=\"nbhint\"><b>Hint:</b> Recall which step in the cross-bridge cycle requires fresh ATP binding to promote filament dissociation.</p>"
},
{
"t": "MSK Physiology · NBME Quiz 1",
"s": "A trauma patient receives succinylcholine during rapid sequence intubation. Transient muscle fasciculations are noted, followed shortly by sustained flaccid paralysis. What electrophysiological mechanism explains the persistent loss of muscle responsiveness during Phase 1 block with this drug?",
"html": true,
"chtml": true,
"c": [
"Cleavage of synaptobrevin preventing acetylcholine release from motor axons",
"Persistent end-plate depolarization leading to inactivation of sarcolemmal voltage-gated Na⁺ channels",
"Competitive blockade of nicotinic receptors preventing initial end-plate potential generation",
"Direct inhibition of ryanodine receptor channels on the sarcoplasmic reticulum"
],
"a": 1,
"eh": "<p>Succinylcholine acts as a non-metabolized nicotinic agonist that holds the end plate depolarized, keeping nearby sodium channels in an inactivated state so action potentials cannot propagate.</p><p class=\"nbhint\"><b>Hint:</b> Identify how continuous end-plate potential elevation alters voltage-gated sodium channel state along the sarcolemma.</p>"
},
{
"t": "MSK Physiology · NBME Quiz 1",
"s": "A 48-year-old agricultural worker is brought to the emergency department with diaphoresis, confusion, pinpoint pupils, excessive salivation, wheezing, and muscle twitching. He is diagnosed with organophosphate toxicity. Along with atropine, pralidoxime is administered. Which of the following best describes the specific therapeutic mechanism of pralidoxime?",
"html": true,
"chtml": true,
"c": [
"Reactivates acetylcholinesterase by cleaving the organophosphate inhibitor from its active site",
"Competitively blocks postsynaptic nicotinic receptors to stop muscle fasciculations",
"Blocks central and peripheral muscarinic acetylcholine receptors",
"Inhibits presynaptic calcium influx to halt further acetylcholine secretion"
],
"a": 0,
"eh": "<p>Pralidoxime regenerates active acetylcholinesterase at both nicotinic and muscarinic synapses if given before enzyme aging occurs.</p><p class=\"nbhint\"><b>Hint:</b> Distinguish between symptom management at muscarinic receptors and restoring the functional enzyme at the synapse.</p>"
},
{
"t": "MSK Physiology · NBME Quiz 1",
"s": "A 32-year-old woman presents with ptosis and diplopia that worsen as the day progresses. Computed tomography of the chest reveals a mass in the anterior mediastinum. Repetitive nerve stimulation testing shows a progressive decremental compound muscle action potential response. Which target is directly bound by the autoantibodies responsible for this disease?",
"html": true,
"chtml": true,
"c": [
"Sarcoplasmic reticulum SERCA pumps",
"Presynaptic Na⁺/Choline reuptake transporters",
"Presynaptic P/Q-type voltage-gated Ca²⁺ channels",
"Postsynaptic nicotinic acetylcholine receptors (N<sub>M</sub>) at junctional folds"
],
"a": 3,
"eh": "<p>Myasthenia gravis involves autoantibodies against postsynaptic nicotinic ACh receptors, leading to receptor degradation, impaired end-plate potential generation, and fatigable weakness often associated with thymoma.</p><p class=\"nbhint\"><b>Hint:</b> Identify the postsynaptic membrane structure affected in myasthenia gravis.</p>"
},
{
"t": "MSK Physiology · NBME Quiz 1",
"s": "In an experimental study, a motor nerve-skeletal muscle preparation is bathed in a solution containing hemicholinium. After repeated nerve stimulation, the muscle eventually fails to generate an end-plate potential despite continuous presynaptic action potentials. Which step in acetylcholine turnover is impaired by this agent?",
"html": true,
"chtml": true,
"c": [
"Calcium-dependent docking of synaptic vesicles with SNAP-25",
"Opening of voltage-gated Ca²⁺ channels at the presynaptic terminal",
"Cleavage of synaptic acetylcholine into acetate and choline",
"Presynaptic reuptake of choline required for acetylcholine synthesis"
],
"a": 3,
"eh": "<p>Hemicholinium blocks the high-affinity choline transporter, preventing choline recycling into the axon terminal and depleting ACh stores during repeated stimulation.</p><p class=\"nbhint\"><b>Hint:</b> Consider the presynaptic reuptake mechanism required for recycling acetylcholine's breakdown products.</p>"
},
{
"t": "MSK Physiology · NBME Quiz 1",
"s": "A patient undergoing abdominal surgery receives rocuronium for muscle relaxation. At the conclusion of the procedure, neostigmine is administered to reverse the neuromuscular blockade. Why is atropine co-administered alongside neostigmine in this setting?",
"html": true,
"chtml": true,
"c": [
"To competitively displace rocuronium from nicotinic end-plate receptors",
"To accelerate the direct degradation of rocuronium in systemic circulation",
"To prevent malignant hyperthermia by inhibiting sarcoplasmic Ca²⁺ release",
"To prevent muscarinic side effects such as bradycardia and bronchospasm caused by elevated acetylcholine"
],
"a": 3,
"eh": "<p>Neostigmine increases ACh levels globally, stimulating both nicotinic receptors (desired for motor recovery) and muscarinic receptors; atropine selectively blocks muscarinic overstimulation.</p><p class=\"nbhint\"><b>Hint:</b> Consider which receptor type mediates unwanted parasympathetic side effects when acetylcholinesterase is inhibited systemically.</p>"
},
{
"t": "MSK Physiology · NBME Quiz 1",
"s": "Researchers compare contractile performance between isolated skeletal muscle fibers and isolated cardiac myocytes placed in a calcium-free extracellular physiological solution. Upon electrical depolarization, the skeletal muscle fiber contracts normally, while the cardiac myocyte fails to contract. Which molecular difference explains this finding?",
"html": true,
"chtml": true,
"c": [
"Skeletal muscle relies exclusively on IP₃-mediated sarcoplasmic reticulum Ca²⁺ release during action potentials",
"Skeletal muscle DHPR acts as a voltage sensor mechanically coupled to RyR1, whereas cardiac muscle relies on extracellular Ca²⁺ entry through DHPR to trigger RyR2",
"Skeletal muscle troponin C binds intracellular Mg²⁺ in place of Ca²⁺ under calcium-free conditions",
"Cardiac myocytes lack intracellular Ca²⁺ stores and rely solely on transmembrane flux for contraction"
],
"a": 1,
"eh": "<p>Skeletal muscle coupling is direct mechanical activation of RyR1 by DHPR, requiring no extracellular Ca2+ influx, whereas cardiac muscle requires Ca2+-induced Ca2+ release via extracellular Ca2+ entry.</p><p class=\"nbhint\"><b>Hint:</b> Think about whether the L-type calcium channel acts as a mechanical trigger or a calcium channel in skeletal muscle excitation-contraction coupling.</p>"
},
{
"t": "MSK Physiology · NBME Quiz 1",
"s": "A biopsy of the soleus muscle from an elite marathon runner shows a high proportion of Type I (slow oxidative) muscle fibers. Compared to Type IIx (fast glycolytic) fibers, which biochemical and physiological profile is characteristic of these Type I fibers?",
"html": true,
"chtml": true,
"c": [
"High glycogen stores, fast myosin ATPase, sparse capillary supply, and large motor unit size",
"Low myoglobin content, few mitochondria, fast myosin ATPase, and high fatigue resistance",
"High myoglobin content, abundant mitochondria, slow myosin ATPase, and high fatigue resistance",
"Low oxidative enzyme activity, rapid sarcoplasmic Ca²⁺ reuptake, and large fiber diameter"
],
"a": 2,
"eh": "<p>Type I fibers ('slow red ox') rely on oxidative phosphorylation, containing abundant mitochondria and myoglobin, and utilize a slow myosin ATPase to maintain sustained fatigue-resistant contraction.</p><p class=\"nbhint\"><b>Hint:</b> Connect myoglobin content, mitochondrial density, and myosin ATPase speed to fatigue resistance.</p>"
},
{
"t": "MSK Physiology · NBME Quiz 1",
"s": "During a gradually increasing voluntary isometric contraction of the quadriceps muscle, motor units are recruited in a precise, orderly sequence. According to Henneman's size principle, which motor units are recruited first?",
"html": true,
"chtml": true,
"c": [
"Motor units are recruited synchronously regardless of size based purely on stimulation frequency",
"Intermediate motor units innervating Type IIa fibers exclusively",
"Large motor units innervating Type IIx fast-glycolytic fibers",
"Small motor units innervating Type I slow-twitch fibers"
],
"a": 3,
"eh": "<p>The size principle dictates that small α-motor neurons innervating small, fatigue-resistant Type I motor units are recruited first, with larger Type II units added as force demands increase.</p><p class=\"nbhint\"><b>Hint:</b> Recall which motor unit size and fiber type are optimized for low force, high endurance baseline activity.</p>"
},
{
"t": "MSK Physiology · NBME Quiz 1",
"s": "Smooth muscle contraction requires intracellular calcium influx and subsequent enzymatic phosphorylation of the myosin light chain. Which intracellular messenger complex directly activates Myosin Light-Chain Kinase (MLCK) to initiate cross-bridge cycling in smooth muscle?",
"html": true,
"chtml": true,
"c": [
"Cyclic AMP-dependent Protein Kinase A (PKA)",
"Ca²⁺-calmodulin complex",
"Ca²⁺-troponin C complex",
"Diacylglycerol (DAG)-activated Protein Kinase C (PKC)"
],
"a": 1,
"eh": "<p>In smooth muscle, elevated cytosolic Ca2+ binds calmodulin, forming a complex that activates MLCK to phosphorylate the myosin light chain and permit actin interaction.</p><p class=\"nbhint\"><b>Hint:</b> Recall the thick-filament calcium sensor that replaces troponin C in non-striated muscle.</p>"
},
{
"t": "MSK Physiology · NBME Quiz 1",
"s": "A patient with stable angina takes sublingual nitroglycerin during an acute chest pain episode. Nitroglycerin releases nitric oxide (NO), triggering vascular smooth muscle relaxation and venodilation. Which downstream enzymatic pathway directly mediates this relaxation?",
"html": true,
"chtml": true,
"c": [
"NO → Rho kinase activation → inhibition of Myosin Light-Chain Phosphatase (MLCP)",
"NO → ↑ IP₃ → stimulation of SERCA pumps → Troponin dephosphorylation",
"NO → ↑ cAMP → PKA activation → activation of Myosin Light-Chain Kinase (MLCK)",
"NO → ↑ cGMP → PKG activation → activation of Myosin Light-Chain Phosphatase (MLCP)"
],
"a": 3,
"eh": "<p>Nitric oxide stimulates soluble guanylyl cyclase to increase cGMP, activating PKG which stimulates MLCP to dephosphorylate myosin and relax smooth muscle.</p><p class=\"nbhint\"><b>Hint:</b> Follow the cascade from NO to cyclic nucleotides and the phosphatase that removes phosphate from myosin.</p>"
},
{
"t": "MSK Physiology · NBME Quiz 1",
"s": "Arterial smooth muscle is capable of maintaining tonic contraction and vascular tone for long periods with minimal energy consumption and low rates of ATP hydrolysis. What physiological phenomenon accounts for this sustained force generation?",
"html": true,
"chtml": true,
"c": [
"Persistent mechanical coupling between membrane DHPR and RyR1",
"Latch state, where dephosphorylated myosin remains attached to actin",
"Sustained high-frequency summation leading to fused tetanus",
"Continuous cross-bridge cycling driven by high MLCK activity"
],
"a": 1,
"eh": "<p>The latch state occurs when myosin is dephosphorylated while attached to actin, slowing detachment rates and maintaining tension with very low ATP consumption.</p><p class=\"nbhint\"><b>Hint:</b> Consider the state in which dephosphorylated myosin remains attached to actin filaments.</p>"
},
{
"t": "MSK Physiology · NBME Quiz 1",
"s": "A researcher isolates smooth muscle tissue from the iris of the eye. Tissue analysis shows that each muscle fiber is innervated independently by individual nerve terminals, and there are virtually no gap junctions present between adjacent cells. How is this tissue categorized, and what is a characteristic feature?",
"html": true,
"chtml": true,
"c": [
"Multi-unit smooth muscle; allows fine, independent electrical control of individual fibers",
"Single-unit smooth muscle; contracts as an electrical syncytium via gap junctions",
"Striated unit smooth muscle; relies on sarcomeric actin-myosin overlap for fine control",
"Visceral smooth muscle; displays spontaneous pacemaker slow waves from Interstitial Cells of Cajal"
],
"a": 0,
"eh": "<p>Multi-unit smooth muscle (found in the iris, ciliary body, piloerector muscles, and vas deferens) lacks gap junctions and features individual fiber innervation for precise, fine control.</p><p class=\"nbhint\"><b>Hint:</b> Distinguish between syncytial visceral smooth muscle and independently controlled smooth muscle units.</p>"
},
{
"t": "MSK Physiology · NBME Quiz 1",
"s": "An isolated skeletal muscle fiber is stretched beyond its optimal resting length to a sarcomere length of 3.6 μm prior to stimulation. When an action potential is triggered, the active force generated by the fiber is significantly decreased. What structural change explains this reduction in active tension?",
"html": true,
"chtml": true,
"c": [
"Collision of thin actin filaments at the center of the sarcomere, obstructing myosin movement",
"Inability of Ca²⁺ to bind troponin C due to conformational distortion of the I band",
"Reduced overlap between thick (myosin) and thin (actin) filaments, decreasing potential cross-bridge formation",
"Complete degradation of titin filaments causing centering loss of the A band"
],
"a": 2,
"eh": "<p>Active tension depends on cross-bridge overlap; stretching sarcomeres beyond optimal length (~2.0-2.2 µm) reduces actin-myosin overlap, diminishing force generation.</p><p class=\"nbhint\"><b>Hint:</b> Consider how hyper-stretching affects the physical interaction between myosin heads and actin binding sites.</p>"
},
{
"t": "MSK Physiology · NBME Quiz 1",
"s": "A muscle mechanics experiment measures the force-velocity relationship of an isolated skeletal muscle. As the afterload applied to the muscle is increased up to the maximum load the muscle can lift (isometric load), what happens to the shortening velocity?",
"html": true,
"chtml": true,
"c": [
"Shortening velocity initially drops to zero but rebounds as elastic titin recruits extra force",
"Shortening velocity remains constant because cross-bridge cycling rate is fixed",
"Shortening velocity decreases, reaching zero at maximal isometric load",
"Shortening velocity increases linearly up to Vₘₐₓ at maximal load"
],
"a": 2,
"eh": "<p>According to the force-velocity curve, increasing load decreases shortening velocity; at maximal isometric load (Fₘₐₓ), the velocity of shortening is exactly zero.</p><p class=\"nbhint\"><b>Hint:</b> Recall the inverse relationship between afterload and shortening speed in muscle contraction.</p>"
},
{
"t": "MSK Physiology · NBME Quiz 1",
"s": "A healthy 25-year-old woman performs a moderate-intensity continuous treadmill run. Which set of systemic hemodynamic adjustments is expected during this aerobic exercise?",
"html": true,
"chtml": true,
"c": [
"Decreased Cardiac Output, increased Diastolic Blood Pressure, increased Total Peripheral Resistance",
"Increased Cardiac Output, increased Systolic Blood Pressure, decreased Total Peripheral Resistance",
"Unchanged Cardiac Output, decreased Systolic Blood Pressure, increased Total Peripheral Resistance",
"Increased Cardiac Output, markedly increased Diastolic Blood Pressure, increased Total Peripheral Resistance"
],
"a": 1,
"eh": "<p>During exercise, CO increases (via HR and SV), SBP rises due to higher stroke volume, and TPR decreases because of local metabolic vasodilation (adenosine, K+, lactate, CO2) in working muscle.</p><p class=\"nbhint\"><b>Hint:</b> Think about how cardiac output changes alongside local metabolic vasodilation in skeletal muscle vascular beds.</p>"
},
{
"t": "MSK Physiology · NBME Quiz 1",
"s": "During strenuous exercise, active skeletal muscle produces local metabolic changes that alter hemoglobin's oxygen affinity, facilitating oxygen delivery to working tissues. Which local environment shifts the oxygen-hemoglobin dissociation curve to the right?",
"html": true,
"chtml": true,
"c": [
"Increased pH, decreased lactate, decreased temperature, and decreased P<sub>CO₂</sub>",
"Decreased temperature, decreased P<sub>CO₂</sub>, decreased H⁺ (increased pH), and decreased 2,3-BPG",
"Increased temperature, increased P<sub>CO₂</sub>, increased H⁺ (decreased pH), and increased 2,3-BPG",
"Decreased P<sub>CO₂</sub>, increased P<sub>O₂</sub>, and decreased red blood cell 2,3-BPG concentration"
],
"a": 2,
"eh": "<p>Increased temperature, P<sub>CO₂</sub>, acidity (H⁺), and 2,3-BPG shift the oxygen-hemoglobin curve rightward, lowering affinity and promoting O₂ release in active muscle.</p><p class=\"nbhint\"><b>Hint:</b> Remember the conditions that promote oxygen unloading in metabolically active tissues.</p>"
},
{
"t": "MSK Physiology · NBME Quiz 1",
"s": "A physiological experiment demonstrates that a skeletal muscle consuming ATP while lifting a heavy load over a distance liberates more total energy than the same muscle contracting loaded modernly under pure isometric conditions (doing no external work). Which concept describes this principle?",
"html": true,
"chtml": true,
"c": [
"Fenn effect",
"Frank-Starling law",
"Treppe effect",
"Size principle"
],
"a": 0,
"eh": "<p>The Fenn effect establishes that a muscle performing more external work consumes a proportionally greater amount of ATP and liberates more total energy.</p><p class=\"nbhint\"><b>Hint:</b> Recall the named physiological effect stating that energy liberated by muscle is proportional to total work performed.</p>"
},
{
"t": "MSK Physiology · NBME Quiz 1",
"s": "A 30-year-old military recruit collapses after an intense physical training session in high heat. He reports severe muscle pain and passes dark, tea-colored urine. A dipstick urinalysis tests positive for blood, but microscopic examination reveals zero red blood cells per high-power field. Which laboratory finding and acute risk are most likely present?",
"html": true,
"chtml": true,
"c": [
"Elevated serum creatine kinase (CK) and high risk of acute kidney injury",
"Marked hypokalemia and risk of cardiac array due to intracellular potassium sequestration",
"Elevated serum troponin I and risk of transmural acute myocardial infarction",
"Elevated serum direct bilirubin and high risk of acute liver failure"
],
"a": 0,
"eh": "<p>Rhabdomyolysis causes myoglobin breakdown release, leading to a urine dipstick positive for heme without intact RBCs, elevated CK, and potential acute kidney injury secondary to myoglobin toxicity.</p><p class=\"nbhint\"><b>Hint:</b> Connect myoglobinuria with serum muscle enzyme levels and renal tubule injury.</p>"
},
{
"t": "MSK Physiology · NBME Quiz 1",
"s": "Following a maximal 100-meter sprint, an athlete breathes heavily for several minutes despite sitting at complete rest. What physiological process directly accounts for this elevated post-exercise oxygen consumption (EPOC / oxygen debt)?",
"html": true,
"chtml": true,
"c": [
"Suppression of mitochondrial oxidative phosphorylation to prevent thermal injury",
"Irreversible oxidation of myoglobin to clear excess sarcoplasmic iron",
"Restoration of phosphocreatine and ATP stores and hepatic conversion of lactate to glucose via the Cori cycle",
"Conversion of glycogen into pyruvate through aerobic glycolysis in resting muscle"
],
"a": 2,
"eh": "<p>Oxygen debt (EPOC) reflects extra oxygen consumed post-exercise to replenish phosphocreatine and ATP, re-oxygenate myoglobin, and clear accumulated lactate via hepatic gluconeogenesis.</p><p class=\"nbhint\"><b>Hint:</b> Think about metabolic restoration requirements, including energy store replenishment and lactate processing.</p>"
},
{
"t": "MSK Physiology · NBME Quiz 1",
"s": "A patient receives an intravenous infusion of an α₁-adrenergic agonist. This leads to profound constriction of vascular smooth muscle without causing a measurable change in resting cell membrane potential. Which second messenger cascade drives this pharmacomechanical coupling?",
"html": true,
"chtml": true,
"c": [
"Gₛ → Adenylyl cyclase → cAMP → PKA → L-type  Ca²⁺  channel opening",
"Gᵢ → Inhibition of cGMP → direct activation of  MLCP",
"G<sub>q</sub> → Phospholipase C (PLC) → IP₃ → SR  Ca²⁺  release",
"Direct activation of sarcolemmal L-type Ca²⁺ channels via mechanical stretch"
],
"a": 2,
"eh": "<p>Pharmacomechanical coupling occurs without membrane depolarization when α₁ receptors activate G<sub>q</sub> and PLC, generating IP₃ to release Ca²⁺ from the sarcoplasmic reticulum.</p><p class=\"nbhint\"><b>Hint:</b> Follow the G<sub>q</sub> protein pathway to sarcoplasmic reticulum calcium release.</p>"
},
{
"t": "MSK Physiology · NBME Quiz 1",
"s": "An inhaled β₂-adrenergic agonist such as albuterol is administered to a patient experiencing an asthma exacerbation. The drug binds β₂ receptors on bronchial smooth muscle, causing rapid bronchodilation. What intracellular mechanism mediates this relaxation?",
"html": true,
"chtml": true,
"c": [
"↑ cGMP → PKG  activation → direct inhibition of MLCP",
"↑ cAMP → PKA  activation → phosphorylation and inhibition of MLCK",
"↓ cAMP → inhibition of SERCA pumps → depletion of sarcoplasmic  Ca²⁺",
"G<sub>q</sub>  activation → inhibition of IP₃  receptors on the sarcoplasmic reticulum"
],
"a": 1,
"eh": "<p>β₂ receptor stimulation increases cAMP and activates PKA, which phosphorylates and inhibits MLCK, reducing myosin phosphorylation and relaxing smooth muscle.</p><p class=\"nbhint\"><b>Hint:</b> Trace how elevated cAMP and PKA affect the activity of Myosin Light-Chain Kinase.</p>"
},
{
"t": "MSK Physiology · NBME Quiz 1",
"s": "An electron micrograph of a skeletal muscle sarcomere is recorded during concentric isotonic contraction. Which of the following describes the behavior of the A band, I band, and H zone during sarcomere shortening?",
"html": true,
"chtml": true,
"c": [
"A band and I band shorten; H zone remains constant",
"A band lengthens; I band remains constant; H zone disappears completely",
"A band remains constant; I band and H zone shorten",
"A band, I band, and H zone all shorten proportionally"
],
"a": 2,
"eh": "<p>According to the sliding filament theory, the A band (myosin length) remains constant during contraction, whereas the I band (actin only) and H zone (myosin only) shorten as filaments slide.</p><p class=\"nbhint\"><b>Hint:</b> Identify which band represents the full length of the thick filament versus regions containing only thin filaments or non-overlapping thick filaments.</p>"
},
{
"t": "MSK Physiology · NBME Quiz 1",
"s": "During the skeletal muscle cross-bridge cycle, the myosin head undergoes a conformational change that pulls the actin filament toward the center of the sarcomere (the power stroke). Which specific chemical event directly triggers this power stroke step?",
"html": true,
"chtml": true,
"c": [
"Binding of a new ATP molecule to the myosin head",
"Hydrolysis of ATP into ADP and Pᵢ",
"Release of inorganic phosphate (Pᵢ) from the myosin head",
"Binding of Ca²⁺ to tropomyosin"
],
"a": 2,
"eh": "<p>Once the cocked myosin head binds actin, the release of inorganic phosphate (Pᵢ) triggers the power stroke, followed subsequently by ADP release.</p><p class=\"nbhint\"><b>Hint:</b> Consider which product of ATP hydrolysis must be released from the myosin head to cause its conformational rotation.</p>"
}
]
},
{
"course": "msk",
"subject": "Biochemistry",
"name": "MSK Biochemistry · NBME Quiz 1",
"prefix": "nmb1",
"note": "NotebookLM quiz built from the MSK Biochemistry study guide",
"qs": [
{
"t": "MSK Biochemistry · NBME Quiz 1",
"s": "A 4-month-old infant presents with severe hypoglycemia, lactic acidosis, hyperuricemia, and hepatomegaly. Physical examination reveals a doll-like facial appearance. Administration of intramuscular glucagon fails to increase plasma glucose concentrations. Which of the following enzyme deficiencies is the primary cause of this patient's clinical presentation?",
"html": true,
"chtml": true,
"c": [
"Glucose-6-phosphatase",
"Debranching enzyme (α-1,6-glucosidase)",
"Lysosomal acid α-1,4-glucosidase",
"Muscle glycogen phosphorylase"
],
"a": 0,
"eh": "<p>Glucose-6-phosphatase converts glucose-6-phosphate to free glucose in the final step of both glycogenolysis and gluconeogenesis; its deficiency (Von Gierke disease) prevents liver glucose release, causing severe fasting hypoglycemia, lactic acidosis, hyperuricemia, and hepatomegaly.</p><p class=\"nbhint\"><b>Hint:</b> Consider which enzyme acts as the common final pathway for both liver glycogenolysis and gluconeogenesis to release free glucose into the bloodstream.</p>"
},
{
"t": "MSK Biochemistry · NBME Quiz 1",
"s": "An 8-month-old infant is brought to the clinic due to profound hypotonia, macroglossia, and progressive dyspnea. Echocardiography demonstrates marked left ventricular hypertrophic cardiomyopathy. Laboratory analysis shows normal serum glucose and lactate levels. A muscle biopsy reveals intact cytoplasmic glycogen structure but significant accumulation of glycogen within membrane-bound lysosomes. Which enzyme is defective in this infant?",
"html": true,
"chtml": true,
"c": [
"Lysosomal acid α-1,4-glucosidase",
"Branching enzyme",
"Glucose-6-phosphate dehydrogenase",
"Liver glycogen phosphorylase"
],
"a": 0,
"eh": "<p>Pompe disease (Type II GSD) is caused by deficient lysosomal acid maltase, leading to lysosomal glycogen accumulation that damages cardiac and skeletal muscle ('Pompe trashes the Pump') while maintaining normal blood glucose.</p><p class=\"nbhint\"><b>Hint:</b> Focus on the organelle in which glycogen is pathologically accumulated without disrupting normal cytosolic glucose homeostasis.</p>"
},
{
"t": "MSK Biochemistry · NBME Quiz 1",
"s": "A 21-year-old military recruit experiences severe muscle cramping and reddish-brown urine following a 5-mile run. He notes that if he rests briefly when cramps begin, he can resume running with less discomfort ('second wind' phenomenon). An ischemic forearm exercise test reveals a normal rise in venous ammonia but no increase in venous lactate. Which enzyme is deficient in this individual?",
"html": true,
"chtml": true,
"c": [
"Fructokinase",
"Myophosphorylase",
"Phosphofructokinase-1",
"Pyruvate kinase"
],
"a": 1,
"eh": "<p>Muscle glycogen phosphorylase (myophosphorylase) deficiency (McArdle disease) impairs glycogen breakdown in muscle during anaerobic exertion, preventing lactate generation while preserving ammonia production.</p><p class=\"nbhint\"><b>Hint:</b> Identify the tissue-specific enzyme required to liberate glucose-1-phosphate from glycogen to fuel anaerobic exertion in skeletal muscle.</p>"
},
{
"t": "MSK Biochemistry · NBME Quiz 1",
"s": "A 2-year-old child presents with hepatomegaly and mild fasting hypoglycemia. Serum lactate and uric acid concentrations are within normal limits. Liver biopsy demonstrates hepatocyte accumulation of abnormal glycogen molecules characterized by extremely short outer chains (limit dextrins). Which metabolic pathway enzyme is dysfunctional?",
"html": true,
"chtml": true,
"c": [
"Branching enzyme (α-1,4 to α-1,6 transglucosidase)",
"Glycogen synthase",
"Glucose-6-phosphatase",
"Debranching enzyme (α-1,6-glucosidase)"
],
"a": 3,
"eh": "<p>Cori disease (Type III GSD) is caused by a deficiency in debranching enzyme, leaving branched glycogen with short outer chains (limit dextrins) intact; gluconeogenesis remains intact, so serum lactate is normal.</p><p class=\"nbhint\"><b>Hint:</b> Recall which enzyme is responsible for cleaving the α-1,6 glycosidic branches after 4-α-glucanotransferase translocates three glucose residues.</p>"
},
{
"t": "MSK Biochemistry · NBME Quiz 1",
"s": "A 1-year-old child recently transitioned from breastfeeding to consuming fruit juices and purees. Shortly after eating, the infant develops episodes of severe vomiting, diaphoresis, confusion, and hypoglycemia. Laboratory evaluation reveals marked hypophosphatemia and liver dysfunction. Urinalysis is positive for reducing sugars but negative for glucose. What accumulated metabolite is directly responsible for inhibiting glycogenolysis and gluconeogenesis in this condition?",
"html": true,
"chtml": true,
"c": [
"Fructose-1-phosphate",
"Sorbitol",
"Fructose-6-phosphate",
"Galactose-1-phosphate"
],
"a": 0,
"eh": "<p>Deficiency of Aldolase B in Hereditary Fructose Intolerance causes accumulation of fructose-1-phosphate, which traps intracellular inorganic phosphate (Pᵢ), inhibiting glycogen phosphorylase and aldolase in gluconeogenesis.</p><p class=\"nbhint\"><b>Hint:</b> Think about the phosphorylated intermediate produced by fructokinase that cannot be converted to glyceraldehyde and DHAP when aldolase B is deficient.</p>"
},
{
"t": "MSK Biochemistry · NBME Quiz 1",
"s": "A 2-week-old newborn who is formula-fed presents with failure to thrive, jaundice, hepatomegaly, and bilateral nuclear cataracts. Blood culture grows *Escherichia coli*. Urinalysis confirms the presence of reducing substances in urine. Which enzyme deficiency is responsible for this life-threatening presentation?",
"html": true,
"chtml": true,
"c": [
"Uridine diphosphate (UDP)-glucose 4-epimerase",
"Fructokinase",
"Galactose-1-phosphate uridyltransferase (GALT)",
"Galactokinase"
],
"a": 2,
"eh": "<p>Classic galactosemia is caused by GALT deficiency, leading to accumulation of toxic galactose-1-phosphate and galactitol; this presents with cataracts, hepatomegaly, liver failure, and a classic predisposition to *E. coli* sepsis.</p><p class=\"nbhint\"><b>Hint:</b> Differentiate between the enzyme deficiency that causes cataracts alone versus the one that additionally causes severe organ toxicity and bacterial sepsis.</p>"
},
{
"t": "MSK Biochemistry · NBME Quiz 1",
"s": "A researcher studies glucose transporter dynamics in hepatic and pancreatic tissue. She identifies a membrane transporter that exhibits a high Kₘ (low affinity) for glucose, acts bidirectionally, and functions as a physiological glucose sensor in pancreatic β-cells. Which transporter is being evaluated?",
"html": true,
"chtml": true,
"c": [
"GLUT2",
"GLUT1",
"GLUT3",
"GLUT4"
],
"a": 0,
"eh": "<p>GLUT2 is a high-Kₘ, low-affinity bidirectional glucose transporter located in the liver, pancreatic β-cells, kidney, and basolateral membrane of the intestine, functioning as a glucose sensor.</p><p class=\"nbhint\"><b>Hint:</b> Look for the glucose transporter that operates efficiently only at high blood glucose levels to allow the liver and pancreas to respond proportionally to postprandial glucose spikes.</p>"
},
{
"t": "MSK Biochemistry · NBME Quiz 1",
"s": "A patient with Type 1 Diabetes Mellitus forgets to administer insulin before eating a carbohydrate-rich meal. In skeletal muscle cells, glucose entry across the cell membrane remains minimal. Which physiological mechanism explains this impaired glucose entry?",
"html": true,
"chtml": true,
"c": [
"Sequestration of GLUT4 transporters inside intracellular vesicles",
"Phosphorylation and inactivation of GLUT1 by protein kinase A",
"Competitive inhibition of SGLT-1 by circulating ketone bodies",
"Inhibition of GLUT2 transporters by high intracellular ATP"
],
"a": 0,
"eh": "<p>In the absence of insulin signaling (or exercise), GLUT4 transporters in striated muscle and adipose tissue remain sequestered in intracellular vesicles, keeping membrane uptake low.</p><p class=\"nbhint\"><b>Hint:</b> Recall which specific glucose transporter in striated muscle requires an insulin signal or physical contraction to translocate from cytosolic stores to the sarcolemma.</p>"
},
{
"t": "MSK Biochemistry · NBME Quiz 1",
"s": "Following a rich carbohydrate meal, elevated insulin levels stimulate hepatic glycolysis. Insulin activates a bifunctional enzyme complex that alters the level of an allosteric regulator. How does this signaling event promote the rate-limiting step of glycolysis?",
"html": true,
"chtml": true,
"c": [
"Increased citrate levels bind directly to PFK-1 to stimulate its catalytic domain.",
"Dephosphorylation activates PFK-2, increasing fructose-2,6-bisphosphate, which allosterically activates PFK-1.",
"Phosphorylation activates FBPase-2, decreasing fructose-2,6-bisphosphate, which relieves inhibition on PFK-1.",
"Dephosphorylation of pyruvate kinase directly converts fructose-6-phosphate into fructose-1,6-bisphosphate."
],
"a": 1,
"eh": "<p>Insulin stimulates protein phosphatase 1 to dephosphorylate the PFK-2/FBPase-2 complex, activating PFK-2 to generate fructose-2,6-bisphosphate, a potent allosteric activator of PFK-1.</p><p class=\"nbhint\"><b>Hint:</b> Consider how insulin-mediated dephosphorylation impacts the dual enzyme PFK-2/FBPase-2 and the downstream concentration of fructose-2,6-bisphosphate.</p>"
},
{
"t": "MSK Biochemistry · NBME Quiz 1",
"s": "An agricultural worker is brought to the emergency department with severe abdominal pain, vomiting, diarrhea, hyperpigmentation, and a distinct garlic smell on his breath. Toxicology identifies heavy metal poisoning that disrupts cellular respiration by binding to lipoic acid. Which of the following metabolic steps is directly inhibited by this toxin?",
"html": true,
"chtml": true,
"c": [
"Conversion of pyruvate to acetyl-CoA by pyruvate dehydrogenase",
"Conversion of phosphoenolpyruvate to pyruvate by pyruvate kinase",
"Conversion of glucose to glucose-6-phosphate by hexokinase",
"Conversion of oxaloacetate to phosphoenolpyruvate by PEP carboxykinase"
],
"a": 0,
"eh": "<p>Arsenic binds and inhibits lipoic acid, an essential cofactor for both Pyruvate Dehydrogenase (PDH) and α-Ketoglutarate Dehydrogenase, halting aerobic carbohydrate metabolism.</p><p class=\"nbhint\"><b>Hint:</b> Identify the multi-enzyme complex requiring five cofactors ('Tender Loving Care For Nancy') that converts the end product of glycolysis into a TCA cycle reactant.</p>"
},
{
"t": "MSK Biochemistry · NBME Quiz 1",
"s": "A chronic alcoholic presents to the emergency room with confusion, horizontal nystagmus, and ataxia. Before administering intravenous glucose, the physician orders intravenous thiamine. Failure to give thiamine prior to glucose loading could precipitate acute neurotoxicity due to impairment of which enzyme complex?",
"html": true,
"chtml": true,
"c": [
"Pyruvate carboxylase",
"Glyceraldehyde-3-phosphate dehydrogenase",
"Lactate dehydrogenase",
"Pyruvate dehydrogenase"
],
"a": 3,
"eh": "<p>Thiamine (Vitamin B₁) is converted to thiamine pyrophosphate (TPP), an essential cofactor for Pyruvate Dehydrogenase; giving glucose without thiamine worsens central nervous system energetic failure and Wernicke encephalopathy.</p><p class=\"nbhint\"><b>Hint:</b> Focus on the enzyme that requires Thiamine Pyrophosphate (TPP) as E₁ cofactor to metabolize pyruvate produced from the glucose load.</p>"
},
{
"t": "MSK Biochemistry · NBME Quiz 1",
"s": "A newborn exhibits persistent jaundice and pallor. Peripheral blood smear reveals numerous echinocytes (burr cells) and non-spherocytic hemolytic anemia. Enzyme quantification reveals a glycolytic defect in mature erythrocytes. Which metabolic alteration is expected in this infant's red blood cells as a result of this specific enzyme defect?",
"html": true,
"chtml": true,
"c": [
"Elevated 2,3-bisphosphoglycerate (2,3-BPG) levels causing a right-shifted oxygen-hemoglobin dissociation curve",
"Increased ATP production via oxidative phosphorylation to compensate for membrane loss",
"Depressed 2,3-bisphosphoglycerate (2,3-BPG) levels causing enhanced tissue oxygen delivery",
"Increased conversion of pyruvate to alanine via alanine transaminase (ALT)"
],
"a": 0,
"eh": "<p>Pyruvate kinase deficiency blocks the PEP to pyruvate step, causing back-up of upstream glycolytic intermediates including 1,3-BPG, which increases 2,3-BPG and shifts the oxygen dissociation curve rightward.</p><p class=\"nbhint\"><b>Hint:</b> Trace how a block at the final step of glycolysis (PEP → pyruvate) affects the concentration of upstream glycolytic metabolites in mature erythrocytes.</p>"
},
{
"t": "MSK Biochemistry · NBME Quiz 1",
"s": "During high-altitude acclimatization, red blood cells increase the metabolic conversion of 1,3-bisphosphoglycerate into 2,3-bisphosphoglycerate via the Rapoport-Luebering shunt. What is the metabolic trade-off and physiological consequence of this pathway activation?",
"html": true,
"chtml": true,
"c": [
"Bypasses the phosphoglycerate kinase ATP-generating step; shifts O₂ dissociation curve to the right to facilitate tissue O₂ unloading.",
"Consumes acetyl-CoA to regenerate NAD⁺; increases hemoglobin affinity for oxygen.",
"Inhibits enolase to save glucose-6-phosphate; decreases peripheral oxygen release.",
"Generates extra NADH for lactate dehydrogenase; shifts O₂ dissociation curve to the left to enhance O₂ binding in lungs."
],
"a": 0,
"eh": "<p>The Rapoport-Luebering shunt bypasses the synthesis of ATP at phosphoglycerate kinase (1,3-BPG → 3-PG) to produce 2,3-BPG, which decreases hemoglobin affinity for O₂ (right shift), aiding oxygen delivery to tissues.</p><p class=\"nbhint\"><b>Hint:</b> Consider what energetic molecule (ATP) is sacrificed when 1,3-BPG is rerouted away from the phosphoglycerate kinase reaction, and how 2,3-BPG affects hemoglobin O₂ affinity.</p>"
},
{
"t": "MSK Biochemistry · NBME Quiz 1",
"s": "During maximal anaerobic sprinting, skeletal muscle produces large quantities of lactate. The lactate is transported to the liver via the bloodstream to undergo gluconeogenesis and restore glucose supply to the working muscle. What is the net energetic expenditure in the liver for every molecule of glucose resynthesized via this Cori Cycle?",
"html": true,
"chtml": true,
"c": [
"0 net ATP expenditure (energetically neutral)",
"6 net ATP equivalent molecules generated",
"4 net ATP equivalent molecules consumed",
"2 net ATP equivalent molecules generated"
],
"a": 2,
"eh": "<p>In the Cori cycle, muscle glycolysis generates 2 ATP per glucose, while hepatic gluconeogenesis requires 6 ATP equivalents to convert 2 lactate molecules back to glucose, yielding a net liver cost of 4 ATP.</p><p class=\"nbhint\"><b>Hint:</b> Calculate the difference between the ATP generated by muscle glycolysis (2 ATP) and the ATP/GTP consumed by hepatic gluconeogenesis (6 ATP equivalents) per glucose unit.</p>"
},
{
"t": "MSK Biochemistry · NBME Quiz 1",
"s": "A child living in an impoverished region presents with swollen, bleeding gums, loose teeth, poor wound healing, and corkscrew hairs. Physical examination reveals pericapillary and perifollicular hemorrhages. This condition results from impairment of an enzymatic reaction occurring in which intracellular compartment?",
"html": true,
"chtml": true,
"c": [
"Mitochondrial Matrix",
"Rough Endoplasmic Reticulum (RER)",
"Golgi Apparatus",
"Extracellular Space"
],
"a": 1,
"eh": "<p>Scurvy results from Vitamin C deficiency, impairing prolyl and lysyl hydroxylase reactions that occur inside the lumen of the Rough Endoplasmic Reticulum (RER) during collagen synthesis.</p><p class=\"nbhint\"><b>Hint:</b> Recall where preprocollagen undergoes Vitamin C-dependent post-translational hydroxylation of proline and lysine residues during early collagen processing.</p>"
},
{
"t": "MSK Biochemistry · NBME Quiz 1",
"s": "A 5-year-old child presents with a history of multiple long-bone fractures following minimal accidental bumps, blue-tinged sclerae, and conductive hearing loss due to otosclerosis. Genetic testing confirms an autosomal dominant mutation in the COL1A1 gene. What is the fundamental molecular mechanism disrupting protein assembly in this patient?",
"html": true,
"chtml": true,
"c": [
"Substitution of glycine residues preventing triple helix formation",
"Failure of extracellular propeptide cleavage by N-proteinase",
"Defective intracellular glycosylation of hydroxylysine residues",
"Impaired cross-linking of tropocollagen by lysyl oxidase"
],
"a": 0,
"eh": "<p>Osteogenesis imperfecta is caused by mutations (e.g., COL1A1/COL1A2) replacing crucial glycine residues in Gly-X-Y repeats, preventing the tight packing required for triple helix assembly.</p><p class=\"nbhint\"><b>Hint:</b> Glycine is the smallest amino acid and is strictly required every third position (Gly-X-Y) to fit inside the dense central core of the collagen triple helix.</p>"
},
{
"t": "MSK Biochemistry · NBME Quiz 1",
"s": "A patient with hypermobile joints, hyperextensible skin, and easy bruising is diagnosed with Ehlers-Danlos syndrome. Structural analysis of the patient's collagen reveals improper extracellular conversion of procollagen to tropocollagen. Which specific step in collagen biosynthesis is defective?",
"html": true,
"chtml": true,
"c": [
"Hydroxylation of proline residues requiring ascorbic acid",
"Oxidative deamination of lysine residues by lysyl oxidase",
"Formation of interchain disulfide bonds at C-propeptide regions in the RER",
"Cleavage of N- and C-terminal propeptides by extracellular peptidases"
],
"a": 3,
"eh": "<p>In Ehlers-Danlos syndrome (such as dermatosparaxis type), defective extracellular procollagen peptidases fail to cleave N- and C-terminal propeptides, preventing tropocollagen formation and proper fibril alignment.</p><p class=\"nbhint\"><b>Hint:</b> Identify the extracellular step that removes terminal non-helical extensions from procollagen to yield insoluble tropocollagen monomers.</p>"
},
{
"t": "MSK Biochemistry · NBME Quiz 1",
"s": "An infant presents with failure to thrive, severe developmental delay, and peculiar sparse, kinky, brittle hair. Serum copper and ceruloplasmin levels are markedly decreased. Which collagen and elastin processing enzyme is directly functionally impaired by this metabolic defect?",
"html": true,
"chtml": true,
"c": [
"Galactosyltransferase",
"Lysyl oxidase",
"Prolyl hydroxylase",
"Procollagen peptidase"
],
"a": 1,
"eh": "<p>Menkes disease is an X-linked recessive disorder of copper transport (ATP7A defect); low copper levels impair lysyl oxidase, which requires copper to cross-link collagen and elastin.</p><p class=\"nbhint\"><b>Hint:</b> Consider which extracellular enzyme requires copper to oxidize lysine/hydroxylysine residues into aldehydes to enable covalent cross-linking.</p>"
},
{
"t": "MSK Biochemistry · NBME Quiz 1",
"s": "A 17-year-old high school basketball player undergoes a physical examination. He is notable for tall stature, long thin arms and fingers (arachnodactyly), pectus excavatum, hypermobile joints, and upward/outward dislocation of the ocular lens (ectopia lentis). What is the underlying molecular defect responsible for this student's condition?",
"html": true,
"chtml": true,
"c": [
"Autosomal dominant mutation in FBN1 causing defective fibrillin-1 scaffold formation",
"X-linked mutation in ATP7A impairing copper-dependent lysyl oxidase",
"Deficiency of α₁-antitrypsin leading to unopposed degradation of elastin by elastase",
"Autosomal recessive deficiency of cystathionine β-synthase leading to downward lens subluxation"
],
"a": 0,
"eh": "<p>Marfan syndrome is an autosomal dominant disorder caused by mutations in the FBN1 gene encoding fibrillin-1, a glycoprotein that forms the structural microfibrillar scaffold for elastin.</p><p class=\"nbhint\"><b>Hint:</b> Differentiate between Marfan syndrome (fibrillin-1 scaffold defect; upward lens dislocation) and homocystinuria (downward lens dislocation).</p>"
},
{
"t": "MSK Biochemistry · NBME Quiz 1",
"s": "A 32-year-old non-smoker presents with progressive exertional dyspnea. Pulmonary function testing demonstrates obstructive lung disease, and chest CT reveals panacinar emphysema predominantly affecting the lower lobes of the lungs. Liver biopsy demonstrates periodic acid-Schiff (PAS)-positive, diastase-resistant intracellular globules within hepatocytes. What enzyme activity is unopposed in the pulmonary parenchyma of this patient?",
"html": true,
"chtml": true,
"c": [
"Acid maltase",
"Neutrophil elastase",
"Matrix metalloproteinase-9",
"Lysyl oxidase"
],
"a": 1,
"eh": "<p>α₁-Antitrypsin deficiency results in misfolded protein accumulation in hepatocyte ER (PAS+ globules) and lack of circulating α₁-antitrypsin, leaving neutrophil elastase unopposed to breakdown pulmonary elastin.</p><p class=\"nbhint\"><b>Hint:</b> Identify the protease produced by neutrophils that degrades lung elastin when its primary endogenous inhibitor is absent.</p>"
},
{
"t": "MSK Biochemistry · NBME Quiz 1",
"s": "A 2-year-old child presents with coarse facial features, corneal clouding, hepatosplenomegaly, and severe joint stiffness. Skeletal radiographs show dysostosis multiplex. Urinary glycosaminoglycan analysis reveals elevated dermatan sulfate and heparan sulfate. Which enzyme deficiency and inheritance pattern correspond to this presentation?",
"html": true,
"chtml": true,
"c": [
"α-L-iduronidase deficiency; Autosomal Recessive",
"Iduronate sulfatase deficiency; X-linked Recessive",
"Lysosomal acid phosphatase deficiency; Autosomal Dominant",
"Galactocerebrosidase deficiency; X-linked Dominant"
],
"a": 0,
"eh": "<p>Hurler syndrome is an autosomal recessive mucopolysaccharidosis caused by α-L-iduronidase deficiency, resulting in dermatan/heparan sulfate buildup, coarse facies, skeletal dysplasia, and corneal clouding.</p><p class=\"nbhint\"><b>Hint:</b> Recall the mnemonic 'Hunters see clearly and aim for the X' to distinguish Hunter syndrome from this child's condition.</p>"
},
{
"t": "MSK Biochemistry · NBME Quiz 1",
"s": "A 3-year-old boy is brought for evaluation due to behavioral changes, including severe hyperactivity and aggression. Physical examination reveals coarse facial features and hepatosplenomegaly, but his cornea remains completely clear on slit-lamp examination. Genetic analysis identifies a mutation on the X chromosome. Which enzyme is deficient in this child?",
"html": true,
"chtml": true,
"c": [
"Iduronate sulfatase",
"α-L-iduronidase",
"Arylsulfatase A",
"Sphingomyelinase"
],
"a": 0,
"eh": "<p>Hunter syndrome is an X-linked recessive GAG degradation disorder caused by iduronate sulfatase deficiency; affected children have clear corneas and may exhibit aggressive behavior.</p><p class=\"nbhint\"><b>Hint:</b> The absence of corneal clouding in an X-linked mucopolysaccharidosis points directly to this specific sulfatase enzyme.</p>"
},
{
"t": "MSK Biochemistry · NBME Quiz 1",
"s": "A structural biologist isolates a massive proteoglycan aggregate from human knee joint cartilage. The structure consists of a central, exceptionally long non-sulfated glycosaminoglycan (GAG) molecule to which numerous core proteins with chondroitin sulfate and keratan sulfate chains are attached via link proteins. What is this non-sulfated central backbone molecule?",
"html": true,
"chtml": true,
"c": [
"Heparin",
"Heparan sulfate",
"Hyaluronic acid",
"Dermatan sulfate"
],
"a": 2,
"eh": "<p>Hyaluronic acid (hyaluronan) is unique among GAGs: it is non-sulfated, does not bind covalently to protein to form proteoglycans on its own, and acts as the central backbone holding aggrecan complexes together in cartilage.</p><p class=\"nbhint\"><b>Hint:</b> Identify the only glycosaminoglycan that lacks sulfate groups and is not synthesized covalently attached to a protein core in the Golgi.</p>"
},
{
"t": "MSK Biochemistry · NBME Quiz 1",
"s": "A 14-year-old boy presents with painless microscopic hematuria. Family history reveals that his maternal uncle developed end-stage renal disease in his 20s and had progressive bilateral sensorineural hearing impairment. Ocular exam demonstrates anterior lenticonus. Which structural protein defect underlies this patient's disorder?",
"html": true,
"chtml": true,
"c": [
"Type IV collagen",
"Fibrillin-1",
"Type II collagen",
"Type I collagen"
],
"a": 0,
"eh": "<p>Alport syndrome ('can't see, can't pee, can't hear') is caused by mutations affecting Type IV collagen, an essential structural component of basement membranes in the glomerulus, inner ear, and eye.</p><p class=\"nbhint\"><b>Hint:</b> Recall which collagen type forms the meshwork of basement membranes throughout the body, including the glomerular basement membrane.</p>"
},
{
"t": "MSK Biochemistry · NBME Quiz 1",
"s": "In hepatic parenchymal cells during prolonged fasting, binding of glucagon to its cell surface receptor triggers a phosphorylation cascade that regulates glycogen breakdown and synthesis. Which pattern of enzyme phosphorylation and activity occurs under these conditions?",
"html": true,
"chtml": true,
"c": [
"Glycogen phosphorylase is phosphorylated (ON); Glycogen synthase is phosphorylated (OFF).",
"Glycogen phosphorylase is phosphorylated (OFF); Glycogen synthase is dephosphorylated (ON).",
"Glycogen phosphorylase is dephosphorylated (ON); Glycogen synthase is dephosphorylated (OFF).",
"Glycogen phosphorylase is dephosphorylated (OFF); Glycogen synthase is phosphorylated (ON)."
],
"a": 0,
"eh": "<p>Glucagon acts via cAMP → PKA to phosphorylate both enzymes: phosphorylation turns glycogen phosphorylase ON (glycogenolysis) and turns glycogen synthase OFF.</p><p class=\"nbhint\"><b>Hint:</b> Remember the general metabolic rule for glycogen metabolism: 'Phosphorylation = breakdown mode (glycogenolysis); Dephosphorylation = storage mode.'</p>"
},
{
"t": "MSK Biochemistry · NBME Quiz 1",
"s": "To accurately measure true baseline blood glucose levels in blood collection tubes, a specific inhibitor is added to prevent ex vivo glucose consumption by red blood cells. Which glycolytic enzyme is directly targeted by this chemical inhibitor?",
"html": true,
"chtml": true,
"c": [
"Enolase",
"Phosphofructokinase-1",
"Pyruvate kinase",
"Hexokinase"
],
"a": 0,
"eh": "<p>Sodium fluoride is routinely added to grey-top blood collection tubes to inhibit enolase, stopping glycolysis in red blood cells so glucose concentrations remain constant.</p><p class=\"nbhint\"><b>Hint:</b> Think about the enzyme that converts 2-phosphoglycerate into phosphoenolpyruvate (PEP) and is inhibited by fluoride.</p>"
}
]
},
{
"course": "msk",
"subject": "Anatomy",
"name": "MSK Anatomy · NBME Quiz 1",
"prefix": "nma1",
"note": "NotebookLM quiz built from the MSK Anatomy study guide",
"qs": [
{
"t": "MSK Anatomy · NBME Quiz 1",
"s": "A 42-year-old woman undergoes a radical mastectomy with axillary lymph node dissection for invasive ductal carcinoma. Several days postoperatively, she notices that her right shoulder droops slightly and she has difficulty pushing herself up from a sitting position and pushing heavy objects against a wall. Physical examination reveals medial winging of the scapula when she pushes her hands against a wall. Which of the following nerve roots give rise to the structure damaged in this procedure?",
"html": true,
"chtml": true,
"c": [
"C5–C7",
"C8–T1",
"C6–C8",
"C5–C6"
],
"a": 0,
"eh": "<p>Medial scapular winging during wall push tests indicates injury to the long thoracic nerve, which innervates the serratus anterior muscle and originates directly from the C5, C6, and C7 spinal roots.</p><p class=\"nbhint\"><b>Hint:</b> Identify the nerve responsible for protracting the scapula and recall its spinal root origin.</p>"
},
{
"t": "MSK Anatomy · NBME Quiz 1",
"s": "A newborn delivered after a difficult breech presentation displays an upper extremity deformity characterized by an adducted, medially rotated arm, extended elbow, and pronated forearm ('waiter's tip' posture). Which of the following functional deficits will also be present on the affected side?",
"html": true,
"chtml": true,
"c": [
"Inability to initiate shoulder abduction from 0 to 15 degrees",
"Loss of cutaneous sensation over the palmar aspect of the 5th digit",
"Total claw hand deformity involving all intrinsic hand muscles",
"Inability to extend the wrist leading to wrist drop"
],
"a": 0,
"eh": "<p>Erb palsy damages the C5–C6 upper trunk, impairing muscles like the supraspinatus (initiates abduction 0–15°) and deltoid, alongside the infraspinatus and biceps.</p><p class=\"nbhint\"><b>Hint:</b> Consider which muscle initiates shoulder abduction and shares C5-C6 innervation.</p>"
},
{
"t": "MSK Anatomy · NBME Quiz 1",
"s": "A 58-year-old male smoker presents with severe shoulder pain radiating down his right arm, along with a drooping upper eyelid, constricted pupil, and lack of sweating on the right side of his face. Radiographs confirm a apical lung tumor (Pancoast tumor) compressing the lower trunk of the brachial plexus. Which of the following motor deficits is most expected on physical exam?",
"html": true,
"chtml": true,
"c": [
"Winged scapula due to serratus anterior weakness",
"Inability to abduct the arm past 90 degrees with shoulder drooping",
"Loss of forearm supination and elbow flexion with lateral forearm numbness",
"Atrophy and weakness of intrinsic hand muscles resulting in a claw hand"
],
"a": 3,
"eh": "<p>Pancoast tumor compression of the C8–T1 lower trunk causes Klumpke palsy, characterized by weakness/atrophy of all intrinsic hand muscles (claw hand) and ipsilateral Horner syndrome.</p><p class=\"nbhint\"><b>Hint:</b> Match the compression of lower trunk roots (C8-T1) to its classic distal hand manifestation.</p>"
},
{
"t": "MSK Anatomy · NBME Quiz 1",
"s": "A 34-year-old baseball pitcher presents with deep shoulder pain. On examination, pressing on the anterior shoulder during abducted lateral rotation reproduces his pain, and he exhibits weakness during the 'empty-can' test. MRI demonstrates tendinopathy and partial tearing of the tendon passing through the supraspinous fossa under the acromion. Which nerve provides motor supply to this injured muscle?",
"html": true,
"chtml": true,
"c": [
"Suprascapular nerve",
"Subscapular nerve",
"Axillary nerve",
"Thoracodorsal nerve"
],
"a": 0,
"eh": "<p>The supraspinatus muscle, located in the supraspinous fossa and tested via the 'empty-can' maneuver, is innervated by the suprascapular nerve.</p><p class=\"nbhint\"><b>Hint:</b> Identify the nerve that innervates the most commonly torn rotator cuff muscle.</p>"
},
{
"t": "MSK Anatomy · NBME Quiz 1",
"s": "A 22-year-old man sustains an anterior glenohumeral shoulder dislocation playing football. After successful closed reduction, physical examination reveals flattening of the normal rounded contour of the lateral shoulder. Which sensory area should be specifically evaluated to assess for nerve injury associated with this presentation?",
"html": true,
"chtml": true,
"c": [
"Regimental badge area over the lateral deltoid",
"Palmar surface of the medial 1½ digits",
"Lateral aspect of the forearm down to the thumb base",
"First dorsal interosseous web space on the hand"
],
"a": 0,
"eh": "<p>Anterior shoulder dislocation frequently damages the axillary nerve, causing deltoid muscle atrophy (flat shoulder) and loss of cutaneous sensation over the lower deltoid ('regimental badge' area).</p><p class=\"nbhint\"><b>Hint:</b> Recall the peripheral nerve closely lying against the surgical neck of the humerus that is vulnerable in shoulder dislocations.</p>"
},
{
"t": "MSK Anatomy · NBME Quiz 1",
"s": "A 28-year-old man is brought to the emergency department after a motor vehicle collision resulting in a midshaft fracture of his right humerus. Physical exam reveals wrist drop and inability to extend the fingers at the metacarpophalangeal joints. Triceps extension strength is remarkably preserved. Which vascular structure runs alongside the damaged nerve within the midshaft humerus groove?",
"html": true,
"chtml": true,
"c": [
"Brachial artery",
"Profunda brachii artery",
"Circumflex scapular artery",
"Posterior circumflex humeral artery"
],
"a": 1,
"eh": "<p>Midshaft humerus fractures injure the radial nerve as it travels in the radial groove along with the profunda brachii artery; triceps extension is preserved because branches to the long and lateral heads arise proximal to the groove.</p><p class=\"nbhint\"><b>Hint:</b> Identify the deep artery of the arm that accompanies the radial nerve.</p>"
},
{
"t": "MSK Anatomy · NBME Quiz 1",
"s": "A 7-year-old boy falls onto his outstretched hand while playing at a playground and sustains a displaced supracondylar fracture of the distal humerus. On physical exam, he has severe elbow pain and swelling. Pulse at the radial wrist is weak. Which nerve is most susceptible to direct anteromedial displacement injury in this fracture scenario?",
"html": true,
"chtml": true,
"c": [
"Musculocutaneous nerve",
"Axillary nerve",
"Ulnar nerve",
"Median nerve"
],
"a": 3,
"eh": "<p>Supracondylar humerus fractures commonly injure the anteriorly placed median nerve and brachial artery, which can lead to ischemic Volkmann contracture if untreated.</p><p class=\"nbhint\"><b>Hint:</b> Consider the major nerve that passes through the cubital fossa alongside the brachial artery.</p>"
},
{
"t": "MSK Anatomy · NBME Quiz 1",
"s": "A 25-year-old snowboarder falls onto an outstretched hand (FOOSH). Examination shows marked point tenderness in the anatomical snuffbox. Initial radiographs show no obvious fracture line. If left untreated, what anatomical complication is this patient at highest risk for due to the unique blood supply of the involved bone?",
"html": true,
"chtml": true,
"c": [
"Compression of the ulnar nerve in Guyon canal",
"Avascular necrosis of the proximal pole",
"Subluxation of the radial head out of the annular ligament",
"Volkmann ischemic contracture of the deep flexors"
],
"a": 1,
"eh": "<p>Scaphoid fractures are the most common carpal fracture following a FOOSH, presenting with anatomical snuffbox tenderness; because its blood supply enters distally and flows retrogradely, fractures risk nonunion and avascular necrosis of the proximal pole.</p><p class=\"nbhint\"><b>Hint:</b> Recall which carpal bone forms the floor of the anatomical snuffbox and receives retrograde blood supply.</p>"
},
{
"t": "MSK Anatomy · NBME Quiz 1",
"s": "A 30-year-old driver is involved in a high-speed collision where his hand impacts the dashboard. Wrist radiographs demonstrate anterior displacement of the most commonly dislocated carpal bone. Which clinical sign or syndrome is most likely to acutely develop as a direct consequence of this specific dislocation?",
"html": true,
"chtml": true,
"c": [
"Acute carpal tunnel syndrome with median nerve paresthesias",
"Radial deviation of the wrist during wrist extension",
"Loss of cutaneous sensation over the hypothenar eminence",
"De Quervain tenosynovitis"
],
"a": 0,
"eh": "<p>The lunate is the most commonly dislocated carpal bone (displacing anteriorly into the carpal tunnel), causing acute compression of the median nerve.</p><p class=\"nbhint\"><b>Hint:</b> Identify the carpal bone that lies in the proximal row adjacent to the median nerve pathway.</p>"
},
{
"t": "MSK Anatomy · NBME Quiz 1",
"s": "A carpenter suffers a superficial knife wound directly over the base of his thenar eminence. On examination, he is unable to oppose his thumb to the tip of his other fingers ('ape hand' position). Sensations over his entire palm and all digits are fully intact. Which specific nerve branch was injured?",
"html": true,
"chtml": true,
"c": [
"Palmar cutaneous branch of the median nerve",
"Deep branch of the ulnar nerve",
"Anterior interosseous nerve",
"Recurrent branch of the median nerve"
],
"a": 3,
"eh": "<p>The recurrent branch of the median nerve lies superficially over the thenar muscles (innervating APB, FPB, opponens pollicis) and carries motor-only fibers; palmar sensation is spared because the palmar cutaneous branch passes superficial to the retinaculum.</p><p class=\"nbhint\"><b>Hint:</b> Focus on the superficial nerve branch that specifically innervates the thenar intrinsic muscles without carrying sensory fibers for the fingers.</p>"
},
{
"t": "MSK Anatomy · NBME Quiz 1",
"s": "An avid long-distance cyclist presents with numbness and tingling in his left ring and little fingers, alongside weakness in spreading his fingers apart against resistance. On physical exam, there is noticeable atrophy of the hypothenar eminence. Compression of the involved nerve is occurring at which anatomical structure?",
"html": true,
"chtml": true,
"c": [
"Carpal tunnel beneath the flexor retinaculum",
"Radial groove of the humerus",
"Guyon canal between the pisiform and hook of hamate",
"Anatomic snuffbox beneath the extensor retinaculum"
],
"a": 2,
"eh": "<p>Compression of the ulnar nerve in Guyon canal (formed by the pisiform and hook of hamate) causes ulnar sensory loss in the medial 1½ digits and motor weakness of intrinsic hand muscles (interossei, hypothenar).</p><p class=\"nbhint\"><b>Hint:</b> Identify the canal bounded by two specific carpal bones through which the ulnar nerve and artery travel.</p>"
},
{
"t": "MSK Anatomy · NBME Quiz 1",
"s": "A 19-year-old athlete presents with forearm pain after heavy weightlifting. On neurological examination, he is asked to make an 'OK' sign with his thumb and index finger. Instead of bringing the tips of his thumb and index finger together cleanly, the distal phalanges remain flat and press pad-to-pad. Cutaneous sensation across his hand and forearm is entirely normal. Which nerve is injured?",
"html": true,
"chtml": true,
"c": [
"Posterior interosseous nerve",
"Recurrent branch of the median nerve",
"Anterior interosseous nerve",
"Ulnar nerve at the elbow"
],
"a": 2,
"eh": "<p>The anterior interosseous nerve (AIN), a motor-only branch of the median nerve, innervates FDP (index/middle) and FPL; loss prevents distal interphalangeal flexion needed to form a clean 'OK' tip-to-tip sign, with no sensory loss.</p><p class=\"nbhint\"><b>Hint:</b> Consider the motor-only branch of the median nerve supplying the flexor pollicis longus and flexor digitorum profundus.</p>"
},
{
"t": "MSK Anatomy · NBME Quiz 1",
"s": "A patient undergoes an intramuscular injection in the gluteal region. Two days later, he presents with an abnormal gait. When standing on his right leg alone, his left side of the pelvis tilts noticeably downward. Which nerve was most likely injured during the injection?",
"html": true,
"chtml": true,
"c": [
"Right superior gluteal nerve",
"Right inferior gluteal nerve",
"Right sciatic nerve",
"Left superior gluteal nerve"
],
"a": 0,
"eh": "<p>Injections in the non-superolateral gluteal quadrants risk damaging the superior gluteal nerve, paralyzing the ipsilateral gluteus medius and minimus, causing a positive Trendelenburg sign (pelvic drop on the unsupported opposite side).</p><p class=\"nbhint\"><b>Hint:</b> Identify the nerve responsible for maintaining a level pelvis during single-leg stance on the stance side.</p>"
},
{
"t": "MSK Anatomy · NBME Quiz 1",
"s": "A 67-year-old man complains of difficulty climbing stairs and getting up from his deep armchair. Physical exam reveals weakness in hip extension, but hip abduction and knee extension are preserved. MRI shows nerve entrapment as it exits the greater sciatic foramen inferior to the piriformis muscle. Which muscle is primarily affected?",
"html": true,
"chtml": true,
"c": [
"Gluteus maximus",
"Rectus femoris",
"Iliopsoas",
"Gluteus medius"
],
"a": 0,
"eh": "<p>The inferior gluteal nerve exits below the piriformis and innervates the gluteus maximus; injury leads to difficulty extending the hip (climbing stairs, rising from seated).</p><p class=\"nbhint\"><b>Hint:</b> Recall which gluteal muscle is the primary power extensor of the hip supplied by the inferior gluteal nerve.</p>"
},
{
"t": "MSK Anatomy · NBME Quiz 1",
"s": "An 82-year-old woman falls in her home and sustains a intracapsular femoral neck fracture. Physical examination reveals her right lower extremity is shortened and laterally rotated. Which artery provides the predominant vascular supply to the femoral head in adults that is compromised in this condition?",
"html": true,
"chtml": true,
"c": [
"Lateral circumflex femoral artery",
"Medial circumflex femoral artery",
"Artery of the ligamentum teres (obturator origin)",
"Inferior gluteal artery"
],
"a": 1,
"eh": "<p>The blood supply to the femoral head in adults relies mainly on retinacular branches of the medial circumflex femoral artery; intracapsular neck fractures disrupt these branches, placing the patient at high risk for avascular necrosis.</p><p class=\"nbhint\"><b>Hint:</b> Focus on the circumflex artery branch that gives off retinacular vessels encircling the femoral neck.</p>"
},
{
"t": "MSK Anatomy · NBME Quiz 1",
"s": "A 23-year-old unrestrained driver suffers a high-energy anterior knee impact against the dashboard in a motor vehicle collision. In the emergency department, his right hip is held in a position of flexion, adduction, and internal (medial) rotation. Which nerve structure running posterior to the hip joint is at highest risk of compression or injury in this injury pattern?",
"html": true,
"chtml": true,
"c": [
"Femoral nerve",
"Obturator nerve",
"Superior gluteal nerve",
"Sciatic nerve"
],
"a": 3,
"eh": "<p>Posterior hip dislocations (classic 'dashboard injury') present with a flexed, adducted, and medially rotated limb, and carry a significant risk of damaging the posteriorly located sciatic nerve.</p><p class=\"nbhint\"><b>Hint:</b> Identify the massive lower limb nerve exiting the greater sciatic foramen directly posterior to the acetabulum.</p>"
},
{
"t": "MSK Anatomy · NBME Quiz 1",
"s": "A 48-year-old man presents with low back pain radiating down the posterior thigh to the dorsum of his foot and great toe. Neurological examination reveals weak ankle dorsiflexion and weak big toe extension (extensor hallucis longus). Sensory loss is localized to the foot dorsum. The patellar and Achilles deep tendon reflexes are intact. Posterolateral disc herniation at which vertebral level accounts for this clinical picture?",
"html": true,
"chtml": true,
"c": [
"L4–L5 level",
"L3–L4 level",
"L5–S1 level",
"L2–L3 level"
],
"a": 0,
"eh": "<p>Posterolateral disc herniation at L4–L5 compresses the traversing L5 nerve root, causing weakness in dorsiflexion and big toe extension (EHL), dorsum foot numbness, and spared reflexes (L4 patellar and S1 Achilles).</p><p class=\"nbhint\"><b>Hint:</b> Determine which exiting or traversing nerve root supplies extensor hallucis longus and dorsum of foot sensation.</p>"
},
{
"t": "MSK Anatomy · NBME Quiz 1",
"s": "During a soccer match, an athlete receives a hard, direct lateral blow to her planted knee. Physical exam demonstrates joint line tenderness, abnormal laxity on valgus stress testing, and a positive anterior drawer test. Which three intra-articular and pericapsular structures are classically damaged together in this 'unhappy triad' injury?",
"html": true,
"chtml": true,
"c": [
"Anterior cruciate ligament, lateral collateral ligament, and medial meniscus",
"Anterior cruciate ligament, medial collateral ligament, and medial meniscus",
"Posterior cruciate ligament, medial collateral ligament, and lateral meniscus",
"Posterior cruciate ligament, lateral collateral ligament, and lateral meniscus"
],
"a": 1,
"eh": "<p>The classic 'unhappy triad' results from a lateral blow to a planted knee, injuring the ACL, MCL, and medial meniscus (owing to MCL's attachment to the medial meniscus).</p><p class=\"nbhint\"><b>Hint:</b> Combine the ligament resisting valgus force, the intra-articular ligament preventing anterior tibial translation, and its attached cartilage.</p>"
},
{
"t": "MSK Anatomy · NBME Quiz 1",
"s": "A 38-year-old hiker suffers a severe closed tibial fracture. Hours later in the hospital, he complains of excruciating leg pain that is completely out of proportion to physical findings. Passive stretching of his toes causes unbearable agony. On exam, the anterior compartment of his lower leg is extremely tense and firm. Which nerve is acutely threatened by ischemia in this compartment?",
"html": true,
"chtml": true,
"c": [
"Superficial fibular nerve",
"Tibial nerve",
"Deep fibular nerve",
"Saphenous nerve"
],
"a": 2,
"eh": "<p>Anterior leg compartment syndrome compresses the deep fibular nerve and anterior tibial artery; ischemia causes foot drop and numbness selectively in the 1st dorsal web space.</p><p class=\"nbhint\"><b>Hint:</b> Identify the nerve located in the anterior leg compartment alongside the tibialis anterior muscle.</p>"
},
{
"t": "MSK Anatomy · NBME Quiz 1",
"s": "A 19-year-old runner strikes the lateral aspect of her knee against a low post. Shortly after, she develops foot drop, causing her to drag her toes while walking and flex her hip higher to clear the ground ('steppage gait'). On examination, she cannot dorsiflex or evert her foot. Sensory loss is present over the lateral lower leg and foot dorsum. Where is the site of nerve entrapment/injury?",
"html": true,
"chtml": true,
"c": [
"Adductor hiatus",
"Medial malleolus",
"Fibular neck",
"Popliteal fossa deep to gastrocnemius"
],
"a": 2,
"eh": "<p>The common fibular nerve curves subcutaneously around the neck of the fibula, where trauma or pressure leads to paralysis of anterior (dorsiflexion) and lateral (eversion) compartment muscles ('PED' = Peroneal Everts and Dorsiflexes; loss causes foot drop).</p><p class=\"nbhint\"><b>Hint:</b> Recall the bony landmark where the common peroneal/fibular nerve winds closely around the lateral leg.</p>"
},
{
"t": "MSK Anatomy · NBME Quiz 1",
"s": "A 52-year-old woman presents with burning sensation and tingling on the bottom of her foot that worsens throughout the day. Physical exam reveals paresthesias restricted to the plantar surface of the heel and sole, and weakness of toe flexors. Tapping behind her medial malleolus reproduces the symptoms (Tinel sign). Which nerve is compressed within this tarsal tunnel?",
"html": true,
"chtml": true,
"c": [
"Deep fibular nerve",
"Sural nerve",
"Tibial nerve",
"Common fibular nerve"
],
"a": 2,
"eh": "<p>The tarsal tunnel behind the medial malleolus contains the tibial nerve (along with Tom, Dick, And Very Nervous Harry); compression leads to loss of plantar sensation and intrinsic foot motor deficits ('TIP').</p><p class=\"nbhint\"><b>Hint:</b> Identify the nerve passing posteroinferior to the medial malleolus alongside flexor tendons.</p>"
},
{
"t": "MSK Anatomy · NBME Quiz 1",
"s": "A 21-year-old basketball player lands awkwardly on an opponent's foot, suffering an acute severe inversion sprain of his ankle joint. Which ligament is the most vulnerable and classically tears first in this high-frequency inversion mechanism?",
"html": true,
"chtml": true,
"c": [
"Posterior talofibular ligament",
"Anterior talofibular ligament",
"Spring ligament",
"Deltoid ligament"
],
"a": 1,
"eh": "<p>Ankle inversion sprains are most common, and the anterior talofibular ligament (ATFL) is the weakest lateral ligament and tears first, followed by the calcaneofibular ligament.</p><p class=\"nbhint\"><b>Hint:</b> Remember the acronym 'Always Tears First' for lateral ankle sprains.</p>"
},
{
"t": "MSK Anatomy · NBME Quiz 1",
"s": "A 45-year-old obese man complains of burning pain and numbness over the anterolateral aspect of his right thigh. He states the symptoms began after wearing a heavy tool belt tightly at work. Motor strength, deep tendon reflexes, and knee joint examination are entirely normal. Which nerve is compressed beneath the inguinal ligament near the anterior superior iliac spine (ASIS)?",
"html": true,
"chtml": true,
"c": [
"Ilioinguinal nerve",
"Femoral nerve",
"Obturator nerve",
"Lateral femoral cutaneous nerve"
],
"a": 3,
"eh": "<p>Compression of the lateral femoral cutaneous nerve (L2–L3) near the ASIS by tight clothing/belts, obesity, or pregnancy causes meralgia paresthetica (anterolateral thigh burning/numbness without motor deficits).</p><p class=\"nbhint\"><b>Hint:</b> Identify the purely sensory nerve originating from L2–L3 that passes beneath the inguinal ligament at the ASIS.</p>"
},
{
"t": "MSK Anatomy · NBME Quiz 1",
"s": "A 60-year-old man with a history of varicose veins undergoes coronary artery bypass grafting (CABG) requiring harvest of the great saphenous vein. Postoperatively, he exhibits localized numbness along the medial side of his leg and foot. Which nerve was inadvertently damaged during vein mobilization in the lower leg?",
"html": true,
"chtml": true,
"c": [
"Superficial fibular nerve",
"Tibial nerve",
"Sural nerve",
"Saphenous nerve"
],
"a": 3,
"eh": "<p>The saphenous nerve (cutaneous branch of femoral nerve) accompanies the great saphenous vein along the medial leg; harvesting the vein risks saphenous nerve damage, causing numbness along the medial leg and foot.</p><p class=\"nbhint\"><b>Hint:</b> Recall the cutaneous branch of the femoral nerve that runs alongside the long saphenous vein.</p>"
},
{
"t": "MSK Anatomy · NBME Quiz 1",
"s": "A 28-year-old woman presents with a painful, swollen lesion on the lateral aspect of her right foot resulting from an infected cut. Physical examination shows tender, enlarged lymph nodes in the popliteal fossa. Lymphatic drainage from this specific area of the foot travels via vessels following which vein?",
"html": true,
"chtml": true,
"c": [
"Small saphenous vein",
"Obturator vein",
"Femoral vein",
"Great saphenous vein"
],
"a": 0,
"eh": "<p>Lymphatics from the lateral foot and posterolateral leg follow the small saphenous vein to drain into popliteal lymph nodes; the rest of the superficial lower limb drains directly to superficial inguinal nodes.</p><p class=\"nbhint\"><b>Hint:</b> Match the superficial vein passing posterior to the lateral malleolus with its corresponding lymph node basin.</p>"
},
{
"t": "MSK Anatomy · NBME Quiz 1",
"s": "A 55-year-old man undergoes resection of a deep lipoma located in the triangular interval of the upper arm. Postoperatively, the patient is unable to extend his wrist or metacarpophalangeal joints. Which pair of structures normally traverses this anatomical space?",
"html": true,
"chtml": true,
"c": [
"Radial nerve and profunda brachii artery",
"Median nerve and brachial artery",
"Circumflex scapular artery",
"Axillary nerve and posterior circumflex humeral artery"
],
"a": 0,
"eh": "<p>The triangular interval (bounded by teres major, long head of triceps, and humerus) contains the radial nerve and profunda brachii artery.</p><p class=\"nbhint\"><b>Hint:</b> Distinguish between the quadrangular space, triangular space, and triangular interval contents.</p>"
},
{
"t": "MSK Anatomy · NBME Quiz 1",
"s": "A mother pulling her 3-year-old daughter by the hand to hurry across a street hears a sudden pop, after which the child holds her arm pronated and slightly flexed at her side, refusing to use it. Radiographs are normal. What structural slippage defines this condition ('nursemaid's elbow')?",
"html": true,
"chtml": true,
"c": [
"Posterior displacement of the olecranon from the humerus",
"Anterior dislocation of the distal ulna at the radioulnar joint",
"Avulsion of the ulnar collateral ligament from the medial epicondyle",
"Subluxation of the radial head out of the annular ligament"
],
"a": 3,
"eh": "<p>Nursemaid's elbow (radial head subluxation) occurs when axial traction on a pronated arm causes the head of the radius to slip partially out of the annular ligament.</p><p class=\"nbhint\"><b>Hint:</b> Identify the ligament encircling the head of the radius that slips in young children when pulled.</p>"
},
{
"t": "MSK Anatomy · NBME Quiz 1",
"s": "A runner presents with anterior knee pain. During physical therapy evaluation, the therapist analyzes knee movement during gait initiation. To unlock the fully extended 'locked' knee joint so flexion can occur, which muscle must contract to laterally rotate the femur on the fixed tibia?",
"html": true,
"chtml": true,
"c": [
"Popliteus",
"Biceps femoris",
"Sartorius",
"Vastus medialis oblique"
],
"a": 0,
"eh": "<p>The popliteus muscle unlocks the knee joint by laterally rotating the femur on the fixed tibia (or medially rotating the tibia when non-weight-bearing).</p><p class=\"nbhint\"><b>Hint:</b> Identify the deep posterolateral knee muscle forming the floor of the popliteal fossa.</p>"
},
{
"t": "MSK Anatomy · NBME Quiz 1",
"s": "A 24-year-old male suffers a stab wound in the axilla. Neurological examination demonstrates loss of function of all nerves arising from the posterior cord of the brachial plexus. Which set of functional impairments matches this cord injury?",
"html": true,
"chtml": true,
"c": [
"Loss of forearm supination, biceps tendon reflex, and loss of flexor digitorum profundus function",
"Inability to extend the wrist (wrist drop), weakness of shoulder abduction, and weak arm extension/medial rotation",
"Total claw hand with complete intrinsic muscle wasting and ipsilateral ptosis",
"Winged scapula and loss of shoulder shrug above 90 degrees"
],
"a": 1,
"eh": "<p>The posterior cord gives off the STAR nerves (Subscapulars, Thoracodorsal, Axillary, Radial); branches innervate latissimus dorsi, subscapularis, teres major, deltoid, and extensor muscles of arm/forearm.</p><p class=\"nbhint\"><b>Hint:</b> Use the mnemonic 'STAR' to recall all five branches of the posterior cord.</p>"
},
{
"t": "MSK Anatomy · NBME Quiz 1",
"s": "A patient with suspected acute appendicitis requires pelvic and perineal examination. Which of the following structures drains its superficial lymph into the superficial inguinal lymph nodes rather than deep internal iliac or para-aortic nodes?",
"html": true,
"chtml": true,
"c": [
"Testes",
"Ovaries",
"Anal canal above the pectinate line",
"Anal canal below the pectinate line"
],
"a": 3,
"eh": "<p>The skin below the umbilicus, perineum, lower vagina, and anal canal below the pectinate line drain to superficial inguinal nodes; the testes drain to para-aortic nodes.</p><p class=\"nbhint\"><b>Hint:</b> Identify the distal perineal landmark below which lymphatic drainage flows to the groin.</p>"
}
]
},
{
"course": "msk",
"subject": "Embryology",
"name": "MSK Embryology · NBME Quiz 1",
"prefix": "nme1",
"note": "NotebookLM quiz built from the MSK Embryology study guide",
"qs": [
{
"t": "MSK Embryology · NBME Quiz 1",
"s": "A cell lineage tracing study during early limb morphogenesis identifies a population of cells migrating from paraxial mesoderm into the upper limb bud. If this cell population is selectively ablated, which component of the mature limb will fail to develop?",
"html": true,
"chtml": true,
"c": [
"Limb tendons and ligaments",
"Long bones and cartilage models",
"Skeletal muscle of the limb",
"Dermis of the limb body wall"
],
"a": 2,
"eh": "<p>Limb flexor and extensor muscles are formed by myotome cells that migrate into the limb bud from paraxial mesoderm somites.</p><p class=\"nbhint\"><b>Hint:</b> Consider which tissue layer contributes contractile tissue versus structural connective tissue in the limbs.</p>"
},
{
"t": "MSK Embryology · NBME Quiz 1",
"s": "A 6-year-old child presents with hypoplastic clavicles allowing the shoulders to touch in the anterior midline, delayed closure of the anterior fontanelle, and multiple supernumerary teeth. Which gene mutation and bone formation pathway are responsible for this condition?",
"html": true,
"chtml": true,
"c": [
"FGFR3 activating mutation; impaired endochondral ossification",
"SOX9 mutation; impaired intramembranous ossification",
"RUNX2 mutation; impaired intramembranous ossification",
"RUNX2 mutation; impaired endochondral ossification"
],
"a": 2,
"eh": "<p>Cleidocranial dysplasia results from an autosomal dominant RUNX2 mutation affecting mesenchyme that forms flat bones directly without a cartilage intermediate.</p><p class=\"nbhint\"><b>Hint:</b> Focus on the transcription factor governing direct mesenchyme-to-bone differentiation.</p>"
},
{
"t": "MSK Embryology · NBME Quiz 1",
"s": "A child with short-limbed dwarfism, a prominent forehead with frontal bossing, and normal trunk length undergoes genetic testing that reveals an activating mutation in FGFR3. Which histopathologic zone of the epiphyseal growth plate is directly suppressed in this patient?",
"html": true,
"chtml": true,
"c": [
"Hypertrophic zone",
"Reserve / resting zone",
"Calcified cartilage zone",
"Proliferative zone"
],
"a": 3,
"eh": "<p>Gain-of-function FGFR3 signaling pathologically inhibits chondrocyte proliferation in the stacked-coin zone, limiting endochondral long bone elongation.</p><p class=\"nbhint\"><b>Hint:</b> Identify the region of the growth plate where stacked chondrocytes actively multiply.</p>"
},
{
"t": "MSK Embryology · NBME Quiz 1",
"s": "During spinal column embryogenesis, sclerotomes undergo resegmentation to allow proper biomechanical function. Which adult structure represents a remnant of the embryonic structure that induces this sclerotome differentiation?",
"html": true,
"chtml": true,
"c": [
"Nucleus pulposus derived from the notochord",
"Annulus fibrosus derived from the notochord",
"Spinal cord dura mater derived from the neural crest",
"Vertebral body derived from the persistent notochord"
],
"a": 0,
"eh": "<p>The midline notochord induces sclerotome formation and neural tube folding, eventually persisting as the central gelatinous nucleus pulposus.</p><p class=\"nbhint\"><b>Hint:</b> Recall which embryonic axial structure produces the signal for sclerotome induction and persists inside intervertebral discs.</p>"
},
{
"t": "MSK Embryology · NBME Quiz 1",
"s": "A second-trimester maternal serum screening reveals elevated alpha-fetoprotein (MSAFP). High-resolution ultrasound shows a midline dorsal defect at L4–S1 containing herniated meninges and neural tissue. Which embryological defect occurred?",
"html": true,
"chtml": true,
"c": [
"Failure of lateral plate mesoderm to fold ventrally around the spinal canal",
"Failure of vertebral arch fusion with herniation of spinal cord and meninges (myelomeningocele)",
"Failure of vertebral arch fusion without neural tissue herniation (spina bifida occulta)",
"Herniation of meninges alone through a bony arch defect (meningocele)"
],
"a": 1,
"eh": "<p>Elevated AFP paired with herniation of both meninges and spinal cord indicates a severe neural tube defect resulting from failure of sclerotome-derived vertebral arches to fuse posteriorly over the open cord.</p><p class=\"nbhint\"><b>Hint:</b> Differentiate between neural tube defects based on sac contents and AFP elevation.</p>"
},
{
"t": "MSK Embryology · NBME Quiz 1",
"s": "An infant presents with a low posterior hairline, a noticeably short neck, and severely restricted cervical spine range of motion. Radiographs show congenital fusion of the C2 and C3 vertebral bodies. What developmental failure explains this presentation?",
"html": true,
"chtml": true,
"c": [
"Premature closure of the skull base chondrocranium sutures",
"Complete developmental failure of one half of a vertebral body",
"Failure of posterior neural arch closure in the cervical region",
"Failure of normal cervical sclerotome resegmentation and differentiation"
],
"a": 3,
"eh": "<p>Klippel-Feil syndrome results from incomplete split and fusion steps during cervical sclerotome resegmentation, producing fused vertebrae.</p><p class=\"nbhint\"><b>Hint:</b> Think about the process where somites split into cranial and caudal halves to establish separate vertebral segments.</p>"
},
{
"t": "MSK Embryology · NBME Quiz 1",
"s": "A male infant is brought to the clinic due to an abnormally long and narrow skull shape (scaphocephaly/dolichocephaly). Physical exam reveals a prominent ridge along the top of the cranium. Which cranial suture fused prematurely?",
"html": true,
"chtml": true,
"c": [
"Sagittal suture",
"Bilateral coronal sutures",
"Unilateral lambdoid suture",
"Metopic suture"
],
"a": 0,
"eh": "<p>Premature fusion of the sagittal suture prevents lateral expansion, forcing compensate skull growth longitudinally along the fused suture line.</p><p class=\"nbhint\"><b>Hint:</b> Consider which suture runs anterior-to-posterior along the sagittal midline.</p>"
},
{
"t": "MSK Embryology · NBME Quiz 1",
"s": "In an experiment investigating pattern formation, tissue from the apical ectodermal ridge (AER) of an embryonic upper limb bud is micro-surgically removed during week 5. Which developmental outcome will be observed in the resulting limb?",
"html": true,
"chtml": true,
"c": [
"Dorsal features like nails form on both the palmar and dorsal surfaces",
"Distal outgrowth ceases, producing a truncated distal limb",
"Mirror-image duplication of digits occurs across the anterior-posterior axis",
"Interdigital membranes persist, leading to severe syndactyly"
],
"a": 1,
"eh": "<p>The AER secretes FGFs (such as FGF8) to maintain underlying mesenchyme proliferation, required for proximal-to-distal limb axis extension.</p><p class=\"nbhint\"><b>Hint:</b> Focus on the primary axis of growth controlled by FGF signaling at the distal rim.</p>"
},
{
"t": "MSK Embryology · NBME Quiz 1",
"s": "A transgenic mouse model exhibits ectopic expression of Sonic Hedgehog (SHH) at the anterior margin of the developing limb bud. Which morphological phenotype will this animal display in its feet?",
"html": true,
"chtml": true,
"c": [
"Ventralization of dorsal skin structures such as nails",
"Polydactyly with mirror-image digit duplication",
"Failure of interdigital tissue cleavage resulting in webbed toes",
"Complete absence of digits and distal structures (amelia)"
],
"a": 1,
"eh": "<p>The Zone of Polarizing Activity (ZPA) produces SHH posteriorly; ectopic anterior SHH creates a second morphogen gradient, producing duplicate posterior-like digits.</p><p class=\"nbhint\"><b>Hint:</b> Recall the morphogen responsible for anterior-posterior identity (thumb-to-little finger).</p>"
},
{
"t": "MSK Embryology · NBME Quiz 1",
"s": "During week 7 of human embryonic development, both upper and lower limbs undergo a rotation to establish adult anatomical positioning. Which combination of limb rotations occurs?",
"html": true,
"chtml": true,
"c": [
"Both upper and lower limbs rotate 90° laterally",
"Both upper and lower limbs rotate 90° medially",
"Upper limb rotates 90° laterally; lower limb rotates 90° medially",
"Upper limb rotates 90° medially; lower limb rotates 90° laterally"
],
"a": 2,
"eh": "<p>Upper extremities rotate laterally to position flexors anteriorly and thumb laterally, while lower extremities rotate medially to position extensors anteriorly and big toe medially.</p><p class=\"nbhint\"><b>Hint:</b> Think about the final position of the elbow pointing backward versus the knee pointing forward.</p>"
},
{
"t": "MSK Embryology · NBME Quiz 1",
"s": "A newborn presents with complete webbed fusion between the second, third, and fourth digits of the left hand. What biochemical process failed to occur during weeks 6 to 8 of development?",
"html": true,
"chtml": true,
"c": [
"FGF8-driven proliferation in the apical ectodermal ridge",
"SHH-dependent cell migration from the zone of polarizing activity",
"BMP-induced apoptosis in interdigital mesenchymal regions",
"WNT7a-mediated induction of dorsal ectodermal structures"
],
"a": 2,
"eh": "<p>Digit separation requires programmed cell death in the tissue between finger rays, stimulated locally by Bone Morphogenetic Proteins (BMPs).</p><p class=\"nbhint\"><b>Hint:</b> Consider the cellular mechanism responsible for removing excess webbed tissue between fingers.</p>"
},
{
"t": "MSK Embryology · NBME Quiz 1",
"s": "A infant boy is diagnosed with Poland sequence. Physical examination reveals unilateral absence of the sternocostal head of the pectoralis major and ipsilateral digital webbing. Which embryonic division gave rise to the missing muscle tissue?",
"html": true,
"chtml": true,
"c": [
"Epimere of the paraxial mesoderm somite",
"Splanchnic layer of lateral plate mesoderm",
"Somatic layer of lateral plate mesoderm",
"Hypomere of the paraxial mesoderm somite"
],
"a": 3,
"eh": "<p>Body wall and limb muscles are derived from the hypaxial (hypomere) division of somite myotomes, innervated by ventral rami.</p><p class=\"nbhint\"><b>Hint:</b> Distinguish between epaxial (back) and hypaxial (body wall/limb) somite myotome derivatives.</p>"
},
{
"t": "MSK Embryology · NBME Quiz 1",
"s": "Which of the following correctly pairs an adult muscle type with its specific embryonic germ layer or mesodermal sub-division?",
"html": true,
"chtml": true,
"c": [
"Vascular smooth muscle of the aorta – Surface ectoderm",
"Pupillary sphincter muscle – Neuroectoderm",
"Myocardium of the ventricles – Paraxial mesoderm",
"Gastrocnemius muscle – Somatic lateral plate mesoderm"
],
"a": 1,
"eh": "<p>While most smooth muscle arises from splanchnic mesoderm, the ocular iris muscles (sphincter and dilator pupillae) uniquely derive from neuroectoderm.</p><p class=\"nbhint\"><b>Hint:</b> Recall the unique neuroectodermal origin of smooth muscles inside the eye.</p>"
},
{
"t": "MSK Embryology · NBME Quiz 1",
"s": "A patient suffers a traumatic injury to the deep intrinsic back muscles (erector spinae). From which embryonic myotome division are these deep dorsal extensor muscles derived, and which spinal rami supply them?",
"html": true,
"chtml": true,
"c": [
"Epimere; ventral rami",
"Epimere; dorsal rami",
"Hypomere; dorsal rami",
"Hypomere; ventral rami"
],
"a": 1,
"eh": "<p>The dorsal epimere division of somite myotomes forms deep back extensors and retains innervation from dorsal primary rami.</p><p class=\"nbhint\"><b>Hint:</b> Match the epaxial/dorsal region with its designated primary ramus branch.</p>"
},
{
"t": "MSK Embryology · NBME Quiz 1",
"s": "Skin tissue layers are derived from multiple embryonic sources depending on anatomical location. What are the embryonic origins of the epidermis, the dermis of the upper limb, and cutaneous melanocytes?",
"html": true,
"chtml": true,
"c": [
"Epidermis: surface ectoderm; Limb dermis: lateral plate mesoderm; Melanocytes: paraxial mesoderm",
"Epidermis: surface ectoderm; Limb dermis: lateral plate mesoderm; Melanocytes: neural crest",
"Epidermis: surface ectoderm; Limb dermis: paraxial dermatome; Melanocytes: surface ectoderm",
"Epidermis: neural crest; Limb dermis: lateral plate mesoderm; Melanocytes: surface ectoderm"
],
"a": 1,
"eh": "<p>Epidermis originates from surface ectoderm, limb connective tissue/dermis from somatic lateral plate mesoderm, and pigment cells migrate from neural crest.</p><p class=\"nbhint\"><b>Hint:</b> Trace the distinct origins of skin layers: outer epithelium, distal limb dermal core, and pigment-producing cells.</p>"
},
{
"t": "MSK Embryology · NBME Quiz 1",
"s": "A routine physical examination of an adult reveals an extra nipple (polythelia) located along an imaginary line extending from the anterior axillary fossa to the inguinal fold. What embryological structure failed to fully regress?",
"html": true,
"chtml": true,
"c": [
"Lateral plate mesodermal cleft",
"Apical ectodermal ridge",
"Neural crest migratory pathway",
"Mammary ridge (milk line)"
],
"a": 3,
"eh": "<p>Polythelia results from persistence of extra segments of the ectodermal mammary ridge extending along the body wall.</p><p class=\"nbhint\"><b>Hint:</b> Identify the linear ectodermal thickening along which accessory milk glands can develop.</p>"
},
{
"t": "MSK Embryology · NBME Quiz 1",
"s": "A histological cross-section of a developing human tooth shows ameloblasts secreting enamel and underlying odontoblasts secreting dentin. What are the respective embryonic sources of ameloblasts and odontoblasts?",
"html": true,
"chtml": true,
"c": [
"Ameloblasts from neural crest; Odontoblasts from surface ectoderm",
"Ameloblasts from surface ectoderm; Odontoblasts from neural crest",
"Ameloblasts from surface ectoderm; Odontoblasts from splanchnic mesoderm",
"Ameloblasts from paraxial mesoderm; Odontoblasts from surface ectoderm"
],
"a": 1,
"eh": "<p>Enamel-producing ameloblasts originate from oral surface ectoderm, whereas dentin/pulp-producing odontoblasts arise from neural crest mesenchyme.</p><p class=\"nbhint\"><b>Hint:</b> Recall which cell population forms ectomesenchyme of the facial structures and pulp.</p>"
},
{
"t": "MSK Embryology · NBME Quiz 1",
"s": "A pediatric orthopedic surgeon reviews skull and bone formation pathways. Which group of bones form exclusively via intramembranous ossification without a pre-existing hyaline cartilage model?",
"html": true,
"chtml": true,
"c": [
"Vertebral bodies, sacrum, and ribs",
"Basioccipital bone, sphenoid, and ethmoid",
"Parietal bone, facial bones, and clavicle",
"Distal femur, humerus, and radius"
],
"a": 2,
"eh": "<p>Flat bones of the cranial vault (parietal, frontal), facial viscerocranium, and clavicle form directly from mesenchymal condensations.</p><p class=\"nbhint\"><b>Hint:</b> Identify the set containing flat cranial vault bones and the first bone in the human body to ossify.</p>"
},
{
"t": "MSK Embryology · NBME Quiz 1",
"s": "A 2-year-old child with minimal sun exposure and poor diet presents with bowed legs, a 'rachitic rosary' along the ribcage, and delayed walking. Radiographs demonstrate unmineralized matrix accumulation and widened growth plates. What is the cellular mechanism behind this condition?",
"html": true,
"chtml": true,
"c": [
"Defective type I collagen synthesis causing fragile bones and blue sclerae",
"Failure of osteoclast carbonic anhydrase activity leading to dense bone",
"Activating FGFR3 signaling causing premature chondrocyte arrest",
"Defective mineralization of osteoid at the hypertrophic zone due to vitamin D deficiency"
],
"a": 3,
"eh": "<p>Vitamin D deficiency impairs calcium/phosphate deposition in matrix synthesized at the hypertrophic zone, causing plate widening and weak bones.</p><p class=\"nbhint\"><b>Hint:</b> Focus on how lack of vitamin D affects cartilage matrix calcification in the lower zones of the epiphyseal plate.</p>"
},
{
"t": "MSK Embryology · NBME Quiz 1",
"s": "A 22-year-old male presents with tall stature, eunuchoid body proportions, and persistent linear bone growth. Diagnostic workup identifies a loss-of-function mutation in the gene encoding aromatase. Why are his epiphyseal growth plates still open?",
"html": true,
"chtml": true,
"c": [
"Lack of estrogen prevents appositional osteoblast remodeling at the periosteum",
"Estrogen is required for epiphyseal growth plate closure in both males and females",
"Aromatase directly degrades growth hormone in the proliferative zone",
"Testosterone alone causes growth plate arrest only when GH levels drop"
],
"a": 1,
"eh": "<p>Testosterone must be converted to estrogen by aromatase to signal epiphyseal plate fusion; lack of estrogen leaves growth plates open indefinitely.</p><p class=\"nbhint\"><b>Hint:</b> Consider which hormone ultimately mediates growth plate fusion at the end of puberty in all humans.</p>"
},
{
"t": "MSK Embryology · NBME Quiz 1",
"s": "A newborn is evaluated for congenital scoliosis. Spinal radiographs reveal a wedge-shaped vertebral anomaly where one lateral half of the vertebral body failed to form. What developmental failure occurred during resegmentation?",
"html": true,
"chtml": true,
"c": [
"Incomplete fusion of adjacent cervical sclerotomes",
"Failure of formation of half a sclerotome (hemivertebra)",
"Failure of the neural arch sclerotomes to fuse in the midline",
"Incomplete breakdown of the persistent intra-vertebral notochord"
],
"a": 1,
"eh": "<p>Complete absence of one lateral side of a sclerotome leads to a wedge-shaped hemivertebra, causing lateral spinal curvature (scoliosis).</p><p class=\"nbhint\"><b>Hint:</b> Think about the asymmetric growth resulting from a single missing lateral half of a vertebra.</p>"
},
{
"t": "MSK Embryology · NBME Quiz 1",
"s": "A 48-year-old female presents with progressive coarse facial features, enlargement of her lower jaw (prognathism), and increasing shoe size. Laboratory testing shows elevated serum IGF-1 levels secondary to a pituitary growth hormone-secreting adenoma. Why has bone enlargement occurred primarily in her hands, feet, and face rather than increasing her overall height?",
"html": true,
"chtml": true,
"c": [
"Reactivated FGFR3 signaling blocks linear chondrocyte stacking in adults",
"High IGF-1 levels induce chondrocyte apoptosis in the resting zone of long bones",
"Excess GH selectively stimulates intramembranous ossification while suppressing endochondral bone",
"Epiphyseal plates are closed, limiting further bone growth to appositional growth from the periosteum"
],
"a": 3,
"eh": "<p>In adults with closed growth plates, excess GH/IGF-1 cannot increase bone length and instead stimulates appositional periosteal thickening (acromegaly).</p><p class=\"nbhint\"><b>Hint:</b> Differentiate between linear endochondral plate growth and width-wise periosteal expansion.</p>"
},
{
"t": "MSK Embryology · NBME Quiz 1",
"s": "A child born to a mother who ingested thalidomide between gestational days 24 and 36 presents with severe phocomelia, where the hands and feet are attached close to the trunk. What embryonic event was directly disrupted during this critical window?",
"html": true,
"chtml": true,
"c": [
"Limb bud initiation and early proximal-distal outgrowth",
"Medial and lateral limb axis rotation",
"Myotome migration into dorsal and ventral masses",
"Interdigital soft tissue apoptosis"
],
"a": 0,
"eh": "<p>Limb buds emerge late in week 4 (days 24-28); thalidomide disrupts AER signaling during this vulnerable window, causing severe reduction defects (phocomelia/amelia).</p><p class=\"nbhint\"><b>Hint:</b> Consider the key developmental window (weeks 4 to 8) when early limb buds first pop out and extend.</p>"
},
{
"t": "MSK Embryology · NBME Quiz 1",
"s": "A newborn presents with severe dry, scaly skin, sparse hair, total absence of sweat glands (anhidrosis), and delayed eruption of conical teeth. What is the embryonic origin of the structures affected in this patient?",
"html": true,
"chtml": true,
"c": [
"Neural crest mesenchyme",
"Somatic lateral plate mesoderm",
"Paraxial mesoderm",
"Surface ectoderm"
],
"a": 3,
"eh": "<p>Ectodermal dysplasia affects derivatives of surface ectoderm, including epidermis, sweat/sebaceous glands, hair follicles, and tooth enamel.</p><p class=\"nbhint\"><b>Hint:</b> Identify the primary germ layer that forms skin appendages, hair, nails, and enamel.</p>"
},
{
"t": "MSK Embryology · NBME Quiz 1",
"s": "During a routine 2-month infant developmental screening, the physician palpates the child's cranial fontanelles. Which finding regarding fontanelle closure timeline is expected in a healthy 2-month-old infant?",
"html": true,
"chtml": true,
"c": [
"Anterior fontanelle is fully closed; posterior fontanelle remains open until 2 years",
"Posterior fontanelle is closing (~2–3 months); anterior fontanelle remains open (~18–24 months)",
"Both anterior and posterior fontanelles close simultaneously at birth",
"Both anterior and posterior fontanelles remain wide open until age 5"
],
"a": 1,
"eh": "<p>The smaller triangular posterior fontanelle closes early (2-3 months), whereas the larger diamond anterior fontanelle stays open until 18-24 months for brain growth.</p><p class=\"nbhint\"><b>Hint:</b> Recall which fontanelle is larger and diamond-shaped versus smaller and triangular.</p>"
},
{
"t": "MSK Embryology · NBME Quiz 1",
"s": "An infant presents with recurrent fractures following minimal trauma, dense radiopaque 'marble-like' bones on X-ray, and anemia due to bone marrow space obliteration. A defect in osteoclasts is confirmed. What is the primary diagnosis?",
"html": true,
"chtml": true,
"c": [
"Marfan syndrome",
"Osteopetrosis",
"Achondroplasia",
"Osteogenesis imperfecta"
],
"a": 1,
"eh": "<p>Osteopetrosis stems from osteoclast dysfunction (e.g., carbonic anhydrase II defect), preventing bone resorption and resulting in dense, brittle bones.</p><p class=\"nbhint\"><b>Hint:</b> Connect osteoclast failure with the inability to resorb bone matrix, leading to solid 'stone' bones.</p>"
}
]
},
{
"course": "crs",
"subject": "Biochemistry",
"name": "CRS Biochemistry · NBME",
"prefix": "ncb1",
"note": "NBME-style questions for every CRS Biochemistry lecture · grows each lecture",
"qs": [
{
"t": "Lecture 1 · Fatty Acid Oxidation",
"s": "A 3-year-old has a seizure after 18 hours of vomiting and poor intake. Glucose is 30 mg/dL with no urinary ketones. Echocardiography shows a dilated left ventricle. Plasma total carnitine is very low and urinary free carnitine is high. The defective protein normally does which of the following?",
"c": [
"Takes carnitine up into cells",
"Moves acyl-carnitine across the inner membrane",
"Transfers acyl groups onto carnitine",
"Oxidizes medium-chain acyl CoA",
"Imports VLCFA into peroxisomes"
],
"a": 0,
"e": "Primary carnitine deficiency: OCTN2 (SLC22A5), the organic cation transporter that takes up carnitine (including reabsorption in the kidney), is defective, so carnitine is wasted in urine and tissue levels fall.",
"w": [
"",
"That is CACT.",
"That is CPT I.",
"That is MCAD.",
"That is ALDP."
]
},
{
"t": "Lecture 1 · Fatty Acid Oxidation",
"s": "A 22-year-old soldier develops muscle pain, weakness and dark urine after a long march without food. Serum CK is very high. He had a similar episode last year and was well in between. Which diet should he follow?",
"c": [
"High carbohydrate, low fat with MCFA",
"High fat, low carbohydrate",
"High protein with long-chain fats",
"Low carbohydrate with long fasts",
"Low carbohydrate with added carnitine"
],
"a": 0,
"e": "CPT II deficiency: avoid fasting, high-carbohydrate diet, low-fat diet of MCFA (which bypass the carnitine system).",
"w": [
"",
"Fat cannot be used and worsens attacks.",
"Long-chain fats need CPT II.",
"Fasting triggers attacks.",
"Carbohydrate is the key fuel."
]
},
{
"t": "Lecture 1 · Fatty Acid Oxidation",
"s": "A drug inhibits hepatic acetyl CoA carboxylase, the enzyme that forms malonyl CoA. What happens to fatty acid oxidation?",
"c": [
"Rises, as CPT I is released from inhibition",
"Falls, as CPT I becomes more strongly inhibited",
"Rises, as thiolase is directly activated",
"Falls, as acetyl CoA builds up and blocks thiolase",
"Unchanged, as CPT I is not regulated by malonyl CoA"
],
"a": 0,
"e": "Less malonyl CoA means less inhibition of CPT I, so more fatty acyl CoA enters mitochondria for β-oxidation.",
"w": [
"",
"Malonyl CoA would fall, not rise.",
"Not the mechanism.",
"Not the mechanism.",
"CPT I is regulated by malonyl CoA."
]
},
{
"t": "Lecture 1 · Fatty Acid Oxidation",
"s": "A child develops vomiting and severe hypoglycemia after eating unripe ackee. The toxin blocks the same enzyme that is deficient in which inherited disorder?",
"c": [
"CPT II deficiency",
"MCAD deficiency",
"X-linked adrenoleukodystrophy",
"Adult Refsum disease",
"Zellweger syndrome"
],
"a": 1,
"e": "Hypoglycin inactivates medium- and short-chain acyl CoA dehydrogenase, mimicking MCAD deficiency, with hypoglycemia and dicarboxylic aciduria.",
"w": [
"Different enzyme.",
"",
"Different defect.",
"Different defect.",
"Different defect."
]
},
{
"t": "Lecture 1 · Fatty Acid Oxidation",
"s": "A 70-year-old strict vegan has paresthesias and a macrocytic anemia. Which urinary compound is most likely increased?",
"c": [
"Phytanic acid",
"Dicarboxylic acids",
"Orotic acid",
"Homogentisic acid",
"Methylmalonic acid"
],
"a": 4,
"e": "B12 is the coenzyme for methylmalonyl CoA mutase; B12 deficiency causes accumulation of methylmalonyl CoA/acid.",
"w": [
"Refsum disease.",
"β-oxidation defects.",
"Urea cycle or pyrimidine defects.",
"Alkaptonuria.",
""
]
},
{
"t": "Lecture 1 · Fatty Acid Oxidation",
"s": "An infant has methylmalonic aciduria from a mutase defect. Restricting which amino acids would reduce flux into the blocked step?",
"c": [
"Lysine and methionine",
"Phenylalanine and tyrosine",
"Glycine and serine",
"Leucine and lysine",
"Valine and isoleucine"
],
"a": 4,
"e": "Valine and isoleucine enter at propionyl CoA, upstream of methylmalonyl CoA mutase.",
"w": [
"These are carnitine precursors.",
"Not shown feeding propionyl CoA.",
"Not shown feeding propionyl CoA.",
"Ketogenic; not shown feeding propionyl CoA.",
""
]
},
{
"t": "Lecture 1 · Fatty Acid Oxidation",
"s": "A boy has high plasma VLCFA but normal plasmalogens and normal numbers of peroxisomes. Which disorder is most likely?",
"c": [
"Classic Zellweger syndrome",
"X-linked adrenoleukodystrophy",
"Infantile Refsum disease",
"Adult-onset Refsum disease",
"Medium-chain acyl CoA dehydrogenase deficiency"
],
"a": 1,
"e": "Only VLCFA transport is lost in X-ALD (ABCD1/ALDP), so other peroxisomal functions such as plasmalogen synthesis are preserved. In Zellweger, peroxisomes don't form, so plasmalogens fall too.",
"w": [
"Plasmalogens would be low.",
"",
"Zellweger spectrum; peroxisomes deficient.",
"Phytanic acid rises, not VLCFA.",
"Medium-chain species rise."
]
},
{
"t": "Lecture 1 · Fatty Acid Oxidation",
"s": "An adult has high plasma phytanic acid with normal VLCFA and normal plasmalogens. Which pathway is defective?",
"c": [
"β-Oxidation in mitochondria",
"ω-Oxidation in the ER",
"α-Oxidation in peroxisomes",
"β-Oxidation in peroxisomes",
"Carnitine shuttle transport"
],
"a": 2,
"e": "Adult Refsum disease is an α-oxidation defect (phytanoyl CoA hydroxylase deficiency).",
"w": [
"Would not raise phytanic acid.",
"Not the defect.",
"",
"VLCFA would rise.",
"Phytanic acid would not rise."
]
},
{
"t": "Lecture 1 · Fatty Acid Oxidation",
"s": "A patient with type 2 diabetes on a sulfonylurea has impaired fasting fatty acid oxidation. Which step is the drug most likely affecting?",
"c": [
"Activation of fatty acids to acyl CoA",
"Hydration of trans-2-enoyl CoA",
"Thiolytic cleavage by thiolase",
"Acyl transfer by CPT I and CPT II",
"Peroxisomal oxidation of VLCFA"
],
"a": 3,
"e": "Both CPT enzymes can be inhibited by sulfonylurea drugs.",
"w": [
"Not listed.",
"Not listed.",
"Not listed.",
"",
"Not listed."
]
},
{
"t": "Lecture 1 · Fatty Acid Oxidation",
"s": "A child on long-term sodium valproate has fasting hypoketotic hypoglycemia and low plasma carnitine. Which is the best classification?",
"c": [
"Primary carnitine deficiency",
"Carnitine palmitoyltransferase II deficiency",
"Secondary carnitine deficiency",
"Medium-chain acyl CoA dehydrogenase deficiency",
"Methylmalonic aciduria"
],
"a": 2,
"e": "Sodium valproate interferes with carnitine metabolism, causing secondary (acquired, non-genetic) carnitine deficiency.",
"w": [
"That is genetic (OCTN2).",
"Not caused by the drug.",
"",
"Not caused by the drug.",
"Not caused by the drug."
]
},
{
"t": "Lecture 1 · Fatty Acid Oxidation",
"s": "Which set of findings (glucose, ketones, ammonia) fits an MCAD crisis?",
"c": [
"Low, high, high",
"Low, low, high",
"High, low, normal",
"Low, high, normal",
"Normal, low, low"
],
"a": 1,
"e": "MCAD pathogenesis: hypoglycemia, hypoketosis and hyperammonemia (↓ acetyl CoA → ↓ NAG → ↓ urea cycle).",
"w": [
"Ketones are low.",
"",
"Glucose is low.",
"Ketones are low and ammonia rises.",
"Glucose is low and ammonia rises."
]
},
{
"t": "Lecture 1 · Fatty Acid Oxidation",
"s": "Compared with the mitochondrial pathway, why does the first step of peroxisomal β-oxidation yield less ATP?",
"c": [
"It uses NAD+ instead of FAD as cofactor",
"It needs carnitine to enter the organelle",
"It skips the hydratase step",
"It produces propionyl CoA",
"Its FADH2 passes electrons to O2"
],
"a": 4,
"e": "Acyl CoA oxidase hands electrons from FADH2 directly to oxygen, forming H2O2 instead of feeding the electron transport chain.",
"w": [
"It uses FAD.",
"Not the reason.",
"The other steps are the same.",
"Not the reason.",
""
]
},
{
"t": "Lecture 1 · Fatty Acid Oxidation",
"s": "In MCAD deficiency, which urinary marker reflects backed-up substrate bound to carnitine?",
"c": [
"Free carnitine without acyl groups",
"Long-chain acylcarnitines",
"Methylmalonic acid",
"Medium-chain acylcarnitines",
"Phytanic and pristanic acids"
],
"a": 3,
"e": "↑ Medium-chain fatty acids → ↑ acylcarnitines in urine.",
"w": [
"Not the marker.",
"Long chains are processed normally.",
"Methylmalonic aciduria.",
"",
"Refsum disease."
]
},
{
"t": "Lecture 1 · Fatty Acid Oxidation",
"s": "A fasting infant has hypoketotic hypoglycemia and hepatomegaly with no muscle or heart involvement. Which enzyme is most likely deficient?",
"c": [
"CPT II",
"OCTN2",
"ALDP",
"CPT I",
"Acyl CoA oxidase"
],
"a": 3,
"e": "CPT I deficiency affects primarily the liver, with reduced fatty acid oxidation and ketogenesis.",
"w": [
"Also involves cardiac and skeletal muscle.",
"Also causes cardiomyopathy and hypotonia.",
"X-ALD.",
"",
"Peroxisomal pathway."
]
},
{
"t": "Lecture 1 · Fatty Acid Oxidation",
"s": "A tracer shows that the last three carbons of a dietary odd-chain fatty acid end up in the citric acid cycle. Through which intermediate do they enter?",
"c": [
"Acetyl CoA",
"Oxaloacetate",
"Succinyl CoA",
"Malonyl CoA",
"Fumarate"
],
"a": 2,
"e": "Propionyl CoA (3C) → D-methylmalonyl CoA → L-methylmalonyl CoA → succinyl CoA, a citric acid cycle intermediate.",
"w": [
"Acetyl CoA comes from the other 2C units.",
"Not the entry point.",
"",
"Not a TCA intermediate.",
"Not the entry point."
]
},
{
"t": "Lecture 2 · Fatty Acid & TAG Synthesis",
"s": "A 30-year-old man eats a large carbohydrate meal. In his hepatocytes, acetyl-CoA formed in the mitochondria is used for fatty acid synthesis in the cytosol. Which enzyme releases acetyl-CoA in the cytosol?",
"c": [
"ATP-citrate lyase",
"Citrate synthase",
"Pyruvate dehydrogenase",
"Carnitine acyltransferase I",
"Acetyl-CoA carboxylase"
],
"a": 0,
"e": "Acetyl-CoA cannot cross the inner mitochondrial membrane. It leaves as citrate, and cytosolic ATP-citrate lyase cleaves citrate to acetyl-CoA and oxaloacetate.",
"w": [
"",
"This forms citrate in the matrix.",
"This forms acetyl-CoA in the matrix.",
"This moves fatty acyl groups into mitochondria.",
"This uses acetyl-CoA in the cytosol."
]
},
{
"t": "Lecture 2 · Fatty Acid & TAG Synthesis",
"s": "Researchers block cytosolic malic enzyme in cultured hepatocytes. Fatty acid synthesis falls despite normal HMP shunt activity. Which shortage most directly explains this?",
"c": [
"ATP",
"NADPH",
"Acetyl-CoA",
"Biotin",
"Malonyl CoA"
],
"a": 1,
"e": "Malic enzyme supplies 8 of the 14 NADPH per palmitate; the HMP pathway supplies the other 6.",
"w": [
"ATP is not made by malic enzyme.",
"",
"Malic enzyme acts after acetyl-CoA is released.",
"Biotin is a vitamin cofactor.",
"Made by ACC, not malic enzyme."
]
},
{
"t": "Lecture 2 · Fatty Acid & TAG Synthesis",
"s": "A 6-month-old has a rash, alopecia and lactic acidosis. A deficient vitamin is a cofactor for both pyruvate carboxylase and the committed enzyme of fatty acid synthesis. Which vitamin?",
"c": [
"Thiamine",
"Biotin",
"Pantothenate",
"Niacin",
"Riboflavin"
],
"a": 1,
"e": "Biotin is the prosthetic group of carboxylases, including acetyl-CoA carboxylase and pyruvate carboxylase.",
"w": [
"A cofactor for PDH, not carboxylases.",
"",
"A component of CoA and ACP.",
"Forms NAD and NADP.",
"Forms FAD and FMN."
]
},
{
"t": "Lecture 2 · Fatty Acid & TAG Synthesis",
"s": "A 52-year-old woman with type 2 diabetes starts metformin. Her hepatic fatty acid synthesis decreases. Which change in acetyl-CoA carboxylase explains this?",
"c": [
"Dephosphorylation by phosphatase",
"Polymerization by citrate",
"Increased SREBP-1c expression",
"Increased ChREBP expression",
"Phosphorylation by AMPK"
],
"a": 4,
"e": "Metformin activates AMPK, which phosphorylates and inactivates ACC, lowering malonyl CoA and fatty acid synthesis.",
"w": [
"This activates ACC.",
"This activates ACC.",
"This increases ACC.",
"This increases ACC.",
""
]
},
{
"t": "Lecture 2 · Fatty Acid & TAG Synthesis",
"s": "A man runs a marathon. His muscle AMP rises and his glucagon and epinephrine are high. Which state of acetyl-CoA carboxylase is expected?",
"c": [
"Dephosphorylated and active",
"Phosphorylated and inactive",
"Phosphorylated and active",
"Polymerized by citrate",
"Induced by SREBP-1c"
],
"a": 1,
"e": "Low energy (high AMP → AMPK) and stress hormones (glucagon/epinephrine) both phosphorylate and inactivate ACC.",
"w": [
"This is the fed state.",
"",
"Phosphorylation inactivates ACC.",
"Citrate is the fed-state activator.",
"SREBP-1c is the insulin signal."
]
},
{
"t": "Lecture 2 · Fatty Acid & TAG Synthesis",
"s": "A patient on a high-carbohydrate diet develops elevated serum triglycerides. Which mechanism best links the diet to increased TAG synthesis?",
"c": [
"Glucagon activates hormone-sensitive lipase",
"AMPK activation increases ACC",
"Insulin activates ACC and SREBP-1c",
"Fatty acyl CoA activates ACC",
"Low citrate activates fatty acid synthase"
],
"a": 2,
"e": "Excess carbohydrate → insulin (protein phosphatase + SREBP-1c) and ChREBP → ↑ ACC → ↑ fatty acids → ↑ TAG, exported as VLDL.",
"w": [
"This increases lipolysis.",
"AMPK inhibits ACC.",
"",
"Fatty acyl CoA inhibits ACC.",
"Citrate activates ACC when high."
]
},
{
"t": "Lecture 2 · Fatty Acid & TAG Synthesis",
"s": "A mutation removes the thioesterase domain of fatty acid synthase. What is the most likely consequence?",
"c": [
"Palmitate stays bound to ACP",
"Malonyl groups cannot be loaded",
"Acetoacetyl ACP cannot be reduced",
"Malonyl CoA cannot be formed",
"The cycle halts at crotonyl ACP"
],
"a": 0,
"e": "Thioesterase (domain 3) hydrolyzes C16-acyl ACP to release palmitate; it acts as the ruler for chain length.",
"w": [
"",
"That needs malonyl transferase.",
"That needs β-ketoacyl reductase.",
"That needs ACC.",
"That needs enoyl reductase."
]
},
{
"t": "Lecture 2 · Fatty Acid & TAG Synthesis",
"s": "A drug blocks the enoyl reductase of fatty acid synthase. Which intermediate accumulates in the first cycle?",
"c": [
"Acetoacetyl ACP",
"D-3-hydroxybutyryl ACP",
"Butyryl ACP",
"Crotonyl ACP",
"Malonyl ACP"
],
"a": 3,
"e": "Enoyl reductase uses NADPH to reduce crotonyl ACP to butyryl ACP; blocking it builds up crotonyl ACP.",
"w": [
"This needs β-ketoacyl reductase.",
"This needs dehydratase.",
"This is the product of enoyl reductase.",
"",
"This is a substrate."
]
},
{
"t": "Lecture 2 · Fatty Acid & TAG Synthesis",
"s": "Using the slide stoichiometry, how many NADPH are needed to make one palmitate from 8 acetyl-CoA?",
"c": [
"7",
"8",
"16",
"14",
"28"
],
"a": 3,
"e": "Two NADPH per cycle × 7 cycles = 14 NADPH: acetyl-CoA + 7 malonyl CoA + 14 NADPH + 20 H⁺ → palmitate + 7 CO2 + 14 NADP⁺ + 8 CoA + 6 H2O.",
"w": [
"7 is the number of malonyl CoA.",
"8 is the number of acetyl-CoA.",
"16 is the carbon count.",
"",
"Too many; 2 per cycle × 7 cycles = 14."
]
},
{
"t": "Lecture 2 · Fatty Acid & TAG Synthesis",
"s": "A patient on long-term fat-free parenteral nutrition develops scaly dermatitis. Which fatty acid must be supplied in the diet?",
"c": [
"Oleate",
"Palmitate",
"Linoleate",
"Stearate",
"Palmitoleate"
],
"a": 2,
"e": "Human desaturases cannot act beyond C9, so linoleate (18:2 Δ9,12) and linolenate (18:3 Δ9,12,15) are essential.",
"w": [
"Humans can make oleate with a Δ9 desaturase.",
"The main product of fatty acid synthase.",
"",
"Made by elongation of palmitate.",
"Made by Δ9 desaturation."
]
},
{
"t": "Lecture 2 · Fatty Acid & TAG Synthesis",
"s": "Desaturation of stearoyl CoA to oleoyl CoA needs NADH and O2 but produces no ATP. Why?",
"c": [
"NADH is never oxidized in it",
"O2 is not reduced in the reaction",
"The reaction is in the mitochondria",
"ATP is consumed by the desaturase",
"Electrons go to cyt b5, not the ETC"
],
"a": 4,
"e": "The ER desaturase system (NADH-cytochrome b5 reductase, cytochrome b5, desaturase) is uncoupled from oxidative phosphorylation.",
"w": [
"NADH is used by the reductase.",
"O2 is reduced to water.",
"It is in the ER.",
"No ATP is made or used.",
""
]
},
{
"t": "Lecture 2 · Fatty Acid & TAG Synthesis",
"s": "In adipocytes, which compound provides the glycerol backbone for TAG synthesis, given that adipose has little glycerol kinase?",
"c": [
"Free glycerol from the plasma",
"Pyruvate made in glycolysis",
"Acetyl-CoA from PDH",
"Dihydroxyacetone phosphate",
"Phosphatidylcholine"
],
"a": 3,
"e": "Glucose → DHAP → glycerol-3-phosphate dehydrogenase → glycerol-3-phosphate, then acylation to TAG.",
"w": [
"Needs glycerol kinase, mainly in liver.",
"Not used for the backbone.",
"Used for fatty acids, not glycerol.",
"",
"A phospholipid, not a precursor."
]
},
{
"t": "Lecture 2 · Fatty Acid & TAG Synthesis",
"s": "A 40-year-old man fasts for 24 hours. Which enzyme in his adipocytes converts diacylglycerol to monoacylglycerol, and in what state?",
"c": [
"Hormone-sensitive lipase, phosphorylated",
"Hormone-sensitive lipase, dephosphorylated",
"Lipoprotein lipase, phosphorylated",
"Adipose triglyceride lipase, dephosphorylated",
"Pancreatic lipase, phosphorylated"
],
"a": 0,
"e": "Fasting: glucagon and epinephrine phosphorylate and activate hormone-sensitive lipase, which converts DAG to monoacylglycerol.",
"w": [
"",
"Dephosphorylated HSL is inactive.",
"LPL acts on lipoproteins in capillaries.",
"ATGL acts on TAG.",
"Acts in the gut."
]
},
{
"t": "Lecture 2 · Fatty Acid & TAG Synthesis",
"s": "During prolonged fasting, glycerol released from adipose tissue is used mainly by which organ?",
"c": [
"Adipose tissue itself",
"Skeletal muscle",
"Liver",
"Brain",
"Red blood cells"
],
"a": 2,
"e": "Fate of glycerol → enters the liver → phosphorylated (glycerol kinase), and can feed gluconeogenesis.",
"w": [
"Adipose has little glycerol kinase.",
"Muscle uses the fatty acids.",
"",
"The brain does not take up glycerol for this.",
"RBCs use glucose."
]
},
{
"t": "Lecture 2 · Fatty Acid & TAG Synthesis",
"s": "After a meal, a man's insulin rises. What happens to hormone-sensitive lipase in his adipocytes?",
"c": [
"It is phosphorylated and activated",
"It's dephosphorylated and activated",
"It is phosphorylated and inhibited",
"It moves out to the capillary endothelium",
"It is dephosphorylated and inhibited"
],
"a": 4,
"e": "Insulin dephosphorylates and inhibits hormone-sensitive lipase, so adipose stores TAG as depot fat instead of releasing fatty acids.",
"w": [
"That's the fasting response to glucagon and epinephrine.",
"Dephosphorylation turns HSL off.",
"Phosphorylation turns HSL on.",
"That's lipoprotein lipase, not HSL.",
""
]
},
{
"t": "Lecture 3 · Ketone Body Metabolism",
"s": "A 9-month-old girl is brought in after an overnight fast during a febrile illness. She is lethargic, with blood glucose of 38 mg/dL and no ketones in the urine. Urine organic acids show dicarboxylic acids. Which enzyme is most likely deficient?",
"c": [
"Medium-chain acyl-CoA dehydrogenase",
"HMG-CoA reductase",
"Hepatic glucose-6-phosphatase",
"Succinyl-CoA:acetoacetate transferase",
"Mitochondrial pyruvate carboxylase"
],
"a": 0,
"e": "Hypoketotic hypoglycemia after fasting plus dicarboxylic aciduria (ω-oxidation of medium-chain fatty acids) points to MCAD deficiency, the most common fatty acid oxidation disorder. Without β-oxidation the liver cannot make acetyl-CoA for ketones or ATP for gluconeogenesis.",
"w": [
"",
"HMG-CoA reductase is the cholesterol synthesis enzyme.",
"Glucose-6-phosphatase deficiency (von Gierke) gives hypoglycemia with high ketones and lactate.",
"Thiophorase deficiency impairs ketone use, so ketones accumulate.",
"Pyruvate carboxylase deficiency is listed with hyperketosis."
]
},
{
"t": "Lecture 3 · Ketone Body Metabolism",
"s": "In which tissue can acetoacetate NOT be oxidized for energy, despite the tissue having mitochondria?",
"c": [
"Heart",
"Skeletal muscle",
"Kidney cortex",
"Liver",
"Brain"
],
"a": 3,
"e": "The liver lacks succinyl-CoA:acetoacetate CoA transferase (thiophorase), so it cannot activate acetoacetate to acetoacetyl-CoA. It exports ketone bodies to extrahepatic tissues instead.",
"w": [
"The heart readily oxidizes ketone bodies.",
"Muscle uses ketone bodies.",
"The kidney uses ketone bodies.",
"",
"The brain uses ketones in prolonged starvation."
]
},
{
"t": "Lecture 3 · Ketone Body Metabolism",
"s": "A 30-year-old woman has fasted for 3 weeks. Compared with day 1 of the fast, which change in brain fuel use is most likely?",
"c": [
"The brain uses fatty acids for most of its energy",
"Ketones supply about two-thirds of brain energy",
"The brain uses glucose for all of its energy",
"Ketone bodies supply about 10% of brain energy",
"The brain uses amino acids for most of its energy"
],
"a": 1,
"e": "With prolonged starvation the brain adapts to ketone bodies: ~25% by day 3, ~50% by day 7, and ~2/3 by 2–3 weeks. This lowers its glucose need and spares muscle protein.",
"w": [
"The brain cannot use fatty acids as a fuel.",
"",
"By 3 weeks most energy comes from ketones.",
"10% understates the adaptation.",
"Amino acids feed gluconeogenesis; they are not the brain's main fuel."
]
},
{
"t": "Lecture 3 · Ketone Body Metabolism",
"s": "Which enzyme catalyzes the rate-limiting step of hepatic ketone body synthesis?",
"c": [
"Mitochondrial HMG-CoA synthase",
"Cytosolic HMG-CoA reductase",
"HMG-CoA lyase",
"Acetoacetyl-CoA thiolase",
"β-Hydroxybutyrate dehydrogenase"
],
"a": 0,
"e": "Mitochondrial HMG-CoA synthase (acetoacetyl-CoA + acetyl-CoA → HMG-CoA) is the rate-limiting step of ketogenesis. HMG-CoA lyase then releases acetoacetate.",
"w": [
"",
"HMG-CoA reductase is rate-limiting for cholesterol synthesis.",
"Lyase acts after the rate-limiting step.",
"Thiolase starts the pathway but is not rate-limiting.",
"This enzyme interconverts acetoacetate and β-hydroxybutyrate."
]
},
{
"t": "Lecture 3 · Ketone Body Metabolism",
"s": "A 17-year-old boy with type 1 diabetes has glucose of 480 mg/dL, pH 7.12, HCO₃⁻ 9 mEq/L, and a urine dipstick only weakly positive for ketones. Which ketone body is most likely present in the greatest amount in his blood?",
"c": [
"Acetoacetate",
"Acetone",
"Acetoacetyl-CoA",
"Hydroxymethylglutaryl-CoA",
"β-Hydroxybutyrate"
],
"a": 4,
"e": "In DKA the high mitochondrial NADH/NAD⁺ ratio favors reduction of acetoacetate to β-hydroxybutyrate, the predominant ketone body in blood and urine. Nitroprusside dipsticks detect acetoacetate, not β-hydroxybutyrate, so they can underestimate ketosis.",
"w": [
"Acetoacetate is present but is outnumbered by β-hydroxybutyrate when NADH is high.",
"Acetone is a minor, volatile product.",
"Acetoacetyl-CoA is an intracellular intermediate, not a circulating ketone body.",
"HMG-CoA is an intracellular intermediate of ketogenesis.",
""
]
},
{
"t": "Lecture 3 · Ketone Body Metabolism",
"s": "A 45-year-old man with chronic alcohol use is admitted after a binge with poor food intake. Glucose is 45 mg/dL and serum ketones are elevated. Which change most directly contributes to his hypoglycemia?",
"c": [
"Increased insulin secretion by ethanol",
"Increased activity of pyruvate carboxylase",
"↑NADH/NAD⁺ shifting oxaloacetate to malate",
"Decreased hepatic β-oxidation",
"Increased glycogen stores in the liver"
],
"a": 2,
"e": "Ethanol metabolism raises the NADH/NAD⁺ ratio, pushing oxaloacetate to malate (and pyruvate to lactate) and starving gluconeogenesis. With glycogen depleted, he becomes hypoglycemic, while acetyl-CoA is diverted to ketones, so this is hypoglycemia with hyperketosis.",
"w": [
"Ethanol does not raise insulin; low insulin is why ketones rise.",
"The problem is a lack of oxaloacetate, not low carboxylase activity.",
"",
"β-oxidation continues and supplies the acetyl-CoA for ketones.",
"Poor intake depletes, rather than builds, glycogen."
]
},
{
"t": "Lecture 1 · Fatty Acid Oxidation",
"s": "A 3-month-old boy has had seizures since birth, poor feeding and profound hypotonia. He has a high forehead, a wide anterior fontanelle and an enlarged liver. Plasma very-long-chain fatty acids and phytanic acid are both high, and his cultured fibroblasts cannot oxidize very-long-chain fatty acids. A defect in which organelle best explains his condition?",
"c": [
"Lysosome",
"Mitochondrion",
"Smooth endoplasmic reticulum",
"Peroxisome",
"Golgi apparatus"
],
"a": 3,
"e": "• Both VLCFA and phytanic acid are high, so two pathways are down at once: β-oxidation of VLCFA and α-oxidation of branched phytanic acid.\n• Both happen in peroxisomes, so the whole organelle is failing: a peroxisome biogenesis (PEX) disorder.\n• Neonatal seizures, profound hypotonia, craniofacial features and hepatomegaly in early infancy fit Zellweger syndrome.\nCompare: X-ALD raises only VLCFA (ABCD1 transporter); adult Refsum disease raises only phytanic acid (PHYH).",
"w": [
"Lysosomal storage diseases build up undigested macromolecules, not VLCFA and phytanic acid.",
"Mitochondria oxidize short-, medium- and long-chain fatty acids, not VLCFA or branched chains.",
"The smooth ER makes lipids and steroids; it doesn't oxidize VLCFA.",
"",
"The Golgi modifies and sorts proteins."
]
},
{
"t": "Lecture 1 · Fatty Acid Oxidation",
"s": "A 6-day-old girl has become too sleepy to feed and has started vomiting. She is breathing fast. An older brother died in infancy during an episode of low blood sugar. Blood gas shows a metabolic acidosis, and urine methylmalonic acid is very high. Which other set of findings is most likely?",
"c": [
"Normal glucose, no ketones, high ammonia",
"Low glucose, high ketones, high ammonia",
"Low glucose, no ketones, high ammonia",
"High glucose, high ketones, normal ammonia",
"Low glucose, high ketones, normal ammonia"
],
"a": 1,
"e": "• High methylmalonic acid in a newborn → methylmalonic acidemia: a defect in methylmalonyl-CoA mutase (or its B12 cofactor) in the propionate pathway, propionyl-CoA → methylmalonyl-CoA → succinyl-CoA.\n• Organic acids pile up → metabolic acidosis, with fast breathing to compensate; propionic acid rises too.\n• They also impair gluconeogenesis → hypoglycemia with increased ketones, and inhibit the urea cycle → hyperammonemia.\nSo: low glucose, high ketones, high ammonia. Propionic acidemia looks the same but without methylmalonic acid.",
"w": [
"That's a urea cycle defect: no hypoglycemia or ketosis.",
"",
"Hypoketotic hypoglycemia points to a fatty acid oxidation defect.",
"That's diabetic ketoacidosis, not a newborn organic acidemia.",
"Organic acids also block the urea cycle, so ammonia rises."
]
},
{
"t": "Lecture 1 · Fatty Acid Oxidation",
"s": "A 5-year-old girl tires after a few minutes of walking and has had mild motor delay. She has an S3 gallop. Her fasting glucose is 37 mg/dL with no ketones in the urine, and her CK is mildly high. A muscle biopsy shows very low carnitine. Production of which substance is most directly impaired?",
"c": [
"Palmitate",
"Lactate",
"Acetoacetate",
"Glutathione",
"Arachidonic acid"
],
"a": 2,
"e": "• Weakness with exertion, cardiomyopathy (S3) and fasting hypoglycemia without ketones → muscle and liver can't burn fat.\n• Low muscle carnitine → primary carnitine deficiency: long-chain fatty acids can't cross the inner mitochondrial membrane as acylcarnitine.\n• No β-oxidation → no acetyl-CoA → the liver can't make ketone bodies such as acetoacetate, and heart and muscle lose their main fuel.",
"w": [
"Fatty acid synthesis is cytosolic and doesn't need carnitine.",
"Lactate comes from pyruvate and is made normally.",
"",
"Glutathione is made from glutamate, cysteine and glycine.",
"Arachidonic acid comes from the diet and membrane phospholipids."
]
},
{
"t": "Lecture 1 · Fatty Acid Oxidation",
"s": "A 7-year-old boy goes about 24 hours without food on a camping trip. He becomes weak, vomits and grows lethargic. His glucose is 24 mg/dL, acetoacetate is undetectable, and his liver is mildly enlarged with slightly raised transaminases. He has a seizure in the emergency department. Which enzyme is most likely deficient?",
"c": [
"Glucose-6-phosphatase",
"Glycogen phosphorylase",
"Acetyl-CoA carboxylase",
"Acid α-glucosidase",
"Acyl-CoA dehydrogenase"
],
"a": 4,
"e": "• A long fast → hypoglycemia with no ketones → the liver can't oxidize fatty acids. A glycogen disorder would still make ketones.\n• A β-oxidation defect that shows up in childhood after a long fast, with hepatomegaly and seizures, is classically medium-chain acyl-CoA dehydrogenase (MCAD) deficiency, the first β-oxidation step for medium chains.\n• Treatment: avoid fasting and give glucose promptly during illness.",
"w": [
"Glycogen storage disorders still make ketones during a fast.",
"Glycogen phosphorylase defects leave ketogenesis intact.",
"ACC makes fatty acids and is switched off during fasting.",
"Pompe disease is a lysosomal glycogen disease with cardiomyopathy, not fasting hypoglycemia.",
""
]
},
{
"t": "Lecture 2 · Fatty Acid & TAG Synthesis",
"s": "Rats are fed a high-carbohydrate, high-protein diet for several weeks. Their liver cells show active fatty acid synthesis and almost no β-oxidation. A rise in which molecule most directly blocks β-oxidation in these cells?",
"c": [
"Malonyl-CoA",
"Citrate",
"Carnitine",
"NADPH",
"Acetoacetate"
],
"a": 0,
"e": "• Fed state → insulin and high citrate activate acetyl-CoA carboxylase → malonyl-CoA, the committed step of fatty acid synthesis.\n• Malonyl-CoA inhibits carnitine acyltransferase I (CPT I), the gate into the mitochondria.\n• So newly made fatty acids aren't burned right away.",
"w": [
"",
"Citrate activates ACC but doesn't block fatty acid entry itself.",
"Carnitine carries fatty acids in; more would help β-oxidation.",
"NADPH drives synthesis; it doesn't inhibit β-oxidation.",
"Ketones rise in fasting, not on a high-carbohydrate diet."
]
},
{
"t": "Lecture 4 · Complex Lipid Metabolism",
"s": "A 32-week preterm infant develops grunting and intercostal retractions within an hour of birth. Chest x-ray shows a diffuse ground-glass pattern. Deficiency of which molecule, made by type II pneumocytes, best explains these findings?",
"c": [
"Dipalmitoylphosphatidylcholine",
"Phosphatidylinositol bisphosphate",
"Sphingomyelin",
"Cardiolipin",
"Platelet-activating factor"
],
"a": 0,
"e": "• Preterm birth plus ground-glass lungs is neonatal respiratory distress syndrome.\n• Dipalmitoylphosphatidylcholine (DPPC, lecithin) is the main surfactant phospholipid; it lowers alveolar surface tension and prevents collapse.\n• Fetal maturity is judged by an L/S ratio above 2.",
"w": [
"",
"PIP2 is a signaling lipid cleaved by phospholipase C.",
"Sphingomyelin is the reference lipid in the L/S ratio, not the active surfactant.",
"Cardiolipin is in the inner mitochondrial membrane.",
"PAF mediates anaphylaxis."
]
},
{
"t": "Lecture 4 · Complex Lipid Metabolism",
"s": "A 41-year-old woman has fatigue, intermittent dark morning urine and a Budd-Chiari thrombosis. Flow cytometry shows her red cells lack CD55 and CD59. The defect most likely affects the synthesis of which structure?",
"c": [
"Spectrin–ankyrin complex of the RBC skeleton",
"Glycosylphosphatidylinositol membrane anchor",
"Band 3 anion exchanger in the RBC membrane",
"Glutathione reductase–NADPH redox system",
"Heme ring by δ-ALA synthase in erythroblasts"
],
"a": 1,
"e": "• Paroxysmal nocturnal hemoglobinuria: acquired PIGA mutation in hematopoietic stem cells.\n• No GPI anchor → CD55 (decay-accelerating factor) and CD59 are lost from RBCs, WBCs and platelets.\n• Complement lyses the cells → intravascular hemolysis, dark morning urine and venous thrombosis.",
"w": [
"Spectrin and ankyrin defects cause hereditary spherocytosis.",
"",
"Band 3 defects also cause spherocytosis, not complement lysis.",
"Redox defects cause oxidant hemolysis like G6PD deficiency.",
"Heme synthesis defects cause sideroblastic anemia or porphyria."
]
},
{
"t": "Lecture 4 · Complex Lipid Metabolism",
"s": "An investigator adds an α1-adrenergic agonist to vascular smooth muscle cells and measures a rapid fall in one membrane phospholipid while IP3 rises. Which phospholipid falls?",
"c": [
"Phosphatidylcholine",
"Phosphatidylserine",
"Phosphatidylethanolamine",
"Phosphatidylinositol 4,5-bisphosphate",
"Sphingomyelin"
],
"a": 3,
"e": "• α1 receptors couple to Gq → phospholipase C.\n• PLC cleaves PIP2 into IP3, which releases Ca²⁺ from the ER, and DAG, which activates protein kinase C.\n• PI and PIP2 are also the membrane reservoir of arachidonic acid.",
"w": [
"Lecithin is cut by PLA2, not by PLC in this pathway.",
"Phosphatidylserine signals apoptosis when flipped to the outer leaflet.",
"PE is not the PLC substrate that yields IP3.",
"",
"Sphingomyelin is cut by sphingomyelinase to ceramide."
]
},
{
"t": "Lecture 4 · Complex Lipid Metabolism",
"s": "A man bitten by a pit viper develops local tissue destruction and hemolysis. A key venom enzyme cleaves membrane phospholipids at the sn-2 position. Which product of this reaction feeds inflammatory mediator synthesis?",
"c": [
"Inositol trisphosphate",
"Arachidonic acid",
"Phosphocholine",
"Diacylglycerol",
"Ceramide"
],
"a": 1,
"e": "• Snake venom is rich in phospholipase A2, which cleaves the fatty acid at carbon 2.\n• C2 often carries arachidonic acid, the precursor of prostaglandins and leukotrienes.\n• The other product, lysophospholipid such as lysolecithin, is detergent-like and lyses RBCs.",
"w": [
"IP3 comes from PIP2 by phospholipase C.",
"",
"Phosphocholine is released by sphingomyelinase or phospholipase C, not PLA2.",
"DAG comes from phospholipase C.",
"Ceramide comes from sphingomyelinase."
]
},
{
"t": "Lecture 4 · Complex Lipid Metabolism",
"s": "A 5-month-old boy of Ashkenazi descent has an exaggerated startle to noise, hypotonia and loss of head control. Fundoscopy shows bilateral cherry-red maculae. The abdomen is soft with no organomegaly. Which substance accumulates in his neurons?",
"c": [
"Sphingomyelin",
"Glucocerebroside",
"GM2 ganglioside",
"Sulfatide",
"Globotriaosylceramide"
],
"a": 2,
"e": "• Cherry-red spot without hepatosplenomegaly = Tay-Sachs disease.\n• Hexosaminidase A deficiency, from an α-subunit mutation on chromosome 15, causes GM2 ganglioside to accumulate in CNS and retinal neurons.\n• Autosomal recessive, with a carrier rate of 1 in 30 in Ashkenazi Jews.",
"w": [
"Sphingomyelin storage, in Niemann-Pick, comes with hepatosplenomegaly.",
"Glucocerebroside storage, in Gaucher, causes hepatosplenomegaly and bone disease.",
"",
"Sulfatides accumulate in metachromatic leukodystrophy.",
"This accumulates in Fabry disease."
]
},
{
"t": "Lecture 4 · Complex Lipid Metabolism",
"s": "A 30-year-old man has bone pain, a hip fracture and a spleen palpable to the pelvis. Platelets are 60,000/µL. Bone marrow shows large macrophages with fibrillary, crumpled-tissue-paper cytoplasm. Which enzyme would be infused to treat him?",
"c": [
"Sphingomyelinase",
"α-Galactosidase A",
"Hexosaminidase A",
"Glucocerebrosidase",
"Arylsulfatase A"
],
"a": 3,
"e": "• Gaucher disease is the most common lysosomal storage disorder and is autosomal recessive.\n• Deficient glucocerebrosidase (β-glucosidase) lets glucocerebroside build up in macrophages of the spleen, liver and marrow: Gaucher cells, hepatosplenomegaly, cytopenias and bone disease.\n• Treated with recombinant enzyme replacement.",
"w": [
"Sphingomyelinase deficiency is Niemann-Pick, with foam cells.",
"α-Galactosidase A deficiency is Fabry disease.",
"Hexosaminidase A deficiency is Tay-Sachs.",
"",
"Arylsulfatase A deficiency is metachromatic leukodystrophy."
]
},
{
"t": "Lecture 4 · Complex Lipid Metabolism",
"s": "A 19-year-old man has burning pain in his hands and feet during exercise, decreased sweating and clusters of dark-red papules on his lower trunk. Urinalysis shows proteinuria. His mother is healthy, but her brother needed dialysis at 45. What is the inheritance and deficient enzyme?",
"c": [
"Autosomal recessive, β-galactosidase",
"Autosomal recessive, glucocerebrosidase",
"X-linked recessive, iduronate sulfatase",
"Autosomal dominant, α-galactosidase A",
"X-linked recessive, α-galactosidase A"
],
"a": 4,
"e": "• Fabry disease is the only X-linked recessive sphingolipidosis; the affected maternal uncle fits.\n• α-Galactosidase A deficiency causes globotriaosylceramide to accumulate.\n• Features: painful extremities, angiokeratomas, hypohidrosis, renal failure and cardiac hypertrophy.",
"w": [
"β-galactosidase deficiency causes GM1 gangliosidosis or Krabbe disease.",
"Glucocerebrosidase deficiency is Gaucher disease.",
"Iduronate-2-sulfatase deficiency is Hunter syndrome, a mucopolysaccharidosis.",
"Fabry is X-linked, not autosomal dominant.",
""
]
},
{
"t": "Lecture 4 · Complex Lipid Metabolism",
"s": "A 7-month-old girl has extreme irritability, feeding difficulty, stiffness and poor head control. MRI shows diffuse white matter loss, and brain biopsy shows clusters of multinucleated macrophages. Accumulation of which toxic lipid most directly kills her oligodendrocytes?",
"c": [
"Psychosine",
"Sulfatide",
"Ceramide",
"Sphingomyelin",
"GM1 ganglioside"
],
"a": 0,
"e": "• Krabbe disease: galactocerebrosidase deficiency.\n• Galactocerebroside and psychosine accumulate, and psychosine is toxic to oligodendrocytes → CNS demyelination.\n• Multinucleated globoid cells in the CNS are pathognomonic.",
"w": [
"",
"Sulfatide builds up in metachromatic leukodystrophy.",
"Ceramide builds up in Farber disease, with joint deformities and nodules.",
"Sphingomyelin builds up in Niemann-Pick.",
"GM1 builds up in GM1 gangliosidosis."
]
},
{
"t": "Lecture 4 · Complex Lipid Metabolism",
"s": "A 2-year-old has hepatosplenomegaly, failure to thrive and progressive loss of motor skills. Bone marrow shows macrophages with many small uniform clear vacuoles, and electron microscopy shows concentric lamellar bodies. Which reaction is defective?",
"c": [
"Glucocerebroside → glucose + ceramide",
"Sphingomyelin → phosphocholine + ceramide",
"GM2 → GM3 + N-acetylgalactosamine",
"Sulfatide → sulfate + galactocerebroside",
"Ceramide → sphingosine + fatty acid"
],
"a": 1,
"e": "• Foamy macrophages with zebra or lamellar bodies, hepatosplenomegaly and neurodegeneration = Niemann-Pick disease.\n• Sphingomyelinase normally removes phosphocholine from sphingomyelin, leaving ceramide.\n• Type A is infantile with CNS involvement; type B has no CNS involvement.",
"w": [
"Glucocerebrosidase is defective in Gaucher.",
"",
"Hexosaminidase A is defective in Tay-Sachs.",
"Arylsulfatase A is defective in metachromatic leukodystrophy.",
"Ceramidase is defective in Farber disease."
]
},
{
"t": "Lecture 5 · Eicosanoid Metabolism",
"s": "A 9-year-old girl with asthma takes ibuprofen for a sprained ankle and within an hour develops wheezing, nasal congestion and flushing. She has nasal polyps. Which shift in arachidonic acid metabolism best explains her reaction?",
"c": [
"Less substrate for 5-lipoxygenase",
"Inhibition of phospholipase A2",
"Inhibition of the leukotriene receptor",
"More thromboxane synthase activity",
"More substrate for 5-lipoxygenase"
],
"a": 4,
"e": "Step 1: ibuprofen blocks both COX isoforms.\nStep 2: with COX blocked, more arachidonic acid is available to the linear, 5-lipoxygenase pathway.\nStep 3: more LTC₄, LTD₄ and LTE₄ cause bronchoconstriction, giving aspirin- or NSAID-exacerbated respiratory disease.",
"w": [
"Blocking COX shifts more arachidonate toward 5-lipoxygenase.",
"NSAIDs do not inhibit PLA2.",
"That would prevent bronchospasm.",
"With COX blocked, thromboxane falls.",
""
]
},
{
"t": "Lecture 5 · Eicosanoid Metabolism",
"s": "A 72-year-old man takes low-dose aspirin daily. A new platelet count is normal, but platelet function testing shows reduced aggregation. He stopped the aspirin 2 days ago. Which statement best explains why his platelets still aggregate poorly?",
"c": [
"Platelets cannot replace acetylated COX-1",
"Aspirin is still in his plasma at full levels",
"Aspirin permanently damaged his megakaryocytes",
"Aspirin raised endothelial prostacyclin for weeks",
"Aspirin blocks platelet thromboxane receptors"
],
"a": 0,
"e": "Step 1: aspirin acetylates a serine in COX-1, an irreversible block.\nStep 2: platelets have no nucleus, so they cannot make new enzyme, and their TXA₂ stays low for their lifespan of about 8–10 days.\nStep 3: function returns only as new platelets are released from the marrow.",
"w": [
"",
"Aspirin is cleared from plasma within hours.",
"Megakaryocytes are not damaged and keep making new platelets.",
"Aspirin lowers prostacyclin too, but endothelium recovers fast.",
"Aspirin acts on COX, not on the receptor."
]
},
{
"t": "Lecture 5 · Eicosanoid Metabolism",
"s": "A 30-year-old woman is started on high-dose prednisone for a lupus flare. Which pair of eicosanoid changes is expected?",
"c": [
"Only prostaglandins fall",
"Both prostaglandins and leukotrienes fall",
"Only leukotrienes fall",
"Prostaglandins fall and leukotrienes rise",
"Thromboxane rises and prostacyclin falls"
],
"a": 1,
"e": "Step 1: corticosteroids induce lipocortin, which inhibits phospholipase A2.\nStep 2: PLA2 releases arachidonic acid from C-2 of membrane phospholipids, upstream of both pathways.\nStep 3: with less arachidonate, both the COX and lipoxygenase products fall.",
"w": [
"The block is upstream of both pathways.",
"",
"Leukotrienes also need arachidonate.",
"This pattern fits NSAIDs, not steroids.",
"Steroids lower both prostanoids."
]
},
{
"t": "Lecture 5 · Eicosanoid Metabolism",
"s": "A researcher incubates a membrane fraction with arachidonic acid, O₂ and glutathione and finds that PGG₂ is formed but PGH₂ is not. Which activity of prostaglandin H₂ synthase is defective?",
"c": [
"Cyclooxygenase",
"Thromboxane synthase",
"Peroxidase",
"Phospholipase A2",
"5-Lipoxygenase"
],
"a": 2,
"e": "Step 1: PGH₂ synthase has two activities.\nStep 2: the cyclooxygenase activity adds 2 O₂ to arachidonate to make PGG₂, which worked here.\nStep 3: the peroxidase activity then reduces PGG₂ to PGH₂ using 2 GSH, so that is the step that failed.",
"w": [
"Cyclooxygenase activity worked, since PGG₂ formed.",
"This acts on PGH₂, later in the pathway.",
"",
"PLA2 is not needed when arachidonate is added directly.",
"This is the leukotriene branch."
]
},
{
"t": "Lecture 5 · Eicosanoid Metabolism",
"s": "A 58-year-old woman with osteoarthritis and a history of a bleeding ulcer is started on celecoxib. Two years later she has a myocardial infarction. Which imbalance is thought to raise thrombotic risk with selective COX-2 inhibitors?",
"c": [
"Less TXA₂ with PGI₂ spared",
"More leukotrienes in coronary vessels",
"Less PGE₂ in the gastric mucosa",
"Less PGI₂ with platelet TXA₂ spared",
"More phospholipase A2 activity"
],
"a": 3,
"e": "Step 1: platelets use COX-1 to make TXA₂, which promotes aggregation, and celecoxib spares COX-1.\nStep 2: much endothelial PGI₂, which inhibits aggregation, comes from COX-2, which celecoxib blocks.\nStep 3: less prostacyclin with intact thromboxane tips the balance toward thrombosis.",
"w": [
"The opposite imbalance would protect against clots.",
"Coxibs do not raise coronary leukotrienes.",
"Gastric PGE₂ explains ulcers, not MI.",
"",
"Coxibs do not activate PLA2."
]
},
{
"t": "Lecture 5 · Eicosanoid Metabolism",
"s": "A 16-year-old boy with persistent asthma is treated with a drug that blocks leukotriene binding to receptors on airway smooth muscle. Which leukotriene effects will this drug block?",
"c": [
"Formation of 5-HPETE",
"Formation of LTA₄",
"Release of arachidonic acid",
"Formation of thromboxane A₂",
"Actions of LTC₄, LTD₄, LTE₄"
],
"a": 4,
"e": "Step 1: montelukast and zafirlukast are leukotriene receptor antagonists.\nStep 2: they block the receptor for the peptidoleukotrienes LTC₄, LTD₄ and LTE₄, the slow-reacting substance of anaphylaxis.\nStep 3: leukotriene synthesis itself continues, so earlier steps are unaffected.",
"w": [
"Receptor blockers do not stop synthesis.",
"LTA₄ is still made.",
"PLA2 is upstream and unaffected.",
"Thromboxane comes from the COX branch.",
""
]
},
{
"t": "Lecture 5 · Eicosanoid Metabolism",
"s": "A newborn's eicosanoid profile is studied. Which cell type in her blood will make no prostaglandins, thromboxanes or leukotrienes?",
"c": [
"Mature erythrocytes",
"Circulating platelets",
"Segmented neutrophils",
"Circulating monocytes",
"Circulating basophils"
],
"a": 0,
"e": "Step 1: all mammalian cells except erythrocytes synthesize eicosanoids.\nStep 2: platelets make TXA₂ using COX-1, and leukocytes make leukotrienes and, when activated, COX-2 products.",
"w": [
"",
"Platelets make TXA₂.",
"Neutrophils make leukotrienes.",
"Monocytes make prostaglandins through COX-2.",
"Basophils make leukotrienes."
]
},
{
"t": "Lecture 5 · Eicosanoid Metabolism",
"s": "A 40-year-old man eats a diet completely lacking linoleic acid for many months. Which eicosanoid precursor will his cells be least able to make?",
"c": [
"Eicosapentaenoic acid",
"Arachidonic acid",
"α-Linolenic acid",
"Palmitic acid",
"Phosphatidylcholine"
],
"a": 1,
"e": "Step 1: linoleic acid is the immediate dietary precursor of arachidonic acid.\nStep 2: arachidonic acid is the source of the principal eicosanoids in humans.\nStep 3: EPA comes from α-linolenic acid, a separate essential fatty acid, so it is not limited here.",
"w": [
"EPA comes from α-linolenic acid.",
"",
"α-Linolenic acid is a separate essential fatty acid from the diet.",
"Palmitate is made from glucose.",
"Phosphatidylcholine can still be made."
]
},
{
"t": "Lecture 6 · Lipoprotein Metabolism",
"s": "A 9-year-old girl is brought for evaluation of recurrent abdominal pain. Examination shows small yellow papules on her buttocks and an enlarged liver and spleen. A blood sample left in the refrigerator overnight forms a creamy top layer over a clear lower layer. Which additional finding is expected?",
"c": [
"Tendon xanthomas on the Achilles",
"No added risk of atherosclerosis",
"Very high plasma LDL cholesterol",
"Orange-yellow enlarged tonsils",
"Acanthocytes on the blood smear"
],
"a": 1,
"e": "Step 1: a creamy top layer over clear plasma means excess chylomicrons, with normal VLDL.\nStep 2: with eruptive xanthomas, hepatosplenomegaly and pancreatitis-like pain, this is type I, LPL or apo C-II deficiency.\nStep 3: chylomicrons are too large to enter the arterial wall, so atherosclerosis risk is not increased.",
"w": [
"Tendon xanthomas suggest familial hypercholesterolemia.",
"",
"LDL is not raised in type I.",
"Orange tonsils suggest Tangier disease.",
"Acanthocytes suggest abetalipoproteinemia."
],
"fig": [
"figs/crs/lp-type1",
"figs/crs/lp-chylo"
]
},
{
"t": "Lecture 6 · Lipoprotein Metabolism",
"s": "A 42-year-old man has a total cholesterol of 340 mg/dL and a triglyceride level of 390 mg/dL. He has yellow creases in his palms and nodules over his elbows. His apolipoprotein E genotype is E2/E2. Which particle is most elevated in his plasma?",
"c": [
"Chylomicron and VLDL remnants",
"Nascent discoidal HDL",
"Small dense LDL alone",
"Lipoprotein X particles",
"Chylomicrons with intact apo C-II"
],
"a": 0,
"e": "Step 1: palmar and tuberous xanthomas with raised cholesterol and TAG suggest type III, dysbetalipoproteinemia.\nStep 2: apo E2 binds hepatic receptors poorly.\nStep 3: chylomicron and VLDL remnants cannot be cleared, so they accumulate.",
"w": [
"",
"HDL is not the defect.",
"Remnants, not LDL, accumulate.",
"Lipoprotein X is seen in LCAT deficiency.",
"Intact chylomicrons are cleared normally by LPL."
],
"fig": [
"figs/crs/lp-type3"
]
},
{
"t": "Lecture 6 · Lipoprotein Metabolism",
"s": "A 30-year-old woman is started on a statin for familial hypercholesterolemia, and her LDL cholesterol falls by 40%. Through which mechanism does lower hepatocyte cholesterol reduce plasma LDL?",
"c": [
"SREBP inhibition lowers LDL receptors",
"SREBP activation raises LDL receptors",
"ACAT activation stores more esters",
"CETP inhibition keeps esters in HDL",
"LCAT activation esterifies LDL"
],
"a": 1,
"e": "Step 1: statins block HMG-CoA reductase, lowering cholesterol in the hepatocyte.\nStep 2: low cholesterol activates SREBP.\nStep 3: SREBP increases LDL receptor synthesis, so more LDL is cleared from blood.",
"w": [
"Low cholesterol activates SREBP.",
"",
"ACAT is not the statin mechanism.",
"Statins do not inhibit CETP.",
"LCAT acts on HDL."
],
"fig": [
"figs/crs/lp-ldl-uptake"
]
},
{
"t": "Lecture 6 · Lipoprotein Metabolism",
"s": "A 52-year-old man has crushing chest pain and ST elevation in the anterior leads. Angiography shows a thrombus over a ruptured plaque in the left anterior descending artery. Years earlier, which cell type formed the earliest lesion of this plaque?",
"c": [
"Platelets on exposed collagen",
"Smooth muscle cells making collagen",
"Neutrophils releasing proteases",
"Macrophages full of oxidized LDL",
"Fibroblasts depositing calcium"
],
"a": 3,
"e": "Step 1: LDL enters the intima and is oxidized.\nStep 2: monocytes become macrophages and take up oxidized LDL through scavenger receptors, becoming foam cells.\nStep 3: foam cells form the fatty streak, the earliest lesion. Smooth muscle, collagen, calcium and rupture with thrombosis come later.",
"w": [
"Platelets act after rupture.",
"Smooth muscle cells build the later plaque.",
"Neutrophils are not the early cell.",
"",
"Calcification is late."
],
"fig": [
"figs/crs/lp-oxldl",
"figs/crs/lp-athero-1",
"figs/crs/lp-athero-2"
]
},
{
"t": "Lecture 6 · Lipoprotein Metabolism",
"s": "A 14-year-old boy has large orange-yellow tonsils, an enlarged spleen and decreased sensation in his feet. His plasma HDL cholesterol is 3 mg/dL. A defect in which process is most likely?",
"c": [
"Cholesterol efflux to apo A-I",
"Esterification of HDL cholesterol",
"Hydrolysis of chylomicron TAG",
"Uptake of LDL by its receptor",
"Assembly of apo B lipoproteins"
],
"a": 0,
"e": "Step 1: orange tonsils, neuropathy, splenomegaly and near-absent HDL indicate Tangier disease.\nStep 2: ABCA1 normally moves free cholesterol from cells to apo A-I to form HDL.\nStep 3: without it, HDL cannot form and cholesterol builds up in reticuloendothelial and peripheral tissues.",
"w": [
"",
"LCAT deficiency causes corneal and kidney disease.",
"LPL deficiency causes type I.",
"That causes familial hypercholesterolemia.",
"That causes abetalipoproteinemia."
],
"fig": [
"figs/crs/lp-tangier",
"figs/crs/lp-hdl"
]
},
{
"t": "Lecture 6 · Lipoprotein Metabolism",
"s": "A 50-year-old woman has gradually worsening vision. Slit-lamp examination shows diffuse corneal clouding. Her HDL is very low, and the proportion of her plasma cholesterol that is esterified is reduced. Her urinalysis and creatinine are normal. Which diagnosis is most likely?",
"c": [
"Complete LCAT deficiency",
"Tangier disease",
"Abetalipoproteinemia",
"Familial hypercholesterolemia",
"Fish-eye disease"
],
"a": 4,
"e": "Step 1: corneal opacity, low HDL and less esterified cholesterol point to a defect in LCAT.\nStep 2: normal kidney function argues against complete LCAT deficiency.\nStep 3: partial LCAT loss, fish-eye disease, affects mainly the cornea and progresses slowly.",
"w": [
"Complete deficiency causes progressive kidney disease.",
"Tangier gives orange tonsils and neuropathy.",
"Abetalipoproteinemia gives steatorrhea and ataxia.",
"FH gives very high LDL.",
""
],
"fig": [
"figs/crs/lp-fisheye",
"figs/crs/lp-type4-lcat"
]
},
{
"t": "Lecture 6 · Lipoprotein Metabolism",
"s": "A 3-year-old boy has failure to thrive and pale, bulky, foul-smelling stools. A blood smear shows red cells with irregular spiky projections. Plasma triglyceride is 8 mg/dL, and no apo B can be detected. Supplementation with which vitamin is most important to prevent his progressive neurologic decline?",
"c": [
"Vitamin B12",
"Vitamin C",
"Vitamin E",
"Thiamine",
"Folic acid"
],
"a": 2,
"e": "Step 1: steatorrhea, acanthocytes and absent apo B point to abetalipoproteinemia, an MTTP defect.\nStep 2: without chylomicrons, fat-soluble vitamins A, D, E and K are malabsorbed.\nStep 3: vitamin E deficiency causes spinocerebellar ataxia and retinal degeneration, so high-dose vitamin E is key.",
"w": [
"B12 is water soluble and absorbed in the ileum.",
"Vitamin C is water soluble.",
"",
"Thiamine is water soluble.",
"Folate is water soluble."
],
"fig": [
"figs/crs/lp-abeta"
]
},
{
"t": "Lecture 6 · Lipoprotein Metabolism",
"s": "A drug under study inhibits cholesteryl ester transfer protein. Compared with before treatment, which change in plasma lipoproteins is expected?",
"c": [
"HDL cholesteryl ester falls",
"VLDL cholesteryl ester rises",
"HDL cholesteryl ester rises",
"HDL triglyceride rises",
"LDL cholesterol rises"
],
"a": 2,
"e": "Step 1: CETP moves cholesteryl esters from HDL to VLDL and TAG from VLDL to HDL.\nStep 2: blocking CETP stops this exchange.\nStep 3: cholesteryl esters stay in HDL, so HDL cholesterol rises, and less ester reaches VLDL and LDL.",
"w": [
"Opposite.",
"VLDL gets less ester.",
"",
"HDL gets less TAG.",
"Less ester reaches the LDL pathway."
],
"fig": [
"figs/crs/lp-cetp"
]
},
{
"t": "Lecture 7 · Cholesterol Biosynthesis",
"s": "A hepatocyte cell line is grown in lipoprotein-free medium for 24 hours. Compared with cells grown in normal serum, which change is expected?",
"c": [
"Less HMG-CoA reductase mRNA",
"More SREBP held in the ER by Insig",
"Faster ubiquitination of HMG-CoA reductase",
"More phosphorylated HMG-CoA reductase",
"More nuclear SREBP and LDL receptors"
],
"a": 4,
"e": "Step 1: without lipoproteins, the cells get no LDL cholesterol, so their sterol level falls.\nStep 2: low sterol releases SREBP–SCAP from Insig. The complex moves to the Golgi, where SREBP is cleaved.\nStep 3: soluble SREBP enters the nucleus, binds the SRE and switches on the HMG-CoA reductase and LDL receptor genes.",
"w": [
"mRNA rises when sterol is low.",
"Insig retention happens when sterol is high.",
"Low sterol slows the enzyme's breakdown.",
"Phosphorylation is driven by AMPK and glucagon, not by low sterol.",
""
],
"fig": [
"figs/crs/ch-regulation"
]
},
{
"t": "Lecture 7 · Cholesterol Biosynthesis",
"s": "In a liver extract, isotope-labeled acetyl-CoA is added along with NADPH. A drug blocks the conversion of HMG-CoA to mevalonate. Which labeled product still forms in normal amounts?",
"c": [
"Ketone bodies",
"Farnesyl-PP",
"Lanosterol",
"Squalene from IPP",
"Isopentenyl pyrophosphate"
],
"a": 0,
"e": "Step 1: the drug acts like a statin, blocking HMG-CoA reductase in the cytosol and ER.\nStep 2: everything after mevalonate (IPP, geranyl-PP, farnesyl-PP, squalene, lanosterol, cholesterol) falls.\nStep 3: HMG-CoA made in the mitochondria by HMG-CoA synthase goes to HMG-CoA lyase and ketone bodies. That route does not use the reductase.",
"w": [
"",
"Farnesyl-PP is downstream.",
"Lanosterol is downstream.",
"Squalene is downstream of mevalonate.",
"IPP is made from mevalonate."
],
"fig": [
"figs/crs/ch-pathway"
]
},
{
"t": "Lecture 7 · Cholesterol Biosynthesis",
"s": "A 3-year-old has syndactyly of toes 2 and 3, ptosis and low muscle tone. Plasma cholesterol is low and 7-dehydrocholesterol is high. Which enzyme is deficient?",
"c": [
"7-DHC 7-reductase",
"Squalene synthase",
"HMG-CoA reductase",
"Cholesterol 7α-hydroxylase",
"Lanosterol synthase"
],
"a": 0,
"e": "Step 1: low cholesterol with a buildup of its immediate precursor, 7-dehydrocholesterol, means the very last step is blocked.\nStep 2: that step is 7-dehydrocholesterol 7-reductase, the enzyme missing in Smith-Lemli-Opitz syndrome.\nStep 3: cholesterol is needed for development (and for Hedgehog signaling), so the children have malformations such as 2–3 toe syndactyly.",
"w": [
"",
"Squalene synthase is upstream, and 7-DHC would not build up.",
"HMG-CoA reductase deficiency would not raise 7-DHC.",
"7α-hydroxylase makes bile acids from cholesterol.",
"A block there would not raise 7-DHC."
],
"fig": [
"figs/crs/ch-pathway"
]
},
{
"t": "Lecture 7 · Cholesterol Biosynthesis",
"s": "After a carbohydrate-rich meal, insulin rises in a healthy man. What happens to hepatic HMG-CoA reductase?",
"c": [
"Dephosphorylated, active, more made",
"Phosphorylation by AMPK inactivates it",
"Insig binding speeds its degradation",
"Glucagon induces its gene strongly",
"It is unaffected by any hormone"
],
"a": 0,
"e": "Step 1: insulin activates phosphoprotein phosphatase, which removes the phosphate from HMG-CoA reductase. The dephosphorylated enzyme is active.\nStep 2: insulin also increases expression of the reductase gene.\nStep 3: glucagon and AMPK do the opposite (phosphorylation, inactivation, less gene expression).",
"w": [
"",
"AMPK acts when energy is low, not after a meal.",
"Insig-driven breakdown follows high sterol, not insulin.",
"Glucagon lowers expression of the gene.",
"Insulin and glucagon both regulate the enzyme."
],
"fig": [
"figs/crs/ch-regulation"
]
},
{
"t": "Lecture 7 · Cholesterol Biosynthesis",
"s": "A patient on atorvastatin has a fall in plasma LDL. Which other effect of HMG-CoA reductase inhibition explains why some patients develop muscle pain?",
"c": [
"Higher bile acid production by the liver",
"Less ubiquinone from farnesyl-PP",
"Lower 2,3-BPG in red cells",
"More SREBP held in the ER by Insig",
"Higher plasma HDL levels"
],
"a": 1,
"e": "Step 1: statins block the pathway at mevalonate, so every product made after it falls, not only cholesterol.\nStep 2: farnesyl pyrophosphate is the branch point for ubiquinone (coenzyme Q), dolichol, heme a and prenylated proteins.\nStep 3: less ubiquinone for the muscle electron transport chain is one proposed reason for statin myopathy.",
"w": [
"Statins do not mainly raise bile acid production.",
"",
"2,3-BPG is made in red cell glycolysis, not from mevalonate.",
"Statins lower cell sterol, which releases SREBP.",
"A small HDL rise does not cause muscle pain."
],
"fig": [
"figs/crs/ch-pathway"
]
},
{
"t": "Lecture 8 · Hemoglobin & Myoglobin",
"s": "In an experiment, a protein's O₂ binding curve is hyperbolic with a P₅₀ of 1 mm Hg. Which protein is it most likely to be?",
"c": [
"Adult hemoglobin, HbA",
"Fetal hemoglobin, HbF",
"Hemoglobin stripped of 2,3-BPG",
"Myoglobin",
"Sickle hemoglobin"
],
"a": 3,
"e": "Step 1: a hyperbolic curve means no cooperativity, so the protein has a single heme.\nStep 2: myoglobin is a single chain with one heme, binds one O₂, and has a P₅₀ of about 1 mm Hg.\nStep 3: all tetrameric hemoglobins give sigmoid curves (HbA P₅₀ about 26 mm Hg).",
"w": [
"HbA is sigmoid with a P₅₀ of about 26.",
"HbF is sigmoid, shifted left of HbA.",
"Stripped Hb is shifted left but still cooperative.",
"",
"HbS is a tetramer with a sigmoid curve."
],
"fig": [
"figs/crs/hb-mb-hb-curves"
]
},
{
"t": "Lecture 8 · Hemoglobin & Myoglobin",
"s": "A climber spends three weeks at 5,000 m. Which change in his red cells best explains improved O₂ delivery to his tissues?",
"c": [
"Lower 2,3-BPG in red cells",
"Higher 2,3-BPG stabilizing the R form",
"More HbF synthesis in adults",
"Higher 2,3-BPG, favoring T",
"Lower intracellular H⁺"
],
"a": 3,
"e": "Step 1: chronic hypoxia raises red cell 2,3-BPG.\nStep 2: 2,3-BPG binds the central pocket between the β chains of deoxy-Hb and stabilizes the T form.\nStep 3: the curve shifts right (higher P₅₀), so more O₂ is released in the tissues.",
"w": [
"Lower 2,3-BPG would increase affinity and reduce unloading.",
"2,3-BPG stabilizes T, not R.",
"Adults do not switch to HbF at altitude.",
"",
"Lower H⁺ would shift the curve left."
],
"fig": [
"figs/crs/hb-bpg-curve"
]
},
{
"t": "Lecture 8 · Hemoglobin & Myoglobin",
"s": "Which residue on hemoglobin is the main site that binds H⁺ in the Bohr effect, according to the binding-site summary?",
"c": [
"Proximal histidine F8",
"His-146 of β",
"Glu-6 of the β chain",
"Distal histidine E7",
"Cys-93 of the α chain"
],
"a": 1,
"e": "Step 1: in the tissues, CO₂ forms carbonic acid, which releases H⁺.\nStep 2: H⁺ binds His-146 of the β chain and the N-terminal amino groups.\nStep 3: the protonated groups form ionic bonds that stabilize the T form, so O₂ is released.",
"w": [
"The proximal histidine binds the heme iron.",
"",
"β6 is the site mutated in HbS and HbC.",
"The distal histidine stabilizes bound O₂.",
"This is not the Bohr site named on the slide."
],
"fig": [
"figs/crs/hb-bohr"
]
},
{
"t": "Lecture 8 · Hemoglobin & Myoglobin",
"s": "A firefighter is brought in after a house fire. Pulse oximetry reads 98%, but he is confused and has lactic acidosis. Which pair of toxins should be suspected?",
"c": [
"Nitrates and sulfa drugs",
"Carbon monoxide and cyanide",
"Lead and arsenic",
"Methanol and ethylene glycol",
"Benzocaine and dapsone"
],
"a": 1,
"e": "Step 1: house fires release CO (from combustion) and hydrogen cyanide (from burning plastics and acrylic fibers).\nStep 2: CO binds heme Fe²⁺ about 200 to 250 times more tightly than O₂, shifts the curve left, and inhibits complex IV. Pulse oximetry misreads carboxyhemoglobin as oxyhemoglobin.\nStep 3: cyanide inhibits complex IV directly, so the cells cannot use O₂ and make lactate.",
"w": [
"Nitrates and sulfa drugs cause methemoglobinemia.",
"",
"Lead and arsenic are not typical fire toxins.",
"These are ingested toxic alcohols.",
"These drugs cause methemoglobinemia."
],
"fig": [
"figs/crs/hb-co"
]
},
{
"t": "Lecture 8 · Hemoglobin & Myoglobin",
"s": "An infant fed formula made with well water has cyanosis that does not improve with oxygen, and chocolate-brown blood. Which treatment restores the heme iron to its functional state?",
"c": [
"Hyperbaric oxygen",
"Amyl nitrite",
"Sodium thiosulfate",
"Hydroxyurea",
"Methylene blue"
],
"a": 4,
"e": "Step 1: nitrates in well water oxidize heme Fe²⁺ to Fe³⁺, making methemoglobin, which cannot bind O₂.\nStep 2: methylene blue, using NADPH from the G6PD pathway, reduces Fe³⁺ back to Fe²⁺.\nStep 3: G6PD-deficient patients do not respond well because they lack the NADPH.",
"w": [
"Hyperbaric O₂ treats CO poisoning.",
"Amyl nitrite makes methemoglobin.",
"Thiosulfate treats cyanide.",
"Hydroxyurea raises HbF in sickle cell disease.",
""
],
"fig": [
"figs/crs/hb-methb"
]
},
{
"t": "Lecture 8 · Hemoglobin & Myoglobin",
"s": "Hemoglobin electrophoresis of a healthy newborn shows mostly one hemoglobin. What is its chain composition?",
"c": [
"α₂γ₂",
"α₂β₂",
"α₂δ₂",
"ζ₂ε₂",
"β₄"
],
"a": 0,
"e": "Step 1: HbF (α₂γ₂) is made from about 10 to 12 weeks of gestation and is about 60% of hemoglobin late in fetal life.\nStep 2: it is the main hemoglobin at birth. HbA (α₂β₂) gradually replaces it over the first 6 months.\nStep 3: α genes are on chromosome 16, and γ and β genes on chromosome 11.",
"w": [
"",
"HbA becomes dominant after the first months of life.",
"HbA₂ is a minor adult hemoglobin.",
"Gower 1 is an early embryonic hemoglobin.",
"β₄ is HbH, seen in α-thalassemia."
],
"fig": [
"figs/crs/hb-genes-switch",
"figs/crs/hb-types"
]
},
{
"t": "Lecture 8 · Hemoglobin & Myoglobin",
"s": "Why does deoxygenated HbS polymerize while oxygenated HbS does not?",
"c": [
"Valine at β6 binds the heme iron",
"Oxygen forms disulfide bonds between chains",
"β6 Val binds a patch exposed on deoxy-Hb",
"Deoxy-HbS loses its α chains",
"2,3-BPG cross-links HbS tetramers"
],
"a": 2,
"e": "Step 1: in HbS, valine (hydrophobic) replaces glutamate (charged) at β6.\nStep 2: in the deoxy (T) form, a hydrophobic patch formed by Ala 70, Phe 85 and Leu 88 is exposed on the β chain.\nStep 3: the β6 valine of one tetramer fits into the patch of another, so deoxy-HbS polymerizes into long fibers.",
"w": [
"Valine is on the protein surface, not at the heme.",
"O₂ does not form disulfides.",
"",
"The tetramer stays intact.",
"2,3-BPG does not cross-link HbS."
],
"fig": [
"figs/crs/hb-sickle-path"
]
},
{
"t": "Lecture 8 · Hemoglobin & Myoglobin",
"s": "A 7-year-old with sickle cell anemia has had several pneumococcal infections. What explains this susceptibility?",
"c": [
"Low HbF levels in the blood",
"Antibodies against their own red cells",
"Neutropenia from hydroxyurea",
"Functional asplenia from infarction",
"Iron overload from transfusions"
],
"a": 3,
"e": "Step 1: repeated sickling infarcts the spleen, which shrinks to a fibrotic remnant (autosplenectomy) by about age 5.\nStep 2: without a spleen, encapsulated organisms such as S. pneumoniae are not cleared, and Howell-Jolly bodies appear on the smear.\nStep 3: that is why HbSS and HbSβ⁰ patients take penicillin twice daily and are vaccinated.",
"w": [
"Low HbF worsens sickling, not immunity directly.",
"Sickle cell disease is not antibody-mediated.",
"Hydroxyurea can lower WBC counts, but this is not the classic reason.",
"",
"Iron overload does not specifically cause pneumococcal infections."
]
},
{
"t": "Lecture 8 · Hemoglobin & Myoglobin",
"s": "A newborn develops anemia with HbH inclusions. Genetic testing shows 3 of 4 α-globin genes deleted. What is the HbH tetramer, and why is it harmful?",
"c": [
"γ₄, which binds 2,3-BPG too tightly",
"α₄, which precipitates in precursors",
"β₄, high affinity, no cooperativity",
"α₂δ₂, which is unstable",
"β₄, with low O₂ affinity"
],
"a": 2,
"e": "Step 1: with only one working α gene, α chains are scarce and the excess β chains form β₄ tetramers, HbH.\nStep 2: like Hb Bart's (γ₄), HbH shows no heme-heme interaction. Its curve is almost hyperbolic, with very high O₂ affinity, so it does not deliver O₂.\nStep 3: HbH also precipitates in older cells, causing hemolytic anemia and splenomegaly.",
"w": [
"γ₄ is Hb Bart's, mainly in the fetus.",
"α₄ forms in β-thalassemia.",
"",
"α₂δ₂ is normal HbA₂.",
"HbH has high, not low, affinity."
],
"fig": [
"figs/crs/hb-alpha-thal"
]
},
{
"t": "Lecture 8 · Hemoglobin & Myoglobin",
"s": "In β-thalassemia major, why do HbA₂ and HbF rise?",
"c": [
"δ and γ chains replace α chains",
"β-globin is converted into δ-globin",
"Spare α chains pair with δ and γ",
"HbF is made only in the spleen",
"Iron overload induces γ-globin"
],
"a": 2,
"e": "Step 1: little or no β chain is made, so α chains are in excess.\nStep 2: the δ and γ genes are intact, so α chains pair with δ (HbA₂, α₂δ₂) and γ (HbF, α₂γ₂).\nStep 3: cells with more HbF survive better, so HbF rises further. Raised HbA₂ and HbF are diagnostic of β-thalassemia.",
"w": [
"α chains are normal here. δ and γ cannot replace them.",
"Globin chains are not converted into one another.",
"",
"HbF is made by erythroid precursors in the marrow.",
"Iron overload does not induce γ-globin."
],
"fig": [
"figs/crs/hb-beta-thal"
]
},
{
"t": "Lecture 9 · Citric Acid Cycle",
"s": "A 4-month-old girl has hypotonia, poor feeding and episodes of rapid breathing that worsen after feeds. Serum lactate and pyruvate are elevated, and the lactate-to-pyruvate ratio is normal. Fibroblast studies show reduced activity of an enzyme that requires thiamine pyrophosphate, lipoic acid, CoA, FAD and NAD⁺. Which enzyme is deficient?",
"c": [
"Hepatic glucose-6-phosphatase",
"Pyruvate kinase",
"Pyruvate dehydrogenase",
"Lactate dehydrogenase",
"Pyruvate carboxylase"
],
"a": 2,
"e": "Step 1: Raised lactate and pyruvate with a normal ratio point to a block in pyruvate oxidation rather than a redox problem.\nStep 2: The five cofactors TPP, lipoic acid, CoA, FAD and NAD⁺ are those of the PDH complex.\nStep 3: Pyruvate cannot become acetyl CoA, so it accumulates and is converted to lactate, and episodes worsen with carbohydrate.\n\nTakeaway: PDH needs TPP, lipoic acid, CoA, FAD and NAD⁺; its deficiency causes congenital lactic acidosis.",
"w": [
"G6Pase deficiency causes hypoglycemia with hepatomegaly; it uses none of these cofactors.",
"Pyruvate kinase deficiency causes hemolytic anemia.",
"",
"LDH deficiency would lower lactate.",
"Pyruvate carboxylase uses biotin, not these five cofactors."
],
"fig": [
"figs/crs/tca-pdh-complex"
]
},
{
"t": "Lecture 9 · Citric Acid Cycle",
"s": "A 38-year-old man drinks well water contaminated with arsenic. He develops vomiting, garlic-like breath and a metabolic acidosis with raised lactate. Arsenite binds tightly to which group, inactivating two enzyme complexes in energy metabolism?",
"c": [
"The isoalloxazine ring of FAD",
"The adenine ring of NAD⁺",
"The pyrophosphate of TPP",
"Thiol groups of lipoic acid",
"The carboxyl group of biotin"
],
"a": 3,
"e": "Step 1: Arsenite, the trivalent form of arsenic, forms a stable complex with the two thiol (–SH) groups of reduced lipoic acid.\nStep 2: Lipoic acid is the cofactor of the transacetylase (E2) of PDH and of α-ketoglutarate dehydrogenase.\nStep 3: Both complexes stop, so pyruvate accumulates as lactate and the TCA cycle slows.\n\nTakeaway: Arsenite inactivates lipoic acid → blocks PDH and α-KGDH.",
"w": [
"FAD is not bound by arsenite.",
"NAD⁺ is not bound by arsenite.",
"TPP is not the target of arsenite.",
"",
"Biotin is not part of PDH or α-KGDH."
],
"fig": [
"figs/crs/tca-pdh-complex"
]
},
{
"t": "Lecture 9 · Citric Acid Cycle",
"s": "In a well-fed liver cell, the ratios of ATP/ADP, NADH/NAD⁺ and acetyl CoA/CoA are all high. Which change in the PDH complex is expected?",
"c": [
"Phosphorylation by PDH kinase, inactivating it",
"Allosteric activation by acetyl CoA",
"Increased activity due to high NADH",
"Dephosphorylation by PDH phosphatase, activating it",
"Conversion to pyruvate carboxylase"
],
"a": 0,
"e": "Step 1: High ATP, NADH and acetyl CoA signal a high energy charge and abundant biosynthetic intermediates.\nStep 2: These products stimulate PDH kinase, which phosphorylates and inactivates the complex. Acetyl CoA and NADH also directly inhibit E2 and E3.\nStep 3: PDH is switched off, conserving pyruvate.\n\nTakeaway: High energy charge → PDH kinase → PDH phosphorylated and inactive.",
"w": [
"",
"Acetyl CoA inhibits, not activates, PDH.",
"NADH inhibits E3.",
"Dephosphorylation occurs with low energy charge, insulin or Ca²⁺.",
"PDH is not converted into another enzyme."
],
"fig": [
"figs/crs/tca-pdh-regulation"
]
},
{
"t": "Lecture 9 · Citric Acid Cycle",
"s": "A researcher measures the products of one turn of the citric acid cycle starting from one acetyl CoA. Which set is correct?",
"c": [
"3 CO₂, 4 NADH, 1 FADH₂, 1 GTP",
"2 CO₂, 3 NADH, 1 FADH₂, 2 ATP",
"2 CO₂, 3 NADH, 1 FADH₂, 1 GTP",
"1 CO₂, 3 NADH, 1 FADH₂, 1 GTP",
"2 CO₂, 2 NADH, 2 FADH₂, 1 GTP"
],
"a": 2,
"e": "Step 1: Two decarboxylations, by isocitrate dehydrogenase and α-KGDH, release 2 CO₂.\nStep 2: NADH comes from IDH, α-KGDH and malate dehydrogenase (3 NADH); succinate dehydrogenase makes 1 FADH₂.\nStep 3: Succinate thiokinase makes 1 GTP. At 3, 2 and 1 ATP each, that is 12 ATP per acetyl CoA on the slide.\n\nTakeaway: Per turn: 2 CO₂, 3 NADH, 1 FADH₂, 1 GTP = 12 ATP.",
"w": [
"Three CO₂ and four NADH include the PDH step.",
"Only one high-energy phosphate, GTP, is made directly.",
"",
"There are two decarboxylations, not one.",
"There are three NADH and one FADH₂."
],
"fig": [
"figs/crs/tca-energy"
]
},
{
"t": "Lecture 9 · Citric Acid Cycle",
"s": "A child is brought in after eating a pesticide containing fluoroacetate. Mitochondrial studies show accumulation of a TCA intermediate. Which enzyme is inhibited?",
"c": [
"α-Ketoglutarate dehydrogenase",
"Aconitase",
"Citrate synthase",
"Malate dehydrogenase",
"Succinate dehydrogenase"
],
"a": 1,
"e": "Step 1: Fluoroacetate forms fluoroacetyl CoA.\nStep 2: Citrate synthase condenses it with oxaloacetate to make fluorocitrate.\nStep 3: Fluorocitrate potently inhibits aconitase, so citrate builds up and the cycle stops.\n\nTakeaway: Fluoroacetate → fluorocitrate → aconitase blocked → citrate accumulates.",
"w": [
"α-KGDH is blocked by arsenite.",
"",
"Citrate synthase forms fluorocitrate; it is not the blocked enzyme.",
"MDH is not the target.",
"Succinate dehydrogenase is blocked by malonate."
],
"fig": [
"figs/crs/tca-inhibitors"
]
},
{
"t": "Lecture 9 · Citric Acid Cycle",
"s": "Which enzyme of the citric acid cycle is the rate-limiting step, stimulated by ADP and Ca²⁺ and inhibited by ATP and NADH?",
"c": [
"Succinate dehydrogenase",
"Isocitrate dehydrogenase",
"α-Ketoglutarate dehydrogenase",
"Fumarase",
"Citrate synthase"
],
"a": 1,
"e": "Step 1: The cycle rate is matched to the cell's need for ATP.\nStep 2: Isocitrate dehydrogenase is the rate-limiting step: ADP and Ca²⁺ stimulate it; ATP and NADH inhibit it.\nStep 3: Citrate synthase is inhibited by citrate, NADH and succinyl CoA; α-KGDH by succinyl CoA, NADH and high energy charge.\n\nTakeaway: IDH is the rate-limiting enzyme of the TCA cycle.",
"w": [
"SDH is not a primary control point.",
"",
"α-KGDH is inhibited by its products and energy charge.",
"Fumarase is not a control point.",
"Citrate synthase is inhibited by citrate, NADH and succinyl CoA."
],
"fig": [
"figs/crs/tca-regulation"
]
},
{
"t": "Lecture 9 · Citric Acid Cycle",
"s": "During prolonged fasting, hepatocytes withdraw oxaloacetate for gluconeogenesis. Which enzyme, requiring biotin, is the most important anaplerotic reaction replacing it?",
"c": [
"Pyruvate carboxylase",
"Phosphoenolpyruvate carboxykinase",
"Pyruvate dehydrogenase",
"Malic enzyme",
"Citrate lyase"
],
"a": 0,
"e": "Step 1: TCA intermediates removed for biosynthesis must be replenished, or the cycle slows.\nStep 2: The most important anaplerotic reaction is pyruvate carboxylase: pyruvate + CO₂ + ATP + H₂O → oxaloacetate + ADP + Pi.\nStep 3: Other feeders: glutamate → α-KG, aspartate → OAA, isoleucine, methionine, valine and odd-chain FAs → succinyl CoA.\n\nTakeaway: Pyruvate carboxylase is the main anaplerotic reaction.",
"w": [
"",
"PEPCK removes oxaloacetate for gluconeogenesis.",
"PDH makes acetyl CoA, which does not replenish intermediates.",
"Malic enzyme is not the main anaplerotic reaction on the slide.",
"Citrate lyase works in the cytosol for fatty acid synthesis."
],
"fig": [
"figs/crs/tca-anaplerotic"
]
},
{
"t": "Lecture 9 · Citric Acid Cycle",
"s": "Cytosolic NADH produced during glycolysis in brain tissue enters the mitochondria through a shuttle that reduces FAD. Compared with the malate-aspartate shuttle, how many fewer ATP does each cytosolic NADH yield using slide values?",
"c": [
"Two fewer ATP",
"Three fewer ATP",
"One more ATP",
"No difference",
"One fewer ATP"
],
"a": 4,
"e": "Step 1: NADH cannot cross the inner mitochondrial membrane.\nStep 2: The glycerophosphate shuttle passes the electrons to FAD → FADH₂, yielding 2 ATP per NADH.\nStep 3: The malate-aspartate shuttle regenerates mitochondrial NADH, yielding 3 ATP. The difference is 1 ATP per cytosolic NADH.\n\nTakeaway: Glycerophosphate shuttle = 2 ATP; malate-aspartate = 3 ATP.",
"w": [
"The difference is 1 ATP, not 2.",
"Three fewer would mean no ATP at all.",
"The glycerophosphate shuttle yields less, not more.",
"The shuttles differ in yield.",
""
],
"fig": [
"figs/crs/tca-gp-shuttle"
]
},
{
"t": "Lecture 10 · Electron Transport Chain",
"s": "A 3-year-old boy is found unresponsive in a garage next to a running gas generator. His skin is pink, arterial PO₂ is normal and serum lactate is markedly elevated. The toxin responsible also binds directly to which mitochondrial enzyme, worsening tissue energy failure?",
"c": [
"Cytochrome c oxidase",
"Cytochrome bc₁ complex",
"NADH dehydrogenase",
"The F₀ domain of ATP synthase",
"Succinate dehydrogenase"
],
"a": 0,
"e": "Step 1: A running generator in a closed space produces carbon monoxide.\nStep 2: CO binds hemoglobin, lowering O₂ delivery while arterial PO₂ stays normal because PO₂ measures dissolved O₂.\nStep 3: CO also inhibits Complex IV, cytochrome c oxidase. All upstream carriers stay reduced, no protons are pumped and ATP synthesis stops. NADH builds up and is reoxidized by LDH, causing lactic acidosis.\n\nTakeaway: CO and cyanide inhibit Complex IV, cytochrome c oxidase, the terminal complex that cannot be bypassed.",
"w": [
"",
"The bc₁ complex is Complex III, blocked by antimycin A.",
"NADH dehydrogenase is Complex I, blocked by rotenone and amytal.",
"The F₀ domain is blocked by oligomycin, not CO.",
"Succinate dehydrogenase is Complex II, blocked by carboxin and TTFA."
],
"fig": [
"figs/crs/etc-inhibitors",
"figs/crs/etc-chain"
]
},
{
"t": "Lecture 10 · Electron Transport Chain",
"s": "A 30-year-old bodybuilder buys a 'fat burner' online. Two days later he has a temperature of 41 °C, profuse sweating and tachycardia. Measurements in his muscle would most likely show which combination?",
"c": [
"Low O₂ use, high ATP synthesis, high heat",
"Low O₂ use, low ATP synthesis, low heat",
"Normal O₂ use, low ATP synthesis, low heat",
"High O₂ use, high ATP synthesis, low heat",
"High O₂ use, low ATP synthesis, high heat"
],
"a": 4,
"e": "Step 1: Unregulated fat burners often contain 2,4-dinitrophenol, a lipophilic proton carrier.\nStep 2: DNP lets protons re-enter the matrix without passing through ATP synthase, uncoupling electron transport from ATP synthesis.\nStep 3: The ETC runs at full speed trying to restore the gradient, so O₂ use rises, but little ATP is made and the energy is released as heat, causing hyperthermia.\n\nTakeaway: Uncoupler pattern = ↑ O₂ consumption, ↓ ATP, ↑ heat.",
"w": [
"O₂ use rises rather than falls with an uncoupler.",
"Low O₂ use with low ATP is the pattern of an ETC inhibitor such as cyanide.",
"O₂ use rises sharply, and heat production is high.",
"ATP synthesis falls, not rises, with an uncoupler.",
""
],
"fig": [
"figs/crs/etc-mitchell"
]
},
{
"t": "Lecture 10 · Electron Transport Chain",
"s": "Isolated mitochondria are given malate, ADP and phosphate. A compound is added that stops both ATP synthesis and O₂ consumption. When 2,4-dinitrophenol is then added, O₂ consumption returns but ATP synthesis does not. Which compound was added first?",
"c": [
"Antimycin A",
"Oligomycin",
"Cyanide",
"Rotenone",
"Carboxin"
],
"a": 1,
"e": "Step 1: Both ATP synthesis and O₂ use stopped, so either an ETC inhibitor or an ATP synthase inhibitor was added.\nStep 2: An uncoupler restores O₂ use only if the electron transport chain itself is still intact. Here DNP restored O₂ use, so the electron carriers are not blocked.\nStep 3: The block was therefore at ATP synthase. Oligomycin closes the F₀ proton channel; once DNP gives protons another way back, electron transport resumes but ATP still cannot be made.\n\nTakeaway: Oligomycin stops ATP synthesis and O₂ use, and an uncoupler restores O₂ use but not ATP.",
"w": [
"Antimycin A blocks Complex III, so DNP could not restore O₂ use.",
"",
"Cyanide blocks Complex IV, so no uncoupler could restore O₂ use.",
"Rotenone blocks Complex I, so DNP could not restore O₂ use with malate.",
"Carboxin blocks Complex II, which malate-derived NADH does not use."
],
"fig": [
"figs/crs/etc-inhibitors",
"figs/crs/etc-mitchell"
]
},
{
"t": "Lecture 10 · Electron Transport Chain",
"s": "A cardiology patient is started on high-dose atorvastatin. Six weeks later she has proximal muscle pain and fatigue on exertion. Her symptoms are partly explained by decreased synthesis of an electron carrier that shares its biosynthetic precursors with cholesterol. Which step of electron transport is most directly affected?",
"c": [
"Transfer from succinate to FAD within Complex II",
"Transfer from NADH to FMN within Complex I",
"Transfer from Complexes I and II to Complex III",
"Transfer from Complex III to Complex IV",
"Transfer from Complex IV to molecular oxygen"
],
"a": 2,
"e": "Step 1: Statins inhibit HMG-CoA reductase, the rate-limiting step of the mevalonate pathway.\nStep 2: Coenzyme Q is built from isoprenoid units made by this pathway, so statins lower CoQ levels.\nStep 3: CoQ is the lipid-soluble mobile carrier that takes electrons from Complexes I and II to Complex III. Less CoQ means less ATP in muscle, causing myopathy and sometimes lactic acidosis.\n\nTakeaway: Statins ↓ CoQ, the carrier from Complexes I and II to III → myopathy.",
"w": [
"Succinate to FAD happens inside Complex II and does not use CoQ.",
"NADH to FMN happens inside Complex I and does not use CoQ.",
"",
"Cytochrome c carries electrons from III to IV and is a heme protein, not an isoprenoid.",
"Transfer to O₂ happens inside Complex IV."
],
"fig": [
"figs/crs/etc-chain"
]
},
{
"t": "Lecture 10 · Electron Transport Chain",
"s": "A 9-month-old boy has developmental regression, hypotonia, ptosis and irregular breathing. CSF lactate is elevated, and MRI shows bilateral symmetric lesions of the basal ganglia and brainstem. Genetic testing shows a mutation in a mitochondrial DNA gene encoding a subunit of ATP synthase. What is the most likely diagnosis?",
"c": [
"Von Gierke disease",
"Leigh syndrome",
"Ornithine transcarbamylase deficiency",
"Phenylketonuria",
"Tay-Sachs disease"
],
"a": 1,
"e": "Step 1: Infant onset, neurological regression and elevated lactate suggest a disorder of mitochondrial energy production.\nStep 2: Symmetric lesions in the basal ganglia, brainstem, thalamus and cerebellum are typical of Leigh syndrome, subacute necrotizing encephalomyelopathy.\nStep 3: It is caused by mutations, in nuclear or mitochondrial DNA, affecting the PDH complex, ETC or ATP synthase.\n\nTakeaway: Leigh syndrome = defective mitochondrial ATP production in infancy → lactic acidosis and symmetric basal ganglia and brainstem lesions.",
"w": [
"Von Gierke disease causes fasting hypoglycemia and hepatomegaly.",
"",
"OTC deficiency causes hyperammonemia rather than lactic acidosis.",
"PKU causes intellectual disability from high phenylalanine, without these lesions.",
"Tay-Sachs is a lysosomal storage disease with a cherry-red spot, not lactic acidosis."
],
"fig": [
"figs/crs/etc-overview"
]
},
{
"t": "Lecture 10 · Electron Transport Chain",
"s": "A researcher measures the redox potential of four pairs used in the respiratory chain: NAD⁺/NADH −0.32 V, FMN/FMNH₂ −0.22 V, cytochrome c Fe³⁺/Fe²⁺ +0.22 V and ½O₂/H₂O +0.82 V. What best explains why electrons flow spontaneously from NADH to O₂?",
"c": [
"Oxygen donates electrons back to NAD⁺",
"Protons are pumped first, which pulls electrons forward",
"ATP hydrolysis at Complex V pushes the electrons",
"Each step moves to a more positive E₀, releasing free energy",
"Each step moves to a more negative E₀, absorbing free energy"
],
"a": 3,
"e": "Step 1: A pair with a negative E₀ tends to lose electrons; a pair with a positive E₀ tends to accept them.\nStep 2: The respiratory chain complexes are arranged in order of increasingly positive redox potential, from NADH at −0.32 V to O₂ at +0.82 V.\nStep 3: Electron transfer down this gradient is highly exergonic, and the free energy released is used to pump protons.\n\nTakeaway: Electrons flow from negative to positive E₀; the ETC is arranged by increasingly positive redox potential.",
"w": [
"O₂ is the final acceptor and does not donate electrons.",
"Proton pumping is driven by electron flow, not the other way round.",
"Complex V makes ATP; it does not hydrolyze it to drive electrons.",
"",
"Moving to a more negative E₀ would require energy input."
],
"fig": [
"figs/crs/etc-redox",
"figs/crs/etc-chain"
]
},
{
"t": "Lecture 10 · Electron Transport Chain",
"s": "A full-term newborn in a cool delivery room maintains her core temperature without shivering. Mitochondria isolated from her interscapular fat would show which feature compared with mitochondria from her liver?",
"c": [
"More O₂ used per ATP made, due to UCP-1",
"Higher P:O ratio from extra ATP synthase",
"Fewer O₂ used per ATP made, due to UCP-1",
"Inhibited Complex IV from thermogenin binding",
"No proton gradient because the ETC is absent"
],
"a": 0,
"e": "Step 1: Interscapular brown adipose tissue in newborns contains uncoupling protein 1, thermogenin, in the inner mitochondrial membrane.\nStep 2: UCP-1 lets protons flow back into the matrix without passing through ATP synthase.\nStep 3: Electron transport and O₂ use continue, but much less ATP is made for each O₂ used, so the P:O ratio is low and the energy is released as heat. This is non-shivering thermogenesis.\n\nTakeaway: Brown fat UCP-1 uncouples → more O₂ per ATP → heat.",
"w": [
"",
"Uncoupling lowers the P:O ratio.",
"Uncoupling makes ATP synthesis less efficient, not more.",
"Thermogenin is a proton channel and does not inhibit Complex IV.",
"Brown fat mitochondria have an active ETC and gradient."
],
"fig": [
"figs/crs/etc-mitchell"
]
},
{
"t": "Lecture 10 · Electron Transport Chain",
"s": "A drug is added to isolated mitochondria that blocks the transport of ADP into the matrix and of ATP out of the matrix. Which compound has this effect?",
"c": [
"Antimycin A",
"2,4-dinitrophenol",
"Atractyloside",
"Oligomycin",
"Valinomycin"
],
"a": 2,
"e": "Step 1: The ATP–ADP translocase in the inner mitochondrial membrane exchanges matrix ATP for cytosolic ADP.\nStep 2: Atractyloside inhibits the translocase. ADP cannot enter, so ATP synthase runs out of substrate.\nStep 3: Through respiratory control, electron transport and O₂ use then slow down too.\n\nTakeaway: Atractyloside inhibits the ATP–ADP translocase.",
"w": [
"Antimycin A blocks Complex III.",
"DNP is an uncoupler; it does not block ATP and ADP exchange.",
"",
"Oligomycin blocks the F₀ proton channel of ATP synthase.",
"Valinomycin is an ionophore that uncouples oxidative phosphorylation."
],
"fig": [
"figs/crs/etc-mitchell"
]
}
]
},
{
"course": "crs",
"subject": "Physiology",
"name": "CRS Physiology · NBME",
"prefix": "ncp1",
"note": "NBME-style questions for every CRS Physiology lecture · grows each lecture",
"qs": [
{
"t": "Lecture 1 · Cardiac Action Potential",
"s": "A researcher bathes isolated ventricular myocytes in a Ca²⁺-free solution. The cells still fire action potentials when stimulated but no longer shorten. Which step is most directly lost?",
"c": [
"Opening of fast Na⁺ channels",
"K⁺ efflux through IK1",
"Spread of current through gap junctions",
"Recovery of the h gate",
"Ca²⁺-induced SR Ca²⁺ release"
],
"a": 4,
"e": "Cardiac myocytes require extracellular Ca²⁺ entering through L-type channels in Phase 2 to trigger Ca²⁺-induced Ca²⁺ release from the SR. Without it, excitation is uncoupled from contraction.",
"w": [
"APs still fire, so Na⁺ channels still open.",
"IK1 holds rest and does not need extracellular Ca²⁺.",
"Cells still fire, so impulses still spread.",
"Recovery is voltage driven, not Ca²⁺ driven.",
""
]
},
{
"t": "Lecture 1 · Cardiac Action Potential",
"s": "A 58-year-old man with ventricular tachycardia after a myocardial infarction is given lidocaine. The drug acts on the channel responsible for which phase of the ventricular action potential?",
"c": [
"Phase 1",
"Phase 2",
"Phase 0",
"Phase 3",
"Phase 4"
],
"a": 2,
"e": "Lidocaine, a local anesthetic antiarrhythmic, blocks the fast Na⁺ current (INa), which produces the Phase 0 upstroke.",
"w": [
"Phase 1 is Ito.",
"Phase 2 is L-type Ca²⁺ with K⁺ efflux.",
"",
"Phase 3 is delayed-rectifier K⁺.",
"Phase 4 is held by IK1."
]
},
{
"t": "Lecture 1 · Cardiac Action Potential",
"s": "A 62-year-old woman with hypertension starts verapamil. Which effect on ventricular myocytes is expected?",
"c": [
"Faster Phase 0 upstroke",
"Reduced contractility",
"Increased SR Ca²⁺ release",
"Spontaneous Phase 4 firing",
"A more negative resting potential"
],
"a": 1,
"e": "Ca²⁺ channel blockers reduce L-type Ca²⁺ influx in Phase 2 → less Ca²⁺-induced Ca²⁺ release → reduced contractility. In vessels they relax smooth muscle, causing vasodilation.",
"w": [
"Phase 0 is Na⁺ carried.",
"",
"Less trigger Ca²⁺ means less release.",
"Ventricular cells do not gain automaticity.",
"Rest is held by IK1."
]
},
{
"t": "Lecture 1 · Cardiac Action Potential",
"s": "In an experiment, a ventricular myocyte is given a second stimulus at varying times after the first. A stimulus 120 ms after the first fails at any strength. One at 260 ms produces a small AP only with a strong stimulus. At 260 ms the cell is in which period?",
"c": [
"Absolute refractory period",
"Supranormal period",
"Full recovery at rest",
"Phase 2 plateau",
"Relative refractory period"
],
"a": 4,
"e": "120 ms is within the ARP (Phases 0–2 and early 3). At 260 ms, a strong stimulus gives a lower-amplitude AP — the relative refractory period of late Phase 3.",
"w": [
"At 120 ms no AP fires; at 260 ms one can.",
"In this period a weaker stimulus would suffice.",
"At rest a normal stimulus gives a normal AP.",
"The plateau is inside the ARP.",
""
]
},
{
"t": "Lecture 1 · Cardiac Action Potential",
"s": "A toxin prevents the h gate of the cardiac fast Na⁺ channel from reopening after inactivation. What is the most likely effect on ventricular myocytes after the first beat?",
"c": [
"They fire a longer plateau",
"They cannot fire a new AP",
"They fire spontaneously",
"Their resting potential rises to 0 mV",
"They fire larger APs"
],
"a": 1,
"e": "Recovery from inactivation needs the h gate to reopen in late Phase 3. If it never reopens, channels stay inactivated — closed and unavailable — so no new AP can fire.",
"w": [
"The plateau is a Ca²⁺/K⁺ balance.",
"",
"Myocytes have no Phase 4 depolarization.",
"Rest is held by IK1.",
"No channels are available to fire."
]
},
{
"t": "Lecture 1 · Cardiac Action Potential",
"s": "A conduction study shows that impulse speed in the AV node is much slower than in ventricular muscle. Which property of nodal cells best explains this?",
"c": [
"A Ca²⁺-carried upstroke",
"A long Phase 2 plateau",
"A stable −90 mV rest",
"A very large IK1 current",
"A Na⁺-carried upstroke"
],
"a": 0,
"e": "Steep Na⁺ upstroke → fast conduction. Nodal cells use a slow Ca²⁺ upstroke through L-type channels, so they conduct slowly.",
"w": [
"",
"Nodal cells have no plateau.",
"Nodal cells have no stable rest.",
"Not the reason for slow conduction.",
"That would conduct fast."
]
},
{
"t": "Lecture 1 · Cardiac Action Potential",
"s": "A drug blocks the inward-rectifier K⁺ current (IK1) in ventricular myocytes. Which change is most likely?",
"c": [
"A taller Phase 0 upstroke",
"A shorter refractory period",
"A less negative resting potential",
"Loss of the Phase 1 notch",
"A more negative resting potential"
],
"a": 2,
"e": "Constant K⁺ efflux through IK1 holds the RMP near −90 mV. Blocking it removes that hold, so the resting potential becomes less negative.",
"w": [
"Losing IK1 does not make the upstroke taller.",
"Not the direct effect of IK1 block.",
"",
"The notch is Ito.",
"IK1 holds the cell negative."
]
},
{
"t": "Lecture 1 · Cardiac Action Potential",
"s": "A drug blocks the delayed-rectifier K⁺ current in ventricular myocytes. Which change in the action potential is expected?",
"c": [
"Prolonged Phase 3 repolarization",
"A slower Phase 0 upstroke",
"Loss of the Phase 1 notch",
"A plateau held at a higher voltage",
"A more negative resting potential"
],
"a": 0,
"e": "Phase 3 is due to massive K⁺ efflux through voltage-gated slow (delayed-rectifier) K⁺ channels. Blocking them slows repolarization and lengthens the AP.",
"w": [
"",
"The upstroke is Na⁺ carried.",
"The notch is Ito.",
"Not the main expected change.",
"Rest is held by IK1."
]
},
{
"t": "Lecture 1 · Cardiac Action Potential",
"s": "A patient's ventricular myocardium has regions with very different refractory periods after an infarction. A premature beat arrives. What is the patient at greatest risk of?",
"c": [
"Tetanic contraction",
"Complete heart block",
"Loss of the plateau",
"Arrest of the sinoatrial node",
"A re-entrant arrhythmia"
],
"a": 4,
"e": "Heterogeneous refractory periods make re-entrant arrhythmias possible when an impulse arrives at the wrong time.",
"w": [
"Cardiac muscle cannot tetanize.",
"Not the risk described.",
"Not caused by unequal refractoriness.",
"Not the risk described.",
""
]
},
{
"t": "Lecture 1 · Cardiac Action Potential",
"s": "A 70-year-old man has a degenerative lesion of the cardiac fibrous skeleton. It destroys the AV bundle of His. Why does atrial activity no longer reach the ventricles?",
"c": [
"The SA node is destroyed",
"The AV node is in the ventricle",
"It is the only muscular link",
"Purkinje fibers conduct to the atria",
"The atria lack gap junctions"
],
"a": 2,
"e": "The AV bundle of His runs in the interventricular septum and is the ONLY muscular connection between the atria and ventricles.",
"w": [
"The SA node is in the right atrial wall.",
"The AV node is in the interatrial septum.",
"",
"Purkinje fibers are ventricular.",
"Atria have gap junctions."
]
},
{
"t": "Lecture 1 · Cardiac Action Potential",
"s": "A student compares action potentials from a motor neuron, a skeletal muscle fiber and a ventricular myocyte. Which feature unique to the myocyte accounts for its much longer AP?",
"c": [
"A faster Na⁺ upstroke",
"A more negative rest",
"A Phase 1 notch",
"A Phase 2 plateau",
"Larger K⁺ efflux"
],
"a": 3,
"e": "Neuron ≈ 1 ms, skeletal muscle ≈ 10 ms, cardiac ≈ 300 ms. The Phase 2 plateau (L-type Ca²⁺ ≈ delayed-rectifier K⁺) stretches the cardiac AP.",
"w": [
"All three have a fast Na⁺ upstroke.",
"Not the reason for a longer AP.",
"The notch is brief.",
"",
"More K⁺ efflux would shorten the AP."
]
},
{
"t": "Lecture 1 · Cardiac Action Potential",
"s": "A physiology student asks why cardiac muscle never shows the summation of twitches seen in skeletal muscle. Which is the best explanation?",
"c": [
"Cardiac muscle lacks an SR",
"Refractoriness lasts into relaxation",
"Cardiac APs are shorter than skeletal",
"Cardiac cells lack troponin C",
"Gap junctions block summation"
],
"a": 1,
"e": "The long refractory period covers most of the contraction, so the muscle cannot be re-excited until it starts relaxing. This prevents tetany, which would be fatal in the heart.",
"w": [
"Cardiac muscle has an SR.",
"",
"They are longer.",
"They have troponin.",
"Not the mechanism."
]
},
{
"t": "Lecture 1 · Cardiac Action Potential",
"s": "In voltage-clamp studies, ventricular Na⁺ channels are held at a depolarized potential for 200 ms, and then stepped further positive. Almost no Na⁺ current flows. What is the state of the channels?",
"c": [
"m closed, h open",
"m open, h open",
"m closed, h closed",
"m open, h closed",
"h gate reopening"
],
"a": 3,
"e": "Sustained depolarization leaves the channels inactivated: m open · h closed. They are closed and unavailable regardless of stimulus strength until repolarization.",
"w": [
"That is the resting state, which could open.",
"That would let Na⁺ flow.",
"Not the expected state after depolarization.",
"",
"That needs repolarization."
]
},
{
"t": "Lecture 1 · Cardiac Action Potential",
"s": "A cardiac cell's action potential has a plateau lasting 250 ms. In what type of cell was it most likely recorded?",
"c": [
"Ventricular myocyte",
"SA nodal cell",
"AV nodal cell",
"Skeletal muscle fiber",
"Motor neuron"
],
"a": 0,
"e": "A 150–300 ms plateau is a feature of fast response cardiac myocytes, such as ventricular myocytes. SA and AV nodal cells lack a plateau.",
"w": [
"",
"Nodal cells have no plateau.",
"Nodal cells have no plateau.",
"Skeletal APs last ~10 ms.",
"Neuron APs last ~1 ms."
]
},
{
"t": "Lecture 1 · Cardiac Action Potential",
"s": "After repolarization, a ventricular myocyte has extra Ca²⁺ in the cytosol and extra Na⁺. Which mechanism restores the ionic gradients?",
"c": [
"Opening of L-type channels",
"Opening of fast Na⁺ channels",
"Closure of IK1 channels",
"Exchangers and ATPases",
"Opening of gap junctions"
],
"a": 3,
"e": "The Na⁺/Ca²⁺ exchanger and ATPases restore ionic gradients after Phase 3.",
"w": [
"These let more Ca²⁺ in.",
"These let more Na⁺ in.",
"IK1 does not restore gradients.",
"",
"These connect cells."
]
},
{
"t": "Lecture 2 · Pacemaker Potential",
"s": "A new drug, ivabradine, selectively blocks HCN channels in the SA node. Which effect is most likely?",
"c": [
"Flatter Phase 4 and lower heart rate",
"Shorter Phase 0 and a higher heart rate",
"Loss of the nodal Phase 2 plateau",
"Weaker ventricular contraction only",
"Faster conduction through the AV node"
],
"a": 0,
"e": "HCN channels carry If, the funny current of Phase 4. Blocking it flattens the pacemaker potential, so threshold is reached later and heart rate falls.",
"w": [
"",
"Blocking If slows, not speeds, the rate.",
"Nodal cells have no plateau.",
"HCN block mainly slows rate.",
"Not the main effect."
]
},
{
"t": "Lecture 2 · Pacemaker Potential",
"s": "A 58-year-old man with hypertension is given verapamil. His heart rate falls more than his ventricular contractility. Why?",
"c": [
"Ventricular Phase 0 depends on Ca²⁺",
"Verapamil blocks T-type channels",
"SA Phase 0 depends on L-type Ca²⁺",
"Verapamil blocks If",
"SA cells use fast Na⁺ channels"
],
"a": 2,
"e": "Calcium channel blockers affect the SA node more than ventricular contraction: the nodal upstroke is carried by ICa-L.",
"w": [
"Ventricular Phase 0 is Na⁺.",
"It does not block ICa-T.",
"",
"It does not block If.",
"They are inactivated in nodal cells."
]
},
{
"t": "Lecture 2 · Pacemaker Potential",
"s": "A 72-year-old woman has sick sinus syndrome with no SA node activity. Her ECG shows a narrow-complex rhythm at 45/min. Which tissue is setting her rate?",
"c": [
"Purkinje fibers",
"AV node",
"Atrial myocardium",
"Ventricular myocardium",
"Bundle branches"
],
"a": 1,
"e": "When the SA node fails, the next fastest autorhythmic tissue, the AV node (40–50/min), takes over.",
"w": [
"Purkinje would give 30–40/min.",
"",
"Not autorhythmic.",
"Not autorhythmic.",
"Slower than the AV node."
]
},
{
"t": "Lecture 2 · Pacemaker Potential",
"s": "A patient has complete heart block at the AV node. The atria beat at 72/min. At about what rate do the ventricles beat?",
"c": [
"30–40 /min",
"72 /min",
"40–50 /min",
"60–80 /min",
"0 /min"
],
"a": 0,
"e": "AV node \"derailed\": the SA node keeps the atria at its rate, while the ventricles follow the Purkinje fibers at 30–40/min.",
"w": [
"",
"The impulse cannot cross the block.",
"The AV node is the blocked site.",
"That is the SA rate.",
"Purkinje fibers take over."
]
},
{
"t": "Lecture 2 · Pacemaker Potential",
"s": "In a recording from an SA nodal cell, the potential rises from −60 to −50 mV. Which permeability change dominates in this segment?",
"c": [
"↑ PCa through L-type channels",
"↑ PK through delayed rectifier",
"↑ PNa through funny channels",
"↑ PNa through fast channels",
"↓ PNa through funny channels"
],
"a": 2,
"e": "Early Phase 4: ↑PNa⁺ (f) and ↓PK⁺; T-type Ca²⁺ joins near −50/−55 mV; L-type fires at −40 mV.",
"w": [
"L-type opens at −40 mV.",
"That is Phase 3.",
"",
"Fast Na⁺ channels are inactivated.",
"If is rising early in Phase 4."
]
},
{
"t": "Lecture 2 · Pacemaker Potential",
"s": "A student compares a ventricular AP with an SA node AP. Which feature is found only in the SA node AP?",
"c": [
"A plateau lasting 150–300 ms",
"Spontaneous Phase 4 depolarization",
"A stable resting membrane potential",
"Five phases including the RMP",
"A steep Na⁺-driven upstroke"
],
"a": 1,
"e": "SA node: 3 phases, unstable Phase 4 with spontaneous depolarization, overshoot up to +10 mV, less steep Phase 0.",
"w": [
"That is ventricular.",
"",
"That is ventricular.",
"That is ventricular.",
"That is ventricular."
]
},
{
"t": "Lecture 2 · Pacemaker Potential",
"s": "Why does a Purkinje cell, which can fire on its own, normally not set the heart rate?",
"c": [
"Purkinje cells lack HCN channels",
"Purkinje cells cannot conduct",
"The AV node blocks all impulses",
"SA node fires it before its own threshold",
"Purkinje cells are fourth-order only by location"
],
"a": 3,
"e": "Overdrive suppression: the fastest pacemaker, the SA node, keeps resetting slower pacemakers before they reach threshold.",
"w": [
"They have automaticity.",
"They conduct fastest.",
"It delays, it does not block.",
"",
"Rate, not location, decides."
]
},
{
"t": "Lecture 2 · Pacemaker Potential",
"s": "A drug blocks the delayed-rectifier K⁺ current in SA nodal cells. Which change is expected?",
"c": [
"Faster Phase 0 upstroke",
"Steeper Phase 4 slope",
"A new Phase 2 plateau",
"A fall in the threshold to −65 mV",
"Slower Phase 3 repolarization"
],
"a": 4,
"e": "Phase 3 in the node: Ca²⁺ channels inactivate and delayed-rectifier K⁺ efflux returns the cell to about −60 mV. Blocking IK slows this.",
"w": [
"Phase 0 is ICa-L.",
"Not the direct effect.",
"Not the expected change.",
"Threshold is set by L-type channels.",
""
]
},
{
"t": "Lecture 3 · Effects of Cardiac Nerves",
"s": "A 24-year-old woman faints after seeing blood. Just before she loses consciousness her heart rate falls from 80 to 40/min. Which cellular change in her SA node cells best explains the sudden drop in rate?",
"c": [
"Gs activates adenylyl cyclase, raising cAMP",
"Gi βγ opens K⁺ channels, hyperpolarizing them",
"PKA phosphorylates L-type Ca²⁺ channels",
"β1 receptors are internalized after binding NE",
"Fast Na⁺ channels inactivate during phase 4"
],
"a": 1,
"e": "Vasovagal syncope: a surge of vagal tone. ACh → M2 → Gi; the βγ subunit directly opens IK-ACh channels → K⁺ efflux → hyperpolarization, and αi lowers cAMP → ↓ If and ICa. The direct βγ arm acts within a beat, explaining the abrupt slowing.",
"w": [
"This would speed the heart.",
"",
"This is the sympathetic pathway.",
"Not a cause of acute bradycardia.",
"Nodal cells do not rely on fast Na⁺ channels."
]
},
{
"t": "Lecture 3 · Effects of Cardiac Nerves",
"s": "A 60-year-old man with stable angina and a resting heart rate of 92/min has asthma and cannot take β-blockers. His physician wants to lower his heart rate without reducing contractility or slowing AV conduction. Which drug is most appropriate?",
"c": [
"Verapamil",
"Metoprolol",
"Adenosine",
"Ivabradine",
"Digoxin"
],
"a": 3,
"e": "Ivabradine selectively inhibits If in the SA node → flatter phase 4 → ↓ heart rate only. No effect on contractility or AV conduction, and no β2 bronchospasm risk.",
"w": [
"Verapamil also slows AV conduction and reduces contractility.",
"β-blockers are avoided in his asthma and reduce contractility.",
"Adenosine causes only transient AV block.",
"",
"Digoxin is not the drug discussed for selective rate control."
]
},
{
"t": "Lecture 3 · Effects of Cardiac Nerves",
"s": "A researcher adds a drug to isolated ventricular myocytes that prevents PKA from phosphorylating phospholamban. Norepinephrine is then applied. Compared with untreated cells, which response is most impaired?",
"c": [
"Heart rate",
"Speed of relaxation",
"AV nodal conduction velocity",
"The phase 0 upstroke",
"Resting membrane potential"
],
"a": 1,
"e": "Phosphorylated phospholamban releases its inhibition of SERCA, so Ca²⁺ is pumped back into the SR faster → faster relaxation (positive lusitropy) and more SR Ca²⁺ for the next beat. Blocking that step mainly impairs relaxation.",
"w": [
"Heart rate is set in the SA node, not by ventricular phospholamban.",
"",
"AV conduction depends on nodal L-type Ca²⁺ channels.",
"Phase 0 is the fast Na⁺ current.",
"The resting potential is set by IK1."
]
},
{
"t": "Lecture 3 · Effects of Cardiac Nerves",
"s": "A 30-year-old man has paroxysmal supraventricular tachycardia at 190/min. After an IV bolus of a drug, his ECG shows several seconds of high-grade AV block before sinus rhythm returns. The drug acts through which mechanism?",
"c": [
"A1 receptors increasing K⁺ efflux",
"Block of L-type Ca²⁺ channels for several hours",
"Block of β1 receptors on nodal cells",
"Selective block of If in the SA node",
"Block of fast Na⁺ channels in the His bundle"
],
"a": 0,
"e": "Adenosine activates inhibitory A1 receptors on the SA and AV nodes → ↑ outward K⁺ current (like ACh) → hyperpolarization → transient high-grade AV block. Its effect lasts seconds.",
"w": [
"",
"That describes verapamil, which acts longer.",
"That describes a β-blocker.",
"That describes ivabradine, which spares the AV node.",
"That is a Class I action."
]
},
{
"t": "Lecture 3 · Effects of Cardiac Nerves",
"s": "Which tissue shows a sympathetic effect but little or no direct parasympathetic effect, and why?",
"c": [
"Ventricles; vagal fibers reach atria and nodes",
"The SA node, because it lacks M2 receptors",
"The AV node, because it lacks β1 receptors",
"Atrial muscle, because it lacks Gi proteins",
"Purkinje fibers, because they lack adenylyl cyclase"
],
"a": 0,
"e": "Summary table: ventricular muscle — sympathetic ↑ contractility; parasympathetic minimal or no effect. The innervation pattern explains it: parasympathetic fibers supply the atria and nodes, sympathetic supply atria and ventricles.",
"w": [
"",
"The SA node has M2 receptors; vagal slows it.",
"The AV node has β1 receptors; sympathetic speeds conduction.",
"Atria have M2/Gi; vagal can reduce atrial contractility.",
"Not the reason taught."
]
},
{
"t": "Lecture 3 · Effects of Cardiac Nerves",
"s": "A patient's SA node recording shows the pacemaker potential starting at a more negative voltage, rising more slowly, and reaching the usual threshold later. Which combination of current changes produced this?",
"c": [
"↑ If, ↑ ICa-T and ↓ IK-ACh",
"↑ INa and ↑ ICa-L",
"↓ If, ↓ ICa-T and ↑ IK-ACh",
"↓ IK and ↑ ICa-L",
"↑ If only, with no change in K⁺ current"
],
"a": 2,
"e": "Parasympathetic effect on the pacemaker potential: ↓ ICa-T and ↓ If flatten phase 4, and ↑ IK-ACh hyperpolarizes the cell, so it starts lower. Threshold is reached later → (−) chronotropic.",
"w": [
"This is the sympathetic pattern.",
"Fast Na⁺ does not drive the nodal pacemaker potential.",
"",
"This would not hyperpolarize the cell.",
"↑ If would steepen phase 4."
]
},
{
"t": "Lecture 3 · Effects of Cardiac Nerves",
"s": "During exercise, a man's heart rate rises from 70 to 150/min and his stroke volume increases. Which single intracellular signal accounts for the increases in both rate and contractility?",
"c": [
"Falling cAMP from αi",
"Opening of IK-ACh channels",
"Rising cGMP from guanylyl cyclase",
"IP₃-mediated Ca²⁺ release via Gq",
"Rising cAMP activating PKA"
],
"a": 4,
"e": "NE → β1 → Gs → adenylyl cyclase → ↑ cAMP → PKA. PKA phosphorylates If and Ca²⁺ channels in the SA node (rate) and L-type Ca²⁺ channels plus SR proteins/phospholamban in ventricular muscle (contractility and relaxation).",
"w": [
"Falling cAMP is the vagal arm.",
"This slows the heart.",
"Not the cardiac β1 pathway.",
"That is the α1 pathway.",
""
]
},
{
"t": "Lecture 4 · The Cardiac Cycle",
"s": "A 66-year-old man has an echocardiogram after a myocardial infarction. Left ventricular end-diastolic volume is 160 mL and end-systolic volume is 104 mL. Which value best indicates his ejection fraction?",
"c": [
"35%",
"56%",
"65%",
"54%",
"25%"
],
"a": 0,
"e": "SV = EDV − ESV = 160 − 104 = 56 mL. EF = SV/EDV = 56/160 = 35%, which is reduced (normal about 55–70%) and indicates impaired contractility.",
"w": [
"",
"56 is the stroke volume in mL, not the EF.",
"65% would be ESV/EDV, the fraction left behind.",
"54% is not SV/EDV for these values.",
"25% understates the ratio 56/160."
]
},
{
"t": "Lecture 4 · The Cardiac Cycle",
"s": "During a cardiac catheterization, the pressure recorded in the left ventricle is falling rapidly and is 30 mm Hg, while aortic pressure is 95 mm Hg and left atrial pressure is 9 mm Hg. Which heart sound was most recently heard?",
"c": [
"S2",
"S1",
"S3",
"S4",
"An opening snap"
],
"a": 0,
"e": "LV pressure is falling and is below aortic pressure but still above LA pressure → isovolumetric relaxation. This phase begins with aortic (and pulmonic) valve closure, which produces S2.",
"w": [
"",
"S1 comes at the start of isovolumetric contraction, when LV pressure rises.",
"S3 occurs in rapid filling, after the mitral valve opens.",
"S4 occurs with atrial systole, at the end of diastole.",
"An opening snap would follow mitral opening, which has not happened yet."
]
},
{
"t": "Lecture 4 · The Cardiac Cycle",
"s": "A healthy volunteer's heart rate rises from 60/min to 150/min during exercise. Which phase of the cardiac cycle is shortened the most?",
"c": [
"Isovolumetric contraction",
"Rapid ventricular ejection",
"Reduced filling",
"Isovolumetric relaxation",
"Atrial systole"
],
"a": 2,
"e": "As heart rate rises, diastole shortens much more than systole. The longest phase, reduced filling (diastasis), is cut first. Because it adds little volume, EDV is largely preserved until very high rates.",
"w": [
"Isovolumetric contraction is brief and changes little.",
"Ejection time is relatively preserved.",
"",
"Isovolumetric relaxation is brief.",
"Atrial systole is preserved and becomes more important at high rates."
]
},
{
"t": "Lecture 4 · The Cardiac Cycle",
"s": "A 70-year-old woman has a pressure tracing from the aortic root. A small notch interrupts the downstroke of the curve. Which event coincides with this notch?",
"c": [
"Opening of the aortic valve",
"Closure of the aortic valve",
"Peak of rapid ejection",
"Closure of the mitral valve",
"Opening of the mitral valve"
],
"a": 1,
"e": "The dicrotic notch marks aortic valve closure and the end of ventricular systole. Blood briefly falls back toward the ventricle, snapping the valve shut, and then rebounds off it (dicrotic wave). It coincides with S2.",
"w": [
"Aortic opening is at the foot of the upstroke.",
"",
"Peak ejection is at the top of the curve.",
"Mitral closure occurs before the aortic upstroke.",
"Mitral opening occurs after isovolumetric relaxation, later than the notch."
]
},
{
"t": "Lecture 4 · The Cardiac Cycle",
"s": "A 52-year-old man is examined while his jugular venous pulse and ECG are recorded together. Which jugular wave immediately follows the P wave?",
"c": [
"The c wave, from tricuspid bulging",
"The v wave, from atrial filling",
"The x descent, from atrial relaxation",
"The a wave, from atrial contraction",
"The y descent, from tricuspid opening"
],
"a": 3,
"e": "Atrial depolarization (P wave) is followed by atrial contraction, which sends a retrograde pressure pulse up the valveless jugular vein: the a wave. The c wave follows the QRS (tricuspid bulging), and the v wave builds during late systole as the atrium fills.",
"w": [
"The c wave follows the QRS, in early ventricular contraction.",
"The v wave peaks in late systole, before the tricuspid opens.",
"The x descent follows the a and c waves.",
"",
"The y descent follows the v wave, after tricuspid opening."
]
},
{
"t": "Lecture 4 · The Cardiac Cycle",
"s": "A 34-year-old woman receives 1 L of IV saline. Her end-diastolic volume rises from 120 mL to 150 mL, while her end-systolic volume stays at 50 mL. Which change is most likely?",
"c": [
"Stroke volume decreases",
"Stroke volume increases",
"Contractility decreases",
"Ejection fraction decreases",
"Stroke volume is unchanged"
],
"a": 1,
"e": "More preload (↑EDV) with an unchanged ESV raises SV from 70 to 100 mL, the Frank–Starling effect. EF rises a little (58% → 67%) because the extra filling is all ejected, but contractility is unchanged.",
"w": [
"More filling against the same ESV raises SV.",
"",
"ESV is unchanged, so the ventricle still empties normally: contractility is unchanged.",
"EF = SV/EDV rises from about 58% to 67%, since SV grows and ESV is unchanged.",
"SV = EDV − ESV = 150 − 50 = 100 mL, up from 70 mL."
]
},
{
"t": "Lecture 4 · The Cardiac Cycle",
"s": "A 25-year-old man's left ventricular pressure is rising steeply while ventricular volume remains constant. Which pair of valve states is present?",
"c": [
"Mitral open and aortic closed",
"Mitral closed and aortic open",
"Mitral open and aortic open",
"Mitral closed and pulmonic open",
"Mitral closed and aortic closed"
],
"a": 4,
"e": "Pressure rising at constant volume is isovolumetric contraction: the mitral valve has closed (S1) and the aortic valve has not yet opened. It ends when LV pressure exceeds aortic pressure (≈ 80 mm Hg).",
"w": [
"An open mitral valve means filling, with rising volume.",
"An open aortic valve means ejection, with falling volume.",
"Both valves are never open together in a normal heart.",
"The pulmonic valve belongs to the right ventricle.",
""
]
},
{
"t": "Lecture 5 · Cardiac Output & Pressure-Volume Loops",
"s": "A 61-year-old man with dilated cardiomyopathy is started on a dobutamine infusion. Heart rate, end-diastolic volume and mean arterial pressure stay about the same. Compared with before the infusion, which change in his left ventricular pressure-volume loop is most likely?",
"c": [
"Larger EDV and larger stroke volume",
"Smaller ESV and larger stroke volume",
"Larger ESV and smaller stroke volume",
"Same width, shifted to the right",
"Lower peak systolic pressure"
],
"a": 1,
"e": "Step 1: dobutamine is a β1 agonist, so it raises contractility (positive inotropy).\nStep 2: preload (EDV) and afterload are unchanged, so the right side of the loop stays put.\nStep 3: a stronger ventricle ejects further at the same afterload, so the end-systolic point moves left: ESV falls and the loop gets wider (↑SV, ↑EF).",
"w": [
"EDV is unchanged; a larger EDV would mean higher preload.",
"",
"That is the pattern of reduced contractility.",
"A rightward shift at the same width means more preload, not inotropy.",
"Stronger ejection raises or keeps peak pressure; it doesn't lower it."
]
},
{
"t": "Lecture 5 · Cardiac Output & Pressure-Volume Loops",
"s": "A 70-kg man consumes 300 mL of O₂ per minute. Arterial O₂ content is 20 mL/dL and mixed venous O₂ content from the pulmonary artery is 15 mL/dL. What is his cardiac output?",
"c": [
"1.5 L/min",
"15 L/min",
"8.6 L/min",
"6 L/min",
"4 L/min"
],
"a": 3,
"e": "Fick principle: CO = O₂ consumption ÷ (arterial O₂ − mixed venous O₂).\nThe A–V difference is 20 − 15 = 5 mL/dL = 50 mL/L.\nCO = 300 mL/min ÷ 50 mL/L = 6 L/min.",
"w": [
"This divides 300 by 200 and forgets the A–V difference.",
"This uses the content in mL/dL as if it were mL/L.",
"This adds the two contents instead of subtracting them.",
"",
"This is not 300 divided by 50 mL/L."
]
},
{
"t": "Lecture 5 · Cardiac Output & Pressure-Volume Loops",
"s": "A 22-year-old man is stabbed and quickly loses about 1 L of blood. Before any reflexes act, how does his left ventricular pressure-volume loop change?",
"c": [
"Smaller EDV and smaller SV",
"Larger EDV and larger stroke volume",
"Higher peak systolic pressure",
"Smaller ESV at the same EDV",
"Wider loop with larger ESV"
],
"a": 0,
"e": "Step 1: losing blood lowers venous return, so ventricular filling falls.\nStep 2: lower filling = lower EDV = lower preload, so the bottom-right corner of the loop moves left.\nStep 3: by the Frank–Starling law, less stretch gives a weaker beat, so stroke volume falls: the loop is narrower.",
"w": [
"",
"That is what more venous return would do.",
"Less filling lowers, not raises, the pressure generated.",
"A smaller ESV at the same EDV means more contractility.",
"Less preload makes the loop narrower, not wider."
]
},
{
"t": "Lecture 5 · Cardiac Output & Pressure-Volume Loops",
"s": "In an experiment, a healthy subject receives phenylephrine, which raises aortic pressure. Reflex changes in heart rate and contractility are blocked. Compared with baseline, which change in the next few beats is expected?",
"c": [
"Smaller ESV and larger stroke volume",
"Smaller EDV with the same ESV",
"Ejection fraction rises",
"Isovolumetric contraction gets shorter",
"Larger ESV and smaller stroke volume"
],
"a": 4,
"e": "Step 1: phenylephrine is an α1 agonist, so it constricts arterioles and raises aortic pressure = higher afterload.\nStep 2: the aortic valve opens later at a higher pressure, and the ventricle can't shorten as far against it.\nStep 3: so ejection stops at a larger ESV. With EDV and contractility unchanged, stroke volume and EF fall.",
"w": [
"That pattern means more contractility or less afterload.",
"Afterload doesn't change EDV in the next beats; ESV rises.",
"EF falls because SV falls at the same EDV.",
"It gets longer, because pressure must climb higher to open the valve.",
""
]
},
{
"t": "Lecture 5 · Cardiac Output & Pressure-Volume Loops",
"s": "During a passive leg raise, a healthy person's end-diastolic volume rises and stroke volume rises with it, with no change in sympathetic tone. At the level of the cardiac muscle cell, what mainly explains the stronger beat?",
"c": [
"β1 receptors raise intracellular cAMP",
"More L-type Ca²⁺ channels open per beat",
"Myofilaments grow more Ca²⁺-sensitive",
"The SA node fires at a faster rate",
"Phospholamban releases its brake on SERCA"
],
"a": 2,
"e": "Step 1: more venous return stretches the ventricle, so sarcomeres start the beat longer.\nStep 2: this is the Frank–Starling law, which is intrinsic and needs no nerves.\nStep 3: longer sarcomeres have better actin–myosin overlap and troponin C binds Ca²⁺ more readily, so the same Ca²⁺ gives more force.",
"w": [
"That is sympathetic inotropy; sympathetic tone didn't change.",
"That is also a sympathetic, cAMP-driven effect.",
"",
"Heart rate doesn't change stroke volume this way.",
"That is a PKA effect after β1 stimulation."
]
},
{
"t": "Lecture 5 · Cardiac Output & Pressure-Volume Loops",
"s": "Two interventions raise left ventricular stroke work by the same amount. One raises mean aortic pressure, the other raises stroke volume. Which statement about myocardial O₂ use is correct?",
"c": [
"Volume work costs more O₂",
"Pressure work costs more O₂",
"Both cost exactly the same O₂",
"Neither changes O₂ use",
"Only volume work needs more O₂"
],
"a": 1,
"e": "Stroke work ≈ stroke volume × mean aortic pressure, so both changes raise external work equally.\nBut O₂ consumption tracks wall tension. Raising pressure raises tension much more than raising volume does.\nThat is why pressure work, as in hypertension or aortic stenosis, is far more costly in O₂ than volume work, as in exercise.",
"w": [
"Volume work is the cheaper kind.",
"",
"Wall tension, not just total work, sets O₂ use.",
"Both raise O₂ use; more work needs more ATP.",
"Both need more O₂, and pressure work needs the most."
]
},
{
"t": "Lecture 5 · Cardiac Output & Pressure-Volume Loops",
"s": "A patient's cardiac output is 4.2 L/min at a heart rate of 70/min. His left ventricular end-diastolic volume is 120 mL. What is his ejection fraction?",
"c": [
"58%",
"35%",
"71%",
"50%",
"60%"
],
"a": 3,
"e": "Step 1: SV = CO ÷ HR = 4200 mL ÷ 70 = 60 mL.\nStep 2: EF = SV ÷ EDV = 60 ÷ 120 = 50%.\nThis is mildly reduced; normal is about 55–70%.",
"w": [
"58% is the textbook normal, not this patient's value.",
"35% would need an SV of 42 mL.",
"71% would need an SV of 85 mL.",
"",
"60 is the stroke volume in mL, not the EF."
]
},
{
"t": "Lecture 5 · Cardiac Output & Pressure-Volume Loops",
"s": "A 30-year-old woman develops supraventricular tachycardia at 190/min and becomes light-headed and hypotensive. Her contractility is normal. Why has her cardiac output fallen despite the fast rate?",
"c": [
"Shortened diastole lowers EDV",
"Contractility falls at high rates",
"Afterload rises sharply",
"Ejection stops at a larger ESV",
"The atrial kick becomes too strong"
],
"a": 0,
"e": "Step 1: CO = SV × HR, so a faster rate should raise CO only if SV holds up.\nStep 2: diastole shortens much more than systole as heart rate rises, so filling time is cut.\nStep 3: less filling = lower EDV = lower preload, so SV falls by Frank–Starling. At 190/min, SV falls more than HR rises, so CO drops.",
"w": [
"",
"Faster rates actually raise contractility slightly, the treppe effect.",
"Nothing here raises aortic pressure.",
"Contractility is normal, so ESV isn't the problem.",
"Atrial systole is squeezed out, not strengthened."
]
},
{
"t": "Lecture 6 · Hemodynamics: Flow, Pressure & Resistance",
"s": "A 62-year-old man receives a norepinephrine infusion for septic shock. His cardiac output stays at 6 L/min while his mean arterial pressure rises from 54 to 78 mmHg. Right atrial pressure stays at 6 mmHg. By about what percentage did his total peripheral resistance rise?",
"c": [
"About 25%",
"About 44%",
"About 50%",
"About 75%",
"About 100%"
],
"a": 2,
"e": "Step 1: TPR = (MAP − RAP)/CO.\nStep 2: before, (54 − 6)/6 = 8. After, (78 − 6)/6 = 12 mmHg·min/L.\nStep 3: 12/8 = 1.5, a 50% rise from α₁-mediated arteriolar constriction.",
"w": [
"This forgets to subtract RAP or misreads the ratio.",
"This is (78 − 54)/54, ignoring RAP.",
"",
"Off by the RAP correction.",
"That would need TPR to double."
]
},
{
"t": "Lecture 6 · Hemodynamics: Flow, Pressure & Resistance",
"s": "A coronary arteriole dilates during exercise so that its radius increases by 20%. Perfusion pressure and blood viscosity do not change. By about how much does flow through the arteriole change?",
"c": [
"Increases about 1.2-fold",
"Increases about 1.4-fold",
"Increases about 4-fold",
"Increases about 2.1-fold",
"Decreases about 2.1-fold"
],
"a": 3,
"e": "Step 1: Poiseuille's law gives Q ∝ r⁴ when ΔP, η and L are fixed.\nStep 2: 1.2⁴ = 1.44 × 1.44 ≈ 2.07.\nStep 3: a 20% wider radius roughly doubles flow, which is why arterioles are such powerful flow regulators.",
"w": [
"That scales with r.",
"That scales with r².",
"That would need about a 41% rise in radius.",
"",
"Dilation raises flow."
]
},
{
"t": "Lecture 6 · Hemodynamics: Flow, Pressure & Resistance",
"s": "A 70-year-old man with severe peripheral artery disease has a femoral artery stenosis that cuts the lumen radius to one third of normal over a short segment. Which change best describes flow in the narrowed segment compared with the vessel just upstream?",
"c": [
"Lower velocity and laminar flow",
"Same velocity and laminar flow",
"Lower velocity and turbulence",
"Lower flow and lower velocity",
"Higher velocity and turbulence"
],
"a": 4,
"e": "Step 1: flow (Q) is the same through vessels in series, what goes in must come out.\nStep 2: v = Q/A, and the area falls to one ninth, so velocity rises about ninefold.\nStep 3: high velocity plus an abrupt change in geometry raises the Reynolds number, so flow turns turbulent and a bruit is heard.",
"w": [
"Smaller area at the same flow raises velocity.",
"Area has changed, so velocity cannot stay the same.",
"Velocity rises, not falls.",
"In series, the flow through each segment is the same.",
""
]
},
{
"t": "Lecture 6 · Hemodynamics: Flow, Pressure & Resistance",
"s": "Arterial compliance in a healthy 25-year-old is 2 mL/mmHg, and in an 80-year-old it is 1 mL/mmHg. Both have a stroke volume of 70 mL. Using PP ≈ SV/compliance, what is the expected pulse pressure in the 80-year-old?",
"c": [
"About 70 mmHg",
"About 35 mmHg",
"About 140 mmHg",
"About 50 mmHg",
"About 105 mmHg"
],
"a": 0,
"e": "Step 1: PP ≈ SV/C.\nStep 2: for the 25-year-old, 70/2 = 35 mmHg. For the 80-year-old, 70/1 = 70 mmHg.\nStep 3: halving compliance doubles pulse pressure, which is why stiff arteries cause isolated systolic hypertension.",
"w": [
"",
"This is the young patient's value.",
"This multiplies instead of dividing.",
"This does not follow from the numbers.",
"This is not SV/C."
]
},
{
"t": "Lecture 6 · Hemodynamics: Flow, Pressure & Resistance",
"s": "A 34-year-old woman with Graves disease has a heart rate of 118/min, warm moist skin and a blood pressure of 150/58 mmHg. Thyroid hormone has raised her cardiac output and dilated her peripheral arterioles. Which pair of changes best explains her wide pulse pressure?",
"c": [
"Lower stroke volume and higher TPR",
"Higher stroke volume and lower TPR",
"Lower compliance and higher TPR",
"Higher venous compliance alone",
"Lower stroke volume and lower TPR"
],
"a": 1,
"e": "Step 1: PP ≈ SV/compliance, so a bigger stroke volume raises systolic pressure.\nStep 2: diastolic pressure is set mainly by TPR, and peripheral vasodilation lets blood run off faster, so diastolic pressure falls.\nStep 3: a high systolic and low diastolic pressure give a wide pulse pressure in hyperthyroidism.",
"w": [
"Both changes would narrow pulse pressure.",
"",
"Higher TPR would raise diastolic pressure.",
"Venous compliance does not set arterial pulse pressure.",
"Lower stroke volume would lower systolic pressure."
]
},
{
"t": "Lecture 6 · Hemodynamics: Flow, Pressure & Resistance",
"s": "Organ beds A, B and C are arranged in parallel with resistances of 20, 20 and 10 units. If organ C is removed and mean arterial pressure is held constant, what happens to total flow through the remaining circuit?",
"c": [
"It falls to one quarter",
"It stays the same",
"It falls to half",
"It falls to one third",
"It rises to double"
],
"a": 2,
"e": "Step 1: before, 1/R = 1/20 + 1/20 + 1/10 = 0.2, so R = 5.\nStep 2: after, 1/R = 1/20 + 1/20 = 0.1, so R = 10.\nStep 3: Q = ΔP/R, and resistance doubled at the same pressure, so flow halves. Losing a parallel bed raises TPR.",
"w": [
"Resistance only doubled.",
"Resistance changed, so flow must change.",
"",
"Resistance did not triple.",
"Removing a parallel path raises resistance."
]
},
{
"t": "Lecture 6 · Hemodynamics: Flow, Pressure & Resistance",
"s": "A 45-year-old man has a blood pressure of 130/85 mmHg and a cardiac output of 6 L/min. His right atrial pressure is near 0. What is his total peripheral resistance?",
"c": [
"About 6 mmHg·min/L",
"About 14 mmHg·min/L",
"About 22 mmHg·min/L",
"About 17 mmHg·min/L",
"About 600 mmHg·min/L"
],
"a": 3,
"e": "Step 1: MAP ≈ DP + ⅓PP = 85 + 15 = 100 mmHg.\nStep 2: TPR = MAP/CO = 100/6 ≈ 17 mmHg·min/L.",
"w": [
"This is the cardiac output.",
"This uses diastolic pressure alone.",
"This uses systolic pressure alone.",
"",
"This multiplies MAP by CO."
]
},
{
"t": "Lecture 6 · Hemodynamics: Flow, Pressure & Resistance",
"s": "A 3-year-old boy with sickle cell anemia has a hemoglobin of 7 g/dL. A soft systolic murmur is heard over the precordium. Two weeks after a blood transfusion raises his hemoglobin to 10 g/dL, the murmur is fainter. Which change explains the softer murmur?",
"c": [
"Lower viscosity lowers the Reynolds number",
"Higher velocity raises the Reynolds number",
"Larger aortic diameter raises turbulence",
"Higher compliance narrows the pulse pressure",
"Higher viscosity lowers the Reynolds number"
],
"a": 4,
"e": "Step 1: anemia lowers viscosity and raises cardiac output, both of which raise the Reynolds number and cause a flow murmur.\nStep 2: transfusion raises hematocrit, so viscosity rises and the compensatory high output falls.\nStep 3: a lower Reynolds number means less turbulence, so the murmur softens.",
"w": [
"Viscosity rises after transfusion.",
"Velocity falls as output normalizes.",
"Aortic diameter does not change.",
"Pulse pressure does not create the murmur.",
""
]
},
{
"t": "Lecture 7 · Cardiac & Vascular Function Curves",
"s": "A 72-year-old woman is admitted with a large anterior MI. She is started on a dobutamine infusion. Compared with before the infusion, which set of changes is expected at her new steady state?",
"c": [
"↑ CO, ↑ RAP, ↑ venous return",
"↓ CO, ↑ RAP, ↓ venous return",
"↓ CO, ↓ RAP, ↓ venous return",
"↑ CO, ↓ RAP, ↑ venous return",
"↑ CO, no change in RAP or return"
],
"a": 3,
"e": "Step 1: dobutamine is a β1 agonist and a positive inotrope, so the cardiac function curve shifts up.\nStep 2: the stronger ventricle empties more fully, so less blood is left behind and RAP falls.\nStep 3: a lower RAP widens the MSFP − RAP gradient, so venous return rises to match the higher CO.",
"w": [
"A higher RAP with higher output fits added volume.",
"Lower output with higher RAP fits negative inotropy.",
"Both falling fits blood loss.",
"",
"RAP changes when the cardiac curve moves."
]
},
{
"t": "Lecture 7 · Cardiac & Vascular Function Curves",
"s": "A 19-year-old man is stabbed in the abdomen and loses about 1.5 L of blood. Before any treatment, which change in the function curves best explains his hypotension?",
"c": [
"VR curve shifts left in parallel",
"VR curve rotates counterclockwise",
"Cardiac curve shifts downward",
"Cardiac curve shifts upward",
"VR curve shifts right in parallel"
],
"a": 0,
"e": "Step 1: hemorrhage lowers blood volume.\nStep 2: lower volume lowers mean systemic filling pressure, the x-intercept of the venous return curve.\nStep 3: the curve shifts down and left with the same slope, so it meets the cardiac curve at a lower RAP and a lower CO.",
"w": [
"",
"Rotation is a TPR effect.",
"Contractility is not the primary problem.",
"Contractility has not risen.",
"That follows a transfusion."
]
},
{
"t": "Lecture 7 · Cardiac & Vascular Function Curves",
"s": "A researcher stops the heart of an anesthetized dog and measures the pressure that equalizes throughout the circulation within seconds. Which manipulation would raise this pressure?",
"c": [
"Infusing a pure arteriolar dilator",
"Infusing a negative inotrope",
"Infusing 1 L of whole blood",
"Infusing a venodilator",
"Removing 500 mL of blood"
],
"a": 2,
"e": "Step 1: the pressure measured with the heart stopped is mean systemic filling pressure.\nStep 2: MSFP depends on blood volume and venous tone, not on arterioles or the heart.\nStep 3: adding blood raises MSFP and shifts the venous return curve up in parallel.",
"w": [
"Arterioles do not set MSFP.",
"The heart is stopped, and inotropy does not set MSFP.",
"",
"Venodilation lowers MSFP.",
"Removing blood lowers MSFP."
]
},
{
"t": "Lecture 7 · Cardiac & Vascular Function Curves",
"s": "A 30-year-old man undergoing knee surgery under spinal anesthesia becomes hypotensive. His central venous pressure falls from 6 to 1 mmHg. Which treatment directly corrects the mechanism of his low cardiac output?",
"c": [
"IV furosemide to cut volume",
"IV nitroglycerin infusion",
"IV metoprolol for rate control",
"IV hydralazine for afterload",
"IV fluid with phenylephrine"
],
"a": 4,
"e": "Step 1: spinal anesthesia blocks sympathetic outflow, so veins dilate and pool blood.\nStep 2: lower venous tone lowers MSFP, shifting the venous return curve down, so RAP and CO fall.\nStep 3: fluid raises volume and phenylephrine restores venous and arterial tone, raising MSFP and venous return.",
"w": [
"A diuretic lowers volume further.",
"Nitroglycerin is a venodilator.",
"A β-blocker lowers CO.",
"Hydralazine lowers TPR without restoring MSFP.",
""
]
},
{
"t": "Lecture 7 · Cardiac & Vascular Function Curves",
"s": "A 45-year-old man on long-term hemodialysis through a large forearm arteriovenous fistula has a resting cardiac output of 9 L/min. His RAP is normal. Which pair of changes in the function curves best explains these findings?",
"c": [
"Only the VR curve shifts right",
"Both curves move upward",
"Only the cardiac curve shifts up",
"Both curves shift downward",
"VR curve rotates down alone"
],
"a": 1,
"e": "Step 1: a fistula lets blood bypass the arterioles, lowering TPR.\nStep 2: lower TPR rotates the venous return curve upward with the same MSFP, and lower afterload lifts the cardiac curve.\nStep 3: with both curves raised, they meet at a much higher CO with RAP about unchanged.",
"w": [
"That would raise RAP.",
"",
"That would lower RAP.",
"His output is high, not low.",
"That follows a rise in TPR."
]
},
{
"t": "Lecture 7 · Cardiac & Vascular Function Curves",
"s": "A healthy volunteer has a mean systemic filling pressure of 7 mmHg, a right atrial pressure of 2 mmHg and a resistance to venous return of 1.25 mmHg·min/L. After a rapid saline infusion, MSFP rises to 10 mmHg and RAP rises to 3 mmHg. What is the change in venous return?",
"c": [
"From 5 to 7 L/min",
"From 4 to 8 L/min",
"From 5.6 to 4 L/min",
"From 4 to 5.6 L/min",
"From 4 to 10 L/min"
],
"a": 3,
"e": "Step 1: VR = (MSFP − RAP)/RVR.\nStep 2: before, (7 − 2)/1.25 = 4 L/min. After, (10 − 3)/1.25 = 5.6 L/min.\nStep 3: the rise in MSFP outweighs the small rise in RAP, so venous return and cardiac output both rise.",
"w": [
"This ignores the resistance of 1.25.",
"This ignores the rise in RAP.",
"This reverses the direction.",
"",
"This uses MSFP alone."
]
},
{
"t": "Lecture 7 · Cardiac & Vascular Function Curves",
"s": "A 64-year-old man with septic shock is started on norepinephrine, which raises his total peripheral resistance. His contractility and blood volume do not change. Which change is expected at his new operating point?",
"c": [
"Lower CO, similar RAP",
"Higher CO, similar RAP",
"Lower CO, much higher RAP",
"Higher CO, lower RAP",
"Lower CO, much lower RAP"
],
"a": 0,
"e": "Step 1: higher TPR raises afterload, shifting the cardiac curve down.\nStep 2: higher TPR also rotates the venous return curve down without changing MSFP.\nStep 3: both curves fall together, so the operating point moves to a lower CO at about the same RAP.",
"w": [
"",
"Higher TPR lowers output when nothing else changes.",
"A large RAP rise fits pump failure.",
"That pattern fits positive inotropy.",
"A large RAP fall fits volume loss."
]
},
{
"t": "Lecture 7 · Cardiac & Vascular Function Curves",
"s": "A 58-year-old man has an acute MI that leaves his left ventricle hypokinetic. Within hours his jugular venous pressure is elevated and his cardiac output is low. Over the next few days, his kidneys retain salt and water. What is the effect of this fluid retention on his operating point?",
"c": [
"CO falls further while RAP falls",
"CO rises and RAP falls to normal",
"CO rises some, RAP rises more",
"CO is unchanged while RAP falls",
"CO falls further while RAP rises"
],
"a": 2,
"e": "Step 1: the MI shifts the cardiac curve down, lowering CO and raising RAP.\nStep 2: fluid retention raises blood volume and MSFP, shifting the venous return curve up.\nStep 3: the new crossing on the depressed cardiac curve is at a higher CO but an even higher RAP, which is why edema and congestion follow.",
"w": [
"More volume raises CO and RAP.",
"RAP rises with more volume.",
"",
"More volume does not lower RAP.",
"More volume raises CO on the depressed curve."
]
},
{
"t": "Lecture 8 · Regulation of Blood Pressure",
"s": "A 68-year-old man is found to have a heart rate of 44/min while shaving with a tight collar. The episodes stop when he wears loose shirts. Which afferent pathway is responsible?",
"c": [
"Aortic arch via CN X",
"Carotid body via CN X",
"Carotid sinus via CN IX",
"Atrial receptors via CN X",
"Aortic body via CN IX"
],
"a": 2,
"e": "Step 1: pressure on the neck stretches the carotid sinus as if blood pressure were high.\nStep 2: carotid sinus afferents travel in CN IX to the NTS.\nStep 3: the medulla raises vagal and lowers sympathetic outflow, slowing the heart. This is carotid sinus hypersensitivity.",
"w": [
"The aortic arch is not pressed by a collar.",
"The carotid body is a chemoreceptor and uses CN IX.",
"",
"Atrial receptors sense volume.",
"Aortic bodies use CN X."
],
"fig": [
"figs/crs/bp-baro-arc",
"figs/crs/bp-baro-panels"
]
},
{
"t": "Lecture 8 · Regulation of Blood Pressure",
"s": "A 25-year-old man loses 1 L of blood in a car crash. Within 30 seconds, which set of changes occurs?",
"c": [
"↑ Baroreceptor firing, ↓ HR, ↓ TPR",
"↓ Baroreceptor firing, ↓ HR, ↓ TPR",
"↑ Baroreceptor firing, ↑ HR, ↑ TPR",
"↓ Baroreceptor firing, ↑ HR, ↓ TPR",
"↓ Baroreceptor firing, ↑ HR, ↑ TPR"
],
"a": 4,
"e": "Step 1: blood loss lowers arterial pressure and stretch at the carotid sinus and aortic arch.\nStep 2: baroreceptor firing falls, so sympathetic outflow rises and vagal outflow falls.\nStep 3: heart rate, contractility and arteriolar tone rise, raising CO and TPR to restore pressure.",
"w": [
"That is the response to hypertension.",
"HR and TPR rise.",
"Firing falls in hypotension.",
"TPR rises from vasoconstriction.",
""
],
"fig": [
"figs/crs/bp-baro-hypo",
"figs/crs/bp-baro-ans"
]
},
{
"t": "Lecture 8 · Regulation of Blood Pressure",
"s": "A 70-year-old man with chronic hypertension has a stable blood pressure of 165/95 mmHg despite intact baroreceptors. Why don't his baroreceptors lower his pressure toward normal?",
"c": [
"They reset to the new level",
"They are no longer stretched",
"They detect only hypotension",
"They send no signals to the NTS",
"They raise sympathetic outflow"
],
"a": 0,
"e": "Baroreceptors adapt within a few days of a sustained pressure change. They then defend the new level instead of the old one, which is why long-term pressure is set by renal control of volume through RAAS and ANP.",
"w": [
"",
"They are stretched at the new level.",
"They sense rises and falls.",
"Signaling continues after resetting.",
"High firing lowers sympathetic outflow."
],
"fig": [
"figs/crs/bp-short-long"
]
},
{
"t": "Lecture 8 · Regulation of Blood Pressure",
"s": "A 60-year-old man with COPD has a PaO2 of 50 mmHg. Through peripheral chemoreceptors, which change in sympathetic activity and blood pressure is expected?",
"c": [
"Sympathetic down, pressure down",
"Sympathetic up, pressure up",
"Sympathetic up, pressure down",
"Sympathetic down, pressure up",
"No change in either"
],
"a": 1,
"e": "A PaO2 below 60 mmHg activates carotid and aortic body chemoreceptors. They excite the pressor and cardioaccelerator zones of the vasomotor center, raising sympathetic tone, TPR, CO and pressure, along with breathing.",
"w": [
"Opposite.",
"",
"Higher sympathetic tone raises pressure.",
"Pressure rises from sympathetic drive.",
"Hypoxemia activates the reflex."
],
"fig": [
"figs/crs/bp-chemo"
]
},
{
"t": "Lecture 8 · Regulation of Blood Pressure",
"s": "A 55-year-old woman with heart failure is started on a drug. Over the next week her plasma renin rises, angiotensin I rises, angiotensin II falls and aldosterone falls. Which drug was started?",
"c": [
"Enalapril",
"Losartan",
"Spironolactone",
"Metoprolol",
"Hydrochlorothiazide"
],
"a": 0,
"e": "Step 1: Ang I rising while Ang II falls means the block is at ACE.\nStep 2: losing Ang II removes feedback on renin, so renin and Ang I rise.\nStep 3: less Ang II means less aldosterone. Enalapril is an ACE inhibitor.",
"w": [
"",
"An ARB raises Ang II.",
"Spironolactone raises aldosterone.",
"β-blockers lower renin.",
"Thiazides raise renin but not by blocking ACE."
],
"fig": [
"figs/crs/bp-raas-drugs",
"figs/crs/bp-raas-hack"
]
},
{
"t": "Lecture 8 · Regulation of Blood Pressure",
"s": "A 72-year-old man with hypertension and peripheral artery disease is started on lisinopril. A week later his serum creatinine has risen from 1.1 to 2.6 mg/dL. Imaging is most likely to show which finding?",
"c": [
"Unilateral stenosis with a normal kidney",
"Bilateral ureteral obstruction",
"Polycystic kidneys",
"Bilateral renal artery stenosis",
"Normal renal arteries"
],
"a": 3,
"e": "Step 1: an abrupt creatinine rise after starting an ACE inhibitor suggests GFR depended on Ang II.\nStep 2: in bilateral stenosis, Ang II constricts the efferent arteriole to hold up glomerular pressure.\nStep 3: removing it drops glomerular pressure and GFR, causing AKI.",
"w": [
"The normal kidney keeps GFR up.",
"Obstruction is not linked to ACE inhibitors.",
"Not the classic cause.",
"",
"A normal kidney tolerates ACE inhibition."
],
"fig": [
"figs/crs/bp-ras-tx",
"figs/crs/bp-ras-zones"
]
},
{
"t": "Lecture 8 · Regulation of Blood Pressure",
"s": "A 45-year-old woman receives a rapid 2 L saline infusion. Which hormone change helps return her blood volume to normal?",
"c": [
"ANP falls, renin rises",
"ANP rises, renin falls",
"ANP rises, renin rises",
"ANP falls, aldosterone rises",
"Renin rises, ADH rises"
],
"a": 1,
"e": "Step 1: the saline stretches the atria.\nStep 2: atrial myocytes release ANP.\nStep 3: ANP causes vasodilation, natriuresis and diuresis and lowers renin and aldosterone, so volume and pressure fall.",
"w": [
"Volume expansion raises ANP.",
"",
"Renin falls.",
"Aldosterone falls.",
"Both fall with volume expansion."
],
"fig": [
"figs/crs/bp-anp",
"figs/crs/bp-anp-steps"
]
},
{
"t": "Lecture 8 · Regulation of Blood Pressure",
"s": "A 40-year-old man has a low-sodium diet for two weeks. Which signal at the kidney increases renin release?",
"c": [
"More stretch of the afferent arteriole",
"More ANP acting on JG cells",
"Less NaCl sensed at the macula densa",
"Less β1 stimulation of JG cells",
"More Ang II acting on JG cells"
],
"a": 2,
"e": "Less dietary sodium lowers NaCl delivery to the macula densa, which signals the JG cells to release renin. Renin then raises Ang II and aldosterone to retain Na⁺.",
"w": [
"More stretch lowers renin.",
"ANP lowers renin.",
"",
"Less β1 lowers renin.",
"Ang II lowers renin by feedback."
],
"fig": [
"figs/crs/bp-md-jg",
"figs/crs/bp-raas"
]
},
{
"t": "Lecture 9 · ECG Essentials Part 1",
"s": "A 66-year-old man with end-stage renal disease misses two dialysis sessions. His ECG shows tall, narrow T waves and a widening QRS. Which change in his myocytes best explains the QRS change?",
"c": [
"Hyperpolarization of the resting potential",
"A prolonged plateau from more Ca²⁺ influx",
"Faster AV nodal conduction from vagal withdrawal",
"Delayed repolarization of the papillary muscles",
"Na⁺ channel inactivation at a less negative rest"
],
"a": 4,
"e": "High extracellular K⁺ makes the resting potential less negative, which inactivates fast Na⁺ channels. Phase 0 slows, conduction slows, and the QRS widens. Peaked T waves come first from faster repolarization.",
"w": [
"High K⁺ depolarizes, not hyperpolarizes, the membrane.",
"Hyperkalemia shortens rather than prolongs repolarization.",
"AV conduction affects PR, not QRS width.",
"That gives U waves, as in hypokalemia.",
""
],
"fig": [
"figs/crs/ecg-twave"
]
},
{
"t": "Lecture 9 · ECG Essentials Part 1",
"s": "An ECG is recorded at standard settings. The QT interval measures 11 small squares and the R-R interval 20 small squares. Which statement is correct?",
"c": [
"QT is 0.22 s and heart rate is 150/min",
"QT is 2.2 s and heart rate is 30/min",
"QT is 0.44 s and heart rate is 75/min",
"QT is 0.44 s and heart rate is 150/min",
"QT is 0.11 s and heart rate is 75/min"
],
"a": 2,
"e": "At 25 mm/s each small square = 0.04 s, so QT = 11 × 0.04 = 0.44 s, slightly prolonged for a rate of 75. Heart rate = 1500 ÷ 20 = 75/min.",
"w": [
"This uses 0.02 s per square, the value at 50 mm/s.",
"This uses large-square time for small squares.",
"",
"1500 ÷ 20 = 75, not 150.",
"This forgets to multiply by 0.04 s."
],
"fig": [
"figs/crs/ecg-paper",
"figs/crs/ecg-qt-rr"
]
},
{
"t": "Lecture 9 · ECG Essentials Part 1",
"s": "A patient's QRS is tall and upright in lead I and nearly equally positive and negative in aVF. Where does the mean QRS vector point?",
"c": [
"Close to +90°",
"Close to +120°",
"Close to −90°",
"Close to +180°",
"Close to 0°"
],
"a": 4,
"e": "A lead is isoelectric when the vector is perpendicular to it. aVF lies at +90°, so the vector is near 0° or 180°. Lead I (0°) is strongly positive, so the vector points toward 0°.",
"w": [
"+90° would be tallest in aVF and isoelectric in lead I.",
"+120° would be negative in lead I.",
"−90° would be deeply negative in aVF.",
"+180° would be negative in lead I.",
""
],
"fig": [
"figs/crs/ecg-einthoven",
"figs/crs/ecg-deflection"
]
},
{
"t": "Lecture 9 · ECG Essentials Part 1",
"s": "A 63-year-old woman has 2 hours of chest pain. ST elevation is present in V1–V4. Which region of the heart is injured?",
"c": [
"Septum and anterior wall",
"The inferior wall only",
"The lateral wall alone",
"The right atrial wall",
"The true posterior wall only"
],
"a": 0,
"e": "V1–V2 view the septum and V3–V4 the anterior wall, so ST elevation in V1–V4 means an anteroseptal STEMI.",
"w": [
"",
"Inferior injury shows in II, III and aVF.",
"Lateral injury shows in I, aVL, V5 and V6.",
"No lead group isolates the right atrium.",
"Posterior injury shows as reciprocal changes, not ST elevation in V1–V4."
],
"fig": [
"figs/crs/ecg-precordial",
"figs/crs/ecg-stemi"
]
},
{
"t": "Lecture 9 · ECG Essentials Part 1",
"s": "During an exercise stress test, a 55-year-old man develops chest pain. His ST segments become depressed in V4–V6 and recover with rest. Why is the ST segment depressed?",
"c": [
"Injury current from ischemic tissue",
"Faster repolarization from high K⁺",
"Slowed conduction through the AV node",
"Unmasking of atrial repolarization",
"Necrosis of the full ventricular wall"
],
"a": 0,
"e": "Ischemic subendocardial cells stay partly depolarized, so injury current flows between them and healthy cells. That shifts the ST segment downward during demand ischemia. Elevation suggests transmural injury.",
"w": [
"",
"This would peak the T wave.",
"This would lengthen the PR interval.",
"Atrial repolarization is hidden in the QRS, not in ST.",
"Transmural injury gives ST elevation, and his change resolved."
],
"fig": [
"figs/crs/ecg-injury-current"
]
},
{
"t": "Lecture 9 · ECG Essentials Part 1",
"s": "A 19-year-old athlete has a resting PR interval of 0.22 s. After jogging in place for 2 minutes, his heart rate rises and the PR interval falls to 0.16 s. What best explains the resting finding?",
"c": [
"High vagal tone slowing the AV node",
"Fibrosis of the His–Purkinje system",
"An accessory pathway around the AV node",
"Left atrial enlargement from training",
"Hypokalemia from heavy sweating"
],
"a": 0,
"e": "Vagal tone slows AV nodal conduction and lengthens the PR. Exercise withdraws vagal tone and adds sympathetic drive, so the PR shortens. This is a benign, functional first-degree pattern.",
"w": [
"",
"Fibrosis would not reverse with exercise.",
"An accessory pathway shortens, not lengthens, the PR.",
"Atrial size changes the P wave, not the AV delay.",
"Low K⁺ affects T and U waves."
],
"fig": [
"figs/crs/ecg-pr-interval"
]
},
{
"t": "Lecture 9 · ECG Essentials Part 1",
"s": "Which ECG interval is the best index of total ventricular electrical systole?",
"c": [
"The PR interval",
"The PQ segment",
"The ST segment",
"The QT interval",
"The R-R interval"
],
"a": 3,
"e": "The QT interval runs from QRS onset to the end of the T wave, so it covers ventricular depolarization plus repolarization. It is normally about 0.25–0.43 s, and it lengthens in ischemia and with QT-prolonging drugs.",
"w": [
"PR is AV conduction time.",
"PQ is the period after atrial depolarization.",
"ST is only the plateau, not depolarization plus repolarization.",
"",
"R-R is the whole cardiac cycle."
],
"fig": [
"figs/crs/ecg-qt-rr"
]
},
{
"t": "Lecture 9 · ECG Essentials Part 1",
"s": "A man with long-standing aortic stenosis has a thick left ventricle. On his ECG, which change is most expected?",
"c": [
"Tall, peaked T waves in all leads",
"Tall QRS in the lateral leads",
"A prolonged PR interval of 0.28 s",
"Prominent U waves after each T",
"Absent P waves before each QRS"
],
"a": 1,
"e": "Pressure overload from aortic stenosis causes concentric LV hypertrophy. More muscle depolarizes at once, so QRS voltage increases, most visibly in the leads facing the LV (lateral leads).",
"w": [
"Peaked T waves suggest hyperkalemia.",
"",
"Hypertrophy does not slow AV conduction.",
"U waves suggest hypokalemia.",
"Absent P waves suggest atrial fibrillation."
],
"fig": [
"figs/crs/ecg-qrs"
]
},
{
"t": "Lecture 10 · ECG Part 2: Blocks & Arrhythmias",
"s": "A 70-year-old man has an irregularly irregular pulse of 132/min and no discrete P waves. He has hypertension and diabetes. Which therapy most reduces his risk of stroke?",
"c": [
"A rate-control drug such as metoprolol",
"Anticoagulation such as apixaban",
"Intravenous magnesium sulfate",
"A permanent ventricular pacemaker",
"Intravenous atropine bolus"
],
"a": 1,
"e": "Atrial fibrillation causes stasis and clot formation in the atria, which can embolize as a stroke. Anticoagulation (warfarin or a DOAC) prevents this. Rate and rhythm control treat symptoms.",
"w": [
"Rate control treats symptoms but does not prevent emboli.",
"",
"Magnesium treats torsades de pointes.",
"Pacing treats high-grade AV block.",
"Atropine speeds AV conduction and the rate."
],
"fig": [
"figs/crs/ecg-afib",
"figs/crs/ecg-afib-filter"
]
},
{
"t": "Lecture 10 · ECG Part 2: Blocks & Arrhythmias",
"s": "A rhythm strip shows atrial waves at 300/min in a sawtooth pattern and regular QRS complexes at 150/min. Which conduction ratio is present?",
"c": [
"2:1",
"1:1",
"3:1",
"4:1",
"Variable"
],
"a": 0,
"e": "In atrial flutter the AV node cannot conduct every 300/min atrial wave. 300 ÷ 150 = 2, so every other F wave conducts: 2:1 flutter.",
"w": [
"",
"1:1 conduction would give a ventricular rate of 300/min.",
"3:1 would give 100/min.",
"4:1 would give 75/min.",
"A variable ratio would make the ventricular rhythm irregular."
],
"fig": [
"figs/crs/ecg-flutter"
]
},
{
"t": "Lecture 10 · ECG Part 2: Blocks & Arrhythmias",
"s": "A 68-year-old woman has a slow pulse. Her ECG shows P waves that march through regularly, QRS complexes that march through at a different regular rate, and P waves landing on T waves. What is the next best step?",
"c": [
"Observation only",
"Anticoagulation",
"Catheter ablation of the isthmus",
"Pacemaker placement",
"IV magnesium sulfate"
],
"a": 3,
"e": "Regular P waves and regular QRS complexes with no relationship between them is third-degree AV block. No atrial impulse reaches the ventricles, so a slow escape rhythm drives them, and a pacemaker is needed.",
"w": [
"Complete heart block is life-threatening.",
"There is no AF or flutter.",
"Ablation treats atrial flutter.",
"",
"Magnesium treats torsades de pointes."
],
"fig": [
"figs/crs/ecg-3rd-degree"
]
},
{
"t": "Lecture 10 · ECG Part 2: Blocks & Arrhythmias",
"s": "A patient's strip shows PR intervals of 0.20, 0.26 and 0.32 s, then a P wave with no QRS, and the pattern repeats. Where is the block most likely?",
"c": [
"The bundle of His",
"The bundle branches",
"The AV node",
"The SA node",
"The Purkinje network"
],
"a": 2,
"e": "Progressive PR lengthening before a dropped beat is Mobitz I (Wenckebach). The block is usually within the AV node, it is usually benign, and atropine tends to improve it.",
"w": [
"His-level block gives Mobitz II with a constant PR.",
"Bundle branch block widens the QRS without this pattern.",
"",
"SA node problems change P-wave timing.",
"Purkinje block does not cause progressive PR lengthening."
],
"fig": [
"figs/crs/ecg-mobitz1"
]
},
{
"t": "Lecture 10 · ECG Part 2: Blocks & Arrhythmias",
"s": "A 34-year-old woman takes ondansetron for nausea and azithromycin for pneumonia. She faints, and her monitor shows polymorphic VT with twisting QRS peaks. Which underlying change made this possible?",
"c": [
"Faster AV nodal conduction",
"Shortened ventricular action potentials",
"Complete AV dissociation",
"Chaotic atrial depolarization",
"Prolonged ventricular repolarization"
],
"a": 4,
"e": "Ondansetron and macrolides both block K⁺ currents and prolong repolarization (long QT). Prolonged repolarization allows early afterdepolarizations that trigger torsades de pointes.",
"w": [
"AV conduction does not cause torsades.",
"Torsades needs prolonged, not shortened, repolarization.",
"AV dissociation is third-degree block.",
"That is atrial fibrillation.",
""
],
"fig": [
"figs/crs/ecg-torsades",
"figs/crs/ecg-longqt-torsades"
]
},
{
"t": "Lecture 10 · ECG Part 2: Blocks & Arrhythmias",
"s": "A 50-year-old man has chest pain at rest. His ECG shows ST depression in V5–V6. His first troponin is elevated. Which statement about his infarct is correct?",
"c": [
"It involves the full wall thickness",
"It shows no myocyte necrosis at all",
"It comes from a complete occlusion",
"It mainly involves subendocardium",
"It needs a permanent pacemaker"
],
"a": 3,
"e": "ST depression without elevation plus raised troponin is an NSTEMI, a subendocardial infarct from a partial occlusion.",
"w": [
"Transmural infarction gives ST elevation.",
"Raised troponin means necrosis.",
"Complete occlusion typically gives a STEMI.",
"",
"Pacing is for AV block, not NSTEMI."
],
"fig": [
"figs/crs/ecg-stemi-nstemi"
]
},
{
"t": "Lecture 10 · ECG Part 2: Blocks & Arrhythmias",
"s": "A regular rhythm strip has 5 small squares between R waves, with a P wave before each QRS. What is the rate, and what is the rhythm?",
"c": [
"60/min, a normal sinus rhythm",
"300/min, too fast for sinus",
"100/min, a borderline sinus",
"150/min, a sinus tachycardia",
"30/min, a sinus bradycardia"
],
"a": 1,
"e": "HR = 1500 ÷ 5 = 300/min. Sinus rhythms rarely exceed about 200/min, so a P-like wave at 300/min should make you think of flutter waves rather than sinus P waves.",
"w": [
"60/min would need 25 small squares.",
"",
"100/min would need 15 small squares.",
"150/min would need 10 small squares.",
"30/min would need 50 small squares."
],
"fig": [
"figs/crs/ecg-paper"
]
},
{
"t": "Lecture 10 · ECG Part 2: Blocks & Arrhythmias",
"s": "A newborn's sibling died suddenly. The newborn fails the hearing screen, and his ECG shows a long QT interval. Both parents have normal hearing and normal ECGs. Which inheritance pattern fits?",
"c": [
"Autosomal dominant form",
"X-linked recessive",
"Autosomal recessive",
"Mitochondrial DNA",
"X-linked dominant"
],
"a": 2,
"e": "Long QT with congenital sensorineural deafness is Jervell and Lange-Nielsen syndrome, which is autosomal recessive, so unaffected carrier parents are expected.",
"w": [
"Dominant long QT (Romano-Ward) spares hearing and an affected parent is expected.",
"Neither classic long QT syndrome is X-linked.",
"",
"Mitochondrial inheritance does not fit this syndrome.",
"Neither classic long QT syndrome is X-linked."
],
"fig": [
"figs/crs/ecg-longqt-torsades"
]
},
{
"t": "Lecture 11 · Microcirculation, Lymphatics & Edema",
"s": "A 45-year-old woman develops swelling of both legs after starting amlodipine for hypertension. Serum albumin is normal and there is no proteinuria. Arteriolar dilation has raised the pressure inside her leg capillaries. Which Starling change explains her edema?",
"c": [
"Decreased plasma oncotic pressure",
"Raised capillary hydrostatic pressure",
"Obstruction of the lymphatic drainage",
"Decreased interstitial oncotic pressure",
"Increased capillary wall permeability"
],
"a": 1,
"e": "Precapillary arteriolar dilation transmits more arterial pressure into the capillaries, raising Pc and filtration beyond what lymph can clear. Albumin and permeability are normal.\n\nTakeaway: Arteriolar dilators cause edema by raising capillary hydrostatic pressure.",
"w": [
"Her albumin is normal.",
"",
"Lymphatics are intact.",
"Less interstitial protein would oppose edema.",
"Nothing damages the endothelium."
],
"fig": [
"figs/crs/mc-starling"
],
"viz": false
},
{
"t": "Lecture 11 · Microcirculation, Lymphatics & Edema",
"s": "A capillary bed has Pc 28, πp 26, Pif −2 and πif 6 mmHg. A drug then raises Pif to +4 mmHg without changing anything else. What is the new net filtration pressure?",
"c": [
"4 mmHg favoring filtration",
"16 mmHg favoring filtration",
"4 mmHg favoring absorption",
"0 mmHg, no net movement",
"10 mmHg favoring filtration"
],
"a": 0,
"e": "NFP = (Pc + πif) − (πp + Pif) = (28 + 6) − (26 + 4) = 34 − 30 = +4 mmHg. Before the drug it was 34 − 24 = +10 mmHg; a positive interstitial pressure opposes filtration.\n\nTakeaway: Rising interstitial pressure is a safety factor against edema.",
"w": [
"",
"16 mmHg treats Pif as an outward force.",
"Outward forces still exceed inward ones.",
"Zero ignores the interstitial oncotic pressure.",
"10 mmHg is the value before the change."
],
"fig": [
"figs/crs/mc-starling"
],
"viz": false
},
{
"t": "Lecture 11 · Microcirculation, Lymphatics & Edema",
"s": "A 3-year-old with kwashiorkor has a distended abdomen and pitting edema of both legs. Which pair of changes best describes the Starling forces in his peripheral capillaries?",
"c": [
"Low capillary pressure, less filtration",
"High plasma oncotic pressure, less filtration",
"High capillary pressure, more filtration",
"High permeability, protein-rich fluid",
"Low plasma oncotic pressure, more filtration"
],
"a": 4,
"e": "Protein malnutrition lowers albumin synthesis, so πp falls. With less inward pull, filtration exceeds reabsorption plus lymph flow, causing edema and ascites.\n\nTakeaway: Protein malnutrition → ↓ albumin → ↓ πp → edema.",
"w": [
"Lower Pc would reduce edema.",
"πp is low, not high.",
"Pc is not the primary change.",
"Capillary walls are not leaky.",
""
],
"fig": [
"figs/crs/mc-starling"
],
"viz": false
},
{
"t": "Lecture 11 · Microcirculation, Lymphatics & Edema",
"s": "A patient's thoracic duct is injured during esophageal surgery. Several days later, a milky pleural effusion develops after meals. What does this fluid mainly contain?",
"c": [
"Pus from a bacterial infection",
"Chylomicrons carried in intestinal lymph",
"Bile from a duct injury",
"Albumin leaked from inflamed capillaries",
"Red blood cells from a torn artery"
],
"a": 1,
"e": "The thoracic duct carries intestinal lymph containing chylomicrons absorbed by lacteals. Its injury leaks this milky chyle into the pleura (chylothorax), worse after fatty meals.\n\nTakeaway: Lacteals → thoracic duct carry dietary fat as chylomicrons.",
"w": [
"Infection gives pus, not post-meal milky fluid.",
"",
"Bile is green-yellow and not in the chest here.",
"Inflammatory exudate is not milky.",
"Blood would be red."
],
"fig": [
"figs/crs/mc-lymph"
],
"viz": false
},
{
"t": "Lecture 11 · Microcirculation, Lymphatics & Edema",
"s": "A 72-year-old woman wakes at night gasping for breath and must sit up. She has basal crackles but no ankle edema and a normal JVP. Which hemodynamic change is most directly responsible?",
"c": [
"Raised systemic venous pressure in the legs",
"High pulmonary capillary hydrostatic pressure",
"Obstruction of the pulmonary lymphatics",
"Increased pulmonary capillary permeability",
"Low plasma oncotic pressure from albumin loss"
],
"a": 1,
"e": "Paroxysmal nocturnal dyspnea and crackles without systemic congestion indicate left heart failure. Raised LVEDP backs up into the LA and pulmonary capillaries, pushing fluid into the lungs.\n\nTakeaway: LHF → ↑ pulmonary capillary hydrostatic pressure → pulmonary edema.",
"w": [
"A normal JVP and no edema argue against systemic congestion.",
"",
"Lymphatic obstruction is not the cause.",
"Permeability edema (ARDS) is not suggested.",
"Nothing suggests low albumin."
],
"fig": [
"figs/crs/mc-lhf"
],
"viz": false
},
{
"t": "Lecture 11 · Microcirculation, Lymphatics & Edema",
"s": "A 60-year-old man with cor pulmonale has a raised JVP, tender hepatomegaly, ascites and pitting ankle edema. His lungs are clear. Which sequence explains his ankle edema?",
"c": [
"Low albumin from his liver lowers πp",
"Leaky capillaries release protein into legs",
"Blocked lymph nodes trap fluid in the legs",
"Raised systemic venous pressure raises Pc",
"Raised pulmonary pressure leaks into the legs"
],
"a": 3,
"e": "RV failure backs blood into the RA and venae cavae, raising systemic venous and capillary hydrostatic pressure. Fluid collects in dependent regions, the liver and the peritoneum.\n\nTakeaway: RHF → systemic venous congestion → dependent edema, hepatomegaly, ascites.",
"w": [
"Congestion, not liver failure, drives his edema.",
"Permeability is not the mechanism.",
"There is no lymphatic obstruction.",
"",
"Pulmonary pressure does not cause leg edema directly."
],
"fig": [
"figs/crs/mc-rhf"
],
"viz": false
},
{
"t": "Lecture 11 · Microcirculation, Lymphatics & Edema",
"s": "A woman who had an axillary lymph node dissection develops a swollen arm. Compared with heart failure edema, what is a typical feature of her edema fluid?",
"c": [
"A higher red cell count",
"A lower water content",
"A much lower protein content",
"A lower sodium content",
"A higher protein content"
],
"a": 4,
"e": "Lymph normally returns leaked protein. When it is blocked, protein accumulates in the interstitium, so lymphedema fluid is protein-rich and often non-pitting and firm. Heart failure fluid is a low-protein transudate.\n\nTakeaway: Lymphedema traps protein; HF edema is a low-protein transudate.",
"w": [
"Red cells are not a feature.",
"Edema is mostly water in both.",
"Lymphedema fluid is protein-rich.",
"Sodium content is not the distinguishing feature.",
""
],
"fig": [
"figs/crs/mc-lymph"
],
"viz": false
},
{
"t": "Lecture 11 · Microcirculation, Lymphatics & Edema",
"s": "Which capillary bed is best suited to filter a large volume of fluid because of its very high filtration coefficient?",
"c": [
"Pulmonary capillaries",
"Skeletal muscle capillaries",
"Glomerular capillaries",
"Cerebral capillaries",
"Retinal capillaries"
],
"a": 2,
"e": "Kf = permeability × surface area. Fenestrated glomerular capillaries with a huge surface have the highest Kf, so they filter about 180 L/day.\n\nTakeaway: Highest Kf = glomerulus; lowest = brain.",
"w": [
"Pulmonary capillaries are kept relatively dry.",
"Muscle capillaries are continuous with a moderate Kf.",
"",
"Brain capillaries have tight junctions and the lowest Kf.",
"Retinal capillaries are like brain capillaries."
],
"fig": [
"figs/crs/mc-transport"
],
"viz": false
},
{
"t": "Lecture 12 · Special Circulation",
"s": "During a treadmill test, a man's heart rate rises from 70 to 160/min. Which change most limits the time available for left ventricular coronary perfusion?",
"c": [
"Lower ventricular wall tension",
"Shortened systole",
"Higher aortic systolic pressure",
"More adenosine production",
"Shortened diastole"
],
"a": 4,
"e": "LV coronary flow occurs mainly in diastole because systole compresses intramyocardial vessels. Faster heart rates shorten diastole much more than systole, reducing perfusion time.\n\nTakeaway: Tachycardia shortens diastole and limits coronary perfusion.",
"w": [
"Wall tension rises with exercise.",
"Systole changes relatively little.",
"Systolic pressure does not perfuse the compressed LV.",
"Adenosine increases flow.",
""
],
"fig": [
"figs/crs/sc-coronary"
],
"viz": false
},
{
"t": "Lecture 12 · Special Circulation",
"s": "A 30-year-old woman hyperventilates during a panic attack and feels lightheaded with tingling fingers. What is the main reason for her lightheadedness?",
"c": [
"Low PaCO₂ constricts cerebral arterioles",
"High PaCO₂ dilates cerebral arterioles",
"Low PaO₂ constricts the cerebral arterioles",
"Low blood glucose reaches the brain",
"High pH dilates cerebral arterioles"
],
"a": 0,
"e": "Hyperventilation lowers PaCO₂ and raises pH. Cerebral arterioles constrict, cerebral blood flow falls, and she feels lightheaded. Alkalosis also lowers ionized calcium, causing tingling.\n\nTakeaway: ↓ PaCO₂ → cerebral vasoconstriction → ↓ CBF.",
"w": [
"",
"Her PaCO₂ is low.",
"Her PaO₂ is normal or high.",
"Nothing suggests hypoglycemia.",
"Alkalosis constricts, not dilates."
],
"fig": [
"figs/crs/sc-cbf"
],
"viz": false
},
{
"t": "Lecture 12 · Special Circulation",
"s": "A 50-year-old man with a cerebellar hemorrhage becomes drowsy. His BP climbs to 210/115 mmHg, pulse falls to 44/min and breathing becomes irregular. Which receptors directly mediate the fall in heart rate?",
"c": [
"Atrial stretch receptors",
"Central chemoreceptors in the medulla",
"Peripheral chemoreceptors",
"Carotid and aortic baroreceptors",
"Juxtaglomerular cells"
],
"a": 3,
"e": "Rising ICP lowers CPP and triggers a sympathetic surge that raises BP (Cushing reflex). The hypertension stimulates carotid and aortic baroreceptors, which increase vagal tone and slow the heart.\n\nTakeaway: Cushing bradycardia is baroreflex-mediated.",
"w": [
"Atrial receptors regulate volume.",
"Central chemoreceptors respond to CO₂ and pH.",
"Peripheral chemoreceptors sense hypoxia.",
"",
"JG cells release renin."
],
"fig": [
"figs/crs/sc-cushing"
],
"viz": false
},
{
"t": "Lecture 12 · Special Circulation",
"s": "A patient with a right lower lobe pneumonia is placed with the affected lung down, and his oxygen saturation falls. Which normal mechanism is partly overcome by gravity in this position?",
"c": [
"Cerebral autoregulation of blood flow",
"Skin sympathetic constriction",
"Hypoxic pulmonary vasoconstriction",
"Renal tubuloglomerular feedback",
"Coronary metabolic vasodilation"
],
"a": 2,
"e": "Hypoxic pulmonary vasoconstriction diverts blood away from poorly ventilated alveoli. With the diseased lung dependent, gravity sends more blood there, increasing shunt and lowering saturation.\n\nTakeaway: HPV matches perfusion to ventilation in the lung.",
"w": [
"Autoregulation controls brain flow.",
"Skin flow serves thermoregulation.",
"",
"TGF controls GFR.",
"Adenosine controls coronary flow."
],
"fig": [
"figs/crs/sc-hpv"
],
"viz": false
},
{
"t": "Lecture 12 · Special Circulation",
"s": "Which statement best contrasts the response to hypoxia in the lung with that in other vascular beds?",
"c": [
"Both lung and systemic vessels constrict",
"Lung vessels dilate, systemic ones constrict",
"Lung vessels constrict, systemic ones dilate",
"Both lung and systemic vessels dilate",
"Neither bed responds to hypoxia"
],
"a": 2,
"e": "Hypoxia dilates systemic arterioles to raise O₂ delivery, but the lung is the only place where it causes vasoconstriction, redirecting flow to ventilated alveoli.\n\nTakeaway: The lung is the only bed where hypoxia causes vasoconstriction.",
"w": [
"Systemic vessels dilate to hypoxia.",
"This reverses both responses.",
"",
"Pulmonary vessels constrict to hypoxia.",
"Both beds respond, in opposite directions."
],
"fig": [
"figs/crs/sc-hpv"
],
"viz": false
},
{
"t": "Lecture 12 · Special Circulation",
"s": "In the fetus, which pathway takes the most oxygenated blood to the fetal brain?",
"c": [
"Pulmonary veins to the left atrium",
"Umbilical arteries to the aortic arch",
"SVC to right ventricle, through the ductus",
"IVC to RA, then through the foramen ovale",
"Portal vein to the right ventricle"
],
"a": 3,
"e": "Oxygenated umbilical vein blood reaches the IVC via the ductus venosus. In the RA most of it crosses the foramen ovale into the LA, LV and ascending aorta, supplying the head and heart.\n\nTakeaway: Foramen ovale carries the most oxygenated blood to the left heart and brain.",
"w": [
"Little blood returns from fetal lungs.",
"Umbilical arteries leave the fetus.",
"SVC blood goes mainly through the ductus to the descending aorta.",
"",
"Portal blood does not take this route."
],
"fig": [
"figs/crs/sc-fetal"
]
},
{
"t": "Lecture 12 · Special Circulation",
"s": "A premature infant has a continuous machine-like murmur and bounding pulses. Which treatment closes the abnormal vessel?",
"c": [
"A beta-blocker such as propranolol",
"An ACE inhibitor such as captopril",
"An NSAID such as indomethacin",
"Supplemental oxygen alone",
"Prostaglandin E₁ infusion"
],
"a": 2,
"e": "A patent ductus arteriosus is kept open by prostaglandin E. Indomethacin inhibits prostaglandin synthesis and closes it.\n\nTakeaway: Indomethacin closes a PDA; PGE₁ keeps it open.",
"w": [
"Beta-blockers do not close the ductus.",
"ACE inhibitors do not close the ductus.",
"",
"Oxygen helps but is not the drug treatment.",
"PGE₁ keeps the ductus open."
],
"fig": [
"figs/crs/sc-fetal"
]
},
{
"t": "Lecture 12 · Special Circulation",
"s": "A 68-year-old man with bilateral renal artery stenosis starts an ARB and his GFR falls sharply. What normally maintained his GFR before the drug?",
"c": [
"Angiotensin II constricting efferent arterioles",
"Sympathetic dilation of efferent arterioles",
"Angiotensin II dilating afferent arterioles",
"Adenosine dilating efferent arterioles",
"Prostaglandins constricting afferent arterioles"
],
"a": 0,
"e": "With low renal perfusion pressure, angiotensin II constricts the efferent arteriole, keeping glomerular capillary pressure up. Blocking it lowers glomerular pressure and GFR.\n\nTakeaway: In renal artery stenosis, GFR depends on AngII efferent constriction.",
"w": [
"",
"Sympathetic nerves constrict arterioles.",
"AngII constricts rather than dilates.",
"Adenosine is not the protective mechanism.",
"Prostaglandins dilate afferent arterioles."
],
"fig": [
"figs/crs/sc-renal"
],
"viz": false
},
{
"t": "Lecture 13 · Heart Sounds & Murmurs",
"s": "A 25-year-old man's S2 splits on inspiration and becomes single on expiration. What causes the split?",
"c": [
"Delayed pulmonic valve closure",
"Delayed aortic valve cusp closure",
"Early pulmonic valve closure",
"Early tricuspid valve closure",
"Delayed mitral valve closure"
],
"a": 0,
"e": "Inspiration increases venous return, RV filling and RV ejection time, and lowers pulmonary impedance, so P2 is delayed relative to A2. This is normal physiologic splitting.\n\nTakeaway: Inspiration delays P2 and widens the normal split.",
"w": [
"",
"A2 timing changes little.",
"P2 is late, not early.",
"Tricuspid closure is part of S1.",
"Mitral closure is part of S1."
],
"fig": [
"figs/crs/hs-splitting"
]
},
{
"t": "Lecture 13 · Heart Sounds & Murmurs",
"s": "A healthy 19-year-old has a soft low-pitched sound just after S2 heard at the apex in the left lateral position. What is the best interpretation?",
"c": [
"A paradoxically split S2",
"An opening snap of mitral stenosis",
"A pericardial friction rub",
"A pathologic S4 from a stiff ventricle",
"A normal S3 from rapid filling"
],
"a": 4,
"e": "An early diastolic sound after S2 is S3, from rapid ventricular filling. In children and young adults it is normal.\n\nTakeaway: S3 is normal in the young, pathologic in older adults.",
"w": [
"Paradoxical splitting relates to A2 timing.",
"An opening snap is high-pitched and in MS.",
"A rub has multiple components.",
"S4 occurs just before S1.",
""
],
"fig": [
"figs/crs/hs-wiggers"
]
},
{
"t": "Lecture 13 · Heart Sounds & Murmurs",
"s": "A 74-year-old man with hypertension has an S4. Which echocardiographic finding is most likely?",
"c": [
"A dilated aortic root",
"A large left-to-right atrial shunt",
"A thickened, rumbling mitral valve",
"Concentric left ventricular hypertrophy",
"A dilated, thin-walled left ventricle cavity"
],
"a": 3,
"e": "S4 is the atrial kick into a stiff, noncompliant ventricle, typical of LVH from hypertension, aortic stenosis or HCM.\n\nTakeaway: S4 = stiff ventricle, usually concentric LVH.",
"w": [
"Root dilation causes AR.",
"An ASD causes fixed splitting.",
"MS gives a rumble, not S4.",
"",
"A dilated ventricle gives S3."
],
"fig": [
"figs/crs/hs-wiggers"
]
},
{
"t": "Lecture 13 · Heart Sounds & Murmurs",
"s": "A 78-year-old man has exertional syncope and a harsh late-peaking systolic murmur at the right second intercostal space radiating to the neck. Which pressure finding at catheterization is expected?",
"c": [
"Large v waves in the LA tracing",
"LV systolic pressure far above aortic",
"LA pressure far above LV in diastole",
"Equal LV and aortic pressures",
"Aortic diastolic pressure is very low"
],
"a": 1,
"e": "Aortic stenosis obstructs ejection, so the LV must generate much higher systolic pressure than the aorta: a large systolic gradient across the valve.\n\nTakeaway: AS = LV–aortic systolic gradient.",
"w": [
"Large v waves fit MR.",
"",
"LA above LV in diastole fits MS.",
"Equal pressures mean no stenosis.",
"Low diastolic aortic pressure fits AR."
],
"fig": [
"figs/crs/hs-phono"
]
},
{
"t": "Lecture 13 · Heart Sounds & Murmurs",
"s": "Four days after a myocardial infarction, a 63-year-old woman develops sudden pulmonary edema and a new holosystolic murmur at the apex radiating to the axilla. What is the most likely cause?",
"c": [
"Dressler syndrome",
"Ventricular free wall rupture",
"Papillary muscle rupture",
"Aortic valve calcification",
"Rheumatic mitral stenosis"
],
"a": 2,
"e": "A new apical holosystolic murmur radiating to the axilla after an MI is acute mitral regurgitation from papillary muscle rupture, typically 2–7 days post-MI.\n\nTakeaway: Post-MI new MR murmur = papillary muscle rupture.",
"w": [
"Dressler causes pericarditis.",
"Free wall rupture causes tamponade.",
"",
"Calcification causes AS.",
"MS is a diastolic rumble."
],
"fig": [
"figs/crs/hs-mr-vwave"
]
},
{
"t": "Lecture 13 · Heart Sounds & Murmurs",
"s": "A 35-year-old woman with fatigue has a holosystolic blowing murmur at the apex radiating to the axilla. How does this lesion load the left ventricle?",
"c": [
"No change in left ventricular load",
"Volume overload with eccentric hypertrophy",
"Reduced preload and a small cavity",
"Pressure overload of the right ventricle only",
"Pressure overload with concentric hypertrophy"
],
"a": 1,
"e": "In MR, regurgitated blood returns to the LV each diastole, increasing preload. The LV dilates with eccentric hypertrophy and can eventually fail.\n\nTakeaway: Regurgitant lesions = volume overload = eccentric hypertrophy.",
"w": [
"MR adds volume to the LV.",
"",
"Preload rises in MR.",
"The LV is the chamber loaded.",
"Pressure overload fits AS."
],
"fig": [
"figs/crs/hs-mr"
]
},
{
"t": "Lecture 13 · Heart Sounds & Murmurs",
"s": "A 66-year-old man has a BP of 170/50 mmHg, head bobbing with each heartbeat and visible nail bed pulsations. Which murmur is expected?",
"c": [
"Early diastolic decrescendo at the left sternal border",
"Mid-diastolic rumble at the apex after an opening snap",
"Continuous machine-like murmur below the clavicle",
"Holosystolic blowing murmur at the apex",
"Crescendo-decrescendo systolic at the right upper sternal border"
],
"a": 0,
"e": "Wide pulse pressure, de Musset sign and Quincke pulses indicate aortic regurgitation, with an early diastolic, high-pitched blowing decrescendo murmur at the left sternal border.\n\nTakeaway: AR DANCE signs + early diastolic decrescendo = AR.",
"w": [
"",
"This is mitral stenosis.",
"This is a patent ductus arteriosus.",
"This is mitral regurgitation.",
"This is aortic stenosis."
],
"fig": [
"figs/crs/hs-ar"
]
},
{
"t": "Lecture 13 · Heart Sounds & Murmurs",
"s": "A 40-year-old woman who had rheumatic fever as a child develops atrial fibrillation. Which murmur is most likely present?",
"c": [
"Early diastolic decrescendo at the left sternal border",
"Late systolic murmur after a midsystolic click",
"High-pitched holosystolic murmur at the apex",
"Opening snap then a low-pitched diastolic rumble",
"Crescendo-decrescendo murmur to the carotids"
],
"a": 3,
"e": "Rheumatic heart disease most often causes mitral stenosis. High LA pressure dilates the LA, predisposing to AF. MS gives an opening snap and a low-pitched mid-diastolic rumble at the apex.\n\nTakeaway: Rheumatic MS → LA dilation → AF; OS + diastolic rumble.",
"w": [
"This is AR.",
"This is mitral valve prolapse.",
"This is MR.",
"",
"This is AS."
],
"fig": [
"figs/crs/hs-ms"
]
},
{
 "t": "Lecture 14 · Hemostasis & Blood Coagulation",
 "s": "A 4-year-old boy is brought in after a fall at preschool. His right knee is swollen, warm and painful, and he has had similar episodes after minor bumps. His mother's brother had the same problem. Studies show a prolonged aPTT, a normal prothrombin time, a normal platelet count and a normal bleeding time. Which of the following is the most likely cause?",
 "c": [
  "Factor VIII deficiency",
  "Factor VII deficiency",
  "Von Willebrand factor deficiency",
  "Immune platelet destruction",
  "Vitamin K deficiency"
 ],
 "a": 0,
 "e": "Hemarthrosis in a boy with an affected maternal uncle suggests X-linked recessive hemophilia. A prolonged aPTT with normal PT and bleeding time localizes the defect to an intrinsic factor, and factor VIII deficiency (hemophilia A) accounts for about 85% of cases.\n\nTakeaway: hemarthrosis with an isolated long aPTT is hemophilia A until proven otherwise.",
 "w": [
  "",
  "Factor VII is extrinsic, so the prothrombin time would be prolonged.",
  "Von Willebrand disease prolongs the bleeding time, which is normal here.",
  "Immune destruction lowers the platelet count and causes mucosal bleeding.",
  "Vitamin K deficiency prolongs the prothrombin time as well as the aPTT."
 ],
 "fig": [
  "figs/crs/hm-disorders"
 ]
},
{
 "t": "Lecture 14 · Hemostasis & Blood Coagulation",
 "s": "A 62-year-old woman is started on an intravenous anticoagulant after a pulmonary embolism. Her aPTT is used to adjust the dose, and the effect begins within minutes of starting the infusion. Which mechanism best explains this drug's action?",
 "c": [
  "It blocks vitamin K epoxide reductase",
  "It increases antithrombin III activity",
  "It irreversibly inhibits platelet cyclooxygenase",
  "It converts plasminogen into active plasmin",
  "It directly inhibits factor Xa after oral dosing"
 ],
 "a": 1,
 "e": "Heparin binds antithrombin III and increases its inactivation of thrombin and factor Xa 100 to 1,000 fold, with immediate onset. It is given parenterally, monitored with the aPTT and reversed with protamine sulfate.\n\nTakeaway: heparin acts through antithrombin III, works at once, and is followed with the aPTT.",
 "w": [
  "That is warfarin, which is monitored by the INR and takes one to three days.",
  "",
  "That is aspirin, an antiplatelet drug that is not monitored with the aPTT.",
  "That is t-PA, a thrombolytic given to dissolve an existing clot.",
  "Direct oral factor Xa inhibitors need no routine monitoring and are not intravenous."
 ],
 "fig": [
  "figs/crs/hm-labs-drugs"
 ]
},
{
 "t": "Lecture 14 · Hemostasis & Blood Coagulation",
 "s": "A 70-year-old man with sepsis develops oozing from his intravenous sites and gums. Laboratory studies show a prolonged prothrombin time, a prolonged aPTT, a platelet count of 48,000 per microliter, a markedly elevated D-dimer and a low fibrinogen level. Which process best explains these findings?",
 "c": [
  "Isolated deficiency of plasma factor VIII",
  "Impaired gamma-carboxylation in the liver",
  "Consumption of clotting factors",
  "Antibody-mediated platelet destruction",
  "Defective platelet adhesion to collagen"
 ],
 "a": 2,
 "e": "Sepsis triggers diffuse microvascular clotting that consumes factors, fibrinogen and platelets, prolonging both the PT and aPTT and lowering fibrinogen. Plasmin digestion of those cross-linked clots raises the D-dimer.\n\nTakeaway: DIC shows long PT and aPTT, low platelets, low fibrinogen and a high D-dimer.",
 "w": [
  "Factor VIII deficiency prolongs only the aPTT and does not lower fibrinogen.",
  "Vitamin K deficiency leaves fibrinogen normal and does not raise the D-dimer.",
  "",
  "Immune thrombocytopenia leaves the PT and aPTT normal.",
  "An adhesion defect prolongs the bleeding time but not the PT."
 ],
 "fig": [
  "figs/crs/hm-disorders",
  "figs/crs/hm-labs-drugs"
 ]
},
{
 "t": "Lecture 14 · Hemostasis & Blood Coagulation",
 "s": "A 25-year-old woman reports frequent nosebleeds, bleeding gums after brushing and heavy menstrual periods. Her father has similar symptoms. Her platelet count and prothrombin time are normal, but her bleeding time and aPTT are both prolonged. Which of the following is the most likely diagnosis?",
 "c": [
  "Hemophilia A",
  "Immune thrombocytopenic purpura",
  "Vitamin K deficiency",
  "Von Willebrand disease",
  "Factor XIII deficiency"
 ],
 "a": 3,
 "e": "Mucosal bleeding with a prolonged bleeding time points to defective platelet adhesion, and father-to-daughter transmission fits autosomal dominant inheritance. Von Willebrand factor is needed for GpIb adhesion and also stabilizes factor VIII, so the aPTT is prolonged as well.\n\nTakeaway: vWD prolongs both bleeding time and aPTT because vWF carries factor VIII.",
 "w": [
  "Hemophilia A is X-linked, causes deep bleeding and leaves the bleeding time normal.",
  "Immune thrombocytopenia lowers the platelet count, which is normal here.",
  "Vitamin K deficiency prolongs the prothrombin time, which is normal here.",
  "",
  "Factor XIII deficiency leaves the aPTT and bleeding time normal."
 ],
 "fig": [
  "figs/crs/hm-disorders"
 ]
},
{
 "t": "Lecture 14 · Hemostasis & Blood Coagulation",
 "s": "During an operation, a surgeon packs a bleeding wound with a thromboplastin-rich tissue preparation and the blood clots within about 15 seconds. Which sequence of events explains this rapid clotting?",
 "c": [
  "Collagen activates XII, then XI and then IX",
  "Thrombin activates XIII to cross-link fibrin",
  "Plasmin digests fibrin into degradation products",
  "Protein C and protein S degrade Va and VIIIa",
  "Tissue factor binds VII and activates X"
 ],
 "a": 4,
 "e": "Tissue factor binds circulating factor VII with calcium to form the TF-VIIa complex, which cleaves factor X directly. Factor Xa joins Va, platelet phospholipid and calcium to form prothrombinase, so the extrinsic pathway can clot blood in as little as 15 seconds.\n\nTakeaway: tissue factor plus factor VII activates factor X: 3 + 7 = 10.",
 "w": [
  "That is the intrinsic contact cascade, which takes one to six minutes.",
  "Cross-linking stabilizes a clot that has already formed.",
  "Plasmin dissolves clots rather than forming them.",
  "That system slows clotting rather than accelerating it.",
  ""
 ],
 "fig": [
  "figs/crs/hm-extrinsic"
 ]
},
{
 "t": "Lecture 14 · Hemostasis & Blood Coagulation",
 "s": "A 10-day-old infant who was born at home and received no injections at birth presents with bleeding from the umbilical stump and bruising. Laboratory studies show a prolonged prothrombin time and a prolonged aPTT with a normal platelet count and normal fibrinogen. Which group of factors is most likely deficient?",
 "c": [
  "Factors II, VII, IX and X",
  "Factors V and VIII only",
  "Factors XI and XII only",
  "Fibrinogen and factor XIII",
  "Von Willebrand factor and factor VIII"
 ],
 "a": 0,
 "e": "Newborns have low vitamin K stores, and without a vitamin K injection the liver cannot gamma-carboxylate factors II, VII, IX and X or protein C. Losing factors in both the extrinsic and common pathways prolongs the PT and aPTT while platelets and fibrinogen stay normal.\n\nTakeaway: vitamin K dependent factors are II, VII, IX, X and protein C.",
 "w": [
  "",
  "Factors V and VIII are cofactors that do not depend on vitamin K.",
  "The contact factors are not vitamin K dependent and would spare the PT.",
  "Fibrinogen is normal here and factor XIII deficiency spares both clotting times.",
  "That combination prolongs the bleeding time and spares the prothrombin time."
 ],
 "fig": [
  "figs/crs/hm-labs-drugs"
 ]
},
{
 "t": "Lecture 14 · Hemostasis & Blood Coagulation",
 "s": "A 33-year-old woman has had two unprovoked deep vein thromboses, and her mother had a clot during pregnancy. Testing shows normal thrombin generation and normal thrombomodulin, but very low levels of the protein that the thrombin-thrombomodulin complex normally activates. Which factors remain active longer than normal in this patient?",
 "c": [
  "Factors IXa and XIa",
  "Factors Va and VIIIa",
  "Thrombin and factor Xa",
  "Tissue factor and factor VIIa",
  "Factors XIIa and XIIIa"
 ],
 "a": 1,
 "e": "The thrombin-thrombomodulin complex activates protein C, so the low protein is protein C. Activated protein C with protein S normally degrades factors Va and VIIIa, so deficiency leaves prothrombinase and tenase active and causes recurrent venous thrombosis.\n\nTakeaway: protein C deficiency leaves Va and VIIIa active, producing thrombophilia.",
 "w": [
  "Those factors are neutralized by antithrombin III, a separate inhibitor system.",
  "",
  "Thrombin and factor Xa are the main targets of antithrombin III.",
  "The TF-VIIa complex is controlled by tissue factor pathway inhibitor.",
  "Factor XIIa is cleared by antithrombin III and XIIIa cross-links fibrin."
 ],
 "fig": [
  "figs/crs/hm-anticoag"
 ]
},
{
 "t": "Lecture 14 · Hemostasis & Blood Coagulation",
 "s": "A 12-year-old boy has bled for days from his umbilical stump as a newborn and now bleeds again hours after minor injuries, though bleeding stops normally at first. His prothrombin time, aPTT, platelet count and bleeding time are all normal. Which protein is most likely deficient?",
 "c": [
  "Von Willebrand factor",
  "Antihemophilic factor",
  "Fibrin-stabilizing factor",
  "Tissue thromboplastin",
  "Prothrombin from the liver"
 ],
 "a": 2,
 "e": "Normal PT, aPTT, platelet count and bleeding time mean the platelet plug and the cascade through fibrin formation all work. Delayed bleeding with a clot that forms and then breaks down points to factor XIII, the fibrin-stabilizing factor, whose transglutaminase activity covalently cross-links fibrin.\n\nTakeaway: delayed bleeding with normal routine tests suggests factor XIII deficiency.",
 "w": [
  "Von Willebrand disease prolongs the bleeding time and usually the aPTT.",
  "Factor VIII deficiency prolongs the aPTT, which is normal here.",
  "",
  "Tissue factor is released from injured tissue and is not a plasma deficiency state.",
  "Prothrombin deficiency prolongs both the prothrombin time and the aPTT."
 ],
 "fig": [
  "figs/crs/hm-common"
 ]
},
{
 "t": "Lecture 14 · Hemostasis & Blood Coagulation",
 "s": "A 58-year-old man is given alteplase two hours after the onset of an acute ischemic stroke. Which of the following best describes how this drug dissolves the occluding thrombus?",
 "c": [
  "It increases antithrombin III activity",
  "It blocks vitamin K dependent carboxylation",
  "It blocks platelet GpIIb and IIIa receptors",
  "It converts plasminogen into plasmin",
  "It irreversibly inhibits platelet cyclooxygenase"
 ],
 "a": 3,
 "e": "Alteplase is recombinant tissue plasminogen activator. It converts plasminogen that was trapped in the clot during formation into plasmin, which digests fibrin fibers and releases fibrin degradation products and D-dimers.\n\nPlasmin also digests fibrinogen and factors V, VIII and XII, releasing fibrin degradation products.\n\nTakeaway: t-PA makes plasmin, and plasmin digests fibrin.",
 "w": [
  "That is heparin, which prevents clot extension but does not dissolve a formed clot.",
  "That is warfarin, which prevents new clots over days.",
  "Blocking aggregation prevents a platelet plug but does not lyse fibrin.",
  "",
  "Aspirin blocks thromboxane synthesis and does not dissolve fibrin."
 ],
 "fig": [
  "figs/crs/hm-fibrinolysis"
 ]
},
{
 "t": "Lecture 14 · Hemostasis & Blood Coagulation",
 "s": "A researcher incubates normal plasma in a plastic tube with a calcium chelator and adds purified collagen. Factor XII is converted to factor XIIa and factor XI to factor XIa, but no further activation occurs. Which step is blocked?",
 "c": [
  "Conversion of factor XII to factor XIIa",
  "Conversion of factor XI to factor XIa",
  "Release of tissue factor from damaged cells",
  "Binding of von Willebrand factor to collagen",
  "Cleavage of factor IX by factor XIa"
 ],
 "a": 4,
 "e": "Ionic calcium, factor IV, is required for every cascade step except the first two intrinsic steps, XII to XIIa and XIIa cleaving XI. Factor XIa cleaves factor IX only in the presence of ionic calcium, so the chelator stops the cascade there.\n\nTakeaway: only XII to XIIa and XIIa to XIa proceed without calcium.",
 "w": [
  "That step proceeds in the experiment and needs no calcium.",
  "That step also proceeds and is the second calcium-independent step.",
  "No tissue was added, and tissue factor release is not a cascade step here.",
  "That is a platelet adhesion step and not part of the cascade in plasma.",
  ""
 ],
 "fig": [
  "figs/crs/hm-intrinsic-steps"
 ]
},
{
 "t": "Lecture 14 · Hemostasis & Blood Coagulation",
 "s": "A 28-year-old woman with immune thrombocytopenia has a platelet count of 12,000 per microliter and petechiae over both shins. A sample of her blood forms a clot, but over the next hour the clot neither shrinks nor expresses serum. Which normal process has failed?",
 "c": [
  "Clot retraction by platelet contraction",
  "Conversion of fibrinogen into fibrin monomers",
  "Cross-linking of fibrin by factor XIIIa",
  "Digestion of fibrin fibers by plasmin",
  "Activation of protein C by thrombomodulin"
 ],
 "a": 0,
 "e": "Within 20 to 60 minutes a normal clot contracts and expresses serum. Platelet spicules attached to fibrin contract through thrombosthenin, actin and myosin, pulling the vessel edges together. Severe thrombocytopenia causes failed clot retraction along with petechiae and a prolonged bleeding time.\n\nTakeaway: clot retraction needs platelets, so it fails in severe thrombocytopenia.",
 "w": [
  "",
  "Fibrin still formed, since a clot was produced in the tube.",
  "Cross-linking strengthens the mesh but does not pull it tighter.",
  "Plasmin dissolves a clot rather than contracting it.",
  "That anticoagulant pathway limits clotting and has no role in retraction."
 ],
 "fig": [
  "figs/crs/hm-fibrinolysis"
 ]
},
{
 "t": "Lecture 14 · Hemostasis & Blood Coagulation",
 "s": "A patient takes low-dose aspirin daily. Which laboratory test is most likely to be abnormal as a result of this medication?",
 "c": [
  "Prothrombin time",
  "Bleeding time",
  "Activated partial thromboplastin time",
  "Platelet count",
  "Fibrinogen concentration"
 ],
 "a": 1,
 "e": "Aspirin irreversibly inhibits platelet COX-1, blocking thromboxane A2 synthesis for the 8 to 12 day platelet lifespan. That impairs platelet recruitment and aggregation, which is measured by the bleeding time, while the clotting cascade tests stay normal.\n\nTakeaway: aspirin prolongs the bleeding time and leaves PT and aPTT normal.",
 "w": [
  "The PT measures the extrinsic and common pathways, which aspirin does not affect.",
  "",
  "The aPTT measures the intrinsic and common pathways, unaffected by aspirin.",
  "Aspirin impairs platelet function without reducing the number of platelets.",
  "Aspirin does not change the plasma fibrinogen level."
 ],
 "fig": [
  "figs/crs/hm-labs-drugs"
 ]
},
{
 "t": "Lecture 15 · Blood Groups & Transfusion",
 "s": "A 26-year-old woman with type B blood is transfused with type A red cells after a postpartum hemorrhage. Fifteen minutes later she has fever, chills and back pain, and her urine is red-brown. Which of the following is the immediate mechanism of red cell destruction?",
 "c": [
  "IgM binding with complement attack",
  "IgG opsonization with splenic macrophage phagocytosis",
  "Direct lysis by donor cytotoxic T lymphocytes",
  "Osmotic swelling of donor cells in hypotonic plasma",
  "Mechanical shearing of cells by fibrin strands"
 ],
 "a": 0,
 "e": "Her plasma already contains anti-A, because a type B person makes antibody against the antigen her own cells lack. These naturally occurring agglutinins are predominantly pentameric IgM.\n\nThat structure is what makes the reaction so fast. A single IgM molecule has 10 antigen-binding arms, so it binds many A antigens on one donor cell at once and holds its binding sites close together. C1q requires exactly that geometry to be activated, and the classical complement pathway then proceeds to the membrane attack complex, which punches pores in the red cell membrane. The cells burst inside the blood vessels, releasing free hemoglobin that appears in the plasma and then in the urine as hemoglobinuria. Because the antibody is already present, this happens within minutes rather than days.\n\nWhy the other choices are wrong:\n• IgG opsonization with splenic macrophage phagocytosis: IgG-mediated opsonization and splenic removal is extravascular hemolysis, the slower mechanism behind delayed reactions days later, not hemoglobinuria in 15 minutes.\n• Direct lysis by donor cytotoxic T lymphocytes: Donor T lymphocytes cause transfusion-associated graft-versus-host disease days to weeks later, and they attack host tissue rather than lysing red cells.\n• Osmotic swelling of donor cells in hypotonic plasma: Donor units are suspended in isotonic additive solution, and osmotic lysis would occur only if a hypotonic fluid such as dextrose were infused with the blood.\n• Mechanical shearing of cells by fibrin strands: Fibrin strand shearing produces the schistocytes of microangiopathic hemolysis, as in DIC or TTP, which is not an antibody-mediated transfusion reaction.\n\nTakeaway: ABO incompatibility is IgM-mediated complement activation producing intravascular lysis within minutes.",
 "w": [
  "",
  "IgG-mediated opsonization and splenic removal is extravascular hemolysis, the slower mechanism behind delayed reactions days later, not hemoglobinuria in 15 minutes.",
  "Donor T lymphocytes cause transfusion-associated graft-versus-host disease days to weeks later, and they attack host tissue rather than lysing red cells.",
  "Donor units are suspended in isotonic additive solution, and osmotic lysis would occur only if a hypotonic fluid such as dextrose were infused with the blood.",
  "Fibrin strand shearing produces the schistocytes of microangiopathic hemolysis, as in DIC or TTP, which is not an antibody-mediated transfusion reaction."
 ],
 "fig": [
  "figs/crs/bg-igm-mac"
 ]
},
{
 "t": "Lecture 15 · Blood Groups & Transfusion",
 "s": "A 30-year-old primigravida who is Rh-negative has a negative antibody screen at 28 weeks. Which of the following is the most appropriate next step?",
 "c": [
  "Repeat the antibody screen at 36 weeks only",
  "Plan intrauterine transfusion of the fetus",
  "Administer anti-D immunoglobulin now",
  "Begin maternal plasmapheresis",
  "Administer anti-D only if the fetus is anemic"
 ],
 "a": 2,
 "e": "A negative antibody screen in an Rh-negative woman means she has not yet been sensitized, which is exactly the situation in which prophylaxis works. Small fetomaternal hemorrhages can occur during the third trimester as well as at delivery, so routine anti-D immunoglobulin is given at 28 to 30 weeks.\n\nThe injected anti-D binds any fetal D-positive red cells in her circulation and clears them before her B lymphocytes can be primed, which prevents memory cell formation. A second dose follows within 72 hours of delivery if the newborn is confirmed Rh-positive, and additional doses are given after amniocentesis, chorionic villus sampling, abortion or abdominal trauma.\n\nWhy the other choices are wrong:\n• Repeat the antibody screen at 36 weeks only: Waiting means a third-trimester fetomaternal hemorrhage could sensitize her before any prophylaxis is given, which is the event the 28-week dose exists to prevent.\n• Plan intrauterine transfusion of the fetus: Intrauterine transfusion treats established fetal anemia from alloimmunization, and this unsensitized woman has no antibody and no affected fetus.\n• Begin maternal plasmapheresis: Plasmapheresis removes circulating antibody in severe established alloimmunization, and she has none to remove.\n• Administer anti-D only if the fetus is anemic: Prophylaxis must be given before sensitization. By the time a fetus is anemic the mother is already alloimmunized and RhoGAM cannot help.\n\nTakeaway: Give anti-D immunoglobulin at 28 to 30 weeks to an unsensitized Rh-negative woman, and again within 72 hours of delivering an Rh-positive infant.",
 "w": [
  "Waiting means a third-trimester fetomaternal hemorrhage could sensitize her before any prophylaxis is given, which is the event the 28-week dose exists to prevent.",
  "Intrauterine transfusion treats established fetal anemia from alloimmunization, and this unsensitized woman has no antibody and no affected fetus.",
  "",
  "Plasmapheresis removes circulating antibody in severe established alloimmunization, and she has none to remove.",
  "Prophylaxis must be given before sensitization. By the time a fetus is anemic the mother is already alloimmunized and RhoGAM cannot help."
 ],
 "fig": [
  "figs/crs/bg-rhogam"
 ]
},
{
 "t": "Lecture 15 · Blood Groups & Transfusion",
 "s": "A 45-year-old man develops dyspnea 2 hours after a plasma transfusion. He is febrile and hypotensive, the chest x-ray shows bilateral infiltrates, and the BNP is normal. Which of the following is the most appropriate management?",
 "c": [
  "Intravenous furosemide and fluid restriction",
  "Immediate exchange transfusion",
  "Intravenous epinephrine and antihistamines",
  "Intravenous sodium bicarbonate and mannitol",
  "Supportive oxygen without diuretics"
 ],
 "a": 4,
 "e": "Fever, hypotension, bilateral infiltrates and a normal BNP within hours of a plasma-rich product identify transfusion-related acute lung injury. Donor anti-HLA or anti-neutrophil antibodies activate the recipient's neutrophils that are sequestered in the pulmonary capillaries, and those activated neutrophils damage the capillary endothelium. The result is a protein-rich exudate filling the alveoli, which is noncardiogenic pulmonary edema.\n\nBecause the patient is not volume overloaded, the treatment is supportive: oxygen and mechanical ventilation as required, while the lung injury resolves over the next few days. Diuretics are specifically avoided, since the patient is often hypotensive and intravascular volume is not the problem. TRALI is the leading cause of transfusion-related mortality, so recognizing it and withholding diuretics matters.\n\nWhy the other choices are wrong:\n• Intravenous furosemide and fluid restriction: Diuresis is the treatment for TACO, which presents with hypertension, raised jugular venous pressure, an S3 and a high BNP rather than fever and a normal BNP.\n• Immediate exchange transfusion: Exchange transfusion is used for severe neonatal hyperbilirubinemia and for sickle cell crises, not for acute lung injury.\n• Intravenous epinephrine and antihistamines: Epinephrine and antihistamines treat an anaphylactic transfusion reaction, which presents with urticaria, bronchospasm and angioedema rather than bilateral infiltrates.\n• Intravenous sodium bicarbonate and mannitol: Bicarbonate and mannitol protect the kidneys after a hemolytic reaction, and there is no evidence of hemolysis here.\n\nTakeaway: TRALI is treated supportively with oxygen and ventilation, and diuretics are withheld because the edema is not cardiogenic.",
 "w": [
  "Diuresis is the treatment for TACO, which presents with hypertension, raised jugular venous pressure, an S3 and a high BNP rather than fever and a normal BNP.",
  "Exchange transfusion is used for severe neonatal hyperbilirubinemia and for sickle cell crises, not for acute lung injury.",
  "Epinephrine and antihistamines treat an anaphylactic transfusion reaction, which presents with urticaria, bronchospasm and angioedema rather than bilateral infiltrates.",
  "Bicarbonate and mannitol protect the kidneys after a hemolytic reaction, and there is no evidence of hemolysis here.",
  ""
 ],
 "fig": [
  "figs/crs/bg-trali-taco"
 ]
},
{
 "t": "Lecture 15 · Blood Groups & Transfusion",
 "s": "A 28-year-old man requires red cells and his antibody screen is positive. Which of the following best describes what the antibody screen detected?",
 "c": [
  "Anti-A or anti-B in his own plasma",
  "An antibody to a non-ABO red cell antigen",
  "Antibodies on the surface of his own red cells",
  "HLA antibodies in the donor plasma",
  "A deficiency of complement regulatory proteins"
 ],
 "a": 1,
 "e": "The antibody screen is an indirect Coombs test in which the patient's plasma is incubated with reagent red cells and antihuman globulin is added to reveal bound IgG. The reagent cells are deliberately group O, so they carry no A or B antigen and the patient's own anti-A or anti-B cannot react with them.\n\nAnything that does react must therefore be an unexpected alloantibody directed at a non-ABO antigen, such as anti-Kell, anti-Kidd, anti-Duffy or anti-D. Finding one changes management: the antibody must be identified, antigen-negative units selected, and a full serologic indirect Coombs crossmatch performed rather than an electronic crossmatch.\n\nWhy the other choices are wrong:\n• Anti-A or anti-B in his own plasma: Anti-A and anti-B are expected in every person according to their blood group, and group O reagent cells are used precisely so these do not interfere.\n• Antibodies on the surface of his own red cells: Antibody already bound to the patient's own red cells is what the direct Coombs test detects, which is a different test used for autoimmune hemolysis and transfusion reactions.\n• HLA antibodies in the donor plasma: The screen tests the recipient's plasma, not the donor's. Donor anti-HLA antibodies matter in TRALI and are not sought by this test.\n• A deficiency of complement regulatory proteins: Complement regulatory protein deficiency causes paroxysmal nocturnal hemoglobinuria and is diagnosed by flow cytometry, not by an antibody screen.\n\nTakeaway: The antibody screen is an indirect Coombs test for unexpected non-ABO alloantibodies in the recipient's plasma.",
 "w": [
  "Anti-A and anti-B are expected in every person according to their blood group, and group O reagent cells are used precisely so these do not interfere.",
  "",
  "Antibody already bound to the patient's own red cells is what the direct Coombs test detects, which is a different test used for autoimmune hemolysis and transfusion reactions.",
  "The screen tests the recipient's plasma, not the donor's. Donor anti-HLA antibodies matter in TRALI and are not sought by this test.",
  "Complement regulatory protein deficiency causes paroxysmal nocturnal hemoglobinuria and is diagnosed by flow cytometry, not by an antibody screen."
 ],
 "fig": [
  "figs/crs/bg-pretx"
 ]
},
{
 "t": "Lecture 15 · Blood Groups & Transfusion",
 "s": "A newborn of an Rh-negative mother has jaundice at 8 hours of life, hepatosplenomegaly and nucleated red cells on the smear. Which of the following is the most likely direct cause of the hepatosplenomegaly?",
 "c": [
  "Bilirubin deposition in hepatocytes",
  "Portal venous congestion from heart failure",
  "Bacterial sepsis with reticuloendothelial activation",
  "Extramedullary hematopoiesis in the liver and spleen",
  "Storage of unconjugated bilirubin in macrophages"
 ],
 "a": 3,
 "e": "Maternal anti-D IgG crosses the placenta and coats fetal D-positive red cells, which are then removed by fetal macrophages. The resulting anemia drives a compensatory increase in red cell production, but the fetal marrow cannot meet the demand alone.\n\nProduction therefore shifts back to the liver and spleen, the organs that performed hematopoiesis earlier in fetal life. That extramedullary hematopoiesis enlarges both organs, and because production is hurried, immature nucleated erythroblasts are released into the circulation. The old name for the condition, erythroblastosis fetalis, comes from exactly this finding. Jaundice within the first 24 hours of life is never physiologic and should always prompt a search for hemolysis.\n\nWhy the other choices are wrong:\n• Bilirubin deposition in hepatocytes: Bilirubin causes the jaundice and, if it reaches the basal ganglia, kernicterus, but it does not enlarge the liver and spleen or release nucleated red cells.\n• Portal venous congestion from heart failure: Severe anemia can progress to high-output heart failure and hydrops, but congestion would not explain the nucleated red cells on the smear.\n• Bacterial sepsis with reticuloendothelial activation: Sepsis is an important cause of neonatal jaundice, but it does not produce the nucleated red cells that point to accelerated erythropoiesis.\n• Storage of unconjugated bilirubin in macrophages: Macrophages process heme into bilirubin and release it rather than storing it, so this does not explain organ enlargement.\n\nTakeaway: Hepatosplenomegaly with nucleated red cells in HDFN reflects extramedullary hematopoiesis compensating for hemolysis.",
 "w": [
  "Bilirubin causes the jaundice and, if it reaches the basal ganglia, kernicterus, but it does not enlarge the liver and spleen or release nucleated red cells.",
  "Severe anemia can progress to high-output heart failure and hydrops, but congestion would not explain the nucleated red cells on the smear.",
  "Sepsis is an important cause of neonatal jaundice, but it does not produce the nucleated red cells that point to accelerated erythropoiesis.",
  "",
  "Macrophages process heme into bilirubin and release it rather than storing it, so this does not explain organ enlargement."
 ],
 "fig": [
  "figs/crs/bg-hdn"
 ]
},
{
 "t": "Lecture 15 · Blood Groups & Transfusion",
 "s": "Which of the following patients is at greatest risk of transfusion-associated graft-versus-host disease if the unit is not irradiated?",
 "c": [
  "A child on chemotherapy receiving blood from a sibling",
  "An adult with iron deficiency anemia receiving a random unit",
  "A pregnant woman receiving a unit before delivery",
  "A patient with sickle cell disease on chronic transfusion",
  "A man with hemophilia A receiving factor concentrate"
 ],
 "a": 0,
 "e": "Transfusion-associated graft-versus-host disease occurs when viable donor T lymphocytes in a cellular product survive in the recipient, engraft and attack the recipient's skin, gut, liver and bone marrow. It is almost always fatal.\n\nTwo risk factors combine in this child. Chemotherapy has suppressed his immune system, so he cannot eliminate the donor T cells, and the donor is a first-degree relative who shares an HLA haplotype, so his immune system may not recognize those cells as foreign at all. Gamma irradiation at 25 Gy damages donor lymphocyte DNA so they cannot divide, and it prevents more than 90% of fatal cases. Leukoreduction alone is not sufficient, because enough T cells remain to engraft.\n\nWhy the other choices are wrong:\n• An adult with iron deficiency anemia receiving a random unit: An immunocompetent adult receiving blood from an unrelated donor destroys the donor T cells normally, so the risk is negligible.\n• A pregnant woman receiving a unit before delivery: Pregnancy is not an indication for irradiation, since the mother's immune system remains competent.\n• A patient with sickle cell disease on chronic transfusion: Chronic transfusion in sickle cell disease raises the risk of alloimmunization and iron overload, but these patients are not immunosuppressed.\n• A man with hemophilia A receiving factor concentrate: Factor concentrates are plasma-derived and acellular, so they contain no viable donor lymphocytes to engraft.\n\nTakeaway: Irradiate cellular products for immunocompromised recipients and for donations from relatives to prevent TA-GVHD.",
 "w": [
  "",
  "An immunocompetent adult receiving blood from an unrelated donor destroys the donor T cells normally, so the risk is negligible.",
  "Pregnancy is not an indication for irradiation, since the mother's immune system remains competent.",
  "Chronic transfusion in sickle cell disease raises the risk of alloimmunization and iron overload, but these patients are not immunosuppressed.",
  "Factor concentrates are plasma-derived and acellular, so they contain no viable donor lymphocytes to engraft."
 ],
 "fig": [
  "figs/crs/bg-processing"
 ]
},
{
 "t": "Lecture 15 · Blood Groups & Transfusion",
 "s": "A 55-year-old man receives 12 units of red cells after a ruptured aortic aneurysm. His ionized calcium falls and the QT interval lengthens. Which of the following explains this finding?",
 "c": [
  "Potassium leaking from stored red cells displaces calcium",
  "Dilution of albumin lowers total calcium",
  "Citrate in the stored units chelates ionized calcium",
  "Hypothermia shifts calcium into the cells",
  "Lactate accumulation binds calcium in the plasma"
 ],
 "a": 2,
 "e": "Blood products are anticoagulated with citrate, which prevents clotting by binding calcium, since calcium is factor IV and is needed for almost every step of the coagulation cascade. The liver normally metabolizes citrate within minutes, so a single unit causes no trouble.\n\nIn massive transfusion the citrate load arrives faster than the liver can clear it, especially if hepatic perfusion is poor from shock. The excess citrate chelates the patient's own ionized calcium. Falling ionized calcium destabilizes excitable membranes, producing perioral tingling and muscle cramps, and it prolongs the plateau phase of the cardiac action potential, which lengthens the QT interval. Treatment is intravenous calcium given separately from the blood, never added to the unit, where it would cause clotting.\n\nWhy the other choices are wrong:\n• Potassium leaking from stored red cells displaces calcium: Potassium does leak from stored cells and can cause hyperkalemia, but it does not bind or displace calcium, and hyperkalemia produces peaked T waves rather than a long QT.\n• Dilution of albumin lowers total calcium: Albumin dilution lowers total calcium while leaving the ionized fraction and the QT interval unchanged, so it does not explain these findings.\n• Hypothermia shifts calcium into the cells: Hypothermia is a genuine risk of massive transfusion and causes arrhythmias and coagulopathy, but it does not chelate calcium.\n• Lactate accumulation binds calcium in the plasma: Lactate accumulates in shock and causes acidosis, which if anything raises ionized calcium by displacing it from albumin.\n\nTakeaway: Citrate in massively transfused blood chelates ionized calcium, causing tetany and a prolonged QT.",
 "w": [
  "Potassium does leak from stored cells and can cause hyperkalemia, but it does not bind or displace calcium, and hyperkalemia produces peaked T waves rather than a long QT.",
  "Albumin dilution lowers total calcium while leaving the ionized fraction and the QT interval unchanged, so it does not explain these findings.",
  "",
  "Hypothermia is a genuine risk of massive transfusion and causes arrhythmias and coagulopathy, but it does not chelate calcium.",
  "Lactate accumulates in shock and causes acidosis, which if anything raises ionized calcium by displacing it from albumin."
 ],
 "fig": [
  "figs/crs/bg-components"
 ]
},
{
 "t": "Lecture 15 · Blood Groups & Transfusion",
 "s": "A patient with a hemoglobin of 6.8 g/dL and no active bleeding is admitted to the intensive care unit. According to the restrictive transfusion strategy, what is the appropriate target range after transfusion?",
 "c": [
  "10 to 12 g/dL",
  "9 to 10 g/dL",
  "12 to 14 g/dL",
  "Above 11 g/dL in all patients",
  "7 to 9 g/dL"
 ],
 "a": 4,
 "e": "The TRICC trial compared a restrictive strategy, transfusing at a hemoglobin below 7.0 g/dL and targeting 7 to 9 g/dL, with a liberal strategy targeting around 10 g/dL. The restrictive approach reduced 30-day mortality and cardiac events.\n\nThe explanation is that transfusion is not risk-free: each unit carries the possibility of hemolytic and febrile reactions, TRALI, TACO, alloimmunization and infection, and stored red cells have reduced 2,3-BPG and deformability immediately after transfusion. For a hemodynamically stable patient, tolerating a moderate anemia is safer than correcting it to a normal number. Since one unit raises the hemoglobin by about 1 g/dL, this patient usually needs one unit to reach the target.\n\nWhy the other choices are wrong:\n• 10 to 12 g/dL: Ten to twelve is the liberal strategy, which performed worse than the restrictive approach in the TRICC trial.\n• 9 to 10 g/dL: Nine to ten overshoots the evidence-based target and leads to unnecessary units.\n• 12 to 14 g/dL: Twelve to fourteen is a normal hemoglobin and would require many unnecessary transfusions, each adding risk.\n• Above 11 g/dL in all patients: A universal threshold above 11 ignores the trial evidence entirely and maximizes exposure to transfusion risk.\n\nTakeaway: The restrictive standard is to transfuse below 7 g/dL and target 7 to 9 g/dL.",
 "w": [
  "Ten to twelve is the liberal strategy, which performed worse than the restrictive approach in the TRICC trial.",
  "Nine to ten overshoots the evidence-based target and leads to unnecessary units.",
  "Twelve to fourteen is a normal hemoglobin and would require many unnecessary transfusions, each adding risk.",
  "A universal threshold above 11 ignores the trial evidence entirely and maximizes exposure to transfusion risk.",
  ""
 ],
 "fig": [
  "figs/crs/bg-components"
 ]
},
{
 "t": "Lecture 15 · Blood Groups & Transfusion",
 "s": "A kidney transplanted from a deceased donor becomes mottled and fails within minutes of reperfusion. Which of the following is the most likely cause?",
 "c": [
  "T lymphocyte-mediated attack on donor HLA",
  "Preformed antibodies against the graft",
  "Calcineurin inhibitor nephrotoxicity",
  "Recurrence of the original glomerular disease",
  "Donor lymphocytes attacking recipient tissue"
 ],
 "a": 1,
 "e": "Failure within minutes of reperfusion is hyperacute rejection, and the timing itself identifies the mechanism. Nothing can be newly synthesized that fast, so the effector must already have been present in the recipient's circulation.\n\nPreformed antibodies, typically anti-ABO or anti-HLA from prior transfusions, pregnancies or transplants, bind the donor vascular endothelium as soon as blood enters the graft. They activate complement, which triggers widespread thrombosis in the graft vessels, so the organ becomes mottled and infarcts on the operating table. This is a type II hypersensitivity reaction, and it is prevented by ABO matching and a pretransplant crossmatch that tests recipient serum against donor lymphocytes.\n\nWhy the other choices are wrong:\n• T lymphocyte-mediated attack on donor HLA: T cell-mediated rejection is acute rejection, which takes weeks to months because naive T cells must be activated and clonally expanded first.\n• Calcineurin inhibitor nephrotoxicity: Calcineurin inhibitor nephrotoxicity develops with ongoing drug exposure over days to weeks and does not cause immediate intraoperative graft loss.\n• Recurrence of the original glomerular disease: Recurrent glomerular disease affects the graft over months to years and cannot explain failure within minutes.\n• Donor lymphocytes attacking recipient tissue: Donor lymphocytes attacking the recipient is graft-versus-host disease, which damages skin, gut and liver rather than destroying the graft itself.\n\nTakeaway: Hyperacute rejection occurs within minutes from preformed recipient antibodies causing complement activation and graft vessel thrombosis.",
 "w": [
  "T cell-mediated rejection is acute rejection, which takes weeks to months because naive T cells must be activated and clonally expanded first.",
  "",
  "Calcineurin inhibitor nephrotoxicity develops with ongoing drug exposure over days to weeks and does not cause immediate intraoperative graft loss.",
  "Recurrent glomerular disease affects the graft over months to years and cannot explain failure within minutes.",
  "Donor lymphocytes attacking the recipient is graft-versus-host disease, which damages skin, gut and liver rather than destroying the graft itself."
 ],
 "fig": [
  "figs/crs/bg-transplant"
 ]
},
{
 "t": "Lecture 15 · Blood Groups & Transfusion",
 "s": "A transplant recipient is started on a drug that binds cyclophilin and blocks calcineurin. Which of the following adverse effects is most characteristic of this drug?",
 "c": [
  "Bone marrow suppression with megaloblastic change",
  "Hemorrhagic cystitis",
  "Pulmonary fibrosis",
  "Nephrotoxicity and gum overgrowth",
  "Peripheral neuropathy with foot drop"
 ],
 "a": 3,
 "e": "Binding cyclophilin identifies the drug as cyclosporine. Tacrolimus is the other calcineurin inhibitor, but it binds FKBP instead. Both drugs prevent calcineurin from dephosphorylating NFAT, so NFAT cannot enter the nucleus and IL-2 is not transcribed, which blocks T-helper cell proliferation without depressing the bone marrow.\n\nCyclosporine's characteristic toxicities are nephrotoxicity, which is dose-dependent and the main limit on its use, together with gingival hyperplasia and hirsutism. Hypertension and hyperuricemia with gout also occur. Tacrolimus shares the nephrotoxicity and neurotoxicity but causes more hyperglycemia and new-onset diabetes, and it does not cause gingival overgrowth.\n\nWhy the other choices are wrong:\n• Bone marrow suppression with megaloblastic change: Marrow suppression is the hallmark of antimetabolites such as azathioprine and mycophenolate, whereas calcineurin inhibitors spare the marrow.\n• Hemorrhagic cystitis: Hemorrhagic cystitis is caused by the acrolein metabolite of cyclophosphamide and is prevented with mesna.\n• Pulmonary fibrosis: Pulmonary fibrosis is associated with bleomycin, busulfan and amiodarone rather than with calcineurin inhibitors.\n• Peripheral neuropathy with foot drop: Peripheral neuropathy with foot drop suggests vincristine, which is a vinca alkaloid used in chemotherapy.\n\nTakeaway: Cyclosporine binds cyclophilin to block calcineurin and IL-2 transcription, and causes nephrotoxicity with gingival hyperplasia and hirsutism.",
 "w": [
  "Marrow suppression is the hallmark of antimetabolites such as azathioprine and mycophenolate, whereas calcineurin inhibitors spare the marrow.",
  "Hemorrhagic cystitis is caused by the acrolein metabolite of cyclophosphamide and is prevented with mesna.",
  "Pulmonary fibrosis is associated with bleomycin, busulfan and amiodarone rather than with calcineurin inhibitors.",
  "",
  "Peripheral neuropathy with foot drop suggests vincristine, which is a vinca alkaloid used in chemotherapy."
 ],
 "fig": [
  "figs/crs/bg-transplant"
 ]
},
{
 "t": "Lecture 15 · Blood Groups & Transfusion",
 "s": "An infant born to a mother with type O blood develops mild jaundice within 24 hours of birth. The infant is type A. The direct Coombs test is weakly positive. Which of the following best explains this presentation?",
 "c": [
  "Maternal anti-A IgG crossing the placenta",
  "Maternal anti-A IgM crossing the placenta",
  "Physiologic jaundice of the newborn",
  "Glucose-6-phosphate dehydrogenase deficiency",
  "Biliary atresia presenting in the first day"
 ],
 "a": 0,
 "e": "ABO hemolytic disease of the newborn differs from Rh disease in an important way. Type O individuals produce not only IgM anti-A and anti-B but also a significant IgG component, and IgG is the only immunoglobulin class transported across the placenta.\n\nThat maternal IgG anti-A coats the type A infant's red cells, giving a weakly positive direct Coombs test and mild hemolysis. Because fetal A and B antigens are not fully developed and are also expressed on many other tissues that absorb the antibody, the hemolysis is mild. Two features distinguish it from Rh disease: it can affect a first pregnancy, since the antibodies are naturally occurring rather than requiring sensitization, and it is usually mild enough to treat with phototherapy alone. Jaundice within the first 24 hours is never physiologic.\n\nWhy the other choices are wrong:\n• Maternal anti-A IgM crossing the placenta: IgM is a large pentamer that cannot cross the placenta, which is why ABO disease depends on the IgG fraction that type O mothers produce.\n• Physiologic jaundice of the newborn: Physiologic jaundice appears after 24 hours of life and has a negative direct Coombs test, since no antibody is coating the cells.\n• Glucose-6-phosphate dehydrogenase deficiency: G6PD deficiency can cause neonatal jaundice, but the direct Coombs test is negative because the hemolysis is oxidative rather than immune.\n• Biliary atresia presenting in the first day: Biliary atresia causes conjugated hyperbilirubinemia presenting after the first few weeks, with pale stools and dark urine.\n\nTakeaway: ABO hemolytic disease occurs when a type O mother's IgG anti-A or anti-B crosses the placenta, and it can affect a first pregnancy.",
 "w": [
  "",
  "IgM is a large pentamer that cannot cross the placenta, which is why ABO disease depends on the IgG fraction that type O mothers produce.",
  "Physiologic jaundice appears after 24 hours of life and has a negative direct Coombs test, since no antibody is coating the cells.",
  "G6PD deficiency can cause neonatal jaundice, but the direct Coombs test is negative because the hemolysis is oxidative rather than immune.",
  "Biliary atresia causes conjugated hyperbilirubinemia presenting after the first few weeks, with pale stools and dark urine."
 ],
 "fig": [
  "figs/crs/bg-abo-table"
 ]
},
{
 "t": "Lecture 15 · Blood Groups & Transfusion",
 "s": "A patient with known selective IgA deficiency and anti-IgA antibodies requires red cells. Which modification of the unit is most appropriate?",
 "c": [
  "Irradiated red cells",
  "Leukoreduced red cells",
  "Washed red cells",
  "Volume-reduced red cells",
  "Fresh units less than 7 days old"
 ],
 "a": 2,
 "e": "Patients with selective IgA deficiency can form anti-IgA antibodies. When a product containing donor IgA is infused, those antibodies trigger an anaphylactic reaction within minutes, with urticaria, bronchospasm, angioedema and hypotension.\n\nThe trigger is a soluble plasma protein, so the solution is to remove the plasma. Saline washing rinses residual plasma, including IgA, from the cellular component, and the slide lists this indication explicitly alongside severe anaphylactic reactions. An alternative is to obtain components from IgA-deficient donors through a rare donor registry.\n\nWhy the other choices are wrong:\n• Irradiated red cells: Irradiation inactivates donor T lymphocytes to prevent graft-versus-host disease and has no effect on plasma IgA.\n• Leukoreduced red cells: Leukoreduction removes white cells to prevent febrile reactions, HLA alloimmunization and CMV transmission, but soluble IgA remains in the unit.\n• Volume-reduced red cells: Volume reduction limits the infused volume to prevent circulatory overload and does not reliably remove enough IgA.\n• Fresh units less than 7 days old: Unit age affects potassium load and 2,3-BPG content rather than IgA content, so fresher units would not prevent anaphylaxis.\n\nTakeaway: Wash cellular products to remove plasma IgA in IgA-deficient patients with anti-IgA antibodies.",
 "w": [
  "Irradiation inactivates donor T lymphocytes to prevent graft-versus-host disease and has no effect on plasma IgA.",
  "Leukoreduction removes white cells to prevent febrile reactions, HLA alloimmunization and CMV transmission, but soluble IgA remains in the unit.",
  "",
  "Volume reduction limits the infused volume to prevent circulatory overload and does not reliably remove enough IgA.",
  "Unit age affects potassium load and 2,3-BPG content rather than IgA content, so fresher units would not prevent anaphylaxis."
 ],
 "fig": [
  "figs/crs/bg-processing"
 ]
}
]
}
];
