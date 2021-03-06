import Ember from 'ember';

export default Ember.Controller.extend({
  
  /* CONSTANTS FOR ALL ENGINES
   * x_MT_ATM (1 atm Max Thrust) and x_MT_VAC (Vaccum Max Thrust) constants are in kN
   * x_FF (Max Fuel Flow) constant is in kg/s.
   * x_MASS is the Dry Weight of the engine, and it is in tons.
  */
  // Radial Mounted Engine
  THUD_MT_ATM: 108.20, THUD_MT_VAC: 120, THUD_COST: 820, THUD_FF: 40.07, THUD_MASS: 0.90,
  TWITCH_MT_ATM: 13.793, TWITCH_MT_VAC: 16, TWITCH_COST: 400, TWITCH_FF: 5.62, TWITCH_MASS: 0.09,
  SPIDER_MT_ATM: 1.793, SPIDER_MT_VAC: 2, SPIDER_COST: 120, SPIDER_FF: 0.70, SPIDER_MASS: 0.02,
  // Tiny Mounted Engine
  SPARK_MT_ATM: 16.2, SPARK_MT_VAC: 18, SPARK_COST: 200, SPARK_FF: 6.11, SPARK_MASS: 0.10,
  ANT_MT_ATM: 0.51, ANT_MT_VAC: 2, ANT_COST: 110,  ANT_FF: 0.65, ANT_MASS: 0.02,
  // Small Mounted Engine
  NERV_MT_ATM: 13.875, NERV_MT_VAC: 60, NERV_COST: 10000, NERV_FF: 7.64, NERV_MASS: 3.00,
  DART_MT_ATM: 153.53, DART_MT_VAC: 180, DART_COST: 3850, DART_FF: 53.91, DART_MASS: 1.0,
  RAPIER_MT_ATM: 162.30, RAPIER_MT_VAC: 180, RAPIER_COST: 6000, RAPIER_FF: 60.10, RAPIER_MASS: 2.00,
  VECTOR_MT_ATM: 936.5, VECTOR_MT_VAC: 1000, VECTOR_COST: 18000, VECTOR_FF: 323.28, VECTOR_MASS: 4.00,
  SWIVEL_MT_ATM: 168.75, SWIVEL_MT_VAC: 200, SWIVEL_COST: 1200, SWIVEL_FF: 63.65, SWIVEL_MASS: 1.50,
  RELIANT_MT_ATM: 200.67, RELIANT_MT_VAC: 215, RELIANT_COST: 1100, RELIANT_FF: 72.98, RELIANT_MASS: 1.25,
  TERRIER_MT_ATM: 14.783, TERRIER_MT_VAC: 60, TERRIER_COST: 390, TERRIER_FF: 17.71, TERRIER_MASS: 0.50,
  // Large Mounted Engine
  TWINBOAR_MT_ATM: 18667, TWINBOAR_MT_VAC: 2000, TWINBOAR_COST: 17000, TWINBOAR_FF: 678.89, TWINBOAR_MASS: 42.50,
  MAINSAIL_MT_ATM: 1379.03, MAINSAIL_MT_VAC: 1500, MAINSAIL_COST: 13000, MAINSAIL_FF: 492.74, MAINSAIL_MASS: 6,
  SKIPPER_MT_ATM: 568.75, SKIPPER_MT_VAC: 650, SKIPPER_COST: 5300, SKIPPER_FF: 206.85, SKIPER_MASS: 3.00,
  POODLE_MT_ATM: 64.29, POODLE_MT_VAC: 250, POODLE_COST: 1300,  POODLE_FF: 72.74, POODLE_MASS: 1.75,
  // Extra Large Mounted
  MAMMOTH_MT_ATM: 3746, MAMMOTH_MT_VAC: 4000, MAMMOTH_COST: 39000,  MAMMOTH_FF: 1293.12, MAMMOTH_MASS: 15.00,
  RHINO_MT_ATM: 1500, RHINO_MT_VAC: 2000, RHINO_COST: 25000, RHINO_FF: 599.02, RHINO_MASS: 9.00,
  
  /* VARIABLES FOR ALL ENGINES BEING DISPLAYED ON VIEW.
   * xAmount is the # of engines.
   * xTotalCost is the cost of the # of engines only!
  */
  // Radial Mounted Engine
  thudAmount: 0, thudTotalCost: 0,
  twitchAmount: 0, twitchTotalCost: 0,
  spiderAmount: 0, spiderTotalCost: 0,
  // Tiny Mounted Engine
  sparkAmount: 0, sparkTotalCost: 0,
  antAmount: 0, antTotalCost: 0,
  // Small Mounted Engine
  nervAmount: 0, nervTotalCost: 0,
  dartAmount: 0, dartTotalCost: 0,
  rapierAmount: 0, rapierTotalCost: 0,
  vectorAmount: 0, vectorTotalCost: 0,
  swivelAmount: 0, swivelTotalCost: 0,
  reliantAmount: 0, reliantTotalCost: 0,
  terrierAmount: 0, terrierTotalCost: 0,
  // Large Mounted Engine
  twinboarAmount: 0, twinboarTotalCost: 0,
  mainsailAmount: 0, mainsailTotalCost: 0,
  skipperAmount: 0, skipperTotalCost: 0,
  poodleAmount: 0, poodleTotalCost: 0,
  // Extra Large Mounted Engine
  mammothAmount: 0, mammothTotalCost: 0,
  rhinoAmount: 0, rhinoTotalCost: 0,

  // Recommend engines
  lowestAmountNeeded: 0, lowestAmountCost: 0, lowestAmountName: 0,
  cheapestNeeded: 0, cheapestCost: 0, cheapestName: 0,
  showRecommendations: false,

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
  
  // USER INPUT vars.
  vesselWeight: 50, //tones
  desiredTWR: 2, // Ratio
  TWR_vac: false,
  TWR_atm: true,
  burnTime: 60, // Seconds
  
  // Calculate necessary engines based on user Input and engine constants.
  calculateEnginesReqs: function(engineWeight, engineFuelFlow, engineMTVAC, engineMTATM, burnTime, desiredTWR, vesselWeight, bodyGravity, TM_type){
    /* 1. Transform Engine Dry Weight into kg.
     * 2. Find the amount of fuel necessary in order to keep the engine burning for x seconds
     * 3. Add steps #1 and #2 and convert kg to Newtons.
     * 4. Convert Newtons to kN 
    */
    var engineAddedKN = (((engineWeight / 1000) + (engineFuelFlow * burnTime)) * 9.80665) / 1000;
    // Set Engine thrust based on where it will be flying.
    var engineThrust = 0;
    if (TM_type === 0){
      engineThrust = engineMTATM;
    }
    else if (TM_type === 1){
      engineThrust = engineMTVAC;
    }
    else if (TM_type === 2){
      engineThrust = ((engineMTATM + engineMTVAC) / 2);
    }
    else{
      engineThrust = 0;
    }
    /* If 95% of the Engine Thrust can liftoff the added kN, keep adding engines
     * until fulfill knNeeded. Otherwise, end calculation and return -1...
    */
    if ((engineThrust * 0.95) > engineAddedKN){
      // Find the kN of the Dry Vessel Mass based on selected body and desired Thrust to Weight Ratio.
      var knNeeded = vesselWeight * bodyGravity * desiredTWR;
      var enginesNeeded = 0;
      while(knNeeded > 0){
        knNeeded += engineAddedKN;
        knNeeded -= engineThrust;
        enginesNeeded += 1;
      }
      return enginesNeeded;
    }
    else{
      return -1;
    }
  },
  enginesReqsWatcher: Ember.computed('selectedBodyGravity', 'vesselWeight', 'desiredTWR', 'TWR_vac', 'TWR_atm','burnTime', function() {
    // Offload the shared verifications performed on the second IF statement.
    var commonVerification = false;
    if (this.get('selectedBodyGravity') > 0 && this.get('vesselWeight') > 0 && this.get('vesselWeight') < 1000000000 && this.get('desiredTWR') > 0 && this.get('desiredTWR') < 1000 && this.get('burnTime') > 0 && this.get('burnTime') < 550){
      commonVerification = true;
    }
    
    // If vac or atm is seleted, perform the calc.
    if (commonVerification === true && this.get('TWR_vac') === true || commonVerification === true && this.get('TWR_atm') === true){
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
      
      // CALCULATE # OF EACH ENGINES NEEDED
      
      // Radial Mounted Engine
      var thudCalculatedAmount = this.calculateEnginesReqs(this.get('THUD_MASS'), this.get('THUD_FF'), this.get('THUD_MT_VAC'), this.get('THUD_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);
      var twitchCalculatedAmount = this.calculateEnginesReqs(this.get('TWITCH_MASS'), this.get('TWITCH_FF'), this.get('TWITCH_MT_VAC'), this.get('TWITCH_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);
      var spiderCalculatedAmount = this.calculateEnginesReqs(this.get('SPIDER_MASS'), this.get('SPIDER_FF'), this.get('SPIDER_MT_VAC'), this.get('SPIDER_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);
      // Tiny Mounted Engine
      var sparkCalculatedAmount = this.calculateEnginesReqs(this.get('SPARK_MASS'), this.get('SPARK_FF'), this.get('SPARK_MT_VAC'), this.get('SPARK_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);
      var antCalculatedAmount = this.calculateEnginesReqs(this.get('ANT_MASS'), this.get('ANT_FF'), this.get('ANT_MT_VAC'), this.get('ANT_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);
      // Small Mounted Engine
      var nervCalculatedAmount = this.calculateEnginesReqs(this.get('NERV_MASS'), this.get('NERV_FF'), this.get('NERV_MT_VAC'), this.get('NERV_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);
      var dartCalculatedAmount = this.calculateEnginesReqs(this.get('DART_MASS'), this.get('DART_FF'), this.get('DART_MT_VAC'), this.get('DART_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);
      var rapierCalculatedAmount = this.calculateEnginesReqs(this.get('RAPIER_MASS'), this.get('RAPIER_FF'), this.get('RAPIER_MT_VAC'), this.get('RAPIER_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);
      var vectorCalculatedAmount = this.calculateEnginesReqs(this.get('VECTOR_MASS'), this.get('VECTOR_FF'), this.get('VECTOR_MT_VAC'), this.get('VECTOR_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);
      var swivelCalculatedAmount = this.calculateEnginesReqs(this.get('SWIVEL_MASS'), this.get('SWIVEL_FF'), this.get('SWIVEL_MT_VAC'), this.get('SWIVEL_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);
      var reliantCalculatedAmount = this.calculateEnginesReqs(this.get('RELIANT_MASS'), this.get('RELIANT_FF'), this.get('RELIANT_MT_VAC'), this.get('RELIANT_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);
      var terrierCalculatedAmount = this.calculateEnginesReqs(this.get('TERRIER_MASS'), this.get('TERRIER_FF'), this.get('TERRIER_MT_VAC'), this.get('TERRIER_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);
      // Large Mounted Engine
      var twinboarCalculatedAmount = this.calculateEnginesReqs(this.get('TWINBOAR_MASS'), this.get('TWINBOAR_FF'), this.get('TWINBOAR_MT_VAC'), this.get('TWINBOAR_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);
      var mainsailCalculatedAmount = this.calculateEnginesReqs(this.get('MAINSAIL_MASS'), this.get('MAINSAIL_FF'), this.get('MAINSAIL_MT_VAC'), this.get('MAINSAIL_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);
      var skipperCalculatedAmount = this.calculateEnginesReqs(this.get('SKIPER_MASS'), this.get('SKIPPER_FF'), this.get('SKIPPER_MT_VAC'), this.get('SKIPPER_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);
      var poodleCalculatedAmount = this.calculateEnginesReqs(this.get('POODLE_MASS'), this.get('POODLE_FF'), this.get('POODLE_MT_VAC'), this.get('POODLE_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);
      // Extra Large Mounted Engine
      var mammothCalculatedAmount = this.calculateEnginesReqs(this.get('MAMMOTH_MASS'), this.get('MAMMOTH_FF'), this.get('MAMMOTH_MT_VAC'), this.get('MAMMOTH_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);
      var rhinoCalculatedAmount = this.calculateEnginesReqs(this.get('RHINO_MASS'), this.get('RHINO_FF'), this.get('RHINO_MT_VAC'), this.get('RHINO_MT_ATM'), this.get('burnTime'), this.get('desiredTWR'), this.get('vesselWeight'), this.get('selectedBodyGravity'), TM_type);

      // SETUP TOTAL COST OF EACH ENGINE
      
      // Radial Mounted Engine
      this.set('thudAmount',thudCalculatedAmount); if(thudCalculatedAmount > 0){this.set('thudTotalCost',this.get('thudAmount')*this.get('THUD_COST'));} else{this.set('thudTotalCost',-1);}
      this.set('twitchAmount',twitchCalculatedAmount); if(twitchCalculatedAmount > 0){this.set('twitchTotalCost',this.get('twitchAmount')*this.get('TWITCH_COST'));} else{this.set('twitchTotalCost',-1);}
      this.set('spiderAmount',spiderCalculatedAmount); if(spiderCalculatedAmount > 0){this.set('spiderTotalCost',this.get('spiderAmount')*this.get('SPIDER_COST'));} else{this.set('spiderTotalCost',-1);}
      // Tiny Mounted Engine
      this.set('sparkAmount',sparkCalculatedAmount); if(sparkCalculatedAmount > 0){this.set('sparkTotalCost',this.get('sparkAmount')*this.get('SPARK_COST'));} else{this.set('sparkTotalCost',-1);}
      this.set('antAmount',antCalculatedAmount); if(antCalculatedAmount > 0){this.set('antTotalCost',this.get('antAmount')*this.get('ANT_COST'));} else{this.set('antTotalCost',-1);}
      // Small Mounted Engine
      this.set('nervAmount',nervCalculatedAmount); if(nervCalculatedAmount > 0){this.set('nervTotalCost',this.get('nervAmount')*this.get('NERV_COST'));} else{this.set('nervTotalCost',-1);}
      this.set('dartAmount',dartCalculatedAmount); if(dartCalculatedAmount > 0){this.set('dartTotalCost',this.get('dartAmount')*this.get('DART_COST'));} else{this.set('dartTotalCost',-1);}
      this.set('rapierAmount',rapierCalculatedAmount); if(rapierCalculatedAmount > 0){this.set('rapierTotalCost',this.get('rapierAmount')*this.get('RAPIER_COST'));} else{this.set('rapierTotalCost',-1);}
      this.set('vectorAmount',vectorCalculatedAmount); if(vectorCalculatedAmount > 0){this.set('vectorTotalCost',this.get('vectorAmount')*this.get('VECTOR_COST'));} else{this.set('vectorTotalCost',-1);}
      this.set('swivelAmount',swivelCalculatedAmount); if(swivelCalculatedAmount > 0){this.set('swivelTotalCost',this.get('swivelAmount')*this.get('SWIVEL_COST'));} else{this.set('swivelTotalCost',-1);}
      this.set('reliantAmount',reliantCalculatedAmount); if(reliantCalculatedAmount > 0){this.set('reliantTotalCost',this.get('reliantAmount')*this.get('RELIANT_COST'));} else{this.set('reliantTotalCost',-1);}
      this.set('terrierAmount',terrierCalculatedAmount); if(terrierCalculatedAmount > 0){this.set('terrierTotalCost',this.get('terrierAmount')*this.get('TERRIER_COST'));} else{this.set('terrierTotalCost',-1);}
      // Large Mounted Engine
      this.set('twinboarAmount',twinboarCalculatedAmount); if(twinboarCalculatedAmount > 0){this.set('twinboarTotalCost',this.get('twinboarAmount')*this.get('TWINBOAR_COST'));} else{this.set('twinboarTotalCost',-1);}
      this.set('mainsailAmount',mainsailCalculatedAmount); if(mainsailCalculatedAmount > 0){this.set('mainsailTotalCost',this.get('mainsailAmount')*this.get('MAINSAIL_COST'));} else{this.set('mainsailTotalCost',-1);}
      this.set('skipperAmount',skipperCalculatedAmount); if(skipperCalculatedAmount > 0){this.set('skipperTotalCost',this.get('skipperAmount')*this.get('SKIPPER_COST'));} else{this.set('skipperTotalCost',-1);}
      this.set('poodleAmount',poodleCalculatedAmount); if(poodleCalculatedAmount > 0){this.set('poodleTotalCost',this.get('poodleAmount')*this.get('POODLE_COST'));} else{this.set('poodleTotalCost',-1);}
      // Extra Large Mounted Engine
      this.set('mammothAmount',mammothCalculatedAmount); if(mammothCalculatedAmount > 0){this.set('mammothTotalCost',this.get('mammothAmount')*this.get('MAMMOTH_COST'));} else{this.set('mammothTotalCost',-1);}
      this.set('rhinoAmount',rhinoCalculatedAmount); if(rhinoCalculatedAmount > 0){this.set('rhinoTotalCost',this.get('rhinoAmount')*this.get('RHINO_COST'));} else{this.set('rhinoTotalCost',-1);}
    
      // Recommend engines
      
      var lowestAmountNeededArray = [thudCalculatedAmount,
      twitchCalculatedAmount,spiderCalculatedAmount,antCalculatedAmount,
      nervCalculatedAmount,dartCalculatedAmount,rapierCalculatedAmount,
      vectorCalculatedAmount,swivelCalculatedAmount,reliantCalculatedAmount,
      terrierCalculatedAmount, twinboarCalculatedAmount, mainsailCalculatedAmount,
      skipperCalculatedAmount, poodleCalculatedAmount, rhinoCalculatedAmount];
      
      var lowestCostArray = [this.get('thudTotalCost'),
      this.get('twitchTotalCost'),this.get('spiderTotalCost'),this.get('antTotalCost'),
      this.get('nervTotalCost'),this.get('dartTotalCost'),this.get('rapierTotalCost'),
      this.get('vectorTotalCost'),this.get('swivelTotalCost'),this.get('reliantTotalCost'),
      this.get('terrierTotalCost'), this.get('twinboarTotalCost'), this.get('mainsailTotalCost'),
      this.get('skipperTotalCost'), this.get('poodleTotalCost'), this.get('rhinoTotalCost')];
      
      var lam = Number.MAX_VALUE;
      for (var i = 0; i < lowestAmountNeededArray.length; i++) {
        lam = Math.min(lam, lowestAmountNeededArray[i]);
      }
      var lc = Number.MAX_VALUE;
      for (var m = 0; m < lowestCostArray.length; m++) {
        lc = Math.min(lc, lowestCostArray[m]);
      }
      
      if (thudCalculatedAmount === lam){
        this.set('lowestAmountNeeded',thudCalculatedAmount); this.set('lowestAmountCost',this.get('thudTotalCost')); this.set('lowestAmountName',"Thud");
      }
      else if (twitchCalculatedAmount === lam){
        this.set('lowestAmountNeeded',twitchCalculatedAmount); this.set('lowestAmountCost',this.get('twitchTotalCost')); this.set('lowestAmountName',"Twitch");
      }
      else if (spiderCalculatedAmount === lam){
        this.set('lowestAmountNeeded',spiderCalculatedAmount); this.set('lowestAmountCost',this.get('spiderTotalCost')); this.set('lowestAmountName',"Spider");
      }
      else if (sparkCalculatedAmount === lam){
        this.set('lowestAmountNeeded',sparkCalculatedAmount); this.set('lowestAmountCost',this.get('sparkTotalCost')); this.set('lowestAmountName',"Spark");
      }
      else if (antCalculatedAmount === lam){
        this.set('lowestAmountNeeded',antCalculatedAmount); this.set('lowestAmountCost',this.get('antTotalCost')); this.set('lowestAmountName',"Ant");
      }
      else if (nervCalculatedAmount === lam){
        this.set('lowestAmountNeeded',nervCalculatedAmount); this.set('lowestAmountCost',this.get('nervTotalCost')); this.set('lowestAmountName',"Nerv");
      }
      else if (dartCalculatedAmount === lam){
        this.set('lowestAmountNeeded',dartCalculatedAmount); this.set('lowestAmountCost',this.get('dartTotalCost')); this.set('lowestAmountName',"Dart");
      }
      else if (rapierCalculatedAmount === lam){
        this.set('lowestAmountNeeded',rapierCalculatedAmount); this.set('lowestAmountCost',this.get('rapierTotalCost')); this.set('lowestAmountName',"Rapier");
      }
      else if (vectorCalculatedAmount === lam){
        this.set('lowestAmountNeeded',vectorCalculatedAmount); this.set('lowestAmountCost',this.get('vectorTotalCost')); this.set('lowestAmountName',"Vector");
      }
      else if (swivelCalculatedAmount === lam){
        this.set('lowestAmountNeeded',swivelCalculatedAmount); this.set('lowestAmountCost',this.get('swivelTotalCost')); this.set('lowestAmountName',"Swivel");
      }
      else if (reliantCalculatedAmount === lam){
        this.set('lowestAmountNeeded',reliantCalculatedAmount); this.set('lowestAmountCost',this.get('reliantTotalCost')); this.set('lowestAmountName',"Reliant");
      }
      else if (terrierCalculatedAmount === lam){
        this.set('lowestAmountNeeded',terrierCalculatedAmount); this.set('lowestAmountCost',this.get('terrierTotalCost')); this.set('lowestAmountName',"Terrier");
      }
      else if (twinboarCalculatedAmount === lam){
        this.set('lowestAmountNeeded',twinboarCalculatedAmount); this.set('lowestAmountCost',this.get('twinboarTotalCost')); this.set('lowestAmountName',"Twinboar");
      }
      else if (mainsailCalculatedAmount === lam){
        this.set('lowestAmountNeeded',mainsailCalculatedAmount); this.set('lowestAmountCost',this.get('mainsailTotalCost')); this.set('lowestAmountName',"Mainsal");
      }
      else if (skipperCalculatedAmount === lam){
        this.set('lowestAmountNeeded',skipperCalculatedAmount); this.set('lowestAmountCost',this.get('skipperTotalCost')); this.set('lowestAmountName',"Skipper");
      }
      else if (poodleCalculatedAmount === lam){
        this.set('lowestAmountNeeded',poodleCalculatedAmount); this.set('lowestAmountCost',this.get('poodleTotalCost')); this.set('lowestAmountName',"Poodle");
      }
      else if (mammothCalculatedAmount === lam){
        this.set('lowestAmountNeeded',mammothCalculatedAmount); this.set('lowestAmountCost',this.get('mammothTotalCost')); this.set('lowestAmountName',"Mammoth");
      }
      else if (rhinoCalculatedAmount === lam){
        this.set('lowestAmountNeeded',rhinoCalculatedAmount); this.set('lowestAmountCost',this.get('rhinoTotalCost')); this.set('lowestAmountName',"Rhino");
      }
      else{
        this.set('lowestAmountNeeded',-1); this.set('lowestAmountCost',-1); this.set('lowestAmountName',"None");
      }
      
      // lowest Cost finder
      if (this.get('thudTotalCost') === lc){
        this.set('cheapestNeeded',thudCalculatedAmount); this.set('cheapestCost',this.get('thudTotalCost')); this.set('cheapestName',"Thud");
      }
      else if (this.get('twitchTotalCost') === lc){
        this.set('cheapestNeeded',twitchCalculatedAmount); this.set('cheapestCost',this.get('twitchTotalCost')); this.set('cheapestName',"Twitch");
      }
      else if (this.get('spiderTotalCost') === lc){
        this.set('cheapestNeeded',spiderCalculatedAmount); this.set('cheapestCost',this.get('spiderTotalCost')); this.set('cheapestName',"Spider");
      }
      else if (this.get('sparkTotalCost') === lc){
        this.set('cheapestNeeded',sparkCalculatedAmount); this.set('cheapestCost',this.get('sparkTotalCost')); this.set('cheapestName',"Spark");
      }
      else if (this.get('antTotalCost') === lc){
        this.set('cheapestNeeded',antCalculatedAmount); this.set('cheapestCost',this.get('antTotalCost')); this.set('cheapestName',"Ant");
      }
      else if (this.get('nervTotalCost') === lc){
        this.set('cheapestNeeded',nervCalculatedAmount); this.set('cheapestCost',this.get('nervTotalCost')); this.set('cheapestName',"Nerv");
      }
      else if (this.get('dartTotalCost') === lc){
        this.set('cheapestNeeded',dartCalculatedAmount); this.set('cheapestCost',this.get('dartTotalCost')); this.set('cheapestName',"Dart");
      }
      else if (this.get('rapierTotalCost') === lc){
        this.set('cheapestNeeded',rapierCalculatedAmount); this.set('cheapestCost',this.get('rapierTotalCost')); this.set('cheapestName',"Rapier");
      }
      else if (this.get('vectorTotalCost') === lc){
        this.set('cheapestNeeded',vectorCalculatedAmount); this.set('cheapestCost',this.get('vectorTotalCost')); this.set('cheapestName',"Vector");
      }
      else if (this.get('swivelTotalCost') === lc){
        this.set('cheapestNeeded',swivelCalculatedAmount); this.set('cheapestCost',this.get('swivelTotalCost')); this.set('cheapestName',"Swivel");
      }
      else if (this.get('reliantTotalCost') === lc){
        this.set('cheapestNeeded',reliantCalculatedAmount); this.set('cheapestCost',this.get('reliantTotalCost')); this.set('cheapestName',"Reliant");
      }
      else if (this.get('terrierTotalCost') === lc){
        this.set('cheapestNeeded',terrierCalculatedAmount); this.set('cheapestCost',this.get('terrierTotalCost')); this.set('cheapestName',"Terrier");
      }
      else if (this.get('twinboarTotalCost') === lc){
        this.set('cheapestNeeded',twinboarCalculatedAmount); this.set('cheapestCost',this.get('twinboarTotalCost')); this.set('cheapestName',"Twinboar");
      }
      else if (this.get('mainsailTotalCost') === lc){
        this.set('cheapestNeeded',mainsailCalculatedAmount); this.set('cheapestCost',this.get('mainsailTotalCost')); this.set('cheapestName',"Mainsal");
      }
      else if (this.get('skipperTotalCost') === lc){
        this.set('cheapestNeeded',skipperCalculatedAmount); this.set('cheapestCost',this.get('skipperTotalCost')); this.set('cheapestName',"Skipper");
      }
      else if (this.get('poodleTotalCost') === lc){
        this.set('cheapestNeeded',poodleCalculatedAmount); this.set('cheapestCost',this.get('poodleTotalCost')); this.set('cheapestName',"Poodle");
      }
      else if (this.get('mammothTotalCost') === lc){
        this.set('cheapestNeeded',mammothCalculatedAmount); this.set('cheapestCost',this.get('mammothTotalCost')); this.set('cheapestName',"Mammoth");
      }
      else if (this.get('rhinoTotalCost') === lc){
        this.set('cheapestNeeded',rhinoCalculatedAmount); this.set('cheapestCost',this.get('rhinoTotalCost')); this.set('cheapestName',"Rhino");
      }
      else{
        this.set('cheapestNeeded',-1); this.set('cheapestCost',-1); this.set('cheapestName',"None");
      }
      
      this.set('showRecommendations',true);
    }
    else{
      // Clears up value due to bad search...
      
      // Radial Mounted Engine
      this.set('thudAmount',-1); this.set('thudTotalCost',-1);
      this.set('twitchAmount',-1); this.set('twitchTotalCost',-1);
      this.set('spiderAmount',-1); this.set('spiderTotalCost',-1);
      // Tiny Mounted Engine
      this.set('sparkAmount',-1); this.set('sparkTotalCost',-1);
      this.set('antAmount',-1); this.set('antTotalCost',-1);
      // Small Mounted Engine 
      this.set('nervAmount',-1); this.set('nervTotalCost',-1);
      this.set('dartAmount',-1); this.set('dartTotalCost',-1);
      this.set('rapierAmount',-1); this.set('rapierTotalCost',-1);
      this.set('vectorAmount',-1); this.set('vectorTotalCost',-1);
      this.set('swivelAmount',-1); this.set('swivelTotalCost',-1);
      this.set('reliantAmount',-1); this.set('reliantTotalCost',-1);
      this.set('terrierAmount',-1); this.set('terrierTotalCost',-1);
      // Large Mounted Engine
      this.set('twinboarAmount',-1); this.set('twinboarTotalCost',-1);
      this.set('mainsailAmount',-1); this.set('mainsailTotalCost',-1);
      this.set('skipperAmount',-1); this.set('skipperTotalCost',-1);
      this.set('poodleAmount',-1); this.set('poodleTotalCost',-1);
      // Extra Large Mounted Engine
      this.set('mammothAmount',-1); this.set('mammothTotalCost',-1);
      this.set('rhinoAmount',-1); this.set('rhinoTotalCost',-1);
      
      // Recommend engines
      this.set('lowestAmountNeeded',-1); this.set('lowestAmountCost',-1); this.set('lowestAmountName',"None");
      this.set('cheapestNeeded',-1); this.set('cheapestCost',-1); this.set('cheapestName',"None");
      this.set('showRecommendations',false);
      
    }
  })
});
