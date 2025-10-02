# PyBot
A UI automation tool built using multimodal AI models with web-based remote desktop access.

This project is inspired by [bytebot](https://github.com/bytebot-ai/bytebot). It features a Python-based backend with a React frontend interface, providing remote desktop access and automation capabilities through a web browser.

## Features
- **Remote Desktop Access**: Full Xfce desktop environment accessible via noVNC in browser
- **UI Automation**: Python-based automation powered by multimodal AI models
- **Web Interface**: React-based frontend for configuration and control
- **Containerized Deployment**: Complete Docker container with all dependencies
- **Multi-language Support**: Chinese language and input method support
- **Real-time VNC**: Browser-based VNC client for remote desktop interaction

## Architecture

### Components
- **Backend**: Django Python application running on port 8000
  - RESTful API for automation control
  - Database: SQLite3
- **Frontend**: React application running on port 3000
  - Web interface with VNC viewer integration
  - Real-time control panel
- **Virtual Desktop**: Xfce desktop environment with display server
  - Xvfb: Virtual framebuffer X server
  - x11vnc: VNC server for remote access
  - noVNC: Web-based VNC client
- **Web Server**: Nginx reverse proxy on port 80
  - Proxies requests to frontend, backend, and noVNC services
- **Supervisor**: Process management for all services

### Service Ports
- **80**: Nginx web server (main access point)
- **3000**: React frontend development server
- **8000**: Django backend API
- **6080**: noVNC websockify service
- **5900**: VNC server

## Project Structure