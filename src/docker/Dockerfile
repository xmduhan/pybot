FROM ubuntu:jammy
ARG DEBIAN_FRONTEND=noninteractive
ENV DISPLAY=:0
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
    && mkdir -p /run/dbus \
    && dbus-uuidgen --ensure=/etc/machine-id
RUN pip3 install --upgrade pip
RUN git clone https://github.com/novnc/noVNC.git /opt/noVNC \
    && git clone https://github.com/novnc/websockify.git /opt/websockify \
    && cd /opt/websockify \
    && pip3 install --break-system-packages .
COPY supervisord.conf /etc/supervisord.conf
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf", "-n"]