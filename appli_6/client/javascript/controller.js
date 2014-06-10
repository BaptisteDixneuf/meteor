var perso={ 
	nom:"toto", 
	prenom:"titi", 
	age:15 
} 
Template.monTemplate.helpers({ 
	monPerso:function(){ 
		return perso; 
	} 
});
