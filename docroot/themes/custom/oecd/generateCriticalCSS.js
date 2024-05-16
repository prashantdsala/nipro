import('fs').then(fs => {
  import('critical').then(critical => {
    process.setMaxListeners(15); // Increase the limit as per your requirements

    const options = {
      base: './dist/app-drupal',
      src: 'https://space-dev.qed42.net/', // Replace with the path to your Dev/Prod instance
      inline: false, // Set inline to false to generate a separate file
      dimensions: [
        {
          width: 360,
          height: 640,
        },
        {
          width: 375,
          height: 640,
        },
        {
          width: 412,
          height: 823,
        },
        {
          width: 414,
          height: 896,
        },
        {
          width: 768,
          height: 1024,
        },
        {
          width: 800,
          height: 1280,
        },
        {
          width: 1280,
          height: 720,
        },
        {
          width: 1440,
          height: 900,
        },
        {
          width: 1536,
          height: 864,
        },
        {
          width: 1920,
          height: 1080,
        },
      ],
    };

    const outputPath = 'apps/drupal/css/critical.css'; // Replace with your desired output file path

    // Clear the existing critical.css file
    fs.writeFile(outputPath, '', (err) => {
      if (err) {
        console.error('Error clearing critical.css file:', err);
      } else {
        console.log('Critical CSS file cleared successfully!');
        generateCriticalCSS();
      }
    });

    function generateCriticalCSS() {
      critical.generate(options).then(({ css }) => {
        fs.writeFile(outputPath, css, (err) => {
          if (err) {
            console.error('Error generating critical CSS:', err);
          } else {
            console.log('Critical CSS generated and saved successfully!');
            console.log('Output file:', outputPath);
          }
        });
      }).catch(err => {
        console.error('Error generating critical CSS:', err);
      });
    }
  }).catch(err => {
    console.error('Error importing critical:', err);
  });
}).catch(err => {
  console.error('Error importing fs:', err);
});
