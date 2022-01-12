

function findMatching(drivers, match) {
    return drivers.filter(
        (driverMatch) => driverMatch.toLowerCase() === match.toLowerCase()
    );
}
function fuzzyMatch(drivers, beginningMatch) {
    return drivers.filter(
        (driverMatch) => driverMatch.toLowerCase().indexOf(beginningMatch.toLowerCase()) === 0
    );
}
function matchName(drivers, driverName){
    return drivers.filter((data) => data.name === driverName);
}