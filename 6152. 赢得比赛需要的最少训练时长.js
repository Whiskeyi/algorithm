let initialEnergy = 1;
let initialExperience = 1;
let energy = [1, 1, 1, 1];
let experience = [1, 1, 1, 50];

var minNumberOfHours = function (initialEnergy, initialExperience, energy, experience) {
    const trainEnergy = (initialEnergy, energy) => {
        let energyTotal = energy.reduce((item, energyTotal) => item + energyTotal);
        if (initialEnergy > energyTotal) return 0
        return energyTotal + 1 - initialEnergy
    } // 4
    const trainExperience = (initialExperience, experience) => {
        let rz = 0;
        for (let i = 0; i < experience.length; i++) {
            if (initialExperience <= experience[i]) {
                rz += experience[i] - initialExperience + 1;
                initialExperience = experience[i] + 1;
            }
            initialExperience += experience[i];
        }
        return rz;
    }
    // 48
    return trainEnergy(initialEnergy, energy) + trainExperience(initialExperience, experience)
};

console.log(minNumberOfHours(initialEnergy, initialExperience, energy, experience))