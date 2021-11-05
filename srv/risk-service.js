const cds = require("@sap/cds");

module.exports = cds.service.impl( function () {
    
    const { Risks, BussinessPartners } = this.entities
    this.after('READ', Risks, (data) => {
        const risks = Array.isArray(data)? data : [data];
        risks.forEach((risk) => {
            if(risk.impact >= 100000){
                risk.criticality = 1;
            } else {
                risk.criticality = 2;
            }
        });
    });
})
// module.exports =  RiskService;