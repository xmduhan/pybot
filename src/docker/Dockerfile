FROM ubuntu:jammy
# 设置非交互式前端以避免安装过程中的提示
ARG DEBIAN_FRONTEND=noninteractive
# 设置显示环境变量
ENV DISPLAY=:0

# 基础系统更新和软件包安装
RUN apt-get update && apt-get install -y \
    software-properties-common \
    apt-transport-https \
    curl \
    wget \
    git \
    vim \
    xvfb \
    x11vnc \
    xauth \
    x11-xserver-utils \
    x11-apps \
    sudo \
    dbus \
    wmctrl \
    python3 \
    python3-pip \
    supervisor \
    netcat-openbsd \
    libxtst-dev \
    mesa-utils \
    libgl1-mesa-dri \
    libgl1-mesa-glx \
    libcap2-bin \
    fontconfig \
    fonts-dejavu \
    fonts-liberation \
    fonts-freefont-ttf \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* \
    # 创建dbus运行目录并生成机器ID
    && mkdir -p /run/dbus \
    && dbus-uuidgen --ensure=/etc/machine-id

# 升级pip到最新版本
RUN pip3 install --upgrade pip

# 安装noVNC和websockify用于Web远程桌面访问
RUN git clone https://github.com/novnc/noVNC.git /opt/noVNC \
    && git clone https://github.com/novnc/websockify.git /opt/websockify \
    && cd /opt/websockify \
    && pip3 install --break-system-packages .

# 复制supervisor配置文件
COPY supervisord.conf /etc/supervisord.conf

# 设置容器启动命令为supervisord
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf", "-n"]