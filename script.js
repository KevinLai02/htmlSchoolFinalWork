let num = Math.floor(Math.random() * 2);
let coverPicNum = Math.floor(Math.random() * 3 + 1);
    
    if (num == 0) {
        function method(str) {
            $('.cover').width(str)
        }
    } else {
        function method(str) {
            $('.cover').height(str)
        }
    }
    
    $(function () {
        setTimeout(function(){
            method('0');
        },300)
        
        if(coverPicNum == 1){
            $('.cover').attr('src',$('.cover').attr('src')+'stage.png')
        } else if (coverPicNum == 2){
            $('.cover').attr('src',$('.cover').attr('src')+'stage2.png')
        } else {
            $('.cover').attr('src',$('.cover').attr('src')+'fireworker1.jpeg')
        }
    })

    $('#mynav').click(
        function () {
            method('100%')
        }
            
    )

    $('.home').click(
        function() {
            setTimeout(function () {
                $('.homeTag')[0].click();
            }, 2000)
        }
    )

    $('.one').click(
        function() {
            setTimeout(function () {
                $('.dayOneTag')[0].click();
            }, 2000)
        }
    )    
    
    $('.two').click(
        function() {
            setTimeout(function () {
                $('.dayTwoTag')[0].click();
            }, 2000)
        }
    )

    $('.three').click(
        function() {
            setTimeout(function () {
                $('.loveSingerTag')[0].click();
            }, 2000)
        }
    )

    $('.four').click(
        function() {
            setTimeout(function () {
                $('.joinTag')[0].click();
            }, 2000)
        }
    )
