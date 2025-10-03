sleep 5
touch /root/.Xauthority
xauth generate :0 . trusted
startxfce4&
while true; do
  xfconf-query -c xfce4-power-manager -p /xfce4-power-manager/presentation-mode -s true
  sleep 10
  echo 'xfconf-query -c xfce4-power-manager -p /xfce4-power-manager/presentation-mode -s true'
done
