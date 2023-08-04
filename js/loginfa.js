
$(document).ready(function(){
  
   $('.slider').slider();
    var db = firebase.database();
    var anexosRef = db.ref('anexos');
    
    anexosRef.on('value',showData,showError);


    function showData(items){
    	console.log(items.val());
    }
    function showError(err){
    	console.log(err);
    }

    anexosRef.orderByChild('name').on('value',showData1,showError1);

    function showData1(items){
      var _select = $('<select>');
      var _content = '';
         
      items.forEach(function(child){
      	console.log(child.val().code);
      	console.log(child.val().name);
      	_select.append($('<option></option>').val(child.val().code).text(child.val().name));
      }) 

      $('#selectCity').append(_select.html());
      var strx = $('#selectCity option:selected').text();
     // alert(strx);
    }

    function showError1(err){
    	console.log(err);
    }

    //   var  strx = $('option:selected',this).text();
    //  alert(strx); 				      // $( "#div2" ).text( strx );
	$('#selectCity').change(function(){
		 
	   strx = $('option:selected',this).text();
		// alert(strx); 
		// console.log(strx);
	});

    
	
 	function clickgo(event){
		var strx = $('#selectCity option:selected').text();	
 	    var db = firebase.database();
        var asignado = strx;
        db.ref('tipos').push({
		      asignado:asignado
        });
        //textarea.value = '';
    // Set Item
    localStorage.setItem("asignado", asignado);

		window.location.href = 'portal.html';
    }
        
    $('#btn-facebook').on('click', clickgo);
    

});




  

    
      
    


