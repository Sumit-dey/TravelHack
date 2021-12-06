'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    review: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    spotId: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.Spot, { foreignKey: 'spotId' })
    Review.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Review;
};
