# Restart Dev Server

Kill all existing development servers and start a fresh npm run dev on localhost:3000 in the background.

Use the bash tool to:

1. Find and kill any processes running on port 3000:
   ```bash
   lsof -ti:3000 | xargs kill -9 2>/dev/null || true
   ```

2. Kill any existing npm/node processes that might be dev servers:
   ```bash
   pkill -f "npm run dev" 2>/dev/null || true
   pkill -f "next dev" 2>/dev/null || true
   ```

3. Wait a moment for processes to fully terminate:
   ```bash
   sleep 2
   ```

4. Start a fresh development server in the background:
   ```bash
   nohup npm run dev > dev.log 2>&1 &
   ```

5. Verify the server started successfully:
   ```bash
   sleep 3 && curl -s http://localhost:3000 > /dev/null && echo "✅ Dev server started successfully on http://localhost:3000" || echo "❌ Dev server may not have started properly - check dev.log"
   ```
