
$(document).ready(start);
$(document).ready(games_fnc);
$(document).ready(games_uol);
$(document).ready(games_g2);
$(document).ready(games_tsm);
$(document).ready(games_p1);
$(document).ready(games_c9);
$(document).ready(players);
$(document).ready(info_eu);
$(document).ready(info_na);

function start (){
  $(".vs").hide();
  $(".info").hide();
//  $(".players").hide(;
}

function games_fnc (){
  $(".icon_vs_fnc").click(function(){
    $(".vs_fnc").toggle(1000);
  });
}

function games_uol (){
  $(".icon_vs_uol").click(function(){
    $(".vs_uol").toggle(1000);
  });
}

function games_g2 (){
  $(".icon_vs_g2").click(function(){
    $(".vs_g2").toggle(1000);
  });
}
function games_tsm (){
  $(".icon_vs_tsm").click(function(){
    $(".vs_tsm").toggle(1000);
  });
}
function games_p1 (){
  $(".icon_vs_p1").click(function(){
    $(".vs_p1").toggle(1000);
  });
}
function games_c9 (){
  $(".icon_vs_c9").click(function(){
    $(".vs_c9").toggle(1000);
  });
}

function players(){
  $(".icon_players").click(function(){
    $(this).parent().siblings(".players").toggleClass(".fadeIn fadeOut")
 //$(".logoDiv").siblings().toggleClass(".fadeIn fadeOut")
  //  $(".players").toggleClass(".fadeIn fadeOut")
  })
}

function info_eu(){
  $(".icon_info_eu").click(function(){
    $(".info_eu").toggle(0);
  });
}
function info_na(){
  $(".icon_info_na").click(function(){
    $(".info_na").toggle(0);
  });
}
