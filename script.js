/* ----------------------------------------------------
   Unique Driftwood Creations - JS Functionality
   Interactions: Gallery Filters, Lightbox, Auto-Prefills,
   Scroll-Reveals, Glassmorphic Scroll Navbar, Contact Status
---------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Complete Sculpture Gallery Database (45 Real Wix Assets Linked)
  const sculptures = [
    // === MAMMALS (18 items) ===
    {
      id: 'mammal-1',
      title: 'Horse',
      category: 'mammals',
      wood: 'Leadwood',
      origin: 'Southern Africa',
      desc: 'An exquisite abstract sculpture of a horse, showcasing the dense, dark, and heavy qualities of Leadwood. Sourced from naturally dead logs weathered for decades.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_1d3dcbd2ac8441abba7c4ac35bc23098~mv2.jpg'
    },
    {
      id: 'mammal-2',
      title: 'Horse',
      category: 'mammals',
      wood: 'Sneezewood',
      origin: 'Southern Africa',
      desc: 'Carved from fine-grained Sneezewood, this abstract horse sculpture glows with natural satin gold oils, capturing an organic sense of movement and speed.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_e41ad6590bc74c2a9a4a103de2e0e821~mv2.jpg'
    },
    {
      id: 'mammal-3',
      title: 'Elephant',
      category: 'mammals',
      wood: 'Common Resin Wood',
      origin: 'Southern Africa',
      desc: 'A powerful, heavy representation of an African Elephant, carved from Common Resin Wood. Boniface has left parts of the weathered log intact to represent the elephant\'s skin.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_f0143f8769a443a1b3e2927f6048c620~mv2.jpg'
    },
    {
      id: 'mammal-4',
      title: 'Head',
      category: 'mammals',
      wood: 'Mopane Wood',
      origin: 'Southern Africa',
      desc: 'An abstract head bust showing the intense grain and color transitions of Mopane wood. Features a polished red core and raw yellow sapwood contours.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_c88d1c6675f14d27a808ff542e1fce90~mv2.jpg'
    },
    {
      id: 'mammal-5',
      title: 'Elephant',
      category: 'mammals',
      wood: 'Common Resin Wood',
      origin: 'Southern Africa',
      desc: 'An abstract sculpture capturing the muscular shoulder and low head posture of an elephant bull, shaped in durable Common Resin Wood.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_4ebb0c70acf84d5ebf9099a2d24ed462~mv2.jpg'
    },
    {
      id: 'mammal-6',
      title: 'Head',
      category: 'mammals',
      wood: 'Camelthorn Wood',
      origin: 'Southern Africa',
      desc: 'A gorgeous abstract bust carved from heavy Camelthorn wood, showing the dark, mineralized textures formed by decades of dry savannah erosion.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_744fc01f64bd4fcba019542ed3bf5c92~mv2.jpg'
    },
    {
      id: 'mammal-7',
      title: 'Rhino',
      category: 'mammals',
      wood: 'Leadwood',
      origin: 'Southern Africa',
      desc: 'An abstract rhinoceros sculpture carved from dense black Leadwood, celebrating the strength and bulk of Africa\'s endangered white rhino.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_65dfee23df394e58b750b3d80043692c~mv2.jpg'
    },
    {
      id: 'mammal-8',
      title: 'Hippo',
      category: 'mammals',
      wood: 'Wild Olive Wood',
      origin: 'Southern Africa',
      desc: 'A rounded, tactile hippo form carved from highly figured Wild Olive wood, showcasing beautiful dark swirls and golden grains.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_2dca4e9a9c3e4153bbc6cad7740d5dfb~mv2.jpg'
    },
    {
      id: 'mammal-9',
      title: 'Hippo',
      category: 'mammals',
      wood: 'Leadwood',
      origin: 'Southern Africa',
      desc: 'Carved from deep grey-black Leadwood, this hippo sculpture captures a heavy water-submerged shape with modern abstract styling.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_795bdb52b2c7474bad44943f8aa231e8~mv2.jpg'
    },
    {
      id: 'mammal-10',
      title: 'Bull',
      category: 'mammals',
      wood: 'Common Resin Wood',
      origin: 'Southern Africa',
      desc: 'An abstract bull sculpture defined by strong muscular lines and a forward charge, carved in Common Resin Wood.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_f8044d95332640cd9fb58762fcd40694~mv2.jpeg'
    },
    {
      id: 'mammal-11',
      title: 'Ox',
      category: 'mammals',
      wood: 'Mineralized Wood',
      origin: 'Southern Africa',
      desc: 'An extraordinary piece carved from ancient mineralized/petrified bogwood. The dark, stone-like texture shows centuries of natural river preservation.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_79dd115189374a5cbf9dbbd5a6472d3a~mv2_d_3494_4900_s_4_2.jpg'
    },
    {
      id: 'mammal-12',
      title: 'Elephant',
      category: 'mammals',
      wood: 'Common Resin Wood',
      origin: 'Southern Africa',
      desc: 'A large, majestic elephant sculpture carved from Common Resin Wood, showcasing Boniface\'s signature fusion of raw, unsculpted bark and polished shapes.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_852a849dd8e04afbbf06482075eed45e~mv2_d_3675_5600_s_4_2.jpg'
    },
    {
      id: 'mammal-13',
      title: 'Giraffe',
      category: 'mammals',
      wood: 'Mineralized Wood',
      origin: 'Southern Africa',
      desc: 'A soaring, elegant vertical sculpture carved from mineralized bogwood, emphasizing the tall, slender profile of a savannah giraffe.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_6a5f84c4d8324a08a4ed39199b5da985~mv2_d_2890_5240_s_4_2.jpg'
    },
    {
      id: 'mammal-14',
      title: 'Buck',
      category: 'mammals',
      wood: 'Mineralized Wood',
      origin: 'Southern Africa',
      desc: 'A graceful abstract buck carved in petrified wood, capturing the gentle curves of the neck and alert posture of an African antelope.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_89abc6bc734e4e9897b44a584f5e082e~mv2_d_2890_4713_s_4_2.jpg'
    },
    {
      id: 'mammal-15',
      title: 'Hippo',
      category: 'mammals',
      wood: 'Common Resin Wood',
      origin: 'Southern Africa',
      desc: 'A heavy, smooth hippo burl sculpture carved from Common Resin Wood. Highly polished to show off the natural contours and deep dark rings.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_52a646b01e9f4c608dc00b2096c6ce82~mv2_d_4333_2992_s_4_2.png'
    },
    {
      id: 'mammal-16',
      title: 'Buffalo',
      category: 'mammals',
      wood: 'Mopane Wood',
      origin: 'Southern Africa',
      desc: 'An imposing abstract African Cape Buffalo, highlighting the heavy horns carved from a Mopane root burl.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_6cf63f6c9a0044cea95684107bbc7b73~mv2_d_1280_1280_s_2.jpg'
    },
    {
      id: 'mammal-17',
      title: 'Buck',
      category: 'mammals',
      wood: 'Ebony Wood',
      origin: 'Southern Africa',
      desc: 'A slender, delicate abstract buck carved from rich, deep black Ebony wood, polishing to a high-end luxury mirror finish.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_c84891203cad467fb56d9ce94a379811~mv2_d_1280_1280_s_2.jpg'
    },
    {
      id: 'mammal-18',
      title: 'Giraffe',
      category: 'mammals',
      wood: 'Iron Wood',
      origin: 'Southern Africa',
      desc: 'An abstract giraffe carved from heavy Ironwood. The natural cracks and scoring of the dead tree branch are used to represent the spots on the coat.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_f234164643724fb9905b84b00fe6f20f~mv2_d_1280_1280_s_2.jpg'
    },

    // === MARINE & AQUATIC (9 items) ===
    {
      id: 'marine-1',
      title: 'Whale Tail',
      category: 'marine',
      wood: 'Leadwood',
      origin: 'Southern Africa',
      desc: 'A powerful, rising whale tail fluke carved from heavy Leadwood, capturing the majestic ocean giant diving into the depths.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_b827bb067dab43ecba7ab16d15b3caa5~mv2.jpg'
    },
    {
      id: 'marine-2',
      title: 'Fish',
      category: 'marine',
      wood: 'Common Resin Wood',
      origin: 'Southern Africa',
      desc: 'An abstract ocean fish showing sleek lines and organic movement, carved from Common Resin Wood.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_b142b0171f7049879e6830103a103a4a~mv2.jpg'
    },
    {
      id: 'marine-3',
      title: 'Whale Tail',
      category: 'marine',
      wood: 'Mopane Wood',
      origin: 'Southern Africa',
      desc: 'A whale tail fluke carved from a highly figured Mopane root branch, showing beautiful swirls and a polished red core.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_9e282399df9541939ce214a9f7f4fc16~mv2.jpg'
    },
    {
      id: 'marine-4',
      title: 'Turtle',
      category: 'marine',
      wood: 'Common Resin Wood',
      origin: 'Southern Africa',
      desc: 'A gorgeous abstract turtle sculpture. Boniface utilized the rounded, natural burl shape of the log to represent the turtle\'s carapace shell.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_1e9bcd1ffa534d9ba770c5d0427ba6fc~mv2.jpg'
    },
    {
      id: 'marine-5',
      title: 'Whale Tail',
      category: 'marine',
      wood: 'Common Resin Wood',
      origin: 'Southern Africa',
      desc: 'A medium-sized whale tail sculpture showing the water-worn erosion patterns of found driftwood.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_f687e7a1f0c741e38d1e685f23c066a5~mv2_d_2835_3235_s_4_2.jpg'
    },
    {
      id: 'marine-6',
      title: 'Fish',
      category: 'marine',
      wood: 'Common Resin Wood',
      origin: 'Southern Africa',
      desc: 'An abstract, flowing marine fish form emphasizing the natural lines shaped by years of swaps and swamp river weathering.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_dfe08ba0323743699cad0f7f0565292c~mv2.png'
    },
    {
      id: 'marine-7',
      title: 'Shark',
      category: 'marine',
      wood: 'Driftwood',
      origin: 'Southern Africa',
      desc: 'A sleek, fierce abstract shark sculpture carved from a narrow piece of river driftwood, capturing the predator in motion.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_d4261b3987194bd3ae5bc7e09d273ae4~mv2_d_2166_2385_s_2.png'
    },
    {
      id: 'marine-8',
      title: 'Marine Abstract',
      category: 'marine',
      wood: 'Found Wood',
      origin: 'Southern Africa',
      desc: 'An intriguing, organic marine form showing the beautiful curves carved naturally by elements over decades.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_0bc930bf149748a0ab38390a7f4471ed~mv2_d_4054_3556_s_4_2.jpg'
    },
    {
      id: 'marine-9',
      title: 'Whale Tail',
      category: 'marine',
      wood: 'Leadwood',
      origin: 'Southern Africa',
      desc: 'A large whale tail fluke carved from heavy Leadwood, polished to show the mineralized grey-black rings.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_201cf75ba74f41aeaf5b74874e03be8d~mv2.jpg'
    },

    // === WORLD OF BIRDS (10 items) ===
    {
      id: 'bird-1',
      title: 'Avian Sculpture',
      category: 'birds',
      wood: 'Driftwood',
      origin: 'Southern Africa',
      desc: 'An elegant abstract bird sculpture, carved from a twisting branch of riverbed driftwood.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_3acb5c521b9a4b34b3988ce6106ba427~mv2.jpg'
    },
    {
      id: 'bird-2',
      title: 'Shorebird',
      category: 'birds',
      wood: 'Found Wood',
      origin: 'Southern Africa',
      desc: 'A delicate abstract shorebird sculpture, showing the long neck and rounded body forms of river cranes.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_e22dc713e0c54cfea427d13a01fb84db~mv2.jpg'
    },
    {
      id: 'bird-3',
      title: 'Perched Bird',
      category: 'birds',
      wood: 'Driftwood',
      origin: 'Southern Africa',
      desc: 'A highly abstract, perched bird shape. Boniface kept the weathered textures of the wood to represent feathers.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_8b0e0f18d8c34f168d43ef442a6edfb9~mv2.jpg'
    },
    {
      id: 'bird-4',
      title: 'Giant Owl',
      category: 'birds',
      wood: 'Leadwood',
      origin: 'Southern Africa',
      desc: 'A heavy, massive owl sculpture carved from dense Leadwood. The natural grain knots form the deep eyes of the watchful owl.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_aa43d3121e5f42d682d19e6fe496e276~mv2.jpg'
    },
    {
      id: 'bird-5',
      title: 'Owl',
      category: 'birds',
      wood: 'Common Resin Wood',
      origin: 'Southern Africa',
      desc: 'A smaller abstract owl sculpture showing gorgeous, waxy grains and details carved in Common Resin Wood.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_d94497208d394ab5bd4ce47a65c75601~mv2.jpg'
    },
    {
      id: 'bird-6',
      title: 'Bird',
      category: 'birds',
      wood: 'Leadwood',
      origin: 'Southern Africa',
      desc: 'An abstract, aerodynamic bird sculpture in flight, carved from a heavy dead Leadwood branch.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_d943ef5c4f8f4a22a521cea404ddc45c~mv2.jpg'
    },
    {
      id: 'bird-7',
      title: 'Bird',
      category: 'birds',
      wood: 'Mopane Wood',
      origin: 'Southern Africa',
      desc: 'A compact abstract bird form, emphasizing the rich, reddish tones and pale straw-like sapwood borders of Mopane wood.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_250178181f3c4221b16fc7584e4970e6~mv2.jpg'
    },
    {
      id: 'bird-8',
      title: 'Crane',
      category: 'birds',
      wood: 'Common Resin Wood',
      origin: 'Southern Africa',
      desc: 'A tall, beautiful abstract crane sculpture, featuring long, elegant neck lines and a polished satin crown.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_a831f316a1df45dba8321d608993402a~mv2_d_1741_3426_s_2.png'
    },
    {
      id: 'bird-9',
      title: 'Heron',
      category: 'birds',
      wood: 'Mopane Wood',
      origin: 'Southern Africa',
      desc: 'A stylized water heron, carved from a Mopane branch. The high-contrast color tones draw a beautiful outline of the wings.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_f08103c558fc46658f37b0db60d89d4e~mv2_d_2557_4908_s_4_2.png'
    },
    {
      id: 'bird-10',
      title: 'Darter',
      category: 'birds',
      wood: 'Mineralized Wood',
      origin: 'Southern Africa',
      desc: 'An abstract darter/cormorant bird carved from petrified bogwood, capturing the sleek, water-diving profile of the waterbird.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_08669736e40e44f6a83316c79fd13738~mv2.jpg'
    },

    // === THE HUMAN FIGURE (8 items) ===
    {
      id: 'human-1',
      title: 'Human Abstract',
      category: 'human',
      wood: 'Found Wood',
      origin: 'Southern Africa',
      desc: 'An elegant vertical sculpture representing the human form in a highly stylized, modern abstract shape.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_5f2f43f7e6c944aa99aa06bd4f11b882~mv2.jpg'
    },
    {
      id: 'human-2',
      title: 'Nude Study',
      category: 'human',
      wood: 'Driftwood',
      origin: 'Southern Africa',
      desc: 'A gorgeous abstract sculpture representing the gentle contours of a human nude, carved from soft river driftwood.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_4a9f132c654c4f0cab8917e8ed42a2cd~mv2.jpg'
    },
    {
      id: 'human-3',
      title: 'Bust',
      category: 'human',
      wood: 'Found Wood',
      origin: 'Southern Africa',
      desc: 'An abstract bust showing head and shoulder contours, carved from weathered Southern African found wood.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_9fa306ab086b4ddf97864795926d28d6~mv2.jpg'
    },
    {
      id: 'human-4',
      title: 'Face',
      category: 'human',
      wood: 'Found Wood',
      origin: 'Southern Africa',
      desc: 'A large, expressive abstract face carved from found wood, emphasizing the structural symmetry of features.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_ef024d1bff364c878d9c23e15e11bad9~mv2_d_3000_4000_s_4_2.jpg'
    },
    {
      id: 'human-5',
      title: 'Torso',
      category: 'human',
      wood: 'Driftwood',
      origin: 'Southern Africa',
      desc: 'A twisting abstract human torso carved from weathered driftwood, showing beautiful grain swirls across the body shape.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_5b1e02ef2d324560bc132bcb40eecb18~mv2.jpg'
    },
    {
      id: 'human-6',
      title: 'African Figure',
      category: 'human',
      wood: 'Found Wood',
      origin: 'Southern Africa',
      desc: 'A tall vertical abstract standing figure carved from weathered wood, evoking a proud sentinel posture.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_9aa925f5635d475694b575fd6a1c62d4~mv2.png'
    },
    {
      id: 'human-7',
      title: 'Traveller',
      category: 'human',
      wood: 'Camelthorn Wood',
      origin: 'Southern Africa',
      desc: 'A striking abstract traveller figure carved in heavy Camelthorn wood, showing weathered patterns and deep warm tones.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_6ebc2f86a6894487ba82192ca23f461b~mv2_d_2000_2992_s_2.jpg'
    },
    {
      id: 'human-8',
      title: 'The African Matriarch',
      category: 'human',
      wood: 'Found Wood',
      origin: 'Southern Africa',
      desc: 'A magnificent abstract bust representing the African Matriarch. Boniface has blended deep, dark wood carvings with the grey, weathered outer textures of the tree root.',
      imgUrl: 'https://static.wixstatic.com/media/09295b_0c7acd241d9240e4947547f08109d580~mv2_d_2000_2992_s_2.jpg'
    }
  ];

  // 2. Generate Gallery Items
  const galleryGrid = document.getElementById('gallery-grid');
  
  let galleryInitialized = false;

  function renderGallery(filterCategory = 'all') {
    if (!galleryInitialized) {
      // 1. Initial creation of all elements in the DOM
      galleryGrid.innerHTML = '';
      
      sculptures.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.classList.add('gallery-item', 'hide-item');
        itemEl.setAttribute('data-id', item.id);
        itemEl.setAttribute('data-category', item.category);
        
        itemEl.innerHTML = `
          <div class="gallery-img-container">
            <img src="${item.imgUrl}" alt="${item.title}" loading="lazy">
          </div>
          <div class="gallery-overlay">
            <span class="gallery-item-category">${item.category}</span>
            <h3 class="gallery-item-title">${item.title}</h3>
            <div class="gallery-item-meta">
              <span class="meta-wood">
                <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2.5" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                ${item.wood}
              </span>
              <span class="status-tag-subtle tag-available-subtle">Available</span>
            </div>
          </div>
        `;
        
        // Open Lightbox on Click
        itemEl.addEventListener('click', () => openLightbox(item));
        
        galleryGrid.appendChild(itemEl);
      });
      
      galleryInitialized = true;
    }
    
    // 2. Perform smooth filter transitions without recreating DOM nodes
    const items = galleryGrid.querySelectorAll('.gallery-item');
    items.forEach(itemEl => {
      const category = itemEl.getAttribute('data-category');
      const isMatch = (filterCategory === 'all' || category === filterCategory);
      
      // Clear any pending fade timeouts to handle rapid clicks
      if (itemEl._fadeTimeout) {
        clearTimeout(itemEl._fadeTimeout);
        itemEl._fadeTimeout = null;
      }
      
      if (isMatch) {
        // Remove display: none first
        itemEl.classList.remove('hidden');
        // Force reflow so browser registers removal of 'hidden' before transition
        void itemEl.offsetHeight;
        // Fade in
        itemEl.classList.remove('hide-item');
      } else {
        // Fade out
        itemEl.classList.add('hide-item');
        
        // Wait for CSS opacity/scale transition to complete (0.4s) before applying display: none
        itemEl._fadeTimeout = setTimeout(() => {
          itemEl.classList.add('hidden');
          itemEl._fadeTimeout = null;
        }, 400);
      }
    });
  }

  // Initial Load
  renderGallery();

  // Fetch sculpture statuses from the database and apply sold badges
  async function fetchSculptureStatuses() {
    try {
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        const localStatuses = localStorage.getItem('udc_sculpture_statuses');
        if (localStatuses) {
          applyStatuses(JSON.parse(localStatuses));
          return;
        }
      }

      const res = await fetch('/api/sculptures');
      if (!res.ok) return;
      const statuses = await res.json();
      applyStatuses(statuses);
    } catch (err) {
      console.log('Status fetch skipped (API not available)');
    }
  }

  function applyStatuses(statuses) {
    statuses.forEach(({ id, status }) => {
      if (status === 'sold') {
        const itemEl = galleryGrid.querySelector(`[data-id="${id}"]`);
        if (itemEl) {
          itemEl.classList.add('sold');
          // Add sold badge overlay if not present
          if (!itemEl.querySelector('.sold-badge')) {
            const badge = document.createElement('div');
            badge.className = 'sold-badge';
            badge.innerHTML = '<span>SOLD</span>';
            itemEl.appendChild(badge);
          }
        }
      }
    });
  }
  fetchSculptureStatuses();

  // 3. Filter Navigation Logic
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked
      e.target.classList.add('active');
      
      const filterValue = e.target.getAttribute('data-filter');
      renderGallery(filterValue);
    });
  });

  // 4. Lightbox Modal Logic
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxCategory = document.getElementById('lightbox-category');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxWood = document.getElementById('lightbox-wood');
  const lightboxOrigin = document.getElementById('lightbox-origin');
  const lightboxInquireBtn = document.getElementById('lightbox-inquire-btn');
  const lightboxShareBtn = document.getElementById('lightbox-share-btn');
  
  function openLightbox(item) {
    lightboxImg.src = item.imgUrl;
    lightboxImg.alt = item.title;
    lightboxTitle.textContent = item.title;
    lightboxCategory.textContent = item.category.toUpperCase();
    lightboxDesc.textContent = item.desc;
    lightboxWood.textContent = item.wood;
    lightboxOrigin.textContent = item.origin;
    
    // Bind Inquire button to form scroll + prefill
    lightboxInquireBtn.onclick = (e) => {
      e.preventDefault();
      closeLightbox();
      prefillInquiryForm(item.title);
    };

    // Share link button action
    lightboxShareBtn.onclick = () => {
      const shareText = `Check out the wood sculpture "${item.title}" by Boniface Chikwenhere at Unique Driftwood Creations!`;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href).then(() => {
          alert("Website link copied to clipboard to share this sculpture!");
        });
      } else {
        alert(shareText);
      }
    };
    
    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Lock background scroll
  }
  
  function closeLightbox() {
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto'; // Unlock background scroll
  }
  
  lightboxClose.addEventListener('click', closeLightbox);
  
  // Close Lightbox on Backdrop Click
  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) {
      closeLightbox();
    }
  });
  
  // Close on Escape Key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
      closeLightbox();
    }
  });

  // 5. Inquire Prefill & Scroll Logic
  function prefillInquiryForm(sculptureTitle) {
    const nameInput = document.getElementById('name');
    const subjectSelect = document.getElementById('subject');
    const messageTextarea = document.getElementById('message');
    
    // Select Acquisition Option
    subjectSelect.value = 'Sculpture Acquisition';
    
    // Prefill Message
    messageTextarea.value = `Hello Boniface, I am interested in acquiring the sculpture: "${sculptureTitle}". Please let me know its dimensions, pricing, and shipping logistics to my location.`;
    
    // Scroll smoothly to form
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
    
    // Focus Name Input
    setTimeout(() => {
      nameInput.focus();
    }, 800);
  }

  // 6. Sticky Header & Active Navigation Link on Scroll
  const header = document.getElementById('main-header');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    // Scroll header background opacity
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Scroll Active Section Indicator
    let currentSectionId = '';
    sections.forEach(sec => {
      const secTop = sec.offsetTop - 120;
      const secHeight = sec.clientHeight;
      if (window.scrollY >= secTop && window.scrollY < secTop + secHeight) {
        currentSectionId = sec.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href').substring(1);
      if (href === currentSectionId) {
        link.classList.add('active');
      }
    });
  });

  // 7. Mobile Navigation Toggle Menu
  const mobileNavToggle = document.getElementById('mobile-nav-toggle');
  const mainNav = document.getElementById('main-nav');
  
  mobileNavToggle.addEventListener('click', () => {
    mobileNavToggle.classList.toggle('active');
    mainNav.classList.toggle('active');
  });
  
  // Close mobile nav when link clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNavToggle.classList.remove('active');
      mainNav.classList.remove('active');
    });
  });

  // 8. Contact Form Handling (Real API Submission)
  const contactForm = document.getElementById('contact-form');
  const formStatusMsg = document.getElementById('form-status-msg');
  
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = document.getElementById('form-submit-btn');
    const originalBtnText = submitBtn.textContent;
    
    // Show sending state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    formStatusMsg.style.display = 'none';
    
    // Extract values
    const nameVal = document.getElementById('name').value;
    const emailVal = document.getElementById('email').value;
    const subjectVal = document.getElementById('subject').value;
    const messageVal = document.getElementById('message').value;
    
    // If running locally, mock save to localStorage to support offline previewing
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      setTimeout(() => {
        const localInquiries = JSON.parse(localStorage.getItem('udc_inquiries') || '[]');
        localInquiries.push({
          id: Date.now(),
          name: nameVal,
          email: emailVal,
          subject: subjectVal,
          message: messageVal,
          is_read: false,
          created_at: new Date().toISOString()
        });
        localStorage.setItem('udc_inquiries', JSON.stringify(localInquiries));
        
        formStatusMsg.textContent = `[LOCAL TEST] Thank you, ${nameVal}! Your inquiry about "${subjectVal}" has been saved to local preview storage.`;
        formStatusMsg.className = 'form-status-msg success';
        formStatusMsg.style.display = 'block';
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      }, 800);
      return;
    }

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: nameVal,
          email: emailVal,
          subject: subjectVal,
          message: messageVal,
        }),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        // Success
        formStatusMsg.textContent = `Thank you, ${nameVal}! Your inquiry about "${subjectVal}" has been registered. Boniface will get back to you shortly via ${emailVal}.`;
        formStatusMsg.className = 'form-status-msg success';
        formStatusMsg.style.display = 'block';
        contactForm.reset();
      } else {
        // API error
        formStatusMsg.textContent = data.error || 'Something went wrong. Please try again.';
        formStatusMsg.className = 'form-status-msg error';
        formStatusMsg.style.display = 'block';
      }
    } catch (err) {
      // Network error
      formStatusMsg.textContent = 'Could not connect to the server. Please check your internet and try again.';
      formStatusMsg.className = 'form-status-msg error';
      formStatusMsg.style.display = 'block';
    }
    
    submitBtn.disabled = false;
    submitBtn.textContent = originalBtnText;
    
    // Clear status message after 10 seconds
    setTimeout(() => {
      formStatusMsg.style.display = 'none';
    }, 10000);
  });

  // 9. Intersection Observer for Scroll Reveals
  const revealElements = document.querySelectorAll('.animate-on-scroll');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Animates only once
      }
    });
  }, {
    threshold: 0.15
  });
  
  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
});
