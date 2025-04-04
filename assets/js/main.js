function detectUserLanguage() {
  let e = navigator.language || navigator.userLanguage;
  return e.startsWith("ar") ? "ar" : e.startsWith("tr") ? "tr" : "en";
}
function applyLanguage(e) {
  document
    .querySelectorAll("[data-content]")
    .forEach((e) => (e.style.display = "none")),
    document
      .querySelectorAll(`[data-content="${e}"]`)
      .forEach((e) => (e.style.display = "block")),
    localStorage.setItem("siteLanguage", e),
    setCookie("siteLanguage", e, 30);
}
function setCookie(e, t, i) {
  let s = "";
  if (i) {
    let a = new Date();
    a.setTime(a.getTime() + 864e5 * i), (s = "; expires=" + a.toUTCString());
  }
  document.cookie = e + "=" + t + s + "; path=/";
}
function getCookie(e) {
  let t = e + "=",
    i = document.cookie.split(";");
  for (let s = 0; s < i.length; s++) {
    let a = i[s];
    for (; " " === a.charAt(0); ) a = a.substring(1, a.length);
    if (0 === a.indexOf(t)) return a.substring(t.length, a.length);
  }
  return null;
}
!(function (e) {
  "use strict";
  var t,
    i,
    s,
    a,
    r,
    n,
    l,
    o,
    d,
    c,
    u,
    p,
    $,
    h,
    g,
    f,
    v,
    m,
    w,
    _,
    y,
    b,
    k,
    P,
    V,
    C,
    L,
    x = e(window);
  if (
    (x.on("load", function () {
      e("#loading").fadeOut(500);
    }),
    e("select").niceSelect(),
    x.on("scroll", function () {
      400 > x.scrollTop()
        ? e("#header-sticky").removeClass("header-sticky")
        : e("#header-sticky").addClass("header-sticky");
    }),
    e(".rr-menu-bar").on("click", function () {
      e(".rroffcanvas").addClass("opened"),
        e(".body-overlay").addClass("apply");
    }),
    e(".close-btn").on("click", function () {
      e(".rroffcanvas").removeClass("opened"),
        e(".body-overlay").removeClass("apply");
    }),
    e(".body-overlay").on("click", function () {
      e(".rroffcanvas").removeClass("opened"),
        e(".body-overlay").removeClass("apply");
    }),
    e(".search-open-btn").on("click", function () {
      e(".search__popup").addClass("search-opened");
    }),
    e(".search-close-btn").on("click", function () {
      e(".search__popup").removeClass("search-opened");
    }),
    e(".col-custom").on("click", function () {
      e("#features-item-thumb").removeClass().addClass(e(this).attr("rel")),
        e(this).addClass("active").siblings().removeClass("active");
    }),
    e(".rr-hero-2__feature-item").on("mouseenter", function () {
      e(this)
        .addClass("active")
        .parent()
        .siblings()
        .find(".rr-hero-2__feature-item")
        .removeClass("active");
    }),
    e(".rr-custom-accordion .accordion-items").on("click", function () {
      e(this).addClass("rr-faq-active").siblings().removeClass("rr-faq-active");
    }),
    e("#rr-header-top__value-toogle").length > 0 &&
      window.addEventListener("click", function (t) {
        document
          .getElementById("rr-header-top__value-toogle")
          .contains(t.target)
          ? e(".rr-header-top__value-submenu").toggleClass("open")
          : e(".rr-header-top__value-submenu").removeClass("open");
      }),
    e("#rr-header-top__lang-toogle").length > 0 &&
      window.addEventListener("click", function (t) {
        document.getElementById("rr-header-top__lang-toogle").contains(t.target)
          ? e(".rr-header-top__lang-submenu").toggleClass("open")
          : e(".rr-header-top__lang-submenu").removeClass("open");
      }),
    e(`<span class="header-icon">
		<svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="htrr://www.w3.org/2000/svg">
		<path d="M6.04088 0L0.535156 4.125V11H4.26484V8.59381C4.26484 7.64165 5.05698 6.87506 6.04088 6.87506C7.02477 6.87506 7.81692 7.64165 7.81692 8.59381V11H11.5466V4.125L6.04088 0Z" fill="#FFB302"/></svg>                                
	</span>`).insertBefore(".menu-icon nav ul .menu-icon-2"),
    e("[data-background").each(function () {
      e(this).css(
        "background-image",
        "url( " + e(this).attr("data-background") + "  )"
      );
    }),
    e("[data-width]").each(function () {
      e(this).css("width", e(this).attr("data-width"));
    }),
    e("[data-bg-color]").each(function () {
      e(this).css("background-color", e(this).attr("data-bg-color"));
    }),
    e("[data-text-color]").each(function () {
      e(this).css("color", e(this).attr("data-text-color"));
    }),
    e(".has-img").each(function () {
      var t = `<img class="mega-menu-img" src="${e(this).attr(
        "data-menu-img"
      )}" alt="img">`;
      e(this).append(t);
    }),
    e(".rr-header-search-category select").niceSelect(),
    e(".smooth a").on("click", function (t) {
      var i = e(this.getAttribute("href"));
      i.length &&
        (t.preventDefault(),
        e("html, body")
          .stop()
          .animate({ scrollTop: i.offset().top - 120 }, 1500));
    }),
    ($ = e("#back_to_top")),
    (h = e(".back-to-top-wrapper")),
    x.scroll(function () {
      x.scrollTop() > 300
        ? h.addClass("back-to-top-btn-show")
        : h.removeClass("back-to-top-btn-show");
    }),
    $.on("click", function (t) {
      t.preventDefault(), e("html, body").animate({ scrollTop: 0 }, "300");
    }),
    e(".rr-banner-scroll-mouse a").click(function () {
      return (
        e(".rr-banner-scroll-mouse a.active").removeClass("active"),
        e(this).addClass("active"),
        e("html, body")
          .stop()
          .animate(
            { scrollTop: e(e(this).attr("href")).offset().top - 0 },
            300
          ),
        !1
      );
    }),
    new Swiper(".rr-testimonial-active", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: !0,
      autoplay: { delay: 3e3 },
      breakpoints: {
        1600: { slidesPerView: 3 },
        1400: { slidesPerView: 3 },
        1200: { slidesPerView: 3 },
        992: { slidesPerView: 2 },
        768: { slidesPerView: 2 },
        576: { slidesPerView: 1 },
        0: { slidesPerView: 1 },
        a11y: !1,
      },
      pagination: { el: ".rr-main-swiper-dot", clickable: !0 },
    }),
    new Swiper(".rr-service-active", {
      speed: 1e3,
      loop: !0,
      slidesPerView: 3,
      autoplay: !0,
      spaceBetween: 30,
      breakpoints: {
        1600: { slidesPerView: 3 },
        1400: { slidesPerView: 3 },
        1200: { slidesPerView: 3 },
        992: { slidesPerView: 2 },
        768: { slidesPerView: 2 },
        576: { slidesPerView: 1 },
        0: { slidesPerView: 1 },
        a11y: !1,
      },
      pagination: { el: ".rr-main-swiper-dot", clickable: !0 },
    }),
    new Swiper(".rr-team-active", {
      speed: 1e3,
      loop: !0,
      slidesPerView: 4,
      autoplay: !0,
      spaceBetween: 30,
      breakpoints: {
        1600: { slidesPerView: 4 },
        1400: { slidesPerView: 4 },
        1200: { slidesPerView: 4 },
        992: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        576: { slidesPerView: 2 },
        0: { slidesPerView: 1 },
        a11y: !1,
      },
      pagination: { el: ".rr-team-swiper-dot", clickable: !0 },
    }),
    new Swiper(".postbox__thumb-slider-active", {
      speed: 1e3,
      loop: !0,
      slidesPerView: 1,
      autoplay: !0,
      spaceBetween: 0,
      centeredSlides: !0,
      breakpoints: {
        1600: { slidesPerView: 1 },
        1400: { slidesPerView: 1 },
        1200: { slidesPerView: 1 },
        992: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        576: { slidesPerView: 1 },
        0: { slidesPerView: 1 },
        a11y: !1,
      },
      navigation: {
        nextEl: ".postbox-arrow-next",
        prevEl: ".postbox-arrow-prev",
      },
    }),
    new Swiper(".rr-gallery-active", {
      speed: 1e3,
      loop: !0,
      slidesPerView: 1,
      autoplay: !0,
      spaceBetween: 0,
      breakpoints: {
        1600: { slidesPerView: 1 },
        1400: { slidesPerView: 1 },
        1200: { slidesPerView: 1 },
        992: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        576: { slidesPerView: 1 },
        0: { slidesPerView: 1 },
        a11y: !1,
      },
      pagination: { el: ".gallery-slider-dots", clickable: !0 },
    }),
    new Swiper(".rr-brand-active", {
      speed: 1e3,
      loop: !0,
      slidesPerView: 5,
      autoplay: !0,
      spaceBetween: 30,
      breakpoints: {
        1600: { slidesPerView: 5 },
        1400: { slidesPerView: 5 },
        1200: { slidesPerView: 5 },
        992: { slidesPerView: 5 },
        768: { slidesPerView: 4 },
        576: { slidesPerView: 3 },
        0: { slidesPerView: 2 },
        a11y: !1,
      },
    }),
    new Swiper(".rr-brand-3-active", {
      speed: 1e3,
      loop: !0,
      slidesPerView: 5,
      autoplay: !0,
      spaceBetween: 30,
      breakpoints: {
        1600: { slidesPerView: 5 },
        1400: { slidesPerView: 5 },
        1200: { slidesPerView: 5 },
        992: { slidesPerView: 5 },
        768: { slidesPerView: 3 },
        576: { slidesPerView: 2 },
        0: { slidesPerView: 2 },
        a11y: !1,
      },
    }),
    new Swiper(".rr-slider-2-active", {
      speed: 1500,
      loop: !0,
      slidesPerView: 1,
      autoplay: !0,
      effect: "fade",
      breakpoints: {
        1600: { slidesPerView: 1 },
        1400: { slidesPerView: 1 },
        1200: { slidesPerView: 1 },
        992: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        576: { slidesPerView: 1 },
        0: { slidesPerView: 1 },
        a11y: !1,
      },
      navigation: { nextEl: ".slider-prev", prevEl: ".slider-next" },
    }),
    new Swiper(".rr-slider-3-active", {
      speed: 1500,
      loop: !0,
      slidesPerView: 1,
      autoplay: !0,
      effect: "fade",
      breakpoints: {
        1600: { slidesPerView: 1 },
        1400: { slidesPerView: 1 },
        1200: { slidesPerView: 1 },
        992: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        576: { slidesPerView: 1 },
        0: { slidesPerView: 1 },
        a11y: !1,
      },
      navigation: { nextEl: ".slider-prev", prevEl: ".slider-next" },
    }),
    e(".testimonia-item-active").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: !1,
      fade: !1,
      dots: !0,
      centerMode: !0,
      asNavFor: ".testimonial-nav",
      centerPadding: "30px",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: !0,
            dots: !0,
            centerPadding: "30px",
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "10px",
          },
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "60px",
          },
        },
      ],
    }),
    e(".testimonial-nav").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: ".testimonia-item-active",
      centerMode: !0,
      focusOnSelect: !0,
      centerPadding: 0,
    }),
    e(".testimonia-item-active").on("afterChange", function (t, i, s) {
      e(".testimonial-thumb").removeClass("slick-img-width"),
        e(".testimonial-nav")
          .find(".slick-center")
          .prev()
          .addClass("slick-img-width"),
        e(".testimonial-nav")
          .find(".slick-center")
          .next()
          .addClass("slick-img-width");
    }),
    new PureCounter(),
    void 0 !== e.fn.knob &&
      e(".knob").each(function () {
        var t = e(this),
          i = t.attr("data-rel");
        t.knob({
          draw: function () {
            e(this.i).val(this.cv + "%");
          },
        }),
          t.appear(
            function () {
              e({ value: 0 }).animate(
                { value: i },
                {
                  duration: 2e3,
                  easing: "swing",
                  step: function () {
                    t.val(Math.ceil(this.value)).trigger("change");
                  },
                }
              );
            },
            { accX: 0, accY: -150 }
          );
      }),
    e(".grid").imagesLoaded(function () {
      var t = e(".grid").isotope({
        itemSelector: ".grid-item",
        percentPosition: !0,
        masonry: { columnWidth: ".grid-item" },
      });
      e(".masonary-menu").on("click", "button", function () {
        var i = e(this).attr("data-filter");
        t.isotope({ filter: i });
      }),
        e(".masonary-menu button").on("click", function (t) {
          e(this).siblings(".active").removeClass("active"),
            e(this).addClass("active"),
            t.preventDefault();
        });
    }),
    e(".popup-image").magnificPopup({
      type: "image",
      gallery: { enabled: !0 },
    }),
    e(".popup-video").magnificPopup({ type: "iframe" }),
    e(".scene").length > 0 && e(".scene").parallax({ scalarX: 5, scalarY: 5 }),
    new WOW().init(),
    new PureCounter(),
    new PureCounter({ filesizing: !0, selector: ".filesizecount", pulse: 2 }),
    e(".hover__active").on("mouseenter", function () {
      e(this)
        .addClass("active")
        .parent()
        .siblings()
        .find(".hover__active")
        .removeClass("active");
    }),
    e(".activebsba").on("click", function () {
      e("#services-item-thumb").removeClass().addClass(e(this).attr("rel")),
        e(this).addClass("active").siblings().removeClass("active");
    }),
    e("#marker").length > 0)
  ) {
    (g = document.querySelector("#marker")),
      (f = document.querySelectorAll(".menu-style-3  > nav > ul > li")),
      document.querySelector(".menu-style-3  > nav > ul > li.active"),
      f.forEach((e) => {
        e.addEventListener("mouseenter", (e) => {
          var t;
          (t = e.target),
            (g.style.left = t.offsetLeft + "px"),
            (g.style.width = t.offsetWidth + "px");
        });
      }),
      (v = e(".menu-style-3 > nav > ul > li.active")),
      (m = e(v).width()),
      (w = parseFloat(e(v).css("padding-left"))),
      (_ = parseFloat(e(v).css("padding-right"))),
      (n = 0),
      e(".menu-style-3 > nav > ul > li").each(function (l, o) {
        var d = e(o).hasClass("active");
        if (((g.style.left = o.offsetLeft + "px"), d)) return !1;
        (i = (t = e(o).find("li")).width()),
          (n += r =
            i +
            (s = parseFloat(t.css("padding-left"))) +
            (a = parseFloat(t.css("padding-right"))));
      }),
      e(g).css("display", "block"),
      e(g).css("width", m + w + _);
  }
  if (e("#productTabMarker").length > 0) {
    (y = document.querySelector("#productTabMarker")),
      (b = document.querySelectorAll(".rr-product-tab button")),
      document.querySelector(".rr-product-tab .nav-link.active"),
      localStorage.getItem("rr_dir"),
      b.forEach((e) => {
        e.addEventListener("click", (e) => {
          var t;
          (t = e.target),
            (y.style.left = t.offsetLeft + "px"),
            (y.style.width = t.offsetWidth + "px");
        });
      }),
      (P = e(".nav-link.active")),
      (V = e(P).width()),
      (C = parseFloat(e(P).css("padding-left"))),
      (L = parseFloat(e(P).css("padding-right"))),
      (p = 0),
      e(".rr-product-tab button").each(function (t, i) {
        var s = e(i).hasClass("active");
        if (((y.style.left = i.offsetLeft + "px"), s)) return !1;
        (o = (l = e(i).find("button")).width()),
          (p += u =
            o +
            (d = parseFloat(l.css("padding-left"))) +
            (c = parseFloat(l.css("padding-right"))));
      }),
      e(y).css("display", "block"),
      e(y).css("width", V + C + L);
  }
  var S = !1;
  if (
    (e(".rr-video-toggle-btn").on("click", function () {
      !1 === S
        ? (e(".rr-slider-video").addClass("full-width"),
          e(this).addClass("hide"),
          (S = !0),
          e(".rr-slider-video")
            .find("video")
            .each(function () {
              e(this).get(0).play();
            }))
        : (e(".rr-slider-video").removeClass("full-width"),
          e(this).removeClass("hide"),
          (S = !1),
          e(".rr-slider-video")
            .find("video")
            .each(function () {
              e(this).get(0).pause();
            }));
    }),
    e("#password-show-toggle").length > 0 &&
      document
        .getElementById("password-show-toggle")
        .addEventListener("click", function (e) {
          var t = document.getElementById("rr_password"),
            i = document.getElementById("open-eye"),
            s = document.getElementById("close-eye");
          "password" === t.type
            ? ((t.type = "text"),
              (i.style.display = "block"),
              (s.style.display = "none"))
            : ((t.type = "password"),
              (i.style.display = "none"),
              (s.style.display = "block"));
        }),
    e(".rr-header-height").length > 0)
  ) {
    var E = document.querySelector(".rr-header-height"),
      T = E.offsetHeight;
    e(".rr-header-height").each(function () {
      e(this).css({ height: T + "px" });
    });
  }
  if (
    (void 0 !== e.fn.knob &&
      e(".knob").each(function () {
        var t = e(this),
          i = t.attr("data-rel");
        t.knob({
          draw: function () {
            e(this.i).val(this.cv + "%");
          },
        }),
          t.appear(
            function () {
              e({ value: 0 }).animate(
                { value: i },
                {
                  duration: 2e3,
                  easing: "swing",
                  step: function () {
                    t.val(Math.ceil(this.value)).trigger("change");
                  },
                }
              );
            },
            { accX: 0, accY: -150 }
          );
      }),
    e(".rr-main-menu-content").length && e(".rr-main-menu-mobile").length)
  ) {
    let q = document.querySelector(".rr-main-menu-content").outerHTML;
    document.querySelector(".rr-main-menu-mobile").innerHTML = q;
    e(".rr-main-menu-mobile .has-dropdown > a").each(function () {
      let t = e(this),
        i = document.createElement("BUTTON");
      i.classList.add("dropdown-toggle-btn"),
        (i.innerHTML = "<i class='fal fa-angle-right'></i>"),
        t.append(function () {
          return i;
        }),
        t.find("button").on("click", function (t) {
          t.preventDefault();
          let i = e(this);
          i.toggleClass("dropdown-opened"),
            i.parent().toggleClass("expanded"),
            i
              .parent()
              .parent()
              .addClass("dropdown-opened")
              .siblings()
              .removeClass("dropdown-opened"),
            i.parent().parent().children(".rr-submenu").slideToggle();
        });
    });
  }
  if (
    (e(".rr-feature-item").on("mouseenter", function () {
      e(this)
        .addClass("active")
        .parent()
        .siblings()
        .find(".rr-feature-item")
        .removeClass("active");
    }),
    e(".jarallax").length > 0 &&
      e(".jarallax").jarallax({ speed: 0.2, imgWidth: 1366, imgHeight: 768 }),
    x.on("scroll", function () {
      400 > x.scrollTop()
        ? e("#header-sticky").removeClass("header-sticky")
        : e("#header-sticky").addClass("header-sticky");
    }),
    e(".rr-header-height").length > 0)
  ) {
    var E = document.querySelector(".rr-header-height"),
      T = E.offsetHeight;
    e(".rr-header-height").each(function () {
      e(this).css({ height: T + "px" });
    });
  }
})(jQuery),
  document.addEventListener("DOMContentLoaded", function () {
    let e = document.querySelector(".nice-select"),
      t = e.querySelector(".current"),
      i = e.querySelectorAll(".option");
    i.forEach((e) => {
      e.addEventListener("click", function () {
        let e = this.textContent.trim(),
          s = this.querySelector("img").src;
        (t.innerHTML = `<img src="${s}" width="20" height="20" alt="${e}"> ${e}`),
          i.forEach((e) => e.classList.remove("selected", "focus")),
          this.classList.add("selected", "focus");
      });
    });
  }),
  document.addEventListener("DOMContentLoaded", function () {
    var e;
    let t = document.querySelector(".rr-header-2-lang select"),
      i = document.querySelector(".nice-select .current"),
      s = {
        tr: "T\xfcrk\xe7e",
        en: "English",
        ar: "العربية",
        ru: "Русский",
        de: "Deutsch",
        ka: "Georgian",
      },
      a = localStorage.getItem("selectedLanguage") || "tr";
    function r(e) {
      localStorage.setItem("selectedLanguage", e),
        "tr" === e
          ? (window.location.href = "/index.html")
          : (window.location.href = `/locales/${e}/index.html`);
    }
    function n(e) {
      return (
        {
          Türkçe: "tr",
          English: "en",
          Arabic: "ar",
          Russian: "ru", // "Russian" kelimesini "ru" dil koduna çevir
          Deutsch: "de", // 
          Georgian: "ka", // 
        }[e] || "tr"
      );
    }
    s[(e = a)] && ((i.textContent = s[e]), (t.value = e)),
      t.addEventListener("change", function () {
        let e = n(this.value);
        r(e);
      }),
      document.querySelectorAll(".nice-select .option").forEach((e) => {
        e.addEventListener("click", function () {
          let e = n(this.getAttribute("data-value"));
          r(e);
        });
      });
  }),
  document.addEventListener("DOMContentLoaded", function () {
    let e = localStorage.getItem("siteLanguage") || getCookie("siteLanguage");
    applyLanguage(e || detectUserLanguage()),
      document.querySelectorAll("[data-lang]").forEach((e) => {
        e.addEventListener("click", function () {
          applyLanguage(this.getAttribute("data-lang"));
        });
      });
  });
