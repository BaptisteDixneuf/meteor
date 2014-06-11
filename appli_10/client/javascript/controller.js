Template.formulaire.events({ 
	'submit #monFormulaire': function(e){ 
		e.preventDefault(); 
		nomUser=$('#nom').val(); 
		prenomUser=$('#prenom').val(); 
		$('#nom').val(''); 
		$('#prenom').val(''); 
		$('#info').append('<p>Bonjour '+prenomUser+' '+nomUser+'</p>') 
	} 
})
