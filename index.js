$(document).ready(function(){
    $(".txt_title").fadeIn(5000);
    $(".ui_1").fadeIn(5000);
    $(".main_txt").fadeIn(5000);
    $(".select_1").fadeIn(5000);
    $(".select_2").fadeIn(5000);
    $(".wuwei").fadeIn(3000);
    $("#ww_nav").mouseenter(
        function(){
            $(".left_txt").css("color","black",);
        }
    )
    $("#ww_nav").mouseleave(
        function(){
            $(".left_txt").css("color","rgb(227, 221, 221)",);
        }
    )
    $(".right_txt").mouseenter(
        function(){
            $(this).css("color","black",);
        }
    )
    $(".right_txt").mouseleave(
        function(){
            $(this).css("color","rgb(227, 221, 221)",);
        }
    )
    $(".right_txt").click(function (e) { 
        alert("written by chenyifan")
        
    });
    $(".main").mouseenter(function () { 
        $(this).animate({
            left:'10px'
        });
        $(this).addClass("main_enter");
        $(".wuwei").animate({
            left:'55%',
            opacity:'.95'
        });
    });
    $(".main").mouseleave(function () { 
        $(this).animate({
            left:'-10px'
        })
        $(this).removeClass("main_enter");
        $(".wuwei").animate({
            left:'65%',
            opacity:'.30'
        });
        $(".chn_txt").css("display","none");
        $('.select_1').removeClass("no_select");
        $(".select_2").addClass("no_select");
        $(".main_txt").css("color", "red");
        $(".main").css("background-color", "rgb(241, 240, 240)");
        $(".eng_txt").fadeIn(3000);
        $("#select").animate({
            'left':'0px'
        });
        $("#main_title").animate({
            'left':'0px'
        });
        $(".wuwei").removeClass("wuwei_right");
        $(".wuwei").animate({
            'top':'30px',
            'left':'65%'
        })
    });
    $(".select_1").click(function () { 
        $(".chn_txt").css("display","none");
        $(this).removeClass("no_select");
        $(".select_2").addClass("no_select");
        $(".main_txt").css("color", "red");
        $(".main").css("background-color", "rgb(241, 240, 240)");
        $(".eng_txt").fadeIn(3000);
        $("#select").animate({
            'left':'0px'
        });
        $("#main_title").animate({
            'left':'0px'
        });
        $(".wuwei").removeClass("wuwei_right");
        $(".wuwei").animate({
            'top':'30px',
            'left':'55%'
        })
    });
    $(".select_2").click(function () { 
        $(".eng_txt").css("display","none");
        $(this).removeClass("no_select");
        $(".select_1").addClass("no_select");
        $(".main_txt").css("color", "rgb(241, 240, 240)");
        $(".main").css("background-color", "rgb(128, 175, 245)");
        $(".chn_txt").fadeIn(3000);
        $("#select").animate({
            'left':'305px'
        });
        $("#main_title").animate({
            'left':'380px'
        });
        $(".wuwei").addClass("wuwei_right");
        $(".wuwei").animate({
            'top':'0px',
            'left':'100px'
        });
    });
})