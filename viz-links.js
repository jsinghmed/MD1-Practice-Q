// Hand-checked links from questions to the interactive tools ("See it on the 3D heart" button).
// Keyword rules in index.html (VIZ_RULES) pick a link automatically; this file overrides them per question ID.
//   false               → no button for this question
//   {tool, hash, label} → this exact link. tool: heart3d | cap | pvl | limb3d | leg3d | plexus
//   heart3d hash options: case=<stab|mi|block|gsw|dissect|blunt>:<step> · sel=<structure id> · view=<Anterior|Posterior|Left|Right|Base|Inferior|4-chamber>
//                         terr=<rca|lad|lcx|pda|lmca> · mode=beat,flow,follow,cut,ghost  (combine with &)
window.VIZ_LINKS = {
  // CRS embryology — heart-tube questions have no adult-heart view that helps
  ce21:false, ce22:false, ce25:false,
  ce52:{tool:"heart3d", hash:"sel=IVS&view=4-chamber", label:"The ventricles and the septum, opened up"},
  ce58:{tool:"heart3d", hash:"sel=aortic&view=Base", label:"The aortic and pulmonary (semilunar) valves"},
  ce97:{tool:"heart3d", hash:"sel=aorta&view=Anterior", label:"The ascending aorta and its arch"},
  // fetal circulation: only the parts the adult heart can show
  ce69:false, ce75:false, ce76:false,
  ce73:{tool:"heart3d", hash:"case=blunt:2", label:"Ligamentum arteriosum (old ductus arteriosus) at the aortic isthmus"},
  // veins: azygos / hepatic channels are outside the heart model
  ce116:false, ce128:false, ce130:false,
  ce125:{tool:"heart3d", hash:"sel=cs&view=Posterior", label:"Coronary sinus and the oblique vein of the left atrium"},
  // CRS Anatomy (study-guide bank) — hand-checked links
  ca67:{tool:"heart3d", hash:"view=Anterior", label:"Heart orientation: apex forward, down and left"},
  ca68:{tool:"heart3d", hash:"view=Anterior", label:"The sternocostal surface (mostly right ventricle)"},
  ca69:{tool:"heart3d", hash:"view=Inferior", label:"The diaphragmatic surface (mostly left ventricle)"},
  ca70:{tool:"heart3d", hash:"view=Anterior", label:"The inferior (acute) margin"},
  ca76:{tool:"heart3d", hash:"view=4-chamber&mode=cut", label:"Ventricular walls, opened up"},
  ca77:{tool:"heart3d", hash:"view=Base", label:"The base: left atrium and pulmonary veins"},
  ca79:{tool:"heart3d", hash:"sel=pulmonary&view=Anterior", label:"The pulmonary valve"},
  ca81:{tool:"heart3d", hash:"sel=aortic&view=Base", label:"The valve rings seen from above"},
  ca82:{tool:"heart3d", hash:"mode=beat,ghost&sel=avnode", label:"The AV node and bundle"},
  ca84:{tool:"pvl", hash:"", label:"Systole vs diastole on the cardiac cycle"},
  ca86:{tool:"heart3d", hash:"sel=aortic&view=Base", label:"Aortic sinuses and the coronary origins"},
  ca96:false,
  ca104:{tool:"heart3d", hash:"view=Anterior", label:"Frontal view: right atrium forms the right border"},
  ca105:{tool:"heart3d", hash:"view=Anterior", label:"Frontal view: the left heart border"},
  ca106:{tool:"heart3d", hash:"view=Anterior", label:"Frontal view: the right ventricle in front"},
  ca108:{tool:"heart3d", hash:"terr=lmca", label:"Left main coronary artery"},
  ca109:{tool:"heart3d", hash:"terr=rca", label:"RCA and its marginal branch"},
  ca111:{tool:"heart3d", hash:"terr=lad", label:"LAD territory"},
  ca112:{tool:"heart3d", hash:"sel=cs&view=Posterior", label:"Cardiac veins and the coronary sinus"},
  ca115:{tool:"heart3d", hash:"terr=pda", label:"Posterior interventricular artery territory"},
  ca116:{tool:"heart3d", hash:"case=mi:0", label:"After a heart attack: the timeline"},
  ca165:{tool:"heart3d", hash:"view=4-chamber&mode=cut", label:"The septa and AV valves, opened up"},
};
