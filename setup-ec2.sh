#!/bin/bash
# Setup script to run on EC2 instance after first SSH connection
# Usage: Copy this to EC2 and run: bash setup-ec2.sh

set -e

echo "=== Setting up EC2 for Next.js Development ==="
echo ""

# Update system
echo "Updating system packages..."
sudo apt update
sudo apt upgrade -y

# Install Node.js 20.x
echo ""
echo "Installing Node.js 20.x..."
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt install -y nodejs
else
    echo "Node.js already installed: $(node --version)"
fi

# Install pnpm
echo ""
echo "Installing pnpm..."
if ! command -v pnpm &> /dev/null; then
    npm install -g pnpm
else
    echo "pnpm already installed: $(pnpm --version)"
fi

# Install Git
echo ""
echo "Installing Git..."
sudo apt install -y git

# Install build essentials
echo ""
echo "Installing build essentials..."
sudo apt install -y build-essential curl wget

# Install PM2 (optional, for production)
echo ""
read -p "Install PM2 for process management? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    npm install -g pm2
    echo "PM2 installed successfully"
fi

# Create projects directory
echo ""
echo "Creating projects directory..."
mkdir -p ~/projects

# Setup firewall (optional)
echo ""
read -p "Configure UFW firewall? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    sudo ufw allow 22/tcp
    sudo ufw allow 3000/tcp
    sudo ufw --force enable
    echo "Firewall configured"
fi

echo ""
echo "=== Setup Complete! ==="
echo ""
echo "Installed versions:"
echo "  Node.js: $(node --version)"
echo "  npm: $(npm --version)"
echo "  pnpm: $(pnpm --version)"
echo "  Git: $(git --version)"
echo ""
echo "Next steps:"
echo "1. Transfer your project files to ~/projects/workflow-logic-review"
echo "2. cd ~/projects/workflow-logic-review"
echo "3. pnpm install"
echo "4. pnpm dev"











