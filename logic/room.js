const roomMap = {
  '食神': { anchor: 'syokujin', icon: 'rollcake' },
  '5号館ミレニアムハウス': { anchor: '5', icon: 'pancake' },
  '8号館8-106': { anchor: '8', icon: 'cookie' },
  '8号館8-107': { anchor: '8', icon: 'popcorn' },
  '8号館8-109': { anchor: '8', icon: 'icecandy' },
  '8号館8-111': { anchor: '8', icon: 'cupcake' },
  '8号館8-112': { anchor: '8', icon: 'candy' },
  '8号館8-116': { anchor: '8', icon: 'crepe-g' },
  '8号館 The Stage': { anchor: '8', icon: 'sundae' },
  '8号館 The WorkShop': { anchor: '8', icon: 'pudding' },
  '8号館 Interactive Space': { anchor: '8', icon: 'softcream' },
  '8号館 FocusSpace': { anchor: '8', icon: 'chocolate' }
}

function iconPath(room) {
  return `img/sweets_ico/${roomMap[room].icon}.svg`
}

function linkWithAnchor(room) {
  return `/access#map-${roomMap[room].anchor}`
}

function rooms() {
  return roomMap
}

export { iconPath, linkWithAnchor, rooms }
