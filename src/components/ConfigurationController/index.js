import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContentCheckbox = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="config-controller-container">
          <h1 className="layout-heading">Layout</h1>
          <div className="input-container">
            <input
              type="checkbox"
              id="contentBox"
              checked={showContent}
              className="input-element"
              onChange={onChangeContentCheckbox}
            />

            <label htmlFor="contentBox" className="label-element">
              Content
            </label>
          </div>
          <div className="input-container">
            <input
              type="checkbox"
              id="leftNavbar"
              checked={showLeftNavbar}
              className="input-element"
              onChange={onChangeLeftNavbar}
            />
            <label htmlFor="leftNavbar" className="label-element">
              Left Navbar
            </label>
          </div>
          <div className="input-container">
            <input
              type="checkbox"
              id="rightNavbar"
              checked={showRightNavbar}
              className="input-element"
              onChange={onChangeRightNavbar}
            />
            <label htmlFor="rightNavbar" className="label-element">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
