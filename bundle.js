const vsce = require('vsce');
const path = require('path');
const fs = require('fs');

async function packageExtension() {
  try {
    const bundlePath = path.resolve(__dirname, 'bundle');
    if (!fs.existsSync(bundlePath)) {
      fs.mkdirSync(bundlePath);
    }

    const packageOptions = {
      cwd: __dirname,
      packagePath: './bundle/hex2int.vsix',
      icon: {
        "base": path.resolve(__dirname, 'res', 'icon.png'), // Specify the correct relative path to the icon
      }
    };
    await vsce.createVSIX(packageOptions);
    console.log('Extension bundled successfully!');
  } catch (error) {
    console.error('Error bundling extension:', error);
  }
}

packageExtension();
