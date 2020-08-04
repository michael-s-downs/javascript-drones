# U-FLY-My-Drone
A Node + React Learning Experiment...

CREDITS:
This project is built upon or takes inspiration from at least three others on GitHub:  The main setup of node server and react front-end is a fork of https://github.com/wesbos/javascript-drones to which I've added an essential feature for remote-controlling flight of drone video capture and controls, a few extra new controls and personal aesthetic mods.  For capturing and translating the drone video-stream direct from socket in flight, I am using https://github.com/samirkumardas/jmuxer although this requires dynamic dependency loading to get it to work in React, as the library expects to be loaded after DOM is created which is apparently anti-pattern for Next.js.  To allow Internet control via a secure tunnel to the local server I am taking inspiration from project https://github.com/markwinap/DJI-Tello-WS-Server which incorporates a very cool game-controller interface if you have that option available. 

![](https:/https://github.com/michael-s-downs/javascript-drones/edit/master/frontend/static/screenshot.jpg)
![](https:/https://github.com/michael-s-downs/javascript-drones/edit/master/frontend/static/Screenshot-Sized.png)

# Flying a Drone with React and Node.js

## Software Used
* React (with React Hooks, an old-school Class, and dynamic dependency loading for DOM-requiring libraries (jmuxer))
* Styled Components for styling
* Node.js and UDP4 sockets for communicating with drone
* Socket.io WebSockets for sending data to/from the browser
* Next.js for easy react setup
## Hardware Used
* [DJI Tello Drone](https://amzn.to/2SvzqON)
* [Extra Batteries](https://amzn.to/2SyV70J) - it comes with one and I bought two extra. For continual development I'd say you only need two — one in the charger and one in the drone. For flying away from your house you definitely need at least 3 as they only last about 10-15 mins.
* [Fast Battery Charger with 4 slots](https://amzn.to/2SAWqwb)
## Using This Code
### Frontend
1. cd `frontend`
1. `npm install`
1. `npm run dev`
### Backend
1. cd `backend`
1. `npm install`
1. connect to drone via wifi
1. `npm start`
## ONLY for accessing drone over internet (tunnel)
### Install ngrok
https://ngrok.com/
### Unzip
unzip ngrok.zip
### Setup your account
./ngrok authtoken 6X8R
### Open tunnel
./ngrok http 3000 (assuming Next.js default production port)
## Troubleshooting
[Docs for Tello are available here](https://dl-cdn.ryzerobotics.com/downloads/tello/20180910/Tello%20SDK%20Documentation%20EN_1.3.pdf)
I had to update the firmware of my drone when it came in the mail before I could use this 1.3 API. Do this via the Tello app on your phone.
If you let the drone's WIFI connection lapse, you have to restart the server by typing `rs` into the terminal. This will re-run the `command command` that puts the drone in SDK mode. If you don't do this, it will ignore any commands you send it.
## License — WTFPL
I want you to build cool stuff with this.
Please hack on it and make your own cool things.
## Further Examples & Resources
* [jsolderitsch/tello-nodejs](https://github.com/jsolderitsch/tello-nodejs) - very simple JavaScript examples
* [FFMpeg + Node.js Video in the browser complicated example](https://github.com/SovGVD/nodetello/)
* [Some Japanese Developer Figured out how to get video working with WebRTC](https://qiita.com/a-baba/items/d728d580f89473c5fd18)
* [Drone Keyboard for Tello](https://github.com/dnomak/drone-keyboard#drone-keyboard-for-tello)
* Link your repo here for others to learn!