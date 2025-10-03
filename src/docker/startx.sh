sleep 5
touch /root/.Xauthority
xauth generate :0 . trusted
startxfce4
