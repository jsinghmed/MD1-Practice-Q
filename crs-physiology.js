// CRS Physiology — Dr. Sampath V. lecture slides. Reworked set: fewer, multi-concept, high-yield questions; lv = Easy/Hard; sampath = Challenge Yourself questions from the slides, word for word
window.CRS_PH_TOPICS = ["Big Picture & Cardiac Cell Types", "Conduction System Anatomy", "Fast vs Slow Response", "Phase 0 & Na⁺ Channel Gates", "Phase 1 · The Notch", "Phase 2 · Plateau & E–C Coupling", "Phases 3 & 4 · Reset and Rest", "Refractory Periods", "Na⁺ Channel States", "Why the AP & Refractory Period Are Long", "Challenge Yourself · Sampath's Q's", "Pacemaker Cells, Automaticity & Key Terms", "Slow vs Fast Response APs", "Phase 4 · Pacemaker Potential", "Phase 0 · L-type Ca²⁺ Upstroke", "Phase 3 · Nodal Repolarization", "Pacemaker Hierarchy & Overdrive Suppression", "Challenge · Pacemaker Currents", "Autonomic Control: Chrono-, Dromo- & Inotropy", "Sympathetic β1 → Gs → cAMP Cascade", "Sympathetic Effects on SA Node, AV Node & Ventricle", "Parasympathetic M2 → Gi: Two Arms", "Integrated SA Node Effects & Summary", "Drugs That Hit These Channels", "Challenge · Cardiac Nerves", "Cardiac Cycle Timing: Systole vs Diastole", "Key Volumes: EDV, ESV, SV & EF", "Wiggers Diagram: Phases A–G, Valves & Heart Sounds", "Atrial Systole & Ventricular Filling", "Isovolumetric Phases & Ejection", "Jugular Venous Pulse & Aortic Pressure Curve", "Pressure Map: Normal Chamber Pressures", "Cardiac Output & Cardiac Reserve", "Preload, Afterload & Contractility", "Frank–Starling Law", "PV Loop: Phases & Valve Events", "PV Loop Shifts: Preload, Afterload, Contractility", "Cardiac Work", "Measuring CO: Indicator Dilution & Fick", "Sampath's Q's · Very Easy Set", "Sampath's Q's · Medium Set", "Sampath's Q's · Medium-Hard Set", "Sampath's Q's · Hard Set", "Sampath's Q's · Cardiac Cycle MCQs", "Sampath's Q's · Wiggers Diagram MCQs", "Sampath's Q's · Wiggers Diagram Easy", "Sampath's Q's · Cardiac Cycle Clinical Quiz"];
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
"s": "In a patient, each chamber of the heart contracts with normal force at a normal rate, but the atria and ventricles contract at the same moment instead of the atria first, so ventricular filling suffers. Which part of the heart's electrical system is failing?",
"c": [
"The pacemaker cells that generate the rhythm",
"The contractile myocytes that generate force",
"The sarcoplasmic reticulum that releases Ca²⁺",
"The conduction system that times contraction",
"The autonomic nerves that set the rate"
],
"a": 3,
"e": "The heart has two electrical jobs:\n• Generate a rhythm: pacemaker cells.\n• Coordinate contraction: the conduction system, so the atria contract before the ventricles.\nHere the rate and force are normal, so rhythm generation and the myocytes are fine. What fails is the atria-before-ventricles timing, which is the conduction system's job. Arrhythmias are diseases of this electrical system.",
"w": [
"A normal rate means the rhythm is still being generated.",
"Each chamber contracts with normal force.",
"SR Ca²⁺ release sets force within a cell, not the order of the chambers.",
"",
"Nerves adjust rate and speed; they are not the pathway that coordinates the chambers."
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
"s": "A researcher records action potentials from an isolated ventricular myocyte. After drug X is added, phase 0, the plateau and phase 3 look unchanged. Between beats, however, the membrane no longer sits at −90 mV; it slowly creeps toward −70 mV. Which current did drug X most likely block?",
"c": [
"Delayed-rectifier K⁺ current, I_K",
"Transient outward K⁺ current, I_to",
"L-type Ca²⁺ current, I_Ca-L",
"Funny Na⁺ current, I_f",
"Inward-rectifier K⁺ current, I_K1"
],
"a": 4,
"e": "Read the tracing in steps:\n• Phases 0–3 are unchanged, so the Na⁺, Ca²⁺ and delayed-rectifier K⁺ channels work.\n• Only phase 4 is lost. A stable −90 mV rest comes from constant K⁺ efflux through inward-rectifier (I_K1) channels, which give the resting cell its high K⁺ permeability.\n• Block I_K1 and less K⁺ leaves, so the membrane depolarizes.\nPhase 3 repolarization is a different current: delayed-rectifier K⁺ channels open as L-type Ca²⁺ channels inactivate.",
"w": [
"Blocking it would slow phase 3 repolarization, which is unchanged.",
"I_to makes the phase 1 notch, not the resting potential.",
"This would shorten the plateau, which is unchanged.",
"Ventricular cells don't rely on I_f; blocking it wouldn't depolarize them.",
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
"s": "A ventricular myocyte is stimulated 150 ms after its upstroke, while L-type Ca²⁺ channels are still carrying inward current. Even a stimulus three times threshold fails to trigger a new upstroke. Which gate positions in most fast Na⁺ channels explain this?",
"c": [
"m gate open, h gate closed",
"m gate closed, h gate open",
"m gate open, h gate open",
"Both gates open, Na⁺ gradient lost",
"Channels open but blocked by Ca²⁺"
],
"a": 0,
"e": "• L-type Ca²⁺ current 150 ms after the upstroke places the cell in the plateau (phase 2).\n• The plateau falls in the absolute refractory period: no stimulus of any strength can fire the cell.\n• That's because the Na⁺ channels are inactivated: m (activation) gate open, h (inactivation) gate closed.\nh gates close on their own shortly after opening and reopen only as the cell repolarizes in late phase 3. The channel must reset to m closed, h open before another phase 0.",
"w": [
"",
"This is the resting, available state; a strong stimulus would open them.",
"This is the open state of phase 0, when Na⁺ rushes in.",
"The Na⁺ gradient is preserved; the channel itself is the problem.",
"Ca²⁺ doesn't block Na⁺ channels; the inactivation gate does."
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
"s": "A new drug raises the heart rate from 70 to 90/min but leaves the force of each ventricular contraction unchanged. How is its effect best described?",
"c": [
"Positive inotropic, no chronotropic effect",
"Positive dromotropic, no chronotropic effect",
"Negative chronotropic, positive inotropic",
"Positive chronotropic, no inotropic effect",
"Increased automaticity of ventricular myocytes"
],
"a": 3,
"e": "• Chronotropy = heart rate.\n• Inotropy = contractility (force).\n• Dromotropy = conduction speed.\nA drug that raises only the rate is positive chronotropic with no inotropic effect. Automaticity is self-excitation from an unstable phase 4, a property of pacemaker cells, not working ventricular myocytes.",
"w": [
"Inotropy is force, which this drug leaves unchanged.",
"Dromotropy is conduction speed, and the rate did change.",
"The rate rose, so chronotropy is positive.",
"",
"Working ventricular myocytes have a stable phase 4 and no automaticity."
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
"s": "Two cardiac cells are impaled. Cell X rests at a steady −90 mV and overshoots to +30 mV with a steep upstroke. Cell Y has no stable resting potential; it drifts upward from about −60 mV and peaks near +10 mV with a slow upstroke. Extracellular Na⁺ is then lowered sharply. Whose phase 0 upstroke slows markedly?",
"c": [
"Cell Y only",
"Both cells equally",
"Cell X only",
"Neither cell",
"Cell Y more than cell X"
],
"a": 2,
"e": "• Identify the cells. Stable −90 mV rest, +30 mV overshoot and a steep upstroke = a fast-response working ventricular cell (5 phases). Unstable drifting rest, a +10 mV peak and a slow upstroke = a slow-response SA node cell (3 phases: 0, 3, 4).\n• Recall the phase 0 current. Fast response: fast Na⁺ channels. Slow response: L-type Ca²⁺ channels.\n• Lowering extracellular Na⁺ shrinks the Na⁺ driving force, so only cell X's upstroke slows.",
"w": [
"Cell Y's phase 0 is carried by L-type Ca²⁺, not Na⁺.",
"Only cell X depends on fast Na⁺ for phase 0.",
"",
"Cell X's phase 0 is a fast Na⁺ current, so it slows.",
"Cell Y's upstroke uses Ca²⁺; cell X is the Na⁺-dependent one."
],
"src": "lec"
},
{
"t": "Slow vs Fast Response APs",
"lv": "Hard",
"s": "A 58-year-old man with atrial fibrillation has a ventricular rate of 140/min. After an IV drug his rate falls to 90/min. Once he returns to sinus rhythm, his PR interval is longer than before, but his QRS width is unchanged. Which drug was he most likely given?",
"c": [
"Lidocaine",
"Verapamil",
"Flecainide",
"Ivabradine",
"Atropine"
],
"a": 1,
"e": "• A longer PR means slower AV nodal conduction; an unchanged QRS means the ventricular phase 0 is intact.\n• AV nodal phase 0 is carried by L-type Ca²⁺; ventricular phase 0 by fast Na⁺.\n• A drug that hits only the nodal upstroke is an L-type Ca²⁺ channel blocker (class IV: verapamil, diltiazem). It slows SA firing and AV conduction, which controls the ventricular rate in atrial fibrillation.",
"w": [
"A class I Na⁺ blocker acts on fast Na⁺ in the ventricle, not AV nodal Ca²⁺ conduction.",
"",
"A class I Na⁺ blocker slows ventricular conduction and widens the QRS.",
"It blocks I_f to slow the SA rate; it doesn't slow AV conduction.",
"Blocking vagal M2 input speeds AV conduction and shortens the PR."
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
"s": "During phase 4, an SA node cell's membrane drifts up to about −40 mV and the cell fires. Which channels carry the upstroke that follows?",
"c": [
"L-type Ca²⁺ channels",
"Fast voltage-gated Na⁺ channels",
"T-type Ca²⁺ channels",
"HCN funny channels",
"Delayed-rectifier K⁺ channels"
],
"a": 0,
"e": "Nodal threshold is about −40 mV, where L-type (long-lasting) Ca²⁺ channels open and produce the slow phase 0 upstroke. Ventricular cells reach threshold at about −65 mV and fire with fast Na⁺ channels.",
"w": [
"",
"These carry the ventricular upstroke, at a threshold of about −65 mV.",
"These open earlier, near −55 to −50 mV, and add to late phase 4.",
"I_f starts phase 4; it doesn't carry the upstroke.",
"These repolarize the cell in phase 3."
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
"s": "A 62-year-old woman takes verapamil for hypertension, and her resting heart rate is 54/min. On an SA node recording, which part of the action potential does the drug most directly blunt?",
"c": [
"Early phase 4 funny current",
"The phase 0 upstroke",
"Late phase 4 T-type Ca²⁺ current",
"The phase 2 plateau",
"Phase 3 K⁺ repolarization"
],
"a": 1,
"e": "• Verapamil is a class IV L-type Ca²⁺ channel blocker.\n• In nodal cells, T-type (transient) Ca²⁺ channels open near −55 to −50 mV and help late phase 4. L-type (long-lasting) channels open at threshold, about −40 mV, and carry phase 0.\n• So verapamil acts on I_Ca-L: it slows the nodal upstroke, slowing SA firing and AV conduction, and hits the SA node more than ventricular contraction.",
"w": [
"That's the target of ivabradine, not verapamil.",
"",
"Verapamil acts on L-type, not T-type, Ca²⁺ channels.",
"SA node cells have no plateau.",
"K⁺ channels are the target of class III drugs."
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
"s": "A 72-year-old woman faints at home. Her telemetry shows sinus rhythm at 70/min that suddenly stops. After a 2.5-second pause, narrow QRS complexes appear at 45/min with no P waves before them. When her sinus rhythm returns at 70/min, these 45/min beats disappear. Which best explains why the 45/min rhythm wasn't seen before the pause?",
"c": [
"Purkinje fibers suppressed the AV node until the SA node stopped",
"The AV node fires only when vagal tone is high",
"The AV node was refractory during the long ventricular plateau",
"Faster SA firing kept the AV node overdrive-suppressed",
"Atrial myocytes took over pacing once the SA node failed"
],
"a": 3,
"e": "• Narrow QRS with no P waves at 45/min = an AV junctional escape rhythm (AV node intrinsic rate 40–50/min).\n• Hierarchy: SA 60–80 → AV 40–50 → Purkinje 30–40/min.\n• While the SA node fires faster, it keeps depolarizing the slower latent pacemakers before they reach threshold and suppresses them: overdrive suppression. When the SA node stops, the AV node needs a moment to recover (the pause), then escapes. When sinus rhythm returns at 70/min, it overdrives the AV node again and the escape beats vanish.",
"w": [
"Suppression runs downhill: the fastest pacemaker suppresses slower ones, so Purkinje fibers can't suppress the faster AV node.",
"AV escape doesn't need vagal tone; it appears whenever faster input stops.",
"The AV node recovers between beats; it was suppressed, not refractory, and the pause reflects recovery from suppression.",
"",
"Atrial myocytes lack automaticity, and a narrow QRS with no P waves points to a junctional source."
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
"s": "A drug that blocks the βγ subunit of Gi is given before the vagus nerve is stimulated. Which vagal effect on the SA node is lost?",
"c": [
"The fall in cAMP from adenylyl cyclase inhibition",
"The drop in I_f from lower cAMP",
"Release of ACh from vagal nerve endings",
"Binding of ACh to M2 receptors",
"Hyperpolarization through I_K-ACh opening"
],
"a": 4,
"e": "ACh binds M2 → Gi splits into two arms:\n• αi inhibits adenylyl cyclase → ↓ cAMP → ↓ I_f and ↓ Ca²⁺ currents → flatter phase 4.\n• βγ opens the ligand-gated K⁺ channel I_K-ACh → K⁺ efflux → hyperpolarization.\nBlocking βγ removes only the hyperpolarizing arm; the cAMP arm still works.",
"w": [
"That's the αi arm, which still works.",
"Lower cAMP comes from the αi arm, which still works.",
"ACh release is upstream of the G protein.",
"Receptor binding happens before Gi splits.",
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
"s": "A new drug flattens SA node phase 4 and slows the heart rate. It leaves the ventricular phase 0 and plateau unchanged, and it doesn't bind any ion channel directly. Which drug fits?",
"c": [
"Ivabradine",
"Verapamil",
"Metoprolol",
"Lidocaine",
"Amiodarone"
],
"a": 2,
"e": "• Flatter phase 4 + slower rate = less I_f and Ca²⁺ drive in the SA node.\n• A drug that does this without binding an ion channel must act upstream, at a receptor.\n• Metoprolol, a class II β1 blocker, lowers cAMP and flattens phase 4.\nOther classes: I (lidocaine, flecainide) fast Na⁺, phase 0; III (amiodarone, sotalol) K⁺, phase 3; IV (verapamil, diltiazem) L-type Ca²⁺; ivabradine I_f directly.",
"w": [
"It also flattens phase 4, but by blocking I_f channels directly.",
"A class IV drug that blocks L-type Ca²⁺ channels directly.",
"",
"A class I drug that blocks fast Na⁺ channels in phase 0.",
"A class III drug that blocks K⁺ channels and prolongs phase 3."
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
"s": "A 25-year-old marathon runner has a resting heart rate of 50/min and a PR interval of 0.20 s. He is given atropine to block muscarinic receptors. Which parameter changes the least?",
"c": [
"Ventricular contractility",
"SA node firing rate",
"AV nodal conduction speed",
"PR interval duration",
"Resting heart rate"
],
"a": 0,
"e": "• Atropine blocks M2 receptors, removing vagal tone.\n• Vagal (ACh → M2) effects are − chronotropy and − dromotropy at the SA and AV nodes, and a trained athlete has a lot of vagal tone at rest. Removing it speeds the rate and AV conduction and shortens the PR.\n• The ventricles get little direct parasympathetic effect, so contractility barely changes.\nSympathetic (NE → β1) is the full set: + chronotropy, + dromotropy, + inotropy.",
"w": [
"",
"Removing vagal tone speeds the SA node.",
"Removing vagal tone speeds AV conduction.",
"Faster AV conduction shortens the PR.",
"The rate rises once vagal tone is removed."
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
"s": "Norepinephrine is given to an isolated heart from a mouse that lacks phospholamban. Which normal response to norepinephrine is missing?",
"c": [
"The rise in SA node firing rate",
"The rise in AV conduction velocity",
"The rise in Ca²⁺ entry during the plateau",
"The speed-up of ventricular relaxation",
"The steepening of phase 4"
],
"a": 3,
"e": "PKA targets after NE → β1 → cAMP:\n• SA node: I_f and Ca²⁺ channels → chronotropy.\n• AV node: L-type Ca²⁺ → dromotropy.\n• Ventricle: L-type Ca²⁺ → inotropy, and phospholamban → lusitropy.\nPhosphorylating phospholamban releases its brake on SERCA, so Ca²⁺ returns to the SR faster and the ventricle relaxes sooner. With no phospholamban, NE has nothing to act on there, so the speed-up of relaxation is missing; the other effects are intact.",
"w": [
"This works through I_f and Ca²⁺ channels, which are intact.",
"This works through AV nodal L-type Ca²⁺ channels.",
"This works through ventricular L-type Ca²⁺ channels.",
"",
"This is the SA node's I_f and Ca²⁺ effect."
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
"s": "During exercise a man's heart rate climbs from 70 to 150/min. SA node recordings show that the maximum diastolic potential hasn't changed. Which change mainly brings each cell to threshold sooner?",
"c": [
"More negative maximum diastolic potential",
"Opening of more I_K-ACh channels",
"Faster fast Na⁺ channel upstroke",
"Threshold shifted to about −65 mV",
"Steeper phase 4 from more I_f and I_Ca-T"
],
"a": 4,
"e": "• The rate rises but the MDP is unchanged, so the cell starts from the same place; it just gets to threshold faster.\n• That means a steeper phase 4.\n• Sympathetic NE → β1 → ↑ cAMP → ↑ I_f and ↑ I_Ca-T → steeper slope → (+) chronotropy.\nThe vagal side does the opposite: ↓ I_f and I_Ca-T plus ↑ I_K-ACh, which also hyperpolarizes the cell.",
"w": [
"That's a vagal effect, and the MDP didn't change.",
"I_K-ACh is opened by vagal βγ and slows the rate.",
"SA node phase 0 uses L-type Ca²⁺, and upstroke speed doesn't set the rate.",
"−65 mV is the ventricular threshold; nodal threshold stays near −40 mV.",
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
"s": "At 75/min a cardiac cycle lasts 0.8 s, and ventricular systole takes 0.3 s. If the heart rate rises to 150/min and systole shortens only slightly, to about 0.25 s, how much time is left for ventricular diastole?",
"c": [
"About 0.5 s",
"About 0.15 s",
"About 0.25 s",
"About 0.4 s",
"About 0.05 s"
],
"a": 1,
"e": "• Cycle length = 60 / HR = 60 / 150 = 0.4 s.\n• Diastole = 0.4 − 0.25 = 0.15 s, down from 0.5 s at rest.\nSystole barely shortens, so diastole gives up most of the time. This limits ventricular filling at high rates, and reduced filling (diastasis) is cut first.",
"w": [
"That's diastole at 75/min.",
"",
"That's the systolic time.",
"That's the whole cycle at 150/min.",
"Subtract systole from the 0.4 s cycle."
],
"src": "lec"
},
{
"t": "Key Volumes: EDV, ESV, SV & EF",
"lv": "Easy",
"s": "A left ventricle ejects 60 mL with each beat and holds 50 mL at the end of systole. What is its ejection fraction?",
"c": [
"About 45%",
"About 55%",
"About 120%",
"About 83%",
"About 65%"
],
"a": 1,
"e": "• EDV = SV + ESV = 60 + 50 = 110 mL.\n• EF = SV / EDV = 60 / 110 ≈ 55%, the low end of the normal 55–70%.\nNormal values from the lecture: EDV ≈ 120 mL, ESV ≈ 50 mL, SV ≈ 70 mL, EF ≈ 58%.",
"w": [
"50/110 is the fraction left behind, ESV/EDV.",
"",
"SV/ESV isn't EF; divide by EDV.",
"ESV/SV isn't EF; divide SV by EDV.",
"That would need an EDV of about 92 mL."
],
"src": "lec"
},
{
"t": "Key Volumes: EDV, ESV, SV & EF",
"lv": "Easy",
"s": "Two patients each have a stroke volume of 70 mL. Patient A's end-diastolic volume is 120 mL; patient B's is 200 mL. Which statement is correct?",
"c": [
"Their contractility is equal, since SV is equal",
"Patient A has the larger preload",
"Patient B has the higher ejection fraction",
"Patient B has the weaker contractility",
"Patient A has the larger end-systolic volume"
],
"a": 3,
"e": "EF = SV / EDV corrects stroke volume for how full the ventricle was, so it is the preferred index of contractility.\n• A: 70 / 120 ≈ 58%, normal.\n• B: 70 / 200 = 35%, low. B needs a much bigger preload (EDV) to get the same SV, so its contractility is weaker.\nSV rises with preload (Frank–Starling) even when contractility is unchanged, so SV alone can't tell the two apart.",
"w": [
"SV alone can't separate preload from contractility.",
"Preload ≈ EDV, and B's is larger.",
"B's EF is 35%; A's is about 58%.",
"",
"A's ESV is 50 mL; B's is 130 mL."
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
"s": "On a Wiggers diagram, left ventricular volume is flat at about 120 mL while LV pressure rises steeply. Which valve event ends this phase?",
"c": [
"Aortic valve opening",
"Mitral valve opening",
"Aortic valve closing",
"Mitral valve closing",
"Pulmonic valve closing"
],
"a": 0,
"e": "• Volume constant at about EDV (120 mL) with pressure rising steeply = isovolumetric contraction, with all valves closed. It begins when the mitral valve closes (S1).\n• It ends when LV pressure exceeds aortic pressure (about 80 mm Hg) and the aortic valve opens, starting rapid ejection.\nThe mirror phase, isovolumetric relaxation, runs from aortic closure to mitral opening at ESV.",
"w": [
"",
"This ends isovolumetric relaxation, at ESV.",
"This ends ejection.",
"This starts the phase, at S1.",
"This is part of S2, at the end of ejection."
],
"src": "lec"
},
{
"t": "Wiggers Diagram: Phases A–G, Valves & Heart Sounds",
"lv": "Easy",
"s": "A student listening with a stethoscope times a heart sound that occurs just after the QRS complex. Which valve event produces it?",
"c": [
"Semilunar valves closing",
"AV valves opening",
"Semilunar valves opening",
"Atrial contraction",
"AV valves closing"
],
"a": 4,
"e": "The QRS starts ventricular contraction. As ventricular pressure exceeds atrial pressure, the mitral and tricuspid valves close: S1, at the start of isovolumetric contraction.\n• S2 = aortic and pulmonic closure, at the dicrotic notch, near the end of the T wave.\n• S3 = rapid ventricular filling. S4 = atrial systole.",
"w": [
"That's S2, near the end of the T wave.",
"Valve opening is silent; it starts rapid filling.",
"Valve opening is silent; it starts ejection.",
"That's S4, in late diastole after the P wave.",
""
],
"src": "lec"
},
{
"t": "Atrial Systole & Ventricular Filling",
"lv": "Easy",
"s": "A patient develops atrial fibrillation, so his atria no longer contract effectively. At rest, about how much of his normal end-diastolic volume is lost?",
"c": [
"About 70–80%",
"About 50%",
"About 20–30%",
"Almost none",
"About 5%"
],
"a": 2,
"e": "Atrial systole adds about 20–30% (about 25 mL) of EDV; the other 70–80% fills passively during general diastole. Lose atrial contraction and that share is lost.\nThere are no valves at the venous inlets, so backflow during atrial systole is limited by contraction of the atrial muscle around the venous openings.",
"w": [
"That's the passive filling, which still happens.",
"Atrial systole adds much less than half.",
"",
"Atrial systole normally adds a real share of EDV.",
"This underestimates the atrial contribution."
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
"s": "A ventricle's pressure rises from about 10 to 80 mm Hg during the phase that follows S1. What is its volume doing during this phase?",
"c": [
"Falling from 120 to 50 mL",
"Rising from 50 to 120 mL",
"Constant at about 120 mL",
"Constant at about 50 mL",
"Falling by about 25 mL"
],
"a": 2,
"e": "• S1 is mitral and tricuspid closure, so the phase right after it is isovolumetric contraction.\n• All valves are closed, so no blood enters or leaves: volume stays at EDV (about 120 mL) while pressure climbs steeply.\nIt ends when LV pressure exceeds aortic pressure (about 80 mm Hg) and the aortic valve opens.",
"w": [
"That's ejection, after the aortic valve opens.",
"That's filling, with the mitral valve open.",
"",
"Constant at ESV is isovolumetric relaxation, after S2.",
"25 mL is about what atrial systole adds during filling."
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
"s": "A student watches the jugular venous pulse alongside an ECG. One wave appears just after each P wave. What produces it?",
"c": [
"Tricuspid valve bulging back",
"Atrial filling against a closed valve",
"Ventricular ejection into the aorta",
"Atrial contraction",
"Tricuspid valve opening"
],
"a": 3,
"e": "The P wave is atrial depolarization, so the wave right after it is the a wave from atrial systole. With no valves at the venous inlets, the pressure rise travels up the jugular vein.\n• c wave: the closed tricuspid bulges back as ventricular pressure rises.\n• v wave: the atrium fills while the tricuspid is closed, then falls when it opens.",
"w": [
"That's the c wave, early in ventricular contraction.",
"That's the v wave, in late systole.",
"Ejection doesn't produce a jugular wave.",
"",
"Opening makes the v wave fall."
],
"src": "lec"
},
{
"t": "Jugular Venous Pulse & Aortic Pressure Curve",
"lv": "Easy",
"s": "An aortic pressure tracing shows a brief dip at the end of ejection. Which heart sound occurs at the same moment?",
"c": [
"S2",
"S1",
"S3",
"S4",
"No sound"
],
"a": 0,
"e": "The brief dip is the dicrotic notch: the aortic valve closing at the end of ventricular systole (end of reduced ejection, start of isovolumetric relaxation). Aortic and pulmonic closure makes S2 at the same moment.",
"w": [
"",
"S1 is AV valve closure, at the start of systole.",
"S3 comes from rapid filling, in early diastole.",
"S4 comes from atrial systole, in late diastole.",
"Semilunar valve closure is audible as S2."
],
"src": "lec"
},
{
"t": "Pressure Map: Normal Chamber Pressures",
"lv": "Easy",
"s": "A catheter is advanced from a vein through the right heart. The pressures read 0–8, then 5–25, then 8–25 mm Hg. Where is the catheter tip at the last reading?",
"c": [
"Right ventricle",
"Pulmonary trunk",
"Left atrium",
"Pulmonary vein",
"Left ventricle"
],
"a": 1,
"e": "Normal min–max pressures (mm Hg): RA 0–8 · RV 5–25 · pulmonary artery 8–25 · LA 2–12 · LV 10–120 · aorta 80–120.\nThe step from RV to pulmonary artery keeps the same systolic peak (25) but has a higher minimum (8 vs 5): the closed pulmonic valve holds pressure in the artery during diastole while the ventricle drops to fill.",
"w": [
"The RV reads 5–25; its minimum drops near zero to fill.",
"",
"The LA isn't reached from the right heart, and reads 2–12.",
"Pulmonary veins drain to the LA, past the lungs.",
"The LV reads 10–120."
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
"s": "Two patients are compared. Patient A receives 1 L of IV saline; his EDV rises from 120 to 150 mL while his ESV stays at 50 mL. Patient B has had a large anterior MI; her EDV is 120 mL and her ESV is 80 mL. Which statement is correct?",
"c": [
"Both have pump dysfunction, because stroke volume changed in both",
"Only Patient B has true pump dysfunction, shown by her low EF",
"Patient A has increased contractility, because his EF rose",
"Patient B has normal contractility, because her EDV is normal",
"Only Patient A has pump dysfunction, because his EDV is higher"
],
"a": 1,
"e": "Work it out:\n• A: SV = 150 − 50 = 100 mL (up from 70); EF = 100/150 ≈ 67% (up from 58%). ESV did not change, so contractility did not change: the extra filling simply comes out as extra stroke volume (Frank–Starling). EF rises a little because EF = SV/EDV is somewhat preload-dependent.\n• B: SV = 120 − 80 = 40 mL; EF = 40/120 ≈ 33% with the same EDV → the ventricle can no longer empty to a normal ESV → contractility is down.\nThis is the lecture's key focus: an isolated ↑ preload (↑EDV) raises SV, with EF the same or slightly higher and ESV unchanged, while an isolated ↓ contractility raises ESV and lowers SV and EF at the same EDV. Only the second reflects true pump dysfunction, which is why a low EF is the marker of a failing pump.",
"w": [
"A's SV rose from more preload with no change in contractility, which is not dysfunction.",
"",
"His EF rose only because more filling raised SV against the same ESV; contractility is unchanged.",
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
"s": "During cardiac catheterization in a healthy volunteer, simultaneous tracings show left ventricular pressure of 40 mm Hg and falling, aortic pressure of 100 mm Hg, left atrial pressure of 8 mm Hg, and a left ventricular volume holding steady at 50 mL. Which valve event will happen next?",
"c": [
"The aortic valve opens",
"The aortic valve closes",
"The mitral valve closes",
"The mitral valve opens",
"The tricuspid valve closes"
],
"a": 3,
"e": "Read the snapshot:\n• Volume constant at a low value (about ESV, 50 mL) → an isovolumetric phase after ejection.\n• LV pressure falling and far below aortic (100) → the aortic valve is already closed.\n• LV pressure (40) still above LA (8) → the mitral valve is still closed.\nSo this is isovolumetric relaxation (phase E). When LV pressure drops below LA pressure, the mitral valve opens and rapid filling (F) begins.",
"w": [
"LV pressure is falling far below aortic pressure.",
"It has already closed; LV is far below aortic pressure.",
"It's already closed; it opens next.",
"",
"That happens at S1, at the start of systole."
],
"src": "lec"
},
{
"t": "Wiggers Diagram: Phases A–G, Valves & Heart Sounds",
"lv": "Hard",
"s": "During cardiac catheterization in a healthy volunteer, the tracings show left ventricular pressure just above aortic pressure, with both rising toward their peaks. Left ventricular volume is falling steeply, and the QRS complex has just finished. Which valve event marked the start of this phase?",
"c": [
"Aortic valve opening",
"Mitral valve closing",
"Mitral valve opening",
"Aortic valve closing",
"Pulmonic valve closing"
],
"a": 0,
"e": "• LV pressure above aortic pressure with volume falling → ejection.\n• Volume falling steeply and pressures still rising → rapid ejection (phase C), the first third of ejection, which moves about 70% of the stroke volume.\n• It began when LV pressure exceeded aortic pressure (about 80 mm Hg) and the aortic valve opened, ending isovolumetric contraction.",
"w": [
"",
"That starts isovolumetric contraction, before ejection.",
"That starts rapid filling.",
"That ends ejection.",
"That's part of S2, at the end of ejection."
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
"s": "A physician examines the jugular venous pulse of a healthy 22-year-old lying at 45°. One wave rises slowly through late systole, peaks just before an AV valve opens, and then falls. What produces this wave?",
"c": [
"Atrial contraction",
"Tricuspid bulging into the atrium",
"Right ventricular ejection",
"Pulmonic valve closure",
"Venous filling of the atrium"
],
"a": 4,
"e": "• Rises through late systole and peaks just before the tricuspid opens → the v wave.\n• While the tricuspid is closed during reduced ejection and isovolumetric relaxation, venous return keeps filling the right atrium, so pressure rises gradually.\n• When the tricuspid opens, the atrium empties into the ventricle and the pressure falls (rapid filling).\nThe v wave is a filling wave; the a wave reflects atrial contraction.",
"w": [
"That's the a wave, just after the P wave.",
"That's the c wave, early in ventricular contraction.",
"Ejection doesn't push blood back into the jugular vein.",
"Pulmonic closure produces part of S2, not a jugular wave.",
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
"s": "Two patients have hyperkalemia, and both resting potentials are less negative than normal. Patient 1 has K⁺ 5.8 mEq/L and more frequent ectopic beats. Patient 2 has K⁺ 8.2 mEq/L, a wide QRS and slowed conduction. Which best explains patient 2's slowed conduction?",
"c": [
"The cell is hyperpolarized far from threshold",
"Na⁺ channels open more and stay open",
"Many Na⁺ channels are held inactivated",
"L-type Ca²⁺ channels are blocked by K⁺",
"The Na⁺/K⁺ pump runs faster"
],
"a": 2,
"e": "• Mild ↑K⁺: the resting potential moves a little closer to threshold while most Na⁺ channels are still available, so it takes less to fire and excitability rises (patient 1).\n• Severe ↑K⁺: the larger depolarization closes the inactivation (h) gates of many Na⁺ channels. Too few channels are available for a normal phase 0, so the upstroke is slower, conduction slows and the QRS widens (patient 2), with risk of block, VF or asystole.\nIV calcium stabilizes the membrane while K⁺ is lowered.",
"w": [
"High K⁺ depolarizes cells; both are less negative than normal.",
"Depolarization closes h gates, so fewer channels are available.",
"",
"K⁺ doesn't block Ca²⁺ channels; the problem is Na⁺ channel availability.",
"Pump speed doesn't explain the slow upstroke."
],
"src": "lec"
},
{
"t": "Integrated SA Node Effects & Summary",
"lv": "Hard",
"s": "A researcher records SA node action potentials during a norepinephrine infusion and then during vagal stimulation. Both recordings show a changed phase 4 slope and a changed firing rate. Which parameter changes only during vagal stimulation?",
"c": [
"Slope of the phase 4 depolarization",
"Interval between action potentials",
"Threshold voltage for phase 0",
"Overshoot of the phase 0 peak",
"Maximum diastolic potential"
],
"a": 4,
"e": "• Sympathetic: NE → β₁ → ↑ cAMP → ↑ I_f and Ca²⁺ currents → steeper phase 4; the MDP is essentially unchanged.\n• Parasympathetic: ACh → M2 → Gi. αi ↓ cAMP → flatter slope. βγ opens I_K-ACh → MDP more negative.\nThe slope changes with both, in opposite directions. The hyperpolarized MDP is unique to vagal stimulation.",
"w": [
"The slope changes with both: steeper with NE, flatter with vagal input.",
"The rate changes with both nerves.",
"Threshold stays near −40 mV with both.",
"Neither nerve is defined by a change in the peak.",
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
"s": "A 75-year-old woman on digoxin is started on high-dose furosemide, and her serum K⁺ falls to 2.9 mEq/L. She develops nausea and bigeminy. Which change to her treatment best addresses the cause of her toxicity?",
"c": [
"Correct her serum potassium",
"Increase her digoxin dose",
"Switch furosemide to a thiazide",
"Add a β-blocker for the bigeminy",
"Stop all potassium intake"
],
"a": 0,
"e": "• Loop diuretics waste K⁺ → hypokalemia.\n• Digoxin and K⁺ compete for the same site on the Na⁺/K⁺-ATPase. With low K⁺, more digoxin binds → more pump inhibition → ↑ intracellular Na⁺ → less Ca²⁺ extrusion by NCX → Ca²⁺ overload → delayed afterdepolarizations (bigeminy, ventricular arrhythmias).\n• So the fix is to replace K⁺ (or use a K⁺-sparing diuretic such as spironolactone) and monitor it while she's on digoxin.",
"w": [
"",
"More digoxin would worsen the toxicity.",
"Thiazides also waste K⁺.",
"The cause is K⁺ competition at the pump, not β₁ activity.",
"She needs more K⁺, not less."
],
"src": "lec"
},
{
"t": "Cardiac Output & Cardiac Reserve",
"lv": "Easy",
"s": "A resting adult has a heart rate of 60/min and an end-diastolic volume of 140 mL. His left ventricle still holds 60 mL at the end of systole. What is his cardiac output?",
"c": [
"8.4 L/min",
"3.6 L/min",
"12.0 L/min",
"4.8 L/min",
"5.0 L/min"
],
"a": 3,
"e": "• SV = EDV − ESV = 140 − 60 = 80 mL.\n• CO = SV × HR = 80 mL × 60/min = 4,800 mL/min ≈ 4.8 L/min.\nNormal resting CO is about 5 L/min (70 mL × 72/min). CO is the output of each ventricle, not both added together.",
"w": [
"That multiplies EDV, not stroke volume, by heart rate.",
"That multiplies ESV by heart rate.",
"That adds EDV and ESV instead of subtracting.",
"",
"That's the textbook resting value, not this patient's."
],
"src": "lec"
},
{
"t": "Cardiac Output & Cardiac Reserve",
"lv": "Hard",
"s": "A 24-year-old marathon runner has a resting heart rate of 45/min and a resting cardiac output of 5 L/min. At peak exercise his heart rate reaches 180/min with a stroke volume of 170 mL. A sedentary classmate also has a resting output of 5 L/min and reaches a maximal output of 15 L/min. How much larger is the runner's cardiac reserve than the classmate's?",
"c": [
"30.6 L/min",
"25.6 L/min",
"10.0 L/min",
"7.65 L/min",
"15.6 L/min"
],
"a": 4,
"e": "• Runner's maximal CO = 180/min × 0.17 L = 30.6 L/min.\n• Cardiac reserve = maximal CO − resting CO. Runner: 30.6 − 5 = 25.6 L/min. Classmate: 15 − 5 = 10 L/min.\n• Difference = 25.6 − 10 = 15.6 L/min.\nMaximal CO reaches 20–35 L/min in trained athletes, and training raises it, mostly through a bigger stroke volume.",
"w": [
"That's the runner's maximal output, not the difference in reserve.",
"That's the runner's own reserve.",
"That's the classmate's reserve.",
"That uses the resting heart rate with the exercise stroke volume.",
""
],
"src": "lec"
},
{
"t": "Preload, Afterload & Contractility",
"lv": "Easy",
"s": "After losing blood, the body squeezes blood out of its large venous reservoir toward the heart. Which change raises preload this way?",
"c": [
"Nitrate-induced venous pooling",
"α1-mediated venoconstriction",
"A faster heart rate",
"Arteriolar vasodilation",
"β1-receptor blockade"
],
"a": 1,
"e": "• Veins hold a large share of the blood volume.\n• Sympathetic stimulation of α1 receptors in veins constricts them, pushing that blood toward the heart → more venous return → higher EDV (preload). This is the normal response to blood loss.\nOther ways to raise preload: add volume (blood, IV fluids) or slow the heart rate so there's more filling time.",
"w": [
"Pooling in the veins lowers preload.",
"",
"A faster rate shortens filling and lowers preload.",
"Arteriolar tone changes afterload, not venous return.",
"β1 blockade lowers contractility and rate."
],
"src": "lec"
},
{
"t": "Preload, Afterload & Contractility",
"lv": "Hard",
"s": "A 58-year-old man with stable angina gets chest pain while climbing stairs. Sublingual nitroglycerin relieves it within 2 minutes, and his blood pressure barely changes. Which change most directly explains the relief?",
"c": [
"Stronger contraction from more Ca²⁺ entry",
"Slower heart rate from reflex vagal firing",
"Higher afterload from arterial constriction",
"Smaller end-diastolic volume and stretch",
"More venous return to the right atrium"
],
"a": 3,
"e": "• Nitrates are mainly venodilators: blood pools in the veins.\n• Less venous return → lower preload (smaller LVEDV, less wall stretch).\n• Lower preload → less work and less O₂ demand → the angina is relieved.\nThe steady blood pressure fits a mostly venous effect rather than arteriolar dilation.",
"w": [
"Nitrates don't raise contractility; that would add O₂ demand.",
"If anything, the baroreflex speeds the heart after a nitrate.",
"Nitrates relax vessels; higher afterload would worsen angina.",
"",
"Nitrates pool blood in the veins, so venous return falls."
],
"src": "lec"
},
{
"t": "Preload, Afterload & Contractility",
"lv": "Hard",
"s": "A researcher perfuses an isolated heart and lowers the Na⁺ in the bath while keeping K⁺ and Ca²⁺ constant. Heart rate and end-diastolic volume don't change, but stroke volume rises. Which mechanism explains this?",
"c": [
"Fast Na⁺ channels open more widely in phase 0",
"The Na⁺/K⁺ pump runs faster and adds K⁺",
"Preload rises because EDV increases",
"β1 receptors are phosphorylated by PKA",
"Na⁺/Ca²⁺ exchanger removes less Ca²⁺"
],
"a": 4,
"e": "• HR and EDV are unchanged, yet SV rises → contractility has increased, not preload.\n• The Na⁺/Ca²⁺ exchanger uses the inward Na⁺ gradient to push Ca²⁺ out (3 Na⁺ in, 1 Ca²⁺ out). Lower extracellular Na⁺ weakens that gradient → less Ca²⁺ is removed.\n• More Ca²⁺ stays in the cell and is stored in the SR → stronger contraction.\nDigitalis works the same way, by raising intracellular Na⁺.",
"w": [
"Lower Na⁺ would weaken, not strengthen, phase 0.",
"Pump speed doesn't set contractile force here.",
"EDV didn't change, so preload is the same.",
"No catecholamine was given.",
""
],
"src": "lec"
},
{
"t": "Preload, Afterload & Contractility",
"lv": "Easy",
"s": "A patient in respiratory failure has a PaCO₂ of 75 mm Hg and a pH of 7.12. How do these values directly affect his ventricular muscle?",
"c": [
"Contractility rises",
"EDV rises sharply",
"Contractility falls",
"Afterload doubles",
"No direct effect on force"
],
"a": 2,
"e": "• Hypercapnia (high PaCO₂) and the acidosis it causes both lower contractility.\nOther causes of lower contractility: β1 blockade (↓ cAMP), heart failure with systolic dysfunction, hypoxia, and non-dihydropyridine Ca²⁺ channel blockers (verapamil, diltiazem).",
"w": [
"Acidosis and hypercapnia weaken, not strengthen, contraction.",
"Hypercapnia doesn't directly fill the ventricle.",
"",
"These values act on the muscle itself, not on outflow resistance.",
"Acidosis and hypercapnia are listed causes of lower contractility."
],
"src": "lec"
},
{
"t": "Preload, Afterload & Contractility",
"lv": "Easy",
"s": "Which condition raises left ventricular afterload without having to raise mean arterial pressure?",
"c": [
"Hemorrhage",
"Nitrate therapy",
"Bradycardia",
"Aortic stenosis",
"Hypercapnia"
],
"a": 3,
"e": "Afterload is the resistance the ventricle must overcome to eject blood. It rises when:\n• mean blood pressure is high, or\n• the outflow is obstructed: a stiff aortic valve (aortic stenosis), hypertrophic cardiomyopathy or a subaortic membrane.\nWith stenosis the ventricle must generate a much higher pressure even when aortic pressure is normal.",
"w": [
"Blood loss lowers preload.",
"Nitrates lower preload, and at higher doses afterload.",
"A slow rate raises preload through longer filling.",
"",
"Hypercapnia lowers contractility."
],
"src": "lec"
},
{
"t": "Preload, Afterload & Contractility",
"lv": "Hard",
"s": "A 68-year-old woman has had untreated hypertension for 20 years. Echo shows a thick left ventricular wall with a normal chamber size. Why did her ventricle remodel this way?",
"c": [
"A thicker wall raises preload",
"A thicker wall lowers wall tension",
"Dilation lowers end-systolic volume",
"Hypertrophy raises heart rate",
"More muscle lowers aortic pressure"
],
"a": 1,
"e": "• Chronic hypertension → persistently high afterload.\n• To generate that pressure, each fiber faces more wall tension (tension rises with pressure × radius and falls with wall thickness).\n• The LV compensates by thickening (concentric hypertrophy), which spreads the load and lowers wall tension.\nThe cost: more muscle needs more O₂, and more afterload means more work.",
"w": [
"Thickening makes the ventricle stiffer, not fuller.",
"",
"Her chamber isn't dilated.",
"Wall thickness doesn't set heart rate.",
"Hypertrophy doesn't treat the hypertension."
],
"src": "lec"
},
{
"t": "Frank–Starling Law",
"lv": "Easy",
"s": "A healthy person lies down and raises both legs, sending more venous blood to the heart. Contractility, afterload and heart rate stay the same. What happens to stroke volume?",
"c": [
"It falls because ESV rises",
"It stays the same",
"It rises because ESV falls",
"It falls because HR slows",
"It rises because EDV rises"
],
"a": 4,
"e": "Frank–Starling law: the more the ventricle fills in diastole, the stronger it contracts in systole.\n• More venous return → higher EDV (preload) → more fiber stretch → stronger contraction → bigger SV.\n• ESV stays about the same, so the extra filling is ejected.",
"w": [
"ESV rises with afterload, which is unchanged.",
"More filling means more stretch and a stronger beat.",
"A falling ESV is the contractility pattern.",
"Heart rate is unchanged.",
""
],
"src": "lec"
},
{
"t": "Frank–Starling Law",
"lv": "Hard",
"s": "For a few beats, a patient's right ventricle pumps 2 mL more per beat than his left ventricle. Over the next several beats the two outputs match again, with no change in nerve or hormone input. Which mechanism matches them?",
"c": [
"Greater LV filling raises LV stroke volume",
"Sympathetic input boosts LV contractility",
"Vagal input slows the right ventricle",
"The pulmonary veins constrict to cut return",
"Baroreceptors speed up the heart rate"
],
"a": 0,
"e": "• Extra RV output → more blood reaches the lungs and returns to the left atrium.\n• Left ventricular filling (EDV) rises → more stretch.\n• Frank–Starling → stronger LV contraction → LV stroke volume rises until it matches the right.\nThis intrinsic mechanism keeps right and left outputs equal and prevents blood from damming up in the veins: venous return (70 mL) = SV (70 mL).",
"w": [
"",
"No nerve or hormone input changed.",
"Vagal input acts on the nodes, and none changed here.",
"That would make the mismatch worse.",
"Rate changes affect both ventricles equally."
],
"src": "lec"
},
{
"t": "PV Loop: Phases & Valve Events",
"lv": "Easy",
"s": "On a left ventricular pressure-volume loop, the bottom-right corner is where the loop turns straight upward at its largest volume. Which valve event happens there?",
"c": [
"Aortic valve opens",
"Aortic valve closes",
"Mitral valve closes",
"Mitral valve opens",
"Pulmonic valve opens"
],
"a": 2,
"e": "Reading the loop counterclockwise from the bottom right:\n• Bottom right = EDV: the mitral valve closes (S1) → isovolumetric contraction (straight up).\n• Top right: the aortic valve opens → rapid then slow ejection (volume falls).\n• Top left = ESV: the aortic valve closes (S2) → isovolumetric relaxation (straight down).\n• Bottom left: the mitral valve opens → rapid and reduced filling, then active filling (atrial systole).",
"w": [
"That's the top-right corner, at the start of ejection.",
"That's the top-left corner, at the end of ejection.",
"",
"That's the bottom-left corner, at the start of filling.",
"The pulmonic valve belongs to the right ventricle."
],
"src": "lec"
},
{
"t": "PV Loop: Phases & Valve Events",
"lv": "Hard",
"s": "On a patient's left ventricular pressure-volume loop, volume falls from 130 mL to 55 mL along the top of the loop. The loop then drops straight down at 55 mL before moving right along the bottom. What is his ejection fraction?",
"c": [
"About 42%",
"About 73%",
"About 50%",
"About 58%",
"About 75%"
],
"a": 3,
"e": "• The top of the loop is ejection: it starts at EDV (130 mL) and ends at ESV (55 mL).\n• The straight drop at 55 mL is isovolumetric relaxation, which confirms ESV = 55 mL.\n• SV = 130 − 55 = 75 mL. EF = SV / EDV = 75 / 130 ≈ 58%.",
"w": [
"55/130 is the fraction left behind, ESV/EDV.",
"That divides ESV by stroke volume.",
"This doesn't match the volumes on the loop.",
"",
"75 is the stroke volume in mL, not a percent."
],
"src": "lec"
},
{
"t": "PV Loop Shifts: Preload, Afterload, Contractility",
"lv": "Easy",
"s": "A drug increases contractility while preload and afterload stay the same. How does the left ventricular pressure-volume loop change?",
"c": [
"Wider loop with a larger EDV",
"Narrower loop with a larger ESV",
"Taller loop with a larger ESV",
"No change in width or ESV",
"Wider loop with a smaller ESV"
],
"a": 4,
"e": "Higher contractility:\n• EDV unchanged (same preload).\n• The ventricle empties further → ESV falls.\n• SV and EF rise → the loop gets wider, extending to the left.",
"w": [
"A larger EDV is the preload pattern.",
"That's the higher-afterload pattern.",
"More contractility shrinks ESV.",
"Stronger contraction ejects more blood.",
""
],
"src": "lec"
},
{
"t": "PV Loop Shifts: Preload, Afterload, Contractility",
"lv": "Hard",
"s": "A 74-year-old man has exertional syncope and a harsh crescendo–decrescendo systolic murmur at the right upper sternal border. His preload and contractility are unchanged. Compared with normal, which change is expected on his left ventricular pressure-volume loop?",
"c": [
"Larger EDV with an unchanged ESV",
"Higher peak pressure, larger ESV",
"Smaller ESV with a wider loop",
"Lower peak pressure and a larger SV",
"Unchanged pressure and a smaller SV"
],
"a": 1,
"e": "• Exertional syncope with a crescendo–decrescendo murmur at the right upper sternal border → aortic stenosis.\n• Aortic stenosis = higher afterload: the ventricle must reach a higher pressure during isovolumetric contraction and ejection.\n• Against that resistance it ejects less → SV and EF fall, and more blood is left behind → ESV rises. The loop gets taller and narrower.",
"w": [
"That's the higher-preload pattern.",
"",
"That's the higher-contractility pattern.",
"Obstruction raises pressure and lowers SV.",
"The ventricle must generate a higher pressure."
],
"src": "lec"
},
{
"t": "PV Loop Shifts: Preload, Afterload, Contractility",
"lv": "Hard",
"s": "A 45-year-old man with Marfan syndrome has a blowing early diastolic murmur and a wide pulse pressure. His contractility and afterload are about normal. Which change dominates his left ventricular pressure-volume loop?",
"c": [
"Smaller ESV with EDV unchanged",
"Larger ESV with a narrower loop",
"Larger EDV with ESV about unchanged",
"Smaller EDV and a narrower loop",
"Lower pressure in isovolumetric contraction"
],
"a": 2,
"e": "• Marfan syndrome with a blowing early diastolic murmur and wide pulse pressure → aortic insufficiency (regurgitation).\n• Blood leaks back from the aorta into the LV during diastole → extra filling → higher preload.\n• Higher preload: EDV rises, SV rises, ESV doesn't change. The loop widens to the right.",
"w": [
"That's the higher-contractility pattern.",
"That's the higher-afterload pattern.",
"",
"Regurgitation adds volume, so EDV rises.",
"Contractility and afterload are normal here."
],
"src": "lec"
},
{
"t": "Cardiac Work",
"lv": "Easy",
"s": "Mean aortic pressure is 100 mm Hg and stroke volume is 70 mL. If heart rate rises from 70 to 140/min with the same pressure and stroke volume, what happens to minute work?",
"c": [
"It halves",
"It stays the same",
"It quadruples",
"It doubles",
"It rises by 40%"
],
"a": 3,
"e": "• Stroke work = aortic pressure × SV (unchanged here).\n• Minute work = stroke work × HR = aortic pressure × CO.\n• Doubling HR with the same stroke work doubles minute work.",
"w": [
"Faster beating adds work.",
"Minute work multiplies stroke work by heart rate.",
"Heart rate enters once, not squared.",
"",
"The rate doubled, so work doubles."
],
"src": "lec"
},
{
"t": "Cardiac Work",
"lv": "Hard",
"s": "Two patients each have a stroke volume of 70 mL and a mean aortic pressure of 95 mm Hg. Patient A has severe aortic stenosis with a very high ejection velocity; patient B has a normal valve. Which part of stroke work is much larger in patient A?",
"c": [
"Pressure-volume work against the aorta",
"Volume work set by cardiac output",
"Pressure work set by arterial BP",
"Work done during ventricular filling",
"Kinetic energy of the ejected blood"
],
"a": 4,
"e": "Stroke work has two parts:\n• Pressure-volume work (about 99%): moving blood from low-pressure veins to high-pressure arteries. Same SV and aortic pressure → the same in both.\n• Kinetic energy (about 1% normally): accelerating blood through the valve. It's proportional to the mass ejected × velocity².\n• A stenotic valve forces a much higher ejection velocity, so the kinetic part rises sharply in aortic or pulmonary stenosis.",
"w": [
"Same SV and aortic pressure give the same pressure-volume work.",
"Their stroke volumes are equal.",
"Their aortic pressures are equal.",
"Stroke work is done during ejection.",
""
],
"src": "lec"
},
{
"t": "Measuring CO: Indicator Dilution & Fick",
"lv": "Easy",
"s": "A patient consumes 250 mL of O₂ per minute. His arterial O₂ content is 200 mL/L and his pulmonary artery O₂ content is 150 mL/L. What is his cardiac output?",
"c": [
"1.25 L/min",
"5 L/min",
"50 L/min",
"1.7 L/min",
"0.5 L/min"
],
"a": 1,
"e": "Fick principle: CO = O₂ consumption / (arterial O₂ − venous O₂).\n• A–V difference = 200 − 150 = 50 mL/L = 0.05 mL/mL.\n• CO = 250 mL/min ÷ 0.05 mL/mL = 5,000 mL/min = 5 L/min.\nPay attention to the units: content in mL/L must match the mL of consumption.",
"w": [
"That divides by arterial content alone.",
"",
"Check the units: 50 mL/L is 0.05 mL/mL.",
"That divides by venous content alone.",
"The units were converted the wrong way."
],
"src": "lec"
},
{
"t": "Measuring CO: Indicator Dilution & Fick",
"lv": "Hard",
"s": "During cardiac catheterization, a resident measures O₂ consumption of 240 mL/min and arterial O₂ content of 0.19 mL/mL. For the venous sample she draws blood from a peripheral arm vein, which reads 0.17 mL/mL, and calculates a cardiac output of 12 L/min. The true output is about 5 L/min. What was her error?",
"c": [
"O₂ consumption must be per kilogram",
"Arterial blood must come from the aorta only",
"Venous sample wasn't mixed venous blood",
"Fick needs CO₂, not O₂ values",
"Units must be in mL/L, not mL/mL"
],
"a": 2,
"e": "• Fick: CO = O₂ consumption ÷ (arterial O₂ − venous O₂).\n• The venous value must be mixed venous blood, from the pulmonary artery or right ventricle, which reflects the whole body's O₂ extraction.\n• A single arm vein drains one resting limb, so it's misleadingly O₂-rich → the A–V difference looks too small (0.02) → CO looks too large (240 / 0.02 = 12 L/min).\nWith a true output of 5 L/min, mixed venous content would be about 0.19 − 0.048 ≈ 0.14 mL/mL.",
"w": [
"Fick uses whole-body consumption in mL/min.",
"Any systemic artery gives the same arterial O₂.",
"",
"The slide's Fick method uses O₂ consumption.",
"Either works if both are consistent."
],
"src": "lec"
},
{
"t": "Measuring CO: Indicator Dilution & Fick",
"lv": "Easy",
"s": "In an indicator dilution test, 5 mg of dye is injected into a vein. Arterial sampling over one complete circulation of 30 s gives a mean dye concentration of 2 mg/L. What is the cardiac output?",
"c": [
"5 L/min",
"2.5 L/min",
"10 L/min",
"0.2 L/min",
"0.08 L/min"
],
"a": 0,
"e": "CO = amount of indicator injected ÷ (mean concentration × duration of one circulation).\n• Duration: 30 s = 0.5 min.\n• CO = 5 mg ÷ (2 mg/L × 0.5 min) = 5 L/min.",
"w": [
"",
"That ignores the duration of the circulation.",
"30 s is half a minute, not a quarter.",
"The formula is inverted.",
"That uses 30 s without converting to minutes."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Very Easy Set",
"s": "The complete sequence of events in the heart during a single heartbeat is known as the:",
"ns": true,
"sampath": 1,
"sdiff": "Easy",
"c": [
"Stroke Volume",
"Cardiac Cycle",
"Ejection Fraction",
"Heart Rate",
"Pulse Pressure"
],
"a": 1,
"e": "The cardiac cycle is everything that happens from the start of one heartbeat to the start of the next: one systole plus one diastole.",
"w": [
"Stroke volume is the blood ejected per beat.",
"",
"Ejection fraction is SV ÷ EDV.",
"Heart rate is beats per minute.",
"Pulse pressure is systolic minus diastolic pressure."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Very Easy Set",
"s": "The period of ventricular contraction and blood ejection is termed:",
"ns": true,
"sampath": 1,
"sdiff": "Easy",
"c": [
"Diastole",
"Diastasis",
"Systole",
"Preload",
"Afterload"
],
"a": 2,
"e": "Systole is ventricular contraction: isovolumetric contraction followed by ejection.",
"w": [
"Diastole is relaxation and filling.",
"Diastasis is the slow-filling part of diastole.",
"",
"Preload is the stretch before contraction, i.e. EDV.",
"Afterload is the load the ventricle ejects against."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Very Easy Set",
"s": "As heart rate increases, which of the following periods shortens the most?",
"ns": true,
"sampath": 1,
"sdiff": "Easy",
"c": [
"Systole",
"Diastole",
"Atrial Systole",
"Isovolumetric Contraction",
"Ventricular Ejection"
],
"a": 1,
"e": "Raising heart rate shortens the whole cycle, but systole stays almost fixed, so most of the lost time comes out of diastole, mainly diastasis.",
"w": [
"Systole shortens only slightly.",
"",
"Atrial systole is a short part of diastole and changes little.",
"Isovolumetric contraction is brief and nearly fixed.",
"Ejection shortens only modestly."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Very Easy Set",
"s": "The volume of blood in the ventricle at the end of relaxation (diastole) is called:",
"ns": true,
"sampath": 1,
"sdiff": "Easy",
"c": [
"End-Systolic Volume (ESV)",
"Stroke Volume (SV)",
"End-Diastolic Volume (EDV)",
"Cardiac Output",
"Residual Volume"
],
"a": 2,
"e": "End-diastolic volume is the volume after filling ends, just before the ventricle contracts, about 120 mL.",
"w": [
"ESV is what remains after ejection.",
"SV is EDV minus ESV.",
"",
"Cardiac output is SV × HR, a flow.",
"Residual volume is a lung term."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Very Easy Set",
"s": "In a healthy adult heart, what is the typical normal value for End-Diastolic Volume (EDV)?",
"ns": true,
"sampath": 1,
"sdiff": "Easy",
"c": [
"50 mL",
"70 mL",
"120 mL",
"130 mL",
"500 mL"
],
"a": 2,
"e": "Normal EDV is about 120 mL; ESV about 50 mL leaves an SV of about 70 mL.",
"w": [
"50 mL is the normal ESV.",
"70 mL is the normal SV.",
"",
"Slightly above the taught normal of 120 mL.",
"Far too large for one ventricle."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Very Easy Set",
"s": "If a patient has an EDV of 120 mL and an ESV of 50 mL, what is the Stroke Volume (SV)?",
"ns": true,
"sampath": 1,
"sdiff": "Easy",
"c": [
"50 mL",
"70 mL",
"120 mL",
"170 mL",
"60%"
],
"a": 1,
"e": "SV = EDV − ESV = 120 − 50 = 70 mL.",
"w": [
"That is the ESV.",
"",
"That is the EDV.",
"That adds the volumes instead of subtracting.",
"SV is a volume, not a percentage; EF here is 58%."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Very Easy Set",
"s": "What percentage of ventricular filling is normally provided by atrial contraction (atrial systole)?",
"ns": true,
"sampath": 1,
"sdiff": "Easy",
"c": [
"10%",
"20-30%",
"50%",
"70-80%",
"100%"
],
"a": 1,
"e": "About 70–80% of filling is passive; the atrial kick tops off the last 20–30%.",
"w": [
"Too low.",
"",
"Too high for the atrial kick.",
"70–80% is the passive share.",
"The ventricles fill mostly without atrial contraction."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Very Easy Set",
"s": "Most ventricular filling occurs passively during which general phase?",
"ns": true,
"sampath": 1,
"sdiff": "Easy",
"c": [
"Ventricular Systole",
"Atrial Systole",
"General Diastole",
"Isovolumetric Contraction",
"Ejection"
],
"a": 2,
"e": "With the AV valves open in diastole, blood flows passively from the veins through the atria into the ventricles before the atria contract.",
"w": [
"The ventricle empties during systole.",
"Atrial systole adds only 20–30%, actively.",
"",
"All valves are closed, so no filling.",
"The ventricle is emptying."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Very Easy Set",
"s": "During the isovolumetric contraction phase, which valves are closed?",
"ns": true,
"sampath": 1,
"sdiff": "Easy",
"c": [
"Only the Mitral valve",
"Only the Aortic valve",
"Both Mitral and Aortic valves",
"Neither valve is closed",
"Only the Tricuspid valve"
],
"a": 2,
"e": "Isovolumetric means no volume change: the mitral valve has closed and the aortic valve has not yet opened, so both are shut.",
"w": [
"The aortic valve is also closed.",
"The mitral valve is also closed.",
"",
"Both are closed.",
"All four valves are closed, not just the tricuspid."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Very Easy Set",
"s": "The aortic valve opens when the pressure in the Left Ventricle exceeds the pressure in the:",
"ns": true,
"sampath": 1,
"sdiff": "Easy",
"c": [
"Left Atrium",
"Right Ventricle",
"Aorta",
"Pulmonary Artery",
"Vena Cava"
],
"a": 2,
"e": "A valve opens when the pressure behind it exceeds the pressure in front of it. LV pressure must exceed aortic diastolic pressure, about 80 mmHg.",
"w": [
"LV above LA closes the mitral valve.",
"The RV is not on either side of the aortic valve.",
"",
"The pulmonary artery sits on the right side.",
"The vena cava empties into the right atrium."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Very Easy Set",
"s": "What percentage of blood is ejected during the first third of the ejection phase (Phase C)?",
"ns": true,
"sampath": 1,
"sdiff": "Easy",
"c": [
"20%",
"30%",
"50%",
"70%",
"100%"
],
"a": 3,
"e": "About 70% of the stroke volume leaves in the first third of ejection (rapid ejection); the last 30% leaves in the remaining two thirds (reduced ejection).",
"w": [
"Too low.",
"30% is the reduced-ejection share.",
"Too low for rapid ejection.",
"",
"Some blood leaves in reduced ejection."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Very Easy Set",
"s": "Which phase is characterized by ventricles relaxing while all valves remain closed?",
"ns": true,
"sampath": 1,
"sdiff": "Easy",
"c": [
"Atrial Systole",
"Isovolumetric Contraction",
"Ventricular Ejection",
"Isovolumetric Relaxation",
"Diastasis"
],
"a": 3,
"e": "After the aortic valve closes and before the mitral valve opens, the ventricle relaxes with all valves closed: isovolumetric relaxation.",
"w": [
"AV valves are open.",
"All valves are closed, but the ventricle is contracting.",
"The semilunar valves are open.",
"",
"AV valves are open."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Very Easy Set",
"s": "The first heart sound (S1 or \"lub\") is caused by the closure of the:",
"ns": true,
"sampath": 1,
"sdiff": "Easy",
"c": [
"Aortic Valve",
"Pulmonary Valve",
"AV valves (Mitral/Tricuspid)",
"Semilunar valves",
"Vena Cava"
],
"a": 2,
"e": "S1 is mitral and tricuspid closure at the start of ventricular systole.",
"w": [
"Aortic closure is part of S2.",
"Pulmonary closure is part of S2.",
"",
"Semilunar closure makes S2.",
"The vena cava has no valve that closes."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Very Easy Set",
"s": "The second heart sound (S2 or \"dub\") occurs at the start of:",
"ns": true,
"sampath": 1,
"sdiff": "Easy",
"c": [
"Ventricular Systole",
"Isovolumetric Contraction",
"Rapid Ejection",
"Isovolumetric Relaxation",
"Atrial Systole"
],
"a": 3,
"e": "S2 is aortic and pulmonic closure, which ends ejection and begins isovolumetric relaxation.",
"w": [
"S1 marks the start of systole.",
"S1 marks isovolumetric contraction.",
"No valve closes at the start of ejection.",
"",
"S4, if present, comes with atrial systole."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Very Easy Set",
"s": "Which phase of the cardiac cycle is described as the longest?",
"ns": true,
"sampath": 1,
"sdiff": "Easy",
"c": [
"Atrial Systole",
"Isovolumetric Contraction",
"Rapid Filling",
"Reduced Filling (Diastasis)",
"Isovolumetric Relaxation"
],
"a": 3,
"e": "At a resting heart rate, reduced filling (diastasis) is the longest phase; it is also the one that disappears first as heart rate rises.",
"w": [
"About 0.1 s.",
"About 0.05 s.",
"Shorter than diastasis at rest.",
"",
"About 0.08 s."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Very Easy Set",
"s": "The \"a\" wave in the jugular venous pulse is produced by:",
"ns": true,
"sampath": 1,
"sdiff": "Easy",
"c": [
"Ventricular contraction",
"Atrial contraction (systole)",
"Aortic valve closure",
"Passive atrial filling",
"Opening of the mitral valve"
],
"a": 1,
"e": "The a wave is right atrial contraction pushing pressure back into the jugular vein.",
"w": [
"Ventricular contraction bulges the tricuspid valve, giving the c wave.",
"",
"Aortic closure gives the dicrotic notch on the arterial trace.",
"Passive filling against a closed valve gives the v wave.",
"AV valve opening ends the v wave and starts the y descent."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Very Easy Set",
"s": "The \"c\" wave in the jugular venous pulse is caused by:",
"ns": true,
"sampath": 1,
"sdiff": "Easy",
"c": [
"Atrial contraction",
"Bulging of AV valves toward the atria during ventricular contraction",
"Rapid filling of the ventricle",
"Closure of the aortic valve",
"Pulmonary artery contraction"
],
"a": 1,
"e": "In isovolumetric contraction the rising ventricular pressure bulges the closed tricuspid valve back into the atrium: the c wave.",
"w": [
"That is the a wave.",
"",
"Rapid filling is the y descent.",
"Aortic closure is the dicrotic notch.",
"The pulmonary artery does not contract."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Very Easy Set",
"s": "On the aortic pressure curve, the closure of the aortic valve causes a small dip called the:",
"ns": true,
"sampath": 1,
"sdiff": "Easy",
"c": [
"Anacrotic limb",
"Dicrotic wave",
"Dicrotic notch",
"Catacrotic limb",
"v wave"
],
"a": 2,
"e": "Aortic valve closure causes a brief backflow and dip, the dicrotic notch (incisura).",
"w": [
"The anacrotic limb is the upstroke during ejection.",
"The dicrotic wave is the small rise just after the notch.",
"",
"The catacrotic limb is the falling limb overall.",
"The v wave is on the atrial or venous trace."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Very Easy Set",
"s": "Based on the summary table, what is the normal maximal pressure reached by the Left Ventricle (LV)?",
"ns": true,
"sampath": 1,
"sdiff": "Easy",
"c": [
"8 mmHg",
"25 mmHg",
"80 mmHg",
"120 mmHg",
"120 mL"
],
"a": 3,
"e": "Normal LV pressure runs from about 10 mmHg in diastole to 120 mmHg in systole.",
"w": [
"8 mmHg is the right atrial maximum.",
"25 mmHg is the RV and pulmonary artery maximum.",
"80 mmHg is aortic diastolic pressure.",
"",
"That is a volume, the normal EDV."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Very Easy Set",
"s": "In the \"Language of the Pump,\" the term Preload is used interchangeably with:",
"ns": true,
"sampath": 1,
"sdiff": "Easy",
"c": [
"End-Systolic Volume (ESV)",
"Stroke Volume (SV)",
"End-Diastolic Volume (EDV)",
"Ejection Fraction (EF)",
"Heart Rate (HR)"
],
"a": 2,
"e": "Preload is the stretch on the ventricle just before contraction, measured as end-diastolic volume.",
"w": [
"ESV reflects contractility and afterload.",
"SV is an output, not a load.",
"",
"EF is SV ÷ EDV.",
"HR is a separate determinant of CO."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Medium Set",
"s": "A 65-year-old male with long-standing hypertension is found to have a stiff, non-compliant left ventricle on echocardiography. He later develops atrial fibrillation, resulting in the loss of coordinated atrial contraction. Which of the following describes the most likely impact on his ventricular filling?",
"ns": true,
"sampath": 1,
"sdiff": "Medium",
"c": [
"Loss of 70–80% of his end-diastolic volume (EDV)",
"Loss of 20–30% of his end-diastolic volume (EDV)",
"Increase in his stroke volume (SV)",
"Increase in the \"a\" wave of his jugular venous pulse",
"Total cessation of ventricular filling"
],
"a": 1,
"e": "Atrial fibrillation removes the atrial kick, which normally provides 20–30% of filling; a stiff ventricle depends on it even more. Passive filling continues.",
"w": [
"70–80% is passive filling, which continues.",
"",
"Less filling lowers SV through Frank–Starling.",
"No atrial contraction means the a wave disappears.",
"Passive filling still happens."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Medium Set",
"s": "A patient undergoes cardiac catheterization, which determines an End-Diastolic Volume (EDV) of 120 mL and a Stroke Volume (SV) of 70 mL. What is this patient’s Ejection Fraction (EF)?",
"ns": true,
"sampath": 1,
"sdiff": "Medium",
"c": [
"41%",
"50%",
"58%",
"70%",
"100%"
],
"a": 2,
"e": "EF = SV ÷ EDV = 70 ÷ 120 ≈ 0.58 = 58%.",
"w": [
"That is ESV ÷ EDV, 50 ÷ 120.",
"Arithmetic error.",
"",
"That is SV in mL, not a fraction.",
"The ventricle never empties completely."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Medium Set",
"s": "A medical student is reviewing a Wiggers diagram and identifies a phase where the ventricular pressure is rising rapidly, but the ventricular volume remains constant at 120 mL. Which of the following describes the status of the heart valves during this phase?",
"ns": true,
"sampath": 1,
"sdiff": "Medium",
"c": [
"Mitral valve open, Aortic valve closed",
"Mitral valve closed, Aortic valve open",
"Both Mitral and Aortic valves open",
"Both Mitral and Aortic valves closed",
"Mitral valve open, Aortic valve open"
],
"a": 3,
"e": "Pressure rising at a constant volume of 120 mL (EDV) is isovolumetric contraction: both valves closed.",
"w": [
"An open mitral valve would let volume change.",
"An open aortic valve means ejection, so volume falls.",
"Never happens normally.",
"",
"Never happens normally."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Medium Set",
"s": "During a physical exam, a physician hears the first heart sound (S1). Which mechanical event in the cardiac cycle is most directly responsible for this sound?",
"ns": true,
"sampath": 1,
"sdiff": "Medium",
"c": [
"Opening of the aortic valve",
"Closure of the AV valves (mitral and tricuspid)",
"Opening of the mitral valve",
"Closure of the semilunar valves (aortic and pulmonary)",
"Contraction of the atria"
],
"a": 1,
"e": "S1 is the mitral and tricuspid valves closing as ventricular pressure exceeds atrial pressure.",
"w": [
"Valve opening is normally silent.",
"",
"Valve opening is silent unless stenotic, giving a snap.",
"That is S2.",
"An audible atrial sound is S4."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Medium Set",
"s": "A 25-year-old athlete’s heart rate increases from 60 bpm to 150 bpm during a sprint. Which of the following is the most significant physiological change regarding the timing of his cardiac cycle?",
"ns": true,
"sampath": 1,
"sdiff": "Medium",
"c": [
"Systole shortens more than diastole",
"Diastole shortens more than systole",
"Atrial systole becomes the longest phase",
"Isovolumetric contraction time doubles",
"The duration of the cycle remains constant"
],
"a": 1,
"e": "At high heart rate the cycle shortens and the time comes mostly out of diastole; systole is nearly fixed.",
"w": [
"The reverse.",
"",
"Diastasis is lost but atrial systole stays short.",
"It shortens slightly if anything.",
"Cycle length = 60 ÷ HR, so it shortens."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Medium Set",
"s": "On an aortic pressure tracing, a clinician notices a \"dicrotic notch\" (incisura). This specific landmark on the Wiggers diagram signifies which of the following?",
"ns": true,
"sampath": 1,
"sdiff": "Medium",
"c": [
"The opening of the aortic valve",
"The peak of systolic blood pressure",
"The closure of the aortic valve",
"The beginning of atrial contraction",
"The end of the rapid filling phase"
],
"a": 2,
"e": "The dicrotic notch marks aortic valve closure, the end of ejection and start of isovolumetric relaxation, at the same time as S2.",
"w": [
"Opening is where aortic pressure starts rising.",
"The peak comes earlier, in rapid ejection.",
"",
"That is the P wave and a wave.",
"No aortic landmark marks that."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Medium Set",
"s": "While observing a patient's jugular venous pulse, a \"c\" wave is identified. This wave is caused by which of the following?",
"ns": true,
"sampath": 1,
"sdiff": "Medium",
"c": [
"Atrial contraction",
"Bulging of the AV valves into the atria during ventricular contraction",
"Passive filling of the atria while the AV valves are closed",
"Rapid emptying of the atria into the ventricles",
"Closure of the aortic valve"
],
"a": 1,
"e": "The c wave comes from the closed tricuspid valve bulging back into the atrium during isovolumetric contraction.",
"w": [
"That is the a wave.",
"",
"That is the v wave.",
"That is the y descent.",
"That is the dicrotic notch on the arterial trace."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Medium Set",
"s": "During the cardiac cycle, blood is ejected from the ventricles into the great arteries. Approximately how much of the stroke volume is ejected during the first third of the ejection phase (Rapid Ejection)?",
"ns": true,
"sampath": 1,
"sdiff": "Medium",
"c": [
"20%",
"30%",
"50%",
"70%",
"90%"
],
"a": 3,
"e": "About 70% of SV leaves in the first third of ejection; the remaining 30% leaves over the last two thirds.",
"w": [
"Too low.",
"That is the reduced-ejection share.",
"Too low.",
"",
"Too high."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Medium Set",
"s": "A patient has a pulmonary artery catheter placed. According to the summary of normal heart pressures, what is the expected maximal (systolic) pressure of the pulmonary artery?",
"ns": true,
"sampath": 1,
"sdiff": "Medium",
"c": [
"8 mmHg",
"12 mmHg",
"25 mmHg",
"80 mmHg",
"130 mmHg"
],
"a": 2,
"e": "The pulmonary artery peaks at about 25 mmHg, the same as the RV; its diastolic floor is about 8 mmHg.",
"w": [
"That is the RA maximum or PA minimum.",
"That is the LA maximum.",
"",
"That is aortic diastolic pressure.",
"Systemic-level pressure."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Medium Set",
"s": "Which of the following describes the state of the heart during Phase E (Isovolumetric Relaxation) of the Wiggers diagram?",
"ns": true,
"sampath": 1,
"sdiff": "Medium",
"c": [
"All valves are open; pressure is falling",
"All valves are closed; pressure is falling",
"All valves are closed; pressure is rising",
"AV valves are open; semilunar valves are closed",
"AV valves are closed; semilunar valves are open"
],
"a": 1,
"e": "Phase E runs from aortic closure to mitral opening: all valves closed while ventricular pressure falls steeply.",
"w": [
"Never happens normally.",
"",
"That is isovolumetric contraction.",
"That is filling.",
"That is ejection."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Medium-Hard Set",
"s": "A 62-year-old male with a history of myocardial infarction undergoes an echocardiogram. The study reveals an End-Diastolic Volume (EDV) of 150 mL and an End-Systolic Volume (ESV) of 90 mL. Which of the following best describes this patient's cardiac status?",
"ns": true,
"sampath": 1,
"sdiff": "Medium-Hard",
"c": [
"Stroke Volume is 70 mL; Ejection Fraction is 58%",
"Stroke Volume is 60 mL; Ejection Fraction is 40%",
"Stroke Volume is 90 mL; Ejection Fraction is 60%",
"Stroke Volume is 60 mL; Ejection Fraction is 66%",
"Stroke Volume is 150 mL; Ejection Fraction is 40%"
],
"a": 1,
"e": "SV = 150 − 90 = 60 mL. EF = 60 ÷ 150 = 40%, reduced after the infarct (normal is about 55–70%).",
"w": [
"Those are the textbook normals, not this patient.",
"",
"90 mL is the ESV.",
"66% is 60 ÷ 90, the wrong denominator.",
"150 mL is the EDV."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Medium-Hard Set",
"s": "During a cardiac physiology lab, a student observes a pressure tracing where the Left Ventricle (LV) pressure has just risen to 85 mmHg, while the Aortic pressure is 80 mmHg. Which of the following mechanical events is occurring at this exact moment?",
"ns": true,
"sampath": 1,
"sdiff": "Medium-Hard",
"c": [
"The mitral valve is closing",
"The aortic valve is opening",
"The first heart sound (S1) is being generated",
"The dicrotic notch is forming",
"The \"v\" wave is peaking in the atrium"
],
"a": 1,
"e": "Once LV pressure passes aortic diastolic pressure (about 80 mmHg), the aortic valve opens and ejection begins.",
"w": [
"Mitral closure is earlier, when LV passes LA pressure.",
"",
"S1 is mitral closure, earlier.",
"The notch is aortic closure at the end of systole.",
"The v wave peaks at the end of systole."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Medium-Hard Set",
"s": "A 22-year-old female presents to the clinic for a sports physical. While she is running on a treadmill, her heart rate increases from 70 bpm to 160 bpm. Which phase of her cardiac cycle will experience the most significant proportional reduction in time?",
"ns": true,
"sampath": 1,
"sdiff": "Medium-Hard",
"c": [
"Atrial Systole",
"Isovolumetric Contraction",
"Ventricular Ejection",
"Reduced Ventricular Filling (Diastasis)",
"Isovolumic Relaxation"
],
"a": 3,
"e": "Diastasis is the phase sacrificed first when heart rate rises; at high rates it nearly vanishes.",
"w": [
"Atrial systole is preserved.",
"Nearly fixed.",
"Shortens only modestly.",
"",
"Nearly fixed."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Medium-Hard Set",
"s": "A 75-year-old male is diagnosed with atrial fibrillation, a condition where the atria quiver instead of contracting effectively. Which of the following waveforms would most likely be absent on this patient’s jugular venous pulse tracing?",
"ns": true,
"sampath": 1,
"sdiff": "Medium-Hard",
"c": [
"a wave",
"c wave",
"v wave",
"x descent",
"y descent"
],
"a": 0,
"e": "The a wave is atrial contraction; with no organized contraction it disappears.",
"w": [
"",
"The c wave comes from ventricular contraction, which continues.",
"The v wave comes from passive atrial filling, which continues.",
"Atrial relaxation is blunted, but descent from the c and v waves remains.",
"Atrial emptying when the tricuspid opens still happens."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Medium-Hard Set",
"s": "A patient is found to have a second heart sound (S2) that is abnormally loud. In which phase of the cardiac cycle, as labeled on the Wiggers diagram, does this heart sound occur?",
"ns": true,
"sampath": 1,
"sdiff": "Medium-Hard",
"c": [
"Phase B",
"Phase C",
"Phase D",
"Phase E",
"Phase F"
],
"a": 3,
"e": "S2 is semilunar valve closure, which begins Phase E, isovolumetric relaxation.",
"w": [
"Phase B, isovolumetric contraction, holds S1.",
"Phase C, rapid ejection, has no valve closure.",
"Phase D, reduced ejection, ends at S2.",
"",
"Phase F, rapid filling, can hold S3."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Medium-Hard Set",
"s": "A student is examining a ventricular volume curve. He notices the volume is at its absolute minimum. This specific volume is defined as the:",
"ns": true,
"sampath": 1,
"sdiff": "Medium-Hard",
"c": [
"Preload",
"End-Diastolic Volume (EDV)",
"Stroke Volume (SV)",
"End-Systolic Volume (ESV)",
"Cardiac Output"
],
"a": 3,
"e": "The minimum ventricular volume is what remains after ejection: end-systolic volume, about 50 mL.",
"w": [
"Preload is EDV, the maximum.",
"EDV is the maximum.",
"SV is the difference between maximum and minimum.",
"",
"CO is a flow, not a point on the curve."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Medium-Hard Set",
"s": "A 50-year-old patient has a pressure-monitoring catheter in the aorta. The clinician identifies a small upward wave on the descending limb of the aortic pressure tracing, occurring just after the aortic valve closes. What is the physiological name and cause of this wave?",
"ns": true,
"sampath": 1,
"sdiff": "Medium-Hard",
"c": [
"Anacrotic limb; ventricular ejection",
"Dicrotic notch; mitral valve closure",
"Dicrotic wave; blood rebounding against the closed aortic valve",
"v wave; atrial filling",
"c wave; tricuspid bulging"
],
"a": 2,
"e": "Just after the notch, blood recoils against the closed aortic valve and the elastic aorta, giving a small rise: the dicrotic wave.",
"w": [
"The anacrotic limb is the upstroke, not after closure.",
"The notch is a dip from aortic, not mitral, closure.",
"",
"The v wave is an atrial trace feature.",
"The c wave is an atrial or venous trace feature."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Medium-Hard Set",
"s": "A patient with a stiff, non-compliant left ventricle (diastolic dysfunction) relies heavily on the \"atrial kick\" for ventricular filling. According to the slides, what percentage of total ventricular filling is this patient potentially losing if they develop an atrial arrhythmia?",
"ns": true,
"sampath": 1,
"sdiff": "Medium-Hard",
"c": [
"10-15%",
"20-30%",
"50-60%",
"70-80%",
"90-100%"
],
"a": 1,
"e": "The slides give the atrial contribution as 20–30% of filling; that is what is lost when the atria stop contracting.",
"w": [
"Too low.",
"",
"Too high.",
"That is passive filling.",
"Passive filling continues."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Medium-Hard Set",
"s": "A clinician is comparing the maximal pressures of the chambers of the heart. Which of the following chambers or vessels has the lowest maximal pressure during the cardiac cycle?",
"ns": true,
"sampath": 1,
"sdiff": "Medium-Hard",
"c": [
"Right Atrium",
"Right Ventricle",
"Pulmonary Artery",
"Left Atrium",
"Left Ventricle"
],
"a": 0,
"e": "Maximum pressures: RA 8, LA 12, RV 25, pulmonary artery 25, LV 120 mmHg. The right atrium is lowest.",
"w": [
"",
"25 mmHg.",
"25 mmHg.",
"12 mmHg.",
"120 mmHg."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Medium-Hard Set",
"s": "During isovolumetric contraction, the pressure in the ventricles rises rapidly. This leads to a small positive deflection in the atrial pressure curve known as the \"c wave.\" What is the mechanical cause of this deflection?",
"ns": true,
"sampath": 1,
"sdiff": "Medium-Hard",
"c": [
"Contraction of the atrial muscle",
"Blood flowing into the atria from the veins",
"The opening of the AV valves",
"Bulging of the AV valves into the atria",
"Rebound of blood against the aortic valve"
],
"a": 3,
"e": "The closed AV valves bulge back into the atria as ventricular pressure climbs.",
"w": [
"That is the a wave.",
"That is the v wave.",
"AV valves are closed now; opening starts the y descent.",
"",
"That is the dicrotic wave on the aortic trace."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Hard Set",
"s": "A 72-year-old male with a history of long-standing hypertension and left ventricular hypertrophy presents to the emergency department with a sudden onset of palpitations and shortness of breath. An ECG reveals an irregularly irregular rhythm with absent P waves. Physical examination reveals a disappearing S4 gallop that was previously noted in his chart. Which of the following is the most likely physiological consequence of this change in his cardiac cycle?",
"ns": true,
"sampath": 1,
"sdiff": "Hard",
"c": [
"A 25% decrease in End-Diastolic Volume (EDV)",
"A significant increase in the \"a\" wave of the jugular venous pulse",
"A decrease in the End-Systolic Volume (ESV)",
"A decrease in the duration of isovolumetric contraction",
"An increase in the y-descent of the venous pulse"
],
"a": 0,
"e": "Irregularly irregular rhythm without P waves is atrial fibrillation. S4 needs atrial contraction into a stiff ventricle, so it disappears. Losing the atrial kick (20–30% of filling) lowers EDV by about a quarter, which matters most in a hypertrophied ventricle.",
"w": [
"",
"No atrial contraction means no a wave.",
"Less filling lowers SV; ESV does not fall.",
"Not the key consequence of losing the atrial kick.",
"Not the consequence taught."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Hard Set",
"s": "A 65-year-old female undergoes cardiac catheterization. The pressure in her aorta is measured at 110/75 mmHg. During which phase of the cardiac cycle will her LV pressure be rising from 10mmg to 80 mmHg?",
"ns": true,
"sampath": 1,
"sdiff": "Hard",
"c": [
"Atrial Systole",
"Isovolumetric Contraction",
"Rapid Ejection",
"Reduced Ejection",
"Isovolumic Relaxation"
],
"a": 1,
"e": "LV pressure rises from its diastolic level (about 10 mmHg) until it passes aortic diastolic pressure (75 mmHg here) with all valves closed: isovolumetric contraction.",
"w": [
"LV pressure rises only a few mmHg.",
"",
"Ejection starts after LV passes about 75 mmHg.",
"LV pressure is falling.",
"LV pressure is falling."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Hard Set",
"s": "A 19-year-old marathon runner has a resting heart rate of 45 bpm. During a race, her heart rate increases to 180 bpm. Which of the following phases of her cardiac cycle will be most significantly reduced in duration?",
"ns": true,
"sampath": 1,
"sdiff": "Hard",
"c": [
"Phase A (Atrial Systole)",
"Phase B (Isovolumetric Contraction)",
"Phase C (Rapid Ejection)",
"Phase G (Reduced Ventricular Filling)",
"Phase E (Isovolumic Relaxation)"
],
"a": 3,
"e": "Going from 45 to 180 bpm cuts the cycle from 1.33 s to 0.33 s. Almost all of that comes from diastasis, Phase G, which is very long at a slow resting rate.",
"w": [
"Preserved.",
"Nearly fixed.",
"Shortens only modestly.",
"",
"Nearly fixed."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Hard Set",
"s": "A patient is diagnosed with a condition that causes abnormally high resistance to ventricular contraction, leading to extremely high intraventricular pressures during Phase B of the cardiac cycle. Which of the following changes would most likely be seen in the Jugular Venous Pulse?",
"ns": true,
"sampath": 1,
"sdiff": "Hard",
"c": [
"An exaggerated \"a\" wave",
"A prominent \"c\" wave",
"A deep \"x\" descent",
"A giant \"v\" wave",
"A rapid \"y\" descent"
],
"a": 1,
"e": "Phase B is isovolumetric contraction, when the c wave forms as the closed AV valve bulges back into the atrium. Abnormally high pressure in Phase B pushes the valve back harder, so the c wave becomes prominent.",
"w": [
"The a wave is atrial contraction in Phase A.",
"",
"The x descent follows atrial relaxation and ejection.",
"A giant v wave points to tricuspid regurgitation.",
"The y descent is early filling."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Hard Set",
"s": "A 40-year-old male presents with a bounding pulse. Examination reveals a \"water-hammer\" pulse and a decrescendo diastolic murmur. In this patient, the dicrotic notch on the aortic pressure curve is virtually absent. This is because:",
"ns": true,
"sampath": 1,
"sdiff": "Hard",
"c": [
"The aortic valve is failing to close properly",
"The left ventricle is not contracting isovolumetrically",
"The stroke volume has significantly decreased",
"The mitral valve is closing prematurely",
"The heart rate is too low to produce a notch"
],
"a": 0,
"e": "Water-hammer pulse with a decrescendo diastolic murmur is aortic regurgitation. The notch comes from aortic valve closure, so a valve that does not seal leaves almost no notch.",
"w": [
"",
"The notch depends on the aortic valve, not on isovolumetric contraction.",
"SV rises in chronic AR.",
"Not the cause of the absent notch.",
"A slow rate does not remove the notch."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Hard Set",
"s": "A clinician is looking at the Wiggers diagram of a patient with severe Mitral Regurgitation. He notices that the \"v\" wave in the Left Atrial Pressure curve is significantly taller than normal. Which phase of the cardiac cycle is most responsible for this finding?",
"ns": true,
"sampath": 1,
"sdiff": "Hard",
"c": [
"Phase B (Isovolumetric Contraction)",
"Phase C (Rapid Ejection)",
"Phase E (Isovolumic Relaxation)",
"Phase F (Rapid Filling)",
"Phase A (Atrial Systole)"
],
"a": 1,
"e": "In mitral regurgitation, the LV pushes blood back into the LA throughout systole. Regurgitant flow is greatest during rapid ejection, when LV pressure peaks, which builds the giant v wave.",
"w": [
"Some backflow begins, but LV pressure is still building.",
"",
"The mitral valve is about to open and the v wave starts falling.",
"The v wave is collapsing as the LA empties.",
"Atrial systole makes the a wave."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Hard Set",
"s": "A patient has an EDV of 150 mL and an ESV of 60 mL. His heart rate is 100 bpm. Which of the following statements regarding this patient is correct?",
"ns": true,
"sampath": 1,
"sdiff": "Hard",
"c": [
"His Stroke Volume is 70 mL",
"His Ejection Fraction is 40%",
"His Ejection Fraction is 60%",
"His Cardiac Output is 8.0 L/min",
"His Preload is 60 mL"
],
"a": 2,
"e": "SV = 150 − 60 = 90 mL. EF = 90 ÷ 150 = 60%. CO = 90 mL × 100 = 9.0 L/min. Preload (EDV) is 150 mL.",
"w": [
"SV is 90 mL.",
"That is ESV ÷ EDV.",
"",
"CO is 9.0 L/min.",
"Preload is EDV, 150 mL."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Hard Set",
"s": "A catheter is advanced from the femoral vein into the heart. The transducer records a pressure that fluctuates between a minimum of 4 mmHg and a maximum of 25 mmHg. According to the summary table in the slides, where is the catheter tip located?",
"ns": true,
"sampath": 1,
"sdiff": "Hard",
"c": [
"Right Atrium",
"Right Ventricle",
"Pulmonary Artery",
"Left Ventricle",
"Aorta"
],
"a": 1,
"e": "A 25 mmHg peak puts the tip in the RV or pulmonary artery. The low diastolic floor means the RV, because the pulmonic valve keeps the pulmonary artery at about 8–9 mmHg in diastole.",
"w": [
"RA peaks around 8 mmHg.",
"",
"PA has the same peak but a higher floor, about 8–9 mmHg.",
"A venous catheter would not reach the LV, and LV peaks at 120.",
"Aorta runs 80–120 mmHg."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle MCQs",
"s": "Which of the following heart sounds occurs at the exact onset of the isovolumetric contraction phase?",
"ns": true,
"sampath": 1,
"c": [
"S1",
"S2",
"S3",
"S4",
"Opening Snap"
],
"a": 0,
"e": "Isovolumetric contraction starts when the AV valves close, which is S1.",
"w": [
"",
"S2 starts isovolumetric relaxation.",
"S3 is rapid filling.",
"S4 is atrial systole.",
"An opening snap is mitral stenosis at the start of filling."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle MCQs",
"s": "During isovolumetric contraction, which of the following describes the state of the cardiac valves and ventricular volume?",
"ns": true,
"sampath": 1,
"c": [
"All valves open; volume decreasing",
"AV valves open, semilunar valves closed; volume constant",
"All valves closed; volume constant",
"AV valves closed, semilunar valves open; volume decreasing",
"All valves closed; volume increasing"
],
"a": 2,
"e": "All four valves are shut, so volume stays at EDV while pressure climbs.",
"w": [
"Never happens normally.",
"That describes filling, and volume would rise.",
"",
"That is ejection.",
"With every valve closed, volume cannot change."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle MCQs",
"s": "Which ECG event marks the electrical trigger for the onset of isovolumetric contraction?",
"ns": true,
"sampath": 1,
"c": [
"P wave",
"PR segment",
"QRS complex",
"T wave",
"U wave"
],
"a": 2,
"e": "Ventricular depolarization (QRS) triggers ventricular contraction; mechanical systole begins just after.",
"w": [
"The P wave triggers atrial systole.",
"The PR segment is AV nodal delay.",
"",
"The T wave is ventricular repolarization near the end of ejection.",
"The U wave is a late, inconsistent finding."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle MCQs",
"s": "During isovolumetric contraction, a small positive deflection is noted in the jugular venous pulse. What is the mechanical cause of this specific wave?",
"ns": true,
"sampath": 1,
"c": [
"Atrial contraction",
"Passive filling of the atria",
"Bulging of the tricuspid valve into the right atrium",
"Opening of the aortic valve",
"Rapid blood flow into the superior vena cava"
],
"a": 2,
"e": "This is the c wave: the closed tricuspid valve bulges back as RV pressure rises.",
"w": [
"The a wave.",
"The v wave.",
"",
"This ends isovolumetric contraction and does not affect the JVP.",
"Not the cause of the c wave."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle MCQs",
"s": "The rapid ejection phase begins immediately after which event?",
"ns": true,
"sampath": 1,
"c": [
"Mitral valve closure",
"Aortic valve opening",
"Aortic valve closure",
"Mitral valve opening",
"Peak systolic pressure"
],
"a": 1,
"e": "Ejection starts the moment the aortic valve opens.",
"w": [
"Mitral closure starts isovolumetric contraction.",
"",
"Aortic closure ends ejection.",
"Mitral opening starts filling.",
"Peak pressure comes partway through rapid ejection."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle MCQs",
"s": "Approximately what percentage of the total stroke volume is ejected during the first third of the ejection period?",
"ns": true,
"sampath": 1,
"c": [
"20%",
"30%",
"50%",
"70%",
"90%"
],
"a": 3,
"e": "About 70% leaves in the first third (rapid ejection); 30% leaves in the last two thirds.",
"w": [
"Too low.",
"The reduced-ejection share.",
"Too low.",
"",
"Too high."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle MCQs",
"s": "During rapid ejection, what is the relationship between left ventricular (LV) pressure and aortic pressure?",
"ns": true,
"sampath": 1,
"c": [
"LV pressure is lower than aortic pressure",
"LV pressure is significantly higher than aortic pressure",
"LV pressure is equal to atrial pressure",
"LV pressure is constant while aortic pressure rises",
"Both LV and aortic pressures rise to a systolic peak"
],
"a": 4,
"e": "With the aortic valve open, LV and aortic pressures rise together to their systolic peak; LV is only slightly higher, just enough to drive flow.",
"w": [
"That happens in reduced ejection, when momentum keeps blood moving.",
"The gradient across a normal open valve is only a few mmHg; a large gradient suggests aortic stenosis.",
"The mitral valve is closed and LV is far above LA.",
"LV pressure is rising too.",
""
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle MCQs",
"s": "On the ECG, the rapid ejection phase corresponds most closely with which of the following?",
"ns": true,
"sampath": 1,
"c": [
"The QRS complex",
"The PR interval",
"The ST segment",
"The peak of the T wave",
"The TP interval"
],
"a": 2,
"e": "After QRS triggers contraction and isovolumetric contraction passes, rapid ejection falls over the ST segment.",
"w": [
"QRS precedes isovolumetric contraction.",
"PR is atrial systole and AV delay.",
"",
"The T wave is reduced ejection.",
"TP is diastole."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle MCQs",
"s": "The slow ejection phase accounts for what proportion of the total ejection time?",
"ns": true,
"sampath": 1,
"c": [
"First 1/3",
"Middle 1/3",
"Last 2/3",
"Entire duration",
"Only the first 10%"
],
"a": 2,
"e": "Rapid ejection takes the first third of ejection time; slow (reduced) ejection takes the last two thirds.",
"w": [
"That is rapid ejection.",
"Incomplete.",
"",
"Rapid ejection comes first.",
"Not a defined phase."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle MCQs",
"s": "Which of the following occurs to the ventricular pressure and ejection rate during the reduced ejection phase?",
"ns": true,
"sampath": 1,
"c": [
"Both increase",
"Both decrease",
"Pressure increases, rate decreases",
"Pressure decreases, rate increases",
"Both remain constant"
],
"a": 1,
"e": "Ventricles begin repolarizing, so LV pressure falls from its peak and the outflow rate slows.",
"w": [
"They rise in rapid ejection.",
"",
"Pressure falls after the peak.",
"The rate slows.",
"Both fall."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle MCQs",
"s": "Which ECG wave is typically occurring during the reduced ejection phase?",
"ns": true,
"sampath": 1,
"c": [
"P wave",
"Q wave",
"R wave",
"T wave",
"No electrical activity occurs"
],
"a": 3,
"e": "The T wave (ventricular repolarization) falls during reduced ejection, which is why pressure starts to fall.",
"w": [
"The P wave is late diastole.",
"Q is the start of depolarization.",
"R is depolarization, before ejection.",
"",
"Repolarization is electrical activity."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle MCQs",
"s": "During reduced ejection, the \"v-wave\" of the atrial pressure curve begins to rise. What is the physiological reason for this rise?",
"ns": true,
"sampath": 1,
"c": [
"Atrial contraction",
"Blood flowing into the atria against a closed AV valve",
"Blood regurgitating through the mitral valve",
"The bulging of the aortic valve",
"Rapid filling of the ventricle"
],
"a": 1,
"e": "Venous return fills the atria while the AV valves are shut, so atrial pressure rises: the v wave.",
"w": [
"The a wave.",
"",
"Only in mitral regurgitation, not normally.",
"Not a cause of atrial pressure change.",
"Rapid filling is the y descent after the v wave."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle MCQs",
"s": "What valvular event marks the transition from reduced ejection to isovolumic relaxation?",
"ns": true,
"sampath": 1,
"c": [
"Mitral valve opening",
"Aortic valve opening",
"Aortic valve closure",
"Mitral valve closure",
"Tricuspid valve opening"
],
"a": 2,
"e": "Aortic closure (S2, dicrotic notch) ends ejection and starts isovolumic relaxation.",
"w": [
"Mitral opening ends isovolumic relaxation.",
"Aortic opening starts ejection.",
"",
"Mitral closure starts isovolumetric contraction.",
"Tricuspid opening starts right-sided filling."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle MCQs",
"s": "In a healthy heart, what is the volume of blood in the left ventricle during the isovolumic relaxation phase?",
"ns": true,
"sampath": 1,
"c": [
"End-Diastolic Volume (EDV)",
"Stroke Volume (SV)",
"End-Systolic Volume (ESV)",
"Zero",
"Preload"
],
"a": 2,
"e": "Ejection is over and all valves are shut, so volume stays at ESV, about 50 mL.",
"w": [
"EDV is the volume in isovolumetric contraction.",
"SV is what left.",
"",
"The ventricle never fully empties.",
"Preload is EDV."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle MCQs",
"s": "Which heart sound is produced at the start of isovolumic relaxation?",
"ns": true,
"sampath": 1,
"c": [
"S1",
"S2",
"S3",
"S4",
"S1 and S2 simultaneously"
],
"a": 1,
"e": "S2, from aortic and pulmonic closure.",
"w": [
"S1 starts isovolumetric contraction.",
"",
"S3 is rapid filling.",
"S4 is atrial systole.",
"They are separated by all of systole."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle MCQs",
"s": "A patient’s Wiggers diagram shows a \"dicrotic notch\" on the aortic pressure trace. Which phase does this notch immediately precede?",
"ns": true,
"sampath": 1,
"c": [
"Rapid ejection",
"Isovolumic contraction",
"Isovolumic relaxation",
"Atrial systole",
"Diastasis"
],
"a": 2,
"e": "The notch is aortic valve closure, which starts isovolumic relaxation.",
"w": [
"Rapid ejection starts at aortic opening.",
"That starts at mitral closure.",
"",
"That comes late in diastole.",
"That comes after rapid filling."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle MCQs",
"s": "Ventricular filling (Phase F) begins when:",
"ns": true,
"sampath": 1,
"c": [
"Ventricular pressure exceeds aortic pressure",
"Atrial pressure exceeds ventricular pressure",
"The T wave ends",
"The P wave begins",
"The aortic valve closes"
],
"a": 1,
"e": "When LV pressure falls below LA pressure, the mitral valve opens and rapid filling starts.",
"w": [
"That opens the aortic valve.",
"",
"The T wave ends near aortic closure, before filling.",
"The P wave leads to atrial systole, late in diastole.",
"Aortic closure starts isovolumic relaxation."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle MCQs",
"s": "Why is the initial stage of filling termed \"rapid\"?",
"ns": true,
"sampath": 1,
"c": [
"Because the atria are contracting forcefully",
"Because the ventricles are being sucked open by the aorta",
"Due to the high pressure gradient between the full atria and the empty, relaxed ventricles",
"Because the heart rate is high",
"Because the aortic valve is still open"
],
"a": 2,
"e": "Blood has pooled in the atria during systole. When the mitral valve opens, the large atrial-to-ventricular gradient drives fast early filling.",
"w": [
"The atria contract later, in Phase A.",
"The aorta does not act on ventricular filling.",
"",
"Rapid filling happens at any heart rate.",
"The aortic valve is closed."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle MCQs",
"s": "An S3 heart sound, if heard, would most likely occur during which phase?",
"ns": true,
"sampath": 1,
"c": [
"Atrial systole",
"Isovolumic contraction",
"Rapid filling",
"Slow filling",
"Isovolumic relaxation"
],
"a": 2,
"e": "S3 is blood striking the ventricular wall during rapid early filling.",
"w": [
"That is S4.",
"That is S1.",
"",
"Flow is too slow to make S3.",
"S2 starts this phase."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle MCQs",
"s": "During the rapid filling phase, what is the status of the \"v-wave\" in the jugular venous pulse?",
"ns": true,
"sampath": 1,
"c": [
"It is rising to its peak",
"it is absent",
"It is rapidly descending (the y-descent)",
"It is replaced by the a-wave",
"It is flat"
],
"a": 2,
"e": "When the tricuspid valve opens, the atrium empties and pressure falls off the v wave: the y descent.",
"w": [
"It rises during systole, before filling.",
"It came just before and is now falling.",
"",
"The a wave comes later, in atrial systole.",
"Atrial pressure is falling."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle MCQs",
"s": "What is the longest phase of the cardiac cycle in a person with a resting heart rate?",
"ns": true,
"sampath": 1,
"c": [
"Atrial systole",
"Isovolumic contraction",
"Rapid ejection",
"Isovolumic relaxation",
"Reduced (Slow) filling"
],
"a": 4,
"e": "Diastasis (slow filling) is the longest phase at rest.",
"w": [
"About 0.1 s.",
"About 0.05 s.",
"Shorter than diastasis.",
"About 0.08 s.",
""
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle MCQs",
"s": "If a patient’s heart rate increases significantly, which phase is most compromised (shortened)?",
"ns": true,
"sampath": 1,
"c": [
"Rapid ejection",
"Isovolumic contraction",
"Reduced (Slow) filling",
"Atrial systole",
"Isovolumetric relaxation"
],
"a": 2,
"e": "Diastasis is sacrificed first as heart rate rises.",
"w": [
"Shortens only modestly.",
"Nearly fixed.",
"",
"Preserved.",
"Nearly fixed."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle MCQs",
"s": "Which of the following describes the movement of blood during the slow filling phase?",
"ns": true,
"sampath": 1,
"c": [
"Active pumping by the atria",
"Passive flow from the veins, through the atria, into the ventricles",
"Retrograde flow from the aorta",
"No blood movement occurs",
"Ejection of blood from the ventricles"
],
"a": 1,
"e": "During diastasis, venous return trickles straight through the open AV valves into the ventricle.",
"w": [
"That is atrial systole.",
"",
"The aortic valve is closed.",
"Filling continues slowly.",
"That is systole."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle MCQs",
"s": "During the slow filling phase, ventricular pressure begins to rise slowly. What causes this rise?",
"ns": true,
"sampath": 1,
"c": [
"Ventricular contraction",
"The increasing volume of blood stretching the ventricular walls",
"Closure of the mitral valve",
"Opening of the aortic valve",
"Decreased atrial pressure"
],
"a": 1,
"e": "As volume rises, the ventricle moves along its passive pressure–volume (compliance) curve, so pressure creeps up.",
"w": [
"The ventricle is relaxed.",
"",
"The mitral valve is open.",
"The aortic valve is closed.",
"Atrial pressure is rising slowly too."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle MCQs",
"s": "The atrial contraction phase is represented by which wave on the ECG?",
"ns": true,
"sampath": 1,
"c": [
"P wave",
"QRS complex",
"T wave",
"U wave",
"Delta wave"
],
"a": 0,
"e": "The P wave (atrial depolarization) triggers atrial systole.",
"w": [
"",
"Ventricular depolarization.",
"Ventricular repolarization.",
"Late repolarization.",
"Pre-excitation, as in WPW."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle MCQs",
"s": "In a healthy resting adult, what percentage of ventricular filling is provided by atrial contraction (the \"atrial kick\")?",
"ns": true,
"sampath": 1,
"c": [
"5-10%",
"20-30%",
"50-60%",
"70-80%",
"100%"
],
"a": 1,
"e": "The atrial kick provides 20–30%; passive filling provides the rest.",
"w": [
"Too low.",
"",
"Too high.",
"That is passive filling.",
"Most filling is passive."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle MCQs",
"s": "At the end of atrial contraction, the volume of blood in the ventricle is officially termed:",
"ns": true,
"sampath": 1,
"c": [
"End-Systolic Volume (ESV)",
"Stroke Volume (SV)",
"End-Diastolic Volume (EDV)",
"Cardiac Output",
"Ejection Fraction"
],
"a": 2,
"e": "Atrial systole is the last part of diastole, so the volume at its end is EDV.",
"w": [
"ESV is the volume after ejection.",
"SV is ejected volume.",
"",
"CO is a flow.",
"EF is a ratio."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Wiggers Diagram MCQs",
"s": "A 25-year-old athlete undergoes a treadmill stress test. As his heart rate increases from 70 bpm to 150 bpm, which of the following portions of the cardiac cycle will experience the most significant shortening in duration?",
"ns": true,
"sampath": 1,
"c": [
"Atrial systole",
"Isovolumetric contraction",
"Ventricular ejection",
"Ventricular diastole",
"Isovolumetric relaxation"
],
"a": 3,
"e": "Most of the time lost at higher heart rates comes out of diastole.",
"w": [
"Short and preserved.",
"Nearly fixed.",
"Shortens only modestly.",
"",
"Nearly fixed."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Wiggers Diagram MCQs",
"s": "A patient is found to have an end-diastolic volume (EDV) of 120 mL and an end-systolic volume (ESV) of 50 mL. What is this patient’s ejection fraction (EF)?",
"ns": true,
"sampath": 1,
"c": [
"41%",
"50%",
"58%",
"70%",
"100%"
],
"a": 2,
"e": "SV = 70 mL. EF = 70 ÷ 120 = 58%.",
"w": [
"That is ESV ÷ EDV.",
"Arithmetic error.",
"",
"That is SV in mL.",
"Impossible."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Wiggers Diagram MCQs",
"s": "During a routine physiological study, it is noted that the majority of ventricular filling occurs before the atria contract. Approximately what percentage of ventricular filling is attributed to passive flow during general diastole?",
"ns": true,
"sampath": 1,
"c": [
"10–20%",
"20–30%",
"40–50%",
"70–80%",
"90–100%"
],
"a": 3,
"e": "Passive filling gives 70–80%; the atrial kick adds the last 20–30%.",
"w": [
"Too low.",
"That is the atrial kick.",
"Too low.",
"",
"Too high."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Wiggers Diagram MCQs",
"s": "A medical student is analyzing a Wiggers diagram. He identifies a phase where the mitral valve has just closed, but the aortic valve has not yet opened. Which of the following describes the volume and pressure changes in the left ventricle during this specific phase?",
"ns": true,
"sampath": 1,
"c": [
"Volume decreasing, pressure increasing",
"Volume constant, pressure increasing",
"Volume constant, pressure decreasing",
"Volume increasing, pressure constant",
"Volume decreasing, pressure constant"
],
"a": 1,
"e": "Between mitral closure and aortic opening is isovolumetric contraction: volume stays fixed while pressure rises.",
"w": [
"Rapid ejection.",
"",
"Isovolumetric relaxation.",
"Not a normal phase.",
"Not a normal phase."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Wiggers Diagram MCQs",
"s": "At what point in the cardiac cycle does the first heart sound (S1) occur?",
"ns": true,
"sampath": 1,
"c": [
"At the start of atrial systole",
"At the closure of the AV valves",
"At the opening of the semilunar valves",
"At the closure of the semilunar valves",
"At the start of the reduced filling phase"
],
"a": 1,
"e": "S1 is AV valve closure.",
"w": [
"That is S4.",
"",
"Opening is silent.",
"That is S2.",
"No sound at that point."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Wiggers Diagram MCQs",
"s": "While monitoring a patient's jugular venous pulse, a clinician identifies the \"a\" wave. This wave is most directly caused by which of the following?",
"ns": true,
"sampath": 1,
"c": [
"Ventricular contraction bulging the tricuspid valve",
"Passive filling of the atria against a closed valve",
"Atrial contraction",
"Rapid ventricular ejection",
"Closure of the aortic valve"
],
"a": 2,
"e": "The a wave is right atrial contraction.",
"w": [
"The c wave.",
"The v wave.",
"",
"Pulls the AV floor down, giving the x descent.",
"The dicrotic notch on the arterial trace."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Wiggers Diagram MCQs",
"s": "In the Wiggers diagram, the \"dicrotic notch\" (incisura) is a characteristic feature of the aortic pressure curve. What physiological event causes this notch?",
"ns": true,
"sampath": 1,
"c": [
"Opening of the aortic valve",
"Peak systolic pressure",
"Closure of the aortic valve",
"Atrial contraction",
"Opening of the mitral valve"
],
"a": 2,
"e": "Aortic valve closure causes brief backflow and a dip in pressure.",
"w": [
"That is the start of the aortic upstroke.",
"The peak comes earlier.",
"",
"Atrial contraction does not appear on the aortic trace.",
"Mitral opening comes later and does not appear on the aortic trace."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Wiggers Diagram MCQs",
"s": "Which of the following pressures most closely represents the maximal (systolic) pressure found in the Right Ventricle of a healthy adult?",
"ns": true,
"sampath": 1,
"c": [
"8 mmHg",
"12 mmHg",
"25 mmHg",
"80 mmHg",
"130 mmHg"
],
"a": 2,
"e": "The RV peaks at about 25 mmHg, matching pulmonary artery systolic pressure.",
"w": [
"The RA maximum.",
"The LA maximum.",
"",
"Aortic diastolic pressure.",
"Left-sided systolic level."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Wiggers Diagram MCQs",
"s": "During the \"Reduced Ejection\" phase of the cardiac cycle (Phase D), which of the following is true?",
"ns": true,
"sampath": 1,
"c": [
"The AV valves are open",
"Ventricular volume is at its maximum",
"Aortic pressure is falling",
"Ventricular pressure is at its minimum",
"The semilunar valves are closed"
],
"a": 2,
"e": "In reduced ejection, outflow slows and runoff to the periphery exceeds inflow, so aortic pressure falls from its peak.",
"w": [
"They are closed during systole.",
"Volume is near its minimum.",
"",
"Pressure is still high.",
"They are open; blood is still leaving."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Wiggers Diagram MCQs",
"s": "The term \"Preload\" is most synonymous with which of the following?",
"ns": true,
"sampath": 1,
"c": [
"End-Systolic Volume (ESV)",
"Stroke Volume (SV)",
"End-Diastolic Volume (EDV)",
"Ejection Fraction (EF)",
"Mean Arterial Pressure (MAP)"
],
"a": 2,
"e": "Preload is end-diastolic stretch, measured as EDV.",
"w": [
"ESV is what remains after ejection.",
"SV is an output.",
"",
"EF is a ratio.",
"MAP relates to afterload."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Wiggers Diagram MCQs",
"s": "A 60-year-old male has a heart rate of 100 bpm. Which phase of his cardiac cycle is the longest?",
"ns": true,
"sampath": 1,
"c": [
"Atrial systole",
"Isovolumetric contraction",
"Rapid ventricular ejection",
"Isovolumetric relaxation",
"Reduced ventricular filling"
],
"a": 4,
"e": "At 100 bpm the cycle is 0.6 s. Diastasis is shorter but is still the longest single phase.",
"w": [
"About 0.1 s.",
"About 0.05 s.",
"Shorter.",
"About 0.08 s.",
""
],
"src": "lec"
},
{
"t": "Sampath's Q's · Wiggers Diagram MCQs",
"s": "Which valvular event marks the beginning of the \"Isovolumetric Relaxation\" phase?",
"ns": true,
"sampath": 1,
"c": [
"Mitral valve opening",
"Mitral valve closure",
"Aortic valve opening",
"Aortic valve closure",
"Tricuspid valve opening"
],
"a": 3,
"e": "Aortic closure ends ejection and starts isovolumetric relaxation.",
"w": [
"Ends it.",
"Starts isovolumetric contraction.",
"Starts ejection.",
"",
"Ends right-sided relaxation."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Wiggers Diagram MCQs",
"s": "Which of the following best describes the pressure relationship that allows for \"Rapid Active Filling\" of the ventricles?",
"ns": true,
"sampath": 1,
"c": [
"Ventricular pressure > Aortic pressure",
"Atrial pressure > Ventricular pressure",
"Aortic pressure > Ventricular pressure",
"Ventricular pressure > Atrial pressure",
"Pulmonary artery pressure > Right ventricular pressure"
],
"a": 1,
"e": "Filling happens when atrial pressure exceeds ventricular pressure, which opens the AV valve.",
"w": [
"That opens the aortic valve for ejection.",
"",
"This closes the aortic valve but does not fill the ventricle.",
"That closes the AV valve.",
"That closes the pulmonic valve."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Wiggers Diagram MCQs",
"s": "During Isovolumetric Contraction, the Left Ventricle must exceed a certain pressure to open the aortic valve. Based on Slide 12, what is this pressure threshold in a normal individual?",
"ns": true,
"sampath": 1,
"c": [
"10 mmHg",
"25 mmHg",
"80 mmHg",
"120 mmHg",
"130 mmHg"
],
"a": 2,
"e": "The LV must exceed aortic diastolic pressure, about 80 mmHg.",
"w": [
"LV end-diastolic pressure.",
"Right-sided systolic pressure.",
"",
"Peak systolic pressure, reached during ejection.",
"Above the normal peak."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Wiggers Diagram MCQs",
"s": "Which ECG event immediately precedes atrial systole?",
"ns": true,
"sampath": 1,
"c": [
"P wave",
"QRS complex",
"T wave",
"ST segment",
"U wave"
],
"a": 0,
"e": "The P wave, atrial depolarization, comes just before atrial contraction.",
"w": [
"",
"Precedes ventricular systole.",
"Ventricular repolarization.",
"Ventricular ejection.",
"Late repolarization."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Wiggers Diagram MCQs",
"s": "What is the primary mechanism that prevents blood from regurgitating into the great veins during atrial contraction?",
"ns": true,
"sampath": 1,
"c": [
"Venous valves at the atrial junction",
"Closure of the tricuspid valve",
"Contraction of atrial muscle around venous orifices",
"High pressure in the superior vena cava",
"Rapid ventricular suction"
],
"a": 2,
"e": "There are no valves where the caval and pulmonary veins enter the atria. Atrial muscle sleeves around the openings squeeze them narrow during contraction, limiting backflow; the small leak is the a wave.",
"w": [
"No such valves exist.",
"It is open during atrial systole.",
"",
"SVC pressure is low.",
"Ventricular suction acts in early filling, not atrial systole."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Wiggers Diagram MCQs",
"s": "In a patient with a very high heart rate, the \"atrial component\" of ventricular pressure recording becomes less distinct. This is because:",
"ns": true,
"sampath": 1,
"c": [
"The atria stop contracting",
"Filling time is reduced, making events overlap",
"The AV valves stay closed",
"Aortic pressure remains too high",
"Stroke volume increases"
],
"a": 1,
"e": "At high heart rates diastasis vanishes, so atrial systole runs straight into rapid filling and the events merge on the tracing.",
"w": [
"They still contract.",
"",
"They open each cycle.",
"Not related.",
"Not the reason."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Wiggers Diagram MCQs",
"s": "Which of the following occurs during the \"Rapid Ventricular Ejection\" phase (Phase C)?",
"ns": true,
"sampath": 1,
"c": [
"Ventricular volume is increasing",
"70% of the ventricular blood is ejected",
"Aortic valve is closing",
"The second heart sound (S2) is heard",
"Atrial pressure is at its maximum"
],
"a": 1,
"e": "About 70% of the stroke volume leaves in rapid ejection.",
"w": [
"Volume is falling.",
"",
"It is open.",
"S2 comes at the end of ejection.",
"The v wave peaks at the end of systole."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Wiggers Diagram MCQs",
"s": "Which of the following pressure readings would be considered normal for the Left Atrium?",
"ns": true,
"sampath": 1,
"c": [
"Minimal 0, Maximal 8 mmHg",
"Minimal 2, Maximal 12 mmHg",
"Minimal 9, Maximal 130 mmHg",
"Minimal 70, Maximal 130 mmHg",
"Minimal 4, Maximal 25 mmHg"
],
"a": 1,
"e": "Normal LA pressure is about 2–12 mmHg, a little higher than the RA.",
"w": [
"Right atrium.",
"",
"Not a normal chamber range.",
"Systemic arterial range.",
"Right ventricle range."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Wiggers Diagram MCQs",
"s": "The \"c wave\" in the venous pulsation chart occurs during which phase of the cardiac cycle?",
"ns": true,
"sampath": 1,
"c": [
"Atrial systole",
"Isovolumetric contraction",
"Rapid ventricular filling",
"Isovolumetric relaxation",
"Diastasis (Reduced filling)"
],
"a": 1,
"e": "The c wave is tricuspid bulging during isovolumetric contraction.",
"w": [
"The a wave.",
"",
"The y descent.",
"The v wave peaks and falls.",
"Slow rise toward the a wave."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Wiggers Diagram Easy",
"s": "According to the Wiggers diagram, the first heart sound (S1) is produced by the closure of which heart valves?",
"ns": true,
"sampath": 1,
"sdiff": "Easy",
"c": [
"Aortic and pulmonary valves",
"Mitral and tricuspid valves",
"Aortic and mitral valves",
"Pulmonary and tricuspid valves"
],
"a": 1,
"e": "S1 is the AV (mitral and tricuspid) valves closing.",
"w": [
"That is S2.",
"",
"Mixes one semilunar and one AV valve.",
"Mixes one semilunar and one AV valve."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Wiggers Diagram Easy",
"s": "The volume of blood in the ventricle at the end of diastole is known as:",
"ns": true,
"sampath": 1,
"sdiff": "Easy",
"c": [
"Stroke Volume (SV)",
"End-Systolic Volume (ESV)",
"Ejection Fraction (EF)",
"End-Diastolic Volume (EDV)"
],
"a": 3,
"e": "EDV is the volume at the end of filling.",
"w": [
"SV = EDV − ESV.",
"The volume after ejection.",
"A ratio.",
""
],
"src": "lec"
},
{
"t": "Sampath's Q's · Wiggers Diagram Easy",
"s": "The P wave on the ECG, which represents atrial depolarization, immediately precedes which mechanical event in the cardiac cycle?",
"ns": true,
"sampath": 1,
"sdiff": "Easy",
"c": [
"Ventricular ejection",
"Atrial systole (contraction)",
"Isovolumetric relaxation",
"Aortic valve closure"
],
"a": 1,
"e": "Atrial depolarization triggers atrial contraction.",
"w": [
"Follows QRS.",
"",
"Follows the T wave.",
"Near the end of the T wave."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Wiggers Diagram Easy",
"s": "What is the formula for calculating Stroke Volume (SV)?",
"ns": true,
"sampath": 1,
"sdiff": "Easy",
"c": [
"EDV / ESV",
"EDV + ESV",
"ESV - EDV",
"EDV - ESV"
],
"a": 3,
"e": "SV = EDV − ESV.",
"w": [
"Not a defined index.",
"Adds the volumes.",
"Gives a negative number.",
""
],
"src": "lec"
},
{
"t": "Sampath's Q's · Wiggers Diagram Easy",
"s": "During the isovolumetric contraction phase of the cardiac cycle, which of the following is true?",
"ns": true,
"sampath": 1,
"sdiff": "Easy",
"c": [
"The aortic valve is open, and the mitral valve is closed.",
"All four heart valves are closed, and ventricular pressure is rapidly increasing.",
"All four heart valves are open, and blood is moving between chambers.",
"The mitral valve is open, and the aortic valve is closed."
],
"a": 1,
"e": "All valves are shut and pressure climbs at constant volume.",
"w": [
"That is ejection.",
"",
"Never normal.",
"That is filling."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Wiggers Diagram Easy",
"s": "A patient's heart rate increases from 75 bpm to 150 bpm during exercise. Which of the following is the most significant consequence of this change on the cardiac cycle?",
"ns": true,
"sampath": 1,
"sdiff": "Easy",
"c": [
"The duration of systole is dramatically prolonged.",
"The duration of diastole is disproportionately shortened, limiting ventricular filling time.",
"Atrial contraction no longer contributes to ventricular filling.",
"The ejection fraction decreases by 50%."
],
"a": 1,
"e": "Diastole takes most of the cut, which limits filling time.",
"w": [
"Systole shortens slightly.",
"",
"The atrial kick matters more, not less.",
"EF typically rises with sympathetic drive."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Wiggers Diagram Easy",
"s": "A patient has an end-diastolic volume (EDV) of 140 mL and an end-systolic volume (ESV) of 60 mL. What is their Ejection Fraction (EF)?",
"ns": true,
"sampath": 1,
"sdiff": "Easy",
"c": [
"43%",
"57%",
"75%",
"80%"
],
"a": 1,
"e": "SV = 80 mL. EF = 80 ÷ 140 = 57%.",
"w": [
"That is ESV ÷ EDV.",
"",
"That is ESV ÷ SV.",
"That is SV in mL."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Wiggers Diagram Easy",
"s": "In a patient with severe aortic stenosis, the left ventricle must generate a much higher pressure to eject blood. How would this pathology alter the timing of valve events in the left heart?",
"ns": true,
"sampath": 1,
"sdiff": "Easy",
"c": [
"The aortic valve would open earlier, and the duration of isovolumetric contraction would be shorter.",
"The mitral valve would close later, and the duration of ventricular ejection would be longer.",
"The aortic valve would open later, and the duration of isovolumetric contraction would be longer.",
"The aortic valve would close earlier, and the duration of isovolumetric relaxation would be shorter."
],
"a": 2,
"e": "The LV needs longer to build the pressure that opens a stenotic valve, so aortic opening is delayed and isovolumetric contraction lengthens. Ejection is also prolonged.",
"w": [
"The reverse.",
"Mitral closure timing is not the main change.",
"",
"Aortic closure is delayed, not earlier."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Wiggers Diagram Easy",
"s": "A patient develops atrial fibrillation, a condition where the atria quiver chaotically instead of contracting in a coordinated fashion. What would be the most direct effect on the components of the end-diastolic volume (EDV)?",
"ns": true,
"sampath": 1,
"sdiff": "Easy",
"c": [
"The passive filling component would be eliminated.",
"The rapid active filling component (\"atrial kick\") would be lost, reducing total EDV.",
"Both passive and active filling components would increase due to higher atrial pressure.",
"The ESV would increase, which in turn would increase the subsequent EDV."
],
"a": 1,
"e": "AF removes the atrial kick, so EDV falls by up to 20–30%.",
"w": [
"Passive filling continues.",
"",
"Active filling is lost.",
"Not the direct effect."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle Clinical Quiz",
"s": "A 70-year-old male with a history of heart failure with systolic dysfunction is noted to have a blood pressure of 90/60 mmHg and a heart rate of 110 bpm. Which of the following best explains the high heart rate in this patient?",
"ns": true,
"sampath": 1,
"c": [
"It is a primary arrhythmia unrelated to his heart failure.",
"It is a compensatory mechanism to maintain cardiac output in the face of low stroke volume.",
"It is a side effect of his diuretic medication causing hypokalemia.",
"It is an attempt to increase preload by shortening diastolic filling time.",
"It is a result of increased vagal tone to the sinoatrial node."
],
"a": 1,
"e": "CO = SV × HR. Systolic failure lowers SV, and low BP triggers the baroreflex, raising sympathetic drive and heart rate to hold up CO.",
"w": [
"Sinus tachycardia here is reflex, not a primary arrhythmia.",
"",
"Hypokalemia is not the main explanation.",
"Shortening diastole lowers preload.",
"Vagal tone slows the heart."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle Clinical Quiz",
"s": "A patient undergoes a right heart catheterization. The data shows: O2 consumption = 250 mL/min; Pulmonary artery O2 content = 150 mL/L; Femoral artery O2 content = 200 mL/L. What is the patient's cardiac output, and which physiological principle is being applied?",
"ns": true,
"sampath": 1,
"c": [
"4.0 L/min, Indicator dilution principle",
"5.0 L/min, Fick principle",
"6.25 L/min, Frank-Starling Law",
"5.0 L/min, Law of Laplace",
"4.0 L/min, Fick principle"
],
"a": 1,
"e": "Fick principle: CO = VO₂ ÷ (arterial − mixed venous O₂) = 250 ÷ (200 − 150) = 5.0 L/min.",
"w": [
"Wrong value and wrong principle.",
"",
"Wrong value; Frank–Starling does not calculate CO.",
"Right value, but Laplace is wall tension.",
"Right principle, wrong arithmetic."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle Clinical Quiz",
"s": "A patient with severe aortic regurgitation is being evaluated. Which of the following sets of changes in cardiac volumes and pressures would be most characteristic of chronic, compensated aortic regurgitation?",
"ns": true,
"sampath": 1,
"c": [
"Decreased EDV, decreased ESV, decreased SV",
"Increased EDV, increased ESV, increased SV",
"Increased EDV, decreased ESV, normal SV",
"Normal EDV, increased ESV, decreased SV",
"Decreased EDV, increased ESV, decreased SV"
],
"a": 1,
"e": "Regurgitant blood refills the LV in diastole, so EDV rises a lot. Eccentric dilation also raises ESV. Total SV (forward plus regurgitant) rises, giving the bounding pulse.",
"w": [
"The opposite of volume overload.",
"",
"ESV rises with dilation.",
"EDV rises.",
"EDV and SV rise."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle Clinical Quiz",
"s": "If a patient's heart rate increases from 70 bpm to 140 bpm during exercise, the duration of the cardiac cycle shortens from ~0.8s to 0.4s. If systole shortens from 0.3s to 0.2s, what is the new duration of diastole, and what is the primary limiting factor for cardiac output at very high heart rates?",
"ns": true,
"sampath": 1,
"c": [
"0.2s; inadequate time for ventricular ejection.",
"0.2s; inadequate time for ventricular filling.",
"0.1s; excessive myocardial oxygen consumption.",
"0.1s; inadequate time for isovolumetric contraction.",
"0.6s; reduced coronary artery perfusion."
],
"a": 1,
"e": "Diastole = 0.4 − 0.2 = 0.2 s, down from 0.5 s. At very high rates filling time is too short, so EDV and SV fall and CO stops rising.",
"w": [
"Right time, wrong limit.",
"",
"Wrong arithmetic.",
"Wrong arithmetic and wrong limit.",
"Wrong arithmetic."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle Clinical Quiz",
"s": "During phase G of the Wiggers Diagram (Reduced ventricular filling/Diastasis), the ventricular volume is slowly increasing. What is the pressure relationship between the left atrium (LA) and left ventricle (LV) during this specific phase?",
"ns": true,
"sampath": 1,
"c": [
"P_LV > P_LA, causing the mitral valve to close.",
"P_LA > P_LV, but the gradient is small and diminishing.",
"P_LV is rising rapidly due to atrial contraction.",
"P_LA and P_LV are both zero.",
"P_LV > P_LA, but the mitral valve is held open by momentum."
],
"a": 1,
"e": "Filling continues only while LA pressure exceeds LV pressure; in diastasis the two nearly equalize, so flow slows.",
"w": [
"That ends filling.",
"",
"Atrial contraction is Phase A.",
"Neither is zero.",
"Not the normal mechanism."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle Clinical Quiz",
"s": "In which of the following conditions would the work done accelerating blood (kinetic energy) constitute a substantially larger fraction of total stroke work?",
"ns": true,
"sampath": 1,
"c": [
"Systemic hypertension",
"Aortic stenosis",
"Mitral regurgitation",
"Dilated cardiomyopathy",
"Aortic regurgitation"
],
"a": 1,
"e": "Kinetic work ∝ ½mv². A narrowed aortic valve forces a high-velocity jet, so the kinetic share of stroke work rises sharply from its normal ~1%.",
"w": [
"Raises pressure work, not velocity.",
"",
"Backflow into the low-pressure LA does not need high velocity.",
"Low velocity.",
"Larger volume, but velocity is not dramatically higher."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle Clinical Quiz",
"s": "The medication successfully lowers their heart rate and blood pressure (afterload) but also has a negative inotropic effect. Assuming preload remains constant, what is the net effect on Stroke Volume (SV) and Ejection Fraction (EF)?",
"ns": true,
"sampath": 1,
"c": [
"SV and EF will both definitively increase.",
"SV and EF will both definitively decrease.",
"The effect is indeterminate as decreased afterload and decreased contractility have opposing effects on SV.",
"SV will increase due to lower afterload, but EF will decrease due to lower contractility.",
"SV will decrease due to lower contractility, but EF will be unchanged."
],
"a": 2,
"e": "Lower afterload raises SV, while lower contractility lowers it. With the magnitudes unknown, the net effect cannot be predicted. With preload fixed, EF moves with SV.",
"w": [
"Ignores the negative inotropy.",
"Ignores the afterload drop.",
"",
"With EDV fixed, EF moves with SV.",
"With EDV fixed, EF moves with SV."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle Clinical Quiz",
"s": "A patient has severe calcific mitral stenosis. The primary hemodynamic abnormality is obstruction of flow from the left atrium to the left ventricle. Which of the following pressure findings would be most characteristic of this condition?",
"ns": true,
"sampath": 1,
"c": [
"An elevated left ventricular end-diastolic pressure (LVEDP) with a normal left atrial pressure.",
"A large pressure gradient between the left atrium and left ventricle during diastole.",
"An equalization of left atrial and left ventricular pressures during systole.",
"A prominent 'v' wave on the left atrial pressure trace.",
"A decreased pressure gradient between the left ventricle and aorta during systole."
],
"a": 1,
"e": "A stenotic mitral valve needs a high LA pressure to push blood through, giving a large LA–LV diastolic gradient. LVEDP is normal or low.",
"w": [
"The reverse: LA pressure is high and LVEDP is normal.",
"",
"Normal LV pressure is far above LA in systole.",
"That suggests mitral regurgitation.",
"The aortic valve is not involved."
],
"src": "lec"
},
{
"t": "Sampath's Q's · Cardiac Cycle Clinical Quiz",
"s": "Based on the Frank-Starling mechanism, what is the expected immediate effect on the patient's stroke volume and end-systolic volume, assuming afterload and contractility are unchanged?",
"ns": true,
"sampath": 1,
"c": [
"SV increases, ESV increases",
"SV decreases, ESV increases",
"SV increases, ESV is unchanged",
"SV decreases, ESV is unchanged",
"SV is unchanged, ESV decreases"
],
"a": 2,
"e": "The stem as handed out omits the scenario; the intended setting is an increase in preload. More EDV with fixed afterload and contractility means the ventricle ejects to the same ESV, so SV rises and ESV stays the same.",
"w": [
"ESV stays the same.",
"Opposite direction.",
"",
"Opposite direction.",
"SV rises."
],
"src": "lec"
}
];
