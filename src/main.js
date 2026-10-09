import "./style.css";

const img = (id) => `https://images.unsplash.com/photo-${id}?w=600&h=450&fit=crop&q=70`;
const avatar = (id) => `https://images.unsplash.com/photo-${id}?w=120&h=120&fit=crop&crop=faces&q=70`;

// simple line icons
const P = {
  design: '<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.6 7.6"/><circle cx="11" cy="11" r="2"/>',
  code: '<path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/>',
  pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"/>',
  megaphone: '<path d="M3 11l18-5v12L3 13v-2z"/><path d="M11.6 16.8a3 3 0 11-5.8-1.6"/>',
  video: '<rect x="2" y="6" width="14" height="12" rx="2"/><path d="M22 8l-6 4 6 4V8z"/>',
  mic: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10v1a7 7 0 01-14 0v-1"/><path d="M12 19v3"/>',
  home: '<path d="M3 10l9-7 9 7v10a2 2 0 01-2 2h-4v-7H9v7H5a2 2 0 01-2-2z"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  bag: '<path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 01-8 0"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
  star: '<path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 00-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 000-7.8z"/>',
  back: '<path d="M9 18l6-6-6-6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  refresh: '<path d="M21 12a9 9 0 11-3-6.7L21 8"/><path d="M21 3v5h-5"/>',
  bell: '<path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 01-3.4 0"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  chev: '<path d="M15 18l-6-6 6-6"/>',
  check: '<path d="M20 6L9 17l-5-5"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>',
};
const icon = (name, cls = "w-5 h-5", fill = "none") =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="${fill}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${P[name]}</svg>`;

const categories = [
  { id: "design", name: "تصميم", icon: "design", count: 128 },
  { id: "code", name: "برمجة", icon: "code", count: 96 },
  { id: "writing", name: "كتابة وترجمة", icon: "pen", count: 74 },
  { id: "marketing", name: "تسويق", icon: "megaphone", count: 61 },
  { id: "video", name: "مونتاج وفيديو", icon: "video", count: 45 },
  { id: "audio", name: "تعليق صوتي", icon: "mic", count: 23 },
];
const cat = (id) => categories.find((c) => c.id === id);

const sellers = {
  sara: { name: "سارة العتيبي", title: "مصممة هوية بصرية", photo: avatar("1494790108377-be9c29b29330") },
  fahad: { name: "فهد القحطاني", title: "مطوّر واجهات", photo: avatar("1507003211169-0a1dd7228f2d") },
  noura: { name: "نورة الشهري", title: "كاتبة محتوى", photo: avatar("1438761681033-6461ffad8d80") },
  khaled: { name: "خالد الزهراني", title: "مسوّق رقمي", photo: avatar("1500648767791-00dcc994a43e") },
  omar: { name: "عمر الحربي", title: "مونتير ومعلّق صوتي", photo: avatar("1472099645785-5658abf4ff4e") },
};

const services = [
  { id: 1, title: "تصميم شعار احترافي مع دليل الهوية", cat: "design", price: 250, rating: 4.9, reviews: 132, days: 3, seller: "sara", image: img("1626785774573-4b799315345d") },
  { id: 2, title: "تصميم واجهات تطبيق جوال UI/UX", cat: "design", price: 600, rating: 4.8, reviews: 87, days: 5, seller: "sara", image: img("1561070791-2526d30994b5") },
  { id: 3, title: "برمجة صفحة هبوط سريعة ومتجاوبة", cat: "code", price: 450, rating: 4.9, reviews: 64, days: 4, seller: "fahad", image: img("1461749280684-dccba630e2f6") },
  { id: 4, title: "إصلاح مشاكل موقع ووردبريس", cat: "code", price: 150, rating: 4.7, reviews: 51, days: 1, seller: "fahad", image: img("1498050108023-c5249f4df085") },
  { id: 5, title: "كتابة محتوى تسويقي لموقعك", cat: "writing", price: 120, rating: 4.8, reviews: 203, days: 2, seller: "noura", image: img("1455390582262-044cdead277a") },
  { id: 6, title: "ترجمة إنجليزي ↔ عربي دقيقة", cat: "writing", price: 90, rating: 4.9, reviews: 176, days: 2, seller: "noura", image: img("1486312338219-ce68d2c6f44d") },
  { id: 7, title: "إدارة حسابات التواصل لمدة شهر", cat: "marketing", price: 900, rating: 4.6, reviews: 39, days: 30, seller: "khaled", image: img("1611162617474-5b21e879e113") },
  { id: 8, title: "حملة إعلانية على سناب وتيك توك", cat: "marketing", price: 400, rating: 4.7, reviews: 58, days: 7, seller: "khaled", image: img("1460925895917-afdab827c52f") },
  { id: 9, title: "مونتاج فيديو قصير (ريلز)", cat: "video", price: 180, rating: 4.8, reviews: 94, days: 2, seller: "omar", image: img("1574717024653-61fd2cf4d44d") },
  { id: 10, title: "تعليق صوتي عربي لإعلانك", cat: "audio", price: 200, rating: 5.0, reviews: 42, days: 1, seller: "omar", image: img("1478737270239-2f02b77fc618") },
];
const svc = (id) => services.find((s) => s.id === Number(id));

