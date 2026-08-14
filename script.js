/* =========================================================
   22 Reasons to Love You — script.js
   -----------------------------------------------------------
   EDIT ME:
   Everything you actually want to personalise lives in the
   CONTENT block right below. Swap in your real reasons,
   the full intro letter, and the final birthday letter.
   Nothing else in this file needs to change to update text.
   ========================================================= */

/* ---------- CONTENT ---------- */

// One entry per star on the constellation, in date order.
// Aug 15 -> Sep 5 is exactly 22 days.
const REASONS = [
  { date: "15 August", text: "June last year might be my most blessed month, where I TOOK THE INITIATIVE TO MESSAGE YOU. I will give some credit to Ishita as well, because of her we talked till 5 am for the first time and I got the chance to shoot my shot, but no matter what, I can't thank her enough for whatever has unfolded since then. My favourite person is turning 22 in 22 days, and this is my little effort to make it memorable." },
  { date: "16 August", text: "You are my favourite notification of the day, even though your first message in the morning somehow comes at 4 PM for unknown cause, idk what you do at night instead of sleeping. I don't know why you text me so late, but I still love you baby." },
  { date: "17 August", text: "Your every hug and every kiss makes me so in love each time. I can never get enough of it, and I will never stop stealing kisses from your voluptuous, ginormous, juicy, big-ass lips. And for that I love you baby." },
  { date: "18 August", text: "I don't talk much. I've got very little to say, but you never make me feel bad about it. Instead, you speak for my portion too. Mere saamne jo tumhari te te chalti hai, I love you for that." },
  { date: "19 August", text: "I was once a slim-trim girl before meeting you. So much so that I used to fear the wind might blow me away. Ever since I started dating you, I've become a complete food digger because you get me food every freaking time. And if not food, then coffee for sure. Even though you're turning me into a fatass, I still love you baby." },
  { date: "20 August", text: "The way you laugh, even though there's absolutely nothing funny about rage-baiting me every night, I still love you because I've got a big, forgiving heart." },
  { date: "21 August", text: "You remember the little things that I don't even realize I've told you, and it makes me feel so content knowing that you love me that much. For all of that I love you even more." },
  { date: "22 August", text: "I feel so possessive over you that I genuinely cannot share you with anyone at this point. Even my competition, Yuvraj. Since he made the mistake of kissing you, I'm after that poor soul now." },
  { date: "23 August", text: "I say a lot of things in anger that I know aren't right, but you still stick with me despite all of that. The fact that you do makes me feel both guilty and incredibly grateful. I'm sorry for behaving that way, and I love you for loving me anyway." },
  { date: "24 August", text: "You're the first person I want to tell whenever something happens, and you're also the one who knows me so well that even if I try to pretend, I know I can't in front of you. For knowing me so well I love you baby." },
  { date: "25 August", text: "You appreciate me in every possible way, emotionally and physically, even when I'm flawed. And you, my broski, are absolutely flawless. I love you so much." },
  { date: "26 August", text: "You tolerate my random mood swings with so much patience. Honestly, may God bless you for that because I could never imagine having that much patience myself. Since you're such a good boy, you deserve all my love. Love you baby." },
  { date: "27 August", text: "You somehow still make me blush. Ngl, bro, you've still got that power. Very cheesy you are, but good for you because I love you, and I love cheese." },
  { date: "28 August", text: "They say the honeymoon phase dies after a few months, and sure, we've had our fair share of bad times. But you never left my side, even when I was acting repulsive. I'm just so grateful for you, and I love you more than anything." },
  { date: "29 August", text: "I can't describe the sense of relief I feel when you're lying beside me on the bed. Even when you ignore me and watch reels instead, I still love you very much." },
  { date: "30 August", text: "You send me memes that are actually NOT funny. But then again, I need to be understanding and accept that not everyone has goated humour. I forgive you for your memes, but I love you for making the effort." },
  { date: "31 August", text: "You are my tiraMISSU, my ice cream sandwich, and I love eating my sweets and my sweetheart. Love you my scrumptious honeybun sugarplum." },
  { date: "1 September", text: "I love having bhayankar chummachaati and the biryani-paratha combo. As you say, it might be the greatest day to experience that. I love you because I get to experience all of it with you." },
  { date: "2 September", text: "You were my acquaintance, then my friend, then my boyfriend, and now nothing less than my husband. I love the progress you've made. My best wishes for your future promotions. And for all your hard work I love you Mr. Lover." },
  { date: "3 September", text: "You steal my stickers that I make with so much hard work with absolutely no shame. You even sold our son to Sunita. But then again, we can always make new kids through SLCP. I love SLCP, and you're required in it and for all the effort you put into that process. I love you beyond imagination." },
  { date: "4 September", text: "It's almost your birthday baby. But then again, even though you're aging physically, there has been absolutely no improvement in your mental age. You still freaking annoy me on purpose, just like last year. Actually, even more than last year. My blood pressure isn't your biggest fan, but I definitely am, and I love you more than I did yesterday." }
];

