import React from 'react'
import {Row, Col} from 'react-bootstrap'
import { graphql  } from 'gatsby'
import { BiTime, BiCalendar } from 'react-icons/bi';
import moment from 'moment'

import Layout from '../components/layout'

import BlogStyles from '../styles/blog.module.scss'

export const query = graphql`
  query ($slug: String!) {
    markdownRemark (fields:{ slug: { eq: $slug  }  }){
      frontmatter {
        title
        date
      }
      timeToRead
      html
    }
  }`

const BlogPost = (props) => {
  return (
    <Layout>
      <h1 className='display-3'>{props.data.markdownRemark.frontmatter.title}</h1>
      <Row className='mb-5'>
        <Col className={BlogStyles.blogDateTime}>
          <BiCalendar /> {moment(props.data.markdownRemark.frontmatter.date).format('DD. MMMM YYYY')}  &bull;  <BiTime /> {props.data.markdownRemark.timeToRead} min read
        </Col>
      </Row>

      <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
    </Layout>

  )

}

export default BlogPost
