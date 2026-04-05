# PARING Platform - Deployment Guide

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Supabase account with PostgreSQL database
- Vercel account (or similar hosting)
- Git for version control

## Environment Setup

### 1. Production Environment Variables

Create `.env.production.local` with:

```env
# Database
DATABASE_URL="postgresql://user:password@host:5432/database"
DIRECT_URL="postgresql://user:password@host:5432/database"

# JWT & Security
NEXTAUTH_SECRET="your-very-long-random-secret-32-characters-minimum"
NEXTAUTH_URL="https://your-production-domain.com"
JWT_EXPIRES_IN="7d"

# API Configuration
API_BASE_URL="https://your-production-domain.com/api"
NEXT_PUBLIC_API_BASE_URL="https://your-production-domain.com/api"

# Payment Gateway (Optional)
NEXT_PUBLIC_MIDTRANS_CLIENT_KEY="production-key"
MIDTRANS_SERVER_KEY="production-key"

# Node Environment
NODE_ENV="production"
```

### 2. Security Hardening

```bash
# Generate a strong secret
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## Building for Production

### 1. Install Dependencies
```bash
npm install
```

### 2. Build Application
```bash
npm run build
```

### 3. Start Production Server
```bash
npm run start
```

## Deployment Options

### Option A: Vercel (Recommended)

1. **Connect Repository**
```bash
npm i -g vercel
vercel
```

2. **Set Environment Variables**
   - Go to Vercel dashboard
   - Project Settings → Environment Variables
   - Add all variables from `.env.production.local`

3. **Deploy**
```bash
vercel --prod
```

### Option B: Self-Hosted (VPS)

1. **Server Setup**
```bash
# SSH into server
ssh user@your-server.com

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 for process management
sudo npm install -g pm2
```

2. **Deploy Application**
```bash
# Clone repository
git clone https://github.com/your-repo.git
cd your-repo/web

# Install dependencies
npm install

# Build
npm run build

# Start with PM2
pm2 start npm --name "paring" -- start
pm2 save
```

3. **Setup Reverse Proxy (Nginx)**
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

4. **SSL Certificate (Let's Encrypt)**
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

### Option C: Docker

1. **Create Dockerfile**
```dockerfile
FROM node:18-alpine
WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

2. **Build and Push**
```bash
docker build -t paring-platform .
docker tag paring-platform your-registry/paring-platform:latest
docker push your-registry/paring-platform:latest
```

3. **Run Container**
```bash
docker run -d \
  --name paring \
  -p 3000:80 \
  -e DATABASE_URL="your-db-url" \
  -e NEXTAUTH_SECRET="your-secret" \
  -e NEXTAUTH_URL="your-domain" \
  your-registry/paring-platform:latest
```

## Database Migrations

### 1. Apply Pending Migrations
```bash
npx prisma migrate deploy
```

### 2. Verify Database
```bash
npx prisma db push
```

### 3. Check Schema
```bash
npx prisma studio
```

## Post-Deployment Verification

### 1. Health Check
```bash
curl https://your-domain.com
# Should return HTML home page
```

### 2. API Check
```bash
curl https://your-domain.com/api/services
# Should return JSON response
```

### 3. Database Connection
```bash
# Access Prisma Studio
npx prisma studio
# Verify tables and data exist
```

### 4. Authentication Test
```bash
# Test login endpoint
curl -X POST https://your-domain.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@paring.com","password":"Admin@123"}'
```

## Monitoring & Maintenance

### 1. Error Logging
- Monitor application logs
- Set up error alerts
- Check database logs

### 2. Performance Monitoring
```bash
# Check Node.js memory usage
ps aux | grep node

# Check database connections
# In Supabase dashboard: Database → Connections
```

### 3. Backup Strategy
- Daily automated Supabase backups
- Weekly manual backups
- Store backups in secure location

### 4. Security Updates
```bash
# Check for vulnerabilities
npm audit

# Update packages
npm update

# Review and commit changes
git add -A
git commit -m "chore: security updates"
```

## Troubleshooting

### Issue: Database Connection Failed
```bash
# Verify connection string
echo $DATABASE_URL

# Test connection
psql $DATABASE_URL -c "SELECT 1"
```

### Issue: Build Fails
```bash
# Clear cache
rm -rf node_modules .next
npm install
npm run build
```

### Issue: API Not Responding
```bash
# Check if server is running
pm2 list
pm2 logs paring

# Restart if needed
pm2 restart paring
```

### Issue: Authentication Not Working
- Verify NEXTAUTH_SECRET is set
- Check JWT_EXPIRES_IN format
- Verify database has user records
- Check browser localStorage for token

## Rollback Procedure

### If Deployment Fails
```bash
# Vercel
vercel rollback

# Self-hosted with git
git revert <commit-hash>
git push
pm2 restart paring
```

## Performance Optimization

### 1. Database Query Optimization
```bash
# Analyze slow queries in Supabase logs
# Look for queries > 1 second
# Add indexes as needed
```

### 2. Next.js Optimization
```bash
# Enable compression
npm run build

# Analyze bundle size
npm install -D @next/bundle-analyzer
```

### 3. Caching Strategy
- Static pages: 1 hour
- API routes: 5 minutes
- Authentication pages: no cache

## Maintenance Schedule

### Daily
- [ ] Monitor error logs
- [ ] Check database connections
- [ ] Review user feedback

### Weekly
- [ ] Review performance metrics
- [ ] Check security alerts
- [ ] Backup database

### Monthly
- [ ] Security updates
- [ ] Dependency updates
- [ ] Performance review
- [ ] User analytics review

## Support & Documentation

- API Documentation: `/docs/api.md`
- User Guide: `/docs/user-guide.md`
- Architecture: `/docs/architecture.md`
- Troubleshooting: `/docs/troubleshooting.md`

---

**Deployment Date:** ___________
**Deployed By:** ___________
**Version:** ___________
**Environment:** ___________
