let currentSection = 2

$('.down-btn').click(function () {

    if (currentSection < 6) {
        currentSection++
        $('.current').text(currentSection - 1)
        $(`section:nth-child(${currentSection - 1})`).css("transform", "translateY(-100%)").css("z-index", 100)
        $(`section:nth-child(${currentSection})`).css("transform", "translateY(0)").css("z-index", currentSection * 100)
    }
})

$('.up-btn').click(function () {

    if (currentSection > 2) {
        currentSection--
        $('.current').text(currentSection - 1)
        $(`section:nth-child(${currentSection})`).css("transform", "translateY(0)").css("z-index", currentSection * 100)
        $(`section:nth-child(${currentSection + 1})`).css("transform", "translateY(100%)").css("z-index", 100)
    }
})