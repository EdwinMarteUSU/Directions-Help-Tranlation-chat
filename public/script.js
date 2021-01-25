// client-side js, loaded by index.html
// run by the browser each time the page is loaded

console.log("hello world :o");

//variable to store user input
var user1_in=''

//Specifies the language of the input text. 
var lang_from = 'fr';

//Specifies the language of the output text. 
var lang_to= 'es'


//Specifies the language of the input text. 
var right_lg = 'en';

//Specifies the language of the output text. 
var left_lg = 'es'



// Change lenguage from requester
function ChangeSelect() {
  var x = document.getElementById("scripts").value;
 // document.getElementById("demo").innerHTML = "You selected: " + x;
       right_lg =  x;
      lang_from =x;
     
}

//Change Lenguage from helper
function ChangeSelect2() {
  var x = document.getElementById("scripts2").value;
 // document.getElementById("demo1").innerHTML = "You selected: " + x;
   left_lg =  x;
      lang_to =x;
}

// event to capture send button click
$('.send_message').click(function(e) {
  user1_in = $('.message_input').val();
  $('.message_input').val('');
  console.log("user1_in:", user1_in);
  AddtoChat(user1_in,'left');
  lang_from =right_lg;
     lang_to= left_lg;
     
  fetch("/translate?user_in="+ user1_in +"&lang_from="+lang_from+"&lang_to="+lang_to)
  .then(response=> {
    response.json().then(function(data) {
      console.log(data[0]['translations'][0].text);
      AddtoChatr(data[0]['translations'][0].text,'left');
    });
  });
});





// event to capture Enter button 
$('.message_input').keyup(function(e) {
  if (e.which === 13) {
    user1_in = $('.message_input').val();
    $('.message_input').val('');
    console.log("user1_in:", user1_in);
    AddtoChat(user1_in,'left');
//Specifies the language of the input text. 
     lang_from =right_lg;
     lang_to= left_lg;
     
    
    fetch("/translate?user_in="+ user1_in +"&lang_from="+lang_from+"&lang_to="+lang_to)
      .then(response=> {
      response.json().then(function(data) {
        console.log(data[0]['translations'][0].text);
        AddtoChatr(data[0]['translations'][0].text,'left');
      });    
    }); 
  }
});


// event to capture send button click
$('.send_messager').click(function(e) {
  user1_in = $('.message_input2').val();
  $('.message_input2').val('');
  console.log("user1_in:", user1_in);
  AddtoChatr(user1_in,'right');
  lang_from =left_lg;
     lang_to= right_lg;
     
  fetch("/translate?user_in="+ user1_in +"&lang_from="+lang_from+"&lang_to="+lang_to)
  .then(response=> {
    response.json().then(function(data) {
      console.log(data[0]['translations'][0].text);
      AddtoChat(data[0]['translations'][0].text,'right');
    });
  });
});


// event to capture Enter button  | Right Chat
$('.message_input2').keyup(function(e) {
  if (e.which === 13) {
    user1_in = $('.message_input2').val();
    $('.message_input2').val('');
    console.log("user1_in:", user1_in);
    AddtoChatr(user1_in,'right');
    lang_from =left_lg;
     lang_to= right_lg;
     
    fetch("/translate?user_in="+ user1_in +"&lang_from="+lang_from+"&lang_to="+lang_to)
      .then(response=> {
      response.json().then(function(data) {
        console.log(data[0]['translations'][0].text);
        AddtoChat(data[0]['translations'][0].text,'right');
      });    
    }); 
  }
});


// Function to add user input ang translated text to UI
function AddtoChat(text,message_side) {
	var $messages, message;

	$messages = $('.messages');
	message = new Message({
		text: text,
		message_side: message_side,
		messageid:'.messages'
	});
	message.draw();
	$messages.animate({ scrollTop: $messages.prop('scrollHeight') }, 300);
	
};




// Function to add user input ang translated text to UI
function AddtoChatr(text,message_side) {
	var $messages, message;

	$messages = $('.messagesr');
	message = new Message({
		text: text,
		message_side: message_side,
		messageid:'.messagesr'
	});
	message.draw();
	$messages.animate({ scrollTop: $messages.prop('scrollHeight') }, 300);
	
};

// Function to create individual message elements
function Message(arg) {

    this.text = arg.text, this.message_side = arg.message_side;
		this.messageid=arg.messageid;
        this.draw = function (_this) {
            return function () {
                var $message;
                $message = $($('.message_template').clone().html());
                $message.addClass(_this.message_side).find('.text').html(_this.text);
                $(_this.messageid).append($message);
                return setTimeout(function () {
                    return $message.addClass('appeared');
                }, 0);
            };
        }(this);
        return this;
};


(function() {
    
    // get references to select list and display text box
    var sel = document.getElementById('scripts');
    var el = document.getElementById('display');
  var sel2 = document.getElementById('scripts2');
    var el2 = document.getElementById('display2');


    function getSelectedOption(sel) {
        var opt;
        for ( var i = 0, len = sel.options.length; i < len; i++ ) {
            opt = sel.options[i];
            if ( opt.selected === true ) {
                break;
            }
        }
        return opt;
    }

   function getSelectedOption(sel) {
        var opt2;
        for ( var i = 0, len = sel.options.length; i < len; i++ ) {
            opt2 = sel.options[i];
            if ( opt2.selected === true ) {
                break;
            }
        }
        return opt2;
    }

   
    // assign onclick handlers to the buttons
    
    // assign onclick handlers to the buttons
    document.getElementById('showVal').onclick = function () {
     //   el.value = sel.value;  //lo agrega en el input box   
     //  el2.value = sel2.value;  
      //Specifies the language of the input text. 
       right_lg = sel.value;
       //Specifies the language of the output text. 
       left_lg =  sel2.value;
      lang_from =sel.value;
     lang_to= sel2.value;
    }
    
    
}());
// immediate function to preserve global namespace



// event to capture send button click
$('.send_messager').click(function(e) {

     
  let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=0,height=0,left=-1000,top=-1000`;

open('/', 'rating', params);

    });

