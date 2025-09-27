sleep 10
touch /root/.Xauthority
xauth generate :0 . trusted
sleep infinity
