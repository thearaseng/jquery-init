$('#btn-test').click(function(){
  $.getJSON('https://jsonplaceholder.typicode.com/users', function(data){
    console.log(data);
  })
})