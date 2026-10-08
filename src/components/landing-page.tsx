import { useState, useRef } from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowUpLeft,
  Camera,
  Check,
  ChevronDown,
  Clapperboard,
  Heart,
  Instagram,
  Linkedin,
  LoaderCircle,
  Mail,
  Menu,
  Palette,
  PenTool,
  Printer,
  Send,
  Sparkles,
  X,
  Facebook,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import saleemHero from "@/assets/saleem-hero.png";
import saleemIntro from "@/assets/saleem-intro.png";
import saleemJourney from "@/assets/saleem-journey.png";
import studioImage from "@/assets/studio-wide.jpg";
import coffeeImage from "@/assets/project-coffee.jpg";
import fashionImage from "@/assets/project-fashion.jpg";
import foodImage from "@/assets/project-food.jpg";

function TikTokIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

const COMPANY_SOCIALS = [
  {
    name: "Facebook",
    label: "فيسبوك",
    href: "https://www.facebook.com/profile.php?id=61594982158553",
    icon: Facebook,
  },
  {
    name: "Instagram",
    label: "إنستجرام",
    href: "https://www.instagram.com/fe_elsa7ab",
    icon: Instagram,
  },
  {
    name: "TikTok",
    label: "تيك توك",
    href: "https://www.tiktok.com/@fe_elsa7ab",
    icon: TikTokIcon,
  },
  {
    name: "Email",
    label: "البريد الإلكتروني",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=feelsahab@gmail.com",
    icon: Mail,
  },
];

const nav = [
  ["الرئيسية", "top"],
  ["خدماتنا", "services"],
  ["الباكدجات", "packages"],
  ["شغلنا", "work"],
  ["الاستوديو", "studio"],
  ["عنّا", "about"],
];
const services = [
  {
    icon: Palette,
    en: "BRANDING",
    ar: "هوية تعيش",
    copy: "لوجو، ألوان، خطوط، ودليل بصري يخلي البراند يتشاف ويتحفظ.",
    className: "lg:col-span-7 bg-primary text-primary-foreground",
  },
  {
    icon: PenTool,
    en: "CONTENT",
    ar: "كلام وصورة",
    copy: "استراتيجية محتوى، كتابة، تصميم، وخطة نشر بصوت واحد.",
    className: "lg:col-span-5 bg-surface text-foreground",
  },
  {
    icon: Clapperboard,
    en: "PRODUCTION",
    ar: "من الفكرة للكادر",
    copy: "تصوير، ريلز، إعلانات، مونتاج، وموشن جرافيك.",
    className: "lg:col-span-5 bg-accent text-accent-foreground",
  },
  {
    icon: Sparkles,
    en: "MARKETING",
    ar: "نوصل للناس الصح",
    copy: "إدارة سوشيال، حملات، إعلانات مدفوعة، وتحليل مستمر.",
    className: "lg:col-span-7 bg-navy text-primary-foreground",
  },
  {
    icon: Printer,
    en: "PRINT & PHYSICAL",
    ar: "البراند بيتلمس",
    copy: "باكدچينج، منيوهات، مطبوعات، ولافتات بتنقل الهوية للواقع.",
    className: "lg:col-span-7 bg-surface text-foreground",
  },
  {
    icon: Camera,
    en: "SPACE",
    ar: "مساحتك ليها شخصية",
    copy: "استوديو، براندنج للمكان، وتوجيه إبداعي لكل تفصيلة.",
    className: "lg:col-span-5 bg-sky-soft text-foreground",
  },
];
const steps = [
  ["01", "إنت تحكي", "نفهم البراند، الناس، والطموح."],
  ["02", "إحنا نبني", "استراتيجية واتجاه إبداعي واضح."],
  ["03", "إحنا نبدع", "تصميم، محتوى، وتصوير تحت سقف واحد."],
  ["04", "إحنا نبدأ", "نشر، حملات، وتسويق محسوب."],
  ["05", "إحنا نكبر", "تحليل، تطوير، وخطوة أعلى كل مرة."],
];
const packages = [
  {
    altitude: "١,٠٠٠ قدم",
    name: "Cloud Starter",
    ar: "بداية صح",
    copy: "للبيزنس الصغير والبراند الجديد.",
    items: ["٨–١٠ تصميمات", "٤ ريلز", "تخطيط وكتابة المحتوى", "إنتاج أساسي"],
  },
  {
    altitude: "٥,٠٠٠ قدم",
    name: "Cloud Growth",
    ar: "وسع المساحة",
    copy: "للبراند القائم والجاهز يكبر.",
    items: [
      "١٢–١٦ تصميم",
      "٦–٨ ريلز",
      "استراتيجية محتوى",
      "تصوير احترافي",
      "إدارة سوشيال وتسويق",
    ],
  },
  {
    altitude: "فوق السحاب",
    name: "Cloud Full",
    ar: "الشريك الكامل",
    copy: "فريق إبداعي كامل جوه براندك.",
    items: [
      "هوية كاملة",
      "محتوى وسوشيال",
      "تصوير وفيديو",
      "حملات وتسويق",
      "طباعة وباكدچينج",
      "توجيه إبداعي شامل",
    ],
  },
];

