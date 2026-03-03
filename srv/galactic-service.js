const cds = require('@sap/cds');

module.exports = cds.service.impl(function () {
  const { Spacefarers } = this.entities;

  this.before('CREATE', Spacefarers, (req) => {
    const data = req.data;

    if (!data.stardustCollection || data.stardustCollection < 10) {
      req.error(400, 'Insufficient stardust for cosmic travel. Minimum required: 10.');
    }

    if (!data.wormholeNavigationSkill || data.wormholeNavigationSkill < 5) {
      req.error(400, 'Wormhole navigation skill too low. Minimum required: 5.');
    }

    data.stardustCollection += 5;
    data.wormholeNavigationSkill += 1;

    console.log('Cosmic preparation complete. Candidate enhanced.');
  });

  this.after('CREATE', Spacefarers, (data, req) => {
    console.log(`Cosmic Launch Successful!
Subject: Welcome to the Galactic Federation

Dear ${data.fullName},

Congratulations on beginning your interstellar adventure!
May your stardust shine bright and your wormhole paths stay stable.

The Galactic Council`);
  });
});