import React, { useContext} from 'react';
import axios from 'axios';

import history from '../utils/history';
import Context from '../utils/context';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'



const AddPost = () => {
  const context = useContext(Context)

  const handleSubmit = (event) => {
    event.preventDefault()
    const user_id = context.dbProfileState[0].uid
    const username = context.dbProfileState[0].username
    const data = {title: event.target.title.value,
                  body: event.target.body.value,
                  username: username,
                  uid: user_id}

    axios.post('/api/post/posttodb', data)
      .then(response => console.log(response))
      .catch((err) => console.log(err))
      .then(setTimeout(() => history.replace('/'), 700) )
  }


    return(
      <div>
        <form onSubmit={handleSubmit}>
          <TextField
            id='title'
            label='Title'
            margin='normal'
            />
          <br />
          <TextField
            id='body'
            label='Body'
            multiline
            rowsMax='4'
            margin="normal"
            />
           <br />
           <button type='submit'> Submit </button>
           </form>
        <br />
        <button onClick={() => history.replace('/posts')}> Cancel </button>
      </div>
  )}

function mapStateToProps(state){
   return{
     db_profile: state.auth_reducer.db_profile
   }
}

export default connect(mapStateToProps)(AddPost);