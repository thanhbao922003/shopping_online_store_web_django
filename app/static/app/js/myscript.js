 $('#slider1, #slider2, #slider3').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    responsive: {
        0: {
                items: 2,
                nav: false,
                autoplay: true
            },
        600: {
                items: 4,
                nav: true,
                autoplay: true
            },
        1000: {
                items: 6,
                nav: true,
                loop: true,
                autoplay: true
            }
        }
    });


$('.plus-cart').click(function() {
    var id = $(this).attr("pid").toString();
    var eml = $(this).closest(".cart-item").find(".quantity");
    $.ajax({
        type: "GET",
        url: "/pluscart/",
        data: {
            prod_id: id
        },
        success: function(data) {
            eml.text(data.quantity);
            $("#amount").text(data.amount);
            $("#totalamount").text(data.totalamount);
        }
    });
});

$('.minus-cart').click(function() {
    var id = $(this).attr("pid").toString();
    var eml = $(this).closest(".cart-item").find(".quantity");
    $.ajax({
        type: "GET",
        url: "/minuscart/",
        data: {
            prod_id: id
        },
        success: function(data) {
            eml.text(data.quantity);
            $("#amount").text(data.amount);
            $("#totalamount").text(data.totalamount);
        }
    });
});

$('.remove-cart').click(function() {
    var id = $(this).attr("pid").toString();
    var eml = $(this).closest(".cart-item");
    $.ajax({
        type: "GET",
        url: "/removecart/",
        data: {
            prod_id: id
        },
        success: function(data) {
            $("#amount").text(data.amount);
            $("#totalamount").text(data.totalamount);
            eml.remove();
        }
    });
});

$('.plus-wishlist').click(function() {
    var id = $(this).attr("pid").toString();
    $.ajax({
        type: "GET",
        url: "/pluswishlist/",
        data: {
            prod_id: id
        },
        success: function(data) {
            window.location.href = "/product-detail/" + id;
        }
    });
});

$('.minus-wishlist').click(function() {
    var id = $(this).attr("pid").toString();
    $.ajax({
        type: "GET",
        url: "/minuswishlist/",
        data: {
            prod_id: id
        },
        success: function(data) {
            window.location.href = "/product-detail/" + id;
        }
    });
});
