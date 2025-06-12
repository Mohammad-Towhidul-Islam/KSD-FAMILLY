const shahjadaInfos = [
  {
    name: "শাহ্জাদা মনিরুল মান্নান আল-কুতবী",
    info: "তিনি পিতার আদর্শে অনুপ্রাণিত হয়ে দ্বীনি শিক্ষা ও খেদমতে নিয়োজিত। ..."
    
  },
  {
    name: "শাহ্জাদা শেখ ফরিদ আল-কুতুবী",
    info: "তিনি আন্তরিক নিষ্ঠা ও দায়িত্ববোধের সঙ্গে কুতুব শরীফ দরবারের পরিচালনার মহৎ দায়িত্ব পালন করে যাচ্ছেন..."
  },
  {
    name: "শাহ্জাদা অহিদুল আলম আল-কুতুবী",
    info: "তিনি দুনিয়ার মায়া ত্যাগ করে চিরনিদ্রায় শায়িত হয়েছেন..."
  },
  {
    name: "শাহ্জাদা আতিকুল মিল্লাত আল-কুতুবী",
    info: "তিনি কুতুব শরীফ দরবারে খাদ্য ব্যবস্থাপনার গুরুত্বপূর্ণ দায়িত্বে নিয়োজিত আছেন। বিশেষ করে উরস শরীফের সময় দূর-দূরান্ত থেকে আগত আশেকানদের খাবারের ব্যবস্থাপনা ও মেহমানদারিতে তিনি অত্যন্ত আন্তরিকতা ও নিষ্ঠার সঙ্গে খিদমত আঞ্জাম দিয়ে থাকেন। তাঁর এই দায়িত্বশীল ভূমিকা সকলের কাছে প্রশংসিত।..."
  },
  {
    name: "শাহ্জাদা ছৈয়দুল মিল্লাত আল-কুতুবী",
    info: `শাহ্জাদা ছৈয়দুল মিল্লাত আল-কুতুবী হলেন একজন বিনয়ী ও নরম মনের মানুষ...

তাঁর মুখনিঃসৃত বাণী, শান্ত-শিষ্ট ব্যবহার, ও বিনয়ী চলাফেরা মানুষের অন্তরে ছোঁয়া দিয়ে যায়...

তাঁর মূল উদ্দেশ্য হচ্ছে—মানুষকে আল্লাহমুখী করা...`
  },
  {
    name: "শাহ্জাদা জিল্লুল করিম আল-কুতুবী",
    info: "তিনি কুতুব শরীফ দরবারের ওলামা পরিষদের দায়িত্বে রয়েছেন এবং এ দায়িত্ব পালন করছেন আন্তরিকতা ও নিষ্ঠার সঙ্গে। দ্বীনি ইলম, পরামর্শ ও দিকনির্দেশনার মাধ্যমে তিনি দরবারের সুশৃঙ্খল পরিচালনায় গুরুত্বপূর্ণ ভূমিকা রেখে চলেছেন।..."
  },
  {
    name: "শাহ্জাদা আব্দুল করিম আল-কুতুবী",
    info: "তিনি কুতুব শরীফ দরবারের বাহ্যিক কর্মকাণ্ড পরিচালনার দায়িত্বে আছেন এবং তা নিষ্ঠা ও দক্ষতার সঙ্গে সম্পাদন করে চলেছেন।"
  }
];

function generateShahjadaList() {
  const listContainer = document.getElementById("shahjada-list");
  shahjadaInfos.forEach((item, index) => {
    const button = document.createElement("button");
    button.innerText = item.name;
    button.onclick = () => showShahjada(index);
    button.style.display = "block";
    button.style.margin = "5px";
    listContainer.appendChild(button);
  });
}

function showShahjada(index) {
  const details = document.getElementById("shahjada-details");
  const content = document.getElementById("details-content");
  const person = shahjadaInfos[index];
  content.innerHTML = `<h2>${person.name}</h2><p>${person.info.replace(/\n/g, "<br>")}</p>`;
  details.classList.remove("hidden");
  details.style.display = "block";
}

function hideDetails() {
  const details = document.getElementById("shahjada-details");
  details.classList.add("hidden");
  details.style.display = "none";
}

// এই ফাংশনটি পেজ লোড হলে কল করতে হবে
window.onload = generateShahjadaList;
