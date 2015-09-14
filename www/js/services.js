angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Arlenne Rdz',
    lastText: 'You on your way?',
    face: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/1907382_842463272477076_5419426880409256730_n.jpg?oh=43b5e3a023b99783e6d1a7d1acae1f87&oe=5662BA81&__gda__=1448964387_bc8a8bed03491f152148bba1d89ea2a1'
  }, {
    id: 1,
    name: 'Janeth Valadez',
    lastText: 'Hey, it\'s me',
    face: 'https://scontent-dfw1-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/1962694_10201428886433399_155394386_n.jpg?oh=aabc86aabe15a03403b8842b0af097cc&oe=56A0F213'
  }, {
    id: 2,
    name: 'Alee Blanco',
    lastText: 'I should buy a boat',
    face: 'https://scontent-dfw1-1.xx.fbcdn.net/hphotos-xtp1/v/t1.0-9/12003347_977836318942688_8896160105460958889_n.jpg?oh=aa1be6352243454d4c37bdd048b6d246&oe=565E6DD7'
  }, {
    id: 3,
    name: 'Isela Briseño',
    lastText: 'Look at my mukluks!',
    face: 'https://scontent-dfw1-1.xx.fbcdn.net/hphotos-xtf1/v/t1.0-9/11998988_10206739943251396_4226491045853427987_n.jpg?oh=c02c7c0b7492c25f702cb172242751f2&oe=569DDB8A'
  }, {
    id: 4,
    name: 'Emmanuel Valdes',
    lastText: 'This is wicked good ice cream.',
    face: 'https://scontent-dfw1-1.xx.fbcdn.net/hphotos-xft1/v/t1.0-9/10574265_729911370398624_6878735122507008089_n.jpg?oh=a7219d9421898c348bb518dd8c5e75a1&oe=566C2515'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
