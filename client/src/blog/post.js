import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import * as ACTIONS from '../store/actions/actions';
import axios from 'axios';
import history from '../utils/history';

import Button from '@material-ui/core/Button';

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";


const RenderPosts = post => (
    <div className="CardStyles">
    <Card >
      <CardHeader
        title={<Link to={{pathname:'/post/' + post.post.pid, state: {post}}}>
                  {post.post.title}
                </Link> }
        subheader={
            <div className="FlexColumn">
              <div className="FlexRow">
              {  post.post.date_created }
              </div>
             
            </div>
            }
          />
      <br />
      <CardContent>
        <span style={{overflow: 'hidden' }}> {post.post.body} </span>
      </CardContent>
    </Card>
    </div>
)


class Post extends Component {
    constructor(props) {
        super(props)
  
      this.state = {
        posts: [],
        opacity: 0,
      }
    }

    componentDidMount() {
        this.handleTransition()
        axios.get('/api/get/allposts')
          .then(res => this.props.set_posts(res.data))
          .then(() => this.add_posts_to_state(this.props.posts))
          .catch((err) => console.log(err))
      }
    
    
  handleTransition = () => {
    setTimeout(() => this.setState({opacity: 1}), 400 )
  }

  add_posts_to_state = (posts) => {
    this.setState({posts: [...posts]})
  }

    render() {
        return (
            <div>
                 <div style={{opacity: this.state.opacity, transition: 'opacity 2s ease'}}>
                <br />
                <Link to="/addpost">
                    <Button color="primary">Add Post</Button>
                </Link>
                </div>
                <div style={{opacity: this.state.opacity, transition: 'opacity 2s ease'}}>
                <h1>Posts</h1>
              <div>
                            {
                                this.props.posts
                                ? this.props.posts.map(post => 
                                    <RenderPosts key={post.pid} post={post} />   
                                )
                                : null
                            }
                </div>
            </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { posts: state.posts_reducer.posts }
}

function mapDispatchToProps(dispatch) {
    return { set_posts: (posts) => dispatch(ACTIONS.fetch_db_posts(posts)) }
}

export default connect(mapStateToProps, mapDispatchToProps) (Post)