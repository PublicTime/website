!function(c){c(function(){c(".connect__input").focus(function(){c(c(this).siblings("label")[0]).addClass("connect__label--focused")}),c("#connect-submit").click(function(){var e=c("#connect-email").val(),s=c("#connect-form");if(""!==e&&/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(e)){c.ajax({url:"https://script.google.com/macros/s/AKfycbxKkfd0ksCsUAfrp9-a5aq06eH19AuWffjbDUX7tFKP21gtfBA/exec",method:"GET",dataType:"json",data:s.serializeObject()}).success(function(){});c(".connect__success").text("Thanks for subscribing!"),c(".connect__success").removeClass("hide"),c("#connect-name").val(""),c("#connect-email").val("")}else c(".connect__success").text("Please enter a valid email address!"),c(".connect__success").removeClass("hide")}),c.fn.serializeObject=function(){var e={},s=this.serializeArray();return c.each(s,function(){e[this.name]?(e[this.name].push||(e[this.name]=[e[this.name]]),e[this.name].push(this.value||"")):e[this.name]=this.value||""}),e}})}(jQuery);