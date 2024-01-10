let currentSection = 2

$('.down-btn').click(function () {
    $('.up-btn').css('display', 'block')
    if (currentSection < 6) {
        currentSection++
        $('.current').text(currentSection - 1)
        $(`section:nth-child(${currentSection - 1})`).css("transform", "translateY(-100%)").css("z-index", 100)
        $(`section:nth-child(${currentSection})`).css("transform", "translateY(0)").css("z-index", currentSection * 100)
    }

    if (currentSection == 6) {
        $('.down-btn').css('display', 'none')
    }
})

$('.up-btn').click(function () {

    if (currentSection > 2) {
        $('.up-btn').css('display', 'block')
        currentSection--
        $('.current').text(currentSection - 1)
        $(`section:nth-child(${currentSection})`).css("transform", "translateY(0)").css("z-index", currentSection * 100)
        $(`section:nth-child(${currentSection + 1})`).css("transform", "translateY(100%)").css("z-index", 100)
    }

    if (currentSection === 2) {
        $('.up-btn').css('display', 'none')
    }

})


$('.more-btn').click(function () {
    $('.a3').css("transform", "translateX(-100%)")
    $('.b3').css("transform", "translateX(0)")
})
$('.back-btn').click(function () {
    $('.a3').css("transform", "translateX(0)")
    $('.b3').css("transform", "translateX(100%)")
})