const orders = [
  { id: 1042, service: 1, status: "قيد التنفيذ", tone: "bg-amber-50 text-amber-700", date: "8 أكتوبر" },
  { id: 1031, service: 5, status: "بانتظار مراجعتك", tone: "bg-sky-50 text-sky-700", date: "5 أكتوبر" },
  { id: 1007, service: 9, status: "مكتمل", tone: "bg-emerald-50 text-emerald-700", date: "28 سبتمبر" },
];

const favs = new Set([2, 6]);
const state = { cat: "all", q: "" };
const money = (n) => `${n.toLocaleString("ar-SA")} ر.س`;
const num = (n) => n.toLocaleString("ar-SA");

// ---------- components ----------
const header = (title, back = true, action = "") => `
  <header class="sticky top-0 z-20 flex items-center justify-between bg-[#F2F4F7]/95 px-5 pt-5 pb-3 backdrop-blur">
    ${back ? `<button data-back class="flex h-10 w-10 items-center justify-center rounded-full bg-white">${icon("back")}</button>` : `<span class="w-10"></span>`}
    <h1 class="text-base font-bold">${title}</h1>
    ${action || `<span class="w-10"></span>`}
  </header>`;

const serviceCard = (s) => {
  const c = cat(s.cat);
  return `
  <a href="#/service/${s.id}" class="card block overflow-hidden shadow-[0_1px_2px_rgba(11,37,69,.06)]">
    <div class="relative aspect-[4/3] bg-gray-200">
      <img src="${s.image}" alt="${s.title}" loading="lazy" class="h-full w-full object-cover" />
      <button data-fav="${s.id}" class="absolute top-2 left-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 ${favs.has(s.id) ? "text-rose-500" : "text-navy"}">${icon("heart", "w-4 h-4", favs.has(s.id) ? "currentColor" : "none")}</button>
    </div>
    <div class="p-3">
      <div class="flex items-center gap-1.5 text-[11px] text-gray-500">
        <span class="flex h-6 w-6 items-center justify-center rounded-full bg-[#F2F4F7] text-navy">${icon(c.icon, "w-3.5 h-3.5")}</span>
        ${c.name}
      </div>
      <h3 class="mt-2 line-clamp-2 min-h-[2.5rem] text-[13px] font-bold leading-5">${s.title}</h3>
      <div class="mt-2 flex items-center justify-between">
        <span class="flex items-center gap-1 text-[12px] text-gray-600">${icon("star", "w-3.5 h-3.5 text-amber-400", "currentColor")}<b class="text-navy">${s.rating}</b> (${num(s.reviews)})</span>
        <span class="text-[13px] font-bold">${money(s.price)}</span>
      </div>
    </div>
  </a>`;
};

