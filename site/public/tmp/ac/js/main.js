$(function(){function a(a){a.forEach(function(a){var b=$(a.el)[0].getBoundingClientRect().top+a.ot;0>b?$(a.el).addClass("animated "+a.cn):$(a.el).removeClass(a.cn)})}var b,c=[{el:"h1",cn:"bounce",ot:-200},{el:".girl-img",cn:"pulse",ot:-100},{el:".about-info-sns",cn:"tada",ot:-630}];$(window).on("scroll",function(){clearTimeout(b),b=setTimeout(function(){a(c)},50)}),$("#apply-form").on("submit",function(a){var b=this;a.preventDefault();var c=$(b).find('button[type="submit"]'),d=c.text();c.prop("disabled",!0),c.text("提交中...");var e=$(this).serialize(),f=$(this).attr("action");$.post(f,e,function(a){0===a.retcode?($("#alloy-modal").modal("hide"),alert(a.msg)):alert(a.msg)}).done(function(){$(c).prop("disabled",!1),$(c).text(d)})})});