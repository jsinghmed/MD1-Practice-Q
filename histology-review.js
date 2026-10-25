// Histology — practice questions written from the professor's "Quick Review – MSK Histology" slides.
// Added after the 63 original questions (so existing progress keeps its place).
// src: "rev" marks them; img = image shown with the question, eimg = figures shown with the explanation.
// ns: true keeps choices in order (used when choices are image labels).

window.QUESTIONS.push(
// ---------------- Epithelium & junctions ----------------
{
  src: "rev", t: "Junctions & Cytoskeleton",
  s: `The electron micrograph shows the junctional complex between two intestinal epithelial cells. Which labeled structure forms the seal that blocks the paracellular passage of solutes?`,
  img: "hr-junction-em.jpg",
  c: ["A", "B", "C", "D", "E"], a: 1, ns: true,
  e: `B is the zonula occludens (tight junction), the most apical member of the junctional complex. Claudins and occludin fuse the outer leaflets of neighbouring membranes, sealing the space between cells so substances can't leak past them.`,
  w: ["A — microvilli on the apical surface.", "Correct — tight junction (zonula occludens).", "C — zonula adherens, a belt of E-cadherin linked to actin; adhesion, not a seal.", "D — desmosome (macula adherens), a spot weld anchoring keratin filaments.", "E — the terminal web, the actin network the microvilli root into."],
  eimg: ["hr-junction-diagram.jpg"]
},
{
  src: "rev", t: "Junctions & Cytoskeleton",
  s: `In the same electron micrograph of the junctional complex, which labeled structure anchors intermediate (keratin) filaments?`,
  img: "hr-junction-em.jpg",
  c: ["A", "B", "C", "D", "E"], a: 3, ns: true,
  e: `D is the macula adherens (desmosome), a spot-like weld. Desmogleins and desmocollins (cadherins) bridge the cells, and dense plaques inside each cell anchor keratin intermediate filaments. It is the target of autoantibodies in pemphigus vulgaris.`,
  w: ["Microvilli contain actin cores, not intermediate filaments.", "The tight junction is linked to actin and seals the space.", "The zonula adherens links E-cadherin to actin, not intermediate filaments.", "Correct — desmosome.", "The terminal web is mostly actin (with some intermediate filaments), and it isn't a junction."]
},
{
  src: "rev", t: "Junctions & Cytoskeleton",
  s: `Which sequence correctly lists the components of the epithelial junctional complex from the apical surface toward the base?`,
  c: ["Zonula adherens → zonula occludens → macula adherens", "Zonula occludens → zonula adherens → macula adherens", "Macula adherens → zonula occludens → zonula adherens", "Zonula occludens → macula adherens → zonula adherens", "Gap junction → zonula occludens → hemidesmosome"],
  a: 1,
  e: `From apical to basal: tight junction (zonula occludens) → adherens junction (zonula adherens) → desmosome (macula adherens). Gap junctions lie along the lateral membrane, and hemidesmosomes attach the base of the cell to the basal lamina.`,
  w: ["The tight junction is always the most apical.", "Correct.", "The desmosome lies below both belts.", "The adherens belt sits just below the tight junction, above desmosomes.", "Gap junctions and hemidesmosomes aren't part of the classic junctional complex."],
  eimg: ["hr-junction-summary.jpg"]
},
{
  src: "rev", t: "Junctions & Cytoskeleton",
  s: `A carcinoma of the colon becomes invasive after tumor cells lose a calcium-dependent adhesion protein that forms a belt around the apical part of each cell and links to actin. Which junction has been lost?`,
  c: ["Tight junction", "Adherens junction", "Desmosome", "Gap junction", "Hemidesmosome"],
  a: 1,
  e: `The adherens junction (zonula adherens) is a belt of E-cadherin (Ca²⁺-dependent) linked inside the cell to actin. Loss of E-cadherin lets tumor cells detach from each other, a key step in invasion and metastasis.`,
  w: ["Tight junctions use claudins/occludin and form the seal.", "Correct — E-cadherin belt linked to actin.", "Desmosomes also use cadherins, but they're spot welds anchored to keratin, not an actin belt.", "Gap junctions are connexin channels.", "Hemidesmosomes use integrins to bind the basal lamina."]
},
{
  src: "rev", t: "Junctions & Cytoskeleton",
  s: `Besides blocking paracellular leakage, tight junctions have a second function that keeps epithelial cells polarized. What is it?`,
  c: ["They anchor keratin filaments to the cell membrane", "They keep apical and basolateral membrane proteins separate", "They allow ions to pass directly between neighbouring cells", "They attach cells to the basal lamina", "They transmit contractile force between cells"],
  a: 1,
  e: `The tight junction acts as a "fence" in the plasma membrane, stopping apical proteins (e.g., transporters, enzymes) from diffusing into the basolateral domain and vice versa. This keeps the cell polarized. Examples of tight junction barriers: blood–brain barrier, blood–testis barrier, gallbladder and distal convoluted tubule.`,
  w: ["That's the desmosome.", "Correct — the membrane 'fence' function.", "That's the gap junction.", "That's the hemidesmosome.", "Force transmission is the job of adherens junctions and desmosomes."]
},
{
  src: "rev", t: "Skin",
  s: `A 74-year-old man has tense, fluid-filled blisters on his trunk and limbs (see image). Biopsy shows a split beneath the epidermis, and immunofluorescence shows a linear band of IgG along the basement membrane. The autoantibodies target which structure?`,
  img: "hr-pemphigoid.jpg",
  c: ["Desmosomes", "Hemidesmosomes", "Tight junctions", "Gap junctions", "Adherens junctions"],
  a: 1,
  e: `This is bullous pemphigoid: autoantibodies against hemidesmosome proteins (BP180/BP230) detach the basal cells from the basal lamina, producing tense subepidermal blisters with linear IgG at the basement membrane. Because the whole epidermis lifts off intact, the blisters are tense and don't rupture easily.`,
  w: ["Antibodies to desmosomes (desmoglein) cause pemphigus vulgaris: flaccid intraepidermal blisters with a net-like pattern and oral erosions.", "Correct — bullous pemphigoid.", "Tight junctions aren't the target of blistering diseases.", "Gap junctions aren't targets here.", "Adherens junctions aren't the target in pemphigoid."],
  eimg: ["hr-hemidesmosome.jpg"]
},
{
  src: "rev", t: "Junctions & Cytoskeleton",
  s: `The electron micrograph shows a structure between two adjacent plasma membranes made of regularly arranged channels. Each channel unit is built from how many protein subunits, and what can pass through it?`,
  img: "hr-connexon.jpg",
  c: ["4 claudins; water only", "6 connexins; ions and small molecules", "6 cadherins; proteins and RNA", "12 integrins; ions only", "2 occludins; no molecules pass"],
  a: 1,
  e: `This is a gap junction. Each connexon is a hexamer of 6 connexins; two connexons (one from each cell) dock to form a channel. Ions, second messengers and small metabolites pass directly between cells, coupling them electrically and metabolically — important in cardiac and smooth muscle, the CNS, and osteocytes.`,
  w: ["Claudins form tight junctions.", "Correct.", "Cadherins form adherens junctions and desmosomes; large molecules can't pass gap junctions.", "Integrins form hemidesmosomes and focal adhesions.", "Occludin is a tight junction protein."],
  eimg: ["hr-gap-junction.jpg"]
},
{
  src: "rev", t: "Connective Tissue & ECM",
  s: `Which component of the basal lamina gives it a strong negative charge, attracting cations and water and acting as a charge barrier (e.g., in the glomerulus)?`,
  c: ["Type IV collagen", "Laminin", "Heparan sulfate proteoglycan", "Entactin (nidogen)", "Fibronectin"],
  a: 2,
  e: `Basal lamina components: type IV collagen (structural network), laminin (adhesive glycoprotein that binds cells' integrins and type IV collagen), heparan sulfate proteoglycan (perlecan — strongly negative, attracts cations and water), and entactin/fibronectin (linkers between laminin and type IV collagen).`,
  w: ["Type IV collagen gives structural stability.", "Laminin is the adhesive bridge to cells.", "Correct — sulfated GAG chains carry the negative charge.", "Entactin links laminin to type IV collagen.", "Fibronectin links cells to matrix collagen."],
  eimg: ["hr-basal-lamina.jpg"]
},
{
  src: "rev", t: "Connective Tissue & ECM",
  s: `Under electron microscopy, the basement membrane beneath an epithelium has three layers. Which layer is NOT part of the basal lamina proper and is made by the underlying connective tissue?`,
  c: ["Lamina lucida", "Lamina densa", "Reticular lamina", "Plasma membrane of the basal cell", "Hemidesmosome plaque"],
  a: 2,
  e: `The basal lamina = lamina lucida + lamina densa, made by the epithelial cells. Beneath it, the reticular lamina (type III reticular fibres and anchoring fibrils, made by fibroblasts) belongs to the connective tissue. Together they make the light-microscope "basement membrane."`,
  w: ["Lamina lucida is part of the basal lamina.", "Lamina densa is part of the basal lamina.", "Correct — made by connective tissue.", "The cell membrane isn't a layer of the basement membrane.", "The hemidesmosome is a cell junction, not a basement membrane layer."]
},
// ---------------- Connective tissue ----------------
{
  src: "rev", t: "Connective Tissue & ECM",
  s: `A biopsy of a lymph node stained with silver shows a delicate, branching meshwork of thin fibres supporting the lymphocytes. These fibres are made of which collagen type?`,
  c: ["Type I", "Type II", "Type III", "Type IV", "Type VII"],
  a: 2,
  e: `Reticular fibres are thin fibres of type III collagen that form a fine supporting network in lymphoid organs (lymph node, spleen), bone marrow and liver. They are argyrophilic — they stain black with silver.`,
  w: ["Type I forms thick, strong fibres of bone, tendon and dermis.", "Type II is in cartilage and vitreous.", "Correct — reticular fibres.", "Type IV is in basement membranes and doesn't form fibres.", "Type VII forms anchoring fibrils under the epidermis."]
},
{
  src: "rev", t: "Connective Tissue & ECM",
  s: `A 19-year-old man has microscopic hematuria, progressive renal failure, and high-frequency hearing loss. Eye examination shows bilateral conical deformation of the anterior lens. His maternal uncle needed dialysis at age 38. A defect in which protein is most likely?`,
  c: ["Type I collagen", "Type II collagen", "Type III collagen", "Type IV collagen", "Fibrillin-1"],
  a: 3,
  e: `Alport syndrome: usually X-linked mutation of the α5 chain of type IV collagen (COL4A5), part of the "α3-α4-α5" network of specialized basement membranes. Glomerular basement membrane → hematuria, proteinuria, ESRD by ~40; cochlea → sensorineural deafness (high frequencies first); lens capsule → anterior lenticonus.`,
  w: ["Type I defects cause osteogenesis imperfecta.", "Type II defects affect cartilage and vitreous.", "Type III defects cause vascular Ehlers–Danlos.", "Correct — Alport syndrome.", "Fibrillin defects cause Marfan syndrome (lens dislocation, not lenticonus)."]
},
{
  src: "rev", t: "Connective Tissue & ECM",
  s: `A 28-year-old woman has thin, translucent skin, easy bruising, and is admitted after spontaneous rupture of her splenic artery. Her joints are not unusually mobile. A mutation in which collagen is most likely?`,
  c: ["Type I", "Type II", "Type III", "Type IV", "Type V"],
  a: 2,
  e: `Vascular Ehlers–Danlos syndrome (old type IV) is caused by COL3A1 mutations affecting type III collagen, which is abundant in vessel walls, hollow organs and skin. It carries the risk of arterial, bowel and uterine rupture and is the most dangerous EDS type.`,
  w: ["Type I defects cause osteogenesis imperfecta.", "Type II is cartilage.", "Correct — vascular EDS.", "Type IV defects cause Alport syndrome.", "Type V is involved in classic EDS (hyperelastic skin, hypermobile joints), not arterial rupture."]
},
{
  src: "rev", t: "Connective Tissue & ECM",
  s: `A 15-year-old girl can bend her thumb back to her forearm and her skin stretches far beyond normal before recoiling (see images). She bruises easily, and wounds heal with wide "cigarette paper" scars. This group of disorders results from which type of defect?`,
  img: "hr-eds-joint.jpg",
  c: ["Defective synthesis or processing of collagen", "Deficiency of lysosomal enzymes that degrade GAGs", "Mutation of fibrillin-1", "Deficiency of α1-antitrypsin", "Autoantibodies to hemidesmosomes"],
  a: 0,
  e: `Ehlers–Danlos syndromes are a family of mostly autosomal dominant disorders of collagen synthesis or processing (13 types in the current classification). Classic features: hyperelastic skin, hypermobile joints and easy bruising; also flat feet and high-arched palate. Classic EDS involves type V collagen; vascular EDS involves type III.`,
  w: ["Correct — collagen defect.", "That describes the mucopolysaccharidoses.", "Fibrillin-1 defects cause Marfan syndrome (tall, long limbs, lens dislocation).", "α1-antitrypsin deficiency causes emphysema and liver disease.", "That is bullous pemphigoid."],
  eimg: ["hr-eds-skin.jpg"]
},
{
  src: "rev", t: "Connective Tissue & ECM",
  s: `A child with osteogenesis imperfecta has bowed legs (see image), opalescent brownish teeth, and bluish sclerae. Why do the sclerae look blue?`,
  img: "hr-oi.jpg",
  c: ["Deposition of a blue pigment in the sclera", "Thin sclera lets the underlying choroidal veins show through", "Increased melanin in the conjunctiva", "Accumulation of glycosaminoglycans in the cornea", "Hemorrhage beneath the sclera"],
  a: 1,
  e: `The sclera is made largely of type I collagen. With defective type I collagen it is thin and translucent, so the dark, vascular choroid beneath shows through as blue. Other type I collagen tissues are affected too: bone (fractures, bowing, saber-shin tibia) and dentin (dentinogenesis imperfecta).`,
  w: ["No pigment is deposited.", "Correct.", "Melanin isn't increased.", "GAG accumulation (e.g., Hurler) causes corneal clouding, not blue sclerae.", "Hemorrhage would be red and patchy."]
},
{
  src: "rev", t: "Connective Tissue & ECM",
  s: `Which glycoprotein of the connective tissue matrix links cells (via integrins) to collagen fibres and helps cells attach and migrate during wound healing?`,
  c: ["Laminin", "Fibronectin", "Hyaluronic acid", "Elastin", "Aggrecan"],
  a: 1,
  e: `Fibronectin is a dimeric adhesive glycoprotein with binding sites for integrins on cells, collagen and heparin. It links cells to the collagen of the connective tissue matrix. Laminin does the equivalent job in the basal lamina.`,
  w: ["Laminin is the basal lamina adhesive protein.", "Correct.", "Hyaluronic acid is a GAG, not a glycoprotein.", "Elastin is a fibrous protein giving recoil.", "Aggrecan is the large cartilage proteoglycan."],
  eimg: ["hr-laminin.jpg"]
},
{
  src: "rev", t: "Connective Tissue & ECM",
  s: `The cornea must stay transparent. The regular spacing of its collagen fibrils depends on a sulfated glycosaminoglycan that is also found in cartilage and bone. Which GAG is it?`,
  c: ["Hyaluronic acid", "Keratan sulfate", "Dermatan sulfate", "Heparin", "Heparan sulfate"],
  a: 1,
  e: `Keratan sulfate is concentrated in the cornea (keeping collagen fibrils evenly spaced for transparency), and also in cartilage and bone. Locations to remember: hyaluronic acid — synovial fluid, vitreous; chondroitin sulfate — cartilage (most abundant); dermatan sulfate — skin, vessels, heart valves; heparan sulfate — basement membrane and cell surfaces; heparin — mast cell granules.`,
  w: ["Hyaluronic acid is unsulfated (joints, vitreous).", "Correct.", "Dermatan sulfate is in skin, vessels and heart valves.", "Heparin is stored in mast cells.", "Heparan sulfate is in basement membranes."]
},
{
  src: "rev", t: "Connective Tissue & ECM",
  s: `A biopsy of chronically inflamed connective tissue shows cells with abundant basophilic cytoplasm, a pale perinuclear Golgi zone, and an eccentric nucleus with heterochromatin arranged like a clock face. From which cells do these arise, and what do they secrete?`,
  c: ["Monocytes; cytokines", "B lymphocytes; antibodies", "T lymphocytes; perforin", "Fibroblasts; collagen", "Mast cells; histamine"],
  a: 1,
  e: `These are plasma cells — terminally differentiated B lymphocytes that secrete antibodies. Abundant RER makes the cytoplasm basophilic; the Golgi appears as a pale "hof" next to the nucleus; and the heterochromatin gives the classic "clock-face" (cartwheel) nucleus.`,
  w: ["Monocytes become macrophages.", "Correct — plasma cells.", "T cells don't have this morphology.", "Fibroblasts are spindle-shaped with elongated nuclei.", "Mast cells are packed with metachromatic granules."]
},
{
  src: "rev", t: "Connective Tissue & ECM",
  s: `Which resident ("fixed") connective tissue cell synthesizes collagen, elastin and the ground substance?`,
  c: ["Macrophage", "Mast cell", "Fibroblast", "Plasma cell", "Adipocyte"],
  a: 2,
  e: `Fibroblasts are the main fixed cells of connective tissue. They secrete collagen and elastic fibres and the ground substance (GAGs, proteoglycans, glycoproteins). Macrophages come from blood monocytes; mast cells store histamine and heparin; plasma cells make antibodies; adipocytes store triglyceride.`,
  w: ["Macrophages phagocytose and present antigen.", "Mast cells mediate IgE allergy.", "Correct.", "Plasma cells secrete antibodies.", "Adipocytes store fat."]
},
// ---------------- Cartilage & bone ----------------
{
  src: "rev", t: "Bone & Cartilage",
  s: `A biopsy of the epiglottis shows chondrocytes in lacunae surrounded by a matrix packed with dark-staining branching fibres. Which cartilage type is this, and what does its matrix contain?`,
  c: ["Hyaline; type II collagen only", "Elastic; type II collagen plus elastic fibres", "Fibrocartilage; type I and II collagen", "Fibrocartilage; elastic fibres only", "Hyaline; type I collagen"],
  a: 1,
  e: `Elastic cartilage (external ear, epiglottis, auditory tube) has type II collagen plus abundant elastic fibres, giving it flexibility; it has a perichondrium. Hyaline cartilage (articular, costal, trachea, growth plate) has type II only. Fibrocartilage (IV disc, pubic symphysis, menisci) has types I and II, rows of cells between thick collagen bundles, and no perichondrium.`,
  w: ["Hyaline lacks elastic fibres.", "Correct.", "Fibrocartilage shows thick collagen bundles, not dark elastic fibres.", "Fibrocartilage isn't elastic.", "Hyaline is type II."],
  eimg: ["hr-cartilage-types.jpg"]
},
{
  src: "rev", t: "Bone & Cartilage",
  s: `Which cartilage type has rows of chondrocytes lying between thick bundles of type I collagen, lacks a perichondrium, and is found in the intervertebral disc and pubic symphysis?`,
  c: ["Hyaline cartilage", "Elastic cartilage", "Fibrocartilage", "Articular cartilage", "Growth plate cartilage"],
  a: 2,
  e: `Fibrocartilage combines dense type I collagen bundles (resisting tension) with type II collagen and cartilage matrix (resisting compression). It has no perichondrium. Sites: annulus fibrosus of IV discs, pubic symphysis, menisci, and some tendon insertions.`,
  w: ["Hyaline has a glassy matrix of type II collagen.", "Elastic has elastic fibres and a perichondrium.", "Correct.", "Articular cartilage is hyaline.", "Growth plate cartilage is hyaline."]
},
{
  src: "rev", t: "Bone & Cartilage",
  s: `After an arthroscopic injury, a defect in the articular cartilage of the femoral condyle fails to regenerate. Besides being avascular, what feature of articular cartilage explains this poor repair?`,
  c: ["It contains type I collagen", "It lacks a perichondrium", "Its chondrocytes have no lacunae", "It is calcified", "It is nourished only by blood vessels"],
  a: 1,
  e: `Articular hyaline cartilage has no perichondrium, so there are no chondroprogenitor cells to supply new chondroblasts (appositional growth/repair). It is nourished only by diffusion from synovial fluid. Both features mean damage is essentially permanent.`,
  w: ["It contains type II collagen.", "Correct — no perichondrium.", "Chondrocytes sit in lacunae.", "Articular cartilage isn't calcified (except its deepest layer).", "It is nourished by diffusion from synovial fluid, not blood vessels."]
},
{
  src: "rev", t: "Bone & Cartilage",
  s: `A 45-year-old woman has symmetric swelling of the small joints of her hands with morning stiffness lasting over an hour. Rheumatoid factor is positive. Which tissue becomes inflamed and spreads over the joint surface to erode the articular cartilage?`,
  c: ["Perichondrium", "Periosteum", "Synovial membrane (pannus)", "Epiphyseal plate", "Joint capsule ligaments"],
  a: 2,
  e: `In rheumatoid arthritis the immune system attacks the synovium. The inflamed, thickened synovium (pannus) creeps over and erodes articular cartilage and subchondral bone. Because articular cartilage can't repair itself, the destruction is permanent if untreated. Clinically: warm, tender, swollen joints, morning stiffness; labs: ESR, rheumatoid factor.`,
  w: ["Articular cartilage has no perichondrium.", "The periosteum isn't the inflamed tissue.", "Correct — pannus.", "The growth plate is closed in adults.", "Capsule ligaments are stretched later, but don't erode cartilage."]
},
{
  src: "rev", t: "Bone & Cartilage",
  s: `Cartilage at the epiphyseal plate allows a long bone to lengthen. This growth occurs by which mechanism?`,
  c: ["Appositional growth from the perichondrium", "Interstitial growth by mitosis of existing chondrocytes", "Appositional growth by osteoblasts", "Interstitial growth of bone matrix", "Hypertrophy of osteocytes"],
  a: 1,
  e: `Interstitial growth (from within): chondrocytes divide inside the matrix, forming isogenous groups and columns — this lengthens the growth plate, articular cartilage and early cartilage models. Appositional growth (at the surface): chondroblasts from the perichondrium add new layers of matrix, increasing width. Bone itself can only grow appositionally.`,
  w: ["Appositional growth widens cartilage.", "Correct.", "Osteoblasts add bone at surfaces (width), not cartilage length.", "Bone can't grow interstitially.", "Osteocytes don't drive growth."],
  eimg: ["hr-cartilage-growth.jpg"]
},
{
  src: "rev", t: "Bone & Cartilage",
  s: `On a radiograph of a 10-year-old's femur, which region is the flared part of the bone between the shaft and the growth plate — a common site for bone tumors and osteomyelitis in children?`,
  c: ["Diaphysis", "Epiphysis", "Metaphysis", "Medullary cavity", "Articular cartilage"],
  a: 2,
  e: `A long bone has a shaft (diaphysis), two ends (epiphyses), and a flared metaphysis between the diaphysis and the epiphyseal plate. The metaphysis is a highly vascular zone of active bone formation. Also: periosteum outside (anchored by perforating fibres), endosteum lining the medullary cavity, and articular cartilage on the joint surface.`,
  w: ["The diaphysis is the shaft.", "The epiphysis is the end, beyond the growth plate.", "Correct.", "The medullary cavity is inside the shaft.", "Articular cartilage covers the joint surface."],
  eimg: ["hr-long-bone.jpg"]
},
{
  src: "rev", t: "Bone & Cartilage",
  s: `The light micrograph shows the epiphyseal plate of a growing long bone, with zones labeled A–D. In which zone is the mitotic index highest, with chondrocytes stacked in columns like a stack of coins?`,
  img: "hr-zones-abcd.jpg",
  c: ["A", "B", "C", "D"], a: 1, ns: true,
  e: `A = resting (reserve) zone; B = proliferative zone — rapid division, cells in columns parallel to the long axis (highest mitotic index); C = hypertrophic zone — large chondrocytes storing glycogen; D = calcified cartilage/ossification zone — septa calcify and osteoblasts lay bone on them.`,
  w: ["A — resting zone: small scattered chondrocytes, little division.", "Correct — proliferative zone.", "C — hypertrophic zone: cells enlarge rather than divide.", "D — calcification/ossification: cells die and bone is laid down."],
  eimg: ["hr-growth-plate.jpg"]
},
{
  src: "rev", t: "Bone & Cartilage",
  s: `In the same epiphyseal plate, in which labeled zone do the chondrocytes become very large and accumulate glycogen?`,
  img: "hr-zones-abcd.jpg",
  c: ["A", "B", "C", "D"], a: 2, ns: true,
  e: `C is the hypertrophic zone: chondrocytes swell, store glycogen and secrete factors (e.g., VEGF, alkaline phosphatase) that prepare the matrix for calcification. Next, in the calcified cartilage zone, thin matrix septa calcify with hydroxyapatite and the cells die.`,
  w: ["Resting zone.", "Proliferative zone — cells divide but stay small.", "Correct — hypertrophic zone.", "Calcified/ossification zone."]
},
{
  src: "rev", t: "Bone & Cartilage",
  s: `In the final zone of the epiphyseal plate, what happens?`,
  c: ["Chondrocytes divide rapidly in columns", "Chondrocytes enlarge and store glycogen", "Osteoblasts lay down bone on remnants of calcified cartilage", "Small chondrocytes rest in a hyaline matrix", "Osteoclasts form new cartilage"],
  a: 2,
  e: `Five zones from epiphysis to diaphysis: (1) resting, (2) proliferative, (3) hypertrophic, (4) calcified cartilage, (5) ossification — vessels invade, and osteoblasts deposit bone (osteoid) on the calcified cartilage spicules. This is endochondral ossification, which produces longitudinal growth.`,
  w: ["Proliferative zone.", "Hypertrophic zone.", "Correct — ossification zone.", "Resting zone.", "Osteoclasts resorb; they don't make cartilage."]
},
{
  src: "rev", t: "Bone & Cartilage",
  s: `In the light micrograph of developing bone, a row of cuboidal cells lines the bone surface (arrows). What are these cells, and what do they secrete?`,
  img: "hr-osteoblast-arrows.jpg",
  c: ["Osteocytes; hydroxyapatite", "Osteoblasts; osteoid", "Osteoclasts; acid and proteases", "Chondroblasts; type II collagen", "Fibroblasts; type III collagen"],
  a: 1,
  e: `Osteoblasts form a row of cuboidal cells on bone surfaces. They are polarized: they secrete osteoid (unmineralized matrix, mainly type I collagen) toward the bone surface, which later calcifies. When an osteoblast becomes surrounded by its own matrix it becomes an osteocyte, lying in a lacuna.`,
  w: ["Osteocytes sit inside lacunae within the matrix.", "Correct.", "Osteoclasts are large multinucleated cells in Howship lacunae.", "Chondroblasts make cartilage matrix.", "Fibroblasts are spindle-shaped connective tissue cells."],
  eimg: ["hr-bone-cells.jpg"]
},
{
  src: "rev", t: "Bone & Cartilage",
  s: `Osteoblasts are described as polarized cells. Which statement best describes this polarity?`,
  c: ["They secrete matrix in all directions equally", "They secrete matrix toward the older bone surface they rest on", "They secrete matrix only into the marrow cavity", "They release enzymes from a ruffled border", "They secrete matrix only after becoming osteocytes"],
  a: 1,
  e: `Osteoblasts release collagen and matrix proteins from the side facing the existing bone, adding layer upon layer of osteoid on the surface. As they become buried in this matrix they turn into osteocytes.`,
  w: ["Secretion is directional.", "Correct.", "Matrix is laid on bone surfaces, not into the marrow.", "A ruffled border is a feature of osteoclasts.", "Osteocytes maintain matrix; osteoblasts produce it."]
},
{
  src: "rev", t: "Bone & Cartilage",
  s: `During endochondral ossification of a long bone, where does the secondary ossification centre appear?`,
  c: ["In the diaphysis", "In the epiphysis", "In the metaphysis", "In the periosteal collar", "In the medullary cavity"],
  a: 1,
  e: `The first ossification centre to appear is the primary centre in the diaphysis (before birth), led by a periosteal bone collar and periosteal bud. Secondary centres appear later in the epiphyses (mostly after birth). The cartilage left between them becomes the epiphyseal plate.`,
  w: ["The diaphysis holds the primary centre.", "Correct.", "The metaphysis is the transition zone near the plate.", "The periosteal collar forms around the diaphysis.", "The medullary cavity forms by resorption."],
  eimg: ["hr-ossification.jpg"]
},
{
  src: "rev", t: "Bone & Cartilage",
  s: `What are the two main components of the calcified bone matrix?`,
  c: ["Type II collagen and chondroitin sulfate", "Type I collagen and hydroxyapatite", "Type IV collagen and laminin", "Elastin and calcium carbonate", "Type III collagen and calcium phosphate"],
  a: 1,
  e: `Bone matrix is organic osteoid (mostly type I collagen plus proteins such as osteocalcin) mineralized with hydroxyapatite crystals (calcium phosphate). Collagen gives tensile strength and flexibility; hydroxyapatite gives hardness.`,
  w: ["That describes cartilage matrix.", "Correct.", "That describes basal lamina.", "Bone isn't elastin or calcium carbonate.", "Type III isn't the bone collagen."]
},
// ---------------- Muscle ----------------
{
  src: "rev", t: "Muscle",
  s: `A 20-year-old sprinter tears his hamstring. Over several weeks the damaged fibers are replaced by new skeletal muscle fibers. Which cells are responsible?`,
  c: ["Fibroblasts", "Satellite cells", "Pericytes", "Myoepithelial cells", "Mature myocytes dividing by mitosis"],
  a: 1,
  e: `Satellite cells are muscle stem cells that sit between the sarcolemma and the basal lamina. After injury they proliferate and fuse to repair or replace fibers. Mature skeletal muscle fibers can't divide. Compare: cardiac muscle heals with scar (fibrosis); smooth muscle can regenerate by mitosis.`,
  w: ["Fibroblasts make scar tissue.", "Correct.", "Pericytes support capillaries.", "Myoepithelial cells surround glands.", "Skeletal muscle fibers are post-mitotic."]
},
{
  src: "rev", t: "Muscle",
  s: `After a myocardial infarction, how is the dead cardiac muscle replaced?`,
  c: ["By satellite cell regeneration", "By mitosis of surviving cardiomyocytes, restoring the muscle", "By fibrous scar tissue", "By smooth muscle cells", "By hypertrophy of the dead cells"],
  a: 2,
  e: `Cardiac muscle has essentially no satellite cells and adult cardiomyocytes barely divide, so infarcted myocardium is replaced by fibrous scar (type I collagen). Surviving cells may hypertrophy, but lost muscle isn't restored.`,
  w: ["Cardiac muscle lacks satellite cells.", "Adult cardiomyocytes have very little mitotic capacity.", "Correct — fibrosis.", "Smooth muscle doesn't replace heart muscle.", "Dead cells can't hypertrophy."]
},
{
  src: "rev", t: "Muscle",
  s: `Several hours after death, a body's muscles become rigid. What is the cause of rigor mortis?`,
  c: ["Excess ATP keeps myosin heads cycling", "Lack of ATP prevents myosin heads from detaching from actin", "Calcium is pumped back into the sarcoplasmic reticulum", "Troponin binds tropomyosin permanently", "Acetylcholine accumulates at the neuromuscular junction"],
  a: 1,
  e: `ATP binding is what releases the myosin head from actin. After death, ATP runs out while Ca²⁺ leaks into the cytoplasm, so cross-bridges form but can't detach — the muscles lock in place.`,
  w: ["ATP is depleted, not excess.", "Correct.", "Ca²⁺ leaks out of the SR; reuptake requires ATP.", "Not the mechanism.", "ACh accumulation would cause twitching, not rigor."]
},
{
  src: "rev", t: "Muscle",
  s: `In skeletal muscle, the triad seen under the electron microscope consists of what?`,
  c: ["One T-tubule and two terminal cisternae of the sarcoplasmic reticulum", "Two T-tubules and one terminal cisterna", "One Z disc and two M lines", "Actin, myosin and titin", "A gap junction, desmosome and fascia adherens"],
  a: 0,
  e: `A triad is a T-tubule flanked by two terminal cisternae of the SR, located at the A–I junction in mammalian skeletal muscle. The action potential travels down the T-tubule, and DHPR–RyR1 coupling releases Ca²⁺ from the cisternae. Cardiac muscle has dyads (one T-tubule + one cisterna) at the Z line.`,
  w: ["Correct.", "Reversed.", "These are sarcomere landmarks.", "These are sarcomere proteins.", "These make up the intercalated disc of cardiac muscle."],
  eimg: ["hr-skeletal-em-labeled.jpg"]
},
{
  src: "rev", t: "Muscle",
  s: `The electron micrograph shows skeletal muscle in longitudinal section. What is the dark line that crosses the fibers and bisects each light band?`,
  img: "hr-skeletal-em.jpg",
  c: ["M line", "Z disc", "H band", "A band", "T-tubule"],
  a: 1,
  e: `The Z disc (Z line) bisects the light I band and marks the boundaries of each sarcomere (Z to Z). The I band contains only thin (actin) filaments. The A band contains myosin plus overlapping actin; the H band is the myosin-only centre of the A band; the M line cross-links myosin in the middle.`,
  w: ["The M line is in the middle of the A band.", "Correct.", "The H band is a pale zone in the middle of the A band.", "The A band is the dark band, not a line.", "T-tubules sit at the A–I junction and aren't continuous dark lines across the fiber."],
  eimg: ["hr-skeletal-em-labeled.jpg"]
},
{
  src: "rev", t: "Muscle",
  s: `In this electron micrograph of skeletal muscle, which labeled structure is the equivalent of the dense bodies of smooth muscle?`,
  img: "hr-em-abcdef.jpg",
  c: ["A", "B", "C", "D", "F"], a: 1, ns: true,
  e: `B is the Z line. Smooth muscle has no sarcomeres; its actin filaments are anchored instead to dense bodies (with α-actinin), which are the functional equivalent of Z lines. Other labels: C = I band (actin only), D = mitochondrion, F = A band (actin + myosin), A and E = SR/T-tubule membranes.`,
  w: ["A — SR/T-tubule membranes.", "Correct — Z line.", "C — I band.", "D — mitochondrion.", "F — A band."]
},
{
  src: "rev", t: "Muscle",
  s: `In the same electron micrograph, which labeled band contains only thin (actin) filaments?`,
  img: "hr-em-abcdef.jpg",
  c: ["A", "B", "C", "D", "F"], a: 2, ns: true,
  e: `C is the I band, the light band containing only actin filaments. It is bisected by the Z line (B) and shortens during contraction. F, the A band, contains myosin plus overlapping actin and keeps the same length during contraction.`,
  w: ["SR/T-tubule membranes.", "The Z line anchors actin; it's a line, not a band.", "Correct — I band.", "A mitochondrion.", "The A band contains myosin and actin."]
},
{
  src: "rev", t: "Muscle",
  s: `During skeletal muscle contraction, which two regions of the sarcomere become shorter?`,
  c: ["A band and H band", "H band and I band", "A band and I band", "A band and M line", "Thick and thin filaments"],
  a: 1,
  e: `Memory hook: "HZI shrink, A stays." As thin filaments slide toward the M line, the H band (myosin only) and I band (actin only) narrow, and Z lines move closer together. The A band (the length of the myosin filaments) stays the same, and the filaments themselves don't shorten.`,
  w: ["The A band doesn't shorten.", "Correct.", "The A band doesn't shorten.", "The A band and M line don't shorten.", "Filaments slide; they don't shorten."]
},
{
  src: "rev", t: "Slide Identification",
  s: `Identify the tissue in this H&E section.`,
  img: "hr-smooth.jpg",
  c: ["Skeletal muscle", "Cardiac muscle", "Smooth muscle", "Dense regular connective tissue", "Peripheral nerve"],
  a: 2,
  e: `Smooth muscle: long, spindle-shaped (fusiform) cells with a single, central, cigar-shaped nucleus, packed with their tapered ends overlapping, and no striations.`,
  w: ["Skeletal muscle has striations and many peripheral nuclei.", "Cardiac muscle is striated and branched with intercalated discs.", "Correct.", "Dense regular CT has thin, flattened fibroblast nuclei between thick acellular collagen bundles with no cell outlines.", "Peripheral nerve has wavy fibres with Schwann cell nuclei and a 'herringbone' or empty myelin appearance."],
  eimg: ["hr-muscle-types.jpg"]
},
{
  src: "rev", t: "Slide Identification",
  s: `This section of heart muscle has several dark transverse bands marked in black. What are these structures, and which component within them lets the heart contract as one unit?`,
  img: "hr-cardiac-marked.jpg",
  c: ["Z discs; titin", "Intercalated discs; gap junctions", "Intercalated discs; tight junctions", "Triads; ryanodine receptors", "Dense bodies; α-actinin"],
  a: 1,
  e: `The marked step-like bands are intercalated discs, the junctions between cardiac muscle cells. They contain fascia adherens and desmosomes (holding cells together) and gap junctions (connexons), which pass the electrical impulse from cell to cell so the myocardium contracts as a functional syncytium.`,
  w: ["Z discs are thinner, regularly repeating lines within each sarcomere.", "Correct.", "Tight junctions aren't in intercalated discs.", "Triads are skeletal muscle EM structures.", "Dense bodies are in smooth muscle."],
  eimg: ["hr-cardiac-labeled.jpg"]
},
// ---------------- Skin ----------------
{
  src: "rev", t: "Skin",
  s: `This section of skin from the sole has layers labeled C, G, S and B. Which label marks the stratum granulosum?`,
  img: "hr-thick-skin-cgsb.jpg",
  c: ["C", "G", "S", "B"], a: 1, ns: true,
  e: `C = stratum corneum (very thick here — thick skin of palm/sole); G = stratum granulosum (cells with dark keratohyalin granules); S = stratum spinosum ("prickle" cells); B = stratum basale (dividing cells). Thick skin also has a stratum lucidum and no hair follicles.`,
  w: ["C — stratum corneum.", "Correct — stratum granulosum.", "S — stratum spinosum.", "B — stratum basale."],
  eimg: ["hr-epidermis.jpg"]
},
{
  src: "rev", t: "Skin",
  s: `In this section of skin with layers numbered 1–5, which numbered layer contains most of the Langerhans cells?`,
  img: "hr-skin-12345.jpg",
  c: ["1", "2", "3", "4", "5"], a: 2, ns: true,
  e: `1 = stratum corneum; 2 = stratum granulosum; 3 = stratum spinosum, which contains the Langerhans cells (antigen-presenting cells from bone marrow); 4 = stratum basale (dividing cells, melanocytes, Merkel cells), anchored to the basement membrane by hemidesmosomes; 5 = papillary dermis.`,
  w: ["Stratum corneum — dead keratinocytes.", "Stratum granulosum.", "Correct — stratum spinosum.", "Stratum basale — melanocytes and Merkel cells, not most Langerhans cells.", "Dermis."],
  eimg: ["hr-epidermal-cells.jpg"]
},
{
  src: "rev", t: "Skin",
  s: `In the same section of skin, which junction anchors the cells of layer 4 to the basement membrane?`,
  img: "hr-skin-12345.jpg",
  c: ["Desmosomes", "Hemidesmosomes", "Tight junctions", "Gap junctions", "Adherens junctions"],
  a: 1,
  e: `Layer 4 is the stratum basale. At the dermo-epidermal junction its cells are attached to the basement membrane by hemidesmosomes (integrins linked to keratin). Autoantibodies against them cause bullous pemphigoid.`,
  w: ["Desmosomes join keratinocytes to each other.", "Correct.", "Tight junctions aren't the anchoring junction here.", "Gap junctions couple cells.", "Adherens junctions join neighbouring cells."]
},
{
  src: "rev", t: "Skin",
  s: `Which epidermal cell, found in the stratum basale in close contact with a sensory nerve ending, is a slow-adapting mechanoreceptor important for two-point discrimination?`,
  c: ["Melanocyte", "Langerhans cell", "Merkel cell", "Keratinocyte", "Meissner corpuscle"],
  a: 2,
  e: `Merkel cells lie in the stratum basale, contain neuroendocrine granules, and form synapse-like contacts with sensory nerve endings (Merkel discs). They are slow-adapting touch receptors for fine touch and two-point discrimination, especially in fingertips.`,
  w: ["Melanocytes make melanin.", "Langerhans cells present antigen.", "Correct.", "Keratinocytes make keratin.", "Meissner corpuscles are in the dermal papillae (rapid-adapting), not epidermal cells."]
},
{
  src: "rev", t: "Skin",
  s: `Sebaceous glands release sebum when their entire secretory cells disintegrate. What type of secretion is this?`,
  c: ["Merocrine", "Apocrine", "Holocrine", "Endocrine", "Paracrine"],
  a: 2,
  e: `Holocrine secretion: the whole cell fills with lipid, dies and breaks down to become the secretion (sebum). Merocrine (eccrine) sweat glands secrete by exocytosis; apocrine glands lose part of the apical cytoplasm.`,
  w: ["Merocrine = exocytosis without cell loss (eccrine sweat glands).", "Apocrine = part of the apical cell is released (e.g., axillary glands, mammary lipid).", "Correct.", "Endocrine = secretion into blood.", "Paracrine = local signalling to neighbouring cells."]
},
{
  src: "rev", t: "Skin",
  s: `A child has very pale skin, white hair and light eyes, with a high risk of skin cancer. Skin biopsy shows a normal number of melanocytes. What is the defect?`,
  c: ["Autoimmune destruction of melanocytes", "Absent or defective tyrosinase", "Failure of neural crest migration", "Excess ACTH", "Malignant transformation of melanocytes"],
  a: 1,
  e: `Albinism: hereditary lack of functional tyrosinase, the enzyme that converts tyrosine toward melanin. Melanocytes are present but can't make pigment, so the skin has no UV protection and skin cancer risk is high.`,
  w: ["Melanocyte destruction is vitiligo (patchy, acquired, melanocytes absent).", "Correct — albinism.", "Melanocytes are present, so they did migrate.", "Excess ACTH causes hyperpigmentation (Addison disease).", "That is melanoma."],
  eimg: ["hr-melanoma.jpg"]
},
{
  src: "rev", t: "Skin",
  s: `A 35-year-old woman develops well-demarcated, depigmented white patches on her hands and around her mouth. Biopsy of a patch shows absence of melanocytes. What is the diagnosis?`,
  c: ["Albinism", "Vitiligo", "Addison disease", "Melasma", "Melanoma"],
  a: 1,
  e: `Vitiligo: acquired (often autoimmune) destruction of melanocytes, causing patches of depigmentation. In albinism, melanocytes are present but lack tyrosinase.`,
  w: ["Albinism is congenital and diffuse, with melanocytes present.", "Correct.", "Addison disease causes hyperpigmentation.", "Melasma is hyperpigmentation.", "Melanoma is a pigmented malignant tumor."]
},
{
  src: "rev", t: "Skin",
  s: `A 40-year-old woman has fatigue, weight loss, hypotension and diffuse darkening of her skin, especially in palmar creases and gums. Why is her skin hyperpigmented?`,
  c: ["Increased number of melanocytes from neural crest", "High ACTH, which has MSH-like activity, stimulates melanocytes", "Excess cortisol stimulates melanin production", "Tyrosinase deficiency", "Iron deposition in the dermis"],
  a: 1,
  e: `In Addison disease (primary adrenal insufficiency), low cortisol removes negative feedback, so the pituitary makes more POMC. ACTH and α-MSH (both from POMC) stimulate melanocyte receptors (MC1R), increasing melanin production — especially in sun-exposed skin, creases, scars and mucosa.`,
  w: ["Melanocyte number isn't increased; their activity is.", "Correct.", "Cortisol is low in Addison disease.", "Tyrosinase deficiency causes albinism (no pigment).", "Iron causes the bronze skin of hemochromatosis."]
},
{
  src: "rev", t: "Skin",
  s: `After a deep partial-thickness burn, new epidermis grows back from scattered islands within the wound. Which skin appendage provides the stem cells for this re-epithelialization?`,
  c: ["Sebaceous glands", "Hair follicles (bulge region)", "Arrector pili muscles", "Meissner corpuscles", "Dermal papillae"],
  a: 1,
  e: `The bulge region of hair follicles contains epidermal stem cells. When the surface epidermis is destroyed, these cells migrate out to re-epithelialize the wound, which is why deep partial-thickness burns can heal without grafting while full-thickness burns (which destroy follicles) cannot.`,
  w: ["Sebaceous glands secrete sebum.", "Correct.", "Smooth muscle that raises hairs.", "Touch receptors.", "Dermal connective tissue, not an epidermal stem cell source."]
},
{
  src: "rev", t: "Skin",
  s: `Which is the most numerous cell of the epidermis, and how are these cells attached to one another?`,
  c: ["Melanocytes; gap junctions", "Keratinocytes; desmosomes", "Langerhans cells; tight junctions", "Merkel cells; hemidesmosomes", "Keratinocytes; adherens junctions only"],
  a: 1,
  e: `Keratinocytes make up most of the epidermis. They produce keratin and are tightly linked by many desmosomes — seen as the "prickles" of the stratum spinosum. Melanocytes (neural crest) transfer melanin to them, Langerhans cells (bone marrow) present antigen, and Merkel cells (stratum basale) sense touch.`,
  w: ["Melanocytes are a minor population.", "Correct.", "Langerhans cells are scattered APCs.", "Merkel cells are few touch receptors.", "Keratinocytes have adherens junctions too, but desmosomes are their defining connection."]
}
);
