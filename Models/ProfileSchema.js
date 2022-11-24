const { model, Schema } = require('mongoose');


const ProfileSchema = new Schema({
  userID: { type: String, required: true },
  coins: { type: Number, default: 500, min: 0 },
  rope: { type: Number, default: 0 },
  fishingRodTOF: { type: Boolean, default: false },
  fishingRodLevel: { type: Number, default: 0 },
  seaweed: { type: Number, default: 0 },
  commonFish: { type: Number, default: 0},
  rareFish: { type: Number, default: 0},
  epicFish: { type: Number, default: 0},
  legFish: { type: Number, default: 0},
  fishScaleRope: { type: Number, default: 0},
  pickaxeTOF: { type: Boolean, default: false },
  pickaxeLevel: { type: Number, default: 0 },
  bronze: { type: Number, default: 0},
  titanium: { type: Number, default: 0},
  diamond: { type: Number, default: 0},
  stone: { type: Number, default: 0},
  iron: { type: Number, default: 0 },  
  axeTOF: { type: Boolean, default: false },
  axeLevel: { type: Number, default: 0 },
  darkWood: { type: Number, default: 0},
  mapleWood: { type: Number, default: 0},
  oakWood: { type: Number, default: 0},
  birchWood: { type: Number, default: 0},
  redMushroom: { type: Number, default: 0},
});



module.exports = model("ProfileSchema", ProfileSchema)
  