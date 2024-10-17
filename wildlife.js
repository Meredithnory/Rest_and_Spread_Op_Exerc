/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.
function animalNames(...animals) {
	console.log(animals);
}
// animalNames('zebra', 'elephant', 'tiger', 'giraffe', 'bear');
/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.
const protectedAreas = [...forestHabitats, ...savannahHabitats];
// console.log(protectedAreas);
/* Task 3: Update Conservation Status */
const rhinoStatus = {
	population: 500,
	status: "Endangered"
};
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.
const updatedRhinoStatus = { ...rhinoStatus, population: 200 };
// console.log(updatedRhinoStatus);

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
};
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.
const dupeOfLionProf = {
	...lionProfile,
	genetics: "Bottleneck population"
};
// console.log(lionProfile);
// console.log(dupeOfLionProf);
/*
 * Observations: There is no change to the original but the copy is changed for the reason that we added genetic diversity to the object and because 
we created a shallow copy that does not affect the original.
 */

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};

// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.
const copyEcosystemHealth = { ...ecosystemHealth };
copyEcosystemHealth.foodSupply.herbivores = "Sufficient";
console.log(ecosystemHealth);
/*
 * Observations: The copy modified the original.
When modifying a nested property within a shallow copy then that means 
the shallow copy has access to the reference in the original object.
Instead of it being duplicated it actually has the reference inside the same object memory.
 */
