'use strict'

module.exports.decorateConfig = config => Object.assign({}, config, {
  css: `
    ${config.css || ''}
    .tabs_list {
      margin-left: 0;
    }
    .tab_tab.tab_first {
      padding-left: 82px;
    }
    .tab_firstActive {
      border-left-width: 0px;
    }
    .tabs_borderShim {
      border-width: 0 !important;
    }
  `
})
