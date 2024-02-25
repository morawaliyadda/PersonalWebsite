
const sr = ScrollReveal({
    reset: true,
});


sr.reveal(".soft-skill-box, .hard-skill-box , .info h3", {
    origin: "left",
    distance: "100px",
    duration: 2000,
    delay: 100 ,
});

sr.reveal(".education-box", {
    origin: "right",
    distance: "100px",
    duration: 2000,
    delay: 150, 
    interval: 200, 

});


