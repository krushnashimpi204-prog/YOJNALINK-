/* =========================================================
   YOJANALINK ADMIN PORTAL
   - Hindi / Marathi / English UI
   - Main Admin can manage other Admin accounts
   - Other Admins CANNOT add/remove/disable Admin accounts

   BACKEND WORK HERE:
   This demo stores data in localStorage. For the real SIH project,
   replace the localStorage functions with authenticated API calls.
   IMPORTANT: role/permission checks MUST also be enforced on the server.
   ========================================================= */

const LANGUAGE_KEY = 'yojanalink_language';
const ADMIN_SESSION_KEY = 'yojanalink_is_admin';
const PHONE_KEY = 'yojanalink_verified_phone';
const ADMIN_ACCOUNTS_KEY = 'yojanalink_admin_accounts';
const PENDING_KEY = 'yojanalink_admin_pending_schemes';
const ACTIVE_KEY = 'yojanalink_admin_active_schemes';
const PROFILE_KEY = 'yojanalink_profile';

// BACKEND WORK HERE: move the primary-admin identity to the database.
const PRIMARY_ADMIN_PHONE = '8999323424';

const translations = {
  hi: {
    admin:'एडमिन', headerSub:'योजनाएं, समीक्षा और उपयोगकर्ता प्रबंधन', signOut:'साइन आउट',
    heroTitle:'योजनाओं और उपयोगकर्ताओं को एक जगह से प्रबंधित करें', heroText:'योजनाओं की समीक्षा करें, प्रकाशित करें और उपयोगकर्ता गतिविधि देखें।',
    visible:'दिख रही हैं', review:'समीक्षा में', hidden:'छिपी हुई', users:'उपयोगकर्ता',
    uploadTitle:'नया GR अपलोड करें', uploadText:'PDF से योजना का प्रारंभिक सारांश तैयार करें और प्रकाशित करने से पहले उसकी समीक्षा करें।', process:'GR प्रोसेस करें',
    pendingTitle:'समीक्षा के लिए तैयार', pendingText:'सारांश, नियम और समय-सीमा जांचकर ही योजना को पोर्टल पर दिखाएं।',
    registeredUsers:'पंजीकृत उपयोगकर्ता', usersText:'लॉगिन और जानकारी भरने के बाद उपयोगकर्ता की प्रोफाइल यहां दिखाई देती है।',
    portalSchemes:'पोर्टल की योजनाएं', portalText:'यहां से योजना को संपादित, छिपाएं, प्रकाशित, सूचित या हटाएं।', notifyAll:'सभी को सूचित करें',
    adminManagement:'एडमिन प्रबंधन', adminManagementText:'मुख्य एडमिन दूसरे एडमिन जोड़ या निष्क्रिय कर सकता है। दूसरे एडमिन इस सेक्शन को नहीं देख सकते।',
    addAdmin:'एडमिन जोड़ें', removeAdmin:'एडमिन निष्क्रिय करें', mainAdmin:'मुख्य एडमिन', otherAdmin:'एडमिन',
    schemeReview:'योजना की समीक्षा', schemeEdit:'योजना संपादित करें', close:'बंद करें', schemeName:'योजना का नाम', deadline:'आवेदन की अंतिम तिथि', summary:'संक्षिप्त सारांश', state:'लक्षित राज्य', minAge:'न्यूनतम आयु', maxIncome:'अधिकतम वार्षिक आय (₹)', category:'श्रेणी', deadlineNote:'समय-सीमा के बाद यह योजना उपयोगकर्ताओं को अपने-आप नहीं दिखाई देगी।', cancel:'रद्द करें', save:'सहेजें',
    registered:'पंजीकृत', age:'उम्र', gender:'लिंग', mobile:'मोबाइल', location:'स्थान', aadhaar:'आधार',
    noPending:'अभी समीक्षा के लिए कोई GR नहीं है।', noUsers:'अभी कोई उपयोगकर्ता पंजीकृत नहीं है।', noSchemes:'अभी पोर्टल पर कोई योजना नहीं है।', noAdmins:'अभी कोई अतिरिक्त एडमिन नहीं है।',
    reviewBtn:'समीक्षा / संपादित करें', edit:'संपादित करें', show:'पोर्टल पर दिखाएं', hide:'छिपाएं', notify:'सूचित करें', remove:'हटाएं',
    expired:'अवधि समाप्त', hiddenState:'छिपी हुई', activeState:'पोर्टल पर दिख रही', pendingState:'समीक्षा में',
    needPdf:'कृपया पहले GR PDF चुनें।', processing:'GR पढ़ा जा रहा है और योजना का सारांश तैयार हो रहा है…', ready:'सारांश और नियम समीक्षा के लिए तैयार हैं।',
    saved:'योजना पोर्टल के लिए सहेज दी गई है।', confirmScheme:'क्या योजना हटाना है?', notified:'की सूचना सभी उपयोगकर्ताओं को भेज दी गई है।', allNotified:'उपलब्ध योजनाओं की सूचना सभी उपयोगकर्ताओं को भेज दी गई है।',
    invalidPhone:'कृपया 10 अंकों का सही मोबाइल नंबर दर्ज करें।', adminAdded:'एडमिन सफलतापूर्वक जोड़ा गया।', adminRemoved:'एडमिन निष्क्रिय कर दिया गया।', confirmAdmin:'क्या इस एडमिन को निष्क्रिय करना है?', cannotRemoveMain:'मुख्य एडमिन को निष्क्रिय नहीं किया जा सकता।'
  },
  mr: {
    admin:'अॅडमिन', headerSub:'योजना, पुनरावलोकन आणि वापरकर्ता व्यवस्थापन', signOut:'साइन आउट',
    heroTitle:'योजना आणि वापरकर्ते एकाच ठिकाणाहून व्यवस्थापित करा', heroText:'योजनांचे पुनरावलोकन करा, प्रकाशित करा आणि वापरकर्ता क्रिया पहा.',
    visible:'दिसत आहेत', review:'पुनरावलोकनात', hidden:'लपवलेल्या', users:'वापरकर्ते',
    uploadTitle:'नवीन GR अपलोड करा', uploadText:'PDF मधून योजनेचा प्राथमिक सारांश तयार करा आणि प्रकाशित करण्यापूर्वी तपासा.', process:'GR प्रक्रिया करा',
    pendingTitle:'पुनरावलोकनासाठी तयार', pendingText:'सारांश, नियम आणि अंतिम तारीख तपासूनच योजना पोर्टलवर दाखवा.',
    registeredUsers:'नोंदणीकृत वापरकर्ते', usersText:'लॉगिन आणि माहिती भरल्यानंतर वापरकर्त्याची प्रोफाइल येथे दिसेल.',
    portalSchemes:'पोर्टलवरील योजना', portalText:'येथून योजना संपादित, लपवा, प्रकाशित, सूचित किंवा हटवा.', notifyAll:'सर्वांना सूचित करा',
    adminManagement:'अॅडमिन व्यवस्थापन', adminManagementText:'मुख्य अॅडमिन इतर अॅडमिन जोडू किंवा निष्क्रिय करू शकतो. इतर अॅडमिनना हा विभाग दिसणार नाही.',
    addAdmin:'अॅडमिन जोडा', removeAdmin:'अॅडमिन निष्क्रिय करा', mainAdmin:'मुख्य अॅडमिन', otherAdmin:'अॅडमिन',
    schemeReview:'योजनेचे पुनरावलोकन', schemeEdit:'योजना संपादित करा', close:'बंद करा', schemeName:'योजनेचे नाव', deadline:'अर्जाची अंतिम तारीख', summary:'संक्षिप्त सारांश', state:'लक्ष्य राज्य', minAge:'किमान वय', maxIncome:'कमाल वार्षिक उत्पन्न (₹)', category:'श्रेणी', deadlineNote:'अंतिम तारखेनंतर ही योजना वापरकर्त्यांना आपोआप दिसणार नाही.', cancel:'रद्द करा', save:'जतन करा',
    registered:'नोंदणीकृत', age:'वय', gender:'लिंग', mobile:'मोबाईल', location:'ठिकाण', aadhaar:'आधार',
    noPending:'सध्या पुनरावलोकनासाठी कोणताही GR नाही.', noUsers:'सध्या कोणताही वापरकर्ता नोंदणीकृत नाही.', noSchemes:'सध्या पोर्टलवर कोणतीही योजना नाही.', noAdmins:'सध्या अतिरिक्त अॅडमिन नाही.',
    reviewBtn:'पुनरावलोकन / संपादन', edit:'संपादित करा', show:'पोर्टलवर दाखवा', hide:'लपवा', notify:'सूचित करा', remove:'हटवा',
    expired:'मुदत संपली', hiddenState:'लपवलेली', activeState:'पोर्टलवर दिसत आहे', pendingState:'पुनरावलोकनात',
    needPdf:'कृपया आधी GR PDF निवडा.', processing:'GR वाचला जात आहे आणि योजनेचा सारांश तयार केला जात आहे…', ready:'सारांश आणि नियम पुनरावलोकनासाठी तयार आहेत.',
    saved:'योजना पोर्टलसाठी जतन केली आहे.', confirmScheme:'ही योजना हटवायची का?', notified:'याची सूचना सर्व वापरकर्त्यांना पाठवली आहे.', allNotified:'उपलब्ध योजनांची सूचना सर्व वापरकर्त्यांना पाठवली आहे.',
    invalidPhone:'कृपया योग्य 10 अंकी मोबाइल क्रमांक टाका.', adminAdded:'अॅडमिन यशस्वीपणे जोडला.', adminRemoved:'अॅडमिन निष्क्रिय केला.', confirmAdmin:'हा अॅडमिन निष्क्रिय करायचा का?', cannotRemoveMain:'मुख्य अॅडमिन निष्क्रिय करता येत नाही.'
  },
  en: {
    admin:'Admin', headerSub:'Scheme, review and user management', signOut:'Sign out',
    heroTitle:'Manage schemes and users from one place', heroText:'Review schemes, publish them and monitor user activity.',
    visible:'Visible', review:'In review', hidden:'Hidden', users:'Users',
    uploadTitle:'Upload new GR', uploadText:'Create an initial scheme summary from a PDF and review it before publishing.', process:'Process GR',
    pendingTitle:'Ready for review', pendingText:'Check the summary, rules and deadline before showing the scheme on the portal.',
    registeredUsers:'Registered users', usersText:'A user profile appears here after login and information submission.',
    portalSchemes:'Portal schemes', portalText:'Edit, hide, publish, notify or remove schemes from here.', notifyAll:'Notify all',
    adminManagement:'Admin management', adminManagementText:'Only the main admin can add or disable other admins. Other admins cannot see this section.',
    addAdmin:'Add admin', removeAdmin:'Disable admin', mainAdmin:'Main admin', otherAdmin:'Admin',
    schemeReview:'Review scheme', schemeEdit:'Edit scheme', close:'Close', schemeName:'Scheme name', deadline:'Application deadline', summary:'Short summary', state:'Target state', minAge:'Minimum age', maxIncome:'Maximum annual income (₹)', category:'Category', deadlineNote:'After the deadline, this scheme will automatically stop appearing to users.', cancel:'Cancel', save:'Save',
    registered:'Registered', age:'Age', gender:'Gender', mobile:'Mobile', location:'Location', aadhaar:'Aadhaar',
    noPending:'No GR is currently waiting for review.', noUsers:'No users are currently registered.', noSchemes:'No schemes are currently on the portal.', noAdmins:'No additional admins yet.',
    reviewBtn:'Review / edit', edit:'Edit', show:'Show on portal', hide:'Hide', notify:'Notify', remove:'Remove',
    expired:'Expired', hiddenState:'Hidden', activeState:'Visible on portal', pendingState:'In review',
    needPdf:'Please select a GR PDF first.', processing:'Reading the GR and preparing the scheme summary…', ready:'Summary and rules are ready for review.',
    saved:'Scheme saved for the portal.', confirmScheme:'Remove this scheme?', notified:'notification was sent to all users.', allNotified:'Notifications for available schemes were sent to all users.',
    invalidPhone:'Please enter a valid 10-digit mobile number.', adminAdded:'Admin added successfully.', adminRemoved:'Admin disabled.', confirmAdmin:'Disable this admin?', cannotRemoveMain:'The main admin cannot be disabled.'
  }
};

