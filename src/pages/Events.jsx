import { useState, useEffect } from 'react';
import Card from '../components/Card';

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/events/')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-primary">Events</h1>
      <p className="mt-4">Join Dr. Samuel Owokoniran at upcoming events and workshops.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {events.map((event) => (
          <Card
            key={event.id}
            title={event.title}
            description={`${event.description}\nDate: ${new Date(event.date).toLocaleDateString()}\nLocation: ${event.location}`}
            image="/images/image6.jpeg"
            actionText="Learn More"
            onAction={() => alert('Event details coming soon!')}
          />
        ))}
      </div>
    </div>
  );
}

export default Events;