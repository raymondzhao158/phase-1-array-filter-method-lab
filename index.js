// Code your solution here
const { stringMatching } = require("expect");

function findMatching(drivers, str){
    return drivers.filter(n => n.toLowerCase() === str.toLowerCase()
)};

function fuzzyMatch(drivers, str){
    return drivers.filter(n => n.slice(0, str.length).toLowerCase() === str.toLowerCase())
};

function matchName(drivers, str){
    return drivers.filter(n => n.name.toLowerCase() === str.toLowerCase());
}