# Quick Start: AWS Deployment

## TL;DR - Fastest Path to Get Started

### 1. Launch EC2 Instance (5 minutes)
- AWS Console → EC2 → Launch Instance
- Choose: Ubuntu 22.04 LTS, t3.small (or t2.micro for free tier)
- Create/download key pair (`.pem` file)
- Security Group: Allow SSH (22) from My IP, HTTP (80), Custom TCP (3000)
- Launch instance

### 2. Setup SSH (2 minutes)
```powershell
# Move key to .ssh folder
mkdir C:\Users\Charl\.ssh
move C:\Users\Charl\Downloads\workflow-dev-key.pem C:\Users\Charl\.ssh\

# Set permissions
icacls C:\Users\Charl\.ssh\workflow-dev-key.pem /inheritance:r
icacls C:\Users\Charl\.ssh\workflow-dev-key.pem /grant:r "%USERNAME%:R"

# Create SSH config (optional but recommended)
notepad C:\Users\Charl\.ssh\config
```

Add to config:
```
Host workflow-dev
    HostName YOUR_PUBLIC_IP
    User ubuntu
    IdentityFile C:\Users\Charl\.ssh\workflow-dev-key.pem
```

### 3. Connect and Setup EC2 (5 minutes)
```powershell
# Connect
ssh workflow-dev

# On EC2, run setup script
curl -o setup-ec2.sh https://raw.githubusercontent.com/YOUR_REPO/setup-ec2.sh
# OR copy setup-ec2.sh to EC2 and run:
bash setup-ec2.sh
```

### 4. Deploy Project (3 minutes)

**Option A: Using deployment script (easiest)**
```powershell
# From project root
.\deploy-to-aws.ps1 -PublicIP "YOUR_PUBLIC_IP" -KeyPath "C:\Users\Charl\.ssh\workflow-dev-key.pem"
```

**Option B: Manual Git method**
```powershell
# On EC2
cd ~/projects
git clone YOUR_REPO_URL workflow-logic-review
cd workflow-logic-review
pnpm install
```

### 5. Start Development (1 minute)
```powershell
# Terminal 1: Connect with port forwarding
ssh -L 3000:localhost:3000 workflow-dev

# Terminal 2: Connect and start dev server
ssh workflow-dev
cd ~/projects/workflow-logic-review
pnpm dev
```

### 6. Access Your App
Open browser: `http://localhost:3000`

---

## VS Code Remote SSH (Recommended)

1. Install "Remote - SSH" extension in VS Code
2. Press `F1` → "Remote-SSH: Connect to Host"
3. Select `workflow-dev`
4. Open folder: `/home/ubuntu/projects/workflow-logic-review`
5. Use integrated terminal: `pnpm dev`
6. Access at `http://localhost:3000` (automatic port forwarding)

---

## Daily Workflow

```powershell
# 1. Connect
ssh workflow-dev

# 2. Navigate and pull updates
cd ~/projects/workflow-logic-review
git pull
pnpm install  # if needed

# 3. Start dev server
pnpm dev

# 4. In another terminal, port forward
ssh -L 3000:localhost:3000 workflow-dev

# 5. Open http://localhost:3000
```

---

## Troubleshooting

**Can't connect via SSH?**
- Check security group allows port 22 from your IP
- Verify instance is running
- Check key file path and permissions

**Can't access port 3000?**
- Use port forwarding: `ssh -L 3000:localhost:3000 workflow-dev`
- Or update security group to allow port 3000

**pnpm/node not found?**
```bash
# Reinstall Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
npm install -g pnpm
```

---

For detailed instructions, see [AWS_DEPLOYMENT_GUIDE.md](./AWS_DEPLOYMENT_GUIDE.md)











