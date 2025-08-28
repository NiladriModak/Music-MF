How to run locally

1. cd /main_app
2. npm install
3. cd /music_remote
4. npm install
5. npm run build
6. npm run serve
7. cd ../main_app
8. In main_app vite.config.js chnage external: "https://music-mf-8qfe.vercel.app/assets/remoteEntry.js" -----> http://localhost:3001/assets/remoteEntry.js
9. npm run dev

How to deploy it
1. Deploy the music_remote
2. get the url of music remote and paste in main_app's vite.config.js in externals: Remote deployed url
3. deploy the main_app

Explaination
1. Micro frontend is working here using the vite's "@originjs/vite-plugin-federation"
2. The remote exposes its MusicLibrary component
3. federation({
      name: "music_remote",
      filename: "remoteEntry.js",
      exposes: {
        "./MusicLibrary": "./src/MusicLibrary.jsx",
      },
      shared: ["react", "react-dom"],
    }),
4. The main app accepts the remote url
5. federation({
      name: "main_app",
      remotes: {
        music_remote: {
          external: "https://music-mf-8qfe.vercel.app/assets/remoteEntry.js",
        },
      },
      shared: ["react", "react-dom"],
    }), 
