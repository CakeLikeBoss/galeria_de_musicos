index = {
	start:function(){
		index.menuAnimation();
		index.validarCampo("#nome","^[à-úÀ-Úa-zA-Z]{1,}[à-úÀ-Úa-zA-Z ]{1,49}$");
		index.validarCampo("#ddd","^([0-9]{1,2}|)$");
		index.validarCampo("#telefone","^([0-9]{4,5}[-]{1}[0-9]{4}|)$");
		index.validarCampo("#dia","^(([0-2]{1}[0-9]{1}|[3]{1}[0-1]{1})|)$");
		index.validarCampo("#mes","^(([0]{1}[0-9]{1}|[1]{1}[0-2]{1})|)$");
		index.validarCampo("#ano","^([1-2]{1}[90]{1}[0-9]{2}|)$");
		index.validarCampo("#observacao","^[à-úÀ-Úa-zA-Z0-9 \n]{0,255}$");
		index.validarSelect("#situacao");
		index.validarSelect("#instrumento");
		index.validarSelect("#condicao");
		index.validarSelect("#regiao");
		setInterval(function(){
			index.validarForm("#submit-musico");
		}, 100);
		$("#musico-form").submit(function(){
			index.submitForm("#musico-form","./php/controller.conexao.php");
			return false;
		});
	},
	menuAnimation:function(){
		$("#novo").click(function(){
			$("section").fadeOut(300);
			setTimeout(function(){
				$("#titulo").html("Novo");
				$("#musico-container, #titulo-container").fadeIn("slow");
			},300);
		});
		$("#consultar").click(function(){
			$("section").fadeOut(300);
			setTimeout(function(){
				$("#titulo").html("Consulta");
				$("#consulta-container, #titulo-container").fadeIn("slow");
			},300);
		});
		$("#relatorios").click(function(){
			$("section").fadeOut(300);
			setTimeout(function(){
				$("#titulo").html("Relatórios");
				$("#relatorios-container, #titulo-container").fadeIn("slow");
			},300);
		});
	},
	validarCampo:function(elemento,expressao){
		$(elemento).keyup(function(){
			var val = $(elemento).val();
			var re = new RegExp(expressao);
			if (val.match(re)) {
				$(elemento).removeClass("invalid");
				return true;
			} else {
				$(elemento).addClass("invalid");
				return false;
			}
		});
		$(elemento).keyup();
	},
	validarSelect:function(elemento){
		$(elemento).change(function(){
			var valor = $(elemento).val()
			if (valor === 0 || valor === null) {
				$(elemento).addClass("invalid");
			} else {
				$(elemento).removeClass("invalid");
			}
		});
		$(elemento).change();
	},
	validarForm:function(refSubmit){
		if ($(".invalid").length > 0) {
			$(refSubmit).addClass("bt-disabled");
			$(refSubmit).attr("disabled","disabled");
		} else {
			$(refSubmit).removeClass("bt-disabled");
			$(refSubmit).removeAttr("disabled","disabled");
		}
	},
	resetarCampos:function(campos){
		for(i=0; i < campos.length; i++){
			$(campos[i]).val("");
		}
	},
	submitForm: function(elemento,referencia){
		$.ajax({
			url: referencia,
			data: $(elemento).serialize(),
			type:"POST",
			datatype:"JSON",
			success: function(html){
				console.log(html);
			},
			error: function(html){
				console.log({
					status:"error",
					referencia: [elemento,referencia]
				});
			}
		});
	}
}