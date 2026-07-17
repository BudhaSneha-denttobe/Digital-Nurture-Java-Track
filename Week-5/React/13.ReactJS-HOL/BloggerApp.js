import React, { useState } from 'react';

// --- DATA ARRAYS (As suggested by hints & screenshot) ---

export const books = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11 ', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 }
]; // cite: 5

const courses = [
  { id: 201, cname: 'Angular', date: '4/5/2021' },
  { id: 202, cname: 'React', date: '6/3/2021' }
];

const blogs = [
  { id: 301, title: 'React Learning', author: 'Stephen Biz', body: 'Welcome to learning React!' },
  { id: 302, title: 'Installation', author: 'Schewzdenier', body: 'You can install React from npm.' }
];


// --- MAIN COMPONENT ---

export const BloggerApp = () => {
  // States to control conditional display of sections
  const [showCourses, setShowCourses] = useState(true);
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);

  // --- CONDITIONAL RENDERING METHOD 1: ELEMENT VARIABLES ---[cite: 5]
  
  // bookdet variable using .map() to render multiple child components with keys[cite: 5]
  let bookdet = null;
  if (showBooks) {
    bookdet = (
      <ul style={listStyle}>
        {books.map((book) => (
          <div key={book.id} style={itemStyle}>
            <h3 style={itemHeaderStyle}>{book.bname}</h3>
            <h4 style={itemSubHeaderStyle}>{book.price}</h4>
          </div>
        ))}
      </ul>
    ); // cite: 5
  }

  // coursedet variable for courses list[cite: 5]
  let coursedet = null;
  if (showCourses) {
    coursedet = (
      <ul style={listStyle}>
        {courses.map((course) => (
          <div key={course.id} style={itemStyle}>
            <h3 style={itemHeaderStyle}>{course.cname}</h3>
            <h4 style={itemSubHeaderStyle}>{course.date}</h4>
          </div>
        ))}
      </ul>
    );
  }

  // --- CONDITIONAL RENDERING METHOD 2: TERNARY OPERATOR ---
  // content variable for blogs list[cite: 5]
  const content = showBlogs ? (
    <ul style={listStyle}>
      {blogs.map((blog) => (
        <div key={blog.id} style={itemStyle}>
          <h3 style={itemHeaderStyle}>{blog.title}</h3>
          <h5 style={{ margin: '5px 0', fontSize: '15px', fontWeight: 'bold' }}>{blog.author}</h5>
          <p style={{ margin: '5px 0', fontSize: '14px', color: '#555' }}>{blog.body}</p>
        </div>
      ))}
    </ul>
  ) : null;


  return (
    <div style={containerStyle}>
      
      {/* Dynamic Controls Row (Demonstrating React conditional state-triggers) */}
      <div style={controlsStyle}>
        <button onClick={() => setShowCourses(!showCourses)} style={toggleBtnStyle}>
          Toggle Courses
        </button>
        <button onClick={() => setShowBooks(!showBooks)} style={toggleBtnStyle}>
          Toggle Books
        </button>
        <button onClick={() => setShowBlogs(!showBlogs)} style={toggleBtnStyle}>
          Toggle Blogs
        </button>
      </div>

      {/* Main Blogger Container Grid */}
      <div style={gridStyle}>
        
        {/* Column 1: Course Details (Left Column in screenshot)[cite: 5] */}
        <div className="mystyle1" style={columnStyle}>
          <h1 style={columnHeaderStyle}>Course Details</h1> {/* cite: 5 */}
          
          {/* Render using Element Variable[cite: 5] */}
          {coursedet} 
          
          {/* CONDITIONAL RENDERING METHOD 3: LOGICAL && OPERATOR */}
          {!showCourses && <p style={fallbackStyle}>Courses Section Hidden</p>}
        </div>

        {/* Vertical Divider */}
        <div style={dividerStyle}></div>

        {/* Column 2: Book Details (Middle Column in screenshot)[cite: 5] */}
        <div className="st2" style={columnStyle}>
          <h1 style={columnHeaderStyle}>Book Details</h1> {/* cite: 5 */}
          
          {/* Render using Element Variable[cite: 5] */}
          {bookdet} 
          
          {!showBooks && <p style={fallbackStyle}>Books Section Hidden</p>}
        </div>

        {/* Vertical Divider */}
        <div style={dividerStyle}></div>

        {/* Column 3: Blog Details (Right Column in screenshot)[cite: 5] */}
        <div className="v1" style={columnStyle}>
          <h1 style={columnHeaderStyle}>Blog Details</h1> {/* cite: 5 */}
          
          {/* Render using Ternary result[cite: 5] */}
          {content} 
          
          {!showBlogs && <p style={fallbackStyle}>Blogs Section Hidden</p>}
        </div>

      </div>
    </div>
  );
};


// --- CSS-in-JS STYLES (Aligning to screenshot specifications) ---

const containerStyle = {
  fontFamily: 'sans-serif',
  padding: '20px',
  maxWidth: '1200px',
  margin: '0 auto'
};

const controlsStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '15px',
  marginBottom: '30px',
};

const toggleBtnStyle = {
  padding: '8px 16px',
  backgroundColor: '#f5f6fa',
  border: '1px solid #ccc',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 'bold'
};

const gridStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '10px',
  marginTop: '40px'
};

const columnStyle = {
  flex: 1,
  padding: '0 20px',
  minHeight: '400px'
};

const dividerStyle = {
  width: '5px',
  height: '450px',
  backgroundColor: 'green',
  alignSelf: 'stretch'
};

const columnHeaderStyle = {
  fontSize: '32px',
  fontWeight: 'bold',
  color: '#000',
  marginBottom: '20px'
};

const listStyle = {
  listStyleType: 'none',
  padding: 0,
  margin: 0
};

const itemStyle = {
  marginBottom: '25px',
  textAlign: 'left'
};

const itemHeaderStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#000',
  margin: '0 0 5px 0'
};

const itemSubHeaderStyle = {
  fontSize: '16px',
  fontWeight: 'normal',
  color: '#000',
  margin: '0'
};

const fallbackStyle = {
  color: '#888',
  fontStyle: 'italic',
  marginTop: '20px'
};