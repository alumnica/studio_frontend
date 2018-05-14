// $('document').ready(function(){
        
//     $('#img-jplist').jplist({				
//         itemsBox: '#box-jplist', 
//         itemPath: '.img-box', 
//         panelPath: '.jplist-panel'	
//     });  
    
// });



// <!-- Example of JavaScript options for PHP server side -->

$('document').ready(function(){
   $('#demo').jplist({
   
      itemsBox: '.list' 
      ,itemPath: '.list-item' 
      ,panelPath: '.jplist-panel'
      
      //data source
      ,dataSource: {
         
         type: 'server'
         ,server: {
         
            //jQuery ajax settings
            ajax:{
              url: 'server.php'
              ,dataType: 'html'
              ,type: 'POST'
            }
            
       }
   });
});
