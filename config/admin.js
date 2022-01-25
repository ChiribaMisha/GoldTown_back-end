module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e576e810bbc24fa7979c8b31e274b7a4'),
  },
});