let lang = localStorage.getItem(LANGUAGE_KEY) || 'hi';
if (!translations[lang]) lang = 'hi';
const t = k => translations[lang][k] || k;
const $ = id => document.getElementById(id);
const esc = v => String(v ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const readStore = (key, fallback=[]) => { try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); } catch { return fallback; } };
const writeStore = (key,value) => localStorage.setItem(key,JSON.stringify(value));
const mask = a => { const d=String(a||'').replace(/\D/g,''); return d.length===12 ? 'XXXX-XXXX-'+d.slice(-4) : '—'; };

// BACKEND WORK HERE: replace this local role lookup with GET /api/auth/me.
function currentAdmin(){
  const phone = sessionStorage.getItem(PHONE_KEY) || '';
  const accounts = readStore(ADMIN_ACCOUNTS_KEY, []);
  if(phone === PRIMARY_ADMIN_PHONE) return {phone,name:'Main Admin',role:'primary'};
  return accounts.find(a=>a.phone===phone && a.active!==false) || null;
}

function ensureAdminAccess(){
  const phone=sessionStorage.getItem(PHONE_KEY)||'';
  const admin=currentAdmin();
  if(sessionStorage.getItem(ADMIN_SESSION_KEY)!=='true' || !admin){ location.href='login-c.html'; return null; }
  return admin;
}

