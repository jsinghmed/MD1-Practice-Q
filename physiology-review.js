// MSK Physiology — practice questions from "MSK REVIEW 3" (skeletal muscle) and "MSK REVIEW 4" (smooth muscle).
// Stems and choices are copied from the documents. The documents have no answer key,
// so the correct answers, explanations and choice-by-choice notes were supplied for this site.
// Appended after the original 46 questions so existing progress keeps its place.

window.PHYSIO_QUESTIONS.push(
// ================= MSK REVIEW 3 — Mechanism of skeletal muscle contraction =================
{
  src: "rev3", t: "Contraction Mechanics",
  s: `A 24-year-old athlete undergoes an experiment in which a single skeletal muscle fiber is stimulated electrically at different initial sarcomere lengths. At one length, active tension is maximal. When the sarcomere is progressively stretched to 3.65 µm, active tension falls to zero. The fiber remains viable, and stimulation produces a normal action potential. Which mechanism best explains the loss of active tension at the greatest sarcomere length?`,
  c: ["The Z-disks compress the thick filaments and prevent cross-bridge detachment.", "The myosin heads lose access to actin-binding sites because the filaments no longer overlap.", "The titin molecules become fully relaxed and prevent calcium from binding to troponin.", "The sarcoplasmic reticulum becomes unable to release calcium at extended sarcomere lengths.", "The actin filaments overlap excessively, obstructing the movement of myosin heads."],
  a: 1,
  e: `Active tension depends on how many myosin heads can reach actin, which depends on filament overlap (the length–tension relationship). Maximum tension occurs at the optimal sarcomere length (~2.0–2.2 µm), where every myosin head sits beside actin. At ~3.65 µm the thin filaments have been pulled completely past the ends of the thick filaments, so there is zero overlap and no cross-bridges can form — even though the action potential and Ca²⁺ release are normal.`,
  w: ["Z-disk compression of thick filaments happens at very short lengths, not long ones.", "Correct — no overlap means no cross-bridges.", "Titin is stretched (not relaxed) at long lengths, and it doesn't control Ca²⁺ binding to troponin.", "Ca²⁺ release is normal; the stem says excitation is intact.", "Excessive actin overlap (thin filaments crossing each other) reduces tension at short lengths, not at 3.65 µm."]
},
{
  src: "rev3", t: "Contraction Mechanics",
  s: `A 31-year-old gymnast has a skeletal muscle fiber experimentally stretched beyond its resting length. During the experiment, the fiber is stimulated, and the investigators measure both active and total tension. As the fiber is stretched further, active tension decreases, but total tension increases. Which mechanism best accounts for this finding?`,
  c: ["Increased calcium release raises active tension despite reduced filament overlap.", "Increased ATP hydrolysis directly increases the passive resistance of the muscle.", "Elastic elements develop greater resistance to stretch as active tension declines.", "Excessive actin overlap increases passive tension while preserving maximal cross-bridge formation.", "Reduced myosin ATPase activity causes connective tissue to generate additional active tension."],
  a: 2,
  e: `Total tension = active tension + passive tension. Beyond optimal length, active tension falls because filament overlap decreases. Passive tension — from stretching elastic elements such as titin and the connective tissue sheaths — rises steeply with stretch and outweighs the loss of active tension, so total tension keeps increasing.`,
  w: ["Ca²⁺ release isn't increased, and active tension is falling.", "Passive tension doesn't use ATP.", "Correct — passive elastic resistance rises with stretch.", "There is less overlap when stretched, not more.", "Connective tissue generates only passive tension, never active tension."]
},
{
  src: "rev3", t: "Contraction Mechanics",
  s: `A 28-year-old medical student holds a 10-kg dumbbell motionless with her elbow flexed at 90°. Electromyography demonstrates sustained biceps activation. The muscle consumes ATP even though the dumbbell does not move. Which statement best explains this observation?`,
  c: ["Cross-bridge cycling ceases completely once muscle length becomes constant.", "The muscle generates force, but its external mechanical work is zero because displacement is zero.", "ATP consumption stops because calcium is no longer released from the sarcoplasmic reticulum.", "The muscle performs maximal external work because tension is maintained over time.", "The muscle shortens internally at a constant velocity despite the fixed elbow angle."],
  a: 1,
  e: `This is an isometric contraction. Work = force × distance, so with no movement, external mechanical work is zero. Yet the muscle keeps producing force by continuous cross-bridge cycling: heads attach, pull, detach (using ATP) and reattach, while Ca²⁺ is repeatedly released and pumped back into the SR. All the energy is released as heat.`,
  w: ["Cross-bridges keep cycling to maintain force.", "Correct.", "Ca²⁺ release continues while the muscle is active (EMG is on).", "No displacement means zero external work.", "The whole muscle doesn't shorten; any internal stretch of elastic elements is small, not continuous shortening."]
},
{
  src: "rev3", t: "Contraction Mechanics",
  s: `A researcher measures the shortening velocity of an isolated skeletal muscle under different opposing loads. At a very low load, the muscle shortens rapidly. As the load increases, shortening becomes progressively slower. At the muscle's maximum isometric load, no shortening occurs. Which change would be expected if the opposing load were reduced substantially while the muscle's activation and intrinsic myosin ATPase properties remained unchanged?`,
  c: ["Shortening velocity would increase toward its maximum unloaded value.", "Shortening velocity would remain zero because the muscle must first increase its sarcomere length.", "Shortening velocity would decrease because fewer cross-bridges are required to support the load.", "Maximum isometric force would immediately decrease in direct proportion to the reduction in load.", "Shortening velocity would increase only if stimulation frequency were reduced to a single twitch."],
  a: 0,
  e: `The force–velocity relationship is inverse: lighter load → faster shortening. At zero load the muscle shortens at its maximum velocity (Vmax), which is set by the myosin ATPase rate. So lowering the load moves velocity up toward Vmax. Maximum isometric force is a property of the muscle and doesn't change with the load you put on it.`,
  w: ["Correct.", "The muscle can shorten immediately from its current length.", "Lower load means faster, not slower, shortening.", "Maximum isometric force is intrinsic; the load doesn't change it.", "Velocity depends on load, not on reducing stimulation."]
},
{
  src: "rev3", t: "Skeletal Muscle Structure & E-C Coupling",
  s: `A 22-year-old volunteer participates in a laboratory study of skeletal muscle contraction. Following stimulation, calcium is released from the sarcoplasmic reticulum, binds to troponin C, and permits cross-bridge cycling. After stimulation stops, the muscle takes longer than expected to relax because calcium remains elevated in the sarcoplasm. ATP availability is normal. Which impaired process most directly explains the delayed relaxation?`,
  c: ["ATP binding to myosin heads, preventing their detachment from actin.", "Calcium binding to troponin C, preventing tropomyosin from moving away from actin.", "ATP-dependent calcium transport from the sarcoplasm back into the sarcoplasmic reticulum.", "Acetylcholine binding to postsynaptic nicotinic receptors at the motor end plate.", "Sodium influx through voltage-gated channels during the muscle action potential."],
  a: 2,
  e: `Relaxation requires removing Ca²⁺ from the sarcoplasm. The SERCA pump (sarco/endoplasmic reticulum Ca²⁺-ATPase) uses ATP to pump Ca²⁺ back into the SR. When Ca²⁺ stays high, troponin C remains bound to it, tropomyosin stays off the binding sites, and cross-bridges keep forming. With ATP normal, the impaired step is SERCA reuptake (e.g., Brody disease, a SERCA1 deficiency).`,
  w: ["ATP binding is needed for detachment, and ATP is normal; besides, the stem says Ca²⁺ stays high.", "Ca²⁺ binding to TnC starts contraction; a problem here would weaken contraction, not delay relaxation.", "Correct — SERCA pumps Ca²⁺ back into the SR.", "ACh binding is upstream; stimulation has already stopped.", "Na⁺ influx triggers the action potential, not relaxation."]
},
{
  src: "rev3", t: "Skeletal Muscle Structure & E-C Coupling",
  s: `A forensic pathologist examines skeletal muscle several hours after death. The muscles are stiff and resistant to passive movement. Cellular ATP stores have been depleted. Which mechanism most directly produces this rigidity?`,
  c: ["Persistent acetylcholine release causes continuous stimulation of nicotinic receptors.", "Excess ATP hydrolysis maintains the myosin heads in a permanently detached state.", "Calcium depletion prevents tropomyosin from covering actin-binding sites.", "Myosin heads cannot detach from actin because ATP is required for cross-bridge dissociation.", "Increased phosphocreatine synthesis produces sustained high-energy phosphate availability."],
  a: 3,
  e: `Rigor mortis: after death, Ca²⁺ leaks into the sarcoplasm (allowing myosin to bind actin) while ATP runs out. A new ATP molecule must bind the myosin head to release it from actin, so without ATP the heads stay locked in the "rigor" state and the muscle becomes stiff until proteins degrade.`,
  w: ["Nerve activity stops after death; this isn't the cause.", "No ATP is left, and ATP releases rather than holds heads detached.", "Ca²⁺ isn't depleted — it leaks out of the SR, exposing binding sites.", "Correct.", "Phosphocreatine is depleted too; there is no energy available."]
},
{
  src: "rev3", t: "Energetics & Fiber Types",
  s: `A 26-year-old sprinter performs an all-out exercise bout lasting 40 seconds. During the first several seconds, muscle ATP is regenerated rapidly from phosphocreatine. As the exercise continues, rapid glycolytic ATP production becomes increasingly important. The athlete develops fatigue near the end of the bout. Which explanation best accounts for the shift in energy contribution?`,
  c: ["Oxidative phosphorylation initially provides all ATP, but mitochondrial ATP production stops after several seconds.", "Phosphocreatine stores are limited, so glycolysis increasingly contributes ATP as immediate reserves decline.", "Anaerobic glycolysis requires oxygen and therefore becomes dominant when muscle oxygen availability increases.", "Stored ATP can sustain maximal contraction for several minutes, making phosphocreatine unnecessary.", "Fat oxidation produces ATP faster than phosphocreatine cleavage during brief maximal exercise."],
  a: 1,
  e: `Energy systems in maximal exercise: stored ATP lasts only a couple of seconds; phosphocreatine (creatine kinase) regenerates ATP fastest but is used up in ~8–10 s; anaerobic glycolysis then supplies most ATP for ~10 s to ~2 min (with lactate and H⁺ accumulating, contributing to fatigue); oxidative metabolism dominates longer exercise.`,
  w: ["Oxidative phosphorylation is too slow to supply maximal effort at the start, and it doesn't stop.", "Correct.", "Anaerobic glycolysis doesn't need oxygen.", "Stored ATP lasts only seconds.", "Fat oxidation is the slowest ATP source."]
},
{
  src: "rev3", t: "Exercise Physiology",
  s: `A 30-year-old cyclist completes a prolonged, high-intensity training session. Five minutes after stopping, her oxygen consumption remains above resting levels despite the absence of further exercise. During recovery, ATP and phosphocreatine stores are replenished, and oxygen stores are restored. Which process is most directly associated with this elevated post-exercise oxygen consumption?`,
  c: ["Continued maximal recruitment of all skeletal muscle motor units.", "Persistent shortening of all active muscle fibers at maximal unloaded velocity.", "Complete cessation of oxidative metabolism until lactate is removed.", "Restoration of energy stores and oxygen reserves, together with other recovery processes.", "Conversion of all muscle lactate directly into ATP within skeletal muscle without additional metabolism."],
  a: 3,
  e: `This is excess post-exercise oxygen consumption (EPOC, "oxygen debt"). Extra O₂ is used to rebuild ATP and phosphocreatine, refill myoglobin and hemoglobin O₂ stores, clear lactate (oxidation and gluconeogenesis), and support the still-elevated heart rate, breathing, temperature and metabolism.`,
  w: ["Exercise has stopped; muscles aren't being recruited.", "The muscles aren't contracting.", "Oxidative metabolism is increased during recovery, not stopped.", "Correct — EPOC.", "Lactate must be oxidized or converted to glucose (Cori cycle), which requires O₂."]
},
{
  src: "rev3", t: "Neuromuscular Junction",
  s: `A 20-year-old pianist begins playing a passage that requires delicate, precisely graded finger movements. As the passage becomes more forceful, additional motor units are activated. Which recruitment pattern best explains this change?`,
  c: ["Large motor neurons are recruited first because they have the lowest activation thresholds.", "All motor units are activated simultaneously to ensure uniform muscle force.", "Small, highly excitable motor neurons are recruited first, followed by larger motor neurons as force demand rises.", "Fast glycolytic motor units are always recruited before slow oxidative motor units, regardless of task.", "Increasing muscle force depends exclusively on increasing action-potential amplitude in individual muscle fibers."],
  a: 2,
  e: `Henneman's size principle: small motor neurons have the highest input resistance and so reach threshold first. They control small, slow, fatigue-resistant motor units, allowing fine, graded force. As demand rises, progressively larger motor neurons (larger, faster, more powerful units) are recruited.`,
  w: ["Large motor neurons have the highest thresholds and are recruited last.", "Recruitment is orderly, not simultaneous.", "Correct — the size principle.", "Slow oxidative units are recruited before fast glycolytic units.", "Action potentials are all-or-none; force rises by recruitment and firing rate."]
},
{
  src: "rev3", t: "Contraction Mechanics",
  s: `A researcher stimulates an isolated skeletal muscle at progressively higher frequencies while recording its tension. At low frequency, individual contractions are separated by complete relaxation. At a higher frequency, tension increases because a new stimulus arrives before the previous contraction has fully relaxed. At very high frequency, tension becomes smooth and sustained. Which mechanism most directly explains the transition to fused tetanus?`,
  c: ["Repeated stimulation prevents cytosolic calcium from returning fully to baseline, sustaining cross-bridge activation.", "Repeated stimulation depletes all intracellular calcium, causing a sustained contraction without cross-bridge cycling.", "Increased stimulation frequency converts slow oxidative fibers into fast glycolytic fibers within seconds.", "Each action potential produces a progressively larger action-potential amplitude in the muscle membrane.", "Increased stimulation frequency removes the need for ATP during cross-bridge cycling."],
  a: 0,
  e: `A skeletal muscle action potential lasts only a few milliseconds, but the twitch lasts much longer. At high frequency, each new action potential releases Ca²⁺ before SERCA has cleared the previous release, so cytosolic Ca²⁺ stays high. Troponin stays saturated, cross-bridges cycle continuously, and the series elastic elements stay stretched → smooth, maximal fused tetanus.`,
  w: ["Correct.", "Ca²⁺ is sustained, not depleted, and cross-bridges keep cycling.", "Fiber types don't change in seconds.", "Action potentials are all-or-none; their amplitude doesn't grow.", "Cross-bridge cycling always needs ATP."]
},
{
  src: "rev3", t: "Energetics & Fiber Types",
  s: `A 35-year-old individual begins resistance training and develops increased skeletal muscle mass over several months. A second individual is immobilized in a cast for several weeks and develops reduced muscle mass in the affected limb. Which cellular change best explains the difference between these two outcomes?`,
  c: ["Training increases muscle mass mainly by converting all slow fibers into fast fibers, whereas immobilization increases fiber number.", "Training suppresses contractile-protein synthesis, whereas immobilization increases actin and myosin production.", "Training causes permanent calcium accumulation within muscle fibers, whereas immobilization prevents calcium release.", "Both changes are caused exclusively by alterations in motor-neuron action-potential amplitude.", "Training increases contractile-protein accumulation, whereas disuse promotes protein degradation that exceeds replacement."],
  a: 4,
  e: `Muscle mass reflects the balance between protein synthesis and breakdown. Resistance training increases synthesis of actin, myosin and other contractile proteins, adding myofibrils and enlarging each fiber (hypertrophy — fiber number changes little). Disuse shifts the balance toward degradation (ubiquitin–proteasome pathway), so fibers shrink (atrophy).`,
  w: ["Hypertrophy is mainly larger fibers, not fiber-type conversion; immobilization doesn't add fibers.", "Reversed.", "No permanent Ca²⁺ accumulation occurs.", "Action potential amplitude doesn't change with training or disuse.", "Correct."]
},
{
  src: "rev3", t: "Neuromuscular Junction",
  s: `A 27-year-old woman presents with intermittent diplopia and ptosis that worsen after prolonged activity and improve with rest. Examination reveals fatigable weakness. Testing identifies antibodies against postsynaptic nicotinic acetylcholine receptors at the neuromuscular junction. Which physiological change most directly causes her muscle weakness?`,
  c: ["Excessive calcium release from the sarcoplasmic reticulum prevents myosin detachment.", "Reduced postsynaptic receptor availability decreases the end-plate potential, sometimes preventing the muscle action potential from reaching threshold.", "Failure of acetylcholine synthesis prevents all acetylcholine release from the motor neuron.", "Increased dystrophin synthesis disrupts the connection between actin and the extracellular matrix.", "ATP depletion prevents every myosin head from binding to actin during the first contraction."],
  a: 1,
  e: `In myasthenia gravis, antibodies block and destroy nicotinic AChRs. With fewer receptors, each nerve impulse produces a smaller end-plate potential, reducing the safety factor. With repeated firing, ACh release per impulse normally falls a little; the EPP then drops below threshold in more fibers, so weakness worsens with use and improves with rest.`,
  w: ["SR Ca²⁺ handling is normal.", "Correct.", "ACh synthesis and release are normal.", "Dystrophin is unaffected (and it's lost, not increased, in muscular dystrophy).", "ATP isn't depleted."]
},
{
  src: "rev3", t: "Skeletal Muscle Structure & E-C Coupling",
  s: `A 19-year-old man undergoes surgery and receives a volatile anesthetic. Within minutes, he develops generalized muscle rigidity, rapidly increasing core temperature, hyperkalemia, and metabolic acidosis. A family history reveals a previous anesthesia-related death. A mutation affecting the skeletal muscle ryanodine receptor, RyR1, is suspected. Which mechanism best explains the combination of rigidity, hyperthermia, and metabolic abnormalities?`,
  c: ["Autoantibodies block postsynaptic acetylcholine receptors, preventing end-plate depolarization.", "Dystrophin deficiency causes chronic membrane injury without altering sarcoplasmic-reticulum calcium release.", "Unregulated sarcoplasmic-reticulum calcium release sustains contraction and ATP hydrolysis, increasing heat production and metabolic demand.", "ATP depletion immediately prevents all actin–myosin interactions, causing flaccid paralysis and reduced heat production.", "Reduced calcium entry into the sarcoplasm prevents cross-bridge cycling and produces compensatory hyperthermia."],
  a: 2,
  e: `Malignant hyperthermia: a mutant RyR1 opens excessively when exposed to volatile anesthetics or succinylcholine. Massive Ca²⁺ release causes sustained contraction (rigidity), and SERCA and myosin ATPases burn huge amounts of ATP, generating heat, CO₂ and lactic acid. Muscle cell breakdown releases K⁺ (hyperkalemia). Treatment: dantrolene, which blocks RyR1.`,
  w: ["That is myasthenia gravis.", "That is Duchenne muscular dystrophy.", "Correct.", "Rigidity, not flaccid paralysis, and heat production increases.", "Ca²⁺ is increased, not reduced."]
},
{
  src: "rev3", t: "Skeletal Muscle Structure & E-C Coupling",
  s: `A 5-year-old boy is evaluated for progressive difficulty climbing stairs and rising from the floor. Examination reveals proximal muscle weakness and calf pseudohypertrophy. Genetic testing identifies an X-linked mutation that results in the absence of functional dystrophin. Which cellular mechanism most directly contributes to progressive skeletal muscle fiber destruction?`,
  c: ["Loss of dystrophin destabilizes the muscle membrane, increasing susceptibility to contraction-induced injury and abnormal calcium entry.", "Increased dystrophin production prevents myosin heads from detaching from actin during relaxation.", "Autoimmune destruction of postsynaptic acetylcholine receptors reduces the end-plate potential.", "A constitutively open RyR1 channel causes acute anesthetic-triggered hypermetabolism.", "Increased titin elasticity prevents passive tension from developing during muscle stretch."],
  a: 0,
  e: `Duchenne muscular dystrophy: dystrophin links the actin cytoskeleton to the sarcolemma and extracellular matrix through the dystrophin–glycoprotein complex. Without it, the membrane tears during contraction; Ca²⁺ floods in, activates proteases and causes fiber necrosis. Fibers are replaced by fat and fibrous tissue (calf pseudohypertrophy). Gowers sign reflects proximal weakness.`,
  w: ["Correct.", "Dystrophin is absent, not increased.", "That is myasthenia gravis.", "That is malignant hyperthermia.", "Titin isn't involved in DMD."]
},
{
  src: "rev3", t: "Contraction Mechanics",
  s: `A 42-year-old patient has maintained one limb in a shortened position for several months because of a chronic joint contracture. Histological assessment suggests that the muscle has adapted to its persistently shortened resting length. Which structural change is most consistent with the length-adaptation principle described in the presentation?`,
  c: ["Addition of sarcomeres in series to restore the muscle's original resting length despite continued shortening.", "Complete conversion of all contractile proteins into extracellular collagen.", "Permanent elevation of cytosolic calcium, causing continuous cross-bridge cycling.", "Loss of sarcomeres in series, allowing the muscle fibers to adapt to a chronically shortened length.", "Immediate conversion of slow oxidative fibers into fast glycolytic fibers without structural remodeling."],
  a: 3,
  e: `Muscle fibers adjust the number of sarcomeres in series so that each sarcomere sits near its optimal length (best filament overlap) at the habitual resting length. A muscle held shortened loses sarcomeres in series; a muscle held lengthened (or growing bone) adds them. This is why contractures persist and require prolonged stretching to reverse.`,
  w: ["Sarcomeres are added when a muscle is chronically lengthened, not shortened.", "Contractile proteins aren't converted into collagen (although fibrosis may increase).", "Ca²⁺ doesn't stay elevated.", "Correct.", "Fiber-type conversion is slow and not the length-adaptation mechanism."]
},

// ================= MSK REVIEW 4 — Smooth muscle =================
{
  src: "rev4", t: "Smooth Muscle",
  s: `A 46-year-old woman is admitted with severe hypertension. An experimental drug selectively inhibits myosin light-chain kinase (MLCK) in vascular smooth muscle without affecting calcium entry into the cells. After administration, intracellular Ca²⁺ concentrations remain elevated, but vascular resistance decreases. Which mechanism best explains this finding?`,
  c: ["Calcium binds troponin C, moving tropomyosin away from actin-binding sites.", "Myosin regulatory light-chain phosphorylation decreases, reducing myosin ATPase activity and cross-bridge cycling.", "Calcium release from the sarcoplasmic reticulum increases, directly inhibiting actin–myosin interactions.", "Myosin light-chain phosphatase is inhibited, preventing the formation of force-generating cross-bridges.", "Calcium binds calmodulin, directly activating myosin ATPase independently of phosphorylation."],
  a: 1,
  e: `Smooth muscle is regulated on the myosin side. Ca²⁺ binds calmodulin → Ca²⁺–calmodulin activates MLCK → MLCK phosphorylates the regulatory light chain of myosin → myosin ATPase activity and cross-bridge cycling switch on. Blocking MLCK breaks this chain even though Ca²⁺ is high, so the vessels relax and resistance falls.`,
  w: ["Smooth muscle has no troponin.", "Correct.", "Ca²⁺ release doesn't inhibit actin–myosin interaction.", "MLCP inhibition would increase phosphorylation and contraction — and the drug targets MLCK.", "Ca²⁺–calmodulin works through MLCK, not directly on myosin ATPase."]
},
{
  src: "rev4", t: "Smooth Muscle",
  s: `A 32-year-old man undergoes experimental evaluation of two smooth muscle preparations. In preparation X, electrical stimulation of a single cell produces a coordinated contraction that spreads through neighboring cells. In preparation Y, stimulation produces contraction confined to the directly stimulated fibers, with little electrical spread to adjacent cells. Which structural difference most likely explains the findings?`,
  c: ["Preparation X contains troponin, whereas preparation Y contains calmodulin.", "Preparation X relies exclusively on autonomic nerve stimulation, whereas preparation Y contracts spontaneously.", "Preparation X has abundant gap junctions, whereas preparation Y has limited electrical coupling between fibers.", "Preparation X has a well-developed sarcoplasmic reticulum, whereas preparation Y depends entirely on extracellular calcium.", "Preparation X uses rapid cross-bridge cycling, whereas preparation Y uses the latch mechanism exclusively."],
  a: 2,
  e: `Preparation X behaves like single-unit (visceral) smooth muscle: cells are joined by many gap junctions, so excitation spreads and the sheet contracts as a functional syncytium (gut, uterus, bladder, small vessels). Preparation Y behaves like multi-unit smooth muscle: few gap junctions, each fiber controlled separately by nerves (iris, ciliary muscle, large arteries, piloerector muscles).`,
  w: ["Neither type of smooth muscle has troponin.", "Reversed: single-unit muscle often contracts spontaneously; multi-unit depends on nerves.", "Correct.", "SR development doesn't explain spread between cells.", "Cross-bridge kinetics don't determine electrical spread."]
},
{
  src: "rev4", t: "Smooth Muscle",
  s: `A 58-year-old man is enrolled in a laboratory study of vascular smooth muscle. A blood vessel is exposed to a solution containing markedly reduced extracellular Ca²⁺. The vessel is then depolarized, but its contractile response is substantially diminished despite an intact contractile apparatus. Which mechanism best explains the reduced contraction?`,
  c: ["Reduced extracellular Ca²⁺ decreases calcium influx through voltage-gated channels, limiting calcium–calmodulin activation of MLCK.", "Reduced extracellular Ca²⁺ increases myosin light-chain phosphorylation by activating MLCP.", "Reduced extracellular Ca²⁺ prevents calcium from binding to troponin, leaving tropomyosin over the myosin-binding sites.", "Reduced extracellular Ca²⁺ directly increases myosin ATPase activity, accelerating cross-bridge detachment.", "Reduced extracellular Ca²⁺ increases IP₃ production, depleting actin filaments of regulatory proteins."],
  a: 0,
  e: `Smooth muscle has a small SR and relies heavily on extracellular Ca²⁺ entering through L-type voltage-gated Ca²⁺ channels when the membrane depolarizes (electromechanical coupling). With little Ca²⁺ outside, depolarization lets in little Ca²⁺, so less Ca²⁺–calmodulin forms and MLCK activity and contraction fall. This is also how calcium channel blockers lower blood pressure.`,
  w: ["Correct.", "MLCP dephosphorylates myosin (it doesn't increase phosphorylation), and low Ca²⁺ doesn't activate it.", "Smooth muscle has no troponin.", "Myosin ATPase activity falls, not rises.", "IP₃ isn't increased, and it doesn't deplete regulatory proteins."]
},
{
  src: "rev4", t: "Smooth Muscle",
  s: `A 40-year-old woman receives an experimental agonist that activates Gq-coupled receptors on gastrointestinal smooth muscle. The agonist increases intracellular IP₃ and produces contraction even when the muscle membrane does not undergo a substantial depolarization. Which sequence best explains this response?`,
  c: ["Gq activation → increased cAMP → activation of MLCP → myosin phosphorylation.", "Gq activation → inhibition of phospholipase C → reduced IP₃ → calcium release from the sarcoplasmic reticulum.", "Gq activation → direct activation of myosin ATPase → cross-bridge cycling without calcium signaling.", "Gq activation → phospholipase C activation → PIP₂ breakdown → IP₃-mediated calcium release → calmodulin–MLCK activation.", "Gq activation → troponin C activation → movement of tropomyosin → smooth muscle contraction."],
  a: 3,
  e: `This is pharmacomechanical coupling — contraction without a change in membrane potential. Gq activates phospholipase C, which splits PIP₂ into IP₃ and DAG. IP₃ opens IP₃ receptors on the SR, releasing Ca²⁺ → Ca²⁺–calmodulin → MLCK → myosin light-chain phosphorylation → contraction. (DAG activates PKC, which can also increase Ca²⁺ sensitivity.)`,
  w: ["cAMP comes from Gs, and it relaxes smooth muscle; MLCP dephosphorylates myosin.", "Gq activates PLC; it doesn't inhibit it.", "Contraction still requires Ca²⁺ signaling.", "Correct.", "Smooth muscle has no troponin."]
},
{
  src: "rev4", t: "Smooth Muscle",
  s: `A 29-year-old pregnant woman undergoes uterine muscle recording during an experimental study of electrical excitation. The investigators identify prolonged action potentials with a plateau phase lasting approximately 800 milliseconds. The muscle exhibits sustained contractions during this period. Which mechanism most directly links the plateau to the prolonged contraction?`,
  c: ["Persistent fast sodium influx maintains depolarization and directly activates skeletal-type troponin.", "Delayed repolarization prolongs calcium entry, sustaining intracellular calcium and myosin light-chain phosphorylation.", "Rapid potassium efflux shortens the action potential but maintains maximal calcium release from the sarcoplasmic reticulum.", "Inhibition of all calcium channels prevents relaxation by permanently locking myosin to actin.", "Prolonged membrane hyperpolarization increases voltage-gated calcium channel opening and accelerates relaxation."],
  a: 1,
  e: `Some smooth muscles (uterus, ureter) produce action potentials with a long plateau. During the plateau, L-type Ca²⁺ channels stay open and repolarization is delayed, so Ca²⁺ keeps entering. Cytosolic Ca²⁺ stays high, Ca²⁺–calmodulin keeps MLCK active, myosin stays phosphorylated, and contraction is sustained for the length of the plateau.`,
  w: ["The plateau is carried mainly by Ca²⁺, and smooth muscle has no troponin.", "Correct.", "Rapid K⁺ efflux would shorten the AP and end the plateau.", "Blocking Ca²⁺ channels would cause relaxation.", "Hyperpolarization closes voltage-gated Ca²⁺ channels."]
},
{
  src: "rev4", t: "Smooth Muscle",
  s: `A 61-year-old man undergoes an experimental study of vascular smooth muscle. After a vessel develops substantial tension, the investigators reduce the intensity of the contractile stimulus. The vessel maintains much of its tension, although ATP consumption decreases considerably. Which mechanism best explains this observation?`,
  c: ["Persistent maximal MLCK activity maintains rapid cross-bridge cycling despite reduced stimulation.", "Increased calcium influx continuously accelerates myosin ATPase activity, preserving force at high energy cost.", "Myosin heads remain attached to actin for prolonged periods as cross-bridge cycling slows, sustaining tension with little ATP consumption.", "Troponin remains bound to calcium, maintaining actin activation after cytosolic calcium falls.", "Complete inhibition of myosin phosphorylation prevents cross-bridge attachment while maintaining active force."],
  a: 2,
  e: `This is the latch state. As stimulation and MLCK activity fall, myosin light-chain phosphatase dephosphorylates myosin heads while they're still attached to actin. These "latch bridges" detach very slowly, so tension is held with very little cycling — and little ATP use. This lets vessels and sphincters maintain tone economically for hours.`,
  w: ["MLCK activity and cycling fall, not stay maximal.", "Energy use falls, not rises.", "Correct — the latch state.", "Smooth muscle has no troponin.", "Phosphorylation isn't completely blocked, and some attached cross-bridges hold the force."]
},
{
  src: "rev4", t: "Smooth Muscle",
  s: `A 35-year-old woman participates in a urodynamic study. Her urinary bladder is filled rapidly with an additional 150 mL of fluid while the outlet remains closed. Bladder pressure initially rises sharply but then falls toward its previous level over the next 30–60 seconds, despite the continued presence of the additional volume. Which physiological mechanism best explains the pressure change?`,
  c: ["Smooth muscle adapts to sustained stretch through stress-relaxation, reducing tension after the initial rise in pressure.", "The bladder empties partially through the urethra, reducing volume and restoring baseline pressure.", "Parasympathetic stimulation progressively increases detrusor contraction, lowering intravesical pressure.", "Increased bladder volume permanently inhibits calcium–calmodulin binding, abolishing smooth muscle contractility.", "Stretch causes immediate and sustained myosin phosphorylation, continuously increasing bladder wall tension."],
  a: 0,
  e: `Stress-relaxation (plasticity) is a property of smooth muscle: after a sudden stretch, tension rises and then gradually declines as cross-bridges and filaments rearrange to the new length. In hollow organs like the bladder, this lets volume increase with little lasting rise in pressure (and the reverse — stress-relaxation reversal — happens when volume falls).`,
  w: ["Correct.", "The outlet is closed, so volume can't fall.", "Detrusor contraction would raise, not lower, pressure.", "Contractility isn't abolished; the bladder can still contract to void.", "That would keep pressure high."]
},
{
  src: "rev4", t: "Smooth Muscle",
  s: `A 64-year-old man with coronary artery disease receives a medication that increases nitric oxide signaling in vascular smooth muscle. Shortly afterward, his vascular resistance decreases. Laboratory analysis shows increased cyclic GMP (cGMP) in the smooth muscle cells. Which mechanism best explains the reduction in vascular tone?`,
  c: ["cGMP activates MLCK, increasing myosin phosphorylation and promoting sustained contraction.", "cGMP increases cytosolic calcium through IP₃ receptors, accelerating actin–myosin cycling.", "cGMP activates troponin C, removing tropomyosin from actin and initiating relaxation.", "cGMP signaling favors relaxation by reducing calcium-dependent contractile activation and promoting myosin dephosphorylation.", "cGMP inhibits calcium extrusion, maintaining a high cytosolic calcium concentration while decreasing vascular resistance."],
  a: 3,
  e: `NO (e.g., from nitroglycerin) activates soluble guanylyl cyclase → ↑cGMP → protein kinase G. PKG lowers cytosolic Ca²⁺ (less entry, more uptake and extrusion) and activates myosin light-chain phosphatase, so myosin is dephosphorylated and the muscle relaxes → vasodilation and lower resistance. PDE-5 inhibitors (sildenafil) work by preventing cGMP breakdown.`,
  w: ["cGMP reduces phosphorylation and causes relaxation.", "cGMP lowers Ca²⁺.", "Smooth muscle has no troponin.", "Correct.", "cGMP promotes Ca²⁺ removal, lowering cytosolic Ca²⁺."]
},
{
  src: "rev4", t: "Smooth Muscle",
  s: `A 25-year-old man performs vigorous exercise with his right forearm while the left forearm remains at rest. Blood flow to the exercising forearm increases substantially. Local tissue measurements reveal decreased oxygen, increased carbon dioxide, and increased hydrogen ion concentration. Which mechanism most likely contributes to the increased blood flow?`,
  c: ["Local metabolites increase MLCK activity in arteriolar smooth muscle, increasing resistance and diverting blood toward the exercising tissue.", "Local metabolic signals promote arteriolar smooth muscle relaxation, reducing vascular resistance and increasing blood flow to the active tissue.", "Local metabolites inhibit calcium removal from smooth muscle, maintaining contraction while increasing vessel diameter.", "Increased tissue oxygen consumption directly stimulates troponin-mediated relaxation of arteriolar smooth muscle.", "Reduced local oxygen increases sympathetic norepinephrine release, producing selective dilation through α₁-adrenergic receptors."],
  a: 1,
  e: `Active hyperemia: working muscle produces metabolites — low O₂, high CO₂, H⁺, K⁺, adenosine, lactate. These relax arteriolar smooth muscle locally (e.g., by opening K⁺ channels and hyperpolarizing the cells, which closes L-type Ca²⁺ channels). Resistance falls and blood flow matches metabolic demand, independent of the resting arm.`,
  w: ["Increased MLCK activity would constrict the arterioles and reduce flow.", "Correct — metabolic vasodilation.", "Maintained contraction can't increase vessel diameter.", "Smooth muscle has no troponin.", "α₁ receptors cause vasoconstriction, not dilation."]
},
{
  src: "rev4", t: "Smooth Muscle",
  s: `A 43-year-old man receives an intravenous infusion of norepinephrine during a monitored hemodynamic study. His systemic vascular resistance increases, but an isolated intestinal smooth muscle preparation exposed to norepinephrine shows reduced contractile activity. Which explanation best accounts for the opposite responses?`,
  c: ["Norepinephrine is always excitatory, but intestinal smooth muscle lacks myosin regulatory light chains.", "Vascular smooth muscle uses troponin, whereas intestinal smooth muscle uses calmodulin.", "Norepinephrine enters vascular cells but cannot enter intestinal cells, producing different intracellular calcium concentrations.", "Intestinal smooth muscle is electrically uncoupled, whereas vascular smooth muscle must be electrically coupled to respond to norepinephrine.", "Different receptor subtypes and downstream signaling pathways can cause norepinephrine to contract vascular smooth muscle while inhibiting contraction in the intestine."],
  a: 4,
  e: `The response depends on the receptor, not the transmitter. In vascular smooth muscle, norepinephrine acts on α₁ receptors (Gq → IP₃ → Ca²⁺ → contraction → ↑resistance). In intestinal smooth muscle, β₂ (Gs → cAMP) and α₂ receptors and presynaptic inhibition reduce Ca²⁺ and excitability, inhibiting contraction — consistent with sympathetic slowing of gut motility.`,
  w: ["Norepinephrine isn't always excitatory, and intestinal muscle has regulatory light chains.", "Neither smooth muscle uses troponin.", "Norepinephrine acts on surface receptors; it doesn't need to enter cells.", "Intestinal smooth muscle is mostly single-unit (coupled), and coupling doesn't explain opposite responses.", "Correct."]
},
{
  src: "rev4", t: "Smooth Muscle",
  s: `A 52-year-old woman participates in a study of vascular smooth muscle. An experimental compound selectively inhibits myosin light-chain phosphatase (MLCP). Following a brief contractile stimulus, intracellular Ca²⁺ returns toward baseline, but vascular smooth muscle tension remains elevated longer than expected. Which mechanism best explains this observation?`,
  c: ["Inhibition of MLCP slows myosin dephosphorylation, allowing contractile cross-bridges to remain active despite declining intracellular Ca²⁺.", "Inhibition of MLCP accelerates myosin dephosphorylation, reducing ATP consumption and prolonging contraction.", "Inhibition of MLCP prevents calcium from binding to calmodulin, directly increasing myosin ATPase activity.", "Inhibition of MLCP increases calcium extrusion from the cell, which directly phosphorylates myosin regulatory light chains.", "Inhibition of MLCP activates troponin I, preventing tropomyosin from covering actin-binding sites."],
  a: 0,
  e: `Smooth muscle force depends on the balance between MLCK (phosphorylates myosin) and MLCP (dephosphorylates it). Inhibiting MLCP keeps myosin phosphorylated even as Ca²⁺ falls, so tension persists — this is "Ca²⁺ sensitization." Physiologically, the RhoA/Rho-kinase pathway (activated by agonists like angiotensin II) inhibits MLCP in the same way.`,
  w: ["Correct.", "Inhibiting MLCP slows, not speeds, dephosphorylation.", "MLCP has no effect on Ca²⁺–calmodulin binding.", "Ca²⁺ extrusion doesn't phosphorylate myosin.", "Smooth muscle has no troponin."]
},
{
  src: "rev4", t: "Smooth Muscle",
  s: `A 37-year-old man undergoes an intestinal motility study. Electrical recordings show rhythmic slow waves in intestinal smooth muscle. On some cycles, the membrane potential reaches approximately −35 mV, followed by bursts of action potentials and contractions. On other cycles, the slow waves remain below threshold and no corresponding contraction occurs. Which mechanism best explains these findings?`,
  c: ["Every slow wave is an action potential that necessarily produces a maximal contraction.", "Slow waves arise from skeletal-type motor neuron discharges that directly activate troponin.", "Slow waves alter membrane potential, and contractions occur when depolarization reaches threshold and triggers calcium-dependent action potentials.", "Slow waves inhibit voltage-gated calcium channels, and contraction occurs only when the membrane becomes more negative.", "Slow waves directly phosphorylate myosin without altering intracellular calcium."],
  a: 2,
  e: `Slow waves are rhythmic oscillations of membrane potential generated by the interstitial cells of Cajal (pacemakers). They aren't action potentials themselves. When a slow wave depolarizes the membrane past threshold (about −40 to −35 mV), spike potentials fire — carried mainly by Ca²⁺ entering through L-type channels — and contraction follows. Neural and hormonal input changes how often threshold is reached.`,
  w: ["Slow waves aren't action potentials and don't always cause contraction.", "Slow waves come from interstitial cells of Cajal, and smooth muscle has no troponin.", "Correct.", "Depolarization (less negative), not hyperpolarization, opens Ca²⁺ channels.", "Contraction needs a rise in Ca²⁺."]
},
{
  src: "rev4", t: "Smooth Muscle",
  s: `A 28-year-old woman undergoes an experimental study of smooth muscle from the gastrointestinal tract. Investigators observe that the muscle can shorten substantially more than a comparable skeletal muscle fiber. Microscopy shows no regular sarcomeres, but actin filaments are anchored to dense bodies and thick myosin filaments have cross-bridges oriented in opposite directions. Which structural feature best explains the extensive shortening?`,
  c: ["Troponin-mediated movement of tropomyosin allows actin filaments to slide farther than in skeletal muscle.", "Oppositely oriented myosin cross-bridges pull actin filaments in opposite directions, allowing substantial shortening without a sarcomeric arrangement.", "Dense bodies function as calcium storage sites that release calcium continuously during contraction.", "The absence of ATP hydrolysis allows actin and myosin to remain permanently attached while the fiber shortens.", "A highly developed sarcoplasmic reticulum generates sequential contractions along repeating sarcomeres."],
  a: 1,
  e: `Smooth muscle myosin filaments are "side-polar": heads on one side face one direction and heads on the other side face the opposite direction along the whole length. Each thick filament can pull actin filaments (anchored to dense bodies) in opposite directions over its full length, and there are no Z lines to block sliding. This allows smooth muscle to shorten to a much greater fraction of its length than skeletal muscle.`,
  w: ["Smooth muscle has no troponin.", "Correct.", "Dense bodies anchor actin; they don't store Ca²⁺.", "Contraction requires ATP hydrolysis.", "Smooth muscle has a modest SR and no sarcomeres."]
},
{
  src: "rev4", t: "Smooth Muscle",
  s: `A 55-year-old man undergoes an ophthalmologic examination. His pupils respond to autonomic stimulation, and the ciliary muscle adjusts lens accommodation. In an experimental preparation, stimulation of one group of muscle fibers produces a localized response without a propagating contraction throughout the entire muscle sheet. Which physiological property best explains this response?`,
  c: ["Extensive gap junctions synchronize every fiber, producing a single propagating action potential throughout the tissue.", "Spontaneous pacemaker activity initiates rhythmic contraction independently of neural input.", "Calcium binds troponin C, allowing neighboring fibers to contract as a functional syncytium.", "Independent fibers receive autonomic input, permitting precise control without extensive electrical coupling between cells.", "Dense bodies are absent, so force cannot be transmitted between actin and myosin."],
  a: 3,
  e: `The iris and ciliary muscle are multi-unit smooth muscle: each fiber is separately innervated by autonomic nerves and there are few gap junctions, so contraction stays local and can be finely graded — ideal for precise control of pupil size and lens shape.`,
  w: ["That describes single-unit smooth muscle.", "Pacemaker activity is a single-unit feature; multi-unit depends on nerves.", "Smooth muscle has no troponin.", "Correct.", "Dense bodies are present in all smooth muscle."]
},
{
  src: "rev4", t: "Smooth Muscle",
  s: `A 24-year-old man with asthma develops wheezing and expiratory difficulty after exposure to an environmental allergen. He receives an inhaled β₂-adrenergic agonist. Within minutes, his wheezing improves and expiratory airflow increases. Which intracellular response most directly contributes to the relaxation of airway smooth muscle?`,
  c: ["β₂-receptor activation increases cAMP signaling, which reduces calcium-dependent contractile activation and favors smooth muscle relaxation.", "β₂-receptor activation stimulates Gq and increases IP₃-mediated calcium release, producing sustained airway contraction.", "β₂-receptor activation increases MLCK activity, promoting myosin phosphorylation and narrowing the bronchi.", "β₂-receptor activation increases troponin C binding, preventing calcium from entering the sarcoplasm.", "β₂-receptor activation inhibits all myosin dephosphorylation, causing persistent cross-bridge attachment and increased airway caliber."],
  a: 0,
  e: `β₂ receptors are Gs-coupled: adenylyl cyclase → ↑cAMP → protein kinase A. PKA lowers cytosolic Ca²⁺ (more uptake and extrusion, less release) and phosphorylates MLCK, reducing its affinity for Ca²⁺–calmodulin. Less myosin phosphorylation → bronchial smooth muscle relaxes → bronchodilation (e.g., albuterol).`,
  w: ["Correct.", "β₂ is Gs-coupled, not Gq, and causes relaxation.", "PKA inhibits MLCK; bronchi widen.", "Smooth muscle has no troponin.", "Persistent cross-bridge attachment would cause contraction, not wider airways."]
}
);
