# 基础镜像
FROM ubuntu:noble

# 1. 环境设置
# 设置非交互式安装模式
ARG DEBIAN_FRONTEND=noninteractive
# 配置X11应用程序的显示环境
ENV DISPLAY=:0

# 2. 系统依赖安装
RUN apt-get update
RUN apt-get install -y software-properties-common
RUN apt-get install -y apt-transport-https
RUN apt-get install -y curl
RUN apt-get install -y wget
RUN apt-get install -y git
RUN apt-get install -y vim
RUN apt-get install -y xvfb
RUN apt-get install -y x11vnc
RUN apt-get install -y xauth
RUN apt-get install -y x11-xserver-utils
RUN apt-get install -y x11-apps
RUN apt-get install -y sudo
RUN apt-get install -y xfce4
RUN apt-get install -y xfce4-goodies
RUN apt-get install -y dbus
RUN apt-get install -y wmctrl
RUN apt-get install -y lightdm
RUN apt-get install -y python3
RUN apt-get install -y python3-pip
RUN apt-get install -y supervisor
RUN apt-get install -y netcat-openbsd
RUN apt-get install -y xpdf
RUN apt-get install -y gedit
RUN apt-get install -y xpaint
RUN apt-get install -y libxtst-dev
RUN apt-get install -y mesa-utils
RUN apt-get install -y libgl1-mesa-dri
RUN apt-get install -y libgl1-mesa-glx
RUN apt-get install -y libcap2-bin
RUN apt-get install -y fontconfig
RUN apt-get install -y fonts-dejavu
RUN apt-get install -y fonts-liberation
RUN apt-get install -y fonts-freefont-ttf
RUN apt-get remove -y light-locker
RUN apt-get remove -y xfce4-screensaver
RUN apt-get remove -y xfce4-power-manager
RUN apt-get clean
RUN rm -rf /var/lib/apt/lists/*

RUN mkdir -p /run/dbus && \
    dbus-uuidgen --ensure=/etc/machine-id

# 3. Python包管理升级
RUN pip3 install --upgrade pip

# 4. VNC和远程访问设置
RUN git clone https://github.com/novnc/noVNC.git /opt/noVNC && \
    git clone https://github.com/novnc/websockify.git /opt/websockify && \
    cd /opt/websockify && \
    pip3 install --break-system-packages .

# 5. 端口配置和运行时
EXPOSE 9990

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf", "-n"]
