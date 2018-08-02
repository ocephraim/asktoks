var $form = $('form#test-form'),
url = 'https://script.google.com/macros/s/AKfycbxIQfsIWGpLYgPl5lDIb3MqxoZYFRzRnr3At8Zn/exec'

$('#submit-form').on('click', function(e) {
e.preventDefault();
var jqxhr = $.ajax({
url: url,
method: "GET",
dataType: "json",
data: $form.serializeObject()
}).success(
// do something
);
})