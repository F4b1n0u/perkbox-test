import React, { PureComponent } from "react"
import PropTypes from 'prop-types'
import { Thumbnail } from "react-bootstrap"

import { OCCUPATIONS } from '../constants'

export default class Job extends PureComponent {
  _hanldeChangeField = (onChange, event) => {
    const {
      target: {
        value,
      }
    } = event

    onChange(value)
  }

  render() {
    const {
      id,
      occupationId,
      companyName,
      income,

      onChangeOccupation,
      onChangeCompanyName,
      onChangeIncome,
    } = this.props

    return (
      <Thumbnail>
        {`Job ${id}`}
        <br />
        <select
          id="occupation-select"
          name="occupation"
          onChange={this._hanldeChangeField.bind(this, onChangeOccupation)}
          defaultValue={occupationId}
        >
          <option
            value={null}
          >
            {'please select an occupation'}
          </option>
          {Object.keys(OCCUPATIONS).map(currentOccupationId => (
            <option
              key={currentOccupationId}
              value={currentOccupationId}
            >
              {OCCUPATIONS[currentOccupationId]}
            </option>
          ))}
        </select>
        
        <br />
        <b>Comapny Name</b>
        <input
          type="text"
          value={companyName}
          onChange={this._hanldeChangeField.bind(this, onChangeCompanyName)}
        />
        
        <br />
        <b>Income</b>
        <input
          type="number"
          value={income}
          onChange={this._hanldeChangeField.bind(this, onChangeIncome)}
        />
      </Thumbnail>
    )
  }
}

Job.defaultProps = {
  occupation: null,
  companyName: '',
  income: 0,
}

Job.propTypes = {
  id: PropTypes.number.isRequired,
  occupation: PropTypes.oneOf([Object.keys(OCCUPATIONS)]),
  companyName: PropTypes.string,
  income: PropTypes.number,

  onChangeOccupation: PropTypes.func.isRequired,
  onChangeCompanyName: PropTypes.func.isRequired,
  onChangeIncome: PropTypes.func.isRequired,
}
