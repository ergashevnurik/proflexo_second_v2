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
  "call_to_action": {
  	"title": {
  		"ru": "Не желаете ли поговорить с нами прямо сейчас?",
  		"en": "Would you like to talk to us right now?",
  		"uz": "Biz bilan hozir gaplashmoqchimisiz?"
  	},
  	"title_second": {
  		"ru": "Мы всегда готовы ответить на ваши вопросы, обсудить ваши потребности и предоставить дополнительную информацию о наших услугах",
  		"en": "We are always available to answer your questions, discuss your needs and provide additional information about our services",
  		"uz"  "Biz har doim sizning savollaringizga javob berishga, ehtiyojlaringizni muhokama qilishga va xizmatlarimiz haqida qo'shimcha ma'lumot berishga tayyormiz"
  	},
  	"title_third": {
  		"ru": "Наши эксперты готовы обсудить ваши потребности и помочь вам с выбором наилучших решений для вашего бизнеса. Не стесняйтесь связаться с нами - мы здесь, чтобы помочь!",
  		"en": "Our experts are ready to discuss your needs and help you choose the best solutions for your business. Feel free to contact us - we're here to help!",
  		"uz": "Bizning mutaxassislarimiz sizning ehtiyojlaringizni muhokama qilishga va biznesingiz uchun eng yaxshi echimlarni tanlashga yordam berishga tayyor. Biz bilan bog'laning - biz yordam berishga tayyormiz!"
  	},
  	"title_fourth": {
  		"ru": "Оставьте свои данные",
  		"en": "Leave your details",
  		"uz": "Tafsilotlaringizni qoldiring"
  	}
  },

  "map": {
  	"title": {
  		"ru": "С кем сотрудничаем",
  		"en": "Who do we cooperate with?",
  		"uz": "Biz kim bilan hamkorlik qilamiz?"
  	},
  	"description": {
  		"ru": "Мы работаем по всему Узбекистану",
  		"en": "We work throughout Uzbekistan",
  		"uz": "Biz butun O'zbekiston bo'ylab ishlaymiz"
  	},
  	"title_second": {
  		"ru":"Мы рады предложить наши профессиональные услуги по флексографической печати клиентам во всех уголках Узбекистана",
  		"en":"We are pleased to offer our professional flexographic printing services to clients in all corners of Uzbekistan",
  		"uz":"Biz O'zbekistonning barcha burchaklaridagi mijozlarga professional fleksografik bosma xizmatlarimizni taklif qilishdan mamnunmiz"
  	},
  	"title_third": {
  		"ru": "Наша компания гордится широким географическим охватом, который позволяет нам обслуживать клиентов в любой точке этой прекрасной страны. Независимо от того, где вы находитесь - в столице Ташкенте, у подножия гор в Ферганской долине, на берегу Аральского моря или в удаленных районах Навои, Сурхандарьи, или Андижана - мы всегда готовы предоставить вам качественные услуги флексографической печати.",
  		"en": "Our company is proud of its wide geographical coverage, which allows us to serve clients anywhere in this beautiful country. Regardless of where you are - in the capital Tashkent, at the foot of the mountains in the Fergana Valley, on the shores of the Aral Sea or in remote areas of Navoi, Surkhandarya, or Andijan - we are always ready to provide you with high-quality flexographic printing services.",
  		"uz" "Bizning kompaniyamiz o'zining keng geografik qamrovi bilan faxrlanadi, bu bizga ushbu go'zal mamlakatning istalgan nuqtasida mijozlarga xizmat ko'rsatish imkonini beradi. Qaerda bo'lishingizdan qat'i nazar - poytaxt Toshkentda, Farg'ona vodiysidagi tog'lar etagida, Orol dengizi sohillarida yoki Navoiy, Surxondaryo yoki Andijonning chekka hududlarida - biz har doim sizga yuqori sifatli mahsulotlarni taqdim etishga tayyormiz. -sifatli fleksografik bosib chiqarish xizmatlari."
  	},
  	"title_fourth": {
  		"ru": "Мы понимаем, что каждый регион Узбекистана уникален, и ваши потребности в упаковке и печати могут различаться. Наш опыт и профессионализм позволяют нам адаптироваться под разные запросы и предоставлять индивидуальные решения для каждого клиента.",
  		"uz": "Biz O‘zbekistonning har bir hududi o‘ziga xosligini tushunamiz va sizning qadoqlash va chop etish ehtiyojlaringiz har xil bo‘lishi mumkin. Bizning tajribamiz va professionalligimiz bizga turli so'rovlarga moslashishga va har bir mijoz uchun individual echimlarni taqdim etishga imkon beradi.",
  		"en": "We understand that each region of Uzbekistan is unique and your packaging and printing needs may vary. Our experience and professionalism allow us to adapt to different requests and provide individual solutions for each client."
  	},
  	"title_fifth": {
  		"ru": "Сотрудничать",
  		"uz": "Hamkorlik qiling",
  		"en": "Cooperate"
  	}

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