// Intro letter, shown right after the envelope opens.
const INTRO_LETTER = [
  "I made 22 letters, which you need to open on specific dates, I advise and request to not to open them all at once.",
  "Click on each star to find the letter."
];

// Final letter, shown after all 22 stars have been read.
const FINAL_LETTER = [
  "Happy birthday jaanu, honestly 22 reasons are still not enough to describe how special you are to me.",
  "I will never let you leave and I will never leave you, whether you take it as a blessing or a threat.",
  "If you could see my thoughts, you would see yourself. You are so lean because you keep running in my head 24/7, and the reason I'm so fat is because I don't run in your head, in fact I'm not in your head at all, but I will give some head if you want.",
  "Tracing back every letter I wrote really made me realize how much I love you and how special you are.",
  "Every place we go together, be it an auto ride, a cafe, or India Gate, the memories of them are so dear to me and I feel thankful that I made those memories with you.",
  "No matter how much time we spend together, it never feels like enough, and no matter how many reasons I write, my favorite one will always be that you're my boyfriend.",
  "Happy 22nd baby. I love you."
];

/* ---------- STATE ---------- */

let currentIndex = 0;
const openedStars = new Set();
let finalOpened = false;

/* ---------- PAGE NAVIGATION ---------- */

const pages = document.querySelectorAll(".page");

function goToPage(name) {
  pages.forEach((p) => p.classList.toggle("is-active", p.dataset.page === name));
}

/* ---------- LANDING ---------- */

document.getElementById("beginBtn").addEventListener("click", () => {
  renderIntroLetter();
  goToPage("letter");
});

/* ---------- INTRO LETTER ---------- */

function renderIntroLetter() {
  const body = document.getElementById("introLetterBody");
  body.innerHTML = INTRO_LETTER.map((line) => `<p>${line}</p>`).join("");
}

document.getElementById("continueBtn").addEventListener("click", () => {
  goToPage("constellation");
});

/* ---------- CONSTELLATION ---------- */

const svgNS = "http://www.w3.org/2000/svg";
const svg = document.getElementById("constellationSvg");
const VIEW_W = 1000;
const VIEW_H = 620;

function generateOrganicPoints(count) {
  // Sunflower / golden-angle spiral, scaled into an ellipse.
  // Produces a scattered, non-grid layout every time it's called.
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  const cx = VIEW_W / 2;
  const cy = VIEW_H / 2;
  const maxR = Math.min(VIEW_W, VIEW_H) * 0.42;
  const raw = [];

  for (let i = 0; i < count; i++) {
    const r = Math.sqrt((i + 0.5) / count) * maxR;
    const theta = i * goldenAngle;
    const jitterX = (Math.sin(i * 12.9898) * 43758.5453 % 1) * 26 - 13;
    const jitterY = (Math.sin(i * 78.233) * 12543.7 % 1) * 26 - 13;
    raw.push({
      x: cx + Math.cos(theta) * r * 1.55 + jitterX,
      y: cy + Math.sin(theta) * r + jitterY
    });
  }

  // Nearest-neighbour walk so the connecting line reads like a
  // single wandering constellation path rather than a starburst.
  const ordered = [raw.shift()];
  while (raw.length) {
    const last = ordered[ordered.length - 1];
    let bestIdx = 0;
    let bestDist = Infinity;
    raw.forEach((pt, idx) => {
      const d = (pt.x - last.x) ** 2 + (pt.y - last.y) ** 2;
      if (d < bestDist) { bestDist = d; bestIdx = idx; }
    });
    ordered.push(raw.splice(bestIdx, 1)[0]);
  }
  return ordered;
}

const allPoints = generateOrganicPoints(REASONS.length + 1);
const finalStarPoint = allPoints.pop(); // last stop on the path — the finale
const starPoints = allPoints; // one per REASONS entry

