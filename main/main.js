module.exports = function main(inputs) {
	if(inputs.distance <= 2){
		return Math.round(6+0.25*inputs.parkTime);
	}
	return Math.round((inputs.distance > 2 && inputs.distance <= 8) ? (6+0.8*(inputs.distance-2)+inputs.parkTime*0.25) : (10.8+1.2*(inputs.distance-8)+inputs.parkTime*0.25));   
};