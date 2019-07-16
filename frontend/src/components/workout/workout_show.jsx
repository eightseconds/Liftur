import React from 'react'
import './workout_show.css'

class WorkoutShow extends React.Component {

    render() {
        return (
            <div className='workout-show-div'>
                <ul className='all-info-list'>
                    {this.props.workout.exercises.map( exercise => {
                        let idx = this.props.workout.exercises.indexOf(exercise)
                        if(exercise === 'Rest Day') {
                            return <h4 className='exercise-title'>{exercise}</h4>
                        }
                        return (
                            <li>

                                <div className='exercise-description-div'>
                                    <h4 className='exercise-title'>{exercise}</h4>
                                    <div className='ex-instructions'>
                                        <h5>{this.props.workout.sets[idx]} Sets</h5>
                                        <ul className='reps-list'>
                                            {this.props.workout.reps[idx].map(reps =>{
                                                return (
                                                    <li>{reps}x</li>
                                                )
                                            })}
                                        </ul>
                                        
                                        <ul className='weights-list'>
                                            {this.props.workout.weights[idx].map(weights => {
                                                if(weights === '') {
                                                    return <li></li>
                                                }
                                                return (
                                                    <li>{weights} lbs</li>
                                                )
                                            })}
                                        </ul>
                                    </div>

                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default WorkoutShow;