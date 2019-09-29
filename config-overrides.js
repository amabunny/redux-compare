const { override, addBabelPlugin } = require('customize-cra')

module.exports = override(
  addBabelPlugin(['import', {
    libraryName: "antd",
    style: "css"
  }])
)
