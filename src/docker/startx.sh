sleep 5
touch /root/.Xauthority
xauth generate :0 . trusted
startxfce4&
sleep 5
xfconf-query -c xfce4-power-manager -p /xfce4-power-manager/presentation-mode -s true
