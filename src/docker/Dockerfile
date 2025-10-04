FROM ubuntu:jammy-20251001
# Set non-interactive frontend to avoid prompts during installation
ARG DEBIAN_FRONTEND=noninteractive
# Set display environment variable
ENV DISPLAY=:0
# Set default display resolution to 1080p
ENV DISPLAY_RESOLUTION=1920x1080x24
# Set locale to Chinese
ENV LANG=zh_CN.UTF-8
ENV LANGUAGE=zh_CN:zh
ENV LC_ALL=zh_CN.UTF-8
ENV GTK_IM_MODULE=ibus
ENV QT_IM_MODULE=ibus
ENV XMODIFIERS=@im=ibus

# Base system update
RUN apt-get update

# Install base packages
RUN apt-get install -y \
    software-properties-common \
    apt-transport-https \
    curl \
    wget \
    git \
    vim

# Install X11 and display related packages
RUN apt-get install -y \
    xvfb \
    x11vnc \
    xauth \
    x11-xserver-utils \
    x11-apps \
    sudo \
    dbus \
    wmctrl

# Install Python and development tools
RUN apt-get install -y \
    python3 \
    python3-pip \
    python3-tk \
    python3-dev

# Install system utilities
RUN apt-get install -y \
    supervisor \
    netcat-openbsd \
    libxtst-dev \
    mesa-utils \
    libgl1-mesa-dri \
    libgl1-mesa-glx \
    libcap2-bin

# Install fonts and language support
RUN apt-get install -y \
    fontconfig \
    fonts-dejavu \
    fonts-liberation \
    fonts-freefont-ttf \
    fonts-noto-cjk \
    fonts-wqy-zenhei \
    fonts-wqy-microhei

# Install desktop environment and input method
RUN apt-get install -y \
    novnc \
    xfce4 \
    xfce4-goodies \
    xfce4-terminal \
    language-pack-zh-hans \
    language-pack-gnome-zh-hans \
    ibus \
    ibus-libpinyin

# Install web server and Node.js
RUN apt-get install -y \
    nginx \
    gnome-screenshot \
    ttyd \
    pm-utils

# Clean up
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Create dbus runtime directory and generate machine ID
RUN mkdir -p /run/dbus && dbus-uuidgen --ensure=/etc/machine-id

# Set up locale
RUN update-locale LANG=zh_CN.UTF-8

# Install Chromium in a single RUN command
RUN wget https://github.com/ungoogled-software/ungoogled-chromium-portablelinux/releases/download/135.0.7049.95-1/ungoogled-chromium_135.0.7049.95-1.AppImage -O ungoogled-chromium.AppImage \
    && chmod +x ungoogled-chromium.AppImage \
    && ./ungoogled-chromium.AppImage --appimage-extract \
    && mv squashfs-root/ /usr/share/ungoogled-chromium \
    && rm ungoogled-chromium.AppImage
COPY ungoogled-chromium /usr/bin/x-www-browser


# Install node
ENV NVM_DIR=/root/.nvm
ENV NODE_VERSION=v22.20.0
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash && \
    . $NVM_DIR/nvm.sh && \
    nvm install $NODE_VERSION && \
    nvm use $NODE_VERSION && \
    nvm alias default $NODE_VERSION

RUN ln -s $NVM_DIR/versions/node/$NODE_VERSION/bin/* /bin/

RUN echo '2025-10-10 10:44'

# Clone pybot repository
RUN git clone https://github.com/xmduhan/pybot /opt/pybot

# Install Python backend dependencies
RUN pip install -r /opt/pybot/src/backend/requirements.txt

# Build frontend
RUN cd /opt/pybot/src/frontend && npm install && npm run build

# Configure nginx
RUN rm -f /etc/nginx/nginx.conf
RUN ln -s /opt/pybot/src/docker/nginx.conf /etc/nginx/nginx.conf

# Configure noVNC
RUN ln -s /opt/pybot/src/docker/novnc/embedded.html /usr/share/novnc/embedded.html

# Set container startup command to supervisord
CMD ["/usr/bin/supervisord", "-c", "/opt/pybot/src/docker/supervisord.conf", "-n"]
