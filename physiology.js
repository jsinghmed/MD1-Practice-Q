// MSK Physiology — question data
// Stems and answer choices are kept word for word from "MSK Review Physio 1".
// The correct answer is the one bolded on the answer slide.
// se = explanation listed on the slides (kept as written),
// e  = explanation written for this site (used where the slides give none, or to add context),
// w  = one note per choice (same order as c), fig = figure slides shown with the explanation.

window.PHYSIO_TOPICS = [
  "Neuromuscular Junction",
  "Skeletal Muscle Structure & E-C Coupling",
  "Contraction Mechanics",
  "Energetics & Fiber Types",
  "Exercise Physiology",
  "Smooth Muscle"
];

window.PHYSIO_QUESTIONS = [
{
  t: "Neuromuscular Junction",
  s: `A 35-year-old man is being evaluated for progressive muscle weakness. Nerve conduction studies reveal a normal conduction velocity but a reduced compound muscle action potential (CMAP) amplitude. Repetitive nerve stimulation leads to a decremental response in CMAP amplitude. The physician explains that the disorder affects the neuromuscular junction. Which of the following best describes the normal physiological function of the motor unit?`,
  c: ["A single motor neuron and all the muscle fibers it innervates", "A single muscle fiber and all the neurons that synapse onto it", "The neuromuscular junction and its associated synaptic vesicles", "A group of muscle fibers that contract in response to a single stimulus", "A collection of motor neurons that innervate the same muscle"],
  a: 0,
  se: `The motor unit consists of a single lower motor neuron (alpha motor neuron) and all the muscle fibers it innervates. This structure is critical for coordinated muscle contraction. The reduced CMAP amplitude with a decremental response in repetitive nerve stimulation is characteristic of myasthenia gravis, a disorder of the neuromuscular junction affecting acetylcholine receptor availability.`,
  w: [
    "Correct — one alpha motor neuron plus every fiber it supplies.",
    "Backwards: each skeletal muscle fiber is normally innervated by only one motor neuron.",
    "The NMJ is only the synapse between the neuron and one fiber — part of the motor unit, not the whole unit.",
    "Describes the result of activating a motor unit, but leaves out the neuron that defines it.",
    "That is a motor neuron pool for a muscle, made up of many motor units."
  ],
  fig: ["p002"]
},
{
  t: "Neuromuscular Junction",
  s: `A 24-year-old male medical student volunteers for an experiment where his ulnar nerve is stimulated at increasing intensities while electromyographic (EMG) recordings are taken from the hypothenar muscles. The recordings show that with increasing stimulus intensity, the amplitude of the recorded muscle response increases up to a certain point, beyond which further stimulus increases do not enhance the response. Which of the following best explains this phenomenon?`,
  c: ["Increased firing frequency of individual motor neurons", "Recruitment of additional motor units", "Increased amplitude of individual muscle fiber action potentials", "Increased release of acetylcholine at the neuromuscular junction", "Increased conduction velocity of nerve action potentials"],
  a: 1,
  se: `The phenomenon described is motor unit recruitment, where stronger stimuli activate additional motor units to generate a greater force. As stimulus intensity increases, more motor neurons reach threshold, activating more motor units. Once all available motor units are recruited, further increases in stimulus intensity do not increase muscle response amplitude.`,
  w: [
    "A single stimulus gives one action potential per axon; a stronger stimulus doesn't make each neuron fire more often.",
    "Correct — more axons reach threshold until all motor units are active, then the response plateaus.",
    "Action potentials are all-or-none; each fiber's AP amplitude doesn't grow with stimulus strength.",
    "Each nerve AP releases a roughly fixed amount of ACh; a stronger stimulus to the nerve doesn't increase release per terminal.",
    "Conduction velocity depends on axon diameter and myelination, not stimulus intensity."
  ],
  fig: ["p009"]
},
{
  t: "Neuromuscular Junction",
  s: `A 42-year-old woman presents with progressive weakness that worsens throughout the day. She also reports difficulty chewing and diplopia in the evenings. A bedside test with administration of edrophonium, a short-acting acetylcholinesterase inhibitor, temporarily improves her symptoms. This patient's condition most likely affects which of the following steps of neuromuscular transmission?`,
  c: ["Depolarization of the presynaptic neuron", "Vesicular release of acetylcholine into the synaptic cleft", "Binding of acetylcholine to postsynaptic nicotinic receptors", "Reuptake of acetylcholine into the presynaptic neuron", "Propagation of action potentials along the sarcolemma"],
  a: 2,
  se: `This patient likely has myasthenia gravis (MG), an autoimmune disorder caused by antibodies against postsynaptic nicotinic acetylcholine receptors (nAChRs) at the neuromuscular junction. This results in decreased receptor availability and ineffective neuromuscular transmission, leading to fatigable muscle weakness. The edrophonium test (Tensilon test) temporarily improves symptoms by inhibiting acetylcholinesterase (AChE), increasing the availability of acetylcholine in the synaptic cleft.`,
  w: [
    "Presynaptic depolarization is normal in MG; the nerve works fine.",
    "Reduced ACh release is Lambert–Eaton syndrome (antibodies to presynaptic Ca²⁺ channels), which improves with repeated use rather than worsening.",
    "Correct — anti-nAChR antibodies reduce the receptors ACh can bind.",
    "ACh isn't taken back up intact; it is broken down by AChE and only choline is recycled.",
    "Sarcolemmal conduction is normal; the problem is reaching threshold at the end plate."
  ],
  fig: ["p014", "p015"]
},
{
  t: "Neuromuscular Junction",
  s: `A neurophysiologist is studying the effects of botulinum toxin on neuromuscular transmission. In an experiment, application of the toxin to motor neurons leads to paralysis in the affected muscles. Which of the following best describes the mechanism by which botulinum toxin disrupts neuromuscular function?`,
  c: ["Inhibition of voltage-gated sodium channels in the presynaptic neuron", "Inhibition of acetylcholinesterase in the synaptic cleft", "Blockade of presynaptic calcium influx at the neuromuscular junction", "Competitive antagonism of nicotinic acetylcholine receptors", "Hyperactivation of acetylcholine release causing receptor desensitization"],
  a: 2,
  se: `Botulin toxins
• Are produced by the anaerobic bacteria C. botulinum: ingestion of contaminated food (i.e., caned vegetables), or from a wound infection
• Enter nerve terminals and specifically cleave different proteins (associated with presynaptic membrane and NT vesicles) required for synaptic vesicle exocytosis → ↓ in release of Ach
• Causes weakness and flaccid paralysis of skeletal muscle, respiratory distress (paralysis of respiratory muscles), facial weakness, double vision, difficulties in swallowing or speaking and symptoms that are related to inhibition of cholinergic nerve endings in the ANS
• Useful medical applications
  • Botulinum toxin is used to treat disorders characterized by muscle spasms
  • Injection of a small amount of botulin toxin into the eye muscles of a patient with strabismus (a condition in which both eyes cannot focus on the same object because of abnormal hyperactivity of particular eye muscles) is able to suppress muscle spasms and restore normal vision`,
  key: `The slides bold C. Strictly, botulinum toxin doesn't block Ca²⁺ entry — as the slide's own explanation says, it cleaves SNARE proteins needed for vesicle exocytosis. C is the closest choice because the end result is the same: no ACh release despite a normal nerve action potential.`,
  w: [
    "Na⁺ channel block is tetrodotoxin; the nerve action potential is normal with botulinum.",
    "AChE inhibition (neostigmine, organophosphates) increases ACh and causes cholinergic excess, not flaccid paralysis.",
    "Marked correct (closest choice) — release of ACh from the presynaptic terminal fails.",
    "Competitive nAChR blockade is curare (tubocurarine).",
    "Botulinum decreases release; it doesn't overstimulate."
  ],
  fig: ["p010", "p014"]
},
{
  t: "Skeletal Muscle Structure & E-C Coupling",
  s: `A researcher is studying the structural organization of skeletal muscle. He isolates different components of muscle tissue and analyzes their composition under a microscope. Which of the following correctly matches a muscle structure with its corresponding description?`,
  c: ["Myofiber – A bundle of myofibrils enclosed within a connective tissue sheath", "Myofilament – A bundle of myofibrils surrounded by endomysium", "Myofibril – A bundle of fascicles contained within the perimysium", "Fascicle – A bundle of myofilaments forming the basic contractile unit", "Sarcomere – A bundle of fascicles that functions as a contractile unit"],
  a: 0,
  se: `Myofilaments (Actin & Myosin): The smallest contractile elements that form sarcomeres.
Myofibrils: Cylindrical structures composed of repeating sarcomeres, which allow muscle contraction.
Myofibers (Muscle fibers): Individual muscle cells that contain multiple myofibrils and are enclosed by endomysium.
Fascicles: Bundles of muscle fibers surrounded by perimysium.
Muscle: A collection of fascicles encased in epimysium.`,
  w: [
    "Correct — a muscle fiber (cell) is packed with myofibrils and wrapped in endomysium.",
    "Myofilaments are single protein filaments (actin, myosin), far smaller than myofibrils.",
    "A myofibril is a chain of sarcomeres inside one cell; bundles of fibers in perimysium are fascicles.",
    "A fascicle is a bundle of muscle fibers; the basic contractile unit is the sarcomere.",
    "A sarcomere is the segment from Z disc to Z disc, not a bundle of fascicles."
  ],
  fig: ["p024"]
},
{
  t: "Skeletal Muscle Structure & E-C Coupling",
  s: `A 22-year-old male athlete is undergoing a muscle physiology study. During the experiment, an action potential is generated in a skeletal muscle fiber, leading to contraction. The T-tubules play a crucial role in this process by facilitating which of the following?`,
  c: ["Direct activation of myosin heads for cross-bridge cycling", "Propagation of action potentials into the interior of the muscle fiber", "Release of calcium directly from the T-tubules into the sarcoplasm", "Uptake of calcium from the sarcoplasm into the sarcoplasmic reticulum", "Inhibition of excessive calcium release to prevent muscle fatigue"],
  a: 1,
  se: `The T-tubules (transverse tubules) are invaginations of the sarcolemma that allow rapid conduction of action potentials deep into the muscle fiber. This ensures synchronized activation of the contractile machinery throughout the fiber. The action potential in the T-tubules triggers calcium release from the sarcoplasmic reticulum (SR) via the interaction of voltage-gated dihydropyridine receptors (DHPRs) and ryanodine receptors (RyR1) on the SR membrane.`,
  w: [
    "Myosin heads are activated by ATP hydrolysis once Ca²⁺–troponin exposes binding sites, not by T-tubules.",
    "Correct — T-tubules carry the action potential into the fiber's interior.",
    "Ca²⁺ is released from the sarcoplasmic reticulum (via RyR1), not from the T-tubules.",
    "Ca²⁺ reuptake into the SR is done by the SERCA pump during relaxation.",
    "T-tubules trigger Ca²⁺ release; they don't limit it."
  ],
  fig: ["p028", "p029", "p030"]
},
{
  t: "Skeletal Muscle Structure & E-C Coupling",
  s: `A 27-year-old athlete undergoes a muscle biopsy for research on skeletal muscle physiology. Histological staining reveals well-organized striations due to alternating dark and light bands. These bands correspond to the arrangement of which of the following structures?`,
  c: ["Fascicles and myofibers", "Myofibers and myofibrils", "Actin and myosin myofilaments", "Endomysium and perimysium", "Sarcolemma and sarcoplasm"],
  a: 2,
  se: `The striations seen in skeletal and cardiac muscle result from the regular arrangement of actin (thin) and myosin (thick) myofilaments within sarcomeres. These alternating bands include:
• A band (dark): Contains thick myosin filaments, with some overlap of thin actin filaments.
• I band (light): Contains only thin actin filaments.
• Z disc: Anchors actin filaments and defines the boundary of a sarcomere.
• H zone: The central part of the A band where only myosin is present (disappears during contraction).`,
  w: [
    "Fascicles and fibers are bundles visible at low power; they don't create banding.",
    "Fibers and myofibrils are larger structural levels; the bands come from what's inside the myofibrils.",
    "Correct — overlapping thick and thin filaments create the A and I bands.",
    "These are connective tissue sheaths, not the cause of striations.",
    "Membrane and cytoplasm of the cell — not banded."
  ],
  fig: ["p037"]
},
{
  t: "Skeletal Muscle Structure & E-C Coupling",
  s: `A muscle biopsy from a patient with malignant hyperthermia shows abnormal calcium handling in skeletal muscle fibers. A mutation in which of the following proteins is most likely responsible for excessive calcium release from the sarcoplasmic reticulum in this condition?`,
  c: ["Dihydropyridine receptor (DHPR)", "Ryanodine receptor (RyR1)", "Sodium-potassium ATPase (Na⁺/K⁺ pump)", "Tropomyosin", "Myosin light-chain kinase"],
  a: 1,
  se: `Malignant hyperthermia is a life-threatening condition triggered by inhaled anesthetics (e.g., halothane) or succinylcholine, leading to uncontrolled calcium release from the sarcoplasmic reticulum (SR). The underlying defect is a mutation in the ryanodine receptor type 1 (RyR1), which causes excessive calcium release, sustained muscle contraction, increased ATP consumption, and excessive heat production.`,
  e: `Treatment is dantrolene, which blocks RyR1.`,
  w: [
    "DHPR is the voltage sensor in the T-tubule; it signals RyR1 but is not the release channel (DHPR mutations are a rarer cause).",
    "Correct — the mutant SR Ca²⁺ release channel opens excessively.",
    "The Na⁺/K⁺ pump maintains ion gradients; it isn't the SR release channel.",
    "Tropomyosin regulates actin–myosin binding; it doesn't release Ca²⁺.",
    "MLCK is the key regulator of smooth muscle contraction, not skeletal Ca²⁺ release."
  ]
},
{
  t: "Skeletal Muscle Structure & E-C Coupling",
  s: `A 30-year-old male presents with progressive muscle weakness. A muscle biopsy reveals a defect in the anchoring of actin filaments to the sarcolemma, leading to muscle fiber damage and degeneration. A mutation in which of the following proteins is most likely responsible for this condition?`,
  c: ["Titin", "Nebulin", "Dystrophin", "Myosin light chain", "Troponin C"],
  a: 2,
  se: `Dystrophin is a structural protein that connects actin filaments to the sarcolemma via the dystrophin-glycoprotein complex (DGC). It plays a critical role in stabilizing the muscle cell membrane during contraction. Mutations in the dystrophin gene (DMD) lead to Duchenne muscular dystrophy (DMD) or Becker muscular dystrophy (BMD), which cause progressive muscle degeneration due to repeated contraction-induced damage.`,
  w: [
    "Titin anchors myosin and gives elasticity (Z disc to M line), not actin-to-membrane anchoring.",
    "Nebulin sets thin filament length.",
    "Correct — dystrophin links actin to the sarcolemma/ECM.",
    "Myosin light chains regulate the myosin head.",
    "Troponin C binds Ca²⁺ to regulate contraction."
  ]
},
{
  t: "Skeletal Muscle Structure & E-C Coupling",
  s: `A 25-year-old athlete is undergoing a study on skeletal muscle contraction. Researchers apply an experimental drug that prevents calcium from binding to troponin C. Which of the following immediate effects would be expected on the actin-myosin interaction?`,
  c: ["Increased ATP hydrolysis by myosin heads", "Inability of myosin to bind to actin filaments", "Increased cross-bridge cycling and force generation", "Unregulated myosin-actin interaction leading to sustained contraction", "Enhanced calcium release from the sarcoplasmic reticulum"],
  a: 1,
  se: `In skeletal muscle contraction, calcium binds to troponin C, inducing a conformational change that shifts tropomyosin away from myosin-binding sites on actin. This allows cross-bridge formation and muscle contraction. If calcium cannot bind to troponin C, tropomyosin remains in place, blocking myosin from binding to actin, preventing contraction.`,
  w: [
    "Without actin binding, cross-bridge cycling (and its ATP use) doesn't increase.",
    "Correct — tropomyosin stays over the binding sites.",
    "Cycling and force fall, not rise.",
    "The binding sites stay blocked; there's no unregulated interaction.",
    "SR release is upstream of troponin and isn't enhanced by this drug."
  ],
  fig: ["p045"]
},
{
  t: "Skeletal Muscle Structure & E-C Coupling",
  s: `A 28-year-old professional sprinter undergoes a muscle biopsy for research on skeletal muscle elasticity. Analysis of his muscle fibers reveals a protein that extends from the Z disc to the M line, providing passive tension and structural support to the sarcomere. Which of the following proteins is most likely responsible for these functions?`,
  c: ["Nebulin", "Dystrophin", "Tropomyosin", "Titin", "Myosin-binding protein C"],
  a: 3,
  se: `Titin is the largest known protein and extends from the Z disc to the M line within the sarcomere. It plays two key roles:
1. Structural support – Anchoring myosin within the sarcomere.
2. Elasticity – Providing passive tension, which helps muscles return to their resting length after contraction.`,
  w: [
    "Nebulin runs along the thin filament, setting its length.",
    "Dystrophin anchors actin to the sarcolemma.",
    "Tropomyosin lies along actin and covers the myosin-binding sites.",
    "Correct — the elastic Z-disc-to-M-line spring.",
    "Myosin-binding protein C sits on the thick filament (C-zone) and modulates cross-bridges; it doesn't span Z to M."
  ],
  fig: ["p041"]
},
{
  t: "Skeletal Muscle Structure & E-C Coupling",
  s: `A 5-year-old boy is diagnosed with a congenital myopathy characterized by abnormally short actin filaments and impaired force generation. A mutation in which of the following proteins is most likely responsible for this condition?`,
  c: ["Titin", "Nebulin", "Troponin C", "Desmin", "Myosin heavy chain"],
  a: 1,
  se: `Nebulin is an actin-binding protein that extends along the length of the thin filament and regulates actin filament assembly. It plays a crucial role in:
1. Determining thin filament length – Ensuring uniform actin filaments for optimal force generation.
2. Stabilizing actin filaments – Providing structural support within the sarcomere.
Mutations in nebulin cause nemaline myopathy, a congenital muscle disorder characterized by abnormally short or disorganized thin filaments, leading to muscle weakness.`,
  w: [
    "Titin relates to the thick filament and elasticity.",
    "Correct — the molecular ruler of the thin filament.",
    "Troponin C binds Ca²⁺; it doesn't set filament length.",
    "Desmin is an intermediate filament linking myofibrils at the Z discs.",
    "Myosin heavy chain is the thick filament motor."
  ],
  fig: ["p052"]
},
{
  t: "Skeletal Muscle Structure & E-C Coupling",
  s: `A researcher is studying the contraction cycle in skeletal muscle. After calcium binds to troponin C, which of the following events occurs next to allow muscle contraction?`,
  c: ["Detachment of myosin from actin", "Hydrolysis of ATP to reset the myosin head", "Displacement of tropomyosin to expose myosin-binding sites on actin", "Depolarization of the sarcolemma via sodium influx", "Reuptake of calcium into the sarcoplasmic reticulum"],
  a: 2,
  se: `When calcium binds to troponin C, it induces a conformational change in troponin, which moves tropomyosin away from the myosin-binding sites on actin. This allows myosin to bind to actin, initiating the cross-bridge cycle and muscle contraction.`,
  w: [
    "Detachment needs ATP binding and comes later in the cycle.",
    "ATP hydrolysis cocks the head, but binding sites must first be exposed.",
    "Correct — tropomyosin shifts, exposing the sites.",
    "Sarcolemmal depolarization happens before Ca²⁺ is released.",
    "Ca²⁺ reuptake ends contraction (relaxation)."
  ],
  fig: ["p056"]
},
{
  t: "Skeletal Muscle Structure & E-C Coupling",
  s: `During muscle contraction, which of the following proteins directly facilitates the power stroke by hydrolyzing ATP and generating force?`,
  c: ["Actin", "Myosin heavy chain", "Troponin T", "Tropomyosin", "Nebulin"],
  a: 1,
  se: `The myosin heavy chain contains the myosin ATPase site, which hydrolyzes ATP to provide energy for the power stroke. During contraction, myosin binds to actin, undergoes a conformational change, and pulls actin filaments toward the center of the sarcomere, shortening the muscle fiber.`,
  w: [
    "Actin is the track myosin pulls on; it has no motor ATPase role here.",
    "Correct — the head of the heavy chain is the ATPase motor.",
    "Troponin T anchors the troponin complex to tropomyosin.",
    "Tropomyosin regulates access to binding sites.",
    "Nebulin sets thin filament length."
  ],
  fig: ["p060", "p062", "p061"]
},
{
  t: "Neuromuscular Junction",
  s: `A 65-year-old male with myasthenia gravis experiences muscle weakness and fatigue. This autoimmune disorder involves the destruction of nicotinic acetylcholine receptors at the neuromuscular junction. Which of the following drugs would MOST likely improve his symptoms?`,
  c: ["ω-Conotoxin", "Dendrotoxin", "Neostigmine", "Botulinum toxin", "Tetrodotoxin (TTX)"],
  a: 2,
  se: `Neostigmine is an acetylcholinesterase inhibitor. By inhibiting the breakdown of acetylcholine (ACh), it increases the availability of ACh at the neuromuscular junction, compensating for the reduced number of functional receptors in myasthenia gravis.
ω-Conotoxin: Blocks Ca++ channels, inhibiting neurotransmitter release, worsening myasthenia gravis.
Dendrotoxin: Blocks K+ channels, potentially causing hyperexcitability, but not addressing the core problem of receptor loss.
Botulinum toxin: Prevents ACh release, causing paralysis, contraindicated in myasthenia gravis.
Tetrodotoxin (TTX): Blocks Na+ channels, inhibiting action potentials and worsening muscle weakness.`,
  w: [
    "Blocks presynaptic Ca²⁺ channels → less ACh release → worse weakness.",
    "Blocks K⁺ channels → hyperexcitability, but doesn't fix receptor loss.",
    "Correct — more ACh in the cleft to use the remaining receptors.",
    "Prevents ACh release → paralysis; contraindicated.",
    "Blocks Na⁺ channels → no action potentials → worse weakness."
  ],
  fig: ["p074"]
},
{
  t: "Neuromuscular Junction",
  s: `Which of the following toxins directly interferes with the release of acetylcholine (ACh) from the presynaptic neuron?`,
  c: ["Curare", "α-Bungarotoxin", "Botulinum toxin", "Neostigmine", "Nicotine"],
  a: 2,
  e: `Botulinum toxin enters the motor nerve terminal and cleaves SNARE proteins needed for synaptic vesicle fusion, so ACh can't be released — giving flaccid paralysis. Every other choice acts after release, at the receptor or in the cleft.`,
  w: [
    "Curare competitively blocks postsynaptic nicotinic receptors.",
    "α-Bungarotoxin binds postsynaptic nicotinic receptors almost irreversibly.",
    "Correct — presynaptic; stops vesicle exocytosis.",
    "Neostigmine inhibits AChE in the cleft (increases ACh).",
    "Nicotine is a nicotinic receptor agonist."
  ],
  fig: ["p074"]
},
{
  t: "Neuromuscular Junction",
  s: `A researcher is studying the effects of a new drug on neuromuscular transmission. They observe that the drug causes muscle paralysis, but does not prevent the release of acetylcholine from the presynaptic neuron. Which of the following is the MOST likely mechanism of action of this drug?`,
  c: ["Inhibition of acetylcholinesterase", "Blockade of voltage-gated Ca++ channels in the presynaptic neuron", "Blockade of nicotinic acetylcholine receptors on the postsynaptic cell", "Enhancement of acetylcholine release", "Blockade of K+ channels in the presynaptic neuron"],
  a: 2,
  e: `If ACh is still released but the muscle is paralyzed, the block must be postsynaptic: ACh can't act on the end plate because the nicotinic receptors are blocked (as with curare or α-bungarotoxin). No end-plate potential means no muscle action potential.`,
  w: [
    "AChE inhibition increases ACh; it improves (or with large doses, depolarizes) rather than causing this kind of block.",
    "Ca²⁺ channel blockade would prevent ACh release — ruled out by the stem.",
    "Correct — release is normal, receptors are blocked.",
    "More ACh release would enhance transmission, not paralyze.",
    "K⁺ channel block prolongs the presynaptic AP and increases release."
  ],
  fig: ["p074"]
},
{
  t: "Neuromuscular Junction",
  s: `Which of the following best describes the effect of curare on neuromuscular transmission?`,
  c: ["It prevents the release of acetylcholine from the presynaptic neuron.", "It blocks the nicotinic acetylcholine receptors on the postsynaptic cell.", "It inhibits the breakdown of acetylcholine in the synaptic cleft.", "It enhances the release of acetylcholine from the presynaptic neuron.", "It increases the sensitivity of the postsynaptic cell to acetylcholine."],
  a: 1,
  e: `Curare (d-tubocurarine) is a competitive antagonist at the postsynaptic nicotinic ACh receptor. It occupies the receptor without opening it, so the end-plate potential shrinks below threshold and the muscle is paralyzed. Because the block is competitive, an AChE inhibitor such as neostigmine can reverse it by raising ACh levels.`,
  w: [
    "Preventing release is botulinum toxin (or Ca²⁺ channel blockers).",
    "Correct — competitive nAChR antagonist.",
    "Inhibiting ACh breakdown is an AChE inhibitor (neostigmine).",
    "Curare doesn't affect release.",
    "It decreases, not increases, the end plate's response to ACh."
  ],
  fig: ["p074"]
},
{
  t: "Neuromuscular Junction",
  s: `Which of the following structures is directly responsible for the breakdown of acetylcholine in the synaptic cleft?`,
  c: ["Acetylcholine receptor", "Acetylcholinesterase", "Choline transporter", "Synaptic vesicle", "Voltage-gated Ca++ channel"],
  a: 1,
  e: `Acetylcholinesterase, anchored in the basal lamina of the synaptic cleft, rapidly hydrolyzes ACh into choline and acetate. This ends each signal; the choline is then taken back into the nerve terminal to make new ACh.`,
  w: [
    "The receptor binds ACh to open its channel; it doesn't degrade it.",
    "Correct — hydrolyzes ACh in the cleft.",
    "The choline transporter recycles choline after breakdown.",
    "Vesicles store and release ACh.",
    "Ca²⁺ channels trigger release."
  ],
  fig: ["p074"]
},
{
  t: "Contraction Mechanics",
  s: `A researcher is studying muscle contraction by stimulating an isolated skeletal muscle while keeping its length constant. Despite generating active tension, no visible shortening occurs. Which of the following best describes this type of contraction?`,
  c: ["Isotonic concentric contraction", "Isotonic eccentric contraction", "Isometric contraction", "Tetanic contraction", "Fibrillation"],
  a: 2,
  se: `In isometric contraction, muscle tension is generated without a change in muscle length. This occurs when the force produced by the muscle matches the opposing load, preventing movement. Examples include holding a weight in a fixed position or pushing against an immovable object.`,
  w: [
    "Concentric = shortening under load.",
    "Eccentric = lengthening under load.",
    "Correct — tension without length change.",
    "Tetanic describes stimulation frequency (sustained summation), not whether length changes.",
    "Fibrillation is uncoordinated spontaneous contraction of individual fibers (e.g., after denervation)."
  ],
  fig: ["p081"]
},
{
  t: "Contraction Mechanics",
  s: `A 30-year-old weightlifter is performing biceps curls. As he lowers the dumbbell in a controlled manner, his biceps muscle is actively contracting while lengthening. Which of the following best describes this type of contraction?`,
  c: ["Isometric contraction", "Isotonic concentric contraction", "Isotonic eccentric contraction", "Fused tetanic contraction", "Isokinetic contraction"],
  a: 2,
  se: `In an isotonic eccentric contraction, the muscle generates force while lengthening under load. This occurs when the external force exceeds the force generated by the muscle, such as when lowering a dumbbell in a controlled manner. Eccentric contractions are important for deceleration and are associated with greater force generation but also higher risk of muscle damage and soreness

Isotonic concentric contraction, the muscle shortens while generating force (e.g., lifting the dumbbell up).`,
  w: [
    "Isometric = no change in length (holding the dumbbell still).",
    "Concentric = shortening (lifting the dumbbell up).",
    "Correct — active lengthening.",
    "Fused tetany describes stimulation frequency, not direction of length change.",
    "Isokinetic = constant velocity, usually on a special machine."
  ],
  fig: ["p081"]
},
{
  t: "Contraction Mechanics",
  s: `A 25-year-old male is participating in an exercise program that involves maximal effort lifting. He asks about the mechanics of muscle contraction during rapid lifting. Which of the following statements about the force-velocity relationship in muscle contraction is correct?`,
  c: ["The force generated by the muscle increases as the velocity of contraction increases.", "The muscle generates the most force when it contracts at maximal velocity.", "At low velocities of contraction, the muscle is able to generate more force.", "At higher velocities of contraction, the muscle is able to generate more force due to the greater recruitment of motor units."],
  a: 2,
  se: `According to the force-velocity relationship, muscle force decreases as the velocity of contraction increases. When the muscle contracts at a slower velocity (e.g., during a heavy lift), it can generate more force because the actin and myosin filaments have more time to interact, allowing for greater force production. Conversely, during rapid contractions (higher velocities), the muscle cannot generate as much force due to the reduced time for cross-bridge formation between actin and myosin.`,
  w: [
    "Reversed — force falls as velocity rises.",
    "At maximal velocity the load (force) is near zero.",
    "Correct — slow contraction allows more attached cross-bridges.",
    "Recruitment doesn't reverse the curve; higher velocity still means less force."
  ],
  fig: ["p088"]
},
{
  t: "Contraction Mechanics",
  s: `A 40-year-old man is studying muscle physiology and asks about how velocity of contraction affects muscle force. He is particularly interested in concentric contractions. Which of the following best describes the relationship between force and velocity during a concentric contraction?`,
  c: ["As velocity increases, the force generated by the muscle increases.", "The force generated by the muscle is independent of contraction velocity.", "Maximum force is produced at the highest contraction velocity.", "Force decreases as the velocity of contraction increases."],
  a: 3,
  se: `During concentric contractions, the force produced by the muscle decreases as the velocity of contraction increases. This is due to the reduced time for the cross-bridge cycle between actin and myosin filaments. At higher velocities, there is less time for the filaments to interact, leading to a decrease in force production. At slower velocities, the muscle can generate greater force because there is more time for these interactions to occur.`,
  w: [
    "Reversed relationship.",
    "Force clearly depends on velocity — that's the force-velocity curve.",
    "Maximum force occurs at zero velocity (isometric); maximum velocity occurs at zero load.",
    "Correct — inverse (hyperbolic) relationship."
  ],
  fig: ["p088"]
},
{
  t: "Contraction Mechanics",
  s: `A 30-year-old male athlete is training for strength and asks about the differences between active and passive tension in muscle contraction. Which of the following statements best describes the origin of passive tension in a muscle?`,
  c: ["Passive tension results from the active cross-bridge cycling between actin and myosin filaments.", "Passive tension occurs due to the stretching of the muscle and the resistance of its connective tissue structures.", "Passive tension is maximal when the muscle is at its shortest length.", "Passive tension is generated when the muscle is contracted against a load."],
  a: 1,
  se: `Passive tension arises when a muscle is stretched beyond its resting length and is due to the elastic properties of the muscle's connective tissues, including tendons and the extracellular matrix. This tension is independent of active contraction and increases with the degree of stretch. Active tension, on the other hand, is generated through cross-bridge cycling between actin and myosin filaments, which requires ATP.`,
  e: `Titin, the elastic sarcomere protein, is also a major source of passive tension inside the fiber.`,
  w: [
    "That describes active tension.",
    "Correct — elastic resistance to stretch.",
    "Passive tension is near zero at short lengths and rises with stretch.",
    "Contracting against a load generates active tension."
  ],
  fig: ["p096"]
},
{
  t: "Contraction Mechanics",
  s: `A 22-year-old male is studying the physiological aspects of muscle contraction. He wonders how active tension compares to passive tension at different muscle lengths. Which of the following statements is correct regarding active and passive tension?`,
  c: ["Active tension is greatest when the muscle is at its maximal length, while passive tension is minimal at this point.", "Active tension is maximal when the muscle is at its optimal length for cross-bridge formation, while passive tension increases as the muscle is stretched.", "Passive tension and active tension are the same at all muscle lengths.", "Active tension increases as the muscle is stretched, while passive tension decreases."],
  a: 1,
  se: `Active tension is greatest at the muscle's optimal length, where actin and myosin overlap in a way that allows for the most efficient cross-bridge formation. Beyond this length, active tension decreases due to reduced overlap of filaments. On the other hand, passive tension increases as the muscle is stretched because of the elastic resistance provided by the muscle's connective tissue structures. Passive tension does not depend on cross-bridge cycling and increases as the muscle lengthens beyond its resting state.`,
  w: [
    "At maximal length, filament overlap is poor (low active tension) and passive tension is highest.",
    "Correct — the length–tension curve.",
    "They follow completely different curves.",
    "Beyond optimal length active tension falls while passive tension rises."
  ],
  fig: ["p096", "p097"]
},
{
  t: "Energetics & Fiber Types",
  s: `A 25-year-old male is training for a marathon. During a long run, his muscles primarily utilize which of the following energy sources for ATP production after the initial depletion of readily available ATP?`,
  c: ["Creatine phosphate", "Stored muscle glycogen", "Blood glucose", "Fatty acids", "Amino acids"],
  a: 1,
  se: `During contraction, muscle glycogen is broken down into glucose, which fuels glycolysis and ultimately ATP production. This is the primary source of energy for muscles during sustained activity like running a marathon, especially in the initial stages.

Creatine phosphate: Provides a very rapid, short-lived source of ATP, primarily used in the initial seconds of activity (not for sustained runs).

Blood glucose: While blood glucose contributes, the figure shows that muscle glycogen is the primary source during contraction.

Fatty acids: Become a significant source of ATP during prolonged, lower-intensity exercise (not the primary source during a marathon).

Amino acids: Are a less preferred source of energy during exercise and are generally used in minimal amounts compared to carbohydrates and fats.`,
  w: [
    "Lasts only seconds.",
    "Correct (per the slides) — the main fuel once ATP and CP are used up.",
    "Contributes, but less than muscle glycogen.",
    "Increase with prolonged, lower-intensity work.",
    "Minor fuel during exercise."
  ],
  fig: ["p104"]
},
{
  t: "Energetics & Fiber Types",
  s: `Which of the following processes is directly coupled to the movement of calcium ions (Ca2+) from the sarcoplasmic reticulum into the sarcoplasm during muscle contraction?`,
  c: ["ATP hydrolysis by myosin ATPase (Step 1 in the figure)", "ATP production from glycolysis (Step 3c)", "Creatine phosphate breakdown by creatine kinase (Step 3a)", "Oxidative phosphorylation (Step 3b)", "Conversion of pyruvate to lactate"],
  a: 0,
  se: `Muscle contraction is directly linked to the splitting of ATP by myosin ATPase. This provides the energy for the myosin head to bind to actin and initiate the cross-bridge cycle, leading to muscle contraction. Calcium release from the sarcoplasmic reticulum into the sarcoplasm is what initiates this entire process, allowing for the binding of calcium to troponin, which in turn allows for the myosin-actin interaction.`,
  key: `Answer per the slides (bolded A). Note that Ca²⁺ release from the SR is passive (through RyR1) and needs no ATP; the idea here is that the released Ca²⁺ is what switches on the myosin-ATPase cross-bridge cycle. The step that uses ATP to move Ca²⁺ is the SERCA pump taking it back into the SR during relaxation.`,
  w: [
    "Marked correct — Ca²⁺ release is what triggers myosin ATPase activity.",
    "Glycolysis regenerates ATP; it isn't linked to Ca²⁺ release.",
    "Creatine kinase rebuilds ATP from creatine phosphate.",
    "Oxidative phosphorylation supplies ATP in the mitochondria.",
    "Pyruvate→lactate regenerates NAD⁺ for anaerobic glycolysis."
  ],
  fig: ["p104"]
},
{
  t: "Energetics & Fiber Types",
  s: `A 28-year-old runner is training for a marathon and is interested in the muscle types involved in endurance activities. Which of the following characteristics is most typical of slow-twitch muscle fibers?`,
  c: ["High fatigue resistance and high force production.", "Rapid contraction and low fatigue resistance.", "Low fatigue resistance and high power output.", "High fatigue resistance and a high number of mitochondria."],
  a: 3,
  se: `Slow-twitch muscle fibers (Type I) are specialized for endurance activities and are characterized by high fatigue resistance. They have a large number of mitochondria, which provide ATP through aerobic metabolism, allowing them to sustain prolonged contractions. These fibers generate less force and power compared to fast-twitch fibers, but they are well-suited for activities like long-distance running or maintaining posture.`,
  w: [
    "Half right — fatigue resistant, but they produce low force.",
    "Describes fast-twitch fibers.",
    "Describes fast-twitch glycolytic fibers.",
    "Correct — aerobic, many mitochondria, fatigue resistant."
  ],
  fig: ["p111", "p112"]
},
{
  t: "Energetics & Fiber Types",
  s: `A 35-year-old weightlifter is focusing on increasing his strength and power. Which of the following characteristics is most typical of fast-twitch muscle fibers?`,
  c: ["Low power output and low force generation.", "High force production and rapid contraction, but low fatigue resistance.", "High number of mitochondria and high aerobic capacity.", "Slow contraction speed with a high resistance to fatigue."],
  a: 1,
  se: `Fast-twitch muscle fibers (Type II) are specialized for short bursts of strength and power, such as during weightlifting or sprinting. These fibers contract rapidly and generate high force but fatigue quickly because they rely primarily on anaerobic metabolism (via glycolysis) for ATP production. They have fewer mitochondria compared to slow-twitch fibers and are less efficient in terms of sustained energy production, which contributes to their lower resistance to fatigue.`,
  w: [
    "Fast-twitch fibers have high power and force.",
    "Correct — fast, strong, fatigable.",
    "Describes slow-twitch (type I) fibers.",
    "Describes slow-twitch fibers."
  ],
  fig: ["p089", "p112"]
},
{
  t: "Contraction Mechanics",
  s: `A 30-year-old man is learning about muscle physiology and asks about the phases of a muscle twitch. Which of the following best describes the phase of muscle contraction where the tension begins to rise as the muscle responds to the action potential, but before any shortening occurs?`,
  c: ["Relaxation phase", "Latent period", "Contraction phase", "Summation phase"],
  a: 1,
  se: `The latent period is the brief period of time after the stimulus is applied and before the muscle begins to generate tension. During this phase, the muscle is not yet contracting but is undergoing physiological processes such as the release of calcium ions from the sarcoplasmic reticulum and the activation of cross-bridges between actin and myosin. This phase does not involve any visible shortening of the muscle but is critical for the initiation of contraction.`,
  w: [
    "Relaxation is when tension falls after the peak.",
    "Correct — the delay for excitation-contraction coupling.",
    "The contraction phase is when tension rises to its peak and the muscle shortens.",
    "Summation is the build-up of force from repeated stimuli, not a phase of one twitch."
  ],
  fig: ["p119", "p120"]
},
{
  t: "Contraction Mechanics",
  s: `A 45-year-old man is performing an experiment on muscle twitch characteristics. After a single action potential, the muscle generates tension that peaks and then starts to decrease as the muscle relaxes. Which phase of the muscle twitch is responsible for the peak development of tension?`,
  c: ["Latent period", "Relaxation phase", "Contraction phase", "Refractory period"],
  a: 2,
  se: `The contraction phase is the period during which the muscle generates maximal tension. After the latent period, when the excitation-contraction coupling occurs, the muscle fibers shorten as actin and myosin filaments interact, and the muscle develops force. This phase is characterized by the actual shortening of the muscle and peak tension development. After the contraction phase, the relaxation phase occurs, where the tension decreases and the muscle returns to its resting length.`,
  w: [
    "No measurable tension yet.",
    "Tension is declining as Ca²⁺ is pumped back into the SR.",
    "Correct — tension rises to its peak.",
    "The refractory period is an electrical property of the membrane; it's very short in skeletal muscle and not part of the tension curve."
  ],
  fig: ["p120"]
},
{
  t: "Contraction Mechanics",
  s: `A 30-year-old man is studying muscle contraction and asks about the effect of increasing the frequency of action potentials on muscle tension. Which of the following best describes the phenomenon that occurs when multiple action potentials are delivered to a muscle in rapid succession, causing an increase in muscle tension without complete relaxation between stimuli?`,
  c: ["Single twitch", "Wave summation", "Fused tetany", "Unfused tetany"],
  a: 1,
  se: `Wave summation occurs when multiple action potentials are delivered to a muscle before it has completely relaxed from a previous contraction. This results in a progressive increase in muscle tension because the muscle fibers are stimulated more frequently, leading to a greater force of contraction. If the frequency is high enough, the muscle may not relax between stimuli, leading to tetanus (fused or unfused, depending on the frequency).`,
  w: [
    "A twitch is the response to one action potential.",
    "Correct — stimuli add before relaxation is complete.",
    "Fused tetany is the smooth maximal plateau with no relaxation at all.",
    "Unfused tetany is a sustained, wavy contraction at higher frequency — the next step beyond basic summation."
  ],
  fig: ["p127"]
},
{
  t: "Contraction Mechanics",
  s: `A 40-year-old weightlifter is working on maximal force generation. He notices that his muscle tension reaches a plateau and does not increase despite further increases in stimulus frequency. This plateau of maximal contraction is most likely due to which of the following?`,
  c: ["Single twitch", "Wave summation", "Fused tetany", "Unfused tetany"],
  a: 2,
  se: `Fused tetany occurs when the muscle is stimulated at a high frequency such that the muscle does not have time to relax between action potentials. This results in a continuous, maximal contraction without any fluctuation in tension, leading to a plateau in force generation. At this point, the muscle reaches its maximum possible tension, and further increases in stimulus frequency do not lead to a stronger contraction.`,
  w: [
    "A single twitch is far below maximal force.",
    "Summation still rises with frequency; it hasn't plateaued.",
    "Correct — smooth, maximal plateau.",
    "Unfused tetany still has partial relaxation and can rise with more frequency."
  ],
  fig: ["p127"]
},
{
  t: "Exercise Physiology",
  s: `A 30-year-old man engages in prolonged aerobic exercise. Which of the following is the primary cardiovascular adaptation during sustained exercise to meet the increased oxygen demand?`,
  c: ["Decreased cardiac output and stroke volume.", "Increased heart rate and stroke volume.", "Decreased venous return and peripheral resistance.", "Increased systemic vascular resistance and heart rate."],
  a: 1,
  e: `During exercise, sympathetic activity raises heart rate and contractility, and increased venous return (from the muscle pump and venoconstriction) raises stroke volume. Since cardiac output = HR × SV, output can rise several-fold to deliver more O₂ to working muscle. At the same time, metabolic vasodilation in active muscle lowers total peripheral resistance.`,
  w: [
    "Both rise during exercise.",
    "Correct — CO = HR × SV both increase.",
    "Venous return increases; resistance falls but venous return doesn't.",
    "Systemic vascular resistance falls because exercising muscle vasodilates."
  ],
  fig: ["p132", "p133"]
},
{
  t: "Exercise Physiology",
  s: `A 25-year-old woman is performing moderate-intensity exercise. Which of the following respiratory changes occurs as a result of prolonged exercise to meet the increased oxygen demand?`,
  c: ["Decreased tidal volume and increased respiratory rate.", "Increased tidal volume and decreased respiratory rate.", "Increased tidal volume and increased respiratory rate.", "Decreased tidal volume and respiratory rate."],
  a: 2,
  e: `Minute ventilation = tidal volume × respiratory rate. During exercise both rise: tidal volume increases first (deeper breaths), then rate increases as intensity goes up. This boosts O₂ intake and CO₂ removal to match higher metabolism.`,
  w: [
    "Tidal volume increases, not decreases.",
    "Rate increases, not decreases.",
    "Correct — deeper and faster breathing.",
    "Both increase."
  ],
  fig: ["p133"]
},
{
  t: "Exercise Physiology",
  s: `A 35-year-old man completes a high-intensity workout and experiences an increased oxygen consumption following exercise. Which of the following best explains the physiological basis for excess post-exercise oxygen consumption (EPOC)?`,
  c: ["EPOC is primarily due to the need to replenish ATP and creatine phosphate stores in the muscles.", "EPOC results from the direct re-synthesis of glycogen in the liver and muscles.", "EPOC is caused by increased carbon dioxide production during muscle recovery.", "EPOC is due to decreased oxygen availability in the bloodstream following exercise."],
  a: 0,
  se: `Excess post-exercise oxygen consumption (EPOC) refers to the increased rate of oxygen intake following exercise, which occurs as the body works to return to its resting state. One of the primary contributors to EPOC is the need to replenish ATP and creatine phosphate stores in the muscles that were depleted during exercise. Additionally, EPOC facilitates the removal of metabolic byproducts, such as lactate, and supports elevated heart rate and breathing rate during recovery.`,
  w: [
    "Correct — rebuilding ATP/CP stores is a main driver.",
    "Glycogen resynthesis takes hours to days and isn't the main cause of EPOC.",
    "CO₂ is a product of metabolism; it doesn't cause the extra O₂ uptake.",
    "Blood O₂ availability isn't decreased after exercise."
  ],
  fig: ["p140"]
},
{
  t: "Exercise Physiology",
  s: `A 28-year-old woman performs an intense anaerobic workout. Which of the following best describes the role of EPOC following this type of exercise?`,
  c: ["EPOC is minimal because anaerobic exercise does not require a significant increase in oxygen consumption post-exercise.", "EPOC occurs due to increased oxygen consumption required for the clearance of lactate produced during anaerobic metabolism.", "EPOC results from the immediate replenishment of oxygen stores in the blood and muscle tissues.", "EPOC is primarily related to the restoration of the oxygen debt accumulated during aerobic exercise."],
  a: 1,
  se: `After intense anaerobic exercise, the body enters EPOC due to the need to clear lactate that accumulates during anaerobic metabolism. This lactate is converted back into glucose or used as a fuel source, processes that require oxygen. The increased oxygen consumption during the recovery period facilitates the removal of lactate and the restoration of metabolic processes, such as the resynthesis of ATP and creatine phosphate. EPOC following anaerobic exercise is generally more pronounced than after aerobic exercise because of the accumulation of lactate and the higher metabolic demands of recovery.`,
  w: [
    "EPOC is larger, not minimal, after anaerobic work.",
    "Correct — O₂ is needed to clear lactate (Cori cycle/oxidation).",
    "Refilling myoglobin/blood O₂ is a small, fast part of EPOC, not its main role here.",
    "The workout was anaerobic; the oxygen debt mainly reflects that anaerobic work."
  ],
  fig: ["p140"]
},
{
  t: "Smooth Muscle",
  s: `A 40-year-old woman is studying smooth muscle physiology and asks about the role of dense bodies in smooth muscle contraction. Which of the following statements best describes the function of dense bodies in smooth muscle cells?`,
  c: ["Dense bodies anchor actin filaments and transmit force during muscle contraction.", "Dense bodies serve as storage sites for calcium ions during muscle contraction.", "Dense bodies store glycogen for energy production during contraction.", "Dense bodies are responsible for the release of acetylcholine in smooth muscle."],
  a: 0,
  e: `Dense bodies are smooth muscle's equivalent of Z discs. They contain α-actinin, anchor thin (actin) filaments, and are linked by intermediate filaments (desmin) into a network; some attach to the cell membrane. When myosin pulls on the actin, force is passed through the dense bodies, and the cell shortens and twists like a corkscrew.`,
  w: [
    "Correct — they anchor actin and transmit force (like Z discs).",
    "Ca²⁺ is stored in the sarcoplasmic reticulum.",
    "Glycogen is stored as cytoplasmic granules.",
    "ACh is released from autonomic nerve varicosities, not dense bodies."
  ],
  fig: ["p145"]
},
{
  t: "Smooth Muscle",
  s: `A 50-year-old man is learning about the differences between skeletal, cardiac, and smooth muscle. In which way is the structure of dense bodies in smooth muscle most distinct compared to Z-discs in skeletal muscle?`,
  c: ["Dense bodies are located in the sarcoplasmic reticulum, while Z-discs are found in the plasma membrane.", "Dense bodies anchor actin filaments to the plasma membrane, whereas Z-discs anchor actin filaments to other actin filaments.", "Dense bodies contain myosin filaments, whereas Z-discs anchor only actin filaments.", "Dense bodies are involved in calcium storage, whereas Z-discs are not."],
  a: 1,
  e: `Z discs are aligned in a regular sarcomere pattern and link the thin filaments of neighbouring sarcomeres to each other. Smooth muscle has no sarcomeres: some dense bodies sit in the cytoplasm, and many attach to the plasma membrane (dense plaques), so the contractile network pulls directly on the cell membrane. That membrane anchoring is the key structural difference.`,
  w: [
    "Neither sits in the SR; Z discs are in the myofibrils, not the plasma membrane.",
    "Correct (per key) — dense bodies/plaques tie actin to the membrane; Z discs join actin filaments of adjacent sarcomeres.",
    "Dense bodies anchor actin, not myosin.",
    "Neither stores Ca²⁺; the SR does."
  ],
  fig: ["p145"]
},
{
  t: "Smooth Muscle",
  s: `A 45-year-old woman with hypertension is being treated with medication that reduces smooth muscle tone. She asks about the "latch state" in smooth muscle. Which of the following best describes the latch state in smooth muscle contraction?`,
  c: ["The latch state occurs when myosin heads remain attached to actin filaments, generating tension without consuming ATP.", "The latch state is characterized by rapid detachment of myosin heads from actin filaments, allowing for sustained contraction.", "The latch state is associated with an increased rate of ATP hydrolysis, resulting in smooth muscle relaxation.", "The latch state occurs during the initial phase of muscle contraction, contributing to rapid shortening."],
  a: 0,
  se: `The latch state in smooth muscle occurs when myosin heads remain attached to actin filaments for extended periods, generating sustained tension without the continuous need for ATP hydrolysis. This allows smooth muscle to maintain a prolonged contraction with low energy consumption, which is particularly important in maintaining vascular tone (e.g., in blood vessels) without exhausting ATP resources. This feature contributes to the efficiency of smooth muscle in processes requiring sustained contraction.`,
  e: `Mechanism: myosin light-chain phosphatase dephosphorylates myosin while it is still attached to actin, so the cross-bridge detaches very slowly.`,
  w: [
    "Correct — attached, slowly cycling cross-bridges hold tension cheaply.",
    "Latch is slow detachment, not rapid.",
    "Latch lowers ATP use and maintains tone rather than relaxing it.",
    "Latch is a sustained, later phase, not the initial rapid shortening."
  ],
  fig: ["p149"]
},
{
  t: "Smooth Muscle",
  s: `A 40-year-old man is learning about smooth muscle physiology and asks about the types of smooth muscle units. Which of the following best describes multi-unit smooth muscle?`,
  c: ["Multi-unit smooth muscle is composed of individual muscle fibers that contract independently and are not synchronized.", "Multi-unit smooth muscle fibers are electrically coupled via gap junctions and contract as a single unit.", "Multi-unit smooth muscle is primarily involved in sustained contractions, such as peristalsis in the gastrointestinal tract.", "Multi-unit smooth muscle fibers have a low degree of innervation, which allows for coordinated contraction."],
  a: 0,
  e: `In multi-unit smooth muscle each fiber is separately innervated and has few or no gap junctions, so fibers contract independently, allowing fine, graded control. Examples: iris and ciliary muscle of the eye, arrector pili, and the walls of large arteries and airways.`,
  w: [
    "Correct — independent, separately innervated fibers.",
    "Describes single-unit (visceral) smooth muscle.",
    "Peristalsis is a single-unit (visceral) smooth muscle function.",
    "Multi-unit smooth muscle is densely innervated; that dense innervation is what controls it."
  ],
  fig: ["p154", "p155"]
},
{
  t: "Smooth Muscle",
  s: `A 50-year-old woman is studying smooth muscle physiology and asks about the difference between single-unit and multi-unit smooth muscle. Which of the following is characteristic of single-unit smooth muscle?`,
  c: ["Single-unit smooth muscle fibers contract independently, with each fiber having its own nerve supply.", "Single-unit smooth muscle fibers are connected by gap junctions, allowing synchronized contraction.", "Single-unit smooth muscle is typically found in muscles that require fine, discrete movements, such as the iris.", "Single-unit smooth muscle fibers do not respond to hormonal regulation."],
  a: 1,
  e: `Single-unit (visceral) smooth muscle cells are linked by many gap junctions, so electrical activity spreads from cell to cell and the sheet contracts together. Many have pacemaker activity. Found in the GI tract, uterus, bladder and small blood vessels.`,
  w: [
    "Describes multi-unit smooth muscle.",
    "Correct — gap junctions synchronize contraction.",
    "The iris is a multi-unit example.",
    "Single-unit smooth muscle responds strongly to hormones and stretch (e.g., oxytocin on the uterus)."
  ],
  fig: ["p154", "p155"]
},
{
  t: "Smooth Muscle",
  s: `A 30-year-old woman is studying the molecular mechanisms involved in smooth muscle contraction. Which of the following events is the first step in the initiation of smooth muscle contraction?`,
  c: ["Myosin light-chain kinase (MLCK) activation and phosphorylation of myosin.", "Release of calcium ions from the sarcoplasmic reticulum and binding to calmodulin.", "Activation of the sodium-potassium pump to increase intracellular calcium.", "Activation of actin filaments to generate force."],
  a: 1,
  e: `Sequence: a rise in cytosolic Ca²⁺ (from the SR and through membrane channels) → Ca²⁺ binds calmodulin → Ca²⁺–calmodulin activates myosin light-chain kinase → MLCK phosphorylates the myosin light chain → myosin cross-bridges cycle on actin. The Ca²⁺–calmodulin step comes first.`,
  w: [
    "MLCK activation comes after Ca²⁺ binds calmodulin.",
    "Correct — the triggering step.",
    "The Na⁺/K⁺ pump doesn't raise intracellular Ca²⁺.",
    "Smooth muscle is regulated on the myosin side; actin isn't 'activated' first."
  ],
  fig: ["p160", "p165"]
},
{
  t: "Smooth Muscle",
  s: `A 45-year-old man has sustained an injury that results in the prolonged contraction of his smooth muscle. Which of the following mechanisms contributes to the maintenance of smooth muscle contraction without continued ATP consumption?`,
  c: ["The activation of the sodium-potassium ATPase pump to maintain ion gradients.", "The latch state, where myosin remains bound to actin filaments for prolonged periods with minimal ATP usage.", "The rapid dissociation of myosin heads from actin, conserving energy.", "The continuous cycling of actin and myosin cross-bridges, allowing for constant force generation."],
  a: 1,
  e: `In the latch state, dephosphorylated myosin stays attached to actin and detaches very slowly, so tension is held for long periods with little ATP — ideal for sustained tone in blood vessels and sphincters.`,
  w: [
    "The pump uses ATP and isn't what holds tension.",
    "Correct — the latch state.",
    "Rapid detachment would let tension fall.",
    "Continuous cycling uses ATP with every stroke."
  ],
  fig: ["p149"]
},
{
  t: "Smooth Muscle",
  s: `A 25-year-old woman is studying the mechanisms involved in smooth muscle contraction. Which of the following best describes the role of voltage-gated calcium channels in smooth muscle cells?`,
  c: ["Voltage-gated calcium channels are activated by the binding of neurotransmitters and allow calcium influx, which directly triggers muscle contraction.", "Voltage-gated calcium channels open in response to membrane depolarization and allow calcium to enter the cell, contributing to the activation of contraction.", "Voltage-gated calcium channels are responsible for maintaining the resting membrane potential by regulating potassium efflux.", "Voltage-gated calcium channels are found exclusively in skeletal muscle, where they play a role in initiating action potentials."],
  a: 1,
  e: `L-type voltage-gated Ca²⁺ channels in the smooth muscle membrane open when the membrane depolarizes. Extracellular Ca²⁺ flows in and, together with SR release, raises cytosolic Ca²⁺ to start the calmodulin–MLCK pathway. In smooth muscle, Ca²⁺ influx through these channels is a major source of activator Ca²⁺ (unlike skeletal muscle).`,
  w: [
    "Channels opened by neurotransmitters are ligand-gated (receptor-operated), not voltage-gated.",
    "Correct — depolarization opens them; Ca²⁺ entry drives contraction.",
    "Resting potential is set mainly by K⁺ channels, not Ca²⁺ channels.",
    "They're present in smooth and cardiac muscle too; in smooth muscle they matter most for Ca²⁺ entry."
  ],
  fig: ["p165", "p166", "p167"]
},
{
  t: "Smooth Muscle",
  s: `A 40-year-old man with a cardiac arrhythmia is treated with a medication that blocks ligand-gated calcium channels. Which of the following is most likely to occur as a result of inhibiting ligand-gated calcium channels?`,
  c: ["Decreased calcium influx leading to reduced muscle contraction in smooth and skeletal muscle.", "Increased calcium influx, resulting in enhanced neurotransmitter release and muscle relaxation.", "Decreased calcium influx, leading to a reduction in neurotransmitter release at synapses and inhibition of smooth muscle contraction.", "Increased calcium influx and excessive muscle contraction in both smooth and skeletal muscle."],
  a: 2,
  e: `Blocking Ca²⁺ channels lowers Ca²⁺ entry. Less Ca²⁺ in nerve terminals means less neurotransmitter release, and less Ca²⁺ in smooth muscle means less calmodulin–MLCK activation, so contraction is inhibited. Skeletal muscle is largely unaffected because it relies on Ca²⁺ already stored in its SR rather than on Ca²⁺ entering from outside.`,
  key: "Answer per the slides. Clinically, antiarrhythmic calcium channel blockers (verapamil, diltiazem) block voltage-gated L-type channels; the question's point is simply that blocking Ca²⁺ entry reduces release and smooth muscle contraction.",
  w: [
    "Skeletal muscle contraction uses SR Ca²⁺ released via DHPR–RyR1 coupling, so it's not reduced by blocking Ca²⁺ entry.",
    "Blocking channels decreases, not increases, Ca²⁺ influx.",
    "Correct — less Ca²⁺ in → less release and less smooth muscle contraction.",
    "Influx decreases, not increases."
  ],
  fig: ["p166", "p168", "p169", "p170"]
}
];
