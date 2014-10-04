<?php 

	require_once './class.conexao.php';
	
	if (empty($_POST['dia'])) {
		$dt_nascimento = "null";
	} else {
		$dt_nascimento = "'".$_POST['dia']."-".$_POST['mes']."-".$_POST['ano']."',";
	}
	
	$conexao = new Conexao();
	$result = $conexao->exec_query("
			INSERT INTO `tb_musicos`(
				`nm_musico`,
				`cd_situacao`,
				`nm_instrumento`,
				`cd_telefone`,
				`dt_nascimento`,
				`cd_condicao`,
				`cd_regiao`,
				`ds_observacao`
			) VALUES (
				'{$_POST['nome']}',
				'{$_POST['situacao']}',
    			'{$_POST['instrumento']}',
    			'".$_POST['ddd']." ".$_POST['telefone']."',
    			$dt_nascimento,
    			'{$_POST['condicao']}',
    			'{$_POST['regiao']}',
    			'{$_POST['observacao']}')"
	);
	echo json_encode($result);
?>