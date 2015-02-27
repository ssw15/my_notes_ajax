// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require turbolinks
//= require private_pub
//= require_tree .

// Write jQuery to make notes draggable
//  - Use the 'clone' helper, so the original stays in place

$(function() {
  $('.note').draggable({
    helper: 'clone'
  });

  // Step 1: Make the trash area pop up an alert when something is dropped on it

  $('#trash').droppable({
    drop: function(event, ui) {
      // alert(ui.draggable.data('note-id'));
      $.ajax({
        url: '/notes/' + ui.draggable.data('note-id'),
        type: 'DELETE',
        dataType: 'script'
      })
    }
  });

  // Step 2: Make the alert contain the ID number of the item that was dropped
});










