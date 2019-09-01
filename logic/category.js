import _ from 'lodash'

const categories = {
  'プレゼンテーション': { class: 'presen', label: 'プレゼン' },
  'ワークショップ': { class: 'ws', label: 'WS'},
  'パネルディスカッション': { class: 'panel-dis', label: 'パネル' },
  '基調講演': { class: 'key', label: 'KeyNote' }
}

function toCategory(value) {
  return _.get(categories, value, { class: 'other', label: 'その他' })
}

export { toCategory }
