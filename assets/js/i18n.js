/*
 *  I18n.js
 *  =======
 *
 *  Simple localization util.
 *  1. Store your localized labels in json format: `localized-content.json`
 *  2. Write your markup with key references using `data-i18n` attributes.
 *  3. Explicitly invoke a traverse key resolver: `i18n.localize()`
 *     OR
 *     Change the language, and the contents will be refreshed: `i18n.lang('en')`
 *
 *  This util relies on jQuery to work. I would recommend using the latest version
 *  available (1.12.x or 2.1.4+), although this will probably run with any older
 *  version since it is only taking advantage of `$.getJSON()` and the jQuery
 *  selector function `$()`.
 * 
 *  © 2016 Diogo Simões - diogosimoes.com
 *
 */

 var demoJson = {
 	"header": {
        "main": {
          "uz": "Asosiy",
          "ru": "Главная",
          "en": "Main"
        },
        "about": {
    			"uz": "Kompaniya",
          "ru": "Компания",
          "en": "Company"
        },
        "product": {
        	"uz": "Mahsulotlar",
          "ru": "Продукция",
          "en": "Products"
        },
        "career": {
        	"uz": "Karyera",
          "ru": "Карьера",
          "en": "Career"
        },
        "supply": {
        	"uz": "Ta'minot",
          "ru": "Снабжение",
          "en": "Supply"
        },
        "contacts": {
        	"uz": "Kontaktlar",
          "ru": "Контакты",
          "en": "Contacts"
        }
      },
  
    	"hero": {
    		"title": {
      		"uz": "Muhim narsaga e'tibor qarating",
          "ru": "Сосредоточьтесь на том, что важно",
          "en": "Focus on what's important"
    		},
    		"description": {
      		"uz": "Innovatsion bosib chiqarish bilan moslashuvchan qadoqlash va plyonka materiallarini professional ishlab chiqarish. Pro Flexo sifatli va ijodiy qadoqlash bo'yicha ishonchli hamkoringizdir.",
          "ru": "Профессиональное производство гибкой упаковки и пленочных материалов с инновационной печатью. Pro Flexo - ваш надежный партнер для качественной и креативной упаковки.",
          "en": "Professional production of flexible packaging and film materials with innovative printing. Pro Flexo is your reliable partner for quality and creative packaging."
    		},
    		"familiarize": {
      		"uz": "Tanishmoq",
          "ru": "Ознакомиться",
          "en": "Familiarize"
    		},
    		"seemore": {
      		"uz": "Ko'rish",
          "ru": "Посмотреть",
          "en": "Look"
    		},
    		"logo": {
      		"uz": "ProFlexo'dan innovatsion moslashuvchan qadoqlash va plyonka materiallari",
          "ru": "Инновационная гибкая упаковка и пленочные материалы от ProFlexo",
          "en": "Innovative flexible packaging and film materials from ProFlexo"
    		}
      },
  		"why_us": {
  			"about_us": {
  				"uz": "Biz haqimizda",
  				"ru": "О нас",
  				"en": "About us"
  			},
  			"speak": {
  				"uz": "Keling, biz haqimizda gapiraylik",
  				"ru": "Давайте поговорим о нас",
  				"en": "Let's talk about us"
  			},
  			"develop": {
  				"uz": "Keling, biznesingizni birgalikda rivojlantiraylik",
  				"ru": "Давайте развивать ваш бизнес вместе",
  				"en": "Let's grow your business together"
  			},
  			"greeting": {
  				"uz": "Pro Flexo dunyosiga xush kelibsiz - yuqori sifatli moslashuvchan qadoqlash va innovatsion bosma plyonkali materiallarni ishlab chiqarishda katta tajribaga ega kompaniya.",
  				"ru": "Добро пожаловать в мир Pro Flexo - компании с большим опытом в производстве высококачественной гибкой упаковки и пленочных материалов с инновационной печатью.",
  				"en": "Welcome to the world of Pro Flexo - a company with extensive experience in the production of high quality flexible packaging and film materials with innovative printing."
  			},
  			"reliable": {
  				"uz": "Ishonchli hamkorlik",
  				"ru": "Надежное партнерство",
  				"en": "Reliable partnership"
  			},
  			"why_reliable": {
  				"uz": "Biz sizning ishonchli hamkoringiz, biznesingiz uchun noyob va ijodiy qadoqlash yechimlarini taqdim etishga tayyormiz.",
  				"ru": "Мы являемся вашим надежным партнером, готовым предоставить уникальные и креативные упаковочные решения для вашего бизнеса.",
  				"en": "We are your trusted partner, ready to provide unique and creative packaging solutions for your business."
  			},
  			"exp": {
  				"uz": "Bizning professional ishlab chiqarishimiz va katta tajribamiz bizga turli sohalardagi mijozlarga xizmat ko'rsatish va eng yuqori standartlarga javob beradigan sifatli mahsulotlarni taqdim etish imkonini beradi.",
  				"ru": "Наше профессиональное производство и широкий опыт позволяют нам обслуживать клиентов в различных отраслях и предоставлять качественные продукты, соответствующие самым высоким стандартам.",
  				"en": "Our professional manufacturing and extensive experience enable us to serve customers in various industries and provide quality products that meet the highest standards."
  			},
  			"geo": {
  				"uz": "Geografik taqsimot",
  				"ru": "Географическое распределение",
  				"en": "Geographical distribution"
  			},
  			"proud": {
  				"uz": "Biz nafaqat O‘zbekistonda, balki undan tashqarida ham mijozlarga xizmat ko‘rsatish imkonini beruvchi o‘z innovatsiyalarimiz, shuningdek, geografik joylashuvimiz bilan faxrlanamiz.",
  				"ru": "Мы гордимся нашими инновациями, а также географическим охватом, который позволяет нам обслуживать клиентов не только в Узбекистане, но и за его пределами.",
  				"en": "We are proud of our innovation, as well as our geographic reach, which allows us to serve clients not only in Uzbekistan, but also beyond."
  			},
  			"solutions": {
  				"uz": "Sizning biznesingiz hajmi va joylashuvidan qat'i nazar, biz har doim sizga o'ziga xosligingizni ta'kidlaydigan va muvaffaqiyatga erishishingizga yordam beradigan echimlarni taklif qilishga tayyormiz.",
  				"ru": "Независимо от масштаба и местоположения вашего бизнеса, мы всегда готовы предложить вам решения, которые подчеркнут вашу уникальность и помогут достичь успеха.",
  				"en": "Regardless of the size and location of your business, we are always ready to offer you solutions that will highlight your uniqueness and help you achieve success."
  			},
  			"technologies": {
  				"uz": "Innovatsion texnologiyalar",
  				"ru": "Инновационные технологии",
  				"en": "Innovative technologies"
  			},
  			"aimed_technologies": {
  				"uz": "Biz qadoqlash sanoatining oldingi saflarida qolish uchun doimiy innovatsiyalar va rivojlanishga sodiqmiz.",
  				"ru": "Мы нацелены на постоянные инновации и разработки, чтобы быть на передовых позициях в индустрии упаковки.",
  				"en": "We are committed to continuous innovation and development to remain at the forefront of the packaging industry."
  			},
  			"equipped": {
  				"uz": "Bizning ishlab chiqarishimiz zamonaviy uskunalar bilan jihozlangan bo'lib, bu bizga har bir buyurtmada eng yuqori sifat va aniqlik standartlariga erishish imkonini beradi.",
  				"ru": "Наше производство оснащено современным оборудованием, которое позволяет нам достигать высочайших стандартов качества и точности в каждом заказе.",
  				"en": "Our production is equipped with modern equipment, which allows us to achieve the highest standards of quality and accuracy in every order."
  			}
  		},

  		"services_list": {
  			"peculiarities": {
  				"uz": "Xususiyatlari",
  				"ru": "Особенности",
  				"en": "Peculiarities"
  			},
  			"choose_us": {
  				"uz": "Nega hamma bizni tanlaydi?",
  				"ru": "Почему все выбирают нас?",
  				"en": "Why does everyone choose us?"
  			},
  			"innovative_printing": {
  				"uz": "Innovatsion bosma",
  				"ru": "Инновационная Печать",
  				"en": "innovative Printing"
  			},
  			"we_equipped": {
  				"uz": "Biz ajoyib grafik va tasvirlar bilan qadoqlash yaratish uchun eng zamonaviy bosib chiqarish texnologiyalari bilan jihozlanganmiz.",
  				"ru": "Мы оснащены современными технологиями печати, позволяющими создавать упаковку с выдающейся графикой и изображениями.",
  				"en": "We are equipped with state-of-the-art printing technologies to create packaging with outstanding graphics and images."
  			},
  			"flexible_customization": {
  				"uz": "Moslashuvchan moslashtirish",
  				"ru": "Гибкая Кастомизация",
  				"en": "Flexible Customization"
  			},
  			"packaging_customizable": {
  				"uz": "Bizning qadoqlashimiz har bir mijozning o'ziga xos ehtiyojlarini qondirish uchun moslashtirilgan bo'lib, bizning yechimlarimiz turli sohalar uchun idealdir.",
  				"ru": "Наша упаковка настраивается под уникальные потребности каждого клиента, что делает наши решения идеальными для различных отраслей.",
  				"en": "Our packaging is customized to meet each customer's unique needs, making our solutions ideal for a variety of industries."
  			},
  			"control_qualities": {
  				"uz": "Sifat nazorati",
  				"ru": "Контроль Качества",
  				"en": "Quality control"
  			},
  			"control": {
  				"uz": "Biz ishlab chiqarishning har bir bosqichini qat'iy nazorat qilamiz, eng yuqori sifat standartlari va mahsulot ishonchliligini kafolatlaymiz.",
  				"ru": "Мы строго контролируем каждый этап производства, гарантируя высшие стандарты качества и надежность продукции.",
  				"en": "We strictly control every stage of production, guaranteeing the highest quality standards and product reliability."
  			},
  			"geo_coverage": {
  				"uz": "Geografik qamrov",
  				"ru": "Географический Охват",
  				"en": "Geographical Coverage"
  			},
  			"whole_world": {
  				"uz": "Biz nafaqat O'zbekistonda, balki boshqa mamlakatlardagi mijozlarga xizmat ko'rsatamiz va butun dunyo bo'ylab sifatli qadoqlash yechimlarini taklif qilamiz.",
  				"ru": "Мы обслуживаем клиентов не только в Узбекистане, но и в других странах, предлагая качественные упаковочные решения по всему миру.",
  				"en": "We serve clients not only in Uzbekistan, but also in other countries, offering quality packaging solutions around the world."
  			},
  			"individual_approach": {
  				"uz": "Individual yondashuv",
  				"ru": "Индивидуальный Подход",
  				"en": "Individual Approach"
  			},
  			"consultations": {
  				"uz": "Biz har bir buyurtma noyob ekanligini tushunamiz va sizning ehtiyojlaringizga eng mos keladigan maslahat va echimlarni taqdim etishga intilamiz.",
  				"ru": "Мы понимаем, что каждый заказ уникален, и готовы предоставить консультации и решения, наилучшим образом соответствующие вашим потребностям.",
  				"en": "We understand that every order is unique and are committed to providing advice and solutions that best suit your needs."
  			},
  			"efficiency_reliability": {
  				"uz": "Samaradorlik va ishonchlilik",
  				"ru": "Оперативность и Надежность",
  				"en": "Efficiency and Reliability"
  			},
  			"efficiency_reliability_des": {
  				"uz": "Biz buyurtmalarning tezkor bajarilishini va ishonchli ta'minotni kafolatlaymiz, bu bizga sizning uzoq muddatli hamkoringiz bo'lish imkonini beradi.",
  				"ru": "Мы гарантируем оперативное выполнение заказов и надежность поставок, что позволяет нам быть вашим долгосрочным партнером.",
  				"en": "We guarantee prompt execution of orders and reliable supplies, which allows us to be your long-term partner."
  			}
  		},
  		"departments": {
  			"order": {
  				"uz": "Buyurtma qilmoq",
  				"ru": "Заказать",
  				"en": "Order"
  			},
  			"products": {
  				"uz": "Mahsulotlar",
  				"ru": "Продукты",
  				"en": "Products"
  			},
  			"show_products": {
  				"uz": "Keling, mahsulotlarimizni ko'rsataylik",
  				"ru": "Покажем нашу продукцию",
  				"en": "Let's show our products"
  			},
  			"package1": {
  				"uz": "Qandolat mahsulotlari uchun qadoqlash",
  				"ru": "Упаковки для кондитерских изделий",
  				"en": "Packaging for confectionery products"
  			},
  			"package2": {
  				"uz": "Choy, qahva va kakao uchun qadoqlash",
  				"ru": "Упаковки для чая, кофе и какао",
  				"en": "Packaging for tea, coffee and cocoa"
  			},
  			"package3": {
  				"uz": "Ziravorlar va ziravorlar uchun qadoqlash.",
  				"ru": "Упаковка для специй и приправ.",
  				"en": "Packaging for spices and seasonings."
  			},
  			"package4": {
  				"uz": "Yorma, makaron, tuz, shakar va boshqa oziq-ovqat mahsulotlarini qadoqlash",
  				"ru": "Упаковки для круп, макаронных изделий, соли, сахара и другие бакалейные изделие",
  				"en": "Packaging for cereals, pasta, salt, sugar and other groceries"
  			},
  			"package5": {
  				"uz": "Chipslar, donlar va tez tayyorlanadigan ovqatlar uchun qadoqlash.",
  				"ru": "Упаковки для чипсов, хлопья и продуктов быстрого приготовления.",
  				"en": "Packaging for chips, cereals and instant foods."
  			},
  			"package6": {
  				"uz": "Hayvonlar uchun ozuqa uchun qadoqlash.",
  				"ru": "Упаковки для кормов животных.",
  				"en": "Packaging for animal feed."
  			},
  			"package7": {
  				"uz": "Soslar va mayonez uchun qadoqlash.",
  				"ru": "Упаковки для соусов и майонеза.",
  				"en": "Packaging for sauces and mayonnaise."
  			},
  			"package8": {
  				"uz": "Yuvish vositalari uchun qadoqlash.",
  				"ru": "Упаковки для моющих средств.",
  				"en": "Packaging for detergents."
  			},
  			"package9": {
  				"uz": "Muzqaymoq qadoqlash.",
  				"ru": "Упаковки для мороженого.",
  				"en": "Ice cream packaging."
  			},
  			"package10": {
  				"uz": "Ichimliklar uchun teglar.",
  				"ru": "Этикетки для напитков.",
  				"en": "Labels for drinks."
  			},
  			"package11": {
  				"uz": "Non va pishiriqlar uchun qadoqlash.",
  				"ru": "Упаковки для хлебов и выпечки.",
  				"en": "Packaging for breads and pastries."
  			},
  			"package12": {
  				"uz": "Kesilgan va halqa tutqichli sumkalar.",
  				"ru": "Пакеты с вырубной и петлевой ручкой.",
  				"en": "Bags with cut-out and loop handles."
  			},
  			"package13": {
  				"uz": "Gigiena vositalari uchun qadoqlash.",
  				"ru": "Упаковки для гигиенических изделий.",
  				"en": "Packaging for hygiene products."
  			},
  			"package14": {
  				"uz": "Muzlatilgan mahsulotlar, broylerlar uchun paketlar.",
  				"ru": "Пакеты для замороженных продуктов, бройлеров.",
  				"en": "Packages for frozen products, broilers."
  			},
  			"package15": {
  				"uz": "Kuryer paketlari.",
  				"ru": "Курьерские упаковки-пакеты.",
  				"en": "Courier packages."
  			},
  			"package1_des": {
  				"uz": "Qandolat dunyosidagi mahsulotlar har doim chidab bo'lmas bo'lishi kerak va bizning qadoqlashimiz sizni ajralib turishingizga yordam beradi. Pro Flexo shirin delikateslaringizning ta'mi va sifatini ta'kidlaydigan keng ko'lamli ijodiy va funktsional qadoqlash yechimlarini taklif etadi.",
  				"ru": "Продукция в мире кондитерских изделий всегда должна быть неотразимой, и наши упаковки помогут вам выделиться. Pro Flexo предлагает широкий выбор креативных и функциональных упаковочных решений, которые подчеркнут вкус и качество ваших сладких деликатесов.",
  				"en": "Products in the world of confectionery always need to be irresistible, and our packaging will help you stand out. Pro Flexo offers a wide range of creative and functional packaging solutions that will highlight the taste and quality of your sweet delicacies."
  			},
  			"package1_des2": {
  				"uz": "Qandolat mahsulotlari tafsilotlarga alohida e'tibor talab qilishini tushunamiz va bizning qadoqlashimiz buni hisobga olgan holda ishlab chiqilgan. Kek, pechenye, shokolad yoki boshqa shirinliklarni taklif qilasizmi, bizda siz uchun mukammal yechim bor.",
  				"ru": "Мы понимаем, что кондитерские изделия требуют особого внимания к деталям, и наши упаковки разработаны с учетом этого. Независимо от того, предлагаете ли вы торты, печенье, шоколад или другие сладости, у нас есть идеальное решение для вас.",
  				"en": "We understand that confectionery products require special attention to detail and our packaging is designed with this in mind. Whether you offer cakes, cookies, chocolates or other sweets, we have the perfect solution for you."
  			},
  			"package1_des_what": {
  				"uz": "Bizning qadoqlashimiz quyidagilarni ta'minlaydi:",
  				"ru": "Наши упаковки обеспечивают:",
  				"en": "Our packaging provides:"
  			},
  			"package1_des_what1": {
  				"uz": "<b>Jozobli dizayn:</b> Biz darhol mijozlar e'tiborini tortadigan va brendingizning o'ziga xosligini ta'kidlaydigan qadoqlash yaratamiz.",
  				"ru": "<b>Привлекательный Дизайн:</b> Мы создаем упаковку, которая мгновенно привлекает внимание покупателей и подчеркивает уникальность вашего бренда.",
  				"en": "<b>Attractive Design:</b> We create packaging that instantly attracts customers' attention and highlights the uniqueness of your brand."
  			},
  			"package1_des_what2": {
  				"uz": "<b>Mahsulotni himoya qilish:</b> Biz qandolat mahsulotlarining yangiligi va sifatini saqlaydigan qadoqlash bilan ta'minlaymiz.",
  				"ru": "<b>Защиту Продукции:</b> Мы предоставляем упаковку, которая сохраняет свежесть и качество ваших кондитерских изделий.",
  				"en": "<b>Product Protection:</b> We provide packaging that preserves the freshness and quality of your confectionery products."
  			},
  			"package1_des_what3": {
  				"uz": "<b>Qulaylik va funksionallik: </b>Bizning qadoqlashimiz foydalanish qulayligi va ochilish qulayligini hisobga olgan holda ishlab chiqilgan.",
  				"ru": "<b>Удобство и Функциональность: </b>Наши упаковки разработаны с учетом удобства использования и легкости открытия.",
  				"en": "<b>Convenience and Functionality: </b>Our packaging is designed with ease of use and ease of opening in mind."
  			},
  			"package1_des_what4": {
  				"uz": "<b>Moslashtirilgan yechimlar: </b>Biz sizga noyob talablaringizga mos keladigan va o'zingizni ifoda etishingizga imkon beruvchi qadoqlash bilan ta'minlash uchun shu yerdamiz.",
  				"ru": "<b>Настраиваемые Решения: </b>Мы готовы предложить вам упаковку, которая соответствует вашим уникальным требованиям и позволяет вам выразить себя.",
  				"en": "<b>Customizable Solutions: </b>We are here to provide you with packaging that suits your unique requirements and allows you to express yourself."
  			},
  			"package1_end": {
  				"uz": "Qandolat mahsulotlaringizni yanada jozibali va muvaffaqiyatli qilish uchun Pro Flexo-ga qo'shiling. Bizning qadoqlash mijozlaringiz qalbini zabt etishga va qandolatchilik bozorida ajralib turishingizga yordam beradi.",
  				"ru": "Присоединитесь к Pro Flexo, чтобы сделать вашу кондитерскую продукцию еще более привлекательной и успешной. Наши упаковки помогут вам завоевать сердца клиентов и выделиться на рынке кондитерских изделий.",
  				"en": "Join Pro Flexo to make your confectionery products even more attractive and successful. Our packaging will help you win the hearts of your customers and stand out in the confectionery market."
  			},
  			"package2_des": {
  				"uz": "Choy, qahva va kakao kabi xushbo'y ichimliklar dunyosida birinchi taassurot ko'pincha qadoqlashdan boshlanadi. Pro Flexo sizga mahsulotlaringiz sifati va lazzatini ta'kidlaydigan noyob qadoqlash yechimlarini taqdim etadi.",
  				"ru": "В мире ароматных напитков, как чай, кофе и какао, первое впечатление часто начинается с упаковки. Pro Flexo предоставляет вам уникальные решения для упаковки, которые подчеркнут качество и аромат ваших продуктов.",
  				"en": "In the world of flavored drinks like tea, coffee and cocoa, the first impression often starts with the packaging. Pro Flexo provides you with unique packaging solutions that highlight the quality and flavor of your products."
  			},
  			"package2_des_what": {
  				"uz": "Bizning qadoqlashimiz nimadan ustun turadi:",
  				"ru": "Что делает нашу упаковку выдающейся:",
  				"en": "What makes our packaging outstanding:"
  			},
  			"package2_des_what1": {
  				"uz": "<b>Ta'sirdan Himoya Qilish:</b>Bizning qadoqlashimiz choy, qahva va kakaoning xushbo'yligi va yangiligini saqlab, uzoq vaqt saqlash muddatini ta'minlaydi.",
  				"ru": "<b>Защита От Воздействия: </b>Наши упаковки обеспечивают долгий срок годности, сохраняя аромат и свежесть ваших чая, кофе и какао.",
  				"en": "<b>Protection From Exposure:</b>Our packaging ensures a long shelf life for tea, coffee and cocoa, preserving their aroma and freshness."
  			},
  			"package2_des_what2": {
  				"uz": "<b>Estetika va dizayn: </b>Biz mijozlar e'tiborini tortadigan va brendingizning o'ziga xosligini ta'kidlaydigan jozibali qadoqlash yaratamiz.",
  				"ru": "<b>Эстетика и Дизайн: </b>Мы создаем привлекательные упаковки, которые привлекают внимание покупателей и подчеркивают уникальность вашего бренда.",
  				"en": "<b>Aesthetics and Design: </b>We create attractive packaging that attracts customers' attention and emphasizes the uniqueness of your brand."
  			},
  			"package2_des_what3": {
  				"uz": "<b>Atrof-muhitga moslik: </b>Biz atrof-muhit haqida qayg'uramiz va qayta ishlanishi va qayta ishlanishi mumkin bo'lgan qadoqlash bilan ta'minlaymiz.",
  				"ru": "<b>Экологическая Совместимость: </b>Мы заботимся о окружающей среде и предоставляем упаковки, которые можно утилизировать и перерабатывать.",
  				"en": "<b>Environmental Compatibility: </b>We care about the environment and provide packaging that can be recycled and recycled."
  			},
  			"package2_des_what4": {
  				"uz": "<b>Moslashtirish: </b>Bizning qadoqlashimiz sizning ehtiyojlaringizga moslashtirilgan bo'lib, sizning uslubingiz va brendingizni ifodalash imkonini beradi.",
  				"ru": "<b>Кастомизация: </b>Наши упаковки настраиваются под ваши потребности, позволяя вам выразить свой стиль и бренд.",
  				"en": "<b>Customization: </b>Our packaging is customized to suit your needs, allowing you to express your style and brand."
  			},
  			"package2_end": {
  				"uz": "Sizning biznesingiz qahvaxona, choy do'koni yoki kakao ishlab chiqaruvchisi bo'ladimi, Pro Flexo qadoqlaringizni mukammal qilishingizga yordam berishga tayyor. Biz bilan mahsulotingiz eng yaxshi tarzda taqdim etilishiga va mijozlaringizni xursand qilishiga amin bo'lishingiz mumkin.",
  				"ru": "Независимо от того, является ли вашей компании кофейня, чайный бутик или производитель какао, Pro Flexo готова помочь вам сделать вашу упаковку идеальной. С нами вы можете быть уверены, что ваш продукт будет представлен в лучшем свете и порадует ваших клиентов.",
  				"en": "Whether your business is a coffee shop, tea boutique or cocoa producer, Pro Flexo is ready to help you make your packaging perfect. With us, you can be sure that your product will be presented in the best possible light and will delight your customers."
  			},
  			"package3_des": {
  				"uz": "Ziravorlar va ziravorlar har qanday idishdagi ajoyib ta'mning siri hisoblanadi. Pro Flexo'da biz noyob aralashmalaringizning ta'mi va sifatini saqlab qolish uchun to'g'ri qadoqlash muhimligini tushunamiz.",
  				"ru": "Специи и приправы - это секрет великолепного вкуса в любом блюде. В Pro Flexo мы понимаем важность правильной упаковки для сохранения аромата и качества ваших уникальных смесей.",
  				"en": "Spices and seasonings are the secret to great taste in any dish. At Pro Flexo, we understand the importance of proper packaging to preserve the flavor and quality of your unique blends."
  			},
  			"package3_des_what": {
  				"uz": "Ziravorlar va ziravorlar uchun qadoqlashimiz:",
  				"ru": "Наши упаковки для специй и приправ:",
  				"en": "Our packaging for spices and seasonings:"
  			},
  			"package3_des_what1": {
  				"uz": "<b>Yangilikni saqlang: </b>Biz sizning ziravorlaringizni namlik, yorug'lik va havodan himoya qiladigan qadoqlash bilan ta'minlaymiz va bu uzoq umr ko'rishni ta'minlaydi.",
  				"ru": "<b>Сохраняют Свежесть: </b>Мы предоставляем упаковку, которая защищает ваши специи от влаги, света и воздуха, обеспечивая долгий срок годности.",
  				"en": "<b>Keep Fresh: </b>We provide packaging that protects your spices from moisture, light and air, ensuring a long shelf life."
  			},
  			"package3_des_what2": {
  				"uz": "<b>Foydalanish qulayligi: </b>Bizning paketlarimizni ochish va yopish oson, bu esa ovqat tayyorlashda qulay foydalanish imkonini beradi.",
  				"ru": "<b>Удобство Использования: </b>Наши упаковки легко открываются и закрываются, обеспечивая удобство использования при приготовлении пищи.",
  				"en": "<b>Ease of Use: </b>Our packages are easy to open and close, providing ease of use when preparing food."
  			},
  			"package3_des_what3": {
  				"uz": "<b>Jozobli dizayn: </b>Biz do'kon peshtaxtalarida xaridorlarning e'tiborini tortadigan ko'zni qamashtiruvchi qadoqlarni yaratamiz.",
  				"ru": "<b>Привлекательный Дизайн: </b>Мы создаем эффектные упаковки, которые привлекают внимание покупателей на полках магазинов.",
  				"en": "<b>Attractive Design: </b>We create eye-catching packaging that attracts the attention of customers on store shelves."
  			},
  			"package3_des_what4": {
  				"uz": "<b>Moslashtirish: </b>Biz sizning brendingiz va o'ziga xos uslubingizga mos ravishda sozlanishi mumkin bo'lgan qadoqlashni taklif etamiz.",
  				"ru": "<b>Кастомизация: </b>Мы предлагаем упаковки, которые можно настроить под ваш бренд и уникальный стиль.",
  				"en": "<b>Customization: </b>We offer packaging that can be customized to suit your brand and unique style."
  			},
  			"package3_end": {
  				"uz": "Ziravorlar va ziravorlar nafaqat ta'm, balki vizual tajriba hamdir. Ziravorlar va ziravorlar qadoqlarini ushbu tajribaning bir qismiga aylantirish uchun Pro Flexo’ga qo‘shiling. Sizning mahsulotingiz noyob retseptlaringiz kabi ko'rinishi va yangi bo'lib qolishiga kafolat beramiz.",
  				"ru": "Специи и приправы - это не только вкус, но и визуальный опыт. Присоединитесь к Pro Flexo, чтобы сделать вашу упаковку для специй и приправ частью этого опыта. Мы гарантируем, что ваш продукт будет выглядеть и оставаться свежим так же хорошо, как и ваши неповторимые рецепты.",
  				"en": "Spices and seasonings are not only a taste, but also a visual experience. Join Pro Flexo to make your spice and seasoning packaging part of this experience. We guarantee that your product will look and stay as fresh as your unique recipes."
  			},
  			"package4_des": {
  				"uz": "Biz tushunamizki, oziq-ovqat mahsulotlari kundalik ovqatlanishning ajralmas qismidir va qadoqlash ularning sifati va yangiligini saqlashda muhim rol o'ynaydi. Pro Flexo sizga don, makaron, tuz, shakar va boshqa oziq-ovqat mahsulotlari uchun ishonchli qadoqlash yechimlarini taklif etadi.",
  				"ru": "Мы понимаем, что бакалейные продукты - это неотъемлемая часть повседневного питания, и упаковка играет важную роль в сохранении их качества и свежести. Pro Flexo предлагает вам надежные упаковочные решения для круп, макаронных изделий, соли, сахара и других бакалейных продуктов.",
  				"en": "We understand that grocery products are an integral part of everyday nutrition and packaging plays an important role in maintaining their quality and freshness. Pro Flexo offers you reliable packaging solutions for cereals, pasta, salt, sugar and other grocery products."
  			},
  			"package4_des_what": {
  				"uz": "Bizning qadoqlashimiz boshqacha:",
  				"ru": "Наши упаковки отличаются:",
  				"en": "Our packaging is different:"
  			},
  			"package4_des_what1": {
  				"uz": "<b>Uzoq saqlash muddati: </b>Biz mahsulotlaringizning uzoq vaqt saqlash muddatini kafolatlaydigan optimal saqlash sharoitlarini ta'minlaymiz.",
  				"ru": "<b>Долгим Сроком Хранения: </b>Мы обеспечиваем оптимальные условия хранения, что гарантирует долгий срок годности ваших продуктов.",
  				"en": "<b>Long Shelf Life: </b>We provide optimal storage conditions, which guarantees a long shelf life of your products."
  			},
  			"package4_des_what2": {
  				"uz": "<b>Tashqi omillardan himoya qilish: </b>Bizning qadoqlash mahsulotlarni namlik, yorug'lik va boshqa tashqi omillardan himoya qiladi, sifatini saqlaydi.",
  				"ru": "<b>Защитой От Внешних Факторов: </b>Наши упаковки защищают продукты от влаги, света и других внешних факторов, сохраняя их качество.",
  				"en": "<b>Protection from External Factors: </b>Our packaging protects products from moisture, light and other external factors, maintaining their quality."
  			},
  			"package4_des_what3": {
  				"uz": "<b>Iqtisodiy jihatdan samarali: </b>Biz qadoqlash va logistika xarajatlarini kamaytirishga yordam beruvchi samarali qadoqlash yechimlarini taqdim etamiz.",
  				"ru": "<b>Экономичностью: </b>Мы предоставляем эффективные упаковочные решения, которые помогают снизить затраты на упаковку и логистику.",
  				"en": "<b>Cost-effective: </b>We provide efficient packaging solutions that help reduce packaging and logistics costs."
  			},
  			"package4_des_what4": {
  				"uz": "<b>Moslashtirish: </b>Bizning qadoqlash sizning noyob ehtiyojlaringiz va brend dizayningizga mos ravishda moslashtirilishi mumkin.",
  				"ru": "<b>Кастомизацией: </b>Наши упаковки могут быть настроены под ваши уникальные потребности и дизайн бренда.",
  				"en": "<b>Customization: </b>Our packaging can be customized to suit your unique needs and brand design."
  			},
  			"package4_end": {
  				"uz": "Yorma, makaron, tuz, shakar va boshqa oziq-ovqat mahsulotlarini ishlab chiqaruvchilar optimal qadoqlash yechimlarini yaratish uchun Pro Flexo’ga tayanishi mumkin. Bizning maqsadimiz sizga mahsulotlaringizni eng yaxshi tarzda taqdim etish va mijozlaringizning talablarini qondirishga yordam berishdir.",
  				"ru": "Производители круп, макаронных изделий, соли, сахара и других бакалейных продуктов могут полагаться на Pro Flexo для создания оптимальных упаковочных решений. Наша цель - помочь вам представить ваши продукты в лучшем виде и удовлетворить ожидания ваших клиентов.",
  				"en": "Manufacturers of cereals, pasta, salt, sugar and other grocery products can rely on Pro Flexo to create optimal packaging solutions. Our goal is to help you present your products at their best and meet your customers' expectations."
  			},
  			"package5_des": {
  				"uz": "Qulay taomlar, chipslar va donlar yangiligi va ta'mini saqlaydigan qadoqlashni talab qiladi. Pro Flexo mahsulotlaringizning qulayligi, saqlash muddati va jozibadorligini ta'kidlaydigan yechimlarni taqdim etadi.",
  				"ru": "Продукты быстрого приготовления, чипсы и хлопья требуют упаковок, которые сохраняют их свежесть и вкус. Pro Flexo предоставляет решения, которые подчеркивают удобство, долгий срок годности и привлекательность ваших продуктов.",
  				"en": "Convenience foods, chips and cereals require packaging that preserves their freshness and taste. Pro Flexo provides solutions that highlight the convenience, shelf life and appeal of your products."
  			},
  			"package5_des_what": {
  				"uz": "Chipslar, yormalar va qulay ovqatlar uchun qadoqlashimiz:",
  				"ru": "Наши упаковки для чипсов, хлопьев и продуктов быстрого приготовления:",
  				"en": "Our packaging for chips, cereals and convenience foods:"
  			},
  			"package5_des_what1": {
  				"uz": "<b>Uzoq saqlash muddati: </b>Mahsulotlaringiz do'kon javonlarida va iste'molchilarning uylarida yangi va mazali bo'lib qolishi uchun optimal saqlash sharoitlarini ta'minlaymiz.",
  				"ru": "<b>Долгий Срок Годности: </b>Мы обеспечиваем оптимальные условия хранения, чтобы ваши продукты оставались свежими и вкусными на полках магазинов и дома у потребителей.",
  				"en": "<b>Long Shelf Life: </b>We provide optimal storage conditions to ensure your products remain fresh and delicious on store shelves and in consumers' homes."
  			},
  			"package5_des_what2": {
  				"uz": "<b>Qizillikning saqlanishi: </b>Bizning paketlarimiz uzoq muddatli saqlashdan keyin ham chiplarning tuzilishini va donning xiraligini saqlab qoladi.",
  				"ru": "<b>Сохранение Хрустящести: </b>Наши упаковки сохраняют текстуру чипсов и хрустящесть хлопьев, даже после длительного хранения.",
  				"en": "<b>Preservation of Crispness: </b>Our packages retain the texture of the chips and the crunchiness of the cereal, even after long-term storage."
  			},
  			"package5_des_what3": {
  				"uz": "<b>Jozobli dizayn: </b>Biz mijozlar e'tiborini bir zumda o'ziga tortadigan va mahsulotingizni ajralib turadigan qadoqlash dizaynini yaratamiz.",
  				"ru": "<b>Привлекательный Дизайн: </b>Мы разрабатываем упаковки, которые мгновенно привлекают внимание покупателей и делают ваш продукт выдающимся.",
  				"en": "<b>Attractive Design: </b>We design packaging that instantly attracts the attention of customers and makes your product stand out."
  			},
  			"package5_des_what4": {
  				"uz": "<b>Iqtisodiy yechimlar: </b>Bizning qadoqlashimiz qadoqlash va logistika xarajatlarini optimallashtirishni ta'minlaydi.",
  				"ru": "<b>Экономичные Решения: </b>Наши упаковки обеспечивают оптимизацию затрат на упаковку и логистику.",
  				"en": "<b>Economical Solutions: </b>Our packaging ensures optimization of packaging and logistics costs."
  			},
  			"package5_des_what5": {
  				"uz": "<b>Moslashtirish: </b>Biz sizning brendingiz va mahsulot ehtiyojlaringizga mos keladigan sozlanishi mumkin bo'lgan yechimlarni taklif qilamiz.",
  				"ru": "<b>Кастомизация: </b>Мы предлагаем настраиваемые решения, которые соответствуют вашей марке и потребностям вашего продукта.",
  				"en": "<b>Customization: </b>We offer customizable solutions that fit your brand and your product needs."
  			},
  			"package5_end": {
  				"uz": "Chipslar, yormalar va qulay ovqatlar ishlab chiqaruvchilari samarali va jozibali qadoqlash uchun Pro Flexo’ga tayanishi mumkin. Mahsulotingizni chidab bo'lmas qilish va mijozlaringizning talablarini qondirish uchun bizga qo'shiling.",
  				"ru": "Производители чипсов, хлопьев и продуктов быстрого приготовления могут полагаться на Pro Flexo для создания эффективных и привлекательных упаковок. Присоединитесь к нам, чтобы сделать ваш продукт неотразимым и удовлетворить ожидания ваших клиентов.",
  				"en": "Manufacturers of chips, cereals and convenience foods can rely on Pro Flexo to create efficient and attractive packaging. Join us to make your product irresistible and meet your customers' expectations."
  			},
  			"package6_des": {
  				"uz": "Biz sizning mo'ynali yoki tukli do'stingiz haqida qayg'uramiz va uy hayvonlari uchun oziq-ovqat uchun ishonchli qadoqlashni taklif qilamiz. Pro Flexo sizning uy hayvonlaringizni sog'lom va baxtli saqlash uchun oziq-ovqatning yangiligi va sifatini saqlash muhimligini tushunadi.",
  				"ru": "Мы заботимся о вашем пушистом или пернатом друге и предлагаем надежные упаковки для кормов животных. Pro Flexo понимает важность сохранения свежести и качества кормов, чтобы обеспечить здоровье и радость ваших питомцев.",
  				"en": "We care about your furry or feathered friend and offer reliable packaging for pet food. Pro Flexo understands the importance of maintaining the freshness and quality of food to keep your pets healthy and happy."
  			},
  			"package6_des_what": {
  				"uz": "Hayvonlar uchun ozuqa uchun qadoqlashimiz:",
  				"ru": "Наши упаковки для кормов животных:",
  				"en": "Our packaging for animal feed:"
  			},
  			"package6_des_what1": {
  				"uz": "<b>Namlik va havoni himoya qilish: </b>Biz ozuqani namlik va havodan himoya qiluvchi, uni yangi saqlaydigan qadoqlash bilan ta'minlaymiz.",
  				"ru": "<b>Защита От Влаги и Воздуха: </b>Мы предоставляем упаковки, которые защищают корма от влаги и воздуха, сохраняя их свежесть.",
  				"en": "<b>Moisture and Air Protection: </b>We provide packaging that protects feed from moisture and air, keeping it fresh."
  			},
  			"package6_des_what2": {
  				"uz": "<b>Foydalanish qulayligi: </b>Bizning paketlarimizni ochish va yopish oson, bu esa oziqlantirishni qulay qiladi.",
  				"ru": "<b>Удобство Использования: </b>Наши упаковки легко открываются и закрываются, обеспечивая удобство при подаче корма.",
  				"en": "<b>Ease of Use: </b>Our packages are easy to open and close, making feeding convenient."
  			},
  			"package6_des_what3": {
  				"uz": "<b>Atrof-muhitga moslik: </b>Biz tabiatga g'amxo'rlik qilamiz va qayta ishlanishi va qayta ishlanishi mumkin bo'lgan qadoqlash bilan ta'minlaymiz.",
  				"ru": "<b>Экологическая Совместимость: </b>Мы заботимся о природе и предоставляем упаковки, которые можно утилизировать и перерабатывать.",
  				"en": "<b>Environmental Compatibility: </b>We care about nature and provide packaging that can be recycled and recycled."
  			},
  			"package6_des_what4": {
  				"uz": "<b>Moslashtirish: </b>Biz brendingizga mos keladigan va mahsulot qatoringizni to‘ldiradigan qadoqlashni yaratishga tayyormiz.",
  				"ru": "<b>Кастомизация: </b>Мы готовы создать упаковку, которая соответствует вашему бренду и дополняет вашу линейку продукции.",
  				"en": "<b>Customization: </b>We are ready to create packaging that matches your brand and complements your product line."
  			},
  			"package6_end": {
  				"uz": "Biz sizning uy hayvoningiz faqat eng yaxshisiga loyiq ekanligini tushunamiz va Pro Flexo sifatli, ishonchli oziq-ovqat mahsulotlarini qadoqlash orqali ularni sog'lom va baxtli saqlashingizga yordam berishga tayyor. Uy hayvoningiz uchun mahsulotni tanlashni oson va qoniqarli qilish uchun bizga qo'shiling.",
  				"ru": "Мы понимаем, что ваш питомец заслуживает только лучшего, и Pro Flexo готова помочь вам обеспечить его здоровье и счастье через качественные и надежные упаковки для кормов животных. Присоединитесь к нам, чтобы сделать выбор продукта для вашего питомца более простым и удовлетворительным.",
  				"en": "We understand that your pet deserves only the best, and Pro Flexo is ready to help you keep them healthy and happy through quality, reliable pet food packaging. Join us to make choosing a product for your pet easier and more satisfying."
  			},
  			"package7_des": {
  				"uz": "Soslar va mayonez pishirishda muhim ingredientlardir va Pro Flexo ushbu mahsulotlarni xavfsiz va ishlatish uchun qulay saqlaydigan qadoqlashni taklif qiladi. Bizning qadoqlashimiz sous va mayonez ishlab chiqaruvchilarning ehtiyojlarini, shuningdek, iste'molchilarning qulayligini hisobga olgan holda yaratilgan.",
  				"ru": "Соусы и майонез - важные ингредиенты в кулинарии, и Pro Flexo предлагает упаковки, которые обеспечивают сохранность и удобство использования этих продуктов. Наши упаковки созданы с учетом потребностей производителей соусов и майонеза, а также комфорта потребителей.",
  				"en": "Sauces and mayonnaise are important ingredients in cooking, and Pro Flexo offers packaging that keeps these products safe and easy to use. Our packaging is created taking into account the needs of sauce and mayonnaise manufacturers, as well as the comfort of consumers."
  			},
  			"package7_des_what": {
  				"uz": "Bizning qadoqlashimizni nima o'ziga xos qiladi:",
  				"ru": "Что делает наши упаковки особенными:",
  				"en": "What makes our packaging special:"
  			},
  			"package7_des_what1": {
  				"uz": "<b>EHM himoyasi: </b>Biz mahsulotingizga havo va yorug'likning kirib kelishiga to'sqinlik qiluvchi qadoqlash bilan ta'minlaymiz, bu esa mahsulotingizning uzoq vaqt saqlash muddatini ta'minlaydi.",
  				"ru": "<b>Защита От Воздействия: </b>Мы предоставляем упаковки, которые предотвращают проникновение воздуха и света, что обеспечивает долгий срок годности ваших продуктов.",
  				"en": "<b>Exposure Protection: </b>We provide packaging that prevents air and light from entering, ensuring a long shelf life for your products."
  			},
  			"package7_des_what2": {
  				"uz": "<b>Foydalanish qulayligi: </b>Bizning paketlarimizni tarqatish oson va iste'molchilarga sous va mayonezni tez va toza surtish imkonini beradi.",
  				"ru": "<b>Удобство Использования: </b>Наши упаковки легко дозируются и позволяют потребителям быстро и чисто наносить соусы и майонез.",
  				"en": "<b>Ease of Use: </b>Our packages are easy to dispense and allow consumers to quickly and cleanly apply sauces and mayonnaise."
  			},
  			"package7_des_what3": {
  				"uz": "<b>Joziba dizayn: </b>Biz do'kon javonlarida ajralib turadigan va brendingizni taniqli qiladigan qadoqlarni yaratamiz.",
  				"ru": "<b>Привлекательный Дизайн: </b>Мы создаем упаковки, которые выделяются на полках магазинов и делают ваш бренд узнаваемым.",
  				"en": "<b>Attractive Design: </b>We create packaging that stands out on store shelves and makes your brand recognizable."
  			},
  			"package7_des_what4": {
  				"uz": "<b>Atrof-muhitga moslik: </b>Biz qayta ishlanishi mumkin bo'lgan, ekologik toza qadoqlash bilan ta'minlaymiz.",
  				"ru": "<b>Экологическая Совместимость: </b>Мы предоставляем упаковки, которые можно перерабатывать, что учитывает экологические требования.",
  				"en": "<b>Environmental Compatibility: </b>We provide packaging that can be recycled, which is environmentally friendly."
  			},
  			"package7_end": {
  				"uz": "Pro Flexo bilan siz soslaringiz va mayonezlaringiz eng yaxshi tarzda taqdim etilishiga hamda ular mijozlaringiz uchun ochiq va ulardan foydalanish oson bo'lishiga amin bo'lishingiz mumkin. Paketingizni muvaffaqiyatingizning bir qismiga aylantirish uchun bizga qo'shiling.",
  				"ru": "С Pro Flexo вы можете быть уверены, что ваши соусы и майонез будут представлены в лучшем виде, и что они будут доступны и удобны в использовании для ваших клиентов. Присоединитесь к нам, чтобы сделать вашу упаковку частью вашего успеха.",
  				"en": "With Pro Flexo, you can be sure that your sauces and mayonnaise will be presented at their best, and that they will be accessible and easy to use for your customers. Join us to make your packaging part of your success."
  			},
  			"package8_des": {
  				"uz": "Yuvish vositalari kundalik hayotimizning ajralmas qismi bo'lib, ushbu mahsulotlarning saqlanishi va xavfsizligida to'g'ri qadoqlash muhim rol o'ynaydi. Pro Flexo himoya, qulaylik va uslubni birlashtirgan ishonchli va samarali detarjan qadoqlarini taqdim etadi.",
  				"ru": "Моющие средства - неотъемлемая часть нашей повседневной жизни, и правильная упаковка играет важную роль в сохранении и безопасности этих продуктов. Pro Flexo предоставляет надежные и эффективные упаковки для моющих средств, которые сочетают в себе защиту, удобство и стиль.",
  				"en": "Detergents are an integral part of our daily lives and proper packaging plays an important role in the preservation and safety of these products. Pro Flexo provides reliable and effective detergent packaging that combines protection, convenience and style."
  			},
  			"package8_des_what": {
  				"uz": "Yuvish vositalarini qadoqlash nimadan farq qiladi:",
  				"ru": "Чем отличаются наши упаковки для моющих средств:",
  				"en": "What makes our detergent packaging different:"
  			},
  			"package8_des_what1": {
  				"uz": "<b>Oqish va tashqi omillardan himoya: </b>Biz oqishdan ishonchli himoya qiluvchi va namlik va yorug'lik ta'siridan saqlaydigan qadoqlash bilan ta'minlaymiz.",
  				"ru": "<b>Защита От Утечек и Воздействия Внешних Факторов: </b>Мы предоставляем упаковки, которые надежно защищают от утечек и предотвращают воздействие влаги и света.",
  				"en": "<b>Protection Against Leaks and External Factors: </b>We provide packaging that reliably protects against leaks and prevents exposure to moisture and light."
  			},
  			"package8_des_what2": {
  				"uz": "<b>Foydalanish qulayligi: </b>Bizning qadoqlashimiz yuvish vositalaridan foydalanganda qulaylik va xavfsizlikni hisobga olgan holda ishlab chiqilgan.",
  				"ru": "<b>Удобство Использования: </b>Наши упаковки дизайнируются с учетом комфорта и безопасности при использовании моющих средств.",
  				"en": "<b>Ease of Use: </b>Our packaging is designed with comfort and safety in mind when using detergents."
  			},
  			"package8_des_what3": {
  				"uz": "<b>Jozobli dizayn: </b>Biz sizning mahsulotingizni do'kon javonlarida ajralib turadigan va uni taniqli qiladigan qadoqlash yaratamiz.",
  				"ru": "<b>Привлекательный Дизайн: </b>Мы создаем упаковки, которые выделяют ваш продукт на полках магазинов и делают его узнаваемым.",
  				"en": "<b>Attractive Design: </b>We create packaging that makes your product stand out on store shelves and make it recognizable."
  			},
  			"package8_des_what4": {
  				"uz": "<b>Ekologiya va samaradorlikni muvozanatlash: </b>Biz mahsulotning samaradorligini pasaytirmasdan qadoqlashimiz ekologik toza standartlarga javob berishini ta'minlaymiz.",
  				"ru": "<b>Сбалансированность Экологии и Эффективности: </b>Мы гарантируем, что наши упаковки соответствуют стандартам экологичности, не ущемляя при этом эффективность продукта.",
  				"en": "<b>Balancing Ecology and Efficiency: </b>We ensure that our packaging meets environmentally friendly standards without compromising the effectiveness of the product."
  			},
  			"package8_end": {
  				"uz": "Xavfsizlik va samaradorlik yuvish vositalari uchun muhim ekanligini tushunamiz va Pro Flexo sizni ishonchli, mos keladigan qadoqlash bilan ta'minlashga intiladi. Yuvish vositasi brendingizni muvaffaqiyatli va mijozlaringiz uchun xavfsiz qilish uchun bizga qo'shiling.",
  				"ru": "Мы понимаем, что вопросы безопасности и эффективности критичны для моющих средств, и Pro Flexo готова обеспечить вас надежными и удовлетворяющими всем стандартам упаковками. Присоединитесь к нам, чтобы сделать вашу марку моющих средств успешной и безопасной для клиентов.",
  				"en": "We understand that safety and effectiveness are critical to detergents, and Pro Flexo is committed to providing you with reliable, compliant packaging. Join us to make your detergent brand successful and safe for your customers."
  			},
  			"package9_des": {
  				"uz": "Muzqaymoq shirin taomdir va Pro Flexo uning yangiligi va ta'mini saqlaydigan qadoqlash bilan ta'minlaydi. Muzqaymoq qadoqlashning innovatsion yechimlari mahsulotingiz har safar ajoyib bo'lishini ta'minlaydi.",
  				"ru": "Мороженое - это сладкое удовольствие, и Pro Flexo предоставляет упаковки, которые сохраняют его свежесть и вкус. Наши инновационные решения для упаковки мороженого обеспечивают, чтобы ваш продукт всегда оставался великолепным.",
  				"en": "Ice cream is a sweet treat, and Pro Flexo provides packaging that preserves its freshness and taste. Our innovative ice cream packaging solutions ensure your product stays great every time."
  			},
  			"package9_des_what": {
  				"uz": "Bizning muzqaymoq qadoqlashimiz:",
  				"ru": "Наши упаковки для мороженого:",
  				"en": "Our ice cream packaging:"
  			},
  			"package9_des_what1": {
  				"uz": "<b>Muzdan tushirishdan himoya qiling: </b>Biz past haroratni samarali saqlaydigan va muzqaymoqning muzdan tushishiga yo'l qo'ymaydigan qadoqlash bilan ta'minlaymiz.",
  				"ru": "<b>Защищают От Размораживания: </b>Мы предоставляем упаковки, которые эффективно сохраняют низкие температуры и предотвращают размораживание мороженого.",
  				"en": "<b>Protect Against Defrosting: </b>We provide packaging that effectively maintains low temperatures and prevents ice cream from defrosting."
  			},
  			"package9_des_what2": {
  				"uz": "<b>Estetik dizayn: </b>Biz sizning muzqaymoqingizning mazali ko'rinishini aks ettiruvchi, ko'zni qamashtiruvchi qadoqlashni yaratamiz.",
  				"ru": "<b>Эстетичный Дизайн: </b>Мы создаем упаковки, которые привлекают внимание, отражая аппетитный внешний вид вашего мороженого.",
  				"en": "<b>Aesthetic Design: </b>We create packaging that is eye-catching, reflecting the delicious appearance of your ice cream."
  			},
  			"package9_des_what3": {
  				"uz": "<b>Iste'mol qilish qulayligi: </b>Bizning qadoqlashimiz muzqaymoqni qulay va toza iste'mol qilishni ta'minlaydi.",
  				"ru": "<b>Удобство Потребления: </b>Наши упаковки обеспечивают комфортное и чистое потребление мороженого.",
  				"en": "<b>Convenience of Consumption: </b>Our packaging ensures comfortable and clean consumption of ice cream."
  			},
  			"package9_des_what4": {
  				"uz": "<b>Eko-do'st: </b>Biz atrof-muhit haqida qayg'uramiz va qayta ishlanishi mumkin bo'lgan qadoqlarni taqdim etamiz.",
  				"ru": "<b>Экологичность: </b>Мы заботимся о окружающей среде и предоставляем упаковки, которые можно перерабатывать.",
  				"en": "<b>Eco-Friendly: </b>We care about the environment and provide packaging that can be recycled."
  			},
  			"package9_end": {
  				"uz": "Muzqaymoq ishlab chiqaruvchilari mahsulotlari sifati va jozibadorligini saqlaydigan qadoqlash yaratish uchun Pro Flexo’ga ishonishlari mumkin. Muzqaymoqlaringizni yanada jozibador qilish va mijozlaringizning talablarini qondirish uchun bizga qo'shiling.",
  				"ru": "Производители мороженого могут полагаться на Pro Flexo для создания упаковок, которые сохраняют качество и аппетитный вид их продукции. Присоединитесь к нам, чтобы сделать ваше мороженое еще более привлекательным и удовлетворить ожидания ваших клиентов.",
  				"en": "Ice cream manufacturers can rely on Pro Flexo to create packaging that maintains the quality and appeal of their products. Join us to make your ice cream more attractive and meet your customers' expectations."
  			},
  			"package10_des": {
  				"uz": "Ichimlik yorliqlari iste'molchilar e'tiborini jalb qilish va ichimlikning o'ziga xosligini ta'kidlashda muhim rol o'ynaydi. Pro Flexo mahsulotingizning ta'mi va sifatini ta'kidlaydigan yuqori sifatli yorliqlarni taqdim etadi.",
  				"ru": "Этикетки для напитков играют важную роль в привлечении внимания потребителей и подчеркивают индивидуальность вашего напитка. Pro Flexo предоставляет высококачествные этикетки, которые подчеркивают вкус и качество вашей продукции.",
  				"en": "Beverage labels play an important role in attracting consumers' attention and highlighting the personality of your drink. Pro Flexo provides high quality labels that highlight the taste and quality of your products."
  			},
  			"package10_des_what": {
  				"uz": "Bizning teglarimizni nima o'ziga xos qiladi:",
  				"ru": "Что делает наши этикетки особенными:",
  				"en": "What makes our labels special:"
  			},
  			"package10_des_what1": {
  				"uz": "<b>Jozobli dizayn: </b>Biz do'kon javonlarida xaridorlarning e'tiborini bir zumda o'ziga tortadigan yorliqlar yaratamiz.",
  				"ru": "<b>Привлекательный Дизайн: </b>Мы создаем этикетки, которые мгновенно привлекают внимание покупателей на полках магазинов.",
  				"en": "<b>Attractive Design: </b>We create labels that instantly attract the attention of customers on store shelves."
  			},
  			"package10_des_what2": {
  				"uz": "<b>Yuqori sifatli chop etish: </b>Biz ranglar va tasvirlarni aniq takrorlash uchun zamonaviy bosib chiqarish texnologiyalaridan foydalanamiz.",
  				"ru": "<b>Высокое Качество Печати: </b>Мы используем современные технологии печати для точной передачи цветов и изображений.",
  				"en": "<b>High Quality Printing: </b>We use modern printing technologies to accurately reproduce colors and images."
  			},
  			"package10_des_what3": {
  				"uz": "<b>Tashqi omillarga qarshilik: </b>Bizning yorliqlarimiz namlik, quyosh nuri va mexanik shikastlanishdan himoyalangan, yangilik va o'qilishi mumkin.",
  				"ru": "<b>Устойчивость К Воздействию Внешних Факторов: </b>Наши этикетки защищаются от влаги, солнечного света и механических повреждений, чтобы сохранить свежесть и читаемость.",
  				"en": "<b>Resistance to External Factors: </b>Our labels are protected from moisture, sunlight and mechanical damage to maintain freshness and readability."
  			},
  			"package10_des_what4": {
  				"uz": "<b>Moslashtirish: </b>Biz sizning brendingiz va mahsulotlaringizga mos keladigan yorliqlar dizayni va shaklini sozlash imkoniyatini taqdim etamiz.",
  				"ru": "<b>Кастомизация: </b>Мы предоставляем возможность настроить дизайн и форму этикеток под вашу марку и продукцию.",
  				"en": "<b>Customization: </b>We provide the opportunity to customize the design and shape of labels to suit your brand and products."
  			},
  			"package10_end": {
  				"uz": "Pro Flexo bilan ichimlik zamonaviy va professional ko'rinishga ega bo'ladi. Yorliqlaringizni biznesingiz muvaffaqiyatining bir qismiga aylantirish va mijozlar kutganlarini qondirish uchun bizga qoʻshiling.",
  				"ru": "С Pro Flexo ваш напиток будет выглядеть стильно и профессионально. Присоединитесь к нам, чтобы сделать ваши этикетки частью успеха вашего бизнеса и удовлетворить ожидания ваших клиентов.",
  				"en": "With Pro Flexo your drink will look stylish and professional. Join us to make your labels part of the success of your business and meet your customers' expectations."
  			},
  			"package11_des": {
  				"uz": "Non va pishiriqlar qulaylik va an'ananing ramzi bo'lib, ularni saqlashda to'g'ri qadoqlash muhim rol o'ynaydi. Pro Flexo innovatsion qadoqlash yechimlarini taklif qiladi, bu sizning pishirilgan mahsulotlaringizning yangiligi va ishtaha beruvchi ko'rinishini oshiradi.",
  				"ru": "Хлеб и выпечка - это символы уюта и традиций, и правильная упаковка играет ключевую роль в их сохранении. Pro Flexo предлагает инновационные упаковочные решения, которые подчеркивают свежесть и аппетитный внешний вид вашей выпечки.",
  				"en": "Bread and pastries are symbols of comfort and tradition, and proper packaging plays a key role in preserving them. Pro Flexo offers innovative packaging solutions that enhance the freshness and appetizing appearance of your baked goods."
  			},
  			"package11_des_what": {
  				"uz": "Non va pishiriqlar uchun qadoqlashimiz qanday farq qiladi:",
  				"ru": "Чем наши упаковки для хлеба и выпечки отличаются:",
  				"en": "How our packaging for bread and pastries differs:"
  			},
  			"package11_des_what1": {
  				"uz": "<b>Namlikni himoya qilish va yangilikni saqlash: </b>Biz sizning noningiz va pishiriqlaringiz doimo yangi bo'lib qolishi uchun namlik va boshqa tashqi omillardan ishonchli himoya qiluvchi qadoqlash bilan ta'minlaymiz.",
  				"ru": "<b>Защита От Влаги и Сохранение Свежести: </b>Мы предоставляем упаковки, которые надежно защищают от влаги и других внешних факторов, чтобы ваш хлеб и выпечка всегда оставались свежими.",
  				"en": "<b>Moisture Protection and Freshness Preservation: </b>We provide packaging that reliably protects against moisture and other external factors so that your bread and pastries always remain fresh."
  			},
  			"package11_des_what2": {
  				"uz": "<b>Saqlash va iste'mol qilish qulayligi: </b>Bizning qadoqlash mahsulotingizni qulay saqlash va toza iste'mol qilishni ta'minlaydi.",
  				"ru": "<b>Удобство Хранения и Потребления: </b>Наши упаковки обеспечивают удобное хранение и чистое потребление вашей продукции.",
  				"en": "<b>Convenience of Storage and Consumption: </b>Our packaging ensures convenient storage and clean consumption of your products."
  			},
  			"package11_des_what3": {
  				"uz": "<b>Estetik dizayn: </b>Biz pishirilgan mahsulotlaringizning ishtahani ochuvchi ko'rinishi va sifatini oshiradigan qadoqlashlarni yaratamiz.",
  				"ru": "<b>Эстетичный Дизайн: </b>Мы создаем упаковки, которые подчеркивают аппетитный внешний вид и качество вашей выпечки.",
  				"en": "<b>Aesthetic Design: </b>We create packaging that enhances the appetizing appearance and quality of your baked goods."
  			},
  			"package11_des_what4": {
  				"uz": "<b>Ekologik toza: </b>Biz qayta ishlanishi va qayta ishlanishi mumkin bo'lgan qadoqlash bilan ta'minlaymiz.",
  				"ru": "<b>Экологичность: </b>Мы предоставляем упаковки, которые можно утилизировать и перерабатывать.",
  				"en": "<b>Eco-Friendly: </b>We provide packaging that can be recycled and recycled."
  			},
  			"package11_end": {
  				"uz": "Non va pishirilgan mahsulotlar ishlab chiqaruvchilari o'z mahsulotlarining merosi va sifatini ta'kidlaydigan qadoqlashni yaratish uchun Pro Flexo'ga ishonishlari mumkin. Pishirilgan mahsulotlaringizni yanada jozibador qilish va mijozlaringizning talablarini qondirish uchun bizga qo'shiling.",
  				"ru": "Производители хлеба и выпечки могут полагаться на Pro Flexo для создания упаковок, которые подчеркивают традиции и качество их продукции. Присоединитесь к нам, чтобы сделать вашу выпечку более привлекательной и удовлетворить ожидания ваших клиентов.",
  				"en": "Bread and baked goods manufacturers can rely on Pro Flexo to create packaging that highlights the heritage and quality of their products. Join us to make your baked goods more attractive and meet your customers' expectations."
  			},
  			"package12_des": {
  				"uz": "Kesilgan va halqa tutqichli qulay va yuqori sifatli sumkalar sizning brendingiz uchun muvaffaqiyatli qadoqlash va marketing strategiyasining muhim elementi hisoblanadi. Pro Flexo mahsulotingizni qulay va jozibali qiladigan qadoqlash yechimlarini taqdim etadi.",
  				"ru": "Удобные и качественные пакеты с вырубной и петлевой ручкой - это важный элемент успешной упаковки и маркетинговой стратегии вашего бренда. Pro Flexo предоставляет упаковочные решения, которые обеспечивают удобство и привлекательность ваших товаров.",
  				"en": "Convenient and high-quality bags with die-cut and loop handles are an important element of successful packaging and marketing strategy for your brand. Pro Flexo provides packaging solutions that make your products convenient and attractive."
  			},
  			"package12_des_what": {
  				"uz": "Tutqichli sumkalarimiz:",
  				"ru": "Наши пакеты с ручкой:",
  				"en": "Our bags with handle:"
  			},
  			"package12_des_what1": {
  				"uz": "<b>Bardoshli va ishonchli: </b>Biz sizning buyumlaringiz xavfsiz tarzda qadoqlanishi va jo'natilishini ta'minlash uchun yuqori sifatli materiallardan foydalanamiz.",
  				"ru": "<b>Прочные и Надежные: </b>Мы используем высококачествные материалы, чтобы гарантировать, что ваши товары будут безопасно упакованы и перенесены.",
  				"en": "<b>Durable and Reliable: </b>We use high quality materials to ensure that your items are packed and shipped safely."
  			},
  			"package12_des_what2": {
  				"uz": "<b>Foydalanish uchun oson: </b>Keyib va halqa tutqichlari xaridlarni olib o‘tishda qulaylikni ta’minlab, iste’molchilar uchun qulaylik yaratadi.",
  				"ru": "<b>Удобные в Использовании: </b>Вырубная и петлевая ручки обеспечивают комфорт при переноске покупок, делая их удобными для потребителей.",
  				"en": "<b>Easy to Use: </b>Die-cut and loop handles provide comfort when carrying purchases, making them convenient for consumers."
  			},
  			"package12_des_what4": {
  				"uz": "<b>Atrof-muhitga moslik: </b>Biz qayta ishlanishi mumkin bo'lgan qoplarni taqdim etish orqali atrof-muhit muammolarini inobatga olamiz.",
  				"ru": "<b>Экологическая Совместимость: </b>Мы учитываем вопросы экологии, предоставляя пакеты, которые можно перерабатывать.",
  				"en": "<b>Environmental Compatibility: </b>We take environmental concerns into account by providing bags that can be recycled."
  			},
  			"package12_des_what3": {
  				"uz": "<b>Jozobli dizayn: </b>Biz diqqatni tortadigan va brendingizni taniqli qiladigan paketlarni yaratamiz.",
  				"ru": "<b>Привлекательный Дизайн: </b>Мы создаем пакеты, которые привлекают внимание и делают ваш бренд узнаваемым.",
  				"en": "<b>Attractive Design: </b>We create packages that attract attention and make your brand recognizable."
  			},
  			"package12_end": {
  				"uz": "Pro Flexo bilan siz nafaqat qadoqlash, balki o'zingizning brend xabardorligini oshirish va mijozlaringiz ehtiyojlarini qondirish qobiliyatiga ega bo'lasiz. Mahsulotlaringiz sifatini ta'kidlaydigan va xarid qilishni hamma uchun osonlashtiradigan qadoqlashni yaratish uchun bizga qo'shiling.",
  				"ru": "С Pro Flexo вы получаете не только упаковку, но и возможность усилить узнаваемость вашего бренда и удовлетворить потребности ваших клиентов. Присоединитесь к нам, чтобы создать упаковку, которая подчеркивает качество ваших товаров и делает покупки удобными для всех.",
  				"en": "With Pro Flexo you get not only packaging, but also the ability to enhance your brand awareness and meet the needs of your customers. Join us to create packaging that highlights the quality of your products and makes shopping easy for everyone."
  			},
  			"package13_des": {
  				"uz": "Gigiena vositalari salomatlik va qulaylikning muhim qismidir va Pro Flexo ularning xavfsizligi va ishonchliligini ta'kidlaydigan qadoqlashni taklif etadi. Bizning gigiena mahsulotimiz qadoqlash mijozlar ehtiyojlari va gigiena ustuvorliklarini hisobga olgan holda ishlab chiqilgan.",
  				"ru": "Гигиенические изделия - это важная часть заботы о здоровье и комфорте, и Pro Flexo предлагает упаковки, которые подчеркивают их безопасность и надежность. Наши упаковки для гигиенических продуктов созданы с учетом потребностей клиентов и приоритетов в сфере гигиены.",
  				"en": "Hygiene products are an important part of health and comfort, and Pro Flexo offers packaging that emphasizes their safety and reliability. Our hygiene product packaging is designed keeping in mind customer needs and hygiene priorities."
  			},
  			"package13_des_what": {
  				"uz": "Gigiena vositalari uchun qadoqlashimiz nima bilan ajralib turadi:",
  				"ru": "Чем выделяются наши упаковки для гигиенических изделий:",
  				"en": "What makes our packaging for hygiene products stand out:"
  			},
  			"package13_des_what1": {
  				"uz": "<b>Tashqi omillardan himoya qilish:</b> Biz gigiena vositalarini namlik, chang va boshqa tashqi omillardan himoya qiluvchi, ularning xavfsizligini ta'minlaydigan qadoqlash bilan ta'minlaymiz.",
  				"ru": "<b>Защита От Внешних Факторов:</b> Мы предоставляем упаковки, которые защищают гигиенические изделия от влаги, пыли и других внешних факторов, обеспечивая их сохранность.",
  				"en": "<b>Protection from External Factors:</b> We provide packaging that protects hygiene products from moisture, dust and other external factors, ensuring their safety."
  			},
  			"package13_des_what2": {
  				"uz": "<b>Foydalanish oson: </b>Bizning qadoqlash qulayligi uchun ochish va yopish oson.",
  				"ru": "<b>Удобство в Использовании: </b>Наши упаковки легко открываются и закрываются, обеспечивая легкость использования.",
  				"en": "<b>Easy to Use: </b>Our packaging is easy to open and close for ease of use."
  			},
  			"package13_des_what3": {
  				"uz": "<b>Jozibador dizayn: </b>Biz tozalik va xavfsizlikni aks ettiruvchi qadoqlashni yaratamiz va uni iste'molchilar uchun jozibador qiladi.",
  				"ru": "<b>Привлекательный Дизайн: </b>Мы создаем упаковки, которые отражают чистоту и безопасность, делая их привлекательными для потребителей.",
  				"en": "<b>Attractive Design: </b>We create packaging that reflects cleanliness and safety, making it attractive to consumers."
  			},
  			"package13_des_what4": {
  				"uz": "<b>Eko-do'st: </b>Biz atrof-muhit haqida qayg'uramiz va qayta ishlanishi mumkin bo'lgan qadoqlarni taqdim etamiz.",
  				"ru": "<b>Экологичность: </b>Мы заботимся о окружающей среде и предоставляем упаковки, которые можно перерабатывать.",
  				"en": "<b>Eco-Friendly: </b>We care about the environment and provide packaging that can be recycled."
  			},
  			"package13_end": {
  				"uz": "Pro Flexo gigiyena mahsulotlari ishlab chiqaruvchilarga mahsulot sifati va ishonchliligini aks ettiruvchi qadoqlarni yaratishda yordam berishga tayyor. Gigiyena mahsulotlaringizni hamyonbop qilish va mijozlaringiz ehtiyojlarini qondirish uchun bizga qo'shiling.",
  				"ru": "Pro Flexo готова помочь производителям гигиенических изделий создать упаковки, которые отражают качество и надежность их продукции. Присоединитесь к нам, чтобы сделать ваши гигиенические продукты доступными и удовлетворить потребности ваших клиентов.",
  				"en": "Pro Flexo is ready to help hygiene product manufacturers create packaging that reflects the quality and reliability of their products. Join us to make your hygiene products affordable and meet your customers' needs."
  			},
  			"package14_des": {
  				"uz": "Muzlatilgan va broyler mahsulotlari foydalanish vaqtiga qadar sifati va yangiligini saqlaydigan xavfsiz qadoqlashni talab qiladi. Pro Flexo muzlatilgan oziq-ovqat va broylerlar uchun himoya va saqlash qulayligini birlashtirgan qadoqlashni ta'minlaydi.",
  				"ru": "Замороженные продукты и бройлеры требуют надежных упаковок, которые сохраняют их качество и свежесть до момента использования. Pro Flexo предоставляет упаковки, которые сочетают в себе защиту и удобство хранения для замороженных продуктов и бройлеров.",
  				"en": "Frozen and broiler products require secure packaging that maintains their quality and freshness until the time of use. Pro Flexo provides packaging that combines protection and storage convenience for frozen foods and broilers."
  			},
  			"package14_des_what": {
  				"uz": "Muzlatilgan oziq-ovqat va broylerlar uchun paketlarimiz:",
  				"ru": "Наши пакеты для замороженных продуктов и бройлеров:",
  				"en": "Our packages for frozen food and broilers:"
  			},
  			"package14_des_what1": {
  				"uz": "<b>harorat o'zgarishidan himoya qilish: </b>Biz mahsulotlarni tashqi harorat ta'siridan ishonchli tarzda ajratib turadigan, yangiligini saqlaydigan qadoqlash yaratamiz.",
  				"ru": "<b>Защита От Перепадов Температур: </b>Мы создаем упаковки, которые надежно изолируют продукты от внешних температурных воздействий, сохраняя их свежесть.",
  				"en": "<b>Protection Against Temperature Changes: </b>We create packaging that reliably isolates products from external temperature influences, maintaining their freshness."
  			},
  			"package14_des_what2": {
  				"uz": "<b>Muzlatish va muzdan tushirish qulayligi: </b>Bizning paketlarimiz muzlatish va keyinroq oziq-ovqat mahsulotlarini ishlatish uchun qulay variantlarni taqdim etadi.",
  				"ru": "<b>Удобство Замораживания и Размораживания: </b>Наши упаковки предоставляют удобные варианты для замораживания и последующего использования продуктов.",
  				"en": "<b>Convenience of Freezing and Defrosting: </b>Our packages provide convenient options for freezing and later using food."
  			},
  			"package14_des_what3": {
  				"uz": "<b>Jozobli dizayn: </b>Biz iste'molchilar e'tiborini tortadigan va mahsulotingizni ajralib turadigan qadoqlash yaratamiz.",
  				"ru": "<b>Привлекательный Дизайн: </b>Мы создаем упаковки, которые привлекают внимание потребителей и делают ваш продукт выдающимся.",
  				"en": "<b>Attractive Design: </b>We create packaging that attracts consumers' attention and makes your product stand out."
  			},
  			"package14_des_what4": {
  				"uz": "<b>Atrof-muhitga moslik: </b>Biz atrof-muhit standartlariga javob berish uchun qayta ishlanishi mumkin bo'lgan qadoqlash bilan ta'minlaymiz.",
  				"ru": "<b>Экологическая Совместимость: </b>Мы предоставляем упаковки, которые можно перерабатывать, чтобы удовлетворить экологические стандарты.",
  				"en": "<b>Environmental Compatibility: </b>We provide packaging that can be recycled to meet environmental standards."
  			},
  			"package14_end": {
  				"uz": "Pro Flexo muzlatilgan oziq-ovqat va broyler ishlab chiqaruvchilarga nafaqat mahsulot sifati va xavfsizligini ta'kidlaydigan, balki mijozlar ehtiyojlarini qondiradigan qadoqlash yaratishda yordam berishga tayyor. Mahsulotlaringizni qulay qilish va iste'molchilar talablarini qondirish uchun bizga qo'shiling.",
  				"ru": "Pro Flexo готова помочь производителям замороженных продуктов и бройлеров создать упаковки, которые не только подчеркивают качество и безопасность продукции, но и удовлетворяют потребности клиентов. Присоединитесь к нам, чтобы сделать вашу продукцию доступной и удовлетворить ожидания потребителей.",
  				"en": "Pro Flexo is ready to help frozen food and broiler producers create packaging that not only highlights product quality and safety, but also meets customer needs. Join us to make your products accessible and meet consumer expectations."
  			},
  			"package15_des": {
  				"uz": "Kuryer paketlari yetkazib berish va elektron tijoratning zamonaviy dunyosining ajralmas elementi hisoblanadi. Pro Flexo mahsulotingizni jo'natish xavfsizligi va qulayligini ta'minlaydigan sifatli qadoqlash bilan ta'minlaydi.",
  				"ru": "Курьерские упаковки-пакеты - это незаменимый элемент современного мира доставки и электронной коммерции. Pro Flexo предоставляет качественные упаковки, которые обеспечивают безопасность и удобство доставки ваших товаров.",
  				"en": "Courier packages are an indispensable element of the modern world of delivery and e-commerce. Pro Flexo provides quality packaging that ensures the safety and convenience of shipping your products."
  			},
  			"package15_des_what": {
  				"uz": "Bizning kuryer paketlarimiz:",
  				"ru": "Наши курьерские упаковки-пакеты:",
  				"en": "Our courier packages:"
  			},
  			"package15_des_what1": {
  				"uz": "<b>Kuchli va ishonchli: </b>Biz yuk tashish vaqtida yuklaringizning yaxlitligi va xavfsizligini ta'minlash uchun yuqori sifatli materiallardan foydalanamiz.",
  				"ru": "<b>Прочные и Надежные: </b>Мы используем высококачествные материалы, которые гарантируют целостность и безопасность ваших товаров во время транспортировки.",
  				"en": "<b>Strong and Reliable: </b>We use high quality materials to ensure the integrity and safety of your goods during transportation."
  			},
  			"package15_des_what2": {
  				"uz": "<b>Oson ichki tashkil etish: </b>Bizning qadoqlashimiz sizga tovarlarni optimal yetkazib berish uchun osongina tartibga solish va joylashtirish imkonini beradi.",
  				"ru": "<b>Удобство Внутренней Организации: </b>Наши упаковки позволяют легко организовать и разместить товары для оптимальной доставки.",
  				"en": "<b>Easy Internal Organization: </b>Our packaging allows you to easily organize and place your items for optimal delivery."
  			},
  			"package15_des_what3": {
  				"uz": "<b>Jozobli dizayn: </b>Biz sizning brendingizni yaxshilaydigan va paketlaringizni taniqli qiladigan qadoqlarni yaratamiz.",
  				"ru": "<b>Привлекательный Дизайн: </b>Мы создаем упаковки, которые украшают ваш бренд и делают ваши посылки узнаваемыми.",
  				"en": "<b>Attractive Design: </b>We create packaging that enhances your brand and makes your packages recognizable."
  			},
  			"package15_des_what4": {
  				"uz": "<b>Atrof-muhitga moslik. </b>Biz atrof-muhit haqida qayg'uramiz va qayta ishlanishi mumkin bo'lgan qadoqlarni taqdim etamiz.",
  				"ru": "<b>Экологическая Совместимость: </b>Мы заботимся о окружающей среде и предоставляем упаковки, которые можно перерабатывать.",
  				"en": "<b>Environmental Compatibility: </b>We care about the environment and provide packaging that can be recycled."
  			},
  			"package15_end": {
  				"uz": "Pro Flexo buyumlaringiz xavfsiz va sifatli yetkazib berilishiga yordam berishga tayyor. Yetkazib berishingizni yanada professional qilish va mijozlaringizning talablarini qondirish uchun bizga qo'shiling.",
  				"ru": "Pro Flexo готова помочь вам обеспечить безопасную и стильную доставку ваших товаров. Присоединитесь к нам, чтобы сделать вашу доставку более профессиональной и удовлетворить ожидания ваших клиентов.",
  				"en": "Pro Flexo is ready to help you ensure your items are delivered safely and in style. Join us to make your delivery more professional and meet your customers' expectations."
  			}
  		},
  		"map": {
  			"cooperate": {
  				"uz": "Biz kim bilan hamkorlik qilamiz?",
  				"ru": "С кем сотрудничаем",
  				"en": "Who do we cooperate with?"
  			},
  			"throughout_country": {
  				"uz": "Biz butun O'zbekiston bo'ylab ishlaymiz",
  				"ru": "Мы работаем по всему Узбекистану",
  				"en": "We work throughout Uzbekistan"
  			},
  			"flexographic_printing": {
  				"uz": "Biz O'zbekistonning barcha burchaklaridagi mijozlarga professional fleksografik bosma xizmatlarimizni taklif qilishdan mamnunmiz.",
  				"ru": "Мы рады предложить наши профессиональные услуги по флексографической печати клиентам во всех уголках Узбекистана.",
  				"en": "We are pleased to offer our professional flexographic printing services to clients in all corners of Uzbekistan."
  			},
  			"coverage_geo": {
  				"uz": "<i>Bizning kompaniyamiz o'zining keng geografik qamrovi bilan faxrlanadi, bu bizga ushbu go'zal mamlakatning istalgan nuqtasida mijozlarga xizmat ko'rsatish imkonini beradi. Qaerda bo'lishingizdan qat'i nazar - poytaxt Toshkentda, Farg'ona vodiysidagi tog'lar etagida, Orol dengizi sohillarida yoki Navoiy, Surxondaryo yoki Andijonning chekka hududlarida - biz har doim sizga yuqori sifatli mahsulotlarni taqdim etishga tayyormiz. -sifatli fleksografik bosib chiqarish xizmatlari.</i>",
  				"ru": "<i>Наша компания гордится широким географическим охватом, который позволяет нам обслуживать клиентов в любой точке этой прекрасной страны. Независимо от того, где вы находитесь - в столице Ташкенте, у подножия гор в Ферганской долине, на берегу Аральского моря или в удаленных районах Навои, Сурхандарьи, или Андижана - мы всегда готовы предоставить вам качественные услуги флексографической печати.</i>",
  				"en": "<i>Our company is proud of its wide geographical coverage, which allows us to serve clients anywhere in this beautiful country. Regardless of where you are - in the capital Tashkent, at the foot of the mountains in the Fergana Valley, on the shores of the Aral Sea or in remote areas of Navoi, Surkhandarya, or Andijan - we are always ready to provide you with high-quality flexographic printing services.</i>"
  			},
  			"adapt": {
  				"uz": "Biz O‘zbekistonning har bir hududi o‘ziga xosligini tushunamiz va sizning qadoqlash va chop etish ehtiyojlaringiz har xil bo‘lishi mumkin. Bizning tajribamiz va professionalligimiz bizga turli so'rovlarga moslashishga va har bir mijoz uchun individual echimlarni taqdim etishga imkon beradi.",
  				"ru": "Мы понимаем, что каждый регион Узбекистана уникален, и ваши потребности в упаковке и печати могут различаться. Наш опыт и профессионализм позволяют нам адаптироваться под разные запросы и предоставлять индивидуальные решения для каждого клиента.",
  				"en": "We understand that each region of Uzbekistan is unique and your packaging and printing needs may vary. Our experience and professionalism allow us to adapt to different requests and provide individual solutions for each client."
  			},
  			"cooperate_us": {
  				"uz": "Hamkorlik qilish",
  				"ru": "Сотрудничать",
  				"en": "Cooperate"
  			}
  		},
  		"call_to_action": {
  			"call_to_action_a": {
  				"uz": "Biz bilan hozir gaplashmoqchimisiz?",
  				"ru": "Не желаете ли поговорить с нами прямо сейчас?",
  				"en": "Would you like to talk to us right now?"
  			},
  			"call_to_action_b": {
  				"uz": "<i>Biz har doim savollaringizga javob berishga, ehtiyojlaringizni muhokama qilishga va xizmatlarimiz haqida qoʻshimcha maʼlumot berishga tayyormiz.</i>",
  				"ru": "<i>Мы всегда готовы ответить на ваши вопросы, обсудить ваши потребности и предоставить дополнительную информацию о наших услугах.</i>",
  				"en": "<i>We are always ready to answer your questions, discuss your needs and provide additional information about our services.</i>"
  			},
  			"call_to_action_c": {
  				"uz": "Bizning mutaxassislarimiz sizning ehtiyojlaringizni muhokama qilishga va biznesingiz uchun eng yaxshi echimlarni tanlashga yordam berishga tayyor. Biz bilan bog'laning - biz yordam berishga tayyormiz!",
  				"ru": "Наши эксперты готовы обсудить ваши потребности и помочь вам с выбором наилучших решений для вашего бизнеса. Не стесняйтесь связаться с нами - мы здесь, чтобы помочь!",
  				"en": "Our experts are ready to discuss your needs and help you choose the best solutions for your business. Feel free to contact us - we're here to help!"
  			},
  			"call_to_action_d": {
  				"uz": "Tafsilotlaringizni qoldiring",
  				"ru": "Оставьте свои данные",
  				"en": "Leave your details"
  			}
  		},
  		"partners": {
  			"title": {
  				"ru": "Партнеры",
  				"en": "Partners",
  				"uz": "Hamkorlar"
  			},
  			"description": {
  				"ru": '<b>Нам <i class="text-primary">доверяют</i></b>',
  				"en": '<b>We are <i class="text-primary">trusted</i></b>',
  				"uz": '<b>Biz <i class="text-primary">ishonchlimiz</i></b>'
  			}
  		},
  		'features': {
  			"title": {
  				"ru": "Вы нам всегда нужны :) <br>Что интересует:",
  				"en": "We always need you :) <br>What interests you:",
  				"uz": "Siz bizga doim keraksiz :) <br>Bizni nima qiziqtiradi:"
  			},
  			"p1": {
  				"ru": "Пленки PET, MPET, BOPP, CPP, MCPP",
  				"en": "Stretches PET, MPET, BOPP, CPP, MCPP",
  				"uz": "PET, MPET, BOPP, CPP, MCPP paketlari"
  			},
  			"p3": {
  				"ru": "Полиэтиленовые гранулы и добавки",
  				"en": "Polyethylene granules and additives",
  				"uz": "Polietilen granulalar va qo'shimchalar"
  			},
  			"p2": {
  				"ru": "Флексографические краски",
  				"en": "Flexographic inks",
  				"uz": "Fleksografik siyohlar"
  			},
  			"p4": {
  				"ru": "Растворители",
  				"en": "Solvents",
  				"uz": "Solventlar"
  			},
  			"p5": {
  				"ru": "Монтажные скотчи",
  				"en": "Mounting tapes",
  				"uz": "O'rnatish lentalari"
  			},
  			"p6": {
  				"ru": "Ракельные ножи",
  				"en": "Squeegee knives",
  				"uz": "Tozalash pichoqlari"
  			},
  			"hello": {
  				"ru": "Привет!Мы всегда рады общению.",
  				"en": "Hello! We are always happy to communicate.",
  				"uz": "Salom! Biz doimo muloqot qilishdan xursandmiz."
  			},
  			"desc": {
  				"ru": "Позвоните нам или оставьте свои контактные данные, и мы свяжемся с вами в ближайшее время. Наша команда готова предоставить вам качественный сервис и ответить на все ваши вопросы. Ждем вашего звонка или сообщения!",
  				"uz": "Bizga qo'ng'iroq qiling yoki aloqa ma'lumotlaringizni qoldiring va biz imkon qadar tezroq siz bilan bog'lanamiz. Bizning jamoamiz sizga sifatli xizmat ko'rsatishga va barcha savollaringizga javob berishga tayyor. Qo'ng'iroq yoki xabaringizni kutamiz!",
  				"en": "Call us or leave your contact details and we will contact you as soon as possible. Our team is ready to provide you with quality service and answer all your questions. We are waiting for your call or message!"
  			},
  			"leave": {
  				"ru": "Оставь данные",
  				"en": "Leave your details",
  				"uz": "Tafsilotlaringizni qoldiring"
  			}

  		},
  		"testimonials": {
  			"title": {
  				"ru": "Отзывы",
  				"en": "Reviews",
  				"uz": "Sharhlar"
  			},
  			"description": {
  				"ru": '<b>Что <i class="text-primary">говорят о нас?</i></b>',
  				"en": '<b>What do they<i class="text-primary">say about us?</i></b>',
  				"uz": '<b>Biz haqimizda<i class="text-primary">nima aytishadi?</i></b>'
  			}
  		},
  		"contact": {
  			"title": {
  				"ru": "Контакты",
  				"en": "contacts",
  				"uz": "Kontaktlar"
  			},
  			"p1": {
  				"ru": 'Наши <i class="text-primary">контакты</i></b>',
  				"en": 'Our <i class="text-primary">contacts</i></b>',
  				"uz": '<i class="text-primary">kontaktlarimiz</i></b>'
  			},
  			"p2": {
  				"ru": "Наш адрес",
  				"en": "Our address",
  				"uz": "Bizning manzil"
  			},
  			"p3": {
  				"ru": "г.Ташкент,Юнусабадский р-н. ул.Каракамишская, 2в",
  				"en": "Tashkent, Yunusabad district. Karakamishskaya st., 2v",
  				"uz": "Toshkent shahri, Yunusobod tumani. Karakamishskaya ko'chasi, 2v"
  			},
  			"p4": {
  				"ru": "Электронная почта",
  				"en":  "Email",
  				"uz": "Elektron pochta",
  			},
  			"p5": {
  				"ru": "Номер телефона",
  				"en": "Phone number",
  				"uz": "Telefon raqami"
  			},
  			"p6": {
  				"ru": "Дополнительные номера",
  				"en": "Additional numbers",
  				"uz": "Qo'shimcha raqamlar"
  			},
  			"p7": {
  				"ru": "Отправить сообщение",
  				"en": "send a message",
  				"uz": "xabar yubormoq"
  			}
  		},
  		"footer": {
  			"title": {
  				"ru": "<b>Вы тоже можете оказаться в этой команде:)</b>",
  				"en": "<b>You too can be on this team :)</b>",
  				"uz": "<b>Siz ham bu jamoada bo'lishingiz mumkin :)</b>"
  			},
  			"description": {
  				"ru": "Хотите расти вместе с нами? Теперь докажите нам, что вам это нужно! Станьте неотъемлемой частью команды",
  				"en": "Do you want to grow with us? Now prove to us that you need it! Become an integral part of the team",
  				"uz": "Biz bilan o'sishni hohlaysizmi? Endi bizga bu sizga kerakligini isbotlang! Jamoaning ajralmas qismiga aylaning"
  			},
  			"p1": {
  				"ru": "Позвони прямо сейчас и узнай есть ли свободные места",
  				"en": "Call now and find out if there are free places",
  				"uz": "Hozir qo'ng'iroq qiling va bepul joylar bor yoki yo'qligini bilib oling"

  			},
  			"p2": {
  				"ru": 'или пройди по ссылке <a href="https://hh.uz/employer/9489905?hhtmFrom=vacancy_search_list">перейти</a>',
  				"en": 'or follow the link <a href="https://hh.uz/employer/9489905?hhtmFrom=vacancy_search_list">go</a>',
  				"uz": 'yoki <a href="https://hh.uz/employer/9489905?hhtmFrom=vacancy_search_list">borish</a> havolasiga oting'
  			},

  		}
 };

