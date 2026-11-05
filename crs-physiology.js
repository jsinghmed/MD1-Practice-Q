// CRS Physiology — Dr. Sampath V. lecture slides. Reworked set: fewer, multi-concept, high-yield questions; lv = Easy/Hard; sampath = Challenge Yourself questions from the slides, word for word
window.CRS_PH_TOPICS = ["Big Picture & Cardiac Cell Types", "Conduction System Anatomy", "Fast vs Slow Response", "Phase 0 & Na⁺ Channel Gates", "Phase 1 · The Notch", "Phase 2 · Plateau & E–C Coupling", "Phases 3 & 4 · Reset and Rest", "Refractory Periods", "Na⁺ Channel States", "Why the AP & Refractory Period Are Long", "Challenge Yourself · Sampath's Q's", "Pacemaker Cells, Automaticity & Key Terms", "Slow vs Fast Response APs", "Phase 4 · Pacemaker Potential", "Phase 0 · L-type Ca²⁺ Upstroke", "Phase 3 · Nodal Repolarization", "Pacemaker Hierarchy & Overdrive Suppression", "Challenge · Pacemaker Currents"];
window.CRS_PH_QUESTIONS = [
{
"t": "Big Picture & Cardiac Cell Types",
"lv": "Easy",
"s": "Which pairing of cardiac cell type with its job and AP type is correct?",
"c": [
"Ventricular myocyte: automaticity, slow response; SA node: force, fast response",
"Purkinje fiber: force production, slow response",
"AV node: force production, fast response",
"Atrial myocyte: automaticity, slow response",
"Myocyte: force, fast response; SA node: rhythm, slow"
],
"a": 4,
"e": "Two archetypes: contractile myocytes (\"workers\": atrial and ventricular) produce force, have fast-response APs and are joined by gap junctions into a functional syncytium. Pacemaker/conducting cells (\"managers\": SA node, AV node, His, Purkinje) provide automaticity and conduction; the SA and AV nodes have slow-response APs.",
"w": [
"The roles and AP types are swapped.",
"Purkinje fibers conduct rapidly; they are not the force producers.",
"The AV node is a slow-response pacemaker/conducting cell.",
"Atrial myocytes are contractile, fast-response cells.",
""
],
"src": "lec"
},
{
"t": "Big Picture & Cardiac Cell Types",
"lv": "Easy",
"s": "Why does the ventricle contract as a single unit?",
"c": [
"Every myocyte receives its own nerve fiber",
"Gap junctions in intercalated discs pass current",
"Each myocyte depolarizes on its own at the same time",
"The fibrous skeleton conducts the impulse through the ventricle",
"Calcium diffuses from cell to cell through desmosomes"
],
"a": 1,
"e": "Gap junctions in the intercalated discs electrically couple myocytes, so depolarization spreads cell to cell and the myocardium behaves as a functional syncytium, contracting as one unit.",
"w": [
"Cardiac muscle is not individually innervated like skeletal muscle.",
"",
"Working myocytes have no automaticity.",
"The fibrous skeleton insulates; it does not conduct.",
"Desmosomes give mechanical strength; gap junctions pass current."
],
"src": "lec"
},
{
"t": "Big Picture & Cardiac Cell Types",
"lv": "Easy",
"s": "The heart's two electrical jobs are generating a rhythm and coordinating contraction. Which pairing is correct?",
"c": [
"Rhythm: ventricular myocytes; coordination: fibrous skeleton",
"Rhythm: Purkinje fibers only; coordination: gap junctions alone",
"Rhythm: autonomic nerves; coordination: the SR",
"Rhythm: pacemaker cells; coordination: conduction system",
"Rhythm: AV node; coordination: ventricles before atria"
],
"a": 3,
"e": "Electrical activity dictates mechanical function. Job 1, generate a rhythm: pacemaker cells. Job 2, coordinate contraction: the conduction system makes the atria contract before the ventricles. Arrhythmias are diseases of this system.",
"w": [
"Myocytes cannot generate a rhythm, and the skeleton insulates.",
"The SA node normally sets the rhythm.",
"Nerves modify rate but do not generate the rhythm.",
"",
"The SA node leads, and atria contract first."
],
"src": "lec"
},
{
"t": "Conduction System Anatomy",
"lv": "Easy",
"s": "What is the only muscular electrical connection between the atria and the ventricles?",
"c": [
"The coronary sinus",
"The AV bundle of His",
"The internodal pathways",
"The cardiac fibrous skeleton",
"The right bundle branch"
],
"a": 1,
"e": "The AV bundle of His is the only muscular connection between atria and ventricles; the cardiac fibrous skeleton insulates everywhere else. That forces every impulse through the AV node and His bundle.",
"w": [
"The coronary sinus is a vein.",
"",
"These run within the atria.",
"It insulates the atria from the ventricles.",
"Bundle branches are within the ventricles, below the His bundle."
],
"src": "lec"
},
{
"t": "Conduction System Anatomy",
"lv": "Hard",
"s": "A surgeon is working near the opening of the coronary sinus in the interatrial septum. Damage here would most directly disrupt which function?",
"c": [
"The SA node's role as the heart's primary pacemaker",
"Fast conduction down the interventricular septum",
"Excitation of the papillary muscles by Purkinje fibers",
"Insulation of the atria from the ventricles",
"The AV delay that lets atria contract first"
],
"a": 4,
"e": "The AV node sits in the interatrial septum, anterior to the opening of the coronary sinus. It has the slowest conduction, creating the crucial delay so the atria finish contracting before the ventricles. Path: SA node (right atrium, below SVC opening) → internodal pathways → AV node → His (septum) → bundle branches → Purkinje.",
"w": [
"The SA node lies in the right atrial wall below the SVC opening.",
"That is the bundle of His and bundle branches.",
"Purkinje fibers are in the ventricular walls.",
"The fibrous skeleton does that, not the AV node.",
""
],
"src": "lec"
},
{
"t": "Fast vs Slow Response",
"lv": "Easy",
"s": "Which feature belongs only to slow-response cells?",
"c": [
"Automaticity from phase 4",
"A plateau phase",
"A stable resting potential near −90 mV",
"A Na⁺-driven upstroke",
"Fast conduction"
],
"a": 0,
"e": "Slow-response (SA/AV node): unstable phase 4 → automaticity, Ca²⁺ upstroke, no plateau, slow conduction. Fast-response cells have a stable −90 mV rest and need an external stimulus.",
"w": [
"",
"Plateaus belong to fast-response cells.",
"That is the fast-response cell.",
"Slow-response upstrokes are Ca²⁺-driven.",
"Slow-response cells conduct slowly."
],
"src": "lec"
},
{
"t": "Fast vs Slow Response",
"lv": "Hard",
"s": "Two recordings are compared. Cell X rests at −90 mV, has a steep Na⁺ upstroke and a plateau. Cell Y has no stable rest, a slow Ca²⁺ upstroke and no plateau. Which statement is correct?",
"c": [
"X has automaticity and conducts slowly; Y needs an outside stimulus",
"Y has automaticity and conducts slowly; X does not",
"Both fire on their own, but Y is faster",
"X is an SA node cell and Y is a Purkinje fiber",
"Y conducts fastest because its upstroke uses Ca²⁺"
],
"a": 1,
"e": "Fast response (ventricular myocyte, X): stable rest ≈ −90 mV, Na⁺ upstroke, plateau, no automaticity. Slow response (SA/AV node, Y): unstable rest, Ca²⁺ upstroke (L-type), no plateau, automaticity driven by phase 4. A steep phase 0 means fast conduction; a shallow one means slow conduction. Memory hook: Fast = Na⁺ · Slow = Ca²⁺ · only the slow ones fire on their own.",
"w": [
"The fast-response cell X has no automaticity.",
"",
"Only slow-response cells fire on their own, and they conduct slowly.",
"X is a working myocyte; Y is an SA or AV nodal cell.",
"A shallow Ca²⁺ upstroke conducts slowly."
],
"src": "lec"
},
{
"t": "Phase 0 & Na⁺ Channel Gates",
"lv": "Easy",
"s": "A ventricular myocyte is depolarized by its neighbour to about −65 mV. What happens next?",
"c": [
"L-type Ca²⁺ channels open and drive the upstroke",
"Inward-rectifier K⁺ channels open to start the plateau",
"Fast Na⁺ channels open and Na⁺ rushes in",
"Transient K⁺ channels open, causing the upstroke",
"Funny current HCN channels open"
],
"a": 2,
"e": "Threshold ≈ −65 mV: fast voltage-gated Na⁺ channels open, Na⁺ floods in and the membrane shoots to just above 0 mV (peak about +30 mV). This steep phase 0 gives fast conduction.",
"w": [
"That is the nodal upstroke; in myocytes Ca²⁺ enters during the plateau.",
"I_K1 holds the resting potential and shuts off on depolarization.",
"",
"I_TO causes the phase 1 notch.",
"HCN channels drive nodal phase 4, opened by hyperpolarization."
],
"src": "lec"
},
{
"t": "Phase 1 · The Notch",
"lv": "Easy",
"s": "What causes the brief notch of phase 1 in a ventricular myocyte?",
"c": [
"L-type Ca²⁺ channels open fully",
"Inward-rectifier K⁺ channels reopen",
"The Na⁺/K⁺ ATPase speeds up",
"Funny current Na⁺ channels close",
"Na⁺ channels inactivate; I_TO opens"
],
"a": 4,
"e": "Phase 1: fast Na⁺ channels inactivate (h gates close) and transient outward K⁺ channels (I_TO) briefly open → small partial repolarization toward 0 mV: the notch.",
"w": [
"Ca²⁺ influx supports the plateau, phase 2.",
"I_K1 returns at rest and late phase 3.",
"The pump restores gradients; it does not create the notch.",
"Funny current is a nodal phase 4 current.",
""
],
"src": "lec"
},
{
"t": "Phase 2 · Plateau & E–C Coupling",
"lv": "Easy",
"s": "During the phase 2 plateau, which two currents are roughly balanced?",
"c": [
"Inward Na⁺ and outward Ca²⁺",
"Inward funny current and outward K⁺",
"Inward K⁺ and outward Na⁺",
"Inward L-type Ca²⁺ and outward K⁺",
"Inward Cl⁻ and outward Ca²⁺"
],
"a": 3,
"e": "Plateau, 150–300 ms near 0 mV: I_Ca ≈ I_K. Inward L-type Ca²⁺ is balanced by outward delayed-rectifier K⁺, so voltage stays flat.",
"w": [
"Na⁺ channels are inactivated during the plateau.",
"Funny current is nodal phase 4.",
"Current directions are reversed.",
"",
"Not the currents taught for the plateau."
],
"src": "lec"
},
{
"t": "Phase 2 · Plateau & E–C Coupling",
"lv": "Hard",
"s": "An isolated heart is moved into a Ca²⁺-free bath. Action potentials still fire, but contraction stops. Which explanation is correct?",
"c": [
"Without Ca²⁺, fast Na⁺ channels cannot open for phase 0",
"The SR in cardiac muscle stores no Ca²⁺ at all",
"Plateau Ca²⁺ influx triggers SR Ca²⁺ release",
"Ca²⁺ is needed only to repolarize the cell in phase 3",
"Troponin in cardiac muscle binds Na⁺ instead of Ca²⁺"
],
"a": 2,
"e": "Excitation–contraction coupling: during the phase 2 plateau, L-type Ca²⁺ enters and triggers Ca²⁺-induced Ca²⁺ release from the SR → contraction. Cardiac myocytes require extracellular Ca²⁺; skeletal muscle does not. So in a Ca²⁺-free bath the electrical AP persists but contraction fails. The plateau is a contraction trigger, not just an electrical feature.",
"w": [
"APs still fire, so the Na⁺ upstroke is intact.",
"The SR holds most of the Ca²⁺; it needs a trigger to release it.",
"",
"Repolarization uses K⁺ efflux.",
"Troponin binds Ca²⁺."
],
"src": "lec"
},
{
"t": "Phase 2 · Plateau & E–C Coupling",
"lv": "Hard",
"s": "A patient is given verapamil, an L-type Ca²⁺ channel blocker. Which set of effects is expected?",
"c": [
"Stronger contraction, faster rate, faster AV conduction",
"Weaker contraction only; nodal cells are unaffected",
"Weaker contraction, slower rate and AV conduction",
"Loss of the phase 0 upstroke in ventricular myocytes",
"Longer phase 1 notch and vasoconstriction"
],
"a": 2,
"e": "Verapamil blocks L-type Ca²⁺: (1) less plateau Ca²⁺ → less SR release → weaker contraction; (2) the SA and AV nodal upstroke is Ca²⁺-carried → slower rate and slower AV conduction; (3) vasodilation in vascular smooth muscle.",
"w": [
"Less Ca²⁺ entry weakens contraction and slows the nodes.",
"Nodal upstrokes are Ca²⁺-carried, so the nodes slow too.",
"",
"Ventricular phase 0 is Na⁺, so it is preserved.",
"Ca²⁺ blockers dilate vessels and do not act on I_TO."
],
"src": "lec"
},
{
"t": "Phases 3 & 4 · Reset and Rest",
"lv": "Easy",
"s": "After phase 3, which mechanisms restore the ion gradients?",
"c": [
"Fast Na⁺ channels reopening",
"L-type Ca²⁺ channels pumping Ca²⁺ out",
"Gap junctions removing excess ions",
"Na⁺/Ca²⁺ exchanger and ATPase pumps",
"Funny current channels"
],
"a": 3,
"e": "Ion channels only let ions flow down their gradients. The Na⁺/Ca²⁺ exchanger and ATPases (Na⁺/K⁺ pump, Ca²⁺ pumps) restore the gradients after each beat.",
"w": [
"Channels let ions run down gradients; they do not restore them.",
"Channels are passive and are closing in phase 3.",
"Gap junctions pass current between cells.",
"",
"These are nodal phase 4 channels."
],
"src": "lec"
},
{
"t": "Phases 3 & 4 · Reset and Rest",
"lv": "Hard",
"s": "Which pairing of phase, dominant current and what happens is correct?",
"c": [
"Phase 3: Na⁺ influx returns; phase 4: Ca²⁺ influx holds −90 mV",
"Phase 3: transient K⁺ notch; phase 4: funny current drifts up",
"Phase 3: Ca²⁺ channels open more; phase 4: K⁺ permeability is low",
"Phase 3: I_K1 starts the plateau; phase 4: Na⁺ channels stay open",
"Phase 3: K⁺ efflux wins; phase 4: I_K1 holds −90 mV"
],
"a": 4,
"e": "Phase 3: L-type Ca²⁺ channels inactivate while delayed-rectifier K⁺ channels open widely → net outward current → back to −90 mV. Na⁺/Ca²⁺ exchanger and ATPases restore gradients. Phase 4: constant K⁺ efflux through inward-rectifier (I_K1) channels keeps a stable −90 mV; high K⁺ permeability; no spontaneous depolarization, so the cell waits for a stimulus.",
"w": [
"Phase 3 is K⁺ efflux, and phase 4 is held by I_K1.",
"Those describe phase 1 and nodal phase 4.",
"Ca²⁺ channels inactivate in phase 3, and K⁺ permeability is high at rest.",
"Na⁺ and Ca²⁺ channels are closed at rest.",
""
],
"src": "lec"
},
{
"t": "Refractory Periods",
"lv": "Easy",
"s": "During the effective refractory period, why can no new AP fire whatever the stimulus strength?",
"c": [
"The cell is hyperpolarized below −90 mV",
"K⁺ channels are all closed",
"Na⁺ channels are inactivated, h closed",
"Ca²⁺ stores are empty",
"Gap junctions close during the plateau"
],
"a": 2,
"e": "Excitability depends on Na⁺ channel state, not just voltage. From phase 0 to about −50 mV in phase 3, the channels are inactivated (h gate closed) and cannot reopen, so no stimulus can trigger a new AP.",
"w": [
"The cell is depolarized during this period.",
"K⁺ channels are opening as the cell repolarizes.",
"",
"Refractoriness depends on Na⁺ channel state.",
"Gap junctions stay open."
],
"src": "lec"
},
{
"t": "Refractory Periods",
"lv": "Hard",
"s": "A strong stimulus reaches a ventricular myocyte during the plateau, and a second one in late phase 3 at about −60 mV. What happens?",
"c": [
"A full AP from both",
"A full AP from the first; none from the second",
"No AP from either because Na⁺ channels never recover",
"None from the first; a smaller AP from the second",
"A larger-than-normal AP from the second"
],
"a": 3,
"e": "Absolute (effective) refractory period: phases 0, 1, 2 and the first half of 3 (to about −50 mV); Na⁺ channels inactivated, so no AP whatever the stimulus. Relative: second half of phase 3 (−50 to −70 mV); some channels recovered, so a stronger stimulus gives an AP of lower amplitude. Supranormal: a brief window at the end where a weaker stimulus can fire.",
"w": [
"The plateau is in the absolute refractory period.",
"The order is reversed.",
"Na⁺ channels recover during late phase 3.",
"",
"That would be the supranormal period, at the very end of repolarization."
],
"src": "lec"
},
{
"t": "Na⁺ Channel States",
"lv": "Easy",
"s": "Lidocaine is used as an antiarrhythmic. Which current does it block, and what does that affect most?",
"c": [
"I_Ca-L, the plateau Ca²⁺ current",
"I_K, the phase 3 repolarizing current",
"I_f, the nodal funny current",
"I_K1, the resting K⁺ current",
"I_Na, the fast Na⁺ current of phase 0"
],
"a": 4,
"e": "Lidocaine, a local anesthetic antiarrhythmic, blocks I_Na, the fast Na⁺ current of phase 0 in fast-response cells. Antiarrhythmic drugs work by targeting specific Na⁺, Ca²⁺ and K⁺ channels.",
"w": [
"That is verapamil's target.",
"Not lidocaine's target.",
"That is ivabradine's target.",
"Not lidocaine's target.",
""
],
"src": "lec"
},
{
"t": "Na⁺ Channel States",
"lv": "Hard",
"s": "Which gate positions match the Na⁺ channel during phase 4, phase 0 and the plateau?",
"c": [
"m closed h open; m open h open; m open h closed",
"m open h closed; m open h open; m closed h open",
"m closed h closed; m open h open; m closed h closed",
"m closed h open; m open h closed; m open h open",
"m open h open; m closed h open; m closed h closed"
],
"a": 0,
"e": "m = activation gate, h = inactivation gate. Phase 4 resting/available: m closed, h open. Phase 0 open: m open, h open → Na⁺ rushes in. Phases 1–2 inactivated: m open, h closed → no current whatever the stimulus. Late phase 3: h reopens (recovery). Lecture note: h gates close on their own shortly after opening and reopen only as the cell repolarizes.",
"w": [
"",
"The order is reversed: rest has m closed and h open.",
"At rest the h gate is open, making the channel available.",
"During phase 0 both gates are open; during the plateau h is closed.",
"At rest the m gate is closed."
],
"src": "lec"
},
{
"t": "Why the AP & Refractory Period Are Long",
"lv": "Hard",
"s": "Why can't the heart go into tetanic contraction like skeletal muscle, and which phase is responsible?",
"c": [
"Phase 0 is too slow to allow summation",
"Phase 4 drifts up between beats",
"Phase 1 lets Ca²⁺ leave before contraction",
"The plateau keeps it refractory",
"Phase 3 is too fast for a second AP to land"
],
"a": 3,
"e": "Cardiac AP ≈ 300 ms vs neuron ≈ 1 ms and skeletal muscle ≈ 10 ms. The single phase responsible is the phase 2 plateau. Long AP + long refractory period → no re-excitation mid-contraction → no tetany. Benefits: guaranteed relaxation and time for ventricular filling in diastole; full ejection in systole. Downside: uneven refractory periods can set up re-entrant arrhythmias.",
"w": [
"Phase 0 in ventricular cells is fast.",
"Working myocytes have a stable phase 4.",
"The notch is brief and is not the reason.",
"",
"The long refractory period, not a fast phase 3, prevents it."
],
"src": "lec"
},
{
"t": "Why the AP & Refractory Period Are Long",
"lv": "Hard",
"s": "A ventricular cell's refractory periods become uneven: some regions recover early and others late. What problem can this cause?",
"c": [
"Tetanic contraction of the ventricle",
"A re-entrant arrhythmia",
"Complete loss of automaticity in the SA node",
"Faster conduction through the AV node",
"A shorter phase 0 in every cell"
],
"a": 1,
"e": "The flip side of a long refractory period: if refractory periods are heterogeneous, an impulse arriving at the wrong time can travel through recovered tissue and loop back into tissue that has since recovered: a re-entrant arrhythmia.",
"w": [
"The long plateau still prevents tetany.",
"",
"Uneven ventricular refractoriness does not stop the SA node.",
"Not the consequence taught.",
"Not the consequence taught."
],
"src": "lec"
},
{
"t": "Challenge Yourself · Sampath's Q's",
"s": "Questions 3–4<br>Correlate the ionic mechanism to the appropriate phase (labeled A–E)<br><br>3. High Na⁺ conductance",
"html": true,
"img": "cp-fig1.svg",
"ns": true,
"sampath": 1,
"c": [
"Phase labeled A",
"Phase labeled B",
"Phase labeled C",
"Phase labeled D",
"Phase labeled E"
],
"a": 0,
"e": "A is Phase 0, the rapid upstroke: fast voltage-gated Na⁺ channels open and Na⁺ rushes in.",
"w": [
"A is the Phase 0 upstroke.",
"B is the peak and Phase 1 notch.",
"C is the Phase 2 plateau.",
"D is Phase 3 repolarization.",
"E is the Phase 4 resting potential."
],
"src": "lec"
},
{
"t": "Challenge Yourself · Sampath's Q's",
"s": "Questions 3–4<br>Correlate the ionic mechanism to the appropriate phase (labeled A–E)<br><br>4. High Ca²⁺ conductance",
"html": true,
"img": "cp-fig1.svg",
"ns": true,
"sampath": 1,
"c": [
"Phase labeled A",
"Phase labeled B",
"Phase labeled C",
"Phase labeled D",
"Phase labeled E"
],
"a": 2,
"e": "C is Phase 2, the plateau: L-type Ca²⁺ channels are open and Ca²⁺ influx balances K⁺ efflux.",
"w": [
"A is the Phase 0 upstroke.",
"B is the peak and Phase 1 notch.",
"C is the Phase 2 plateau.",
"D is Phase 3 repolarization.",
"E is the Phase 4 resting potential."
],
"src": "lec"
},
{
"t": "Challenge Yourself · Sampath's Q's",
"s": "Is it an AP of a slow or a fast fiber?",
"html": true,
"img": "cp-fig1.svg",
"ns": true,
"sampath": 1,
"c": [
"Slow fiber, an SA nodal cell",
"Slow fiber, an AV nodal cell",
"Fast fiber, a ventricular myocyte",
"Fast fiber, a motor neuron",
"Fast fiber, a skeletal muscle cell"
],
"a": 2,
"e": "It is a fast fiber: a stable rest near −80 to −90 mV, a steep Phase 0 upstroke, a notch and a long plateau. That is the fast response AP of a ventricular myocyte.",
"w": [
"An SA nodal cell has no stable rest and no plateau.",
"An AV nodal cell has no stable rest and no plateau.",
"",
"A neuron AP lasts ~1 ms with no plateau.",
"A skeletal AP lasts ~10 ms with no plateau."
],
"src": "lec"
},
{
"t": "Challenge Yourself · Sampath's Q's",
"s": "What criterion you should use to distinguish between fast and slow fibers?",
"html": true,
"img": "cp-fig1.svg",
"ns": true,
"sampath": 1,
"c": [
"The height of the overshoot peak",
"The ion that carries the Phase 0 upstroke",
"The number of gap junctions per cell",
"The value of the K⁺ equilibrium potential",
"The amount of Ca²⁺ stored in the SR"
],
"a": 1,
"e": "Fast = Na⁺ upstroke · Slow = Ca²⁺ upstroke. A steep Na⁺-driven Phase 0 marks a fast fiber; a slow Ca²⁺-driven upstroke marks a slow fiber.",
"w": [
"Overshoot height is not the defining criterion.",
"",
"Gap junctions are not the criterion used.",
"EK is similar in both.",
"SR stores are not the criterion used."
],
"src": "lec"
},
{
"t": "Challenge Yourself · Sampath's Q's",
"s": "Explain the function of each ionic current. Know when it is turned on and off.<br><br>Which current is turned on only briefly at the very start of the AP and produces the upstroke?",
"html": true,
"img": "cp-fig2.svg",
"ns": true,
"sampath": 1,
"c": [
"INa",
"ICa",
"IK1",
"IK",
"ITO"
],
"a": 0,
"e": "INa is a large, very brief inward spike at time 0 — the fast Na⁺ current of Phase 0. It then turns off as the channels inactivate.",
"w": [
"",
"ICa turns on after the upstroke and lasts through the plateau.",
"IK1 is the resting current.",
"IK rises slowly during the plateau.",
"ITO is a brief outward current right after the upstroke."
],
"src": "lec"
},
{
"t": "Challenge Yourself · Sampath's Q's",
"s": "Explain the function of each ionic current. Know when it is turned on and off.<br><br>Which inward current turns on after the upstroke and slowly decays during the plateau?",
"html": true,
"img": "cp-fig2.svg",
"ns": true,
"sampath": 1,
"c": [
"INa",
"ICa",
"IK1",
"IK",
"ITO"
],
"a": 1,
"e": "ICa is the L-type Ca²⁺ current: it turns on after Phase 0 and slowly decays through the plateau, triggering SR Ca²⁺ release.",
"w": [
"INa lasts only a few ms.",
"",
"IK1 is outward and resting.",
"IK is outward.",
"ITO is outward and brief."
],
"src": "lec"
},
{
"t": "Challenge Yourself · Sampath's Q's",
"s": "Explain the function of each ionic current. Know when it is turned on and off.<br><br>Which current is on at rest, turns off during the plateau, and turns back on at the end of repolarization?",
"html": true,
"img": "cp-fig2.svg",
"ns": true,
"sampath": 1,
"c": [
"INa",
"ICa",
"IK1",
"IK",
"ITO"
],
"a": 2,
"e": "IK1, the inward rectifier, holds the resting potential. It shuts off when the cell depolarizes and turns back on during late Phase 3, helping finish repolarization.",
"w": [
"INa is off at rest.",
"ICa is off at rest.",
"",
"IK is off at rest and rises during the plateau.",
"ITO is off at rest."
],
"src": "lec"
},
{
"t": "Challenge Yourself · Sampath's Q's",
"s": "Explain the function of each ionic current. Know when it is turned on and off.<br><br>Which outward current slowly increases during the plateau and peaks as Phase 3 begins?",
"html": true,
"img": "cp-fig2.svg",
"ns": true,
"sampath": 1,
"c": [
"INa",
"ICa",
"IK1",
"IK",
"ITO"
],
"a": 3,
"e": "IK, the delayed rectifier, slowly builds during the plateau and drives the massive K⁺ efflux of Phase 3, then turns off at rest.",
"w": [
"INa is inward and brief.",
"ICa is inward.",
"IK1 is off during the plateau.",
"",
"ITO is brief and early."
],
"src": "lec"
},
{
"t": "Challenge Yourself · Sampath's Q's",
"s": "Explain the function of each ionic current. Know when it is turned on and off.<br><br>Which outward current turns on briefly just after the upstroke and makes the notch?",
"html": true,
"img": "cp-fig2.svg",
"ns": true,
"sampath": 1,
"c": [
"INa",
"ICa",
"IK1",
"IK",
"ITO"
],
"a": 4,
"e": "ITO, the transient outward K⁺ current, turns on briefly at the start of the AP and produces the Phase 1 notch, then turns off.",
"w": [
"INa is inward.",
"ICa is inward.",
"IK1 is off during the AP.",
"IK is slow, not transient.",
""
],
"src": "lec"
},
{
"t": "Challenge Yourself · Sampath's Q's",
"s": "Which current can be blocked by local anesthetic antiarrhythmic drugs (i.e., lidocaine)?",
"html": true,
"img": "cp-fig2.svg",
"ns": true,
"sampath": 1,
"c": [
"INa",
"ICa",
"IK1",
"IK",
"ITO"
],
"a": 0,
"e": "Lidocaine, a local anesthetic antiarrhythmic, blocks the fast Na⁺ current, INa, which carries the Phase 0 upstroke.",
"w": [
"",
"Ca²⁺ channels are blocked by drugs such as verapamil.",
"Not the lidocaine target.",
"Not the lidocaine target.",
"Not the lidocaine target."
],
"src": "lec"
},
{
"t": "Challenge Yourself · Sampath's Q's",
"s": "What are the effects of Ca++ blockers on the heart and blood vessels?",
"html": true,
"img": "cp-fig2.svg",
"ns": true,
"sampath": 1,
"c": [
"More force and vasoconstriction",
"Less force and vasodilation",
"More force and vasodilation",
"Less force and vasoconstriction",
"No change in force or tone"
],
"a": 1,
"e": "Ca²⁺ blockers reduce L-type Ca²⁺ influx. In the heart this weakens contraction, since less trigger Ca²⁺ means less SR Ca²⁺ release; they also slow SA and AV nodal cells, whose upstroke is Ca²⁺ carried. In blood vessels they relax smooth muscle, causing vasodilation.",
"w": [
"Less Ca²⁺ means less force, and vessels relax.",
"",
"Less Ca²⁺ means less, not more, force.",
"Vascular smooth muscle relaxes.",
"Both heart and vessels respond."
],
"src": "lec"
},
{
"t": "Pacemaker Cells, Automaticity & Key Terms",
"lv": "Easy",
"s": "Which pair of terms is defined correctly?",
"c": [
"Chronotropy: contractility; inotropy: heart rate",
"Automaticity: conduction speed; chronotropy: AP length",
"Inotropy: AV delay; chronotropy: refractory period",
"Chronotropy: rate; inotropy: contractility",
"Automaticity: needing a stimulus; inotropy: heart rate"
],
"a": 3,
"e": "Chronotropy = heart rate. Positive inotropy = more contractility. Automaticity = self-excitation, a self-generated unstable phase 4. Calcium is the coupler between the electrical and mechanical processes.",
"w": [
"The definitions are swapped.",
"Automaticity is self-excitation.",
"Not the definitions taught.",
"",
"Automaticity means firing without a stimulus."
],
"src": "lec"
},
{
"t": "Pacemaker Cells, Automaticity & Key Terms",
"lv": "Easy",
"s": "In which cells is phase 4 a pacemaker potential rather than a resting potential?",
"c": [
"Ventricular myocytes",
"Atrial myocytes",
"Skeletal muscle fibers",
"Neurons of the vagus nerve",
"SA and AV nodal cells"
],
"a": 4,
"e": "Phase 4 is the resting membrane potential in working cells but the pacemaker potential (prepotential) in nodal cells, where it drifts up on its own toward threshold.",
"w": [
"Their phase 4 is a stable resting potential.",
"Their phase 4 is a stable resting potential.",
"Skeletal muscle has no pacemaker potential.",
"Not the cells discussed.",
""
],
"src": "lec"
},
{
"t": "Pacemaker Cells, Automaticity & Key Terms",
"lv": "Easy",
"s": "Which statement about calcium in the heart is the key lecture point?",
"c": [
"Ca²⁺ carries the ventricular upstroke",
"Ca²⁺ sets the resting potential",
"It couples electrical and mechanical work",
"Ca²⁺ is needed only in skeletal muscle",
"Ca²⁺ blocks gap junctions between myocytes"
],
"a": 2,
"e": "Calcium is the coupler between electrical (chemical) and mechanical events: it carries the nodal upstroke and, in myocytes, enters during the plateau and triggers SR release and contraction.",
"w": [
"The ventricular upstroke is Na⁺.",
"K⁺ sets the resting potential.",
"",
"Cardiac muscle needs extracellular Ca²⁺.",
"Not the lecture point."
],
"src": "lec"
},
{
"t": "Slow vs Fast Response APs",
"lv": "Easy",
"s": "Which nodal AP feature explains why nodal cells have no true resting potential?",
"c": [
"Phase 4 drifts up on its own",
"Phase 0 uses Na⁺ instead of Ca²⁺",
"Phase 2 lasts longer than in myocytes",
"Phase 1 notch is deeper",
"I_K1 holds them at −90 mV"
],
"a": 0,
"e": "Nodal cells have only phases 0, 3 and 4. Their phase 4 is unstable: K⁺ decay, funny current and T-type Ca²⁺ make it drift up to threshold, so there is no stable resting potential. That drift is automaticity.",
"w": [
"",
"Nodal phase 0 uses Ca²⁺.",
"Nodal cells have no phase 2.",
"Nodal cells have no phase 1.",
"Strong I_K1 belongs to working myocytes."
],
"src": "lec"
},
{
"t": "Slow vs Fast Response APs",
"lv": "Hard",
"s": "Which comparison between a ventricular AP and an SA node AP is correct?",
"c": [
"Ventricle: Ca²⁺ upstroke, 3 phases; SA node: Na⁺ upstroke, 5 phases",
"Both have a plateau, but the SA node's is shorter",
"Ventricle: Na⁺, 5 phases; SA node: Ca²⁺, 3 phases",
"Ventricle: unstable rest; SA node: stable −90 mV rest",
"Both reach +30 mV with a steep phase 0"
],
"a": 2,
"e": "Ventricular (working): Na⁺ phase 0, 5 phases (0–4), stable −90 mV rest, plateau 150–300 ms, overshoot to about +30 mV, steep slope → fast conduction. SA node: Ca²⁺ phase 0, 3 phases (0, 3, 4), unstable rest drifting up, no plateau, peak about +10 mV, shallow slope → slow conduction.",
"w": [
"The ions and phase counts are swapped.",
"The SA node has no plateau.",
"",
"The ventricle has the stable rest.",
"The SA node upstroke is shallow and peaks near +10 mV."
],
"src": "lec"
},
{
"t": "Slow vs Fast Response APs",
"lv": "Hard",
"s": "A drug slows conduction through the AV node but does not change ventricular phase 0. Which drug class and reason fit?",
"c": [
"Na⁺ channel blocker; both upstrokes use Na⁺",
"Ca²⁺ blocker; only nodal phase 0 uses Ca²⁺",
"K⁺ channel blocker; it removes the AV plateau",
"HCN blocker; it slows the ventricular upstroke",
"Na⁺ channel opener; it inactivates nodal channels"
],
"a": 1,
"e": "Nodal (SA, AV) phase 0 is carried by L-type Ca²⁺; ventricular phase 0 by fast Na⁺. So an L-type Ca²⁺ channel blocker such as verapamil slows AV conduction and SA rate while leaving the ventricular upstroke intact.",
"w": [
"A Na⁺ blocker would slow ventricular phase 0, and nodal phase 0 is Ca²⁺.",
"",
"The AV node has no plateau.",
"HCN blockers act on nodal phase 4, not ventricular phase 0.",
"Not a drug class taught here."
],
"src": "lec"
},
{
"t": "Phase 4 · Pacemaker Potential",
"lv": "Easy",
"s": "What opens the HCN (funny) channels in nodal cells?",
"c": [
"Depolarization to threshold at −40 mV",
"Hyperpolarization near −60 mV",
"Ca²⁺ released from the SR",
"Stretch of the atrial wall",
"Depolarization to +10 mV at the peak"
],
"a": 1,
"e": "HCN channels are unusual: they are opened by hyperpolarization, so they open as the cell repolarizes to about −60 mV, letting Na⁺ in. That is why the current is called \"funny\".",
"w": [
"That opens L-type Ca²⁺ channels.",
"",
"Not the trigger for HCN channels.",
"Not the trigger taught.",
"At the peak K⁺ channels open."
],
"src": "lec"
},
{
"t": "Phase 4 · Pacemaker Potential",
"lv": "Hard",
"s": "In an SA node cell just after repolarizing to about −60 mV, which sequence drives phase 4 toward threshold?",
"c": [
"Fast Na⁺ channels open, then L-type Ca²⁺ channels open",
"I_K1 increases, then L-type Ca²⁺ triggers the plateau",
"K⁺ efflux decays, funny current rises, then T-type Ca²⁺",
"T-type Ca²⁺ opens first, then funny current, then K⁺ rises",
"Transient K⁺ current opens, then funny current closes"
],
"a": 2,
"e": "Three reasons phase 4 is unstable: (1) K⁺ decay — K⁺ channels shut after repolarization; (2) I_f, the funny Na⁺ current through HCN channels, opened by hyperpolarization at about −60 mV; (3) T-type Ca²⁺ joins near −55 to −50 mV and pushes to threshold (≈ −40 mV), where L-type channels open.",
"w": [
"Fast Na⁺ channels are inactivated in nodal cells; L-type opens at threshold.",
"Nodal cells lack I_K1 dominance and have no plateau.",
"",
"Funny current comes first, and K⁺ efflux is falling.",
"I_TO is a phase 1 current of myocytes."
],
"src": "lec"
},
{
"t": "Phase 4 · Pacemaker Potential",
"lv": "Hard",
"s": "A patient with heart failure is given ivabradine, which blocks HCN channels. Which chain of effects follows?",
"c": [
"Less I_Ca-L → weaker contraction → lower stroke volume",
"Less I_f → steeper phase 4 → faster heart rate",
"Less I_Na → slower ventricular phase 0",
"Less I_K → longer plateau → slower rate",
"Less I_f → flatter phase 4 → slower heart rate"
],
"a": 4,
"e": "HCN channels carry I_f, the inward funny Na⁺ current that starts the pacemaker potential. Blocking it (ivabradine) flattens the phase 4 slope, so threshold is reached later and the heart rate falls, without weakening contraction.",
"w": [
"That describes an L-type Ca²⁺ blocker.",
"Blocking an inward current flattens phase 4.",
"Ivabradine does not block the fast Na⁺ channel.",
"Ivabradine does not block K⁺ channels, and nodal cells have no plateau.",
""
],
"src": "lec"
},
{
"t": "Phase 4 · Pacemaker Potential",
"lv": "Hard",
"s": "Which sequence of permeability changes describes one SA node cycle, starting just after repolarization?",
"c": [
"↑P_Na f, ↓P_K → ↑P_Ca T → ↑P_Ca L → ↑P_K",
"↑P_Ca L → ↑P_Na f → ↑P_K → ↑P_Ca T",
"↑P_K → ↑P_Na fast → ↑P_Ca L plateau → ↓P_K",
"↑P_Na fast → ↑P_K transient → ↑P_Ca L → ↑P_K1",
"↓P_Na f → ↑P_K → ↑P_Ca T → ↓P_Ca L"
],
"a": 0,
"e": "Lecture sequence: ↑P_Na (f), ↓P_K → ↑P_Ca (T), ↓P_Na (f) → at threshold ↑P_Ca (L), ↓P_Ca (T) → at the peak ↑P_K, ↓P_Ca (L). Phase 4 → phase 0 → phase 3, then repeat.",
"w": [
"",
"Funny Na⁺ comes first after repolarization, and L-type opens at threshold.",
"That mixes in fast Na⁺ and a plateau, which nodal cells lack.",
"This is the ventricular sequence.",
"Funny current rises, and K⁺ permeability falls, in early phase 4."
],
"src": "lec"
},
{
"t": "Phase 0 · L-type Ca²⁺ Upstroke",
"lv": "Easy",
"s": "At about what voltage is threshold reached in an SA node cell, and which channel then opens?",
"c": [
"About −40 mV; L-type Ca²⁺ channels",
"About −65 mV; fast Na⁺ channels",
"About −90 mV; HCN channels",
"About −55 mV; delayed-rectifier K⁺ channels",
"About 0 mV; T-type Ca²⁺ channels"
],
"a": 0,
"e": "Nodal threshold ≈ −40 mV, where L-type Ca²⁺ channels open and produce the slow phase 0 upstroke. Compare: ventricular threshold ≈ −65 mV with fast Na⁺ channels.",
"w": [
"",
"That is ventricular myocyte threshold.",
"HCN channels open near −60 mV on hyperpolarization.",
"K⁺ channels open at the peak to repolarize.",
"T-type open near −55 to −50 mV."
],
"src": "lec"
},
{
"t": "Phase 0 · L-type Ca²⁺ Upstroke",
"lv": "Hard",
"s": "Why does the SA node upstroke rise slowly and conduct slowly compared with a ventricular myocyte?",
"c": [
"L-type Ca²⁺ carries it; fast Na⁺ is inactivated",
"It is carried by T-type Ca²⁺, which conducts better than Na⁺",
"It is carried by fast Na⁺ channels with fewer h gates",
"It is carried by funny current, which is slow",
"It starts from −90 mV, so it has farther to go"
],
"a": 0,
"e": "Nodal cells sit at less negative voltages, so their fast Na⁺ channels are inactivated. At threshold ≈ −40 mV, L-type (long-lasting) Ca²⁺ channels open. Ca²⁺ current is smaller and slower → shallow dV/dt, peak only about 0 to +10 mV, and slow conduction.",
"w": [
"",
"T-type channels help phase 4; L-type carry phase 0.",
"Fast Na⁺ channels are inactivated at nodal voltages.",
"Funny current drives phase 4, not phase 0.",
"Nodal cells never reach −90 mV; they reset at about −60 mV."
],
"src": "lec"
},
{
"t": "Phase 0 · L-type Ca²⁺ Upstroke",
"lv": "Hard",
"s": "Which statement correctly contrasts the two Ca²⁺ channels in nodal cells and the target of verapamil?",
"c": [
"L-type helps phase 4; T-type carries phase 0; verapamil blocks T-type",
"T-type: late phase 4; L-type: phase 0 and verapamil",
"Both carry phase 0 equally; verapamil blocks both",
"T-type carries the plateau; L-type carries phase 4",
"L-type is opened by hyperpolarization like HCN"
],
"a": 1,
"e": "T-type (transient) Ca²⁺ channels open near −55 to −50 mV and add to late phase 4. L-type (long-lasting) open at threshold ≈ −40 mV and carry phase 0. Verapamil and other Ca²⁺ blockers act on I_Ca-L, not I_Ca-T, and hit the SA node more than ventricular contraction.",
"w": [
"The roles are swapped, and verapamil blocks L-type.",
"",
"T-type acts in phase 4; verapamil blocks L-type, not T-type.",
"Nodal cells have no plateau.",
"L-type opens on depolarization to threshold."
],
"src": "lec"
},
{
"t": "Phase 3 · Nodal Repolarization",
"lv": "Easy",
"s": "What happens during phase 3 of the nodal AP?",
"c": [
"Fast Na⁺ channels close and the cell returns to −90 mV",
"Funny current opens and the cell depolarizes",
"Ca²⁺ inactivates; K⁺ efflux resets it to −60 mV",
"The plateau ends as Ca²⁺ and K⁺ stop balancing",
"T-type Ca²⁺ channels open and repolarize the cell"
],
"a": 2,
"e": "Nodal phase 3: L-type Ca²⁺ channels inactivate and delayed-rectifier K⁺ efflux repolarizes the cell to about −60 mV, the reset point where HCN channels open again. Nodal APs have only phases 0, 3 and 4.",
"w": [
"Nodal cells reset to about −60 mV, not −90 mV.",
"That is phase 4.",
"",
"Nodal cells have no plateau.",
"T-type channels depolarize, in phase 4."
],
"src": "lec"
},
{
"t": "Pacemaker Hierarchy & Overdrive Suppression",
"lv": "Easy",
"s": "Why does the SA node, not the AV node, normally set the heart rate?",
"c": [
"It is the only cell with automaticity",
"It fires fastest and resets slower pacemakers",
"It has the fastest conduction velocity",
"It has the most negative resting potential",
"The fibrous skeleton blocks all other pacemakers"
],
"a": 1,
"e": "Overdrive suppression: the fastest pacemaker, the SA node, depolarizes the slower ones before their own phase 4 reaches threshold, resetting them. So the fastest pacemaker sets the rate.",
"w": [
"The AV node and Purkinje fibers have automaticity too.",
"",
"His-Purkinje conducts fastest; the SA node is slow.",
"Nodal cells are less negative than myocytes.",
"The skeleton insulates atria from ventricles only."
],
"src": "lec"
},
{
"t": "Pacemaker Hierarchy & Overdrive Suppression",
"lv": "Easy",
"s": "Which part of the conduction system conducts slowest, and why does that matter?",
"c": [
"The AV node, so the atria finish first",
"The Purkinje fibers, so the ventricle contracts slowly",
"The SA node, which sets a slow rate",
"The bundle of His, to protect the septum",
"The internodal pathways, to delay the SA node"
],
"a": 0,
"e": "Path: SA → atria → AV node (delay) → His → Purkinje → ventricles. The AV node conducts slowest, giving time for the atria to empty into the ventricles before ventricular contraction. His-Purkinje conducts fastest.",
"w": [
"",
"Purkinje fibers conduct fastest.",
"The SA node sets the fastest rate.",
"His conducts fast.",
"The AV node is the slowest."
],
"src": "lec"
},
{
"t": "Pacemaker Hierarchy & Overdrive Suppression",
"lv": "Hard",
"s": "A patient's SA node stops firing. Later the AV node also fails, leaving complete block. What rates result at each stage?",
"c": [
"First Purkinje escape at 30–40/min; then ventricles at 60–80/min",
"First AV escape at 60–80/min; then whole heart stops",
"First His escape at 40–50/min; then atria and ventricles both 30–40/min",
"AV escape 40–50/min; then ventricles at 30–40/min",
"First AV escape at 40–50/min; then ventricles speed up to 60–80/min"
],
"a": 3,
"e": "Pacemaker hierarchy: SA 60–80/min → AV 40–50/min → His/bundle branches → Purkinje 30–40/min. If the SA node fails, the AV node escapes at 40–50/min. (The question's second scenario assumes the SA node recovers.) In complete AV block, the atria keep the SA rate while the ventricles follow a Purkinje escape at 30–40/min.",
"w": [
"The AV node escapes first, and in complete block the ventricles are slow.",
"The AV node rate is 40–50, and Purkinje fibers still escape.",
"After SA failure the AV node escapes; in AV block the atria keep the SA rate.",
"",
"The ventricles fall to the Purkinje rate."
],
"src": "lec"
},
{
"t": "Pacemaker Hierarchy & Overdrive Suppression",
"lv": "Hard",
"s": "A patient has a slow ventricular rate of 35/min with P waves at 75/min that bear no relation to the QRS complexes. Which explanation fits?",
"c": [
"Complete AV block with a Purkinje escape",
"SA node failure with AV junctional escape",
"Overdrive suppression of the SA node by Purkinje fibers",
"Normal AV delay, which halves the ventricular rate",
"Atrial myocytes firing independently at 75/min"
],
"a": 0,
"e": "In complete AV block no impulses pass the AV node. The atria keep the SA rate (60–80/min), and the ventricles are driven by a Purkinje escape at 30–40/min, so P waves and QRS complexes are dissociated.",
"w": [
"",
"Junctional escape would be 40–50/min with no independent P waves at 75.",
"The fastest pacemaker suppresses slower ones, not the reverse.",
"The AV delay slows conduction but does not dissociate atria and ventricles.",
"Atrial myocytes lack automaticity; P waves come from the SA node."
],
"src": "lec"
},
{
"t": "Challenge · Pacemaker Currents",
"s": "Which current/currents depolarize the membrane of pacemaker cells?",
"img": "cp-fig3.svg",
"ns": true,
"sampath": 1,
"c": [
"If, ICa-T and ICa-L",
"If only",
"INa and ICa-L",
"IK and If",
"ICa-L only"
],
"a": 0,
"e": "Phase 4 is depolarized by If (funny Na⁺) and ICa-T (transient Ca²⁺); Phase 0 by ICa-L (long-lasting Ca²⁺). IK repolarizes in Phase 3.",
"w": [
"",
"If starts the drift, but ICa-T and ICa-L also depolarize.",
"Fast INa is inactivated in nodal cells.",
"IK is an outward, repolarizing current.",
"ICa-L drives Phase 0, but Phase 4 depolarization comes from If and ICa-T."
],
"src": "lec"
},
{
"t": "Challenge · Pacemaker Currents",
"s": "Current? — the arrow on Phase 4",
"img": "cp-fig3.svg",
"ns": true,
"sampath": 1,
"c": [
"If and ICa-T",
"ICa-L",
"IK",
"Fast INa",
"IK1"
],
"a": 0,
"e": "Phase 4: the funny current If, then the T-type transient Ca²⁺ current near −55 mV.",
"w": [
"",
"ICa-L opens at threshold for Phase 0.",
"IK repolarizes in Phase 3.",
"Fast Na⁺ channels are inactivated in nodal cells.",
"IK1 holds ventricular rest."
],
"src": "lec"
},
{
"t": "Challenge · Pacemaker Currents",
"s": "Current? — the arrow on Phase 0",
"img": "cp-fig3.svg",
"ns": true,
"sampath": 1,
"c": [
"If",
"ICa-T",
"ICa-L",
"IK",
"Fast INa"
],
"a": 2,
"e": "Phase 0: at threshold (≈ −40 mV), the long-lasting L-type Ca²⁺ current gives the upstroke.",
"w": [
"If acts in Phase 4.",
"ICa-T acts late in Phase 4.",
"",
"IK repolarizes.",
"Fast Na⁺ channels are inactivated in nodal cells."
],
"src": "lec"
},
{
"t": "Challenge · Pacemaker Currents",
"s": "Current? — the arrow on Phase 3",
"img": "cp-fig3.svg",
"ns": true,
"sampath": 1,
"c": [
"If",
"ICa-T",
"ICa-L",
"IK",
"INa"
],
"a": 3,
"e": "Phase 3: Ca²⁺ channels inactivate and the delayed-rectifier K⁺ current IK repolarizes the cell to about −60 mV.",
"w": [
"If is inward and acts in Phase 4.",
"ICa-T is inward and acts in Phase 4.",
"ICa-L inactivates in Phase 3.",
"",
"Not active in nodal cells."
],
"src": "lec"
},
{
"t": "Challenge Yourself · Sampath's Q's",
"s": "A cardiac muscle cell isolated from a healthy ventricle is placed in a dish of normal physiologic solution. A microelectrode records a stable resting membrane potential of -85 mV, with the inside of the cell negative.<br><br>Which of the following is the most important determinant of this resting potential?",
"html": true,
"ns": true,
"sampath": 1,
"c": [
"High resting permeability to Na⁺",
"High resting permeability to K⁺",
"High resting permeability to Ca²⁺",
"Direct electrical charge generated by the Na⁺/K⁺ ATPase",
"High resting permeability to Cl⁻"
],
"a": 1,
"e": "The resting potential of a ventricular myocyte (about −85 to −90 mV) is set mainly by its high resting K⁺ permeability. Inward-rectifier K⁺ channels (I_K1) are open at rest, so K⁺ leaks out down its concentration gradient and pulls the membrane close to the K⁺ equilibrium potential (about −94 mV). Na⁺ and Ca²⁺ channels are closed at rest.",
"w": [
"Resting Na⁺ permeability is low; if it were high the membrane would sit near +60 mV.",
"",
"Ca²⁺ channels are closed at rest; L-type channels open only after phase 0.",
"The Na⁺/K⁺ pump is electrogenic but contributes only a few millivolts. Its main job is maintaining the gradients that K⁺ leak uses.",
"Cl⁻ is not the main determinant of the cardiac resting potential."
],
"src": "lec"
},
{
"t": "Challenge Yourself · Sampath's Q's",
"s": "A 30-year-old woman has an ECG as part of a routine pre-employment physical. The tracing is normal: PR 160 ms, QRS 90 ms, QT 400 ms, and an isoelectric ST segment.<br><br>Which of the following ventricular events does the isoelectric ST segment represent?",
"html": true,
"ns": true,
"sampath": 1,
"c": [
"Rapid upstroke caused by Na⁺ entry",
"Early rapid repolarization",
"Return to resting potential",
"The plateau",
"Spontaneous diastolic depolarization"
],
"a": 3,
"e": "The ST segment lies between the end of the QRS (ventricular depolarization) and the T wave (ventricular repolarization). During it, every ventricular myocyte is in phase 2, the plateau: L-type Ca²⁺ influx balances delayed-rectifier K⁺ efflux, so there is no voltage difference across the ventricle and the ECG is isoelectric.",
"w": [
"Phase 0, the Na⁺ upstroke, is the QRS complex.",
"Phase 1, the notch, falls at the J point at the very start of the ST segment.",
"Phase 3 repolarization produces the T wave; return to rest follows it.",
"",
"Spontaneous diastolic depolarization is phase 4 of pacemaker cells, not a ventricular event."
],
"src": "lec"
},
{
"t": "Challenge Yourself · Sampath's Q's",
"s": "In a physiology demonstration, a skeletal muscle and an isolated cardiac papillary muscle are each stimulated with rapid repeated electrical pulses. The skeletal muscle goes into sustained fused contraction (tetanus). The cardiac muscle continues to contract and relax with each beat and never fuses.<br><br>Which of the following best explains the difference?",
"html": true,
"ns": true,
"sampath": 1,
"c": [
"Cardiac muscle has no troponin",
"Cardiac cells are electrically isolated from one another",
"Cardiac muscle has more Na⁺ channels than skeletal muscle",
"Cardiac muscle has a faster upstroke than skeletal muscle",
"Cardiac action potential produces a long refractory period"
],
"a": 4,
"e": "The cardiac AP lasts about 300 ms because of the phase 2 plateau, and the absolute refractory period lasts almost as long as the contraction itself. A new AP cannot start until the muscle has nearly relaxed, so twitches cannot summate into tetanus. Skeletal muscle has a ~10 ms AP and refractory period, so repeated stimuli can fuse into tetanus. Tetany of the heart would be fatal: no relaxation, no filling.",
"w": [
"Cardiac muscle does have troponin; Ca²⁺ binding to troponin C triggers contraction.",
"Cardiac cells are coupled by gap junctions in intercalated discs into a functional syncytium.",
"Na⁺ channel number does not explain the absence of tetanus.",
"The upstroke speed is not what prevents summation; the long plateau and refractory period are.",
""
],
"src": "lec"
},
{
"t": "Challenge · Pacemaker Currents",
"s": "A 58-year-old woman is brought to the emergency department 3 hours after ingesting a large quantity of her husband’s verapamil. Blood pressure is 74/40 mm Hg and heart rate is 42/min. ECG shows sinus bradycardia with a markedly prolonged PR interval. She is also noted to be lethargic and cool.<br><br>Which of the following best explains this combination of findings?",
"html": true,
"ns": true,
"sampath": 1,
"c": [
"Reduced Ca²⁺ entry in the SA node, AV node",
"Blockade of fast Na⁺ channels in ventricular muscle",
"Excessive vagal stimulation of the SA node",
"Blockade of β₁-adrenergic receptors",
"Excessive opening of ATP-sensitive K⁺ channels in the ventricle"
],
"a": 0,
"e": "Verapamil blocks L-type Ca²⁺ channels. In the SA and AV nodes, phase 0 is carried by L-type Ca²⁺, so overdose slows the SA node (sinus bradycardia) and slows AV conduction (long PR). In ventricular myocytes, less plateau Ca²⁺ entry means less Ca²⁺-induced Ca²⁺ release, so contraction weakens. In vascular smooth muscle it causes vasodilation. Weak pump plus dilated vessels gives hypotension, lethargy and cool skin from poor perfusion.",
"w": [
"",
"Fast Na⁺ channel blockade widens the QRS; it does not cause sinus bradycardia with a long PR, and it is not verapamil's action.",
"Vagal stimulation could slow the SA and AV nodes, but would not explain the vasodilation and weak contraction of a verapamil overdose.",
"β-blockers can look similar, but verapamil does not block β₁ receptors.",
"Ventricular K_ATP channel opening is not the mechanism of verapamil toxicity."
],
"src": "lec"
},
{
"t": "Challenge · Pacemaker Currents",
"s": "A 70-year-old man has sinus node arrest after cardiac surgery. The ECG shows no P waves and a regular narrow-complex rhythm at 48/min. Within seconds of the sinus pause, the rhythm began on its own.<br><br>This new rhythm arises from the AV junction. Which of the following best explains why the SA node, and not the AV junction, normally controls the heart rhythm?",
"html": true,
"ns": true,
"sampath": 1,
"c": [
"The SA node is the only tissue with automaticity",
"The AV junction cells do not conduct the impulse to the ventricles",
"The SA node is directly innervated by the vagus nerve but the AV junction is not",
"The SA node has a larger upstroke velocity",
"The SA node has the steepest phase 4 depolarization"
],
"a": 4,
"e": "Overdrive suppression: the pacemaker with the steepest phase 4 (the SA node, 60–80/min) reaches threshold first and depolarizes the slower pacemakers before their own phase 4 reaches threshold, resetting them. When the SA node stops, the next fastest, the AV junction at 40–50/min, escapes, as seen here at 48/min with narrow complexes.",
"w": [
"The AV junction and Purkinje fibers also have automaticity, as this escape rhythm shows.",
"The AV junction does conduct to the ventricles; here it is driving them.",
"Both the SA and AV nodes receive vagal innervation.",
"Nodal upstrokes are slow Ca²⁺ upstrokes; upstroke speed sets conduction, not rate.",
""
],
"src": "lec"
},
{
"t": "Challenge · Pacemaker Currents",
"s": "A 28-year-old marathon runner is found to have a resting heart rate of 44/min during a pre-participation exam. He is asymptomatic, and his ECG shows normal P waves, each followed by a QRS. His heart rate rises normally with exercise.<br><br>Which of the following best explains the slow resting rate?",
"html": true,
"ns": true,
"sampath": 1,
"c": [
"Decreased intrinsic firing rate of the AV node",
"Blockade of Ca²⁺ channels in the ventricle",
"Increased parasympathetic (vagal) tone",
"Complete destruction of the SA node",
"Decreased sympathetic tone alone, with no vagal change"
],
"a": 2,
"e": "A trained athlete has high resting vagal tone. Acetylcholine on muscarinic M2 receptors in the SA node opens K⁺ channels (more hyperpolarized start of phase 4) and reduces I_f and Ca²⁺ currents (flatter phase 4 slope). Threshold is reached later, so the resting rate falls. The rate rises normally with exercise as vagal tone withdraws and sympathetic tone increases. Each P wave is followed by a QRS, so conduction is normal.",
"w": [
"P waves come from the SA node and each is conducted, so the AV node's intrinsic rate is not setting the rhythm.",
"Ventricular Ca²⁺ channel blockade would weaken contraction, not set the sinus rate.",
"",
"A destroyed SA node would mean no normal P waves and a junctional escape rhythm.",
"Athletic bradycardia is mainly increased vagal tone, not loss of sympathetic tone alone."
],
"src": "lec"
},
{
"t": "Challenge · Pacemaker Currents",
"s": "A 70-year-old man with atrial fibrillation has an atrial rate of about 400/min on atrial electrograms. His ECG shows an irregularly irregular ventricular rate of about 110/min.<br><br>Which of the following best explains why the ventricles do not follow the atria at 400/min?",
"html": true,
"ns": true,
"sampath": 1,
"c": [
"The ventricles have a longer action potential than the atria",
"The AV node conducts slowly and has a long refractory period, so it blocks many of the atrial impulses",
"The SA node suppresses the atrial impulses",
"The Purkinje fibers conduct too quickly to follow",
"Ventricular myocytes depolarize spontaneously at a slower rate"
],
"a": 1,
"e": "The AV node conducts slowly (slow Ca²⁺-dependent upstroke) and has a long refractory period. When atrial impulses arrive at ~400/min, many reach the node while it is still refractory and are blocked. Only some get through, irregularly, giving a ventricular rate around 110/min. This filtering protects the ventricles from dangerously fast rates.",
"w": [
"The ventricular AP length is not what filters the atrial impulses; the AV node is the gatekeeper.",
"",
"In atrial fibrillation there is no organized SA node activity to suppress the atrial impulses.",
"Purkinje fibers conduct fast, but they only receive what the AV node passes on.",
"Ventricular myocytes do not depolarize spontaneously; they follow the conducted impulses."
],
"src": "lec"
},
{
"t": "Challenge Yourself · Sampath's Q's",
"s": "A 62-year-old woman with end-stage renal disease misses two dialysis sessions and presents with weakness. Serum potassium is 7.9 mEq/L. ECG shows peaked T waves, flattened P waves, and a QRS of 160 ms. She is given IV calcium gluconate, and the QRS narrows within minutes.<br><br>Which of the following best explains the widened QRS?",
"html": true,
"ns": true,
"sampath": 1,
"c": [
"Hyperpolarization of the membrane, which makes the cell harder to excite",
"Increased Na⁺/K⁺ ATPase activity",
"Enhanced Ca²⁺ entry during the plateau",
"Blockade of Ca²⁺ channels by the high K⁺",
"Partial depolarization of the resting membrane"
],
"a": 4,
"e": "High extracellular K⁺ reduces the K⁺ gradient, so the resting membrane partially depolarizes (less negative). At this less negative voltage, many fast Na⁺ channels become inactivated (h gates closed). Fewer available Na⁺ channels mean a slower phase 0 upstroke and slower conduction through the ventricle, so the QRS widens. IV calcium raises the threshold and stabilizes the membrane, so the QRS narrows within minutes.",
"w": [
"Hyperkalemia depolarizes the resting membrane; hypokalemia is closer to hyperpolarization.",
"Pump activity does not explain the wide QRS.",
"The QRS reflects phase 0, the Na⁺ upstroke, not the plateau.",
"High K⁺ does not block Ca²⁺ channels.",
""
],
"src": "lec"
},
{
"t": "Challenge Yourself · Sampath's Q's",
"s": "A 68-year-old woman with heart failure takes furosemide daily and has had poor oral intake for a week. She reports palpitations and muscle cramps. Serum potassium is 2.6 mEq/L. ECG shows flattened T waves, a prominent U wave, and frequent premature ventricular beats.<br><br>Which of the following best explains her ECG findings and ectopy?",
"html": true,
"ns": true,
"sampath": 1,
"c": [
"Delayed repolarization from reduced K⁺ currents",
"Increased Na⁺ channel inactivation from a depolarized resting potential",
"Excessive Ca²⁺ entry because low K⁺ activates Ca²⁺ channels",
"Shortened action potential duration",
"Complete block of the inward rectifier, causing hyperpolarization"
],
"a": 0,
"e": "Low extracellular K⁺ reduces the conductance of K⁺ channels (I_K and I_K1), slowing phase 3 repolarization. Repolarization is prolonged and uneven, seen as flattened T waves and a prominent U wave. Delayed repolarization favors early afterdepolarizations and ectopic beats such as the premature ventricular beats here. Furosemide and poor intake caused the K⁺ loss.",
"w": [
"",
"Na⁺ channel inactivation from a depolarized resting potential is the hyperkalemia mechanism.",
"Low K⁺ does not activate Ca²⁺ channels.",
"Hypokalemia lengthens, not shortens, the AP.",
"Hypokalemia reduces K⁺ currents, but the result is delayed repolarization, not complete block with hyperpolarization."
],
"src": "lec"
},
{
"t": "Challenge Yourself · Sampath's Q's",
"s": "A 72-year-old woman with a recent urinary tract infection is started on a macrolide antibiotic while also taking an antiemetic that prolongs the QT interval. Her serum potassium is 3.0 mEq/L. During hospitalization she has a brief pause after a premature beat, followed by several seconds of polymorphic ventricular tachycardia whose QRS appears to twist around the baseline. She has a pulse and is awake. ECG after the event shows a QTc of 570 ms.<br><br>Which of the following is the most appropriate treatment?",
"html": true,
"ns": true,
"sampath": 1,
"c": [
"IV amiodarone",
"IV procainamide",
"IV lidocaine, with no other changes to therapy",
"IV digoxin",
"IV magnesium sulfate"
],
"a": 4,
"e": "This is torsades de pointes: polymorphic VT twisting around the baseline, triggered after a pause in a patient with a long QT (QTc 570 ms). Causes here: two QT-prolonging drugs plus hypokalemia, which all delay phase 3 repolarization and allow early afterdepolarizations. First-line treatment in a stable patient is IV magnesium sulfate, which suppresses the early afterdepolarizations. Also stop the offending drugs and correct the K⁺.",
"w": [
"Amiodarone prolongs the QT further and can worsen torsades.",
"Procainamide prolongs the QT further and can worsen torsades.",
"Lidocaine is not first line, and leaving the QT-prolonging drugs in place is wrong.",
"Digoxin is not a treatment for torsades.",
""
],
"src": "lec"
},
{
"t": "Challenge Yourself · Sampath's Q's",
"s": "A 78-year-old man with heart failure and atrial fibrillation takes digoxin and furosemide. He reports nausea, anorexia, and seeing yellow-tinged halos around lights. Serum potassium is 3.1 mEq/L. ECG shows frequent premature ventricular beats in a bigeminal pattern and an atrial tachycardia with AV block.<br><br>Which of the following best explains the ventricular ectopy?",
"html": true,
"ns": true,
"sampath": 1,
"c": [
"Digoxin opens K⁺ channels and hyperpolarizes the ventricle",
"Calcium overload in the cell",
"Decreased intracellular Na⁺ from excessive pump activity",
"Prolongation of the action potential, with early afterdepolarizations as the main mechanism",
"Direct block of Na⁺ channels in the ventricle"
],
"a": 1,
"e": "Digoxin inhibits the Na⁺/K⁺ ATPase, so intracellular Na⁺ rises. The higher Na⁺ reduces Ca²⁺ removal by the Na⁺/Ca²⁺ exchanger, so intracellular and SR Ca²⁺ rise. That is how digoxin strengthens contraction. In toxicity, especially with hypokalemia (less K⁺ competing at the pump), Ca²⁺ overload causes spontaneous SR Ca²⁺ release after repolarization: delayed afterdepolarizations and triggered ectopic beats such as bigeminy. Nausea, anorexia and yellow vision fit digoxin toxicity.",
"w": [
"Digoxin inhibits the Na⁺/K⁺ pump; it does not open K⁺ channels.",
"",
"Pump inhibition raises intracellular Na⁺, not lowers it.",
"Early afterdepolarizations come from a long QT; digoxin ectopy is delayed afterdepolarizations from Ca²⁺ overload.",
"Digoxin does not directly block Na⁺ channels."
],
"src": "lec"
},
{
"t": "Challenge Yourself · Sampath's Q's",
"s": "A 66-year-old man presents with palpitations and near-syncope 3 weeks after an anterior wall myocardial infarction. ECG shows a regular wide-complex tachycardia at 170/min with a uniform QRS morphology. An echocardiogram shows an akinetic, thinned anterior wall with scar.<br><br>Which of the following best explains this arrhythmia?",
"html": true,
"ns": true,
"sampath": 1,
"c": [
"Enhanced automaticity of the SA node",
"Early afterdepolarizations from a prolonged QT",
"Delayed afterdepolarizations from calcium overload",
"A reentry circuit around scar",
"Accelerated firing of the AV junction"
],
"a": 3,
"e": "A healed infarct leaves scar, which does not conduct, next to surviving tissue with slow, uneven conduction and uneven refractory periods. An impulse can travel around the scar, find tissue that has recovered, and loop back again and again: a reentry circuit. This gives a regular, monomorphic VT. Uneven refractory periods are the flip side of the long cardiac refractory period.",
"w": [
"SA node automaticity produces narrow complexes, not a wide-complex VT.",
"Early afterdepolarizations from a long QT give polymorphic VT such as torsades.",
"Delayed afterdepolarizations are typical of digoxin toxicity.",
"",
"An AV junctional rhythm has narrow complexes and a slower rate."
],
"src": "lec"
},
{
"t": "Challenge · Pacemaker Currents",
"s": "A 29-year-old man presents with palpitations. His heart rate is 220/min, blood pressure is 118/72 mm Hg, and he is alert. The ECG shows an irregularly irregular wide-complex tachycardia with varying QRS widths. A previous ECG shows a short PR interval and a slurred upstroke at the start of the QRS (delta wave).<br><br>Which of the following medications is contraindicated in this patient?",
"html": true,
"ns": true,
"sampath": 1,
"c": [
"Synchronized electrical cardioversion",
"Procainamide",
"Verapamil",
"Ibutilide",
"Supplemental oxygen"
],
"a": 2,
"e": "This is atrial fibrillation in Wolff-Parkinson-White syndrome: impulses reach the ventricles both through the AV node and through an accessory pathway (short PR, delta wave). Verapamil slows or blocks AV nodal conduction, removing the node's filter, so more atrial impulses race down the accessory pathway. That can speed the ventricular rate into ventricular fibrillation. AV nodal blockers are contraindicated; use procainamide or ibutilide, or cardioversion if unstable.",
"w": [
"Synchronized cardioversion is appropriate, especially if he becomes unstable.",
"Procainamide is a recommended drug: it slows conduction in the accessory pathway.",
"",
"Ibutilide is an accepted option for pre-excited AF.",
"Oxygen is not contraindicated."
],
"src": "lec"
},
{
"t": "Challenge Yourself · Sampath's Q's",
"s": "A 19-year-old woman is brought to the emergency department after an intentional ingestion of her mother’s amitriptyline. She is confused with dry mucous membranes and dilated pupils. Heart rate is 124/min and blood pressure is 82/48 mm Hg. ECG shows sinus tachycardia with a QRS duration of 148 ms and a prominent terminal R wave in lead aVR.<br><br>Which of the following is the most appropriate next step, and why does it work?",
"html": true,
"ns": true,
"sampath": 1,
"c": [
"IV sodium bicarbonate, alkalinizes & relieve Na⁺ channel blockade",
"IV procainamide, to suppress the wide-complex rhythm",
"IV amiodarone, to prolong repolarization",
"IV flecainide, to slow conduction further",
"IV verapamil, to slow the heart rate"
],
"a": 0,
"e": "Tricyclic antidepressants block fast Na⁺ channels in ventricular myocytes, slowing phase 0 and conduction, so the QRS widens and a terminal R wave appears in aVR. They also cause anticholinergic signs (confusion, dry mouth, dilated pupils, tachycardia) and hypotension. IV sodium bicarbonate is the treatment: the extra Na⁺ overcomes the channel block, and the alkalosis reduces drug binding to the channel.",
"w": [
"",
"Procainamide is itself a Na⁺ channel blocker and would worsen the toxicity.",
"Amiodarone prolongs repolarization and also blocks Na⁺ channels; it is not the antidote.",
"Flecainide blocks Na⁺ channels and would widen the QRS further.",
"Verapamil would worsen the hypotension and does not treat Na⁺ channel blockade."
],
"src": "lec"
},
{
"t": "Challenge Yourself · Sampath's Q's",
"s": "Q1. Resting cell (Phase 4). The membrane sits at about −85 mV. If you gently opened more K⁺ channels, which way would K⁺ move, and where would the membrane head?",
"ns": true,
"sampath": 1,
"c": [
"K⁺ moves into the cell, and the membrane heads toward about +60 mV",
"K⁺ moves out of the cell, and the membrane drifts toward E_K, about −90 mV",
"K⁺ moves out of the cell, and the membrane heads toward 0 mV",
"K⁺ moves into the cell, and the membrane drifts toward E_K, about −90 mV",
"K⁺ does not move, because the Na⁺/K⁺ ATPase fixes the voltage"
],
"a": 1,
"e": "K⁺ moves out of the cell, and the membrane drifts toward E_K (about −90 mV).\n• The resting cell is a K⁺ cell because I_K1 channels are open at rest, so the membrane hugs E_K.\n• Na⁺ has a huge inward driving force, but almost no Na⁺ channels are open at rest, so little Na⁺ gets in.\n• The Na⁺/K⁺ ATPase is the long-term gradient keeper (3 Na⁺ out, 2 K⁺ in). It is not what sets the −85 mV moment to moment.",
"w": [
"+60 mV is E_Na. K⁺ is concentrated inside, so it flows out, not in.",
"",
"K⁺ efflux makes the inside more negative, toward E_K, not toward 0 mV.",
"K⁺ flows down its concentration gradient, out of the cell.",
"The pump keeps the gradients long-term; it does not set the voltage moment to moment."
],
"src": "lec"
},
{
"t": "Challenge Yourself · Sampath's Q's",
"s": "Q2. The spark (Phase 0). A stimulus pushes the cell to threshold. Which way does Na⁺ move, and does the membrane reach E_Na (about +60 mV)?",
"ns": true,
"sampath": 1,
"c": [
"Na⁺ rushes in, and the membrane reaches E_Na at about +60 mV",
"Na⁺ rushes out, and the membrane falls toward −90 mV",
"Na⁺ rushes in, but the peak stops near +30 mV, short of E_Na",
"Na⁺ rushes in, and the peak overshoots E_Na to about +90 mV",
"Na⁺ stays put; Ca²⁺ entry drives the ventricular upstroke"
],
"a": 2,
"e": "Na⁺ rushes in through voltage-gated Na⁺ channels (I_Na). Positive feedback: depolarization opens more channels.\n• The peak is about +30 mV, short of E_Na, because the channels inactivate within about a millisecond and K⁺ starts to leave.\n• Slope of Phase 0 = conduction velocity.",
"w": [
"The channels inactivate within about a millisecond and K⁺ starts to leave, so the peak stops near +30 mV.",
"Na⁺ is concentrated outside, so it flows in, depolarizing the cell.",
"",
"The membrane can never pass the equilibrium potential of the ion carrying the current.",
"Ca²⁺ carries the upstroke in nodal cells; the ventricular upstroke is Na⁺."
],
"src": "lec"
},
{
"t": "Challenge Yourself · Sampath's Q's",
"s": "Q3. The notch (Phase 1). Right after the peak, the voltage dips slightly. Name the two events behind it.",
"ns": true,
"sampath": 1,
"c": [
"L-type Ca²⁺ channels open and I_K1 channels reopen",
"Fast Na⁺ channels inactivate and I_to opens, so K⁺ leaves",
"The Na⁺/K⁺ ATPase speeds up and Cl⁻ enters the cell",
"Delayed-rectifier K⁺ channels open fully and Ca²⁺ channels close",
"Funny current HCN channels close and T-type Ca²⁺ opens"
],
"a": 1,
"e": "• Fast Na⁺ channels inactivate (the inward current shuts off).\n• I_to, the transient outward K⁺ current, opens briefly, so K⁺ leaves.\n• Inward current stops and outward current starts, so voltage dips.",
"w": [
"L-type Ca²⁺ opening supports the plateau, and I_K1 returns only at rest.",
"",
"The pump does not create the notch.",
"That combination describes Phase 3 repolarization.",
"HCN and T-type channels act in nodal Phase 4."
],
"src": "lec"
}
];
