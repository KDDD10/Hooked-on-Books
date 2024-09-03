// src/pages/Home/Home.js
import React, { useState, useEffect } from 'react';
import Hero from '../../components/Hero/Hero';
import FeaturedInspiration from '../../components/FeaturedInspiration/FeaturedInspiration';
import './Home.css';
import FeaturedBooks from '../../components/FeaturedBooks/FeaturedBooks';
import Header from '../../components/Header/Header';
import ContactUs from '../../components/Contactus/Contactus';

const Home = () => {
  const [inspirations, setInspirations] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Replace this with your actual API call
    const fetchInspirations = async () => {
      try {
        // const response = await fetch('your-api-endpoint');
        // const data = await response.json();
        // setInspirations(data);

        // Temporary mock data
        setInspirations([
          { name: 'ALEXANDRIA OCASIA-CORTEZ', imageUrl: 'https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D' },
          { name: 'ANTHONY BOURDAIN', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D' },
          { name: 'BARACK OBAMA', imageUrl: 'https://media.istockphoto.com/id/2129875225/photo/a-smiling-adult-man-walked-out-of-the-office-building-after-finishing-work.webp?b=1&s=612x612&w=0&k=20&c=BawL-9fWpFmhJx658SuLBxoYjiiKnnc7ZjLzFd9o-OI=' },
          { name: 'BEN HOROWITZ', imageUrl: 'https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D' },
          { name: 'BILL GATES', imageUrl: 'https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHVzZXJ8ZW58MHx8MHx8fDA%3D' },
          { name: 'ELON MUSK', imageUrl: 'https://media.istockphoto.com/id/2129875225/photo/a-smiling-adult-man-walked-out-of-the-office-building-after-finishing-work.webp?b=1&s=612x612&w=0&k=20&c=BawL-9fWpFmhJx658SuLBxoYjiiKnnc7ZjLzFd9o-OI=' },
          { name: 'SATYA NADELLA', imageUrl: 'https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D' },
          { name: 'SETH GODIN', imageUrl: 'https://media.istockphoto.com/id/2129875225/photo/a-smiling-adult-man-walked-out-of-the-office-building-after-finishing-work.webp?b=1&s=612x612&w=0&k=20&c=BawL-9fWpFmhJx658SuLBxoYjiiKnnc7ZjLzFd9o-OI=' },
        ]);
      } catch (error) {
        console.error('Error fetching inspirations:', error);
      }
    };
    const fetchBooks = async () => {
        try {
          // Replace this with your actual API call in the future
          setBooks([
            {
              title: 'Half of a Yellow Sun',
              author: 'Chimamanda Ngozi Adichie',
              imageUrl: 'https://images.unsplash.com/photo-1521123845560-14093637aa7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww'
            },
            {
              title: 'One Hundred Years of Solitude',
              author: 'Gabriel Garcia Marquez',
              imageUrl: 'https://images.unsplash.com/photo-1535398089889-dd807df1dfaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww'
            },
            {
              title: '1984',
              author: 'George Orwell',
              imageUrl: 'https://images.unsplash.com/photo-1511108690759-009324a90311?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D'
            }
          ]);
        } catch (error) {
          console.error('Error fetching books:', error);
        }
      };
  
      fetchBooks();
  
    fetchInspirations();
  }, []);
  

  return (
    <div className="home">
      <Hero />
      {/* <FeaturedInspiration inspirations={inspirations} /> */}
      <FeaturedBooks books={books} />
      <ContactUs/>

    </div>
  );
};

export default Home;