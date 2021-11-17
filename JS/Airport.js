const PassengerPlane = require('./Planes/PassengerPlane');
const MilitaryPlane = require('./Planes/MilitaryPlane');
const MilitaryType = require('./models/MilitaryType');
const ExperimentalPlane = require('./Planes/ExperimentalPlane');

class Airport {

    static print(planes) {
        return JSON.stringify(planes);
    }

    constructor(planes) {
        this.planes = planes;
    }

    getPassengerPlanes() {
         const passengerPlanes = [];
         this.planes.forEach(plane => {
             if (plane instanceof PassengerPlane) {
                 passengerPlanes.push(plane);
             }
         });
         return passengerPlanes;
    }

    getExperimentalPlanes() {
        const experimentalPlanes  = [];
        this.planes.forEach(plane => {
            if (plane instanceof ExperimentalPlane) {
                experimentalPlanes.push(plane);
            }
        });
        return experimentalPlanes;
    }

    getMilitaryPlanes() {
        const militaryPlanes = [];
        this.planes.forEach(plane => {
            if (plane instanceof MilitaryPlane) {
                militaryPlanes.push(plane);
            }
        });
        return militaryPlanes;
    }

    getPassengerPlaneWithMaxPassengersCapacity() {
        const passengerPlanes = this.getPassengerPlanes();
        let planeWithMaxCapacity = passengerPlanes[0];
        passengerPlanes.forEach(passengerPlane => {
            if (passengerPlane.getPassengersCapacity() > planeWithMaxCapacity.getPassengersCapacity()) {
                planeWithMaxCapacity = passengerPlane;
            }
        });
        return planeWithMaxCapacity;
    }

    getTransportMilitaryPlanes(){
        const transportMilitaryPlanes = [];
        this.getMilitaryPlanes().forEach(militaryPlane => {
            if (militaryPlane.getMilitaryType() === MilitaryType.TRANSPORT) {
                transportMilitaryPlanes.push(militaryPlane);
            }
        });
        return transportMilitaryPlanes;
    }

    getBomberMilitaryPlanes() {
        const bomberMilitaryPlanes = [];
        this.getMilitaryPlanes().forEach(militaryPlane => {
            if (militaryPlane.getMilitaryType() === MilitaryType.BOMBER) {
                bomberMilitaryPlanes.push(militaryPlane);
            }
        });
        return bomberMilitaryPlanes;
    }

    sortByMaxDistance() {
        this.planes.sort((a, b) => a.getMaxFlightDistance() > b.getMaxFlightDistance() ? 1 : -1);
        return this;
    }

    sortByMaxSpeed() {
        this.planes.sort((a, b) => a.getMaxSpeed() > b.getMaxSpeed() ? 1 : -1);
        return this;
    }

    sortByMaxLoadCapacity() {
        this.planes.sort((a, b) => a.getMaxLoadCapacity() > b.getMaxLoadCapacity() ? 1 : -1);
        return this;
    }

    getPlanes() {
        return this.planes;
    }
}

module.exports = Airport;