function applyTranslations(){
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=t(el.dataset.i18n));
  document.querySelectorAll('[data-i18n-aria]').forEach(el=>el.setAttribute('aria-label',t(el.dataset.i18nAria)));
  $('adminLanguage').value=lang;
  $('adminRoleBadge').textContent=currentAdmin()?.role==='primary'?t('mainAdmin'):t('otherAdmin');
  $('pendingEmptyText').textContent=t('noPending'); $('usersEmptyText').textContent=t('noUsers'); $('activeEmptyText').textContent=t('noSchemes');
}

let pending=readStore(PENDING_KEY), active=readStore(ACTIVE_KEY), editing=null;

function expired(s){return !!s.deadline && new Date(s.deadline+'T23:59:59')<new Date()}
function state(s){if(expired(s))return[t('expired'),'is-expired'];if(s.visible===false)return[t('hiddenState'),'is-hidden'];return[t('activeState'),'is-active']}

function schemeCard(s,isPending){
  const q=isPending?[t('pendingState'),'']:state(s);
  return `<article class="scheme-card"><div class="scheme-card-header"><div><h3 class="scheme-card-title">${esc(s.title)}</h3><p class="scheme-card-source">GR: ${esc(s.sourceFile||'Uploaded document')}</p></div><span class="scheme-status-pill ${q[1]}">${q[0]}</span></div><p class="scheme-card-summary">${esc(s.summary)}</p><div class="scheme-meta"><span>${esc(t('state'))}: ${esc(s.rules?.targetState||'—')}</span><span>${esc(t('age'))}: ${esc(s.rules?.minAge||'—')}+</span><span>${esc(t('deadline'))}: ${esc(s.deadline||'—')}</span></div><div class="scheme-card-actions">${isPending?`<button class="admin-btn admin-btn-sm admin-btn-primary" data-a="review" data-id="${esc(s.id)}">${t('reviewBtn')}</button><button class="admin-btn admin-btn-sm danger-btn" data-a="drop-p" data-id="${esc(s.id)}">${t('remove')}</button>`:`<button class="admin-btn admin-btn-sm admin-btn-primary" data-a="edit" data-id="${esc(s.id)}">${t('edit')}</button><button class="admin-btn admin-btn-sm" data-a="toggle" data-id="${esc(s.id)}">${s.visible===false?t('show'):t('hide')}</button><button class="admin-btn admin-btn-sm" data-a="notify" data-id="${esc(s.id)}">${t('notify')}</button><button class="admin-btn admin-btn-sm danger-btn" data-a="drop-a" data-id="${esc(s.id)}">${t('remove')}</button>`}</div></article>`;
}