function buildConstellation() {
  svg.innerHTML = "";

  // connecting line — runs through every reason star and ends at the finale
  const linePoints = [...starPoints, finalStarPoint];
  const pathD = linePoints
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
    .join(" ");
  const line = document.createElementNS(svgNS, "path");
  line.setAttribute("d", pathD);
  line.setAttribute("class", "const-line");
  svg.appendChild(line);

  // stars
  starPoints.forEach((p, i) => {
    const g = document.createElementNS(svgNS, "g");
    g.setAttribute("class", "const-star");
    g.setAttribute("tabindex", "0");
    g.setAttribute("role", "button");
    g.setAttribute("aria-label", `Open ${REASONS[i].date}`);
    g.dataset.index = i;

    const halo = document.createElementNS(svgNS, "circle");
    halo.setAttribute("class", "halo");
    halo.setAttribute("cx", p.x);
    halo.setAttribute("cy", p.y);
    halo.setAttribute("r", 10);

    const core = document.createElementNS(svgNS, "circle");
    core.setAttribute("class", "core");
    core.setAttribute("cx", p.x);
    core.setAttribute("cy", p.y);
    core.setAttribute("r", 3);

    const label = document.createElementNS(svgNS, "text");
    label.setAttribute("x", p.x);
    label.setAttribute("y", p.y);
    label.setAttribute("text-anchor", "middle");
    label.textContent = REASONS[i].date;

    g.append(halo, core, label);
    g.addEventListener("click", () => openStar(i));
    g.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openStar(i); }
    });

    svg.appendChild(g);
  });

  // the finale star — bigger, gold, opens the final letter directly
  const fg = document.createElementNS(svgNS, "g");
  fg.setAttribute("class", "const-star const-star--final");
  fg.setAttribute("tabindex", "0");
  fg.setAttribute("role", "button");
  fg.setAttribute("aria-label", "Open the final letter");

  const fHalo = document.createElementNS(svgNS, "circle");
  fHalo.setAttribute("class", "halo");
  fHalo.setAttribute("cx", finalStarPoint.x);
  fHalo.setAttribute("cy", finalStarPoint.y);
  fHalo.setAttribute("r", 16);

  const fCore = document.createElementNS(svgNS, "circle");
  fCore.setAttribute("class", "core");
  fCore.setAttribute("cx", finalStarPoint.x);
  fCore.setAttribute("cy", finalStarPoint.y);
  fCore.setAttribute("r", 5);

  const fLabel = document.createElementNS(svgNS, "text");
  fLabel.setAttribute("x", finalStarPoint.x);
  fLabel.setAttribute("y", finalStarPoint.y);
  fLabel.setAttribute("text-anchor", "middle");
  fLabel.textContent = "5 September";

  fg.append(fHalo, fCore, fLabel);
  fg.addEventListener("click", openFinalStar);
  fg.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openFinalStar(); }
  });

  svg.appendChild(fg);

  refreshConstellationState();
}

function openFinalStar() {
  renderFinalLetter();
  goToPage("ending");
  spawnConfettiBurst();
  finalOpened = true;
  refreshConstellationState();
}

function refreshConstellationState() {
  svg.querySelectorAll(".const-star:not(.const-star--final)").forEach((g) => {
    const i = Number(g.dataset.index);
    g.classList.toggle("opened", openedStars.has(i));
  });
  const finalStarEl = svg.querySelector(".const-star--final");
  if (finalStarEl) finalStarEl.classList.toggle("opened", finalOpened);

  const totalOpened = openedStars.size + (finalOpened ? 1 : 0);
  document.getElementById("constellationProgress").textContent =
    `${totalOpened} / ${REASONS.length + 1} opened`;
}

function openStar(i) {
  currentIndex = i;
  goToPage("journal");
  resetJournalEnvelope();
}

/* ---------- JOURNAL ---------- */

const journalDateEl = document.getElementById("journalDate");
const journalMessageEl = document.getElementById("journalMessage");
const journalCounterEl = document.getElementById("journalCounter");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const journalEnvelopeWrap = document.getElementById("journalEnvelopeWrap");
const journalEnvelopeBtn = document.getElementById("journalEnvelopeBtn");
const notebookCard = document.getElementById("notebookCard");

function resetJournalEnvelope() {
  journalEnvelopeWrap.classList.remove("is-hidden");
  journalEnvelopeBtn.classList.remove("is-open");
  notebookCard.classList.remove("is-visible");
}

journalEnvelopeBtn.addEventListener("click", () => {
  if (journalEnvelopeBtn.classList.contains("is-open")) return;
  journalEnvelopeBtn.classList.add("is-open");
  window.setTimeout(() => {
    showJournalEntry();
    journalEnvelopeWrap.classList.add("is-hidden");
    notebookCard.classList.add("is-visible");
  }, 2100);
});

