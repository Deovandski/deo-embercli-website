import Ember from 'ember';

export default Ember.Controller.extend({
  // Radial Mounted Engine Constants (MT values are in KN.)
  PUFF_MT_ATM: 9.6, PUFF_MT_VAC: 20, PUFF_COST: 150, PUFF_FF: 8.5,
  THUD_MT_ATM: 108.20, THUD_MT_VAC: 120, THUD_COST: 820, THUD_FF: 40.07,
  TWITCH_MT_ATM: 13.793, TWITCH_MT_VAC: 16, TWITCH_COST: 400, TWITCH_FF: 5.62,
  SPIDER_MT_ATM: 1.793, SPIDER_MT_VAC: 2, SPIDER_COST: 120, SPIDER_FF: 0.70,
  // Tiny Mounted Engine Constants (MT values are in KN.)
  SPARK_MT_ATM: 16.2, SPARK_MT_VAC: 18, SPARK_COST: 200, SPARK_FF: 6.11,
  ANT_MT_ATM: 0.51, ANT_MT_VAC: 2, ANT_COST: 110,  ANT_FF: 0.65,
  // Small Mounted Engine Constants (MT values are in KN.)
  NERV_MT_ATM: 13.875, NERV_MT_VAC: 60, NERV_COST: 10000, NERV_FF: 7.64,
  DART_MT_ATM: 153.53, DART_MT_VAC: 180, DART_COST: 3850, DART_FF: 53.91,
  RAPIER_MT_ATM: 162.30, RAPIER_MT_VAC: 180, RAPIER_COST: 6000, RAPIER_FF: 60.10,
  VECTOR_MT_ATM: 936.5, VECTOR_MT_VAC: 1000, VECTOR_COST: 18000, VECTOR_FF: 323.28,
  SWIVEL_MT_ATM: 168.75, SWIVEL_MT_VAC: 200, SWIVEL_COST: 1200, SWIVEL_FF: 63.65,
  RELIANT_MT_ATM: 200.67, RELIANT_MT_VAC: 215, RELIANT_COST: 1100, RELIANT_FF: 72.98,
  TERRIER_MT_ATM: 14.783, TERRIER_MT_VAC: 60, TERRIER_COST: 390, TERRIER_FF: 17.71,
  // Large Mounted Engine Constants (MT values are in KN.)
  TWINBOAR_MT_ATM: 18667, TWINBOAR_MT_VAC: 2000, TWINBOAR_COST: 17000, TWINBOAR_FF: 678.89,
  MAINSAL_MT_ATM: 1379, MAINSAL_MT_VAC: 2000, MAINSAL_COST: 13000, MAINSAL_FF: 492.74,
  SKIPPER_MT_ATM: 568.75, SKIPPER_MT_VAC: 650, SKIPPER_COST: 5300, SKIPPER_FF: 206.85,
  POODLE_MT_ATM: 64.29, POODLE_MT_VAC: 250, POODLE_COST: 1300,  POODLE_FF: 72.74,
  // Extra Large Mounted Engine Constants (MT values are in KN.)
  MAMMOTH_MT_ATM: 3746, MAMMOTH_MT_VAC: 4000, MAMMOTH_COST: 39000,  MAMMOTH_FF: 1293.12,
  RHINO_MT_ATM: 1500, RHINO_MT_VAC: 2000, RHINO_COST: 25000, RHINO_FF: 599.02,
  
  // Radial Mounted Engine Constants (MT values are in KN.)
  puffAmount: 0, puffTotalCost: 0, puffFuelNeeded: 0,
  thudAmount: 0, thudTotalCost: 0, thudFuelNeeded: 0,
  twitchAmount: 0, twitchTotalCost: 0, twitchFuelNeeded: 0,
  spiderAmount: 0, spiderTotalCost: 0, spiderFuelNeeded: 0,
  // Tiny Mounted Engine Constants (MT values are in KN.)
  sparkAmount: 0, sparkTotalCost: 0, sparkFuelNeeded: 0,
  antAmount: 0, antTotalCost: 0, antFuelNeeded: 0,
  // Small Mounted Engine Constants (MT values are in KN.)
  nervAmount: 0, nervTotalCost: 0, nervFuelNeeded: 0,
  dartAmount: 0, dartTotalCost: 0, dartFuelNeeded: 0,
  rapierAmount: 0, rapierTotalCost: 0, rapierFuelNeeded: 0,
  vectorAmount: 0, vectorTotalCost: 0, vectorFuelNeeded: 0,
  swivelAmount: 0, swivelTotalCost: 0, swivelFuelNeeded: 0,
  reliantAmount: 0, reliantTotalCost: 0, reliantFuelNeeded: 0,
  terrierAmount: 0, terrierTotalCost: 0, terrierFuelNeeded: 0,
  // Large Mounted Engine Constants (MT values are in KN.)
  twinboarAmount: 0, twinboarTotalCost: 0, twinboarFuelNeeded: 0,
  mainsalAmount: 0, mainsalTotalCost: 0, mainsalFuelNeeded: 0,
  skipperAmount: 0, skipperTotalCost: 0, skipperFuelNeeded: 0,
  poodleAmount: 0, poodleTotalCost: 0, poodleFuelNeeded: 0,
  // Extra Large Mounted Engine Constants (MT values are in KN.)
  mammothAmount: 0, mammothTotalCost: 0, mammotFuelNeeded: 0,
  rhinoAmount: 0, rhinoTotalCost: 0,rhinoFuelNeeded: 0,

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
    var commonVerification = false;
    if (this.get('selectedBodyGravity') > 0 && this.get('vesselWeight') > 0 && this.get('desiredTWR') > 0){commonVerification = true;}
    
    // If vac or atm is seleted, perform the calc.
    if (commonVerification === true && this.get('TWR_vac') === true || commonVerification === true && this.get('TWR_atm') === true){
      // Setup what the user needs in kN
      var kn = this.get('selectedBodyGravity') * this.get('vesselWeight') * this.get('desiredTWR');
      this.set('kiloNewtonsNeeded', kn);
      
      // Type of TM selection
      /*
       * 0 = TWR_MT_ATM
       * 1 = TWR_MT_VAC
       * 2 = (TWR_MT_VAC + TWR_MT_ATM) / 2
      */
      var TM_type = -1;
      
      // engineAmount Calculation Vars
      // Radial Mounted Engine Constants (MT values are in KN.)
      var puffCalculatedAmount = 0;
      var thudCalculatedAmount = 0;
      var twitchCalculatedAmount = 0;
      var spiderCalculatedAmount = 0;
      // Tiny Mounted Engine Constants (MT values are in KN.)
      var sparkCalculatedAmount = 0;
      var antCalculatedAmount = 0;
      // Small Mounted Engine Constants (MT values are in KN.)
      var nervCalculatedAmount = 0;
      var dartCalculatedAmount = 0;
      var rapierCalculatedAmount = 0;
      var vectorCalculatedAmount = 0;
      var swivelCalculatedAmount = 0;
      var reliantCalculatedAmount = 0;
      var terrierCalculatedAmount = 0;
      // Large Mounted Engine Constants (MT values are in KN.)
      var twinboarCalculatedAmount = 0;
      var mainsalCalculatedAmount = 0;
      var skipperCalculatedAmount = 0;
      var poodleCalculatedAmount = 0;
      // Extra Large Mounted Engine Constants (MT values are in KN.)
      var mammothCalculatedAmount = 0;
      var rhinoCalculatedAmount = 0;
  
      if(this.get('TWR_atm') === true && this.get('TWR_vac') === false){
        TM_type = 0;
      }
      else if(this.get('TWR_atm') === false && this.get('TWR_vac') === true){
        TM_type = 1;
      }
      else{
        TM_type = 2;
      }
      
      if (TM_type === 0){
        /*
  PUFF_MT_ATM
  PUFF_MT_VAC
  THUD_MT_ATM
  THUD_MT_VAC
  TWITCH_MT_ATM
  TWITCH_MT_VAC
  SPIDER_MT_ATM
  SPIDER_MT_VAC
  * 
  SPARK_MT_ATM
  SPARK_MT_VAC
  ANT_MT_ATM
  ANT_MT_VAC
  NERV_MT_ATM
  NERV_MT_VAC
  *       /*
  
  DART_MT_ATM
  DART_MT_VAC
  
  RAPIER_MT_ATM
  RAPIER_MT_VAC
  
  VECTOR_MT_ATM
  VECTOR_MT_VAC
  
  SWIVEL_MT_ATM
  SWIVEL_MT_VAC
  
  RELIANT_MT_ATM
  RELIANT_MT_VAC
  
  TERRIER_MT_ATM
  TERRIER_MT_VAC
  
  
  TWINBOAR_MT_ATM
  TWINBOAR_MT_VAC
  
  MAINSAL_MT_ATM
  MAINSAL_MT_VAC
  
  SKIPPER_MT_ATM
  SKIPPER_MT_VAC
  
  POODLE_MT_ATM
  POODLE_MT_VAC
  
  
  MAMMOTH_MT_ATM
  MAMMOTH_MT_VAC
  
  RHINO_MT_ATM
  RHINO_MT_VAC
  
      */
      }
      else if(TM_type === 1){
      }
      else if(TM_type === 2){
      }
      
      // Radial Mounted Engine Constants (MT values are in KN.)
      this.set('puffAmount',puffCalculatedAmount); this.set('puffTotalCost',this.get('puffAmount')*this.get('PUFF_COST'));
      this.set('thudAmount',thudCalculatedAmount); this.set('thudTotalCost',this.get('thudAmount')*this.get('THUD_COST'));
      this.set('twitchAmount',twitchCalculatedAmount); this.set('twitchTotalCost',this.get('twitchAmount')*this.get('TWITCH_COST'));
      this.set('spiderAmount',spiderCalculatedAmount); this.set('spiderTotalCost',this.get('spiderAmount')*this.get('SPIDER_COST'));
      // Tiny Mounted Engine Constants (MT values are in KN.)
      this.set('sparkAmount',sparkCalculatedAmount); this.set('sparkTotalCost',this.get('sparkAmount')*this.get('SPARK_COST'));
      this.set('antAmount',antCalculatedAmount); this.set('antTotalCost',this.get('antAmount')*this.get('ANT_COST'));
      // Small Mounted Engine Constants (MT values are in KN.)
      this.set('nervAmount',nervCalculatedAmount); this.set('nervTotalCost',this.get('nervAmount')*this.get('NERV_COST'));
      this.set('dartAmount',dartCalculatedAmount); this.set('dartTotalCost',this.get('dartAmount')*this.get('DART_COST'));
      this.set('rapierAmount',rapierCalculatedAmount); this.set('rapierTotalCost',this.get('rapierAmount')*this.get('RAPIER_COST'));
      this.set('vectorAmount',vectorCalculatedAmount); this.set('vectorTotalCost',this.get('vectorAmount')*this.get('VECTOR_COST'));
      this.set('swivelAmount',swivelCalculatedAmount); this.set('swivelTotalCost',this.get('swivelAmount')*this.get('SWIVEL_COST'));
      this.set('reliantAmount',reliantCalculatedAmount); this.set('reliantTotalCost',this.get('reliantAmount')*this.get('RELIANT_COST'));
      this.set('terrierAmount',terrierCalculatedAmount); this.set('terrierTotalCost',this.get('terrierAmount')*this.get('TERRIER_COST'));
      // Large Mounted Engine Constants (MT values are in KN.)
      this.set('twinboarAmount',twinboarCalculatedAmount); this.set('twinboarTotalCost',this.get('twinboarAmount')*this.get('TWINBOAR_COST'));
      this.set('mainsalAmount',mainsalCalculatedAmount); this.set('mainsalTotalCost',this.get('mainsalAmount')*this.get('MAINSAL_COST'));
      this.set('skipperAmount',skipperCalculatedAmount); this.set('skipperTotalCost',this.get('skipperAmount')*this.get('SKIPPER_COST'));
      this.set('poodleAmount',poodleCalculatedAmount); this.set('poodleTotalCost',this.get('poodleAmount')*this.get('POODLE_COST'));
      // Extra Large Mounted Engine Constants (MT values are in KN.)
      this.set('mammothAmount',mammothCalculatedAmount); this.set('mammothTotalCost',this.get('mammothAmount')*this.get('MAMMOTH_COST'));
      this.set('rhinoAmount',rhinoCalculatedAmount); this.set('rhinoTotalCost',this.get('rhinoAmount')*this.get('RHINO_COST'));
    
    }
    else{
      // Clear up to hint user of bad input.
      this.set('kiloNewtonsNeeded', 0);
    }
  })
});
