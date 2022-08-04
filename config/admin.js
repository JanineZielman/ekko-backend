module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd557a4f49c750ef676f09425a6263e0c'),
  },
});
