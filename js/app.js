let currentSection = 2

$('.down-btn').click(function () {
    $('.up-btn').css('display', 'block')
    if (currentSection < 6) {
        currentSection++
        $('.current').text(currentSection - 1)
        $(`section:nth-child(${currentSection - 1})`).css("transform", "translateY(-100%)").css("z-index", 100)
        $(`section:nth-child(${currentSection})`).css("transform", "translateY(0)").css("z-index", currentSection * 100)
    }

    if (currentSection === 3) {
        $('video').removeAttr("autoplay")
        $('#video1').attr("autoplay", "true")
    }
    if (currentSection === 4) {
        $('video').removeAttr("autoplay")
        $('#video2').attr("autoplay", "true")
    }
    if (currentSection === 5) {
        $('video').removeAttr("autoplay")
        $('#video3').attr("autoplay", "true")
    }
    if (currentSection === 6) {
        $('video').removeAttr("autoplay")
        $('#video4').attr("autoplay", "true")
    }


    if (currentSection == 6) {
        $('.down-btn').css('display', 'none')
    }
})

$('.up-btn').click(function () {
    $('.down-btn').css('display', 'block')
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

    if (currentSection === 3) {
        $('video').removeAttr("autoplay")
        $('#video1').attr("autoplay", "true")
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