import TrackPlayer from 'react-native-track-player'

module.exports = function() {
    // This service needs to be registered for the module to work
    // but it will be used later in the "Receiving Events" section
    
    TrackPlayer.addEventListener('remote-play', () => {
        TrackPlayer.play()
      })
    
      TrackPlayer.addEventListener('remote-pause', () => {
        TrackPlayer.pause()
        console.log('test')
      });
    
      TrackPlayer.addEventListener('remote-next', () => {
        TrackPlayer.skipToNext()
      });
    
      TrackPlayer.addEventListener('remote-previous', () => {
        TrackPlayer.skipToPrevious()
      });
    
      TrackPlayer.addEventListener('remote-stop', () => {
        console.log('test test test')
        TrackPlayer.destroy()
      });


      TrackPlayer.addEventListener('playback-state', async () => {
        console.log('test');
        
      });

}