const section1_tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#section1",
    start: "top top",
    end: "+=1000vh",
    scrub: 1,
  },
});
section1_tl.to("header h1", { width: "180px", top: "7px", duration: 3 });
section1_tl.to("#section1 .bottom-text .en", { opacity: 0, duration: 1 }, "<");
section1_tl.to("#section1 .bottom-text .line", { width: 0, duration: 2 }, "<");
section1_tl.to("#section1 .bottom-text > p", { opacity: 0, duration: 3 }, "<");
section1_tl.to("#mainBox .front", { opacity: 0, duration: 3, delay: 1 }, "<");
const section1_tl_2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#section1",
    start: "+=900vh",
    end: "+=2500vh",
    scrub: 1,
  },
});
section1_tl_2.to("#mainBox .imgWrap", { width: "80vw", duration: 3 });
section1_tl_2.to("#mainBox .back", { scale: 1.05, duration: 1 }, "-=1");

const main_scroll_tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#section1",
    start: "top top",
    end: "+=3000vh",
    pin: true,
    scrub: 1,
  },
});
main_scroll_tl.to("#section1 .wrap", { y: "-104vh" });
main_scroll_tl.to("#mainBox", { y: "104vh" }, "<");
main_scroll_tl.fromTo(
  "#section1 .global p",
  { opacity: 0, y: 100 },
  { opacity: 1, y: 0 }
);

if (matchMedia("screen and (min-width: 1080px)").matches) {
  const section2_tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#section2",
      start: "top top",
      end: "+=4000px",
      pin: true,
      scrub: 2,
      ease: "ease-in-out",
    },
  });
  const List = gsap.utils.toArray("#section2 article.event");
  List.forEach((item, i) => {
    section2_tl.to(
      item,
      {
        height: "200px",
        duration: 4,
      },
      "-=2"
    );
    section2_tl.to(
      "#section2 > .wrap",
      { translateY: `-${(i + 1) * 200}px`, duration: 4 },
      "-=1"
    );
  });
}

const section3_tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#section3",
    start: "top bottom",
    end: "bottom bottom",
    ease: "linear",
  },
});
section3_tl.fromTo(
  "#section3 .infoBox:first-child",
  { width: "0%" },
  { width: "49%", duration: 0.3 }
);
section3_tl.fromTo(
  "#section3 .infoBox:last-child",
  { width: "0%" },
  { width: "49%", duration: 0.3 }
);
section3_tl.fromTo(
  "#section3 .infoBox:first-child .line",
  { width: "0%" },
  { width: "100%", duration: 0.3 }
);
section3_tl.fromTo(
  "#section3 .infoBox:last-child .line",
  { width: "0%" },
  { width: "100%", duration: 0.3 }
);
section3_tl.fromTo(
  "#section3 .infoBox h3",
  { opacity: 0 },
  { opacity: 1, duration: 0.6 }
);
section3_tl.fromTo(
  "#section3 .infoBox p",
  { opacity: 0 },
  { opacity: 1, duration: 0.6 }
);

const section3_project_tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#section3 .project",
    start: "top 70%",
    end: "bottom bottom",
    ease: "linear",
  },
});
const slides = gsap.utils.toArray(".showRoom .swiper-slide");
slides.forEach((item) => {
  section3_project_tl.fromTo(item, { y: 100 }, { y: 0 }, "-=.6");
  section3_project_tl.fromTo(
    item,
    { opacity: 0 },
    { opacity: 1, duration: 1 },
    "<"
  );
});

const section3_showroom_tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#section3 .showroom",
    start: "top center",
    end: "bottom bottom",
    ease: "linear",
  },
});
section3_showroom_tl.to("#section3 .panorama", { width: "100%" });
section3_showroom_tl.to("#section3 .black", { width: "0%" });
section3_showroom_tl.to("#section3 .text-area .no1 .line", { width: "100%" });
section3_showroom_tl.to(
  "#section3 .text-area .no2 .line",
  { width: "100%" },
  "-=.5"
);
section3_showroom_tl.to("#section3 .text-area .text", {
  opacity: 1,
  duration: 1,
});