(function () {
	this.I18n = function (defaultLang) {
		var lang = defaultLang || 'ru';
		this.language = lang;

		(function (i18n) {
			i18n.contents = demoJson;
			i18n.contents.prop = function (key) {
				var result = this;
				var keyArr = key.split('.');
				for (var index = 0; index < keyArr.length; index++) {
					var prop = keyArr[index];
					result = result[prop];
				}
				return result;
			};
			i18n.localize();
		})(this);
	};

	this.I18n.prototype.hasCachedContents = function () {
		return this.contents !== undefined;
	};

	this.I18n.prototype.lang = function (lang) {
		if (typeof lang === 'string') {
			this.language = lang;
		}
		this.localize();
		return this.language;
	};

	this.I18n.prototype.localize = function () {
		var contents = this.contents;
		if (!this.hasCachedContents()) {
			return;
		}
		var dfs = function (node, keys, results) {
			var isLeaf = function (node) {
				for (var prop in node) {
					if (node.hasOwnProperty(prop)) {
						if (typeof node[prop] === 'string') {
							return true;
						}
					}
				}
			}
			for (var prop in node) {
				if (node.hasOwnProperty(prop) && typeof node[prop] === 'object') {
					var myKey = keys.slice();
					myKey.push(prop);
					if (isLeaf(node[prop])) {
						//results.push(myKey.reduce((prev, current) => prev + '.' + current));	//not supported in older mobile broweser
						results.push(myKey.reduce( function (previousValue, currentValue, currentIndex, array) {
							return previousValue + '.' + currentValue;
						}));
					} else {
						dfs(node[prop], myKey, results);
					}
				}
			}
			return results;
		};
		var keys = dfs(contents, [], []);
		for (var index = 0; index < keys.length; index++) {
			var key = keys[index];
			if (contents.prop(key).hasOwnProperty(this.language)) {
				$('[data-i18n="'+key+'"]').html(contents.prop(key)[this.language]);
				$('[data-i18n-placeholder="'+key+'"]').attr('placeholder', contents.prop(key)[this.language]);
				$('[data-i18n-value="'+key+'"]').attr('value', contents.prop(key)[this.language]);
			} else {
				$('[data-i18n="'+key+'"]').html(contents.prop(key)['en']);
				$('[data-i18n-placeholder="'+key+'"]').attr('placeholder', contents.prop(key)['en']);
				$('[data-i18n-value="'+key+'"]').attr('value', contents.prop(key)['en']);
			}
		}
	};

}).apply(window);

$( document ).ready( function () {

	var i18n = new I18n();
	i18n.localize();
	$('.lang-picker #english').addClass('selected');
	
	$('.lang-picker #russian').on('click', function () {
		i18n.lang('ru');
		selectLang($(this));
	})
	$('.lang-picker #english').on('click', function () {
		i18n.lang('en');
		selectLang($(this));
	})
	$('.lang-picker #uzbek').on('click', function () {
		i18n.lang('uz');
		selectLang($(this));
	})
	$('.lang-picker #iranian').on('click', function () {
		i18n.lang('ir');
		selectLang($(this));
	})
	$('.lang-picker #chinese').on('click', function () {
		i18n.lang('ch');
		selectLang($(this));
	})
	$('.lang-picker #arab').on('click', function () {
		i18n.lang('ar');
		selectLang($(this));
	})

	function selectLang (picker) {
		$('.lang-picker a').removeClass('selected');
		picker.addClass('selected');
	}
});