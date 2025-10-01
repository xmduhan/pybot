# PyBot
A UI automation tool built using multimodal AI models.

This project is inspired by [bytebot](https://github.com/bytebot-ai/bytebot). It features a Python-based backend with a web interface for configuration, focusing on simplicity and usability.

## Features
- UI automation powered by multimodal AI models
- Python backend with RESTful API
- Web-based configuration interface
- Containerized deployment with Docker
- Virtual desktop environment (Xfce) accessible via noVNC
- Chinese language support with input method

## Architecture
- **Backend**: Django-based Python application
- **Frontend**: Web interface for configuration and control
- **Virtual Desktop**: Xfce desktop environment accessible through browser
- **Automation**: Multimodal AI-driven UI interactions

## Prerequisites
- Docker (for containerized deployment)
- Kubernetes (optional, for production deployment)

## Quick Start

### 编译镜像并执行
```bash
git clone https://github.com/xmduhan/pybot
cd pybot
docker build src/docker -t pybot --network host \
  --build-arg http_proxy=$http_proxy --build-arg https_proxy=$https_proxy --build-arg no_proxy=$no_proxy 
docker run pybot -p 8000:80
```

### 在浏览器中打开

http://localhost:8000/
