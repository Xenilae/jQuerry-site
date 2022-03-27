$(document).ready(function() {

    $(window).on("scroll", function() {
        $(".top_text").css("opacity", 1 - $(window).scrollTop() / 500);
    });

    $("button").on("click", function() {
        $('html, body').animate({
            scrollTop: $(".row").offset().top
        }, 200);
    });

    const changeImage = () => {
        let changeSpecs = $("input[name=bike]:checked");
        changeSpecs.on("change", function() {
            if (this.value == "21900") {
                $("#bike_img").attr("src", "img/MY21Revolt2_ColorBTrekkingGreen.jpg");
            } else if (this.value == "20500") {
                $("#bike_img").attr("src", "img/MY21Talon1_ColorABlack.jpg")
            }
        });
    }

    let modelSpecs,
        modelPrice,
        modelSpecsHolder,
        modelPriceHolder;

    modelSpecsHolder = $("#modelSpecs");
    modelPriceHolder = $("#modelPrice");

    modelPrice = 0;
    modelSpecs = "";

    const calculatePrice = () => {
        let modelPriceType = $("input[name=bike]:checked", "#autoForm").val();
        let modelPriceEngine = $("input[name=engine]:checked", "#autoForm").val();
        let modelPriceTransmission = $("input[name=transmission]:checked", "#autoForm").val();
        let modelPricePackage = $("input[name=package]:checked", "#autoForm").val();

        modelPriceType = parseInt(modelPriceType);
        modelPriceEngine = parseInt(modelPriceEngine);
        modelPriceTransmission = parseInt(modelPriceTransmission);
        modelPricePackage = parseInt(modelPricePackage);

        modelPrice = modelPriceType + modelPriceEngine + modelPriceTransmission + modelPricePackage;

        modelPriceHolder.text(modelPrice + " lei");
    };

    const compileSpecs = () => {
        modelSpecs = $("input[name=engine]:checked + label", "#autoForm").text();
        modelSpecs = modelSpecs + ", " + $("input[name=transmission]:checked + label", "#autoForm").text();
        modelSpecs = modelSpecs + ", " + $("input[name=package]:checked + label", "#autoForm").text();
        modelSpecsHolder.text(modelSpecs);
    };

    $("#autoForm input").on("change", function() {
        calculatePrice();
        compileSpecs();
        changeImage();
    });
});