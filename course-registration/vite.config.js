export default {
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Backend URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
};