import { Grid } from '@material-ui/core'
import React from 'react'
import TextEditor from './components/TextEditor'
import Videobox from './components/VideoBox'

function Dummy() {
    return (
        <div>
        <Grid container direction="column">
            <TextEditor />
            <Videobox />
        </Grid>
        </div>
    )
}

export default Dummy
