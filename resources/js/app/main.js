define(['jquery', 'bootstrap', 'typeahead'], function () {
    $("#sign").on('click', function () {
        alert("signclick");
    $('#email-sign').typeahead({
        hint: true,
        minLength: 0,
        highlight: true
        },
        {
    name: 'my-dataset',
    source: ["cake", "pie", "lemonade"]
        });
    });
})