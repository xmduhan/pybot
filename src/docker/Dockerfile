# 基础镜像
FROM ubuntu:jammy

# 1. 环境设置
# 设置非交互式安装模式
ARG DEBIAN_FRONTEND=noninteractive
# 配置X11应用程序的显示环境
ENV DISPLAY=:0

# 2. 系统依赖安装（合并为一个RUN语句）
RUN apt-get update && apt-get install -y software-properties-common apt-transport-https curl wget git vim xvfb x11vnc xauth x11-xserver-utils x11-apps sudo xfce4 xfce4-goodies dbus wmctrl lightdm python3 python3-pip supervisor netcat-openbsd xpdf gedit xpaint libxtst-dev mesa-utils libgl1-mesa-dri libgl1-mesa-glx libcap2-bin fontconfig fonts-dejavu fonts-liberation fonts-freefont-ttf && apt-get remove -y light-locker xfce4-screensaver xfce4-power-manager && apt-get clean && rm -rf /var/lib/apt/lists/* && mkdir -p /run/dbus && dbus-uuidgen --ensure=/etc/machine-id

# 3. Python包管理升级
RUN pip3 install --upgrade pip

# 4. VNC和远程访问设置
RUN git clone https://github.com/novnc/noVNC.git /opt/noVNC && git clone https://github.com/novnc/websockify.git /opt/websockify && cd /opt/websockify && pip3 install --break-system-packages .

# 5. 创建supervisord配置文件
RUN echo '[supervisord]\nnodaemon=true\n\n[program:xvfb]\ncommand=Xvfb :0 -screen 0 1024x768x24\n\n[program:x11vnc]\ncommand=x11vnc -display :0 -forever -shared -nopw\n\n[program:noVNC]\ncommand=/opt/websockify/run 9990 localhost:5900\n' > /etc/supervisord.conf

# 6. 端口配置和运行时
EXPOSE 9990

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf", "-n"]