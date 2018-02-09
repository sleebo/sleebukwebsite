
$(function() {
    $( ".circle-draggable" ).draggable();
    $( ".circle-droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "circle-dropped" )
          .find( "p" )
            .html( "Dropped!" );   }
    });
  });