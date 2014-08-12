require.config({
  paths: {
    "HID"                    : route("hid/HID"),
    "Keyboard"               : route("hid/Keyboard"),
    "State"                  : route("state/State"),
    "Screen"                 : route("screen/Screen"),
    "AppConfig"              : route("app/appconfig")
  }
});
function route(path) {
  return "../" + path;
}
require(["HID", "Keyboard", "State", "Screen", "AppConfig"]);