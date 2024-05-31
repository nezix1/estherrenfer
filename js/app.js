(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    $(".icon-menu").click((function() {
        $("html").toggleClass("lock menu-open");
    }));
    $(window).scroll((function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) $("header").addClass("header--scroll"); else $("header").removeClass("header--scroll");
    }));
    const lngs = {
        eng: {
            nativeName: "English"
        },
        esp: {
            nativeName: "Español"
        }
    };
    const rerender = () => {
        $("body").localize();
        $("title").text($.t("head.title"));
        $("meta[name=description]").attr("content", $.t("head.description"));
    };
    $((() => {
        i18next.use(i18nextBrowserLanguageDetector).init({
            debug: true,
            fallbackLng: "eng",
            resources: {
                eng: {
                    translation: {
                        head: {
                            title: "Ether Renfer",
                            description: "Ether Renfer - Evolutionary Therapist in Thun, Switzerland"
                        },
                        header: {
                            aboutme: "About me",
                            benefits: "Benefits",
                            contact: "Contact"
                        },
                        intro: {
                            descr: "Evolutionary Therapist in Thun, Switzerland"
                        },
                        benefits: {
                            maintitle: "Why should you study with me?",
                            title1: "Rapid and Deep Transformation",
                            descr1: "My therapy allows for quick and effective transformation of subconscious blocks and elimination of unwanted behavior patterns, helping you move in the right direction.",
                            title2: "Science-Based Approach",
                            descr2: "Based on scientific principles, my therapy works regardless of belief. Numerous clients have already experienced its effectiveness and observe positive changes in their lives.",
                            title3: "Personal Experience and Understanding",
                            descr3: "Having faced all the challenges of transformation myself, I have developed a method that helps people who have exhausted all their attempts find a path to growth and change."
                        },
                        info: {
                            title: "Evolutionary Therapist",
                            text: "I connect with people deeply through uncommon questions in order to bring out the wisdom within. I am an excellent companion, friend and ally. My intuition is my greatest strength. I help people to see themselves with love and to connect with their best self. I accompany the healing process of the evolutionary wounds of my clients.",
                            text2: "Since I was a child I learned to listen, comfort and be compassionate with all kinds of people, as my family did missionary service in remote villages in the Andes. Naturally I started to find my way in a self-taught way and to help different people: from successful businesswoman to drunken beggars I succeeded in making life more positive.",
                            bold: "Evolve yourself!"
                        },
                        contact: {
                            title: "I will help you",
                            contact: "Contact me"
                        },
                        ticker: {
                            items: [ "transform subconscious blocks and change your life.", "find and overcome the root of your problems for harmony.", "unlock your potential and create a better future." ]
                        }
                    }
                },
                esp: {
                    translation: {
                        head: {
                            title: "Ether Renfer",
                            description: "Ether Renfer - Terapeuta evolutivo en Thun, Suiza"
                        },
                        header: {
                            aboutme: "Sobre mí",
                            benefits: "Beneficios",
                            contact: "Contacto"
                        },
                        intro: {
                            descr: "Terapeuta evolutivo en Thun, Suiza"
                        },
                        benefits: {
                            maintitle: "¿Por qué deberías estudiar conmigo?",
                            title1: "Transformación rápida y profunda",
                            descr1: "Mi terapia permite transformar rápidamente y de manera efectiva los bloqueos subconscientes y deshacerse de patrones de comportamiento no deseados, ayudándote a moverte en la dirección correcta.",
                            title2: "Enfoque basado en la ciencia",
                            descr2: "Basada en principios científicos, mi terapia funciona independientemente de la creencia. Numerosos clientes ya han comprobado su eficacia y observan cambios positivos en sus vidas.",
                            title3: "Experiencia y comprensión personal",
                            descr3: "Habiendo experimentado todas las dificultades de la transformación, he desarrollado un método que ayuda a las personas que han agotado todos sus intentos a encontrar el camino hacia el crecimiento y el cambio."
                        },
                        info: {
                            title: "Terapista Evolutiva",
                            text: "Conecto con las personas profundamente mediante preguntas no comunes para poder sacar la sabiduria interior. Soy excelente compañera, amiga y aliada. Mi intuición es mi mas grande fortaleza. Ayudo a las personas a verse con amor y a conectar con su mejor yo. Acompaño el proceso de sanación de las heridas evolutivas de mis clientes.",
                            text2: "Desde niña aprendi a saber escuchar, consolar y ser compasiva con todo tipo de personas, ya que mi familia hizo servicio misional en pueplos alejados en los andes. Naturalmente empece a encontrar mi camino de forma autodidacta y a ayudar a diferentes personas: desde empresarias exitosas a mendigos borrachos logre a hacer la vida mas positiva.",
                            bold: "Evolucionate!"
                        },
                        contact: {
                            title: "Te ayudaré a",
                            contact: "Contacte conmigo"
                        },
                        ticker: {
                            items: [ "transformar los bloqueos subconscientes y cambiar tu vida.", "encontrar y superar la raíz de tus problemas para lograr la armonía.", "descubrir tu potencial y crear un mejor futuro." ]
                        }
                    }
                }
            }
        }, ((err, t) => {
            if (err) return console.error(err);
            jqueryI18next.init(i18next, $, {
                useOptionsAttr: true
            });
            Object.keys(lngs).map((lng => {
                const opt = new Option(lngs[lng].nativeName, lng);
                if (lng === i18next.resolvedLanguage) opt.setAttribute("selected", "selected");
                $("#languageSwitcher").append(opt);
            }));
            $("#languageSwitcher").change((function() {
                const chosenLng = $(this).find("option:selected").attr("value");
                i18next.changeLanguage(chosenLng, (() => {
                    rerender();
                    updateTickerTexts();
                    AOS.init();
                }));
            }));
            rerender();
            updateTickerTexts();
            AOS.init();
        }));
    }));
    let tickerTimeout;
    let typingTimeout;
    function updateTickerTexts() {
        clearTimeout(tickerTimeout);
        clearTimeout(typingTimeout);
        const chosenLng = i18next.language;
        const tickerTexts = i18next.t(`ticker.items`, {
            lng: chosenLng,
            returnObjects: true
        });
        autotypingText({
            typingSpeed: 70,
            switchTimeout: 2e3,
            element: $("#Ticker"),
            desktopData: tickerTexts,
            mobileData: tickerTexts
        });
    }
    updateTickerTexts();
    function autotypingText(args) {
        let itemCount = args.desktopData.length;
        let curItemIndex = -1;
        let currentLength = 0;
        let theText = "";
        function runTheTicker() {
            let theHold;
            if (0 === currentLength) {
                curItemIndex++;
                curItemIndex %= itemCount;
                theText = args.desktopData[curItemIndex];
            }
            args.element.html(theText.substring(0, currentLength) + showSymbol().prop("outerHTML"));
            if (currentLength !== theText.length) {
                currentLength++;
                theHold = args.typingSpeed;
            } else {
                currentLength = 0;
                theHold = args.switchTimeout;
            }
            typingTimeout = setTimeout(runTheTicker, theHold);
        }
        function showSymbol() {
            return $('<span class="blinking">|</span>');
        }
        runTheTicker();
    }
    window["FLS"] = true;
    isWebp();
})();