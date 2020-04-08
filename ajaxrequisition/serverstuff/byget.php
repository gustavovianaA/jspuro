<?php  
function computeTable($n){
	for($i = 1 ; $i <= 10 ; $i++){
		$aux = $i*$n; 
		echo "$n x $i = $aux<br>"; 
	}		
} 
if(isset($_GET['n'])){
	$n = $_GET['n'];
	if($n > 0 && $n <=100)
		computeTable($n);
	else
		echo "mínimo 1, máximo 100"; 	
} 
?>