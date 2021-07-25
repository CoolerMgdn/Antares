$('.parallelogram1').on('click', function(event) {
    $(this).toggleClass('parallelogram1Click');
    //change text when when button is clicked
    $(this).hasClass('parallelogram1Click') ?
        $(this).text('Лекция - это занятие длительностью до 1,5 часов, на котором даются теоретические знания по предмету ученикам всех групп (всему потоку). Семинар - это занятие длительностью до 1,5 часов, на котором ученики в группах до 20 человек учатся решать задачи.') :
        $(this).text('Что такое лекция и семинар и в чём их отличие?');
});

$('.parallelogram2').on('click', function(event) {
    $(this).toggleClass('parallelogram2Click');
    //change text when when button is clicked
    $(this).hasClass('parallelogram2Click') ?
        $(this).text('Потому что таким образом достигается высокий уровень объективности проверки, что, в свою очередь, стимулирует учеников в срок и качественно выполнять работы.') :
        $(this).text('Почему домашнее задание проверяется разными преподавателями?');
});

$('.parallelogram3').on('click', function(event) {
    $(this).toggleClass('parallelogram3Click');
    //change text when when button is clicked
    $(this).hasClass('parallelogram3Click') ?
        $(this).text('На семинарах ученики могут не только задать любой вопрос голосом и получить на него развёрнутый ответ, но и поучаствовать в дискуссии по теме занятия. Такой подход обеспечивает лучшее усвоение материала.') :
        $(this).text('Как именно ученики общаются с семинаристом на занятиях?');
});

$('.parallelogram4').on('click', function(event) {
    $(this).toggleClass('parallelogram4Click');
    //change text when when button is clicked
    $(this).hasClass('parallelogram4Click') ?
        $(this).text('Ответ4') :
        $(this).text('Как формируется рейтинг?');
});

$('.parallelogram5').on('click', function(event) {
    $(this).toggleClass('parallelogram5Click');
    //change text when when button is clicked
    $(this).hasClass('parallelogram5Click') ?
        $(this).text('Ответ5') :
        $(this).text('На какую скидку можно рассчитывать?');
});