<?php 
	class Conexao {
		
		public function __construct(){
			
		}
		
		public function exec_query($query,$token = null){
			$xml = simplexml_load_file("../xml/conexao.xml");
			$cn = new PDO("mysql:host=".$xml->host.";dbname=".$xml->database,$xml->user, $xml->password);
			$prepare = $cn->prepare($query);

			if (!$prepare->execute($token)) {
				print_r($prepare->errorInfo());
			} else {
				$result = $prepare->fetch(PDO::FETCH_ASSOC);
				return $result;
			}
			
		}
	}
?>