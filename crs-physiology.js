// CRS Physiology — Dr. Sampath V. lecture slides. Reworked set: fewer, multi-concept, high-yield questions; lv = Easy/Hard; sampath = Challenge Yourself questions from the slides, word for word
window.CRS_PH_TOPICS = ["Big Picture & Cardiac Cell Types", "Conduction System Anatomy", "Fast vs Slow Response", "Phase 0 & Na⁺ Channel Gates", "Phase 1 · The Notch", "Phase 2 · Plateau & E–C Coupling", "Phases 3 & 4 · Reset and Rest", "Refractory Periods", "Na⁺ Channel States", "Why the AP & Refractory Period Are Long", "Challenge Yourself · Sampath's Q's", "Pacemaker Cells, Automaticity & Key Terms", "Slow vs Fast Response APs", "Phase 4 · Pacemaker Potential", "Phase 0 · L-type Ca²⁺ Upstroke", "Phase 3 · Nodal Repolarization", "Pacemaker Hierarchy & Overdrive Suppression", "Challenge · Pacemaker Currents", "Autonomic Control: Chrono-, Dromo- & Inotropy", "Sympathetic β1 → Gs → cAMP Cascade", "Sympathetic Effects on SA Node, AV Node & Ventricle", "Parasympathetic M2 → Gi: Two Arms", "Integrated SA Node Effects & Summary", "Drugs That Hit These Channels", "Challenge · Cardiac Nerves", "Cardiac Cycle Timing: Systole vs Diastole", "Key Volumes: EDV, ESV, SV & EF", "Wiggers Diagram: Phases A–G, Valves & Heart Sounds", "Atrial Systole & Ventricular Filling", "Isovolumetric Phases & Ejection", "Jugular Venous Pulse & Aortic Pressure Curve", "Pressure Map: Normal Chamber Pressures"];
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
},
{
"t": "Autonomic Control: Chrono-, Dromo- & Inotropy",
"lv": "Easy",
"s": "Which pairing of term and meaning is correct?",
"c": [
"Chronotropy: force of contraction",
"Dromotropy: AV node conduction speed",
"Inotropy: heart rate set by the SA node",
"Dromotropy: speed of ventricular relaxation",
"Lusitropy: conduction through the His bundle"
],
"a": 1,
"e": "Chronotropy = heart rate (SA node). Dromotropy = conduction velocity (AV node). Inotropy = contractility (ventricular muscle). Lusitropy = relaxation. Sympathetic: + chrono, + dromo, + ino. Parasympathetic: − chrono, − dromo, and little direct effect on the ventricles.",
"w": [
"Chronotropy is heart rate; inotropy is contractility.",
"",
"Inotropy is contractility; chronotropy is heart rate.",
"Relaxation is lusitropy; dromotropy is conduction velocity.",
"Lusitropy is relaxation, not conduction."
],
"src": "lec"
},
{
"t": "Autonomic Control: Chrono-, Dromo- & Inotropy",
"lv": "Easy",
"s": "According to the lecture, what does the autonomic nervous system do to the SA node's rhythm?",
"c": [
"It modulates the rhythm but does not create it",
"It creates the rhythm; the SA node has no automaticity alone",
"It rewrites the ventricular plateau to change the rate",
"It changes the rate only by altering ventricular Na⁺ channels",
"It has no effect at rest because vagal tone is absent"
],
"a": 0,
"e": "The ANS modulates, it does not create, the SA node's rhythm. It acts on nodal tissue, so it changes rate without rewriting the ventricular plateau. At rest vagal tone dominates, holding the rate below the SA node's intrinsic rate.",
"w": [
"",
"The SA node fires on its own; a transplanted, denervated heart still beats.",
"It acts on nodal tissue and changes rate without rewriting the plateau.",
"Rate is set in the SA node, not by ventricular Na⁺ channels.",
"Vagal tone dominates at rest."
],
"src": "lec"
},
{
"t": "Sympathetic β1 → Gs → cAMP Cascade",
"lv": "Easy",
"s": "Which sequence correctly traces the sympathetic cascade in an SA node cell?",
"c": [
"NE → β1 → Gi → adenylyl cyclase → ↓ cAMP → PKA",
"NE → β1 → Gs → adenylyl cyclase → ↑ cAMP → PKA",
"ACh → M2 → Gs → adenylyl cyclase → ↑ cAMP",
"NE → α1 → Gq → phospholipase C → IP₃",
"NE → β1 → Gs → guanylyl cyclase → ↑ cGMP"
],
"a": 1,
"e": "Sympathetic: NE binds β1 → activates Gs (αs-GTP) → αs activates adenylyl cyclase → ATP → cAMP ↑ → PKA → phosphorylation of channels and SR proteins → physiologic actions.",
"w": [
"β1 couples to Gs, which raises cAMP.",
"",
"ACh acts on M2, which couples to Gi.",
"That is the α1 pathway, not the cardiac β1 pathway.",
"Gs activates adenylyl cyclase and raises cAMP."
],
"src": "lec"
},
{
"t": "Sympathetic Effects on SA Node, AV Node & Ventricle",
"lv": "Easy",
"s": "In the SA node, how does β1 stimulation raise heart rate?",
"c": [
"More If and ICa → steeper phase 4",
"↑ cAMP opens K⁺ channels → hyperpolarization → faster firing",
"↑ cAMP lowers threshold from −40 to −65 mV",
"↑ cAMP shortens the ventricular plateau",
"↑ cAMP blocks If, so phase 4 starts from a higher voltage"
],
"a": 0,
"e": "Sympathetic, step by step: (1) NE binds β1 on SA node cells; (2) ↑ cAMP → ↑ conductance of If (funny) and ICa channels; (3) steeper phase 4 slope; (4) threshold (≈ −40 mV) reached sooner; (5) ↑ firing frequency → ↑ heart rate.",
"w": [
"",
"Hyperpolarization would slow the rate.",
"Threshold stays about −40 mV; the slope changes.",
"Rate is set in the SA node, not by the plateau.",
"Sympathetic increases, not blocks, If."
],
"src": "lec"
},
{
"t": "Parasympathetic M2 → Gi: Two Arms",
"lv": "Easy",
"s": "The Gi protein activated by M2 receptors has two actions. Which pair is correct?",
"c": [
"αi opens K⁺ channels; βγ activates adenylyl cyclase",
"αi activates adenylyl cyclase; βγ closes K⁺ channels",
"αi activates phospholipase C; βγ opens Ca²⁺ channels",
"αi phosphorylates phospholamban; βγ opens Na⁺ channels",
"αi inhibits adenylyl cyclase; βγ opens K⁺ channels"
],
"a": 4,
"e": "ACh binds M2 → Gi. αi subunit inhibits adenylyl cyclase → ↓ cAMP (↓ If and ICa). βγ subunit opens K⁺ channels (I_K-ACh, a ligand-gated K⁺ channel) → K⁺ efflux → hyperpolarization.",
"w": [
"The subunit roles are swapped, and nothing activates the cyclase.",
"αi inhibits the cyclase and βγ opens K⁺ channels.",
"That is not the M2 pathway.",
"Neither is a Gi action.",
""
],
"src": "lec"
},
{
"t": "Parasympathetic M2 → Gi: Two Arms",
"lv": "Easy",
"s": "Under resting conditions, which autonomic influence dominates the heart?",
"c": [
"Sympathetic tone",
"Neither; the SA node runs at its intrinsic rate",
"Circulating adrenal epinephrine",
"Equal sympathetic and vagal tone",
"Vagal tone"
],
"a": 4,
"e": "Effects of the brake pedal: vagal tone dominates at rest, giving − chronotropic (↓ heart rate) and − dromotropic (↓ conduction velocity) effects.",
"w": [
"Sympathetic tone rises during exercise and stress, not at rest.",
"Vagal tone holds resting rate below the intrinsic rate.",
"Not the dominant resting influence.",
"Vagal tone dominates at rest.",
""
],
"src": "lec"
},
{
"t": "Integrated SA Node Effects & Summary",
"lv": "Easy",
"s": "In the summary table, what is the parasympathetic effect on ventricular muscle?",
"c": [
"Decreased contractility of the same size as in the atria",
"Increased contractility",
"Minimal or no effect",
"Decreased conduction velocity through Purkinje fibers",
"Longer ventricular plateau"
],
"a": 2,
"e": "Summary: SA node (If, ICa, IK): β1 ↑ HR, M2 ↓ HR. AV node (If, ICa, IK): β1 ↑ conduction, M2 ↓ conduction. Ventricular muscle (INa, ICa, IK): β1 ↑ contractility, M2 minimal or no effect.",
"w": [
"Ventricles get little parasympathetic innervation.",
"Parasympathetic is the brake pedal.",
"",
"Vagal slows the AV node, not Purkinje conduction.",
"Not a listed effect."
],
"src": "lec"
},
{
"t": "Drugs That Hit These Channels",
"lv": "Easy",
"s": "Which match of drug, target and AP site is correct?",
"c": [
"Ivabradine: L-type Ca²⁺; nodal phase 0",
"Amiodarone: fast Na⁺ channel; phase 0",
"Metoprolol: β1; flatter phase 4",
"Lidocaine: K⁺ channels; phase 3",
"Verapamil: If channel; phase 4"
],
"a": 2,
"e": "Drugs hit these channels: Class I (lidocaine, flecainide) fast Na⁺, phase 0, slow upstroke and conduction. Class II (metoprolol) β1, phase 4 slope, flatter phase 4 → ↓ HR. Class III (amiodarone, sotalol) K⁺ channels, phase 3, prolong AP and refractory period. Class IV (verapamil, diltiazem) L-type Ca²⁺, nodal phase 0/plateau, slow SA/AV firing and conduction. Ivabradine: If, phase 4, ↓ HR, plateau unchanged.",
"w": [
"Ivabradine blocks If in phase 4.",
"Amiodarone and sotalol block K⁺ channels in phase 3.",
"",
"Lidocaine blocks fast Na⁺ channels in phase 0.",
"Verapamil blocks L-type Ca²⁺ channels."
],
"src": "lec"
},
{
"t": "Drugs That Hit These Channels",
"lv": "Easy",
"s": "Which drug class slows both SA node rate and AV node conduction by acting on the same channel?",
"c": [
"Funny current inhibitors such as ivabradine",
"Class III K⁺ blockers such as sotalol",
"Class I Na⁺ blockers such as lidocaine",
"Non-DHP Ca²⁺ blockers like verapamil",
"Cardiac glycosides such as digoxin"
],
"a": 3,
"e": "Verapamil and diltiazem block L-type Ca²⁺ channels in the SA and AV nodes, where L-type Ca²⁺ carries phase 0 → ↓ HR and ↓ conduction (and ↓ contractility in ventricular muscle).",
"w": [
"Ivabradine slows the SA node only.",
"Their main action is prolonging repolarization.",
"They act on fast Na⁺ channels, not nodal Ca²⁺.",
"",
"Not part of this lecture's drug table."
],
"src": "lec"
},
{
"t": "Sympathetic β1 → Gs → cAMP Cascade",
"lv": "Easy",
"s": "Which receptors are coupled to Gs?",
"c": [
"M2 muscarinic receptors",
"A1 adenosine receptors",
"α2 adrenergic receptors",
"β1, β2 and β3",
"Nicotinic receptors"
],
"a": 3,
"e": "The β1, β2 and β3 adrenergic receptors are coupled to Gs. Activation of β receptors raises intracellular cAMP; on cardiac myocytes, β1 activation increases contractility.",
"w": [
"M2 couples to Gi.",
"A1 is inhibitory, like M2.",
"α2 couples to Gi.",
"",
"These are ion channels, not G-protein coupled."
],
"src": "lec"
},
{
"t": "Autonomic Control: Chrono-, Dromo- & Inotropy",
"lv": "Hard",
"s": "Which row of effects is correct for sympathetic and parasympathetic stimulation?",
"c": [
"Sympathetic: ↑ rate, ↑ conduction, ↑ contractility; vagal: ↓ rate, ↓ conduction",
"Sympathetic: ↑ rate, ↓ conduction; vagal: ↓ rate, ↓ contractility of ventricles",
"Sympathetic: ↑ contractility only; vagal: ↓ rate, ↑ conduction",
"Sympathetic: ↑ rate only; vagal: ↓ rate and ↓ ventricular contractility",
"Both increase conduction; only vagal changes ventricular force"
],
"a": 0,
"e": "Sympathetic (NE → β1) = cardiac excitation: + chronotropy, + dromotropy, + inotropy. Parasympathetic (ACh → M2) = cardiac inhibition: − chronotropy, − dromotropy, ventricles little direct effect.",
"w": [
"",
"Sympathetic increases conduction, and vagal has little direct ventricular effect.",
"Sympathetic raises rate and conduction too, and vagal slows conduction.",
"Sympathetic also raises conduction and contractility; vagal spares ventricles.",
"Vagal decreases conduction and has little ventricular effect."
],
"src": "lec"
},
{
"t": "Sympathetic β1 → Gs → cAMP Cascade",
"lv": "Hard",
"s": "Why does vagal slowing begin faster than sympathetic acceleration?",
"c": [
"ACh is released in larger amounts than norepinephrine",
"M2 receptors are on ventricles, closer to the vagus nerve",
"Sympathetic signaling needs two parallel arms to act",
"Gi βγ opens K⁺ channels with no cAMP step",
"PKA phosphorylation is faster than K⁺ channel opening"
],
"a": 3,
"e": "The parasympathetic pathway has two parallel arms: αi inhibits adenylyl cyclase (↓ cAMP) and βγ directly opens K⁺ channels (I_K-ACh). The direct βγ arm needs no second messenger, so vagal slowing has a faster onset. Sympathetic relies on a single cAMP/PKA arm, which takes longer.",
"w": [
"The amount of transmitter is not the reason taught.",
"M2 receptors act on the SA and AV nodes; the ventricles get little vagal effect.",
"Sympathetic uses a single cAMP/PKA arm; vagal uses two.",
"",
"A direct G-protein–channel link is faster than second messengers."
],
"src": "lec"
},
{
"t": "Sympathetic Effects on SA Node, AV Node & Ventricle",
"lv": "Hard",
"s": "Norepinephrine acts on three cardiac tissues. Which pairing of tissue, PKA target and effect is correct?",
"c": [
"SA node: phospholamban → chronotropy; AV node: If → inotropy",
"Ventricle: If channels → chronotropy; SA node: L-type → inotropy",
"AV node: fast Na⁺ → dromotropy; ventricle: K⁺ channels → inotropy",
"AV node: L-type Ca²⁺; ventricle: phospholamban",
"SA node: K⁺ channels only; ventricle: troponin C → lusitropy"
],
"a": 3,
"e": "The sympathetic 'triple effect' via PKA phosphorylation: SA node → If and Ca²⁺ channels → chronotropy; AV node → L-type Ca²⁺ channels → dromotropy; ventricular muscle → L-type Ca²⁺ channels + phospholamban → inotropy and lusitropy.",
"w": [
"Phospholamban is in ventricular muscle; If targets the SA node.",
"If is nodal, and inotropy is a ventricular effect.",
"PKA targets Ca²⁺ channels, not fast Na⁺, for these effects.",
"",
"SA node targets are If and Ca²⁺ channels."
],
"src": "lec"
},
{
"t": "Sympathetic Effects on SA Node, AV Node & Ventricle",
"lv": "Hard",
"s": "How does sympathetic stimulation increase the force of ventricular contraction?",
"c": [
"PKA opens fast Na⁺ channels, making phase 0 longer",
"Gi βγ opens K⁺ channels, lengthening the plateau",
"More Ca²⁺ influx and SR release",
"PKA blocks the Na⁺/Ca²⁺ exchanger so Ca²⁺ cannot leave",
"cAMP binds troponin C directly instead of Ca²⁺"
],
"a": 2,
"e": "cAMP/PKA in ventricular muscle: PKA phosphorylates L-type Ca²⁺ channels (↑ Ca²⁺ influx) and SR proteins (↑ Ca²⁺-induced Ca²⁺ release). Net: higher peak intracellular Ca²⁺ → more cross-bridge cycling → increased force of contraction.",
"w": [
"Inotropy comes from Ca²⁺, not a longer phase 0.",
"That is the vagal arm, and it shortens, not strengthens.",
"",
"Not the mechanism taught.",
"Ca²⁺, not cAMP, binds troponin C."
],
"src": "lec"
},
{
"t": "Sympathetic Effects on SA Node, AV Node & Ventricle",
"lv": "Hard",
"s": "Sympathetic stimulation also speeds relaxation. Which mechanism explains this?",
"c": [
"PKA frees SERCA from phospholamban",
"PKA activates phospholamban, which then inhibits SERCA",
"Gi lowers cAMP so SERCA works faster",
"PKA opens L-type channels longer to wash out Ca²⁺",
"cAMP inhibits the Na⁺/K⁺ pump, raising cell Ca²⁺"
],
"a": 0,
"e": "Phospholamban normally inhibits SERCA (the SR Ca²⁺ ATPase). PKA phosphorylates phospholamban → inhibition is released → SERCA pumps Ca²⁺ back into the SR faster → faster relaxation (positive lusitropy) and more Ca²⁺ stored for the next beat (helps inotropy).",
"w": [
"",
"Phosphorylated phospholamban stops inhibiting SERCA.",
"Sympathetic raises cAMP; Gi is the vagal G protein.",
"Longer Ca²⁺ influx would not speed relaxation.",
"That would describe digoxin, not relaxation."
],
"src": "lec"
},
{
"t": "Parasympathetic M2 → Gi: Two Arms",
"lv": "Hard",
"s": "After vagal stimulation, an SA node cell fires less often. Which combination of changes explains this?",
"c": [
"Steeper phase 4 but a higher threshold of −20 mV",
"Flatter phase 4 from a lower start",
"Flatter phase 4 and a lower threshold of −65 mV",
"Unchanged phase 4 but a longer plateau",
"A more positive start and faster upstroke"
],
"a": 1,
"e": "Parasympathetic, step by step: (1) vagus releases ACh → M2 on SA and AV node cells; (2) ↓ cAMP → ↓ If and ICa; ↑ K⁺ efflux hyperpolarizes the cell; (3) flatter phase 4 slope; (4) threshold reached later; (5) ↓ firing frequency → ↓ heart rate; ↓ conduction velocity.",
"w": [
"Vagal flattens phase 4; threshold stays about −40 mV.",
"",
"Threshold does not move to −65 mV.",
"Nodal cells have no plateau.",
"Vagal hyperpolarizes the cell and slows the node."
],
"src": "lec"
},
{
"t": "Parasympathetic M2 → Gi: Two Arms",
"lv": "Hard",
"s": "Why does vagal stimulation have contractility effects in the atria but almost none in the ventricles?",
"c": [
"Ventricular myocytes have no Gi protein at all",
"The vagus barely reaches the ventricles",
"Ventricles lack β1 receptors, so M2 cannot act",
"ACh is broken down before reaching the atria",
"Vagal effects need fast Na⁺ channels, found only in atria"
],
"a": 1,
"e": "Innervation pattern: sympathetic fibers supply the atria and ventricles; parasympathetic fibers supply the atria and nodes only. So ventricular muscle shows a sympathetic contractility effect but minimal or no parasympathetic effect, while vagal stimulation can reduce atrial contractility via M2.",
"w": [
"The key point is the innervation pattern.",
"",
"Ventricles do have β1 receptors.",
"ACh does act on atrial and nodal tissue.",
"Ventricles also have fast Na⁺ channels."
],
"src": "lec"
},
{
"t": "Integrated SA Node Effects & Summary",
"lv": "Hard",
"s": "Which pairing of nerve, currents and change in the SA node pacemaker potential is correct?",
"c": [
"Sympathetic: ↑ IK-ACh, flatter phase 4; vagal: ↑ If, steeper phase 4",
"Sympathetic: ↑ INa, faster phase 0 only; vagal: ↓ INa",
"Sympathetic: ↓ ICa-T, ↑ If; vagal: ↑ ICa-T, ↓ If",
"Sympathetic: ↑ IK1, hyperpolarizes; vagal: ↓ IK-ACh",
"Sympathetic ↑ If and ICa-T; vagal ↓ both, ↑ IK-ACh"
],
"a": 4,
"e": "Integrated effect on the SA node: sympathetic ↑ ICa-T, ↑ If → steeper phase 4, threshold reached faster → (+) chronotropic. Parasympathetic ↓ ICa-T, ↓ If, ↑ IK-ACh → shallower phase 4 and hyperpolarized cell → (−) chronotropic. Balance: ↑ cAMP vs ↓ cAMP and ↑ K⁺ efflux.",
"w": [
"The currents and slopes are swapped.",
"Nodal effects are on If, ICa and IK-ACh, not fast Na⁺.",
"Sympathetic increases both ICa-T and If.",
"Vagal increases IK-ACh, causing hyperpolarization.",
""
],
"src": "lec"
},
{
"t": "Drugs That Hit These Channels",
"lv": "Hard",
"s": "A patient with heart failure needs a lower heart rate without any loss of contractility or slowing of AV conduction. Which drug fits, and why?",
"c": [
"Ivabradine, which blocks only If in the SA node",
"Verapamil, which blocks L-type Ca²⁺ in SA and AV nodes",
"Metoprolol, which blocks β1 receptors",
"Adenosine, which activates K⁺ channels in the AV node",
"Lidocaine, which blocks fast Na⁺ channels"
],
"a": 0,
"e": "Classic Step 1 discriminator: ivabradine is SA node–selective; it blocks If only → ↓ heart rate, no effect on contractility or AV conduction. Verapamil/diltiazem block L-type Ca²⁺ → affect both SA and AV node rate/conduction and reduce contractility.",
"w": [
"",
"Verapamil slows AV conduction and weakens contraction.",
"β-blockers lower contractility too.",
"Adenosine causes transient AV block.",
"Lidocaine slows ventricular conduction, not SA rate."
],
"src": "lec"
},
{
"t": "Drugs That Hit These Channels",
"lv": "Hard",
"s": "A patient has a narrow-complex tachycardia. IV adenosine produces a few seconds of high-grade AV block. Which mechanism explains this?",
"c": [
"It blocks L-type Ca²⁺ channels for several hours",
"It blocks β1 receptors in the AV node",
"It blocks If channels in the SA node only",
"It blocks fast Na⁺ channels in the His bundle",
"A1 receptors open K⁺ channels like ACh"
],
"a": 4,
"e": "Adenosine activates inhibitory A1 receptors on the SA and AV nodes → ↑ outward K⁺ current (like ACh) → hyperpolarization → transient AV block. Its effect is very short-lived.",
"w": [
"Adenosine acts briefly, through K⁺ channel activation.",
"Adenosine is not a β-blocker.",
"That is ivabradine, which spares the AV node.",
"Not adenosine's mechanism.",
""
],
"src": "lec"
},
{
"t": "Drugs That Hit These Channels",
"lv": "Hard",
"s": "A man on metoprolol for angina notices he tires easily on stairs. Which pair of effects explains his drug's action?",
"c": [
"↓ heart rate only, sparing contractility",
"↓ AV conduction only, by blocking A1 receptors",
"↓ heart rate and ↓ contractility",
"↑ contractility with ↓ heart rate",
"↓ contractility only, from blocked M2"
],
"a": 2,
"e": "β-blockers (metoprolol) block β1 receptors, antagonizing sympathetic effects → ↓ HR (flatter phase 4) and ↓ contractility (less PKA-driven Ca²⁺ entry and release). The heart cannot raise output well with exertion.",
"w": [
"That is ivabradine.",
"That describes adenosine's target.",
"",
"β-blockers reduce contractility.",
"Metoprolol blocks β1, not M2."
],
"src": "lec"
},
{
"t": "Challenge · Cardiac Nerves",
"s": "A new drug selectively blocks If channels. Predict its effect on (a) heart rate and (b) the plateau phase of a ventricular myocyte. Justify both answers.",
"ns": true,
"sampath": 1,
"c": [
"(a) ↓ heart rate; (b) plateau unchanged",
"(a) ↓ heart rate; (b) plateau shortened",
"(a) No change in rate; (b) plateau lengthened",
"(a) ↑ heart rate; (b) plateau unchanged",
"(a) No change in rate; (b) plateau unchanged"
],
"a": 0,
"e": "(a) ↓ heart rate: If, the funny current, starts phase 4 in the SA node. Blocking it flattens the phase 4 slope, so threshold (≈ −40 mV) is reached later and the SA node fires less often.\n(b) Plateau unchanged: the ventricular plateau is a balance of L-type Ca²⁺ in and K⁺ out. Ventricular myocytes do not depend on If, so a selective If blocker leaves the plateau alone. This is ivabradine: ↓ HR only, no effect on contractility or AV conduction.",
"w": [
"",
"The plateau depends on ICa-L and IK, not If.",
"Blocking If slows the SA node, and the plateau does not change.",
"Blocking an inward pacemaker current slows, not speeds, the rate.",
"Blocking If flattens phase 4, so the rate falls."
],
"src": "lec"
},
{
"t": "Cardiac Cycle Timing: Systole vs Diastole",
"lv": "Easy",
"s": "At a heart rate of 75/min, one cardiac cycle lasts about 0.8 s. Which pairing of ventricular phase durations is correct, and which phase gives up the most time when the heart rate rises?",
"c": [
"Systole 0.5 s, diastole 0.3 s; systole shortens more",
"Systole 0.3 s, diastole 0.5 s; diastole shortens more",
"Systole 0.1 s, diastole 0.7 s; diastole shortens more",
"Systole 0.4 s, diastole 0.4 s; both shorten equally",
"Systole 0.3 s, diastole 0.5 s; systole shortens more"
],
"a": 1,
"e": "Cycle at 75/min = 0.8 s.\n• Atria: systole 0.1 s, diastole 0.7 s.\n• Ventricles: systole 0.3 s, diastole 0.5 s.\nKey concept from the lecture: at higher heart rates, diastole shortens more than systole, and this limits ventricular filling time. The part of diastole that is cut first is reduced filling (diastasis), the longest phase of the cycle.",
"w": [
"The ventricles spend more time relaxed (0.5 s) than contracting (0.3 s), and diastole is what gets cut.",
"",
"0.1 s and 0.7 s are the atrial systole and atrial diastole times, not ventricular.",
"The phases are not equal, and they do not shorten equally: diastole shrinks far more.",
"Durations are right, but systole is fairly fixed; diastole absorbs most of the shortening."
],
"src": "lec"
},
{
"t": "Key Volumes: EDV, ESV, SV & EF",
"lv": "Easy",
"s": "A healthy adult has a left ventricular end-diastolic volume of 120 mL and an end-systolic volume of 50 mL. What are the stroke volume and the ejection fraction?",
"c": [
"Stroke volume 70 mL; ejection fraction about 42%",
"Stroke volume 70 mL; ejection fraction about 58%",
"Stroke volume 50 mL; ejection fraction about 42%",
"Stroke volume 170 mL; ejection fraction about 70%",
"Stroke volume 120 mL; ejection fraction about 100%"
],
"a": 1,
"e": "• SV = EDV − ESV = 120 − 50 = 70 mL.\n• EF = SV / EDV = 70 / 120 ≈ 58%.\nNormal values from the lecture: EDV ≈ 120 mL (maximum volume, the preload), ESV ≈ 50 mL (minimum volume). A normal EF is roughly 55–70%.",
"w": [
"42% is ESV/EDV (50/120), the fraction left behind, not the fraction ejected.",
"",
"50 mL is the ESV, the volume left after systole, not the volume ejected.",
"SV is EDV minus ESV, not EDV plus ESV.",
"120 mL is the EDV; the ventricle never empties completely."
],
"src": "lec"
},
{
"t": "Key Volumes: EDV, ESV, SV & EF",
"lv": "Easy",
"s": "Which volume is used as the measure of preload, and which value is the preferred index of contractility?",
"c": [
"ESV for preload; stroke volume for contractility",
"Stroke volume for preload; EDV for contractility",
"EDV for preload; stroke volume for contractility",
"EDV for preload; ejection fraction for contractility",
"ESV for preload; ejection fraction for contractility"
],
"a": 3,
"e": "• Preload ≈ EDV, the volume at the end of diastole (the maximum ventricular volume).\n• Contractility is best indexed by EF = SV/EDV, because EF corrects for how full the ventricle was.\n• SV rises with more preload (Frank–Starling) even when contractility is unchanged, so SV alone cannot tell the two apart.",
"w": [
"ESV is the minimum volume after ejection; preload is the filled volume, EDV.",
"SV is the output of a beat, and EDV reflects filling, not contractility.",
"SV also rises with preload alone, so it cannot isolate contractility.",
"",
"EF is right, but preload is the volume at the end of filling, EDV."
],
"src": "lec"
},
{
"t": "Wiggers Diagram: Phases A–G, Valves & Heart Sounds",
"lv": "Easy",
"s": "Which sequence correctly orders the phases of the cardiac cycle, starting with atrial systole (phase A)?",
"c": [
"Atrial systole, isovolumetric contraction, rapid ejection, reduced ejection, isovolumetric relaxation, rapid filling, reduced filling",
"Atrial systole, rapid ejection, isovolumetric contraction, reduced ejection, rapid filling, isovolumetric relaxation, reduced filling",
"Atrial systole, isovolumetric contraction, reduced ejection, rapid ejection, isovolumetric relaxation, reduced filling, rapid filling",
"Atrial systole, isovolumetric relaxation, rapid ejection, reduced ejection, isovolumetric contraction, rapid filling, reduced filling",
"Atrial systole, isovolumetric contraction, rapid filling, reduced filling, isovolumetric relaxation, rapid ejection, reduced ejection"
],
"a": 0,
"e": "Phases on the Wiggers diagram:\nA – Atrial systole (ventricular diastole)\nB – Isovolumetric contraction\nC – Rapid ejection\nD – Reduced ejection\nE – Isovolumetric relaxation (and protodiastole)\nF – Rapid filling\nG – Reduced filling (diastasis)\nEach transition is a valve event driven by a pressure gradient: AV valves close (A→B), semilunar valves open (B→C), semilunar valves close (D→E), AV valves open (E→F).",
"w": [
"",
"Ejection cannot begin until isovolumetric contraction has raised LV pressure above aortic pressure.",
"Rapid comes before reduced in both ejection and filling.",
"The two isovolumetric phases are swapped: contraction precedes ejection, relaxation precedes filling.",
"Filling follows relaxation, not contraction; ejection follows contraction."
],
"src": "lec"
},
{
"t": "Wiggers Diagram: Phases A–G, Valves & Heart Sounds",
"lv": "Easy",
"s": "Which pair of valve events marks the start and the end of isovolumetric relaxation in the left heart?",
"c": [
"Starts at aortic valve closure; ends at mitral valve opening",
"Starts at mitral valve closure; ends at aortic valve opening",
"Starts at aortic valve opening; ends at aortic valve closure",
"Starts at mitral valve opening; ends at mitral valve closure",
"Starts at mitral valve closure; ends at aortic valve closure"
],
"a": 0,
"e": "• Isovolumetric contraction: mitral closes → aortic opens (all valves closed, P rises, volume constant).\n• Ejection: aortic opens → aortic closes.\n• Isovolumetric relaxation: aortic closes → mitral opens (all valves closed, P falls, volume constant at ESV).\n• Filling: mitral opens → mitral closes.\nIn both isovolumetric phases there is no blood flow to or from the ventricles.",
"w": [
"",
"That pair bounds isovolumetric contraction.",
"That pair bounds ventricular ejection.",
"That pair bounds ventricular filling.",
"This spans all of systole, not a single isovolumetric phase."
],
"src": "lec"
},
{
"t": "Wiggers Diagram: Phases A–G, Valves & Heart Sounds",
"lv": "Easy",
"s": "On the Wiggers diagram, which valve events produce the first and second heart sounds?",
"c": [
"S1: semilunar valves closing; S2: AV valves closing",
"S1: AV valves opening; S2: semilunar valves opening",
"S1: atrial contraction; S2: rapid ventricular filling",
"S1: semilunar valves opening; S2: AV valves opening",
"S1: AV valves closing; S2: semilunar valves closing"
],
"a": 4,
"e": "• S1 = mitral and tricuspid closure, at the start of isovolumetric contraction (start of ventricular systole, just after the QRS).\n• S2 = aortic and pulmonic closure, at the start of isovolumetric relaxation (end of systole, at the dicrotic notch, near the end of the T wave).\n• S3 = rapid ventricular filling (early diastole). S4 = atrial systole (late diastole).",
"w": [
"The order is reversed: AV closure starts systole (S1); semilunar closure ends it (S2).",
"Healthy valve opening is silent; the sounds come from closure.",
"Those events relate to the extra sounds S4 and S3.",
"Valve opening is normally silent.",
""
],
"src": "lec"
},
{
"t": "Atrial Systole & Ventricular Filling",
"lv": "Easy",
"s": "The atria have no valves at the openings of the great veins. What prevents blood from flowing back into the veins during atrial systole, and what share of EDV does atrial systole normally add?",
"c": [
"Venous valves at the caval openings; about 20–30%",
"Contraction of atrial muscle around the vein openings; about 70–80%",
"Contraction of atrial muscle around the vein openings; about 20–30%",
"Closure of the AV valves during atrial systole; about 70–80%",
"Higher venous than atrial pressure throughout; about 5%"
],
"a": 2,
"e": "Atrial systole: atrial pressure rises (≈ 8 mm Hg RA, 10 mm Hg LA) and pushes blood through the open AV valves → rapid active filling.\n• Backflow into the veins is limited by contraction of the atrial muscle around the venous orifices.\n• Atrial systole adds about 20–30% (≈ 25 mL) of EDV; the other 70–80% fills passively during general diastole.\n• Because there are no inlet valves, the atrial pressure rise is transmitted up the jugular vein as the a wave.",
"w": [
"There are no valves on the inlet side of the atria.",
"70–80% of EDV fills passively during general diastole.",
"",
"The AV valves are open in atrial systole; that is how blood reaches the ventricles.",
"Atrial pressure rises in atrial systole, and the atrial share is larger."
],
"src": "lec"
},
{
"t": "Atrial Systole & Ventricular Filling",
"lv": "Easy",
"s": "Which phase of the cardiac cycle is the longest, and which phase is shortened most when the heart rate rises?",
"c": [
"Rapid ejection is the longest and is cut most by a faster rate",
"Isovolumetric contraction is the longest, and rapid filling is cut most",
"Rapid filling is the longest, and atrial systole is cut most",
"Reduced ejection is the longest and is cut most by a faster rate",
"Reduced filling is the longest and is cut most by a faster rate"
],
"a": 4,
"e": "• Reduced ventricular filling (diastasis, phase G) is the longest phase of the cycle, and it is the phase most affected by heart rate.\n• As HR rises, diastole shortens more than systole, and diastasis is trimmed first. It adds little volume, so moderate tachycardia is tolerated; very fast rates also eat into rapid filling and EDV falls.",
"w": [
"Rapid ejection is only the first third of a 0.3 s ejection period.",
"Isovolumetric contraction is very brief, and diastasis, not rapid filling, is cut first.",
"Rapid filling is short; reduced filling is the longest phase.",
"Systole changes little with heart rate; diastole absorbs the change.",
""
],
"src": "lec"
},
{
"t": "Isovolumetric Phases & Ejection",
"lv": "Easy",
"s": "Which description of isovolumetric contraction in the left ventricle is correct?",
"c": [
"Aortic valve open, volume falls; ends when LV falls below aortic pressure",
"Mitral valve open, pressure rises; ends when the mitral valve closes",
"All valves closed, pressure rises; ends when LV exceeds aortic pressure",
"All valves closed, pressure falls; ends when LV falls below LA pressure",
"Aortic valve closed, volume rises; ends when the atrium contracts"
],
"a": 2,
"e": "Isovolumetric (isometric, isovolumic) contraction, phase B:\n• Starts when rising LV pressure exceeds LA pressure and closes the mitral valve (S1).\n• All valves closed → volume constant (≈ EDV), no blood flow in or out, pressure climbs steeply.\n• Ends when LV pressure exceeds aortic pressure (≈ 80 mm Hg; RV must exceed ≈ 10 mm Hg in the pulmonary artery) and the semilunar valves open.",
"w": [
"That describes ejection.",
"The mitral valve has already closed when this phase starts.",
"",
"That describes isovolumetric relaxation.",
"Volume is constant in an isovolumetric phase."
],
"src": "lec"
},
{
"t": "Isovolumetric Phases & Ejection",
"lv": "Easy",
"s": "Which statement correctly describes rapid ejection compared with reduced ejection?",
"c": [
"Rapid ejection is the last third of ejection and moves about 70% of the blood",
"Rapid ejection is the first third of ejection and moves about 30% of the blood",
"Rapid ejection is the first third of ejection and moves about 70% of the blood",
"Reduced ejection is the first half of ejection and moves most of the blood",
"Both phases move equal volumes, but rapid ejection lasts longer"
],
"a": 2,
"e": "• Rapid ejection (C): first 1/3 of ejection; blood is accelerated into the arteries; about 70% of the ejected volume; aortic and pulmonary pressures climb to their systolic peaks.\n• Reduced (slow) ejection (D): last 2/3 of ejection; ejection rate and intraventricular pressure fall.",
"w": [
"Rapid ejection comes first, while pressures are rising toward their peaks.",
"Most blood, about 70%, leaves in the rapid phase.",
"",
"Reduced ejection is the last two-thirds, with a falling ejection rate.",
"Rapid ejection is the shorter phase and moves most of the blood."
],
"src": "lec"
},
{
"t": "Jugular Venous Pulse & Aortic Pressure Curve",
"lv": "Easy",
"s": "Which pairing of jugular venous waves with their mechanical cause is correct?",
"c": [
"a: atrial filling; c: atrial contraction; v: tricuspid bulging",
"a: tricuspid bulging; c: atrial filling; v: atrial contraction",
"a: atrial contraction; c: atrial filling; v: tricuspid bulging",
"a: atrial contraction; c: tricuspid bulging; v: atrial filling",
"a: ventricular ejection; c: atrial contraction; v: tricuspid closing"
],
"a": 3,
"e": "No valves guard the atrial inlets, so atrial pressure changes are seen in the neck:\n• a wave: atrial systole sends a retrograde pressure pulse up the jugular vein.\n• c wave: the closed tricuspid valve bulges back into the atrium as ventricular pressure rises in early contraction.\n• v wave: atrial pressure rises gradually as the atrium fills during reduced ejection and isovolumetric relaxation, before the AV valve opens.",
"w": [
"The labels are shuffled: a is contraction, v is filling.",
"The a wave is atrial systole, not valve bulging.",
"c and v are swapped: c is bulging in early systole, v is filling.",
"",
"Ejection does not make a jugular wave, and a is atrial systole."
],
"src": "lec"
},
{
"t": "Jugular Venous Pulse & Aortic Pressure Curve",
"lv": "Easy",
"s": "On an aortic pressure tracing, what does the dicrotic notch mark, and which heart sound occurs at the same time?",
"c": [
"Aortic valve closure at the end of systole; S2",
"Aortic valve opening at the start of ejection; S1",
"Peak ejection during rapid ejection; S1",
"Mitral valve closure at the start of systole; S1",
"Atrial contraction at the end of diastole; S4"
],
"a": 0,
"e": "The dicrotic notch is the brief dip as the aortic valve closes, marking the end of ventricular systole (end of reduced ejection, start of isovolumetric relaxation). Closure of the aortic and pulmonic valves makes S2 at the same moment.",
"w": [
"",
"Opening occurs at the foot of the upstroke, and S1 is AV closure.",
"Peak ejection is at the top of the curve, not the notch.",
"Mitral closure occurs before the aortic upstroke.",
"Atrial events do not appear as a notch on the aortic curve."
],
"src": "lec"
},
{
"t": "Pressure Map: Normal Chamber Pressures",
"lv": "Easy",
"s": "Which pair of normal pressure ranges (minimum to maximum) is correct?",
"c": [
"Right ventricle 10–120 mm Hg; aorta 8–25 mm Hg",
"Right ventricle 5–25 mm Hg; pulmonary artery 8–25 mm Hg",
"Right atrium 2–12 mm Hg; left atrium 0–8 mm Hg",
"Left ventricle 80–120 mm Hg; aorta 10–120 mm Hg",
"Right ventricle 5–25 mm Hg; pulmonary artery 80–120 mm Hg"
],
"a": 1,
"e": "Normal pressures, minimum–maximum (mm Hg):\n• RA 0–8 · RV 5–25 · Pulmonary artery 8–25\n• LA 2–12 · LV 10–120 · Aorta 80–120\nThe right heart is a low-pressure circuit; the systolic peaks of each ventricle match the artery it ejects into.",
"w": [
"10–120 is the LV, and 8–25 is the pulmonary artery.",
"",
"Swapped: RA is 0–8 and LA is 2–12 mm Hg.",
"Swapped: the LV falls to about 10, the aorta stays above about 80.",
"80–120 is the aorta; the pulmonary artery is 8–25."
],
"src": "lec"
},
{
"t": "Cardiac Cycle Timing: Systole vs Diastole",
"lv": "Hard",
"s": "A 72-year-old man develops new atrial fibrillation with a ventricular rate of 150/min. He becomes lightheaded, and an echocardiogram shows a smaller end-diastolic volume and a lower stroke volume than last month, with a normal ejection fraction. Which pair of factors best explains the fall in stroke volume?",
"c": [
"A shortened ejection phase with an unchanged end-diastolic volume",
"Reduced contractility that leaves a larger end-systolic volume",
"A longer isovolumetric contraction that delays aortic valve opening",
"Higher aortic pressure that raises afterload and blocks ejection",
"Shortened diastole and loss of the atrial kick both lower EDV"
],
"a": 4,
"e": "SV = EDV − ESV, and EF = SV/EDV.\n• Here EF is normal but EDV is down, so this is a filling (preload) problem, not pump failure.\n• Fast rate: diastole shortens more than systole → less filling time, mainly lost from reduced filling (diastasis).\n• Atrial fibrillation: no organized atrial systole → the 'atrial kick' (rapid active filling, about 20–30% or 25 mL of EDV) is lost.\nBoth lower EDV, so SV falls with a preserved EF.",
"w": [
"EDV is reduced on the echo, and EF is normal, so the fall is in filling, not in emptying.",
"A normal EF argues against a contractility problem; the ventricle empties a normal fraction.",
"This would not explain a smaller EDV, which is the measured change.",
"Afterload changes ESV and EF; here EF is normal and EDV is what fell.",
""
],
"src": "lec"
},
{
"t": "Key Volumes: EDV, ESV, SV & EF",
"lv": "Hard",
"s": "Two patients are compared. Patient A receives 1 L of IV saline; his EDV rises from 120 to 150 mL and his ESV from 50 to 62 mL. Patient B has had a large anterior MI; her EDV is 120 mL and her ESV is 80 mL. Which statement is correct?",
"c": [
"Both have pump dysfunction, because stroke volume changed in both",
"Only Patient B has true pump dysfunction, shown by her low EF",
"Patient A has reduced contractility, because his ESV rose",
"Patient B has normal contractility, because her EDV is normal",
"Only Patient A has pump dysfunction, because his EDV is higher"
],
"a": 1,
"e": "Work it out:\n• A: SV = 150 − 62 = 88 mL (up from 70); EF = 88/150 ≈ 59%, unchanged → preload effect (Frank–Starling).\n• B: SV = 120 − 80 = 40 mL; EF = 40/120 ≈ 33% with the same EDV → contractility is down.\nThis is the lecture's key focus: an isolated ↑ preload (↑EDV) raises SV with EF preserved, while an isolated ↓ contractility lowers SV and EF at the same EDV. Only the second reflects true pump dysfunction, which is why EF, not SV or EDV alone, is the preferred index of contractility.",
"w": [
"A's SV rose from more preload with an unchanged EF, which is not dysfunction.",
"",
"His ESV rose only in proportion to his EDV; his EF stayed about 58–59%.",
"Same EDV but a much larger ESV: EF is only 33%, so contractility is down.",
"A higher EDV is more preload; it raised his SV and is not dysfunction."
],
"src": "lec"
},
{
"t": "Key Volumes: EDV, ESV, SV & EF",
"lv": "Hard",
"s": "A 58-year-old woman with dilated cardiomyopathy has an EDV of 200 mL and an ESV of 140 mL. A student notes that her stroke volume is 'nearly normal.' Which statement best describes her ventricle?",
"c": [
"Her stroke volume of 60 mL shows that contractility is preserved",
"Her EF is 30%: the dilated ventricle hides poor emptying",
"Her EDV of 200 mL shows that contractility is enhanced",
"Her EF is 70%, so the ventricle empties normally",
"Her ESV of 140 mL means her preload is unusually low"
],
"a": 1,
"e": "• SV = 200 − 140 = 60 mL, close to normal.\n• EF = 60 / 200 = 30%, markedly low (normal about 55–70%).\nThe dilated ventricle keeps SV up by working from a much bigger EDV, but it ejects only a small fraction of it. This is why EF, not SV or EDV alone, is used to judge contractility.",
"w": [
"SV can stay near normal in a dilated heart, so it hides the weak pump.",
"",
"A large EDV is more preload, and here it reflects dilation, not strength.",
"EF = 60/200 = 30%; 70% would be SV/ESV mixed up.",
"ESV is the volume left after ejection; her preload, EDV, is high."
],
"src": "lec"
},
{
"t": "Wiggers Diagram: Phases A–G, Valves & Heart Sounds",
"lv": "Hard",
"s": "On a Wiggers diagram, a snapshot shows left ventricular pressure of 40 mm Hg and falling, aortic pressure of 100 mm Hg, left atrial pressure of 8 mm Hg, and a left ventricular volume holding steady at 50 mL. Which phase is this, and which valve event comes next?",
"c": [
"Isovolumetric contraction; the aortic valve opens next",
"Reduced ejection; the aortic valve closes next",
"Rapid filling; the mitral valve closes next",
"Isovolumetric relaxation; the mitral valve opens next",
"Isovolumetric relaxation; the aortic valve closes next"
],
"a": 3,
"e": "Read the snapshot:\n• Volume constant at a low value (≈ ESV 50 mL) → an isovolumetric phase after ejection.\n• LV pressure falling and far below aortic (100) → the aortic valve is already closed.\n• LV pressure (40) still above LA (8) → the mitral valve is still closed.\nSo this is isovolumetric relaxation (phase E). When LV pressure drops below LA pressure, the mitral valve opens and rapid filling (F) begins.",
"w": [
"In contraction LV pressure rises; here it is falling.",
"During ejection LV volume falls; here it is constant, and LV is far below aortic pressure.",
"During filling volume rises; here it is constant and LV pressure is still above LA.",
"",
"The aortic valve has already closed, which is why volume is constant."
],
"src": "lec"
},
{
"t": "Wiggers Diagram: Phases A–G, Valves & Heart Sounds",
"lv": "Hard",
"s": "On a Wiggers diagram, a snapshot shows left ventricular pressure just above aortic pressure and both rising toward their peaks, left ventricular volume falling steeply, and the QRS complex just completed. Which phase is this, and which valve event marked its start?",
"c": [
"Rapid ejection; it began when the aortic valve opened",
"Isovolumetric contraction; it began when the mitral valve closed",
"Reduced ejection; it began when ventricular pressure peaked",
"Rapid filling; it began when the mitral valve opened",
"Rapid ejection; it began when the mitral valve closed"
],
"a": 0,
"e": "• LV P > aortic P with the aortic valve open → ejection.\n• Volume falling steeply and pressures rising → the first third of ejection, rapid ejection (phase C), which moves about 70% of the stroke volume.\n• It began when LV pressure exceeded aortic pressure (≈ 80 mm Hg) and the aortic valve opened, ending isovolumetric contraction.\n• Reduced ejection (D) is the last two-thirds, with falling ejection rate and pressure.",
"w": [
"",
"Volume cannot fall during an isovolumetric phase.",
"Pressures are still rising toward their peaks and volume is falling steeply.",
"Volume is falling, not rising, so blood is leaving the ventricle.",
"Mitral closure starts isovolumetric contraction, not ejection."
],
"src": "lec"
},
{
"t": "Wiggers Diagram: Phases A–G, Valves & Heart Sounds",
"lv": "Hard",
"s": "A 68-year-old woman with long-standing hypertension and left ventricular hypertrophy has an extra heart sound heard just before S1. During which phase of the cycle does it occur, and which ECG wave comes just before it?",
"c": [
"Atrial systole, just after the P wave",
"Rapid ventricular filling, just after the T wave",
"Isovolumetric contraction, just after the QRS complex",
"Isovolumetric relaxation, near the end of the T wave",
"Reduced ejection, during the ST segment"
],
"a": 0,
"e": "This is an S4, the 'atrial gallop':\n• Timing: late diastole, during atrial systole (phase A), which follows the P wave.\n• Cause: the atrium contracts against a stiff, hypertrophied ventricle.\nOn the Wiggers diagram the sounds run 4 (atrial systole) → 1 (start of isovolumetric contraction) → 2 (start of isovolumetric relaxation) → 3 (rapid filling).",
"w": [
"",
"That timing describes S3, heard in early diastole after S2.",
"That is the timing of S1 itself.",
"That is the timing of S2.",
"No normal or extra sound is timed to late ejection."
],
"src": "lec"
},
{
"t": "Atrial Systole & Ventricular Filling",
"lv": "Hard",
"s": "A 70-year-old man has atrial fibrillation, with no organized atrial contraction. Compared with sinus rhythm, which set of findings would disappear from his Wiggers diagram, heart sounds and jugular venous pulse?",
"c": [
"The c wave, because the tricuspid valve no longer bulges back",
"The v wave, because the atria no longer fill with venous blood",
"The dicrotic notch, because the aortic valve no longer closes",
"The atrial pressure bump, the jugular a wave and any S4",
"S1 and S2, because the valves no longer close properly"
],
"a": 3,
"e": "Atrial fibrillation removes organized atrial systole (phase A), so everything generated by it disappears:\n• the small rise in atrial and ventricular pressure at the end of diastole (and the 20–30% 'atrial kick' to EDV),\n• the jugular a wave (atrial contraction sends a pressure pulse up the vein),\n• an S4, which needs an atrium contracting into a stiff ventricle.\nThe c wave (ventricular contraction), v wave (atrial filling), S1, S2 and the dicrotic notch all persist. The lecture also notes that at fast rates the atrial component on the ventricular pressure trace is not clearly visible.",
"w": [
"The c wave comes from ventricular contraction, which still occurs.",
"The atria still fill passively from the veins, so v persists.",
"Ventricular ejection and aortic valve closure still occur.",
"",
"The valves still close each beat, so S1 and S2 are heard."
],
"src": "lec"
},
{
"t": "Isovolumetric Phases & Ejection",
"lv": "Hard",
"s": "Both ventricles eject the same stroke volume, but the right ventricle spends less time in isovolumetric contraction than the left. Which pair of normal pressures best explains this?",
"c": [
"The RV must exceed about 80 mm Hg; the LV only about 10",
"The RV peaks at 120 mm Hg, so it opens its valve sooner",
"The RV need only pass about 10 mm Hg; the LV about 80",
"The pulmonary valve opens before the tricuspid valve closes",
"Pulmonary artery pressure is higher than aortic pressure"
],
"a": 2,
"e": "Isovolumetric contraction lasts until ventricular pressure exceeds the pressure in the artery it feeds:\n• LV must exceed aortic diastolic pressure ≈ 80 mm Hg.\n• RV must exceed pulmonary artery diastolic pressure ≈ 8–10 mm Hg.\nThe RV reaches its lower opening pressure sooner, so its isovolumetric phase is shorter.\nNormal ranges: RV 5–25, pulmonary artery 8–25, LV 10–120, aorta 80–120 mm Hg.",
"w": [
"Reversed: 80 mm Hg is aortic diastolic pressure, about 10 is pulmonary.",
"The RV peaks at about 25 mm Hg; the LV peaks at about 120.",
"",
"Both inlet and outlet valves must be closed before ejection starts.",
"Pulmonary pressure (8–25) is far lower than aortic pressure (80–120)."
],
"src": "lec"
},
{
"t": "Jugular Venous Pulse & Aortic Pressure Curve",
"lv": "Hard",
"s": "A student labels an aortic pressure tracing. Which pairing of a part of the curve with its cause is correct?",
"c": [
"Anacrotic limb: run-off of blood to the periphery in diastole",
"Catacrotic limb: ejection of blood into the aorta",
"Dicrotic wave: rebound of blood off the closed aortic valve",
"Dicrotic notch: the moment of peak ejection into the aorta",
"Dicrotic wave: atrial contraction transmitted into the aorta"
],
"a": 2,
"e": "Aortic pressure curve:\n• Ascending (anacrotic) limb: ejection of blood into the aorta.\n• Dicrotic notch: closure of the aortic valve and end of ventricular systole. It is not ejection itself: once LV pressure drops below aortic pressure, blood briefly falls back toward the ventricle and snaps the valve shut.\n• Dicrotic wave: rebound of blood against the closed aortic valve.\n• Descending (catacrotic) limb: fall in pressure after ejection as blood runs off to the periphery.",
"w": [
"The ascending (anacrotic) limb comes from ejection into the aorta.",
"The descending (catacrotic) limb is the fall in pressure after ejection.",
"",
"The notch marks aortic valve closure, the end of systole.",
"Atrial events do not reach the aorta through a closed ventricle."
],
"src": "lec"
},
{
"t": "Jugular Venous Pulse & Aortic Pressure Curve",
"lv": "Hard",
"s": "A physician watches the jugular venous pulse in a healthy volunteer. One wave rises slowly through late systole and peaks just before an AV valve opens. Which wave is this, what produces it, and what makes it fall?",
"c": [
"The a wave from atrial contraction; it falls as the tricuspid closes",
"The c wave from tricuspid bulging; it falls as the pulmonic opens",
"The v wave from RV contraction; it falls as the pulmonic valve closes",
"The a wave from atrial filling; it falls as the mitral valve opens",
"The v wave from atrial filling; it falls as the tricuspid opens"
],
"a": 4,
"e": "• v wave: venous return keeps filling the right atrium while the tricuspid is closed, during reduced ejection and isovolumetric relaxation, so pressure rises gradually.\n• It peaks just before the tricuspid opens; when it opens, the atrium empties into the ventricle and the pressure falls (rapid filling).\nThis is why the v wave is a filling wave and the a wave, timed just after the P wave, is the one that reflects atrial contraction.",
"w": [
"The a wave follows the P wave in late diastole, not late systole.",
"The c wave is a brief early-systolic bump, not a slow late rise.",
"The v wave comes from atrial filling against a closed tricuspid valve.",
"Jugular waves reflect the right atrium and tricuspid, and a is contraction.",
""
],
"src": "lec"
},
{
"t": "Pressure Map: Normal Chamber Pressures",
"lv": "Hard",
"s": "During diastole, left ventricular pressure falls to about 10 mm Hg, yet aortic pressure stays above about 80 mm Hg. Which statement best explains this difference?",
"c": [
"The closed aortic valve and the aorta's elastic recoil",
"The mitral valve keeps the aorta filled with blood during diastole",
"The aorta contracts actively during diastole, like a second pump",
"Left ventricular pressure in diastole equals aortic pressure",
"Coronary arteries fill the aorta with blood during diastole"
],
"a": 0,
"e": "• Once LV pressure falls below aortic pressure, the aortic valve closes (dicrotic notch, S2) and separates the two.\n• The aorta, stretched during ejection, recoils elastically and keeps pushing blood to the periphery, so pressure falls slowly along the descending (catacrotic) limb to about 80 mm Hg.\n• The LV, now sealed off, relaxes isovolumetrically and its pressure drops toward about 10 mm Hg, below LA pressure, so the mitral valve opens.",
"w": [
"",
"The mitral valve connects the LA and LV; it does not feed the aorta.",
"The aorta has no active pumping; its wall recoils passively.",
"They separate as soon as the aortic valve closes.",
"Coronary flow leaves the aorta; it does not refill it."
],
"src": "lec"
},
{
"t": "Challenge Yourself · Sampath's Q's",
"s": "Clinical vignette. A 62-year-old man is admitted with an acute anterior MI and develops sustained ventricular tachycardia. He is hemodynamically stable and is given IV lidocaine, a class IB antiarrhythmic that blocks fast voltage-gated channels. The drug preferentially suppresses ectopic activity in depolarized, ischemic myocardium.<br><br>Which phase of the ventricular action potential, and which ionic event, is most directly affected by this drug?",
"html": true,
"ns": true,
"sampath": 1,
"c": [
"Phase 1: transient K⁺ efflux",
"Phase 2: L-type Ca²⁺ influx",
"Phase 0: rapid Na⁺ influx",
"Phase 3: delayed-rectifier K⁺ efflux",
"Phase 4: inward-rectifier K⁺ efflux"
],
"a": 2,
"e": "Lidocaine (class IB) blocks the fast voltage-gated Na⁺ channels, so it acts on Phase 0, the rapid Na⁺ influx (I_Na) that makes the upstroke.\n\nDiscussion question: Why would a drug that blocks the same channel in every myocyte act selectively on ischemic tissue? Think about channel states and resting potential.\n• Lidocaine binds Na⁺ channels mainly in the open and inactivated states and lets go of resting channels quickly.\n• Ischemic cells have a depolarized resting potential (less negative), so more of their Na⁺ channels sit in the inactivated state, and they recover slowly. That gives the drug more targets and more time to stay bound.\n• Healthy cells at about −85 to −90 mV recover their channels to the resting state quickly between beats, so the drug unbinds and has little effect. Fast rates add use dependence.",
"w": [
"Phase 1 is I_to, the transient outward K⁺ current; lidocaine does not target it.",
"Phase 2 L-type Ca²⁺ channels are the target of verapamil and diltiazem.",
"",
"Phase 3 delayed-rectifier K⁺ channels are blocked by class III drugs such as amiodarone.",
"Phase 4 I_K1 sets the resting potential and is not the lidocaine target."
],
"src": "lec"
},
{
"t": "Challenge Yourself · Sampath's Q's",
"s": "Clinical vignette. In a physiology lab, an isolated, field-stimulated ventricular myocyte is bathed in a solution containing no extracellular Ca²⁺. The cell is otherwise healthy, with normal Na⁺ and K⁺ concentrations and a normal resting potential. An electrode records the membrane potential while a force transducer records contraction.<br><br>Compared with normal Ca²⁺ conditions, which findings are most likely?",
"html": true,
"ns": true,
"sampath": 1,
"c": [
"Absent upstroke with preserved contraction",
"Preserved upstroke, shortened plateau, markedly reduced contraction",
"Normal action potential and normal contraction",
"Prolonged plateau with sustained tetanic contraction",
"Loss of the resting membrane potential"
],
"a": 1,
"e": "• Upstroke preserved: Phase 0 is carried by Na⁺, and Na⁺ is normal.\n• Plateau shortened: Phase 2 depends on L-type Ca²⁺ influx balancing K⁺ efflux. With no Ca²⁺ to enter, K⁺ efflux wins sooner.\n• Contraction markedly reduced: cardiac excitation–contraction coupling is Ca²⁺-induced Ca²⁺ release. The small 'trigger' Ca²⁺ entering through L-type channels opens the ryanodine receptors (RyR2) on the SR. No trigger means little SR release, and stores also run down.\n\nDiscussion question: Skeletal muscle keeps contracting in Ca²⁺-free medium for a while. Why can't cardiac muscle?\n• In skeletal muscle the DHP receptor is mechanically linked to the ryanodine receptor (RyR1). Depolarization pulls the RyR open directly, so no extracellular Ca²⁺ is needed.\n• In cardiac muscle there is no mechanical link: RyR2 opens only when trigger Ca²⁺ enters from outside.",
"w": [
"Na⁺ carries the upstroke, so it is preserved, and contraction needs trigger Ca²⁺.",
"",
"Without trigger Ca²⁺, SR release fails and force falls sharply.",
"Less Ca²⁺ influx shortens, not lengthens, the plateau, and cardiac muscle cannot tetanize.",
"The resting potential is set by K⁺ through I_K1, which is normal here."
],
"src": "lec"
},
{
"t": "Challenge Yourself · Sampath's Q's",
"s": "Clinical vignette. A 20-year-old medical student asks why the heart, unlike skeletal muscle, cannot develop sustained tetanic contraction. Your attending notes that a ventricular action potential lasts about 250 ms, while a ventricular twitch lasts a similar duration.<br><br>Which of the following best explains why ventricular myocardium cannot be tetanized?",
"html": true,
"ns": true,
"sampath": 1,
"c": [
"The SR releases Ca²⁺ too slowly for summation",
"Action potential duration is shorter than the twitch",
"Gap junctions electrically isolate each myocyte",
"Cardiac myocytes lack troponin",
"The long refractory period, due to Na⁺ channel inactivation, outlasts the mechanical contraction"
],
"a": 4,
"e": "Na⁺ channels stay inactivated through the plateau and only recover during Phase 3. So the effective refractory period lasts almost as long as the contraction itself; the muscle has begun relaxing before a new action potential can fire. Twitches cannot summate into tetanus, which keeps the heart filling between beats.\n\nDiscussion question: If the refractory period protects against tetany, what is the downside when refractoriness is non-uniform across the ventricle?\n• Dispersion of refractoriness (for example around an ischemic or scarred zone) sets up reentry.\n• A premature impulse blocks in the still-refractory region, travels around through tissue that has recovered, and then re-enters the first region once it recovers, creating a self-sustaining loop (reentrant VT, or VF).",
"w": [
"Release speed is not what prevents summation.",
"The AP is long, matching the twitch, which is exactly why the muscle cannot be restimulated in time.",
"Gap junctions couple myocytes electrically into a syncytium.",
"Cardiac muscle has troponin; troponin C binds the Ca²⁺ that starts contraction.",
""
],
"src": "lec"
},
{
"t": "Challenge Yourself · Sampath's Q's",
"s": "Clinical vignette. A 58-year-old man with end-stage renal disease misses two dialysis sessions and presents with generalized weakness and palpitations. Serum K⁺ is 7.4 mEq/L (normal 3.5–5.0). Reason about the cellular mechanism of his arrhythmia risk, not any tracing.<br><br>Which cellular change best explains impaired ventricular excitability in severe hyperkalemia?",
"html": true,
"ns": true,
"sampath": 1,
"c": [
"Depolarized resting potential, causing inactivation of fast Na⁺ channels",
"Hyperpolarized resting potential, moving it further from threshold",
"Increased Na⁺/K⁺-ATPase activity, lowering intracellular K⁺",
"Enhanced L-type Ca²⁺ current, shortening the plateau",
"Blockade of the inward-rectifier K⁺ current IK1 by high extracellular Na⁺"
],
"a": 0,
"e": "High extracellular K⁺ shrinks the K⁺ gradient, so E_K and the resting potential become less negative. At this depolarized voltage, many fast Na⁺ channels close their inactivation (h) gates and cannot reopen. Fewer available Na⁺ channels → a slower, smaller Phase 0 → slower conduction and reduced excitability, with a risk of conduction block and arrhythmia.\n\nDiscussion question: Mild hyperkalemia moves the membrane closer to threshold, yet severe hyperkalemia reduces excitability. Reconcile the two.\n• Mild: a small depolarization brings the membrane closer to threshold while most Na⁺ channels are still available → excitability rises.\n• Severe: the larger depolarization inactivates a large share of Na⁺ channels. Even though the cell is near threshold, there are too few channels to fire a normal upstroke → excitability falls (wide QRS, block, eventually asystole or VF).",
"w": [
"",
"High K⁺ depolarizes; hypokalemia is the state closer to hyperpolarization.",
"Pump activity does not explain the loss of excitability.",
"Hyperkalemia's main effect is on the resting potential and Na⁺ channel availability.",
"High extracellular K⁺, not Na⁺, is the problem, and it does not block I_K1."
],
"src": "lec"
},
{
"t": "Challenge · Pacemaker Currents",
"s": "Clinical vignette. A 66-year-old woman with HFrEF (EF 30%) remains symptomatic with a resting sinus rate of 84/min despite maximally tolerated β-blocker therapy. Her physician adds ivabradine to lower her heart rate without reducing myocardial contractility. The drug acts on a current in pacemaker cells that activates during hyperpolarization and carries mixed Na⁺/K⁺ inward flux.<br><br>Which current is the target of this drug?",
"html": true,
"ns": true,
"sampath": 1,
"c": [
"Fast Na⁺ current (I_Na)",
"L-type Ca²⁺ current (I_Ca-L)",
"Delayed-rectifier K⁺ current (I_K)",
"\"Funny\" current (I_f)",
"Inward-rectifier K⁺ current (I_K1)"
],
"a": 3,
"e": "I_f, the 'funny' current through HCN channels, is activated by hyperpolarization at the end of Phase 3 and carries a mixed Na⁺/K⁺ inward current that starts Phase 4 of the SA node. Ivabradine blocks it → flatter Phase 4 → threshold reached later → lower heart rate.\n\nDiscussion question: Why does blocking I_f reduce heart rate but leave contractility unchanged? Which cells express it?\n• I_f is expressed in pacemaker tissue: the SA node, and also the AV node and Purkinje fibers.\n• Ventricular working myocytes do not rely on I_f. Their force depends on L-type Ca²⁺ influx and SR release, which ivabradine leaves alone. So it slows the rate with no negative inotropy, unlike β-blockers and verapamil.",
"w": [
"I_Na is the fast upstroke current of working myocytes.",
"I_Ca-L carries the nodal upstroke and is blocked by verapamil.",
"I_K repolarizes in Phase 3; it is outward, not a hyperpolarization-activated inward current.",
"",
"I_K1 is an outward K⁺ current that holds the resting potential."
],
"src": "lec"
},
{
"t": "Challenge · Cardiac Nerves",
"s": "Clinical vignette. A 54-year-old woman undergoes a dobutamine stress echocardiogram because of exertional chest discomfort. During the infusion, her heart rate and ventricular contractility increase markedly. Dobutamine is predominantly a β₁-receptor agonist.<br><br>Which intracellular signaling sequence best explains the increase in contractility?",
"html": true,
"ns": true,
"sampath": 1,
"c": [
"Gq → PLC → IP₃ → direct SR Ca²⁺ release",
"Gi → inhibition of adenylyl cyclase → decreased cAMP",
"Gs → adenylyl cyclase → ↑ cAMP → PKA phosphorylation of L-type Ca²⁺ channels and phospholamban",
"Gs → guanylyl cyclase → cGMP → PKG activation",
"Direct ligand gating of the ryanodine receptor by the agonist"
],
"a": 2,
"e": "β₁ → Gs → adenylyl cyclase → ↑ cAMP → PKA. In ventricular muscle PKA phosphorylates:\n• L-type Ca²⁺ channels → more trigger Ca²⁺ → more SR release → ↑ force (positive inotropy).\n• Phospholamban → its brake on SERCA is released → faster Ca²⁺ reuptake into the SR → faster relaxation (positive lusitropy) and bigger SR stores for the next beat.\n\nDiscussion question: Contractility and relaxation both speed up with β₁ stimulation. Which PKA target… (the handout cuts off here; it most likely asks which target speeds relaxation).\n• Phospholamban: phosphorylation frees SERCA, so Ca²⁺ is pumped back into the SR faster. (Troponin I phosphorylation, which lowers myofilament Ca²⁺ sensitivity, also helps.)",
"w": [
"Gq/IP₃ is the α₁ pathway, not β₁.",
"Gi lowering cAMP is the M2 (vagal) pathway, which slows the heart.",
"",
"cGMP/PKG is the nitric oxide and natriuretic peptide pathway.",
"Dobutamine acts on a G-protein-coupled receptor, not directly on the ryanodine receptor."
],
"src": "lec"
},
{
"t": "Challenge · Cardiac Nerves",
"s": "Clinical vignette. A 25-year-old woman with a regular narrow-complex supraventricular tachycardia at 180/min is instructed to perform a Valsalva maneuver, and later receives carotid sinus massage. Both increase vagal output to the heart, and her rate transiently slows. Consider only the effect of acetylcholine on an SA node pacemaker cell.<br><br>Which combination of changes occurs in an SA nodal cell during vagal stimulation?<br><br><table style=\"border-collapse:collapse;margin:4px 0\"><tr><th style=\"border:1px solid #ccc;padding:3px 8px\">Choice</th><th style=\"border:1px solid #ccc;padding:3px 8px\">Maximum diastolic potential</th><th style=\"border:1px solid #ccc;padding:3px 8px\">Phase 4 slope</th></tr><tr><td style=\"border:1px solid #ccc;padding:3px 8px\">A</td><td style=\"border:1px solid #ccc;padding:3px 8px\">More negative</td><td style=\"border:1px solid #ccc;padding:3px 8px\">Flatter</td></tr><tr><td style=\"border:1px solid #ccc;padding:3px 8px\">B</td><td style=\"border:1px solid #ccc;padding:3px 8px\">More negative</td><td style=\"border:1px solid #ccc;padding:3px 8px\">Steeper</td></tr><tr><td style=\"border:1px solid #ccc;padding:3px 8px\">C</td><td style=\"border:1px solid #ccc;padding:3px 8px\">Unchanged</td><td style=\"border:1px solid #ccc;padding:3px 8px\">Steeper</td></tr><tr><td style=\"border:1px solid #ccc;padding:3px 8px\">D</td><td style=\"border:1px solid #ccc;padding:3px 8px\">Less negative</td><td style=\"border:1px solid #ccc;padding:3px 8px\">Flatter</td></tr><tr><td style=\"border:1px solid #ccc;padding:3px 8px\">E</td><td style=\"border:1px solid #ccc;padding:3px 8px\">Unchanged</td><td style=\"border:1px solid #ccc;padding:3px 8px\">Flatter</td></tr></table>",
"html": true,
"ns": true,
"sampath": 1,
"c": [
"More negative · Flatter",
"More negative · Steeper",
"Unchanged · Steeper",
"Less negative · Flatter",
"Unchanged · Flatter"
],
"a": 0,
"e": "ACh → M2 → Gi, with two arms:\n• βγ subunit opens I_K-ACh (GIRK) channels → K⁺ efflux → maximum diastolic potential becomes more negative (hyperpolarized), so the cell starts further from threshold.\n• αi inhibits adenylyl cyclase → ↓ cAMP → less I_f and less T-type Ca²⁺ current → flatter Phase 4 slope.\nBoth effects delay threshold → slower rate (negative chronotropy).\n\nDiscussion question: What would the same two parameters look like with sympathetic stimulation, and which of them differentiates the two systems?\n• Sympathetic (β₁ → ↑ cAMP → ↑ I_f and Ca²⁺ currents): Phase 4 slope steeper; maximum diastolic potential essentially unchanged.\n• Slope changes in both systems (in opposite directions). The maximum diastolic potential is what differentiates them: only vagal stimulation shifts it, by hyperpolarizing the cell through I_K-ACh.",
"w": [
"",
"A steeper slope would speed the rate; vagal input flattens it.",
"This is the sympathetic pattern.",
"Vagal K⁺ efflux hyperpolarizes; it does not depolarize.",
"The slope is right, but vagal I_K-ACh also makes the MDP more negative."
],
"src": "lec"
},
{
"t": "Challenge · Cardiac Nerves",
"s": "Clinical vignette. A 67-year-old man develops symptomatic sinus bradycardia (HR 38/min) with lightheadedness and hypotension during an inferior MI. IV atropine is given, and his heart rate rises to 78/min. His ventricular contractility is not noticeably increased by the drug.<br><br>Which of the following best explains both the heart-rate response and the lack of a significant inotropic effect?",
"html": true,
"ns": true,
"sampath": 1,
"c": [
"Gs activation raises cAMP in the SA node and ventricular myocytes equally",
"Increased I_K-ACh hyperpolarizes SA node cells",
"Blockade of nicotinic receptors in autonomic ganglia",
"Blockade of M2 receptors in ventricular myocardium, relieving tonic inhibition",
"Blockade of M2 receptors, removing resting vagal tone at the SA/AV nodes; ventricular parasympathetic innervation is sparse"
],
"a": 4,
"e": "Atropine is a muscarinic antagonist. At rest, vagal tone dominates at the SA and AV nodes, holding the rate below the intrinsic rate. Blocking M2 there removes that brake → heart rate rises. Inferior MIs often cause bradycardia through increased vagal tone (Bezold–Jarisch reflex), which is why atropine works well here.\nContractility barely changes because parasympathetic fibers supply mainly the atria and nodes; the ventricles have sparse vagal innervation, so there is little vagal inhibition to remove.\n\nDiscussion question: Atropine given at very low doses can paradoxically slow the heart briefly. How might that arise, and why is it not an issue in this patient?\n• At low doses atropine may block presynaptic muscarinic (M1) autoreceptors on vagal nerve endings, which normally limit ACh release, and may also have a central vagal-stimulating effect. Either way, more ACh reaches the nodes before postsynaptic M2 blockade is complete → brief slowing.\n• An adequate dose (for symptomatic bradycardia, about 1 mg IV) blocks the postsynaptic M2 receptors fully, so the paradoxical effect is overwhelmed.",
"w": [
"Atropine does not activate Gs; it removes Gi-mediated vagal inhibition.",
"More I_K-ACh would slow the heart; atropine prevents this.",
"Atropine is a muscarinic, not a nicotinic, antagonist.",
"The ventricles have little vagal innervation, so there is little tonic inhibition to relieve.",
""
],
"src": "lec"
},
{
"t": "Challenge · Pacemaker Currents",
"s": "Clinical vignette. A 31-year-old woman presents with sudden-onset palpitations and a regular tachycardia at 190/min. A diagnosis of AV nodal reentrant tachycardia is made, and she remains hemodynamically stable. After vagal maneuvers fail, IV verapamil is given and sinus rhythm is restored.<br><br>What is the primary cellular mechanism by which verapamil terminates this arrhythmia?",
"html": true,
"ns": true,
"sampath": 1,
"c": [
"Blockade of fast Na⁺ channels in Purkinje fibers",
"Blockade of L-type Ca²⁺ channels, slowing Phase 0 of AV nodal cells",
"Blockade of T-type Ca²⁺ channels, flattening Phase 4",
"Opening of K⁺ channels, hyperpolarizing AV nodal cells",
"Blockade of I_f, preventing Phase 4 depolarization"
],
"a": 1,
"e": "AV nodal cells are slow-response cells whose Phase 0 upstroke is carried by L-type Ca²⁺ current. Verapamil (a non-dihydropyridine Ca²⁺ blocker, class IV) blocks these channels → slower upstroke, slower conduction and a longer refractory period in the AV node. AVNRT uses the AV node as part of its circuit, so the reentry loop is broken.\n\nDiscussion question: Verapamil would be a poor choice in this same patient if she also had acute decompensated systolic HF. Why?\n• Verapamil also blocks L-type Ca²⁺ channels in ventricular myocytes, reducing trigger Ca²⁺ and SR release → negative inotropy. In a failing ventricle this can worsen cardiac output, cause hypotension and cardiogenic shock. Adenosine (very short-acting) is preferred.",
"w": [
"Fast Na⁺ channel blockade is the class I mechanism, and Purkinje fibers are not the circuit here.",
"",
"Verapamil's key target is the L-type channel that carries the nodal upstroke.",
"K⁺ channel opening is the adenosine (and ACh) mechanism.",
"I_f blockade is ivabradine; it slows the SA node, not AV conduction."
],
"src": "lec"
},
{
"t": "Challenge Yourself · Sampath's Q's",
"s": "Clinical vignette. A 72-year-old woman with chronic heart failure and atrial fibrillation takes digoxin and furosemide. She presents with nausea, visual disturbances (yellow halos), and new palpitations. Serum K⁺ is 3.0 mEq/L. Her cardiologist explains that digoxin raises myocardial contractility through effects on ion handling.<br><br>Which sequence best explains digoxin's positive inotropic mechanism?",
"html": true,
"ns": true,
"sampath": 1,
"c": [
"Direct opening of L-type Ca²⁺ channels",
"Direct stimulation of the Na⁺/Ca²⁺ exchanger to import Ca²⁺",
"Inhibition of SERCA, leaving more Ca²⁺ in the cytosol",
"Na⁺/K⁺-ATPase inhibition → ↑ intracellular Na⁺ → ↓ Na⁺/Ca²⁺ exchanger Ca²⁺ extrusion → ↑ SR Ca²⁺ stores",
"β₁ receptor stimulation with ↑ cAMP"
],
"a": 3,
"e": "Digoxin inhibits the Na⁺/K⁺-ATPase → intracellular Na⁺ rises → the Na⁺ gradient that drives the Na⁺/Ca²⁺ exchanger (NCX) shrinks → less Ca²⁺ is pushed out → more Ca²⁺ is taken up into the SR → more Ca²⁺ is released each beat → stronger contraction.\n\nDiscussion question: Why does this patient's hypokalemia increase her risk of digoxin toxicity? What does this imply for her diuretic regimen?\n• Digoxin and K⁺ compete for the same binding site on the Na⁺/K⁺-ATPase. With low K⁺, more digoxin binds → more pump inhibition → Ca²⁺ overload → delayed afterdepolarizations and arrhythmias.\n• Furosemide (a loop diuretic) wastes K⁺. She needs K⁺ monitoring and replacement, or a K⁺-sparing agent (for example spironolactone), to keep K⁺ normal while on digoxin.",
"w": [
"Digoxin does not open L-type channels.",
"Digoxin slows Ca²⁺ extrusion by NCX; it does not drive Ca²⁺ import directly.",
"SERCA inhibition would deplete SR stores and weaken contraction.",
"",
"Digoxin does not act on β₁ receptors or cAMP."
],
"src": "lec"
},
{
"t": "Na⁺ Channel States",
"lv": "Hard",
"s": "A 64-year-old man with an acute MI has frequent ectopic beats arising from the ischemic border zone, where resting potential is about −65 mV. A dose of lidocaine that barely affects healthy ventricle (resting potential −88 mV) suppresses the ectopy. Which property of the drug best explains this selectivity?",
"c": [
"It binds resting Na⁺ channels, which are more common in ischemic cells",
"It binds inactivated Na⁺ channels, common in depolarized cells",
"Ischemic myocytes express a different, lidocaine-sensitive Na⁺ channel",
"It opens K⁺ channels only in tissue that is depolarized",
"It blocks L-type Ca²⁺ channels, which carry ischemic ectopic beats"
],
"a": 1,
"e": "State-dependent block:\n• Lidocaine (class IB) binds Na⁺ channels mainly in the open and inactivated states and dissociates quickly from resting channels.\n• At −65 mV many channels are held inactivated and recover slowly, so the drug has more targets and stays bound longer.\n• At −88 mV channels return to the resting state between beats, the drug unbinds, and conduction is spared.\nThis is why class IB drugs are used for ischemic ventricular arrhythmias. Rapid rates add use dependence.",
"w": [
"Depolarized cells have fewer resting channels; lidocaine prefers open and inactivated ones.",
"",
"The same channel is present; its state, not its type, differs.",
"Lidocaine is a Na⁺ channel blocker, not a K⁺ channel opener.",
"Ca²⁺ channel block is the verapamil mechanism."
],
"src": "lec"
},
{
"t": "Phase 2 · Plateau & E–C Coupling",
"lv": "Hard",
"s": "An isolated skeletal muscle fiber and a ventricular myocyte are both moved into a Ca²⁺-free bath and stimulated. The skeletal fiber keeps contracting for many minutes; the myocyte's contractions fade within a few beats. Which difference best explains this?",
"c": [
"Skeletal muscle stores its contractile Ca²⁺ in mitochondria",
"Only cardiac SR release needs a trigger Ca²⁺ influx",
"Cardiac troponin C cannot bind Ca²⁺ released from the SR",
"Skeletal muscle has no SR and relies on extracellular Ca²⁺",
"Cardiac myocytes lack ryanodine receptors on the SR"
],
"a": 1,
"e": "• Skeletal muscle: the DHP receptor in the T-tubule is mechanically coupled to RyR1. Depolarization pulls RyR1 open directly, so extracellular Ca²⁺ is not needed.\n• Cardiac muscle: Ca²⁺-induced Ca²⁺ release. L-type Ca²⁺ influx during the plateau is the trigger that opens RyR2. In Ca²⁺-free solution there is no trigger and SR stores also run down, so contraction fails within beats.",
"w": [
"Both muscles release contractile Ca²⁺ from the SR.",
"",
"Cardiac troponin C binds SR Ca²⁺ normally; the trigger is missing.",
"It is the reverse: skeletal SR release does not need outside Ca²⁺.",
"Cardiac myocytes use RyR2, opened by trigger Ca²⁺."
],
"src": "lec"
},
{
"t": "Refractory Periods",
"lv": "Hard",
"s": "Three weeks after an anterior MI, a 61-year-old man has a premature ventricular beat that triggers sustained monomorphic VT. Mapping shows that cells near the scar have much longer refractory periods than nearby healthy tissue. Which mechanism best links the uneven refractoriness to his arrhythmia?",
"c": [
"The ventricle fuses into a sustained tetanic contraction",
"All cells become refractory at once, causing asystole",
"A premature beat blocks, circles round, and re-enters",
"Steeper Phase 4 in ventricular cells raises automaticity",
"Faster conduction through the scar shortens each cycle"
],
"a": 2,
"e": "The long refractory period protects against tetany, but non-uniform refractoriness is pro-arrhythmic:\n• A premature beat meets tissue that is still refractory (unidirectional block) and travels around it through recovered tissue.\n• Slow conduction near the scar delays it long enough for the blocked region to recover.\n• The impulse then re-enters, completing a loop that keeps firing: reentrant VT, which can degenerate into VF.",
"w": [
"Cardiac muscle cannot tetanize; the long refractory period prevents it.",
"Uneven, not uniform, refractoriness is the problem here.",
"",
"Uneven refractoriness sets up reentry, not enhanced automaticity.",
"Scar slows or blocks conduction; it does not speed it."
],
"src": "lec"
},
{
"t": "Na⁺ Channel States",
"lv": "Hard",
"s": "Two patients have hyperkalemia. Patient 1 has K⁺ 5.8 mEq/L and more frequent ectopic beats; patient 2 has K⁺ 8.2 mEq/L, a wide QRS and slowed conduction. Both resting potentials are less negative than normal. Which statement best explains why excitability rises in one but falls in the other?",
"c": [
"Mild hyperkalemia hyperpolarizes cells; severe hyperkalemia depolarizes them",
"Severe hyperkalemia opens more Na⁺ channels, causing block",
"Mild depolarization nears threshold; severe inactivates Na⁺ channels",
"High K⁺ blocks L-type Ca²⁺ channels only at the higher level",
"Mild hyperkalemia speeds the Na⁺/K⁺ pump; severe stops it"
],
"a": 2,
"e": "• Mild ↑K⁺: the resting potential moves a little closer to threshold while most Na⁺ channels are still available → it takes less to fire → excitability rises.\n• Severe ↑K⁺: the larger depolarization closes the inactivation (h) gates of many Na⁺ channels. The cell is near threshold, but too few channels are available for a normal Phase 0 → slower upstroke, slow conduction, wide QRS, block, and risk of VF or asystole.\nIV calcium stabilizes the membrane while K⁺ is lowered.",
"w": [
"Both levels depolarize; the difference is how far.",
"More open Na⁺ channels would speed conduction, not block it.",
"",
"The key change is Na⁺ channel availability, not Ca²⁺ block.",
"Pump activity does not explain the shift in excitability."
],
"src": "lec"
},
{
"t": "Integrated SA Node Effects & Summary",
"lv": "Hard",
"s": "A researcher records SA node action potentials, first during norepinephrine infusion and then during vagal stimulation. Which pairing is correct for norepinephrine, and which parameter changes only with vagal input?",
"c": [
"NE: flatter slope, same MDP; only vagal changes the slope",
"NE: steeper slope, more negative MDP; only vagal flattens the slope",
"NE: same slope, less negative MDP; only vagal changes the slope",
"NE: steeper slope, same MDP; only vagal makes the slope steeper",
"NE: steeper slope, same MDP; only vagal makes MDP more negative"
],
"a": 4,
"e": "• Sympathetic (NE → β₁ → ↑ cAMP → ↑ I_f and Ca²⁺ currents): Phase 4 steeper, maximum diastolic potential essentially unchanged → threshold sooner → faster rate.\n• Parasympathetic (ACh → M2 → Gi): αi ↓ cAMP → flatter slope; βγ opens I_K-ACh → MDP more negative.\nSlope changes in both (opposite directions). The hyperpolarized MDP is unique to vagal stimulation, and it is the parameter that differentiates the two.",
"w": [
"NE steepens Phase 4, and both systems change the slope.",
"NE does not hyperpolarize the cell; vagal I_K-ACh does.",
"NE's main effect is a steeper Phase 4 slope.",
"Vagal input flattens the slope.",
""
],
"src": "lec"
},
{
"t": "Drugs That Hit These Channels",
"lv": "Hard",
"s": "A 70-year-old man with symptomatic sinus bradycardia receives a very small dose of atropine, and his heart rate briefly falls further before rising. Which explanation best accounts for this transient slowing?",
"c": [
"Atropine directly stimulates M2 receptors at low doses",
"Low doses block β₁ receptors in the SA node",
"Atropine opens I_K-ACh channels independently of receptors",
"Low doses boost ACh release before M2 blockade is complete",
"Low doses block nicotinic receptors in vagal ganglia"
],
"a": 3,
"e": "Paradoxical bradycardia with low-dose atropine:\n• Small doses may block presynaptic muscarinic (M1) autoreceptors on vagal nerve terminals, which normally limit ACh release, and may also stimulate vagal output centrally. More ACh reaches the nodes before postsynaptic M2 receptors are fully blocked → brief slowing.\n• An adequate dose (about 1 mg IV for symptomatic bradycardia) blocks M2 fully, removing resting vagal tone at the SA and AV nodes → the rate rises.",
"w": [
"Atropine is an antagonist at all doses; it does not stimulate M2.",
"Atropine does not act on adrenergic receptors.",
"Atropine prevents, rather than causes, I_K-ACh opening.",
"",
"Ganglionic block would reduce, not increase, vagal effect."
],
"src": "lec"
},
{
"t": "Drugs That Hit These Channels",
"lv": "Hard",
"s": "A 63-year-old woman with acute decompensated systolic heart failure (EF 25%, BP 92/58 mm Hg, pulmonary edema) develops AV nodal reentrant tachycardia. Why is IV verapamil a poor choice for her?",
"c": [
"It blocks ventricular L-type Ca²⁺, cutting contractility",
"It blocks fast Na⁺ channels, widening the QRS",
"It speeds AV nodal conduction, making the tachycardia worse",
"It stimulates β₁ receptors and raises myocardial O₂ demand",
"It blocks I_f, leaving the AV node unaffected"
],
"a": 0,
"e": "Verapamil (non-DHP Ca²⁺ blocker) blocks L-type Ca²⁺ channels in:\n• the AV node → slower conduction → terminates AVNRT (the wanted effect), and\n• ventricular myocytes → less trigger Ca²⁺ → less SR release → negative inotropy, plus vasodilation.\nIn a failing, hypotensive ventricle this can precipitate cardiogenic shock. Adenosine, which acts for seconds, is preferred.",
"w": [
"",
"Verapamil is a Ca²⁺ channel blocker, not a Na⁺ channel blocker.",
"Verapamil slows AV nodal conduction; that is why it works for AVNRT.",
"Verapamil has no β₁ agonist action.",
"I_f block is ivabradine; verapamil acts on L-type Ca²⁺ channels."
],
"src": "lec"
},
{
"t": "Phase 2 · Plateau & E–C Coupling",
"lv": "Hard",
"s": "A 75-year-old woman on digoxin is started on high-dose furosemide, and her serum K⁺ falls to 2.9 mEq/L. She develops nausea and bigeminy. Which statement best explains her toxicity and the change her regimen needs?",
"c": [
"Low K⁺ boosts digoxin binding; she needs K⁺ replaced",
"Low K⁺ lowers digoxin binding, so her dose should be increased",
"Furosemide blocks digoxin excretion; switch to a thiazide",
"Low K⁺ activates β₁ receptors; add a β-blocker",
"Digoxin raises K⁺ inside cells; stop all potassium"
],
"a": 0,
"e": "• Digoxin and K⁺ compete for the same site on the Na⁺/K⁺-ATPase. With low K⁺, more digoxin binds → more pump inhibition → ↑ intracellular Na⁺ → less Ca²⁺ extrusion by NCX → Ca²⁺ overload → delayed afterdepolarizations (bigeminy, ventricular arrhythmias).\n• Loop diuretics waste K⁺. She needs K⁺ monitoring and replacement, or a K⁺-sparing diuretic such as spironolactone, while on digoxin.",
"w": [
"",
"Low K⁺ increases, not decreases, digoxin binding.",
"Thiazides also waste K⁺, and the main issue is K⁺ competition at the pump.",
"Hypokalemia does not act through β₁ receptors.",
"Toxicity comes from Ca²⁺ overload, and she needs K⁺ replaced."
],
"src": "lec"
}
];
