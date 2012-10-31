// Initialize
function themeReady() {
  $('#artwork').click(artAction);
}

// Gets called at an interval, used for progress bar
function playerUpdate() {
  var ratio = Player.playerPosition() / Player.currentTrack().length;
  var percent = (ratio * 100) + '%';
  $('.current .progress-bar').width(percent);
}

function trackUpdate(track) {
  var newTrack = $('#base').clone().appendTo('body');
  newTrack.removeAttr('id');
  var oldTrack = $('.info.current');

  // Populate new track's data
  var $name = newTrack.find('.name');
  $name.text(track.title);
  newTrack.find('.artist').text(track.artist);
  newTrack.find('.album').text(track.album);

  // Set current track
  newTrack.addClass('current');
  oldTrack.removeClass('current');

  // Set progress bar width to max of title or meta info
  var nameWidth = $name.width();
  var metaWidth = newTrack.find('.meta-info').width();
  var maxWidth = Math.max(nameWidth, metaWidth);
  newTrack.find('.progress-wrap').width(maxWidth);

  // Remove track when after animation finishes
  var t = setTimeout(function () {
    oldTrack.remove();
  }, 1000);
}

function artworkUpdate(artworkURL) {
  var $main = $('.main');
  if (artworkURL == "") {
    $main.hide();
  }
  else {
    $main.show();
    $main.attr('src', artworkURL);
  }
}

// Center clicking stuff
var clickCount = 0;
var clickInterval = 400;
var timeout;

function artClick() {
  clickCount++;
  console.log(clickCount);
  clearTimeout(timeout);

  // Triple is the max number of clicks
  if (clickCount == 3)
    artAction();

  // Else wait to execute action
  else
    timer = setTimeout(artAction, clickInterval);
}

function artAction() {
  // Pause
  if (clickCount == 1) {
    Player.playPause();
  }
  // Next
  else if (clickCount == 2) {
    Player.nextTrack();
  }
  // Previous
  else {
    Player.previousTrack();
  }
  // Reset clickCount
  clickCount = 0;
}