FROM ubuntu:jammy

# Set environment variables for non-interactive installation and display
ARG DEBIAN_FRONTEND=noninteractive
ENV DISPLAY=:0

# Install system dependencies and tools
RUN apt-get update && apt-get install -y \
    software-properties-common \
    apt-transport-https \
    curl \
    wget \
    git \
    vim \
    xvfb \                    # X virtual framebuffer for headless display
    x11vnc \                  # VNC server for X11 display
    xauth \                   # X authority utilities
    x11-xserver-utils \       # X server utilities
    x11-apps \                # Basic X11 applications
    sudo \
    dbus \                    # Message bus system
    wmctrl \                  # Window manager control
    python3 \
    python3-pip \
    supervisor \              # Process control system
    netcat-openbsd \          # Networking utility
    libxtst-dev \             # X11 testing library
    mesa-utils \              # Mesa graphics utilities
    libgl1-mesa-dri \         # Mesa DRI graphics drivers
    libgl1-mesa-glx \         # Mesa GLX graphics library
    libcap2-bin \             # Capabilities utilities
    fontconfig \              # Font configuration system
    fonts-dejavu \            # DejaVu fonts
    fonts-liberation \        # Liberation fonts
    fonts-freefont-ttf \      # FreeFont TrueType fonts
    && apt-get clean \        # Clean up package cache
    && rm -rf /var/lib/apt/lists/* \  # Remove package lists
    && mkdir -p /run/dbus \   # Create dbus runtime directory
    && dbus-uuidgen --ensure=/etc/machine-id  # Generate machine ID for dbus

# Upgrade pip to latest version
RUN pip3 install --upgrade pip

# Clone and install noVNC and websockify for web-based VNC access
RUN git clone https://github.com/novnc/noVNC.git /opt/noVNC \
    && git clone https://github.com/novnc/websockify.git /opt/websockify \
    && cd /opt/websockify \
    && pip3 install --break-system-packages .

# Copy supervisor configuration file
COPY supervisord.conf /etc/supervisord.conf

# Start supervisor to manage all processes
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf", "-n"]
