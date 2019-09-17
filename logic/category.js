import _ from 'lodash'

const categories = {
  'プレゼンテーション': { class: 'presen', label: 'プレゼン<br>テーション' },
  'ワークショップ': { class: 'ws', label: 'ワーク<br>ショップ'},
  'パネルディスカッション': { class: 'panel-dis', label: 'パネル<br>ディスカッション' },
  '基調講演': { class: 'key', label: '基調講演' }
}

function toCategory(value) {
  return _.get(categories, value, { class: 'other', label: 'その他' })
}

export { toCategory }
