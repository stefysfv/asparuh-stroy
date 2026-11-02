/* =========================================================================
   1. ПОДРОБНИ ДАННИ И ЦЕНОРАЗПИСИ ЗА ВСЯКА ОТ 5-ТЕ УСЛУГИ
   ========================================================================= */
const servicesCatalog = {
    banya: {
        subtitle: "Категория 01 • Мокри помещения",
        title: "Цялостен ремонт на бани и мокри помещения",
        formCategory: "Цялостен ремонт на баня",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
        description: "Извършваме пълна реконструкция на бани в панелни, тухлени и новостроящи се жилища. Поемаме целия процес — от къртенето на старите плочки, през подмяната на водопровода и хидроизолацията, до прецизното лепене на плочките и монтажа на оборудването.",
        steps: [
            "Къртене на стари плочки, демонтаж на санитария и почистване на основата.",
            "Преработка или цялостна подмяна на ВиК разводки (ППР тръби) и канализация.",
            "Изправяне на криви стени и направа на циментова замазка с точен наклон към сифона.",
            "Полагане на двукомпонентна хидроизолация с уплътнителни ленти във всички ъгли.",
            "Лепене на фаянс, теракот и гранитогрес с нивелираща система (клинове) и фугиране.",
            "Монтаж на вградени структури, моноблок, мивка, душ система, бойлер и аксесоари."
        ],
        prices: [
            { item: "Къртене на стари плочки (фаянс и теракот)", unit: "м²", price: "7.50 € / 14.67 лв." },
            { item: "Изправяне на стени с хастарна мазилка", unit: "м²", price: "11.00 € / 21.51 лв." },
            { item: "Направа на циментова замазка с наклон", unit: "м²", price: "12.00 € / 23.47 лв." },
            { item: "Полагане на течна хидроизолация (2 ръце + ленти)", unit: "м²", price: "8.00 € / 15.65 лв." },
            { item: "Лепене на фаянс, теракот и гранитогрес (стандартен размер)", unit: "м²", price: "26.00 € / 50.85 лв." },
            { item: "Лепене на широкоформатни плочки (60х120 см)", unit: "м²", price: "34.00 € / 66.50 лв." },
            { item: "Монтаж на структура за вграждане + обличане с картон", unit: "бр.", price: "95.00 € / 185.80 лв." },
            { item: "Монтаж на линеен сифон", unit: "бр.", price: "45.00 € / 88.01 лв." },
            { item: "Монтаж на моноблок / шкаф с мивка / душ колона", unit: "бр.", price: "40.00 € / 78.23 лв." }
        ]
    },
    shpaklovka: {
        subtitle: "Категория 02 • Стени и тавани",
        title: "Шпакловка, изправяне на стени и мазилки",
        formCategory: "Шпакловка и мазилки",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1000&q=80",
        description: "Идеално гладката стена е основата на всеки качествен интериор. Изпълняваме гипсови и фини пастообразни шпакловки, армираме със стъклотекстилна мрежа против напукване, оформяме прави ръбове и шлайфаме машинно с жираф и прахосмукачка.",
        steps: [
            "Почистване на основата и нанасяне на дълбокопроникващ грунд или бетонконтакт.",
            "Изправяне на големи неравности и кривини с гипсова мазилка.",
            "Монтаж на алуминиеви ъглохранители по всички външни ръбове и колони.",
            "Полагане на гипсова шпакловка с вграждане на армираща стъклотекстилна мрежа.",
            "Нанасяне на 2 ръце фина пастообразна шпакловка за огледална гладкост.",
            "Машинно шлайфане с жираф и прахосмукачка без запрашаване на обекта."
        ],
        prices: [
            { item: "Грундиране преди шпакловка (дълбокопроникващ грунд / бетонконтакт)", unit: "м²", price: "2.00 € / 3.91 лв." },
            { item: "Гипсова шпакловка (1 ръка за изравняване на основа)", unit: "м²", price: "6.50 € / 12.71 лв." },
            { item: "Гипсова шпакловка с вграждане на армираща мрежа", unit: "м²", price: "8.50 € / 16.62 лв." },
            { item: "Фина пастообразна шпакловка (2 ръце + машинно шлайфане)", unit: "м²", price: "9.00 € / 17.60 лв." },
            { item: "Цялостна шпакловка (гипсова с мрежа + 2 ръце фина + шлайфане)", unit: "м²", price: "16.50 € / 32.27 лв." },
            { item: "Монтаж на алуминиеви ъглохранители с шпакловане", unit: "л.м.", price: "5.00 € / 9.78 лв." },
            { item: "Обръщане на прозорци и врати след смяна на дограма", unit: "л.м.", price: "14.00 € / 27.38 лв." },
            { item: "Изправяне на криви стени с гипсова мазилка", unit: "м²", price: "11.50 € / 22.49 лв." }
        ]
    },
    boyadisvane: {
        subtitle: "Категория 03 • Финишни покрития",
        title: "Професионално боядисване с латекс",
        formCategory: "Боядисване с латекс",
        image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1000&q=80",
        description: "Чисто и равномерно боядисване на апартаменти, къщи и офиси без следи от валяк и без изцапани подове. Обръщаме специално внимание на пълното опаковане на обекта, правилното грундиране и прецизното отсичане между стени и тавани.",
        steps: [
            "Цялостно опаковане на подови настилки, мебели, врати и прозорци с найлон и тиксо.",
            "Обезпрашаване на стените и локални корекции на дребни забележки.",
            "Нанасяне на грунд преди боя за уеднаквяване на попиваемостта и здрав захват.",
            "Прецизно отсичане на ъглите между тавана и стените с професионални ленти.",
            "Нанасяне на две ръце висококачествен миещ се или дишащ латекс.",
            "Премахване на предпазните фолиа и чисто предаване на боядисаните помещения."
        ],
        prices: [
            { item: "Опаковане на под, мебели и дограма с предпазно фолио", unit: "м²", price: "1.50 € / 2.93 лв." },
            { item: "Грундиране на стени и тавани преди боядисване", unit: "м²", price: "1.80 € / 3.52 лв." },
            { item: "Боядисване с бял латекс (две ръце)", unit: "м²", price: "4.00 € / 7.82 лв." },
            { item: "Боядисване с цветен латекс в един цвят (две ръце)", unit: "м²", price: "4.50 € / 8.80 лв." },
            { item: "Боядисване в два или повече цвята в помещение", unit: "м²", price: "5.80 € / 11.34 лв." },
            { item: "Прецизно отсичане на два цвята с лента", unit: "л.м.", price: "2.20 € / 4.30 лв." },
            { item: "Третиране на петна от течове / никотин с изолиращ грунд", unit: "м²", price: "4.00 € / 7.82 лв." },
            { item: "Сваляне на стари тапети и подготовка за боя", unit: "м²", price: "5.00 € / 9.78 лв." }
        ]
    },
    gipsokarton: {
        subtitle: "Категория 04 • Сухо строителство",
        title: "Гипсокартон, преградни стени и окачени тавани",
        formCategory: "Гипсокартон и окачени тавани",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
        description: "Сухото строителство позволява бързо и чисто преобразяване на всяко помещение, изправяне на криви стени без мокри процеси, скриване на тръби и кабели, както и изграждане на модерни тавани със скрито LED осветление.",
        steps: [
            "Точно лазерно нивелиране и разчертаване на металната конструкция.",
            "Монтаж на поцинковани профили (UD/CD и UW/CW) с уплътнителна лента.",
            "Полагане на минерална вата за топлоизолация в кухините при желание.",
            "Зашиване с обикновен или влагоустойчив гипсокартон (еднослойно или двуслойно).",
            "Изграждане на скрити ниши за пердета, декоративни куфари и фигури за LED ленти.",
            "Фугиране на снадките с армираща лента на три ръце."
        ],
        prices: [
            { item: "Окачен таван от гипсокартон на метална конструкция", unit: "м²", price: "19.00 € / 37.16 лв." },
            { item: "Предстенна обшивка на конструкция (изправяне на стена)", unit: "м²", price: "17.50 € / 34.23 лв." },
            { item: "Лепене на гипсокартон директно по стени", unit: "м²", price: "13.00 € / 25.43 лв." },
            { item: "Преградна стена от гипсокартон (двустранно + вата)", unit: "м²", price: "26.00 € / 50.85 лв." },
            { item: "Изграждане на куфар за скриване на тръби / щрангове", unit: "л.м.", price: "18.00 € / 35.20 лв." },
            { item: "Направа на скрит корниз за пердета или ниша за LED", unit: "л.м.", price: "22.00 € / 43.03 лв." },
            { item: "Полагане на минерална вата", unit: "м²", price: "3.50 € / 6.85 лв." },
            { item: "Фугиране на гипсокартон с лента (3 ръце)", unit: "м²", price: "6.00 € / 11.73 лв." }
        ]
    },
    elektro: {
        subtitle: "Категория 05 • Електроинсталации",
        title: "Контакти, ключове, LED осветление и табла",
        formCategory: "Електроуслуги и осветление",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80",
        description: "При всеки модерен ремонт се налага добавяне на нови контакти, преместване на ключове спрямо мебелите и изграждане на ново осветление. Изпълняваме всички видове вътрешни електроуслуги надеждно и безопасно.",
        steps: [
            "Определяне на точните места за нови контакти, ключове и изводи.",
            "Прорязване на канали и отвори за конзолни кутии в тухла, бетон или картон.",
            "Прокарване на нови силови кабели и замазване на каналите.",
            "Монтаж на апартаментни ел. табла с автоматични предпазители и ДТЗ.",
            "Вграждане на алуминиеви профили за линейно LED осветление и трансформатори.",
            "Чист монтаж на ключове, контакти, лунички, плафони и полилеи след боядисване."
        ],
        prices: [
            { item: "Монтаж на ключ или контакт", unit: "бр.", price: "4.50 € / 8.80 лв." },
            { item: "Отваряне на нова конзолна кутия в тухла / гипсокартон", unit: "бр.", price: "6.00 € / 11.73 лв." },
            { item: "Отваряне на нова конзолна кутия в бетон (панел)", unit: "бр.", price: "12.00 € / 23.47 лв." },
            { item: "Изтегляне на нов кабел по стена / таван", unit: "л.м.", price: "2.50 € / 4.89 лв." },
            { item: "Изрязване на отвор и монтаж на луничка в гипсокартон", unit: "бр.", price: "7.00 € / 13.69 лв." },
            { item: "Монтаж на LED профил, LED лента и захранване", unit: "л.м.", price: "12.00 € / 23.47 лв." },
            { item: "Монтаж на осветително тяло (плафон, аплик, полилей)", unit: "бр.", price: "15.00 € / 29.34 лв." },
            { item: "Подмяна и свързване на апартаментно ел. табло (до 12 предпазителя)", unit: "бр.", price: "90.00 € / 176.02 лв." }
        ]
    }
};