function users(){let x=readStore(PROFILE_KEY);if(x?.phone)x={[x.phone]:x};return Object.values(x||{}).filter(u=>u&&u.phone)}
function userCard(u){return `<article class="scheme-card"><div class="scheme-card-header"><h3 class="scheme-card-title">${esc(u.fullName||'—')}</h3><span class="scheme-status-pill is-active">${t('registered')}</span></div><div class="scheme-meta"><span>${t('age')}: ${esc(u.age||'—')}</span><span>${t('gender')}: ${esc(u.gender||'—')}</span><span>${t('mobile')}: ${esc(u.phone)}</span><span>${t('aadhaar')}: ${esc(u.aadhaarMasked||mask(u.aadhaar))}</span><span>${t('location')}: ${esc(u.location||'—')}</span></div></article>`}

function render(){
  const us=users();
  $('pendingCount').textContent=pending.length; $('activeCount').textContent=active.filter(s=>s.visible!==false&&!expired(s)).length; $('hiddenCount').textContent=active.filter(s=>s.visible===false||expired(s)).length; $('userCount').textContent=us.length; $('userCount2').textContent=us.length;
  $('pendingList').querySelectorAll('.scheme-card').forEach(x=>x.remove()); $('activeList').querySelectorAll('.scheme-card').forEach(x=>x.remove()); $('usersList').querySelectorAll('.scheme-card').forEach(x=>x.remove());
  pending.forEach(s=>$('pendingList').insertAdjacentHTML('beforeend',schemeCard(s,true))); active.forEach(s=>$('activeList').insertAdjacentHTML('beforeend',schemeCard(s,false))); us.forEach(u=>$('usersList').insertAdjacentHTML('beforeend',userCard(u)));
  $('pendingEmptyText').hidden=!!pending.length; $('activeEmptyText').hidden=!!active.length; $('usersEmptyText').hidden=!!us.length;
}

