import React, { useState, useRef, useEffect } from 'react';
import './BookingCalendar.css';

const weeks = [
  { label: 'June 7-14', price: 'BOOKED', available: false },
  { label: 'June 14-21', price: 'BOOKED', available: false },
  { label: 'June 21-28', price: 'BOOKED', available: false },
  { label: 'June 28-July 5', price: 'BOOKED', available: false },
  { label: 'July 5-12', price: 'BOOKED', available: false },
  { label: 'July 12-19', price: 6800, available: true },
  { label: 'July 19-26', price: 'BOOKED', available: false },
  { label: 'July 26-Aug 2', price: 'BOOKED', available: false },
  { label: 'Aug 2-9', price: 'BOOKED', available: false },
  { label: 'Aug 9-16', price: 'BOOKED', available: false },
  { label: 'Aug 16-23', price: 'BOOKED', available: false },
  { label: 'Aug 23-30', price: 7300, available: true },
  { label: 'Aug 30-Sep 6', price: 'BOOKED', available: false },
  { label: 'Sep 6-13', price: 'BOOKED', available: false },
  { label: 'Sep 13-20', price: 'BOOKED', available: false },
  { label: 'Sep 20-27', price: 'BOOKED', available: false },
];

const maxGuests = 8;

function BookingForm({ selectedWeeks, guests, weekDetails, onBack }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Compose week details for email
    const weekLines = selectedWeeks.map((w, i) => `Week ${i + 1}: ${w} ($${weekDetails[w]})`).join('%0D%0A');
    const mailtoLink = `mailto:info@searench.com?subject=Booking Request for ${selectedWeeks.join(", ")}&body=Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0APhone: ${form.phone}%0D%0AMessage: ${form.message}%0D%0A%0D%0ABooking Details:%0D%0A${weekLines}%0D%0AGuests: ${guests.adults + guests.children}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="booking-form-container">
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" required placeholder="John Smith" value={form.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required placeholder="john@example.com" value={form.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" required placeholder="(555) 555-5555" value={form.phone} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message (Optional)</label>
          <textarea id="message" name="message" rows={4} placeholder="Any special requests or questions?" value={form.message} onChange={handleChange}></textarea>
        </div>
        <div className="booking-details">
          <h4>Booking Details</h4>
          {selectedWeeks.length > 0 ? (
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {selectedWeeks.map((w, i) => (
                <li key={w} style={{ marginBottom: 4 }}>
                  <strong>Week {i + 1}:</strong> {w} {weekDetails[w] ? `($${weekDetails[w]})` : ''}
                </li>
              ))}
            </ul>
          ) : (
            <div>No weeks selected.</div>
          )}
          <div style={{ marginTop: 8 }}>
            <span><strong>Number of Guests:</strong> {guests.adults + guests.children}</span>
          </div>
        </div>
        <button type="submit" className="submit-btn">Send Booking Request</button>
        <button type="button" className="submit-btn" style={{marginTop: '1rem', background: '#ccc', color: '#222'}} onClick={onBack}>Back</button>
      </form>
    </div>
  );
}

export default function BookingCalendar() {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [selectedWeeks, setSelectedWeeks] = useState([]); // array of week labels
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  // Map week label to price for summary and form
  const weekDetails = weeks.reduce((acc, w) => {
    if (w.available && typeof w.price === 'number') acc[w.label] = w.price;
    return acc;
  }, {});

  // Scroll to form when shown
  useEffect(() => {
    if (showForm) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const bookingHeader = document.querySelector('.booking-header h2');
        if (bookingHeader) {
          bookingHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [showForm]);

  const totalGuests = adults + children;

  // Toggle week selection
  const handleWeekClick = (label, available, price) => {
    if (!available || typeof price !== 'number') return;
    setSelectedWeeks((prev) =>
      prev.includes(label)
        ? prev.filter((w) => w !== label)
        : [...prev, label]
    );
  };

  // Calculate total price for selected weeks
  const totalPrice = selectedWeeks.reduce((sum, w) => sum + (weekDetails[w] || 0), 0);
  const platformTotal = Math.round(totalPrice * 1.17);
  const savings = platformTotal - totalPrice;

  return !showForm ? (
    <div className="booking-calendar" id="booking-calendar">
      <div className="booking-header">
        <h2>Check Availability & Book</h2>
        <p>Weekly rentals Saturday to Saturday • Select your preferred week(s)</p>
      </div>
      <div className="booking-form">
        {/* Guest Selection */}
        <div className="guest-selector">
          <h4>👥 Guests (Max 8)</h4>
          <div className="guest-controls">
            <div className="guest-type">
              <span>Adults</span>
              <div className="counter">
                <button className="guest-btn" onClick={() => setAdults(a => Math.max(0, a - 1))} disabled={adults <= 0}>-</button>
                <span className="guest-count">{adults}</span>
                <button className="guest-btn" onClick={() => setAdults(a => (a + children < maxGuests ? a + 1 : a))}>+</button>
              </div>
            </div>
            <div className="guest-type">
              <span>Children</span>
              <div className="counter">
                <button className="guest-btn" onClick={() => setChildren(c => Math.max(0, c - 1))} disabled={children <= 0}>-</button>
                <span className="guest-count">{children}</span>
                <button className="guest-btn" onClick={() => setChildren(c => (adults + c < maxGuests ? c + 1 : c))}>+</button>
              </div>
            </div>
          </div>
          <p className="guest-note">
            Total: <span>{totalGuests}</span> of 8 guests
          </p>
        </div>
        {/* Week Selection */}
        <div className="week-selector">
          <h4>🗓️ Available Weeks</h4>
          <div className="months-grid">
            {weeks.map(({ label, price, available }) => (
              <div
                key={label}
                className={`week-option${selectedWeeks.includes(label) ? ' selected' : ''}`}
                data-available={available}
                style={{ pointerEvents: available ? 'auto' : 'none' }}
                onClick={() => handleWeekClick(label, available, price)}
              >
                <div className="week-info">
                  <span className="week-dates">{label}</span>
                  <span className={`week-status ${available ? 'available' : 'booked'}`}>{available ? 'Available' : 'Booked'}</span>
                </div>
                <div className="week-price">{typeof price === 'number' ? `$${price.toLocaleString()}` : price}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Booking Summary */}
        {selectedWeeks.length > 0 && (
          <div className="booking-summary" id="booking-summary">
            <h4>📋 Booking Summary</h4>
            <div className="summary-details">
              <div className="summary-line">
                <span>Weeks:</span>
                <span>{selectedWeeks.join(', ')}</span>
              </div>
              <div className="summary-line">
                <span>Guests:</span>
                <span>{totalGuests}</span>
              </div>
              <div className="summary-line">
                <span>Platform Rate:</span>
                <span className="crossed-out">${platformTotal}</span>
              </div>
              <div className="summary-line highlight">
                <span>Direct Booking Rate:</span>
                <span>{`$${totalPrice}`}</span>
              </div>
              <div className="summary-line savings">
                <span>You Save:</span>
                <span>{`$${savings}`}</span>
              </div>
            </div>
          </div>
        )}
        {/* Book Now Button */}
        <button
          className="book-now-btn"
          disabled={selectedWeeks.length === 0}
          onClick={() => setShowForm(true)}
        >
          {selectedWeeks.length > 0 ? 'Continue to Booking Form' : 'Select Week(s) to Book'}
        </button>
        <p className="booking-disclaimer">
          <em>
            *Clicking "Send Booking Request" will open your email client with booking details. Security deposit of $1,000 required. All bookings subject to availability confirmation.
          </em>
        </p>
      </div>
    </div>
  ) : (
    <div ref={formRef}>
      <BookingForm
        selectedWeeks={selectedWeeks}
        guests={{ adults, children }}
        weekDetails={weekDetails}
        onBack={() => setShowForm(false)}
      />
    </div>
  );
} 