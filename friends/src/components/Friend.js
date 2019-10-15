import React from 'react';
import { connect } from 'react-redux';

const Friend = props => {
    console.log('these are the props passed from Friend', props)

    return (
        <div>

        </div>
    )
}

export default connect()(Friend);