$(".to-pack-button").click(function() {
	var pack=$(".to-pack-input").val();
    console.log(pack);
    $(".packing-list").append("<p>"+"I'm going to pack " + pack + "</p>");

});

$(".class-button").click(function() {
	var classes=$(".class-input").val();
    console.log(classes);
    $(".course-list").append("<p>"+"I'm going to attend " + classes + " class"+"</p>");

});