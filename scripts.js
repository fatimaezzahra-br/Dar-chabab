<script>
  // Simple i18n
  const translations = {
    ar: {
      "nav.home":"الرئيسية",
      "nav.about":"حول الدار",
      "nav.activities":"الأنشطة",
      "nav.news":"الأخبار",
      "nav.gallery":"الصور",
      "nav.register":"التسجيل",
      "nav.contact":"الاتصال",
      "hero.tag":"فضاء شبابي",
      "hero.title":"دار الشباب سيدي بوعثمان",
      "hero.subtitle":"منصة للتعلم، الإبداع، والمواطنة الفاعلة. برامج شهرية وأنشطة تربوية وثقافية ورياضية.",
      "cta.register":"سجل الآن",
      "cta.explore":"اكتشف الأنشطة",
      "about.title":"حول دار الشباب",
      "about.text":"دار الشباب سيدي بوعثمان فضاء عمومي مفتوح أمام الأطفال والشباب لتطوير مهاراتهم عبر ورشات تربوية، ثقافية، فنية ورياضية، بشراكة مع الفاعلين المحليين.",
      "about.cards.mission.title":"المهمة",
      "about.cards.mission.text":"تمكين الشباب من التعلم بالممارسة وغرس قيم المواطنة.",
      "about.cards.vision.title":"الرؤية",
      "about.cards.vision.text":"فضاء آمن وحيوي يواكب حاجيات الطفولة والشباب.",
      "about.cards.values.title":"القيم",
      "about.cards.values.text":"الاحترام، الإبداع، التعاون، والمسؤولية.",
      "activities.title":"اللجان والأنشطة",
      "activities.items.educ.title":"اللجنة التعليمية",
      "activities.items.educ.text":"دروس الدعم، لغات، برمجة، روبوتيك.",
      "activities.items.fun.title":"اللجنة الترفيهية",
      "activities.items.fun.text":"مسرح، موسيقى، رحلات، مسابقات.",
      "activities.items.media.title":"لجنة التواصل والإعلام",
      "activities.items.media.text":"تصوير، مونتاج، إدارة صفحات التواصل.",
      "news.title":"الأخبار والبرامج",
      "news.items.1.title":"برنامج شهر شتنبر",
      "news.items.1.text":"انطلاق التسجيل في الورشات يوم 1 شتنبر. أماكن محدودة.",
      "news.items.2.title":"ورشة الروبوتيك",
      "news.items.2.text":"حصة تعريفية مجانية نهاية الأسبوع القادم.",
      "gallery.title":"معرض الصور",
      "gallery.placeholder":"أضف صور الأنشطة هنا",
      "register.title":"التسجيل",
      "form.name":"الاسم الكامل",
      "form.age":"العمر",
      "form.activity":"اختر النشاط",
      "form.activities.prog":"برمجة",
      "form.activities.lang":"لغات",
      "form.activities.sport":"رياضة",
      "form.activities.media":"إعلام",
      "form.phone":"الهاتف",
      "form.notes":"ملاحظات",
      "form.submit":"إرسال",
      "form.note":"هذا نموذج تجريبي. يمكن ربطه لاحقًا بجوجل فورمز أو خادم لإرسال البيانات.",
      "contact.title":"الاتصال",
      "contact.address":"العنوان: سيدي بوعثمان، المغرب",
      "contact.phone":"الهاتف: 0600 000 000",
      "contact.email":"البريد: info@example.com",
      "contact.hours":"المواعيد: الإثنين – السبت، 10:00–18:00",
      "contact.mapnote":"يمكن تضمين خريطة Google هنا لاحقًا."
    },
    fr: {
      "nav.home":"Accueil",
      "nav.about":"À propos",
      "nav.activities":"Activités",
      "nav.news":"Actualités",
      "nav.gallery":"Galerie",
      "nav.register":"Inscription",
      "nav.contact":"Contact",
      "hero.tag":"Espace Jeunes",
      "hero.title":"Dar Chabab Sidi Bou Othmane",
      "hero.subtitle":"Un lieu d'apprentissage, de créativité et de citoyenneté active. Programmes mensuels et activités éducatives, culturelles et sportives.",
      "cta.register":"S'inscrire",
      "cta.explore":"Découvrir les activités",
      "about.title":"À propos du centre",
      "about.text":"Dar Chabab Sidi Bou Othmane est un espace public ouvert aux enfants et aux jeunes pour développer leurs compétences à travers des ateliers éducatifs, culturels, artistiques et sportifs en partenariat avec les acteurs locaux.",
      "about.cards.mission.title":"Mission",
      "about.cards.mission.text":"Permettre aux jeunes d'apprendre par la pratique et d'ancrer les valeurs citoyennes.",
      "about.cards.vision.title":"Vision",
      "about.cards.vision.text":"Un espace sûr et dynamique répondant aux besoins de l'enfance et de la jeunesse.",
      "about.cards.values.title":"Valeurs",
      "about.cards.values.text":"Respect, créativité, coopération et responsabilité.",
      "activities.title":"Comités & Activités",
      "activities.items.educ.title":"Comité Éducatif",
      "activities.items.educ.text":"Soutien scolaire, langues, programmation, robotique.",
      "activities.items.fun.title":"Comité Récréatif",
      "activities.items.fun.text":"Théâtre, musique, sorties, concours.",
      "activities.items.media.title":"Comité Communication",
      "activities.items.media.text":"Photo, montage, gestion des réseaux sociaux.",
      "news.title":"Actualités & Programmes",
      "news.items.1.title":"Programme de Septembre",
      "news.items.1.text":"Ouverture des inscriptions aux ateliers le 1er septembre. Places limitées.",
      "news.items.2.title":"Atelier Robotique",
      "news.items.2.text":"Séance d'initiation gratuite le week‑end prochain.",
      "gallery.title":"Galerie Photos",
      "gallery.placeholder":"Ajoutez ici des photos des activités",
      "register.title":"Inscription",
      "form.name":"Nom complet",
      "form.age":"Âge",
      "form.activity":"Choisir l'activité",
      "form.activities.prog":"Programmation",
      "form.activities.lang":"Langues",
      "form.activities.sport":"Sport",
      "form.activities.media":"Médias",
      "form.phone":"Téléphone",
      "form.notes":"Remarques",
      "form.submit":"Envoyer",
      "form.note":"Formulaire de démonstration. Il peut être relié plus tard à Google Forms ou à un serveur pour l'envoi des données.",
      "contact.title":"Contact",
      "contact.address":"Adresse : Sidi Bou Othmane, Maroc",
      "contact.phone":"Tél. : 0600 000 000",
      "contact.email":"Email : info@example.com",
      "contact.hours":"Horaires : Lundi – Samedi, 10:00–18:00",
      "contact.mapnote":"Une carte Google peut être intégrée ici plus tard."
    }
  };

  let currentLang = 'ar';
  const btnAr = document.getElementById('btn-ar');
  const btnFr = document.getElementById('btn-fr');
  const i18nNodes = document.querySelectorAll('[data-i18n]');

  function applyLang(lang){
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir  = (lang === 'ar') ? 'rtl' : 'ltr';

    // toggle buttons state
    btnAr.classList.toggle('active', lang==='ar');
    btnFr.classList.toggle('active', lang==='fr');
    btnAr.setAttribute('aria-pressed', lang==='ar');
    btnFr.setAttribute('aria-pressed', lang==='fr');

    // translate
    i18nNodes.forEach(el=>{
      const key = el.getAttribute('data-i18n');
      const value = translations[lang][key];
      if(value){ el.textContent = value; }
    });
  }

  btnAr.addEventListener('click',()=>applyLang('ar'));
  btnFr.addEventListener('click',()=>applyLang('fr'));

  // Init
  document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('year').textContent = new Date().getFullYear();
    applyLang('ar');
  });

  // Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const id = a.getAttribute('href');
      const el = document.querySelector(id);
      if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth',block:'start'}); }
    });
  });
</script>
