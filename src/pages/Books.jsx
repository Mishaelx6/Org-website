import { useState, useEffect } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import CTA from '../components/CTA';

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/books/')
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Error fetching books:', error));
  }, []);

  const handleRead = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  const handleDownload = async (bookId) => {
    try {
      const response = await fetch('http://localhost:8000/api/checkout/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ book_id: bookId }),
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url; // Redirect to Paystack checkout
      } else {
        alert('Error: ' + data.error);
      }
    } catch (error) {
      console.error('Error initiating checkout:', error);
    }
  };

  return (
    <div>
    <div className="container mx-auto mt-5 p-6 pt-20 h-[70vh]">
      <h1 className="text-3xl font-bold text-primary">Books by Dr. Samuel Owokoniran</h1>
      <p className="mt-4">Explore transformative books written by Dr. Samuel Owokoniran, available for online reading or purchase.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {books.map((book) => (
          <Card
            key={book.id}
            title={book.title}
            description={`Price: ₦${book.price}`}
            image={book.cover_image || '/images/image4.jpg'}
            actionText="Read Now"
            onAction={() => handleRead(book.pdf_file)}
            extraButton={<Button text="Download" primary={false} onClick={() => handleDownload(book.id)} />}
          />
        ))}
      </div>
     
    </div>
     <CTA/></div>
  );
}

export default Books;