function makeScheme(file){
  const n=file.name.replace(/\.[^.]+$/,'').replace(/[-_]/g,' ').trim();
  return {id:'scheme_'+Date.now(),title:n?('योजना: '+n):'नई सरकारी योजना',sourceFile:file.name,summary:'दस्तावेज़ से तैयार प्रारंभिक सारांश। प्रकाशन से पहले सहायता राशि, आवेदन प्रक्रिया और पात्रता शर्तों की जांच करें।',rules:{targetState:'सभी राज्य',minAge:18,maxIncome:250000,category:'सभी वर्ग'},visible:true,deadline:''};
}

async function process(){
  const f=$('grPdfInput').files[0]; if(!f){$('uploadStatusText').textContent=t('needPdf');return;}
  $('processGrBtn').disabled=true; $('uploadStatusText').textContent=t('processing'); await new Promise(r=>setTimeout(r,500));
  pending.unshift(makeScheme(f)); writeStore(PENDING_KEY,pending); $('grPdfInput').value=''; $('processGrBtn').disabled=false; $('uploadStatusText').textContent=t('ready'); render();
}

function edit(id,isPending){
  const s=(isPending?pending:active).find(x=>x.id===id); if(!s)return; editing={id,isPending};
  $('dialogTitle').textContent=isPending?t('schemeReview'):t('schemeEdit'); $('schemeTitle').value=s.title; $('schemeDeadline').value=s.deadline||''; $('schemeSummary').value=s.summary; $('ruleState').value=s.rules?.targetState||''; $('ruleMinAge').value=s.rules?.minAge||''; $('ruleMaxIncome').value=s.rules?.maxIncome||''; $('ruleCategory').value=s.rules?.category||''; $('schemeDialog').showModal();
}
function commit(e){
  e.preventDefault(); if(!editing)return; const s=(editing.isPending?pending:active).find(x=>x.id===editing.id); if(!s)return;
  Object.assign(s,{title:$('schemeTitle').value.trim(),deadline:$('schemeDeadline').value,summary:$('schemeSummary').value.trim(),rules:{...s.rules,targetState:$('ruleState').value.trim(),minAge:+$('ruleMinAge').value||0,maxIncome:+$('ruleMaxIncome').value||0,category:$('ruleCategory').value.trim()}});
  if(editing.isPending){pending=pending.filter(x=>x.id!==s.id);active.unshift(s);writeStore(PENDING_KEY,pending)} writeStore(ACTIVE_KEY,active); $('schemeDialog').close(); $('uploadStatusText').textContent=`“${s.title}” ${t('saved')}`;editing=null;render();
}
function action(e){
  const b=e.target.closest('[data-a]');if(!b)return;const id=b.dataset.id,a=b.dataset.a;
  if(a==='review')return edit(id,true);if(a==='edit')return edit(id,false);
  if(a==='drop-p'){pending=pending.filter(x=>x.id!==id);writeStore(PENDING_KEY,pending);render();return}
  if(a==='drop-a'){if(!confirm(t('confirmScheme')))return;active=active.filter(x=>x.id!==id);writeStore(ACTIVE_KEY,active);render();return}
  if(a==='toggle'){const s=active.find(x=>x.id===id);if(!s)return;s.visible=s.visible===false;writeStore(ACTIVE_KEY,active);render();return}
  if(a==='notify'){const s=active.find(x=>x.id===id);if(!s)return;$('uploadStatusText').textContent=`“${s.title}” ${t('notified')}`;}
}

