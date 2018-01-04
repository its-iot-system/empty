load('api_log.js');
load('api_config.js');
load('api_gpio.js');
load('api_mqtt.js');
load('api_events.js');
load('api_net.js');
load('api_sys.js');
load('api_rpc.js');
load('api_timer.js');

Timer.set(1000, true /* repeat */, function() {
  print("==== this is BEFORE the OTA ====");
}, null);
