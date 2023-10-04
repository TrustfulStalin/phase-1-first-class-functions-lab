// Code your solution in this file!
function returnFirstTwoDrivers(roman)
{
 
  let drivers = [...roman.slice(0,2)];

  return drivers;
}

function returnLastTwoDrivers(roman)
{

  let drivers = [...roman.slice(2,4)];

  return drivers;


}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int)
{
  return function (fare = 5) {
    return 5 * int;
  }
}

const fareDoubler = function (fare) {
  return fare * 2;
}

const fareTripler = function (fare) {
  return fare * 3;
}

function selectDifferentDrivers(driversArray, fn) {
  return fn(driversArray);
}