// ================= ADMIN ACCOUNT MANAGEMENT =================
// ONLY the primary admin gets this UI and these actions.
function renderAdmins(){
  const me=currentAdmin(); if(me?.role!=='primary')return;
  const list=readStore(ADMIN_ACCOUNTS_KEY,[]); const box=$('adminsList'); box.innerHTML='';
  if(!list.length){box.innerHTML=`<p class="admin-empty-text">${t('noAdmins')}</p>`;return;}
  list.forEach(a=>{
    box.insertAdjacentHTML('beforeend',`<div class="admin-user-card"><div class="admin-user-info"><strong>${esc(a.name||'Admin')}</strong><span>${esc(a.phone)} · <b class="admin-role-label">${a.active===false?t('hiddenState'):t('otherAdmin')}</b></span></div><button class="admin-btn admin-btn-sm danger-btn" data-admin-action="remove" data-phone="${esc(a.phone)}">${t('removeAdmin')}</button></div>`);
  });
}
function addAdmin(e){
  e.preventDefault(); const me=currentAdmin(); if(me?.role!=='primary')return;
  const phone=$('newAdminPhone').value.replace(/\D/g,''); const name=$('newAdminName').value.trim(); if(phone.length!==10){$('uploadStatusText').textContent=t('invalidPhone');return;}
  if(phone===PRIMARY_ADMIN_PHONE){$('uploadStatusText').textContent=t('cannotRemoveMain');return;}
  let list=readStore(ADMIN_ACCOUNTS_KEY,[]); const existing=list.find(a=>a.phone===phone); if(existing){existing.name=name;existing.active=true}else list.push({phone,name,role:'admin',active:true}); writeStore(ADMIN_ACCOUNTS_KEY,list);
  $('addAdminForm').reset(); $('uploadStatusText').textContent=t('adminAdded'); renderAdmins();
}
function adminAction(e){
  const b=e.target.closest('[data-admin-action]'); if(!b)return; const me=currentAdmin(); if(me?.role!=='primary')return;
  const phone=b.dataset.phone; if(phone===PRIMARY_ADMIN_PHONE){alert(t('cannotRemoveMain'));return;} if(!confirm(t('confirmAdmin')))return;
  let list=readStore(ADMIN_ACCOUNTS_KEY,[]); const a=list.find(x=>x.phone===phone); if(a)a.active=false; writeStore(ADMIN_ACCOUNTS_KEY,list); $('uploadStatusText').textContent=t('adminRemoved'); renderAdmins();
}

function init(){
  const me=ensureAdminAccess(); if(!me)return;
  $('adminLanguage').addEventListener('change',e=>{lang=e.target.value;localStorage.setItem(LANGUAGE_KEY,lang);applyTranslations();render();renderAdmins();});
  $('processGrBtn').onclick=process; $('pendingList').onclick=action; $('activeList').onclick=action; $('schemeForm').onsubmit=commit; $('cancelEditBtn').onclick=()=>{$('schemeDialog').close();editing=null};
  $('notifyAllBtn').onclick=()=>{$('uploadStatusText').textContent=t('allNotified');};
  $('adminSignOutBtn').onclick=()=>{
    // LOGOUT: clear the admin session first, then return to the admin login page.
    if(confirm(t('signOut')+'?')){
      sessionStorage.removeItem(ADMIN_SESSION_KEY);
      sessionStorage.removeItem(PHONE_KEY);
      sessionStorage.removeItem('yojanalink_verified_phone');
      location.replace('login-c.html');
    }
  };
  if(me.role==='primary'){
    $('adminManagementSection').hidden=false; $('addAdminForm').addEventListener('submit',addAdmin); $('adminsList').addEventListener('click',adminAction); renderAdmins();
  }
  applyTranslations(); render();
}

document.addEventListener('DOMContentLoaded',init);
