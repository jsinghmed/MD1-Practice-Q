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
};
