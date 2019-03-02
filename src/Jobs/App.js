import React, {Component} from "react"
import {Button, ButtonGroup} from "react-bootstrap"

import Job from './Job'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      jobCount: 0,
      jobs: []
    }
  }

  handleJobCount(jobCount) {
    const {
      jobs,
    } = this.state

    let newJobs = jobs

    if (jobs.length < jobCount) {
      newJobs = [
        ...jobs,
        {
          id: jobCount,
          occupationId: null,
          companyName: '',
          income: 0,
        }
      ]
    }

    this.setState({
      jobCount,
      jobs: newJobs,
    })
  }

  _onChangeField = (jobId, fieldName, fieldValue) => {
    const {
      jobs
    } = this.state

    this.setState({
      jobs: jobs.map(currentJob => {
        if (currentJob.id === jobId) {
          return {
            ...currentJob,
            [fieldName]: fieldValue
          }
        }
        return currentJob
      })
    })
  }

  render() {
    const {
      jobCount,
      jobs,
    } = this.state

    return (
      <div>
        <ButtonGroup>
          <Button onClick={this.handleJobCount.bind(this, 0)} className={jobCount === 0 ? "selected" : null}>0</Button>
          <Button onClick={this.handleJobCount.bind(this, 1)} className={jobCount === 1 ? "selected" : null}>1</Button>
          <Button onClick={this.handleJobCount.bind(this, 2)} className={jobCount === 2 ? "selected" : null}>2</Button>
          <Button onClick={this.handleJobCount.bind(this, 3)} className={jobCount === 3 ? "selected" : null}>3</Button>
        </ButtonGroup>
        {jobs
          .reduce(
            (acc, job, index) => {
              if (index < jobCount) {
                return [
                  ...acc, 
                  <Job
                    key={job.id.toString()}
                    {...job}
                    onChangeOccupation={this._onChangeField.bind(this, job.id, 'occupationId')}
                    onChangeCompanyName={this._onChangeField.bind(this, job.id, 'companyName')}
                    onChangeIncome={this._onChangeField.bind(this, job.id, 'income')}
                  />
                ]
              }

              return acc
            },
            []
          )}
      </div>
    )
  }
}
