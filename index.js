// $('.nav-item a').each().on("mouseover", function(){
//     self.addClass("active");

// });


// function limpiarBotones(boton) {
//     $('.nav-item a').each(function () {
//         if ($(this) != boton) {
//             $(this).removeClass("bg-success text-white");
//         }
//     });
// }

$('.nav-item a').each(function () {
    $(this).on("mouseover", function () {
        $(this).addClass("active");
    });
    $(this).on("mouseleave", function () {
        $(this).removeClass("active");
    });
    $(this).on("click", function () {
        $(this).addClass("bg-success text-white");
    });

});

//Evento mouselive