const chips = () => `
  <div class="no-scrollbar flex gap-2 overflow-x-auto px-5 pb-1">
    ${[{ id: "all", name: "الكل", icon: "grid" }, ...categories]
      .map(
        (c) => `<button data-cat="${c.id}" class="chip flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[13px] font-bold ${
          state.cat === c.id ? "bg-navy text-white" : "bg-white text-navy"
        }">${icon(c.icon, "w-4 h-4")}${c.name}</button>`
      )
      .join("")}
  </div>`;

// ---------- screens ----------
function home() {
  const list = services.filter(
    (s) => (state.cat === "all" || s.cat === state.cat) && (!state.q || s.title.includes(state.q))
  );
  return `
  <div class="fade-in">
    <header class="flex items-center justify-between px-5 pt-6">
      <div>
        <p class="text-[13px] text-gray-500">مساء الخير 👋</p>
        <h1 class="text-xl font-bold">وش تحتاج اليوم؟</h1>
      </div>
      <button class="relative flex h-11 w-11 items-center justify-center rounded-full bg-white">${icon("bell")}<span class="absolute top-2.5 left-3 h-2 w-2 rounded-full bg-rose-500"></span></button>
    </header>
    <label class="mx-5 mt-5 flex items-center gap-2 rounded-2xl bg-white px-4 py-3.5 text-gray-400">
      ${icon("search")}
      <input id="q" value="${state.q}" placeholder="ابحث عن خدمة، مثلاً: شعار" class="w-full bg-transparent text-[14px] text-navy outline-none placeholder:text-gray-400" />
    </label>
    <div class="mt-5">${chips()}</div>
    <div class="mt-6 flex items-center justify-between px-5">
      <h2 class="text-base font-bold">${state.cat === "all" ? "خدمات مميزة" : cat(state.cat).name}</h2>
      <span class="text-[12px] text-gray-500">${num(list.length)} خدمة</span>
    </div>
    <div class="mt-3 grid grid-cols-2 gap-3 px-5 pb-6">
      ${list.map(serviceCard).join("") || `<p class="col-span-2 py-16 text-center text-gray-500">لا توجد خدمات مطابقة</p>`}
    </div>
  </div>`;
}

function service(id) {
  const s = svc(id);
  if (!s) return home();
  const c = cat(s.cat);
  const u = sellers[s.seller];
  return `
  <div class="fade-in pb-28">
    <div class="relative aspect-[4/3] bg-gray-200">
      <img src="${s.image.replace("w=600&h=450", "w=900&h=675")}" alt="${s.title}" class="h-full w-full object-cover" />
      <button data-back class="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white">${icon("back")}</button>
      <button data-fav="${s.id}" class="absolute top-5 left-5 flex h-10 w-10 items-center justify-center rounded-full bg-white ${favs.has(s.id) ? "text-rose-500" : ""}">${icon("heart", "w-5 h-5", favs.has(s.id) ? "currentColor" : "none")}</button>
    </div>
    <div class="relative -mt-5 rounded-t-3xl bg-[#F2F4F7] px-5 pt-5">
      <span class="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[12px] font-bold">${icon(c.icon, "w-4 h-4")}${c.name}</span>
      <h1 class="mt-3 text-lg font-bold leading-7">${s.title}</h1>
      <div class="mt-2 flex items-center gap-1 text-[13px] text-gray-600">${icon("star", "w-4 h-4 text-amber-400", "currentColor")}<b class="text-navy">${s.rating}</b> · ${num(s.reviews)} تقييم</div>

      <div class="card mt-4 flex items-center gap-3 p-3">
        <img src="${u.photo}" alt="" class="h-12 w-12 rounded-full object-cover" />
        <div class="flex-1"><p class="text-[14px] font-bold">${u.name}</p><p class="text-[12px] text-gray-500">${u.title}</p></div>
        <button class="rounded-full bg-[#F2F4F7] px-3 py-1.5 text-[12px] font-bold">مراسلة</button>
      </div>

      <div class="mt-3 grid grid-cols-2 gap-3">
        <div class="card flex items-center gap-2 p-3 text-[13px]">${icon("clock", "w-5 h-5 text-gray-500")}<div><p class="text-gray-500 text-[11px]">مدة التسليم</p><b>${num(s.days)} ${s.days > 2 ? "أيام" : "يوم"}</b></div></div>
        <div class="card flex items-center gap-2 p-3 text-[13px]">${icon("refresh", "w-5 h-5 text-gray-500")}<div><p class="text-gray-500 text-[11px]">التعديلات</p><b>تعديلين</b></div></div>
      </div>

      <div class="card mt-3 p-4">
        <h2 class="text-[14px] font-bold">عن الخدمة</h2>
        <p class="mt-2 text-[13px] leading-6 text-gray-600">أقدّم لك ${s.title} بجودة عالية وتواصل واضح من أول يوم. أرسل لي تفاصيل طلبك وأي أمثلة تعجبك، وأسلّمك العمل في الموعد مع ملفات المصدر.</p>
      </div>

      <div class="card mt-3 p-4">
        <div class="flex items-center justify-between"><h2 class="text-[14px] font-bold">التقييمات</h2><span class="text-[12px] text-gray-500">${num(s.reviews)}</span></div>
        <div class="mt-3 border-t border-gray-100 pt-3 text-[13px]">
          <div class="flex items-center justify-between"><b>عبدالله م.</b><span class="flex text-amber-400">${icon("star", "w-3.5 h-3.5", "currentColor").repeat(5)}</span></div>
          <p class="mt-1 text-gray-600">شغل مرتب وسريع، والتواصل كان ممتاز. أنصح فيه.</p>
        </div>
      </div>
    </div>
    <div class="order-bar fixed inset-x-0 bottom-0 z-40 flex items-center gap-3 border-t border-gray-200 bg-white px-5 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))]">
      <div><p class="text-[11px] text-gray-500">يبدأ من</p><p class="text-lg font-bold">${money(s.price)}</p></div>
      <button data-order="${s.id}" class="flex-1 rounded-2xl bg-navy py-3.5 text-[15px] font-bold text-white">اطلب الخدمة</button>
    </div>
  </div>`;
}

function cats() {
  return `
  <div class="fade-in">
    ${header("الأقسام", false)}
    <div class="grid grid-cols-2 gap-3 px-5 pb-6">
      ${categories
        .map(
          (c) => `<button data-gocat="${c.id}" class="card flex flex-col items-start gap-3 p-4 text-right">
            <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2F4F7]">${icon(c.icon, "w-6 h-6")}</span>
            <span><b class="block text-[14px]">${c.name}</b><span class="text-[12px] text-gray-500">${num(c.count)} خدمة</span></span>
          </button>`
        )
        .join("")}
    </div>
  </div>`;
}

function myOrders() {
  return `
  <div class="fade-in">
    ${header("طلباتي", false)}
    <div class="space-y-3 px-5 pb-6">
      ${orders
        .map((o) => {
          const s = svc(o.service);
          return `<a href="#/service/${s.id}" class="card flex gap-3 p-3">
            <img src="${s.image}" alt="" class="h-20 w-20 rounded-xl object-cover" />
            <div class="flex flex-1 flex-col justify-between">
              <p class="line-clamp-2 text-[13px] font-bold leading-5">${s.title}</p>
              <div class="flex items-center justify-between">
                <span class="rounded-full px-2.5 py-1 text-[11px] font-bold ${o.tone}">${o.status}</span>
                <span class="text-[11px] text-gray-500">#${o.id} · ${o.date}</span>
              </div>
            </div>
          </a>`;
        })
        .join("")}
    </div>
  </div>`;
}

function account() {
  const row = (label, ic, href = "#/account") =>
    `<a href="${href}" class="flex items-center gap-3 px-4 py-3.5 text-[14px]">${icon(ic, "w-5 h-5 text-gray-500")}<span class="flex-1">${label}</span>${icon("chev", "w-4 h-4 text-gray-400")}</a>`;
  return `
  <div class="fade-in">
    ${header("حسابي", false)}
    <div class="px-5 pb-6">
      <div class="card flex items-center gap-3 p-4">
        <img src="${sellers.sara.photo}" alt="" class="h-14 w-14 rounded-full object-cover" />
        <div class="flex-1"><p class="font-bold">سارة العتيبي</p><p class="text-[12px] text-gray-500">مستقلة · تصميم</p></div>
      </div>
      <div class="mt-3 grid grid-cols-3 gap-3 text-center">
        <div class="card p-3"><b class="block text-lg">${num(2)}</b><span class="text-[11px] text-gray-500">خدمات</span></div>
        <div class="card p-3"><b class="block text-lg">${num(219)}</b><span class="text-[11px] text-gray-500">تقييم</span></div>
        <div class="card p-3"><b class="block text-lg">${money(3450)}</b><span class="text-[11px] text-gray-500">أرباح الشهر</span></div>
      </div>
      <a href="#/new" class="mt-3 flex items-center justify-center gap-2 rounded-2xl bg-navy py-3.5 font-bold text-white">${icon("plus")}أضف خدمة جديدة</a>
      <div class="card mt-3 divide-y divide-gray-100">
        ${row("خدماتي", "grid")}${row("المفضلة", "heart")}${row("الإشعارات", "bell")}${row("بياناتي", "user")}
      </div>
    </div>
  </div>`;
}

function newService() {
  const field = (label, input) => `<label class="block"><span class="mb-1.5 block text-[13px] font-bold">${label}</span>${input}</label>`;
  const inp = "w-full rounded-xl bg-[#F2F4F7] px-4 py-3 text-[14px] outline-none placeholder:text-gray-400";
  return `
  <div class="fade-in">
    ${header("خدمة جديدة")}
    <form id="newform" class="card mx-5 mb-6 space-y-4 p-4">
      <div class="flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-300 bg-[#F2F4F7] text-gray-500">
        ${icon("image", "w-8 h-8")}<span class="text-[13px]">أضف صورة الخدمة</span>
      </div>
      ${field("اسم الخدمة", `<input class="${inp}" placeholder="مثلاً: تصميم شعار احترافي" />`)}
      ${field("القسم", `<select class="${inp}">${categories.map((c) => `<option>${c.name}</option>`).join("")}</select>`)}
      <div class="grid grid-cols-2 gap-3">
        ${field("السعر (ر.س)", `<input type="number" class="${inp}" placeholder="250" />`)}
        ${field("مدة التسليم", `<input class="${inp}" placeholder="3 أيام" />`)}
      </div>
      ${field("وصف مختصر", `<textarea rows="3" class="${inp}" placeholder="وش تقدّم في هذي الخدمة؟"></textarea>`)}
      <button class="w-full rounded-2xl bg-navy py-3.5 font-bold text-white">نشر الخدمة</button>
    </form>
  </div>`;
}

// ---------- router ----------
const app = document.getElementById("app");
const tabbar = document.getElementById("tabbar");
const tabs = [
  { href: "#/", label: "الرئيسية", icon: "home", match: ["", "service"] },
  { href: "#/categories", label: "الأقسام", icon: "grid", match: ["categories"] },
  { href: "#/orders", label: "طلباتي", icon: "bag", match: ["orders"] },
  { href: "#/account", label: "حسابي", icon: "user", match: ["account", "new"] },
];

function toast(msg) {
  const t = document.createElement("div");
  t.className = "fixed top-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-navy px-5 py-3 text-[13px] font-bold text-white shadow-lg fade-in flex items-center gap-2";
  t.innerHTML = icon("check", "w-4 h-4") + msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 1800);
}

function render() {
  const [, route = "", param] = location.hash.split("/");
  const screens = { "": home, service: () => service(param), categories: cats, orders: myOrders, account, new: newService };
  app.innerHTML = (screens[route] || home)();
  const onDetail = route === "service";
  tabbar.style.display = onDetail ? "none" : "";
  tabbar.innerHTML = tabs
    .map((t) => {
      const on = t.match.includes(route);
      return `<a href="${t.href}" class="flex flex-col items-center gap-1 py-1 text-[11px] font-bold ${on ? "text-navy" : "text-gray-400"}">${icon(t.icon, "w-6 h-6")}${t.label}</a>`;
    })
    .join("");
  // keep the order bar inside the phone frame on desktop
  const bar = app.querySelector(".order-bar");
  if (bar && window.innerWidth >= 900) bar.classList.replace("fixed", "absolute");
  app.scrollTop = 0;
  window.scrollTo(0, 0);
}

app.addEventListener("click", (e) => {
  const el = e.target.closest("[data-back],[data-fav],[data-cat],[data-gocat],[data-order]");
  if (!el) return;
  if (el.dataset.back !== undefined) return history.length > 1 ? history.back() : (location.hash = "#/");
  e.preventDefault();
  if (el.dataset.fav) {
    const id = Number(el.dataset.fav);
    favs.has(id) ? favs.delete(id) : favs.add(id);
    toast(favs.has(id) ? "أُضيفت للمفضلة" : "أُزيلت من المفضلة");
    return render();
  }
  if (el.dataset.cat) { state.cat = el.dataset.cat; return render(); }
  if (el.dataset.gocat) { state.cat = el.dataset.gocat; location.hash = "#/"; return; }
  if (el.dataset.order) { toast("تم إرسال طلبك للمستقل"); setTimeout(() => (location.hash = "#/orders"), 900); }
});

app.addEventListener("input", (e) => {
  if (e.target.id !== "q") return;
  state.q = e.target.value.trim();
  const pos = e.target.selectionStart;
  render();
  const q = document.getElementById("q");
  q.focus();
  q.setSelectionRange(pos, pos);
});

app.addEventListener("submit", (e) => {
  e.preventDefault();
  toast("تم نشر خدمتك");
  setTimeout(() => (location.hash = "#/account"), 900);
});

window.addEventListener("hashchange", render);
render();
