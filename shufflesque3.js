// Initialize
function themeReady() {
  $('#artwork-container').click(artClick);
}

// Gets called at an interval, used for progress bar
function playerUpdate() {
  var ratio = Player.playerPosition() / Player.currentTrack().length;
  var percent = (ratio * 100) + '%';
  $('.current .progress-bar').width(percent);
}

function trackUpdate(track) {
  var newTrack = $('.base.info').clone().appendTo('body');
  newTrack.removeClass('base');
  var oldTrack = $('.info.current');

  // Populate new track's data
  var $name = newTrack.find('.name');
  $name.html(track.title);
  newTrack.find('.artist').html(track.artist);
  newTrack.find('.album').html(track.album);

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
  var newArt = $('.base.artwork').clone().appendTo('#artwork-container');
  newArt.removeClass('base');
  var oldArt = $('.artwork.current');

  // Set new src
  if (artworkURL == "")
    newArt.addClass('no-art');
  else
    newArt.attr('src', artworkURL);

  // Set current art
  newArt.addClass('current');
  oldArt.removeClass('current');

  // Remove old art
  var t = setTimeout(function () {
    oldArt.remove();
  }, 1000);
}

// Center clicking stuff
var clickCount = 0;
var clickInterval = 500;
var timeout;

function artClick() {
  clickCount++;
  console.log(clickCount);
  clearTimeout(timeout);

  // Triple is the max number of clicks
  if (clickCount == 3)
    artAction();

  // Else wait to execute action
  else {
    clearTimeout(timeout);
    timeout = setTimeout(artAction, clickInterval);
  }
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