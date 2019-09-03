import _ from 'lodash'

function toSession(json) {
  return {
    id: json.id,
    eventDate: json.event_date,
    startTime: json.start_time,
    endTime: json.end_time,
    room: json.room,
    category: json.category,
    title: json.title,
    description: json.description,
    timeline: json.timeline,
    speakers: buildSpeakers(json)
  }
}

function buildSpeakers(json) {
  const filtered = _.pickBy(json, (v, k) => {
    return /^sp\d_name$/.test(k) && !_.isNil(v)
  })

  return _.map(Object.keys(filtered), (k) => {
    const prefix = k.substr(0, 3)
    return {
      name: json[k],
      profile: json[`${prefix}_profile`],
      picture: json[`${prefix}_picture`]
    }
  })
}

export { toSession }