function showJournalEntry() {
  const entry = REASONS[currentIndex];
  journalDateEl.textContent = entry.date;
  journalMessageEl.textContent = entry.text;
  journalCounterEl.textContent = `${currentIndex + 1} / ${REASONS.length}`;

  prevBtn.disabled = currentIndex === 0;
  nextBtn.textContent = currentIndex === REASONS.length - 1 ? "Finish →" : "Next →";

  openedStars.add(currentIndex);
  refreshConstellationState();
}

prevBtn.addEventListener("click", () => {
  if (currentIndex === 0) return;
  currentIndex -= 1;
  showJournalEntry();
});

nextBtn.addEventListener("click", () => {
  if (currentIndex === REASONS.length - 1) {
    renderFinalLetter();
    goToPage("ending");
    spawnConfettiBurst();
    finalOpened = true;
    refreshConstellationState();
    return;
  }
  currentIndex += 1;
  showJournalEntry();
});

document.getElementById("backToSkyBtn").addEventListener("click", () => {
  goToPage("constellation");
});

/* ---------- ENDING ---------- */

function renderFinalLetter() {
  const body = document.getElementById("finalLetterBody");
  body.innerHTML = FINAL_LETTER.map((line) => `<p>${line}</p>`).join("");
}

document.getElementById("restartBtn").addEventListener("click", () => {
  currentIndex = 0;
  openedStars.clear();
  finalOpened = false;
  resetJournalEnvelope();
  refreshConstellationState();
  goToPage("landing");
});

/* ---------- CONFETTI ---------- */

const confettiLayer = document.getElementById("confettiLayer");
const CONFETTI_COLORS = ["#e8b84b", "#d4a537", "#f4d58d", "#fff4c6", "#c9942a", "#fdf1d6"];

function spawnConfettiBurst() {
  const pieceCount = window.innerWidth < 640 ? 40 : 70;
  for (let i = 0; i < pieceCount; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    const width = (Math.random() * 6 + 6).toFixed(1);
    const height = (width * (Math.random() * 0.6 + 0.6)).toFixed(1);
    piece.style.width = `${width}px`;
    piece.style.height = `${height}px`;
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
    piece.style.setProperty("--fall-duration", `${(Math.random() * 1.6 + 2.2).toFixed(2)}s`);
    piece.style.setProperty("--fall-delay", `${(Math.random() * 0.4).toFixed(2)}s`);
    piece.style.setProperty("--sway", `${(Math.random() * 80 - 40).toFixed(0)}px`);
    piece.style.setProperty("--spin", `${(Math.random() * 720 - 360).toFixed(0)}deg`);
    piece.style.opacity = (Math.random() * 0.4 + 0.6).toFixed(2);
    confettiLayer.appendChild(piece);
    window.setTimeout(() => piece.remove(), 4200);
  }
}

/* ---------- BACKGROUND MUSIC ---------- */

const SONG_VIDEO_ID = "CPh_YsRhILc";
const SONG_WATCH_URL = `https://www.youtube.com/watch?v=${SONG_VIDEO_ID}`;

const musicToggle = document.getElementById("musicToggle");
let ytPlayer = null;
let ytReady = false;
let musicPlaying = false;
let playIntentPending = false;
let musicUnavailable = false;

function createYtPlayer() {
  ytPlayer = new YT.Player("bgMusicPlayer", {
    videoId: SONG_VIDEO_ID,
    width: "2",
    height: "2",
    playerVars: {
      autoplay: 0,
      controls: 0,
      modestbranding: 1,
      rel: 0,
      loop: 1,
      playlist: SONG_VIDEO_ID
    },
    events: {
      onReady: () => {
        ytReady = true;
        if (playIntentPending) {
          ytPlayer.playVideo();
          playIntentPending = false;
        }
      },
      onError: () => {
        // Embedding blocked by the rights holder, or the video is
        // otherwise unplayable inline — fall back to opening YouTube.
        musicUnavailable = true;
        playIntentPending = false;
        musicPlaying = false;
        musicToggle.classList.remove("is-playing");
        musicToggle.classList.add("is-unavailable");
        musicToggle.setAttribute("aria-label", "Open song on YouTube");
        musicToggle.title = "Can't play inline — tap to open on YouTube";
      }
    }
  });
}

// The YouTube API script calls this global once it has loaded.
window.onYouTubeIframeAPIReady = createYtPlayer;

const ytScript = document.createElement("script");
ytScript.src = "https://www.youtube.com/iframe_api";
document.head.appendChild(ytScript);

