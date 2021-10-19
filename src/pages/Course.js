import React from 'react';
import { CourseContent } from '../components/index';
export default function Course({ course }) {
  return (
    <div>
      <h1>{course.title}</h1>
      <h3>{course.text}</h3>
      <div>
        <span>Rating:{course.rating}</span>
        <span>Students:{course.students}</span>
      </div>
      <img src="" width="500" height="400" />
      <div>
        <span>Created by:{course.author}</span>
      </div>
      <div>
        <span>Last updated on:{course.last_updated}</span>
        <span> {course.language}</span>
      </div>
      <div>
        <h1>Course Content</h1>
        <CourseContent />
        <h1>Requirements</h1>
        <div>
          Very low Investment on Hosting (If you don't have) + You will get
          domain absolutely for FREE
        </div>
        <h1>Description</h1>
        <div>
          Creating your own Personal Brand Website is one of the most powerful
          things you can do for yourself and your personal brand. According to
          the Huffington Post, over 80% of employers Google search applicants
          before inviting them to an interview, and almost 50% of them have said
          they changed their mind based on what they found online. This is only
          trending upwards; this is just the beginning. Most people scramble to
          simply change their Facebook name and remove their drunken photos, and
          while and this may be an effective hiding strategy, you need to ask
          yourself this question: you are competing for a position with tens,
          hundreds, or even thousands of other people. Do you really want to be
          hiding? This is your opportunity to stand out from the crowd. Why do
          you need a personal brand website? Get a job (show exactly what and
          the way you want to) Grow your business (clients can share website
          with other prospective clients) Become a thought leader (can also
          promote your products/services)’ Your creative outlet (showcase
          anything and everything to your audience) Grow your own audience/email
          list (social media come and go/ algorithm change) Monetize your
          website (ads/affiliate/sell own products/services/) People instantly
          get to know you Ownership of site/ Absolute control (how it looks and
          all) Organic Traffic from google Professional Email address Build
          authority Expert/Coach/Consultant/Author/Speaker/Trainer/Business What
          you will learn in this course: How to use WordPress How to use a
          simple drag and drop builder (Elementor) to create a completely unique
          personal website How to create a professional portfolio to showcase
          your work How to easily link all of your social media profiles on your
          website like LinkedIn, YouTube, Instagram, etc. Topics that we will
          cover in the course Set up domain and hosting Install WordPress
          Install Theme Astra Elementor Astra Options Changing picture/text/menu
          Embedding HTML/ Yt vids/Tweets/Social- smash balloon social photo feed
          Google search console Who should take up this course? Students
          Professionals Freelancers Consultant or Anybody who wants to stand out
          from the crowd using a personal brand This course is a great way to
          get started with building your beautiful and professional-looking
          WordPress personal brand website using all FREE resources.
        </div>
        <h1>Who this course is for</h1>
        <div>
          {' '}
          Anyone (college student/professional/freelancer or anybody) who is
          looking to make personal brand website
        </div>
      </div>
    </div>
  );
}
