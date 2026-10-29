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
}
];
