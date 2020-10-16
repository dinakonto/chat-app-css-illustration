// TODO
// - Pull message data from a json file

// Document ready
document.addEventListener("DOMContentLoaded", function(){


  const messages = [
    {
      msg: 'That sounds great. I’d be happy with that.',
      from: 'sam',
      type: 'text',
      ypos: 10

    },
    {
      msg: 'Could you send over some pictures of your dog, please?',
      from: 'sam',
      type: 'text',
      ypos: 52
    },
    {
      msg: '',
      src: [
        '/images/dog-image-1.jpg',
        '/images/dog-image-2.jpg',
        '/images/dog-image-3.jpg'
      ],
      from: 'me',
      type: 'image',
      ypos: 88
    },
    {
      msg: 'Here are a few pictures. She’s a happy girl!',
      from: 'me',
      type: 'text',
      ypos: 150

    },
    {
      msg: 'Can you make it?',
      from: 'me',
      type: 'text',
      ypos: 192
    },
    {
      msg: 'She looks so happy! The time we discussed works. How long shall I take her out for?',
      from: 'sam',
      type: 'text',
      ypos: 230

    },
    {
      msg: '30 minute walk',
      price: 29,
      from: 'sam',
      type: 'choice',
      ypos: 284
    },
    {
      msg: '1 hour walk',
      price: 49,
      from: 'sam',
      type: 'choice',
      ypos: 322
    }
  ];


  // Animate
  function animStart(ypos) {
    let lastMsg = document.querySelector(".msg-list").lastChild;
    gsap.to(lastMsg, {duration: 0.2, y: -(370 - ypos), ease: "sine.out", onComplete: animDone});
  }

  function animDone() {
    console.log('animation complete')
  }

  // Loop through messages and display each one
  let delay = 1000;

  function startUI() {
    console.log('start ui');
    let i;

    for (i=0; i < messages.length; i++) {
      let msg = messages[i];
      let msgHTML;

      setTimeout(function() {
        // Add basic building blocks (All)
        msgHTML = '<li class="msg from-' + msg.from + ' type-' + msg.type + '"><div class="msg-content">';

        if (msg.type === 'image') {
          // Add images
          let imgArray = msg.src;
          imgArray.forEach(function(src, index) {
            msgHTML += '<img src=".' + src + '">';
          })
        } else {
          // Add text (text, choice)
          msgHTML += '<p>' + msg.msg;
          if (msg.type === 'choice') {
            // Add price (choice)
            msgHTML += '<span class="price">$' + msg.price + '</span>';
          }
          msgHTML += '</p>';
        }
        // End block (All)
        msgHTML += '</div></div>';
        document.querySelector("#msg-area .msg-list").innerHTML += msgHTML;

        animStart(msg.ypos)
      }, delay);
      delay += 1000;
    };
  };

  startUI();

})
