import Ember from 'ember';

export default Ember.Controller.extend({
  // Radial Mounted Engine Constants (MT values are in KN.)
  PUFF_MT_ATM: 9.6, PUFF_MT_VAC: 20, PUFF_COST: 150,
  THUD_MT_ATM: 108.20, THUD_MT_VAC: 120, THUD_COST: 820,
  TWITCH_MT_ATM: 13.793, TWITCH_MT_VAC: 16, TWITCH_COST: 400,
  SPIDER_MT_ATM: 1.793, SPIDER_MT_VAC: 2, SPIDER_COST: 120,
  // Tiny Mounted Engine Constants (MT values are in KN.)
  SPARK_MT_ATM: 16.2, SPARK_MT_VAC: 18, SPARK_COST: 200,
  ANT_MT_ATM: 0.51, ANT_MT_VAC: 2, ANT_COST: 110,
  // Small Mounted Engine Constants (MT values are in KN.)
  NERV_MT_ATM: 13.875, NERV_MT_VAC: 60, NERV_COST: 10000,
  DART_MT_ATM: 153.53, DART_MT_VAC: 180, DART_COST: 3850,
  RAPIER_MT_ATM: 162.30, RAPIER_MT_VAC: 180, RAPIER_COST: 6000,
  VECTOR_MT_ATM: 936.5, VECTOR_MT_VAC: 1000, VECTOR_COST: 18000,
  SWIVEL_MT_ATM: 168.75, SWIVEL_MT_VAC: 200, SWIVEL_COST: 1200,
  RELIANT_MT_ATM: 200.67, RELIANT_MT_VAC: 215, RELIANT_COST: 1100,
  TERRIER_MT_ATM: 14.783, TERRIER_MT_VAC: 60, TERRIER_COST: 390,
  // Large Mounted Engine Constants (MT values are in KN.)
  TWINBOAR_MT_ATM: 18667, TWINBOAR_MT_VAC: 2000, TWINBOAR_COST: 17000,
  MAINSAL_MT_ATM: 1379, MAINSAL_MT_VAC: 2000, MAINSAL_COST: 13000,
  SKIPPER_MT_ATM: 568.75, SKIPPER_MT_VAC: 650, SKIPPER_COST: 5300,
  POODLE_MT_ATM: 64.29, POODLE_MT_VAC: 250, POODLE_COST: 1300,
  // Extra Large Mounted Engine Constants (MT values are in KN.)
  MAMMOTH_MT_ATM: 3746, MAMMOTH_MT_VAC: 4000, MAMMOTH_COST: 39000,
  RHINO_MT_ATM: 1500, RHINO_MT_VAC: 2000, RHINO_COST: 25000,
  
  // Radial Mounted Engine Constants (MT values are in KN.)
  puffAmount: 0, puffTotalCost: 0,
  thudAmount: 0, thudTotalCost: 0,
  twitchAmount: 0, twitchTotalCost: 0,
  spiderAmount: 0, spiderTotalCost: 0,
  // Tiny Mounted Engine Constants (MT values are in KN.)
  sparkAmount: 0, sparkTotalCost: 0,
  antAmount: 0, antTotalCost: 0,
  // Small Mounted Engine Constants (MT values are in KN.)
  nervAmount: 0, nervTotalCost: 0,
  dartAmount: 0, dartTotalCost: 0,
  rapierAmount: 0, rapierTotalCost: 0,
  vectorAmount: 0, vectorTotalCost: 0,
  swivelAmount: 0, swivelTotalCost: 0,
  reliantAmount: 0, reliantTotalCost: 0,
  terrierAmount: 0, terrierTotalCost: 0,
  // Large Mounted Engine Constants (MT values are in KN.)
  twinboarAmount: 0, twinboarTotalCost: 0,
  mainsalAmount: 0, mainsalTotalCost: 0,
  skipperAmount: 0, skipperTotalCost: 0,
  poodleAmount: 0, poodleTotalCost: 0,
  // Extra Large Mounted Engine Constants (MT values are in KN.)
  mammothAmount: 0, mammothTotalCost: 0,
  rhinoAmount: 0, rhinoTotalCost: 0,

  // Selected Body control
  selectedBodyName: 'Kerbin',
  KSP_BODIES: ["Kerbin", "Mum", "Minmus", "Moho", "Eve",
  "Gilly", "Duna", "Ike", "Dres", "Jool", "Laythe",
  "Vall", "Tylo", "Bop", "Pol", "Eeloo"],
  selectedBodyGravity: 0, // Gravity in m/s^2.
  bodySelectedWatcher: Ember.computed('selectedBodyName', function() {
    switch(this.get('selectedBodyName')) {
        case "Kerbin":
            this.set('selectedBodyGravity', 9.81);
            break;
        case "Mum":
            this.set('selectedBodyGravity', 1.63);
            break;
        case "Minmus":
            this.set('selectedBodyGravity', 0.491);
            break;
        case "Moho":
            this.set('selectedBodyGravity', 2.7);
            break;
        case "Eve":
            this.set('selectedBodyGravity', 16.7);
            break;
        case "Gilly":
            this.set('selectedBodyGravity', 0.049);
            break;
        case "Duna":
            this.set('selectedBodyGravity', 2.94);
            break;
        case "Ike":
            this.set('selectedBodyGravity', 1.10);
            break;
        case "Dres":
            this.set('selectedBodyGravity', 1.13);
            break;
        case "Jool":
            this.set('selectedBodyGravity', 7.85);
            break;
        case "Laythe":
            this.set('selectedBodyGravity', 7);
            break;
        case "Vall":
            this.set('selectedBodyGravity', 2.31);
            break;
        case "Tylo":
            this.set('selectedBodyGravity', 7.85);
            break;
        case "Bop":
            this.set('selectedBodyGravity', 0.589);
            break;
        case "Pol":
            this.set('selectedBodyGravity', 0.373);
            break;
        case "Eeloo":
            this.set('selectedBodyGravity', 1.69);
            break;
        default:
            this.set('selectedBodyGravity', 0);
            break;
    }
	}),
  // TWR vars.
  vesselWeight: 50, //tones
  desiredTWR: 2,
  kiloNewtonsNeeded: 0,
  TWR_vac: false,
  TWR_atm: true,
  
  // Calculate necessary engines and their total cost bassed on user Input.
  calculateEnginesReqs: Ember.computed('selectedBodyGravity', 'vesselWeight', 'desiredTWR', 'TWR_vac', 'TWR_atm', function() {
    // Offload the huge verification on the second IF statement.
    console.log('FUCK');
    var commonVerification = false;
    if (this.get('selectedBodyGravity') > 0 && this.get('vesselWeight') > 0 && this.get('desiredTWR') > 0){commonVerification = true;}
    
    console.log(commonVerification);
    // If vac or atm is seleted, perform the calc.
    if (commonVerification === true && this.get('TWR_vac') === true || commonVerification === true && this.get('TWR_atm') === true){
      // Setup what the user needs in kN
      var kn = this.get('selectedBodyGravity') * this.get('vesselWeight') * this.get('desiredTWR');
      this.set('kiloNewtonsNeeded', kn);
      
      
      if(this.get('TWR_atm') === true && this.get('TWR_vac') === false){
        
        this.set('puffAmount',50); this.set('puffTotalCost',10);
        console.log(this.get('puffAmount'));
      }
      else if(this.get('TWR_atm') === false && this.get('TWR_vac') === true){
        
      }
      else{
        
      }
      
      /*
  PUFF_MT_ATM
  PUFF_MT_VAC
  PUFF_COST
  THUD_MT_ATM
  THUD_MT_VAC
  THUD_COST
  TWITCH_MT_ATM
  TWITCH_MT_VAC
  TWITCH_COST
  SPIDER_MT_ATM
  SPIDER_MT_VAC
  SPIDER_COST
  
  SPARK_MT_ATM
  SPARK_MT_VAC
  SPARK_COST
  ANT_MT_ATM
  ANT_MT_VAC
  ANT_COST
  NERV_MT_ATM
  NERV_MT_VACNERV_COST
  
  DART_MT_ATM
  DART_MT_VAC
  DART_COST
  RAPIER_MT_ATM
  RAPIER_MT_VAC
  RAPIER_COST
  VECTOR_MT_ATM
  VECTOR_MT_VAC
  VECTOR_COST
  SWIVEL_MT_ATM
  SWIVEL_MT_VAC
  SWIVEL_COST
  RELIANT_MT_ATM
  RELIANT_MT_VAC
  RELIANT_COST
  TERRIER_MT_ATM
  TERRIER_MT_VAC
  TERRIER_COST
  
  TWINBOAR_MT_ATM
  TWINBOAR_MT_VAC
  TWINBOAR_COST
  MAINSAL_MT_ATM
  MAINSAL_MT_VAC
  MAINSAL_COST
  SKIPPER_MT_ATM
  SKIPPER_MT_VAC
  SKIPPER_COST
  POODLE_MT_ATM
  POODLE_MT_VAC
  POODLE_COST
  
  MAMMOTH_MT_ATM
  MAMMOTH_MT_VAC
  MAMMOTH_COST
  RHINO_MT_ATM
  RHINO_MT_VAC
  RHINO_COST
      
      */
      
      
      // Radial Engines calculation block
        
      // Radial Mounted Engine Constants (MT values are in KN.)
      this.set('puffAmount',0); this.set('puffTotalCost',0);
      this.set('thudAmount',0); this.set('thudTotalCost',0);
      this.set('twitchAmount',0); this.set('twitchTotalCost',0);
      this.set('spiderAmount',0); this.set('spiderTotalCost',0);
      // Tiny Mounted Engine Constants (MT values are in KN.)
      this.set('sparkAmount',0); this.set('sparkTotalCost',0);
      this.set('antAmount',0); this.set('antTotalCost',0);
      // Small Mounted Engine Constants (MT values are in KN.)
      this.set('nervAmount',0); this.set('nervTotalCost',0);
      this.set('dartAmount',0); this.set('dartTotalCost',0);
      this.set('rapierAmount',0); this.set('rapierTotalCost',0);
      this.set('vectorAmount',0); this.set('vectorTotalCost',0);
      this.set('swivelAmount',0); this.set('swivelTotalCost',0);
      this.set('reliantAmount',0); this.set('reliantTotalCost',0);
      this.set('terrierAmount',0); this.set('terrierTotalCost',0);
      // Large Mounted Engine Constants (MT values are in KN.)
      this.set('twinboarAmount',0); this.set('twinboarTotalCost',0);
      this.set('mainsalAmount',0); this.set('mainsalTotalCost',0);
      this.set('skipperAmount',0); this.set('skipperTotalCost',0);
      this.set('poodleAmount',0); this.set('poodleTotalCost',0);
      // Extra Large Mounted Engine Constants (MT values are in KN.)
      this.set('mammothAmount',0); this.set('mammothTotalCost',0);
      this.set('rhinoAmount',0); this.set('rhinoTotalCost',0);
    }
    else{
      // Clear up to hint user of bad input.
      this.set('kiloNewtonsNeeded', 0);
    }
  })
});