musicToggle.addEventListener("click", () => {
  if (musicUnavailable) {
    window.open(SONG_WATCH_URL, "_blank", "noopener");
    return;
  }

  if (musicPlaying) {
    if (ytReady) ytPlayer.pauseVideo();
    playIntentPending = false;
    musicToggle.classList.remove("is-playing");
    musicToggle.setAttribute("aria-pressed", "false");
    musicToggle.setAttribute("aria-label", "Play background music");
    musicPlaying = false;
    return;
  }

  musicToggle.classList.add("is-playing");
  musicToggle.setAttribute("aria-pressed", "true");
  musicToggle.setAttribute("aria-label", "Pause background music");
  musicPlaying = true;

  if (ytReady) {
    ytPlayer.playVideo();
  } else {
    // Player script/API hasn't finished loading yet — play as soon as it's ready.
    playIntentPending = true;
  }
});

/* ---------- MANGESH ---------- */

const mangesh = document.getElementById("mangesh");

function scheduleMangesh() {
  const delay = 40000 + Math.random() * 20000; // 40–60s
  window.setTimeout(() => {
    mangesh.classList.remove("run");
    // force reflow so the animation can restart
    void mangesh.offsetWidth;
    mangesh.classList.add("run");
    scheduleMangesh();
  }, delay);
}

mangesh.addEventListener("click", () => {
  mangesh.classList.add("wiggle");
  window.setTimeout(() => mangesh.classList.remove("wiggle"), 650);
});

mangesh.addEventListener("animationend", (e) => {
  if (e.animationName === "mangeshRun") mangesh.classList.remove("run");
});

/* ---------- SHOOTING STARS ---------- */

const shootingLayer = document.getElementById("shootingStars");
const SHOOTING_STAR_COUNT = 5;

function spawnShootingStar() {
  const star = document.createElement("div");
  star.className = "shooting-star fire";
  star.style.top = `${5 + Math.random() * 45}%`;
  star.style.left = `${20 + Math.random() * 75}%`;
  shootingLayer.appendChild(star);
  window.setTimeout(() => star.remove(), 1600);
  window.setTimeout(spawnShootingStar, 6000 + Math.random() * 7000);
}

/* ---------- DREAMY SKY LAYER ---------- */
/* Adds soft drifting dust, slow-floating fireflies, and a couple
   of muted nebula blooms on top of the base CSS star field. */

function buildDreamySky() {
  const starsLayer = document.getElementById("starsLayer");
  const sky = document.getElementById("sky");

  // fine drifting stardust
  const dustCount = window.innerWidth < 640 ? 55 : 110;
  for (let i = 0; i < dustCount; i++) {
    const dot = document.createElement("div");
    dot.className = "dust-star";
    const size = (Math.random() * 1.6 + 0.6).toFixed(2);
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.top = `${Math.random() * 100}%`;
    dot.style.left = `${Math.random() * 100}%`;
    dot.style.setProperty("--drift-x", `${(Math.random() * 40 - 20).toFixed(0)}px`);
    dot.style.setProperty("--drift-y", `${(Math.random() * -60 - 20).toFixed(0)}px`);
    dot.style.animationDuration = `${(Math.random() * 10 + 10).toFixed(1)}s`;
    dot.style.animationDelay = `${(Math.random() * -20).toFixed(1)}s`;
    dot.style.opacity = (Math.random() * 0.5 + 0.35).toFixed(2);
    starsLayer.appendChild(dot);
  }

  // slow, glowing fireflies that rise gently
  const fireflyCount = window.innerWidth < 640 ? 6 : 12;
  for (let i = 0; i < fireflyCount; i++) {
    const fly = document.createElement("div");
    fly.className = "firefly";
    fly.style.left = `${Math.random() * 100}%`;
    fly.style.animationDuration = `${(Math.random() * 8 + 14).toFixed(1)}s`;
    fly.style.animationDelay = `${(Math.random() * -20).toFixed(1)}s`;
    starsLayer.appendChild(fly);
  }

  // muted nebula blooms, drifting almost imperceptibly
  ["nebula--gold", "nebula--moon"].forEach((cls, i) => {
    const bloom = document.createElement("div");
    bloom.className = `nebula ${cls}`;
    bloom.style.animationDelay = `${i * -14}s`;
    sky.appendChild(bloom);
  });
}

/* ---------- INIT ---------- */

buildConstellation();
buildDreamySky();
scheduleMangesh();
for (let i = 0; i < SHOOTING_STAR_COUNT; i++) {
  window.setTimeout(spawnShootingStar, 1500 + i * 1800 + Math.random() * 1000);
}
