// Histology Review — question data
// Question stems and answer choices are kept word for word from "MSK-QUESTION REVIEW 1".
// Fields: t = topic, s = stem, c = choices, a = index of correct choice,
// e = explanation, w = one note per choice (same order as c),
// img = image shown with the question, eimg = image(s) shown with the explanation,
// ns = keep choice order fixed (choices refer to letters or each other),
// key = note about the answer key, type "reveal" = no choices (identify / recall).

window.TOPICS = [
  "Muscle",
  "Bone & Cartilage",
  "Junctions & Cytoskeleton",
  "Connective Tissue & ECM",
  "Skin",
  "Slide Identification"
];

window.QUESTIONS = [
{
  t: "Muscle",
  s: `A researcher is investigating the structure of the sarcomere using skeletal muscle obtained from an experimental animal. He develops monoclonal antibodies directed against a specific skeletal muscle protein and finds that these antibodies disrupt the binding of actin to structural support elements within the sarcomere. Electron microscopy of the sarcomere is shown in the image below. Which of the following labeled regions do these antibodies most likely bind?`,
  img: "q01-sarcomere.jpg",
  c: ["A", "B", "C", "D", "E", "F"],
  a: 0, ns: true,
  eimg: ["h01-sarcomere-labels.jpg"],
  e: `Label A is the Z line (Z disc). Thin (actin) filaments are anchored at the Z line by α-actinin (with help from proteins such as CapZ and nebulin), and a sarcomere runs from one Z line to the next. An antibody that stops actin from binding its structural support would therefore target a Z-line protein such as α-actinin. The free ends of the actin filaments project toward the middle of the sarcomere, where they overlap with myosin during contraction.`,
  w: [
    "Z line — the dark line where actin filaments are anchored (α-actinin).",
    "The A band: the full length of the thick (myosin) filaments. It contains myosin and overlapping actin but is not where actin is anchored.",
    "The M line in the center of the A band, where thick filaments are cross-linked (myomesin). It anchors myosin, not actin.",
    "The edge of the A band where thick filaments end — not an attachment site for actin.",
    "The I band, which contains only thin filaments. Actin runs through it, but the I band itself is not the anchoring structure; the Z line within it is.",
    "A myosin-containing region of the neighbouring sarcomere's A band — it holds thick filaments, not the actin anchor."
  ]
},
{
  t: "Junctions & Cytoskeleton",
  s: `A 23-year-old woman, gravida 2, para 1, comes to the labor and delivery unit at 39 weeks gestation with abdominal discomfort and regular contractions. The patient had an uncomplicated first pregnancy that resulted in a spontaneous vaginal delivery at full term 3 years ago, and the current pregnancy has been uncomplicated. She takes a prenatal vitamin daily and no other medications. In response to increasing estrogen levels, the myometrial cells start to express genes that encode connexin-43 and the oxytocin receptor. These molecular changes would result in increased formation of which of the following?`,
  c: ["Adherens junction", "Desmosomes", "Gap junction", "Hemidesmosomes", "Tight junction"],
  a: 2,
  eimg: ["h02-junction-table.jpg"],
  e: `Connexins (here connexin-43) are the building blocks of gap junctions: six connexins form a connexon, and connexons in neighbouring cells dock to form a channel. Near term, estrogen up-regulates connexin-43 so myometrial cells become electrically coupled, allowing contractions to spread and synchronize across the uterus during labor.`,
  w: [
    "Adherens junctions use cadherins linked to actin; they provide adhesion, not electrical coupling.",
    "Desmosomes use desmogleins/desmocollins linked to intermediate filaments; they resist mechanical stress.",
    "Correct — connexin-43 forms gap junctions that couple myometrial cells.",
    "Hemidesmosomes use integrins to anchor basal cells to the basal lamina.",
    "Tight junctions use claudins and occludin to seal the paracellular space."
  ]
},
{
  t: "Junctions & Cytoskeleton",
  s: `A 68-year-old man with a history of Parkinson disease is hospitalized for pneumonia and sepsis. The patient is treated with intravenous (IV) fluids and antibiotics. He is also started on an infusion of IV dopamine for hemodynamic support. Although the manifestations of Parkinson disease are attributed to dopaminergic neuron degeneration in the substantia nigra, IV dopamine does not improve this patient's Parkinson symptoms. Which of the following cell structures accounts for this lack of responsiveness?`,
  c: ["Gap junction", "Tight junction", "Fenestrations", "Desmosomes", "Hemidesmosomes"],
  a: 1,
  eimg: ["h03-cell-junctions.jpg"],
  e: `Dopamine cannot cross the blood–brain barrier. The barrier is formed mainly by continuous tight junctions (zonulae occludentes) between brain capillary endothelial cells, which block paracellular passage of polar molecules. This is why Parkinson disease is treated with levodopa, which crosses the barrier on an amino acid transporter and is then converted to dopamine in the brain.`,
  w: [
    "Gap junctions let ions and small molecules pass between neighbouring cells; they do not form the BBB seal.",
    "Correct — endothelial tight junctions keep dopamine out of the CNS.",
    "Fenestrations are pores that make capillaries more permeable; BBB capillaries are continuous and lack them.",
    "Desmosomes give mechanical strength, not a permeability barrier.",
    "Hemidesmosomes anchor cells to the basal lamina; they don't seal the space between cells."
  ]
},
{
  t: "Bone & Cartilage",
  s: `A 3-year-old girl is brought to her pediatrician for a well-child checkup. She has met all of the appropriate developmental milestones. Her height corresponds to the 60th percentile. Osteoblasts near the growth plates of her long bones secrete matrix material, and when they become trapped in the ossified matrix, they become known as osteocytes. These osteocytes remain connected to each other by which of the following?`,
  c: ["Gap junction", "Tight junction", "Fenestrations", "Desmosomes", "Hemidesmosomes"],
  a: 0,
  eimg: ["h04-osteocytes.jpg"],
  e: `Osteocytes sit in lacunae and send long cytoplasmic processes through tiny channels (canaliculi). Where the processes of neighbouring osteocytes touch, they are joined by gap junctions. This network lets ions, nutrients and signals pass from cell to cell and lets osteocytes sense mechanical load and coordinate remodeling.`,
  w: [
    "Correct — osteocyte processes communicate through gap junctions inside canaliculi.",
    "Tight junctions seal epithelia and endothelia; they don't connect osteocytes.",
    "Fenestrations are capillary pores, not cell–cell connections.",
    "Desmosomes provide adhesion in epithelia and cardiac muscle, not communication between osteocytes.",
    "Hemidesmosomes attach cells to the basal lamina."
  ]
},
{
  t: "Connective Tissue & ECM",
  s: `Which type of collagen is seen in tendon?`,
  c: ["Type I", "Type II", "Type III", "Type IV", "Type VII"],
  a: 0,
  eimg: ["h05-collagen-scar.jpg", "h05-collagen-table.jpg"],
  e: `Tendons are dense regular connective tissue made of tightly packed, parallel bundles of type I collagen, the strongest collagen in tension. Type I is also the main collagen of bone, dermis, ligaments, fascia and late scar. The figures from your slides show a healed myocardial scar (made mostly of type I collagen — the same type as tendon) and a table of collagen types.`,
  w: [
    "Correct — tendon, bone, dermis, ligament, scar.",
    "Type II is the collagen of hyaline and elastic cartilage, the vitreous body and nucleus pulposus.",
    "Type III forms reticular fibers (lymphoid organs, blood vessels, early granulation tissue).",
    "Type IV forms the network of the basal lamina/basement membrane.",
    "Type VII forms anchoring fibrils that attach the basement membrane to the dermis."
  ]
},
{
  t: "Skin",
  s: `A 44-year-old woman comes to the clinic because she has noticed changes in a mole on her neck. Physical examination shows a pigmented lesion with uneven borders, measuring about 1.5 cm wide. The patient says that the mole has doubled in size over the past 3 months. She noticed that it began to bleed after she got out of the shower 2 weeks ago. An excisional biopsy is done; it is melanoma, and the slide is shown here. Which of the following is the embryologic origin of the melanocytes?`,
  img: "q06-melanoma.jpg",
  c: ["Neural crest cell", "Mesoderm", "Endoderm", "Ectoderm", "Notochord"],
  a: 0,
  e: `Melanocytes are derived from neural crest cells, which migrate into the stratum basale during development. They make melanin in melanosomes and transfer the granules to neighbouring keratinocytes through their dendritic processes. Melanoma is the malignant tumor of melanocytes.`,
  w: [
    "Correct — melanocytes migrate from the neural crest.",
    "Mesoderm gives rise to the dermis, muscle, bone and blood vessels — not melanocytes.",
    "Endoderm forms the lining of the gut and respiratory tract and their glands.",
    "Surface ectoderm forms the epidermal keratinocytes, hair and nails. Neural crest does arise from ectoderm, but the specific origin of melanocytes is the neural crest, so that is the best answer.",
    "The notochord persists only as the nucleus pulposus of intervertebral discs."
  ]
},
{
  t: "Bone & Cartilage",
  s: `A 24-year-old man falls off a motorcycle and injures his knee. He does not seek medical help immediately, but after 10 days he presents with swelling, redness and limitation of knee movement. The process now affecting the patient is typically due to the destruction of cartilage, because of which of the following reasons?`,
  c: ["Cartilage contains collagen", "Cartilage contains chondroitin sulphate", "Cartilage is not innervated", "Cartilage is avascular", "Cartilage tends to calcify"],
  a: 3,
  e: `Cartilage has no blood vessels. Chondrocytes get their nutrients by slow diffusion through the matrix (from the perichondrium or, for articular cartilage, from synovial fluid). Without a blood supply, inflammatory and repair cells and new tissue cannot easily reach an injury, so damaged cartilage heals poorly and tends to break down.`,
  w: [
    "Containing collagen (type II) is normal and explains its strength, not its poor repair.",
    "Chondroitin sulfate holds water and gives resilience; it doesn't explain why cartilage is destroyed or fails to heal.",
    "Lack of nerves explains why cartilage damage itself is painless, not why it heals poorly.",
    "Correct — avascular tissue repairs poorly.",
    "Calcification happens in specific settings (endochondral ossification, aging); it isn't why injured cartilage breaks down."
  ]
},
{
  t: "Bone & Cartilage",
  s: `A 5-year-old boy falls and fractures his humerus. He is taken to the emergency room, where the physician sets the bone. Which of the following is responsible for producing the majority of the new bone uniting the two fragments?`,
  c: ["Periosteum", "Cartilage", "Marrow", "Compact bone", "Cancellous bone"],
  a: 0,
  e: `The inner (cambium/osteogenic) layer of the periosteum contains osteoprogenitor cells. After a fracture they proliferate and differentiate into osteoblasts and chondroblasts, forming the callus that bridges the fragments; the endosteum adds a smaller contribution. Children have a thick, very active periosteum, which is why their fractures heal quickly.`,
  w: [
    "Correct — periosteal osteoprogenitor cells produce most of the callus.",
    "Cartilage appears temporarily in the soft callus but is later replaced by bone; it is not the source of the new bone.",
    "Marrow supplies blood cells; its endosteal lining contributes some bone, but less than periosteum.",
    "Compact bone is the existing tissue being repaired; it doesn't generate the new bone.",
    "Cancellous bone is also existing bone, not the source of the callus."
  ]
},
{
  t: "Muscle",
  s: `During contraction, which of the following maintains its uncontracted length?`,
  c: ["A band", "I band", "Sarcomere", "Myofibril", "Myofiber"],
  a: 0,
  e: `By the sliding filament model, filaments don't shorten — thin filaments slide over thick filaments toward the M line. The A band equals the length of the thick (myosin) filaments, so it stays the same length. The I band and H zone shrink, Z lines move closer together, and the sarcomere, myofibril and whole fiber shorten.`,
  w: [
    "Correct — the A band (myosin length) is constant.",
    "The I band (thin filaments only) shortens.",
    "The sarcomere shortens as Z lines move together.",
    "A myofibril is a chain of sarcomeres, so it shortens.",
    "The myofiber (muscle cell) shortens because its myofibrils do."
  ]
},
{
  t: "Junctions & Cytoskeleton",
  s: `A 34-year-old woman and her 36-year-old husband come to the physician because of concerns about having children. The wife tells the physician that she has had regular menstrual cycles since age 13. The husband recalls a long history of sinus infections, colds and ear infections. Laboratory studies show no abnormality of the woman's reproductive tract or the man's sperm count. A deficiency in which of the following is most likely responsible for this couple's difficulty in conceiving?`,
  c: ["Desmin", "Dynein", "Kinesin", "Alpha-nexin", "Titin"],
  a: 1,
  e: `Recurrent sinus and ear infections plus infertility with a normal sperm count suggests primary ciliary dyskinesia (Kartagener syndrome if situs inversus is present). Defective axonemal dynein arms leave cilia and sperm flagella immotile: mucus isn't cleared from the airways, and sperm are present but can't swim.`,
  w: [
    "Desmin is the intermediate filament of muscle cells (holds myofibrils at the Z discs).",
    "Correct — absent/defective dynein arms cause immotile cilia and sperm.",
    "Kinesin is a microtubule motor for anterograde transport inside cells, not ciliary beating.",
    "Not the ciliary protein involved here; the linker between doublets is nexin, and the classic defect is in dynein.",
    "Titin is an elastic sarcomere protein in muscle."
  ]
},
{
  t: "Muscle",
  s: `A 42-year-old man complains of fatigue and weakness of the muscles in his face, eyes, and tongue. Clinical tests indicate the presence of circulating antibodies to acetylcholine receptors. Based on the symptoms, what is the most likely diagnosis?`,
  c: ["Myasthenia gravis", "Demyelinating disease", "Amyotrophic lateral sclerosis", "Duchenne muscular dystrophy"],
  a: 0,
  e: `Myasthenia gravis is an autoimmune disease in which antibodies block and destroy nicotinic acetylcholine receptors on the motor end plate. Fewer working receptors means fatigable weakness that typically starts in eye, face and bulbar muscles (ptosis, diplopia, trouble chewing or speaking) and worsens with use.`,
  w: [
    "Correct — anti-AChR antibodies at the neuromuscular junction.",
    "Demyelinating diseases (e.g. multiple sclerosis, Guillain–Barré) attack myelin and slow conduction; they don't involve AChR antibodies.",
    "ALS is degeneration of upper and lower motor neurons, without autoantibodies.",
    "Duchenne is an X-linked dystrophin deficiency presenting in young boys with proximal weakness."
  ]
},
{
  t: "Bone & Cartilage",
  s: `During prenatal development of bone, which of the following areas consists of osteoid matrix and degenerating chondrocytes?`,
  c: ["Primary centre", "Secondary centre", "Epiphysis", "Epiphyseal plate"],
  a: 0,
  e: `In endochondral ossification the primary ossification center forms in the diaphysis before birth. Chondrocytes there hypertrophy, calcify their matrix and die; a periosteal bud brings in vessels and osteoprogenitor cells, and osteoblasts lay osteoid on the calcified cartilage remnants. So this center contains both osteoid and degenerating chondrocytes during prenatal development.`,
  w: [
    "Correct — the diaphyseal primary center forms prenatally.",
    "Secondary centers form in the epiphyses mostly after birth, so they are not the prenatal site.",
    "The epiphysis is where secondary centers develop later; prenatally it is still cartilage.",
    "The epiphyseal plate is only defined once secondary centers have formed, between them and the diaphysis — a later, postnatal structure."
  ]
},
{
  t: "Junctions & Cytoskeleton",
  s: `Which of the following anchors the basal cells of the epithelium to the basal lamina?`,
  c: ["Hemidesmosomes", "Desmosomes", "Tight junction", "Collagen fibres"],
  a: 0,
  e: `Hemidesmosomes are cell-to-matrix junctions on the basal surface. Integrins (α6β4) and type XVII collagen (BP180) in the membrane bind laminin in the basal lamina, while plectin and BP230 connect them inside the cell to keratin intermediate filaments. Autoantibodies against them cause bullous pemphigoid.`,
  w: [
    "Correct — they attach basal cells to the basal lamina.",
    "Desmosomes join neighbouring cells to each other, not to the basal lamina.",
    "Tight junctions seal the apical space between cells.",
    "Collagen fibres are in the underlying connective tissue; the cell itself anchors through hemidesmosomes."
  ]
},
{
  t: "Bone & Cartilage",
  s: `A 13-year-old boy is suffering from weakness of the bones and joints in his legs. After medical tests, it is found that the weakened bones are due to reduced osteoid and lack of mineralization. Which of the following structures is responsible for this process?`,
  c: ["Osteoclast", "Osteoblast", "Osteocyte", "Mast cell", "Lack of blood supply"],
  a: 1,
  e: `Osteoblasts make osteoid (type I collagen plus matrix proteins) and start its mineralization by releasing matrix vesicles and alkaline phosphatase. Reduced osteoid and failure to mineralize therefore point to the osteoblast (as in rickets/osteomalacia from low vitamin D, calcium or phosphate).`,
  w: [
    "Osteoclasts resorb bone; they don't make or mineralize osteoid.",
    "Correct — osteoblasts synthesize and mineralize osteoid.",
    "Osteocytes maintain matrix and sense load; they are not the main producers of osteoid.",
    "Mast cells release histamine and heparin; they don't form bone.",
    "Loss of blood supply causes avascular necrosis (dead bone), not reduced osteoid and poor mineralization."
  ]
},
{
  t: "Junctions & Cytoskeleton",
  s: `Kartagener syndrome is a genetic disorder caused by ciliary dysfunction due to which of the following?`,
  c: ["Defect in dynein", "Defect in kinesin", "Defect in titin", "Defect in nexin"],
  a: 0,
  e: `Kartagener syndrome (primary ciliary dyskinesia with situs inversus) is caused by defective dynein arms on the outer microtubule doublets of the axoneme. Without dynein's ATP-driven sliding, cilia and flagella can't beat: chronic sinusitis, bronchiectasis, male infertility, and situs inversus (embryonic nodal cilia can't set left–right asymmetry).`,
  w: [
    "Correct — axonemal dynein drives ciliary beating.",
    "Kinesin moves cargo along microtubules toward the plus end; it doesn't power cilia.",
    "Titin is a muscle sarcomere protein.",
    "Nexin links adjacent doublets; it isn't the classic defect in Kartagener syndrome."
  ]
},
{
  t: "Connective Tissue & ECM",
  s: `Which one of the following statements regarding proteoglycans is true?`,
  c: ["They consist of a core of fibrous protein covalently bound to glycoproteins.", "They are attached to ribonucleic acid.", "They are binding sites for deoxyribonucleic acid (DNA).", "They are composed of a protein core to which glycosaminoglycans are attached."],
  a: 3,
  e: `A proteoglycan is a core protein with many glycosaminoglycan (GAG) chains — such as chondroitin sulfate, keratan sulfate or heparan sulfate — covalently attached, like bristles on a bottle brush. In cartilage, aggrecan proteoglycans bind hyaluronan to form huge aggregates that trap water and resist compression.`,
  w: [
    "The side chains are GAGs, not glycoproteins.",
    "Proteoglycans are extracellular matrix molecules; they aren't attached to RNA.",
    "They don't serve as binding sites for DNA.",
    "Correct — protein core plus covalently attached GAGs."
  ]
},
{
  t: "Skin",
  s: `A 6-mm punch biopsy of normal-appearing epidermis reveals stellate cells that contain intracytoplasmic granules having the shape of a tennis racquet. These cells demonstrate some myeloid surface markers and can interact closely with T lymphocytes. The cells described above are best referred to as which of the following?`,
  c: ["Langerhans cell", "Melanocytes", "Kupffer cell", "Mesangial cell", "Merkel cell"],
  a: 0,
  e: `Langerhans cells are star-shaped (dendritic) antigen-presenting cells in the stratum spinosum. They come from bone-marrow (myeloid) precursors, express CD1a and langerin, and contain Birbeck granules that look like tennis rackets on EM. They capture antigen and migrate to lymph nodes to present it to T cells.`,
  w: [
    "Correct — Birbeck (tennis-racket) granules, myeloid origin, present antigen to T cells.",
    "Melanocytes are dendritic too but contain melanosomes and come from the neural crest.",
    "Kupffer cells are macrophages of the liver sinusoids.",
    "Mesangial cells support glomerular capillaries in the kidney.",
    "Merkel cells are mechanoreceptor cells in the stratum basale with neuroendocrine granules."
  ]
},
{
  t: "Junctions & Cytoskeleton",
  s: `It is determined that the causative organism of this patient's condition remains in a latent state in the neuronal cell bodies of sensory ganglia. Upon reactivation, the virus is transported through the nerve axon to the skin. Which of the following proteins is most likely involved in the transport process leading to disease recurrence?`,
  c: ["Dynein", "Kinesin", "Lamin", "Selectin", "Spectrin"],
  a: 1,
  e: `Herpesviruses (HSV, VZV) lie latent in sensory ganglion cell bodies. On reactivation they travel from the cell body down the axon to the skin — anterograde transport toward the microtubule plus end, which is carried out by kinesin. (Dynein carries them the other way, retrograde from skin to ganglion, during the initial infection.)`,
  w: [
    "Dynein moves cargo retrograde (toward the cell body) — that's how the virus first reaches the ganglion, not how it returns to the skin.",
    "Correct — kinesin does anterograde axonal transport toward the skin.",
    "Lamins are intermediate filaments lining the nuclear envelope.",
    "Selectins are adhesion molecules for leukocyte rolling on endothelium.",
    "Spectrin is a membrane cytoskeleton protein (e.g. in RBCs), not a motor."
  ]
},
{
  t: "Connective Tissue & ECM",
  s: `Osteogenesis imperfecta is a defect in which of the following?`,
  c: ["Collagen type 1", "Collagen type 2", "Collagen type 3", "Collagen type 4"],
  a: 0,
  e: `Osteogenesis imperfecta is usually caused by mutations in COL1A1 or COL1A2, which code for type I collagen. Because type I collagen is the main protein of bone, sclera, dentin and ligaments, patients have brittle bones with multiple fractures, blue sclerae, dental problems and hearing loss.`,
  w: [
    "Correct — defective type I collagen.",
    "Type II defects affect cartilage and vitreous (e.g. some chondrodysplasias, Stickler syndrome).",
    "Type III defects cause vascular Ehlers–Danlos syndrome.",
    "Type IV defects cause Alport syndrome (basement membranes of kidney, ear, eye)."
  ]
},
{
  t: "Bone & Cartilage",
  s: `Which of the following articular cartilages is dependent on synovial fluid for its nutrients and vascular supply?`,
  c: ["Lateral meniscus", "Sutures", "Acromioclavicular joint", "Vertebral joints"],
  a: 0,
  e: `The menisci of the knee are fibrocartilage pads inside a synovial joint. Only their outer rim gets blood vessels from the capsule; the inner portion is avascular and relies on synovial fluid for nutrition — one reason meniscal tears in the inner zone heal poorly.`,
  w: [
    "Correct — the inner meniscus is avascular and nourished by synovial fluid.",
    "Sutures are fibrous joints of the skull with no joint cavity or synovial fluid.",
    "The AC joint is synovial, but it is not the classic example of articular cartilage depending on synovial fluid the way the meniscus is.",
    "Intervertebral discs (cartilaginous joints) are nourished by diffusion through the vertebral end plates, not synovial fluid."
  ]
},
{
  t: "Bone & Cartilage",
  s: `Which one of the following statements is correct concerning hyaline cartilage?`,
  c: ["It is vascular.", "It contains type IV collagen.", "It undergoes appositional growth only.", "It is located at the articular ends of long bones."],
  a: 3,
  e: `Hyaline cartilage covers the articular surfaces of long bones (where it has no perichondrium), and is also found in the costal cartilages, trachea, bronchi, nose and larynx, and the fetal skeleton. It is avascular, contains type II collagen, and grows both appositionally (from the perichondrium) and interstitially (chondrocytes dividing within the matrix).`,
  w: [
    "Cartilage is avascular.",
    "Its collagen is type II; type IV is in basal laminae.",
    "It grows both appositionally and interstitially.",
    "Correct — articular cartilage is hyaline cartilage."
  ]
},
{
  type: "reveal",
  t: "Slide Identification",
  s: `Identify the slide`,
  img: "q22-slide.jpg",
  ans: "Skeletal muscle (L.S)",
  e: `Longitudinal section of skeletal muscle: long, unbranched, cylindrical fibers of uniform width with cross-striations, and many flattened nuclei pushed to the periphery just under the sarcolemma. Thin strands of endomysium separate the fibers.`,
  w: [
    "Cardiac muscle would show branching fibers, one or two central nuclei, and intercalated discs.",
    "Smooth muscle would show spindle-shaped cells with single central, cigar-shaped nuclei and no striations."
  ]
},
{
  type: "reveal",
  t: "Slide Identification",
  s: `Identify the slide`,
  img: "q23-slide.jpg",
  ans: "Cardiac muscle",
  e: `Cardiac muscle: striated fibers that branch and join, each with one (sometimes two) centrally placed oval nuclei, often with a pale perinuclear zone. The dark transverse lines crossing the fibers are intercalated discs, the junctions between cardiac cells.`,
  w: [
    "Skeletal muscle fibers don't branch and have many peripheral nuclei, with no intercalated discs.",
    "Smooth muscle lacks striations and its cells are spindle-shaped."
  ]
},
{
  t: "Bone & Cartilage",
  s: `Which one of the following statements is characteristic of osteocytes?`,
  c: ["They communicate via gap junctions between their processes.", "They contain large amounts of rough endoplasmic reticulum (RER).", "They are immature bone cells.", "They are housed as isogenous groups in lacunae."],
  a: 0,
  e: `Osteocytes are mature bone cells, each alone in its lacuna, with processes running through canaliculi. Gap junctions between the processes of neighbouring osteocytes let them exchange ions and signals and coordinate responses to mechanical load.`,
  w: [
    "Correct — gap junctions link osteocyte processes.",
    "Abundant RER is a feature of osteoblasts, which actively secrete collagen; osteocytes have much less.",
    "Osteocytes are the mature cells; the immature ones are osteoprogenitor cells and osteoblasts.",
    "Isogenous groups (clusters from one dividing cell) are typical of chondrocytes in cartilage, not osteocytes."
  ]
},
{
  t: "Bone & Cartilage",
  s: `Which of the following statements characterizes osteoclasts?`,
  c: ["They are enucleated cells.", "They produce collagen.", "They occupy Howship lacunae.", "They are derived from osteoprogenitor cells."],
  a: 2,
  e: `Osteoclasts are large, multinucleated cells that resorb bone. Using a ruffled border and a sealed acidic compartment (H⁺ and cathepsin K), they dissolve mineral and digest matrix, leaving shallow pits on the bone surface called Howship (resorption) lacunae, where they sit.`,
  w: [
    "They are multinucleated, not enucleated.",
    "Collagen is made by osteoblasts; osteoclasts break it down.",
    "Correct — they sit in Howship lacunae.",
    "They come from the monocyte–macrophage (hematopoietic) lineage, not from mesenchymal osteoprogenitor cells."
  ]
},
{
  type: "reveal",
  t: "Slide Identification",
  s: `Identify the slide`,
  img: "q26-slide.jpg",
  ans: "Dense regular connective tissue",
  e: `Dense regular connective tissue (e.g. tendon): thick bundles of type I collagen running parallel in one direction, often with a wavy "crimp", and rows of flattened, elongated fibroblast (tendinocyte) nuclei squeezed between the bundles. Very little ground substance or cells.`,
  w: [
    "Dense irregular connective tissue (dermis) has collagen bundles running in many directions.",
    "Smooth muscle has more nuclei, cigar-shaped and inside the cells, and cell borders rather than acellular fibers."
  ]
},
{
  t: "Bone & Cartilage",
  s: `A 22-year-old female patient is seen for the first time by her new physician, who notes that she has very thick bones in her extremities and face. The physician suspects acromegaly, which is a condition caused by which of the following?`,
  c: ["Hypervitaminosis A", "Excess growth hormone", "Hypovitaminosis A", "Hypervitaminosis D"],
  a: 1,
  e: `Acromegaly is excess growth hormone (usually from a pituitary adenoma) after the epiphyseal plates have closed. Bones can no longer lengthen, so they thicken by appositional growth — enlarged hands, feet, jaw and brow. Before closure, the same excess causes gigantism.`,
  w: [
    "Too much vitamin A increases bone resorption and fragility and can close growth plates early; it doesn't cause acromegaly.",
    "Correct — GH excess after plate closure.",
    "Vitamin A deficiency impairs normal bone remodeling and growth.",
    "Too much vitamin D causes hypercalcemia and bone resorption, not thickened bones."
  ]
},
{
  t: "Junctions & Cytoskeleton",
  s: `A 58-year-old woman presents to the physician with painful oral ulcers. Physical examination shows buccal and palatine erosions. A biopsy is performed. The results show an intraepidermal band of antibodies directed against which of the following antigens?`,
  c: ["Collagen", "Connexin", "Desmoglein", "Occludin", "Integrins"],
  a: 2,
  e: `This is pemphigus vulgaris: IgG autoantibodies against desmoglein (3, and often 1), the cadherin of desmosomes. Keratinocytes lose their attachments to each other (acantholysis), producing fragile intraepidermal blisters and painful oral erosions. Immunofluorescence shows a net-like pattern between epidermal cells.`,
  w: [
    "Collagen antibodies (e.g. type VII in epidermolysis bullosa acquisita, type XVII/BP180 in pemphigoid) cause subepidermal blisters.",
    "Connexins form gap junctions; they aren't the pemphigus target.",
    "Correct — anti-desmoglein (desmosome) antibodies.",
    "Occludin is a tight junction protein.",
    "Integrins/hemidesmosome components are involved in subepidermal disease (bullous pemphigoid), not intraepidermal acantholysis."
  ]
},
{
  t: "Junctions & Cytoskeleton",
  s: `A neonate develops life-threatening diarrhea on her second day of life. Extensive studies show microvillus atrophy. Lack of which of the following proteins would be likely to affect the microvilli?`,
  c: ["Dynein", "Kinesin", "Actin", "Myosin", "Spectrin"],
  a: 2,
  eimg: ["q29-microvillus.jpg"],
  e: `Each microvillus is supported by a core bundle of parallel actin filaments, cross-linked by villin and fimbrin and anchored below in the terminal web. Without actin there is no core, so microvilli can't form or be maintained, and the brush border's absorptive surface is lost — causing severe diarrhea.`,
  w: [
    "Dynein is a microtubule motor (cilia, retrograde transport). Microvilli contain no microtubules.",
    "Kinesin is also a microtubule motor.",
    "Correct — the microvillus core is a bundle of actin filaments.",
    "Myosin I links the actin core to the membrane, but the structural core itself is actin.",
    "Spectrin (fodrin) is part of the terminal web, not the microvillus core."
  ]
},
{
  type: "reveal",
  t: "Slide Identification",
  s: `Identify the slide`,
  img: "q30-slide.jpg",
  ans: "Compact bone (T.S)",
  e: `Ground section of compact bone in transverse section: osteons (Haversian systems), each with a central Haversian canal surrounded by concentric lamellae. Dark lacunae arranged in rings hold osteocytes, and fine radiating canaliculi connect them.`,
  w: [
    "Cancellous (spongy) bone shows trabeculae with marrow spaces, without organized osteons.",
    "Hyaline cartilage has chondrocytes in lacunae within a smooth, glassy matrix, with no canals or canaliculi."
  ]
},
{
  t: "Connective Tissue & ECM",
  s: `Which of the following structures forms the adhesion of the basal cell to the basal lamina?`,
  c: ["Laminin", "Glycosaminoglycans", "Glycoprotein", "Collagen type 1"],
  a: 0,
  e: `Laminin is the key adhesive glycoprotein of the basal lamina (lamina lucida). It binds integrins on the basal surface of epithelial cells and also binds type IV collagen and perlecan, linking the cell to the basal lamina.`,
  w: [
    "Correct — laminin links cell integrins to the basal lamina.",
    "GAGs form the hydrated ground substance; they are not the adhesion molecule.",
    "Laminin is a glycoprotein, but this choice is too general — the specific adhesive molecule is laminin.",
    "Type I collagen is in the underlying connective tissue; the basal lamina contains type IV collagen."
  ]
},
{
  type: "reveal",
  t: "Slide Identification",
  s: `Identify the slide`,
  img: "q32-slide.jpg",
  ans: "Thick skin",
  e: `Thick skin (palms and soles): a very thick stratum corneum, a stratum lucidum, prominent epidermal ridges interlocking with dermal papillae, and no hair follicles or sebaceous glands. Sweat glands are numerous.`,
  w: [
    "Thin skin has a much thinner stratum corneum, no stratum lucidum, and hair follicles with sebaceous glands."
  ]
},
{
  t: "Connective Tissue & ECM",
  s: `Synovial fluids of normal joints are usually devoid of collagen. It has been demonstrated that patients suffering from rheumatoid diseases will have different types of collagen in their synovial fluid, depending on the tissue being damaged. If a patient has type II collagen in his synovial joint, which of the following tissues is being eroded?`,
  c: ["Vascular endothelium", "Compact bone", "Vascular smooth muscle", "Articular cartilage", "Synovial membrane"],
  a: 3,
  e: `Type II collagen is the collagen of hyaline cartilage, including the articular cartilage covering joint surfaces. Finding type II collagen in the synovial fluid means the articular cartilage is being broken down.`,
  w: [
    "Endothelium sits on a basal lamina with type IV collagen.",
    "Bone is made of type I collagen.",
    "Vascular smooth muscle is surrounded mainly by type III (reticular) and type IV/V collagen.",
    "Correct — articular cartilage is type II collagen.",
    "The synovial membrane contains types I and III collagen."
  ]
},
{
  t: "Connective Tissue & ECM",
  s: `Which one of the following cells located in the connective tissue arises from myeloid stem cells?`,
  c: ["Pericytes", "Eosinophils", "Fibroblasts", "Osteoblasts", "Adipocytes"],
  a: 1,
  e: `Eosinophils are granulocytes produced in the bone marrow from the myeloid stem cell line; they leave the blood and enter connective tissue. The other choices are resident connective tissue cells that come from mesenchymal stem cells.`,
  w: [
    "Pericytes come from mesenchymal cells around capillaries.",
    "Correct — granulocytes are myeloid.",
    "Fibroblasts come from mesenchymal cells.",
    "Osteoblasts come from mesenchymal osteoprogenitor cells.",
    "Adipocytes come from mesenchymal cells."
  ]
},
{
  type: "reveal",
  t: "Slide Identification",
  s: `Identify the slide`,
  img: "q35-slide.jpg",
  ans: "Hyaline cartilage",
  e: `Hyaline cartilage: a smooth, glassy, pale basophilic matrix with no visible fibers. Chondrocytes sit in lacunae, often in isogenous groups of 2–4 cells, surrounded by a darker territorial matrix. A perichondrium covers the surface (except on articular cartilage).`,
  w: [
    "Elastic cartilage would show dark elastic fibers in the matrix.",
    "Fibrocartilage shows rows of chondrocytes between thick bundles of type I collagen."
  ]
},
{
  t: "Bone & Cartilage",
  s: `Which one of the following statements is correct concerning the periosteum?`,
  c: ["It is devoid of a blood supply.", "It produces osteoclasts.", "It is responsible for interstitial bone growth.", "Its inner layer contains osteoprogenitor cells."],
  a: 3,
  e: `The periosteum has an outer fibrous layer of dense connective tissue (attached by Sharpey fibers) and an inner cellular (osteogenic) layer containing osteoprogenitor cells. These differentiate into osteoblasts for appositional growth and fracture repair.`,
  w: [
    "The periosteum is well supplied with blood vessels and nerves.",
    "Osteoclasts come from blood monocytes, not the periosteum.",
    "Bone cannot grow interstitially (its matrix is rigid); periosteum supports appositional growth.",
    "Correct — the inner layer contains osteoprogenitor cells."
  ]
},
{
  t: "Bone & Cartilage",
  s: `A 49-year-old woman presents with pain in the left leg that worsens on weight bearing. An x-ray shows demineralization, and a decalcified, EDTA-treated biopsy shows reduction in bone quantity. The patient had undergone menopause at age 45 without estrogen replacement. She reports long-standing diarrhea. In addition, laboratory tests show low levels of 1,25-dihydroxyvitamin D, calcium, and phosphorus and elevated alkaline phosphatase. A second bone biopsy, which was not decalcified, shows uncalcified osteoid on all the bone surfaces. On the basis of these data, your diagnosis would be which of the following?`,
  c: ["Osteomalacia", "Osteoporosis", "Scurvy", "Paget disease"],
  a: 0,
  key: `Your slide key lists "Osteoporosis". The findings in the stem point to osteomalacia, so that is marked correct here — check with your instructor which answer they expect.`,
  e: `The deciding clue is the undecalcified biopsy showing unmineralized osteoid on all bone surfaces — the hallmark of osteomalacia. Chronic diarrhea (malabsorption) explains the low vitamin D, calcium and phosphate, and elevated alkaline phosphatase reflects increased osteoblast activity. Early menopause could also reduce bone mass, but osteoporosis does not produce widespread unmineralized osteoid or abnormal calcium, phosphate and vitamin D levels.`,
  w: [
    "Correct — defective mineralization with excess osteoid, low vitamin D/Ca/PO₄, high ALP.",
    "Osteoporosis is reduced bone mass with normal mineralization and normal serum calcium, phosphate and ALP.",
    "Scurvy (vitamin C deficiency) impairs collagen hydroxylation, giving poor osteoid formation, not unmineralized osteoid with low vitamin D.",
    "Paget disease shows chaotic remodeling (mosaic bone) and high ALP, but calcium, phosphate and vitamin D are usually normal."
  ]
},
{
  t: "Bone & Cartilage",
  s: `A seven-year-old boy is seen by his pediatrician because the child broke his humerus as he tripped and fell while walking. The pediatrician asked about the child's diet and learned that he may have a possible dietary deficiency. Which of the following may be lacking in his diet?`,
  c: ["Potassium", "Calcium", "Iron", "Carbohydrates"],
  a: 1,
  e: `Bone mineral is calcium hydroxyapatite. A diet low in calcium (or vitamin D, which is needed to absorb it) leads to poorly mineralized, weak bone in a growing child, so a fracture from a minor fall suggests calcium deficiency.`,
  w: [
    "Potassium is not a structural component of bone mineral.",
    "Correct — calcium is the main mineral of bone.",
    "Iron deficiency causes anemia, not weak bones.",
    "Carbohydrates are an energy source; they don't mineralize bone."
  ]
},
{
  t: "Junctions & Cytoskeleton",
  s: `Which one of the following statements about the gap junction is true?`,
  c: ["It extends as a zone around the apical perimeter of adjacent cells.", "It possesses dense plaques composed in part of desmoplakins.", "It permits the passage of ions from one cell to an adjacent cell.", "Its adhesion is dependent upon calcium ions.", "It possesses transmembrane linker glycoproteins."],
  a: 2,
  e: `Gap junctions are clusters of channels (connexons, each made of six connexins) that connect the cytoplasm of neighbouring cells. Ions and small molecules (up to ~1 kDa, e.g. cAMP) pass directly from cell to cell, giving electrical and metabolic coupling — as in cardiac muscle, smooth muscle and osteocytes.`,
  w: [
    "A belt around the apical perimeter describes the zonula occludens or zonula adherens.",
    "Dense plaques with desmoplakins are features of desmosomes.",
    "Correct — gap junctions let ions pass between cells.",
    "Calcium-dependent adhesion is a property of cadherins in adherens junctions and desmosomes.",
    "Transmembrane linker glycoproteins (cadherins) belong to adherens junctions and desmosomes."
  ]
},
{
  t: "Connective Tissue & ECM",
  s: `Which of the following cells is responsible for anaphylactic shock?`,
  c: ["Fibroblasts", "Eosinophils", "Pericytes", "Mast cells", "Macrophages"],
  a: 3,
  e: `After a first exposure to an allergen, plasma cells make IgE, which binds to Fc (FcεRI) receptors on mast cells (and basophils), sensitizing them. On re-exposure, the allergen cross-links the bound IgE and the mast cells degranulate, releasing histamine, leukotrienes and other mediators — a type I hypersensitivity reaction. Widespread release causes vasodilation, leaky vessels and bronchospasm: anaphylactic shock.`,
  w: [
    "Fibroblasts make fibers and ground substance; they don't mediate allergy.",
    "Eosinophils are recruited later and help limit the reaction (e.g. by breaking down histamine); they don't trigger anaphylaxis.",
    "Pericytes are contractile cells around capillaries.",
    "Correct — IgE-sensitized mast cells degranulate.",
    "Macrophages phagocytose and present antigen; they aren't the trigger of type I hypersensitivity."
  ]
},
{
  t: "Junctions & Cytoskeleton",
  s: `The modified structures at the border of the epithelium shown below are immotile in a 25-year-old patient. Which of the following would be a consequence of the lack of motility?`,
  c: ["Defect in dynein", "Defect in kinesin", "Defect in titin", "Defect in nexin"],
  a: 0,
  key: "The slide doesn't show an answer for this question; the answer here is supplied.",
  e: `Motile structures on the apical border of an epithelium are cilia. Immotile cilia are classically due to a defect in the axonemal dynein arms (primary ciliary dyskinesia / Kartagener syndrome), leading to recurrent sinusitis and bronchiectasis, male infertility and sometimes situs inversus.`,
  w: [
    "Correct — dynein arms power ciliary beating.",
    "Kinesin is a cytoplasmic transport motor, not the ciliary motor.",
    "Titin is a muscle sarcomere protein.",
    "Nexin links doublets but is not the classic cause of immotile cilia."
  ]
},
{
  t: "Bone & Cartilage",
  s: `Which of the following statements is characteristic of bone?`,
  c: ["Bone matrix contains primarily type II collagen.", "About 65% of the dry weight of bone is organic.", "Haversian canals are interconnected via Volkmann canals.", "Bone growth occurs via interstitial growth only."],
  a: 2,
  key: "The slide doesn't show an answer for this question; the answer here is supplied.",
  e: `Haversian canals run lengthwise through the centers of osteons; Volkmann (perforating) canals run across or obliquely and connect Haversian canals to each other and to the periosteal and endosteal surfaces, carrying vessels and nerves between them.`,
  w: [
    "Bone matrix is mainly type I collagen; type II is cartilage.",
    "About 65% of bone's dry weight is inorganic (hydroxyapatite) and about 35% organic.",
    "Correct — Volkmann canals connect Haversian canals.",
    "Bone grows only appositionally, because its mineralized matrix can't expand from within."
  ]
},
{
  t: "Muscle",
  s: `During muscle contraction, which of the following structures shortens?`,
  c: ["A band", "Sarcomere", "M line", "Myosin", "Actin"],
  a: 1,
  key: "The slide doesn't show an answer for this question; the answer here is supplied.",
  e: `As actin slides past myosin toward the M line, the Z lines are pulled closer together, so the sarcomere shortens (along with the I band and H zone). The filaments themselves don't change length.`,
  w: [
    "The A band (length of thick filaments) stays the same.",
    "Correct — the sarcomere (Z line to Z line) shortens.",
    "The M line is a line in the middle of the A band; it doesn't shorten.",
    "Myosin filaments keep their length.",
    "Actin filaments keep their length; they slide."
  ]
},
{
  t: "Muscle",
  s: `Apart from actin and tropomyosin, which other protein is seen in the thin filament of skeletal muscle?`,
  c: ["Troponin", "Calmodulin", "Myosin", "Calcium"],
  a: 0,
  key: "The slide doesn't show an answer for this question; the answer here is supplied. The figures are from the 'Myofilaments' slide in the deck.",
  eimg: ["q44-thin-filament-a.png", "q44-thin-filament-b.png"],
  e: `The thin filament is F-actin, tropomyosin, and the troponin complex: TnT (binds tropomyosin), TnI (inhibits actin–myosin binding) and TnC (binds Ca²⁺). When calcium binds TnC, the complex shifts tropomyosin and exposes the myosin-binding sites on actin.`,
  w: [
    "Correct — troponin is the third thin filament protein.",
    "Calmodulin plays the calcium-binding role in smooth muscle, which has no troponin.",
    "Myosin forms the thick filament.",
    "Calcium is an ion that regulates contraction, not a filament protein."
  ]
},
{
  t: "Muscle",
  s: `In smooth muscle, which protein plays the same role as troponin C in skeletal muscle?`,
  c: ["Calmodulin", "Tropomyosin", "Myosin light chain kinase", "Troponin I", "Caldesmon"],
  a: 0,
  key: "The slide gives only the question and the answer (calmodulin); the other choices were added so it works as multiple choice.",
  e: `Smooth muscle has no troponin. Ca²⁺ instead binds calmodulin; the Ca²⁺–calmodulin complex activates myosin light chain kinase (MLCK), which phosphorylates the regulatory myosin light chain so myosin can bind actin. So calmodulin plays the calcium-sensing role that troponin C plays in skeletal muscle.`,
  w: [
    "Correct — the Ca²⁺-binding protein of smooth muscle.",
    "Tropomyosin is present in smooth muscle but doesn't bind Ca²⁺; in skeletal muscle it is the protein troponin moves.",
    "MLCK is the enzyme Ca²⁺–calmodulin activates — the next step, not the Ca²⁺ sensor itself.",
    "Troponin I is the inhibitory subunit of skeletal troponin, and smooth muscle has no troponin.",
    "Caldesmon is a smooth muscle actin-binding regulator, but it isn't the Ca²⁺ sensor."
  ]
},
{
  t: "Muscle",
  s: `What is actin?`,
  c: ["Myofilament", "Myosin", "Muscle fibers", "Myofibrils", "Myocardium"],
  a: 0,
  e: `Actin is a myofilament — specifically the thin filament. Myofilaments are the contractile proteins inside a muscle cell: actin (thin) and myosin (thick).`,
  w: [
    "Correct — actin is the thin myofilament.",
    "Myosin is the other (thick) myofilament, a different protein.",
    "A muscle fiber is a whole muscle cell.",
    "A myofibril is a bundle of myofilaments inside the cell.",
    "Myocardium is the muscular layer of the heart."
  ]
},
{
  t: "Muscle",
  s: `Which fiber type makes up fast-twitch muscle?`,
  c: ["Red fibers", "White fibers", "Intermediate fibers", "All of the above", "None of the above"],
  a: 1, ns: true,
  e: `White (type II, fast-twitch) fibers are larger, have fewer mitochondria and little myoglobin, store glycogen and rely on anaerobic glycolysis. They contract quickly and powerfully but fatigue fast — for bursts of power.`,
  w: [
    "Red fibers (type I) make up slow-twitch muscle: small, many mitochondria and myoglobin, fatigue-resistant, for endurance.",
    "Correct — white fibers are fast-twitch.",
    "Intermediate fibers have mixed properties and are not the defining fast-twitch type.",
    "Red and intermediate fibers are not fast-twitch, so not all apply.",
    "White fibers do fit, so 'none' is wrong."
  ]
},
{
  t: "Muscle",
  s: `What is the line that bisects the dark band in muscle?`,
  c: ["A band", "I band", "Z line", "H band", "M line"],
  a: 3, ns: true,
  key: "Answer per the slide key. Note: the H band (H zone) is the pale zone across the middle of the A band, and the M line runs down the middle of the H band — so if a question asks for the line in the very center, it's the M line.",
  e: `The dark band is the A band. Its central, lighter region — where only thick filaments are present — is the H band, which divides the A band into two halves. The M line runs through the middle of the H band, and the Z line runs through the I band. A sarcomere runs from Z line to Z line.`,
  w: [
    "The A band is the dark band itself.",
    "The I band is the light band containing only thin filaments.",
    "The Z line bisects the I band, not the A band.",
    "Correct (per key) — the H band bisects the A band.",
    "The M line runs through the H band, at the center of the A band."
  ]
},
{
  t: "Muscle",
  s: `What type of muscle is composed of spindle-shaped cells?`,
  c: ["Skeletal muscle", "Cardiac muscle", "Smooth muscle", "Both A and B", "A, B and C"],
  a: 2, ns: true,
  e: `Smooth muscle cells are spindle-shaped (fusiform) — thick in the middle and tapered at the ends — with a single central nucleus and no striations.`,
  w: [
    "Skeletal muscle cells are long cylinders with many peripheral nuclei.",
    "Cardiac muscle cells are branched with one or two central nuclei.",
    "Correct — smooth muscle is spindle-shaped.",
    "Neither skeletal nor cardiac cells are spindle-shaped.",
    "Only smooth muscle fits."
  ]
},
{
  t: "Muscle",
  s: `What is a single neuron and the aggregation of muscle fibers innervated by that single neuron called?`,
  c: ["Motor unit", "Motor neuron", "Motor end plate", "Neuromuscular spindle", "Neurotransmitter"],
  a: 0,
  e: `A motor unit is one motor neuron plus all of the muscle fibers it innervates. Small motor units (few fibers per neuron, e.g. eye muscles) give fine control; large ones (e.g. thigh muscles) give power.`,
  w: [
    "Correct — neuron plus its muscle fibers.",
    "A motor neuron is only the nerve cell, without its muscle fibers.",
    "The motor end plate is the point where the nerve contacts the muscle (neuromuscular junction).",
    "A neuromuscular spindle is a stretch receptor in muscle.",
    "A neurotransmitter is the chemical (here acetylcholine) released at the synapse."
  ]
},
{
  t: "Muscle",
  s: `What are the thick filaments composed of?`,
  c: ["Myofilaments", "Myosin", "Muscle fibers", "Myofibrils", "Myocardium"],
  a: 1,
  e: `Thick filaments are made of myosin II molecules arranged with their heads projecting outward to form cross-bridges with actin. Thin filaments are actin (with tropomyosin and troponin).`,
  w: [
    "Myofilament is the general term for both actin and myosin filaments — not the specific protein.",
    "Correct — thick filaments are myosin.",
    "A muscle fiber is the entire cell.",
    "A myofibril is a bundle of myofilaments.",
    "Myocardium is heart muscle tissue."
  ]
},
{
  t: "Muscle",
  s: `Which fiber type makes up slow-twitch muscle?`,
  c: ["Red fibers", "White fibers", "Intermediate fibers", "All of the above", "None of the above"],
  a: 0, ns: true,
  e: `Red (type I) fibers make up slow-twitch muscle. They are smaller, rich in mitochondria and myoglobin (hence red), use aerobic metabolism, and resist fatigue — suited to endurance and posture.`,
  w: [
    "Correct — red fibers are slow-twitch.",
    "White fibers are fast-twitch.",
    "Intermediate fibers are not the defining slow-twitch type.",
    "White and intermediate fibers aren't slow-twitch.",
    "Red fibers fit, so 'none' is wrong."
  ]
},
{
  t: "Muscle",
  s: `What type of muscle has intercalated discs?`,
  c: ["Skeletal muscle", "Cardiac muscle", "Smooth muscle", "Both A and B", "A, B and C"],
  a: 1, ns: true,
  e: `Intercalated discs are specialized junctions between cardiac muscle cells. They contain fascia adherens and desmosomes (holding cells together) and gap junctions (letting the electrical impulse spread so the heart contracts as a unit).`,
  w: [
    "Skeletal muscle fibers are single long multinucleated cells with no intercalated discs.",
    "Correct — only cardiac muscle has them.",
    "Smooth muscle cells connect via gap junctions but have no intercalated discs.",
    "Skeletal muscle doesn't have them.",
    "Only cardiac muscle has them."
  ]
},
{
  t: "Muscle",
  s: `What is the outer connective tissue covering of a muscle?`,
  c: ["Epimysium", "Sarcoplasm", "Perimysium", "Sarcolemma", "Endomysium"],
  a: 0,
  e: `The epimysium is the dense connective tissue wrapping the entire muscle. Inside, the perimysium surrounds fascicles, and the endomysium surrounds each individual muscle fiber.`,
  w: [
    "Correct — the epimysium surrounds the whole muscle.",
    "Sarcoplasm is the cytoplasm of a muscle cell.",
    "Perimysium surrounds fascicles (bundles of fibers).",
    "Sarcolemma is the plasma membrane of a muscle cell.",
    "Endomysium surrounds each individual muscle fiber."
  ]
},
{
  t: "Skin",
  s: `Which layer of the epidermis has cells that contain keratohyaline granules?`,
  c: ["Stratum basale", "Stratum spinosum", "Stratum granulosum", "Stratum lucidum", "Stratum corneum"],
  a: 2,
  key: "The slide doesn't show an answer for this question; the answer here is supplied.",
  e: `Cells of the stratum granulosum contain dark basophilic keratohyalin granules (rich in profilaggrin) that help bundle keratin filaments, plus lamellar granules that release lipids to form the water barrier.`,
  w: [
    "Stratum basale is the single layer of dividing stem cells.",
    "Stratum spinosum has spiny desmosome connections; its cells contain keratin bundles and lamellar granules starting to form, but not keratohyalin granules.",
    "Correct — keratohyalin granules define the granular layer.",
    "Stratum lucidum is a clear layer (thick skin only) with eleidin, no nuclei or granules.",
    "Stratum corneum is dead, flattened, keratinized cells."
  ]
},
{
  t: "Skin",
  s: `Which cell is a macrophage found in the skin?`,
  c: ["Kupffer cells", "Histiocyte", "Dust cell", "Langerhans cell", "Microglia"],
  a: 3,
  key: "The slide doesn't show an answer for this question; the answer here is supplied.",
  e: `Langerhans cells are the bone-marrow-derived antigen-presenting cells of the epidermis, part of the mononuclear phagocyte system — the classic "macrophage of the skin" in these lists. They capture antigen and carry it to lymph nodes.`,
  w: [
    "Kupffer cells are liver macrophages.",
    "Histiocyte is a general term for connective tissue macrophages, not the specific skin cell.",
    "Dust cells are alveolar macrophages in the lung.",
    "Correct — Langerhans cells in the epidermis.",
    "Microglia are the macrophages of the central nervous system."
  ]
},
{
  t: "Skin",
  s: `What is the half-moon-shaped white area on a nail called?`,
  c: ["Lunula", "Eponychium", "Matrix", "Nail bed", "Root"],
  a: 0,
  key: "The slide doesn't show an answer for this question; the answer here is supplied.",
  e: `The lunula is the white crescent at the base of the nail — the visible distal part of the nail matrix, which looks white because the thick matrix epithelium hides the underlying capillaries.`,
  w: [
    "Correct — the white half-moon.",
    "The eponychium is the cuticle, the skin fold over the nail root.",
    "The matrix is the growing region; most of it is hidden under the proximal fold, and only its visible tip is the lunula.",
    "The nail bed is the epithelium under the nail plate; it looks pink.",
    "The root is the proximal part of the nail hidden under the skin fold."
  ]
},
{
  t: "Skin",
  s: `Which of the following is the most abundant sensory receptor of the skin?`,
  c: ["Free nerve endings", "Ruffini's corpuscles", "Pacinian corpuscles", "Krause's end bulbs", "Meissner's corpuscles"],
  a: 0,
  key: "The slide doesn't show an answer for this question; the answer here is supplied.",
  e: `Free nerve endings are the most numerous sensory receptors in skin. They reach into the epidermis and detect pain, temperature, itch and crude touch.`,
  w: [
    "Correct — the most numerous receptors.",
    "Ruffini corpuscles sense sustained stretch in the dermis.",
    "Pacinian corpuscles sense vibration and deep pressure in the deep dermis/hypodermis.",
    "Krause end bulbs are found mainly in mucocutaneous areas.",
    "Meissner corpuscles sense light touch in the dermal papillae of hairless skin."
  ]
},
{
  t: "Skin",
  s: `Which layer of the epidermis is present only in thick skin?`,
  c: ["Stratum basale", "Stratum spinosum", "Stratum granulosum", "Stratum lucidum", "Stratum corneum"],
  a: 3,
  key: "The slide doesn't show an answer for this question; the answer here is supplied.",
  e: `The stratum lucidum is a thin, clear, eosinophilic layer between the stratum granulosum and stratum corneum, found only in thick skin of the palms and soles. Its cells have no nuclei or organelles and contain eleidin.`,
  w: [
    "Stratum basale is present in all skin.",
    "Stratum spinosum is present in all skin.",
    "Stratum granulosum is present in all skin (thinner in thin skin).",
    "Correct — only in thick skin.",
    "Stratum corneum is present in all skin (very thick in thick skin)."
  ]
},
{
  t: "Skin",
  s: `Which of the following is found in the hair follicle?`,
  c: ["Pigment epithelium", "Müller cells", "Huxley's layer", "Horizontal cells", "Cones"],
  a: 2,
  key: "The slide doesn't show an answer for this question; the answer here is supplied.",
  e: `The inner root sheath of a hair follicle has three layers: Henle's layer (outer), Huxley's layer (middle) and the cuticle of the inner root sheath. All the other choices are parts of the retina.`,
  w: [
    "Pigment epithelium is the outer layer of the retina.",
    "Müller cells are the supporting glial cells of the retina.",
    "Correct — part of the inner root sheath.",
    "Horizontal cells are retinal interneurons.",
    "Cones are retinal photoreceptors."
  ]
},
{
  t: "Bone & Cartilage",
  s: `What is unmineralized bone matrix?`,
  c: ["Osteoclast", "Osteon", "Osteocyte", "Osteoblast", "Osteoid"],
  a: 4,
  e: `Osteoid is the newly secreted, not-yet-mineralized organic bone matrix — mostly type I collagen plus proteins such as osteocalcin — laid down by osteoblasts before hydroxyapatite is deposited in it.`,
  w: [
    "An osteoclast is the bone-resorbing cell.",
    "An osteon is a Haversian system — a structural unit of compact bone.",
    "An osteocyte is a mature bone cell in a lacuna.",
    "An osteoblast is the cell that makes osteoid, not the matrix itself.",
    "Correct — osteoid is unmineralized matrix."
  ]
},
{
  t: "Skin",
  s: `Which of the following is NOT a function of skin?`,
  c: ["Vitamin D production", "Protection from water loss", "Sensory reception", "Heat regulation", "All are functions of skin"],
  a: 4, ns: true,
  key: "The slide doesn't show an answer for this question; the answer here is supplied.",
  e: `Every listed item is a real function of skin: UV light converts 7-dehydrocholesterol to vitamin D₃ in the epidermis; the stratum corneum and lamellar-granule lipids block water loss; receptors give touch, pain, temperature and pressure sensation; and sweating and blood flow changes regulate heat.`,
  w: [
    "Skin does make vitamin D precursor with UV light.",
    "Skin does protect against water loss.",
    "Skin does have sensory receptors.",
    "Skin does help regulate body temperature.",
    "Correct — all are functions of skin."
  ]
},
{
  t: "Skin",
  s: `Which layer of the epidermis contains dividing cells?`,
  c: ["Stratum basale", "Stratum spinosum", "Stratum granulosum", "Stratum lucidum", "Stratum corneum"],
  a: 0,
  key: "The slide doesn't show an answer for this question; the answer here is supplied.",
  e: `The stratum basale (germinativum) is a single layer of cuboidal-to-columnar stem cells on the basement membrane; it is the main site of mitosis that renews the epidermis. (Some division also happens in the deepest stratum spinosum, but the basale is the best answer.)`,
  w: [
    "Correct — the basal layer contains the dividing stem cells.",
    "Stratum spinosum has only occasional mitoses in its deepest part; it is mainly maturing keratinocytes.",
    "Stratum granulosum cells are differentiating and no longer divide.",
    "Stratum lucidum cells have lost their nuclei.",
    "Stratum corneum cells are dead."
  ]
}
];
