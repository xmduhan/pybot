sleep 5
touch /root/.Xauthority
xauth generate :0 . trusted
startxfce4&
sleep 60
xset s off
xset s noblank
xset s noexpose
xset -dpms
xset q
sleep infinity
