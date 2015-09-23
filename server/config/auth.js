module.exports = {
  
  'googleAuth' : {
    'clientID' : process.env.clientID || 'nothing',
    'clientSecret' : process.env.clientSecret || 'nothing',
    'callbackURL' : process.env.callbackURL || 'http://localhost:3000/auth/google/callback'
  }

};