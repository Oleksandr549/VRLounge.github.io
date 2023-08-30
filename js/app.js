(() => {
  "use strict";
  let e = !1;
  setTimeout(() => {
    if (e) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    $(function () {
      if (null !== document.querySelector(".home_main")) {
        const e = document.querySelector(".header").offsetHeight + "px";
        document.querySelector(".home_main").style.paddingTop = e;
      }
      if (null !== document.querySelector(".header")) {
        const t = document.querySelector(".header");
        function o() {
          t.classList.add("is-active"), clearTimeout(o);
        }
        setTimeout(o, 700),
          setTimeout(() => {
            let e = new IntersectionObserver(
                function (e) {
                  e.forEach((e) => {
                    e.isIntersecting && e.target.classList.add("_active");
                  });
                },
                { threshold: [0.5] }
              ),
              t = document.querySelectorAll(".element-animation");
            for (let o of t) e.observe(o);
          }, 1500);
      }
      if (null !== document.querySelector(".element-animation2")) {
        function r(e) {
          e.forEach((e) => {
            e.isIntersecting
              ? e.target.classList.add("_active")
              : e.target.classList.remove("_active");
          });
        }
        let s = new IntersectionObserver(r, { threshold: [0.5] }),
          n = document.querySelectorAll(".element-animation2");
        for (let i of n) s.observe(i);
      }
      if (null !== document.querySelector(".burger_menu")) {
        const a = document.querySelector(".nav-container"),
          l = document.querySelector(".close");
        document
          .querySelector(".burger_menu")
          .addEventListener("click", function () {
            a.classList.toggle("is-active");
          }),
          l.addEventListener("click", function () {
            a.classList.remove("is-active");
          });
      }
      if (null !== document.querySelector(".mySwiperlevel")) {
        new Swiper(".mySwiperlevel", {
          direction: "vertical",
          speed: 1e3,
          loop: !0,
          pagination: { el: ".swiper-pagination", clickable: !0 },
          allowTouchMove: !1,
          autoplay: { delay: 5e3, disableOnInteraction: !1 },
        });
      }
      if (null !== document.querySelector(".circle-container")) {
        function c(e) {
          e.forEach((e) => {
            e.isIntersecting && (e.target.classList.add("active"), m());
          });
        }
        let u = new IntersectionObserver(c, { threshold: [0.6] }),
          d = document.querySelectorAll(".circle-animation");
        for (let h of d) u.observe(h);
        function m() {
          document.querySelectorAll(".circle-container").forEach((e) => {
            if (e.classList.contains("active")) {
              const t = 36,
                o = 150,
                r = (2 * Math.PI) / t;
              for (let s = 0; s < t; s++) {
                const t = document.createElement("div");
                (t.className = "stripe"),
                  (t.style.transform = `rotate(${
                    r * s - Math.PI / 2
                  }rad) translate(${o}px) rotate(${Math.PI / 2}rad)`),
                  e.appendChild(t),
                  setTimeout(function () {
                    t.style.opacity = 1;
                  }, 50 * (s + 1)),
                  ((e) => 36) &&
                    setTimeout(function () {
                      e.querySelector(".text").style.opacity = 1;
                    }, 1500);
              }
            }
          });
        }
      }
      if (
        (null !== document.querySelector(".spoiler-trigger") &&
          $(document).on("click", ".spoiler-trigger", function (e) {
            e.preventDefault(),
              $(this).toggleClass("active"),
              $(this).parent().find(".spoiler-block").first().slideToggle(300);
          }),
        null !== document.querySelector(".background") &&
          Particles.init({
            selector: ".background",
            color: ["#09cfff", "#d02ef0"],
            maxParticles: 50,
            sizeVariations: 5,
            speed: 0.8,
            connectParticles: !0,
          }),
        null !== document.querySelector(".card-section"))
      ) {
        (Vue.config.devtools = !0),
          Vue.component("card", {
            template:
              '\n    <div class="card-wrap"\n      @mousemove="handleMouseMove"\n      @mouseenter="handleMouseEnter"\n      @mouseleave="handleMouseLeave"\n      ref="card">\n      <div class="card"\n        :style="cardStyle">\n        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>\n        <div class="card-info">\n          <slot name="header"></slot>\n          <slot name="content"></slot>\n        </div>\n      </div>\n    </div>',
            mounted() {
              (this.width = this.$refs.card.offsetWidth),
                (this.height = this.$refs.card.offsetHeight);
            },
            props: ["dataImage"],
            data: () => ({
              width: 0,
              height: 0,
              mouseX: 0,
              mouseY: 0,
              mouseLeaveDelay: null,
            }),
            computed: {
              mousePX() {
                return this.mouseX / this.width;
              },
              mousePY() {
                return this.mouseY / this.height;
              },
              cardStyle() {
                return {
                  transform: `rotateY(${30 * this.mousePX}deg) rotateX(${
                    -30 * this.mousePY
                  }deg)`,
                };
              },
              cardBgTransform() {
                return {
                  transform: `translateX(${-40 * this.mousePX}px) translateY(${
                    -40 * this.mousePY
                  }px)`,
                };
              },
              cardBgImage() {
                return { backgroundImage: `url(${this.dataImage})` };
              },
            },
            methods: {
              handleMouseMove(e) {
                (this.mouseX =
                  e.pageX - this.$refs.card.offsetLeft - this.width / 2),
                  (this.mouseY =
                    e.pageY - this.$refs.card.offsetTop - this.height / 2);
              },
              handleMouseEnter() {
                clearTimeout(this.mouseLeaveDelay);
              },
              handleMouseLeave() {
                this.mouseLeaveDelay = setTimeout(() => {
                  (this.mouseX = 0), (this.mouseY = 0);
                }, 1e3);
              },
            },
          });
        new Vue({ el: "#cards" });
      }
      if (null !== document.querySelector(".mySwiper")) {
        new Swiper(".mySwiper", {
          spaceBetween: 0,
          effect: "slide",
          speed: 1e4,
          simulateTouch: !0,
          autoplay: { delay: 0, disableOnInteraction: !1 },
          allowTouchMove: !1,
          loop: !0,
          loopedSlides: 1,
          rewind: !0,
          breakpoints: {
            10: { slidesPerView: 1.5 },
            390: { slidesPerView: 2.2 },
            768: { slidesPerView: 3.6 },
            1268: { slidesPerView: 5 },
            1600: { slidesPerView: 6 },
          },
        });
      }
    });
})();
