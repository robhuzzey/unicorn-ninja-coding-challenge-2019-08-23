const unobstructedWestViewCount = buildings => {
  return buildings.reverse().reduce((acc, curr) => {
    if(curr > acc.lowest) {
    acc.count = acc.count +1
    acc.lowest = curr
    }
    return acc
  }, {lowest: 0, count: 0}).count
}

module.exports = { unobstructedWestViewCount }
