# pybot
A UI automation tool built using a multimodal model.

This project is inspired by: [bytebot](https://github.com/bytebot-ai/bytebot). I prefer using Python for backend development and API calls, and I'm aiming to simplify the project to enhance usability.

## Features
- UI automation using multimodal models
- Python backend with Web UI for configuration
- Easy-to-use API calls

## Installation

### Prerequisites
- Python 3.8 or higher
- pip (Python package manager)
- Docker (for containerized deployment)

### Installation Steps

#### Option 1: Using Docker (Recommended)
1. Clone the repository:
2. Build the Docker image:
   ```bash
   docker build src/docker -t pybot
   ```
3. Run the container:
   ```bash
   docker run -p 6080:6080 pybot
   ```
   Access the noVNC web interface at: http://localhost:6080/vnc.html

#### Option 2: Manual Installation
(原有内容保持不变)