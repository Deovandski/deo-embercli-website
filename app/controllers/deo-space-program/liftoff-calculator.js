import Ember from 'ember';

export default Ember.Controller.extend({
  // Radial Mounted Engine Constants (MT values are in KN.)
  THUD_MT_ATM: 108.20, THUD_MT_VAC: 120, THUD_COST: 820, THUD_FF: 40.07, THUD_MASS: 0.90,
  TWITCH_MT_ATM: 13.793, TWITCH_MT_VAC: 16, TWITCH_COST: 400, TWITCH_FF: 5.62, TWITCH_MASS: 0.09,
  SPIDER_MT_ATM: 1.793, SPIDER_MT_VAC: 2, SPIDER_COST: 120, SPIDER_FF: 0.70, SPIDER_MASS: 0.02,
  // Tiny Mounted Engine Constants (MT values are in KN.)
  SPARK_MT_ATM: 16.2, SPARK_MT_VAC: 18, SPARK_COST: 200, SPARK_FF: 6.11, SPARK_MASS: 0.10,
  ANT_MT_ATM: 0.51, ANT_MT_VAC: 2, ANT_COST: 110,  ANT_FF: 0.65, ANT_MASS: 0.02,
  // Small Mounted Engine Constants (MT values are in KN.)
  NERV_MT_ATM: 13.875, NERV_MT_VAC: 60, NERV_COST: 10000, NERV_FF: 7.64, NERV_MASS: 3.00,
  DART_MT_ATM: 153.53, DART_MT_VAC: 180, DART_COST: 3850, DART_FF: 53.91, DART_MASS: 1.0,
  RAPIER_MT_ATM: 162.30, RAPIER_MT_VAC: 180, RAPIER_COST: 6000, RAPIER_FF: 60.10, RAPIER_MASS: 2.00,
  VECTOR_MT_ATM: 936.5, VECTOR_MT_VAC: 1000, VECTOR_COST: 18000, VECTOR_FF: 323.28, VECTOR_MASS: 4.00,
  SWIVEL_MT_ATM: 168.75, SWIVEL_MT_VAC: 200, SWIVEL_COST: 1200, SWIVEL_FF: 63.65, SWIVEL_MASS: 1.50,
  RELIANT_MT_ATM: 200.67, RELIANT_MT_VAC: 215, RELIANT_COST: 1100, RELIANT_FF: 72.98, RELIANT_MASS: 1.25,
  TERRIER_MT_ATM: 14.783, TERRIER_MT_VAC: 60, TERRIER_COST: 390, TERRIER_FF: 17.71, TERRIER_MASS: 0.50,
  // Large Mounted Engine Constants (MT values are in KN.)
  TWINBOAR_MT_ATM: 18667, TWINBOAR_MT_VAC: 2000, TWINBOAR_COST: 17000, TWINBOAR_FF: 678.89, TWINBOAR_MASS: 42.50,
  MAINSAIL_MT_ATM: 1379.03, MAINSAIL_MT_VAC: 1500, MAINSAIL_COST: 13000, MAINSAIL_FF: 492.74, MAINSAIL_MASS: 6,
  SKIPPER_MT_ATM: 568.75, SKIPPER_MT_VAC: 650, SKIPPER_COST: 5300, SKIPPER_FF: 206.85, SKIPER_MASS: 3.00,
  POODLE_MT_ATM: 64.29, POODLE_MT_VAC: 250, POODLE_COST: 1300,  POODLE_FF: 72.74, POODLE_MASS: 1.75,
  // Extra Large Mounted Engine Constants (MT values are in KN.)
  MAMMOTH_MT_ATM: 3746, MAMMOTH_MT_VAC: 4000, MAMMOTH_COST: 39000,  MAMMOTH_FF: 1293.12, MAMMOTH_MASS: 15.00,
  RHINO_MT_ATM: 1500, RHINO_MT_VAC: 2000, RHINO_COST: 25000, RHINO_FF: 599.02, RHINO_MASS: 9.00,
  
  // Radial Mounted Engine Constants (MT values are in KN.)
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
  mainsailAmount: 0, mainsailTotalCost: 0,
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
  TWR_vac: false,
  TWR_atm: true,
  burnTime: 60,
  
  // Calculate necessary engines based on user Input and engine constants.
  calculateEnginesReqs: function(engineWeight, engineFuelFlow, engineMTVAC, engineMTATM, burnTime, desiredTWR, vesselWeight, bodyGravity, TM_type){
    // Convert Kg to Newtons, then to KiloNewtons
    var engineAddedKN = (((engineWeight / 1000) + (engineFuelFlow * burnTime)) * 9.80665) / 1000;
    // Set Engine thrust based on where it will be flying.
    var engineThrust = 0;
    if (TM_type = 0){
      engineThrust = engineMTATM;
    }
    else if (TM_type = 1){
      engineThrust = engineMTVAC;
    }
    else if (TM_type = 2){
      engineThrust = ((engineMTATM + engineMTVAC) / 2);
    }
    else{
      engineThrust = 0;
    }
    // End calculation if Engine cannot self-sustain let alone carry a fair amount of weight...
    if ((engineAddedKN * 1.05) > engineThrust){
      return -1;
    }
    // Add each engine 
    else{
      var knNeeded = vesselWeight * bodyGravity * desiredTWR;
      var enginesNeeded = 0;
      while(knNeeded > 0){
        knNeeded += engineAddedKN;
        knNeeded -= engineThrust;
        enginesNeeded += 1;
      }
      return enginesNeeded;
    }
  },
  enginesReqsWatcher: Ember.computed('selectedBodyGravity', 'vesselWeight', 'desiredTWR', 'TWR_vac', 'TWR_atm','burnTime', function() {
    // Offload the huge verification on the second IF statement.
    var commonVerification = false;
    if (this.get('selectedBodyGravity') > 0 && this.get('vesselWeight') > 0 && this.get('vesselWeight') < 1000000000 && this.get('desiredTWR') > 0 && this.get('desiredTWR') < 1000 && this.get('burnTime') > 0 && this.get('burnTime') < 550){commonVerification = true;}
    
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
      
      if(this.get('TWR_atm') === true && this.get('TWR_vac') === false){
        TM_type = 0;
      }
      else if(this.get('TWR_atm') === false && this.get('TWR_vac') === true){
        TM_type = 1;
      }
      else{
        TM_type = 2;
      }
      
      // engineAmount Calculation Vars
      // Radial Mounted Engine Constants (MT values are in KN.)
      var thudCalculatedAmount = this.calculateEnginesReqs(this.get('THUD_MASS'), this.get('THUD_FF'), this.get('THUD_MT_VAC'), this.get('THUD_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);
      var twitchCalculatedAmount = this.calculateEnginesReqs(this.get('TWITCH_MASS'), this.get('TWITCH_FF'), this.get('TWITCH_MT_VAC'), this.get('TWITCH_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);
      var spiderCalculatedAmount = this.calculateEnginesReqs(this.get('SPIDER_MASS'), this.get('SPIDER_FF'), this.get('SPIDER_MT_VAC'), this.get('SPIDER_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);
      // Tiny Mounted Engine Constants (MT values are in KN.)
      var sparkCalculatedAmount = this.calculateEnginesReqs(this.get('SPARK_MASS'), this.get('SPARK_FF'), this.get('SPARK_MT_VAC'), this.get('SPARK_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);
      var antCalculatedAmount = this.calculateEnginesReqs(this.get('ANT_MASS'), this.get('ANT_FF'), this.get('ANT_MT_VAC'), this.get('ANT_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);
      // Small Mounted Engine Constants (MT values are in KN.)
      var nervCalculatedAmount = this.calculateEnginesReqs(this.get('NERV_MASS'), this.get('NERV_FF'), this.get('NERV_MT_VAC'), this.get('NERV_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);
      var dartCalculatedAmount = this.calculateEnginesReqs(this.get('DART_MASS'), this.get('DART_FF'), this.get('DART_MT_VAC'), this.get('DART_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);
      var rapierCalculatedAmount = this.calculateEnginesReqs(this.get('RAPIER_MASS'), this.get('RAPIER_FF'), this.get('RAPIER_MT_VAC'), this.get('RAPIER_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);
      var vectorCalculatedAmount = this.calculateEnginesReqs(this.get('VECTOR_MASS'), this.get('VECTOR_FF'), this.get('VECTOR_MT_VAC'), this.get('VECTOR_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);
      var swivelCalculatedAmount = this.calculateEnginesReqs(this.get('SWIVEL_MASS'), this.get('SWIVEL_FF'), this.get('SWIVEL_MT_VAC'), this.get('SWIVEL_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);
      var reliantCalculatedAmount = this.calculateEnginesReqs(this.get('RELIANT_MASS'), this.get('RELIANT_FF'), this.get('RELIANT_MT_VAC'), this.get('RELIANT_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);
      var terrierCalculatedAmount = this.calculateEnginesReqs(this.get('TERRIER_MASS'), this.get('TERRIER_FF'), this.get('TERRIER_MT_VAC'), this.get('TERRIER_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);
      // Large Mounted Engine Constants (MT values are in KN.)
      var twinboarCalculatedAmount = this.calculateEnginesReqs(this.get('TWINBOAR_MASS'), this.get('TWINBOAR_FF'), this.get('TWINBOAR_MT_VAC'), this.get('TWINBOAR_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);
      var mainsailCalculatedAmount = this.calculateEnginesReqs(this.get('MAINSAIL_MASS'), this.get('MAINSAIL_FF'), this.get('MAINSAIL_MT_VAC'), this.get('MAINSAIL_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);
      var skipperCalculatedAmount = this.calculateEnginesReqs(this.get('SKIPER_MASS'), this.get('SKIPPER_FF'), this.get('SKIPPER_MT_VAC'), this.get('SKIPPER_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);
      var poodleCalculatedAmount = this.calculateEnginesReqs(this.get('POODLE_MASS'), this.get('POODLE_FF'), this.get('POODLE_MT_VAC'), this.get('POODLE_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);
      // Extra Large Mounted Engine Constants (MT values are in KN.)
      var mammothCalculatedAmount = this.calculateEnginesReqs(this.get('MAMMOTH_MASS'), this.get('MAMMOTH_FF'), this.get('MAMMOTH_MT_VAC'), this.get('MAMMOTH_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);
      var rhinoCalculatedAmount = this.calculateEnginesReqs(this.get('RHINO_MASS'), this.get('RHINO_FF'), this.get('RHINO_MT_VAC'), this.get('RHINO_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);

      
      // Radial Mounted Engine Constants (MT values are in KN.)
      this.set('thudAmount',thudCalculatedAmount); if(thudCalculatedAmount > 0){this.set('thudTotalCost',this.get('thudAmount')*this.get('THUD_COST'));} else{this.set('thudTotalCost',-1);}
      this.set('twitchAmount',twitchCalculatedAmount); if(twitchCalculatedAmount > 0){this.set('twitchTotalCost',this.get('twitchAmount')*this.get('TWITCH_COST'));} else{this.set('twitchTotalCost',-1);}
      this.set('spiderAmount',spiderCalculatedAmount); if(spiderCalculatedAmount > 0){this.set('spiderTotalCost',this.get('spiderAmount')*this.get('SPIDER_COST'));} else{this.set('spiderTotalCost',-1);}
      // Tiny Mounted Engine Constants (MT values are in KN.)
      this.set('sparkAmount',sparkCalculatedAmount); if(sparkCalculatedAmount > 0){this.set('sparkTotalCost',this.get('sparkAmount')*this.get('SPARK_COST'));} else{this.set('sparkTotalCost',-1);}
      this.set('antAmount',antCalculatedAmount); if(antCalculatedAmount > 0){this.set('antTotalCost',this.get('antAmount')*this.get('ANT_COST'));} else{this.set('antTotalCost',-1);}
      // Small Mounted Engine Constants (MT values are in KN.)
      this.set('nervAmount',nervCalculatedAmount); if(nervCalculatedAmount > 0){this.set('nervTotalCost',this.get('nervAmount')*this.get('NERV_COST'));} else{this.set('nervTotalCost',-1);}
      this.set('dartAmount',dartCalculatedAmount); if(dartCalculatedAmount > 0){this.set('dartTotalCost',this.get('dartAmount')*this.get('DART_COST'));} else{this.set('dartTotalCost',-1);}
      this.set('rapierAmount',rapierCalculatedAmount); if(rapierCalculatedAmount > 0){this.set('rapierTotalCost',this.get('rapierAmount')*this.get('RAPIER_COST'));} else{this.set('rapierTotalCost',-1);}
      this.set('vectorAmount',vectorCalculatedAmount); if(vectorCalculatedAmount > 0){this.set('vectorTotalCost',this.get('vectorAmount')*this.get('VECTOR_COST'));} else{this.set('vectorTotalCost',-1);}
      this.set('swivelAmount',swivelCalculatedAmount); if(swivelCalculatedAmount > 0){this.set('swivelTotalCost',this.get('swivelAmount')*this.get('SWIVEL_COST'));} else{this.set('swivelTotalCost',-1);}
      this.set('reliantAmount',reliantCalculatedAmount); if(reliantCalculatedAmount > 0){this.set('reliantTotalCost',this.get('reliantAmount')*this.get('RELIANT_COST'));} else{this.set('reliantTotalCost',-1);}
      this.set('terrierAmount',terrierCalculatedAmount); if(terrierCalculatedAmount > 0){this.set('terrierTotalCost',this.get('terrierAmount')*this.get('TERRIER_COST'));} else{this.set('terrierTotalCost',-1);}
      // Large Mounted Engine Constants (MT values are in KN.)
      this.set('twinboarAmount',twinboarCalculatedAmount); if(twinboarCalculatedAmount > 0){this.set('twinboarTotalCost',this.get('twinboarAmount')*this.get('TWINBOAR_COST'));} else{this.set('twinboarTotalCost',-1);}
      this.set('mainsailAmount',mainsailCalculatedAmount); if(mainsailCalculatedAmount > 0){this.set('mainsailTotalCost',this.get('mainsailAmount')*this.get('MAINSAIL_COST'));} else{this.set('mainsailTotalCost',-1);}
      this.set('skipperAmount',skipperCalculatedAmount); if(skipperCalculatedAmount > 0){this.set('skipperTotalCost',this.get('skipperAmount')*this.get('SKIPPER_COST'));} else{this.set('skipperTotalCost',-1);}
      this.set('poodleAmount',poodleCalculatedAmount); if(poodleCalculatedAmount > 0){this.set('poodleTotalCost',this.get('poodleAmount')*this.get('POODLE_COST'));} else{this.set('poodleTotalCost',-1);}
      // Extra Large Mounted Engine Constants (MT values are in KN.)
      this.set('mammothAmount',mammothCalculatedAmount); if(mammothCalculatedAmount > 0){this.set('mammothTotalCost',this.get('mammothAmount')*this.get('MAMMOTH_COST'));} else{this.set('mammothTotalCost',-1);}
      this.set('rhinoAmount',rhinoCalculatedAmount); if(rhinoCalculatedAmount > 0){this.set('rhinoTotalCost',this.get('rhinoAmount')*this.get('RHINO_COST'));} else{this.set('rhinoTotalCost',-1);}
    
    }
    else{
      // Clears up value due to bad search...
      
      // Radial Mounted Engine Constants (MT values are in KN.)
      this.set('thudAmount',-1); this.set('thudTotalCost',-1);
      this.set('twitchAmount',-1); this.set('twitchTotalCost',-1);
      this.set('spiderAmount',-1); this.set('spiderTotalCost',-1);
      // Tiny Mounted Engine Constants (MT values are in KN.)
      this.set('sparkAmount',-1); this.set('sparkTotalCost',-1);
      this.set('antAmount',-1); this.set('antTotalCost',-1);
      // Small Mounted Engine Constants (MT values are in KN.)
      this.set('nervAmount',-1); this.set('nervTotalCost',-1);
      this.set('dartAmount',-1); this.set('dartTotalCost',-1);
      this.set('rapierAmount',-1); this.set('rapierTotalCost',-1);
      this.set('vectorAmount',-1); this.set('vectorTotalCost',-1);
      this.set('swivelAmount',-1); this.set('swivelTotalCost',-1);
      this.set('reliantAmount',-1); this.set('reliantTotalCost',-1);
      this.set('terrierAmount',-1); this.set('terrierTotalCost',-1);
      // Large Mounted Engine Constants (MT values are in KN.)
      this.set('twinboarAmount',-1); this.set('twinboarTotalCost',-1);
      this.set('mainsailAmount',-1); this.set('mainsailTotalCost',-1);
      this.set('skipperAmount',-1); this.set('skipperTotalCost',-1);
      this.set('poodleAmount',-1); this.set('poodleTotalCost',-1);
      // Extra Large Mounted Engine Constants (MT values are in KN.)
      this.set('mammothAmount',-1); this.set('mammothTotalCost',-1);
      this.set('rhinoAmount',-1); this.set('rhinoTotalCost',-1);
    }
  }),
});
