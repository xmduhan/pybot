FROM ubuntu:jammy
# Set non-interactive frontend to avoid prompts during installation
ARG DEBIAN_FRONTEND=noninteractive
# Set display environment variable
ENV DISPLAY=:0
# Set default display resolution to 1080p
ENV DISPLAY_RESOLUTION=1920x1080x24

# Base system update and package installation
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
    novnc \
    xfce4 \
    xfce4-goodies \
    xfce4-terminal \
    language-pack-zh-hans \
    language-pack-gnome-zh-hans \
    fonts-noto-cjk \
    fonts-wqy-zenhei \
    fonts-wqy-microhei \
    ibus \
    ibus-libpinyin \
    language-pack-zh-hans \
    nginx \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* \
    # Create dbus runtime directory and generate machine ID
    && mkdir -p /run/dbus \
    && dbus-uuidgen --ensure=/etc/machine-id

RUN update-locale LANG=zh_CN.UTF-8

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy supervisor configuration file
COPY supervisord.conf /etc/supervisord.conf

# Set container startup command to supervisord
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf", "-n"]