/* =========================================================================
   2. НАВИГАЦИЯ МЕЖДУ СТРАНИЦИТЕ И МОБИЛНО МЕНЮ
   ========================================================================= */
function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileIcon = document.getElementById('mobile-menu-icon');
    mobileMenu.classList.add('hidden');
    if (mobileIcon) {
        mobileIcon.className = 'fa-solid fa-bars text-xs';
    }
}

function navigateTo(viewName) {
    document.querySelectorAll('.page-view').forEach(view => {
        view.classList.add('hidden');
    });

    const targetView = document.getElementById(`view-${viewName}`);
    if (targetView) {
        targetView.classList.remove('hidden');
    }

    closeMobileMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openServicePage(serviceKey) {
    const data = servicesCatalog[serviceKey];
    if (!data) return;

    document.getElementById('srv-subtitle').textContent = data.subtitle;
    document.getElementById('srv-title').textContent = data.title;
    document.getElementById('srv-desc').textContent = data.description;
    document.getElementById('srv-image').src = data.image;

    const ctaBtn = document.getElementById('srv-cta-btn');
    ctaBtn.onclick = () => {
        document.getElementById('serviceType').value = data.formCategory;
        navigateTo('contact');
    };

    const stepsList = document.getElementById('srv-steps');
    stepsList.innerHTML = data.steps.map(step => `
        <li class="flex items-start gap-2.5">
            <span class="w-4 h-4 rounded-full bg-apple-blue/10 text-apple-blue text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">✓</span>
            <span>${step}</span>
        </li>
    `).join('');

    const pricesBody = document.getElementById('srv-prices-body');
    pricesBody.innerHTML = data.prices.map(row => `
        <tr class="hover:bg-apple-bg/50 transition">
            <td class="py-3 px-4 font-medium text-apple-dark">${row.item}</td>
            <td class="py-3 px-2 text-center text-apple-gray">${row.unit}</td>
            <td class="py-3 px-4 text-right font-semibold text-apple-dark">${row.price}</td>
        </tr>
    `).join('');

    document.querySelectorAll('.srv-tab-btn').forEach(btn => {
        if (btn.getAttribute('data-srv-btn') === serviceKey) {
            btn.className = "srv-tab-btn px-3 py-1.5 rounded-xl text-xs font-semibold bg-white text-apple-dark shadow-sm transition";
        } else {
            btn.className = "srv-tab-btn px-3 py-1.5 rounded-xl text-xs font-medium text-apple-gray hover:text-apple-dark transition";
        }
    });

    navigateTo('service');
}

/* =========================================================================
   3. ПОРТФОЛИО (ЗАВЪРШЕНИ ПРОЕКТИ ПРЕДИ / СЛЕД)
   ========================================================================= */
const projectsData = [
    {
        id: 1,
        category: "бани",
        title: "Цялостен ремонт на баня с душ зона",
        location: "гр. София, кв. Лозенец",
        area: "6.5 м²",
        duration: "14 дни",
        description: "Подмяна на ВиК тръби, хидроизолация, вградена структура и гранитогрес 60x120 см.",
        afterImg: "images/banya1.jpg",
        beforeImg: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        category: "гипсокартон",
        title: "Окачени тавани и скрито LED осветление",
        location: "гр. София, кв. Изток",
        area: "48 м²",
        duration: "7 дни",
        description: "Окачени тавани с ниши за пердета, вградени алуминиеви профили за LED ленти и шпакловка.",
        afterImg: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
        beforeImg: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        category: "шпакловка",
        title: "Фина шпакловка и изправяне на стени",
        location: "гр. София, кв. Иван Вазов",
        area: "140 м² стени",
        duration: "6 дни",
        description: "Шпакловка с армираща мрежа, монтаж на ъглохранители и безпрахово шлайфане с жираф.",
        afterImg: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
        beforeImg: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        category: "боядисване",
        title: "Боядисване на тристаен апартамент с латекс",
        location: "гр. София, кв. Младост",
        area: "220 м²",
        duration: "4 дни",
        description: "Пълно опаковане на обекта, дълбоко грундиране, отсичане и боядисване с миещ се латекс.",
        afterImg: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
        beforeImg: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?auto=format&fit=crop&w=800&q=80"
    }
];

function renderPortfolio(filterCategory = 'all') {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const filtered = filterCategory === 'all' 
        ? projectsData 
        : projectsData.filter(item => item.category === filterCategory);

    filtered.forEach(project => {
        const card = document.createElement('div');
        card.className = "bg-white rounded-3xl border border-black/[0.05] shadow-bento overflow-hidden flex flex-col justify-between";
        card.innerHTML = `
            <div>
                <div class="px-5 py-3 border-b border-black/[0.04] flex justify-between items-center text-xs">
                    <span class="font-semibold text-apple-dark">${project.location}</span>
                    <span class="text-apple-gray">${project.area} • ${project.duration}</span>
                </div>
                <div class="relative h-60 overflow-hidden bg-apple-dark">
                    <img id="img-${project.id}" src="${project.afterImg}" alt="${project.title}" 
                         onerror="this.src='https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80'"
                         class="w-full h-full object-cover transition duration-500">
                    <span id="badge-${project.id}" class="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-[11px] font-medium rounded-full px-3 py-1">
                        След ремонта
                    </span>
                    <button onclick="toggleBeforeAfter(${project.id})" id="btn-${project.id}" data-state="after"
                            class="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md hover:bg-apple-blue hover:text-white text-apple-dark rounded-full text-xs font-medium px-3.5 py-1.5 shadow-sm transition flex items-center space-x-1.5">
                        <i class="fa-solid fa-repeat text-[10px]"></i>
                        <span>Виж ПРЕДИ</span>
                    </button>
                </div>
                <div class="p-5">
                    <h3 class="text-base font-bold text-apple-dark mb-1">${project.title}</h3>
                    <p class="text-xs text-apple-gray leading-relaxed">${project.description}</p>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function toggleBeforeAfter(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    const imgEl = document.getElementById(`img-${projectId}`);
    const badgeEl = document.getElementById(`badge-${projectId}`);
    const btnEl = document.getElementById(`btn-${projectId}`);

    if (btnEl.getAttribute('data-state') === 'after') {
        imgEl.src = project.beforeImg;
        badgeEl.textContent = 'Преди ремонта';
        badgeEl.className = 'absolute top-3 left-3 bg-apple-blue text-white text-[11px] font-medium rounded-full px-3 py-1';
        btnEl.innerHTML = '<i class="fa-solid fa-check text-[10px]"></i> <span>Върни СЛЕД</span>';
        btnEl.setAttribute('data-state', 'before');
    } else {
        imgEl.src = project.afterImg;
        badgeEl.textContent = 'След ремонта';
        badgeEl.className = 'absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-[11px] font-medium rounded-full px-3 py-1';
        btnEl.innerHTML = '<i class="fa-solid fa-repeat text-[10px]"></i> <span>Виж ПРЕДИ</span>';
        btnEl.setAttribute('data-state', 'after');
    }
}

function filterProjects(category, btnElement) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.className = "filter-btn text-apple-gray hover:text-apple-dark px-3.5 py-1.5 rounded-xl transition";
    });
    btnElement.className = "filter-btn bg-white text-apple-dark shadow-sm px-3.5 py-1.5 rounded-xl transition";
    renderPortfolio(category);
}

/* =========================================================================
   4. ПРИКАЧВАНЕ НА СНИМКИ И ИЗПРАЩАНЕ КЪМ GMAIL
   ========================================================================= */
let uploadedPhotos = [];
const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('photo-upload');
const previewContainer = document.getElementById('photo-preview-container');

dropZone.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', (e) => handleFiles(e.target.files));

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('border-apple-blue', 'bg-apple-blue/5');
});
dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('border-apple-blue', 'bg-apple-blue/5');
});
dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('border-apple-blue', 'bg-apple-blue/5');
    handleFiles(e.dataTransfer.files);
});

function compressImage(file, maxWidth = 1280, quality = 0.75) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;
                if (width > maxWidth) {
                    height = Math.round((height * maxWidth) / width);
                    width = maxWidth;
                }
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                resolve({
                    name: file.name.replace(/\.[^/.]+$/, "") + ".jpg",
                    dataUrl: canvas.toDataURL('image/jpeg', quality)
                });
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    });
}

async function handleFiles(files) {
    for (const file of Array.from(files)) {
        if (!file.type.startsWith('image/') || uploadedPhotos.length >= 5) continue;
        const compressedPhoto = await compressImage(file);
        uploadedPhotos.push(compressedPhoto);
        renderPhotoPreviews();
    }
}

function renderPhotoPreviews() {
    if (uploadedPhotos.length === 0) {
        previewContainer.classList.add('hidden');
        return;
    }
    previewContainer.classList.remove('hidden');
    previewContainer.innerHTML = uploadedPhotos.map((photo, index) => `
        <div class="relative rounded-xl border border-black/[0.08] h-20 bg-apple-bg overflow-hidden">
            <img src="${photo.dataUrl}" class="w-full h-full object-cover">
            <button type="button" onclick="removePhoto(${index})" 
                    class="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/70 text-white text-[10px] flex items-center justify-center hover:bg-apple-blue transition">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
    `).join('');
}

function removePhoto(index) {
    uploadedPhotos.splice(index, 1);
    renderPhotoPreviews();
}

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw28ewWbiBrHpBkqN1q9TZ2B29i_9JCFL3-QCh1l1MoX6m3HEJ4pV8f7l76TTXVYSzzqg/exec";
const form = document.getElementById('renovation-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById('submit-btn');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Изпращане...</span> <i class="fa-solid fa-spinner fa-spin"></i>';

    const areaValue = document.getElementById('projectArea').value || 'Не е посочена';
    const rawDescription = document.getElementById('projectDescription').value;

    const payload = {
        name: document.getElementById('clientName').value,
        phone: document.getElementById('clientPhone').value,
        email: document.getElementById('clientEmail').value,
        address: document.getElementById('clientAddress').value,
        service: document.getElementById('serviceType').value,
        area: areaValue,
        description: `Декларирана площ: ${areaValue}\n\n${rawDescription}`,
        photos: uploadedPhotos
    };

    try {
        await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(payload)
        });

        document.getElementById('modal-name').textContent = payload.name;
        document.getElementById('modal-phone').textContent = payload.phone;
        document.getElementById('modal-service').textContent = payload.service;
        document.getElementById('email-modal').classList.remove('hidden');

        form.reset();
        uploadedPhotos = [];
        renderPhotoPreviews();
    } catch (error) {
        alert('Възникна грешка при изпращането. Моля, обадете ни се по телефона.');
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
    }
});

function closeEmailModal() {
    document.getElementById('email-modal').classList.add('hidden');
}

document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileIcon = document.getElementById('mobile-menu-icon');
    const isHidden = mobileMenu.classList.toggle('hidden');
    if (mobileIcon) {
        mobileIcon.className = isHidden ? 'fa-solid fa-bars text-xs' : 'fa-solid fa-xmark text-sm';
    }
});

window.addEventListener('DOMContentLoaded', () => {
    renderPortfolio('all');
});