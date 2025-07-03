# p5.js Docker Interactive Environment

A Docker-based development environment for p5.js creative coding with hot reloading and interactive features.

## 🚀 Quick Start

### Prerequisites
- Docker Desktop installed on your system
- Docker Compose (usually included with Docker Desktop)

### Running the Environment

1. **Build and start the container:**
   ```bash
   docker-compose up --build
   ```

2. **Access the environment:**
   Open your browser and go to `http://localhost:8080`

3. **Start coding:**
   - Edit `public/sketch.js` to modify your p5.js sketch
   - Changes are automatically reflected in the browser
   - Use the interactive controls on the webpage

### Alternative Commands

- **Run in detached mode:**
  ```bash
  docker-compose up -d
  ```

- **Stop the container:**
  ```bash
  docker-compose down
  ```

- **Rebuild after changes:**
  ```bash
  docker-compose up --build
  ```

## 📁 Project Structure

```
p5js_テンプレ/
├── Dockerfile              # Docker container configuration
├── docker-compose.yml      # Docker Compose configuration
├── package.json            # Node.js dependencies
├── public/                 # Web files served by live-server
│   ├── index.html          # Main HTML file with UI
│   └── sketch.js           # Your p5.js sketch
└── README.md              # This file
```

## 🎨 Features

- **Hot Reloading**: Changes to your code are instantly reflected in the browser
- **Interactive Controls**: Built-in buttons and keyboard shortcuts
- **Multiple Color Palettes**: Switch between different color schemes
- **Mouse Interaction**: Click to add shapes, move mouse to interact
- **Responsive Design**: Clean, modern UI that works on different screen sizes

## 🎮 Controls

### Mouse Controls
- **Move mouse**: Interactive connections and shape changes
- **Click**: Add new shapes at mouse position

### Keyboard Controls
- **SPACE**: Toggle animation on/off
- **C**: Change color palette
- **R**: Reset the sketch

### Button Controls
- **Toggle Animation**: Start/stop shape movement
- **Change Colors**: Cycle through color palettes
- **Reset**: Clear and regenerate the sketch

## 🛠️ Customization

### Editing Your Sketch
1. Open `public/sketch.js` in your favorite code editor
2. Modify the p5.js code as needed
3. Save the file - changes will automatically appear in the browser

### Adding New Files
- Add new JavaScript files to the `public/` directory
- Include them in `public/index.html` with `<script>` tags
- Add CSS files and link them in the HTML

### Modifying the UI
- Edit `public/index.html` to change the webpage layout
- Modify the CSS styles in the `<style>` section
- Add new interactive elements and controls

## 🔧 Development Tips

1. **Console Logging**: Use `console.log()` in your sketch - check browser dev tools
2. **Error Debugging**: Check the browser console for p5.js errors
3. **Performance**: Monitor the frame rate with `print(frameRate())` in your draw loop
4. **File Organization**: Keep related functions together in `sketch.js`

## 📦 Dependencies

- **Node.js 18 Alpine**: Lightweight base image
- **live-server**: Provides hot reloading functionality
- **p5.js**: Loaded via CDN in the HTML file

## 🌐 Accessing from Other Devices

The server binds to `0.0.0.0:8080` inside the container, so you can access it from other devices on your network:

1. Find your computer's IP address
2. Access `http://YOUR_IP_ADDRESS:8080` from another device

## 🐛 Troubleshooting

### Port Already in Use
If port 8080 is already in use, modify the port mapping in `docker-compose.yml`:
```yaml
ports:
  - "8081:8080"  # Change 8081 to any available port
```

### Container Won't Start
- Make sure Docker Desktop is running
- Check that no other containers are using the same ports
- Try `docker-compose down` followed by `docker-compose up --build`

### Files Not Updating
- Ensure file changes are saved
- Check that the volume mounts are correct in `docker-compose.yml`
- Try refreshing the browser or clearing cache

## 🎯 Next Steps

- Explore p5.js documentation: https://p5js.org/reference/
- Try different creative coding techniques
- Add external libraries by including them in the HTML
- Experiment with different interaction patterns
- Create multiple sketches and switch between them

Happy coding! 🎨✨