function Cloud({ className }: { className: string }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute cloud-shape bg-surface shadow-cloud ${className}`}
    />
  );
}

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({
  kicker,
  children,
  light = false,
}: {
  kicker: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="mb-10 md:mb-16">
      <p
        className={`mb-4 text-xs font-bold tracking-[.18em] ${light ? "text-secondary" : "text-primary"}`}
      >
        {kicker}
      </p>
      <h2
        className={`max-w-3xl font-display text-4xl font-black leading-[1.15] md:text-6xl ${light ? "text-primary-foreground" : "text-foreground"}`}
      >
        {children}
      </h2>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header
      dir="rtl"
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-8 md:pt-5"
    >
      <nav
        aria-label="التنقل الرئيسي"
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-surface/60 bg-background/75 px-4 py-2.5 shadow-cloud backdrop-blur-xl md:px-6"
      >
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-xl font-black text-primary"
        >
          <span className="relative flex h-9 w-12 items-center justify-center">
            <span className="absolute bottom-1 h-4 w-11 rounded-full bg-primary" />
            <span className="absolute inset-e-2 top-1 h-7 w-7 rounded-full bg-primary" />
          </span>
          <span>في السحاب</span>
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          {nav.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm font-semibold text-foreground/75 transition-colors hover:text-primary"
            >
              {label}
            </a>
          ))}
        </div>
        <Button asChild variant="cloud" className="hidden md:inline-flex">
          <a href="#contact">ابدأ مشروعك ☁️</a>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          className="rounded-full lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </nav>
      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-border bg-surface p-4 shadow-cloud lg:hidden">
          {nav.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-3 font-bold last:border-0"
            >
              {label}
            </a>
          ))}
          <Button asChild variant="cloud" className="mt-4 w-full">
            <a href="#contact" onClick={() => setOpen(false)}>
              ابدأ مشروعك ☁️
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="grain relative min-h-190 overflow-hidden bg-sky-soft pt-28 md:min-h-205 md:pt-36"
    >
      <Cloud className="-left-24 top-24 h-44 w-80 opacity-55" />
      <Cloud className="-right-32 bottom-16 h-56 w-96 opacity-70" />
      <div className="absolute left-[9%] top-[28%] h-14 w-14 rotate-12 rounded-md bg-accent shadow-cloud" />
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 md:grid-cols-[1.05fr_.95fr] md:px-10">
        <Reveal className="relative z-10">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-surface/60 px-4 py-2 text-xs font-bold text-primary backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-accent" /> CREATIVE HOUSE •
            CAIRO
          </p>
          <h1 className="font-display text-[clamp(3.4rem,8vw,7.6rem)] font-black leading-[.98] text-foreground">
            خلي براندك
            <br />
            <span className="text-primary">يطلع السحاب.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base font-medium leading-8 text-foreground/75 md:text-xl">
            من أول الفكرة والهوية، للمحتوى والتصوير، لحد التسويق والتنفيذ.
            <br />
            في السحاب، بنبني البراند من أول نقطة لحد ما يوصل.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="cloud" size="lg">
              <a href="#contact">ابدأ رحلتك ☁️</a>
            </Button>
            <Button asChild variant="cloudOutline" size="lg">
              <a href="#work">
                شوف شغلنا <ArrowLeft />
              </a>
            </Button>
          </div>
        </Reveal>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto mt-0 w-full max-w-155 self-end"
        >
          <div className="absolute inset-x-[10%] bottom-[8%] h-[30%] cloud-shape bg-surface shadow-cloud-lg" />
          <img
            src={saleemHero}
            alt="سليم، دليل في السحاب، يحمل كاميرا وسط أدوات إبداعية"
            width={1408}
            height={1408}
            fetchPriority="high"
            className="relative z-10 w-full object-contain"
          />
          <motion.div
            animate={{ y: [-6, 6, -6], rotate: [4, 8, 4] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute left-0 top-[24%] z-20 rounded-lg bg-surface p-3 shadow-cloud"
          >
            <Palette className="text-accent" />
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center text-xs font-bold text-primary">
        <span>انزل شوية</span>
        <ChevronDown className="mx-auto mt-1 animate-bounce" size={18} />
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-[.9fr_1.1fr] md:px-10">
        <Reveal className="relative order-2 h-87.5 md:order-1 md:h-130">
          <div className="absolute inset-x-0 bottom-0 h-44 cloud-shape bg-sky-soft" />
          <img
            src={saleemIntro}
            alt="سليم يرحب بك"
            loading="lazy"
            width={1104}
            height={1200}
            className="absolute inset-0 h-full w-full object-contain"
          />
        </Reveal>
        <Reveal className="order-1 md:order-2">
          
          <h2 className="mt-3 font-display text-5xl font-black md:text-7xl">
            أنا سليم
          </h2>
          <div className="mt-8 max-w-xl text-xl font-medium leading-10 text-foreground/75 md:text-2xl">
            <p>مش مديرك، ومش الشخص اللي هيطلب منك تعمل meeting كل يوم.</p>
            <p className="mt-4">
              أنا الوجه اللي هاخدك في رحلة بناء البراند بتاعك — من أول سكتش
              لحد ما الناس تشوفه وتحبه.
            </p>
          </div>
          <p className="mt-8 border-r-4 border-accent pr-4 font-bold text-primary">
            ورايا فريق كامل جامد كرييتف .
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-background py-24 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <SectionTitle kicker="كل حاجة في مكان واحد">
            إحنا بنعمل إيه
            <br />
            جوه السحاب؟
          </SectionTitle>
        </Reveal>
        <div className="grid gap-4 lg:grid-cols-12">
          {services.map((s, i) => (
            <Reveal key={s.en} className={s.className}>
              <article className="group relative min-h-64 overflow-hidden rounded-[2rem] p-7 shadow-cloud md:p-9">
                <s.icon className="mb-12 h-9 w-9 transition-transform group-hover:-translate-y-1" />
                <p className="text-xs font-bold tracking-[.15em] opacity-60">
                  {s.en}
                </p>
                <h3 className="mt-2 text-3xl font-black">{s.ar}</h3>
                <p className="mt-3 max-w-md leading-7 opacity-75">{s.copy}</p>
                <span className="absolute -bottom-14 -left-10 h-32 w-48 cloud-shape bg-current opacity-[.06]" />
                <span className="absolute left-6 top-6 text-6xl font-black opacity-[.05]">
                  0{i + 1}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="grain relative overflow-hidden bg-navy py-24 text-primary-foreground md:py-36">
      <Cloud className="-right-40 top-20 h-64 w-136 opacity-10" />
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <SectionTitle kicker="رحلة واحدة • فريق واحد" light>
            إنت تقول عايز إيه.
            <br />
            <span className="text-secondary">إحنا نتصرف.</span>
          </SectionTitle>
        </Reveal>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_.65fr]">
          <div className="relative">
            <div className="absolute right-6 top-6 bottom-6 w-px bg-primary-foreground/20 md:right-10" />
            {steps.map(([n, title, copy]) => (
              <Reveal
                key={n}
                className="relative mb-4 flex gap-5 rounded-2xl p-4 transition-colors hover:bg-primary-foreground/5 md:gap-8 md:p-6"
              >
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-secondary bg-navy font-bold text-secondary">
                  {n}
                </span>
                <div>
                  <h3 className="text-xl font-black md:text-2xl">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-primary-foreground/60 md:text-base">
                    {copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="relative hidden lg:block">
            <div className="absolute inset-x-4 bottom-5 h-36 cloud-shape bg-primary-foreground/10" />
            <img
              src={saleemJourney}
              alt="سليم يقود رحلة بناء البراند"
              loading="lazy"
              width={1200}
              height={1200}
              className="relative w-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Packages() {
  return (
    <section id="packages" className="bg-sky-soft py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <SectionTitle kicker="اختار الارتفاع المناسب">
            كل مرحلة ليها سحابة.
          </SectionTitle>
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal
              key={p.name}
              className={
                i === 1
                  ? "lg:-translate-y-8"
                  : i === 2
                    ? "lg:-translate-y-16"
                    : ""
              }
            >
              <article
                className={`relative h-full min-h-125 overflow-hidden rounded-[2rem] border p-7 md:p-9 ${i === 2 ? "border-primary bg-primary text-primary-foreground shadow-cloud-lg" : "border-surface bg-surface text-foreground shadow-cloud"}`}
              >
                <p
                  className={`text-xs font-bold ${i === 2 ? "text-secondary" : "text-primary"}`}
                >
                  {p.altitude}
                </p>
                <h3
                  dir="ltr"
                  className="mt-8 text-left font-display text-3xl font-black"
                >
                  {p.name}
                </h3>
                <p className="mt-2 text-2xl font-black">{p.ar}</p>
                <p className="mt-3 opacity-65">{p.copy}</p>
                <ul className="mt-8 space-y-4">
                  {p.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-semibold"
                    >
                      <span
                        className={`flex h-6 w-6 items-center justify-center rounded-full ${i === 2 ? "bg-primary-foreground/15" : "bg-sky-soft"}`}
                      >
                        <Check size={14} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="absolute -bottom-20 -left-16 h-40 w-64 cloud-shape bg-secondary opacity-20" />
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-0 flex justify-center">
          <Button asChild variant="accent" size="lg">
            <a href="#contact">اختار مسارك ☁️</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Studio() {
  return (
    <section id="studio" className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid items-end gap-8 md:grid-cols-2">
          <Reveal>
            <SectionTitle kicker="THE CLOUD STUDIO">
              مش عندك مكان تصور؟
              <br />
              <span className="text-primary">ولا يهمك.</span>
            </SectionTitle>
          </Reveal>
          <Reveal>
            <p className="mb-14 max-w-lg text-lg leading-8 text-foreground/70">
              عندنا سحابة إبداعية مجهزة للتصوير والفيديو، تقدر تدخلها بفكرة
              وتخرج منها بحملة كاملة — ومعاك فريقنا من أول الكادر لآخر مونتاج.
            </p>
          </Reveal>
        </div>
        <Reveal className="group relative overflow-hidden rounded-[2rem]">
          <img
            src={studioImage}
            alt="استوديو في السحاب للتصوير وإنتاج المحتوى في المحله الكبرى"
            loading="lazy"
            width={1600}
            height={1008}
            className="aspect-16/10 w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-linear-to-t from-navy/80 to-transparent p-5 pt-24 md:p-9">
            <div className="text-primary-foreground">
              <p className="text-sm font-bold text-secondary">جاهز للكاميرا</p>
              <p className="mt-2 text-xl font-black md:text-3xl">
                مساحة تتشكل على مقاس فكرتك.
              </p>
            </div>
            <Button asChild variant="accent" size="lg">
              <a href="#contact">
                احجز الاستوديو <Camera />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const projects = [
  {
    image: coffeeImage,
    name: "نُقطة",
    type: "BRAND IDENTITY • PACKAGING",
    copy: "حوّلنا منتج قهوة محلي لتجربة عالمبه بهويه مثريه معاصرة، من الفكرة لحد آخر نقطة.",
  },
  {
    image: fashionImage,
    name: "مِشوار",
    type: "CAMPAIGN • PRODUCTION",
    copy: "اتجاه إبداعي وحملة تصوير كاملة صنعت حضور واضح لبراند ملابس جديد.",
  },
  {
    image: foodImage,
    name: "سفرة",
    type: "SPACE • PRINT • CONTENT",
    copy: "هوية خرجت من الشاشة للمكان: منيو، باكدچينج، لافتات ومحتوى.",
  },
];
function Portfolio() {
  return (
    <section id="work" className="bg-surface py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <SectionTitle kicker="SELECTED WORK">
            من السحاب لأرض الواقع.
          </SectionTitle>
        </Reveal>
        <div className="space-y-16 md:space-y-24">
          {projects.map((p, i) => (
            <Reveal key={p.name}>
              <article
                className={`grid items-center gap-7 md:grid-cols-[1.25fr_.75fr] ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="group overflow-hidden rounded-2xl bg-muted">
                  <img
                    src={p.image}
                    alt={`مشروع ${p.name}`}
                    loading="lazy"
                    width={1408}
                    height={1008}
                    className="aspect-7/5 w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                  />
                </div>
                <div className="md:px-6">
                  <p className="text-xs font-bold tracking-[.15em] text-primary">
                    {p.type}
                  </p>
                  <h3 className="mt-4 text-5xl font-black">{p.name}</h3>
                  <p className="mt-5 text-lg leading-8 text-foreground/65">
                    {p.copy}
                  </p>
                  <div className="mt-7 flex items-center gap-3 text-sm font-black">
                    <span>المشكلة</span>
                    <ArrowLeft size={14} />
                    <span>الفكرة</span>
                    <ArrowLeft size={14} />
                    <span>التنفيذ</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-accent py-24 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <p className="text-xs font-bold tracking-[.18em] text-accent-foreground/60">
            ONE CREATIVE HOUSE
          </p>
          <div className="mt-8 grid gap-10 md:grid-cols-[.8fr_1.2fr]">
            <h2 className="text-6xl font-black md:text-8xl">
              إحنا
              <br />
              مين؟
            </h2>
            <div className="max-w-3xl text-2xl font-bold leading-[1.8] md:text-4xl">
              <p>
                ليه صاحب البراند لازم يلف على Designer وPhotographer وMarketer
                وPrinter وAgency عشان يعمل حاجة واحدة؟
              </p>
              <p className="mt-8 text-primary">جمعنا كل ده تحت سحابة واحد.</p>
              <div className="mt-10 flex flex-wrap gap-3 text-base">
                <span className="rounded-full border border-accent-foreground/25 px-5 py-3">
                  فريق واحد.
                </span>
                <span className="rounded-full border border-accent-foreground/25 px-5 py-3">
                  رؤية واحدة.
                </span>
                <span className="rounded-full bg-navy px-5 py-3 text-primary-foreground">
                  تنفيذ كامل.
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Formspree endpoint — easy to swap ─────────────────────────────── */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbglwzby";

const SERVICE_OPTIONS = [
  { value: "brand-identity", label: "Brand Identity — هوية بصرية" },
  { value: "social-media-marketing", label: "Social Media Marketing — سوشيال ميديا" },
  { value: "website-development", label: "Website Development — تطوير موقع" },
  { value: "photography-videography", label: "Photography & Videography — تصوير وفيديو" },
  { value: "other", label: "Other — غير ذلك" },
];

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormFields {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const EMPTY_FORM: FormFields = {
  fullName: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [fields, setFields] = useState<FormFields>(EMPTY_FORM);
  const formRef = useRef<HTMLFormElement>(null);
  const reduce = useReducedMotion();

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return; // guard against duplicate submissions

    setStatus("loading");
    setErrorMsg("");

    const data = new FormData();
    data.append("fullName", fields.fullName);
    data.append("email", fields.email);
    if (fields.phone) data.append("phone", fields.phone);
    data.append("service", fields.service);
    data.append("message", fields.message);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(
          (json as { error?: string }).error ||
            "حصلت مشكلة أثناء إرسال رسالتك. حاول مرة تانية من فضلك.",
        );
        setStatus("error");
      }
    } catch {
      setErrorMsg("حصلت مشكلة أثناء إرسال رسالتك. حاول مرة تانية من فضلك.");
      setStatus("error");
    }
  }

  function handleReset() {
    setFields(EMPTY_FORM);
    setStatus("idle");
    setErrorMsg("");
  }

  /* Shared Tailwind classes */
  const inputCls =
    "mt-2 h-12 border-primary-foreground/15 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/35 focus-visible:ring-secondary";
  const selectCls =
    "mt-2 h-12 w-full rounded-md border border-primary-foreground/15 bg-navy px-3 text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary transition-colors";

  return (
    <div className="min-h-105">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          /* ── SUCCESS CARD ──────────────────────────────────────────── */
          <motion.div
            key="success"
            initial={reduce ? false : { opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex min-h-105 flex-col items-center justify-center rounded-3xl bg-primary-foreground/5 px-8 py-12 text-center"
          >
            <motion.div
              initial={reduce ? false : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15, duration: 0.5, type: "spring", bounce: 0.45 }}
              className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-secondary text-foreground shadow-cloud-lg"
            >
              <Heart className="h-9 w-9 fill-current" />
            </motion.div>

            <motion.h3
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.45 }}
              className="text-3xl font-black"
            >
              شكرًا لتواصلك معانا!{" "}
              <span role="img" aria-label="قلب">❤️</span>
            </motion.h3>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.45 }}
              className="mt-5 max-w-sm leading-8 text-primary-foreground/65"
            >
              وصلتنا رسالتك بنجاح، وفريقنا هيراجع تفاصيل طلبك وهنرجع نتواصل
              معاك في أقرب وقت.
              <br />
              <span className="mt-3 block font-semibold text-secondary">
                سعداء باهتمامك بالتعاون معانا!
              </span>
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.4 }}
              className="mt-8"
            >
              <Button
                id="contact-send-another"
                variant="accent"
                size="lg"
                onClick={handleReset}
              >
                <Send /> إرسال رسالة أخرى
              </Button>
            </motion.div>
          </motion.div>
        ) : (
          /* ── FORM ──────────────────────────────────────────────────── */
          <motion.form
            key="form"
            ref={formRef}
            onSubmit={handleSubmit}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            noValidate
            className="grid gap-5 sm:grid-cols-2"
          >
            {/* Full Name */}
            <label className="text-sm font-bold" htmlFor="contact-fullName">
              الاسم الكامل <span className="text-secondary">*</span>
              <Input
                id="contact-fullName"
                required
                name="fullName"
                value={fields.fullName}
                onChange={handleChange}
                className={inputCls}
                placeholder="اسمك بالكامل"
                autoComplete="name"
              />
            </label>

            {/* Email */}
            <label className="text-sm font-bold" htmlFor="contact-email">
              البريد الإلكتروني <span className="text-secondary">*</span>
              <Input
                id="contact-email"
                required
                type="email"
                name="email"
                value={fields.email}
                onChange={handleChange}
                className={inputCls}
                placeholder="name@email.com"
                autoComplete="email"
                dir="ltr"
              />
            </label>

            {/* Phone — optional */}
            <label className="text-sm font-bold" htmlFor="contact-phone">
              رقم التليفون
              <span className="ms-1 text-xs font-normal text-primary-foreground/45">
                (اختياري)
              </span>
              <Input
                id="contact-phone"
                type="tel"
                name="phone"
                value={fields.phone}
                onChange={handleChange}
                className={inputCls}
                placeholder="01xxxxxxxxx"
                autoComplete="tel"
                dir="ltr"
              />
            </label>

            {/* Service Type */}
            <label className="text-sm font-bold" htmlFor="contact-service">
              نوع الخدمة <span className="text-secondary">*</span>
              <select
                id="contact-service"
                required
                name="service"
                value={fields.service}
                onChange={handleChange}
                className={selectCls}
              >
                <option value="" disabled>
                  اختار الخدمة
                </option>
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </label>

            {/* Message */}
            <label
              className="text-sm font-bold sm:col-span-2"
              htmlFor="contact-message"
            >
              تفاصيل المشروع / الرسالة <span className="text-secondary">*</span>
              <Textarea
                id="contact-message"
                required
                name="message"
                value={fields.message}
                onChange={handleChange}
                className="mt-2 min-h-36 border-primary-foreground/15 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/35 focus-visible:ring-secondary"
                placeholder="فكرتك، التحدي، وإيه اللي نفسك توصله..."
              />
            </label>

            {/* Error banner */}
            <AnimatePresence>
              {status === "error" && (
                <motion.p
                  key="error"
                  role="alert"
                  initial={reduce ? false : { opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="sm:col-span-2 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm font-semibold text-red-300"
                >
                  {errorMsg ||
                    "حصلت مشكلة أثناء إرسال رسالتك. حاول مرة تانية من فضلك."}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Submit button */}
            <Button
              id="contact-submit"
              type="submit"
              variant="accent"
              size="lg"
              disabled={status === "loading"}
              className="sm:col-span-2"
            >
              {status === "loading" ? (
                <>
                  <LoaderCircle className="animate-spin" />
                  جاري الإرسال...
                </>
              ) : (
                <>
                  ابعت الرسالة <Send />
                </>
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Contact() {
  return (
    <>
      <section className="grain relative overflow-hidden bg-sky-soft py-24 md:py-36">
        <Cloud className="-right-20 bottom-0 h-52 w-96" />
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-5 text-center">
          <Reveal>
            <p className="text-sm font-black text-primary">
              وصلنا لآخر الرحلة ولا أولها؟
            </p>
            <h2 className="mt-5 text-5xl font-black md:text-8xl">
              جاهز تطلع السحاب؟
            </h2>
            <p className="mt-6 text-xl font-medium text-foreground/70">
              احكيلنا عن فكرتك، وسيب الباقي علينا.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button asChild variant="cloud" size="lg">
                <a href="#contact">ابدأ مشروعك ☁️</a>
              </Button>
              <Button asChild variant="cloudOutline" size="lg">
                <a href="#contact">تواصل معانا</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
      <section
        id="contact"
        className="bg-navy py-24 text-primary-foreground md:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-[.7fr_1.3fr] md:px-10">
          <Reveal>
            <p className="text-xs font-bold tracking-[.18em] text-secondary">
              CONTACT
            </p>
            <h2 className="mt-4 text-5xl font-black">
              احكيلنا.
              <br />
              <br />  
              <span className="text-secondary">إحنا سامعينك.</span>
            </h2>
            <p className="mt-8 max-w-sm leading-8 text-primary-foreground/60">
              اكتب أفكارك بتفاصيلها حكايتك تستاهل تتسمع
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              {COMPANY_SOCIALS.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.name}
                    asChild
                    variant="outline"
                    size="icon"
                    aria-label={social.label}
                    className="rounded-full border-primary-foreground/20 bg-transparent text-primary-foreground transition-colors hover:border-secondary hover:text-secondary"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </Reveal>
          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer className="border-t border-primary-foreground/10 bg-navy py-10 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col items-center justify-between gap-6 text-center text-sm md:flex-row">
          <div className="flex flex-col items-center gap-1 md:items-start">
            <a href="#top" className="text-2xl font-black">
              في السحاب ☁️
            </a>
            <p className="text-primary-foreground/45">
              من الفكرة لحد أرض الواقع — كلنا فريق واحد.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {COMPANY_SOCIALS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/15 bg-primary-foreground/5 text-primary-foreground/75 transition-colors hover:border-secondary hover:text-secondary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>

          <a
            href="#top"
            aria-label="العودة للأعلى"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:border-secondary hover:text-secondary"
          >
            <ArrowUpLeft className="h-5 w-5" />
          </a>
        </div>

        <div
          dir="ltr"
          className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/60 sm:flex-row"
        >
          <p className="flex items-center gap-1.5 font-medium">
            <span>Created by</span>
            <span className="font-bold text-secondary">Abdulrahman Hanafy</span>
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/abdulrahman-elhanafy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="flex items-center gap-1.5 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-3 py-1.5 transition-colors hover:border-secondary hover:text-secondary"
            >
              <Github className="h-3.5 w-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/abdulrahman-hanafy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="flex items-center gap-1.5 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-3 py-1.5 transition-colors hover:border-secondary hover:text-secondary"
            >
              <Linkedin className="h-3.5 w-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function LandingPage() {
  return (
    <div dir="rtl">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Process />
        <Packages />
        <Studio />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
