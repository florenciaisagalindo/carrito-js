$(document).ready(function () {
  
 const modal = $("#modal");
 const verMas = $("#verMas");
 const closeModal = $(".modalClose")

 verMas.click(function(){
     modal.show()
 })
 closeModal.click(function(){
     modal.hide()
 })

});